import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_distinct_cache;
export function require_distinct() {
if (__wakaru_require_distinct_cache) return __wakaru_require_distinct_cache;
var exports2 = {};
__wakaru_require_distinct_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.distinct = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function distinct(keySelector, flushes) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const distinctKeys = new Set();
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const key = keySelector ? keySelector(value) : value;
                    if (!distinctKeys.has(key)) {
                        distinctKeys.add(key);
                        destination.next(value);
                    }
                }
            }));
            flushes && (0, Observable_js_1.from)(flushes).subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>distinctKeys.clear(),
                complete: noop_js_1.noop
            }));
        });
}
exports2.distinct = distinct;

return exports2;
}
