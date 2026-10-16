import { require_schema } from "../schema.js";
import { require_failsafe } from "./failsafe.js";
import { require_bool } from "../type/bool.js";
import { require_float } from "../type/float.js";
import { require_int } from "../type/int.js";
import { require_null } from "../type/null.js";
var __wakaru_require_json_cache;
export function require_json() {
if (__wakaru_require_json_cache) return __wakaru_require_json_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_json_cache = module2;
"use strict";
var Schema2 = require_schema();
module2.exports = new Schema2({
    include: [
        require_failsafe()
    ],
    implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
    ]
});

return module2.exports;
}
