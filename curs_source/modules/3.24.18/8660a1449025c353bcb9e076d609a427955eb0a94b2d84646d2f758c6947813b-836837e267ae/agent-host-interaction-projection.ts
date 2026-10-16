import { E } from "./tslib.es6.js";
var aym;
export { aym };
var __wakaru_jF1_initialized = false;
export function jF1() {
if (__wakaru_jF1_initialized) return;
__wakaru_jF1_initialized = true;
"use strict";
E(), aym = class {
    constructor(){
        this.requested = new Set, this.resolved = new Set, this.pending = new Map, this.active = new Set;
    }
    observeRequest(t) {
        return this.requested.add(t), this.reconcile([
            t
        ]);
    }
    observeResolution(t) {
        return this.resolved.add(t), this.reconcile([
            t
        ]);
    }
    replacePending(t) {
        const e = new Set(this.pending.keys());
        this.pending.clear();
        for (const n of t)this.pending.set(n.interactionId, n), e.add(n.interactionId);
        return this.reconcile(e);
    }
    clearPending() {
        return this.replacePending([]);
    }
    reconcile(t) {
        const e = [];
        for (const n of t){
            const i = this.pending.get(n), r = i !== void 0 && this.requested.has(n) && !this.resolved.has(n);
            r && !this.active.has(n) ? (this.active.add(n), e.push({
                case: "activate",
                interaction: i
            })) : !r && this.active.delete(n) && e.push({
                case: "deactivate",
                interactionId: n
            });
        }
        return e;
    }
};

}
