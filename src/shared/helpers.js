const jwt = require('jsonwebtoken')
const env = require('../config')

function generateToken(user) {
  /* Generation token */
  // eslint-disable-next-line no-underscore-dangle
  return jwt.sign({ userId: user._id }, env.JWT_SECRET, { expiresIn: '3600d' })
}

function generatePassword(length = 8) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

module.exports = {
  generateToken,
  generatePassword,
}
