import { Ec, Nt, Qe, da, yx } from "./Iwo.js";
import { oyk } from "./Ycg.js";
import { K4e, Oze, hG } from "./agent_host_pb.js";
import { ju } from "./agent_pb.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { bQ } from "./subagents_pb.js";
import { E } from "./tslib.es6.js";
var Ohg, Fhg, Bhg;
export { Bhg, Fhg, Ohg };
var __wakaru_ayk_initialized = false;
export function ayk() {
if (__wakaru_ayk_initialized) return;
__wakaru_ayk_initialized = true;
"use strict";
E(), yo(), qn(), Qe(), hG(), ju(), bQ(), Ohg = 5, Fhg = 16, Bhg = class {
    constructor(t, e, n, i){
        this._providerService = t, this._backgroundWorkService = e, this._logService = n, this._watches = new Map, this._cursorBySession = new Map, this._restartDelays = new da, this._restartAttempts = new Map, this._store = new Nt, this._nextGeneration = 1, this._disposed = !1, this._restartDelayMs = i?.restartDelayMs ?? 250, this._maxRestartAttempts = i?.maxRestartAttempts ?? Ohg, this._waitForCompletionDelivery = i?.waitForCompletionDelivery;
    }
    ensureWatch(t) {
        this._disposed || this._watches.has(t) || this._restartDelays.has(t) || this._startWatch(t);
    }
    start(t) {
        this._disposed || (this._cancelRestart(t), this._restartAttempts.delete(t), this._stopWatch(t), this._startWatch(t));
    }
    stop(t) {
        this._cancelRestart(t), this._restartAttempts.delete(t), this._cursorBySession.delete(t), this._stopWatch(t);
    }
    stopAll() {
        for (const t of [
            ...this._watches.keys(),
            ...this._restartDelays.keys(),
            ...this._cursorBySession.keys()
        ])this.stop(t);
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._restartDelays.dispose(), this._store.dispose();
    }
    _startWatch(t) {
        this._cancelRestart(t);
        const e = this._nextGeneration++, n = new El, i = {
            generation: e,
            cancellation: n,
            cancelSubscription: void 0,
            completionDeliveryOwnership: void 0
        };
        this._watches.set(t, i), (async ()=>{
            let r = !1, s;
            try {
                const o = new Oze({
                    sessionId: t,
                    lastEventId: this._cursorBySession.get(t) ?? 0n,
                    backgroundTaskCompletionsOnly: !0
                }).toBinary();
                for(s = this._providerService.attachSession(o)[Symbol.asyncIterator](), i.cancelSubscription = n.token.onCancellationRequested(()=>{
                    s?.return?.();
                }); !n.token.isCancellationRequested;){
                    const a = s.next();
                    if (!this._isCurrentGeneration(t, e, n)) break;
                    i.completionDeliveryOwnership ??= this._backgroundWorkService.acquireHostCompletionDelivery(t);
                    const l = await a;
                    if (!this._isCurrentGeneration(t, e, n) || l.done) break;
                    const c = K4e.fromBinary(l.value);
                    if (c.event.case !== "backgroundTaskCompleted") {
                        this._cursorBySession.set(t, c.eventId);
                        continue;
                    }
                    const u = this._waitForCompletionDelivery?.(t, c.eventId);
                    if (u !== void 0 && (await yx(u, n.token), !this._isCurrentGeneration(t, e, n))) break;
                    this._cursorBySession.set(t, c.eventId), this._restartAttempts.delete(t);
                    const d = c.event.value.completion;
                    if (d === void 0) continue;
                    const h = oyk(t, d);
                    h !== void 0 && this._backgroundWorkService.enqueue({
                        conversationId: t,
                        id: h.taskId,
                        source: h.kind,
                        payload: h
                    });
                }
            } catch (o) {
                n.token.isCancellationRequested || (this._logService.warn("[AgentHostCompletionMirror] completion watch failed", o), r = !0);
            } finally{
                i.completionDeliveryOwnership?.dispose(), i.completionDeliveryOwnership = void 0, i.cancelSubscription?.dispose(), i.cancelSubscription = void 0, await s?.return?.();
                const o = this._isCurrentGeneration(t, e, n);
                n.dispose(), o && (this._watches.delete(t), r && !this._disposed ? this._scheduleRestart(t) : this._restartAttempts.delete(t));
            }
        })();
    }
    _isCurrentGeneration(t, e, n) {
        const i = this._watches.get(t);
        return !this._disposed && i !== void 0 && i.generation === e && i.cancellation === n && !n.token.isCancellationRequested;
    }
    _stopWatch(t) {
        const e = this._watches.get(t);
        e && (e.completionDeliveryOwnership?.dispose(), e.completionDeliveryOwnership = void 0, e.cancellation.cancel(), e.cancelSubscription?.dispose(), e.cancelSubscription = void 0, e.cancellation.dispose(), this._watches.delete(t));
    }
    _scheduleRestart(t) {
        if (this._disposed || this._restartDelays.has(t) || this._watches.has(t)) return;
        const e = (this._restartAttempts.get(t) ?? 0) + 1;
        if (e > this._maxRestartAttempts) {
            this._logService.warn(`[AgentHostCompletionMirror] giving up restart for session ${t} after ${this._maxRestartAttempts} attempts`), this._restartAttempts.delete(t);
            return;
        }
        this._restartAttempts.set(t, e);
        const n = Math.min(2 ** (e - 1), Fhg), i = this._restartDelayMs * n, r = Ec(()=>{
            this._restartDelays.deleteAndDispose(t), !(this._disposed || this._watches.has(t)) && this._startWatch(t);
        }, i, this._store);
        this._restartDelays.set(t, r);
    }
    _cancelRestart(t) {
        this._restartDelays.deleteAndDispose(t);
    }
};

}
