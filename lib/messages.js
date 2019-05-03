const chalk = require('chalk')
const moment = require('moment')
const utils = require('./utils')

const headline = (str, align = 'left') => {
  console.log('\n' + chalk.green(utils.align(str.toUpperCase(), align)))
}

const message = (msg, state = '', showTime = false) => {
  let _state = ''

  if (typeof state === 'string') {
    _state = chalk.green(state)
  } else if (typeof state === 'number') {
    if (state < 300) {
      _state = chalk.green(state)
    } else if (state >= 300 && state < 400) {
      _state = chalk.yellow(state)
    } else if (state >= 400) {
      _state = chalk.red(state)
    }
  } else if (typeof state === 'boolean') {
    _state = ''
    showTime = state
  }

  const _time = (showTime) ? chalk.dim('[' + moment().format('HH:mm:ss') + ']') : ''

  console.log((_time !== '' ? _time + ' ' : '') + msg + (_state !== '' ? ' ' + _state : ''))
}

/**
 * Displays a message that something has been found.
 *
 * @param {Int} num
 * @param {Array} topic ['singular', 'plural']
 */
const found = (num, topic = []) => {
  let out = '\n'

  if (typeof num === 'number') {
    out += chalk.red(num)
    out += chalk.yellow(' ' + utils.tense(num, topic) + ' ' + utils.tense(num, ['has', 'have']) + ' been found.')
  } else if (typeof num === 'string') {
    out += chalk.red(num) + chalk.yellow(' has been found.')
  }
  console.log(out)
}

/**
 * Displays a message that something of a category has been found
 *
 * @param {Int} num1
 * @param {Array} topic1 ['singular', 'plural']
 * @param {Int} num2
 * @param {Array} topic2 ['singular', 'plural']
 */
const foundOf = (num1, topic1 = [], num2, topic2 = []) => {
  let out = '\n'

  out += chalk.red(num1)
  out += chalk.yellow(' ' + utils.tense(num1, topic1) + ' of ')
  out += chalk.red(num2)
  out += chalk.yellow(' ' + utils.tense(num2, topic2) + ' ' + utils.tense(num1, ['has', 'have']) + ' been found.')
  console.log(out)
}

module.exports = {
  headline,
  message,
  found,
  foundOf
}
