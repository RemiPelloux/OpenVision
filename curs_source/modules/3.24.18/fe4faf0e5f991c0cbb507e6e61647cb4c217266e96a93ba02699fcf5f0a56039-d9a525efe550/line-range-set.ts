import { i } from "./plugin-brand-icon.js";
var iGt, A$, RAr;
export { A$, RAr, iGt };
var __wakaru_PAr_initialized = false;
export function PAr() {
if (__wakaru_PAr_initialized) return;
__wakaru_PAr_initialized = true;
"use strict";
iGt = class rU {
    constructor(e = []){
        this._ranges = rU._normalize(e);
    }
    static empty() {
        return RAr;
    }
    get ranges() {
        return this._ranges;
    }
    get isEmpty() {
        return this._ranges.length === 0;
    }
    contains(e) {
        for (const [a, s] of this._ranges){
            if (e < a) return !1;
            if (e <= s) return !0;
        }
        return !1;
    }
    withRange(e) {
        return this.union(new rU([
            e
        ]));
    }
    union(e) {
        if (e.isEmpty) return this;
        if (this.isEmpty) return e;
        const a = [], s = this._ranges, l = e._ranges;
        let u = 0, p = 0;
        const m = i((b)=>{
            const g = a[a.length - 1];
            if (g && b[0] <= g[1] + 1) {
                b[1] > g[1] && (a[a.length - 1] = [
                    g[0],
                    b[1]
                ]);
                return;
            }
            a.push(b);
        }, "pushOrExtend");
        for(; u < s.length && p < l.length;)s[u][0] <= l[p][0] ? (m(s[u]), u++) : (m(l[p]), p++);
        for(; u < s.length;)m(s[u++]);
        for(; p < l.length;)m(l[p++]);
        return rU._fromSortedDisjoint(a);
    }
    keepConnectedTo(e) {
        if (this.isEmpty || e.isEmpty) return rU.empty();
        const a = [], s = this._ranges, l = e._ranges;
        let u = 0;
        for (const [p, m] of s){
            for(; u < l.length && l[u][1] + 1 < p;)u++;
            const b = l[u];
            b && b[0] <= m + 1 && a.push([
                p,
                m
            ]);
        }
        return rU._fromSortedDisjoint(a);
    }
    equals(e) {
        if (this === e) return !0;
        if (this._ranges.length !== e._ranges.length) return !1;
        for(let a = 0; a < this._ranges.length; a++)if (this._ranges[a][0] !== e._ranges[a][0] || this._ranges[a][1] !== e._ranges[a][1]) return !1;
        return !0;
    }
    toArray() {
        return this._ranges.map(([e, a])=>[
                e,
                a
            ]);
    }
    static _fromSortedDisjoint(e) {
        const a = new rU;
        return a._ranges = e, a;
    }
    static _normalize(e) {
        const a = [];
        for (const l of e){
            const u = l[0], p = l[1];
            if (!Number.isFinite(u) || !Number.isFinite(p)) continue;
            const m = Math.min(u, p), b = Math.max(u, p);
            a.push([
                m,
                b
            ]);
        }
        if (a.length === 0) return [];
        a.sort((l, u)=>l[0] - u[0] || l[1] - u[1]);
        const s = [];
        for (const [l, u] of a){
            const p = s[s.length - 1];
            p && l <= p[1] + 1 ? u > p[1] && (s[s.length - 1] = [
                p[0],
                u
            ]) : s.push([
                l,
                u
            ]);
        }
        return s;
    }
}, i(iGt, "LineRangeSet"), A$ = iGt, RAr = new A$;

}
