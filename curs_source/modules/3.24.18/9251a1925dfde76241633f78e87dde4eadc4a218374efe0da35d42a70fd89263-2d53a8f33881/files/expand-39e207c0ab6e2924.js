import { require_Observable } from "../Observable.js";
import { require_mergeInternals } from "./mergeInternals.js";
var __wakaru_require_expand_cache;
export function require_expand() {
if (__wakaru_require_expand_cache) return __wakaru_require_expand_cache;
var exports2 = {};
__wakaru_require_expand_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.expand = void 0;
var Observable_js_1 = require_Observable();
var mergeInternals_js_1 = require_mergeInternals();
function expand2(project2, concurrent = Infinity, scheduler) {
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, mergeInternals_js_1.mergeInternals)(source, subscriber, project2, concurrent, void 0, true, scheduler));
}
exports2.expand = expand2;

return exports2;
}
