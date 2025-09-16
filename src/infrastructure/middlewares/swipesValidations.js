const { body } = require("express-validator");

const validateCreateSwipe = [
  body("targetUserId").notEmpty().isString().withMessage("ID del usuario objetivo es requerido"),
  body("action").isIn(["LIKE", "DISLIKE"]).withMessage("Acción debe ser LIKE o DISLIKE"),
];

module.exports = {
  validateCreateSwipe,
};
