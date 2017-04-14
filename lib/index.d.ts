import * as postcss from 'postcss';
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
export interface Prefixes {
    [prefix: string]: string;
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
}
export declare type Ast = Description[];
export declare function backgroundColors(vars: Variables): Ast;
export declare function borderColors(vars: Variables): Ast;
export declare function borderRadii(vars: Variables): Ast;
export declare function borderWidths(vars: Variables): Ast;
export declare function colors(vars: Variables): Ast;
export declare function fontFamilies(vars: Variables): Ast;
export declare function fontSize(vars: Variables): Ast;
export declare function fontWeights(vars: Variables): Ast;
export declare function letterSpacings(vars: Variables): Ast;
export declare function lineHeights(vars: Variables): Ast;
export declare function heights(vars: Variables): Ast;
export declare function margins(vars: Variables): Ast;
export declare function maxHeights(vars: Variables): Ast;
export declare function maxWidths(vars: Variables): Ast;
export declare function minHeights(vars: Variables): Ast;
export declare function minWidths(vars: Variables): Ast;
export declare function opacity(vars: Variables): Ast;
export declare function outlineColors(vars: Variables): Ast;
export declare function outlineOffset(vars: Variables): Ast;
export declare function outlineWidths(vars: Variables): Ast;
export declare function paddings(vars: Variables): Ast;
export declare function topLeftBottomRight(vars: Variables): Ast;
export declare function widths(vars: Variables): Ast;
export declare function wordSpacings(vars: Variables): Ast;
export declare function generateAst(vars: VariablesList): Ast;
export declare function copyAst(ast: Ast, suffix: string): Ast;
export declare function astToCss(ast: Ast, indent?: number): string;
export declare function generateMediaCss(ast: Ast, media: Breakpoints): string;
export declare function generateCss(vars: VariablesList): string;
export default function (vars: VariablesList, minify: boolean): postcss.LazyResult;
