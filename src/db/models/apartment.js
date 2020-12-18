const { Schema, model } = require('mongoose')

const schema = new Schema({
  owner: { type: String },
  accountNumber: { type: String },
  area: { type: Number },
  adress: { type: String },
  benefits: { type: Number },
  phoneNumber: { type: String },
  services: [],
  residents: [String]
})

module.exports = model('apartments', schema)
