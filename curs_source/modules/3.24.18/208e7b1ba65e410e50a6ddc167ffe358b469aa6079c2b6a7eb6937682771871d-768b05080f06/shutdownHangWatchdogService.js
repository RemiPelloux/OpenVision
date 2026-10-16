import { ge } from "./event.js";
import { Gp } from "./index_11.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $pe, _O, il } from "./shutdownHangWatchdog.js";
import { Rr } from "./spanUtils.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
var Qw;
export { Qw };
var __wakaru_$Ye_initialized = false;
export function $Ye() {
if (__wakaru_$Ye_initialized) return;
__wakaru_$Ye_initialized = true;
"use strict";
h(), Gp(), j(), te(), or(), _O(), Qw = class extends J {
    constructor(e, t){
        super(), this.applicationStorageMainService = e, this.logService = t;
    }
    _takeSnapshot() {
        return {
            config: this._readConfig(),
            records: []
        };
    }
    _getOrTakeSnapshot() {
        return this._snapshot || (this._snapshot = this._takeSnapshot()), this._snapshot;
    }
    _readConfig() {
        const e = this.applicationStorageMainService.get($pe, -1);
        if (typeof e != "string" || e.length === 0) return il;
        try {
            const t = JSON.parse(e);
            return !t || typeof t != "object" ? il : {
                perJoinerWarnMs: this._coerceMs(t.perJoinerWarnMs, il.perJoinerWarnMs),
                fireOnWillShutdownTotalMs: this._coerceMs(t.fireOnWillShutdownTotalMs, il.fireOnWillShutdownTotalMs),
                processExitTotalMs: this._coerceMs(t.processExitTotalMs, il.processExitTotalMs)
            };
        } catch (t) {
            return this.logService.warn("[ShutdownHangWatchdog] Failed to parse mirrored dynamic config, using defaults", t), il;
        }
    }
    _coerceMs(e, t) {
        return typeof e != "number" || !Number.isFinite(e) || e < 0 ? t : e;
    }
    armProcessExitWatchdog() {
        this._snapshot = this._takeSnapshot();
        const { config: e } = this._snapshot, t = e.processExitTotalMs;
        if (t <= 0) return ge(()=>{});
        const n = Date.now(), r = setTimeout(()=>{
            const s = Date.now() - n, i = this._snapshot?.records ?? [], a = i.filter((o)=>o.completedAtMs === void 0).map((o)=>o.id);
            this.logService.warn(`[ShutdownHangWatchdog] quit exceeded budget of ${t}ms (elapsed=${s}ms)`), this._captureShutdownHangEvent({
                phase: "quit",
                elapsedMs: s,
                thresholdMs: t,
                pendingJoinerIds: a,
                joinerTimings: this._toJoinerTimings(i)
            });
        }, t);
        return r.unref?.(), ge(()=>{
            clearTimeout(r);
        });
    }
    wrapJoiner(e, t) {
        const { config: n, records: r } = this._getOrTakeSnapshot(), s = {
            id: e,
            startMs: Date.now(),
            completedAtMs: void 0,
            warnedAtMs: void 0
        };
        r.push(s);
        const i = setTimeout(()=>{
            if (s.completedAtMs !== void 0) return;
            s.warnedAtMs = Date.now();
            const a = s.warnedAtMs - s.startMs;
            this.logService.warn(`[ShutdownHangWatchdog] will-shutdown joiner '${e}' slow: elapsed=${a}ms threshold=${n.perJoinerWarnMs}ms`);
        }, n.perJoinerWarnMs);
        return i.unref?.(), t.finally(()=>{
            s.completedAtMs = Date.now(), clearTimeout(i);
        });
    }
    async wrapFireOnWillShutdown(e) {
        const { config: t, records: n } = this._getOrTakeSnapshot(), r = Date.now();
        let s = !1;
        const i = setTimeout(()=>{
            s = !0;
            const a = Date.now() - r, o = n.filter((l)=>l.completedAtMs === void 0).map((l)=>l.id);
            this.logService.warn(`[ShutdownHangWatchdog] fireOnWillShutdown exceeded budget of ${t.fireOnWillShutdownTotalMs}ms (elapsed=${a}ms, pending=${o.join(",")})`), this._captureShutdownHangEvent({
                phase: "fireOnWillShutdown",
                elapsedMs: a,
                thresholdMs: t.fireOnWillShutdownTotalMs,
                pendingJoinerIds: o,
                joinerTimings: this._toJoinerTimings(n)
            });
        }, t.fireOnWillShutdownTotalMs);
        i.unref?.();
        try {
            await e();
        } finally{
            clearTimeout(i), s && this.logService.warn("[ShutdownHangWatchdog] fireOnWillShutdown eventually completed after watchdog fired");
        }
    }
    _toJoinerTimings(e) {
        return e.map((t)=>({
                id: t.id,
                ms: t.completedAtMs !== void 0 ? t.completedAtMs - t.startMs : null
            }));
    }
    _captureShutdownHangEvent(e) {
        try {
            const t = Rr();
            if (!t) return;
            t.captureEvent({
                level: "warning",
                exception: {
                    values: [
                        {
                            type: "ShutdownHang",
                            value: `Shutdown phase '${e.phase}' exceeded ${e.thresholdMs}ms (elapsed=${e.elapsedMs}ms)`
                        }
                    ]
                },
                tags: {
                    "shutdown.phase": e.phase,
                    "shutdown.reason": "QUIT"
                },
                contexts: {
                    shutdown: {
                        elapsed_ms: e.elapsedMs,
                        threshold_ms: e.thresholdMs,
                        pending_joiner_count: e.pendingJoinerIds.length,
                        pending_joiners: e.pendingJoinerIds,
                        joiner_count: e.joinerTimings.length,
                        joiner_timings_json: JSON.stringify(e.joinerTimings)
                    }
                }
            });
        } catch (t) {
            this.logService.warn("[ShutdownHangWatchdog] Failed to emit Sentry event", t);
        }
    }
}, Qw = B([
    w(0, Cn),
    w(1, Z)
], Qw);

}
