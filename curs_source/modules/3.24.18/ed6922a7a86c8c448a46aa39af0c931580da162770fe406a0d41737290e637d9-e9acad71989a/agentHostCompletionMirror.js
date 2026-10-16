import { Cl, He, Se, Tw, po } from "./HVr.js";
import { bq, ktt, oLe } from "./agent_host_pb.js";
import { VQe, i$t, zd } from "./agent_pb.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Ebt, Pj } from "./subagents_pb.js";
import { x } from "./tslib.es6.js";
function sQv(e) {
    switch(e){
        case i$t.SHELL:
            return "shell";
        case i$t.SUBAGENT:
            return "subagent";
        default:
            return;
    }
}
function oQv(e) {
    switch(e){
        case VQe.SUCCESS:
            return "success";
        case VQe.ABORTED:
            return "aborted";
        case VQe.ERROR:
        default:
            return "error";
    }
}
function aQv(e, t) {
    const n = sQv(t.kind);
    if (n === void 0) return;
    const i = {
        composerId: e,
        taskId: t.taskId,
        kind: n,
        status: oQv(t.status),
        title: t.title
    };
    return t.detail && (i.detail = t.detail), t.outputPath && (i.outputPath = t.outputPath), t.toolCallId && (i.toolCallId = t.toolCallId), t.reason === Ebt.TASK_PROGRESS ? i.reason = "task_progress" : t.reason === Ebt.TASK_FINISHED && (i.reason = "task_finished"), n === "subagent" && (i.subagentId = t.subagentId || t.taskId), i;
}
var hTh, pTh, mTh;
export { aQv, hTh, mTh, oQv, pTh, sQv };
var __wakaru_cQv_initialized = false;
export function cQv() {
if (__wakaru_cQv_initialized) return;
__wakaru_cQv_initialized = true;
"use strict";
x(), Ar(), bn(), Se(), bq(), zd(), Pj(), hTh = 5, pTh = 16, mTh = class {
    constructor(e, t, n, i){
        this._providerService = e, this._backgroundWorkService = t, this._logService = n, this._watches = new Map, this._cursorBySession = new Map, this._restartDelays = new po, this._restartAttempts = new Map, this._store = new He, this._nextGeneration = 1, this._disposed = !1, this._restartDelayMs = i?.restartDelayMs ?? 250, this._maxRestartAttempts = i?.maxRestartAttempts ?? hTh, this._waitForCompletionDelivery = i?.waitForCompletionDelivery;
    }
    ensureWatch(e) {
        this._disposed || this._watches.has(e) || this._restartDelays.has(e) || this._startWatch(e);
    }
    start(e) {
        this._disposed || (this._cancelRestart(e), this._restartAttempts.delete(e), this._stopWatch(e), this._startWatch(e));
    }
    stop(e) {
        this._cancelRestart(e), this._restartAttempts.delete(e), this._cursorBySession.delete(e), this._stopWatch(e);
    }
    stopAll() {
        for (const e of [
            ...this._watches.keys(),
            ...this._restartDelays.keys(),
            ...this._cursorBySession.keys()
        ])this.stop(e);
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._restartDelays.dispose(), this._store.dispose();
    }
    _startWatch(e) {
        this._cancelRestart(e);
        const t = this._nextGeneration++, n = new Eo, i = {
            generation: t,
            cancellation: n,
            cancelSubscription: void 0,
            completionDeliveryOwnership: void 0
        };
        this._watches.set(e, i), (async ()=>{
            let r = !1, s;
            try {
                const o = new ktt({
                    sessionId: e,
                    lastEventId: this._cursorBySession.get(e) ?? 0n,
                    backgroundTaskCompletionsOnly: !0
                }).toBinary();
                for(s = this._providerService.attachSession(o)[Symbol.asyncIterator](), i.cancelSubscription = n.token.onCancellationRequested(()=>{
                    s?.return?.();
                }); !n.token.isCancellationRequested;){
                    const a = s.next();
                    if (!this._isCurrentGeneration(e, t, n)) break;
                    i.completionDeliveryOwnership ??= this._backgroundWorkService.acquireHostCompletionDelivery(e);
                    const c = await a;
                    if (!this._isCurrentGeneration(e, t, n) || c.done) break;
                    const l = oLe.fromBinary(c.value);
                    if (l.event.case !== "backgroundTaskCompleted") {
                        this._cursorBySession.set(e, l.eventId);
                        continue;
                    }
                    const u = this._waitForCompletionDelivery?.(e, l.eventId);
                    if (u !== void 0 && (await Tw(u, n.token), !this._isCurrentGeneration(e, t, n))) break;
                    this._cursorBySession.set(e, l.eventId), this._restartAttempts.delete(e);
                    const h = l.event.value.completion;
                    if (h === void 0) continue;
                    const p = aQv(e, h);
                    p !== void 0 && this._backgroundWorkService.enqueue({
                        conversationId: e,
                        id: p.taskId,
                        source: p.kind,
                        payload: p
                    });
                }
            } catch (o) {
                n.token.isCancellationRequested || (this._logService.warn("[AgentHostCompletionMirror] completion watch failed", o), r = !0);
            } finally{
                i.completionDeliveryOwnership?.dispose(), i.completionDeliveryOwnership = void 0, i.cancelSubscription?.dispose(), i.cancelSubscription = void 0, await s?.return?.();
                const o = this._isCurrentGeneration(e, t, n);
                n.dispose(), o && (this._watches.delete(e), r && !this._disposed ? this._scheduleRestart(e) : this._restartAttempts.delete(e));
            }
        })();
    }
    _isCurrentGeneration(e, t, n) {
        const i = this._watches.get(e);
        return !this._disposed && i !== void 0 && i.generation === t && i.cancellation === n && !n.token.isCancellationRequested;
    }
    _stopWatch(e) {
        const t = this._watches.get(e);
        t && (t.completionDeliveryOwnership?.dispose(), t.completionDeliveryOwnership = void 0, t.cancellation.cancel(), t.cancelSubscription?.dispose(), t.cancelSubscription = void 0, t.cancellation.dispose(), this._watches.delete(e));
    }
    _scheduleRestart(e) {
        if (this._disposed || this._restartDelays.has(e) || this._watches.has(e)) return;
        const t = (this._restartAttempts.get(e) ?? 0) + 1;
        if (t > this._maxRestartAttempts) {
            this._logService.warn(`[AgentHostCompletionMirror] giving up restart for session ${e} after ${this._maxRestartAttempts} attempts`), this._restartAttempts.delete(e);
            return;
        }
        this._restartAttempts.set(e, t);
        const n = Math.min(2 ** (t - 1), pTh), i = this._restartDelayMs * n, r = Cl(()=>{
            this._restartDelays.deleteAndDispose(e), !(this._disposed || this._watches.has(e)) && this._startWatch(e);
        }, i, this._store);
        this._restartDelays.set(e, r);
    }
    _cancelRestart(e) {
        this._restartDelays.deleteAndDispose(e);
    }
};

}
