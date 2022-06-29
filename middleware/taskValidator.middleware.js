const {body, validationResult} = require('express-validator');
const {AppError} = require('../utils/appError.utils');

const checkResults = (req, res, next)=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        error.array();
        const errorMsg = error.array().map(e => e.msg);
        const message = errorMsg.join('. ');

        return next(new AppError(message, 400));
    }

    next();
}

const taskValidator = [
    body('title').notEmpty().withMessage('Title can not be empty'),
    body('userId').notEmpty().withMessage('Please provide a valid userId'),
    checkResults
]

module.exports = {taskValidator};