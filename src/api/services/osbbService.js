const { Osbb } = require('../../db/models')

class OsbbService {
  async getAllOsbb() {
    return Osbb.find()
  }
}

module.exports = OsbbService
