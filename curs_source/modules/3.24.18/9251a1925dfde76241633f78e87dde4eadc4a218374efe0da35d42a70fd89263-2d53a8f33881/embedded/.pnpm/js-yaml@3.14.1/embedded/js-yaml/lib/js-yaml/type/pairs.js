import { require_type } from "../type.js";
var __wakaru_require_pairs_cache;
export function require_pairs() {
if (__wakaru_require_pairs_cache) return __wakaru_require_pairs_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pairs_cache = module2;
"use strict";
var Type3 = require_type();
var _toString = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object4 = data;
    result = new Array(object4.length);
    for(index = 0, length = object4.length; index < length; index += 1){
        pair = object4[index];
        if (_toString.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object4 = data;
    result = new Array(object4.length);
    for(index = 0, length = object4.length; index < length; index += 1){
        pair = object4[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
module2.exports = new Type3("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});

return module2.exports;
}
