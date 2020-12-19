const { ValidationError } = require('express-validation')
const { errorHandler } = require('server-response')

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      error: err.details.body[0].message,
    })
  }
  return errorHandler(res, err)
}
