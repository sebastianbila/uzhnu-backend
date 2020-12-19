/* eslint-disable no-underscore-dangle */
const { Announcements } = require('../../db/models')

class AnnouncementService {
  async getAllAnnouncement() {
    const announcement = await Announcements.find()

    if (!announcement) throw new Error('Not found')
    return announcement
  }

  async getAnnouncementComments(id) {
    const announcement = await Announcements.findOne({ _id: id })

    if (!announcement) throw new Error('Not found')
    return announcement.comments
  }

  async getAnnouncementNestedComments(id, commentId) {
    const announcement = await Announcements.findOne({ _id: id })

    if (!announcement) throw new Error('Not found')

    const nestedComments = announcement.comments.find(
      i => i._id.toString() === commentId.toString(),
    )

    if (!nestedComments) throw new Error('Not found')
    return nestedComments.comments
  }

  async getAnnouncementDetail(id) {
    const announcement = await Announcements.findOne({ _id: id })

    if (!announcement) throw new Error('Not found')
    return announcement
  }

  async addAnnouncement(body) {
    const announcement = await new Announcements({ ...body }).save()
    if (!announcement) throw new Error('Cannot create announcement')

    return announcement
  }

  async addComment(body) {
    const announcement = await Announcements.findOneAndUpdate(
      { _id: body.announcementId },
      { $push: { comments: { ...body } } },
    )

    return !!announcement
  }

  async addNestedComment(body) {
    const { announcementId, commentId, ...rest } = body

    const announcement = await Announcements.findOne({ _id: announcementId })
    if (!announcement) throw new Error('Announcement not found')

    const nestedComments = announcement.comments.find(
      i => i._id.toString() === commentId.toString(),
    )

    nestedComments.comments.push({ ...rest })
    const newAnnouncement = await announcement.save()

    return !!newAnnouncement
  }
}

module.exports = AnnouncementService
