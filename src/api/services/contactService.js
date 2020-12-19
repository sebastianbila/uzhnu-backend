const { Contacts } = require('../../db/models')

class ContactService {
  async getAllContacts() {
    const contacts = await Contacts.find()

    if (!contacts) throw new Error('Not found')
    return contacts
  }
}

module.exports = ContactService
