const AuthService = require('./authService')
const NewsService = require('./newsService')
const PollService = require('./pollService')
const ApartmentService = require('./apartmentService')
const TasService = require('./tasService')
const OsbbService = require('./osbbService')
const AnnouncementService = require('./announcementService')
const UserService = require('./userService')

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

  createOsbbService() {
    return new OsbbService()
  }

  createAnnouncementService() {
    return new AnnouncementService()
  }

  createUserService() {
    return new UserService()
  }
}

module.exports = ServiceFactory
