import { x } from "./tslib.es6.js";
var h2l, p2l, m2l, B9e, g2l;
export { B9e, g2l, h2l, m2l, p2l };
var __wakaru_f2l_initialized = false;
export function f2l() {
if (__wakaru_f2l_initialized) return;
__wakaru_f2l_initialized = true;
"use strict";
x(), h2l = Object.defineProperty, p2l = (e, t, n)=>t in e ? h2l(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, m2l = (e, t, n)=>p2l(e, typeof t != "symbol" ? t + "" : t, n), B9e = class LAt {
    constructor(t = []){
        m2l(this, "_ranges"), this._ranges = LAt._normalize(t);
    }
    static empty() {
        return g2l;
    }
    get ranges() {
        return this._ranges;
    }
    get isEmpty() {
        return this._ranges.length === 0;
    }
    contains(t) {
        for (const [n, i] of this._ranges){
            if (t < n) return !1;
            if (t <= i) return !0;
        }
        return !1;
    }
    withRange(t) {
        return this.union(new LAt([
            t
        ]));
    }
    union(t) {
        if (t.isEmpty) return this;
        if (this.isEmpty) return t;
        const n = [], i = this._ranges, r = t._ranges;
        let s = 0, o = 0;
        const a = (c)=>{
            const l = n[n.length - 1];
            if (l && c[0] <= l[1] + 1) {
                c[1] > l[1] && (n[n.length - 1] = [
                    l[0],
                    c[1]
                ]);
                return;
            }
            n.push(c);
        };
        for(; s < i.length && o < r.length;)i[s][0] <= r[o][0] ? (a(i[s]), s++) : (a(r[o]), o++);
        for(; s < i.length;)a(i[s++]);
        for(; o < r.length;)a(r[o++]);
        return LAt._fromSortedDisjoint(n);
    }
    keepConnectedTo(t) {
        if (this.isEmpty || t.isEmpty) return LAt.empty();
        const n = [], i = this._ranges, r = t._ranges;
        let s = 0;
        for (const [o, a] of i){
            for(; s < r.length && r[s][1] + 1 < o;)s++;
            const c = r[s];
            c && c[0] <= a + 1 && n.push([
                o,
                a
            ]);
        }
        return LAt._fromSortedDisjoint(n);
    }
    equals(t) {
        if (this === t) return !0;
        if (this._ranges.length !== t._ranges.length) return !1;
        for(let n = 0; n < this._ranges.length; n++)if (this._ranges[n][0] !== t._ranges[n][0] || this._ranges[n][1] !== t._ranges[n][1]) return !1;
        return !0;
    }
    toArray() {
        return this._ranges.map(([t, n])=>[
                t,
                n
            ]);
    }
    static _fromSortedDisjoint(t) {
        const n = new LAt;
        return n._ranges = t, n;
    }
    static _normalize(t) {
        const n = [];
        for (const r of t){
            const s = r[0], o = r[1];
            if (!Number.isFinite(s) || !Number.isFinite(o)) continue;
            const a = Math.min(s, o), c = Math.max(s, o);
            n.push([
                a,
                c
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
}, g2l = new B9e;

}
