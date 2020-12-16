const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String },
  date: { type: Date, default: Date.now },
  text: { type: String },
  author: { type: Types.ObjectId, ref: 'residents' },

  comments: [
    {
      author: { type: Types.ObjectId, ref: 'residents' },
      text: { type: String },
      date: { type: Date, default: Date.now },
      comments: [
        {
          author: { type: Types.ObjectId, ref: 'residents' },
          text: { type: String },
          date: { type: Date, default: Date.now }
        }
      ]
    }
  ]
})

module.exports = model('announcements', schema)
