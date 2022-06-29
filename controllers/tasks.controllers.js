const {Task} = require('../models/task.model');
const {catchAsync} = require('../utils/catchAsync.utils');

const createTask = catchAsync( async (req, res, next)=>{
    const {title, userId, limitDate} = req.body;

    const newTask = await Task.create({title, userId, limitDate, startDate: new Date()});
    res.status(201).json({status: 'success', newTask});
});

const getTasks = catchAsync( async (req, res, next)=>{
    const tasks = await Task.findAll();

    res.status(200).json({status: 'success', tasks});
});

const getTaskByStatus = catchAsync( async (req, res, next)=>{
    const {status} = req.params;

    if(status === 'active' || 'completed' || 'canceled' || 'late'){
        const task = await Task.findAll({where: {status}});

        res.status(200).json({status: 'success', task});
    }
})

const updateTask = catchAsync( async (req, res, next)=>{
    const {task} = req;

    const {finishDate} = req.body;

    if(task.status === 'active'){
        await task.update({finishDate});
        let limitDate = new Date(task.dataValues.limitDate);
        let finishDateUser = new Date(finishDate);

        if(finishDateUser.valueOf() < limitDate.valueOf()){
            res.status(200).json({status: 'success', message: 'completed'})
        } else {
            res.status(200).json({status: 'success', message: 'late'})
        }
    }
});

const cancelTask = catchAsync( async (req, res, next)=>{
    const {task} = req;

    await task.update({status: 'canceled'});

    res.status(204).json({status: 'success'});
});

module.exports = {createTask, getTasks, updateTask, cancelTask, getTaskByStatus};