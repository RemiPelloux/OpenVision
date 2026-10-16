import { Hn, Ix } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var acl, Ppg;
export { Ppg, acl };
var __wakaru_pSk_initialized = false;
export function pSk() {
if (__wakaru_pSk_initialized) return;
__wakaru_pSk_initialized = true;
"use strict";
E(), Hn(), Bs(), acl = class hPb {
    constructor(e, n){
        this.onFlush = e, this.pending = new Map, this.lastFlushMs = 0, this.disposed = !1, this.schedule = n?.schedule ?? ((i)=>Ix($t, i)), this.cancel = n?.cancel ?? ((i)=>i.dispose()), this.now = n?.now ?? (()=>Date.now());
    }
    enqueue(e, n) {
        if (this.pending.set(e, n), this.disposed) {
            this.flush();
            return;
        }
        this.frameHandle === void 0 && this.scheduleFrame();
    }
    scheduleFrame() {
        this.frameHandle = this.schedule(()=>{
            if (this.frameHandle = void 0, this.now() - this.lastFlushMs < hPb.MIN_FRAME_FLUSH_INTERVAL_MS) {
                this.scheduleFrame();
                return;
            }
            this.flush();
        });
    }
    flush() {
        if (this.cancelScheduledFrame(), this.pending.size === 0) return;
        const e = new Map(this.pending);
        this.pending.clear(), this.lastFlushMs = this.now(), this.onFlush(e);
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
}, acl.MIN_FRAME_FLUSH_INTERVAL_MS = 16, Ppg = acl;

}
