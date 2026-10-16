import { h } from "./tslib.es6.js";
import { performance as Fi } from "node:perf_hooks";
import { monitorEventLoopDelay as nw } from "node:perf_hooks";
function sw() {
    Hi++, tn === void 0 && (tn = new Sg);
    const e = tn;
    let t = !1;
    return {
        isUnderPressure: ()=>e.isUnderPressure(),
        formatSuppressionSection: ()=>e.formatSuppressionSection(),
        dispose: ()=>{
            t || (t = !0, Hi--, Hi === 0 && tn !== void 0 && (tn.dispose(), tn = void 0));
        }
    };
}
var ml, tn, Hi, Sg;
function ow(e) {
    const r = `volume thresholds met (${[
        `output volume ${e.charsInWindow} chars in window >= min ${e.minChars}`,
        `output rate ${Math.round(e.charsPerSecond)} chars/s >= threshold ${e.triggeredThresholdCharsPerSecond} chars/s`
    ].join("; ")})`, n = e.suppressWithoutPressure ? "event loop pressure gate bypassed due to extreme output rate" : e.eventLoopPressureTracker.formatSuppressionSection();
    return `${r}; ${n}`;
}
var ls, Xt, bg, wg;
export { Hi, Sg, Xt, bg, ls, ml, ow, sw, tn, wg };
var __wakaru_iw_initialized = false;
export function iw() {
if (__wakaru_iw_initialized) return;
__wakaru_iw_initialized = true;
"use strict";
h(), ml = {
    eventLoopDelayP95Ms: 0,
    eventLoopUtilization: 0
}, Hi = 0, Sg = class {
    eventLoopMonitor;
    sampleTimer;
    lastEventLoopUtilization = Fi.eventLoopUtilization();
    latestSnapshot = ml;
    constructor(){
        this.eventLoopMonitor = nw({
            resolution: 20
        }), this.lastEventLoopUtilization = Fi.eventLoopUtilization(), this.eventLoopMonitor.enable(), this.sample(), this.sampleTimer = setInterval(()=>{
            this.sample();
        }, 250), this.sampleTimer.unref?.();
    }
    dispose() {
        this.sampleTimer !== void 0 && (clearInterval(this.sampleTimer), this.sampleTimer = void 0, this.eventLoopMonitor.disable(), this.latestSnapshot = ml, this.lastEventLoopUtilization = Fi.eventLoopUtilization());
    }
    isUnderPressure() {
        return this.latestSnapshot.eventLoopDelayP95Ms >= 50 || this.latestSnapshot.eventLoopUtilization >= .7;
    }
    formatSuppressionSection() {
        const e = this.latestSnapshot, t = [
            `event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms (threshold 50ms)`,
            `event loop utilization ${(e.eventLoopUtilization * 100).toFixed(1)}% (threshold ${(.7 * 100).toFixed(1)}%)`
        ].join(", "), r = this.getPressureTriggerReasons(e);
        return `event loop pressure gate enabled; ${r.length > 0 ? `event loop under pressure (${r.join(", ")})` : "event loop not under pressure"}; event loop metrics: ${t}`;
    }
    getPressureTriggerReasons(e) {
        const t = [];
        return e.eventLoopDelayP95Ms >= 50 && t.push(`event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms >= 50ms`), e.eventLoopUtilization >= .7 && t.push(`event loop utilization ${(e.eventLoopUtilization * 100).toFixed(1)}% >= ${(.7 * 100).toFixed(1)}%`), t;
    }
    sample() {
        this.latestSnapshot = {
            eventLoopDelayP95Ms: this.computeEventLoopDelayP95Ms(),
            eventLoopUtilization: this.computeEventLoopUtilization()
        };
    }
    computeEventLoopDelayP95Ms() {
        const e = this.eventLoopMonitor.percentile(95);
        if (this.eventLoopMonitor.reset(), !Number.isFinite(e)) return 0;
        const t = e / 1e6;
        return Math.max(0, t - 20);
    }
    computeEventLoopUtilization() {
        const e = Fi.eventLoopUtilization(), t = e.active - this.lastEventLoopUtilization.active, r = e.idle - this.lastEventLoopUtilization.idle, n = t + r;
        return this.lastEventLoopUtilization = e, n <= 0 || !Number.isFinite(n) ? 0 : t / n;
    }
};

}
var __wakaru_aw_initialized = false;
export function aw() {
if (__wakaru_aw_initialized) return;
__wakaru_aw_initialized = true;
"use strict";
h(), iw(), ls = {
    windowMs: 6e4,
    minimumThresholdCharsPerSecond: 64 * 1024,
    thresholdCharsPerSecondWithoutPressure: 2 * 1024 * 1024,
    minChars: 256 * 1024
}, Xt = 1e3, bg = `
[This shell is producing too much output to stream. The command will still run.]
`, wg = class {
    bucketChars;
    bucketStarts;
    totalChars = 0;
    outputSuppressed = !1;
    noticeSent = !1;
    windowMs;
    minimumThresholdCharsPerSecond;
    thresholdCharsPerSecondWithoutPressure;
    minChars;
    eventLoopPressureTracker;
    disposed = !1;
    constructor(e){
        this.windowMs = e?.windowMs ?? ls.windowMs, this.minimumThresholdCharsPerSecond = e?.minimumThresholdCharsPerSecond ?? ls.minimumThresholdCharsPerSecond, this.thresholdCharsPerSecondWithoutPressure = e?.thresholdCharsPerSecondWithoutPressure ?? ls.thresholdCharsPerSecondWithoutPressure, this.minChars = e?.minChars ?? ls.minChars;
        const t = Math.ceil(this.windowMs / Xt) + 1;
        this.bucketChars = new Uint32Array(t), this.bucketStarts = new Float64Array(t);
    }
    record(e, t = Date.now()) {
        if (this.disposed) return {
            shouldForward: !this.outputSuppressed,
            noticeJustTriggered: !1,
            charsPerSecond: 0,
            thresholdCharsPerSecond: this.minimumThresholdCharsPerSecond
        };
        this.recordChars(e, t);
        const r = this.getEventLoopPressureTracker().isUnderPressure(), n = this.getCharsInWindow(t), s = this.getAverageCharsPerSecond(t), i = this.getPeakBucketCharsPerSecond(t), o = Math.max(s, i), a = n >= this.minChars, c = a && o >= this.thresholdCharsPerSecondWithoutPressure, l = a && r && s >= this.minimumThresholdCharsPerSecond, u = c ? this.thresholdCharsPerSecondWithoutPressure : r ? this.minimumThresholdCharsPerSecond : this.thresholdCharsPerSecondWithoutPressure, d = c ? o : s;
        !this.outputSuppressed && (c || l) && (this.outputSuppressed = !0);
        const f = this.outputSuppressed && !this.noticeSent;
        return f && (this.noticeSent = !0, console.warn("[OutputSuppressionController] Suppressing shell output:", ow({
            charsInWindow: n,
            charsPerSecond: d,
            minChars: this.minChars,
            triggeredThresholdCharsPerSecond: u,
            suppressWithoutPressure: c,
            eventLoopPressureTracker: this.getEventLoopPressureTracker()
        }))), {
            shouldForward: !this.outputSuppressed,
            noticeJustTriggered: f,
            charsPerSecond: d,
            thresholdCharsPerSecond: u
        };
    }
    reset() {
        this.disposed || (this.bucketChars.fill(0), this.bucketStarts.fill(0), this.totalChars = 0, this.outputSuppressed = !1, this.noticeSent = !1);
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.eventLoopPressureTracker?.dispose(), this.eventLoopPressureTracker = void 0);
    }
    getEventLoopPressureTracker() {
        return this.eventLoopPressureTracker === void 0 && (this.eventLoopPressureTracker = sw()), this.eventLoopPressureTracker;
    }
    recordChars(e, t) {
        if (this.prune(t), e <= 0) return;
        const r = Math.floor(t / Xt) * Xt, n = Math.floor(r / Xt) % this.bucketChars.length;
        this.bucketStarts[n] !== r && (this.totalChars -= this.bucketChars[n], this.bucketStarts[n] = r, this.bucketChars[n] = 0), this.bucketChars[n] += e, this.totalChars += e;
    }
    getAverageCharsPerSecond(e) {
        if (this.prune(e), this.totalChars === 0) return 0;
        const t = e - this.windowMs;
        let r = e;
        for(let s = 0; s < this.bucketStarts.length; s++)this.bucketChars[s] > 0 && this.bucketStarts[s] >= t && (r = Math.min(r, this.bucketStarts[s]));
        const n = Math.max(Xt, Math.min(this.windowMs, e - r + Xt));
        return this.totalChars / (n / 1e3);
    }
    getPeakBucketCharsPerSecond(e) {
        this.prune(e);
        const t = e - this.windowMs;
        let r = 0;
        for(let n = 0; n < this.bucketChars.length; n++)this.bucketStarts[n] >= t && (r = Math.max(r, this.bucketChars[n]));
        return r / (Xt / 1e3);
    }
    getCharsInWindow(e) {
        return this.prune(e), this.totalChars;
    }
    prune(e) {
        const t = e - this.windowMs;
        for(let r = 0; r < this.bucketStarts.length; r++)this.bucketStarts[r] !== 0 && this.bucketStarts[r] < t && (this.totalChars -= this.bucketChars[r], this.bucketStarts[r] = 0, this.bucketChars[r] = 0);
    }
};

}
