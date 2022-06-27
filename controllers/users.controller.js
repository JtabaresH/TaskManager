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
        const users = await User.findAll({
            where: {
                status: "active"
            }
        })
        res.status(200).json({
            status: 'success',
            users
        })
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body

        const user = await User.findOne({ where: { id } })

        await user.update({ name, email })

        res.status(204).json({
            status: 'success',
            user
        })
    } catch (err) {
        console.log(err)
    }
}

const disableUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })
        await user.update({
            status: 'disabled'
        })

        res.status(204).json({
            status: 'success',
            user
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { createUser, getAllActiveUsers, updateUser, disableUser }