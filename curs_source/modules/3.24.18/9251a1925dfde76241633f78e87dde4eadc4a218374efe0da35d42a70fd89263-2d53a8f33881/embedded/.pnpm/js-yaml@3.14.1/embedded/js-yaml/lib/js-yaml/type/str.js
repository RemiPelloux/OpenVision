import { require_type } from "../type.js";
var __wakaru_require_str_cache;
export function require_str() {
if (__wakaru_require_str_cache) return __wakaru_require_str_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_str_cache = module2;
"use strict";
var Type3 = require_type();
module2.exports = new Type3("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
        return data !== null ? data : "";
    }
});

return module2.exports;
}
