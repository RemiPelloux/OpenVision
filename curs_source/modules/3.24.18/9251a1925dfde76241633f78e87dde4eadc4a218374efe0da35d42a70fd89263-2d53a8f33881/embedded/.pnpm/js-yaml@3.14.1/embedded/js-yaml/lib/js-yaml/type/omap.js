import { require_type } from "../type.js";
var __wakaru_require_omap_cache;
export function require_omap() {
if (__wakaru_require_omap_cache) return __wakaru_require_omap_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_omap_cache = module2;
"use strict";
var Type3 = require_type();
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object4 = data;
    for(index = 0, length = object4.length; index < length; index += 1){
        pair = object4[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]") return false;
        for(pairKey in pair){
            if (_hasOwnProperty.call(pair, pairKey)) {
                if (!pairHasKey) pairHasKey = true;
                else return false;
            }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
module2.exports = new Type3("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});

return module2.exports;
}
