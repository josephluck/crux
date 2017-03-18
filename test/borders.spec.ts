import * as test from 'tape'
import {generateKeysAndValues} from '../src/utils'

test('borders / generates border widths', function (t) {
  t.plan(2)
  const borderWidths = generateKeysAndValues('bw', {
    1: '1px',
    2: '2px',
  })
  t.equal(borderWidths['bw-1'], '1px')
  t.equal(borderWidths['bw-2'], '2px')
})
