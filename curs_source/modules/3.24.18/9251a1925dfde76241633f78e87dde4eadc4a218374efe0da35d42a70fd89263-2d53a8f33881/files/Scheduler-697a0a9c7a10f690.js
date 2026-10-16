import { require_dateTimestampProvider } from "./scheduler/dateTimestampProvider.js";
var __wakaru_require_Scheduler_cache;
export function require_Scheduler() {
if (__wakaru_require_Scheduler_cache) return __wakaru_require_Scheduler_cache;
var exports2 = {};
__wakaru_require_Scheduler_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Scheduler = void 0;
var dateTimestampProvider_js_1 = require_dateTimestampProvider();
var Scheduler = class _Scheduler {
    schedulerActionCtor;
    static now = dateTimestampProvider_js_1.dateTimestampProvider.now;
    constructor(schedulerActionCtor, now2 = _Scheduler.now){
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now2;
    }
    now;
    schedule(work, delay3 = 0, state) {
        return new this.schedulerActionCtor(this, work).schedule(state, delay3);
    }
};
exports2.Scheduler = Scheduler;

return exports2;
}
