const router = require('express').Router()
const { TasController } = require('../controllers')

router.get('/', TasController.getTasDetail)

module.exports = router
