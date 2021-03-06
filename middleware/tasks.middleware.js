const {catchAsync} = require('../utils/catchAsync.utils');
const {AppError} = require('../utils/appError.utils');
const {Task} = require('../models/task.model');

const taskExists = catchAsync(async (req, res, next)=>{
    const {id} = req.params;
    const task = await Task.findOne({where: {id}});

    if(!task){
        return next(new AppError('Task not found', 404));
    } 
    req.task = task;
    next();
})

module.exports = {taskExists};