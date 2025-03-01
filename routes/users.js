const express = require("express");
const { getUsers, createUser } = require("../controllers/users");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
/* router.get("/books/:id", getBookById);
router.post("/books", validateBook, createBook);
router.put("/books/:id", validateBook, updateBook);
router.delete("/books/:id", deleteBook); */

module.exports = router;
