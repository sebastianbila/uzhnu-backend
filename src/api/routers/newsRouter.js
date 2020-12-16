const router = require('express').Router()
const { NewsController } = require('../controllers')

router.get('/', NewsController.getAllNews)

module.exports = router
