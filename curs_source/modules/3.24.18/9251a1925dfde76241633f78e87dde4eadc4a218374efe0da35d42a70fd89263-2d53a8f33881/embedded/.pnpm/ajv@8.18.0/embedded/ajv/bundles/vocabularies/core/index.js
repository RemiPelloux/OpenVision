import { require_id } from "./id.js";
import { require_ref } from "./ref.js";
var __wakaru_require_core3_cache;
export function require_core3() {
if (__wakaru_require_core3_cache) return __wakaru_require_core3_cache;
var exports2 = {};
__wakaru_require_core3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var id_1 = require_id();
var ref_1 = require_ref();
var core2 = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    {
        keyword: "$comment"
    },
    "definitions",
    id_1.default,
    ref_1.default
];
exports2.default = core2;

return exports2;
}
