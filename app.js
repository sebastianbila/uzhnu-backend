const app = require('express')()
const applyApi = require('./src/api')
const db = require('./src/db')
const env = require('./src/config')

applyApi(app)

db.sync().then(() => {
  app.listen(env.PORT)
})
