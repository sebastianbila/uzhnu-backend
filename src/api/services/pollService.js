const { Poll } = require('../../db/models')

class PollService {
  async getPolls() {
    const polls = await Poll.find()

    return {
      votingOptions: polls[0].votingOptions,
      name: polls[0].name,
      subject: polls[0].subject,
      date: polls[0].date,
      id: polls[0]._id
    }
  }

  async isUserVoted(userId) {
    const polls = await Poll.find()

    return polls[0].votes.some(
      (item) => item.user && item.user.toString() === userId.toString()
    )
  }

  async getVotedResult() {
    const polls = await Poll.find()

    const votes = polls[0].votes.map((i) => i.vote.trim())

    const votesResult = {}
    votes.map((i) => votesResult[i] = (votesResult[i] || 0) + 1)

    return votesResult
  }
}

module.exports = PollService
