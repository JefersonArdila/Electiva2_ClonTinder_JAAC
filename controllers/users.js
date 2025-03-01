const users = require("../data/users");
const { query, body } = require("express-validator");

const getUsers = (req, res) =>{
    res.status(200).json(users);
};

const createUser = (req, res) => {
    const { firstName, lastName, age, email, gender } = req.body;
      const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        age,
        email,
        gender,
      };
      users.push(newUser);
      res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  createUser,
};