const NotFoundError = require('./NotFoundError');
const BadRequestError = require('./BadRequestError');
const ForbiddenError = require('./ForbiddenError');
const InternalServerError = require('./InternalServerError');
const UnauthorizedError = require('./UnauthorizedError');

module.exports = {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  UnauthorizedError,
};
