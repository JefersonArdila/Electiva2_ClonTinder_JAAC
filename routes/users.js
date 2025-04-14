const express = require("express");
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const {
  validateGetUser,
  validateCreateUser,
  validateDeleteUser,
  validateUpdateUser,
} = require("../middlewares/userValidations");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", validateGetUser, getUserId);
router.post("/users", validateCreateUser, createUser);
router.put("/users/:id", validateUpdateUser, updateUser);
router.delete("/users/:id", validateDeleteUser, deleteUser);

module.exports = router;
