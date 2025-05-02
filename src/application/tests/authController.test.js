const request = require('supertest');
const express = require('express');
const authRoutes = require('../routes/auth');
const authMiddleware = require('../../infrastructure/middlewares/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock bcrypt
jest.mock('bcryptjs', () => ({
  compare: jest.fn(() => true),
  hash: jest.fn(() => 'hashed-password')
}));

// Mock jwt
jest.mock('jsonwebtoken');

// Mock PrismaClient
jest.mock('../../../generated/prisma', () => {
  const mPrisma = {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
      deleteMany: jest.fn()
    },
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mPrisma) };
});

const { PrismaClient } = require("../../../generated/prisma");
const prisma = new PrismaClient();

// App de prueba
const app = express();
app.use(express.json());
app.use('/api', authRoutes);

// Endpoint protegido para probar el middleware
app.get('/api/protegido', authMiddleware, (req, res) => {
  res.status(200).json({ message: `Hola ${req.user?.id}` });
});

describe('authController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/register', () => {
    it('should register a user successfully', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockResolvedValue({
        id: 1,
        email: 'luis@example.com',
        password: 'hashed-password',
      });

      const response = await request(app)
        .post('/api/register')
        .send({
          firstName: 'Luis',
          lastName: 'Ramírez',
          email: 'luis@example.com',
          password: '123456',
          gender: 'M',
        });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Usuario registrado correctamente');
      expect(prisma.user.create).toHaveBeenCalledTimes(1);
    });

    it('should fail if user already exists', async () => {
      prisma.user.findUnique.mockResolvedValue({ id: 1, email: 'luis@example.com' });

      const response = await request(app)
        .post('/api/register')
        .send({
          firstName: 'Luis',
          lastName: 'Ramírez',
          email: 'luis@example.com',
          password: '123456',
          gender: 'M',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('User already exists');
    });
  });

  describe('POST /api/login', () => {
    it('should login a user and return a token', async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: 2,
        email: 'ana@example.com',
        password: 'hashed-password',
        role: 'USER',
      });

      process.env.JWT_SECRET = 'secret';
      jwt.sign.mockReturnValue('mocked-token');

      const response = await request(app)
        .post('/api/login')
        .send({
          email: 'ana@example.com',
          password: '123456',
        });

      expect(response.status).toBe(200);
      expect(response.body.token).toBeDefined();
    });

    it('should fail login with incorrect email', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .post('/api/login')
        .send({
          email: 'noexiste@example.com',
          password: '123456',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Usuario o contraseña inválida');
    });

    it('should fail login with incorrect password', async () => {
      const bcrypt = require('bcryptjs');
      bcrypt.compare.mockResolvedValue(false);

      prisma.user.findUnique.mockResolvedValue({
        id: 2,
        email: 'ana@example.com',
        password: 'hashed-password',
        role: 'USER',
      });

      const response = await request(app)
        .post('/api/login')
        .send({
          email: 'ana@example.com',
          password: 'contraseñaIncorrecta',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Usuario o contraseña inválida');
    });
  });

  describe('POST /api/logout', () => {
    it('should logout user successfully', async () => {
      const response = await request(app).post('/api/logout');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Sesión cerrada correctamente');
    });
  });

  describe('POST /api/reset-password', () => {
    it('should reset password if user is admin', async () => {
      const response = await request(app)
        .post('/api/reset-password')
        .send({
          user: 'admin',
          newPassword: 'nueva123',
        });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Contraseña restablecida correctamente');
    });

    it('should fail reset password if user is not admin', async () => {
      const response = await request(app)
        .post('/api/reset-password')
        .send({
          user: 'otro',
          newPassword: 'nueva123',
        });

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Usuario no encontrado');
    });
  });

  describe('Middleware: authenticationToken', () => {
    it('should return 401 if no token is provided', async () => {
      const response = await request(app).get('/api/protegido');
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Acceso denegado, no se suministró un token');
    });

    it('should return 403 if token is invalid', async () => {
      jwt.verify.mockImplementation((token, secret, cb) => cb(new Error('Invalid'), null));

      const response = await request(app)
        .get('/api/protegido')
        .set('Authorization', 'Bearer invalidtoken');

      expect(response.status).toBe(403);
      expect(response.body.message).toBe('Token no válido');
    });

    it('should allow access if token is valid', async () => {
      jwt.verify.mockImplementation((token, secret, cb) => cb(null, { id: 123 }));

      const response = await request(app)
        .get('/api/protegido')
        .set('Authorization', 'Bearer validtoken');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Hola 123');
    });
  });
});
