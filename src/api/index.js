const cors = require('cors')
const bodyParser = require('body-parser')
const { errorHandlingMiddleware } = require('./middlewares')

function applyApi(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())

  app.use('/', (req, res) => {
    res.status(200).json({data: 'ok'})
  })
  app.use(errorHandlingMiddleware)
}

module.exports = applyApi
