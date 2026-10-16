import { require_type } from "../type.js";
var __wakaru_require_seq_cache;
export function require_seq() {
if (__wakaru_require_seq_cache) return __wakaru_require_seq_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_seq_cache = module2;
"use strict";
var Type3 = require_type();
module2.exports = new Type3("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
        return data !== null ? data : [];
    }
});

return module2.exports;
}
