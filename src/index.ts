import * as postcss from 'postcss'
import * as autoprefixer from 'autoprefixer'
import * as stylelint from 'stylelint'
import * as standardStyleLint from 'stylelint-config-standard'
import * as reporter from 'postcss-reporter'
import * as postcssFixes from 'postcss-fixes'
import * as cssnano from 'cssnano'
import * as utils from './utils'

const stylelintConfig = {
  ...standardStyleLint,
  rules: {
    ...standardStyleLint.rules,
    'declaration-block-single-line-max-declarations': 4,
    'declaration-block-no-redundant-longhand-properties': [true, {
      ignoreShorthands: ['padding', 'margin'],
    }],
  },
}

const prefixes: Prefixes = {
  bg: 'bg', // Background
  ba: 'ba', bl: 'bl', br: 'br', bt: 'bt', bb: 'bb',
  bc: 'bc', btc: 'btc', brc: 'brc', bbc: 'bbc', blc: 'blc', // Border color
  bs: 'bs', bts: 'bts', brs: 'brs', bbs: 'bbs', bls: 'bls', // Border styles
  bra: 'bra', btrr: 'btrr', bbrr: 'bbrr', bblr: 'bblr', btlr: 'btlr', // Border radii
  bw: 'bw', btw: 'btw', brw: 'brw', bbw: 'bbw', blw: 'blw', // Border width
  c: 'c',
  d: 'd',
  f: 'f',
  fc: 'fc',
  fd: 'fd',
  ff: 'ff',
  'align-items': 'align-items', flex: 'flex', 'flex-direction': 'flex-direction', 'flex-grow': 'flex-grow', 'flex-shrink': 'flex-shrink', 'flex-wrap': 'flex-wrap', 'justify-content': 'justify-content', // Flex
  fs: 'fs',
  fw: 'fw',
  ls: 'ls',
  lh: 'lh',
  h: 'h',
  mt: 'mt', mr: 'mr', mb: 'mb', ml: 'ml', mh: 'mh', mv: 'mv', ma: 'ma',  // Margin
  maxh: 'maxh', maxw: 'maxw', minh: 'minh', minw: 'minw', // Max / min
  o: 'o',
  oc: 'oc',
  of: 'of',
  oo: 'oo',
  ow: 'ow',
  pt: 'pt', pr: 'pr', pb: 'pb', pl: 'pl', ph: 'ph', pv: 'pv', pa: 'pa', // Padding
  pos: 'pos',
  post: 'post', posr: 'posr', posb: 'posb', posl: 'posl', // Position
  s: 's',
  tt: 'tt',
  ta: 'ta',
  w: 'w',
  ws: 'ws',
}

export interface Breakpoints {
  [key: string]: {
    min?: string,
    max?: string,
  }
}

export interface PseudoClasses {
  [key: string]: string
}

export interface ClassNames {
  [key: string]: string,
}

export interface Description {
  property: string[]
  classNames: ClassNames
}

export type VariableValue = string | number

export interface MultipleVariables {
  [variable: string]: VariableValue
}

export interface Prefixes {
  [prefix: string]: string
}

export type Variables = MultipleVariables | string

export interface VariablesList {
  borderWidths?: Variables
  colors?: Variables
  dimensions?: Variables
  fontFamilies?: Variables
  fontSizes?: Variables
  fontWeights?: Variables
  letterSpacings?: Variables
  lineHeights?: Variables
  opacity?: Variables
  radii?: Variables
  spacing?: Variables
  media?: Breakpoints
  pseudoClasses?: PseudoClasses
}

export type Ast = Description[]

function generateCore (): Ast {
  const core = {
    border () {
      return [
        generate('border', 'ba', 'solid 1px'),
        generate('border-top', 'bt', 'solid 1px'),
        generate('border-right', 'br', 'solid 1px'),
        generate('border-bottom', 'bb', 'solid 1px'),
        generate('border-left', 'bl', 'solid 1px'),
      ]
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
      ]
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
      ]
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
      ]
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
          wrap: 'wrap',
          nowrap: 'nowrap',
          'wrap-reverse': 'wrap-reverse'
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
      ]
    },
    float () {
      return [
        generate('float', 'f', {
          r: 'right',
          l: 'left',
        }),
      ]
    },
    font () {
      return [
        generate('font-style', 's', {
          normal: 'normal',
          italic: 'italic',
          oblique: 'oblique',
        }),
      ]
    },
    overflow () {
      return [
        generate('overflow', 'of', {
          hidden: 'hidden',
          visible: 'visible',
          scroll: 'scroll',
          auto: 'auto',
        }),
      ]
    },
    position () {
      return [
        generate('position', 'pos', {
          relative: 'relative',
          absolute: 'absolute',
          fixed: 'fixed',
          static: 'static',
        }),
      ]
    },
    text () {
      return [
        generate('text-transform', 'tt', {
          uppercase: 'uppercase',
          capitalize: 'capitalize',
          lowercase: 'lowercase',
          none: 'none',
          'full-width': 'full-width',
        }),
        generate('text-align', 'ta', {
          l: 'left',
          r: 'right',
          c: 'center',
          justify: 'justify',
        }),
      ]
    },
    // utils () {
    //   return ``
    // },
  }
  return flattenArray([
    core.border(),
    core.borderStyle(),
    core.cursor(),
    core.display(),
    core.flex(),
    core.float(),
    core.font(),
    core.overflow(),
    core.position(),
    core.text(),
    // core.utils(),
  ])
}

