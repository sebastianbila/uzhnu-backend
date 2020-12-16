const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  subscription: {
    type: String
  },
  imgPath: [String],
  category: {
    type: String
  },
  important: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('news', schema)
