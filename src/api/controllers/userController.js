const { ok } = require('server-response')
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

    const user = await User.findOne({_id: userId})
    if (!user) throw new Error('User not found')

    res.send(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getCurrentUser,
  getUserInfo
}
