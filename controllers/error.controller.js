const globalErrorHandler = (err, req, res, next)=>{ 
    console.log(err)
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({message: err.message, error: err, stack: err.stack});
}

module.exports = {globalErrorHandler};