import { require_reduce } from "./reduce.js";
var __wakaru_require_count_cache;
export function require_count() {
if (__wakaru_require_count_cache) return __wakaru_require_count_cache;
var exports2 = {};
__wakaru_require_count_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.count = void 0;
var reduce_js_1 = require_reduce();
function count2(predicate) {
    return (0, reduce_js_1.reduce)((total, value, i)=>!predicate || predicate(value, i) ? total + 1 : total, 0);
}
exports2.count = count2;

return exports2;
}
