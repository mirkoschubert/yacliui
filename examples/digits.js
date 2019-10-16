const ui = require('..')

ui.message('\n-149.27396, fixed, 4, 2\n')
ui.digits(-149.27396)

ui.message('-149.27396, fixed, 2, 2\n')
ui.digits(-149.27396, { max_digits: 2 })

ui.message('-149.27396, fixed, 2, 2, color: blue.dim\n')
ui.digits(-149.27396, { max_digits: 2, color: 'blue.dim' })

// BUG!
ui.message('149.27396, fixed, 2, 2\n')
ui.digits(149.27396, { max_digits: 2 })

ui.message('-23.17, not fixed, 2, 2\n')
ui.digits(-23.17, { max_digits: 2, fixed: false })
