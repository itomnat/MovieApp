// [SECTION] Error Handler
module.exports.errorHandler = (err, req, res, next) => {
    // Log the error
    console.error(err);

    // it ensures there's always a clear error message, either from the error itself or a fallback
    const errorMessage = err.message || 'Internal Server Error';
    // Add status code 500
    const statusCode = err.status || 500;

    // Send a standardized error response
    //We construct a standardized error response JSON object with the appropriate error message, status code, error code, and any additional details provided in the error object.
    res.status(statusCode).json({
        error: {
            message: errorMessage,
            errorCode: err.code || 'SERVER_ERROR',
            details: err.details || null
        }
    });
};
