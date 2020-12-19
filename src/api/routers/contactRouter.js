const router = require('express').Router()
const { ContactController } = require('../controllers')

router.get('/', ContactController.getAllContacts)

module.exports = router
