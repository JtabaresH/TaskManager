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

        const tasks = await Task.findAll({ where: { status } })

        res.status(201).json({
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
        
        const task = await Task.findOne({ where: { id } })
        const finishDated = new Date()
        const limitDated = task.limitDate

            console.log(limitDated, finishDated)
                
            if ((finishDated.getTime() - limitDated.getTime()) < 0) {
                await task.update({
                    finishDate: finishDated,
                    status: "complete"
                })
            } else {
                await task.update({
                    finishDate: finishDated,
                    status: "late"
                })
            }


            res.status(201).json({
                status: 'success',
                task
            })

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