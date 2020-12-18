const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const {
  AuthRouter,
  UserRouter,
  NewsRouter,
  PollRouter,
  ApartmentRoute,
  TasRouter,
  OsbbRouter,
  DocumentRouter,
  AnnouncementRouter,
  ClientMessagesRouter
} = require('./routers')
const { errorHandlingMiddleware, authMiddleware } = require('./middlewares')
const passportStrategy = require('../shared/passportStrategy')

function applyApi(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())
  app.use(passport.initialize())
  passportStrategy(passport)

  app.use('/api/auth', AuthRouter)
  app.use('/api/news', NewsRouter)
  app.use('/api/poll', PollRouter)
  app.use('/api/tas', TasRouter)
  app.use('/api/osbb', OsbbRouter)
  app.use('/api/apartment', ApartmentRoute)
  app.use('/api/document', DocumentRouter)
  app.use('/api/announcement', AnnouncementRouter)
  app.use('/api/user', UserRouter)
  app.use('/api/message', ClientMessagesRouter)

  app.use(errorHandlingMiddleware)
}

module.exports = applyApi
