import { require_Observable } from "../Observable.js";
import { require_async } from "../scheduler/async.js";
import { require_args } from "../util/args.js";
import { require_arrRemove } from "../util/arrRemove.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_bufferTime_cache;
export function require_bufferTime() {
if (__wakaru_require_bufferTime_cache) return __wakaru_require_bufferTime_cache;
var exports2 = {};
__wakaru_require_bufferTime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.bufferTime = void 0;
var Observable_js_1 = require_Observable();
var arrRemove_js_1 = require_arrRemove();
var async_js_1 = require_async();
var args_js_1 = require_args();
var executeSchedule_js_1 = require_executeSchedule();
function bufferTime(bufferTimeSpan, ...otherArgs) {
    const scheduler = (0, args_js_1.popScheduler)(otherArgs) ?? async_js_1.asyncScheduler;
    const bufferCreationInterval = otherArgs[0] ?? null;
    const maxBufferSize = otherArgs[1] || Infinity;
    return (source)=>new Observable_js_1.Observable((destination)=>{
            let bufferRecords = [];
            let restartOnEmit = false;
            const emit2 = (record3)=>{
                const { buffer, subs } = record3;
                subs.unsubscribe();
                (0, arrRemove_js_1.arrRemove)(bufferRecords, record3);
                destination.next(buffer);
                restartOnEmit && startBuffer();
            };
            const startBuffer = ()=>{
                if (bufferRecords) {
                    const subs = new Observable_js_1.Subscription();
                    destination.add(subs);
                    const buffer = [];
                    const record3 = {
                        buffer,
                        subs
                    };
                    bufferRecords.push(record3);
                    (0, executeSchedule_js_1.executeSchedule)(subs, scheduler, ()=>emit2(record3), bufferTimeSpan);
                }
            };
            if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
                (0, executeSchedule_js_1.executeSchedule)(destination, scheduler, startBuffer, bufferCreationInterval, true);
            } else {
                restartOnEmit = true;
            }
            startBuffer();
            const bufferTimeSubscriber = (0, Observable_js_1.operate)({
                destination,
                next: (value)=>{
                    const recordsCopy = bufferRecords.slice();
                    for (const record3 of recordsCopy){
                        const { buffer } = record3;
                        buffer.push(value);
                        maxBufferSize <= buffer.length && emit2(record3);
                    }
                },
                complete: ()=>{
                    while(bufferRecords?.length){
                        destination.next(bufferRecords.shift().buffer);
                    }
                    bufferTimeSubscriber?.unsubscribe();
                    destination.complete();
                    destination.unsubscribe();
                },
                finalize: ()=>bufferRecords = null
            });
            source.subscribe(bufferTimeSubscriber);
        });
}
exports2.bufferTime = bufferTime;

return exports2;
}
