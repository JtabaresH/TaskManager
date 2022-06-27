const express = require('express')

// Controllers
const { createUser, getAllActiveUser, updateUser, disableUser } = require('../controllers/users.controller')

const usersRouter = express.Router()

usersRouter.post('/', createUser)
usersRouter.get('/', getAllActiveUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', disableUser)

module.exports = { usersRouter }