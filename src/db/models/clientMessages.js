const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: { type: String },
  text: { type: String },
})

module.exports = model('clientMessages', schema)
