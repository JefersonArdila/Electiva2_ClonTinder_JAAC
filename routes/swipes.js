const express = require("express");
const router = express.Router();
const {
  createSwipe,
  getMatches,
  getSwipes,
} = require("../controllers/swipesController");
const { validateCreateSwipe } = require("../middlewares/swipesValidations");

router.post("/swipes", validateCreateSwipe, createSwipe);
router.get("/swipes", getSwipes);
router.get("/matches", getMatches);

module.exports = router;
