// __tests__/userController.test.js

const { validationResult } = require("express-validator");
const userController = require("../controllers/usersController"); // Ajusta la ruta según tu proyecto
const { PrismaClient } = require("@prisma/client");

// Mock de PrismaClient
jest.mock("@prisma/client", () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      user: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    })),
  };
});

// Mock de express-validator
jest.mock("express-validator", () => ({
  validationResult: jest.fn(),
}));

const mockUser = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  age: 25,
  gender: "Male"
};

describe("UserController", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user", async () => {
    // Mokeamos el resultado del método create de Prisma
    PrismaClient.mock.instances[0].user.create.mockResolvedValue(mockUser);

    const req = {
      body: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        age: 25,
        gender: "Male"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.createUser(req, res);

    expect(PrismaClient.mock.instances[0].user.create).toHaveBeenCalledTimes(1);
    expect(PrismaClient.mock.instances[0].user.create).toHaveBeenCalledWith({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        age: 25,
        gender: "Male",
        role: "USER"
      }
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  it("should return an error if user creation fails due to validation", async () => {
    const req = {
      body: {
        firstName: "",
        lastName: "Doe",
        email: "invalid-email",
        age: "not-a-number",
        gender: "Male"
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Simulamos que la validación falla
    validationResult.mockReturnValue({
      isEmpty: jest.fn().mockReturnValue(false),
      array: jest.fn().mockReturnValue([{ msg: "Invalid data" }])
    });

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: [{ msg: "Invalid data" }] });
  });

  it("should get user by ID", async () => {
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(mockUser);

    const req = {
      params: { id: "1" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.getUserId(req, res);

    expect(PrismaClient.mock.instances[0].user.findUnique).toHaveBeenCalledWith({
      where: { id: "1" }
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  it("should return 404 if user not found", async () => {
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(null);

    const req = {
      params: { id: "2" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.getUserId(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Usuario no encontrado" });
  });

  it("should update an existing user", async () => {
    const updatedUser = { ...mockUser, firstName: "Jane" };
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(mockUser);
    PrismaClient.mock.instances[0].user.update.mockResolvedValue(updatedUser);

    const req = {
      params: { id: "1" },
      body: { firstName: "Jane" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.updateUser(req, res);

    expect(PrismaClient.mock.instances[0].user.update).toHaveBeenCalledWith({
      where: { id: "1" },
      data: { firstName: "Jane" }
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedUser);
  });

  it("should return 404 when updating a non-existent user", async () => {
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(null);

    const req = {
      params: { id: "999" },
      body: { firstName: "Jane" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Usuario no encontrado" });
  });

  it("should delete a user", async () => {
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(mockUser);
    PrismaClient.mock.instances[0].user.delete.mockResolvedValue(mockUser);

    const req = {
      params: { id: "1" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.deleteUser(req, res);

    expect(PrismaClient.mock.instances[0].user.delete).toHaveBeenCalledWith({
      where: { id: "1" }
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  it("should return 404 when deleting a non-existent user", async () => {
    PrismaClient.mock.instances[0].user.findUnique.mockResolvedValue(null);

    const req = {
      params: { id: "999" }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await userController.deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Usuario no encontrado" });
  });
});
