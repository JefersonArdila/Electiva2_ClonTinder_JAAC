const { createSwipe, getSwipes, getMatches } = require("../controllers/swipesController");
const { PrismaClient } = require("../../../generated/prisma");

jest.mock("../../../generated/prisma", () => {
  const mockPrisma = {
    swipe: {
      create: jest.fn(),
      findFirst: jest.fn(),
      findMany: jest.fn(),
    },
    match: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };
  return { PrismaClient: jest.fn(() => mockPrisma) };
});

const prisma = new PrismaClient();

describe("Swipes Controller", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      user: { id: "user-1" },
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe("createSwipe", () => {
    it("debe devolver error si el usuario hace swipe a sí mismo", async () => {
      req.body = { targetUserId: "user-1", action: "LIKE" };
      await createSwipe(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "No puedes hacer swipe a ti mismo" });
    });

    it("debe registrar un DISLIKE correctamente", async () => {
      req.body = { targetUserId: "user-2", action: "DISLIKE" };
      prisma.swipe.create.mockResolvedValue({ id: "swipe-1" });

      await createSwipe(req, res);

      expect(prisma.swipe.create).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Dislike registrado correctamente.",
        swipe: { id: "swipe-1" },
      });
    });

    it("debe registrar un LIKE sin reciprocidad", async () => {
      req.body = { targetUserId: "user-2", action: "LIKE" };
      prisma.swipe.create.mockResolvedValue({ id: "swipe-1" });
      prisma.swipe.findFirst.mockResolvedValue(null);

      await createSwipe(req, res);

      expect(prisma.swipe.create).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Like registrado, esperando reciprocidad.",
        swipe: { id: "swipe-1" },
      });
    });

    it("debe detectar un match nuevo y crearlo", async () => {
      req.body = { targetUserId: "user-2", action: "LIKE" };
      prisma.swipe.create.mockResolvedValue({ id: "swipe-1" });
      prisma.swipe.findFirst.mockResolvedValue({ id: "swipe-2" });
      prisma.match.findFirst.mockResolvedValue(null);
      prisma.match.create.mockResolvedValue({
        id: "match-1",
        userA: { id: "user-1", firstName: "Juan", lastName: "Perez", email: "juan@example.com" },
        userB: { id: "user-2", firstName: "Ana", lastName: "Gomez", email: "ana@example.com" },
      });

      await createSwipe(req, res);

      expect(prisma.match.create).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "¡Es un match!",
        })
      );
    });

    it("debe manejar errores internos", async () => {
      req.body = { targetUserId: "user-2", action: "LIKE" };
      prisma.swipe.create.mockRejectedValue(new Error("DB error"));

      await createSwipe(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Error interno del servidor" });
    });
  });

  describe("getSwipes", () => {
    it("debe devolver los swipes del usuario", async () => {
      prisma.swipe.findMany.mockResolvedValue([{ id: "swipe-1" }]);
      await getSwipes(req, res);
      expect(res.json).toHaveBeenCalledWith([{ id: "swipe-1" }]);
    });

    it("debe manejar errores al obtener swipes", async () => {
      prisma.swipe.findMany.mockRejectedValue(new Error("DB error"));
      await getSwipes(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "DB error" });
    });
  });

  describe("getMatches", () => {
    it("debe devolver los matches del usuario", async () => {
      prisma.match.findMany.mockResolvedValue([
        {
          id: "match-1",
          userA: {},
          userB: {},
        },
      ]);
      await getMatches(req, res);
      expect(res.json).toHaveBeenCalledWith({
        count: 1,
        matches: [{ id: "match-1", userA: {}, userB: {} }],
      });
    });

    it("debe manejar errores al obtener matches", async () => {
      prisma.match.findMany.mockRejectedValue(new Error("DB error"));
      await getMatches(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "DB error" });
    });
  });
});
