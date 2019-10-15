const chalk = require('chalk')
const prompts = require('prompts')
const utils = require('./utils')

const ask = async (question, initial) => {
  const options = {
    type: 'text',
    name: 'value',
    initial: () => {
      return (typeof initial === 'string' && initial !== '') ? initial : ''
    },
    message: question
  }
  try {
    var res = await prompts(options)
    return res.value
  } catch (e) {
    console.error(e)
  }
}

const confirm = async (question, initial) => {
  const options = {
    type: 'confirm',
    name: 'value',
    initial: initial || false,
    message: question
  }
  try {
    const res = await prompts(options)
    return res.value
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  ask,
  confirm
}
