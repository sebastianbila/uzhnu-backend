const { ok } = require('server-response')
const { Document } = require('../../db/models')

async function getAllDocuments(req, res, next) {
  try {
    const documents = await Document.find()

    if (!documents) throw new Error('Not found')

    ok(res, documents)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllDocuments,
}
