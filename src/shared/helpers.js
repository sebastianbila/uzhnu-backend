const jwt = require('jsonwebtoken')
const env = require('../config')

function generateToken(user) {
  /* Generation token */
  return jwt.sign(
    { userId: user._id, },
    env.JWT_SECRET, { expiresIn: '3600d' }
  )
}

module.exports = {
  generateToken
}
