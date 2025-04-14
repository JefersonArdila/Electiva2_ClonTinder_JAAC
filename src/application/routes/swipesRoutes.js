const express = require("express");
const router = express.Router();
const { createSwipe, getMatches,getSwipes } = require("../controllers/swipesController");

router.post("/swipes", createSwipe);
router.get("/swipes", getSwipes);
router.get("/matches", getMatches);

module.exports = router;
/*swipesRoutes */