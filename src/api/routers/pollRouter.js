const router = require('express').Router()
const { PollController } = require('../controllers')

router.get('/', PollController.getPolls)
router.get('/userVoted/:userId', PollController.isUserVoted)
router.get('/votedResult', PollController.getVotedResult)

module.exports = router
