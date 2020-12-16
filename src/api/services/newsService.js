const { News } = require('../../db/models')

class NewsService {
  async getAllNews(limit) {
    const news = await News.find()

    // Return limited news
    if (limit) return news.slice(0, limit)

    return news
  }
}

module.exports = NewsService
