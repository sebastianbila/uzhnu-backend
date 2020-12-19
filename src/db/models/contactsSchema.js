const { Schema, model } = require('mongoose')

const schema = new Schema({
  titul: { type: String },
  name: { type: String },
  phoneNumber: { type: String },
  imgPath: { type: String },
})

module.exports = model('contacts', schema)
