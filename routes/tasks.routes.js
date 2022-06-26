const express = require('express');

// Controllers
const { createTask, getAllTask, getTaskByStatus, updateTaskById, cancelTaskById } = require('../controllers/tasks.controller')

const tasksRouter = express.Router();

tasksRouter.post('/', createTask)
tasksRouter.get('/', getAllTask)
tasksRouter.get('/:status', getTaskByStatus)
tasksRouter.patch('/:id', updateTaskById)
tasksRouter.delete('/:id', cancelTaskById)

module.exports = { tasksRouter }