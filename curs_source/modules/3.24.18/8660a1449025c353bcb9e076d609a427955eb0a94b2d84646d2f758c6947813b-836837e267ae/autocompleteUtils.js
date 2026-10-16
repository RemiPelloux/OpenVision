import { E } from "./tslib.es6.js";
var xfs, HMe, Afs, BEl, vaf, _af, baf, wPi, Rfs, CPi;
export { Afs, BEl, CPi, HMe, Rfs, _af, baf, vaf, wPi, xfs };
var __wakaru_UEl_initialized = false;
export function UEl() {
if (__wakaru_UEl_initialized) return;
__wakaru_UEl_initialized = true;
"use strict";
E(), xfs = 3, HMe = 3, Afs = 50, BEl = /[A-Za-z_][A-Za-z0-9_-]*/g, vaf = (t)=>/^[a-z]+$/.test(t) === !0, _af = (t)=>/^[A-Z][a-z0-9]*$/.test(t), baf = (t, e, n)=>{
    if (t.length === 0 || _af(n)) return !1;
    const i = n.toLowerCase();
    return i.startsWith(t.toLowerCase()) && i.slice(t.length) === e.toLowerCase();
}, wPi = (t)=>{
    if (t.length === 0) return "";
    let e = 1 / 0;
    for (const i of t)e = Math.min(e, i.length);
    if (e === 0) return "";
    let n = 0;
    for(; n < e;){
        const i = t[0].charAt(n).toLowerCase();
        for(let r = 1; r < t.length; r++)if (t[r].charAt(n).toLowerCase() !== i) return t[0].slice(0, n);
        n++;
    }
    return t[0].slice(0, n);
}, Rfs = (t, e)=>{
    const n = new Map, i = new Set;
    let r;
    for(BEl.lastIndex = 0; (r = BEl.exec(t)) !== null;){
        const s = r[0], o = s.toLowerCase();
        if (vaf(s) === !0 || e && !e(s) || i.has(o)) continue;
        i.add(o);
        const a = o.slice(0, 3);
        if (a.length === 3) {
            const l = n.get(a) ?? [];
            l.length < Afs && l.push(s), n.set(a, l);
        }
    }
    return n;
}, CPi = (t, e)=>{
    const n = [], i = t.toLowerCase(), r = (o)=>o.replace(/^[._-]+/, ""), s = (o, a, l)=>{
        if (!(!o || o.length === 0)) for (const c of o){
            if (!c.toLowerCase().startsWith(a) || c.length - l < HMe) continue;
            const d = c.startsWith(t);
            n.push({
                token: c,
                exactCase: d,
                prefixLenUsed: l
            });
        }
    };
    if (t.length >= xfs) {
        const o = i.slice(0, 3), a = e.get(o);
        if (s(a, i, t.length), n.length === 0) {
            const l = r(i);
            if (l.length >= 3) {
                const c = l.slice(0, 3), u = e.get(c);
                s(u, l, l.length);
            }
        }
    }
    return n;
};

}
