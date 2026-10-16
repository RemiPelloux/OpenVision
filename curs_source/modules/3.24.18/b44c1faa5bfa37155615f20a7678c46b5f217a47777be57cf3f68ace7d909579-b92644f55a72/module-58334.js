var t = Object.prototype.toString;
function r(e) {
    return "function" == typeof e.constructor ? e.constructor.name : null;
}
module.exports = function(e) {
    if (void 0 === e) return "undefined";
    if (null === e) return "null";
    var n = typeof e;
    if ("boolean" === n) return "boolean";
    if ("string" === n) return "string";
    if ("number" === n) return "number";
    if ("symbol" === n) return "symbol";
    if ("function" === n) return "GeneratorFunction" === r(e) ? "generatorfunction" : "function";
    if (function(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Array;
    }(e)) return "array";
    if (function(e) {
        if (e.constructor && "function" == typeof e.constructor.isBuffer) return e.constructor.isBuffer(e);
        return !1;
    }(e)) return "buffer";
    if (function(e) {
        try {
            if ("number" == typeof e.length && "function" == typeof e.callee) return !0;
        } catch (e) {
            if (-1 !== e.message.indexOf("callee")) return !0;
        }
        return !1;
    }(e)) return "arguments";
    if (function(e) {
        return e instanceof Date || "function" == typeof e.toDateString && "function" == typeof e.getDate && "function" == typeof e.setDate;
    }(e)) return "date";
    if (function(e) {
        return e instanceof Error || "string" == typeof e.message && e.constructor && "number" == typeof e.constructor.stackTraceLimit;
    }(e)) return "error";
    if (function(e) {
        return e instanceof RegExp || "string" == typeof e.flags && "boolean" == typeof e.ignoreCase && "boolean" == typeof e.multiline && "boolean" == typeof e.global;
    }(e)) return "regexp";
    switch(r(e)){
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
    if (function(e) {
        return "function" == typeof e.throw && "function" == typeof e.return && "function" == typeof e.next;
    }(e)) return "generator";
    switch(n = t.call(e)){
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
    return n.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
