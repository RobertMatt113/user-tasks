const express = require('express');
const {usersRouter} = require('./routes/user.routes');
const {AppError} = require('./utils/appError.utils');
const {globalErrorHandler} = require('./controllers/error.controller');
const { tasksRouter } = require('./routes/task.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/task', tasksRouter);

app.all('*', (req, res, next)=>{
    next(new AppError(`${req.method} ${req.originalUrl} not found in this server`, 404));
});

app.use(globalErrorHandler);

module.exports = {app};