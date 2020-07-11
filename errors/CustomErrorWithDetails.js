class CustomErrorWithDetails extends Error {
  /**
   * @constructor
   * @param {string} errorCode
   * @param {JSON} details should express json engine render-able only object
   */
  constructor(errorCode, details) {
    super(errorCode);
    this.code = errorCode;
    this.statusCode = 400;
    this.details = details;
  }
}

module.exports = CustomErrorWithDetails;
