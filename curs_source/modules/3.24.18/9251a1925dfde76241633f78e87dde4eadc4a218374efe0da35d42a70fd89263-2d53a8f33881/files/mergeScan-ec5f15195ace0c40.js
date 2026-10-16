import { require_Observable } from "../Observable.js";
import { require_mergeInternals } from "./mergeInternals.js";
var __wakaru_require_mergeScan_cache;
export function require_mergeScan() {
if (__wakaru_require_mergeScan_cache) return __wakaru_require_mergeScan_cache;
var exports2 = {};
__wakaru_require_mergeScan_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeScan = void 0;
var Observable_js_1 = require_Observable();
var mergeInternals_js_1 = require_mergeInternals();
function mergeScan(accumulator, seed, concurrent = Infinity) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            let state = seed;
            return (0, mergeInternals_js_1.mergeInternals)(source, subscriber, (value, index)=>accumulator(state, value, index), concurrent, (value)=>{
                state = value;
            }, false, void 0, ()=>state = null);
        });
}
exports2.mergeScan = mergeScan;

return exports2;
}
