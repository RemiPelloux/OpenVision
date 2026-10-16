import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { c7, qn } from "./async.js";
import { kie, zpe } from "./cursorAgentHostService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Ope, vie } from "./repositoryService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var uTt, Ons;
export { Ons, uTt };
var __wakaru_azt_initialized = false;
export function azt() {
if (__wakaru_azt_initialized) return;
__wakaru_azt_initialized = true;
"use strict";
E(), Ji(), Gt(), Qe(), Rn(), It(), _s(), qn(), Ope(), zpe(), uTt = jn("pushRequestContextService"), Ons = class extends st {
    constructor(t, e, n, i){
        super(), this.logService = i, this._sandboxNetworkFileEntries = [], this._onDidChangeSandboxNetworkFileEntries = this._register(new tt), this.onDidChangeSandboxNetworkFileEntries = this._onDidChangeSandboxNetworkFileEntries.event, this._envStaticDataBarrier = new c7;
        let r = !1;
        try {
            r = t.checkFeatureGate("disable_push_request_context", {
                disableExposureLog: !1
            });
        } catch (u) {
            i.error('[PushRequestContextService] Error checking feature gate "disable_push_request_context":', u);
        }
        let s = !1;
        try {
            s = t.checkFeatureGate("instant_grep_indexing", {
                disableExposureLog: !1
            });
        } catch (u) {
            i.error('[PushRequestContextService] Error checking feature gate "instant_grep_indexing":', u);
        }
        const o = e.indexingGrepEnabled;
        this._trackedStateExpected = s && o;
        const a = !r && this._trackedStateExpected, l = n.isCursorAgentHostEnabled(), c = l && !a;
        this._enabled = a || c, i.info(`[PushRequestContextService] push request context is ${this._enabled ? "enabled" : "disabled"} (killswitchActive=${r}, instantGrepEnabled=${s}, indexingGrepEnabled=${o}, agentHostEnabled=${l}, agentHostForcePush=${c})`);
    }
    getPushRequestContextEnabled() {
        return this._enabled;
    }
    isTrackedStateExpected() {
        return this._trackedStateExpected;
    }
    getSandboxNetworkFileEntries() {
        return this._sandboxNetworkFileEntries;
    }
    updateSandboxNetworkFileEntries(t) {
        this._sandboxNetworkFileEntries = Object.freeze([
            ...t
        ]), this.logService.info(`[PushRequestContextService] Updated sandbox network file entries (${t.length} entries)`), this._onDidChangeSandboxNetworkFileEntries.fire(this._sandboxNetworkFileEntries);
    }
    getEnvStaticData() {
        return this._envStaticData;
    }
    updateEnvStaticData(t) {
        this._envStaticData = Object.freeze({
            ...t
        }), this._envStaticDataBarrier.open();
    }
    async waitForEnvStaticData() {
        await this._envStaticDataBarrier.wait();
    }
    getGitWorkspaceCaches() {
        return this._gitWorkspaceCaches;
    }
    updateGitWorkspaceCaches(t) {
        const e = new Map;
        for (const n of t)e.set(n.workspacePath, Object.freeze({
            ...n
        }));
        this._gitWorkspaceCaches = e, this.logService.info(`[PushRequestContextService] Updated git workspace caches (${t.length} entries)`);
    }
}, Ons = Re([
    F(0, Cr),
    F(1, vie),
    F(2, kie),
    F(3, Li)
], Ons), bn(uTt, Ons, 0);

}
