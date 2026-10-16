import { require_Observable } from "../Observable.js";
import { require_async } from "../scheduler/async.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_debounceTime_cache;
export function require_debounceTime() {
if (__wakaru_require_debounceTime_cache) return __wakaru_require_debounceTime_cache;
var exports2 = {};
__wakaru_require_debounceTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.debounceTime = void 0;
var async_js_1 = require_async();
var Observable_js_1 = require_Observable();
var executeSchedule_js_1 = require_executeSchedule();
function debounceTime(dueTime, scheduler = async_js_1.asyncScheduler) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let lastValue;
            let activeTask;
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    lastValue = value;
                    activeTask?.unsubscribe();
                    activeTask = (0, executeSchedule_js_1.executeSchedule)(destination, scheduler, ()=>{
                        activeTask = void 0;
                        const v2 = lastValue;
                        lastValue = null;
                        destination.next(v2);
                    }, dueTime);
                },
                complete: ()=>{
                    if (activeTask) {
                        destination.next(lastValue);
                    }
                    destination.complete();
                },
                finalize: ()=>{
                    lastValue = activeTask = null;
                }
            }));
        });
}
exports2.debounceTime = debounceTime;

return exports2;
}
