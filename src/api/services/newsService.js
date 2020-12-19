const { News } = require('../../db/models')

class NewsService {
  async getAllNews(search = '') {
    const news = await News.find()

    if (search) {
      return news.filter(item => {
        if (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.subscription.toLowerCase().includes(search.toLowerCase())
        ) {
          return item
        }
        return false
      })
    }
    if (!news) throw new Error('Not found')
    return news
  }

  getNewsDetail(id) {
    return News.findOne({ _id: id })
  }
}

module.exports = NewsService
