const express = require("express");
const router = express.Router();
const { getUsers, getUserId, createUser, updateUser, deleteUser } = require("../controllers/userController.js"); // Verifica esta línea
router.get("/users", getUsers);
router.get("/users/:id", getUserId);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;