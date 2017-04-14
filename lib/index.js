"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var postcss = require("postcss");
var autoprefixer = require("autoprefixer");
var stylelint = require("stylelint");
var standardStyleLint = require("stylelint-config-standard");
var reporter = require("postcss-reporter");
var postcssFixes = require("postcss-fixes");
var cssnano = require("cssnano");
var utils = require("./utils");
var stylelintConfig = __assign({}, standardStyleLint, { rules: __assign({}, standardStyleLint.rules, { 'declaration-block-single-line-max-declarations': 4, 'declaration-block-no-redundant-longhand-properties': [true, {
                ignoreShorthands: ['padding', 'margin']
            }] }) });
var prefixes = {
    bg: 'bg',
    ba: 'ba', bl: 'bl', br: 'br', bt: 'bt', bb: 'bb',
    bc: 'bc', btc: 'btc', brc: 'brc', bbc: 'bbc', blc: 'blc',
    bs: 'bs', bts: 'bts', brs: 'brs', bbs: 'bbs', bls: 'bls',
    bra: 'bra', btrr: 'btrr', bbrr: 'bbrr', bblr: 'bblr', btlr: 'btlr',
    bw: 'bw', btw: 'btw', brw: 'brw', bbw: 'bbw', blw: 'blw',
    c: 'c',
    d: 'd',
    f: 'f',
    fc: 'fc',
    fd: 'fd',
    ff: 'ff',
    'align-items': 'align-items', flex: 'flex', 'flex-direction': 'flex-direction', 'flex-grow': 'flex-grow', 'flex-shrink': 'flex-shrink', 'flex-wrap': 'flex-wrap', 'justify-content': 'justify-content',
    fs: 'fs',
    fw: 'fw',
    ls: 'ls',
    lh: 'lh',
    h: 'h',
    mt: 'mt', mr: 'mr', mb: 'mb', ml: 'ml', mh: 'mh', mv: 'mv', ma: 'ma',
    maxh: 'maxh', maxw: 'maxw', minh: 'minh', minw: 'minw',
    o: 'o',
    oc: 'oc',
    of: 'of',
    oo: 'oo',
    ow: 'ow',
    pt: 'pt', pr: 'pr', pb: 'pb', pl: 'pl', ph: 'ph', pv: 'pv', pa: 'pa',
    pos: 'pos',
    post: 'post', posr: 'posr', posb: 'posb', posl: 'posl',
    s: 's',
    tt: 'tt',
    ta: 'ta',
    w: 'w',
    ws: 'ws'
};
function generateCore() {
    var core = {
        border: function () {
            return [
                generate('border', 'ba', 'solid 1px'),
                generate('border-top', 'bt', 'solid 1px'),
                generate('border-right', 'br', 'solid 1px'),
                generate('border-bottom', 'bb', 'solid 1px'),
                generate('border-left', 'bl', 'solid 1px'),
            ];
        },
        borderStyle: function () {
            var borderStyles = {
                none: 'none',
                dotted: 'dotted',
                dashed: 'dashed',
                solid: 'solid',
                double: 'double',
                groove: 'groove',
                ridge: 'ridge',
                inset: 'inset',
                outset: 'outset'
            };
            return [
                generate('border-style', 'bs', borderStyles),
                generate('border-top-style', 'bts', borderStyles),
                generate('border-right-style', 'brs', borderStyles),
                generate('border-bottom-style', 'bbs', borderStyles),
                generate('border-left-style', 'bls', borderStyles),
            ];
        },
        cursor: function () {
            return [
                generate('cursor', 'c', {
                    auto: 'auto',
                    "default": 'default',
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
                    grabbing: 'grabbing'
                }),
            ];
        },
        display: function () {
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
                    "if": 'inline-flex',
                    inherit: 'inherit',
                    initial: 'initial',
                    unset: 'unset'
                }),
            ];
        },
        flex: function () {
            var flexSizes = {
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
                10: '10'
            };
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
                    right: 'right'
                }),
                generate('flex', 'flex', flexSizes),
                generate('flex-direction', 'flex-direction', {
                    row: 'row',
                    column: 'column',
                    'row-reverse': 'row-reverse',
                    'column-reverse': 'column-reverse'
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
                    stretch: 'stretch'
                }),
            ];
        },
        float: function () {
            return [
                generate('float', 'f', {
                    r: 'right',
                    l: 'left'
                }),
            ];
        },
        font: function () {
            return [
                generate('font-style', 's', {
                    normal: 'normal',
                    italic: 'italic',
                    oblique: 'oblique'
                }),
            ];
        },
        overflow: function () {
            return [
                generate('overflow', 'of', {
                    hidden: 'hidden',
                    visible: 'visible',
                    scroll: 'scroll',
                    auto: 'auto'
                }),
            ];
        },
        position: function () {
            return [
                generate('position', 'pos', {
                    relative: 'relative',
                    absolute: 'absolute',
                    fixed: 'fixed',
                    static: 'static'
                }),
            ];
        },
        text: function () {
            return [
                generate('text-transform', 'tt', {
                    uppercase: 'uppercase',
                    capitalize: 'capitalize',
                    lowercase: 'lowercase',
                    none: 'none',
                    'full-width': 'full-width'
                }),
                generate('text-align', 'ta', {
                    l: 'left',
                    r: 'right',
                    c: 'center',
                    justify: 'justify'
                }),
            ];
        }
    };
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
    ]);
}
function backgroundColors(vars) {
    return [
        generate('background', 'bg', vars),
    ];
}
exports.backgroundColors = backgroundColors;
function borderColors(vars) {
    return [
        generate('border-color', 'bc', vars),
        generate('border-top-color', 'btc', vars),
        generate('border-right-color', 'brc', vars),
        generate('border-bottom-color', 'bbc', vars),
        generate('border-left-color', 'blc', vars),
    ];
}
exports.borderColors = borderColors;
function borderRadii(vars) {
    return [
        generate('border-radius', 'bra', vars),
        generate('border-top-right-radius', 'btrr', vars),
        generate('border-bottom-right-radius', 'bbrr', vars),
        generate('border-bottom-left-radius', 'bblr', vars),
        generate('border-top-left-radius', 'btlr', vars),
    ];
}
exports.borderRadii = borderRadii;
function borderWidths(vars) {
    return [
        generate('border-width', 'bw', vars),
        generate('border-top-width', 'btw', vars),
        generate('border-right-width', 'brw', vars),
        generate('border-bottom-width', 'bbw', vars),
        generate('border-left-width', 'blw', vars),
    ];
}
exports.borderWidths = borderWidths;
function colors(vars) {
    return [
        generate('color', 'fc', vars),
    ];
}
exports.colors = colors;
function fontFamilies(vars) {
    return [
        generate('font-family', 'ff', vars),
    ];
}
exports.fontFamilies = fontFamilies;
function fontSize(vars) {
    return [
        generate('font-size', 'fs', vars),
    ];
}
exports.fontSize = fontSize;
function fontWeights(vars) {
    return [
        generate('font-weight', 'fw', vars),
    ];
}
exports.fontWeights = fontWeights;
function letterSpacings(vars) {
    return [
        generate('letter-spacing', 'ls', vars),
    ];
}
exports.letterSpacings = letterSpacings;
function lineHeights(vars) {
    return [
        generate('line-height', 'lh', vars),
    ];
}
exports.lineHeights = lineHeights;
function heights(vars) {
    return [
        generate('height', 'h', vars),
    ];
}
exports.heights = heights;
function margins(vars) {
    return [
        generate('margin-top', 'mt', vars),
        generate('margin-right', 'mr', vars),
        generate('margin-bottom', 'mb', vars),
        generate('margin-left', 'ml', vars),
        generate(['margin-left', 'margin-right'], 'mh', vars),
        generate(['margin-top', 'margin-bottom'], 'mv', vars),
        generate(['margin-left', 'margin-right', 'margin-top', 'margin-bottom'], 'ma', vars),
    ];
}
exports.margins = margins;
function maxHeights(vars) {
    return [
        generate('max-height', 'maxh', vars),
    ];
}
exports.maxHeights = maxHeights;
function maxWidths(vars) {
    return [
        generate('max-width', 'maxw', vars),
    ];
}
exports.maxWidths = maxWidths;
function minHeights(vars) {
    return [
        generate('min-height', 'minh', vars),
    ];
}
exports.minHeights = minHeights;
function minWidths(vars) {
    return [
        generate('min-width', 'minw', vars),
    ];
}
exports.minWidths = minWidths;
function opacity(vars) {
    return [
        generate('opacity', 'o', vars),
    ];
}
exports.opacity = opacity;
function outlineColors(vars) {
    return [
        generate('outline-color', 'oc', vars),
    ];
}
exports.outlineColors = outlineColors;
function outlineOffset(vars) {
    return [
        generate('outline-offset', 'oo', vars),
    ];
}
exports.outlineOffset = outlineOffset;
function outlineWidths(vars) {
    return [
        generate('outline-width', 'ow', vars),
    ];
}
exports.outlineWidths = outlineWidths;
function paddings(vars) {
    return [
        generate('padding-top', 'pt', vars),
        generate('padding-right', 'pr', vars),
        generate('padding-bottom', 'pb', vars),
        generate('padding-left', 'pl', vars),
        generate(['padding-left', 'padding-right'], 'ph', vars),
        generate(['padding-top', 'padding-bottom'], 'pv', vars),
        generate(['padding-left', 'padding-right', 'padding-top', 'padding-bottom'], 'pa', vars),
    ];
}
exports.paddings = paddings;
function topLeftBottomRight(vars) {
    return [
        generate('top', 'post', vars),
        generate('right', 'posr', vars),
        generate('bottom', 'posb', vars),
        generate('left', 'posl', vars),
    ];
}
exports.topLeftBottomRight = topLeftBottomRight;
function widths(vars) {
    return [
        generate('width', 'w', vars),
    ];
}
exports.widths = widths;
function wordSpacings(vars) {
    return [
        generate('word-spacing', 'ws', vars),
    ];
}
exports.wordSpacings = wordSpacings;
function generate(property, prefix, vars) {
    return {
        property: typeof property === 'string' ? [property] : property,
        classNames: utils.generateKeysAndValues(prefixes[prefix], vars)
    };
}
function flattenArray(arr) {
    return [].concat.apply([], arr);
}
function generateAst(vars) {
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
    ]);
}
exports.generateAst = generateAst;
function copyAst(ast, suffix) {
    return ast.map(function (property) { return Object.assign({}, property, {
        classNames: Object.keys(property.classNames).reduce(function (prev, curr) {
            return Object.assign({}, prev, (_a = {},
                _a["" + curr + suffix] = property.classNames[curr],
                _a));
            var _a;
        }, {})
    }); });
}
exports.copyAst = copyAst;
function generateCssForClassNames(classNames, properties, space) {
    return Object.keys(classNames).reduce(function (pre, className) {
        var inner = properties.reduce(function (previous, property) {
            return previous.concat(property + ": " + classNames[className] + "; ");
        }, '');
        return pre.concat(space + "." + className + " { " + inner + "}\n");
    }, '');
}
function astToCss(ast, indent) {
    if (indent === void 0) { indent = 0; }
    var space = Array.from({ length: indent + 1 }).join(' ');
    return ast.reduce(function (prev, prop) {
        var classes = generateCssForClassNames(prop.classNames, prop.property, space);
        return prev.concat(classes);
    }, '');
}
exports.astToCss = astToCss;
function generateMediaCss(ast, media) {
    return Object.keys(media).map(function (point) {
        var mediaAst = copyAst(ast, "-" + point);
        var min = media[point].min;
        var max = media[point].max;
        var css = astToCss(mediaAst, 2);
        return [
            "@media screen" + (min ? " and (min-width: " + min + ")" : '') + (max ? " and (max-width: " + max + ")" : '') + " {",
            css + "}",
            "",
        ].join('\n');
    }).join('\n');
}
exports.generateMediaCss = generateMediaCss;
function generatePseudoCss(ast, pseudoClasses) {
    return Object.keys(pseudoClasses).reduce(function (prev, key) {
        return astToCss(copyAst(ast, "-" + pseudoClasses[key] + ":" + key));
    }, '');
}
function generateCss(vars) {
    var ast = generateAst(vars);
    var coreCss = astToCss(ast);
    var pseudoCss = generatePseudoCss(ast, vars.pseudoClasses || {});
    var mediaCss = generateMediaCss(ast, vars.media || {});
    return [
        coreCss,
        pseudoCss,
        mediaCss,
    ].join('\n');
}
exports.generateCss = generateCss;
function process(css, minify) {
    var plugins = [
        postcssFixes({ preset: 'safe' }),
        stylelint(stylelintConfig),
        autoprefixer,
        reporter(),
        minify ? cssnano() : null,
    ].filter(function (a) { return !!a; });
    return postcss(plugins).process(css);
}
function default_1(vars, minify) {
    var css = generateCss(vars);
    return process(css, minify);
}
exports["default"] = default_1;
