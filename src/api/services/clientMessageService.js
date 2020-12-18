const { ClientMessage } = require('../../db/models')

class ClientMessageService {
  async addMessage(body) {
    const message = await new ClientMessage({ ...body }).save()

    if (!message) throw new Error('Cannot add message')
    return message
  }
}

module.exports = ClientMessageService
