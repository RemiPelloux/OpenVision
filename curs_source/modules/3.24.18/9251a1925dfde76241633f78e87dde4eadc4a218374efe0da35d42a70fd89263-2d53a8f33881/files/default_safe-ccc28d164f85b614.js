import { require_schema } from "../schema.js";
import { require_core } from "./core.js";
import { require_binary } from "../type/binary.js";
import { require_merge2 } from "../type/merge.js";
import { require_omap } from "../type/omap.js";
import { require_pairs } from "../type/pairs.js";
import { require_set } from "../type/set.js";
import { require_timestamp2 } from "../type/timestamp.js";
var __wakaru_require_default_safe_cache;
export function require_default_safe() {
if (__wakaru_require_default_safe_cache) return __wakaru_require_default_safe_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_default_safe_cache = module2;
"use strict";
var Schema2 = require_schema();
module2.exports = new Schema2({
    include: [
        require_core()
    ],
    implicit: [
        require_timestamp2(),
        require_merge2()
    ],
    explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
    ]
});

return module2.exports;
}
