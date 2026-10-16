import { require_Observable } from "../Observable.js";
import { require_executeSchedule } from "../util/executeSchedule.js";
var __wakaru_require_observeOn_cache;
export function require_observeOn() {
if (__wakaru_require_observeOn_cache) return __wakaru_require_observeOn_cache;
var exports2 = {};
__wakaru_require_observeOn_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.observeOn = void 0;
var executeSchedule_js_1 = require_executeSchedule();
var Observable_js_1 = require_Observable();
function observeOn(scheduler, delay3 = 0) {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (value)=>(0, executeSchedule_js_1.executeSchedule)(destination, scheduler, ()=>destination.next(value), delay3),
                error: (err)=>(0, executeSchedule_js_1.executeSchedule)(destination, scheduler, ()=>destination.error(err), delay3),
                complete: ()=>(0, executeSchedule_js_1.executeSchedule)(destination, scheduler, ()=>destination.complete(), delay3)
            }));
        });
}
exports2.observeOn = observeOn;

return exports2;
}
