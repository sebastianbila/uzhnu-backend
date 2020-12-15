const { Joi } = require('express-validation')
const { string, email, password } = require('./rules')

const login = {
  body: Joi.object({
    phone: string.required(),
    password: password.required()
  })
}

module.exports = {
  login,
}
