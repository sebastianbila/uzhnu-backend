const ServiceFactory = require('../services')
const { ok } = require('server-response')

async function getAllOsbb(req, res, next) {
  try {
    const osbbService = new ServiceFactory().createOsbbService()
    const osbb = await osbbService.getAllOsbb()

    ok(res, osbb)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllOsbb,
}
