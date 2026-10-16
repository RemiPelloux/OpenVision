import { okv } from "./A3u.js";
import { Cl, Se, po } from "./HVr.js";
import { KVt, bq, fZi, gZi } from "./agent_host_pb.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { CX } from "./index_11.ts";
import { x } from "./tslib.es6.js";
function ZZv(e, t) {
    const n = t.kind === KVt.SHELL ? "shell" : t.kind === KVt.SUBAGENT ? "subagent" : void 0;
    if (n === void 0) return;
    const i = okv(t.metadata), r = {
        id: t.id,
        kind: n,
        composerId: t.ownerId || e,
        title: i.title ?? t.id
    };
    return i.startTimeMs !== void 0 && (r.startTimeMs = i.startTimeMs), n === "subagent" && (r.subagentComposerId = t.id), r;
}
var z1h, K1h, Y1h;
export { K1h, Y1h, ZZv, z1h };
var __wakaru_QZv_initialized = false;
export function QZv() {
if (__wakaru_QZv_initialized) return;
__wakaru_QZv_initialized = true;
"use strict";
x(), Ar(), bn(), Se(), CX(), bq(), z1h = 5, K1h = 16, Y1h = class {
    constructor(e, t, n, i = 250, r = z1h){
        this._providerService = e, this._backgroundWorkService = t, this._logService = n, this._restartDelayMs = i, this._maxRestartAttempts = r, this._hostWorkIdsBySession = new Map, this._watches = new Map, this._restartDelays = new po, this._restartAttempts = new Map, this._nextGeneration = 1, this._disposed = !1;
    }
    ensureWatch(e) {
        this._disposed || this._watches.has(e) || this._restartDelays.has(e) || this._startWatch(e);
    }
    start(e) {
        this._disposed || (this._cancelRestart(e), this._restartAttempts.delete(e), this._stopWatch(e, {
            clearTray: !0,
            markMirrorInactive: !1
        }), this._startWatch(e));
    }
    stop(e) {
        this._cancelRestart(e), this._restartAttempts.delete(e), this._stopWatch(e, {
            clearTray: !0,
            clearLifecycleSubagents: !0,
            markMirrorInactive: !0
        });
    }
    stopAll() {
        for (const e of [
            ...this._watches.keys(),
            ...this._hostWorkIdsBySession.keys(),
            ...this._restartDelays.keys()
        ])this.stop(e);
    }
    dispose() {
        this._disposed = !0, this.stopAll(), this._restartDelays.dispose();
    }
    _startWatch(e) {
        this._cancelRestart(e);
        const t = this._nextGeneration++, n = new Eo, i = {
            generation: t,
            cancellation: n,
            cancelSubscription: void 0
        };
        this._watches.set(e, i), this._backgroundWorkService.setHostSessionMirrorActive(e, !0), this._clearSessionTrayRows(e, {
            clearLifecycleSubagents: !1
        });
        const r = new gZi({
            sessionId: e
        }).toBinary(), s = this._providerService.watchSessionBackgroundWork(r)[Symbol.asyncIterator]();
        i.cancelSubscription = n.token.onCancellationRequested(()=>{
            s.return?.();
        }), (async ()=>{
            let o = !1;
            try {
                for(; !n.token.isCancellationRequested;){
                    const a = await s.next();
                    if (!this._isCurrentGeneration(e, t, n) || a.done) break;
                    const c = fZi.fromBinary(a.value);
                    if (!(c.event.case !== "snapshot" && c.event.case !== "state")) {
                        if (!this._isCurrentGeneration(e, t, n)) break;
                        this._restartAttempts.delete(e), this._applyHostBackgroundWork(e, c.event.value.work);
                    }
                }
            } catch (a) {
                n.token.isCancellationRequested || (this._logService.warn("[AgentHostBackgroundWorkMirror] background-work watch failed", a), o = !0);
            } finally{
                i.cancelSubscription?.dispose(), i.cancelSubscription = void 0, await s.return?.();
                const a = this._isCurrentGeneration(e, t, n);
                n.dispose(), a && (this._watches.delete(e), this._clearSyncedHostBackgroundWork(e), o && !this._disposed ? this._scheduleRestart(e) : (this._restartAttempts.delete(e), this._backgroundWorkService.setHostSessionMirrorActive(e, !1)));
            }
        })();
    }
    _isCurrentGeneration(e, t, n) {
        const i = this._watches.get(e);
        return !this._disposed && i !== void 0 && i.generation === t && i.cancellation === n && !n.token.isCancellationRequested;
    }
    _applyHostBackgroundWork(e, t) {
        const n = this._hostWorkIdsBySession.get(e) ?? new Set, i = [], r = new Set;
        for (const s of t){
            const o = ZZv(e, s);
            o && (i.push(o), r.add(o.id));
        }
        this._backgroundWorkService.replaceSessionBackgroundWork(e, n, i), this._hostWorkIdsBySession.set(e, r);
    }
    _clearSyncedHostBackgroundWork(e) {
        const t = this._hostWorkIdsBySession.get(e) ?? new Set;
        t.size > 0 && this._backgroundWorkService.replaceSessionBackgroundWork(e, t, []);
    }
    _clearSessionTrayRows(e, t) {
        const n = this._hostWorkIdsBySession.get(e) ?? new Set, i = new Set(n);
        for (const r of this._backgroundWorkService.getComposerBackgroundWork(e))!t.clearLifecycleSubagents && r.kind === "subagent" && !n.has(r.id) || i.add(r.id);
        i.size > 0 && this._backgroundWorkService.replaceSessionBackgroundWork(e, i, []), this._hostWorkIdsBySession.delete(e);
    }
    _stopWatch(e, t) {
        const n = this._watches.get(e);
        n && (n.cancelSubscription?.dispose(), n.cancelSubscription = void 0, n.cancellation.cancel(), n.cancellation.dispose(), this._watches.delete(e)), t.clearTray && (t.clearLifecycleSubagents ? this._clearSessionTrayRows(e, {
            clearLifecycleSubagents: !0
        }) : this._clearSyncedHostBackgroundWork(e)), t.markMirrorInactive && this._backgroundWorkService.setHostSessionMirrorActive(e, !1);
    }
    _scheduleRestart(e) {
        if (this._disposed || this._restartDelays.has(e) || this._watches.has(e)) return;
        const t = (this._restartAttempts.get(e) ?? 0) + 1;
        if (t > this._maxRestartAttempts) {
            this._logService.warn(`[AgentHostBackgroundWorkMirror] giving up restart for session ${e} after ${this._maxRestartAttempts} attempts`), this._restartAttempts.delete(e), this._backgroundWorkService.setHostSessionMirrorActive(e, !1);
            return;
        }
        this._restartAttempts.set(e, t), this._backgroundWorkService.setHostSessionMirrorActive(e, !0);
        const n = Math.min(2 ** (t - 1), K1h), i = this._restartDelayMs * n;
        this._restartDelays.set(e, Cl(()=>{
            this._restartDelays.deleteAndDispose(e), !(this._disposed || this._watches.has(e)) && this._startWatch(e);
        }, i));
    }
    _cancelRestart(e) {
        this._restartDelays.deleteAndDispose(e);
    }
};

}
