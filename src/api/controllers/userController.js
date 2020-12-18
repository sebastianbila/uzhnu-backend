const { ok } = require('server-response')
const ServiceFactory = require('../services')
const { User } = require('../../db/models')

async function getCurrentUser(req, res, next) {
  try {
    const user = req.user

    if (user) {
      ok(res, user)
    } else {
      throw new Error('User not found')
    }
  } catch (err) {
    next(err)
  }
}

async function getUserInfo(req, res, next) {
  try {
    const { userId } = req.params

    const userService = new ServiceFactory().createUserService()
    const user = await userService.getUserInfo(userId)

    res.send(user)
  } catch (err) {
    next(err)
  }
}

async function resetPassword(req, res, next) {
  try {
    const { email } = req.body

    const userService = new ServiceFactory().createUserService()
    await userService.resetPassword(email)

    res.send()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getCurrentUser,
  getUserInfo,
  resetPassword
}
