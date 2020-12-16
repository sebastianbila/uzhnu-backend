const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: {
    type: String
  },
  subject: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  votingOptions: [String],
  votes: []
})

module.exports = model('polls', schema)


