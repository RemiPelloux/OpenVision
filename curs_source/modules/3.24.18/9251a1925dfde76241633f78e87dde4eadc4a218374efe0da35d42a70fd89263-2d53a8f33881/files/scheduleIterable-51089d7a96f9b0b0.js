import { require_Observable } from "../Observable.js";
import { require_iterator } from "../symbol/iterator.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_scheduleIterable_cache;
export function require_scheduleIterable() {
if (__wakaru_require_scheduleIterable_cache) return __wakaru_require_scheduleIterable_cache;
var exports2 = {};
__wakaru_require_scheduleIterable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduleIterable = void 0;
var Observable_js_1 = require_Observable();
var iterator_js_1 = require_iterator();
var executeSchedule_js_1 = require_executeSchedule();
function scheduleIterable(input, scheduler) {
    return new Observable_js_1.Observable((subscriber)=>{
        let iterator;
        (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
            iterator = input[iterator_js_1.iterator]();
            (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
                let value;
                let done;
                try {
                    ({ value, done } = iterator.next());
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                } else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return ()=>(0, Observable_js_1.isFunction)(iterator?.return) && iterator.return();
    });
}
exports2.scheduleIterable = scheduleIterable;

return exports2;
}
