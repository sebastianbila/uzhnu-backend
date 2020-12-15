const bcrypt = require('bcryptjs')
const { generateToken } = require('../../shared/helpers')
const { User } = require('../../db/models')

class AuthService {
  async login(phoneNumber, password) {
    const user = await User.findOne({ phoneNumber })
    if (!user) throw new Error('User not found')

    const isMatch = await bcrypt.compareSync(password, user.password)
    if (!isMatch) throw new Error('Cannot login. Phone or password doesn\'t match')

    return {token: generateToken(user), userId: user._id}
  }
}

module.exports = AuthService
