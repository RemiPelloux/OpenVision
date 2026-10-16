import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var G4e, Urg;
export { G4e, Urg };
var __wakaru_Nze_initialized = false;
export function Nze() {
if (__wakaru_Nze_initialized) return;
__wakaru_Nze_initialized = true;
"use strict";
E(), Qe(), It(), Rn(), Gt(), G4e = jn("pendingApprovalRegistry"), Urg = class extends st {
    constructor(){
        super(), this._pendingWaiters = new Map, this._createdBubbles = new Map, this._createdBubbleOwners = new Map, this._onBubbleCreated = this._register(new tt), this.onBubbleCreated = this._onBubbleCreated.event;
    }
    hasCreatedBubble(t) {
        return this._createdBubbleOwners.get(t.toolCallId)?.has(t.composerId) === !0;
    }
    async waitForBubbleCreation(t, e, n = 5e3) {
        const i = t, r = e;
        if (!this._createdBubbleOwners.has(r)) return new Promise((s, o)=>{
            const a = setTimeout(()=>{
                this.removeWaiter(i, r, l), o(new Error(`Timeout waiting for bubble creation: composerId=${t}, toolCallId=${e}`));
            }, n), l = {
                resolve: ()=>{
                    clearTimeout(a), s();
                },
                reject: (c)=>{
                    clearTimeout(a), o(c);
                },
                timeoutId: a
            };
            this.addWaiter(i, r, l);
        });
    }
    signalBubbleCreated(t, e) {
        const n = t, i = e;
        let r = this._createdBubbles.get(n);
        r || (r = new Set, this._createdBubbles.set(n, r)), r.add(i);
        let s = this._createdBubbleOwners.get(i);
        s || (s = new Set, this._createdBubbleOwners.set(i, s)), s.add(n);
        for (const [o, a] of this._pendingWaiters){
            const l = a.get(i);
            if (l) {
                for (const c of l)c.resolve();
                a.delete(i), a.size === 0 && this._pendingWaiters.delete(o);
            }
        }
        this._onBubbleCreated.fire({
            composerId: t,
            toolCallId: e
        });
    }
    cleanupComposer(t) {
        const e = t, n = this._pendingWaiters.get(e);
        if (n) {
            for (const [r, s] of n)for (const o of s)clearTimeout(o.timeoutId), o.reject(new Error("Composer disposed"));
            this._pendingWaiters.delete(e);
        }
        const i = this._createdBubbles.get(e);
        if (i) {
            for (const r of i){
                const s = this._createdBubbleOwners.get(r);
                s && (s.delete(e), s.size === 0 && this._createdBubbleOwners.delete(r));
            }
            this._createdBubbles.delete(e);
        }
    }
    addWaiter(t, e, n) {
        let i = this._pendingWaiters.get(t);
        i || (i = new Map, this._pendingWaiters.set(t, i));
        let r = i.get(e);
        r || (r = new Set, i.set(e, r)), r.add(n);
    }
    removeWaiter(t, e, n) {
        const i = this._pendingWaiters.get(t);
        if (i) {
            const r = i.get(e);
            r && (r.delete(n), r.size === 0 && i.delete(e)), i.size === 0 && this._pendingWaiters.delete(t);
        }
    }
    dispose() {
        for (const [t, e] of this._pendingWaiters)this.cleanupComposer(t);
        this._createdBubbles.clear(), this._createdBubbleOwners.clear(), super.dispose();
    }
}, bn(G4e, Urg, 1);

}
