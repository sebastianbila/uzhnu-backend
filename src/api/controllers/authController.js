const { ok } = require('server-response')
const ServiceFactory = require('../services')

async function login(req, res, next) {
  try {
    const { phone, password } = req.body

    const authService = new ServiceFactory().createAuthService()
    const loginData = await authService.login(phone, password)

    ok(res, loginData)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login,
}
