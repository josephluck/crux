import * as test from 'tape'
import {generateKeysAndValues, generateCssAttributes} from '../src/utils'

const vars = {
  colors: {
    black: '#000',
    red: 'red',
    green: 'rgba(0, 255, 0, 1)',
  },
}

test('css / builds css from properties', function (t) {
  t.plan(1)
  const fonts = generateKeysAndValues('fc', vars.colors)
  const css = generateCssAttributes('color', fonts)
  const black = `.fc-black { color: #000 }`
  t.assert(css.includes(black), 'doesnt have the correct font class')
})
