const ErrorHander = require("../utils/errorhandler");

module.exports = (req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    //wrong mongodb id error

    if (err.name === "CasteError") {
        const message = `Resource not found,Invald: ${err.path}`;
        err = new ErrorHander(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        
    })
}