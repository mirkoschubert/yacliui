const chalk = require('chalk')
const utils = require('./utils')

const list = (entries = [], opts) => {
  opts = utils.mergeOptions(opts, {
    ordered: false,
    padding: 2,
    marker: '+'
  })
  const numWidth = String(entries.length).length + 1
  const markWidth = opts.marker.length
  console.log()
  entries.forEach((entry, i) => {
    if (opts.ordered) {
      const _num = utils.left(String(i + 1) + '.', numWidth + opts.padding)
      console.log(chalk.yellow(_num) + entry)
    } else {
      const _mark = utils.left(opts.marker, markWidth + opts.padding)
      console.log(chalk.yellow(_mark) + entry)
    }
  })
}

const definitionList = (entries = [], opts) => {
  opts = utils.mergeOptions(opts, {
    ordered: false,
    padding: 2
  })
  const numWidth = String(entries.length).length
  const termWidth = utils.getMaxWidth(entries, 'term')
  console.log()
  entries.forEach((entry, i) => {
    if (typeof entry === 'object') {
      if (opts.ordered) {
        const _num = utils.left(String(i + 1) + '.', numWidth + opts.padding + 1)
        const _term = utils.left(entry.term, termWidth + opts.padding)
        console.log(chalk.yellow(_num) + _term + chalk.dim(entry.definition))
      } else {
        const _term = utils.left(entry.term, termWidth + opts.padding)
        console.log(chalk.yellow(_term) + entry.definition)
      }
    } else {
      // Error handling
    }
  })
}

module.exports = {
  list,
  definitionList
}
