const users = require("../database/db");

const getAllUsers = () => users;
const getUserById = (id) => users.find(user => user.id === parseInt(id));
const findByEmail = (email) => users.find(user => user.email === email);
const saveUser = (user) => {
    users.push(user);
    return user;
};
const updateUser = (id, userData) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...userData };
    return users[index];
};
const deleteUser = (id) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0];
};

module.exports = { getAllUsers, getUserById, findByEmail, saveUser, updateUser, deleteUser };
