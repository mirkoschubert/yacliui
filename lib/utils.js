
const tense = (num, topic = []) => {
  return (num > 1) ? topic[1] : topic[0]
}

const align = (str, al = 'left', width) => {
  if (al === 'left') {
    return left(str, width)
  } else if (al === 'right') {
    return right(str, width)
  } else if (al === 'center' || al === 'centered') {
    return center(str, width)
  }
}

const getWindowWidth = () => {
  if (typeof process === 'object' && process.stdout && process.stdout.columns) return process.stdout.columns
}

const getMaxWidth = (entries = [], key = '') => {
  var width = 0

  entries.forEach(entry => {
    if (key !== '') {
      if (entry[key].length > width) width = entry[key].length
    } else {
      if (entry.length > width) width = entry.length
    }
  })
  return width
}

const left = (str, width) => {
  str = str.trim()
  width = width || getWindowWidth()
  const strWidth = str.length

  if (strWidth < width) {
    return str + new Array(width - strWidth + 1).join(' ')
  } else return str
}

const center = (str, width) => {
  str = str.trim()
  width = width || getWindowWidth()
  const strWidth = str.length

  if (strWidth < width) {
    return new Array(parseInt((width - strWidth) / 2, 10) + 1).join(' ') + str
  }
}

const right = (str, width) => {
  str = str.trim()
  width = width || getWindowWidth()
  const strWidth = str.length

  if (strWidth < width) {
    return new Array(width - strWidth + 1).join(' ') + str
  }
}

const mergeOptions = (opts, defaults) => {
  var merged = {}
  if (opts === undefined) {
    merged = defaults
  } else {
    for (const key in defaults) {
      merged[key] = (opts[key] !== undefined) ? opts[key] : defaults[key]
    }
  }
  return merged
}

module.exports = {
  tense,
  align,
  left,
  center,
  right,
  getWindowWidth,
  getMaxWidth,
  mergeOptions
}
