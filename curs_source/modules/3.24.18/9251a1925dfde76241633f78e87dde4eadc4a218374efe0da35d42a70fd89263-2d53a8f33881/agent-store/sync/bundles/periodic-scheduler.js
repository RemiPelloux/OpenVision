var PerSessionTimerScheduler;
export { PerSessionTimerScheduler };
var __wakaru_init_periodic_scheduler_initialized = false;
export function init_periodic_scheduler() {
if (__wakaru_init_periodic_scheduler_initialized) return;
__wakaru_init_periodic_scheduler_initialized = true;
"use strict";
PerSessionTimerScheduler = class {
    constructor(){
        this.timers = new Map();
        this.disposed = false;
    }
    schedule(handle, dueAtMs, run, _group) {
        if (this.disposed) {
            return;
        }
        this.cancel(handle);
        const delayMs = Math.max(0, dueAtMs - Date.now());
        const timer2 = setTimeout(()=>{
            if (this.timers.get(handle) !== timer2) {
                return;
            }
            this.timers.delete(handle);
            run();
        }, delayMs);
        timer2.unref?.();
        this.timers.set(handle, timer2);
    }
    cancel(handle) {
        const timer2 = this.timers.get(handle);
        if (timer2 === void 0) {
            return;
        }
        clearTimeout(timer2);
        this.timers.delete(handle);
    }
    dispose() {
        this.disposed = true;
        for (const handle of [
            ...this.timers.keys()
        ]){
            this.cancel(handle);
        }
    }
};

}
