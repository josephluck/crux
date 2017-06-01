import * as postcss from 'postcss'
import * as autoprefixer from 'autoprefixer'
import * as postcssFixes from 'postcss-fixes'
import * as cssnano from 'cssnano'
import * as utils from './utils'

export interface PrefixList {
  'background'?: string
  'border-all'?: string
  'border-left'?: string
  'border-right'?: string
  'border-top'?: string
  'border-bottom'?: string
  'border-color'?: string
  'border-top-color'?: string
  'border-right-color'?: string
  'border-bottom-color'?: string
  'border-left-color'?: string
  'border-style'?: string
  'border-top-style'?: string
  'border-right-style'?: string
  'border-bottom-style'?: string
  'border-left-style'?: string
  'border-radius-all'?: string
  'border-top-right-radius'?: string
  'border-bottom-right-radius'?: string
  'border-bottom-left-radius'?: string
  'border-top-left-radius'?: string
  'border-width-all'?: string
  'border-top-width'?: string
  'border-right-width'?: string
  'border-bottom-width'?: string
  'border-left-width'?: string
  'cursor'?: string
  'display'?: string
  'float'?: string
  'font-color'?: string
  'font-family'?: string
  'align-items'?: string
  'flex'?: string
  'flex-direction'?: string
  'flex-grow'?: string
  'flex-shrink'?: string
  'flex-wrap'?: string
  'justify-content'?: string
  'font-size'?: string
  'font-weight'?: string
  'letter-spacing'?: string
  'line-height'?: string
  'height'?: string
  'margin-all'?: string
  'margin-horizontal'?: string
  'margin-vertical'?: string
  'margin-top'?: string
  'margin-right'?: string
  'margin-bottom'?: string
  'margin-left'?: string
  'max-height'?: string
  'max-width'?: string
  'min-height'?: string
  'min-width'?: string
  'opacity'?: string
  'outline-color'?: string
  'overflow'?: string
  'outline-offset'?: string
  'outline-width'?: string
  'padding-all'?: string
  'padding-horizontal'?: string
  'padding-vertical'?: string
  'padding-top'?: string
  'padding-right'?: string
  'padding-bottom'?: string
  'padding-left'?: string
  'position'?: string
  'position-top'?: string
  'position-right'?: string
  'position-bottom'?: string
  'position-left'?: string
  'font-style'?: string
  'text-transform'?: string
  'text-align'?: string
  'width'?: string
  'word-spacing'?: string
  'svg-stroke'?: string
  'svg-fill'?: string
}

const defaultPrefixes: Prefixes = {
  'background': 'bg',
  'border-all': 'ba',
  'border-left': 'bl',
  'border-right': 'br',
  'border-top': 'bt',
  'border-bottom': 'bb',
  'border-color': 'bc',
  'border-top-color': 'btc',
  'border-right-color': 'brc',
  'border-bottom-color': 'bbc',
  'border-left-color': 'blc',
  'border-style': 'bs',
  'border-top-style': 'bts',
  'border-right-style': 'brs',
  'border-bottom-style': 'bbs',
  'border-left-style': 'bls',
  'border-radius-all': 'bra',
  'border-top-right-radius': 'btrr',
  'border-bottom-right-radius': 'bbrr',
  'border-bottom-left-radius': 'bblr',
  'border-top-left-radius': 'btlr',
  'border-width-all': 'bw',
  'border-top-width': 'btw',
  'border-right-width': 'brw',
  'border-bottom-width': 'bbw',
  'border-left-width': 'blw',
  'cursor': 'c',
  'display': 'd',
  'float': 'f',
  'font-color': 'fc',
  'font-family': 'ff',
  'align-items': 'align-items',
  'flex': 'flex',
  'flex-direction': 'flex-direction',
  'flex-grow': 'flex-grow',
  'flex-shrink': 'flex-shrink',
  'flex-wrap': 'flex-wrap',
  'justify-content': 'justify-content',
  'font-size': 'fs',
  'font-weight': 'fw',
  'letter-spacing': 'ls',
  'line-height': 'lh',
  'height': 'h',
  'margin-all': 'ma',
  'margin-horizontal': 'mh',
  'margin-vertical': 'mv',
  'margin-top': 'mt',
  'margin-right': 'mr',
  'margin-bottom': 'mb',
  'margin-left': 'ml',
  'max-height': 'maxh',
  'max-width': 'maxw',
  'min-height': 'minh',
  'min-width': 'minw',
  'opacity': 'o',
  'outline-color': 'oc',
  'overflow': 'of',
  'outline-offset': 'oo',
  'outline-width': 'ow',
  'padding-top': 'pt',
  'padding-right': 'pr',
  'padding-bottom': 'pb',
  'padding-left': 'pl',
  'padding-horizontal': 'ph',
  'padding-vertical': 'pv',
  'padding-all': 'pa',
  'position': 'pos',
  'position-top': 'post',
  'position-right': 'posr',
  'position-bottom': 'posb',
  'position-left': 'posl',
  'font-style': 's',
  'text-transform': 'tt',
  'text-align': 'ta',
  'width': 'w',
  'word-spacing': 'ws',
  'svg-fill': 'fill',
  'svg-stroke': 'stroke',
}

