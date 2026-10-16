import { Gb, en } from "./dom_2.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var sTo, lEh;
export { lEh, sTo };
var __wakaru_mJv_initialized = false;
export function mJv() {
if (__wakaru_mJv_initialized) return;
__wakaru_mJv_initialized = true;
"use strict";
x(), en(), lo(), sTo = class xCm {
    constructor(t, n){
        this.onFlush = t, this.pending = new Map, this.lastFlushMs = 0, this.disposed = !1, this.schedule = n?.schedule ?? ((i)=>Gb(on, i)), this.cancel = n?.cancel ?? ((i)=>i.dispose()), this.now = n?.now ?? (()=>Date.now());
    }
    enqueue(t, n) {
        if (this.pending.set(t, n), this.disposed) {
            this.flush();
            return;
        }
        this.frameHandle === void 0 && this.scheduleFrame();
    }
    scheduleFrame() {
        this.frameHandle = this.schedule(()=>{
            if (this.frameHandle = void 0, this.now() - this.lastFlushMs < xCm.MIN_FRAME_FLUSH_INTERVAL_MS) {
                this.scheduleFrame();
                return;
            }
            this.flush();
        });
    }
    flush() {
        if (this.cancelScheduledFrame(), this.pending.size === 0) return;
        const t = new Map(this.pending);
        this.pending.clear(), this.lastFlushMs = this.now(), this.onFlush(t);
    }
    dropPending() {
        this.cancelScheduledFrame(), this.pending.clear();
    }
    cancelScheduledFrame() {
        this.frameHandle !== void 0 && (this.cancel(this.frameHandle), this.frameHandle = void 0);
    }
    dispose() {
        this.disposed = !0, this.flush();
    }
}, sTo.MIN_FRAME_FLUSH_INTERVAL_MS = 16, lEh = sTo;

}
