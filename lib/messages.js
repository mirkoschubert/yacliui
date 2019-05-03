const chalk = require('chalk')
const moment = require('moment')
const utils = require('./utils')

/**
 * Shows a capitalized headline
 *
 * @param {String} str
 * @param {String} align ['left', 'center', 'right']
 */
const headline = (str, align = 'left') => {
  console.log('\n' + chalk.green(utils.align(str.toUpperCase(), align)))
}

/**
 * Shows a message with optional time and state
 *
 * @param {String} msg
 * @param {String|Number} state
 * @param {Boolean} showTime
 */
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
 * Shows an info message with or without time
 *
 * @param {String} msg
 * @param {Boolean} showTime
 */
const info = (msg, showTime = false) => {
  message(msg, showTime)
}

/**
 * Shows a warning message with or without time
 *
 * @param {String} msg
 * @param {Boolean} showTime
 */
const warning = (msg, showTime = false) => {
  message(chalk.yellow(msg), showTime)
}

/**
 * Shows an error message with or without time
 *
 * @param {String} msg
 * @param {Boolean} showTime
 */
const error = (msg, showTime = false) => {
  message(chalk.red(msg), showTime)
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
  info,
  warning,
  error,
  found,
  foundOf
}