export type Prefixes = Record<keyof PrefixList, string>

function createPrefixes (prefixes: PrefixList = {}): Prefixes {
  const pre = {
    ...defaultPrefixes,
    ...prefixes,
  }
  return pre
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

function generateCore (generate: PropertyGenerator): Ast {
  const core = {
    border () {
      return [
        generate('border', 'border-all', 'solid 1px'),
        generate('border-top', 'border-top', 'solid 1px'),
        generate('border-right', 'border-right', 'solid 1px'),
        generate('border-bottom', 'border-bottom', 'solid 1px'),
        generate('border-left', 'border-left', 'solid 1px'),
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
        generate('border-style', 'border-style', borderStyles),
        generate('border-top-style', 'border-top-style', borderStyles),
        generate('border-right-style', 'border-right-style', borderStyles),
        generate('border-bottom-style', 'border-bottom-style', borderStyles),
        generate('border-left-style', 'border-left-style', borderStyles),
      ]
    },
    cursor () {
      return [
        generate('cursor', 'cursor', {
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
        generate('display', 'display', {
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
          'wrap-reverse': 'wrap-reverse',
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
        generate('float', 'float', {
          r: 'right',
          l: 'left',
        }),
      ]
    },
    font () {
      return [
        generate('font-style', 'font-style', {
          normal: 'normal',
          italic: 'italic',
          oblique: 'oblique',
        }),
      ]
    },
    overflow () {
      return [
        generate('overflow', 'overflow', {
          hidden: 'hidden',
          visible: 'visible',
          scroll: 'scroll',
          auto: 'auto',
        }),
      ]
    },
    position () {
      return [
        generate('position', 'position', {
          relative: 'relative',
          absolute: 'absolute',
          fixed: 'fixed',
          static: 'static',
        }),
      ]
    },
    text () {
      return [
        generate('text-transform', 'text-transform', {
          uppercase: 'uppercase',
          capitalize: 'capitalize',
          lowercase: 'lowercase',
          none: 'none',
          'full-width': 'full-width',
        }),
        generate('text-align', 'text-align', {
          l: 'left',
          r: 'right',
          c: 'center',
          justify: 'justify',
        }),
      ]
    },
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
  ])
}

export function backgroundColors (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('background', 'background', vars),
  ]
}

export function borderColors (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('border-color', 'border-color', vars),
    generator('border-top-color', 'border-top-color', vars),
    generator('border-right-color', 'border-right-color', vars),
    generator('border-bottom-color', 'border-bottom-color', vars),
    generator('border-left-color', 'border-left-color', vars),
  ]
}

export function borderRadii (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('border-radius', 'border-radius-all', vars),
    generator('border-top-right-radius', 'border-top-right-radius', vars),
    generator('border-bottom-right-radius', 'border-bottom-right-radius', vars),
    generator('border-bottom-left-radius', 'border-bottom-left-radius', vars),
    generator('border-top-left-radius', 'border-top-left-radius', vars),
  ]
}

export function borderWidths (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('border-width', 'border-width-all', vars),
    generator('border-top-width', 'border-top-width', vars),
    generator('border-right-width', 'border-right-width', vars),
    generator('border-bottom-width', 'border-bottom-width', vars),
    generator('border-left-width', 'border-left-width', vars),
  ]
}

export function colors (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('color', 'font-color', vars),
  ]
}

export function fontFamilies (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('font-family', 'font-family', vars),
  ]
}

export function fontSize (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('font-size', 'font-size', vars),
  ]
}

export function fontWeights (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('font-weight', 'font-weight', vars),
  ]
}

export function letterSpacings (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('letter-spacing', 'letter-spacing', vars),
  ]
}

export function lineHeights (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('line-height', 'line-height', vars),
  ]
}

export function heights (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('height', 'height', vars),
  ]
}

export function margins (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('margin-top', 'margin-top', vars),
    generator('margin-right', 'margin-right', vars),
    generator('margin-bottom', 'margin-bottom', vars),
    generator('margin-left', 'margin-left', vars),
    generator(['margin-left', 'margin-right'], 'margin-horizontal', vars),
    generator(['margin-top', 'margin-bottom'], 'margin-vertical', vars),
    generator(['margin-left', 'margin-right', 'margin-top', 'margin-bottom'], 'margin-all', vars),
  ]
}

export function maxHeights (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('max-height', 'max-height', vars),
  ]
}

export function maxWidths (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('max-width', 'max-width', vars),
  ]
}

export function minHeights (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('min-height', 'min-height', vars),
  ]
}

export function minWidths (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('min-width', 'min-width', vars),
  ]
}

export function opacity (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('opacity', 'opacity', vars),
  ]
}

export function outlineColors (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('outline-color', 'outline-color', vars),
  ]
}

export function outlineOffset (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('outline-offset', 'outline-offset', vars),
  ]
}

