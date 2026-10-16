import { require_is_extendable } from "../../../is-extendable@0.1.1/node_modules/is-extendable/index.js";
var __wakaru_require_extend_shallow_cache;
export function require_extend_shallow() {
if (__wakaru_require_extend_shallow_cache) return __wakaru_require_extend_shallow_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_extend_shallow_cache = module2;
"use strict";
var isObject5 = require_is_extendable();
module2.exports = function extend2(o) {
    if (!isObject5(o)) {
        o = {};
    }
    var len = arguments.length;
    for(var i = 1; i < len; i++){
        var obj = arguments[i];
        if (isObject5(obj)) {
            assign(o, obj);
        }
    }
    return o;
};
function assign(a, b2) {
    for(var key in b2){
        if (hasOwn(b2, key)) {
            a[key] = b2[key];
        }
    }
}
function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

return module2.exports;
}
