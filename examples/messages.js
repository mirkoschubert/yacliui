const ui = require('../lib/ui')

ui.headline('Message Examples')

ui.message('Basic Message')
ui.message('Message with a status string', '274ms')
ui.message('Message with time', true)
ui.message('Message with time and status string', '15ms', true)
ui.message('Message with time and status code (ok)', 200, true)
ui.message('Message with time and status code (warning)', 301, true)
ui.message('Message with time and status code (error)', 404, true)
