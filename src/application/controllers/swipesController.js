const { validationResult } = require("express-validator");

const swipes = [
  {
    userId: "2",
    targetUserId: "7",
    action: "like",
  },
  {
    userId: "1",
    targetUserId: "3",
    action: "like",
  },
  {
    userId: "5",
    targetUserId: "8",
    action: "like",
  },
];
const matches = [];

const getSwipes = (req, res) => {
  res.status(200).json(swipes);
};

const createSwipe = (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const { userId, targetUserId, action } = req.body;

    if (!userId || !targetUserId || !["like", "dislike"].includes(action)) {
      return res.status(400).json({ message: "Datos inválidos" });
    }
    swipes.push({ userId, targetUserId, action });

    const userSwiped = swipes.some(
      (s) =>
        s.userId === targetUserId &&
        s.targetUserId === userId &&
        s.action === "like"
    );

    if (userSwiped && action === "like") {
      matches.push({ userId, targetUserId });
      return res.status(200).json({ match: true, message: "¡Nuevo match!" });
    }
    res.status(200).json({ match: false, message: "Swipe registrado" });
  } else {
    return res.status(400).json({ errors: result.array() });
  }
};

const getMatches = (req, res) => {
  res.status(200).json(matches);
};

module.exports = {
  createSwipe,
  getMatches,
  getSwipes,
};
