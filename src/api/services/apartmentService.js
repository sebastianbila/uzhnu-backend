const { Apartment } = require('../../db/models')

class ApartmentService {
  async getApartmentName(name) {
    const apartment = await Apartment.findOne({owner: name.trim()})

    if (!apartment) throw new Error('Not found')
    return apartment
  }
}

module.exports = ApartmentService
