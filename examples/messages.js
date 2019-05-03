const ui = require('..')

ui.headline('Message Examples')

console.log()
ui.message('Basic Message')
ui.message('Message with a status string', '274ms')

console.log()
ui.message('Message with time', true)
ui.message('Message with time and status string', '15ms', true)
ui.message('Message with time and status code (ok)', 200, true)
ui.message('Message with time and status code (warning)', 301, true)
ui.message('Message with time and status code (error)', 404, true)

ui.headline('Message States')

console.log()
ui.info('Info message')
ui.warning('Warning message')
ui.error('Error message')

console.log()
ui.info('Info message with time', true)
ui.warning('Warning message with time', true)
ui.error('Error message with time', true)
