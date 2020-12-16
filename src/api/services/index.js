const AuthService = require('./authService')
const NewsService = require('./newsService')
const PollService = require('./pollService')

class ServiceFactory {
  createAuthService() {
    return new AuthService()
  }

  createNewsService() {
    return new NewsService()
  }

  createPollService() {
    return new PollService()
  }
}

module.exports = ServiceFactory
