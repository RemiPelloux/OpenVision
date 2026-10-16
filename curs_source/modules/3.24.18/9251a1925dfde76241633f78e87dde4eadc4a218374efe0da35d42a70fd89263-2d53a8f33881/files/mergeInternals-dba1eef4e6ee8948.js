import { require_Observable } from "../Observable.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_mergeInternals_cache;
export function require_mergeInternals() {
if (__wakaru_require_mergeInternals_cache) return __wakaru_require_mergeInternals_cache;
var exports2 = {};
__wakaru_require_mergeInternals_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.mergeInternals = void 0;
var Observable_js_1 = require_Observable();
var executeSchedule_js_1 = require_executeSchedule();
function mergeInternals(source, destination, project2, concurrent, onBeforeNext, expand2, innerSubScheduler, additionalFinalizer) {
    const buffer = [];
    let active = 0;
    let index = 0;
    let isComplete = false;
    const checkComplete = ()=>{
        if (isComplete && !buffer.length && !active) {
            destination.complete();
        }
    };
    const outerNext = (value)=>active < concurrent ? doInnerSub(value) : buffer.push(value);
    const doInnerSub = (value)=>{
        expand2 && destination.next(value);
        active++;
        let innerComplete = false;
        (0, Observable_js_1.from)(project2(value, index++)).subscribe((0, Observable_js_1.operate)({
            destination,
            next: (innerValue)=>{
                onBeforeNext?.(innerValue);
                if (expand2) {
                    outerNext(innerValue);
                } else {
                    destination.next(innerValue);
                }
            },
            complete: ()=>{
                innerComplete = true;
            },
            finalize: ()=>{
                if (innerComplete) {
                    try {
                        active--;
                        while(buffer.length && active < concurrent){
                            const bufferedValue = buffer.shift();
                            if (innerSubScheduler) {
                                (0, executeSchedule_js_1.executeSchedule)(destination, innerSubScheduler, ()=>doInnerSub(bufferedValue));
                            } else {
                                doInnerSub(bufferedValue);
                            }
                        }
                        checkComplete();
                    } catch (err) {
                        destination.error(err);
                    }
                }
            }
        }));
    };
    source.subscribe((0, Observable_js_1.operate)({
        destination,
        next: outerNext,
        complete: ()=>{
            isComplete = true;
            checkComplete();
        }
    }));
    return ()=>{
        additionalFinalizer?.();
    };
}
exports2.mergeInternals = mergeInternals;

return exports2;
}
