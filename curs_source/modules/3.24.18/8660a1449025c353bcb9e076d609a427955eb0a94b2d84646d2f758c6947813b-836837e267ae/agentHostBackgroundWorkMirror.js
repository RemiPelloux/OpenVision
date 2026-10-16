import { Ec, Qe, da } from "./Iwo.js";
import { Xbk } from "./Ycg.js";
import { Vrs, hG, zrs } from "./agent_host_pb.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { uie } from "./index_11.ts";
import { E } from "./tslib.es6.js";
var vhg, _hg, bhg;
export { _hg, bhg, vhg };
var __wakaru_Zbk_initialized = false;
export function Zbk() {
if (__wakaru_Zbk_initialized) return;
__wakaru_Zbk_initialized = true;
"use strict";
E(), yo(), qn(), Qe(), uie(), hG(), vhg = 5, _hg = 16, bhg = class {
    constructor(t, e, n, i = 250, r = vhg){
        this._providerService = t, this._backgroundWorkService = e, this._logService = n, this._restartDelayMs = i, this._maxRestartAttempts = r, this._hostWorkIdsBySession = new Map, this._watches = new Map, this._restartDelays = new da, this._restartAttempts = new Map, this._nextGeneration = 1, this._disposed = !1;
    }
    ensureWatch(t) {
        this._disposed || this._watches.has(t) || this._restartDelays.has(t) || this._startWatch(t);
    }
    start(t) {
        this._disposed || (this._cancelRestart(t), this._restartAttempts.delete(t), this._stopWatch(t, {
            clearTray: !0,
            markMirrorInactive: !1
        }), this._startWatch(t));
    }
    stop(t) {
        this._cancelRestart(t), this._restartAttempts.delete(t), this._stopWatch(t, {
            clearTray: !0,
            clearLifecycleSubagents: !0,
            markMirrorInactive: !0
        });
    }
    stopAll() {
        for (const t of [
            ...this._watches.keys(),
            ...this._hostWorkIdsBySession.keys(),
            ...this._restartDelays.keys()
        ])this.stop(t);
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._restartDelays.dispose();
    }
    _startWatch(t) {
        this._cancelRestart(t);
        const e = this._nextGeneration++, n = new El, i = {
            generation: e,
            cancellation: n,
            cancelSubscription: void 0
        };
        this._watches.set(t, i), this._backgroundWorkService.setHostSessionMirrorActive(t, !0), this._clearSessionTrayRows(t, {
            clearLifecycleSubagents: !1
        });
        const r = new zrs({
            sessionId: t
        }).toBinary(), s = this._providerService.watchSessionBackgroundWork(r)[Symbol.asyncIterator]();
        i.cancelSubscription = n.token.onCancellationRequested(()=>{
            s.return?.();
        }), (async ()=>{
            let o = !1;
            try {
                for(; !n.token.isCancellationRequested;){
                    const a = await s.next();
                    if (!this._isCurrentGeneration(t, e, n) || a.done) break;
                    const l = Vrs.fromBinary(a.value);
                    if (!(l.event.case !== "snapshot" && l.event.case !== "state")) {
                        if (!this._isCurrentGeneration(t, e, n)) break;
                        this._restartAttempts.delete(t), this._applyHostBackgroundWork(t, l.event.value.work);
                    }
                }
            } catch (a) {
                n.token.isCancellationRequested || (this._logService.warn("[AgentHostBackgroundWorkMirror] background-work watch failed", a), o = !0);
            } finally{
                i.cancelSubscription?.dispose(), i.cancelSubscription = void 0, await s.return?.();
                const a = this._isCurrentGeneration(t, e, n);
                n.dispose(), a && (this._watches.delete(t), this._clearSyncedHostBackgroundWork(t), o && !this._disposed ? this._scheduleRestart(t) : (this._restartAttempts.delete(t), this._backgroundWorkService.setHostSessionMirrorActive(t, !1)));
            }
        })();
    }
    _isCurrentGeneration(t, e, n) {
        const i = this._watches.get(t);
        return !this._disposed && i !== void 0 && i.generation === e && i.cancellation === n && !n.token.isCancellationRequested;
    }
    _applyHostBackgroundWork(t, e) {
        const n = this._hostWorkIdsBySession.get(t) ?? new Set, i = [], r = new Set;
        for (const s of e){
            const o = Xbk(t, s);
            o && (i.push(o), r.add(o.id));
        }
        this._backgroundWorkService.replaceSessionBackgroundWork(t, n, i), this._hostWorkIdsBySession.set(t, r);
    }
    _clearSyncedHostBackgroundWork(t) {
        const e = this._hostWorkIdsBySession.get(t) ?? new Set;
        e.size > 0 && this._backgroundWorkService.replaceSessionBackgroundWork(t, e, []);
    }
    _clearSessionTrayRows(t, e) {
        const n = this._hostWorkIdsBySession.get(t) ?? new Set, i = new Set(n);
        for (const r of this._backgroundWorkService.getComposerBackgroundWork(t))!e.clearLifecycleSubagents && r.kind === "subagent" && !n.has(r.id) || i.add(r.id);
        i.size > 0 && this._backgroundWorkService.replaceSessionBackgroundWork(t, i, []), this._hostWorkIdsBySession.delete(t);
    }
    _stopWatch(t, e) {
        const n = this._watches.get(t);
        n && (n.cancelSubscription?.dispose(), n.cancelSubscription = void 0, n.cancellation.cancel(), n.cancellation.dispose(), this._watches.delete(t)), e.clearTray && (e.clearLifecycleSubagents ? this._clearSessionTrayRows(t, {
            clearLifecycleSubagents: !0
        }) : this._clearSyncedHostBackgroundWork(t)), e.markMirrorInactive && this._backgroundWorkService.setHostSessionMirrorActive(t, !1);
    }
    _scheduleRestart(t) {
        if (this._disposed || this._restartDelays.has(t) || this._watches.has(t)) return;
        const e = (this._restartAttempts.get(t) ?? 0) + 1;
        if (e > this._maxRestartAttempts) {
            this._logService.warn(`[AgentHostBackgroundWorkMirror] giving up restart for session ${t} after ${this._maxRestartAttempts} attempts`), this._restartAttempts.delete(t), this._backgroundWorkService.setHostSessionMirrorActive(t, !1);
            return;
        }
        this._restartAttempts.set(t, e), this._backgroundWorkService.setHostSessionMirrorActive(t, !0);
        const n = Math.min(2 ** (e - 1), _hg), i = this._restartDelayMs * n;
        this._restartDelays.set(t, Ec(()=>{
            this._restartDelays.deleteAndDispose(t), !(this._disposed || this._watches.has(t)) && this._startWatch(t);
        }, i));
    }
    _cancelRestart(t) {
        this._restartDelays.deleteAndDispose(t);
    }
};

}
