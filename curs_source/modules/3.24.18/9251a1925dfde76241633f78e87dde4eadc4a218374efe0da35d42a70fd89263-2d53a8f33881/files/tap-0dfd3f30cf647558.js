import { require_Observable } from "../Observable.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_tap_cache;
export function require_tap() {
if (__wakaru_require_tap_cache) return __wakaru_require_tap_cache;
var exports2 = {};
__wakaru_require_tap_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.tap = void 0;
var Observable_js_1 = require_Observable();
var identity_js_1 = require_identity();
function tap(observerOrNext) {
    const tapObserver = (0, Observable_js_1.isFunction)(observerOrNext) ? {
        next: observerOrNext
    } : observerOrNext;
    return tapObserver ? (source)=>new Observable_js_1.Observable((destination)=>{
            tapObserver.subscribe?.();
            let isUnsub = true;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    tapObserver.next?.(value);
                    destination.next(value);
                },
                error: (err)=>{
                    isUnsub = false;
                    tapObserver.error?.(err);
                    destination.error(err);
                },
                complete: ()=>{
                    isUnsub = false;
                    tapObserver.complete?.();
                    destination.complete();
                },
                finalize: ()=>{
                    if (isUnsub) {
                        tapObserver.unsubscribe?.();
                    }
                    tapObserver.finalize?.();
                }
            }));
        }) : identity_js_1.identity;
}
exports2.tap = tap;

return exports2;
}
