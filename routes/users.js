const express = require("express");
const { getUsers, getUserId, createUser, updateUser, deleteUser } = require("../controllers/usersController");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserId);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
