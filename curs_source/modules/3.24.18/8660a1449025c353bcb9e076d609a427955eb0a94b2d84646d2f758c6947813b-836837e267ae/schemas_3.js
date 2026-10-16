import { Bhe, Hpi, Wpi, m7h } from "./checks_3.js";
import { Dfa, X5r, jFe, pjt } from "./core_3.js";
import { E7h, T7h } from "./doc_2.js";
import { A7h, B7h, D7h, E8h, F7h, Ffa, I8h, L7h, Lfa, M7h, N7h, O7h, P7h, PSn, R7h, RSn, U7h, Z5r, ad, fTS, gTS, gjt, hjt, mTS, nFr, nN, pTS, tFr, vTS } from "./ipa.js";
import { MSn, Wfa, eFr } from "./parse_5.js";
import { G8h, Gfa, K8h, Q8h, V8h, X8h, Y8h, Z8h, a7h, c7h, e7h, hkt, i7h, n7h, o7h, q8h, qfa, r7h, s7h, t7h, u7h, z8h } from "./regexes_2.js";
import { E } from "./tslib.es6.js";
import { P8h, R8h, yb } from "./util_2.js";
import { I7h, x7h } from "./versions_2.js";
var yB, Gpi, D4, j7h, $7h, H7h, W7h, G7h, q7h, z7h, V7h, K7h, Y7h, X7h, Z7h, Q7h, J7h, eUh, tUh, nUh, iUh, rUh, sUh, oUh, aUh, lUh, Zfa, cUh, uUh, dUh, hUh, pUh, Qfa, mUh, gUh, fUh, vUh, _Uh, bUh, Jfa, yUh, SUh, kUh, wUh, CUh, TUh, EUh, IUh, xUh;
export { $7h, CUh, D4, EUh, G7h, Gpi, H7h, IUh, J7h, Jfa, K7h, Q7h, Qfa, SUh, TUh, V7h, W7h, X7h, Y7h, Z7h, Zfa, _Uh, aUh, bUh, cUh, dUh, eUh, fUh, gUh, hUh, iUh, j7h, kUh, lUh, mUh, nUh, oUh, pUh, q7h, rUh, sUh, tUh, uUh, vUh, wUh, xUh, yB, yUh, z7h };
var __wakaru_DSn_initialized = false;
export function DSn() {
if (__wakaru_DSn_initialized) return;
__wakaru_DSn_initialized = true;
E(), Wpi(), jFe(), E7h(), MSn(), hkt(), yb(), yb(), x7h(), yB = ad("$ZodType", (t, e)=>{
    var n;
    t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = I7h;
    const i = [
        ...t._zod.def.checks ?? []
    ];
    t._zod.traits.has("$ZodCheck") && i.unshift(t);
    for (const r of i)for (const s of r._zod.onattach)s(t);
    if (i.length === 0) (n = t._zod).deferred ?? (n.deferred = []), t._zod.deferred?.push(()=>{
        t._zod.run = t._zod.parse;
    });
    else {
        const r = (o, a, l)=>{
            let c = PSn(o), u;
            for (const d of a){
                if (d._zod.def.when) {
                    if (!d._zod.def.when(o)) continue;
                } else if (c) continue;
                const h = o.issues.length, p = d._zod.check(o);
                if (p instanceof Promise && l?.async === !1) throw new pjt;
                if (u || p instanceof Promise) u = (u ?? Promise.resolve()).then(async ()=>{
                    await p, o.issues.length !== h && (c || (c = PSn(o, h)));
                });
                else {
                    if (o.issues.length === h) continue;
                    c || (c = PSn(o, h));
                }
            }
            return u ? u.then(()=>o) : o;
        }, s = (o, a, l)=>{
            if (PSn(o)) return o.aborted = !0, o;
            const c = r(a, i, l);
            if (c instanceof Promise) {
                if (l.async === !1) throw new pjt;
                return c.then((u)=>t._zod.parse(u, l));
            }
            return t._zod.parse(c, l);
        };
        t._zod.run = (o, a)=>{
            if (a.skipChecks) return t._zod.parse(o, a);
            if (a.direction === "backward") {
                const c = t._zod.parse({
                    value: o.value,
                    issues: []
                }, {
                    ...a,
                    skipChecks: !0
                });
                return c instanceof Promise ? c.then((u)=>s(u, o, a)) : s(c, o, a);
            }
            const l = t._zod.parse(o, a);
            if (l instanceof Promise) {
                if (a.async === !1) throw new pjt;
                return l.then((c)=>r(c, i, a));
            }
            return r(l, i, a);
        };
    }
    nN(t, "~standard", ()=>({
            validate: (r)=>{
                try {
                    const s = eFr(t, r);
                    return s.success ? {
                        value: s.data
                    } : {
                        issues: s.error?.issues
                    };
                } catch  {
                    return Wfa(t, r).then((o)=>o.success ? {
                            value: o.data
                        } : {
                            issues: o.error?.issues
                        });
                }
            },
            vendor: "zod",
            version: 1
        }));
}), Gpi = ad("$ZodString", (t, e)=>{
    yB.init(t, e), t._zod.pattern = [
        ...t?._zod.bag?.patterns ?? []
    ].pop() ?? a7h(t._zod.bag), t._zod.parse = (n, i)=>{
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
}), D4 = ad("$ZodStringFormat", (t, e)=>{
    Hpi.init(t, e), Gpi.init(t, e);
}), j7h = ad("$ZodGUID", (t, e)=>{
    e.pattern ?? (e.pattern = Z8h), D4.init(t, e);
}), $7h = ad("$ZodUUID", (t, e)=>{
    if (e.version) {
        const i = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        }[e.version];
        if (i === void 0) throw new Error(`Invalid UUID version: "${e.version}"`);
        e.pattern ?? (e.pattern = Gfa(i));
    } else e.pattern ?? (e.pattern = Gfa());
    D4.init(t, e);
}), H7h = ad("$ZodEmail", (t, e)=>{
    e.pattern ?? (e.pattern = Q8h), D4.init(t, e);
}), W7h = ad("$ZodURL", (t, e)=>{
    D4.init(t, e), t._zod.check = (n)=>{
        try {
            const i = n.value.trim(), r = new URL(i);
            e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(r.hostname) || n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: e.hostname.source,
                input: n.value,
                inst: t,
                continue: !e.abort
            })), e.protocol && (e.protocol.lastIndex = 0, e.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: e.protocol.source,
                input: n.value,
                inst: t,
                continue: !e.abort
            })), e.normalize ? n.value = r.href : n.value = i;
            return;
        } catch  {
            n.issues.push({
                code: "invalid_format",
                format: "url",
                input: n.value,
                inst: t,
                continue: !e.abort
            });
        }
    };
}), G7h = ad("$ZodEmoji", (t, e)=>{
    e.pattern ?? (e.pattern = pTS()), D4.init(t, e);
}), q7h = ad("$ZodNanoID", (t, e)=>{
    e.pattern ?? (e.pattern = Y8h), D4.init(t, e);
}), z7h = ad("$ZodCUID", (t, e)=>{
    e.pattern ?? (e.pattern = G8h), D4.init(t, e);
}), V7h = ad("$ZodCUID2", (t, e)=>{
    e.pattern ?? (e.pattern = q8h), D4.init(t, e);
}), K7h = ad("$ZodULID", (t, e)=>{
    e.pattern ?? (e.pattern = z8h), D4.init(t, e);
}), Y7h = ad("$ZodXID", (t, e)=>{
    e.pattern ?? (e.pattern = V8h), D4.init(t, e);
}), X7h = ad("$ZodKSUID", (t, e)=>{
    e.pattern ?? (e.pattern = K8h), D4.init(t, e);
}), Z7h = ad("$ZodISODateTime", (t, e)=>{
    e.pattern ?? (e.pattern = gTS(e)), D4.init(t, e);
}), Q7h = ad("$ZodISODate", (t, e)=>{
    e.pattern ?? (e.pattern = o7h), D4.init(t, e);
}), J7h = ad("$ZodISOTime", (t, e)=>{
    e.pattern ?? (e.pattern = mTS(e)), D4.init(t, e);
}), eUh = ad("$ZodISODuration", (t, e)=>{
    e.pattern ?? (e.pattern = X8h), D4.init(t, e);
}), tUh = ad("$ZodIPv4", (t, e)=>{
    e.pattern ?? (e.pattern = e7h), D4.init(t, e), t._zod.bag.format = "ipv4";
}), nUh = ad("$ZodIPv6", (t, e)=>{
    e.pattern ?? (e.pattern = t7h), D4.init(t, e), t._zod.bag.format = "ipv6", t._zod.check = (n)=>{
        try {
            new URL(`http://[${n.value}]`);
        } catch  {
            n.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: n.value,
                inst: t,
                continue: !e.abort
            });
        }
    };
}), iUh = ad("$ZodCIDRv4", (t, e)=>{
    e.pattern ?? (e.pattern = n7h), D4.init(t, e);
}), rUh = ad("$ZodCIDRv6", (t, e)=>{
    e.pattern ?? (e.pattern = i7h), D4.init(t, e), t._zod.check = (n)=>{
        const i = n.value.split("/");
        try {
            if (i.length !== 2) throw new Error;
            const [r, s] = i;
            if (!s) throw new Error;
            const o = Number(s);
            if (`${o}` !== s) throw new Error;
            if (o < 0 || o > 128) throw new Error;
            new URL(`http://[${r}]`);
        } catch  {
            n.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: n.value,
                inst: t,
                continue: !e.abort
            });
        }
    };
}), sUh = ad("$ZodBase64", (t, e)=>{
    e.pattern ?? (e.pattern = r7h), D4.init(t, e), t._zod.bag.contentEncoding = "base64", t._zod.check = (n)=>{
        A7h(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), oUh = ad("$ZodBase64URL", (t, e)=>{
    e.pattern ?? (e.pattern = qfa), D4.init(t, e), t._zod.bag.contentEncoding = "base64url", t._zod.check = (n)=>{
        fTS(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), aUh = ad("$ZodE164", (t, e)=>{
    e.pattern ?? (e.pattern = s7h), D4.init(t, e);
}), lUh = ad("$ZodJWT", (t, e)=>{
    D4.init(t, e), t._zod.check = (n)=>{
        vTS(n.value, e.alg) || n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), Zfa = ad("$ZodNumber", (t, e)=>{
    yB.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? c7h, t._zod.parse = (n, i)=>{
        if (e.coerce) try {
            n.value = Number(n.value);
        } catch  {}
        const r = n.value;
        if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r)) return n;
        const s = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
        return n.issues.push({
            expected: "number",
            code: "invalid_type",
            input: r,
            inst: t,
            ...s ? {
                received: s
            } : {}
        }), n;
    };
}), cUh = ad("$ZodNumberFormat", (t, e)=>{
    m7h.init(t, e), Zfa.init(t, e);
}), uUh = ad("$ZodBoolean", (t, e)=>{
    yB.init(t, e), t._zod.pattern = u7h, t._zod.parse = (n, i)=>{
        if (e.coerce) try {
            n.value = !!n.value;
        } catch  {}
        const r = n.value;
        return typeof r == "boolean" || n.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), dUh = ad("$ZodUnknown", (t, e)=>{
    yB.init(t, e), t._zod.parse = (n)=>n;
}), hUh = ad("$ZodNever", (t, e)=>{
    yB.init(t, e), t._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: t
        }), n);
}), pUh = ad("$ZodArray", (t, e)=>{
    yB.init(t, e), t._zod.parse = (n, i)=>{
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
            l instanceof Promise ? s.push(l.then((c)=>R7h(c, n, o))) : R7h(l, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), Qfa = ad("$ZodObject", (t, e)=>{
    if (yB.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get) {
        const a = e.shape;
        Object.defineProperty(e, "shape", {
            get: ()=>{
                const l = {
                    ...a
                };
                return Object.defineProperty(e, "shape", {
                    value: l
                }), l;
            }
        });
    }
    const i = Lfa(()=>P7h(e));
    nN(t._zod, "propValues", ()=>{
        const a = e.shape, l = {};
        for(const c in a){
            const u = a[c]._zod;
            if (u.values) {
                l[c] ?? (l[c] = new Set);
                for (const d of u.values)l[c].add(d);
            }
        }
        return l;
    });
    const r = Z5r, s = e.catchall;
    let o;
    t._zod.parse = (a, l)=>{
        o ?? (o = i.value);
        const c = a.value;
        if (!r(c)) return a.issues.push({
            expected: "object",
            code: "invalid_type",
            input: c,
            inst: t
        }), a;
        a.value = {};
        const u = [], d = o.shape;
        for (const h of o.keys){
            const p = d[h], g = p._zod.optout === "optional", f = p._zod.run({
                value: c[h],
                issues: []
            }, l);
            f instanceof Promise ? u.push(f.then((_)=>tFr(_, a, h, c, g))) : tFr(f, a, h, c, g);
        }
        return s ? M7h(u, c, a, l, i.value, t) : u.length ? Promise.all(u).then(()=>a) : a;
    };
}), mUh = ad("$ZodObjectJIT", (t, e)=>{
    Qfa.init(t, e);
    const n = t._zod.parse, i = Lfa(()=>P7h(e)), r = (h)=>{
        const p = new T7h([
            "shape",
            "payload",
            "ctx"
        ]), g = i.value, f = (S)=>{
            const k = I8h(S);
            return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
        p.write("const input = payload.value;");
        const _ = Object.create(null);
        let b = 0;
        for (const S of g.keys)_[S] = `key_${b++}`;
        p.write("const newResult = {};");
        for (const S of g.keys){
            const k = _[S], C = I8h(S), I = h[S]?._zod?.optout === "optional";
            p.write(`const ${k} = ${f(S)};`), I ? p.write(`
        if (${k}.issues.length) {
          if (${C} in input) {
            payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${C}, ...iss.path] : [${C}]
            })));
          }
        }
        
        if (${k}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${k}.value;
        }
        
      `) : p.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${C}, ...iss.path] : [${C}]
          })));
        }
        
        if (${k}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${k}.value;
        }
        
      `);
        }
        p.write("payload.value = newResult;"), p.write("return payload;");
        const y = p.compile();
        return (S, k)=>y(h, S, k);
    };
    let s;
    const o = Z5r, a = !X5r.jitless, c = a && R8h.value, u = e.catchall;
    let d;
    t._zod.parse = (h, p)=>{
        d ?? (d = i.value);
        const g = h.value;
        return o(g) ? a && c && p?.async === !1 && p.jitless !== !0 ? (s || (s = r(e.shape)), h = s(h, p), u ? M7h([], g, h, p, d, t) : h) : n(h, p) : (h.issues.push({
            expected: "object",
            code: "invalid_type",
            input: g,
            inst: t
        }), h);
    };
}), gUh = ad("$ZodUnion", (t, e)=>{
    yB.init(t, e), nN(t._zod, "optin", ()=>e.options.some((r)=>r._zod.optin === "optional") ? "optional" : void 0), nN(t._zod, "optout", ()=>e.options.some((r)=>r._zod.optout === "optional") ? "optional" : void 0), nN(t._zod, "values", ()=>{
        if (e.options.every((r)=>r._zod.values)) return new Set(e.options.flatMap((r)=>Array.from(r._zod.values)));
    }), nN(t._zod, "pattern", ()=>{
        if (e.options.every((r)=>r._zod.pattern)) {
            const r = e.options.map((s)=>s._zod.pattern);
            return new RegExp(`^(${r.map((s)=>Ffa(s.source)).join("|")})$`);
        }
    });
    const n = e.options.length === 1, i = e.options[0]._zod.run;
    t._zod.parse = (r, s)=>{
        if (n) return i(r, s);
        let o = !1;
        const a = [];
        for (const l of e.options){
            const c = l._zod.run({
                value: r.value,
                issues: []
            }, s);
            if (c instanceof Promise) a.push(c), o = !0;
            else {
                if (c.issues.length === 0) return c;
                a.push(c);
            }
        }
        return o ? Promise.all(a).then((l)=>D7h(l, r, t, s)) : D7h(a, r, t, s);
    };
}), fUh = ad("$ZodIntersection", (t, e)=>{
    yB.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value, s = e.left._zod.run({
            value: r,
            issues: []
        }, i), o = e.right._zod.run({
            value: r,
            issues: []
        }, i);
        return s instanceof Promise || o instanceof Promise ? Promise.all([
            s,
            o
        ]).then(([l, c])=>N7h(n, l, c)) : N7h(n, s, o);
    };
}), vUh = ad("$ZodEnum", (t, e)=>{
    yB.init(t, e);
    const n = E8h(e.entries), i = new Set(n);
    t._zod.values = i, t._zod.pattern = new RegExp(`^(${n.filter((r)=>P8h.has(typeof r)).map((r)=>typeof r == "string" ? RSn(r) : r.toString()).join("|")})$`), t._zod.parse = (r, s)=>{
        const o = r.value;
        return i.has(o) || r.issues.push({
            code: "invalid_value",
            values: n,
            input: o,
            inst: t
        }), r;
    };
}), _Uh = ad("$ZodLiteral", (t, e)=>{
    if (yB.init(t, e), e.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const n = new Set(e.values);
    t._zod.values = n, t._zod.pattern = new RegExp(`^(${e.values.map((i)=>typeof i == "string" ? RSn(i) : i ? RSn(i.toString()) : String(i)).join("|")})$`), t._zod.parse = (i, r)=>{
        const s = i.value;
        return n.has(s) || i.issues.push({
            code: "invalid_value",
            values: e.values,
            input: s,
            inst: t
        }), i;
    };
}), bUh = ad("$ZodTransform", (t, e)=>{
    yB.init(t, e), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new Dfa(t.constructor.name);
        const r = e.transform(n.value, n);
        if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((o)=>(n.value = o, n));
        if (r instanceof Promise) throw new pjt;
        return n.value = r, n;
    };
}), Jfa = ad("$ZodOptional", (t, e)=>{
    yB.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", nN(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
            ...e.innerType._zod.values,
            void 0
        ]) : void 0), nN(t._zod, "pattern", ()=>{
        const n = e.innerType._zod.pattern;
        return n ? new RegExp(`^(${Ffa(n.source)})?$`) : void 0;
    }), t._zod.parse = (n, i)=>{
        if (e.innerType._zod.optin === "optional") {
            const r = e.innerType._zod.run(n, i);
            return r instanceof Promise ? r.then((s)=>L7h(s, n.value)) : L7h(r, n.value);
        }
        return n.value === void 0 ? n : e.innerType._zod.run(n, i);
    };
}), yUh = ad("$ZodExactOptional", (t, e)=>{
    Jfa.init(t, e), nN(t._zod, "values", ()=>e.innerType._zod.values), nN(t._zod, "pattern", ()=>e.innerType._zod.pattern), t._zod.parse = (n, i)=>e.innerType._zod.run(n, i);
}), SUh = ad("$ZodNullable", (t, e)=>{
    yB.init(t, e), nN(t._zod, "optin", ()=>e.innerType._zod.optin), nN(t._zod, "optout", ()=>e.innerType._zod.optout), nN(t._zod, "pattern", ()=>{
        const n = e.innerType._zod.pattern;
        return n ? new RegExp(`^(${Ffa(n.source)}|null)$`) : void 0;
    }), nN(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
            ...e.innerType._zod.values,
            null
        ]) : void 0), t._zod.parse = (n, i)=>n.value === null ? n : e.innerType._zod.run(n, i);
}), kUh = ad("$ZodDefault", (t, e)=>{
    yB.init(t, e), t._zod.optin = "optional", nN(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        if (n.value === void 0) return n.value = e.defaultValue, n;
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>O7h(s, e)) : O7h(r, e);
    };
}), wUh = ad("$ZodPrefault", (t, e)=>{
    yB.init(t, e), t._zod.optin = "optional", nN(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>(i.direction === "backward" || n.value === void 0 && (n.value = e.defaultValue), e.innerType._zod.run(n, i));
}), CUh = ad("$ZodNonOptional", (t, e)=>{
    yB.init(t, e), nN(t._zod, "values", ()=>{
        const n = e.innerType._zod.values;
        return n ? new Set([
            ...n
        ].filter((i)=>i !== void 0)) : void 0;
    }), t._zod.parse = (n, i)=>{
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>F7h(s, t)) : F7h(r, t);
    };
}), TUh = ad("$ZodCatch", (t, e)=>{
    yB.init(t, e), nN(t._zod, "optin", ()=>e.innerType._zod.optin), nN(t._zod, "optout", ()=>e.innerType._zod.optout), nN(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>(n.value = s.value, s.issues.length && (n.value = e.catchValue({
                ...n,
                error: {
                    issues: s.issues.map((o)=>gjt(o, i, hjt()))
                },
                input: n.value
            }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = e.catchValue({
            ...n,
            error: {
                issues: r.issues.map((s)=>gjt(s, i, hjt()))
            },
            input: n.value
        }), n.issues = []), n);
    };
}), EUh = ad("$ZodPipe", (t, e)=>{
    yB.init(t, e), nN(t._zod, "values", ()=>e.in._zod.values), nN(t._zod, "optin", ()=>e.in._zod.optin), nN(t._zod, "optout", ()=>e.out._zod.optout), nN(t._zod, "propValues", ()=>e.in._zod.propValues), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") {
            const s = e.out._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>nFr(o, e.in, i)) : nFr(s, e.in, i);
        }
        const r = e.in._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>nFr(s, e.out, i)) : nFr(r, e.out, i);
    };
}), IUh = ad("$ZodReadonly", (t, e)=>{
    yB.init(t, e), nN(t._zod, "propValues", ()=>e.innerType._zod.propValues), nN(t._zod, "values", ()=>e.innerType._zod.values), nN(t._zod, "optin", ()=>e.innerType?._zod?.optin), nN(t._zod, "optout", ()=>e.innerType?._zod?.optout), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then(B7h) : B7h(r);
    };
}), xUh = ad("$ZodCustom", (t, e)=>{
    Bhe.init(t, e), yB.init(t, e), t._zod.parse = (n, i)=>n, t._zod.check = (n)=>{
        const i = n.value, r = e.fn(i);
        if (r instanceof Promise) return r.then((s)=>U7h(s, n, i, t));
        U7h(r, n, i, t);
    };
});

}
