import { require_Observable } from "../Observable.js";
import { require_reduce } from "./reduce.js";
var __wakaru_require_max_cache;
export function require_max() {
if (__wakaru_require_max_cache) return __wakaru_require_max_cache;
var exports2 = {};
__wakaru_require_max_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.max = void 0;
var reduce_js_1 = require_reduce();
var Observable_js_1 = require_Observable();
function max(comparer) {
    return (0, reduce_js_1.reduce)((0, Observable_js_1.isFunction)(comparer) ? (x, y)=>comparer(x, y) > 0 ? x : y : (x, y)=>x > y ? x : y);
}
exports2.max = max;

return exports2;
}
