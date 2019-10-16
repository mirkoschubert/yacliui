const messages = require('./lib/messages')
const lists = require('./lib/lists')
const input = require('./lib/input')
const digits = require('./lib/digits')

module.exports = {
  ...messages,
  ...lists,
  ...input,
  ...digits
}
