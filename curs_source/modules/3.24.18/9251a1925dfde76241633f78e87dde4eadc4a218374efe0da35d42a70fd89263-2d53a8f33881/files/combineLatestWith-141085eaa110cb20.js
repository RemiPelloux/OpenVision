import { require_Observable } from "../Observable.js";
import { require_combineLatest } from "../observable/combineLatest.js";
var __wakaru_require_combineLatestWith_cache;
export function require_combineLatestWith() {
if (__wakaru_require_combineLatestWith_cache) return __wakaru_require_combineLatestWith_cache;
var exports2 = {};
__wakaru_require_combineLatestWith_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.combineLatestWith = void 0;
var combineLatest_js_1 = require_combineLatest();
var Observable_js_1 = require_Observable();
function combineLatestWith(...otherSources) {
    return (source)=>new Observable_js_1.Observable((subscriber)=>(0, combineLatest_js_1.combineLatestInit)([
                source,
                ...otherSources
            ])(subscriber));
}
exports2.combineLatestWith = combineLatestWith;

return exports2;
}
