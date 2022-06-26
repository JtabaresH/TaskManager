const { db, DataTypes } = require('../utils/database.util')

// Create model
const tasks = db.define('tasks', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    userId: {
        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    limitDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    finishDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active"
    }
})

module.exports = { tasks }