import { Se, U_, cn, po, u3 } from "./HVr.js";
import { DFn } from "./agentBranchAffinity.js";
import { mXi } from "./conversationSearchProcess.js";
import { Q3 } from "./displayHelpers.js";
import { B0 } from "./localAgentRepository.js";
import { N1 } from "./reactive.js";
import { x } from "./tslib.es6.js";
var Lfh, Nfh;
export { Lfh, Nfh };
var __wakaru_gXi_initialized = false;
export function gXi() {
if (__wakaru_gXi_initialized) return;
__wakaru_gXi_initialized = true;
"use strict";
x(), Se(), mXi(), B0(), Q3(), DFn(), N1(), Lfh = new WeakMap, Nfh = class {
    constructor(e, t){
        this.trackedGitRepos = e, this.selectRowReactives = t, this.callbacks = new Set, this.subsByRow = u3(new po), this.listSub = u3(new cn), this.teardownVersion = 0, this.emit = ()=>{
            for (const n of [
                ...this.callbacks
            ])this.callbacks.has(n) && n.callback();
        };
    }
    subscribe(e) {
        const t = {
            callback: e
        };
        return this.callbacks.add(t), this.teardownVersion++, this.ensureAttached(), {
            dispose: ()=>{
                this.callbacks.delete(t) && this.scheduleTeardownIfUnused();
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
        const e = ++this.teardownVersion;
        queueMicrotask(()=>{
            this.callbacks.size > 0 || this.teardownVersion !== e || (this.listSub.clear(), this.subsByRow.clearAndDisposeAll());
        });
    }
    subscribeRow(e) {
        this.subsByRow.set(e, U_(...this.selectRowReactives(e).map((t)=>t.onChange(this.emit))));
    }
    reconcileRows() {
        const e = new Set(this.trackedGitRepos.value);
        if (e.size === this.subsByRow.size) {
            let t = !0;
            for (const n of e)if (!this.subsByRow.has(n)) {
                t = !1;
                break;
            }
            if (t) return;
        }
        for (const t of e)this.subsByRow.has(t) || this.subscribeRow(t);
        for (const t of [
            ...this.subsByRow.keys()
        ])e.has(t) || this.subsByRow.deleteAndDispose(t);
    }
};

}
