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

  async changeIndicator(body) {
    const apartment = await this.getApartmentName(body.name)

    const servicesClone = []
    apartment.services.forEach((item) => {
      if (item.name === body.nameService) {
        servicesClone.push({
          ...item,
          lastValue: +item.currentValue,
          currentValue: +body.currentValue
        })
      } else {
        servicesClone.push(item)
      }
    })

    apartment.services = servicesClone

    const result = await apartment.save()
    return !!result
  }
}

module.exports = ApartmentService
