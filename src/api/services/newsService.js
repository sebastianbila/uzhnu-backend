const { News } = require('../../db/models')

class NewsService {
  async getAllNews() {
    const news = await News.find()

    // Return limited news
    if (news) throw new Error('Not found')

    return news
  }

  getNewsDetail(id) {
    return News.findOne({ _id: id })
  }
}


module.exports = NewsService
