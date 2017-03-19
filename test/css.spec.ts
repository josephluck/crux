import * as test from 'tape'
import {
  generateAst,
  copyAst,
  astToCss,
} from '../src/index'

test('builds an ast of css properties', function (t) {
  t.plan(4)
  const ast = generateAst({
    radii: {
      small: '1px',
      medium: '2px',
    }
  })
  t.assert(ast.length, 'ast is an array')
  t.assert(typeof ast[0] === 'object', 'ast is an array of objects')
  t.assert(typeof ast[0].classNames === 'object', 'ast contains classNames')
  t.equal(ast[0].classNames['bra-small'], '1px')
})

test('copies an ast of adding a suffix to each class', function (t) {
  t.plan(4)
  const input = [
    {
      property: 'border-radius',
      classNames: { 'bra-small': '1px', 'bra-medium': '2px' },
    },
    {
      property: 'border-top-right-radius',
      classNames: { 'btrr-small': '1px', 'btrr-medium': '2px' },
    },
  ]
  const ast = copyAst(input, '-suffix')
  t.assert(ast.length, 'ast is an array')
  t.assert(typeof ast[0] === 'object', 'ast is an array of objects')
  t.assert(typeof ast[0].classNames === 'object', 'ast contains classNames')
  t.equal(ast[0].classNames['bra-small-suffix'], '1px')
})

test('takes an ast and returns css', function (t) {
  t.plan(3)
  const ast = [
    {
      property: 'border-radius',
      classNames: { 'bra-small': '1px', 'bra-medium': '2px' },
    },
    {
      property: 'border-top-right-radius',
      classNames: { 'btrr-small': '1px', 'btrr-medium': '2px' },
    },
  ]
  const css = astToCss(ast)
  t.assert(typeof css === 'string', 'css is a string')
  t.assert(css.includes('.btrr-small'), 'css includes expected class')
  t.assert(css.includes('border-radius: 1px;'), 'css includes expected value')
})
