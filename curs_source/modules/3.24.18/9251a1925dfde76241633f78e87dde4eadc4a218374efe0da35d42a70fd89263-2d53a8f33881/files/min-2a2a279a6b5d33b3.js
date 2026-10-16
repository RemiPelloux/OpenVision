import { require_Observable } from "../Observable.js";
import { require_reduce } from "./reduce.js";
var __wakaru_require_min_cache;
export function require_min() {
if (__wakaru_require_min_cache) return __wakaru_require_min_cache;
var exports2 = {};
__wakaru_require_min_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.min = void 0;
var reduce_js_1 = require_reduce();
var Observable_js_1 = require_Observable();
function min(comparer) {
    return (0, reduce_js_1.reduce)((0, Observable_js_1.isFunction)(comparer) ? (x, y)=>comparer(x, y) < 0 ? x : y : (x, y)=>x < y ? x : y);
}
exports2.min = min;

return exports2;
}
