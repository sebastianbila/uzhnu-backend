require('dotenv').config()

const PORT = process.env.PORT || 5000
const { MONGO_URI } = process.env
const { JWT_SECRET } = process.env

module.exports = {
  ...process.env,
  PORT,
  MONGO_URI,
  JWT_SECRET,
}
