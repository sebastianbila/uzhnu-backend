const { Joi } = require('express-validation')
const { email } = require('./rules')

const isEmail = {
  body: Joi.object({
    email: email.required(),
  }),
}

module.exports = { isEmail }
