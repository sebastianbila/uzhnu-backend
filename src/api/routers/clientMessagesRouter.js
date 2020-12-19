const router = require('express').Router()
const { validate } = require('express-validation')
const { ClientMessagesController } = require('../controllers')
const { clientMessageValidation } = require('../schemas')

router.post(
  '/',
  validate(clientMessageValidation.addMessage),
  ClientMessagesController.addMessage,
)

module.exports = router
