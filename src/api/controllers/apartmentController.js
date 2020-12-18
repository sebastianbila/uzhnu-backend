const ServiceFactory = require('../services')
const { ok } = require('server-response')

async function getApartmentName(req, res, next) {
  try {
    const { name } = req.query
    if (!name) throw new Error('Query *name* must be provided')

    const apartmentService = new ServiceFactory().createApartmentService()
    const apartment = await apartmentService.getApartmentName(name)

    ok(res, apartment)
  } catch (err) {
    next(err)
  }
}

async function changeIndicator(req, res, next) {
  try {
    const apartmentService = new ServiceFactory().createApartmentService()
    const apartment = await apartmentService.changeIndicator(req.body)

    ok(res, apartment)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getApartmentName,
  changeIndicator
}
