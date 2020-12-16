const AuthService = require('./authService')
const NewsService = require('./newsService')

class ServiceFactory {
  createAuthService() {
    return new AuthService()
  }

  createNewsService() {
    return new NewsService()
  }
}

module.exports = ServiceFactory
