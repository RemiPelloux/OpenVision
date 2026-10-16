import { require_schema } from "../schema.js";
import { require_json } from "./json.js";
var __wakaru_require_core_cache;
export function require_core() {
if (__wakaru_require_core_cache) return __wakaru_require_core_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_core_cache = module2;
"use strict";
var Schema2 = require_schema();
module2.exports = new Schema2({
    include: [
        require_json()
    ]
});

return module2.exports;
}
