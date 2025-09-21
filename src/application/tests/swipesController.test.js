// --- Mock de Prisma antes de importar el controller ---
const mockSwipe = { id: "swipe-1" };
const mockMatch = { id: "match-1", userA: {}, userB: {} };

const mockPrisma = {
  swipe: {
    create: jest.fn().mockResolvedValue(mockSwipe),
    findMany: jest.fn().mockResolvedValue([mockSwipe]),
    findFirst: jest.fn().mockResolvedValue(null),
  },
  match: {
    findMany: jest.fn().mockResolvedValue([mockMatch]),
    create: jest.fn().mockResolvedValue(mockMatch),
    findFirst: jest.fn().mockResolvedValue(null),
  },
};

jest.mock("@prisma/client", () => {
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

// --- Importar el controller después de mockear Prisma ---
let createSwipe, getSwipes, getMatches;

beforeAll(() => {
  jest.isolateModules(() => {
    ({ createSwipe, getSwipes, getMatches } = require("../controllers/swipesController"));
  });
});

// --- Mock de request y response ---
const mockReq = (userId = "user-1", body = {}) => ({ user: { id: userId }, body });
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Swipes Controller Mocked Tests", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = mockRes();
    jest.clearAllMocks();
  });

  it("should not allow swiping yourself", async () => {
    req = mockReq("user-1", { targetUserId: "user-1", action: "LIKE" });
    await createSwipe(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "No puedes hacer swipe a ti mismo" });
  });

  it("should register a DISLIKE", async () => {
    req = mockReq("user-1", { targetUserId: "user-2", action: "DISLIKE" });
    await createSwipe(req, res);

    expect(mockPrisma.swipe.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Dislike registrado correctamente.",
      swipe: mockSwipe,
    });
  });

  it("should register a LIKE without reciprocity", async () => {
    req = mockReq("user-1", { targetUserId: "user-2", action: "LIKE" });
    await createSwipe(req, res);

    expect(mockPrisma.swipe.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Like registrado, esperando reciprocidad.",
      swipe: mockSwipe,
    });
  });

  it("should get swipes", async () => {
    req = mockReq();
    await getSwipes(req, res);

    expect(mockPrisma.swipe.findMany).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith([mockSwipe]);
  });

  it("should get matches", async () => {
    req = mockReq();
    await getMatches(req, res);

    expect(mockPrisma.match.findMany).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({ count: 1, matches: [mockMatch] });
  });
});
