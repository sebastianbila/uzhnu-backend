const router = require('express').Router()
const { UserController } = require('../controllers')
const { passportMiddleware, authMiddleware } = require('../middlewares')

router.get('/currentUser', [authMiddleware, passportMiddleware], UserController.getCurrentUser)
router.get('/:userId', UserController.getUserInfo)

module.exports = router
