import { Ago, X2n, Y2n } from "./core_5.js";
import { PLv, tth } from "./doc_4.js";
import { Dgo, Mgo, lth } from "./parse_10.js";
import { NLv, uth } from "./regexes_4.js";
import { x } from "./tslib.es6.js";
import { Xeh, Yeh, dGt } from "./util_4.js";
import { OLv, dth } from "./versions_4.js";
import { Ego, Fet, Geh, K2n, SLv, TLv, hGt, hth, jeh, lwt, mth, ozi, pth, uGt, wLv, xN, xgo, zeh } from "./xmo.js";
var I_e, gth, fth, vth, _th, bth, yth, Sth, kth, wth;
export { I_e, Sth, _th, bth, fth, gth, kth, vth, wth, yth };
var __wakaru_FLv_initialized = false;
export function FLv() {
if (__wakaru_FLv_initialized) return;
__wakaru_FLv_initialized = true;
x(), X2n(), PLv(), lth(), NLv(), dGt(), OLv(), I_e = xN("$ZodType", (e, t)=>{
    var n;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = dth;
    const i = [
        ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (const r of i)for (const s of r._zod.onattach)s(e);
    if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(()=>{
        e._zod.run = e._zod.parse;
    });
    else {
        const r = (s, o, a)=>{
            let c = xgo(s), l;
            for (const u of o){
                if (u._zod.def.when) {
                    if (!u._zod.def.when(s)) continue;
                } else if (c) continue;
                const h = s.issues.length, p = u._zod.check(s);
                if (p instanceof Promise && a?.async === !1) throw new Y2n;
                if (l || p instanceof Promise) l = (l ?? Promise.resolve()).then(async ()=>{
                    await p, s.issues.length !== h && (c || (c = xgo(s, h)));
                });
                else {
                    if (s.issues.length === h) continue;
                    c || (c = xgo(s, h));
                }
            }
            return l ? l.then(()=>s) : s;
        };
        e._zod.run = (s, o)=>{
            const a = e._zod.parse(s, o);
            if (a instanceof Promise) {
                if (o.async === !1) throw new Y2n;
                return a.then((c)=>r(c, i, o));
            }
            return r(a, i, o);
        };
    }
    e["~standard"] = {
        validate: (r)=>{
            try {
                const s = Dgo(e, r);
                return s.success ? {
                    value: s.data
                } : {
                    issues: s.error?.issues
                };
            } catch  {
                return Mgo(e, r).then((o)=>o.success ? {
                        value: o.data
                    } : {
                        issues: o.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
}), gth = xN("$ZodString", (e, t)=>{
    I_e.init(e, t), e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? uth(e._zod.bag), e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = String(n.value);
        } catch  {}
        return typeof n.value == "string" || n.issues.push({
            expected: "string",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n;
    };
}), fth = xN("$ZodNever", (e, t)=>{
    I_e.init(e, t), e._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n);
}), vth = xN("$ZodArray", (e, t)=>{
    I_e.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!Array.isArray(r)) return n.issues.push({
            expected: "array",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
        n.value = Array(r.length);
        const s = [];
        for(let o = 0; o < r.length; o++){
            const a = r[o], c = t.element._zod.run({
                value: a,
                issues: []
            }, i);
            c instanceof Promise ? s.push(c.then((l)=>hth(l, n, o))) : hth(c, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), _th = xN("$ZodObject", (e, t)=>{
    I_e.init(e, t);
    const n = Geh(()=>{
        const h = Object.keys(t.shape);
        for (const g of h)if (!(t.shape[g] instanceof I_e)) throw new Error(`Invalid element at key "${g}": expected a Zod schema`);
        const p = TLv(t.shape);
        return {
            shape: t.shape,
            keys: h,
            keySet: new Set(h),
            numKeys: h.length,
            optionalKeys: new Set(p)
        };
    });
    Fet(e._zod, "propValues", ()=>{
        const h = t.shape, p = {};
        for(const g in h){
            const f = h[g]._zod;
            if (f.values) {
                p[g] ?? (p[g] = new Set);
                for (const v of f.values)p[g].add(v);
            }
        }
        return p;
    });
    const i = (h)=>{
        const p = new tth([
            "shape",
            "payload",
            "ctx"
        ]), g = n.value, f = (T)=>{
            const E = K2n(T);
            return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
        };
        p.write("const input = payload.value;");
        const v = Object.create(null);
        let b = 0;
        for (const T of g.keys)v[T] = `key_${b++}`;
        p.write("const newResult = {}");
        for (const T of g.keys)if (g.optionalKeys.has(T)) {
            const E = v[T];
            p.write(`const ${E} = ${f(T)};`);
            const A = K2n(T);
            p.write(`
        if (${E}.issues.length) {
          if (input[${A}] === undefined) {
            if (${A} in input) {
              newResult[${A}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${E}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${A}, ...iss.path] : [${A}],
              }))
            );
          }
        } else if (${E}.value === undefined) {
          if (${A} in input) newResult[${A}] = undefined;
        } else {
          newResult[${A}] = ${E}.value;
        }
        `);
        } else {
            const E = v[T];
            p.write(`const ${E} = ${f(T)};`), p.write(`
          if (${E}.issues.length) payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K2n(T)}, ...iss.path] : [${K2n(T)}]
          })));`), p.write(`newResult[${K2n(T)}] = ${E}.value`);
        }
        p.write("payload.value = newResult;"), p.write("return payload;");
        const y = p.compile();
        return (T, E)=>y(h, T, E);
    };
    let r;
    const s = Ego, o = !Ago.jitless, c = o && Yeh.value, l = t.catchall;
    let u;
    e._zod.parse = (h, p)=>{
        u ?? (u = n.value);
        const g = h.value;
        if (!s(g)) return h.issues.push({
            expected: "object",
            code: "invalid_type",
            input: g,
            inst: e
        }), h;
        const f = [];
        if (o && c && p?.async === !1 && p.jitless !== !0) r || (r = i(t.shape)), h = r(h, p);
        else {
            h.value = {};
            const E = u.shape;
            for (const A of u.keys){
                const R = E[A], D = R._zod.run({
                    value: g[A],
                    issues: []
                }, p), P = R._zod.optin === "optional" && R._zod.optout === "optional";
                D instanceof Promise ? f.push(D.then((N)=>P ? pth(N, h, A, g) : ozi(N, h, A))) : P ? pth(D, h, A, g) : ozi(D, h, A);
            }
        }
        if (!l) return f.length ? Promise.all(f).then(()=>h) : h;
        const v = [], b = u.keySet, y = l._zod, T = y.def.type;
        for (const E of Object.keys(g)){
            if (b.has(E)) continue;
            if (T === "never") {
                v.push(E);
                continue;
            }
            const A = y.run({
                value: g[E],
                issues: []
            }, p);
            A instanceof Promise ? f.push(A.then((R)=>ozi(R, h, E))) : ozi(A, h, E);
        }
        return v.length && h.issues.push({
            code: "unrecognized_keys",
            keys: v,
            input: g,
            inst: e
        }), f.length ? Promise.all(f).then(()=>h) : h;
    };
}), bth = xN("$ZodUnion", (e, t)=>{
    I_e.init(e, t), Fet(e._zod, "optin", ()=>t.options.some((n)=>n._zod.optin === "optional") ? "optional" : void 0), Fet(e._zod, "optout", ()=>t.options.some((n)=>n._zod.optout === "optional") ? "optional" : void 0), Fet(e._zod, "values", ()=>{
        if (t.options.every((n)=>n._zod.values)) return new Set(t.options.flatMap((n)=>Array.from(n._zod.values)));
    }), Fet(e._zod, "pattern", ()=>{
        if (t.options.every((n)=>n._zod.pattern)) {
            const n = t.options.map((i)=>i._zod.pattern);
            return new RegExp(`^(${n.map((i)=>jeh(i.source)).join("|")})$`);
        }
    }), e._zod.parse = (n, i)=>{
        let r = !1;
        const s = [];
        for (const o of t.options){
            const a = o._zod.run({
                value: n.value,
                issues: []
            }, i);
            if (a instanceof Promise) s.push(a), r = !0;
            else {
                if (a.issues.length === 0) return a;
                s.push(a);
            }
        }
        return r ? Promise.all(s).then((o)=>mth(o, n, e, i)) : mth(s, n, e, i);
    };
}), yth = xN("$ZodRecord", (e, t)=>{
    I_e.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!wLv(r)) return n.issues.push({
            expected: "record",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
        const s = [];
        if (t.keyType._zod.values) {
            const o = t.keyType._zod.values;
            n.value = {};
            for (const c of o)if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
                const l = t.valueType._zod.run({
                    value: r[c],
                    issues: []
                }, i);
                l instanceof Promise ? s.push(l.then((u)=>{
                    u.issues.length && n.issues.push(...lwt(c, u.issues)), n.value[c] = u.value;
                })) : (l.issues.length && n.issues.push(...lwt(c, l.issues)), n.value[c] = l.value);
            }
            let a;
            for(const c in r)o.has(c) || (a = a ?? [], a.push(c));
            a && a.length > 0 && n.issues.push({
                code: "unrecognized_keys",
                input: r,
                inst: e,
                keys: a
            });
        } else {
            n.value = {};
            for (const o of Reflect.ownKeys(r)){
                if (o === "__proto__") continue;
                const a = t.keyType._zod.run({
                    value: o,
                    issues: []
                }, i);
                if (a instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (a.issues.length) {
                    n.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: a.issues.map((l)=>uGt(l, i, hGt())),
                        input: o,
                        path: [
                            o
                        ],
                        inst: e
                    }), n.value[a.value] = a.value;
                    continue;
                }
                const c = t.valueType._zod.run({
                    value: r[o],
                    issues: []
                }, i);
                c instanceof Promise ? s.push(c.then((l)=>{
                    l.issues.length && n.issues.push(...lwt(o, l.issues)), n.value[a.value] = l.value;
                })) : (c.issues.length && n.issues.push(...lwt(o, c.issues)), n.value[a.value] = c.value);
            }
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), Sth = xN("$ZodEnum", (e, t)=>{
    I_e.init(e, t);
    const n = SLv(t.entries);
    e._zod.values = new Set(n), e._zod.pattern = new RegExp(`^(${n.filter((i)=>Xeh.has(typeof i)).map((i)=>typeof i == "string" ? zeh(i) : i.toString()).join("|")})$`), e._zod.parse = (i, r)=>{
        const s = i.value;
        return e._zod.values.has(s) || i.issues.push({
            code: "invalid_value",
            values: n,
            input: s,
            inst: e
        }), i;
    };
}), kth = xN("$ZodLiteral", (e, t)=>{
    I_e.init(e, t), e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((n)=>typeof n == "string" ? zeh(n) : n ? n.toString() : String(n)).join("|")})$`), e._zod.parse = (n, i)=>{
        const r = n.value;
        return e._zod.values.has(r) || n.issues.push({
            code: "invalid_value",
            values: t.values,
            input: r,
            inst: e
        }), n;
    };
}), wth = xN("$ZodOptional", (e, t)=>{
    I_e.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Fet(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            void 0
        ]) : void 0), Fet(e._zod, "pattern", ()=>{
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${jeh(n.source)})?$`) : void 0;
    }), e._zod.parse = (n, i)=>t.innerType._zod.optin === "optional" ? t.innerType._zod.run(n, i) : n.value === void 0 ? n : t.innerType._zod.run(n, i);
});

}
