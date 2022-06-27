// Model
const { Task } = require('../models/task.model')

// Petitions
const createTask = async (req, res) => {
    try {
        const { title, userId, limitDate } = req.body

        const newTask = await Task.create({
            title,
            userId,
            startDate: new Date(),
            limitDate
        })

        res.status(201).json({
            status: 'success',
            newTask
        })
    } catch (err) {
        console.log(err)
    }
}

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        res.status(200).json({
            status: 'success',
            tasks
        })
    } catch (err) {
        console.log(err)
    }
}

const getTaskByStatus = async (req, res) => {
    try {
        const { status } = req.params

        const tasks = await Task.findAll({
            where: {
                status: { status }
            }
        })

        res.status(204).json({
            status: 'success',
            tasks
        })
    } catch (err) {
        console.log(err)
    }
}

const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const { status, limitDate, finishDate } = req.body

        const task = await Task.findOne({ where: { id } })

        if (status === "active") {
            await task.update({
                finishDate: new Date(),
            })

            if (limitDate.getTime() > finishDate.getTime()) {
                await task.update({
                    status: "completed"
                })
            } else if (limitDate.getTime() < finishDate.getTime()) {
                await task.update({
                    status: "late"
                })
            }

            res.status(204).json({
                status: 'success',
                task
            })
        }

    } catch (err) {
        console.log(err)
    }
}

const cancelTaskById = async (req, res) => {
    try {
        const { id } = req.params

        const task = await Task.findOne({ where: { id } })

        await task.update({
            status: 'cancelled'
        })

        res.status(204).json({
            status: 'success',
            task
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { createTask, getAllTask, getTaskByStatus, updateTaskById, cancelTaskById }