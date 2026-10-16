import { require_type } from "../type.js";
var __wakaru_require_set_cache;
export function require_set() {
if (__wakaru_require_set_cache) return __wakaru_require_set_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_set_cache = module2;
"use strict";
var Type3 = require_type();
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object4 = data;
    for(key in object4){
        if (_hasOwnProperty.call(object4, key)) {
            if (object4[key] !== null) return false;
        }
    }
    return true;
}
function constructYamlSet(data) {
    return data !== null ? data : {};
}
module2.exports = new Type3("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
});

return module2.exports;
}
