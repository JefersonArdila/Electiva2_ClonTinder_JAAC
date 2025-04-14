const userService = require("../../domain/services/userService.js");
const getUsers = (req, res) => res.json(userService.getUsers());


const getUserId = (req, res) => {
    try { res.json(userService.getUserById(parseInt(req.params.id))); }
    catch (error) { res.status(404).json({ error: error.message }); }
};

const createUser = (req, res) => {
    try { res.status(201).json(userService.createUser(req.body)); }
    catch (error) { res.status(400).json({ error: error.message }); }
};

const updateUser = (req, res) => {
    try { res.json(userService.updateUser(parseInt(req.params.id), req.body)); }
    catch (error) { res.status(404).json({ error: error.message }); }
};

const deleteUser = (req, res) => {
    try { res.json(userService.deleteUser(parseInt(req.params.id))); }
    catch (error) { res.status(404).json({ error: error.message }); }
};

module.exports = { getUsers, getUserId, createUser, updateUser, deleteUser };
