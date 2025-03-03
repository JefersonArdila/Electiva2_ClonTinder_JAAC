const { param, body } = require("express-validator");
// const { validationResult } = require("express-validator");

const validateGetUser = [param("id").notEmpty().isNumeric().escape()];

const validateCreateUser = [
  body("firstName").notEmpty().isString().escape(),
  body("lastName").notEmpty().isString().escape(),
  body("age").notEmpty().isNumeric().escape(),
  body("email").notEmpty().isEmail().escape(),
  body("gender").notEmpty().isString().escape(),
];

const validateUpdateUser = [
  param("id").notEmpty().isNumeric().escape(),
  body("firstName").notEmpty().isString().escape(),
  body("lastName").notEmpty().isString().escape(),
  body("age").notEmpty().isNumeric().escape(),
  body("email").notEmpty().isEmail().escape(),
  body("gender").notEmpty().isString().escape(),
];

const validateDeleteUser = [param("id").notEmpty().isNumeric().escape()];

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
