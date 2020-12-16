const router = require('express').Router()
const { OsbbController } = require('../controllers')

router.get('/', OsbbController.getAllOsbb)

module.exports = router