export function backgroundColors (vars: Variables): Ast {
  return [
    generate('background', 'bg', vars),
  ]
}

export function borderColors (vars: Variables): Ast {
  return [
    generate('border-color', 'bc', vars),
    generate('border-top-color', 'btc', vars),
    generate('border-right-color', 'brc', vars),
    generate('border-bottom-color', 'bbc', vars),
    generate('border-left-color', 'blc', vars),
  ]
}

export function borderRadii (vars: Variables): Ast {
  return [
    generate('border-radius', 'bra', vars),
    generate('border-top-right-radius', 'btrr', vars),
    generate('border-bottom-right-radius', 'bbrr', vars),
    generate('border-bottom-left-radius', 'bblr', vars),
    generate('border-top-left-radius', 'btlr', vars),
  ]
}

export function borderWidths (vars: Variables): Ast {
  return [
    generate('border-width', 'bw', vars),
    generate('border-top-width', 'btw', vars),
    generate('border-right-width', 'brw', vars),
    generate('border-bottom-width', 'bbw', vars),
    generate('border-left-width', 'blw', vars),
  ]
}

export function colors (vars: Variables): Ast {
  return [
    generate('color', 'fc', vars),
  ]
}

export function fontFamilies (vars: Variables): Ast {
  return [
    generate('font-family', 'ff', vars),
  ]
}

export function fontSize (vars: Variables): Ast {
  return [
    generate('font-size', 'fs', vars),
  ]
}

export function fontWeights (vars: Variables): Ast {
  return [
    generate('font-weight', 'fw', vars),
  ]
}

export function letterSpacings (vars: Variables): Ast {
  return [
    generate('letter-spacing', 'ls', vars),
  ]
}

export function lineHeights (vars: Variables): Ast {
  return [
    generate('line-height', 'lh', vars),
  ]
}

export function heights (vars: Variables): Ast {
  return [
    generate('height', 'h', vars),
  ]
}

export function margins (vars: Variables): Ast {
  return [
    generate('margin-top', 'mt', vars),
    generate('margin-right', 'mr', vars),
    generate('margin-bottom', 'mb', vars),
    generate('margin-left', 'ml', vars),
    generate(['margin-left', 'margin-right'], 'mh', vars),
    generate(['margin-top', 'margin-bottom'], 'mv', vars),
    generate(['margin-left', 'margin-right', 'margin-top', 'margin-bottom'], 'ma', vars),
  ]
}

export function maxHeights (vars: Variables): Ast {
  return [
    generate('max-height', 'maxh', vars),
  ]
}

export function maxWidths (vars: Variables): Ast {
  return [
    generate('max-width', 'maxw', vars),
  ]
}

export function minHeights (vars: Variables): Ast {
  return [
    generate('min-height', 'minh', vars),
  ]
}

export function minWidths (vars: Variables): Ast {
  return [
    generate('min-width', 'minw', vars),
  ]
}

export function opacity (vars: Variables): Ast {
  return [
    generate('opacity', 'o', vars),
  ]
}

export function outlineColors (vars: Variables): Ast {
  return [
    generate('outline-color', 'oc', vars),
  ]
}

export function outlineOffset (vars: Variables): Ast {
  return [
    generate('outline-offset', 'oo', vars),
  ]
}

export function outlineWidths (vars: Variables): Ast {
  return [
    generate('outline-width', 'ow', vars),
  ]
}

export function paddings (vars: Variables): Ast {
  return [
    generate('padding-top', 'pt', vars),
    generate('padding-right', 'pr', vars),
    generate('padding-bottom', 'pb', vars),
    generate('padding-left', 'pl', vars),
    generate(['padding-left', 'padding-right'], 'ph', vars),
    generate(['padding-top', 'padding-bottom'], 'pv', vars),
    generate(['padding-left', 'padding-right', 'padding-top', 'padding-bottom'], 'pa', vars),
  ]
}

export function topLeftBottomRight (vars: Variables): Ast {
  return [
    generate('top', 'post', vars),
    generate('right', 'posr', vars),
    generate('bottom', 'posb', vars),
    generate('left', 'posl', vars),
  ]
}

