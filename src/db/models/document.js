const { Schema, model } = require('mongoose')

const schema = new Schema({
  titul: { type: String },
  filePath: []
})

module.exports = model('documents', schema)
