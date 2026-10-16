import { D4s, K4s, M4s, S2, y8t } from "./checks_4.js";
import { KIn, QZe, qIn, zIn } from "./core_4.js";
import { Y4s, a_u } from "./doc_3.js";
import { $Bi, $bt, Avu, BBi, Dvu, FBi, Hbt, K6e, Lve, Mvu, S_u, T0e, To, UBi, YIn, Z4s, _Bi, __u, b_u, d_u, f_u, g8t, g_u, h_u, j6s, k_u, l_u, m_u, p_u, q6s, rX, u_u, vC, v_u, w_u, y_u } from "./f0s.js";
import { CBi, Ivu, JIn, QIn, eAn } from "./parse_8.js";
import { C4s, Gbt, I4s, LBi, PBi, S4s, T4s, a4s, b4s, c4s, d4s, f4s, g4s, h4s, i4s, l4s, m4s, n4s, o4s, p4s, r4s, s4s, t4s, v4s, w4s, y4s } from "./regexes_3.js";
import { x } from "./tslib.es6.js";
import { Fv, K6s, Y6s, ZIn } from "./util_3.js";
import { X4s, c_u } from "./versions_3.js";
var wS, Vbt, BM, J4s, eUs, tUs, nUs, iUs, rUs, sUs, oUs, aUs, cUs, lUs, uUs, dUs, hUs, pUs, mUs, gUs, fUs, vUs, _Us, bUs, yUs, SUs, kUs, wUs, iAn, WBi, rAn, GBi, CUs, TUs, EUs, xUs, IUs, VBi, AUs, RUs, DUs, jBi, qBi, MUs, sAn, PUs, zBi, LUs, KBi, YBi, NUs, OUs, XBi, ZBi, FUs, QBi, oAn, JBi, e5i, BUs, UUs, $Us, HUs, WUs, GUs, t5i, n5i, VUs, jUs, qUs, zUs, KUs, i5i;
export { $Us, AUs, BM, BUs, CUs, DUs, EUs, FUs, GBi, GUs, HUs, IUs, J4s, JBi, KBi, KUs, LUs, MUs, NUs, OUs, PUs, QBi, RUs, SUs, TUs, UUs, VBi, VUs, Vbt, WBi, WUs, XBi, YBi, ZBi, _Us, aUs, bUs, cUs, dUs, e5i, eUs, fUs, gUs, hUs, i5i, iAn, iUs, jBi, jUs, kUs, lUs, mUs, n5i, nUs, oAn, oUs, pUs, qBi, qUs, rAn, rUs, sAn, sUs, t5i, tUs, uUs, vUs, wS, wUs, xUs, yUs, zBi, zUs };
var __wakaru_C_u_initialized = false;
export function C_u() {
if (__wakaru_C_u_initialized) return;
__wakaru_C_u_initialized = true;
x(), K4s(), KIn(), a_u(), Ivu(), I4s(), Fv(), c_u(), Fv(), wS = To("$ZodType", (e, t)=>{
    var n;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = X4s;
    const i = [
        ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (const r of i)for (const s of r._zod.onattach)s(e);
    if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(()=>{
        e._zod.run = e._zod.parse;
    });
    else {
        const r = (o, a, c)=>{
            let l = Hbt(o), u;
            for (const h of a){
                if (h._zod.def.when) {
                    if (!h._zod.def.when(o)) continue;
                } else if (l) continue;
                const p = o.issues.length, g = h._zod.check(o);
                if (g instanceof Promise && c?.async === !1) throw new QZe;
                if (u || g instanceof Promise) u = (u ?? Promise.resolve()).then(async ()=>{
                    await g, o.issues.length !== p && (l || (l = Hbt(o, p)));
                });
                else {
                    if (o.issues.length === p) continue;
                    l || (l = Hbt(o, p));
                }
            }
            return u ? u.then(()=>o) : o;
        }, s = (o, a, c)=>{
            if (Hbt(o)) return o.aborted = !0, o;
            const l = r(a, i, c);
            if (l instanceof Promise) {
                if (c.async === !1) throw new QZe;
                return l.then((u)=>e._zod.parse(u, c));
            }
            return e._zod.parse(l, c);
        };
        e._zod.run = (o, a)=>{
            if (a.skipChecks) return e._zod.parse(o, a);
            if (a.direction === "backward") {
                const l = e._zod.parse({
                    value: o.value,
                    issues: []
                }, {
                    ...a,
                    skipChecks: !0
                });
                return l instanceof Promise ? l.then((u)=>s(u, o, a)) : s(l, o, a);
            }
            const c = e._zod.parse(o, a);
            if (c instanceof Promise) {
                if (a.async === !1) throw new QZe;
                return c.then((l)=>r(l, i, a));
            }
            return r(c, i, a);
        };
    }
    vC(e, "~standard", ()=>({
            validate: (r)=>{
                try {
                    const s = eAn(e, r);
                    return s.success ? {
                        value: s.data
                    } : {
                        issues: s.error?.issues
                    };
                } catch  {
                    return CBi(e, r).then((o)=>o.success ? {
                            value: o.data
                        } : {
                            issues: o.error?.issues
                        });
                }
            },
            vendor: "zod",
            version: 1
        }));
}), Vbt = To("$ZodString", (e, t)=>{
    wS.init(e, t), e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? y4s(e._zod.bag), e._zod.parse = (n, i)=>{
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
}), BM = To("$ZodStringFormat", (e, t)=>{
    y8t.init(e, t), Vbt.init(e, t);
}), J4s = To("$ZodGUID", (e, t)=>{
    t.pattern ?? (t.pattern = c4s), BM.init(e, t);
}), eUs = To("$ZodUUID", (e, t)=>{
    if (t.version) {
        const i = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        }[t.version];
        if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
        t.pattern ?? (t.pattern = Gbt(i));
    } else t.pattern ?? (t.pattern = Gbt());
    BM.init(e, t);
}), tUs = To("$ZodEmail", (e, t)=>{
    t.pattern ?? (t.pattern = l4s), BM.init(e, t);
}), nUs = To("$ZodURL", (e, t)=>{
    BM.init(e, t), e._zod.check = (n)=>{
        try {
            const i = n.value.trim(), r = new URL(i);
            t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(r.hostname) || n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: t.hostname.source,
                input: n.value,
                inst: e,
                continue: !t.abort
            })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || n.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: n.value,
                inst: e,
                continue: !t.abort
            })), t.normalize ? n.value = r.href : n.value = i;
            return;
        } catch  {
            n.issues.push({
                code: "invalid_format",
                format: "url",
                input: n.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
}), iUs = To("$ZodEmoji", (e, t)=>{
    t.pattern ?? (t.pattern = Avu()), BM.init(e, t);
}), rUs = To("$ZodNanoID", (e, t)=>{
    t.pattern ?? (t.pattern = o4s), BM.init(e, t);
}), sUs = To("$ZodCUID", (e, t)=>{
    t.pattern ?? (t.pattern = t4s), BM.init(e, t);
}), oUs = To("$ZodCUID2", (e, t)=>{
    t.pattern ?? (t.pattern = n4s), BM.init(e, t);
}), aUs = To("$ZodULID", (e, t)=>{
    t.pattern ?? (t.pattern = i4s), BM.init(e, t);
}), cUs = To("$ZodXID", (e, t)=>{
    t.pattern ?? (t.pattern = r4s), BM.init(e, t);
}), lUs = To("$ZodKSUID", (e, t)=>{
    t.pattern ?? (t.pattern = s4s), BM.init(e, t);
}), uUs = To("$ZodISODateTime", (e, t)=>{
    t.pattern ?? (t.pattern = Mvu(t)), BM.init(e, t);
}), dUs = To("$ZodISODate", (e, t)=>{
    t.pattern ?? (t.pattern = b4s), BM.init(e, t);
}), hUs = To("$ZodISOTime", (e, t)=>{
    t.pattern ?? (t.pattern = Dvu(t)), BM.init(e, t);
}), pUs = To("$ZodISODuration", (e, t)=>{
    t.pattern ?? (t.pattern = a4s), BM.init(e, t);
}), mUs = To("$ZodIPv4", (e, t)=>{
    t.pattern ?? (t.pattern = d4s), BM.init(e, t), e._zod.bag.format = "ipv4";
}), gUs = To("$ZodIPv6", (e, t)=>{
    t.pattern ?? (t.pattern = h4s), BM.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n)=>{
        try {
            new URL(`http://[${n.value}]`);
        } catch  {
            n.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: n.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
}), fUs = To("$ZodMAC", (e, t)=>{
    t.pattern ?? (t.pattern = p4s(t.delimiter)), BM.init(e, t), e._zod.bag.format = "mac";
}), vUs = To("$ZodCIDRv4", (e, t)=>{
    t.pattern ?? (t.pattern = m4s), BM.init(e, t);
}), _Us = To("$ZodCIDRv6", (e, t)=>{
    t.pattern ?? (t.pattern = g4s), BM.init(e, t), e._zod.check = (n)=>{
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
                inst: e,
                continue: !t.abort
            });
        }
    };
}), bUs = To("$ZodBase64", (e, t)=>{
    t.pattern ?? (t.pattern = f4s), BM.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n)=>{
        Z4s(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64",
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
}), yUs = To("$ZodBase64URL", (e, t)=>{
    t.pattern ?? (t.pattern = PBi), BM.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n)=>{
        l_u(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
}), SUs = To("$ZodE164", (e, t)=>{
    t.pattern ?? (t.pattern = v4s), BM.init(e, t);
}), kUs = To("$ZodJWT", (e, t)=>{
    BM.init(e, t), e._zod.check = (n)=>{
        u_u(n.value, t.alg) || n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
}), wUs = To("$ZodCustomStringFormat", (e, t)=>{
    BM.init(e, t), e._zod.check = (n)=>{
        t.fn(n.value) || n.issues.push({
            code: "invalid_format",
            format: t.format,
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
}), iAn = To("$ZodNumber", (e, t)=>{
    wS.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? LBi, e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = Number(n.value);
        } catch  {}
        const r = n.value;
        if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r)) return n;
        const s = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
        return n.issues.push({
            expected: "number",
            code: "invalid_type",
            input: r,
            inst: e,
            ...s ? {
                received: s
            } : {}
        }), n;
    };
}), WBi = To("$ZodNumberFormat", (e, t)=>{
    D4s.init(e, t), iAn.init(e, t);
}), rAn = To("$ZodBoolean", (e, t)=>{
    wS.init(e, t), e._zod.pattern = w4s, e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = !!n.value;
        } catch  {}
        const r = n.value;
        return typeof r == "boolean" || n.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), GBi = To("$ZodBigInt", (e, t)=>{
    wS.init(e, t), e._zod.pattern = S4s, e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = BigInt(n.value);
        } catch  {}
        return typeof n.value == "bigint" || n.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n;
    };
}), CUs = To("$ZodBigIntFormat", (e, t)=>{
    M4s.init(e, t), GBi.init(e, t);
}), TUs = To("$ZodSymbol", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r == "symbol" || n.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), EUs = To("$ZodUndefined", (e, t)=>{
    wS.init(e, t), e._zod.pattern = T4s, e._zod.values = new Set([
        void 0
    ]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r > "u" || n.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), xUs = To("$ZodNull", (e, t)=>{
    wS.init(e, t), e._zod.pattern = C4s, e._zod.values = new Set([
        null
    ]), e._zod.parse = (n, i)=>{
        const r = n.value;
        return r === null || n.issues.push({
            expected: "null",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), IUs = To("$ZodAny", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n)=>n;
}), VBi = To("$ZodUnknown", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n)=>n;
}), AUs = To("$ZodNever", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: e
        }), n);
}), RUs = To("$ZodVoid", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r > "u" || n.issues.push({
            expected: "void",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), DUs = To("$ZodDate", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        if (t.coerce) try {
            n.value = new Date(n.value);
        } catch  {}
        const r = n.value, s = r instanceof Date;
        return s && !Number.isNaN(r.getTime()) || n.issues.push({
            expected: "date",
            code: "invalid_type",
            input: r,
            ...s ? {
                received: "Invalid Date"
            } : {},
            inst: e
        }), n;
    };
}), jBi = To("$ZodArray", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
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
            c instanceof Promise ? s.push(c.then((l)=>d_u(l, n, o))) : d_u(c, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), qBi = To("$ZodObject", (e, t)=>{
    if (wS.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
        const a = t.shape;
        Object.defineProperty(t, "shape", {
            get: ()=>{
                const c = {
                    ...a
                };
                return Object.defineProperty(t, "shape", {
                    value: c
                }), c;
            }
        });
    }
    const i = YIn(()=>h_u(t));
    vC(e._zod, "propValues", ()=>{
        const a = t.shape, c = {};
        for(const l in a){
            const u = a[l]._zod;
            if (u.values) {
                c[l] ?? (c[l] = new Set);
                for (const h of u.values)c[l].add(h);
            }
        }
        return c;
    });
    const r = g8t, s = t.catchall;
    let o;
    e._zod.parse = (a, c)=>{
        o ?? (o = i.value);
        const l = a.value;
        if (!r(l)) return a.issues.push({
            expected: "object",
            code: "invalid_type",
            input: l,
            inst: e
        }), a;
        a.value = {};
        const u = [], h = o.shape;
        for (const p of o.keys){
            const g = h[p], f = g._zod.optout === "optional", v = g._zod.run({
                value: l[p],
                issues: []
            }, c);
            v instanceof Promise ? u.push(v.then((b)=>FBi(b, a, p, l, f))) : FBi(v, a, p, l, f);
        }
        return s ? p_u(u, l, a, c, i.value, e) : u.length ? Promise.all(u).then(()=>a) : a;
    };
}), MUs = To("$ZodObjectJIT", (e, t)=>{
    qBi.init(e, t);
    const n = e._zod.parse, i = YIn(()=>h_u(t)), r = (p)=>{
        const g = new Y4s([
            "shape",
            "payload",
            "ctx"
        ]), f = i.value, v = (E)=>{
            const A = q6s(E);
            return `shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`;
        };
        g.write("const input = payload.value;");
        const b = Object.create(null);
        let y = 0;
        for (const E of f.keys)b[E] = `key_${y++}`;
        g.write("const newResult = {};");
        for (const E of f.keys){
            const A = b[E], R = q6s(E), P = p[E]?._zod?.optout === "optional";
            g.write(`const ${A} = ${v(E)};`), P ? g.write(`
        if (${A}.issues.length) {
          if (${R} in input) {
            payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${R}, ...iss.path] : [${R}]
            })));
          }
        }
        
        if (${A}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${A}.value;
        }
        
      `) : g.write(`
        if (${A}.issues.length) {
          payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${R}, ...iss.path] : [${R}]
          })));
        }
        
        if (${A}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${A}.value;
        }
        
      `);
        }
        g.write("payload.value = newResult;"), g.write("return payload;");
        const T = g.compile();
        return (E, A)=>T(p, E, A);
    };
    let s;
    const o = g8t, a = !zIn.jitless, l = a && K6s.value, u = t.catchall;
    let h;
    e._zod.parse = (p, g)=>{
        h ?? (h = i.value);
        const f = p.value;
        return o(f) ? a && l && g?.async === !1 && g.jitless !== !0 ? (s || (s = r(t.shape)), p = s(p, g), u ? p_u([], f, p, g, h, e) : p) : n(p, g) : (p.issues.push({
            expected: "object",
            code: "invalid_type",
            input: f,
            inst: e
        }), p);
    };
}), sAn = To("$ZodUnion", (e, t)=>{
    wS.init(e, t), vC(e._zod, "optin", ()=>t.options.some((r)=>r._zod.optin === "optional") ? "optional" : void 0), vC(e._zod, "optout", ()=>t.options.some((r)=>r._zod.optout === "optional") ? "optional" : void 0), vC(e._zod, "values", ()=>{
        if (t.options.every((r)=>r._zod.values)) return new Set(t.options.flatMap((r)=>Array.from(r._zod.values)));
    }), vC(e._zod, "pattern", ()=>{
        if (t.options.every((r)=>r._zod.pattern)) {
            const r = t.options.map((s)=>s._zod.pattern);
            return new RegExp(`^(${r.map((s)=>_Bi(s.source)).join("|")})$`);
        }
    });
    const n = t.options.length === 1, i = t.options[0]._zod.run;
    e._zod.parse = (r, s)=>{
        if (n) return i(r, s);
        let o = !1;
        const a = [];
        for (const c of t.options){
            const l = c._zod.run({
                value: r.value,
                issues: []
            }, s);
            if (l instanceof Promise) a.push(l), o = !0;
            else {
                if (l.issues.length === 0) return l;
                a.push(l);
            }
        }
        return o ? Promise.all(a).then((c)=>m_u(c, r, e, s)) : m_u(a, r, e, s);
    };
}), PUs = To("$ZodXor", (e, t)=>{
    sAn.init(e, t), t.inclusive = !1;
    const n = t.options.length === 1, i = t.options[0]._zod.run;
    e._zod.parse = (r, s)=>{
        if (n) return i(r, s);
        let o = !1;
        const a = [];
        for (const c of t.options){
            const l = c._zod.run({
                value: r.value,
                issues: []
            }, s);
            l instanceof Promise ? (a.push(l), o = !0) : a.push(l);
        }
        return o ? Promise.all(a).then((c)=>g_u(c, r, e, s)) : g_u(a, r, e, s);
    };
}), zBi = To("$ZodDiscriminatedUnion", (e, t)=>{
    t.inclusive = !1, sAn.init(e, t);
    const n = e._zod.parse;
    vC(e._zod, "propValues", ()=>{
        const r = {};
        for (const s of t.options){
            const o = s._zod.propValues;
            if (!o || Object.keys(o).length === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
            for (const [a, c] of Object.entries(o)){
                r[a] || (r[a] = new Set);
                for (const l of c)r[a].add(l);
            }
        }
        return r;
    });
    const i = YIn(()=>{
        const r = t.options, s = new Map;
        for (const o of r){
            const a = o._zod.propValues?.[t.discriminator];
            if (!a || a.size === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
            for (const c of a){
                if (s.has(c)) throw new Error(`Duplicate discriminator value "${String(c)}"`);
                s.set(c, o);
            }
        }
        return s;
    });
    e._zod.parse = (r, s)=>{
        const o = r.value;
        if (!g8t(o)) return r.issues.push({
            code: "invalid_type",
            expected: "object",
            input: o,
            inst: e
        }), r;
        const a = i.value.get(o?.[t.discriminator]);
        return a ? a._zod.run(r, s) : t.unionFallback ? n(r, s) : (r.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: t.discriminator,
            input: o,
            path: [
                t.discriminator
            ],
            inst: e
        }), r);
    };
}), LUs = To("$ZodIntersection", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value, s = t.left._zod.run({
            value: r,
            issues: []
        }, i), o = t.right._zod.run({
            value: r,
            issues: []
        }, i);
        return s instanceof Promise || o instanceof Promise ? Promise.all([
            s,
            o
        ]).then(([c, l])=>f_u(n, c, l)) : f_u(n, s, o);
    };
}), KBi = To("$ZodTuple", (e, t)=>{
    wS.init(e, t);
    const n = t.items;
    e._zod.parse = (i, r)=>{
        const s = i.value;
        if (!Array.isArray(s)) return i.issues.push({
            input: s,
            inst: e,
            expected: "tuple",
            code: "invalid_type"
        }), i;
        i.value = [];
        const o = [], a = [
            ...n
        ].reverse().findIndex((u)=>u._zod.optin !== "optional"), c = a === -1 ? 0 : n.length - a;
        if (!t.rest) {
            const u = s.length > n.length, h = s.length < c - 1;
            if (u || h) return i.issues.push({
                ...u ? {
                    code: "too_big",
                    maximum: n.length,
                    inclusive: !0
                } : {
                    code: "too_small",
                    minimum: n.length
                },
                input: s,
                inst: e,
                origin: "array"
            }), i;
        }
        let l = -1;
        for (const u of n){
            if (l++, l >= s.length && l >= c) continue;
            const h = u._zod.run({
                value: s[l],
                issues: []
            }, r);
            h instanceof Promise ? o.push(h.then((p)=>BBi(p, i, l))) : BBi(h, i, l);
        }
        if (t.rest) {
            const u = s.slice(n.length);
            for (const h of u){
                l++;
                const p = t.rest._zod.run({
                    value: h,
                    issues: []
                }, r);
                p instanceof Promise ? o.push(p.then((g)=>BBi(g, i, l))) : BBi(p, i, l);
            }
        }
        return o.length ? Promise.all(o).then(()=>i) : i;
    };
}), YBi = To("$ZodRecord", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!$bt(r)) return n.issues.push({
            expected: "record",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
        const s = [], o = t.keyType._zod.values;
        if (o) {
            n.value = {};
            const a = new Set;
            for (const l of o)if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
                a.add(typeof l == "number" ? l.toString() : l);
                const u = t.valueType._zod.run({
                    value: r[l],
                    issues: []
                }, i);
                u instanceof Promise ? s.push(u.then((h)=>{
                    h.issues.length && n.issues.push(...T0e(l, h.issues)), n.value[l] = h.value;
                })) : (u.issues.length && n.issues.push(...T0e(l, u.issues)), n.value[l] = u.value);
            }
            let c;
            for(const l in r)a.has(l) || (c = c ?? [], c.push(l));
            c && c.length > 0 && n.issues.push({
                code: "unrecognized_keys",
                input: r,
                inst: e,
                keys: c
            });
        } else {
            n.value = {};
            for (const a of Reflect.ownKeys(r)){
                if (a === "__proto__") continue;
                let c = t.keyType._zod.run({
                    value: a,
                    issues: []
                }, i);
                if (c instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (typeof a == "string" && LBi.test(a) && c.issues.length) {
                    const h = t.keyType._zod.run({
                        value: Number(a),
                        issues: []
                    }, i);
                    if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                    h.issues.length === 0 && (c = h);
                }
                if (c.issues.length) {
                    t.mode === "loose" ? n.value[a] = r[a] : n.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: c.issues.map((h)=>Lve(h, i, rX())),
                        input: a,
                        path: [
                            a
                        ],
                        inst: e
                    });
                    continue;
                }
                const u = t.valueType._zod.run({
                    value: r[a],
                    issues: []
                }, i);
                u instanceof Promise ? s.push(u.then((h)=>{
                    h.issues.length && n.issues.push(...T0e(a, h.issues)), n.value[c.value] = h.value;
                })) : (u.issues.length && n.issues.push(...T0e(a, u.issues)), n.value[c.value] = u.value);
            }
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), NUs = To("$ZodMap", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!(r instanceof Map)) return n.issues.push({
            expected: "map",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
        const s = [];
        n.value = new Map;
        for (const [o, a] of r){
            const c = t.keyType._zod.run({
                value: o,
                issues: []
            }, i), l = t.valueType._zod.run({
                value: a,
                issues: []
            }, i);
            c instanceof Promise || l instanceof Promise ? s.push(Promise.all([
                c,
                l
            ]).then(([u, h])=>{
                v_u(u, h, n, o, r, e, i);
            })) : v_u(c, l, n, o, r, e, i);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), OUs = To("$ZodSet", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        if (!(r instanceof Set)) return n.issues.push({
            input: r,
            inst: e,
            expected: "set",
            code: "invalid_type"
        }), n;
        const s = [];
        n.value = new Set;
        for (const o of r){
            const a = t.valueType._zod.run({
                value: o,
                issues: []
            }, i);
            a instanceof Promise ? s.push(a.then((c)=>__u(c, n))) : __u(a, n);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), XBi = To("$ZodEnum", (e, t)=>{
    wS.init(e, t);
    const n = j6s(t.entries), i = new Set(n);
    e._zod.values = i, e._zod.pattern = new RegExp(`^(${n.filter((r)=>ZIn.has(typeof r)).map((r)=>typeof r == "string" ? K6e(r) : r.toString()).join("|")})$`), e._zod.parse = (r, s)=>{
        const o = r.value;
        return i.has(o) || r.issues.push({
            code: "invalid_value",
            values: n,
            input: o,
            inst: e
        }), r;
    };
}), ZBi = To("$ZodLiteral", (e, t)=>{
    if (wS.init(e, t), t.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const n = new Set(t.values);
    e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((i)=>typeof i == "string" ? K6e(i) : i ? K6e(i.toString()) : String(i)).join("|")})$`), e._zod.parse = (i, r)=>{
        const s = i.value;
        return n.has(s) || i.issues.push({
            code: "invalid_value",
            values: t.values,
            input: s,
            inst: e
        }), i;
    };
}), FUs = To("$ZodFile", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        const r = n.value;
        return r instanceof File || n.issues.push({
            expected: "file",
            code: "invalid_type",
            input: r,
            inst: e
        }), n;
    };
}), QBi = To("$ZodTransform", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new qIn(e.constructor.name);
        const r = t.transform(n.value, n);
        if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((o)=>(n.value = o, n));
        if (r instanceof Promise) throw new QZe;
        return n.value = r, n;
    };
}), oAn = To("$ZodOptional", (e, t)=>{
    wS.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", vC(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            void 0
        ]) : void 0), vC(e._zod, "pattern", ()=>{
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${_Bi(n.source)})?$`) : void 0;
    }), e._zod.parse = (n, i)=>{
        if (t.innerType._zod.optin === "optional") {
            const r = t.innerType._zod.run(n, i);
            return r instanceof Promise ? r.then((s)=>b_u(s, n.value)) : b_u(r, n.value);
        }
        return n.value === void 0 ? n : t.innerType._zod.run(n, i);
    };
}), JBi = To("$ZodExactOptional", (e, t)=>{
    oAn.init(e, t), vC(e._zod, "values", ()=>t.innerType._zod.values), vC(e._zod, "pattern", ()=>t.innerType._zod.pattern), e._zod.parse = (n, i)=>t.innerType._zod.run(n, i);
}), e5i = To("$ZodNullable", (e, t)=>{
    wS.init(e, t), vC(e._zod, "optin", ()=>t.innerType._zod.optin), vC(e._zod, "optout", ()=>t.innerType._zod.optout), vC(e._zod, "pattern", ()=>{
        const n = t.innerType._zod.pattern;
        return n ? new RegExp(`^(${_Bi(n.source)}|null)$`) : void 0;
    }), vC(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            null
        ]) : void 0), e._zod.parse = (n, i)=>n.value === null ? n : t.innerType._zod.run(n, i);
}), BUs = To("$ZodDefault", (e, t)=>{
    wS.init(e, t), e._zod.optin = "optional", vC(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        if (n.value === void 0) return n.value = t.defaultValue, n;
        const r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>y_u(s, t)) : y_u(r, t);
    };
}), UUs = To("$ZodPrefault", (e, t)=>{
    wS.init(e, t), e._zod.optin = "optional", vC(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (n, i)=>(i.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, i));
}), $Us = To("$ZodNonOptional", (e, t)=>{
    wS.init(e, t), vC(e._zod, "values", ()=>{
        const n = t.innerType._zod.values;
        return n ? new Set([
            ...n
        ].filter((i)=>i !== void 0)) : void 0;
    }), e._zod.parse = (n, i)=>{
        const r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>S_u(s, e)) : S_u(r, e);
    };
}), HUs = To("$ZodSuccess", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new qIn("ZodSuccess");
        const r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>(n.value = s.issues.length === 0, n)) : (n.value = r.issues.length === 0, n);
    };
}), WUs = To("$ZodCatch", (e, t)=>{
    wS.init(e, t), vC(e._zod, "optin", ()=>t.innerType._zod.optin), vC(e._zod, "optout", ()=>t.innerType._zod.optout), vC(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        const r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>(n.value = s.value, s.issues.length && (n.value = t.catchValue({
                ...n,
                error: {
                    issues: s.issues.map((o)=>Lve(o, i, rX()))
                },
                input: n.value
            }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
            ...n,
            error: {
                issues: r.issues.map((s)=>Lve(s, i, rX()))
            },
            input: n.value
        }), n.issues = []), n);
    };
}), GUs = To("$ZodNaN", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>((typeof n.value != "number" || !Number.isNaN(n.value)) && n.issues.push({
            input: n.value,
            inst: e,
            expected: "nan",
            code: "invalid_type"
        }), n);
}), t5i = To("$ZodPipe", (e, t)=>{
    wS.init(e, t), vC(e._zod, "values", ()=>t.in._zod.values), vC(e._zod, "optin", ()=>t.in._zod.optin), vC(e._zod, "optout", ()=>t.out._zod.optout), vC(e._zod, "propValues", ()=>t.in._zod.propValues), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") {
            const s = t.out._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>UBi(o, t.in, i)) : UBi(s, t.in, i);
        }
        const r = t.in._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>UBi(s, t.out, i)) : UBi(r, t.out, i);
    };
}), n5i = To("$ZodCodec", (e, t)=>{
    wS.init(e, t), vC(e._zod, "values", ()=>t.in._zod.values), vC(e._zod, "optin", ()=>t.in._zod.optin), vC(e._zod, "optout", ()=>t.out._zod.optout), vC(e._zod, "propValues", ()=>t.in._zod.propValues), e._zod.parse = (n, i)=>{
        if ((i.direction || "forward") === "forward") {
            const s = t.in._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>$Bi(o, t, i)) : $Bi(s, t, i);
        } else {
            const s = t.out._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>$Bi(o, t, i)) : $Bi(s, t, i);
        }
    };
}), VUs = To("$ZodReadonly", (e, t)=>{
    wS.init(e, t), vC(e._zod, "propValues", ()=>t.innerType._zod.propValues), vC(e._zod, "values", ()=>t.innerType._zod.values), vC(e._zod, "optin", ()=>t.innerType?._zod?.optin), vC(e._zod, "optout", ()=>t.innerType?._zod?.optout), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") return t.innerType._zod.run(n, i);
        const r = t.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then(k_u) : k_u(r);
    };
}), jUs = To("$ZodTemplateLiteral", (e, t)=>{
    wS.init(e, t);
    const n = [];
    for (const i of t.parts)if (typeof i == "object" && i !== null) {
        if (!i._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[
            ...i._zod.traits
        ].shift()}`);
        const r = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!r) throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        const s = r.startsWith("^") ? 1 : 0, o = r.endsWith("$") ? r.length - 1 : r.length;
        n.push(r.slice(s, o));
    } else if (i === null || Y6s.has(typeof i)) n.push(K6e(`${i}`));
    else throw new Error(`Invalid template literal part: ${i}`);
    e._zod.pattern = new RegExp(`^${n.join("")}$`), e._zod.parse = (i, r)=>typeof i.value != "string" ? (i.issues.push({
            input: i.value,
            inst: e,
            expected: "string",
            code: "invalid_type"
        }), i) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(i.value) || i.issues.push({
            input: i.value,
            inst: e,
            code: "invalid_format",
            format: t.format ?? "template_literal",
            pattern: e._zod.pattern.source
        }), i);
}), qUs = To("$ZodFunction", (e, t)=>(wS.init(e, t), e._def = t, e._zod.def = t, e.implement = (n)=>{
        if (typeof n != "function") throw new Error("implement() must be called with a function");
        return function(...i) {
            const r = e._def.input ? QIn(e._def.input, i) : i, s = Reflect.apply(n, this, r);
            return e._def.output ? QIn(e._def.output, s) : s;
        };
    }, e.implementAsync = (n)=>{
        if (typeof n != "function") throw new Error("implementAsync() must be called with a function");
        return async function(...i) {
            const r = e._def.input ? await JIn(e._def.input, i) : i, s = await Reflect.apply(n, this, r);
            return e._def.output ? await JIn(e._def.output, s) : s;
        };
    }, e._zod.parse = (n, i)=>typeof n.value != "function" ? (n.issues.push({
            code: "invalid_type",
            expected: "function",
            input: n.value,
            inst: e
        }), n) : (e._def.output && e._def.output._zod.def.type === "promise" ? n.value = e.implementAsync(n.value) : n.value = e.implement(n.value), n), e.input = (...n)=>{
        const i = e.constructor;
        return Array.isArray(n[0]) ? new i({
            type: "function",
            input: new KBi({
                type: "tuple",
                items: n[0],
                rest: n[1]
            }),
            output: e._def.output
        }) : new i({
            type: "function",
            input: n[0],
            output: e._def.output
        });
    }, e.output = (n)=>{
        const i = e.constructor;
        return new i({
            type: "function",
            input: e._def.input,
            output: n
        });
    }, e)), zUs = To("$ZodPromise", (e, t)=>{
    wS.init(e, t), e._zod.parse = (n, i)=>Promise.resolve(n.value).then((r)=>t.innerType._zod.run({
                value: r,
                issues: []
            }, i));
}), KUs = To("$ZodLazy", (e, t)=>{
    wS.init(e, t), vC(e._zod, "innerType", ()=>t.getter()), vC(e._zod, "pattern", ()=>e._zod.innerType?._zod?.pattern), vC(e._zod, "propValues", ()=>e._zod.innerType?._zod?.propValues), vC(e._zod, "optin", ()=>e._zod.innerType?._zod?.optin ?? void 0), vC(e._zod, "optout", ()=>e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (n, i)=>e._zod.innerType._zod.run(n, i);
}), i5i = To("$ZodCustom", (e, t)=>{
    S2.init(e, t), wS.init(e, t), e._zod.parse = (n, i)=>n, e._zod.check = (n)=>{
        const i = n.value, r = t.fn(i);
        if (r instanceof Promise) return r.then((s)=>w_u(s, n, i, e));
        w_u(r, n, i, e);
    };
});

}
