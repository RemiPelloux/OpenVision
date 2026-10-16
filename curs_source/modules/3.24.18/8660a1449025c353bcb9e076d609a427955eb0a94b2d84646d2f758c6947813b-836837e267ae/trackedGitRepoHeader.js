import { N1, Qe, Vn, da, m4 } from "./Iwo.js";
import { wTt } from "./agentBranchAffinity.js";
import { Mis } from "./conversationSearchProcess.js";
import { wS } from "./displayHelpers.js";
import { ub } from "./localAgentRepository.js";
import { Kf } from "./reactive.js";
import { E } from "./tslib.es6.js";
var Qtg, Jtg, eng, tng;
export { Jtg, Qtg, eng, tng };
var __wakaru_Qpe_initialized = false;
export function Qpe() {
if (__wakaru_Qpe_initialized) return;
__wakaru_Qpe_initialized = true;
"use strict";
E(), Qe(), Mis(), ub(), wS(), wTt(), Kf(), Qtg = new WeakMap, Jtg = new WeakMap, eng = new WeakMap, tng = class {
    constructor(t, e){
        this.trackedGitRepos = t, this.selectRowReactives = e, this.callbacks = new Set, this.subsByRow = m4(new da), this.listSub = m4(new Vn), this.teardownVersion = 0, this.emit = ()=>{
            for (const n of [
                ...this.callbacks
            ])this.callbacks.has(n) && n.callback();
        };
    }
    subscribe(t) {
        const e = {
            callback: t
        };
        return this.callbacks.add(e), this.teardownVersion++, this.ensureAttached(), {
            dispose: ()=>{
                this.callbacks.delete(e) && this.scheduleTeardownIfUnused();
            }
        };
    }
    ensureAttached() {
        this.listSub.value || (this.listSub.value = this.trackedGitRepos.onChange(()=>{
            this.reconcileRows(), this.emit();
        }), this.reconcileRows());
    }
    scheduleTeardownIfUnused() {
        if (this.callbacks.size > 0) return;
        const t = ++this.teardownVersion;
        queueMicrotask(()=>{
            this.callbacks.size > 0 || this.teardownVersion !== t || (this.listSub.clear(), this.subsByRow.clearAndDisposeAll());
        });
    }
    subscribeRow(t) {
        this.subsByRow.set(t, N1(...this.selectRowReactives(t).map((e)=>e.onChange(this.emit))));
    }
    reconcileRows() {
        const t = new Set(this.trackedGitRepos.value);
        if (t.size === this.subsByRow.size) {
            let e = !0;
            for (const n of t)if (!this.subsByRow.has(n)) {
                e = !1;
                break;
            }
            if (e) return;
        }
        for (const e of t)this.subsByRow.has(e) || this.subscribeRow(e);
        for (const e of [
            ...this.subsByRow.keys()
        ])t.has(e) || this.subsByRow.deleteAndDispose(e);
    }
};

}
