import { E } from "./tslib.es6.js";
var Ubp, jbp, $bp, Yvi;
export { $bp, Ubp, Yvi, jbp };
var __wakaru_Rxa_initialized = false;
export function Rxa() {
if (__wakaru_Rxa_initialized) return;
__wakaru_Rxa_initialized = true;
"use strict";
E(), Ubp = Object.defineProperty, jbp = (t, e, n)=>e in t ? Ubp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, $bp = (t, e, n)=>jbp(t, typeof e != "symbol" ? e + "" : e, n), Yvi = class {
    constructor(){
        $bp(this, "_previousTabIds", new Set);
    }
    record(t) {
        const { previousTabId: e, nextTabId: n } = t;
        e !== null && (this._previousTabIds.delete(e), this._previousTabIds.add(e)), n !== null && this._previousTabIds.delete(n);
    }
    findPreviousTab(t, e, n) {
        const i = new Map(t.map((s)=>[
                s.id,
                s
            ]));
        for (const s of e)s.registered && i.set(s.id, s);
        let r;
        for (const s of this._previousTabIds){
            if (n.excludedTabIds.has(s)) continue;
            const o = i.get(s);
            o && n.isTabEligible(o) && (r = s);
        }
        return r;
    }
    delete(t) {
        this._previousTabIds.delete(t);
    }
};

}
