import { le, pa, wr } from "./async.js";
import { Ve } from "./errors.js";
import { N, ge, se, yn } from "./event.js";
import { Qa } from "./hash.js";
import { J, ei, j, ve } from "./lifecycle.js";
import { Xa } from "./log.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { $d } from "./watcher.js";
import { watchFile as BVe } from "fs";
import { unwatchFile as GVe } from "fs";
function XV(e) {
    return typeof e.correlationId == "number";
}
function CVe(e) {
    if (typeof e == "number") {
        const t = [];
        return e & 4 && t.push("Added"), e & 8 && t.push("Deleted"), e & 2 && t.push("Updated"), t.length === 0 ? "<all>" : `[${t.join(", ")}]`;
    }
    return "<none>";
}
var c$;
export { CVe, XV, c$ };
var __wakaru_VVe_initialized = false;
export function VVe() {
if (__wakaru_VVe_initialized) return;
__wakaru_VVe_initialized = true;
"use strict";
h(), j(), $d(), se(), ye(), le(), Qa(), Ve(), c$ = class extends J {
    constructor(){
        super(), this._onDidChangeFile = this._register(new N), this.onDidChangeFile = this._onDidChangeFile.event, this._onDidLogMessage = this._register(new N), this.onDidLogMessage = this._onDidLogMessage.event, this._onDidWatchFail = this._register(new N), this.onDidWatchFail = this._onDidWatchFail.event, this.correlatedWatchRequests = new Map, this.nonCorrelatedWatchRequests = new Map, this.suspendedWatchRequests = this._register(new ei), this.suspendedWatchRequestsWithPolling = new Set, this.updateWatchersDelayer = this._register(new pa(this.getUpdateWatchersDelay())), this.suspendedWatchRequestPollingInterval = 5007, this.joinWatch = new wr, this.verboseLogging = !1, this._register(this.onDidWatchFail((e)=>this.suspendWatchRequest({
                id: this.computeId(e),
                correlationId: this.isCorrelated(e) ? e.correlationId : void 0,
                path: e.path
            })));
    }
    isCorrelated(e) {
        return XV(e);
    }
    computeId(e) {
        return this.isCorrelated(e) ? e.correlationId : Xa(e);
    }
    async watch(e) {
        this.joinWatch.isSettled || this.joinWatch.complete(), this.joinWatch = new wr;
        try {
            this.correlatedWatchRequests.clear(), this.nonCorrelatedWatchRequests.clear();
            for (const t of e)this.isCorrelated(t) ? this.correlatedWatchRequests.set(t.correlationId, t) : this.nonCorrelatedWatchRequests.set(this.computeId(t), t);
            for (const [t] of this.suspendedWatchRequests)!this.nonCorrelatedWatchRequests.has(t) && !this.correlatedWatchRequests.has(t) && (this.suspendedWatchRequests.deleteAndDispose(t), this.suspendedWatchRequestsWithPolling.delete(t));
            return await this.updateWatchers(!1);
        } finally{
            this.joinWatch.complete();
        }
    }
    updateWatchers(e) {
        const t = [];
        for (const [n, r] of [
            ...this.nonCorrelatedWatchRequests,
            ...this.correlatedWatchRequests
        ])this.suspendedWatchRequests.has(n) || t.push(r);
        return this.updateWatchersDelayer.trigger(()=>this.doWatch(t), e ? this.getUpdateWatchersDelay() : 0).catch((n)=>yn(n));
    }
    getUpdateWatchersDelay() {
        return 800;
    }
    isSuspended(e) {
        const t = this.computeId(e);
        return this.suspendedWatchRequestsWithPolling.has(t) ? "polling" : this.suspendedWatchRequests.has(t);
    }
    async suspendWatchRequest(e) {
        if (this.suspendedWatchRequests.has(e.id)) return;
        const t = new ve;
        this.suspendedWatchRequests.set(e.id, t), await this.joinWatch.p, !t.isDisposed && (this.monitorSuspendedWatchRequest(e, t), this.updateWatchers(!0));
    }
    resumeWatchRequest(e) {
        this.suspendedWatchRequests.deleteAndDispose(e.id), this.suspendedWatchRequestsWithPolling.delete(e.id), this.updateWatchers(!1);
    }
    monitorSuspendedWatchRequest(e, t) {
        this.doMonitorWithExistingWatcher(e, t) ? (this.trace(`reusing an existing recursive watcher to monitor ${e.path}`), this.suspendedWatchRequestsWithPolling.delete(e.id)) : (this.doMonitorWithNodeJS(e, t), this.suspendedWatchRequestsWithPolling.add(e.id));
    }
    doMonitorWithExistingWatcher(e, t) {
        const n = this.recursiveWatcher?.subscribe(e.path, (r, s)=>{
            t.isDisposed || (r ? this.monitorSuspendedWatchRequest(e, t) : s?.type === 1 && this.onMonitoredPathAdded(e));
        });
        return n ? (t.add(n), !0) : !1;
    }
    doMonitorWithNodeJS(e, t) {
        let n = !1;
        const r = (s, i)=>{
            if (t.isDisposed) return;
            const a = this.isPathNotFound(s), o = this.isPathNotFound(i), l = n;
            n = a, !a && (o || l) && this.onMonitoredPathAdded(e);
        };
        this.trace(`starting fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
        try {
            BVe(e.path, {
                persistent: !1,
                interval: this.suspendedWatchRequestPollingInterval
            }, r);
        } catch (s) {
            this.warn(`fs.watchFile() failed with error ${s} on path ${e.path} (correlationId: ${e.correlationId})`);
        }
        t.add(ge(()=>{
            this.trace(`stopping fs.watchFile() on ${e.path} (correlationId: ${e.correlationId})`);
            try {
                GVe(e.path, r);
            } catch (s) {
                this.warn(`fs.unwatchFile() failed with error ${s} on path ${e.path} (correlationId: ${e.correlationId})`);
            }
        }));
    }
    onMonitoredPathAdded(e) {
        this.trace(`detected ${e.path} exists again, resuming watcher (correlationId: ${e.correlationId})`);
        const t = {
            resource: x.file(e.path),
            type: 1,
            cId: e.correlationId
        };
        this._onDidChangeFile.fire([
            t
        ]), this.traceEvent(t, e), this.resumeWatchRequest(e);
    }
    isPathNotFound(e) {
        return e.ctimeMs === 0 && e.ino === 0;
    }
    async stop() {
        this.suspendedWatchRequests.clearAndDisposeAll(), this.suspendedWatchRequestsWithPolling.clear();
    }
    traceEvent(e, t) {
        if (this.verboseLogging) {
            const n = ` >> normalized ${e.type === 1 ? "[ADDED]" : e.type === 2 ? "[DELETED]" : "[CHANGED]"} ${e.resource.fsPath}`;
            this.traceWithCorrelation(n, t);
        }
    }
    traceWithCorrelation(e, t) {
        this.verboseLogging && this.trace(`${e}${typeof t.correlationId == "number" ? ` <${t.correlationId}> ` : ""}`);
    }
    requestToString(e) {
        return `${e.path} (excludes: ${e.excludes.length > 0 ? e.excludes : "<none>"}, includes: ${e.includes && e.includes.length > 0 ? JSON.stringify(e.includes) : "<all>"}, filter: ${CVe(e.filter)}, correlationId: ${typeof e.correlationId == "number" ? e.correlationId : "<none>"})`;
    }
    async setVerboseLogging(e) {
        this.verboseLogging = e;
    }
};

}
