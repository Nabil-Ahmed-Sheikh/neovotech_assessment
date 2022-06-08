class CustomError extends Error {
  constructor(options, overrides) {
    super();
    this.success = false;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

module.exports = CustomError;
