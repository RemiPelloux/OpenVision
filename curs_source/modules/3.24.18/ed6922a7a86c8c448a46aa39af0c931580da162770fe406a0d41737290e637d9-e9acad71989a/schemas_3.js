import { GEn, WEn, mOi } from "./core_3.js";
import { Jtu, qHf } from "./doc_2.js";
import { $Hf, BHf, CZe, Ltu, Mtu, OHf, Otu, QLs, VEn, ZLs, fN, inu, lUt, nbt, nnu, tnu, uUt, vOi } from "./f0s.js";
import { nNs, tNs, ztu } from "./parse_5.js";
import { VHf, Ytu } from "./regexes_2.js";
import { x } from "./tslib.es6.js";
import { Btu, Utu, dUt } from "./util_2.js";
import { enu, zHf } from "./versions_2.js";
var xve, rnu, snu, onu, anu, cnu, lnu, unu, dnu, hnu;
export { anu, cnu, dnu, hnu, lnu, onu, rnu, snu, unu, xve };
var __wakaru_KHf_initialized = false;
export function KHf() {
if (__wakaru_KHf_initialized) return;
__wakaru_KHf_initialized = true;
x(), GEn(), qHf(), ztu(), VHf(), dUt(), zHf(), xve = fN("$ZodType", (e, t)=>{
    var n;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = enu;
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
            let c = QLs(s), l;
            for (const u of o){
                if (u._zod.def.when) {
                    if (!u._zod.def.when(s)) continue;
                } else if (c) continue;
                const h = s.issues.length, p = u._zod.check(s);
                if (p instanceof Promise && a?.async === !1) throw new WEn;
                if (l || p instanceof Promise) l = (l ?? Promise.resolve()).then(async ()=>{
                    await p, s.issues.length !== h && (c || (c = QLs(s, h)));
                });
                else {
                    if (s.issues.length === h) continue;
                    c || (c = QLs(s, h));
                }
            }
            return l ? l.then(()=>s) : s;
        };
        e._zod.run = (s, o)=>{
            const a = e._zod.parse(s, o);
            if (a instanceof Promise) {
                if (o.async === !1) throw new WEn;
                return a.then((c)=>r(c, i, o));
            }
            return r(a, i, o);
        };
    }
    e["~standard"] = {
        validate: (r)=>{
            try {
                const s = tNs(e, r);
                return s.success ? {
                    value: s.data
                } : {
                    issues: s.error?.issues
                };
            } catch  {
                return nNs(e, r).then((o)=>o.success ? {
                        value: o.data
                    } : {
                        issues: o.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
}), rnu = fN("$ZodString", (e, t)=>{
    xve.init(e, t), e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? Ytu(e._zod.bag), e._zod.parse = (n, i)=>{
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
}), snu = fN("$ZodNever", (e, t)=>{
    xve.init(e, t), e._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n);
}), onu = fN("$ZodArray", (e, t)=>{
    xve.init(e, t), e._zod.parse = (n, i)=>{
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
            c instanceof Promise ? s.push(c.then((l)=>tnu(l, n, o))) : tnu(c, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), anu = fN("$ZodObject", (e, t)=>{
    xve.init(e, t);
    const n = Mtu(()=>{
        const h = Object.keys(t.shape);
        for (const g of h)if (!(t.shape[g] instanceof xve)) throw new Error(`Invalid element at key "${g}": expected a Zod schema`);
        const p = $Hf(t.shape);
        return {
            shape: t.shape,
            keys: h,
            keySet: new Set(h),
            numKeys: h.length,
            optionalKeys: new Set(p)
        };
    });
    CZe(e._zod, "propValues", ()=>{
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
        const p = new Jtu([
            "shape",
            "payload",
            "ctx"
        ]), g = n.value, f = (T)=>{
            const E = VEn(T);
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
            const A = VEn(T);
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
            path: iss.path ? [${VEn(T)}, ...iss.path] : [${VEn(T)}]
          })));`), p.write(`newResult[${VEn(T)}] = ${E}.value`);
        }
        p.write("payload.value = newResult;"), p.write("return payload;");
        const y = p.compile();
        return (T, E)=>y(h, T, E);
    };
    let r;
    const s = ZLs, o = !mOi.jitless, c = o && Btu.value, l = t.catchall;
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
                D instanceof Promise ? f.push(D.then((N)=>P ? nnu(N, h, A, g) : vOi(N, h, A))) : P ? nnu(D, h, A, g) : vOi(D, h, A);
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
            A instanceof Promise ? f.push(A.then((R)=>vOi(R, h, E))) : vOi(A, h, E);
        }
        return v.length && h.issues.push({
            code: "unrecognized_keys",
            keys: v,
            input: g,
            inst: e
        }), f.length ? Promise.all(f).then(()=>h) : h;
    };
}), cnu = fN("$ZodUnion", (e, t)=>{
    xve.init(e, t), CZe(e._zod, "optin", ()=>t.options.some((n)=>n._zod.optin === "optional") ? "optional" : void 0), CZe(e._zod, "optout", ()=>t.options.some((n)=>n._zod.optout === "optional") ? "optional" : void 0), CZe(e._zod, "values", ()=>{
        if (t.options.every((n)=>n._zod.values)) return new Set(t.options.flatMap((n)=>Array.from(n._zod.values)));
    }), CZe(e._zod, "pattern", ()=>{
        if (t.options.every((n)=>n._zod.pattern)) {
            const n = t.options.map((i)=>i._zod.pattern);
            return new RegExp(`^(${n.map((i)=>Ltu(i.source)).join("|")})$`);
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
        return r ? Promise.all(s).then((o)=>inu(o, n, e, i)) : inu(s, n, e, i);
    };
}), lnu = fN("$ZodRecord", (e, t)=>{
    xve.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!BHf(r)) return n.issues.push({
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
                    u.issues.length && n.issues.push(...nbt(c, u.issues)), n.value[c] = u.value;
                })) : (l.issues.length && n.issues.push(...nbt(c, l.issues)), n.value[c] = l.value);
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
                        issues: a.issues.map((l)=>uUt(l, i, lUt())),
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
                    l.issues.length && n.issues.push(...nbt(o, l.issues)), n.value[a.value] = l.value;
                })) : (c.issues.length && n.issues.push(...nbt(o, c.issues)), n.value[a.value] = c.value);
            }
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), unu = fN("$ZodEnum", (e, t)=>{
    xve.init(e, t);
    const n = OHf(t.entries);
    e._zod.values = new Set(n), e._zod.pattern = new RegExp(`^(${n.filter((i)=>Utu.has(typeof i)).map((i)=>typeof i == "string" ? Otu(i) : i.toString()).join("|")})$`), e._zod.parse = (i, r)=>{
        const s = i.value;
        return e._zod.values.has(s) || i.issues.push({
            code: "invalid_value",
            values: n,
            input: s,
            inst: e
        }), i;
    };
}), dnu = fN("$ZodLiteral", (e, t)=>{
    xve.init(e, t), e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((n)=>typeof n == "string" ? Otu(n) : n ? n.toString() : String(n)).join("|")})$`), e._zod.parse = (n, i)=>{
        const r = n.value;
        return e._zod.values.has(r) || n.issues.push({
            code: "invalid_value",
            values: t.values,
            input: r,
            inst: e
        }), n;
    };
}), hnu = fN("$ZodOptional", (e, t)=>{
    xve.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", CZe(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            void 0
        ]) : void 0), CZe(e._zod, "pattern", ()=>{
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${Ltu(n.source)})?$`) : void 0;
    }), e._zod.parse = (n, i)=>t.innerType._zod.optin === "optional" ? t.innerType._zod.run(n, i) : n.value === void 0 ? n : t.innerType._zod.run(n, i);
});

}
