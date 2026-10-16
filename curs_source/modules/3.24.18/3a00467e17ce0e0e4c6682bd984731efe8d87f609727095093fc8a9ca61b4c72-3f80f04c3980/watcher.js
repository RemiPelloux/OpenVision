import { q2 } from "./files.js";
import { M2 } from "./glob.js";
import { Fr, Re, _e, et } from "./lifecycle.js";
import { ie, le } from "./path.js";
import { X, we } from "./platform.js";
import { Ge } from "./ternarySearchTree.js";
import { w } from "./tslib.es6.js";
import { Ye } from "./uri.js";
function Sa(e, t) {
    const r = t.length;
    return t.length > e.length ? !1 : Ge(e, t, 0, r) === 0;
}
function W2(e, t, r) {
    return !e || !t || e === t || t.length > e.length ? !1 : (t.charAt(t.length - 1) !== ie && (t += ie), r ? Sa(e, t) : e.indexOf(t) === 0);
}
var Pn, Dn;
export { Dn, Pn, Sa, W2 };
var __wakaru_H2_initialized = false;
export function H2() {
if (__wakaru_H2_initialized) return;
__wakaru_H2_initialized = true;
"use strict";
w(), M2(), et(), le(), X(), Ye(), q2(), Pn = class Ao extends _e {
    constructor(t, r, s, i){
        super(), this.onFileChanges = t, this.onLogMessage = r, this.verboseLogging = s, this.options = i, this.watcherDisposables = this._register(new Fr), this.requests = void 0, this.restartCounter = 0;
    }
    init() {
        const t = new Re;
        this.watcherDisposables.value = t, this.watcher = this.createWatcher(t), this.watcher.setVerboseLogging(this.verboseLogging), t.add(this.watcher.onDidChangeFile((r)=>this.onFileChanges(r))), t.add(this.watcher.onDidLogMessage((r)=>this.onLogMessage(r))), t.add(this.watcher.onDidError((r)=>this.onError(r.error, r.request)));
    }
    onError(t, r) {
        this._store.isDisposed || (this.canRestart(t, r) ? this.restartCounter < Ao.MAX_RESTARTS && this.requests ? (this.error(`restarting watcher after unexpected error: ${t}`), this.restart(this.requests)) : this.error(`gave up attempting to restart watcher after unexpected error: ${t}`) : this.error(t));
    }
    canRestart(t, r) {
        return !(!this.options.restartOnError || r || t.indexOf("No space left on device") !== -1 || t.indexOf("EMFILE") !== -1);
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
}, Pn.MAX_RESTARTS = 5, Dn = class {
    constructor(){
        this.coalesced = new Set, this.mapPathToChange = new Map;
    }
    toKey(e) {
        return we ? e.resource.fsPath : e.resource.fsPath.toLowerCase();
    }
    processEvent(e) {
        const t = this.mapPathToChange.get(this.toKey(e));
        let r = !1;
        if (t) {
            const s = t.type, i = e.type;
            t.resource.fsPath !== e.resource.fsPath && (e.type === 2 || e.type === 1) ? r = !0 : s === 1 && i === 2 ? (this.mapPathToChange.delete(this.toKey(e)), this.coalesced.delete(t)) : s === 2 && i === 1 ? t.type = 0 : s === 1 && i === 0 || (t.type = i);
        } else r = !0;
        r && (this.coalesced.add(e), this.mapPathToChange.set(this.toKey(e), e));
    }
    coalesce() {
        const e = [], t = [];
        return Array.from(this.coalesced).filter((r)=>r.type !== 2 ? (e.push(r), !1) : !0).sort((r, s)=>r.resource.fsPath.length - s.resource.fsPath.length).filter((r)=>t.some((s)=>W2(r.resource.fsPath, s, !we)) ? !1 : (t.push(r.resource.fsPath), !0)).concat(e);
    }
};

}
