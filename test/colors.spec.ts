import * as test from 'tape'
import {generateKeysAndValues} from '../src/utils'

const vars = {
  colors: {
    black: '#000',
    red: 'red',
    green: 'rgba(0, 255, 0, 1)',
  },
}

test('colors / generates background colours', function (t) {
  t.plan(2)
  const colors = generateKeysAndValues('bg', vars.colors)
  t.equal(colors['bg-black'], '#000')
  t.equal(colors['bg-red'], 'red')
})

test('colors / generates font colours', function (t) {
  t.plan(2)
  const colors = generateKeysAndValues('fc', vars.colors)
  t.equal(colors['fc-black'], '#000')
  t.equal(colors['fc-red'], 'red')
})
