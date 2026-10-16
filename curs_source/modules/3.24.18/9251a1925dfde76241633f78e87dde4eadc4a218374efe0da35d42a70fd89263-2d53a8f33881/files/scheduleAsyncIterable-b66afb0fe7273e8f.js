import { require_Observable } from "../Observable.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_scheduleAsyncIterable_cache;
export function require_scheduleAsyncIterable() {
if (__wakaru_require_scheduleAsyncIterable_cache) return __wakaru_require_scheduleAsyncIterable_cache;
var exports2 = {};
__wakaru_require_scheduleAsyncIterable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.scheduleAsyncIterable = void 0;
var Observable_js_1 = require_Observable();
var executeSchedule_js_1 = require_executeSchedule();
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error("Iterable cannot be null");
    }
    return new Observable_js_1.Observable((subscriber)=>{
        (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
            const iterator = input[Symbol.asyncIterator]();
            (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
                iterator.next().then((result)=>{
                    if (result.done) {
                        subscriber.complete();
                    } else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
exports2.scheduleAsyncIterable = scheduleAsyncIterable;

return exports2;
}
