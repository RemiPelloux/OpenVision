import { Se, bt, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var uCt, wbh;
export { uCt, wbh };
var __wakaru_zVt_initialized = false;
export function zVt() {
if (__wakaru_zVt_initialized) return;
__wakaru_zVt_initialized = true;
"use strict";
x(), Se(), Ze(), Pn(), bt(), uCt = vn("pendingApprovalRegistry"), wbh = class extends we {
    constructor(){
        super(), this._pendingWaiters = new Map, this._createdBubbles = new Map, this._createdBubbleOwners = new Map, this._onBubbleCreated = this._register(new ve), this.onBubbleCreated = this._onBubbleCreated.event;
    }
    hasCreatedBubble(e) {
        return this._createdBubbleOwners.get(e.toolCallId)?.has(e.composerId) === !0;
    }
    async waitForBubbleCreation(e, t, n = 5e3) {
        const i = e, r = t;
        if (!this._createdBubbleOwners.has(r)) return new Promise((s, o)=>{
            const a = setTimeout(()=>{
                this.removeWaiter(i, r, c), o(new Error(`Timeout waiting for bubble creation: composerId=${e}, toolCallId=${t}`));
            }, n), c = {
                resolve: ()=>{
                    clearTimeout(a), s();
                },
                reject: (l)=>{
                    clearTimeout(a), o(l);
                },
                timeoutId: a
            };
            this.addWaiter(i, r, c);
        });
    }
    signalBubbleCreated(e, t) {
        const n = e, i = t;
        let r = this._createdBubbles.get(n);
        r || (r = new Set, this._createdBubbles.set(n, r)), r.add(i);
        let s = this._createdBubbleOwners.get(i);
        s || (s = new Set, this._createdBubbleOwners.set(i, s)), s.add(n);
        for (const [o, a] of this._pendingWaiters){
            const c = a.get(i);
            if (c) {
                for (const l of c)l.resolve();
                a.delete(i), a.size === 0 && this._pendingWaiters.delete(o);
            }
        }
        this._onBubbleCreated.fire({
            composerId: e,
            toolCallId: t
        });
    }
    cleanupComposer(e) {
        const t = e, n = this._pendingWaiters.get(t);
        if (n) {
            for (const [r, s] of n)for (const o of s)clearTimeout(o.timeoutId), o.reject(new Error("Composer disposed"));
            this._pendingWaiters.delete(t);
        }
        const i = this._createdBubbles.get(t);
        if (i) {
            for (const r of i){
                const s = this._createdBubbleOwners.get(r);
                s && (s.delete(t), s.size === 0 && this._createdBubbleOwners.delete(r));
            }
            this._createdBubbles.delete(t);
        }
    }
    addWaiter(e, t, n) {
        let i = this._pendingWaiters.get(e);
        i || (i = new Map, this._pendingWaiters.set(e, i));
        let r = i.get(t);
        r || (r = new Set, i.set(t, r)), r.add(n);
    }
    removeWaiter(e, t, n) {
        const i = this._pendingWaiters.get(e);
        if (i) {
            const r = i.get(t);
            r && (r.delete(n), r.size === 0 && i.delete(t)), i.size === 0 && this._pendingWaiters.delete(e);
        }
    }
    dispose() {
        for (const [e, t] of this._pendingWaiters)this.cleanupComposer(e);
        this._createdBubbles.clear(), this._createdBubbleOwners.clear(), super.dispose();
    }
}, mn(uCt, wbh, 1);

}
