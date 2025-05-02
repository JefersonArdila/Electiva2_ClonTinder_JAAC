const request = require('supertest');
const app = require('../../index.js');
const { PrismaClient } = require("../../../generated/prisma");
const prisma = new PrismaClient();

describe('swipesController', () => {
  let user1;
  let user2;
  let token1;

  beforeAll(async () => {
    // Limpiar la base de datos antes de las pruebas (opcional)
    await prisma.user.deleteMany();
    await prisma.swipe.deleteMany();

    // Crear dos usuarios de prueba
    user1 = await prisma.user.create({
      data: {
        firstName: 'Luis',
        lastName: 'Ramírez',
        email: 'luis@example.com',
        password: '123456',
        gender: 'M',
      },
    });
    user2 = await prisma.user.create({
      data: {
        firstName: 'Ana',
        lastName: 'Pérez',
        email: 'ana@example.com',
        password: '123456',
        gender: 'F',
      },
    });

    // Login de user1 para obtener el token
    const loginResponse = await request(app)
      .post('/api/login')
      .send({
        email: 'luis@example.com',
        password: '123456',
      });
    token1 = loginResponse.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should allow user to swipe "LIKE" on another user', async () => {
    const response = await request(app)
      .post('/api/swipes')
      .set('Authorization', `Bearer ${token1}`)
      .send({
        targetUserId: user2.id,
        action: 'LIKE',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Swiped successfully');
  });

  it('should not allow user to swipe on themselves', async () => {
    const response = await request(app)
      .post('/api/swipes')
      .set('Authorization', `Bearer ${token1}`)
      .send({
        targetUserId: user1.id,
        action: 'LIKE',
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('You cannot swipe on yourself');
  });
});
