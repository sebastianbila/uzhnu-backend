const { ok } = require('server-response')
const ServiceFactory = require('../services')

async function getPolls(req, res, next) {
  try {
    const pollService = new ServiceFactory().createPollService()
    const polls = await pollService.getPolls()

    ok(res, polls)
  } catch (err) {
    next(err)
  }
}

async function isUserVoted(req, res, next) {
  try {
    const { userId } = req.params

    const pollService = new ServiceFactory().createPollService()
    const isVoted = await pollService.isUserVoted(userId)

    ok(res, { isVoted })
  } catch (err) {
    next(err)
  }
}

async function getVotedResult(req, res, next) {
  try {
    const pollService = new ServiceFactory().createPollService()
    const votedResult = await pollService.getVotedResult()

    ok(res, votedResult)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getPolls,
  isUserVoted,
  getVotedResult,
}
