import { E } from "./tslib.es6.js";
var Gnp, qnp, afi, Kka;
export { Gnp, Kka, afi, qnp };
var __wakaru_znp_initialized = false;
export function znp() {
if (__wakaru_znp_initialized) return;
__wakaru_znp_initialized = true;
"use strict";
E(), Gnp = Object.defineProperty, qnp = (t, e, n)=>e in t ? Gnp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, afi = (t, e, n)=>qnp(t, typeof e != "symbol" ? e + "" : e, n), Kka = class {
    constructor(){
        afi(this, "_selected", new Set), afi(this, "_anchor", null), afi(this, "_listeners", new Set), afi(this, "_version", 0);
    }
    get selectedPaths() {
        return this._selected;
    }
    get version() {
        return this._version;
    }
    subscribe(t) {
        return this._listeners.add(t), ()=>{
            this._listeners.delete(t);
        };
    }
    toggle(t) {
        this._selected.has(t) ? this._selected.delete(t) : (this._selected.add(t), this._anchor = t), this._notify();
    }
    rangeTo(t, e) {
        if (!this._anchor) {
            this.select(t);
            return;
        }
        const n = new Map;
        for(let d = 0; d < e.length; d++)n.set(e[d], d);
        const i = n.get(this._anchor) ?? -1, r = n.get(t) ?? -1;
        if (i < 0 || r < 0) {
            this.select(t);
            return;
        }
        const s = new Set(this._selected);
        s.add(this._anchor);
        let o = i;
        for(; o > 0 && s.has(e[o - 1]);)o--;
        let a = i;
        for(; a + 1 < e.length && s.has(e[a + 1]);)a++;
        const l = Math.min(i, r), c = Math.max(i, r), u = new Set;
        for (const d of this._selected){
            const h = n.get(d);
            (h === void 0 || h < o || h > a) && u.add(d);
        }
        for(let d = l; d <= c; d++)u.add(e[d]);
        this._selected = u, this._notify();
    }
    selectAll(t) {
        this._selected.clear();
        for (const e of t)this._selected.add(e);
        this._anchor = t[0] ?? null, this._notify();
    }
    select(t) {
        if (this._selected.size === 1 && this._selected.has(t)) {
            this._anchor = t;
            return;
        }
        this._selected.clear(), this._selected.add(t), this._anchor = t, this._notify();
    }
    clear() {
        const t = this._selected.size > 0;
        this._selected.clear(), this._anchor = null, t && this._notify();
    }
    setAnchor(t) {
        this._anchor = t;
    }
    setSelection(t) {
        this._selected = new Set(t), this._notify();
    }
    pruneToValid(t) {
        const e = [];
        for (const n of this._selected)t.has(n) || e.push(n);
        if (this._anchor && !t.has(this._anchor) && (this._anchor = null), e.length > 0) {
            for (const n of e)this._selected.delete(n);
            this._notify();
        }
    }
    _notify() {
        this._version++;
        for (const t of this._listeners)t();
    }
};

}
