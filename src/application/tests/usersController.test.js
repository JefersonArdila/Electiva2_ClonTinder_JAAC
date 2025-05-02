const request = require('supertest');
const app = require('../../index.js');
const { PrismaClient } = require("../../../generated/prisma");
const prisma = new PrismaClient();

describe('usersController', () => {
  let user1;
  let user2;
  let token1;
  let token2;

  beforeAll(async () => {
    // Limpiar la base de datos antes de las pruebas (opcional)
    await prisma.user.deleteMany();
    await prisma.match.deleteMany();

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

    // Login de ambos usuarios
    const loginResponse1 = await request(app)
      .post('/api/login')
      .send({
        email: 'luis@example.com',
        password: '123456',
      });
    token1 = loginResponse1.body.token;

    const loginResponse2 = await request(app)
      .post('/api/login')
      .send({
        email: 'ana@example.com',
        password: '123456',
      });
    token2 = loginResponse2.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should create a match if both users swipe "LIKE" on each other', async () => {
    // Ambos usuarios dan "LIKE" entre sí
    await request(app)
      .post('/api/swipes')
      .set('Authorization', `Bearer ${token1}`)
      .send({
        targetUserId: user2.id,
        action: 'LIKE',
      });

    await request(app)
      .post('/api/swipes')
      .set('Authorization', `Bearer ${token2}`)
      .send({
        targetUserId: user1.id,
        action: 'LIKE',
      });

    // Verificar si se ha creado un match
    const matches = await prisma.match.findMany({
      where: {
        userAId: user1.id,
        userBId: user2.id,
      },
    });

    expect(matches.length).toBe(1);
  });
});
