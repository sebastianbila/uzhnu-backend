const errorHandlingMiddleware = require('./errorHandlingMiddleware')
const authMiddleware = require('./authMiddleware')
const passportMiddleware = require('./passportMiddleware')

module.exports = {
  errorHandlingMiddleware,
  authMiddleware,
  passportMiddleware,
}
