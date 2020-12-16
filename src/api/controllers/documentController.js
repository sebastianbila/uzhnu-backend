const { Document } = require('../../db/models')
const { ok } = require('server-response')

async function getAllDocuments(req, res, next) {
  try {
    const documents = await Document.find()

    if (!documents) throw new Error('Not found')
    console.log(documents)

    ok(res, documents)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllDocuments
}
