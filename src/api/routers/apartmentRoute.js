const router = require('express').Router()
const { ApartmentController } = require('../controllers')

router.get('/', ApartmentController.getApartmentName)

module.exports = router
