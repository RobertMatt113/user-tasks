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

const userValidator = [
    body('name').notEmpty().withMessage('Name can not be empty'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({min: 8}).withMessage('Password most be at least 8 characters')
    .isAlphanumeric().withMessage('Password must contain letters and numbers'),
    checkResults,
]

module.exports = {userValidator};