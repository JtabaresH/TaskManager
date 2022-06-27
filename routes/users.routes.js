const express = require('express')

// Controllers
const { createUser, getAllActiveUsers, updateUser, disableUser } = require('../controllers/users.controller')

const usersRouter = express.Router()

usersRouter.post('/', createUser)
usersRouter.get('/', getAllActiveUsers)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', disableUser)

module.exports = { usersRouter }