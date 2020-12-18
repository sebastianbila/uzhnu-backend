const ServiceFactory = require('../services')

async function addMessage(req, res, next) {
  try {
    const clientMessagesService = new ServiceFactory().createClientMessagesService()
    await clientMessagesService.addMessage(req.body)

    res.send()
  } catch (err) {
    next(err)
  }
}

module.exports = {
  addMessage
}
