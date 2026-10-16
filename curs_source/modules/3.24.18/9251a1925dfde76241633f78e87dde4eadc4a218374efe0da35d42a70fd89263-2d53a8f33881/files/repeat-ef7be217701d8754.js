import { require_Observable } from "../Observable.js";
import { require_empty } from "../observable/empty.js";
import { require_timer } from "../observable/timer.js";
var __wakaru_require_repeat_cache;
export function require_repeat() {
if (__wakaru_require_repeat_cache) return __wakaru_require_repeat_cache;
var exports2 = {};
__wakaru_require_repeat_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.repeat = void 0;
var Observable_js_1 = require_Observable();
var empty_js_1 = require_empty();
var timer_js_1 = require_timer();
function repeat(countOrConfig) {
    let count2 = Infinity;
    let delay3;
    if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
            ({ count: count2 = Infinity, delay: delay3 } = countOrConfig);
        } else {
            count2 = countOrConfig;
        }
    }
    return count2 <= 0 ? ()=>empty_js_1.EMPTY : (source)=>new Observable_js_1.Observable((destination)=>{
            let soFar = 0;
            let sourceSub;
            const resubscribe = ()=>{
                sourceSub?.unsubscribe();
                sourceSub = null;
                if (delay3 != null) {
                    const notifier = typeof delay3 === "number" ? (0, timer_js_1.timer)(delay3) : (0, Observable_js_1.from)(delay3(soFar));
                    const notifierSubscriber = (0, Observable_js_1.operate)({
                        destination,
                        next: ()=>{
                            notifierSubscriber.unsubscribe();
                            subscribeToSource();
                        }
                    });
                    notifier.subscribe(notifierSubscriber);
                } else {
                    subscribeToSource();
                }
            };
            const subscribeToSource = ()=>{
                let syncUnsub = false;
                sourceSub = source.subscribe((0, Observable_js_1.operate)({
                    destination,
                    complete: ()=>{
                        if (++soFar < count2) {
                            if (sourceSub) {
                                resubscribe();
                            } else {
                                syncUnsub = true;
                            }
                        } else {
                            destination.complete();
                        }
                    }
                }));
                if (syncUnsub) {
                    resubscribe();
                }
            };
            subscribeToSource();
        });
}
exports2.repeat = repeat;

return exports2;
}
