const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, require: true },
  date: { type: Date, default: Date.now },
  text: { type: String, require: true },
  author: { type: Types.ObjectId, ref: 'residents' },
  category: { type: String, require: true },

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
