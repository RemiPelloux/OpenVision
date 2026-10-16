import { require_schema } from "../schema.js";
import { require_default_safe } from "./default_safe.js";
import { require_function } from "../type/js/function.js";
import { require_regexp } from "../type/js/regexp.js";
import { require_undefined } from "../type/js/undefined.js";
var __wakaru_require_default_full_cache;
export function require_default_full() {
if (__wakaru_require_default_full_cache) return __wakaru_require_default_full_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_default_full_cache = module2;
"use strict";
var Schema2 = require_schema();
module2.exports = Schema2.DEFAULT = new Schema2({
    include: [
        require_default_safe()
    ],
    explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
    ]
});

return module2.exports;
}
