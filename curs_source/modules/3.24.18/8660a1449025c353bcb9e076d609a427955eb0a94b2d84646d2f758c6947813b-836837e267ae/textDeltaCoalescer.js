import { dSk } from "./Ycg.js";
import { R9t, yY } from "./date.js";
import { Hn, Ix } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var scl, Ipg, xpg, Apg, ocl, Rpg;
export { Apg, Ipg, Rpg, ocl, scl, xpg };
var __wakaru_hSk_initialized = false;
export function hSk() {
if (__wakaru_hSk_initialized) return;
__wakaru_hSk_initialized = true;
"use strict";
E(), Hn(), Bs(), yY(), scl = Object.freeze({
    targetCharsPerFrame: 0,
    maxLagFrames: 8,
    barrierMaxWaitMs: 0
}), Ipg = 32, xpg = R9t.Segmenter(void 0, {
    granularity: "word"
}), Apg = R9t.Segmenter(void 0, {
    granularity: "grapheme"
}), ocl = class dPb {
    constructor(e, n, i){
        this.onFlush = e, this.pacingHooks = n, this.disposed = !1, this.lastFlushMs = 0, this.drainWaiters = [], this.schedule = i?.schedule ?? ((r)=>Ix($t, r)), this.cancel = i?.cancel ?? ((r)=>r.dispose()), this.now = i?.now ?? (()=>Date.now()), this.scheduleTimeout = i?.scheduleTimeout ?? ((r, s)=>setTimeout(r, s)), this.cancelTimeout = i?.cancelTimeout ?? ((r)=>clearTimeout(r));
    }
    get pacing() {
        return this.pacingSnapshot ??= this.pacingHooks?.getOptions?.() ?? scl, this.pacingSnapshot.targetCharsPerFrame > 0 && this.pacingHooks?.isActive?.() === !1 ? scl : this.pacingSnapshot;
    }
    enqueue(e, n) {
        if (n.length !== 0) {
            if (this.pending !== void 0 ? this.pending.text += n : this.pending = {
                ctx: e,
                text: n
            }, this.disposed) {
                this.flush();
                return;
            }
            this.frameHandle === void 0 && this.scheduleFrame();
        }
    }
    scheduleFrame() {
        this.frameHandle = this.schedule(()=>{
            if (this.frameHandle = void 0, this.now() - this.lastFlushMs < dPb.MIN_FRAME_FLUSH_INTERVAL_MS) {
                this.scheduleFrame();
                return;
            }
            this.flushFrame();
        });
    }
    flushFrame() {
        const e = this.pending;
        if (e === void 0) {
            this.resolveDrainWaiters();
            return;
        }
        const n = this.pacing;
        if (n.targetCharsPerFrame <= 0 || e.text.length <= n.targetCharsPerFrame) {
            this.flush();
            return;
        }
        const i = this.drainFramesRemaining ?? n.maxLagFrames, r = Math.max(n.targetCharsPerFrame, Math.ceil(e.text.length / Math.max(1, i)));
        this.drainFramesRemaining !== void 0 && (this.drainFramesRemaining = Math.max(1, this.drainFramesRemaining - 1));
        const s = dSk(e.text, r), o = e.text.slice(0, s), a = e.text.slice(s);
        this.pending = a.length > 0 ? {
            ctx: e.ctx,
            text: a
        } : void 0, this.lastFlushMs = this.now(), this.onFlush(e.ctx, o), this.pending !== void 0 ? this.frameHandle === void 0 && this.scheduleFrame() : this.resolveDrainWaiters();
    }
    flush() {
        this.cancelScheduledFrame();
        const e = this.pending;
        if (e === void 0) {
            this.resolveDrainWaiters();
            return;
        }
        this.pending = void 0, this.lastFlushMs = this.now(), this.onFlush(e.ctx, e.text), this.resolveDrainWaiters();
    }
    flushGracefully() {
        const e = this.pending;
        if (e === void 0) return Promise.resolve();
        const n = this.pacing;
        return this.disposed || n.targetCharsPerFrame <= 0 || n.barrierMaxWaitMs <= 0 || e.text.length <= n.targetCharsPerFrame ? (this.flush(), Promise.resolve()) : new Promise((i)=>{
            this.drainFramesRemaining ??= Math.max(1, n.maxLagFrames);
            const r = this.scheduleTimeout(()=>this.flush(), n.barrierMaxWaitMs);
            this.drainWaiters.push(()=>{
                this.cancelTimeout(r), i();
            }), this.frameHandle === void 0 && this.scheduleFrame();
        });
    }
    resolveDrainWaiters() {
        if (this.drainFramesRemaining = void 0, this.drainWaiters.length === 0) return;
        const e = this.drainWaiters;
        this.drainWaiters = [];
        for (const n of e)n();
    }
    dropPending() {
        this.cancelScheduledFrame(), this.pending = void 0, this.resolveDrainWaiters();
    }
    cancelScheduledFrame() {
        this.frameHandle !== void 0 && (this.cancel(this.frameHandle), this.frameHandle = void 0);
    }
    dispose() {
        this.disposed = !0, this.flush();
    }
    disposeWithoutFlush() {
        this.disposed = !0, this.dropPending();
    }
}, ocl.MIN_FRAME_FLUSH_INTERVAL_MS = 16, Rpg = ocl;

}
