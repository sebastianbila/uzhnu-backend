const router = require('express').Router()
const { DocumentController } = require('../controllers')

router.get('/', DocumentController.getAllDocuments)

module.exports = router
