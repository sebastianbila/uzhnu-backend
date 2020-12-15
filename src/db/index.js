const mongoose = require('mongoose');
const env = require('../config');

// MongoDB Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

async function sync() {
  return await mongoose.connect(env.MONGO_URI, options);
}

const db = { sync };

module.exports = db;
