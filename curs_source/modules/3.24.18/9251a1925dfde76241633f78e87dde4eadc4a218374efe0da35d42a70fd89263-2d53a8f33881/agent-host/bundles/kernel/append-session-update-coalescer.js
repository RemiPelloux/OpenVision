var WATCH_SESSIONS_LAST_EVENT_ID_DEBOUNCE_MS, AppendSessionUpdateCoalescer;
export { AppendSessionUpdateCoalescer, WATCH_SESSIONS_LAST_EVENT_ID_DEBOUNCE_MS };
var __wakaru_init_append_session_update_coalescer_initialized = false;
export function init_append_session_update_coalescer() {
if (__wakaru_init_append_session_update_coalescer_initialized) return;
__wakaru_init_append_session_update_coalescer_initialized = true;
"use strict";
WATCH_SESSIONS_LAST_EVENT_ID_DEBOUNCE_MS = 1e3;
AppendSessionUpdateCoalescer = class {
    constructor(options2){
        this.options = options2;
        this.pending = new Set();
        this.delayMs = options2.delayMs ?? WATCH_SESSIONS_LAST_EVENT_ID_DEBOUNCE_MS;
    }
    schedule(session) {
        if (!this.options.isLive(session)) {
            return;
        }
        this.pending.add(session);
        if (this.flushTimer !== void 0) {
            return;
        }
        this.flushTimer = setTimeout(()=>{
            this.flushTimer = void 0;
            this.flush();
        }, this.delayMs);
    }
    cancel(session) {
        this.pending.delete(session);
        this.clearTimerIfIdle();
    }
    cancelAll() {
        this.pending.clear();
        if (this.flushTimer !== void 0) {
            clearTimeout(this.flushTimer);
            this.flushTimer = void 0;
        }
    }
    flush() {
        const pending = [
            ...this.pending
        ];
        this.pending.clear();
        for (const session of pending){
            if (this.options.isLive(session)) {
                this.options.emitUpdated(session);
            }
        }
    }
    clearTimerIfIdle() {
        if (this.pending.size === 0 && this.flushTimer !== void 0) {
            clearTimeout(this.flushTimer);
            this.flushTimer = void 0;
        }
    }
};

}
