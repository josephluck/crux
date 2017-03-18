import {generateKeysAndValues, generateCssAttributes} from './utils'

const keys = {
  ba: 'ba', bt: 'bt', br: 'br', bb: 'bb', bl: 'bl', // core border
  bg: 'bg', // Background
  bc: 'bc', btc: 'btc', brc: 'brc', bbc: 'bbc', blc: 'blc', // Border color
  bs: 'bs', bts: 'bts', brs: 'brs', bbs: 'bbs', bls: 'bls', // Border styles
  bra: 'bra', btrr: 'btrr', bbrr: 'bbrr', bblr: 'bblr', btlr: 'btlr', // Border radii
  bw: 'bw', btw: 'btw', brw: 'brw', bbw: 'bbw', blw: 'blw', // Border width
  c: 'c',
  d: 'd',
  f: 'f',
  fc: 'fc',
  fd: 'fd',
  'align-items': 'align-items', flex: 'flex', 'flex-direction': 'flex-direction', 'flex-grow': 'flex-grow', 'flex-shrink': 'flex-shrink', 'flex-wrap': 'flex-wrap', 'justify-content': 'justify-content', // Flex
  fs: 'fs',
  fw: 'fw',
  ls: 'ls',
  lh: 'lh',
  h: 'h',
  ma: 'ma', mt: 'mt', mr: 'mr', mb: 'mb', ml: 'ml', // Margin
  maxh: 'maxh', maxw: 'maxw', minh: 'minh', minw: 'minw', // Max / min
  o: 'o',
  oc: 'oc',
  oo: 'oo',
  ow: 'ow',
  p: 'p', pt: 'pt', pr: 'pr', pb: 'pb', pl: 'pl', // Padding
  post: 'post', posr: 'posr', posb: 'posb', posl: 'posl', // Position
  s: 's',
  w: 'w',
  ws: 'ws',
}

function getKey (key) {
  return keys[key] ? keys[key] : new Error('Key not found in keys!')
}

