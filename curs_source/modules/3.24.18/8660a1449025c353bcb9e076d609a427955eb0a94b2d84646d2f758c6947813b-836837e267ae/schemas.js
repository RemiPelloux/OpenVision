import { $6t, Crd, Dfr, Fse, H6t, Mfr, Nfr, Pa, Pet, Pfr, Trd, asd, axo, cE, csd, dQn, dsd, fsd, gsd, hfr, hsd, isd, krd, lsd, lxo, msd, nsd, osd, pAe, pAo, phn, psd, rsd, ssd, usd, zOe } from "./SZu.js";
import { Kxo, Vxo, _hn, f4, uAo } from "./checks.js";
import { __t, cQn, lQn, uQn } from "./core.js";
import { dAo, esd } from "./doc.js";
import { Srd, _fr, fQn, gQn, mQn } from "./parse.js";
import { $xo, Axo, Cxo, Dxo, Fxo, G6t, Gxo, Ifr, Ixo, Lxo, Mxo, Oxo, Pxo, Rxo, Sxo, Txo, Uxo, _xo, bxo, jxo, kxo, vxo, wxo, xfr, xxo, yxo } from "./regexes.js";
import { E } from "./tslib.es6.js";
import { dxo, ky, pQn, uxo } from "./util.js";
import { hAo, tsd } from "./versions.js";
var Qw, q6t, cO, gAo, fAo, vAo, _Ao, bAo, yAo, SAo, kAo, wAo, CAo, TAo, EAo, IAo, xAo, AAo, RAo, PAo, MAo, DAo, NAo, LAo, OAo, FAo, BAo, UAo, bQn, Ofr, yQn, Ffr, jAo, $Ao, HAo, WAo, GAo, Bfr, Ufr, qAo, zAo, jfr, $fr, VAo, bhn, KAo, Hfr, YAo, Wfr, Gfr, XAo, ZAo, qfr, zfr, QAo, Vfr, SQn, Kfr, Yfr, JAo, eRo, tRo, nRo, iRo, rRo, Xfr, Zfr, sRo, oRo, aRo, lRo, cRo, Qfr;
export { $Ao, $fr, AAo, BAo, Bfr, CAo, DAo, EAo, FAo, Ffr, GAo, Gfr, HAo, Hfr, IAo, JAo, KAo, Kfr, LAo, MAo, NAo, OAo, Ofr, PAo, QAo, Qfr, Qw, RAo, SAo, SQn, TAo, UAo, Ufr, VAo, Vfr, WAo, Wfr, XAo, Xfr, YAo, Yfr, ZAo, Zfr, _Ao, aRo, bAo, bQn, bhn, cO, cRo, eRo, fAo, gAo, iRo, jAo, jfr, kAo, lRo, nRo, oRo, q6t, qAo, qfr, rRo, sRo, tRo, vAo, wAo, xAo, yAo, yQn, zAo, zfr };
var __wakaru_vsd_initialized = false;
export function vsd() {
if (__wakaru_vsd_initialized) return;
__wakaru_vsd_initialized = true;
E(), uAo(), uQn(), esd(), Srd(), Gxo(), ky(), tsd(), ky(), Qw = Pa("$ZodType", (t, e)=>{
    var n;
    t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = hAo;
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
            let c = H6t(o), u;
            for (const d of a){
                if (d._zod.def.when) {
                    if (!d._zod.def.when(o)) continue;
                } else if (c) continue;
                const h = o.issues.length, p = d._zod.check(o);
                if (p instanceof Promise && l?.async === !1) throw new __t;
                if (u || p instanceof Promise) u = (u ?? Promise.resolve()).then(async ()=>{
                    await p, o.issues.length !== h && (c || (c = H6t(o, h)));
                });
                else {
                    if (o.issues.length === h) continue;
                    c || (c = H6t(o, h));
                }
            }
            return u ? u.then(()=>o) : o;
        }, s = (o, a, l)=>{
            if (H6t(o)) return o.aborted = !0, o;
            const c = r(a, i, l);
            if (c instanceof Promise) {
                if (l.async === !1) throw new __t;
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
                if (a.async === !1) throw new __t;
                return l.then((c)=>r(c, i, a));
            }
            return r(l, i, a);
        };
    }
    cE(t, "~standard", ()=>({
            validate: (r)=>{
                try {
                    const s = fQn(t, r);
                    return s.success ? {
                        value: s.data
                    } : {
                        issues: s.error?.issues
                    };
                } catch  {
                    return _fr(t, r).then((o)=>o.success ? {
                            value: o.data
                        } : {
                            issues: o.error?.issues
                        });
                }
            },
            vendor: "zod",
            version: 1
        }));
}), q6t = Pa("$ZodString", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = [
        ...t?._zod.bag?.patterns ?? []
    ].pop() ?? Oxo(t._zod.bag), t._zod.parse = (n, i)=>{
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
}), cO = Pa("$ZodStringFormat", (t, e)=>{
    _hn.init(t, e), q6t.init(t, e);
}), gAo = Pa("$ZodGUID", (t, e)=>{
    e.pattern ?? (e.pattern = Cxo), cO.init(t, e);
}), fAo = Pa("$ZodUUID", (t, e)=>{
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
        e.pattern ?? (e.pattern = G6t(i));
    } else e.pattern ?? (e.pattern = G6t());
    cO.init(t, e);
}), vAo = Pa("$ZodEmail", (t, e)=>{
    e.pattern ?? (e.pattern = Txo), cO.init(t, e);
}), _Ao = Pa("$ZodURL", (t, e)=>{
    cO.init(t, e), t._zod.check = (n)=>{
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
}), bAo = Pa("$ZodEmoji", (t, e)=>{
    e.pattern ?? (e.pattern = krd()), cO.init(t, e);
}), yAo = Pa("$ZodNanoID", (t, e)=>{
    e.pattern ?? (e.pattern = kxo), cO.init(t, e);
}), SAo = Pa("$ZodCUID", (t, e)=>{
    e.pattern ?? (e.pattern = vxo), cO.init(t, e);
}), kAo = Pa("$ZodCUID2", (t, e)=>{
    e.pattern ?? (e.pattern = _xo), cO.init(t, e);
}), wAo = Pa("$ZodULID", (t, e)=>{
    e.pattern ?? (e.pattern = bxo), cO.init(t, e);
}), CAo = Pa("$ZodXID", (t, e)=>{
    e.pattern ?? (e.pattern = yxo), cO.init(t, e);
}), TAo = Pa("$ZodKSUID", (t, e)=>{
    e.pattern ?? (e.pattern = Sxo), cO.init(t, e);
}), EAo = Pa("$ZodISODateTime", (t, e)=>{
    e.pattern ?? (e.pattern = Trd(e)), cO.init(t, e);
}), IAo = Pa("$ZodISODate", (t, e)=>{
    e.pattern ?? (e.pattern = Lxo), cO.init(t, e);
}), xAo = Pa("$ZodISOTime", (t, e)=>{
    e.pattern ?? (e.pattern = Crd(e)), cO.init(t, e);
}), AAo = Pa("$ZodISODuration", (t, e)=>{
    e.pattern ?? (e.pattern = wxo), cO.init(t, e);
}), RAo = Pa("$ZodIPv4", (t, e)=>{
    e.pattern ?? (e.pattern = Ixo), cO.init(t, e), t._zod.bag.format = "ipv4";
}), PAo = Pa("$ZodIPv6", (t, e)=>{
    e.pattern ?? (e.pattern = xxo), cO.init(t, e), t._zod.bag.format = "ipv6", t._zod.check = (n)=>{
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
}), MAo = Pa("$ZodMAC", (t, e)=>{
    e.pattern ?? (e.pattern = Axo(e.delimiter)), cO.init(t, e), t._zod.bag.format = "mac";
}), DAo = Pa("$ZodCIDRv4", (t, e)=>{
    e.pattern ?? (e.pattern = Rxo), cO.init(t, e);
}), NAo = Pa("$ZodCIDRv6", (t, e)=>{
    e.pattern ?? (e.pattern = Pxo), cO.init(t, e), t._zod.check = (n)=>{
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
}), LAo = Pa("$ZodBase64", (t, e)=>{
    e.pattern ?? (e.pattern = Mxo), cO.init(t, e), t._zod.bag.contentEncoding = "base64", t._zod.check = (n)=>{
        pAo(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), OAo = Pa("$ZodBase64URL", (t, e)=>{
    e.pattern ?? (e.pattern = Ifr), cO.init(t, e), t._zod.bag.contentEncoding = "base64url", t._zod.check = (n)=>{
        nsd(n.value) || n.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), FAo = Pa("$ZodE164", (t, e)=>{
    e.pattern ?? (e.pattern = Dxo), cO.init(t, e);
}), BAo = Pa("$ZodJWT", (t, e)=>{
    cO.init(t, e), t._zod.check = (n)=>{
        isd(n.value, e.alg) || n.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), UAo = Pa("$ZodCustomStringFormat", (t, e)=>{
    cO.init(t, e), t._zod.check = (n)=>{
        e.fn(n.value) || n.issues.push({
            code: "invalid_format",
            format: e.format,
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), bQn = Pa("$ZodNumber", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? xfr, t._zod.parse = (n, i)=>{
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
}), Ofr = Pa("$ZodNumberFormat", (t, e)=>{
    Vxo.init(t, e), bQn.init(t, e);
}), yQn = Pa("$ZodBoolean", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = Uxo, t._zod.parse = (n, i)=>{
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
}), Ffr = Pa("$ZodBigInt", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = Fxo, t._zod.parse = (n, i)=>{
        if (e.coerce) try {
            n.value = BigInt(n.value);
        } catch  {}
        return typeof n.value == "bigint" || n.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: n.value,
            inst: t
        }), n;
    };
}), jAo = Pa("$ZodBigIntFormat", (t, e)=>{
    Kxo.init(t, e), Ffr.init(t, e);
}), $Ao = Pa("$ZodSymbol", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r == "symbol" || n.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), HAo = Pa("$ZodUndefined", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = $xo, t._zod.values = new Set([
        void 0
    ]), t._zod.optin = "optional", t._zod.optout = "optional", t._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r > "u" || n.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), WAo = Pa("$ZodNull", (t, e)=>{
    Qw.init(t, e), t._zod.pattern = jxo, t._zod.values = new Set([
        null
    ]), t._zod.parse = (n, i)=>{
        const r = n.value;
        return r === null || n.issues.push({
            expected: "null",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), GAo = Pa("$ZodAny", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n)=>n;
}), Bfr = Pa("$ZodUnknown", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n)=>n;
}), Ufr = Pa("$ZodNever", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>(n.issues.push({
            expected: "never",
            code: "invalid_type",
            input: n.value,
            inst: t
        }), n);
}), qAo = Pa("$ZodVoid", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        return typeof r > "u" || n.issues.push({
            expected: "void",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), zAo = Pa("$ZodDate", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        if (e.coerce) try {
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
            inst: t
        }), n;
    };
}), jfr = Pa("$ZodArray", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
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
            l instanceof Promise ? s.push(l.then((c)=>rsd(c, n, o))) : rsd(l, n, o);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), $fr = Pa("$ZodObject", (t, e)=>{
    if (Qw.init(t, e), !Object.getOwnPropertyDescriptor(e, "shape")?.get) {
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
    const i = dQn(()=>ssd(e));
    cE(t._zod, "propValues", ()=>{
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
    const r = phn, s = e.catchall;
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
            f instanceof Promise ? u.push(f.then((_)=>Pfr(_, a, h, c, g))) : Pfr(f, a, h, c, g);
        }
        return s ? osd(u, c, a, l, i.value, t) : u.length ? Promise.all(u).then(()=>a) : a;
    };
}), VAo = Pa("$ZodObjectJIT", (t, e)=>{
    $fr.init(t, e);
    const n = t._zod.parse, i = dQn(()=>ssd(e)), r = (h)=>{
        const p = new dAo([
            "shape",
            "payload",
            "ctx"
        ]), g = i.value, f = (S)=>{
            const k = lxo(S);
            return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
        p.write("const input = payload.value;");
        const _ = Object.create(null);
        let b = 0;
        for (const S of g.keys)_[S] = `key_${b++}`;
        p.write("const newResult = {};");
        for (const S of g.keys){
            const k = _[S], C = lxo(S), I = h[S]?._zod?.optout === "optional";
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
    const o = phn, a = !cQn.jitless, c = a && uxo.value, u = e.catchall;
    let d;
    t._zod.parse = (h, p)=>{
        d ?? (d = i.value);
        const g = h.value;
        return o(g) ? a && c && p?.async === !1 && p.jitless !== !0 ? (s || (s = r(e.shape)), h = s(h, p), u ? osd([], g, h, p, d, t) : h) : n(h, p) : (h.issues.push({
            expected: "object",
            code: "invalid_type",
            input: g,
            inst: t
        }), h);
    };
}), bhn = Pa("$ZodUnion", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "optin", ()=>e.options.some((r)=>r._zod.optin === "optional") ? "optional" : void 0), cE(t._zod, "optout", ()=>e.options.some((r)=>r._zod.optout === "optional") ? "optional" : void 0), cE(t._zod, "values", ()=>{
        if (e.options.every((r)=>r._zod.values)) return new Set(e.options.flatMap((r)=>Array.from(r._zod.values)));
    }), cE(t._zod, "pattern", ()=>{
        if (e.options.every((r)=>r._zod.pattern)) {
            const r = e.options.map((s)=>s._zod.pattern);
            return new RegExp(`^(${r.map((s)=>hfr(s.source)).join("|")})$`);
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
        return o ? Promise.all(a).then((l)=>asd(l, r, t, s)) : asd(a, r, t, s);
    };
}), KAo = Pa("$ZodXor", (t, e)=>{
    bhn.init(t, e), e.inclusive = !1;
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
            c instanceof Promise ? (a.push(c), o = !0) : a.push(c);
        }
        return o ? Promise.all(a).then((l)=>lsd(l, r, t, s)) : lsd(a, r, t, s);
    };
}), Hfr = Pa("$ZodDiscriminatedUnion", (t, e)=>{
    e.inclusive = !1, bhn.init(t, e);
    const n = t._zod.parse;
    cE(t._zod, "propValues", ()=>{
        const r = {};
        for (const s of e.options){
            const o = s._zod.propValues;
            if (!o || Object.keys(o).length === 0) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);
            for (const [a, l] of Object.entries(o)){
                r[a] || (r[a] = new Set);
                for (const c of l)r[a].add(c);
            }
        }
        return r;
    });
    const i = dQn(()=>{
        const r = e.options, s = new Map;
        for (const o of r){
            const a = o._zod.propValues?.[e.discriminator];
            if (!a || a.size === 0) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(o)}"`);
            for (const l of a){
                if (s.has(l)) throw new Error(`Duplicate discriminator value "${String(l)}"`);
                s.set(l, o);
            }
        }
        return s;
    });
    t._zod.parse = (r, s)=>{
        const o = r.value;
        if (!phn(o)) return r.issues.push({
            code: "invalid_type",
            expected: "object",
            input: o,
            inst: t
        }), r;
        const a = i.value.get(o?.[e.discriminator]);
        return a ? a._zod.run(r, s) : e.unionFallback ? n(r, s) : (r.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: e.discriminator,
            input: o,
            path: [
                e.discriminator
            ],
            inst: t
        }), r);
    };
}), YAo = Pa("$ZodIntersection", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
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
        ]).then(([l, c])=>csd(n, l, c)) : csd(n, s, o);
    };
}), Wfr = Pa("$ZodTuple", (t, e)=>{
    Qw.init(t, e);
    const n = e.items;
    t._zod.parse = (i, r)=>{
        const s = i.value;
        if (!Array.isArray(s)) return i.issues.push({
            input: s,
            inst: t,
            expected: "tuple",
            code: "invalid_type"
        }), i;
        i.value = [];
        const o = [], a = [
            ...n
        ].reverse().findIndex((u)=>u._zod.optin !== "optional"), l = a === -1 ? 0 : n.length - a;
        if (!e.rest) {
            const u = s.length > n.length, d = s.length < l - 1;
            if (u || d) return i.issues.push({
                ...u ? {
                    code: "too_big",
                    maximum: n.length,
                    inclusive: !0
                } : {
                    code: "too_small",
                    minimum: n.length
                },
                input: s,
                inst: t,
                origin: "array"
            }), i;
        }
        let c = -1;
        for (const u of n){
            if (c++, c >= s.length && c >= l) continue;
            const d = u._zod.run({
                value: s[c],
                issues: []
            }, r);
            d instanceof Promise ? o.push(d.then((h)=>Mfr(h, i, c))) : Mfr(d, i, c);
        }
        if (e.rest) {
            const u = s.slice(n.length);
            for (const d of u){
                c++;
                const h = e.rest._zod.run({
                    value: d,
                    issues: []
                }, r);
                h instanceof Promise ? o.push(h.then((p)=>Mfr(p, i, c))) : Mfr(h, i, c);
            }
        }
        return o.length ? Promise.all(o).then(()=>i) : i;
    };
}), Gfr = Pa("$ZodRecord", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        if (!$6t(r)) return n.issues.push({
            expected: "record",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
        const s = [], o = e.keyType._zod.values;
        if (o) {
            n.value = {};
            const a = new Set;
            for (const c of o)if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
                a.add(typeof c == "number" ? c.toString() : c);
                const u = e.valueType._zod.run({
                    value: r[c],
                    issues: []
                }, i);
                u instanceof Promise ? s.push(u.then((d)=>{
                    d.issues.length && n.issues.push(...zOe(c, d.issues)), n.value[c] = d.value;
                })) : (u.issues.length && n.issues.push(...zOe(c, u.issues)), n.value[c] = u.value);
            }
            let l;
            for(const c in r)a.has(c) || (l = l ?? [], l.push(c));
            l && l.length > 0 && n.issues.push({
                code: "unrecognized_keys",
                input: r,
                inst: t,
                keys: l
            });
        } else {
            n.value = {};
            for (const a of Reflect.ownKeys(r)){
                if (a === "__proto__") continue;
                let l = e.keyType._zod.run({
                    value: a,
                    issues: []
                }, i);
                if (l instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (typeof a == "string" && xfr.test(a) && l.issues.length) {
                    const d = e.keyType._zod.run({
                        value: Number(a),
                        issues: []
                    }, i);
                    if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                    d.issues.length === 0 && (l = d);
                }
                if (l.issues.length) {
                    e.mode === "loose" ? n.value[a] = r[a] : n.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: l.issues.map((d)=>pAe(d, i, Fse())),
                        input: a,
                        path: [
                            a
                        ],
                        inst: t
                    });
                    continue;
                }
                const u = e.valueType._zod.run({
                    value: r[a],
                    issues: []
                }, i);
                u instanceof Promise ? s.push(u.then((d)=>{
                    d.issues.length && n.issues.push(...zOe(a, d.issues)), n.value[l.value] = d.value;
                })) : (u.issues.length && n.issues.push(...zOe(a, u.issues)), n.value[l.value] = u.value);
            }
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), XAo = Pa("$ZodMap", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        if (!(r instanceof Map)) return n.issues.push({
            expected: "map",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
        const s = [];
        n.value = new Map;
        for (const [o, a] of r){
            const l = e.keyType._zod.run({
                value: o,
                issues: []
            }, i), c = e.valueType._zod.run({
                value: a,
                issues: []
            }, i);
            l instanceof Promise || c instanceof Promise ? s.push(Promise.all([
                l,
                c
            ]).then(([u, d])=>{
                usd(u, d, n, o, r, t, i);
            })) : usd(l, c, n, o, r, t, i);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), ZAo = Pa("$ZodSet", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        if (!(r instanceof Set)) return n.issues.push({
            input: r,
            inst: t,
            expected: "set",
            code: "invalid_type"
        }), n;
        const s = [];
        n.value = new Set;
        for (const o of r){
            const a = e.valueType._zod.run({
                value: o,
                issues: []
            }, i);
            a instanceof Promise ? s.push(a.then((l)=>dsd(l, n))) : dsd(a, n);
        }
        return s.length ? Promise.all(s).then(()=>n) : n;
    };
}), qfr = Pa("$ZodEnum", (t, e)=>{
    Qw.init(t, e);
    const n = axo(e.entries), i = new Set(n);
    t._zod.values = i, t._zod.pattern = new RegExp(`^(${n.filter((r)=>pQn.has(typeof r)).map((r)=>typeof r == "string" ? Pet(r) : r.toString()).join("|")})$`), t._zod.parse = (r, s)=>{
        const o = r.value;
        return i.has(o) || r.issues.push({
            code: "invalid_value",
            values: n,
            input: o,
            inst: t
        }), r;
    };
}), zfr = Pa("$ZodLiteral", (t, e)=>{
    if (Qw.init(t, e), e.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const n = new Set(e.values);
    t._zod.values = n, t._zod.pattern = new RegExp(`^(${e.values.map((i)=>typeof i == "string" ? Pet(i) : i ? Pet(i.toString()) : String(i)).join("|")})$`), t._zod.parse = (i, r)=>{
        const s = i.value;
        return n.has(s) || i.issues.push({
            code: "invalid_value",
            values: e.values,
            input: s,
            inst: t
        }), i;
    };
}), QAo = Pa("$ZodFile", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        const r = n.value;
        return r instanceof File || n.issues.push({
            expected: "file",
            code: "invalid_type",
            input: r,
            inst: t
        }), n;
    };
}), Vfr = Pa("$ZodTransform", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new lQn(t.constructor.name);
        const r = e.transform(n.value, n);
        if (i.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((o)=>(n.value = o, n));
        if (r instanceof Promise) throw new __t;
        return n.value = r, n;
    };
}), SQn = Pa("$ZodOptional", (t, e)=>{
    Qw.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", cE(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
            ...e.innerType._zod.values,
            void 0
        ]) : void 0), cE(t._zod, "pattern", ()=>{
        const n = e.innerType._zod.pattern;
        return n ? new RegExp(`^(${hfr(n.source)})?$`) : void 0;
    }), t._zod.parse = (n, i)=>{
        if (e.innerType._zod.optin === "optional") {
            const r = e.innerType._zod.run(n, i);
            return r instanceof Promise ? r.then((s)=>hsd(s, n.value)) : hsd(r, n.value);
        }
        return n.value === void 0 ? n : e.innerType._zod.run(n, i);
    };
}), Kfr = Pa("$ZodExactOptional", (t, e)=>{
    SQn.init(t, e), cE(t._zod, "values", ()=>e.innerType._zod.values), cE(t._zod, "pattern", ()=>e.innerType._zod.pattern), t._zod.parse = (n, i)=>e.innerType._zod.run(n, i);
}), Yfr = Pa("$ZodNullable", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "optin", ()=>e.innerType._zod.optin), cE(t._zod, "optout", ()=>e.innerType._zod.optout), cE(t._zod, "pattern", ()=>{
        const n = e.innerType._zod.pattern;
        return n ? new RegExp(`^(${hfr(n.source)}|null)$`) : void 0;
    }), cE(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
            ...e.innerType._zod.values,
            null
        ]) : void 0), t._zod.parse = (n, i)=>n.value === null ? n : e.innerType._zod.run(n, i);
}), JAo = Pa("$ZodDefault", (t, e)=>{
    Qw.init(t, e), t._zod.optin = "optional", cE(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        if (n.value === void 0) return n.value = e.defaultValue, n;
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>psd(s, e)) : psd(r, e);
    };
}), eRo = Pa("$ZodPrefault", (t, e)=>{
    Qw.init(t, e), t._zod.optin = "optional", cE(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>(i.direction === "backward" || n.value === void 0 && (n.value = e.defaultValue), e.innerType._zod.run(n, i));
}), tRo = Pa("$ZodNonOptional", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "values", ()=>{
        const n = e.innerType._zod.values;
        return n ? new Set([
            ...n
        ].filter((i)=>i !== void 0)) : void 0;
    }), t._zod.parse = (n, i)=>{
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>msd(s, t)) : msd(r, t);
    };
}), nRo = Pa("$ZodSuccess", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new lQn("ZodSuccess");
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>(n.value = s.issues.length === 0, n)) : (n.value = r.issues.length === 0, n);
    };
}), iRo = Pa("$ZodCatch", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "optin", ()=>e.innerType._zod.optin), cE(t._zod, "optout", ()=>e.innerType._zod.optout), cE(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>(n.value = s.value, s.issues.length && (n.value = e.catchValue({
                ...n,
                error: {
                    issues: s.issues.map((o)=>pAe(o, i, Fse()))
                },
                input: n.value
            }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = e.catchValue({
            ...n,
            error: {
                issues: r.issues.map((s)=>pAe(s, i, Fse()))
            },
            input: n.value
        }), n.issues = []), n);
    };
}), rRo = Pa("$ZodNaN", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>((typeof n.value != "number" || !Number.isNaN(n.value)) && n.issues.push({
            input: n.value,
            inst: t,
            expected: "nan",
            code: "invalid_type"
        }), n);
}), Xfr = Pa("$ZodPipe", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "values", ()=>e.in._zod.values), cE(t._zod, "optin", ()=>e.in._zod.optin), cE(t._zod, "optout", ()=>e.out._zod.optout), cE(t._zod, "propValues", ()=>e.in._zod.propValues), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") {
            const s = e.out._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>Dfr(o, e.in, i)) : Dfr(s, e.in, i);
        }
        const r = e.in._zod.run(n, i);
        return r instanceof Promise ? r.then((s)=>Dfr(s, e.out, i)) : Dfr(r, e.out, i);
    };
}), Zfr = Pa("$ZodCodec", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "values", ()=>e.in._zod.values), cE(t._zod, "optin", ()=>e.in._zod.optin), cE(t._zod, "optout", ()=>e.out._zod.optout), cE(t._zod, "propValues", ()=>e.in._zod.propValues), t._zod.parse = (n, i)=>{
        if ((i.direction || "forward") === "forward") {
            const s = e.in._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>Nfr(o, e, i)) : Nfr(s, e, i);
        } else {
            const s = e.out._zod.run(n, i);
            return s instanceof Promise ? s.then((o)=>Nfr(o, e, i)) : Nfr(s, e, i);
        }
    };
}), sRo = Pa("$ZodReadonly", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "propValues", ()=>e.innerType._zod.propValues), cE(t._zod, "values", ()=>e.innerType._zod.values), cE(t._zod, "optin", ()=>e.innerType?._zod?.optin), cE(t._zod, "optout", ()=>e.innerType?._zod?.optout), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") return e.innerType._zod.run(n, i);
        const r = e.innerType._zod.run(n, i);
        return r instanceof Promise ? r.then(gsd) : gsd(r);
    };
}), oRo = Pa("$ZodTemplateLiteral", (t, e)=>{
    Qw.init(t, e);
    const n = [];
    for (const i of e.parts)if (typeof i == "object" && i !== null) {
        if (!i._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[
            ...i._zod.traits
        ].shift()}`);
        const r = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
        if (!r) throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        const s = r.startsWith("^") ? 1 : 0, o = r.endsWith("$") ? r.length - 1 : r.length;
        n.push(r.slice(s, o));
    } else if (i === null || dxo.has(typeof i)) n.push(Pet(`${i}`));
    else throw new Error(`Invalid template literal part: ${i}`);
    t._zod.pattern = new RegExp(`^${n.join("")}$`), t._zod.parse = (i, r)=>typeof i.value != "string" ? (i.issues.push({
            input: i.value,
            inst: t,
            expected: "string",
            code: "invalid_type"
        }), i) : (t._zod.pattern.lastIndex = 0, t._zod.pattern.test(i.value) || i.issues.push({
            input: i.value,
            inst: t,
            code: "invalid_format",
            format: e.format ?? "template_literal",
            pattern: t._zod.pattern.source
        }), i);
}), aRo = Pa("$ZodFunction", (t, e)=>(Qw.init(t, e), t._def = e, t._zod.def = e, t.implement = (n)=>{
        if (typeof n != "function") throw new Error("implement() must be called with a function");
        return function(...i) {
            const r = t._def.input ? mQn(t._def.input, i) : i, s = Reflect.apply(n, this, r);
            return t._def.output ? mQn(t._def.output, s) : s;
        };
    }, t.implementAsync = (n)=>{
        if (typeof n != "function") throw new Error("implementAsync() must be called with a function");
        return async function(...i) {
            const r = t._def.input ? await gQn(t._def.input, i) : i, s = await Reflect.apply(n, this, r);
            return t._def.output ? await gQn(t._def.output, s) : s;
        };
    }, t._zod.parse = (n, i)=>typeof n.value != "function" ? (n.issues.push({
            code: "invalid_type",
            expected: "function",
            input: n.value,
            inst: t
        }), n) : (t._def.output && t._def.output._zod.def.type === "promise" ? n.value = t.implementAsync(n.value) : n.value = t.implement(n.value), n), t.input = (...n)=>{
        const i = t.constructor;
        return Array.isArray(n[0]) ? new i({
            type: "function",
            input: new Wfr({
                type: "tuple",
                items: n[0],
                rest: n[1]
            }),
            output: t._def.output
        }) : new i({
            type: "function",
            input: n[0],
            output: t._def.output
        });
    }, t.output = (n)=>{
        const i = t.constructor;
        return new i({
            type: "function",
            input: t._def.input,
            output: n
        });
    }, t)), lRo = Pa("$ZodPromise", (t, e)=>{
    Qw.init(t, e), t._zod.parse = (n, i)=>Promise.resolve(n.value).then((r)=>e.innerType._zod.run({
                value: r,
                issues: []
            }, i));
}), cRo = Pa("$ZodLazy", (t, e)=>{
    Qw.init(t, e), cE(t._zod, "innerType", ()=>e.getter()), cE(t._zod, "pattern", ()=>t._zod.innerType?._zod?.pattern), cE(t._zod, "propValues", ()=>t._zod.innerType?._zod?.propValues), cE(t._zod, "optin", ()=>t._zod.innerType?._zod?.optin ?? void 0), cE(t._zod, "optout", ()=>t._zod.innerType?._zod?.optout ?? void 0), t._zod.parse = (n, i)=>t._zod.innerType._zod.run(n, i);
}), Qfr = Pa("$ZodCustom", (t, e)=>{
    f4.init(t, e), Qw.init(t, e), t._zod.parse = (n, i)=>n, t._zod.check = (n)=>{
        const i = n.value, r = e.fn(i);
        if (r instanceof Promise) return r.then((s)=>fsd(s, n, i, t));
        fsd(r, n, i, t);
    };
});

}
