import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_skipUntil_cache;
export function require_skipUntil() {
if (__wakaru_require_skipUntil_cache) return __wakaru_require_skipUntil_cache;
var exports2 = {};
__wakaru_require_skipUntil_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.skipUntil = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function skipUntil2(notifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let taking = false;
            const skipSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: ()=>{
                    skipSubscriber?.unsubscribe();
                    taking = true;
                },
                complete: noop_js_1.noop
            });
            (0, Observable_js_1.from)(notifier).subscribe(skipSubscriber);
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>taking && destination.next(value)
            }));
        });
}
exports2.skipUntil = skipUntil2;

return exports2;
}
