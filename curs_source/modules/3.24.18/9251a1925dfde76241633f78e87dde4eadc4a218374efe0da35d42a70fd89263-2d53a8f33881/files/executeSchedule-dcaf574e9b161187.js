var __wakaru_require_executeSchedule_cache;
export function require_executeSchedule() {
if (__wakaru_require_executeSchedule_cache) return __wakaru_require_executeSchedule_cache;
var exports2 = {};
__wakaru_require_executeSchedule_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.executeSchedule = void 0;
function executeSchedule(parentSubscription, scheduler, work, delay3 = 0, repeat = false) {
    if (!parentSubscription.closed) {
        const scheduleSubscription = scheduler.schedule(function() {
            work();
            if (repeat) {
                parentSubscription.add(this.schedule(null, delay3));
            } else {
                this.unsubscribe();
            }
        }, delay3);
        parentSubscription.add(scheduleSubscription);
        if (!repeat) {
            return scheduleSubscription;
        }
    }
}
exports2.executeSchedule = executeSchedule;

return exports2;
}
