"use strict";
exports.__esModule = true;
function objectToString(obj, indent) {
    if (indent === void 0) { indent = 0; }
    var indentChars = Array(indent + 1).join(' ');
    return Object.keys(obj).reduce(function (prev, key) {
        return prev.concat("" + indentChars + key + " " + obj[key]);
    }, '');
}
exports.objectToString = objectToString;
function generateKeysAndValues(prefix, variables) {
    if (typeof variables === 'string') {
        return _a = {},
            _a[prefix] = variables,
            _a;
    }
    else {
        return Object.keys(variables).reduce(function (prev, name) {
            var key = prefix + "-" + name;
            var variable = variables[name];
            return Object.assign({}, prev, (_a = {},
                _a[key] = variable,
                _a));
            var _a;
        }, {});
    }
    var _a;
}
exports.generateKeysAndValues = generateKeysAndValues;
function isNode() {
    return typeof window === 'undefined';
}
exports.isNode = isNode;
