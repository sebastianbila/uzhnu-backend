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

    const nestedComments = announcement.comments
      .find((i) => i._id.toString() === commentId.toString())

    if (!nestedComments) throw new Error('Not found')
    return nestedComments.comments
  }

  async getAnnouncementDetail(id) {
    const announcement = await Announcements.findOne({ _id: id })

    if (!announcement) throw new Error('Not found')
    return announcement
  }
}


module.exports = AnnouncementService
