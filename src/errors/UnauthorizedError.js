const CustomError = require('./CustomError');

class UnauthorizedError extends CustomError {

    constructor(message) {
        super();
        this.code = "UNAUTHORIZED",
        this.message = message || "Unauthorized",
        this.statusCode = 401;

        Object.setPrototypeOf('this', UnauthorizedError.prototype);
      }
}

module.exports = UnauthorizedError;