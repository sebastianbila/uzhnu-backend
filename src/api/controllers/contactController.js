const { ok } = require('server-response')
const ServiceFactory = require('../services')

async function getAllContacts(req, res, next) {
  try {
    const contactService = new ServiceFactory().createContactService()
    const contacts = await contactService.getAllContacts()

    ok(res, contacts)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllContacts,
}
