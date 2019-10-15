const ui = require('..')

ui.headline('Question')

console.log();

(async () => {
  var answer = await ui.ask('What is your name?', 'Anonymous')
  ui.message('Your name is ' + answer + '.')

  var you = await ui.confirm('Is it you?', false)
  if (you) {
    ui.message(`It's you.`)
  } else {
    ui.message(`It's not you.`)
  }
})()
