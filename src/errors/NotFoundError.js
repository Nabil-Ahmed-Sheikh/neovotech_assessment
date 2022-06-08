const CustomError = require('./CustomError');

class NotFoundError extends CustomError {
  constructor(message) {
    super();
    (this.code = 'RESOURCE_NOT_FOUND'),
      (this.message = message || 'Resource not found'),
      (this.statusCode = 404);

    Object.setPrototypeOf('this', NotFoundError.prototype);
  }
}

module.exports = NotFoundError;
