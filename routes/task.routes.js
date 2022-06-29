const express = require('express');
const {createTask, getTasks, updateTask, cancelTask, getTaskByStatus} = require('../controllers/tasks.controllers');
const {taskValidator} = require('../middleware/taskValidator.middleware');

const {taskExists} = require('../middleware/tasks.middleware');

const tasksRouter = express.Router();

tasksRouter.get('/', getTasks);
tasksRouter.post('/', taskValidator, createTask);
tasksRouter.patch('/:id', taskExists, updateTask);
tasksRouter.delete('/:id', taskExists, cancelTask);
tasksRouter.get('/:status', getTaskByStatus);

module.exports = {tasksRouter};