import { JR, le } from "./async.js";
import { VVe, c$ } from "./baseWatcher.js";
import { Rm } from "./configurationModels.js";
import { O, ge, se } from "./event.js";
import { iM } from "./glob.js";
import { Ut, j } from "./lifecycle.js";
import { Ea, qVe, u$ } from "./nodejsWatcherLib.js";
import { Fe, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
import { LS, dM } from "./watcherStallMonitor.js";
function $V(e, t) {
    return Rm(e, t, (n, r)=>typeof n == "string" && typeof r == "string" ? n === r : typeof n != "string" && typeof r != "string" ? n.base === r.base && n.pattern === r.pattern : !1);
}
function $Ve(e) {
    return LS.add(e), ge(()=>LS.delete(e));
}
var m$;
export { $V, $Ve, m$ };
var __wakaru_KVe_initialized = false;
export function KVe() {
if (__wakaru_KVe_initialized) return;
__wakaru_KVe_initialized = true;
"use strict";
h(), se(), iM(), VVe(), oe(), qVe(), dM(), le(), j(), m$ = class extends c$ {
    constructor(e){
        super(), this.recursiveWatcher = e, this.onDidError = O.None, this._watchers = new Map, this.worker = this._register(new Ut), this._register($Ve(()=>this._watchers.size));
    }
    get watchers() {
        return this._watchers.values();
    }
    async doWatch(e) {
        e = this.removeDuplicateRequests(e);
        const t = [], n = new Set(Array.from(this.watchers));
        for (const r of e){
            const s = this._watchers.get(this.requestToWatcherKey(r));
            s && $V(s.request.excludes, r.excludes) && $V(s.request.includes, r.includes) ? n.delete(s) : t.push(r);
        }
        t.length && this.trace(`Request to start watching: ${t.map((r)=>this.requestToString(r)).join(",")}`), n.size && this.trace(`Request to stop watching: ${Array.from(n).map((r)=>this.requestToString(r.request)).join(",")}`), this.worker.clear();
        for (const r of n)this.stopWatching(r);
        this.createWatchWorker().work(t);
    }
    createWatchWorker() {
        return this.worker.value = new JR({
            maxWorkChunkSize: 100,
            throttleDelay: 100,
            maxBufferedWork: Number.MAX_VALUE
        }, (e)=>{
            for (const t of e)this.startWatching(t);
        }), this.worker.value;
    }
    requestToWatcherKey(e) {
        return typeof e.correlationId == "number" ? e.correlationId : this.pathToWatcherKey(e.path);
    }
    pathToWatcherKey(e) {
        return Fe ? e : e.toLowerCase();
    }
    startWatching(e) {
        const t = new u$(e, this.recursiveWatcher, (r)=>this._onDidChangeFile.fire(r), ()=>this._onDidWatchFail.fire(e), (r)=>this._onDidLogMessage.fire(r), this.verboseLogging), n = {
            request: e,
            instance: t
        };
        this._watchers.set(this.requestToWatcherKey(e), n), Ea?.onWatcherStart();
    }
    async stop() {
        await super.stop();
        for (const e of this.watchers)this.stopWatching(e);
    }
    stopWatching(e) {
        this.trace("stopping file watcher", e), this._watchers.delete(this.requestToWatcherKey(e.request)), e.instance.dispose(), Ea?.onWatcherStop();
    }
    removeDuplicateRequests(e) {
        const t = new Map;
        for (const n of e){
            let r = t.get(n.correlationId);
            r || (r = new Map, t.set(n.correlationId, r));
            const s = this.pathToWatcherKey(n.path);
            r.has(s) && this.trace(`ignoring a request for watching who's path is already watched: ${this.requestToString(n)}`), r.set(s, n);
        }
        return Array.from(t.values()).map((n)=>Array.from(n.values())).flat();
    }
    async setVerboseLogging(e) {
        super.setVerboseLogging(e);
        for (const t of this.watchers)t.instance.setVerboseLogging(e);
    }
    trace(e, t) {
        this.verboseLogging && this._onDidLogMessage.fire({
            type: "trace",
            message: this.toMessage(e, t)
        });
    }
    warn(e) {
        this._onDidLogMessage.fire({
            type: "warn",
            message: this.toMessage(e)
        });
    }
    toMessage(e, t) {
        return t ? `[File Watcher (node.js)] ${e} (${this.requestToString(t.request)})` : `[File Watcher (node.js)] ${e}`;
    }
};

}
