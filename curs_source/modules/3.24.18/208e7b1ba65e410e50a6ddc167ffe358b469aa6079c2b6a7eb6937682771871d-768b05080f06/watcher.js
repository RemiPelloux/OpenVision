import { Wt } from "./files.js";
import { iM } from "./glob.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { Ce, Fn } from "./path.js";
import { Fe, oe } from "./platform.js";
import { ec } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { ye } from "./uri.js";
function yR(e, t) {
    const n = t.length;
    return t.length > e.length ? !1 : ec(e, t, 0, n) === 0;
}
function m5e(e, t, n) {
    return !e || !t || e === t || t.length > e.length ? !1 : (t.charAt(t.length - 1) !== Fn && (t += Fn), n ? yR(e, t) : e.indexOf(t) === 0);
}
var aM, oM, e$, t$, n$;
export { aM, e$, m5e, n$, oM, t$, yR };
var __wakaru_$d_initialized = false;
export function $d() {
if (__wakaru_$d_initialized) return;
__wakaru_$d_initialized = true;
"use strict";
h(), iM(), j(), Ce(), oe(), ye(), Wt(), aM = class fLe extends J {
    constructor(t, n, r, s){
        super(), this.onFileChanges = t, this.onLogMessage = n, this.verboseLogging = r, this.options = s, this.watcherDisposables = this._register(new Ut), this.requests = void 0, this.restartCounter = 0;
    }
    init() {
        const t = new ve;
        this.watcherDisposables.value = t, this.watcher = this.createWatcher(t), this.watcher.setVerboseLogging(this.verboseLogging), t.add(this.watcher.onDidChangeFile((n)=>this.onFileChanges(n))), t.add(this.watcher.onDidLogMessage((n)=>this.onLogMessage(n))), t.add(this.watcher.onDidError((n)=>this.onError(n.error, n.request)));
    }
    onError(t, n) {
        this._store.isDisposed || (this.canRestart(t, n) ? this.restartCounter < fLe.MAX_RESTARTS && this.requests ? (this.error(`restarting watcher after unexpected error: ${t}`), this.restart(this.requests)) : this.error(`gave up attempting to restart watcher after unexpected error: ${t}`) : this.error(t));
    }
    canRestart(t, n) {
        return !(!this.options.restartOnError || n || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
    }
    restart(t) {
        this.restartCounter++, this.init(), this.watch(t);
    }
    async watch(t) {
        this.requests = t, await this.watcher?.watch(t);
    }
    async setVerboseLogging(t) {
        this.verboseLogging = t, await this.watcher?.setVerboseLogging(t);
    }
    error(t) {
        this.onLogMessage({
            type: "error",
            message: `[File Watcher (${this.options.type})] ${t}`
        });
    }
    trace(t) {
        this.onLogMessage({
            type: "trace",
            message: `[File Watcher (${this.options.type})] ${t}`
        });
    }
    dispose() {
        return this.watcher = void 0, super.dispose();
    }
}, aM.MAX_RESTARTS = 5, oM = aM, e$ = class extends oM {
    constructor(e, t, n){
        super(e, t, n, {
            type: "node.js",
            restartOnError: !1
        });
    }
}, t$ = class extends oM {
    constructor(e, t, n){
        super(e, t, n, {
            type: "universal",
            restartOnError: !0
        });
    }
}, n$ = class {
    constructor(){
        this.coalesced = new Set, this.mapPathToChange = new Map;
    }
    toKey(e) {
        return Fe ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
    }
    processEvent(e) {
        const t = this.mapPathToChange.get(this.toKey(e));
        let n = !1;
        if (t) {
            const r = t.type, s = e.type;
            t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? n = !0 : r === 1 && s === 2 ? (this.mapPathToChange.delete(this.toKey(e)), this.coalesced.delete(t)) : r === 2 && s === 1 ? t.type = 0 : r === 1 && s === 0 || (t.type = s);
        } else n = !0;
        n && (this.coalesced.add(e), this.mapPathToChange.set(this.toKey(e), e));
    }
    coalesce() {
        const e = [], t = [];
        return Array.from(this.coalesced).filter((n)=>n.type !== 2 ? (e.push(n), !1) : !0).sort((n, r)=>n.resource.fsPath.length - r.resource.fsPath.length).filter((n)=>t.some((r)=>m5e(n.resource.fsPath, r, !Fe)) ? !1 : (t.push(n.resource.fsPath), !0)).concat(e);
    }
};

}
