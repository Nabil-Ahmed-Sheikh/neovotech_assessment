const CustomError = require('./CustomError');

class ForBiddenError extends CustomError {

    constructor(message) {
        super();
        this.code = 'FORBIDDEN',
        this.message = message || 'Forbidden',
        this.statusCode = 403;

        Object.setPrototypeOf('this', ForBiddenError.prototype);
      }
}

module.exports = ForBiddenError;
