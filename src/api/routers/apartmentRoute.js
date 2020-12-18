const router = require('express').Router()
const { ApartmentController } = require('../controllers')
const { validate } = require('express-validation')
const { apartmentValidation } = require('../schemas')

router.get('/', ApartmentController.getApartmentName)
router.post(
  '/changeIndicator',
  validate(apartmentValidation.changeIndicator),
  ApartmentController.changeIndicator
)

module.exports = router
