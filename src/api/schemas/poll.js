const { Joi } = require('express-validation')
const { number } = require('./rules')

const isVoted = {
  body: Joi.object({
    userId: number.required()
  })
}

module.exports = { isVoted }
