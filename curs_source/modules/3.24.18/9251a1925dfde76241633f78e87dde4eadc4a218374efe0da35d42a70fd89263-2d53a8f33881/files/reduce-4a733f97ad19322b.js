import { require_Observable } from "../Observable.js";
import { require_scanInternals } from "./scanInternals.js";
var __wakaru_require_reduce_cache;
export function require_reduce() {
if (__wakaru_require_reduce_cache) return __wakaru_require_reduce_cache;
var exports2 = {};
__wakaru_require_reduce_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.reduce = void 0;
var scanInternals_js_1 = require_scanInternals();
var Observable_js_1 = require_Observable();
function reduce3(accumulator, seed) {
    const hasSeed = arguments.length >= 2;
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, scanInternals_js_1.scanInternals)(accumulator, seed, hasSeed, false, true, source, subscriber));
}
exports2.reduce = reduce3;

return exports2;
}
