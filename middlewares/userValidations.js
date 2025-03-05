const { param, body } = require("express-validator");
// const { validationResult } = require("express-validator");

const validateGetUser = [param("id").notEmpty().isNumeric().escape()];

const validateCreateUser = [
  body("firstName")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El nombre debe contener solo letras"),
  body("lastName")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El apellido debe contener solo letras"),
  body("age")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("La edad debe ser un número"),
  body("email")
    .notEmpty()
    .isEmail()
    .escape()
    .withMessage("El correo debe ser válido"),
  body("gender")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El género debe contener solo letras"),
];

const validateUpdateUser = [
  param("id")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("El id debe ser un número"),
  body("firstName")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El nombre debe contener solo letras"),
  body("lastName")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El apellido debe contener solo letras"),
  body("age")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("La edad debe ser un número"),
  body("email")
    .notEmpty()
    .isEmail()
    .escape()
    .withMessage("El correo debe ser válido"),
  body("gender")
    .notEmpty()
    .isString()
    .escape()
    .withMessage("El género debe contener solo letras"),
];

const validateDeleteUser = [
  param("id")
    .notEmpty()
    .isNumeric()
    .escape()
    .withMessage("El id debe ser un número")
  ];

/* const isValid = (req, res, next) => {
     const result = validationResult(req);
     if (result.isEmpty()) {
        next();
     } else {
       res.status(422).json({ error: result.array() });
     }
}; */

module.exports = {
  validateGetUser,
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  //   isValid,
};
