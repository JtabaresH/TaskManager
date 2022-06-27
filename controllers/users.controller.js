// Model
const { User } = require('../models/user.model')

//Petitions
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const newUser = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            status: 'success',
            newUser
        })
    } catch (err) {
        console.log(err)
    }
}

const getAllActiveUsers = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
}

const disableUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
    }
}

module.exports = { createUser, getAllActiveUsers, updateUser, disableUser }