const express = require('express');
const {createUser, getUsers, updateUser, deleteUser} = require('../controllers/users.controllers');
const {userExists} = require('../middleware/users.middleware');
const {userValidator} = require('../middleware/userValidator.middleware');

const usersRouter = express.Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', userValidator, createUser);
usersRouter.patch('/:id', userExists, updateUser);
usersRouter.delete('/:id', userExists, deleteUser);

module.exports = {usersRouter};