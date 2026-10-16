import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_sample_cache;
export function require_sample() {
if (__wakaru_require_sample_cache) return __wakaru_require_sample_cache;
var exports2 = {};
__wakaru_require_sample_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.sample = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function sample(notifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            let lastValue = null;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    hasValue = true;
                    lastValue = value;
                }
            }));
            (0, Observable_js_1.from)(notifier).subscribe((0, Observable_js_1.operate)({
                destination,
                next: ()=>{
                    if (hasValue) {
                        hasValue = false;
                        const value = lastValue;
                        lastValue = null;
                        destination.next(value);
                    }
                },
                complete: noop_js_1.noop
            }));
        });
}
exports2.sample = sample;

return exports2;
}
