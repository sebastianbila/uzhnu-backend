const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt')
const { User } = require('../db/models')
const env = require('../config')

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.JWT_SECRET,
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.userId)
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch (e) {
        throw new Error(e)
      }
    }),
  )
}
