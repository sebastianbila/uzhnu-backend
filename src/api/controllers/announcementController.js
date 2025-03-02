const { serverError } = require('server-response')
const { ok } = require('server-response')
const ServiceFactory = require('../services')

async function getAllAnnouncement(req, res, next) {
  try {
    const { limit, page = 1 } = req.query

    const announcementService = new ServiceFactory().createAnnouncementService()

    const result = {}
    result.announcement = await announcementService.getAllAnnouncement()

    const totalItems = result.announcement.length
    const pageSize = +limit
    const currentPage = +page

    result.pagination = {
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage,
    }

    if (limit && !pageSize !== 0) {
      result.announcement = result.announcement
        .slice((currentPage - 1) * pageSize)
        .slice(0, pageSize)
    }

    ok(res, result)
  } catch (err) {
    next(err)
  }
}

async function getAnnouncementComments(req, res, next) {
  try {
    const { id } = req.params

    const announcementService = new ServiceFactory().createAnnouncementService()
    const comments = await announcementService.getAnnouncementComments(id)

    ok(res, comments)
  } catch (err) {
    next(err)
  }
}

async function getAnnouncementNestedComments(req, res, next) {
  try {
    const { id, commentId } = req.params

    const announcementService = new ServiceFactory().createAnnouncementService()
    const nestedComments = await announcementService.getAnnouncementNestedComments(
      id,
      commentId,
    )

    ok(res, nestedComments)
  } catch (err) {
    next(err)
  }
}

async function getAnnouncementDetail(req, res, next) {
  try {
    const { id } = req.params

    const announcementService = new ServiceFactory().createAnnouncementService()
    const nestedComments = await announcementService.getAnnouncementDetail(id)

    ok(res, nestedComments)
  } catch (err) {
    next(err)
  }
}

async function addAnnouncement(req, res, next) {
  try {
    const announcementService = new ServiceFactory().createAnnouncementService()
    const announcement = await announcementService.addAnnouncement(req.body)

    ok(res, announcement)
  } catch (err) {
    next(err)
  }
}

async function addComment(req, res, next) {
  try {
    const announcementService = new ServiceFactory().createAnnouncementService()
    const announcement = await announcementService.addComment(req.body)

    if (announcement) {
      res.send()
    } else {
      serverError(res, 'Cannot add comment')
    }
  } catch (err) {
    next(err)
  }
}

async function addNestedComment(req, res, next) {
  try {
    const announcementService = new ServiceFactory().createAnnouncementService()
    const announcement = await announcementService.addNestedComment(req.body)

    if (announcement) {
      res.send()
    } else {
      serverError(res, 'Cannot add nested comment')
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllAnnouncement,
  getAnnouncementComments,
  getAnnouncementNestedComments,
  getAnnouncementDetail,
  addAnnouncement,
  addComment,
  addNestedComment,
}
