const express = require('express')

// Routers
const { usersRouter } = require('./routes/users.routes')
const { tasksRouter } = require('./routes/tasks.routes')

// Utils
const { db } = require('./utils/database.util')

// Init express app
const app = express()
app.use(express.json())

// Define endpoints
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/tasks', tasksRouter)

// Authenticate sync and listen server
db.authenticate()
.then(() => console.log('db synced'))
.catch(err => console.log(err));

db.sync()
.then(() => console.log('db create or synced'))
.catch(err => console.log(err));

app.listen(4030, () => {
    console.log('Server listening')
})