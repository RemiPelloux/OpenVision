import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, p3 } from "./async.js";
import { M1e, Vde } from "./cursorAgentHostService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { F$, iq } from "./repositoryService.js";
import { x } from "./tslib.es6.js";
var ttt, SYi;
export { SYi, ttt };
var __wakaru_Bwt_initialized = false;
export function Bwt() {
if (__wakaru_Bwt_initialized) return;
__wakaru_Bwt_initialized = true;
"use strict";
x(), Qn(), bt(), Se(), Pn(), Ze(), qs(), bn(), iq(), M1e(), ttt = vn("pushRequestContextService"), SYi = class extends we {
    constructor(e, t, n, i){
        super(), this.logService = i, this._sandboxNetworkFileEntries = [], this._onDidChangeSandboxNetworkFileEntries = this._register(new ve), this.onDidChangeSandboxNetworkFileEntries = this._onDidChangeSandboxNetworkFileEntries.event, this._envStaticDataBarrier = new p3;
        let r = !1;
        try {
            r = e.checkFeatureGate("disable_push_request_context", {
                disableExposureLog: !1
            });
        } catch (u) {
            i.error('[PushRequestContextService] Error checking feature gate "disable_push_request_context":', u);
        }
        let s = !1;
        try {
            s = e.checkFeatureGate("instant_grep_indexing", {
                disableExposureLog: !1
            });
        } catch (u) {
            i.error('[PushRequestContextService] Error checking feature gate "instant_grep_indexing":', u);
        }
        const o = t.indexingGrepEnabled;
        this._trackedStateExpected = s && o;
        const a = !r && this._trackedStateExpected, c = n.isCursorAgentHostEnabled(), l = c && !a;
        this._enabled = a || l, i.info(`[PushRequestContextService] push request context is ${this._enabled ? "enabled" : "disabled"} (killswitchActive=${r}, instantGrepEnabled=${s}, indexingGrepEnabled=${o}, agentHostEnabled=${c}, agentHostForcePush=${l})`);
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
    updateSandboxNetworkFileEntries(e) {
        this._sandboxNetworkFileEntries = Object.freeze([
            ...e
        ]), this.logService.info(`[PushRequestContextService] Updated sandbox network file entries (${e.length} entries)`), this._onDidChangeSandboxNetworkFileEntries.fire(this._sandboxNetworkFileEntries);
    }
    getEnvStaticData() {
        return this._envStaticData;
    }
    updateEnvStaticData(e) {
        this._envStaticData = Object.freeze({
            ...e
        }), this._envStaticDataBarrier.open();
    }
    async waitForEnvStaticData() {
        await this._envStaticDataBarrier.wait();
    }
    getGitWorkspaceCaches() {
        return this._gitWorkspaceCaches;
    }
    updateGitWorkspaceCaches(e) {
        const t = new Map;
        for (const n of e)t.set(n.workspacePath, Object.freeze({
            ...n
        }));
        this._gitWorkspaceCaches = t, this.logService.info(`[PushRequestContextService] Updated git workspace caches (${e.length} entries)`);
    }
}, SYi = ie([
    C(0, Kr),
    C(1, F$),
    C(2, Vde),
    C(3, Wn)
], SYi), mn(ttt, SYi, 0);

}
