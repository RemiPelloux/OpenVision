import { require_type } from "../type.js";
var __wakaru_require_bool_cache;
export function require_bool() {
if (__wakaru_require_bool_cache) return __wakaru_require_bool_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_bool_cache = module2;
"use strict";
var Type3 = require_type();
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object4) {
    return Object.prototype.toString.call(object4) === "[object Boolean]";
}
module2.exports = new Type3("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function(object4) {
            return object4 ? "true" : "false";
        },
        uppercase: function(object4) {
            return object4 ? "TRUE" : "FALSE";
        },
        camelcase: function(object4) {
            return object4 ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});

return module2.exports;
}
