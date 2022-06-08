const CustomError = require('./CustomError');

class InternalServerError extends CustomError {
  constructor(message) {
    super();
    (this.code = 'INTERNAL_SERVER_ERROR'),
      (this.message =
        message || 'Something went wrong, Please try again later.'),
      (this.statusCode = 500);

    Object.setPrototypeOf('this', InternalServerError.prototype);
  }
}

module.exports = InternalServerError;
