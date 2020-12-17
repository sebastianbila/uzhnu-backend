const { Schema, model } = require('mongoose')

const schema = new Schema({
  owner: { type: String },
  accountNumber: { type: String },
  area: { type: String },
  adress: { type: String },
  benefits: { type: String },
  phoneNumber: { type: String },
  services: [],
  lastIndicators: [],
  residents: [String]
})

module.exports = model('apartments', schema)
