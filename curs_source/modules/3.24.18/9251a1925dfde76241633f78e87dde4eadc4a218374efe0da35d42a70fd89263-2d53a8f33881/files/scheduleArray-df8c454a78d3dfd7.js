import { require_Observable } from "../Observable.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_scheduleArray_cache;
export function require_scheduleArray() {
if (__wakaru_require_scheduleArray_cache) return __wakaru_require_scheduleArray_cache;
var exports2 = {};
__wakaru_require_scheduleArray_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduleArray = void 0;
var Observable_js_1 = require_Observable();
var executeSchedule_js_1 = require_executeSchedule();
function scheduleArray(input, scheduler) {
    return new Observable_js_1.Observable((subscriber)=>{
        let i = 0;
        const emit2 = ()=>{
            if (i === input.length) {
                subscriber.complete();
            } else {
                subscriber.next(input[i++]);
                (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, emit2);
            }
        };
        return (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, emit2);
    });
}
exports2.scheduleArray = scheduleArray;

return exports2;
}
