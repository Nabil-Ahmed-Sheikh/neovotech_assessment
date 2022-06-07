const CustomError = require('./CustomError');

class BadRequestError extends CustomError {

    constructor(message) {
        super();
        this.code = "BAD_REQUEST",
        this.message = message || "Bad Request",
        this.statusCode = 400;

        Object.setPrototypeOf('this', BadRequestError.prototype);
      }
}

module.exports = BadRequestError;