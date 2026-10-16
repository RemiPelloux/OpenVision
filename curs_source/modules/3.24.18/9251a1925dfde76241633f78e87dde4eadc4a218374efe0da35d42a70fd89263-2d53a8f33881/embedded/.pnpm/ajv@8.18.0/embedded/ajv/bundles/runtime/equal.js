import { require_fast_deep_equal } from "../../../../../fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js";
var __wakaru_require_equal_cache;
export function require_equal() {
if (__wakaru_require_equal_cache) return __wakaru_require_equal_cache;
var exports2 = {};
__wakaru_require_equal_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var equal = require_fast_deep_equal();
equal.code = 'require("ajv/dist/runtime/equal").default';
exports2.default = equal;

return exports2;
}
