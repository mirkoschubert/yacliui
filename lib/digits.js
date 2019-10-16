const chalk = require('chalk')
const utils = require('./utils')
const matrix = require('./digits.json')

const defaults = {
  on: '\u25a0',
  off: '\u2b1a',
  offset: '',
  spacer: ' ',
  space_between: '  ',
  leading: ' ',
  max_digits: 4,
  max_decimals: 2,
  fixed: true,
  color: 'green'
}

const parseNumber = (number, opts) => {
  var response = ''
  if (typeof number === 'number') {
    const fixedLength = opts.max_digits + opts.max_decimals + 2
    const negative = number < 0
    let digits = Math.abs(number).toFixed(0)
    let decimals = ''

    if (opts.fixed && digits.length > opts.max_digits) {
      let offset = opts.max_decimals - (digits.length - opts.max_digits)
      decimals = (offset >= 0) ? (Math.abs(number) % 1).toFixed(offset).substr(2) : ''
    } else {
      decimals = (Math.abs(number) % 1).toFixed(opts.max_decimals).substr(2)
    }

    response = ((negative) ? '-' : '') + digits + ((decimals.length > 0) ? '.' + decimals : '')
    if (opts.fixed && response.length < fixedLength) response = opts.leading.repeat(fixedLength - response.length) + response
  } else if (typeof number === 'string' && opts.fixed) {
    // e.g. 10:42
    response = number
  }
  return response
}

const getDigit = (n, line, opts) => {
  let output = ''

  // Commata get only one row
  if (n === '.') {
    if (matrix[n][line] === 1) {
      output += opts.on
    } else if (matrix[n][line] === 0) {
      output += opts.off
    }
  } else {
    for (let i = line * 3; i < (line * 3) + 3; i++) {
      if (matrix[n][i] === 1) {
        output += (i === line * 3) ? opts.on : opts.spacer + opts.on
      } else if (matrix[n][i] === 0) {
        output += (i === line * 3) ? opts.off : opts.spacer + opts.off
      }
    }
  }
  return output
}

const render = (str, opts) => {
  let res = ''
  for (let i = 0; i < 5; i++) {
    var line = ''
    for (let ln = 0; ln < str.length; ln++) {
      line += (ln === 0) ? opts.offset : opts.space_between
      line += getDigit(str[ln], i, opts)
    }
    res += line + '\n'
  }
  return res
}

const digits = (number, opts) => {
  const options = utils.mergeOptions(opts, defaults)
  const parsed = parseNumber(number, options)
  const rendered = render(parsed, options)
  if (options.color) {
    console.log(chalk`{${options.color} ${rendered}}`)
  } else {
    console.log(rendered)
  }
}

module.exports = {
  digits
}
