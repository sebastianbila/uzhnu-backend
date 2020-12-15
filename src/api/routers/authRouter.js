const router = require('express').Router()
const { validate } = require('express-validation')
const { AuthController } = require('../controllers')
const { authValidator } = require('../schemas')

router.post('/login', validate(authValidator.login), AuthController.login)

module.exports = router
