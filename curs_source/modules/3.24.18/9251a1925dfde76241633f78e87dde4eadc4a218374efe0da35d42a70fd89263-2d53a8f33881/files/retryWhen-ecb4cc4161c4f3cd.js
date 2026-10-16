import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
var __wakaru_require_retryWhen_cache;
export function require_retryWhen() {
if (__wakaru_require_retryWhen_cache) return __wakaru_require_retryWhen_cache;
var exports2 = {};
__wakaru_require_retryWhen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.retryWhen = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
function retryWhen(notifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let innerSub;
            let syncResub = false;
            let errors$;
            const subscribeForRetryWhen = ()=>{
                innerSub = source.subscribe((0, Observable_js_1.operate)({
                    destination,
                    error: (err)=>{
                        if (!errors$) {
                            errors$ = new Subject_js_1.Subject();
                            (0, Observable_js_1.from)(notifier(errors$)).subscribe((0, Observable_js_1.operate)({
                                destination,
                                next: ()=>innerSub ? subscribeForRetryWhen() : syncResub = true
                            }));
                        }
                        if (errors$) {
                            errors$.next(err);
                        }
                    }
                }));
                if (syncResub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    syncResub = false;
                    subscribeForRetryWhen();
                }
            };
            subscribeForRetryWhen();
        });
}
exports2.retryWhen = retryWhen;

return exports2;
}
