const router = require('express').Router()
const { validate } = require('express-validation')
const { UserController } = require('../controllers')
const { passportMiddleware, authMiddleware } = require('../middlewares')
const { userValidation } = require('../schemas')

router.get(
  '/currentUser',
  [authMiddleware, passportMiddleware],
  UserController.getCurrentUser,
)
router.get('/:userId', UserController.getUserInfo)
router.post(
  '/resetPassword',
  validate(userValidation.isEmail),
  UserController.resetPassword,
)

module.exports = router
