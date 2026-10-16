import { require_Observable } from "../Observable.js";
import { require_noop } from "../util/noop.js";
var __wakaru_require_debounce_cache;
export function require_debounce() {
if (__wakaru_require_debounce_cache) return __wakaru_require_debounce_cache;
var exports2 = {};
__wakaru_require_debounce_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.debounce = void 0;
var Observable_js_1 = require_Observable();
var noop_js_1 = require_noop();
function debounce(durationSelector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            let lastValue = null;
            let durationSubscriber = null;
            const emit2 = ()=>{
                durationSubscriber?.unsubscribe();
                durationSubscriber = null;
                if (hasValue) {
                    hasValue = false;
                    const value = lastValue;
                    lastValue = null;
                    destination.next(value);
                }
            };
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    durationSubscriber?.unsubscribe();
                    hasValue = true;
                    lastValue = value;
                    durationSubscriber = (0, Observable_js_1.operate)({
                        destination,
                        next: emit2,
                        complete: noop_js_1.noop
                    });
                    (0, Observable_js_1.from)(durationSelector(value)).subscribe(durationSubscriber);
                },
                complete: ()=>{
                    emit2();
                    destination.complete();
                },
                finalize: ()=>{
                    lastValue = durationSubscriber = null;
                }
            }));
        });
}
exports2.debounce = debounce;

return exports2;
}
