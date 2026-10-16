import { require_Observable } from "../Observable.js";
import { require_timer } from "../observable/timer.js";
import { require_identity } from "../util/identity.js";
var __wakaru_require_retry_cache;
export function require_retry() {
if (__wakaru_require_retry_cache) return __wakaru_require_retry_cache;
var exports2 = {};
__wakaru_require_retry_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.retry = void 0;
var Observable_js_1 = require_Observable();
var identity_js_1 = require_identity();
var timer_js_1 = require_timer();
function retry2(configOrCount = Infinity) {
    let config2;
    if (configOrCount && typeof configOrCount === "object") {
        config2 = configOrCount;
    } else {
        config2 = {
            count: configOrCount
        };
    }
    const { count: count2 = Infinity, delay: delay3, resetOnSuccess = false } = config2;
    return count2 <= 0 ? identity_js_1.identity : (source)=>new Observable_js_1.Observable((destination)=>{
            let soFar = 0;
            let innerSub;
            const subscribeForRetry = ()=>{
                let syncUnsub = false;
                innerSub = source.subscribe((0, Observable_js_1.operate)({
                    destination,
                    next: (value)=>{
                        if (resetOnSuccess) {
                            soFar = 0;
                        }
                        destination.next(value);
                    },
                    error: (err)=>{
                        if (soFar++ < count2) {
                            const resub = ()=>{
                                if (innerSub) {
                                    innerSub.unsubscribe();
                                    innerSub = null;
                                    subscribeForRetry();
                                } else {
                                    syncUnsub = true;
                                }
                            };
                            if (delay3 != null) {
                                const notifier = typeof delay3 === "number" ? (0, timer_js_1.timer)(delay3) : (0, Observable_js_1.from)(delay3(err, soFar));
                                const notifierSubscriber = (0, Observable_js_1.operate)({
                                    destination,
                                    next: ()=>{
                                        notifierSubscriber.unsubscribe();
                                        resub();
                                    },
                                    complete: ()=>{
                                        destination.complete();
                                    }
                                });
                                notifier.subscribe(notifierSubscriber);
                            } else {
                                resub();
                            }
                        } else {
                            destination.error(err);
                        }
                    }
                }));
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    subscribeForRetry();
                }
            };
            subscribeForRetry();
        });
}
exports2.retry = retry2;

return exports2;
}
