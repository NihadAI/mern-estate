export const errorHandler = (statusCode, message) => {
    const error = new Error;
    error.statusCode = new statusCode;
    error.message = new message;
    return error;
}