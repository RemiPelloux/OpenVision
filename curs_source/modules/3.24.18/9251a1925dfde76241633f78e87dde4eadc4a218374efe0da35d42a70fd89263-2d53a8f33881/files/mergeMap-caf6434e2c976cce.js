import { require_Observable } from "../Observable.js";
import { require_mergeInternals } from "./mergeInternals.js";
var __wakaru_require_mergeMap_cache;
export function require_mergeMap() {
if (__wakaru_require_mergeMap_cache) return __wakaru_require_mergeMap_cache;
var exports2 = {};
__wakaru_require_mergeMap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeMap = void 0;
var Observable_js_1 = require_Observable();
var mergeInternals_js_1 = require_mergeInternals();
function mergeMap2(project2, concurrent = Infinity) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, mergeInternals_js_1.mergeInternals)(source, subscriber, project2, concurrent));
}
exports2.mergeMap = mergeMap2;

return exports2;
}
