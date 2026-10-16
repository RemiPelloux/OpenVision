import { require_Observable } from "../Observable.js";
import { require_async } from "../scheduler/async.js";
var __wakaru_require_timeInterval_cache;
export function require_timeInterval() {
if (__wakaru_require_timeInterval_cache) return __wakaru_require_timeInterval_cache;
var exports2 = {};
__wakaru_require_timeInterval_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.TimeInterval = exports2.timeInterval = void 0;
var async_js_1 = require_async();
var Observable_js_1 = require_Observable();
function timeInterval(scheduler = async_js_1.asyncScheduler) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let last = scheduler.now();
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const now2 = scheduler.now();
                    const interval = now2 - last;
                    last = now2;
                    destination.next(new TimeInterval(value, interval));
                }
            }));
        });
}
exports2.timeInterval = timeInterval;
var TimeInterval = class {
    value;
    interval;
    constructor(value, interval){
        this.value = value;
        this.interval = interval;
    }
};
exports2.TimeInterval = TimeInterval;

return exports2;
}
