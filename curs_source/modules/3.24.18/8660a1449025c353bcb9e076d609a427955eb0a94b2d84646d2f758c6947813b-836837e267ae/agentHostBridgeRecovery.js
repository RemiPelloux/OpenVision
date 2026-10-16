import { Fll, Gbk, ghg, qbk, zbk } from "./Ycg.js";
import { mhg } from "./agentHostBridgeLoss.js";
import { TX, fle } from "./agentHostProviderService.js";
import { T1 } from "./errors.ts";
import { hX } from "./index_12.ts";
import { Ji, Li } from "./log.js";
import { Uh, ip } from "./metricsService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Bll, pos;
export { Bll, pos };
var __wakaru_Ybk_initialized = false;
export function Ybk() {
if (__wakaru_Ybk_initialized) return;
__wakaru_Ybk_initialized = true;
"use strict";
E(), hX(), Ji(), ip(), fle(), mhg(), Bll = "agent_host.bridge_retry", pos = class {
    constructor(t, e, n, i, r){
        this._lifetime = t, this._providerService = n, this._logService = i, this._metricsService = r, this._windowMs = e.windowMs ?? 1e4, this.maxAttempts = e.maxAttempts ?? 10, this._backoffMs = e.backoffMs ?? (e.windowMs !== void 0 ? 0 : void 0);
    }
    snapshotPresenceAtFailure(t) {
        t.providerPresentAtFailure === void 0 && (t.providerPresentAtFailure = this._providerService.hasProvider?.());
    }
    lossFlags(t) {
        const e = this._providerService.getRegistrationDiagnostics?.()?.generation;
        return {
            turnStarted: t.turnStarted,
            disposed: this._lifetime.isDisposed(),
            hasProvider: t.providerPresentAtFailure ?? this._providerService.hasProvider?.(),
            providerRegistrationChanged: t.registrationGenerationAtStart !== void 0 && e !== void 0 && e !== t.registrationGenerationAtStart
        };
    }
    isRetryableBeforeSend(t, e) {
        return Gbk(t, this.lossFlags(e));
    }
    isRetryableAfterSend(t, e) {
        return qbk(t, this.lossFlags(e));
    }
    upgradeToRetriableError(t, e) {
        const n = this.lossFlags(e);
        if (zbk(t, n)) return Fll(t, n.turnStarted ? "mid_turn" : "pre_send");
    }
    recordTimeout(t) {
        this._logService.warn("[AgentHostService] the agent host bridge was not recreated within the recovery window", t), this._metricsService?.increment({
            stat: Bll,
            tags: {
                outcome: "recovery_timeout"
            }
        });
    }
    async backoff(t, e) {
        const n = this._backoffMs ?? Math.min(1e3 * 2 ** t, 6e4);
        if (n <= 0) return;
        const i = AbortSignal.any(ghg(e.abortController.signal, e.conversationActionManager.signal, e.ctx.signal, this._lifetime.signal));
        await new Promise((r, s)=>{
            if (i.aborted) {
                s(new T1("Cancelled during backoff"));
                return;
            }
            const o = setTimeout(()=>{
                i.removeEventListener("abort", a), r();
            }, n);
            function a() {
                clearTimeout(o), s(new T1("Cancelled during backoff"));
            }
            i.addEventListener("abort", a, {
                once: !0
            });
        });
    }
    async waitForRecovery(t, e) {
        if (e(), this._providerService.hasProvider?.() === !0) return !0;
        const n = AbortSignal.any(ghg(t.abortController.signal, t.conversationActionManager.signal, t.ctx.signal, this._lifetime.signal, AbortSignal.timeout(this._windowMs)));
        try {
            return await this._providerService.waitForProviderRegistration?.(n), !0;
        } catch  {
            return e(), !1;
        }
    }
}, pos = Re([
    F(2, TX),
    F(3, Li),
    F(4, Uh)
], pos);

}