export function outlineWidths (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('outline-width', 'outline-width', vars),
  ]
}

export function paddings (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('padding-top', 'padding-top', vars),
    generator('padding-right', 'padding-right', vars),
    generator('padding-bottom', 'padding-bottom', vars),
    generator('padding-left', 'padding-left', vars),
    generator(['padding-left', 'padding-right'], 'padding-horizontal', vars),
    generator(['padding-top', 'padding-bottom'], 'padding-vertical', vars),
    generator(['padding-left', 'padding-right', 'padding-top', 'padding-bottom'], 'padding-all', vars),
  ]
}

export function svgFills (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('fill', 'svg-fill', vars),
  ]
}

export function svgStrokes (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('stroke', 'svg-stroke', vars),
  ]
}

export function topLeftBottomRight (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('top', 'position-top', vars),
    generator('right', 'position-right', vars),
    generator('bottom', 'position-bottom', vars),
    generator('left', 'position-left', vars),
  ]
}

export function widths (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('width', 'width', vars),
  ]
}

export function wordSpacings (generator: PropertyGenerator, vars: Variables): Ast {
  return [
    generator('word-spacing', 'word-spacing', vars),
  ]
}

export type PropertyGenerator = (
  property: string | string[],
  prefix: keyof Prefixes,
  variables: Variables,
) => Description

function createGenerator (
  prefixes: Prefixes,
): PropertyGenerator {
  return function propertyGenerator (
    property: string | string[],
    prefix: keyof Prefixes,
    variables: Variables,
  ): Description {
    return {
      property: typeof property === 'string' ? [property] : property,
      classNames: utils.generateKeysAndValues(prefixes[prefix], variables),
    }
  }
}

function flattenArray (arr: any[]): any[] {
  return [].concat.apply([], arr)
}

export function generateAst (generator: PropertyGenerator, vars: VariablesList, includeCore: boolean): Ast {
  return flattenArray([
    includeCore ? generateCore(generator) : [],
    vars.colors ? backgroundColors(generator, vars.colors) : [],
    vars.colors ? borderColors(generator, vars.colors) : [],
    vars.radii ? borderRadii(generator, vars.radii) : [],
    vars.borderWidths ? borderWidths(generator, vars.borderWidths) : [],
    vars.colors ? colors(generator, vars.colors) : [],
    vars.fontFamilies ? fontFamilies(generator, vars.fontFamilies) : [],
    vars.fontSizes ? fontSize(generator, vars.fontSizes) : [],
    vars.fontWeights ? fontWeights(generator, vars.fontWeights) : [],
    vars.dimensions ? heights(generator, vars.dimensions) : [],
    vars.letterSpacings ? letterSpacings(generator, vars.letterSpacings) : [],
    vars.lineHeights ? lineHeights(generator, vars.lineHeights) : [],
    vars.spacing ? margins(generator, vars.spacing) : [],
    vars.spacing ? maxHeights(generator, vars.spacing) : [],
    vars.spacing ? maxWidths(generator, vars.spacing) : [],
    vars.spacing ? minHeights(generator, vars.spacing) : [],
    vars.spacing ? minWidths(generator, vars.spacing) : [],
    vars.opacity ? opacity(generator, vars.opacity) : [],
    vars.borderWidths ? outlineOffset(generator, vars.borderWidths) : [],
    vars.colors ? outlineColors(generator, vars.colors) : [],
    vars.borderWidths ? outlineWidths(generator, vars.borderWidths) : [],
    vars.spacing ? paddings(generator, vars.spacing) : [],
    vars.spacing ? topLeftBottomRight(generator, vars.spacing) : [],
    vars.dimensions ? widths(generator, vars.dimensions) : [],
    vars.letterSpacings ? wordSpacings(generator, vars.letterSpacings) : [],
    vars.colors ? svgFills(generator, vars.colors) : [],
    vars.colors ? svgStrokes(generator, vars.colors) : [],
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

export function generateCss (vars: VariablesList, prefixes: PrefixList, includeCore: boolean): string {
  const generator = createGenerator(createPrefixes(prefixes))
  const ast = generateAst(generator, vars, includeCore)
  const coreCss = astToCss(ast)
  const pseudoCss = generatePseudoCss(ast, vars.pseudoClasses || {})
  const mediaCss = generateMediaCss(ast, vars.media || {})

  return [
    coreCss,
    pseudoCss,
    mediaCss,
  ].join('\n')
}

export interface Opts {
  minify?: boolean
  plugins?: any[]
  includeCore?: boolean
  prefixes?: PrefixList
}

function process (css: string, opts: Opts) {
  const plugins = [
    postcssFixes({preset: 'safe'}),
    autoprefixer,
    opts.minify ? cssnano() : null,
    ...opts.plugins,
  ].filter(a => !!a)
  return postcss(plugins).process(css)
}

export default function (vars: VariablesList, opts: Opts) {
  const css = generateCss(vars, opts.prefixes, opts.includeCore)
  if (utils.isNode()) {
    return process(css, opts)
  } else {
    return css
  }
}
