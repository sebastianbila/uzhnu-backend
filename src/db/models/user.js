const { Schema, model } = require('mongoose')

const schema = new Schema({
  pib: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
  },
  birthday: {
    type: Date,
    required: true,
  },
  idc: { type: Number },
  birthPlace: {
    type: String,
  },
  imgPath: { type: String },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    enum: ['Админ', 'Житель', 'Бухалтер'],
  },
  password: { type: String },
})

module.exports = model('residents', schema)
