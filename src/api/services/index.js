const AuthService = require('./authService')
const NewsService = require('./newsService')
const PollService = require('./pollService')
const ApartmentService = require('./apartmentService')

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

  createApartmentService() {
    return new ApartmentService()
  }
}

module.exports = ServiceFactory
