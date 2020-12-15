const { ok } = require('server-response')

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

module.exports = {
  getCurrentUser
}
