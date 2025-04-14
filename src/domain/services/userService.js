const User = require("../models/user");
const userRepository = require("../../infrastructure/repositories/userRepository");

const getUsers = () => userRepository.getAllUsers();
const getUserById = (id) => userRepository.getUserById(id);

const createUser = (userData) => {
    if (userRepository.findByEmail(userData.email)) {
        throw new Error("El email ya está registrado.");
    }
    const newUser = new User(
        userRepository.getAllUsers().length + 1,
        userData.firstName,
        userData.lastName,
        userData.age,
        userData.email,
        userData.gender
    );
    return userRepository.saveUser(newUser);
};

const updateUser = (id, userData) => {
    const user = userRepository.updateUser(id, userData);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
};

const deleteUser = (id) => {
    const user = userRepository.deleteUser(id);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
