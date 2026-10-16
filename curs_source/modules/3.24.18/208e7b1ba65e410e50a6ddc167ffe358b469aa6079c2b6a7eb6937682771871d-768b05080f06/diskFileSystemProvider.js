import { le, pa } from "./async.js";
import { Ve } from "./errors.js";
import { N, ge, se, yn } from "./event.js";
import { Lr } from "./extpath.js";
import { J, j } from "./lifecycle.js";
import { rn, te } from "./log.js";
import { Zo } from "./main.js";
import { Ce, Fn, on } from "./path.js";
import { ee } from "./platform.js";
import { h } from "./tslib.es6.js";
import { x } from "./uri.js";
import { $d } from "./watcher.js";
function GR(e) {
    return ee ? (e = Zo(e, Fn), e.endsWith(":") && (e += Fn)) : (e = Zo(e, Fn), e || (e = Fn)), e;
}
function wVe(e) {
    return e.recursive === !0;
}
function QV(e) {
    return e.map((t)=>({
            type: t.type,
            resource: x.revive(t.resource),
            cId: t.cId
        }));
}
var i$;
export { GR, QV, i$, wVe };
var __wakaru_PVe_initialized = false;
export function PVe() {
if (__wakaru_PVe_initialized) return;
__wakaru_PVe_initialized = true;
"use strict";
h(), le(), Ve(), se(), Lr(), j(), Ce(), $d(), te(), i$ = class extends J {
    constructor(e, t){
        super(), this.logService = e, this.options = t, this._onDidChangeFile = this._register(new N), this.onDidChangeFile = this._onDidChangeFile.event, this._onDidWatchError = this._register(new N), this.onDidWatchError = this._onDidWatchError.event, this.universalWatchRequests = new Set, this.universalWatchRequestDelayer = this._register(new pa(this.getRefreshWatchersDelay(this.universalWatchRequests.size))), this.nonRecursiveWatchRequests = new Set, this.nonRecursiveWatchRequestDelayer = this._register(new pa(this.getRefreshWatchersDelay(this.nonRecursiveWatchRequests.size)));
    }
    watch(e, t) {
        return t.recursive || this.options?.watcher?.forceUniversal ? this.watchUniversal(e, t) : this.watchNonRecursive(e, t);
    }
    getRefreshWatchersDelay(e) {
        return e > 200 ? 500 : 0;
    }
    watchUniversal(e, t) {
        const n = this.toWatchRequest(e, t);
        return this.universalWatchRequests.add(n), this.refreshUniversalWatchers(), ge(()=>{
            this.universalWatchRequests.delete(n), this.refreshUniversalWatchers();
        });
    }
    toWatchRequest(e, t) {
        const n = {
            path: this.toWatchPath(e),
            excludes: t.excludes,
            includes: t.includes,
            recursive: t.recursive,
            filter: t.filter,
            correlationId: t.correlationId
        };
        if (wVe(n)) {
            const r = this.options?.watcher?.recursive?.usePolling;
            r === !0 ? n.pollingInterval = this.options?.watcher?.recursive?.pollingInterval ?? 5e3 : Array.isArray(r) && r.includes(n.path) && (n.pollingInterval = this.options?.watcher?.recursive?.pollingInterval ?? 5e3);
        }
        return n;
    }
    refreshUniversalWatchers() {
        this.universalWatchRequestDelayer.trigger(()=>this.doRefreshUniversalWatchers(), this.getRefreshWatchersDelay(this.universalWatchRequests.size)).catch((e)=>yn(e));
    }
    doRefreshUniversalWatchers() {
        return this.universalWatcher || (this.universalWatcher = this._register(this.createUniversalWatcher((e)=>this._onDidChangeFile.fire(QV(e)), (e)=>this.onWatcherLogMessage(e), this.logService.getLevel() === rn.Trace)), this._register(this.logService.onDidChangeLogLevel(()=>{
            this.universalWatcher?.setVerboseLogging(this.logService.getLevel() === rn.Trace);
        }))), this.universalWatcher.watch(Array.from(this.universalWatchRequests));
    }
    watchNonRecursive(e, t) {
        const n = {
            path: this.toWatchPath(e),
            excludes: t.excludes,
            includes: t.includes,
            recursive: !1,
            filter: t.filter,
            correlationId: t.correlationId
        };
        return this.nonRecursiveWatchRequests.add(n), this.refreshNonRecursiveWatchers(), ge(()=>{
            this.nonRecursiveWatchRequests.delete(n), this.refreshNonRecursiveWatchers();
        });
    }
    refreshNonRecursiveWatchers() {
        this.nonRecursiveWatchRequestDelayer.trigger(()=>this.doRefreshNonRecursiveWatchers(), this.getRefreshWatchersDelay(this.nonRecursiveWatchRequests.size)).catch((e)=>yn(e));
    }
    doRefreshNonRecursiveWatchers() {
        return this.nonRecursiveWatcher || (this.nonRecursiveWatcher = this._register(this.createNonRecursiveWatcher((e)=>this._onDidChangeFile.fire(QV(e)), (e)=>this.onWatcherLogMessage(e), this.logService.getLevel() === rn.Trace)), this._register(this.logService.onDidChangeLogLevel(()=>{
            this.nonRecursiveWatcher?.setVerboseLogging(this.logService.getLevel() === rn.Trace);
        }))), this.nonRecursiveWatcher.watch(Array.from(this.nonRecursiveWatchRequests));
    }
    onWatcherLogMessage(e) {
        e.type === "error" && this._onDidWatchError.fire(e.message), this.logWatcherMessage(e);
    }
    logWatcherMessage(e) {
        this.logService[e.type](e.message);
    }
    toFilePath(e) {
        return on(e.fsPath);
    }
    toWatchPath(e) {
        const t = this.toFilePath(e);
        return GR(t);
    }
};

}
