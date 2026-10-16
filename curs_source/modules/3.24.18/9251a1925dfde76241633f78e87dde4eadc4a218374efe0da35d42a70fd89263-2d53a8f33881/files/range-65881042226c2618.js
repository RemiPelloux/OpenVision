import { require_Observable } from "../Observable.js";
import { require_empty } from "./empty.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_range_cache;
export function require_range() {
if (__wakaru_require_range_cache) return __wakaru_require_range_cache;
var exports2 = {};
__wakaru_require_range_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.range = void 0;
var Observable_js_1 = require_Observable();
var empty_js_1 = require_empty();
var executeSchedule_js_1 = require_executeSchedule();
function range2(start, count2, scheduler) {
    if (count2 == null) {
        count2 = start;
        start = 0;
    }
    if (count2 <= 0) {
        return empty_js_1.EMPTY;
    }
    const end = count2 + start;
    return new Observable_js_1.Observable(scheduler ? (subscriber)=>{
        let n = start;
        const emit2 = ()=>{
            if (n < end) {
                subscriber.next(n++);
                if (!subscriber.closed) {
                    (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, emit2);
                }
            } else {
                subscriber.complete();
            }
        };
        (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, emit2);
    } : (subscriber)=>{
        let n = start;
        while(n < end && !subscriber.closed){
            subscriber.next(n++);
        }
        subscriber.complete();
    });
}
exports2.range = range2;

return exports2;
}
