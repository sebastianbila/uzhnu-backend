const router = require('express').Router()
const { AnnouncementController } = require('../controllers')
const { validate } = require('express-validation')
const { announcementValidation } = require('../schemas')

router.get('/', AnnouncementController.getAllAnnouncement)
router.get('/:id', AnnouncementController.getAnnouncementDetail)
router.get('/comments/:id', AnnouncementController.getAnnouncementComments)
router.get('/comments/:id/nested/:commentId', AnnouncementController.getAnnouncementNestedComments)

router.post(
  '/',
  validate(announcementValidation.addAnnouncement),
  AnnouncementController.addAnnouncement
)

router.post('/addComment',
  validate(announcementValidation.addComment),
  AnnouncementController.addComment
)
router.post('/addNestedComment',
  validate(announcementValidation.addNestedComment),
  AnnouncementController.addNestedComment
)

module.exports = router
