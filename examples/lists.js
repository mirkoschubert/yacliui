const ui = require('..')

const listEntries = [
  'First Entry',
  'Second Entry',
  'Third Entry',
  'Fourth Entry',
  'Fifth Entry',
  'Sixth Extry',
  'Seventh Entry',
  'Eighth Entry',
  'Nineth Entry',
  'Tenth Entry'
]
const defListEntries = [
  {
    term: 'List',
    definition: 'A simple list'
  },
  {
    term: 'Ordered List',
    definition: 'A list with numbers'
  },
  {
    term: 'Definition List',
    definition: 'A list with terms and definitions'
  }
]

ui.headline('Basic List')
ui.list(listEntries)
ui.headline('Ordered List')
ui.list(listEntries, { ordered: true })
ui.headline('Definition List')
ui.definitionList(defListEntries)
ui.headline('Ordered Definition List')
ui.definitionList(defListEntries, { ordered: true, padding: 4 })
