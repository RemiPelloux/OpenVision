import { require_schema } from "../schema.js";
import { require_map2 } from "../type/map.js";
import { require_seq } from "../type/seq.js";
import { require_str } from "../type/str.js";
var __wakaru_require_failsafe_cache;
export function require_failsafe() {
if (__wakaru_require_failsafe_cache) return __wakaru_require_failsafe_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_failsafe_cache = module2;
"use strict";
var Schema2 = require_schema();
module2.exports = new Schema2({
    explicit: [
        require_str(),
        require_seq(),
        require_map2()
    ]
});

return module2.exports;
}
