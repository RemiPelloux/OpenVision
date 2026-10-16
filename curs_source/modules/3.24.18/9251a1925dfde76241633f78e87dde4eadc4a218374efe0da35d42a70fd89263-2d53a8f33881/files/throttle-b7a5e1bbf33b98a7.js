import { require_Observable } from "../Observable.js";
var __wakaru_require_throttle_cache;
export function require_throttle() {
if (__wakaru_require_throttle_cache) return __wakaru_require_throttle_cache;
var exports2 = {};
__wakaru_require_throttle_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.throttle = void 0;
var Observable_js_1 = require_Observable();
function throttle(durationSelector, config2) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            const { leading = true, trailing = false } = config2 ?? {};
            let hasValue = false;
            let sendValue = null;
            let throttled = null;
            let isComplete = false;
            const endThrottling = ()=>{
                throttled?.unsubscribe();
                throttled = null;
                if (trailing) {
                    send();
                    isComplete && destination.complete();
                }
            };
            const cleanupThrottling = ()=>{
                throttled = null;
                isComplete && destination.complete();
            };
            const startThrottle = (value)=>throttled = (0, Observable_js_1.from)(durationSelector(value)).subscribe((0, Observable_js_1.operate)({
                    destination,
                    next: endThrottling,
                    complete: cleanupThrottling
                }));
            const send = ()=>{
                if (hasValue) {
                    hasValue = false;
                    const value = sendValue;
                    sendValue = null;
                    destination.next(value);
                    !isComplete && startThrottle(value);
                }
            };
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    hasValue = true;
                    sendValue = value;
                    !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
                },
                complete: ()=>{
                    isComplete = true;
                    !(trailing && hasValue && throttled && !throttled.closed) && destination.complete();
                }
            }));
        });
}
exports2.throttle = throttle;

return exports2;
}
