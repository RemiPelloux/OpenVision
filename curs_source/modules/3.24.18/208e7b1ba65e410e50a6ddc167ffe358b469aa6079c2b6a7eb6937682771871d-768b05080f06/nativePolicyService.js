import { le, zR } from "./async.js";
import { B } from "./ipc.js";
import { Ut, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { fi, oO } from "./policy.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
var Zf;
export { Zf };
var __wakaru_Olt_initialized = false;
export function Olt() {
if (__wakaru_Olt_initialized) return;
__wakaru_Olt_initialized = true;
"use strict";
h(), fi(), le(), j(), te(), Zf = class extends oO {
    constructor(e, t){
        super(), this.logService = e, this.productName = t, this.throttler = new zR, this.watcher = this._register(new Ut);
    }
    async _updatePolicyDefinitions(e) {
        this.logService.trace(`NativePolicyService#_updatePolicyDefinitions - Found ${Object.keys(e).length} policy definitions`);
        const { createWatcher: t } = await import("@anysphere/policy-watcher");
        await this.throttler.queue(()=>new Promise((n, r)=>{
                try {
                    this.watcher.value = t(this.productName, e, (s)=>{
                        this._onDidPolicyChange(s), n();
                    });
                } catch (s) {
                    this.logService.error("NativePolicyService#_updatePolicyDefinitions - Error creating watcher:", s), r(s);
                }
            }));
    }
    _onDidPolicyChange(e) {
        this.logService.trace(`NativePolicyService#_onDidPolicyChange - Updated policy values: ${JSON.stringify(e)}`);
        for(const t in e){
            const n = e[t];
            n === void 0 ? this.policies.delete(t) : this.policies.set(t, n);
        }
        this._onDidChange.fire(Object.keys(e));
    }
}, Zf = B([
    w(0, Z)
], Zf);

}
