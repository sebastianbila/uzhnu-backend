const { Joi } = require('express-validation')
const { string, number } = require('./rules')

const changeIndicator = {
  body: Joi.object({
    name: string.required(),
    nameService: string.required(),
    currentValue: number.required()
  })
}

module.exports = {
  changeIndicator,
}
