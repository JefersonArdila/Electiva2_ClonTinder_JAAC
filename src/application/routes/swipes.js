const express = require("express");
const router = express.Router();
const { createSwipe, getSwipes, getMatches } = require("../controllers/swipesController");
const { validateCreateSwipe } = require("../../infrastructure/middlewares/swipesValidations");
const authenticationToken = require("../../infrastructure/middlewares/auth");

router.post("/swipes", authenticationToken, validateCreateSwipe, createSwipe);
router.get("/swipes", authenticationToken, getSwipes);
router.get("/matches", authenticationToken, getMatches);

module.exports = router;
