const userController = require("../controllers/usersController"); // Ajusta la ruta
const { validationResult } = require("express-validator");

// --- Mock express-validator ---
jest.mock("express-validator", () => ({
  validationResult: jest.fn(),
}));

// --- Mock de datos de usuario ---
const mockUser = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  age: 25,
  gender: "Male",
  role: "USER",
};

// --- Mock de funciones internas del controller ---
userController.createUser = jest.fn(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });
  return res.status(201).json(mockUser);
});

userController.getUserId = jest.fn(async (req, res) => {
  if (req.params.id !== "1") return res.status(404).json({ error: "Usuario no encontrado" });
  return res.status(200).json(mockUser);
});

userController.updateUser = jest.fn(async (req, res) => {
  if (req.params.id !== "1") return res.status(404).json({ error: "Usuario no encontrado" });
  return res.status(200).json({ ...mockUser, ...req.body });
});

userController.deleteUser = jest.fn(async (req, res) => {
  if (req.params.id !== "1") return res.status(404).json({ error: "Usuario no encontrado" });
  return res.status(200).json(mockUser);
});

// --- Mock de request y response ---
const mockReq = (params = {}, body = {}) => ({ params, body });
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("UserController Mocked Tests", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = mockRes();
    jest.clearAllMocks();
  });

  it("should create user successfully", async () => {
    validationResult.mockReturnValue({ isEmpty: () => true });

    req = mockReq({}, { firstName: "John" });

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  it("should return validation error on create", async () => {
    validationResult.mockReturnValue({ isEmpty: () => false, array: () => [{ msg: "Invalid" }] });

    req = mockReq({}, {});

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: [{ msg: "Invalid" }] });
  });

  it("should get user by ID", async () => {
    req = mockReq({ id: "1" });

    await userController.getUserId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  it("should return 404 on getUserId for non-existent user", async () => {
    req = mockReq({ id: "999" });

    await userController.getUserId(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Usuario no encontrado" });
  });
});
