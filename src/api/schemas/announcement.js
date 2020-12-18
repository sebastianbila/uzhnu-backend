const { Joi } = require('express-validation')
const { string } = require('./rules')

const addAnnouncement = {
  body: Joi.object({
    title: string.required(),
    text: string.required(),
    author: string.required(),
    category: string.required()
  })
}

const addComment = {
  body: Joi.object({
    announcementId: string.required(),
    text: string.required(),
    author: string.required()
  })
}

const addNestedComment = {
  body: Joi.object({
    announcementId: string.required(),
    commentId: string.required(),
    text: string.required(),
    author: string.required()
  })
}

module.exports = {
  addAnnouncement,
  addComment,
  addNestedComment
}
