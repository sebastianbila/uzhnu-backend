const { Apartment } = require('../../db/models')

class ApartmentService {
  async getApartmentName(name) {
    const apartment = await Apartment.find()

    let specificApartment
    apartment.map((apart) => {
      if (apart.residents.some((i) => i === name)) {
        specificApartment = apart
      }
    })

    if (!specificApartment) throw new Error('Not found')
    return specificApartment
  }
}

module.exports = ApartmentService
