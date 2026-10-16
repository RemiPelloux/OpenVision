import { require_kind_of } from "../../../../kind-of@6.0.3/node_modules/kind-of/index.js";
import { require_strip_bom_string } from "../../../../strip-bom-string@1.0.0/node_modules/strip-bom-string/index.js";
var __wakaru_require_utils5_cache;
export function require_utils5() {
if (__wakaru_require_utils5_cache) return __wakaru_require_utils5_cache;
var exports2 = {};
__wakaru_require_utils5_cache = exports2;
"use strict";
var stripBom2 = require_strip_bom_string();
var typeOf = require_kind_of();
exports2.define = function(obj, key, val) {
    Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
    });
};
exports2.isBuffer = function(val) {
    return typeOf(val) === "buffer";
};
exports2.isObject = function(val) {
    return typeOf(val) === "object";
};
exports2.toBuffer = function(input) {
    return typeof input === "string" ? Buffer.from(input) : input;
};
exports2.toString = function(input) {
    if (exports2.isBuffer(input)) return stripBom2(String(input));
    if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
    }
    return stripBom2(input);
};
exports2.arrayify = function(val) {
    return val ? Array.isArray(val) ? val : [
        val
    ] : [];
};
exports2.startsWith = function(str3, substr, len) {
    if (typeof len !== "number") len = substr.length;
    return str3.slice(0, len) === substr;
};

return exports2;
}
