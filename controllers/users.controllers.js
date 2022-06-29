const {User} = require('../models/user.model');
const {catchAsync} = require('../utils/catchAsync.utils');

const createUser = catchAsync( async (req, res, next)=>{
    const {name, email, password} = req.body;

    const newUser = await User.create({name, email, password});
    res.status(201).json({status: 'success', newUser});
});

const getUsers = catchAsync( async (req, res, next)=>{
    const activeUsers = await User.findAll({where: {status: 'active'}});

    res.status(200).json({status: 'success', activeUsers});
});

const updateUser = catchAsync( async (req, res, next)=>{
    const user = req.user;

    const {name, email} = req.body;

    await user.update({name, email});

    res.status(204).json({status: 'success'});
});

const deleteUser = catchAsync( async (req, res, next)=>{
    const user = req.user;

    await user.update({status: 'disabled'});

    res.status(204).json({status: 'success'});
});

module.exports = {createUser, getUsers, updateUser, deleteUser};