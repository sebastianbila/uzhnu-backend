const AuthService = require('./authService')

class ServiceFactory {
  createAuthService() {
    return new AuthService()
  }
}

module.exports = ServiceFactory
