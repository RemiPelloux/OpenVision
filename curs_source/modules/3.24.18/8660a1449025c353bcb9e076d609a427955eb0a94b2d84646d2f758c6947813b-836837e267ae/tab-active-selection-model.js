import { E } from "./tslib.es6.js";
var Hbp, Wbp, Gbp, qbp;
export { Gbp, Hbp, Wbp, qbp };
var __wakaru_Md1_initialized = false;
export function Md1() {
if (__wakaru_Md1_initialized) return;
__wakaru_Md1_initialized = true;
"use strict";
E(), Hbp = Object.defineProperty, Wbp = (t, e, n)=>e in t ? Hbp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Gbp = (t, e, n)=>Wbp(t, typeof e != "symbol" ? e + "" : e, n), qbp = class {
    constructor(){
        Gbp(this, "scopes", new Map);
    }
    get activeScope() {
        let t;
        for (const e of this.scopes.values())t = e;
        return t;
    }
    set(t, e) {
        this.scopes.delete(t), this.scopes.set(t, {
            tabIds: [
                ...e.tabIds
            ],
            fallbackTabId: e.fallbackTabId,
            isTabEligible: e.isTabEligible
        });
    }
    clear(t) {
        return this.scopes.delete(t);
    }
    isTabEligible(t, e) {
        const n = this.activeScope;
        if (!n || t === n.fallbackTabId) return !0;
        const i = e.find((r)=>r.id === t);
        return i !== void 0 && n.isTabEligible(i);
    }
    isActiveTabEligible(t, e) {
        const n = this.activeScope;
        return n ? t === n.fallbackTabId ? n.fallbackTabId !== null || !e.some((i)=>n.isTabEligible(i)) : t !== null && this.isTabEligible(t, e) : !1;
    }
    resolveActiveTabId(t, e) {
        const n = this.activeScope;
        if (!n) return null;
        const i = new Map(t.map((o)=>[
                o.id,
                o
            ])), r = (o)=>{
            const a = i.get(o);
            return a !== void 0 && n.isTabEligible(a);
        }, s = e?.removedActiveTabId ? n.tabIds.indexOf(e.removedActiveTabId) : -1;
        if (s >= 0) {
            for(let o = s + 1; o < n.tabIds.length; o++){
                const a = n.tabIds[o];
                if (r(a)) return a;
            }
            for(let o = s - 1; o >= 0; o--){
                const a = n.tabIds[o];
                if (r(a)) return a;
            }
        } else for (const o of n.tabIds)if (r(o)) return o;
        return n.fallbackTabId === e?.disallowFallbackTabId ? null : n.fallbackTabId;
    }
};

}
