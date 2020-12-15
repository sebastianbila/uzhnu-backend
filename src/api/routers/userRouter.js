const router = require('express').Router()
const { UserController } = require('../controllers')
const { passportMiddleware } = require('../middlewares')

router.get('/currentUser', passportMiddleware, UserController.getCurrentUser)

module.exports = router
