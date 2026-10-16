import { X9, nze } from "./date.js";
import { Gb, en } from "./dom_2.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
function hJv(e, t) {
    if (e.length <= t) return e.length;
    for(let s = t; s > 0; s--)if (/\s/.test(e[s - 1])) return s;
    const n = e.slice(0, t + sEh), i = oEh.segment(n).containing(t);
    if (i.index > 0) return i.index;
    const r = aEh.segment(n).containing(t);
    return r.index > 0 ? r.index : r.segment.length;
}
var iTo, sEh, oEh, aEh, rTo, cEh;
export { aEh, cEh, hJv, iTo, oEh, rTo, sEh };
var __wakaru_pJv_initialized = false;
export function pJv() {
if (__wakaru_pJv_initialized) return;
__wakaru_pJv_initialized = true;
"use strict";
x(), en(), lo(), X9(), iTo = Object.freeze({
    targetCharsPerFrame: 0,
    maxLagFrames: 8,
    barrierMaxWaitMs: 0
}), sEh = 32, oEh = nze.Segmenter(void 0, {
    granularity: "word"
}), aEh = nze.Segmenter(void 0, {
    granularity: "grapheme"
}), rTo = class ECm {
    constructor(t, n, i){
        this.onFlush = t, this.pacingHooks = n, this.disposed = !1, this.lastFlushMs = 0, this.drainWaiters = [], this.schedule = i?.schedule ?? ((r)=>Gb(on, r)), this.cancel = i?.cancel ?? ((r)=>r.dispose()), this.now = i?.now ?? (()=>Date.now()), this.scheduleTimeout = i?.scheduleTimeout ?? ((r, s)=>setTimeout(r, s)), this.cancelTimeout = i?.cancelTimeout ?? ((r)=>clearTimeout(r));
    }
    get pacing() {
        return this.pacingSnapshot ??= this.pacingHooks?.getOptions?.() ?? iTo, this.pacingSnapshot.targetCharsPerFrame > 0 && this.pacingHooks?.isActive?.() === !1 ? iTo : this.pacingSnapshot;
    }
    enqueue(t, n) {
        if (n.length !== 0) {
            if (this.pending !== void 0 ? this.pending.text += n : this.pending = {
                ctx: t,
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
            if (this.frameHandle = void 0, this.now() - this.lastFlushMs < ECm.MIN_FRAME_FLUSH_INTERVAL_MS) {
                this.scheduleFrame();
                return;
            }
            this.flushFrame();
        });
    }
    flushFrame() {
        const t = this.pending;
        if (t === void 0) {
            this.resolveDrainWaiters();
            return;
        }
        const n = this.pacing;
        if (n.targetCharsPerFrame <= 0 || t.text.length <= n.targetCharsPerFrame) {
            this.flush();
            return;
        }
        const i = this.drainFramesRemaining ?? n.maxLagFrames, r = Math.max(n.targetCharsPerFrame, Math.ceil(t.text.length / Math.max(1, i)));
        this.drainFramesRemaining !== void 0 && (this.drainFramesRemaining = Math.max(1, this.drainFramesRemaining - 1));
        const s = hJv(t.text, r), o = t.text.slice(0, s), a = t.text.slice(s);
        this.pending = a.length > 0 ? {
            ctx: t.ctx,
            text: a
        } : void 0, this.lastFlushMs = this.now(), this.onFlush(t.ctx, o), this.pending !== void 0 ? this.frameHandle === void 0 && this.scheduleFrame() : this.resolveDrainWaiters();
    }
    flush() {
        this.cancelScheduledFrame();
        const t = this.pending;
        if (t === void 0) {
            this.resolveDrainWaiters();
            return;
        }
        this.pending = void 0, this.lastFlushMs = this.now(), this.onFlush(t.ctx, t.text), this.resolveDrainWaiters();
    }
    flushGracefully() {
        const t = this.pending;
        if (t === void 0) return Promise.resolve();
        const n = this.pacing;
        return this.disposed || n.targetCharsPerFrame <= 0 || n.barrierMaxWaitMs <= 0 || t.text.length <= n.targetCharsPerFrame ? (this.flush(), Promise.resolve()) : new Promise((i)=>{
            this.drainFramesRemaining ??= Math.max(1, n.maxLagFrames);
            const r = this.scheduleTimeout(()=>this.flush(), n.barrierMaxWaitMs);
            this.drainWaiters.push(()=>{
                this.cancelTimeout(r), i();
            }), this.frameHandle === void 0 && this.scheduleFrame();
        });
    }
    resolveDrainWaiters() {
        if (this.drainFramesRemaining = void 0, this.drainWaiters.length === 0) return;
        const t = this.drainWaiters;
        this.drainWaiters = [];
        for (const n of t)n();
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
}, rTo.MIN_FRAME_FLUSH_INTERVAL_MS = 16, cEh = rTo;

}
