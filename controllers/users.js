let users = require("../data/users");
const { query, body } = require("express-validator");

const getUsers = (req, res) =>{
    res.status(200).json(users);
};

const getUserId = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === parseInt(id));
        if (!user) {
          return res.status(404).json({ error: "Usuario no encontrado" });
        }
    res.status(200).json(user);
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


const updateUser = (req, res) => {
    const id = parseInt(req.params.id);  
    const { firstName, lastName, age, email, gender } = req.body; 
    
    
    const userIndex = users.findIndex(u => u.id === id);
    
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    users[userIndex] = {
        ...users[userIndex],
        firstName: firstName || users[userIndex].firstName,
        lastName: lastName || users[userIndex].lastName,
        age: age || users[userIndex].age,
        email: email || users[userIndex].email,
        gender: gender || users[userIndex].gender
    };
    
    res.json(users[userIndex]);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  };
  users = users.filter(user => user.id !== parseInt(id));
  res.status(200).json(user);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  getUserId,
  deleteUser,
};