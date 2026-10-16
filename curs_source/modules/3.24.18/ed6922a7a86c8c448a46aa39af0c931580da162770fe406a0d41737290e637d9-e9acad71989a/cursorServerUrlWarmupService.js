import { Axv, Exv, cjd, pji, vji, xdo, xxv } from "./A3u.js";
import { Hp, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { aR, bn } from "./async.js";
import { Rdo } from "./cloudAgentMachineKind.js";
import { Rs } from "./code_3.js";
import { hg } from "./connect.js";
import { TN } from "./connectErrors.js";
import { IJi, QTo } from "./connectionTokenProviderService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Ka, jo } from "./productService.js";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
function Jt_(e) {
    try {
        const t = JSON.parse(e);
        if (!t || typeof t != "object") return {};
        const n = {};
        for (const [i, r] of Object.entries(t))r && typeof r == "object" && typeof r.commit == "string" && typeof r.failedAtMs == "number" && (n[i] = {
            commit: r.commit,
            failedAtMs: r.failedAtMs,
            machineKind: r.machineKind === "worker" ? "worker" : "pod"
        });
        return n;
    } catch  {
        return {};
    }
}
function en_(e) {
    return e instanceof Error && ("code" in e && e.code === Rs.NotFound || e.message.startsWith("[not_found]"));
}
var AJi, RJi, fAh, vAh, _Ah, DJi, MJi;
export { AJi, DJi, Jt_, MJi, RJi, _Ah, en_, fAh, vAh };
var __wakaru_JTo_initialized = false;
export function JTo() {
if (__wakaru_JTo_initialized) return;
__wakaru_JTo_initialized = true;
"use strict";
x(), hg(), bn(), Se(), Pn(), Ze(), Ka(), Vn(), im(), QTo(), Sg(), TN(), Rdo(), AJi = "cloudAgentRepository.cursorServerUrlWarmup.failuresByAgent", RJi = 15e3, fAh = 4, vAh = class extends Error {
    constructor(e, t){
        super(`Cursor server URL warmup for ${e} skipped after a recent failure; retry after ${t}ms.`), this.name = "CursorServerUrlWarmupThrottledError";
    }
}, _Ah = class extends Error {
    constructor(e, t){
        super(`Cursor server URL warmup for ${e} skipped: ${t}.`), this.name = "CursorServerUrlWarmupSkippedError";
    }
}, DJi = vn("cursorServerUrlWarmupService"), MJi = class extends we {
    constructor(e, t, n, i, r){
        super(), this.productService = e, this.connectionTokenProviderService = t, this.storageService = n, this.structuredLogService = i, this.aiService = r, this.machineProbes = this._register(new aR(fAh)), this.pendingMachineProbes = new Map, this._loggedSkippedFailures = new Set;
    }
    async ensureConnectionToken(e, t) {
        const n = this.productService.commit ?? this.productService.nightlyCommit;
        if (!n) return;
        const i = this._readFailureForAgent(e);
        if (i?.commit === n && (t?.retryAfterFailure !== !0 || Date.now() - i.failedAtMs < RJi)) {
            const s = `${e}@${i.failedAtMs}`;
            if (this._loggedSkippedFailures.has(s) || (this._loggedSkippedFailures.add(s), this.structuredLogService.info("background_composer", `CursorServerUrlWarmup: skipping warmup after previous failure for ${e}`, {
                agentId: e,
                commit: n,
                failedAtMs: i.failedAtMs,
                retryAfterFailure: t?.retryAfterFailure === !0,
                retryAfterMs: RJi
            })), xdo(e, i.machineKind), t?.throwOnFailure === !0 && i.machineKind !== "worker") throw new vAh(e, RJi);
            return;
        }
        const r = await this._classifyMachine(e, n, t?.usePrivateWorker);
        if (r === "unknown" || r === "worker-without-cursor-server") {
            const s = r === "unknown" ? "GetMachine did not report where the agent runs" : "the worker cannot serve cursor-server";
            if (this.structuredLogService.info("background_composer", `CursorServerUrlWarmup: skipping warmup for ${e}; ${s}`, {
                agentId: e,
                commit: n,
                machineKind: r
            }), t?.throwOnFailure === !0 && r === "unknown") throw new _Ah(e, s);
            return;
        }
        try {
            r === "worker" ? await (await this.aiService.backgroundComposerClient()).warmCursorServerDownload({
                bcId: e,
                commit: n
            }) : await this.connectionTokenProviderService.getOrCreateCursorServerUrl(e, n, !0), this._clearFailureForAgent(e);
        } catch (s) {
            if (this._recordFailureForAgent(e, n, r), vji(s) || this.structuredLogService.warn("background_composer", r === "worker" ? `CursorServerUrlWarmup: WarmCursorServerDownload failed for worker-backed ${e}` : `CursorServerUrlWarmup: Shared GetCursorServerUrl failed for ${e}`, s instanceof Error ? s : void 0), t?.throwOnFailure === !0 && r === "pod" && !en_(s)) throw s;
        }
    }
    async resolveWorkerWorkspaceRootPath(e, t) {
        const n = pji(e);
        if (n !== void 0) return n;
        if (cjd(e) !== "pod") return await Hp(this._probeMachine(e), t.timeoutMs), pji(e);
    }
    async _classifyMachine(e, t, n) {
        const i = await this._readMachineKind(e, t, n);
        return i !== "unknown" && xdo(e, i), i;
    }
    async _readMachineKind(e, t, n) {
        if (n === !1) return "pod";
        const i = await this.connectionTokenProviderService.peekCursorServerUrl(e, t);
        return i !== void 0 ? i.upgradePath ? "worker" : "pod" : this._probeMachine(e);
    }
    _probeMachine(e) {
        const t = this.pendingMachineProbes.get(e);
        if (t !== void 0) return t;
        const n = this.machineProbes.queue(()=>this._resolveMachineKind(e)).then((i)=>(i !== "unknown" && xdo(e, i), i)).finally(()=>{
            this.pendingMachineProbes.delete(e);
        });
        return this.pendingMachineProbes.set(e, n), n;
    }
    async _resolveMachineKind(e) {
        try {
            const n = await (await this.aiService.backgroundComposerClient()).getMachine({
                bcId: e
            });
            return Axv(e, xxv(n.machine)), Exv(n.machine);
        } catch (t) {
            return vji(t) || this.structuredLogService.warn("background_composer", `CursorServerUrlWarmup: GetMachine failed for ${e}`, t instanceof Error ? t : void 0), "unknown";
        }
    }
    releaseAgent(e) {
        this._clearFailureForAgent(e);
    }
    _readFailureForAgent(e) {
        return this._readFailuresByAgent()[e];
    }
    _recordFailureForAgent(e, t, n) {
        const i = this._readFailuresByAgent();
        i[e] = {
            commit: t,
            failedAtMs: Date.now(),
            machineKind: n
        }, this._writeFailuresByAgent(i);
    }
    _clearFailureForAgent(e) {
        const t = this._readFailuresByAgent();
        Object.hasOwn(t, e) && (delete t[e], this._writeFailuresByAgent(t));
    }
    _readFailuresByAgent() {
        const e = this.storageService.get(AJi, 0);
        if (!e) return this._failuresByAgentCache = void 0, {};
        if (this._failuresByAgentCache?.raw === e) return this._failuresByAgentCache.failures;
        const t = Jt_(e);
        return this._failuresByAgentCache = {
            raw: e,
            failures: t
        }, t;
    }
    _writeFailuresByAgent(e) {
        if (Object.keys(e).length === 0) {
            this._failuresByAgentCache = void 0, this.storageService.remove(AJi, 0);
            return;
        }
        const t = JSON.stringify(e);
        this._failuresByAgentCache = {
            raw: t,
            failures: e
        }, this.storageService.store(AJi, t, 0, 1);
    }
}, MJi = ie([
    C(0, jo),
    C(1, IJi),
    C(2, yn),
    C(3, Xh),
    C(4, jp)
], MJi), mn(DJi, MJi, 1);

}
