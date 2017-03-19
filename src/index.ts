import * as postcss from 'postcss'
import * as autoprefixer from 'autoprefixer'
import * as stylelint from 'stylelint'
import * as stylelintConfig from 'stylelint-config-standard'
import * as reporter from 'postcss-reporter'
import * as postcssFixes from 'postcss-fixes'
import * as cssnano from 'cssnano'

import {
  generateKeysAndValues,
  generateCssAttributes,
  wrapInMedia,
} from './utils'

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

function generateCore (media) {
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
        generate('border-style', 'bs', borderStyles, media),
        generate('border-top-style', 'bts', borderStyles, media),
        generate('border-right-style', 'brs', borderStyles, media),
        generate('border-bottom-style', 'bbs', borderStyles, media),
        generate('border-left-style', 'bls', borderStyles, media),
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
        }, media),
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
        }, media),
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
        }, media),
        generate('flex', 'flex', flexSizes, media),
        generate('flex-direction', 'flex-direction', {
          row: 'row',
          column: 'column',
          'row-reverse': 'row-reverse',
          'column-reverse': 'column-reverse',
        }, media),
        generate('flex-grow', 'flex-grow', flexSizes, media),
        generate('flex-shrink', 'flex-shrink', flexSizes, media),
        generate('flex-wrap', 'flex-wrap', {
          row: 'row',
          column: 'column',
          'row-reverse': 'row-reverse',
          'column-reverse': 'column-reverse',
        }, media),
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
        }, media),
      ].join('\n')
    },
    float () {
      return [
        generate('float', 'f', {
          r: 'right',
          l: 'left',
        }, media),
      ].join('\n')
    },
    font () {
      return [
        generate('font-style', 's', {
          normal: 'normal',
          italic: 'italic',
          oblique: 'oblique',
        }, media),
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

interface Breakpoints {
  [key: string]: {
    min: string,
    max: string,
  }
}

function generate (property, prefix, vars, breakpoints: Breakpoints) {
  const key = getKey(prefix)
  const media = Object.keys(breakpoints).map(name => {
    const point = breakpoints[name]
    const props = generateKeysAndValues(key, vars, name)
    const css = generateCssAttributes(property, props, 2)
    return wrapInMedia(css, point.min, point.max)
  }).join('\n')
  return [
    generateCssAttributes(property, generateKeysAndValues(key, vars)),
    media,
  ].join('\n')
}

export function backgroundColors (vars, media) {
  return [
    generate('background', 'bg', vars, media),
  ].join('')
}

export function borderColors (vars, media) {
  return [
    generate('border-color', 'bc', vars, media),
    generate('border-top-color', 'btc', vars, media),
    generate('border-right-color', 'brc', vars, media),
    generate('border-bottom-color', 'bbc', vars, media),
    generate('border-left-color', 'blc', vars, media),
  ].join('')
}

export function borderRadii (vars, media) {
  return [
    generate('border-radius', 'bra', vars, media),
    generate('border-top-right-radius', 'btrr', vars, media),
    generate('border-bottom-right-radius', 'bbrr', vars, media),
    generate('border-bottom-left-radius', 'bblr', vars, media),
    generate('border-top-left-radius', 'btlr', vars, media),
  ].join('')
}

export function borderWidths (vars, media) {
  return [
    generate('border-width', 'bw', vars, media),
    generate('border-top-width', 'btw', vars, media),
    generate('border-right-width', 'brw', vars, media),
    generate('border-bottom-width', 'bbw', vars, media),
    generate('border-left-width', 'blw', vars, media),
  ].join('')
}

export function colors (vars, media) {
  return [
    generate('color', 'fc', vars, media),
  ].join('')
}

export function fontSize (vars, media) {
  return [
    generate('font-size', 'fs', vars, media),
  ].join('')
}

export function fontWeights (vars, media) {
  return [
    generate('font-weight', 'fw', vars, media),
  ].join('')
}

export function letterSpacings (vars, media) {
  return [
    generate('letter-spacing', 'ls', vars, media),
  ].join('')
}

export function lineHeights (vars, media) {
  return [
    generate('line-height', 'lh', vars, media),
  ].join('')
}

export function heights (vars, media) {
  return [
    generate('height', 'h', vars, media),
  ].join('')
}

export function margins (vars, media) {
  return [
    generate('margin', 'ma', vars, media),
    generate('margin-top', 'mt', vars, media),
    generate('margin-right', 'mr', vars, media),
    generate('margin-bottom', 'mb', vars, media),
    generate('margin-left', 'ml', vars, media),
  ].join('')
}

export function maxHeights (vars, media) {
  return [
    generate('max-height', 'maxh', vars, media),
  ].join('')
}

export function maxWidths (vars, media) {
  return [
    generate('max-width', 'maxw', vars, media),
  ].join('')
}

export function minHeights (vars, media) {
  return [
    generate('min-height', 'minh', vars, media),
  ].join('')
}

export function minWidths (vars, media) {
  return [
    generate('min-width', 'minw', vars, media),
  ].join('')
}

export function opacity (vars, media) {
  return [
    generate('opacity', 'o', vars, media),
  ].join('')
}

export function outlineColors (vars, media) {
  return [
    generate('outline-color', 'oc', vars, media),
  ].join('')
}

export function outlineOffset (vars, media) {
  return [
    generate('outline-offset', 'oo', vars, media),
  ].join('')
}

export function outlineWidths (vars, media) {
  return [
    generate('outline-width', 'ow', vars, media),
  ].join('')
}

export function paddings (vars, media) {
  return [
    generate('padding', 'p', vars, media),
    generate('padding-top', 'pt', vars, media),
    generate('padding-right', 'pr', vars, media),
    generate('padding-bottom', 'pb', vars, media),
    generate('padding-left', 'pl', vars, media),
  ].join('')
}

export function topLeftBottomRight (vars, media) {
  return [
    generate('top', 'post', vars, media),
    generate('right', 'posr', vars, media),
    generate('bottom', 'posb', vars, media),
    generate('left', 'posl', vars, media),
  ].join('')
}

export function widths (vars, media) {
  return [
    generate('width', 'w', vars, media),
  ].join('')
}

export function wordSpacings (vars, media) {
  return [
    generate('word-spacing', 'ws', vars, media),
  ].join('')
}

export default function (vars, minify) {
  const css = [
    generateCore(vars.media),
    backgroundColors(vars.colors, vars.media),
    borderColors(vars.colors, vars.media),
    borderRadii(vars.radii, vars.media),
    borderWidths(vars.borderWidths, vars.media),
    colors(vars.colors, vars.media),
    fontSize(vars.fontSizes, vars.media),
    fontWeights(vars.fontWeights, vars.media),
    heights(vars.dimensions, vars.media),
    letterSpacings(vars.letterSpacings, vars.media),
    lineHeights(vars.lineHeights, vars.media),
    margins(vars.spacing, vars.media),
    maxHeights(vars.spacing, vars.media),
    maxWidths(vars.spacing, vars.media),
    minHeights(vars.spacing, vars.media),
    minWidths(vars.spacing, vars.media),
    opacity(vars.opacity, vars.media),
    outlineOffset(vars.borderWidths, vars.media),
    outlineColors(vars.colors, vars.media),
    outlineWidths(vars.borderWidths, vars.media),
    paddings(vars.spacing, vars.media),
    topLeftBottomRight(vars.spacing, vars.media),
    widths(vars.dimensions, vars.media),
    wordSpacings(vars.letterSpacings, vars.media),
  ].join('\n')

  const plugins = [
    postcssFixes({preset: 'safe'}),
    stylelint(stylelintConfig),
    autoprefixer,
    reporter(),
    minify ? cssnano() : null,
  ].filter(a => !!a)

  return postcss(plugins).process(css)
}
