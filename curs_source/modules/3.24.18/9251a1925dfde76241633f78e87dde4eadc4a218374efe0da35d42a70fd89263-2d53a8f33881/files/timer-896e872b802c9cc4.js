import { require_Observable } from "../Observable.js";
import { require_async } from "../scheduler/async.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
import { require_isDate } from "../util/isDate.js";
import { require_isScheduler } from "../util/isScheduler.js";
var __wakaru_require_timer_cache;
export function require_timer() {
if (__wakaru_require_timer_cache) return __wakaru_require_timer_cache;
var exports2 = {};
__wakaru_require_timer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.timer = void 0;
var Observable_js_1 = require_Observable();
var async_js_1 = require_async();
var isScheduler_js_1 = require_isScheduler();
var isDate_js_1 = require_isDate();
var executeSchedule_js_1 = require_executeSchedule();
function timer2(dueTime = 0, intervalOrScheduler, scheduler = async_js_1.asyncScheduler) {
    let intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if ((0, isScheduler_js_1.isScheduler)(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        } else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_js_1.Observable((subscriber)=>{
        let due = (0, isDate_js_1.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        let n = 0;
        return (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
            subscriber.next(n++);
            if (0 <= intervalDuration) {
                (0, executeSchedule_js_1.executeSchedule)(subscriber, scheduler, ()=>{
                    subscriber.next(n++);
                }, intervalDuration, true);
            } else {
                subscriber.complete();
            }
        }, due);
    });
}
exports2.timer = timer2;

return exports2;
}
