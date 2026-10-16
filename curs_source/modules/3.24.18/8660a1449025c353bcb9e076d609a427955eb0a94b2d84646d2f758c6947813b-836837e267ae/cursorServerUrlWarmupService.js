import { Qe, Vh, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ekk, Ikk } from "./Ycg.js";
import { Dc, jl } from "./aiService.js";
import { qn, xI } from "./async.js";
import { AEn } from "./cloudAgentMachineKind.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { gul, has } from "./connectionTokenProviderService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { fc, hu } from "./productService.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { QOm, XOm, YOm, eQr, hqa, iQr, tQr } from "./yBp.js";
var pas, mas, nvg, ivg, rvg, gas, fas;
export { fas, gas, ivg, mas, nvg, pas, rvg };
var __wakaru_ful_initialized = false;
export function ful() {
if (__wakaru_ful_initialized) return;
__wakaru_ful_initialized = true;
"use strict";
E(), dp(), qn(), Qe(), Rn(), It(), hu(), Zi(), Cm(), gul(), Dc(), Ag(), AEn(), pas = "cloudAgentRepository.cursorServerUrlWarmup.failuresByAgent", mas = 15e3, nvg = 4, ivg = class extends Error {
    constructor(t, e){
        super(`Cursor server URL warmup for ${t} skipped after a recent failure; retry after ${e}ms.`), this.name = "CursorServerUrlWarmupThrottledError";
    }
}, rvg = class extends Error {
    constructor(t, e){
        super(`Cursor server URL warmup for ${t} skipped: ${e}.`), this.name = "CursorServerUrlWarmupSkippedError";
    }
}, gas = jn("cursorServerUrlWarmupService"), fas = class extends st {
    constructor(t, e, n, i, r){
        super(), this.productService = t, this.connectionTokenProviderService = e, this.storageService = n, this.structuredLogService = i, this.aiService = r, this.machineProbes = this._register(new xI(nvg)), this.pendingMachineProbes = new Map, this._loggedSkippedFailures = new Set;
    }
    async ensureConnectionToken(t, e) {
        const n = this.productService.commit ?? this.productService.nightlyCommit;
        if (!n) return;
        const i = this._readFailureForAgent(t);
        if (i?.commit === n && (e?.retryAfterFailure !== !0 || Date.now() - i.failedAtMs < mas)) {
            const s = `${t}@${i.failedAtMs}`;
            if (this._loggedSkippedFailures.has(s) || (this._loggedSkippedFailures.add(s), this.structuredLogService.info("background_composer", `CursorServerUrlWarmup: skipping warmup after previous failure for ${t}`, {
                agentId: t,
                commit: n,
                failedAtMs: i.failedAtMs,
                retryAfterFailure: e?.retryAfterFailure === !0,
                retryAfterMs: mas
            })), eQr(t, i.machineKind), e?.throwOnFailure === !0 && i.machineKind !== "worker") throw new ivg(t, mas);
            return;
        }
        const r = await this._classifyMachine(t, n, e?.usePrivateWorker);
        if (r === "unknown" || r === "worker-without-cursor-server") {
            const s = r === "unknown" ? "GetMachine did not report where the agent runs" : "the worker cannot serve cursor-server";
            if (this.structuredLogService.info("background_composer", `CursorServerUrlWarmup: skipping warmup for ${t}; ${s}`, {
                agentId: t,
                commit: n,
                machineKind: r
            }), e?.throwOnFailure === !0 && r === "unknown") throw new rvg(t, s);
            return;
        }
        try {
            r === "worker" ? await (await this.aiService.backgroundComposerClient()).warmCursorServerDownload({
                bcId: t,
                commit: n
            }) : await this.connectionTokenProviderService.getOrCreateCursorServerUrl(t, n, !0), this._clearFailureForAgent(t);
        } catch (s) {
            if (this._recordFailureForAgent(t, n, r), iQr(s) || this.structuredLogService.warn("background_composer", r === "worker" ? `CursorServerUrlWarmup: WarmCursorServerDownload failed for worker-backed ${t}` : `CursorServerUrlWarmup: Shared GetCursorServerUrl failed for ${t}`, s instanceof Error ? s : void 0), e?.throwOnFailure === !0 && r === "pod" && !Ikk(s)) throw s;
        }
    }
    async resolveWorkerWorkspaceRootPath(t, e) {
        const n = tQr(t);
        if (n !== void 0) return n;
        if (hqa(t) !== "pod") return await Vh(this._probeMachine(t), e.timeoutMs), tQr(t);
    }
    async _classifyMachine(t, e, n) {
        const i = await this._readMachineKind(t, e, n);
        return i !== "unknown" && eQr(t, i), i;
    }
    async _readMachineKind(t, e, n) {
        if (n === !1) return "pod";
        const i = await this.connectionTokenProviderService.peekCursorServerUrl(t, e);
        return i !== void 0 ? i.upgradePath ? "worker" : "pod" : this._probeMachine(t);
    }
    _probeMachine(t) {
        const e = this.pendingMachineProbes.get(t);
        if (e !== void 0) return e;
        const n = this.machineProbes.queue(()=>this._resolveMachineKind(t)).then((i)=>(i !== "unknown" && eQr(t, i), i)).finally(()=>{
            this.pendingMachineProbes.delete(t);
        });
        return this.pendingMachineProbes.set(t, n), n;
    }
    async _resolveMachineKind(t) {
        try {
            const n = await (await this.aiService.backgroundComposerClient()).getMachine({
                bcId: t
            });
            return QOm(t, XOm(n.machine)), YOm(n.machine);
        } catch (e) {
            return iQr(e) || this.structuredLogService.warn("background_composer", `CursorServerUrlWarmup: GetMachine failed for ${t}`, e instanceof Error ? e : void 0), "unknown";
        }
    }
    releaseAgent(t) {
        this._clearFailureForAgent(t);
    }
    _readFailureForAgent(t) {
        return this._readFailuresByAgent()[t];
    }
    _recordFailureForAgent(t, e, n) {
        const i = this._readFailuresByAgent();
        i[t] = {
            commit: e,
            failedAtMs: Date.now(),
            machineKind: n
        }, this._writeFailuresByAgent(i);
    }
    _clearFailureForAgent(t) {
        const e = this._readFailuresByAgent();
        Object.hasOwn(e, t) && (delete e[t], this._writeFailuresByAgent(e));
    }
    _readFailuresByAgent() {
        const t = this.storageService.get(pas, 0);
        if (!t) return this._failuresByAgentCache = void 0, {};
        if (this._failuresByAgentCache?.raw === t) return this._failuresByAgentCache.failures;
        const e = Ekk(t);
        return this._failuresByAgentCache = {
            raw: t,
            failures: e
        }, e;
    }
    _writeFailuresByAgent(t) {
        if (Object.keys(t).length === 0) {
            this._failuresByAgentCache = void 0, this.storageService.remove(pas, 0);
            return;
        }
        const e = JSON.stringify(t);
        this._failuresByAgentCache = {
            raw: e,
            failures: t
        }, this.storageService.store(pas, e, 0, 1);
    }
}, fas = Re([
    F(0, fc),
    F(1, has),
    F(2, ki),
    F(3, wh),
    F(4, jl)
], fas), bn(gas, fas, 1);

}
