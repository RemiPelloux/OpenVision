import { require_type } from "../../type.js";
var __wakaru_require_regexp_cache;
export function require_regexp() {
if (__wakaru_require_regexp_cache) return __wakaru_require_regexp_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_regexp_cache = module2;
"use strict";
var Type3 = require_type();
function resolveJavascriptRegExp(data) {
    if (data === null) return false;
    if (data.length === 0) return false;
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
    if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        if (modifiers.length > 3) return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/") return false;
    }
    return true;
}
function constructJavascriptRegExp(data) {
    var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
    if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
    }
    return new RegExp(regexp, modifiers);
}
function representJavascriptRegExp(object4) {
    var result = "/" + object4.source + "/";
    if (object4.global) result += "g";
    if (object4.multiline) result += "m";
    if (object4.ignoreCase) result += "i";
    return result;
}
function isRegExp(object4) {
    return Object.prototype.toString.call(object4) === "[object RegExp]";
}
module2.exports = new Type3("tag:yaml.org,2002:js/regexp", {
    kind: "scalar",
    resolve: resolveJavascriptRegExp,
    construct: constructJavascriptRegExp,
    predicate: isRegExp,
    represent: representJavascriptRegExp
});

return module2.exports;
}
