const { Joi } = require('express-validation')
const { string } = require('./rules')

const addMessage = {
  body: Joi.object({
    email: string.required(),
    text: string.required()
  })
}

module.exports = {
  addMessage
}
