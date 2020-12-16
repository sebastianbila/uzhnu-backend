const ServiceFactory = require('../services')
const { ok } = require('server-response')

async function getAllNews(req, res, next) {
  try {
    const { limit } = req.query

    const newsService = new ServiceFactory().createNewsService()
    const news = await newsService.getAllNews(limit)

    ok(res, news)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllNews
}
