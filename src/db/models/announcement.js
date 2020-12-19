const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  text: { type: String, required: true },
  author: { type: Types.ObjectId, ref: 'residents' },
  category: { type: String, required: true },

  comments: [
    {
      author: { type: Types.ObjectId, ref: 'residents' },
      text: { type: String },
      date: { type: Date, default: Date.now },
      comments: [
        {
          author: { type: Types.ObjectId, ref: 'residents' },
          text: { type: String },
          date: { type: Date, default: Date.now },
        },
      ],
    },
  ],
})

module.exports = model('announcements', schema)
