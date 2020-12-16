const { Tas } = require('../../db/models')

class TasService {
  async getAllTas() {
    const tas = await Tas.find()

    if (!tas) throw new Error('Not found')
    return tas
  }

  async getTasDetail(name) {
    const tas = await Tas.findOne({name: name.trim()})

    if (!tas) throw new Error('Not found')
    return tas
  }
}

module.exports = TasService
