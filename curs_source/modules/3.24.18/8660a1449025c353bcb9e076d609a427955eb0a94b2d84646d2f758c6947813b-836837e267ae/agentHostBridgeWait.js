import { $ll, Bdg, jll } from "./Ycg.js";
import { TX, fle } from "./agentHostProviderService.js";
import { wll } from "./agentProviderWaitTimeout.js";
import { c_ } from "./async.cursor.js";
import { kl } from "./browser.ts";
import { Cr, _s } from "./experimentService.js";
import { Ji, Li } from "./log.js";
import { Uh, ip } from "./metricsService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Hll, mos;
export { Hll, mos };
var __wakaru_fhg_initialized = false;
export function fhg() {
if (__wakaru_fhg_initialized) return;
__wakaru_fhg_initialized = true;
"use strict";
E(), c_(), Ji(), _s(), ip(), kl(), wll(), fle(), Hll = "Timed out waiting for the agent host bridge to register; please retry.", mos = class {
    constructor(t, e, n, i, r){
        this._overrides = t, this._providerService = e, this._logService = n, this._metricsService = i, this._experimentService = r;
    }
    async waitUntilRegistered(t) {
        const e = jll(this._experimentService);
        await $ll({
            providerService: this._providerService,
            signal: t,
            initialTimeoutMs: this._overrides.initialTimeoutMs ?? e.initialTimeoutMs,
            retryTimeoutMs: this._overrides.retryTimeoutMs ?? e.retryTimeoutMs,
            maxAttempts: this._overrides.maxAttempts ?? e.maxAttempts,
            onExhausted: (n)=>this.recordTimeout(n)
        });
    }
    recordTimeout(t) {
        const e = this._providerService.getRegistrationDiagnostics?.();
        this._logService.error(`[AgentHostService] agent host bridge registration wait exhausted (${t.attempts} attempts, ~${t.totalWaitMs}ms)`, e), this._metricsService?.increment({
            stat: "cursor.agent_host.provider_wait_timeout",
            tags: Bdg("pre_send", e)
        });
    }
}, mos = Re([
    F(1, TX),
    F(2, Li),
    F(3, Uh),
    F(4, Cr)
], mos);

}
