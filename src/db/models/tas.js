const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
  },
  costFixed: {
    type: Number,
  },
  costDynamic: {
    type: Number,
  },
  imgPath: {
    type: String,
  },
})

module.exports = model('tas', schema)
