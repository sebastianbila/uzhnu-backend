const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  user: { type: Types.ObjectId, ref: 'residents' },
  voted: {
    type: Boolean,
    default: false
  },
  vote: {
    type: String
  }
})

module.exports = model('votes', schema)
