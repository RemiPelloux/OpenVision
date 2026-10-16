import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
var __wakaru_require_share_cache;
export function require_share() {
if (__wakaru_require_share_cache) return __wakaru_require_share_cache;
var exports2 = {};
__wakaru_require_share_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.share = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
function share2(options2 = {}) {
    const { connector = ()=>new Subject_js_1.Subject(), resetOnError = true, resetOnComplete = true, resetOnRefCountZero = true } = options2;
    return (source)=>{
        let connection;
        let resetConnection;
        let subject;
        let refCount = 0;
        let hasCompleted = false;
        let hasErrored = false;
        const cancelReset = ()=>{
            resetConnection?.unsubscribe();
            resetConnection = void 0;
        };
        const reset = ()=>{
            cancelReset();
            connection = subject = void 0;
            hasCompleted = hasErrored = false;
        };
        const resetAndUnsubscribe = ()=>{
            const conn = connection;
            reset();
            conn?.unsubscribe();
        };
        return new Observable_js_1.Observable((subscriber)=>{
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            const dest = subject = subject ?? connector();
            subscriber.add(()=>{
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection && refCount > 0) {
                connection = new Observable_js_1.Subscriber({
                    next: (value)=>dest.next(value),
                    error: (err)=>{
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: ()=>{
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                (0, Observable_js_1.from)(source).subscribe(connection);
            }
        });
    };
}
exports2.share = share2;
function handleReset(reset, on, ...args) {
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    const onSubscriber = new Observable_js_1.Subscriber({
        next: ()=>{
            onSubscriber.unsubscribe();
            reset();
        }
    });
    return (0, Observable_js_1.from)(on(...args)).subscribe(onSubscriber);
}

return exports2;
}
