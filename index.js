const messages = require('./lib/messages')
const lists = require('./lib/lists')
const input = require('./lib/input')

module.exports = {
  ...messages,
  ...lists,
  ...input
}
