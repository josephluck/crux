import { MultipleVariables } from './';
export declare function objectToString(obj: any, indent?: number): string;
export declare function generateKeysAndValues(prefix: string, variables: MultipleVariables | string): {
    [x: string]: string;
};
export declare function isNode(): boolean;
