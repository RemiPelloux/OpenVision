import { Wb } from "./appMetricsCache_2.js";
import { le } from "./async.js";
import { O, ge, se } from "./event.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { En } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Hpe, Jpe, Kpe, Ma, Qpe, SO, TO, Xpe, Ype, jpe, kO, qYe, vO, zpe } from "./rendererPing.js";
import { Cv } from "./rendererProcessInventoryCollector.js";
import { YYe, Zpe, Zw, ehe, wO, yO } from "./rendererStackRetry.js";
import { _a } from "./sentry.js";
import { gs } from "./storageMain.js";
import { Cn, Gs, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import { powerMonitor as JYe } from "electron";
function KR(e, t, n) {
    let r;
    const s = setTimeout(()=>{
        r?.(void 0), n?.();
    }, t);
    return Promise.race([
        e.finally(()=>clearTimeout(s)),
        new Promise((i)=>r = i)
    ]);
}
function jYe(e) {
    return Math.min(e.pingIntervalMs + Jpe, e.blockThresholdMs - e.pingIntervalMs);
}
function HYe(e, t, n) {
    !n && e.episode && !e.episode.allSuspended || (e.lastResponsiveAt = t), n && e.episode && (e.episode.allSuspended = !0);
}
function tf(e) {
    let t = 0;
    for (const n of e.split(`
`))n.startsWith(ehe) && t++;
    return t;
}
function KYe(e) {
    return tf(e) <= 2;
}
async function zYe({ collectProbe: e, shouldStop: t }) {
    const n = new Map, r = Date.now();
    for(; !(t() || Date.now() - r >= Zw || (await En(wO), t()));){
        const d = Zw - (Date.now() - r);
        if (d <= 0) break;
        const u = await e(d);
        if (u.kind === "stack") u.stack && n.set(u.stack, (n.get(u.stack) ?? 0) + 1);
        else if (u.kind !== "unsupported" || u.wallMs >= yO) break;
    }
    let s, i = -1, a = 0;
    for (const [d, u] of n){
        if (u < 2) continue;
        const m = tf(d);
        (m > i || m === i && u > a) && (s = d, i = m, a = u);
    }
    if (s !== void 0) return s;
    let o, l = 0;
    for (const [d, u] of n)u > l && Math.round(u * 100 / Zpe) > 20 && (o = d, l = u);
    return o;
}
var e1, the;
export { HYe, KR, KYe, e1, jYe, tf, the, zYe };
var __wakaru_XYe_initialized = false;
export function XYe() {
if (__wakaru_XYe_initialized) return;
__wakaru_XYe_initialized = true;
"use strict";
h(), j(), se(), le(), hr(), _a(), Wb(), te(), or(), pt(), qYe(), YYe(), e1 = class extends J {
    constructor(e, t, n, r){
        super(), this.windowsMainService = e, this.applicationStorageMainService = t, this.storageMainService = n, this.logService = r, this._config = Ma, this._active = this._register(new Ut), this._lastTickAt = 0, this._state = new Map, this._pongListener = (s)=>this._onPong(s), this.applicationStorageMainService.whenReady.then(()=>{
            this._store.isDisposed || (this._reconfigure(), this._register(this.storageMainService.applicationStorage.onDidChangeStorage((s)=>{
                s.key === vO && this._reconfigure();
            })));
        }).catch((s)=>this.logService.warn("[RendererPing] Failed to initialize", s));
    }
    _reconfigure() {
        if (this._config = this._readConfig(), !this._config.enabled) {
            this._stop();
            return;
        }
        this._active.value || this._start();
    }
    _start() {
        const e = this._active.value = new ve;
        Te.on(TO, this._pongListener), e.add(ge(()=>Te.removeListener(TO, this._pongListener)));
        for (const t of [
            "suspend",
            "resume",
            "lock-screen",
            "unlock-screen"
        ])e.add(O.fromNodeEventEmitter(JYe, t)(()=>this._rebaselineAll()));
        this._lastTickAt = Date.now(), this._arm(), this.logService.info(`[RendererPing] enabled (intervalMs=${this._config.pingIntervalMs}, blockThresholdMs=${this._config.blockThresholdMs}, stacks=${this._config.collectStackTraces})`);
    }
    _stop() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0), this._active.clear(), this._state.clear();
    }
    _arm() {
        this._timer = setTimeout(()=>{
            try {
                this._tick();
            } catch (e) {
                this.logService.warn(`[RendererPing] tick failed: ${e}`);
            } finally{
                this._arm();
            }
        }, this._config.pingIntervalMs), this._timer.unref?.();
    }
    _tick() {
        const e = Date.now(), t = e - this._lastTickAt;
        this._lastTickAt = e;
        const n = t > jYe(this._config), r = new Set;
        for (const s of this.windowsMainService.getWindows()){
            r.add(s.id);
            const i = s.webContents;
            if (!i || i.isDestroyed() || i.isCrashed() || !s.isReady) {
                const l = this._state.get(s.id);
                l && this._rebaselineWindow(l, e);
                continue;
            }
            const a = this._stateFor(s.id, e);
            if (n || s.isExtensionDevelopmentHost || s.isExtensionTestHost || i.isDevToolsOpened() || s.win?.isVisible() === !1 || s.browserView !== void 0 && !s.isBrowserViewVisible) this._rebaselineWindow(a, e, n);
            else if (a.hasPonged && !a.reporting && e - a.lastResponsiveAt > this._config.blockThresholdMs && e - a.lastReportAt > zpe) {
                a.reporting = !0;
                const l = e - a.lastResponsiveAt;
                this._onBlocked(s, l).catch((d)=>this.logService.warn(`[RendererPing] block handling failed: ${d}`)).finally(()=>{
                    const d = this._state.get(s.id);
                    d && (d.reporting = !1);
                });
            }
            try {
                i.send(jpe);
            } catch  {}
        }
        for (const s of this._state.keys())r.has(s) || this._state.delete(s);
    }
    async _onBlocked(e, t) {
        let n, r, s, i, a = !1, o = !1, l;
        const d = e.webContents;
        if (this._config.collectStackTraces && d) {
            const m = d.getOSProcessId(), f = this._rendererCpuMs(m), v = Date.now();
            let T = !1;
            try {
                const k = d.mainFrame.collectJavaScriptCallStack(), y = await KR(k, kO, ()=>{
                    T = !0;
                });
                typeof y == "string" ? n = y : r = T ? "timeout" : "unsupported";
            } catch (k) {
                r = "error", this.logService.trace(`[RendererPing] stack collection failed for window ${e.id}: ${k}`);
            }
            if (i = Date.now() - v, n === void 0 && f !== void 0) {
                const k = this._rendererCpuMs(m);
                k !== void 0 && (s = Math.max(0, k - f));
            }
            const S = n !== void 0 && KYe(n);
            if (r === "unsupported" && i < yO || S) {
                const k = await zYe({
                    collectProbe: (y)=>this._collectRetryStack(d, y),
                    shouldStop: ()=>{
                        if (!e.win || d.isDestroyed() || d.isCrashed()) return !0;
                        const y = this._state.get(e.id);
                        return !y || Date.now() - y.lastResponsiveAt < this._config.blockThresholdMs;
                    }
                });
                k && (S ? tf(k) > tf(n) && (l = n, n = k, o = !0) : (n = k, r = void 0, a = !0));
            }
        }
        const u = this._state.get(e.id);
        !u || Date.now() - u.lastResponsiveAt < this._config.blockThresholdMs || (u.lastReportAt = Date.now(), this._report({
            window: e,
            blockedMs: t,
            stack: n,
            stackFailureReason: r,
            cpuMsDuringSample: s,
            sampleWallMs: i,
            stackRecoveredByRetry: a,
            stackDeepenedByRetry: o,
            originalShallowStack: l
        }));
    }
    async _collectRetryStack(e, t) {
        const n = Date.now();
        let r = !1;
        try {
            const s = e.mainFrame.collectJavaScriptCallStack(), i = await KR(s, Math.min(t, kO), ()=>{
                r = !0;
            });
            return typeof i == "string" ? {
                kind: "stack",
                stack: i,
                wallMs: Date.now() - n
            } : {
                kind: r ? "timeout" : "unsupported",
                wallMs: Date.now() - n
            };
        } catch (s) {
            return this.logService.trace(`[RendererPing] retry stack collection failed: ${s}`), {
                kind: "error",
                wallMs: Date.now() - n
            };
        }
    }
    _rendererCpuMs(e) {
        if (e !== void 0) try {
            const n = Cv(0).find((r)=>r.pid === e)?.cpu?.cumulativeCPUUsage;
            return typeof n == "number" ? Math.round(n * 1e3) : void 0;
        } catch  {
            return;
        }
    }
    _rendererMemKb(e) {
        if (e !== void 0) try {
            const n = Cv(0).find((r)=>r.pid === e)?.memory?.workingSetSize;
            return typeof n == "number" ? n : void 0;
        } catch  {
            return;
        }
    }
    _report({ window: e, blockedMs: t, stack: n, stackFailureReason: r, cpuMsDuringSample: s, sampleWallMs: i, stackRecoveredByRetry: a, stackDeepenedByRetry: o, originalShallowStack: l }) {
        try {
            const d = e.webContents;
            if (!d || d.isDestroyed() || d.isCrashed()) return;
            const u = d.getOSProcessId(), m = this._rendererMemKb(u);
            let f;
            s !== void 0 && i !== void 0 && i >= Qpe && (f = s / i);
            const v = f !== void 0 && f < SO, T = f !== void 0 && f >= SO, k = !(n !== void 0 || T) && (v || t > Xpe);
            this.logService.warn(`[RendererPing] window ${e.id} (pid ${u}) ${k ? "unresponsive (suspected suspend)" : "blocked"} for ~${t}ms`);
            const y = this._state.get(e.id);
            y && (y.episode ? (y.episode.reportCount++, y.episode.allSuspended = y.episode.allSuspended && k) : y.episode = {
                reportCount: 1,
                allSuspended: k
            });
            const b = new the(n, e.id, u, t, k);
            gs(b, {
                captureContext: {
                    level: "warning",
                    tags: {
                        "event.process": "renderer",
                        cursor_renderer_blocked: String(!k),
                        cursor_renderer_blocked_suspended: String(k),
                        window_id: String(e.id)
                    },
                    extra: {
                        blocked_ms: t,
                        renderer_pid: u,
                        ping_interval_ms: this._config.pingIntervalMs,
                        block_threshold_ms: this._config.blockThresholdMs,
                        stack_collected: n !== void 0,
                        stack_frame_count: n !== void 0 ? tf(n) : void 0,
                        stack_failure_reason: r,
                        cpu_ms_during_sample: s,
                        sample_wall_ms: i,
                        working_set_kb: m,
                        suspected_suspend: k,
                        ...a ? {
                            stack_recovered_by_retry: !0
                        } : {},
                        ...o ? {
                            stack_deepened_by_retry: !0,
                            original_shallow_stack: l
                        } : {}
                    },
                    fingerprint: k ? [
                        "renderer_blocked_suspended"
                    ] : [
                        "renderer_blocked"
                    ]
                }
            });
        } catch (d) {
            this.logService.warn(`[RendererPing] Failed to emit Sentry event: ${d}`);
        }
    }
    _onPong(e) {
        const t = this.windowsMainService.getWindowByWebContents(e.sender);
        if (!t) return;
        const n = this._state.get(t.id);
        n && (n.episode && (n.pendingAnalytics = {
            blockedMs: Date.now() - n.lastResponsiveAt,
            wasSuspended: n.episode.allSuspended,
            reportCount: n.episode.reportCount,
            windowCount: this.windowsMainService.getWindowCount(),
            pingIntervalMs: this._config.pingIntervalMs,
            blockThresholdMs: this._config.blockThresholdMs
        }, n.episode = void 0), n.pendingAnalytics && this._emitBlockedAnalytics(t, n.pendingAnalytics) && (n.pendingAnalytics = void 0), n.lastResponsiveAt = Date.now(), n.hasPonged = !0);
    }
    _emitBlockedAnalytics(e, t) {
        try {
            const n = e.webContents;
            return !n || n.isDestroyed() ? !1 : (n.send(Hpe, t), !0);
        } catch (n) {
            return this.logService.warn(`[RendererPing] Failed to forward blocked analytics: ${n}`), !1;
        }
    }
    _rebaselineAll() {
        const e = Date.now();
        this._lastTickAt = e;
        for (const t of this._state.values())this._rebaselineWindow(t, e, !0);
    }
    _rebaselineWindow(e, t, n = !1) {
        HYe(e, t, n);
    }
    _stateFor(e, t) {
        let n = this._state.get(e);
        return n || (n = {
            lastResponsiveAt: t,
            lastReportAt: 0,
            reporting: !1,
            hasPonged: !1,
            episode: void 0,
            pendingAnalytics: void 0
        }, this._state.set(e, n)), n;
    }
    _readConfig() {
        const e = this.applicationStorageMainService.get(vO, -1);
        if (typeof e != "string" || e.length === 0) return Ma;
        try {
            const t = JSON.parse(e);
            if (!t || typeof t != "object") return Ma;
            const n = typeof t.blockThresholdMs == "number" && Number.isFinite(t.blockThresholdMs) && t.blockThresholdMs > 0 ? t.blockThresholdMs : Ma.blockThresholdMs, r = Math.max(n, Kpe), s = typeof t.pingIntervalMs == "number" && Number.isFinite(t.pingIntervalMs) && t.pingIntervalMs > 0 ? t.pingIntervalMs : Ma.pingIntervalMs, i = Math.min(Math.max(s, Ype), r / 3);
            return {
                enabled: typeof t.enabled == "boolean" ? t.enabled : Ma.enabled,
                pingIntervalMs: i,
                blockThresholdMs: r,
                collectStackTraces: typeof t.collectStackTraces == "boolean" ? t.collectStackTraces : Ma.collectStackTraces
            };
        } catch (t) {
            return this.logService.warn("[RendererPing] Failed to parse mirrored config, using defaults", t), Ma;
        }
    }
    dispose() {
        this._stop(), super.dispose();
    }
}, e1 = B([
    w(0, ct),
    w(1, Cn),
    w(2, Gs),
    w(3, Z)
], e1), the = class extends Error {
    constructor(e, t, n, r, s){
        const i = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        const a = s ? "RendererBlockedSuspended" : "RendererBlocked";
        super(`${a}: window ${t} (pid ${n}) ${s ? "unresponsive (suspected suspend)" : "blocked"} for ~${r}ms`), Error.stackTraceLimit = i, this.name = a, e && (this.stack = e);
    }
};

}
