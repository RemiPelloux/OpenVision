import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_async } from "../scheduler/async.js";
import { require_args } from "../util/args.js";
import { require_arrRemove } from "../util/arrRemove.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_windowTime_cache;
export function require_windowTime() {
if (__wakaru_require_windowTime_cache) return __wakaru_require_windowTime_cache;
var exports2 = {};
__wakaru_require_windowTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.windowTime = void 0;
var Subject_js_1 = require_Subject();
var async_js_1 = require_async();
var Observable_js_1 = require_Observable();
var arrRemove_js_1 = require_arrRemove();
var args_js_1 = require_args();
var executeSchedule_js_1 = require_executeSchedule();
function windowTime(windowTimeSpan, ...otherArgs) {
    const scheduler = (0, args_js_1.popScheduler)(otherArgs) ?? async_js_1.asyncScheduler;
    const windowCreationInterval = otherArgs[0] ?? null;
    const maxWindowSize = otherArgs[1] || Infinity;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let windowRecords = [];
            let restartOnClose = false;
            const closeWindow = (record3)=>{
                const { window: window2, subs } = record3;
                window2.complete();
                subs.unsubscribe();
                (0, arrRemove_js_1.arrRemove)(windowRecords, record3);
                restartOnClose && startWindow();
            };
            const startWindow = ()=>{
                if (windowRecords) {
                    const subs = new Observable_js_1.Subscription();
                    destination.add(subs);
                    const window2 = new Subject_js_1.Subject();
                    const record3 = {
                        window: window2,
                        subs,
                        seen: 0
                    };
                    windowRecords.push(record3);
                    destination.next(window2.asObservable());
                    (0, executeSchedule_js_1.executeSchedule)(subs, scheduler, ()=>closeWindow(record3), windowTimeSpan);
                }
            };
            if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                (0, executeSchedule_js_1.executeSchedule)(destination, scheduler, startWindow, windowCreationInterval, true);
            } else {
                restartOnClose = true;
            }
            startWindow();
            const loop = (cb)=>windowRecords.slice().forEach(cb);
            const terminate = (cb)=>{
                loop(({ window: window2 })=>cb(window2));
                cb(destination);
                destination.unsubscribe();
            };
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    loop((record3)=>{
                        record3.window.next(value);
                        maxWindowSize <= ++record3.seen && closeWindow(record3);
                    });
                },
                error: (err)=>terminate((consumer)=>consumer.error(err)),
                complete: ()=>terminate((consumer)=>consumer.complete())
            }));
            return ()=>{
                windowRecords = null;
            };
        });
}
exports2.windowTime = windowTime;

return exports2;
}
