import { ja } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { V1h } from "./agentHostBridgeLoss.js";
import { G_e, H1e } from "./agentHostProviderService.js";
import { hb, jM } from "./errors.ts";
import { ZW } from "./index_12.ts";
import { Qn, Wn } from "./log.js";
import { Cp, vp } from "./metricsService.js";
import { x } from "./tslib.es6.js";
function VZv(e) {
    return e instanceof Error && /agent host (bridge disposed|provider disconnected)/i.test(e.message);
}
function G1h(e) {
    return e instanceof Error && /event stream ended before the turn completed/i.test(e.message);
}
function L1o(e) {
    return e.hasProvider === !1 || e.providerRegistrationChanged === !0;
}
function N1o(e, t) {
    return VZv(e) ? !0 : ja(e) ? L1o(t) : !1;
}
function jZv(e, t) {
    return t.turnStarted ? !1 : N1o(e, t);
}
function qZv(e, t) {
    return !t.turnStarted || t.disposed ? !1 : N1o(e, t) ? !0 : G1h(e) && L1o(t);
}
function zZv(e, t) {
    return N1o(e, t) || t.turnStarted && G1h(e) && L1o(t);
}
function O1o(e, t = "pre_send") {
    return t === "mid_turn" ? new jM("Cursor lost its connection to the agent host during this turn; please retry.", {
        ...e instanceof Error ? {
            cause: e
        } : {},
        displayInfo: {
            title: "Agent connection lost",
            detail: "The connection to the agent host dropped. Click Retry to continue.",
            isRetryable: !0
        }
    }) : new jM("Cursor lost its connection to the agent host before this message was sent; please retry.", {
        ...e instanceof Error ? {
            cause: e
        } : {},
        displayInfo: {
            title: "Agent connection lost",
            detail: "The connection to the agent host dropped before this message was sent. Click Retry to continue.",
            isRetryable: !0
        }
    });
}
function j1h(...e) {
    return e.filter((t)=>t !== void 0);
}
var F1o, FQi;
export { F1o, FQi, G1h, L1o, N1o, O1o, VZv, j1h, jZv, qZv, zZv };
var __wakaru_XZv_initialized = false;
export function XZv() {
if (__wakaru_XZv_initialized) return;
__wakaru_XZv_initialized = true;
"use strict";
x(), ZW(), Qn(), Cp(), H1e(), V1h(), F1o = "agent_host.bridge_retry", FQi = class {
    constructor(e, t, n, i, r){
        this._lifetime = e, this._providerService = n, this._logService = i, this._metricsService = r, this._windowMs = t.windowMs ?? 1e4, this.maxAttempts = t.maxAttempts ?? 10, this._backoffMs = t.backoffMs ?? (t.windowMs !== void 0 ? 0 : void 0);
    }
    snapshotPresenceAtFailure(e) {
        e.providerPresentAtFailure === void 0 && (e.providerPresentAtFailure = this._providerService.hasProvider?.());
    }
    lossFlags(e) {
        const t = this._providerService.getRegistrationDiagnostics?.()?.generation;
        return {
            turnStarted: e.turnStarted,
            disposed: this._lifetime.isDisposed(),
            hasProvider: e.providerPresentAtFailure ?? this._providerService.hasProvider?.(),
            providerRegistrationChanged: e.registrationGenerationAtStart !== void 0 && t !== void 0 && t !== e.registrationGenerationAtStart
        };
    }
    isRetryableBeforeSend(e, t) {
        return jZv(e, this.lossFlags(t));
    }
    isRetryableAfterSend(e, t) {
        return qZv(e, this.lossFlags(t));
    }
    upgradeToRetriableError(e, t) {
        const n = this.lossFlags(t);
        if (zZv(e, n)) return O1o(e, n.turnStarted ? "mid_turn" : "pre_send");
    }
    recordTimeout(e) {
        this._logService.warn("[AgentHostService] the agent host bridge was not recreated within the recovery window", e), this._metricsService?.increment({
            stat: F1o,
            tags: {
                outcome: "recovery_timeout"
            }
        });
    }
    async backoff(e, t) {
        const n = this._backoffMs ?? Math.min(1e3 * 2 ** e, 6e4);
        if (n <= 0) return;
        const i = AbortSignal.any(j1h(t.abortController.signal, t.conversationActionManager.signal, t.ctx.signal, this._lifetime.signal));
        await new Promise((r, s)=>{
            if (i.aborted) {
                s(new hb("Cancelled during backoff"));
                return;
            }
            const o = setTimeout(()=>{
                i.removeEventListener("abort", a), r();
            }, n);
            function a() {
                clearTimeout(o), s(new hb("Cancelled during backoff"));
            }
            i.addEventListener("abort", a, {
                once: !0
            });
        });
    }
    async waitForRecovery(e, t) {
        if (t(), this._providerService.hasProvider?.() === !0) return !0;
        const n = AbortSignal.any(j1h(e.abortController.signal, e.conversationActionManager.signal, e.ctx.signal, this._lifetime.signal, AbortSignal.timeout(this._windowMs)));
        try {
            return await this._providerService.waitForProviderRegistration?.(n), !0;
        } catch  {
            return t(), !1;
        }
    }
}, FQi = ie([
    C(2, G_e),
    C(3, Wn),
    C(4, vp)
], FQi);

}
