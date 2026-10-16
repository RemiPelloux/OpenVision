import { require_type } from "../type.js";
var __wakaru_require_null_cache;
export function require_null() {
if (__wakaru_require_null_cache) return __wakaru_require_null_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_null_cache = module2;
"use strict";
var Type3 = require_type();
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
    return null;
}
function isNull(object4) {
    return object4 === null;
}
module2.exports = new Type3("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        }
    },
    defaultStyle: "lowercase"
});

return module2.exports;
}
