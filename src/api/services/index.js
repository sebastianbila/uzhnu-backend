const AuthService = require('./authService')
const NewsService = require('./newsService')
const PollService = require('./pollService')
const ApartmentService = require('./apartmentService')
const TasService = require('./TasService')

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

  createTasService() {
    return new TasService()
  }
}

module.exports = ServiceFactory
