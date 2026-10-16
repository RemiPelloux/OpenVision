import { require_type } from "../../type.js";
var __wakaru_require_undefined_cache;
export function require_undefined() {
if (__wakaru_require_undefined_cache) return __wakaru_require_undefined_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_undefined_cache = module2;
"use strict";
var Type3 = require_type();
function resolveJavascriptUndefined() {
    return true;
}
function constructJavascriptUndefined() {
    return void 0;
}
function representJavascriptUndefined() {
    return "";
}
function isUndefined(object4) {
    return typeof object4 === "undefined";
}
module2.exports = new Type3("tag:yaml.org,2002:js/undefined", {
    kind: "scalar",
    resolve: resolveJavascriptUndefined,
    construct: constructJavascriptUndefined,
    predicate: isUndefined,
    represent: representJavascriptUndefined
});

return module2.exports;
}