export function widths (vars: Variables): Ast {
  return [
    generate('width', 'w', vars),
  ]
}

export function wordSpacings (vars: Variables): Ast {
  return [
    generate('word-spacing', 'ws', vars),
  ]
}

function generate (
  property: string | string[],
  prefix: string,
  vars: Variables,
): Description {
  return {
    property: typeof property === 'string' ? [property] : property,
    classNames: utils.generateKeysAndValues(prefixes[prefix], vars),
  }
}

function flattenArray (arr: any[]): any[] {
  return [].concat.apply([], arr)
}

export function generateAst (vars: VariablesList): Ast {
  return flattenArray([
    generateCore(),
    vars.colors ? backgroundColors(vars.colors) : [],
    vars.colors ? borderColors(vars.colors) : [],
    vars.radii ? borderRadii(vars.radii) : [],
    vars.borderWidths ? borderWidths(vars.borderWidths) : [],
    vars.colors ? colors(vars.colors) : [],
    vars.fontFamilies ? fontFamilies(vars.fontFamilies) : [],
    vars.fontSizes ? fontSize(vars.fontSizes) : [],
    vars.fontWeights ? fontWeights(vars.fontWeights) : [],
    vars.dimensions ? heights(vars.dimensions) : [],
    vars.letterSpacings ? letterSpacings(vars.letterSpacings) : [],
    vars.lineHeights ? lineHeights(vars.lineHeights) : [],
    vars.spacing ? margins(vars.spacing) : [],
    vars.spacing ? maxHeights(vars.spacing) : [],
    vars.spacing ? maxWidths(vars.spacing) : [],
    vars.spacing ? minHeights(vars.spacing) : [],
    vars.spacing ? minWidths(vars.spacing) : [],
    vars.opacity ? opacity(vars.opacity) : [],
    vars.borderWidths ? outlineOffset(vars.borderWidths) : [],
    vars.colors ? outlineColors(vars.colors) : [],
    vars.borderWidths ? outlineWidths(vars.borderWidths) : [],
    vars.spacing ? paddings(vars.spacing) : [],
    vars.spacing ? topLeftBottomRight(vars.spacing) : [],
    vars.dimensions ? widths(vars.dimensions) : [],
    vars.letterSpacings ? wordSpacings(vars.letterSpacings) : [],
  ])
}

export function copyAst (ast: Ast, suffix: string): Ast {
  return ast.map(property => Object.assign({}, property, {
    classNames: Object.keys(property.classNames).reduce((prev, curr) => {
      return Object.assign({}, prev, {
        [`${curr}${suffix}`]: property.classNames[curr],
      })
    }, {}),
  }))
}

function generateCssForClassNames (
  classNames: ClassNames,
  properties: string[],
  space: string,
) {
  return Object.keys(classNames).reduce((pre, className) => {
    const inner = properties.reduce((previous, property) => {
      return previous.concat(`${property}: ${classNames[className]}; `)
    }, '')
    return pre.concat(`${space}.${className} { ${inner }}\n`)
  }, '')
}

export function astToCss (ast: Ast, indent: number = 0): string {
  const space = Array.from({length: indent + 1}).join(' ')
  return ast.reduce((prev, prop) => {
    const classes = generateCssForClassNames(prop.classNames, prop.property, space)
    return prev.concat(classes)
  }, '')
}

export function generateMediaCss (ast: Ast, media: Breakpoints): string {
  return Object.keys(media).map(point => {
    let mediaAst = copyAst(ast, `-${point}`)
    let min = media[point].min
    let max = media[point].max
    let css = astToCss(mediaAst, 2)
    return [
      `@media screen${min ? ` and (min-width: ${min})` : ''}${max ? ` and (max-width: ${max})` : ''} {`,
      `${css}}`,
      ``,
    ].join('\n')
  }).join('\n')
}

function generatePseudoCss (ast: Ast, pseudoClasses: PseudoClasses): string {
  return Object.keys(pseudoClasses).reduce((prev, key) => {
    return astToCss(copyAst(ast, `-${pseudoClasses[key]}:${key}`))
  }, '')
}

export function generateCss (vars: VariablesList): string {
  const ast = generateAst(vars)
  const coreCss = astToCss(ast)
  const pseudoCss = generatePseudoCss(ast, vars.pseudoClasses || {})
  const mediaCss = generateMediaCss(ast, vars.media || {})

  return [
    coreCss,
    pseudoCss,
    mediaCss,
  ].join('\n')
}

function process (css: string, minify: boolean) {
  const plugins = [
    postcssFixes({preset: 'safe'}),
    stylelint(stylelintConfig),
    autoprefixer,
    reporter(),
    minify ? cssnano() : null,
  ].filter(a => !!a)
  return postcss(plugins).process(css)
}

export default function (vars: VariablesList, minify: boolean) {
  const css = generateCss(vars)
  return process(css, minify)
}
