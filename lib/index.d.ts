export interface PrefixList {
    'background'?: string;
    'border-all'?: string;
    'border-left'?: string;
    'border-right'?: string;
    'border-top'?: string;
    'border-bottom'?: string;
    'border-color'?: string;
    'border-top-color'?: string;
    'border-right-color'?: string;
    'border-bottom-color'?: string;
    'border-left-color'?: string;
    'border-style'?: string;
    'border-top-style'?: string;
    'border-right-style'?: string;
    'border-bottom-style'?: string;
    'border-left-style'?: string;
    'border-radius-all'?: string;
    'border-top-right-radius'?: string;
    'border-bottom-right-radius'?: string;
    'border-bottom-left-radius'?: string;
    'border-top-left-radius'?: string;
    'border-width-all'?: string;
    'border-top-width'?: string;
    'border-right-width'?: string;
    'border-bottom-width'?: string;
    'border-left-width'?: string;
    'cursor'?: string;
    'display'?: string;
    'float'?: string;
    'font-color'?: string;
    'font-family'?: string;
    'align-items'?: string;
    'flex'?: string;
    'flex-direction'?: string;
    'flex-grow'?: string;
    'flex-shrink'?: string;
    'flex-wrap'?: string;
    'justify-content'?: string;
    'font-size'?: string;
    'font-weight'?: string;
    'letter-spacing'?: string;
    'line-height'?: string;
    'height'?: string;
    'margin-all'?: string;
    'margin-horizontal'?: string;
    'margin-vertical'?: string;
    'margin-top'?: string;
    'margin-right'?: string;
    'margin-bottom'?: string;
    'margin-left'?: string;
    'max-height'?: string;
    'max-width'?: string;
    'min-height'?: string;
    'min-width'?: string;
    'opacity'?: string;
    'outline-color'?: string;
    'overflow'?: string;
    'outline-offset'?: string;
    'outline-width'?: string;
    'padding-all'?: string;
    'padding-horizontal'?: string;
    'padding-vertical'?: string;
    'padding-top'?: string;
    'padding-right'?: string;
    'padding-bottom'?: string;
    'padding-left'?: string;
    'position'?: string;
    'position-top'?: string;
    'position-right'?: string;
    'position-bottom'?: string;
    'position-left'?: string;
    'font-style'?: string;
    'text-transform'?: string;
    'text-align'?: string;
    'width'?: string;
    'word-spacing'?: string;
    'svg-stroke'?: string;
    'svg-fill'?: string;
    'z-index'?: string;
}
export declare type Prefixes = Record<keyof PrefixList, string>;
export interface Breakpoints {
    [key: string]: {
        min?: string;
        max?: string;
    };
}
export interface PseudoClasses {
    [key: string]: string;
}
export interface ClassNames {
    [key: string]: string;
}
export interface Description {
    property: string[];
    classNames: ClassNames;
}
export declare type VariableValue = string | number;
export interface MultipleVariables {
    [variable: string]: VariableValue;
}
export declare type Variables = MultipleVariables | string;
export interface VariablesList {
    borderWidths?: Variables;
    colors?: Variables;
    dimensions?: Variables;
    fontFamilies?: Variables;
    fontSizes?: Variables;
    fontWeights?: Variables;
    letterSpacings?: Variables;
    lineHeights?: Variables;
    opacity?: Variables;
    radii?: Variables;
    spacing?: Variables;
    media?: Breakpoints;
    pseudoClasses?: PseudoClasses;
    zIndicies?: Variables;
}
export declare type Ast = Description[];
export declare function backgroundColors(generator: PropertyGenerator, vars: Variables): Ast;
export declare function borderColors(generator: PropertyGenerator, vars: Variables): Ast;
export declare function borderRadii(generator: PropertyGenerator, vars: Variables): Ast;
export declare function borderWidths(generator: PropertyGenerator, vars: Variables): Ast;
export declare function colors(generator: PropertyGenerator, vars: Variables): Ast;
export declare function fontFamilies(generator: PropertyGenerator, vars: Variables): Ast;
export declare function fontSize(generator: PropertyGenerator, vars: Variables): Ast;
export declare function fontWeights(generator: PropertyGenerator, vars: Variables): Ast;
export declare function letterSpacings(generator: PropertyGenerator, vars: Variables): Ast;
export declare function lineHeights(generator: PropertyGenerator, vars: Variables): Ast;
export declare function heights(generator: PropertyGenerator, vars: Variables): Ast;
export declare function margins(generator: PropertyGenerator, vars: Variables): Ast;
export declare function maxHeights(generator: PropertyGenerator, vars: Variables): Ast;
export declare function maxWidths(generator: PropertyGenerator, vars: Variables): Ast;
export declare function minHeights(generator: PropertyGenerator, vars: Variables): Ast;
export declare function minWidths(generator: PropertyGenerator, vars: Variables): Ast;
export declare function opacity(generator: PropertyGenerator, vars: Variables): Ast;
export declare function outlineColors(generator: PropertyGenerator, vars: Variables): Ast;
export declare function outlineOffset(generator: PropertyGenerator, vars: Variables): Ast;
export declare function outlineWidths(generator: PropertyGenerator, vars: Variables): Ast;
export declare function paddings(generator: PropertyGenerator, vars: Variables): Ast;
export declare function svgFills(generator: PropertyGenerator, vars: Variables): Ast;
export declare function svgStrokes(generator: PropertyGenerator, vars: Variables): Ast;
export declare function topLeftBottomRight(generator: PropertyGenerator, vars: Variables): Ast;
export declare function widths(generator: PropertyGenerator, vars: Variables): Ast;
export declare function wordSpacings(generator: PropertyGenerator, vars: Variables): Ast;
export declare function zIndicies(generator: PropertyGenerator, vars: Variables): Ast;
export declare type PropertyGenerator = (property: string | string[], prefix: keyof Prefixes, variables: Variables) => Description;
export declare function generateAst(generator: PropertyGenerator, vars: VariablesList, includeCore: boolean): Ast;
export declare function copyAst(ast: Ast, suffix: string): Ast;
export declare function astToCss(ast: Ast, indent?: number): string;
export declare function generateMediaCss(ast: Ast, media: Breakpoints): string;
export declare function generateCss(vars: VariablesList, prefixes: PrefixList, includeCore: boolean): string;
export interface Opts {
    minify?: boolean;
    includeCore?: boolean;
    prefixes?: PrefixList;
}
export default function (vars: VariablesList, opts: Opts): string;
