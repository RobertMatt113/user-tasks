class AppError extends Error {
    constructor(message, statusCode){
        this.message = message;
        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith('4') ? 'Error' : 'Fail';
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = {AppError};