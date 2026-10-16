import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
var __wakaru_require_repeatWhen_cache;
export function require_repeatWhen() {
if (__wakaru_require_repeatWhen_cache) return __wakaru_require_repeatWhen_cache;
var exports2 = {};
__wakaru_require_repeatWhen_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.repeatWhen = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
function repeatWhen(notifier) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let innerSub;
            let syncResub = false;
            let completions$;
            let isNotifierComplete = false;
            let isMainComplete = false;
            const checkComplete = ()=>isMainComplete && isNotifierComplete && (destination.complete(), true);
            const getCompletionSubject = ()=>{
                if (!completions$) {
                    completions$ = new Subject_js_1.Subject();
                    (0, Observable_js_1.from)(notifier(completions$)).subscribe((0, Observable_js_1.operate)({
                        destination,
                        next: ()=>{
                            if (innerSub) {
                                subscribeForRepeatWhen();
                            } else {
                                syncResub = true;
                            }
                        },
                        complete: ()=>{
                            isNotifierComplete = true;
                            checkComplete();
                        }
                    }));
                }
                return completions$;
            };
            const subscribeForRepeatWhen = ()=>{
                isMainComplete = false;
                innerSub = source.subscribe((0, Observable_js_1.operate)({
                    destination,
                    complete: ()=>{
                        isMainComplete = true;
                        !checkComplete() && getCompletionSubject().next();
                    }
                }));
                if (syncResub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    syncResub = false;
                    subscribeForRepeatWhen();
                }
            };
            subscribeForRepeatWhen();
        });
}
exports2.repeatWhen = repeatWhen;

return exports2;
}
