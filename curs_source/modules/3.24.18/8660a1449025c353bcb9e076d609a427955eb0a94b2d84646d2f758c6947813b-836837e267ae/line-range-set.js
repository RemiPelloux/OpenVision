import { E } from "./tslib.es6.js";
var zOh, VOh, KOh, PFe, YOh;
export { KOh, PFe, VOh, YOh, zOh };
var __wakaru_GLr_initialized = false;
export function GLr() {
if (__wakaru_GLr_initialized) return;
__wakaru_GLr_initialized = true;
"use strict";
E(), zOh = Object.defineProperty, VOh = (t, e, n)=>e in t ? zOh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, KOh = (t, e, n)=>VOh(t, typeof e != "symbol" ? e + "" : e, n), PFe = class Bsn {
    constructor(e = []){
        KOh(this, "_ranges"), this._ranges = Bsn._normalize(e);
    }
    static empty() {
        return YOh;
    }
    get ranges() {
        return this._ranges;
    }
    get isEmpty() {
        return this._ranges.length === 0;
    }
    contains(e) {
        for (const [n, i] of this._ranges){
            if (e < n) return !1;
            if (e <= i) return !0;
        }
        return !1;
    }
    withRange(e) {
        return this.union(new Bsn([
            e
        ]));
    }
    union(e) {
        if (e.isEmpty) return this;
        if (this.isEmpty) return e;
        const n = [], i = this._ranges, r = e._ranges;
        let s = 0, o = 0;
        const a = (l)=>{
            const c = n[n.length - 1];
            if (c && l[0] <= c[1] + 1) {
                l[1] > c[1] && (n[n.length - 1] = [
                    c[0],
                    l[1]
                ]);
                return;
            }
            n.push(l);
        };
        for(; s < i.length && o < r.length;)i[s][0] <= r[o][0] ? (a(i[s]), s++) : (a(r[o]), o++);
        for(; s < i.length;)a(i[s++]);
        for(; o < r.length;)a(r[o++]);
        return Bsn._fromSortedDisjoint(n);
    }
    keepConnectedTo(e) {
        if (this.isEmpty || e.isEmpty) return Bsn.empty();
        const n = [], i = this._ranges, r = e._ranges;
        let s = 0;
        for (const [o, a] of i){
            for(; s < r.length && r[s][1] + 1 < o;)s++;
            const l = r[s];
            l && l[0] <= a + 1 && n.push([
                o,
                a
            ]);
        }
        return Bsn._fromSortedDisjoint(n);
    }
    equals(e) {
        if (this === e) return !0;
        if (this._ranges.length !== e._ranges.length) return !1;
        for(let n = 0; n < this._ranges.length; n++)if (this._ranges[n][0] !== e._ranges[n][0] || this._ranges[n][1] !== e._ranges[n][1]) return !1;
        return !0;
    }
    toArray() {
        return this._ranges.map(([e, n])=>[
                e,
                n
            ]);
    }
    static _fromSortedDisjoint(e) {
        const n = new Bsn;
        return n._ranges = e, n;
    }
    static _normalize(e) {
        const n = [];
        for (const r of e){
            const s = r[0], o = r[1];
            if (!Number.isFinite(s) || !Number.isFinite(o)) continue;
            const a = Math.min(s, o), l = Math.max(s, o);
            n.push([
                a,
                l
            ]);
        }
        if (n.length === 0) return [];
        n.sort((r, s)=>r[0] - s[0] || r[1] - s[1]);
        const i = [];
        for (const [r, s] of n){
            const o = i[i.length - 1];
            o && r <= o[1] + 1 ? s > o[1] && (i[i.length - 1] = [
                o[0],
                s
            ]) : i.push([
                r,
                s
            ]);
        }
        return i;
    }
}, YOh = new PFe;

}
