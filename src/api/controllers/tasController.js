const ServiceFactory = require('../services')
const { ok } = require('server-response')

async function getTasDetail(req, res, next) {
  try {
    const { name } = req.query
    if (!name) throw new Error('Query *name* must be provided')

    const tasService = new ServiceFactory().createTasService()
    const tas = await tasService.getTasDetail(name)

    ok(res, tas)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getTasDetail
}
