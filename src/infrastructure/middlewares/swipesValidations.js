const { body } = require("express-validator");

const validateCreateSwipe = [
  body("userId")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("El userId debe ser un número"),
  body("targetUserId")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("El targetUserId debe ser un número"),
  body("action")
    .notEmpty()
    .isIn(["like", "dislike"])
    .escape()
    .withMessage("La acción debe ser like o dislike"),
];

module.exports = {
  validateCreateSwipe,
};
