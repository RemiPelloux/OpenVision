import { Icv } from "./Asv.js";
import { Ac } from "./Ycg.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { Hn, ws } from "./dom_2.js";
import { MTe, bXt } from "./keepAliveLayoutMeasure.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { LL } from "./use-disposable-effect.react.js";
import { In } from "./use-service.react_2.js";
import { c as Pql } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useDeferredValue as Tcv } from "./react-runtime/react/esm-index-production.js";
import { memo as gt0 } from "./react-runtime/react/esm-index-production.js";
import { createContext as mt0 } from "./react-runtime/react/esm-index-production.js";
var xcv, Acv, Rcv, Dql, Pcv, Mcv;
export { Acv, Dql, Mcv, Pcv, Rcv, xcv };
var __wakaru_Dcv_initialized = false;
export function Dcv() {
if (__wakaru_Dcv_initialized) return;
__wakaru_Dcv_initialized = true;
"use strict";
E(), $b(), Hn(), MTe(), wl(), LL(), In(), xcv = 3, Acv = {
    contents: {
        k1xSpc: "glass-jp7ctv",
        $$css: !0
    }
}, Rcv = class {
    constructor(t){
        this.capacity = t, this.entries = new Map, this.listeners = new Set, this.snapshot = [], this.contentClickCapture = ()=>{}, this.onContentClickCapture = ()=>this.contentClickCapture(), this.subscribe = (e)=>(this.listeners.add(e), ()=>this.listeners.delete(e)), this.getSnapshot = ()=>this.snapshot, this.dropArchived = (e)=>{
            let n = !1;
            for (const [i, r] of this.entries)r.ownerIds.includes(e) && (r.slot === void 0 ? (this.entries.delete(i), n = !0) : r.archivedOwners.add(e));
            n && this.publish();
        }, this.restoreUnarchived = (e)=>{
            for (const n of this.entries.values())n.archivedOwners.delete(e);
        }, this.dropClosed = ()=>{
            let e = !1;
            for (const [n, i] of this.entries)i.slot === void 0 && !i.isOpen() && (this.entries.delete(n), e = !0);
            e && this.publish();
        };
    }
    setContentClickCapture(t) {
        this.contentClickCapture = t;
    }
    attach(t, e, { isOpen: n, ownerIds: i, render: r }) {
        let s = this.entries.get(t);
        const o = s !== void 0;
        if (s === void 0) {
            const a = e.ownerDocument.createElement("div");
            a.className = Ac(Acv.contents).className ?? "", a.addEventListener("click", this.onContentClickCapture, {
                capture: !0
            }), s = {
                key: t,
                ownerIds: i,
                container: a,
                render: r,
                isOpen: n,
                archivedOwners: new Set,
                slot: void 0
            };
        }
        this.entries.delete(t), this.entries.set(t, s), s.render = r, s.isOpen = n, Icv(s, i), s.slot = e, o ? this.showAfterNextPaint(s, e) : this.show(s, e), this.evictDetached(), this.publish();
    }
    showAfterNextPaint(t, e) {
        const n = ws(e);
        n.requestAnimationFrame(()=>{
            n.setTimeout(()=>{
                t.slot === e && this.entries.get(t.key) === t && this.show(t, e);
            }, 0);
        });
    }
    show(t, e) {
        t.container.removeAttribute(bXt), e.appendChild(t.container);
    }
    update(t, { isOpen: e, ownerIds: n, render: i }) {
        const r = this.entries.get(t);
        r !== void 0 && (r.isOpen = e, Icv(r, n), r.render !== i && (r.render = i, this.publish()));
    }
    detach(t, e) {
        const n = this.entries.get(t);
        n?.slot === e && (n.slot = void 0, n.container.remove(), n.container.setAttribute(bXt, ""), (n.archivedOwners.size > 0 || !n.isOpen()) && this.entries.delete(t), this.evictDetached(), this.publish());
    }
    evictDetached() {
        for (const [t, e] of this.entries){
            if (this.entries.size <= this.capacity) return;
            e.slot === void 0 && this.entries.delete(t);
        }
    }
    publish() {
        this.snapshot = [
            ...this.entries.values()
        ].map(({ key: t, container: e, render: n, slot: i })=>({
                key: t,
                container: e,
                render: n,
                attached: i !== void 0
            }));
        for (const t of this.listeners)t();
    }
}, Dql = mt0(null), Pcv = Dql.Provider, Mcv = gt0(function(e) {
    const n = Pql(3), { attached: i, render: r } = e, s = Tcv(i), o = Tcv(r);
    let a;
    return n[0] !== s || n[1] !== o ? (a = o(s), n[0] = s, n[1] = o, n[2] = a) : a = n[2], a;
});

}
