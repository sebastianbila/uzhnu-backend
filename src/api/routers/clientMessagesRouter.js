const router = require('express').Router()
const { ClientMessagesController } = require('../controllers')
const { validate } = require('express-validation')
const { clientMessageValidation } = require('../schemas')

router.post('/', validate(clientMessageValidation.addMessage), ClientMessagesController.addMessage)

module.exports = router
