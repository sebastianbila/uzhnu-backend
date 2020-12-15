const jwt = require('jsonwebtoken')
const { forbidden, unauthorized } = require('server-response')
const env = require('../../config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') return next

  const authHeader = req.headers.authorization
  if (!authHeader) return unauthorized(res, 'Unauthorized')

  try {
    const token = authHeader.split(' ')[1]

    req.user = jwt.verify(token, env.JWT_SECRET)
    next()
  } catch (e) {
    forbidden(res, 'Invalid token')
  }
}
