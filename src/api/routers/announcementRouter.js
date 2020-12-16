const router = require('express').Router()
const { AnnouncementController } = require('../controllers')

router.get('/', AnnouncementController.getAllAnnouncement)
router.get('/comments/:id', AnnouncementController.getAnnouncementComments)
router.get('/comments/:id/nested/:commentId', AnnouncementController.getAnnouncementNestedComments)

module.exports = router
