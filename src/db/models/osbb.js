const { Schema, model } = require('mongoose')

const schema = new Schema({
  osbbname: { type: String },
  adress: { type: String },
  edrpoy: { type: String },
  bank: { type: String },
  mfo: { type: String },
  accountnumber: { type: String },
  iban: { type: String },
  apartments: { type: Number }
})

module.exports = model('osbbs', schema)

