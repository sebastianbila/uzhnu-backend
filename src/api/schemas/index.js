const authValidator = require('./auth')
const pollValidator = require('./poll')
const userValidation = require('./user')
const announcementValidation = require('./announcement')
const apartmentValidation = require('./apartment')
const clientMessageValidation = require('./clientMessages')

module.exports = {
  authValidator,
  pollValidator,
  userValidation,
  announcementValidation,
  apartmentValidation,
  clientMessageValidation,
}
