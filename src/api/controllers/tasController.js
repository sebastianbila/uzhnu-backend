const ServiceFactory = require('../services')
const { ok } = require('server-response')

async function getTasDetail(req, res, next) {
  try {
    const { name } = req.query

    const tasService = new ServiceFactory().createTasService()
    if (!name) {
      const tas = await tasService.getAllTas()
      return ok(res, tas)
    }

    const tas = await tasService.getTasDetail(name)

    ok(res, tas)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getTasDetail
}
