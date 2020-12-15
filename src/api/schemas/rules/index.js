const { Joi } = require('express-validation');

const string = Joi.string()
const email = Joi.string().email();
const password = Joi.string().regex(/[a-zA-Z0-9]{3,30}/);

module.exports = {
  string,
  email,
  password,
};
