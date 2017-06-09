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
var utils = require("./utils");
var defaultPrefixes = {
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
    'svg-stroke': 'stroke'
};
function createPrefixes(prefixes) {
    if (prefixes === void 0) { prefixes = {}; }
    var pre = __assign({}, defaultPrefixes, prefixes);
    return pre;
}
function generateCore(generate) {
    var core = {
        border: function () {
            return [
                generate('border', 'border-all', 'solid 1px'),
                generate('border-top', 'border-top', 'solid 1px'),
                generate('border-right', 'border-right', 'solid 1px'),
                generate('border-bottom', 'border-bottom', 'solid 1px'),
                generate('border-left', 'border-left', 'solid 1px'),
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
                generate('border-style', 'border-style', borderStyles),
                generate('border-top-style', 'border-top-style', borderStyles),
                generate('border-right-style', 'border-right-style', borderStyles),
                generate('border-bottom-style', 'border-bottom-style', borderStyles),
                generate('border-left-style', 'border-left-style', borderStyles),
            ];
        },
        cursor: function () {
            return [
                generate('cursor', 'cursor', {
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
                generate('float', 'float', {
                    r: 'right',
                    l: 'left'
                }),
            ];
        },
        font: function () {
            return [
                generate('font-style', 'font-style', {
                    normal: 'normal',
                    italic: 'italic',
                    oblique: 'oblique'
                }),
            ];
        },
        overflow: function () {
            return [
                generate('overflow', 'overflow', {
                    hidden: 'hidden',
                    visible: 'visible',
                    scroll: 'scroll',
                    auto: 'auto'
                }),
            ];
        },
        position: function () {
            return [
                generate('position', 'position', {
                    relative: 'relative',
                    absolute: 'absolute',
                    fixed: 'fixed',
                    static: 'static'
                }),
            ];
        },
        text: function () {
            return [
                generate('text-transform', 'text-transform', {
                    uppercase: 'uppercase',
                    capitalize: 'capitalize',
                    lowercase: 'lowercase',
                    none: 'none',
                    'full-width': 'full-width'
                }),
                generate('text-align', 'text-align', {
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
function backgroundColors(generator, vars) {
    return [
        generator('background', 'background', vars),
    ];
}
exports.backgroundColors = backgroundColors;
function borderColors(generator, vars) {
    return [
        generator('border-color', 'border-color', vars),
        generator('border-top-color', 'border-top-color', vars),
        generator('border-right-color', 'border-right-color', vars),
        generator('border-bottom-color', 'border-bottom-color', vars),
        generator('border-left-color', 'border-left-color', vars),
    ];
}
exports.borderColors = borderColors;
function borderRadii(generator, vars) {
    return [
        generator('border-radius', 'border-radius-all', vars),
        generator('border-top-right-radius', 'border-top-right-radius', vars),
        generator('border-bottom-right-radius', 'border-bottom-right-radius', vars),
        generator('border-bottom-left-radius', 'border-bottom-left-radius', vars),
        generator('border-top-left-radius', 'border-top-left-radius', vars),
    ];
}
exports.borderRadii = borderRadii;
function borderWidths(generator, vars) {
    return [
        generator('border-width', 'border-width-all', vars),
        generator('border-top-width', 'border-top-width', vars),
        generator('border-right-width', 'border-right-width', vars),
        generator('border-bottom-width', 'border-bottom-width', vars),
        generator('border-left-width', 'border-left-width', vars),
    ];
}
exports.borderWidths = borderWidths;
function colors(generator, vars) {
    return [
        generator('color', 'font-color', vars),
    ];
}
exports.colors = colors;
function fontFamilies(generator, vars) {
    return [
        generator('font-family', 'font-family', vars),
    ];
}
exports.fontFamilies = fontFamilies;
function fontSize(generator, vars) {
    return [
        generator('font-size', 'font-size', vars),
    ];
}
exports.fontSize = fontSize;
function fontWeights(generator, vars) {
    return [
        generator('font-weight', 'font-weight', vars),
    ];
}
exports.fontWeights = fontWeights;
function letterSpacings(generator, vars) {
    return [
        generator('letter-spacing', 'letter-spacing', vars),
    ];
}
exports.letterSpacings = letterSpacings;
function lineHeights(generator, vars) {
    return [
        generator('line-height', 'line-height', vars),
    ];
}
exports.lineHeights = lineHeights;
function heights(generator, vars) {
    return [
        generator('height', 'height', vars),
    ];
}
exports.heights = heights;
function margins(generator, vars) {
    return [
        generator('margin-top', 'margin-top', vars),
        generator('margin-right', 'margin-right', vars),
        generator('margin-bottom', 'margin-bottom', vars),
        generator('margin-left', 'margin-left', vars),
        generator(['margin-left', 'margin-right'], 'margin-horizontal', vars),
        generator(['margin-top', 'margin-bottom'], 'margin-vertical', vars),
        generator(['margin-left', 'margin-right', 'margin-top', 'margin-bottom'], 'margin-all', vars),
    ];
}
exports.margins = margins;
function maxHeights(generator, vars) {
    return [
        generator('max-height', 'max-height', vars),
    ];
}
exports.maxHeights = maxHeights;
function maxWidths(generator, vars) {
    return [
        generator('max-width', 'max-width', vars),
    ];
}
exports.maxWidths = maxWidths;
function minHeights(generator, vars) {
    return [
        generator('min-height', 'min-height', vars),
    ];
}
exports.minHeights = minHeights;
function minWidths(generator, vars) {
    return [
        generator('min-width', 'min-width', vars),
    ];
}
exports.minWidths = minWidths;
function opacity(generator, vars) {
    return [
        generator('opacity', 'opacity', vars),
    ];
}
exports.opacity = opacity;
function outlineColors(generator, vars) {
    return [
        generator('outline-color', 'outline-color', vars),
    ];
}
exports.outlineColors = outlineColors;
function outlineOffset(generator, vars) {
    return [
        generator('outline-offset', 'outline-offset', vars),
    ];
}
exports.outlineOffset = outlineOffset;
function outlineWidths(generator, vars) {
    return [
        generator('outline-width', 'outline-width', vars),
    ];
}
exports.outlineWidths = outlineWidths;
function paddings(generator, vars) {
    return [
        generator('padding-top', 'padding-top', vars),
        generator('padding-right', 'padding-right', vars),
        generator('padding-bottom', 'padding-bottom', vars),
        generator('padding-left', 'padding-left', vars),
        generator(['padding-left', 'padding-right'], 'padding-horizontal', vars),
        generator(['padding-top', 'padding-bottom'], 'padding-vertical', vars),
        generator(['padding-left', 'padding-right', 'padding-top', 'padding-bottom'], 'padding-all', vars),
    ];
}
exports.paddings = paddings;
function svgFills(generator, vars) {
    return [
        generator('fill', 'svg-fill', vars),
    ];
}
exports.svgFills = svgFills;
function svgStrokes(generator, vars) {
    return [
        generator('stroke', 'svg-stroke', vars),
    ];
}
exports.svgStrokes = svgStrokes;
function topLeftBottomRight(generator, vars) {
    return [
        generator('top', 'position-top', vars),
        generator('right', 'position-right', vars),
        generator('bottom', 'position-bottom', vars),
        generator('left', 'position-left', vars),
    ];
}
exports.topLeftBottomRight = topLeftBottomRight;
function widths(generator, vars) {
    return [
        generator('width', 'width', vars),
    ];
}
exports.widths = widths;
function wordSpacings(generator, vars) {
    return [
        generator('word-spacing', 'word-spacing', vars),
    ];
}
exports.wordSpacings = wordSpacings;
function createGenerator(prefixes) {
    return function propertyGenerator(property, prefix, variables) {
        return {
            property: typeof property === 'string' ? [property] : property,
            classNames: utils.generateKeysAndValues(prefixes[prefix], variables)
        };
    };
}
function flattenArray(arr) {
    return [].concat.apply([], arr);
}
function generateAst(generator, vars, includeCore) {
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
function generateCss(vars, prefixes, includeCore) {
    var generator = createGenerator(createPrefixes(prefixes));
    var ast = generateAst(generator, vars, includeCore);
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
function default_1(vars, opts) {
    return generateCss(vars, opts.prefixes, opts.includeCore);
}
exports["default"] = default_1;
