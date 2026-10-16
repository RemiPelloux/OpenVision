import { require_Observable } from "../Observable.js";
import { require_async } from "../scheduler/async.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
import { require_isDate } from "../util/isDate.js";
var __wakaru_require_timeout_cache;
export function require_timeout() {
if (__wakaru_require_timeout_cache) return __wakaru_require_timeout_cache;
var exports2 = {};
__wakaru_require_timeout_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.timeout = exports2.TimeoutError = void 0;
var async_js_1 = require_async();
var isDate_js_1 = require_isDate();
var Observable_js_1 = require_Observable();
var executeSchedule_js_1 = require_executeSchedule();
var TimeoutError2 = class extends Error {
    info;
    constructor(info2 = null){
        super("Timeout has occurred");
        this.info = info2;
        this.name = "TimeoutError";
    }
};
exports2.TimeoutError = TimeoutError2;
function timeout2(config2, schedulerArg) {
    const { first, each, with: _with = timeoutErrorFactory, scheduler = schedulerArg ?? async_js_1.asyncScheduler, meta = null } = (0, isDate_js_1.isValidDate)(config2) ? {
        first: config2
    } : typeof config2 === "number" ? {
        each: config2
    } : config2;
    if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
    }
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let originalSourceSubscription;
            let timerSubscription;
            let lastValue = null;
            let seen = 0;
            const startTimer = (delay3)=>{
                timerSubscription = (0, executeSchedule_js_1.executeSchedule)(destination, scheduler, ()=>{
                    try {
                        originalSourceSubscription.unsubscribe();
                        (0, Observable_js_1.from)(_with({
                            meta,
                            lastValue,
                            seen
                        })).subscribe(destination);
                    } catch (err) {
                        destination.error(err);
                    }
                }, delay3);
            };
            originalSourceSubscription = source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    timerSubscription?.unsubscribe();
                    seen++;
                    destination.next(lastValue = value);
                    each > 0 && startTimer(each);
                },
                finalize: ()=>{
                    timerSubscription?.unsubscribe();
                    lastValue = null;
                }
            }));
            !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
        });
}
exports2.timeout = timeout2;
function timeoutErrorFactory(info2) {
    throw new TimeoutError2(info2);
}

return exports2;
}
