const { ok } = require('server-response')
const ServiceFactory = require('../services')

async function getAllNews(req, res, next) {
  try {
    const { limit, page = 1, search } = req.query

    const newsService = new ServiceFactory().createNewsService()

    const result = {}
    result.news = await newsService.getAllNews(search)

    const totalItems = result.news.length
    const pageSize = +limit
    const currentPage = +page

    result.pagination = {
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      currentPage,
    }

    if (limit && !pageSize !== 0) {
      result.news = result.news
        .slice((currentPage - 1) * pageSize)
        .slice(0, pageSize)
    }

    ok(res, result)
  } catch (err) {
    next(err)
  }
}

async function getNewsDetail(req, res, next) {
  try {
    const { id } = req.params
    const newsService = new ServiceFactory().createNewsService()
    const item = await newsService.getNewsDetail(id)

    ok(res, item)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllNews,
  getNewsDetail,
}
