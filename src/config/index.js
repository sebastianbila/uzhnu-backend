require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  ...process.env,
  PORT,
  MONGO_URI,
  JWT_SECRET,
};
