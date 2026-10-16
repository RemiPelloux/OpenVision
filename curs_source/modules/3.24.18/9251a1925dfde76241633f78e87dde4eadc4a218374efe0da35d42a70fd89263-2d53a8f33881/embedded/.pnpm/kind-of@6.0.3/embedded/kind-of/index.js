var __wakaru_require_kind_of_cache;
export function require_kind_of() {
if (__wakaru_require_kind_of_cache) return __wakaru_require_kind_of_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_kind_of_cache = module2;
var toString2 = Object.prototype.toString;
module2.exports = function kindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    var type2 = typeof val;
    if (type2 === "boolean") return "boolean";
    if (type2 === "string") return "string";
    if (type2 === "number") return "number";
    if (type2 === "symbol") return "symbol";
    if (type2 === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
    }
    if (isArray(val)) return "array";
    if (isBuffer(val)) return "buffer";
    if (isArguments(val)) return "arguments";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    if (isRegexp(val)) return "regexp";
    switch(ctorName(val)){
        case "Symbol":
            return "symbol";
        case "Promise":
            return "promise";
        case "WeakMap":
            return "weakmap";
        case "WeakSet":
            return "weakset";
        case "Map":
            return "map";
        case "Set":
            return "set";
        case "Int8Array":
            return "int8array";
        case "Uint8Array":
            return "uint8array";
        case "Uint8ClampedArray":
            return "uint8clampedarray";
        case "Int16Array":
            return "int16array";
        case "Uint16Array":
            return "uint16array";
        case "Int32Array":
            return "int32array";
        case "Uint32Array":
            return "uint32array";
        case "Float32Array":
            return "float32array";
        case "Float64Array":
            return "float64array";
    }
    if (isGeneratorObj(val)) {
        return "generator";
    }
    type2 = toString2.call(val);
    switch(type2){
        case "[object Object]":
            return "object";
        case "[object Map Iterator]":
            return "mapiterator";
        case "[object Set Iterator]":
            return "setiterator";
        case "[object String Iterator]":
            return "stringiterator";
        case "[object Array Iterator]":
            return "arrayiterator";
    }
    return type2.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isArray(val) {
    if (Array.isArray) return Array.isArray(val);
    return val instanceof Array;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function isRegexp(val) {
    if (val instanceof RegExp) return true;
    return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
}
function isGeneratorFn(name17, val) {
    return ctorName(name17) === "GeneratorFunction";
}
function isGeneratorObj(val) {
    return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
}
function isArguments(val) {
    try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
            return true;
        }
    } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
            return true;
        }
    }
    return false;
}
function isBuffer(val) {
    if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
    }
    return false;
}

return module2.exports;
}
