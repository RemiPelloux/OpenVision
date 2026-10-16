import { Ess, Klg, Tss, Xlg, Ylg, Zlg, evk, nvk, tvk, wal } from "./Sol.js";
import { E } from "./tslib.es6.js";
var Qlg, Jlg, ecg, tcg, ncg, icg, rcg, Iss, scg, ocg, acg, lcg, ccg, ucg, dcg, hcg, pcg, mcg, gcg, fcg, vcg;
export { Iss, Jlg, Qlg, acg, ccg, dcg, ecg, fcg, gcg, hcg, icg, lcg, mcg, ncg, ocg, pcg, rcg, scg, tcg, ucg, vcg };
var __wakaru_rvk_initialized = false;
export function rvk() {
if (__wakaru_rvk_initialized) return;
__wakaru_rvk_initialized = true;
E(), Qlg = (t, e, n, ...i)=>n.read(...i), Jlg = (t, e, n, ...i)=>n.write(...i), ecg = (t, e, n)=>n.INTERNAL_onInit(e), tcg = (t, e, n, i)=>{
    var r;
    return (r = n.onMount) == null ? void 0 : r.call(n, i);
}, ncg = (t, e, n)=>{
    var i;
    const r = t[0];
    let s = r.get(n);
    if (!s) {
        const o = t[6], a = t[9];
        s = {
            d: new Map,
            p: new Set,
            n: 0
        }, r.set(n, s), (i = o.i) == null || i.call(o, n), nvk(n) && a(t, e, n);
    }
    return s;
}, icg = (t, e)=>{
    var n;
    const i = t[1], r = t[3], s = t[4], o = t[5], a = t[6], l = t[13];
    if (!a.f && !r.size && !s.size && !o.size) return;
    const c = [], u = (d)=>{
        try {
            d();
        } catch (h) {
            c.push(h);
        }
    };
    do {
        a.f && u(a.f);
        const d = new Set;
        for (const h of r){
            const p = (n = i.get(h)) == null ? void 0 : n.l;
            if (p) for (const g of p)d.add(g);
        }
        r.clear();
        for (const h of o)d.add(h);
        o.clear();
        for (const h of s)d.add(h);
        s.clear();
        for (const h of d)u(h);
        r.size && l(t, e);
    }while (r.size || o.size || s.size)
    if (c.length) throw new AggregateError(c);
}, rcg = (t, e)=>{
    const n = t[1], i = t[2], r = t[3], s = t[11], o = t[14], a = t[17];
    if (!r.size) return;
    const l = [], c = [], u = new WeakSet, d = new WeakSet, h = [], p = [];
    for (const g of r)h.push(g), p.push(s(t, e, g));
    for(; h.length;){
        const g = h.length - 1, f = h[g], _ = p[g];
        if (d.has(f)) {
            h.pop(), p.pop();
            continue;
        }
        if (u.has(f)) {
            if (i.get(f) === _.n) l.push(f), c.push(_);
            else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && i.has(f)) throw new Error("[Bug] invalidated atom exists");
            d.add(f), h.pop(), p.pop();
            continue;
        }
        u.add(f);
        for (const b of Zlg(f, _, n))u.has(b) || (h.push(b), p.push(s(t, e, b)));
    }
    for(let g = l.length - 1; g >= 0; --g){
        const f = l[g], _ = c[g];
        let b = !1;
        for (const y of _.d.keys())if (y !== f && r.has(y)) {
            b = !0;
            break;
        }
        b && (i.set(f, _.n), o(t, e, f), a(t, e, f)), i.delete(f);
    }
}, Iss = new WeakSet, scg = (t, e, n)=>{
    var i, r;
    const s = t[1], o = t[2], a = t[3], l = t[6], c = t[7], u = t[11], d = t[12], h = t[13], p = t[14], g = t[16], f = t[17], _ = t[20], b = t[26], y = t[28], S = u(t, e, n), k = y[0];
    if (Ylg(S)) {
        if (s.has(n) && o.get(n) !== S.n || S.m === k) return S.m = k, S;
        let $ = !1;
        for (const [H, G] of S.d)if (p(t, e, H).n !== G) {
            $ = !0;
            break;
        }
        if (!$) return S.m = k, S;
    }
    let C = !0;
    const T = new Set(S.d.keys()), I = ()=>{
        for (const $ of T)S.d.delete($);
    }, A = ()=>{
        if (s.has(n)) {
            const $ = !a.size;
            f(t, e, n), $ && (h(t, e), d(t, e));
        }
    }, P = ($)=>{
        var H;
        if ($ === n) {
            const q = u(t, e, $);
            if (!Ylg(q)) if (Klg($)) _(t, e, $, $.init);
            else throw new Error("no atom init");
            return Tss(q);
        }
        const G = p(t, e, $);
        try {
            return Tss(G);
        } finally{
            T.delete($), S.d.set($, G.n), Ess(S.v) && Xlg(n, S.v, G), s.has(n) && ((H = s.get($)) == null || H.t.add(n)), C || A();
        }
    };
    let M, O;
    const N = {
        get signal () {
            return M || (M = new AbortController), M.signal;
        },
        get setSelf () {
            return (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !wal(n) && console.warn("setSelf function cannot be used with read-only atom"), !O && wal(n) && (O = (...$)=>{
                if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && C && console.warn("setSelf function cannot be called in sync"), !C) try {
                    return g(t, e, n, $);
                } finally{
                    h(t, e), d(t, e);
                }
            }), O;
        }
    }, U = S.n, j = o.get(n) === U;
    try {
        (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && Iss.delete(e);
        const $ = c(t, e, n, P, N);
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && Iss.has(e) && console.warn("Detected store mutation during atom read. This is not supported."), _(t, e, n, $), Ess($)) {
            b(t, e, $, ()=>M?.abort());
            const H = ()=>{
                I(), A();
            };
            $.then(H, H);
        } else I();
        return (i = l.r) == null || i.call(l, n), S.m = k, S;
    } catch ($) {
        if (tvk($)) throw $;
        return delete S.v, S.e = $, ++S.n, S.m = k, S;
    } finally{
        C = !1, S.n !== U && j && (o.set(n, S.n), a.add(n), (r = l.c) == null || r.call(l, n));
    }
}, ocg = (t, e, n)=>{
    const i = t[1], r = t[2], s = t[11], o = [
        n
    ];
    for(; o.length;){
        const a = o.pop(), l = s(t, e, a);
        for (const c of Zlg(a, l, i)){
            const u = s(t, e, c);
            r.get(c) !== u.n && (r.set(c, u.n), o.push(c));
        }
    }
}, acg = (t, e, n, i)=>{
    const r = t[3], s = t[6], o = t[8], a = t[11], l = t[12], c = t[13], u = t[14], d = t[15], h = t[16], p = t[17], g = t[20], f = t[28];
    let _ = !0;
    const b = (S)=>Tss(u(t, e, S)), y = (S, ...k)=>{
        var C;
        const T = a(t, e, S);
        try {
            if (S === n) {
                if (!Klg(S)) throw new Error("atom not writable");
                (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && Iss.add(e);
                const I = T.n, A = k[0];
                g(t, e, S, A), p(t, e, S), I !== T.n && (++f[0], r.add(S), d(t, e, S), (C = s.c) == null || C.call(s, S));
                return;
            } else return h(t, e, S, k);
        } finally{
            _ || (c(t, e), l(t, e));
        }
    };
    try {
        return o(t, e, n, b, y, ...i);
    } finally{
        _ = !1;
    }
}, lcg = (t, e, n)=>{
    var i;
    const r = t[1], s = t[3], o = t[6], a = t[11], l = t[15], c = t[18], u = t[19], d = a(t, e, n), h = r.get(n);
    if (h && d.d.size > 0) {
        for (const [p, g] of d.d)if (!h.d.has(p)) {
            const f = a(t, e, p);
            c(t, e, p).t.add(n), h.d.add(p), g !== f.n && (s.add(p), l(t, e, p), (i = o.c) == null || i.call(o, p));
        }
        for (const p of h.d)if (!d.d.has(p)) {
            h.d.delete(p);
            const g = u(t, e, p);
            g?.t.delete(n);
        }
    }
}, ccg = (t, e, n)=>{
    var i;
    const r = t[1], s = t[4], o = t[6], a = t[10], l = t[11], c = t[12], u = t[13], d = t[14], h = t[16], p = t[18], g = l(t, e, n);
    let f = r.get(n);
    if (!f) {
        d(t, e, n);
        for (const _ of g.d.keys())p(t, e, _).t.add(n);
        if (f = {
            l: new Set,
            d: new Set(g.d.keys()),
            t: new Set
        }, r.set(n, f), wal(n) && evk(n)) {
            const _ = ()=>{
                let b = !0;
                const y = (...S)=>{
                    try {
                        return h(t, e, n, S);
                    } finally{
                        b || (u(t, e), c(t, e));
                    }
                };
                try {
                    const S = a(t, e, n, y);
                    S && (f.u = ()=>{
                        b = !0;
                        try {
                            S();
                        } finally{
                            b = !1;
                        }
                    });
                } finally{
                    b = !1;
                }
            };
            s.add(_);
        }
        (i = o.m) == null || i.call(o, n);
    }
    return f;
}, ucg = (t, e, n)=>{
    var i, r;
    const s = t[1], o = t[5], a = t[6], l = t[11], c = t[19], u = l(t, e, n);
    let d = s.get(n);
    if (!d || d.l.size) return d;
    let h = !1;
    for (const p of d.t)if ((i = s.get(p)) != null && i.d.has(n)) {
        h = !0;
        break;
    }
    if (!h) {
        d.u && o.add(d.u), d = void 0, s.delete(n);
        for (const p of u.d.keys()){
            const g = c(t, e, p);
            g?.t.delete(n);
        }
        (r = a.u) == null || r.call(a, n);
        return;
    }
    return d;
}, dcg = (t, e, n, i)=>{
    const r = t[11], s = t[27], o = r(t, e, n), a = "v" in o, l = o.v;
    if (Ess(i)) for (const c of o.d.keys())Xlg(n, i, r(t, e, c));
    o.v = i, delete o.e, (!a || !Object.is(l, o.v)) && (++o.n, Ess(l) && s(t, e, l));
}, hcg = (t, e, n)=>{
    const i = t[14];
    return Tss(i(t, e, n));
}, pcg = (t, e, n, ...i)=>{
    const r = t[3], s = t[12], o = t[13], a = t[16], l = r.size;
    try {
        return a(t, e, n, i);
    } finally{
        r.size !== l && (o(t, e), s(t, e));
    }
}, mcg = (t, e, n, i)=>{
    const r = t[12], s = t[18], o = t[19], l = s(t, e, n).l;
    return l.add(i), r(t, e), ()=>{
        l.delete(i), o(t, e, n), r(t, e);
    };
}, gcg = (t, e, n, i)=>{
    const r = t[25];
    let s = r.get(n);
    if (!s) {
        s = new Set, r.set(n, s);
        const o = ()=>r.delete(n);
        n.then(o, o);
    }
    s.add(i);
}, fcg = (t, e, n)=>{
    const r = t[25].get(n);
    r?.forEach((s)=>s());
}, vcg = new WeakMap;

}
