import { $0i, SXa, j0i } from "./core_5.js";
import { FV1, VUm } from "./doc_4.js";
import { AV1, E6, FUm, HCt, IV1, LUm, TV1, Tqt, U0i, UUm, _Xa, bXa, cIn, ces, dIn, ojm, rjm, sjm } from "./gYa.js";
import { CXa, tjm, wXa } from "./parse_11.js";
import { UV1, njm } from "./regexes_4.js";
import { E } from "./tslib.es6.js";
import { $Um, HUm, uIn } from "./util_4.js";
import { ijm, jV1 } from "./versions_4.js";
var EPe, ajm, ljm, cjm, ujm, djm, hjm, pjm, mjm, gjm;
export { EPe, ajm, cjm, djm, gjm, hjm, ljm, mjm, pjm, ujm };
var __wakaru_$V1_initialized = false;
export function $V1() {
if (__wakaru_$V1_initialized) return;
__wakaru_$V1_initialized = true;
E(), $0i(), FV1(), tjm(), UV1(), uIn(), jV1(), EPe = E6("$ZodType", (t, e)=>{
    var n;
    t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = ijm;
    const i = [
        ...t._zod.def.checks ?? []
    ];
    t._zod.traits.has("$ZodCheck") && i.unshift(t);
    for (const r of i)for (const s of r._zod.onattach)s(t);
    if (i.length === 0) (n = t._zod).deferred ?? (n.deferred = []), t._zod.deferred?.push(()=>{
        t._zod.run = t._zod.parse;
    });
    else {
        const r = (s, o, a)=>{
            let l = bXa(s), c;
            for (const u of o){
                if (u._zod.def.when) {
                    if (!u._zod.def.when(s)) continue;
                } else if (l) continue;
                const d = s.issues.length, h = u._zod.check(s);
                if (h instanceof Promise && a?.async === !1) throw new j0i;
                if (c || h instanceof Promise) c = (c ?? Promise.resolve()).then(async ()=>{
                    await h, s.issues.length !== d && (l || (l = bXa(s, d)));
                });
                else {
                    if (s.issues.length === d) continue;
                    l || (l = bXa(s, d));
                }
            }
            return c ? c.then(()=>s) : s;
        };
        t._zod.run = (s, o)=>{
            const a = t._zod.parse(s, o);
            if (a instanceof Promise) {
                if (o.async === !1) throw new j0i;
                return a.then((l)=>r(l, i, o));
            }
            return r(a, i, o);
        };
    }
    t["~standard"] = {
        validate: (r)=>{
            try {
                const s = wXa(t, r);
                return s.success ? {
                    value: s.data
                } : {
                    issues: s.error?.issues
                };
            } catch  {
                return CXa(t, r).then((o)=>o.success ? {
                        value: o.data
                    } : {
                        issues: o.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
}), ajm = E6("$ZodString", (t, e)=>{
    EPe.init(t, e), t._zod.pattern = [
        ...t?._zod.bag?.patterns ?? []
    ].pop() ?? njm(t._zod.bag), t._zod.parse = (n, i)=>{
        if (e.coerce) try {
            n.value = String(n.value);
        } catch  {}
        return typeof n.value == "string" || n.issues.push({
            expected: "string",
            code: "invalid_type",
            input: n.value,
            inst: t
        }), n;
    };
}), ljm = E6("$ZodNever", (t, e)=>{
    EPe.init(t, e), t._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: t
        }), n);
}), cjm = E6("$ZodArray", (t, e)=>{
    EPe.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        if (!Array.isArray(r)) return n.issues.push({
            expected: "array",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
        n.value = Array(r.length);
        const s = [];
        for(let o = 0; o < r.length; o++){
            const a = r[o], l = e.element._zod.run({
                value: a,
                issues: []
            }, i);
            l instanceof Promise ? s.push(l.then((c)=>rjm(c, n, o))) : rjm(l, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), ujm = E6("$ZodObject", (t, e)=>{
    EPe.init(t, e);
    const n = LUm(()=>{
        const d = Object.keys(e.shape);
        for (const p of d)if (!(e.shape[p] instanceof EPe)) throw new Error(`Invalid element at key "${p}": expected a Zod schema`);
        const h = AV1(e.shape);
        return {
            shape: e.shape,
            keys: d,
            keySet: new Set(d),
            numKeys: d.length,
            optionalKeys: new Set(h)
        };
    });
    HCt(t._zod, "propValues", ()=>{
        const d = e.shape, h = {};
        for(const p in d){
            const g = d[p]._zod;
            if (g.values) {
                h[p] ?? (h[p] = new Set);
                for (const f of g.values)h[p].add(f);
            }
        }
        return h;
    });
    const i = (d)=>{
        const h = new VUm([
            "shape",
            "payload",
            "ctx"
        ]), p = n.value, g = (y)=>{
            const S = U0i(y);
            return `shape[${S}]._zod.run({ value: input[${S}], issues: [] }, ctx)`;
        };
        h.write("const input = payload.value;");
        const f = Object.create(null);
        let _ = 0;
        for (const y of p.keys)f[y] = `key_${_++}`;
        h.write("const newResult = {}");
        for (const y of p.keys)if (p.optionalKeys.has(y)) {
            const S = f[y];
            h.write(`const ${S} = ${g(y)};`);
            const k = U0i(y);
            h.write(`
        if (${S}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${S}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${S}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${S}.value;
        }
        `);
        } else {
            const S = f[y];
            h.write(`const ${S} = ${g(y)};`), h.write(`
          if (${S}.issues.length) payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${U0i(y)}, ...iss.path] : [${U0i(y)}]
          })));`), h.write(`newResult[${U0i(y)}] = ${S}.value`);
        }
        h.write("payload.value = newResult;"), h.write("return payload;");
        const b = h.compile();
        return (y, S)=>b(d, y, S);
    };
    let r;
    const s = _Xa, o = !SXa.jitless, l = o && $Um.value, c = e.catchall;
    let u;
    t._zod.parse = (d, h)=>{
        u ?? (u = n.value);
        const p = d.value;
        if (!s(p)) return d.issues.push({
            expected: "object",
            code: "invalid_type",
            input: p,
            inst: t
        }), d;
        const g = [];
        if (o && l && h?.async === !1 && h.jitless !== !0) r || (r = i(e.shape)), d = r(d, h);
        else {
            d.value = {};
            const S = u.shape;
            for (const k of u.keys){
                const C = S[k], T = C._zod.run({
                    value: p[k],
                    issues: []
                }, h), I = C._zod.optin === "optional" && C._zod.optout === "optional";
                T instanceof Promise ? g.push(T.then((A)=>I ? sjm(A, d, k, p) : ces(A, d, k))) : I ? sjm(T, d, k, p) : ces(T, d, k);
            }
        }
        if (!c) return g.length ? Promise.all(g).then(()=>d) : d;
        const f = [], _ = u.keySet, b = c._zod, y = b.def.type;
        for (const S of Object.keys(p)){
            if (_.has(S)) continue;
            if (y === "never") {
                f.push(S);
                continue;
            }
            const k = b.run({
                value: p[S],
                issues: []
            }, h);
            k instanceof Promise ? g.push(k.then((C)=>ces(C, d, S))) : ces(k, d, S);
        }
        return f.length && d.issues.push({
            code: "unrecognized_keys",
            keys: f,
            input: p,
            inst: t
        }), g.length ? Promise.all(g).then(()=>d) : d;
    };
}), djm = E6("$ZodUnion", (t, e)=>{
    EPe.init(t, e), HCt(t._zod, "optin", ()=>e.options.some((n)=>n._zod.optin === "optional") ? "optional" : void 0), HCt(t._zod, "optout", ()=>e.options.some((n)=>n._zod.optout === "optional") ? "optional" : void 0), HCt(t._zod, "values", ()=>{
        if (e.options.every((n)=>n._zod.values)) return new Set(e.options.flatMap((n)=>Array.from(n._zod.values)));
    }), HCt(t._zod, "pattern", ()=>{
        if (e.options.every((n)=>n._zod.pattern)) {
            const n = e.options.map((i)=>i._zod.pattern);
            return new RegExp(`^(${n.map((i)=>FUm(i.source)).join("|")})$`);
        }
    }), t._zod.parse = (n, i)=>{
        let r = !1;
        const s = [];
        for (const o of e.options){
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
        return r ? Promise.all(s).then((o)=>ojm(o, n, t, i)) : ojm(s, n, t, i);
    };
}), hjm = E6("$ZodRecord", (t, e)=>{
    EPe.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        if (!IV1(r)) return n.issues.push({
            expected: "record",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
        const s = [];
        if (e.keyType._zod.values) {
            const o = e.keyType._zod.values;
            n.value = {};
            for (const l of o)if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
                const c = e.valueType._zod.run({
                    value: r[l],
                    issues: []
                }, i);
                c instanceof Promise ? s.push(c.then((u)=>{
                    u.issues.length && n.issues.push(...Tqt(l, u.issues)), n.value[l] = u.value;
                })) : (c.issues.length && n.issues.push(...Tqt(l, c.issues)), n.value[l] = c.value);
            }
            let a;
            for(const l in r)o.has(l) || (a = a ?? [], a.push(l));
            a && a.length > 0 && n.issues.push({
                code: "unrecognized_keys",
                input: r,
                inst: t,
                keys: a
            });
        } else {
            n.value = {};
            for (const o of Reflect.ownKeys(r)){
                if (o === "__proto__") continue;
                const a = e.keyType._zod.run({
                    value: o,
                    issues: []
                }, i);
                if (a instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (a.issues.length) {
                    n.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: a.issues.map((c)=>cIn(c, i, dIn())),
                        input: o,
                        path: [
                            o
                        ],
                        inst: t
                    }), n.value[a.value] = a.value;
                    continue;
                }
                const l = e.valueType._zod.run({
                    value: r[o],
                    issues: []
                }, i);
                l instanceof Promise ? s.push(l.then((c)=>{
                    c.issues.length && n.issues.push(...Tqt(o, c.issues)), n.value[a.value] = c.value;
                })) : (l.issues.length && n.issues.push(...Tqt(o, l.issues)), n.value[a.value] = l.value);
            }
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), pjm = E6("$ZodEnum", (t, e)=>{
    EPe.init(t, e);
    const n = TV1(e.entries);
    t._zod.values = new Set(n), t._zod.pattern = new RegExp(`^(${n.filter((i)=>HUm.has(typeof i)).map((i)=>typeof i == "string" ? UUm(i) : i.toString()).join("|")})$`), t._zod.parse = (i, r)=>{
        const s = i.value;
        return t._zod.values.has(s) || i.issues.push({
            code: "invalid_value",
            values: n,
            input: s,
            inst: t
        }), i;
    };
}), mjm = E6("$ZodLiteral", (t, e)=>{
    EPe.init(t, e), t._zod.values = new Set(e.values), t._zod.pattern = new RegExp(`^(${e.values.map((n)=>typeof n == "string" ? UUm(n) : n ? n.toString() : String(n)).join("|")})$`), t._zod.parse = (n, i)=>{
        const r = n.value;
        return t._zod.values.has(r) || n.issues.push({
            code: "invalid_value",
            values: e.values,
            input: r,
            inst: t
        }), n;
    };
}), gjm = E6("$ZodOptional", (t, e)=>{
    EPe.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", HCt(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
            ...e.innerType._zod.values,
            void 0
        ]) : void 0), HCt(t._zod, "pattern", ()=>{
        const n = e.innerType._zod.pattern;
        return n ? new RegExp(`^(${FUm(n.source)})?$`) : void 0;
    }), t._zod.parse = (n, i)=>e.innerType._zod.optin === "optional" ? e.innerType._zod.run(n, i) : n.value === void 0 ? n : e.innerType._zod.run(n, i);
});

}
