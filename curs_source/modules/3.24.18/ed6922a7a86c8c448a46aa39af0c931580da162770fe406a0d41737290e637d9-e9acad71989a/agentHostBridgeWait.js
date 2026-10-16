import { Wgd, X4e } from "./A3u.js";
import { C, ie } from "./actions_2.js";
import { Yyt } from "./agent-turn-tracker.ts";
import { b1o } from "./agentExecProviderService.js";
import { G_e, H1e } from "./agentHostProviderService.js";
import { K1e, N3n, y1o, yjt } from "./agentProviderWaitTimeout.js";
import { ub } from "./async.cursor.js";
import { Yu } from "./browser.ts";
import { Kr, qs } from "./experimentService.js";
import { Qn, Wn } from "./log.js";
import { Cp, vp } from "./metricsService.js";
import { x } from "./tslib.es6.js";
function b1h(e, t) {
    return {
        phase: e,
        registration_state: t?.state ?? "unknown",
        reason: t?.reason ?? "unknown",
        ms_since_last_register_bucket: b1o(t?.msSinceLastChange ?? -1)
    };
}
function B1o(e, t, n, i) {
    return typeof e != "number" || !Number.isFinite(e) ? t : Math.min(i, Math.max(n, Math.floor(e)));
}
function U1o(e) {
    const t = {
        initialTimeoutMs: yjt,
        retryTimeoutMs: N3n,
        maxAttempts: K1e
    };
    if (e === void 0) return t;
    try {
        const n = e.getDynamicConfig("agent_host_bridge_wait", {
            disableExposureLog: !0
        });
        return {
            initialTimeoutMs: B1o(n.initial_timeout_ms, t.initialTimeoutMs, 5e3, 12e4),
            retryTimeoutMs: B1o(n.retry_timeout_ms, t.retryTimeoutMs, 1e3, 3e4),
            maxAttempts: B1o(n.max_attempts, t.maxAttempts, 1, 20)
        };
    } catch  {
        return t;
    }
}
async function $1o(e) {
    const t = e.initialTimeoutMs ?? yjt, n = e.retryTimeoutMs ?? N3n, i = Math.max(1, e.maxAttempts ?? K1e), r = Date.now();
    for(let s = 1; s <= i; s++)try {
        await X4e((o)=>Promise.resolve(e.providerService.waitForProviderRegistration?.(o)), {
            timeoutMs: s === 1 ? t : n,
            ...e.signal === void 0 ? {} : {
                signal: e.signal
            }
        });
        return;
    } catch (o) {
        if (!Wgd(o)) throw o;
        if (s === i) throw e.onExhausted?.({
            attempts: i,
            totalWaitMs: Date.now() - r
        }), new Yyt(H1o, {
            errorType: "retriable",
            errorCode: "agent_host_bridge_unavailable"
        });
        s === 1 && e.onRetryPhaseEntered?.();
    }
}
var H1o, BQi;
export { $1o, B1o, BQi, H1o, U1o, b1h };
var __wakaru_q1h_initialized = false;
export function q1h() {
if (__wakaru_q1h_initialized) return;
__wakaru_q1h_initialized = true;
"use strict";
x(), ub(), Qn(), qs(), Cp(), Yu(), y1o(), H1e(), H1o = "Timed out waiting for the agent host bridge to register; please retry.", BQi = class {
    constructor(e, t, n, i, r){
        this._overrides = e, this._providerService = t, this._logService = n, this._metricsService = i, this._experimentService = r;
    }
    async waitUntilRegistered(e) {
        const t = U1o(this._experimentService);
        await $1o({
            providerService: this._providerService,
            signal: e,
            initialTimeoutMs: this._overrides.initialTimeoutMs ?? t.initialTimeoutMs,
            retryTimeoutMs: this._overrides.retryTimeoutMs ?? t.retryTimeoutMs,
            maxAttempts: this._overrides.maxAttempts ?? t.maxAttempts,
            onExhausted: (n)=>this.recordTimeout(n)
        });
    }
    recordTimeout(e) {
        const t = this._providerService.getRegistrationDiagnostics?.();
        this._logService.error(`[AgentHostService] agent host bridge registration wait exhausted (${e.attempts} attempts, ~${e.totalWaitMs}ms)`, t), this._metricsService?.increment({
            stat: "cursor.agent_host.provider_wait_timeout",
            tags: b1h("pre_send", t)
        });
    }
}, BQi = ie([
    C(1, G_e),
    C(2, Wn),
    C(3, vp),
    C(4, Kr)
], BQi);

}
