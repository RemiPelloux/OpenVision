import { $Kv, Bwh, E0o, Fwh, HKv, Owh, UKv, Uwh, XZi, YZi } from "./ECo.js";
import { x } from "./tslib.es6.js";
var $wh, Hwh, Wwh, Gwh, Vwh, jwh, qwh, ZZi, zwh, Kwh, Ywh, Xwh, Zwh, Qwh, Jwh, eCh, tCh, nCh, iCh, rCh, sCh;
export { $wh, Gwh, Hwh, Jwh, Kwh, Qwh, Vwh, Wwh, Xwh, Ywh, ZZi, Zwh, eCh, iCh, jwh, nCh, qwh, rCh, sCh, tCh, zwh };
var __wakaru_GKv_initialized = false;
export function GKv() {
if (__wakaru_GKv_initialized) return;
__wakaru_GKv_initialized = true;
x(), $wh = (e, t, n, ...i)=>n.read(...i), Hwh = (e, t, n, ...i)=>n.write(...i), Wwh = (e, t, n)=>n.INTERNAL_onInit(t), Gwh = (e, t, n, i)=>{
    var r;
    return (r = n.onMount) == null ? void 0 : r.call(n, i);
}, Vwh = (e, t, n)=>{
    var i;
    const r = e[0];
    let s = r.get(n);
    if (!s) {
        const o = e[6], a = e[9];
        s = {
            d: new Map,
            p: new Set,
            n: 0
        }, r.set(n, s), (i = o.i) == null || i.call(o, n), HKv(n) && a(e, t, n);
    }
    return s;
}, jwh = (e, t)=>{
    var n;
    const i = e[1], r = e[3], s = e[4], o = e[5], a = e[6], c = e[13];
    if (!a.f && !r.size && !s.size && !o.size) return;
    const l = [], u = (h)=>{
        try {
            h();
        } catch (p) {
            l.push(p);
        }
    };
    do {
        a.f && u(a.f);
        const h = new Set;
        for (const p of r){
            const g = (n = i.get(p)) == null ? void 0 : n.l;
            if (g) for (const f of g)h.add(f);
        }
        r.clear();
        for (const p of o)h.add(p);
        o.clear();
        for (const p of s)h.add(p);
        s.clear();
        for (const p of h)u(p);
        r.size && c(e, t);
    }while (r.size || o.size || s.size)
    if (l.length) throw new AggregateError(l);
}, qwh = (e, t)=>{
    const n = e[1], i = e[2], r = e[3], s = e[11], o = e[14], a = e[17];
    if (!r.size) return;
    const c = [], l = [], u = new WeakSet, h = new WeakSet, p = [], g = [];
    for (const f of r)p.push(f), g.push(s(e, t, f));
    for(; p.length;){
        const f = p.length - 1, v = p[f], b = g[f];
        if (h.has(v)) {
            p.pop(), g.pop();
            continue;
        }
        if (u.has(v)) {
            if (i.get(v) === b.n) c.push(v), l.push(b);
            else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && i.has(v)) throw new Error("[Bug] invalidated atom exists");
            h.add(v), p.pop(), g.pop();
            continue;
        }
        u.add(v);
        for (const y of Uwh(v, b, n))u.has(y) || (p.push(y), g.push(s(e, t, y)));
    }
    for(let f = c.length - 1; f >= 0; --f){
        const v = c[f], b = l[f];
        let y = !1;
        for (const T of b.d.keys())if (T !== v && r.has(T)) {
            y = !0;
            break;
        }
        y && (i.set(v, b.n), o(e, t, v), a(e, t, v)), i.delete(v);
    }
}, ZZi = new WeakSet, zwh = (e, t, n)=>{
    var i, r;
    const s = e[1], o = e[2], a = e[3], c = e[6], l = e[7], u = e[11], h = e[12], p = e[13], g = e[14], f = e[16], v = e[17], b = e[20], y = e[26], T = e[28], E = u(e, t, n), A = T[0];
    if (Fwh(E)) {
        if (s.has(n) && o.get(n) !== E.n || E.m === A) return E.m = A, E;
        let q = !1;
        for (const [z, X] of E.d)if (g(e, t, z).n !== X) {
            q = !0;
            break;
        }
        if (!q) return E.m = A, E;
    }
    let R = !0;
    const D = new Set(E.d.keys()), P = ()=>{
        for (const q of D)E.d.delete(q);
    }, N = ()=>{
        if (s.has(n)) {
            const q = !a.size;
            v(e, t, n), q && (p(e, t), h(e, t));
        }
    }, O = (q)=>{
        var z;
        if (q === n) {
            const Y = u(e, t, q);
            if (!Fwh(Y)) if (Owh(q)) b(e, t, q, q.init);
            else throw new Error("no atom init");
            return YZi(Y);
        }
        const X = g(e, t, q);
        try {
            return YZi(X);
        } finally{
            D.delete(q), E.d.set(q, X.n), XZi(E.v) && Bwh(n, E.v, X), s.has(n) && ((z = s.get(q)) == null || z.t.add(n)), R || N();
        }
    };
    let F, H;
    const $ = {
        get signal () {
            return F || (F = new AbortController), F.signal;
        },
        get setSelf () {
            return (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."), (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !E0o(n) && console.warn("setSelf function cannot be used with read-only atom"), !H && E0o(n) && (H = (...q)=>{
                if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && R && console.warn("setSelf function cannot be called in sync"), !R) try {
                    return f(e, t, n, q);
                } finally{
                    p(e, t), h(e, t);
                }
            }), H;
        }
    }, W = E.n, G = o.get(n) === W;
    try {
        (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && ZZi.delete(t);
        const q = l(e, t, n, O, $);
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && ZZi.has(t) && console.warn("Detected store mutation during atom read. This is not supported."), b(e, t, n, q), XZi(q)) {
            y(e, t, q, ()=>F?.abort());
            const z = ()=>{
                P(), N();
            };
            q.then(z, z);
        } else P();
        return (i = c.r) == null || i.call(c, n), E.m = A, E;
    } catch (q) {
        if ($Kv(q)) throw q;
        return delete E.v, E.e = q, ++E.n, E.m = A, E;
    } finally{
        R = !1, E.n !== W && G && (o.set(n, E.n), a.add(n), (r = c.c) == null || r.call(c, n));
    }
}, Kwh = (e, t, n)=>{
    const i = e[1], r = e[2], s = e[11], o = [
        n
    ];
    for(; o.length;){
        const a = o.pop(), c = s(e, t, a);
        for (const l of Uwh(a, c, i)){
            const u = s(e, t, l);
            r.get(l) !== u.n && (r.set(l, u.n), o.push(l));
        }
    }
}, Ywh = (e, t, n, i)=>{
    const r = e[3], s = e[6], o = e[8], a = e[11], c = e[12], l = e[13], u = e[14], h = e[15], p = e[16], g = e[17], f = e[20], v = e[28];
    let b = !0;
    const y = (E)=>YZi(u(e, t, E)), T = (E, ...A)=>{
        var R;
        const D = a(e, t, E);
        try {
            if (E === n) {
                if (!Owh(E)) throw new Error("atom not writable");
                (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && ZZi.add(t);
                const P = D.n, N = A[0];
                f(e, t, E, N), g(e, t, E), P !== D.n && (++v[0], r.add(E), h(e, t, E), (R = s.c) == null || R.call(s, E));
                return;
            } else return p(e, t, E, A);
        } finally{
            b || (l(e, t), c(e, t));
        }
    };
    try {
        return o(e, t, n, y, T, ...i);
    } finally{
        b = !1;
    }
}, Xwh = (e, t, n)=>{
    var i;
    const r = e[1], s = e[3], o = e[6], a = e[11], c = e[15], l = e[18], u = e[19], h = a(e, t, n), p = r.get(n);
    if (p && h.d.size > 0) {
        for (const [g, f] of h.d)if (!p.d.has(g)) {
            const v = a(e, t, g);
            l(e, t, g).t.add(n), p.d.add(g), f !== v.n && (s.add(g), c(e, t, g), (i = o.c) == null || i.call(o, g));
        }
        for (const g of p.d)if (!h.d.has(g)) {
            p.d.delete(g);
            const f = u(e, t, g);
            f?.t.delete(n);
        }
    }
}, Zwh = (e, t, n)=>{
    var i;
    const r = e[1], s = e[4], o = e[6], a = e[10], c = e[11], l = e[12], u = e[13], h = e[14], p = e[16], g = e[18], f = c(e, t, n);
    let v = r.get(n);
    if (!v) {
        h(e, t, n);
        for (const b of f.d.keys())g(e, t, b).t.add(n);
        if (v = {
            l: new Set,
            d: new Set(f.d.keys()),
            t: new Set
        }, r.set(n, v), E0o(n) && UKv(n)) {
            const b = ()=>{
                let y = !0;
                const T = (...E)=>{
                    try {
                        return p(e, t, n, E);
                    } finally{
                        y || (u(e, t), l(e, t));
                    }
                };
                try {
                    const E = a(e, t, n, T);
                    E && (v.u = ()=>{
                        y = !0;
                        try {
                            E();
                        } finally{
                            y = !1;
                        }
                    });
                } finally{
                    y = !1;
                }
            };
            s.add(b);
        }
        (i = o.m) == null || i.call(o, n);
    }
    return v;
}, Qwh = (e, t, n)=>{
    var i, r;
    const s = e[1], o = e[5], a = e[6], c = e[11], l = e[19], u = c(e, t, n);
    let h = s.get(n);
    if (!h || h.l.size) return h;
    let p = !1;
    for (const g of h.t)if ((i = s.get(g)) != null && i.d.has(n)) {
        p = !0;
        break;
    }
    if (!p) {
        h.u && o.add(h.u), h = void 0, s.delete(n);
        for (const g of u.d.keys()){
            const f = l(e, t, g);
            f?.t.delete(n);
        }
        (r = a.u) == null || r.call(a, n);
        return;
    }
    return h;
}, Jwh = (e, t, n, i)=>{
    const r = e[11], s = e[27], o = r(e, t, n), a = "v" in o, c = o.v;
    if (XZi(i)) for (const l of o.d.keys())Bwh(n, i, r(e, t, l));
    o.v = i, delete o.e, (!a || !Object.is(c, o.v)) && (++o.n, XZi(c) && s(e, t, c));
}, eCh = (e, t, n)=>{
    const i = e[14];
    return YZi(i(e, t, n));
}, tCh = (e, t, n, ...i)=>{
    const r = e[3], s = e[12], o = e[13], a = e[16], c = r.size;
    try {
        return a(e, t, n, i);
    } finally{
        r.size !== c && (o(e, t), s(e, t));
    }
}, nCh = (e, t, n, i)=>{
    const r = e[12], s = e[18], o = e[19], c = s(e, t, n).l;
    return c.add(i), r(e, t), ()=>{
        c.delete(i), o(e, t, n), r(e, t);
    };
}, iCh = (e, t, n, i)=>{
    const r = e[25];
    let s = r.get(n);
    if (!s) {
        s = new Set, r.set(n, s);
        const o = ()=>r.delete(n);
        n.then(o, o);
    }
    s.add(i);
}, rCh = (e, t, n)=>{
    const r = e[25].get(n);
    r?.forEach((s)=>s());
}, sCh = new WeakMap;

}