const core = {
  border () {
    return [
      `.${getKey(['ba'])} { border: solid 1px; }`,
      `.${getKey(['bt'])} { border-top: solid 1px; }`,
      `.${getKey(['br'])} { border-right: solid 1px; }`,
      `.${getKey(['bb'])} { border-bottom: solid 1px; }`,
      `.${getKey(['bl'])} { border-left: solid 1px; }`,
    ].join('\n')
  },
  borderStyle () {
    const borderStyles = {
      none: 'none',
      dotted: 'dotted',
      dashed: 'dashed',
      solid: 'solid',
      double: 'double',
      groove: 'groove',
      ridge: 'ridge',
      inset: 'inset',
      outset: 'outset',
    }
    return [
      generate('border-style', 'bs', borderStyles),
      generate('border-top-style', 'bts', borderStyles),
      generate('border-right-style', 'brs', borderStyles),
      generate('border-bottom-style', 'bbs', borderStyles),
      generate('border-left-style', 'bls', borderStyles),
    ].join('\n')
  },
  cursor () {
    return [
      generate('cursor', 'c', {
        auto: 'auto',
        default: 'default',
        none: 'none',
        help: 'help',
        pointer: 'pointer',
        progress: 'progress',
        wait: 'wait',
        cell: 'cell',
        crosshair: 'crosshair',
        text: 'text',
        'vertical-align': 'vertical-align',
        alias: 'alias',
        copy: 'copy',
        move: 'move',
        'no-drop': 'no-drop',
        'not-allowed': 'not-allowed',
        'col-resize': 'col-resize',
        'row-resize': 'row-resize',
        'n-resize': 'n-resize',
        'e-resize': 'e-resize',
        's-resize': 's-resize',
        'w-resize': 'w-resize',
        'ne-resize': 'ne-resize',
        'nw-resize': 'nw-resize',
        'se-resize': 'se-resize',
        'sw-resize': 'sw-resize',
        'ew-resize': 'ew-resize',
        'ns-resize': 'ns-resize',
        'nesw-resize': 'nesw-resize',
        'nwse-resize': 'nwse-resize',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
        grab: 'grab',
        grabbing: 'grabbing',
      }),
    ].join('\n')
  },
  display () {
    return [
      generate('display', 'd', {
        b: 'block',
        i: 'inline',
        flow: 'flow',
        'flow-root': 'flow-root',
        table: 'table',
        flex: 'flex',
        grid: 'grid',
        'table-row-group': 'table-row-group',
        'table-header-group': 'table-header-group',
        'table-footer-group': 'table-footer-group',
        'table-row': 'table-row',
        'table-cell': 'table-cell',
        'table-column-group': 'table-column-group',
        'table-column': 'table-column',
        'table-caption': 'table-caption',
        contents: 'contents',
        n: 'none',
        ib: 'inline-block',
        if: 'inline-flex',
        inherit: 'inherit',
        initial: 'initial',
        unset: 'unset',
      }),
    ].join('\n')
  },
  flex () {
    const flexSizes = {
      0: '0 0 auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    }
    return [
      generate('align-items', 'align-items', {
        normal: 'normal',
        stretch: 'stretch',
        center: 'center',
        start: 'start',
        end: 'end',
        'flex-start': 'flex-start',
        'flex-end': 'flex-end',
        'self-start': 'self-start',
        'self-end': 'self-end',
        left: 'left',
        right: 'right',
      }),
      generate('flex', 'flex', flexSizes),
      generate('flex-direction', 'flex-direction', {
        row: 'row',
        column: 'column',
        'row-reverse': 'row-reverse',
        'column-reverse': 'column-reverse',
      }),
      generate('flex-grow', 'flex-grow', flexSizes),
      generate('flex-shrink', 'flex-shrink', flexSizes),
      generate('flex-wrap', 'flex-wrap', {
        row: 'row',
        column: 'column',
        'row-reverse': 'row-reverse',
        'column-reverse': 'column-reverse',
      }),
      generate('justify-content', 'justify-content', {
        center: 'center',
        start: 'start',
        end: 'end',
        left: 'left',
        right: 'right',
        'flex-start': 'flex-start',
        'flex-end': 'flex-end',
        'space-between': 'space-between',
        'space-around': 'space-around',
        'space-evenly': 'space-evenly',
        stretch: 'stretch',
      }),
    ].join('\n')
  },
  float () {
    return [
      generate('float', 'f', {
        r: 'right',
        l: 'left',
      }),
    ].join('\n')
  },
  font () {
    return [
      generate('font-style', 's', {
        normal: 'normal',
        italic: 'italic',
        oblique: 'oblique',
      }),
    ].join('\n')
  },
  overflow () {
    return ``
  },
  text () {
    return ``
  },
  utils () {
    return ``
  },
}

function generateCore () {
  return [
    core.border(),
    core.borderStyle(),
    core.cursor(),
    core.display(),
    core.flex(),
    core.float(),
    core.font(),
    core.overflow(),
    core.text(),
    core.utils(),
  ].join('\n')
}

function generate (property, prefix, vars) {
  return generateCssAttributes(property, generateKeysAndValues(getKey(prefix), vars))
}

export function backgroundColors (vars) {
  return [
    generate('background', 'bg', vars),
  ].join('')
}

export function borderColors (vars) {
  return [
    generate('border-color', 'bc', vars),
    generate('border-top-color', 'btc', vars),
    generate('border-right-color', 'brc', vars),
    generate('border-bottom-color', 'bbc', vars),
    generate('border-left-color', 'blc', vars),
  ].join('')
}

export function borderRadii (vars) {
  return [
    generate('border-radius', 'bra', vars),
    generate('border-top-right-radius', 'btrr', vars),
    generate('border-bottom-right-radius', 'bbrr', vars),
    generate('border-bottom-left-radius', 'bblr', vars),
    generate('border-top-left-radius', 'btlr', vars),
  ].join('')
}

export function borderWidths (vars) {
  return [
    generate('border-width', 'bw', vars),
    generate('border-top-width', 'btw', vars),
    generate('border-right-width', 'brw', vars),
    generate('border-bottom-width', 'bbw', vars),
    generate('border-left-width', 'blw', vars),
  ].join('')
}

export function colors (vars) {
  return [
    generate('color', 'fc', vars),
  ].join('')
}

export function fontSize (vars) {
  return [
    generate('font-size', 'fs', vars),
  ].join('')
}

export function fontWeights (vars) {
  return [
    generate('font-weight', 'fw', vars),
  ].join('')
}

export function letterSpacings (vars) {
  return [
    generate('letter-spacing', 'ls', vars),
  ].join('')
}

export function lineHeights (vars) {
  return [
    generate('line-height', 'lh', vars),
  ].join('')
}

export function heights (vars) {
  return [
    generate('height', 'h', vars),
  ].join('')
}

export function margins (vars) {
  return [
    generate('margin', 'ma', vars),
    generate('margin-top', 'mt', vars),
    generate('margin-right', 'mr', vars),
    generate('margin-bottom', 'mb', vars),
    generate('margin-left', 'ml', vars),
  ].join('')
}

export function maxHeights (vars) {
  return [
    generate('max-height', 'maxh', vars),
  ].join('')
}

export function maxWidths (vars) {
  return [
    generate('max-width', 'maxw', vars),
  ].join('')
}

export function minHeights (vars) {
  return [
    generate('min-height', 'minh', vars),
  ].join('')
}

export function minWidths (vars) {
  return [
    generate('min-width', 'minw', vars),
  ].join('')
}

export function opacity (vars) {
  return [
    generate('opacity', 'o', vars),
  ].join('')
}

export function outlineColors (vars) {
  return [
    generate('outline-color', 'oc', vars),
  ].join('')
}

export function outlineOffset (vars) {
  return [
    generate('outline-offset', 'oo', vars),
  ].join('')
}

export function outlineWidths (vars) {
  return [
    generate('outline-width', 'ow', vars),
  ].join('')
}

export function paddings (vars) {
  return [
    generate('padding', 'p', vars),
    generate('padding-top', 'pt', vars),
    generate('padding-right', 'pr', vars),
    generate('padding-bottom', 'pb', vars),
    generate('padding-left', 'pl', vars),
  ].join('')
}

export function topLeftBottomRight (vars) {
  return [
    generate('top', 'post', vars),
    generate('right', 'posr', vars),
    generate('bottom', 'posb', vars),
    generate('left', 'posl', vars),
  ].join('')
}

export function widths (vars) {
  return [
    generate('width', 'w', vars),
  ].join('')
}

export function wordSpacings (vars) {
  return [
    generate('word-spacing', 'ws', vars),
  ].join('')
}

export default function (vars) {
  return [
    generateCore(),
    backgroundColors(vars.colors),
    borderColors(vars.colors),
    borderRadii(vars.radii),
    borderWidths(vars.borderWidths),
    colors(vars.colors),
    fontSize(vars.fontSizes),
    fontWeights(vars.fontWeights),
    heights(vars.dimensions),
    letterSpacings(vars.letterSpacings),
    lineHeights(vars.lineHeights),
    margins(vars.spacing),
    maxHeights(vars.spacing),
    maxWidths(vars.spacing),
    minHeights(vars.spacing),
    minWidths(vars.spacing),
    opacity(vars.opacity),
    outlineOffset(vars.borderWidths),
    outlineColors(vars.colors),
    outlineWidths(vars.borderWidths),
    paddings(vars.spacing),
    topLeftBottomRight(vars.spacing),
    widths(vars.dimensions),
    wordSpacings(vars.letterSpacings),
  ].join('\n')
}
