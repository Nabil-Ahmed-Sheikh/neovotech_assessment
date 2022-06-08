const CustomError = require('../errors/CustomError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message,
    });
  }

  console.log(err);

  res.status(400).json({
    success: false,
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Something went wrong',
  });
};

module.exports = errorHandler;
