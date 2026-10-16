import { require_Observable } from "../Observable.js";
var __wakaru_require_audit_cache;
export function require_audit() {
if (__wakaru_require_audit_cache) return __wakaru_require_audit_cache;
var exports2 = {};
__wakaru_require_audit_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.audit = void 0;
var Observable_js_1 = require_Observable();
function audit(durationSelector) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let hasValue = false;
            let lastValue = null;
            let durationSubscriber = null;
            let isComplete = false;
            const endDuration = ()=>{
                durationSubscriber?.unsubscribe();
                durationSubscriber = null;
                if (hasValue) {
                    hasValue = false;
                    const value = lastValue;
                    lastValue = null;
                    destination.next(value);
                }
                isComplete && destination.complete();
            };
            const cleanupDuration = ()=>{
                durationSubscriber = null;
                isComplete && destination.complete();
            };
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    hasValue = true;
                    lastValue = value;
                    if (!durationSubscriber) {
                        (0, Observable_js_1.from)(durationSelector(value)).subscribe(durationSubscriber = (0, Observable_js_1.operate)({
                            destination,
                            next: endDuration,
                            complete: cleanupDuration
                        }));
                    }
                },
                complete: ()=>{
                    isComplete = true;
                    (!hasValue || !durationSubscriber || durationSubscriber.closed) && destination.complete();
                }
            }));
        });
}
exports2.audit = audit;

return exports2;
}
