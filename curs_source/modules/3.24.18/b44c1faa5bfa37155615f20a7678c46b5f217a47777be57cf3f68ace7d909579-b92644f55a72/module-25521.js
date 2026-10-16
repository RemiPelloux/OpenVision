"use strict";
require.d(exports, {
    Gb: ()=>L,
    $p: ()=>G,
    Dq: ()=>J,
    CQ: ()=>M,
    sF: ()=>F,
    CI: ()=>R,
    Cn: ()=>B,
    bl: ()=>v,
    Zu: ()=>_,
    t$: ()=>pe,
    b0: ()=>ye,
    rv: ()=>ae,
    P0: ()=>Y,
    Oy: ()=>q,
    qG: ()=>f,
    cG: ()=>y,
    VO: ()=>re,
    Zc: ()=>m,
    Lc: ()=>x,
    Zy: ()=>T,
    v1: ()=>I,
    Ko: ()=>E,
    $N: ()=>k,
    Ax: ()=>C,
    LJ: ()=>Z,
    h8: ()=>D,
    GY: ()=>b,
    nu: ()=>ne,
    Py: ()=>w,
    Um: ()=>Q,
    N$: ()=>ue,
    x8: ()=>U,
    qc: ()=>ie,
    vz: ()=>O,
    I: ()=>N,
    L8: ()=>W,
    ig: ()=>oe,
    _m: ()=>me,
    VF: ()=>le,
    Sb: ()=>fe,
    h: ()=>te,
    $v: ()=>d,
    EY: ()=>p,
    Wc: ()=>se,
    W4: ()=>u,
    g5: ()=>A,
    VY: ()=>g,
    Zn: ()=>h,
    cu: ()=>K,
    GP: ()=>$,
    TF: ()=>S
});
var n = require("./module-39567.js"), s = require("./module-47381.js");
class o {
    constructor(e = []){
        this.content = [], this.indent = 0, this && (this.args = e);
    }
    indented(e) {
        this.indent += 1, e(this), this.indent -= 1;
    }
    write(e) {
        if ("function" == typeof e) return e(this, {
            execution: "sync"
        }), void e(this, {
            execution: "async"
        });
        const t = e.split("\n").filter((e)=>e), r = Math.min(...t.map((e)=>e.length - e.trimStart().length)), n = t.map((e)=>e.slice(r)).map((e)=>" ".repeat(2 * this.indent) + e);
        for (const e of n)this.content.push(e);
    }
    compile() {
        const e = Function, t = this?.args;
        return new e(...t, [
            ...(this?.content ?? [
                ""
            ]).map((e)=>`  ${e}`)
        ].join("\n"));
    }
}
var i = require("./module-4287.js"), a = require("./module-58927.js"), c = require("./module-7246.js");
const l = {
    major: 4,
    minor: 0,
    patch: 0
}, u = s.xI("$ZodType", (e, t)=>{
    var r;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = l;
    const n = [
        ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && n.unshift(e);
    for (const t of n)for (const r of t._zod.onattach)r(e);
    if (0 === n.length) (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(()=>{
        e._zod.run = e._zod.parse;
    });
    else {
        const t = (e, t, r)=>{
            let n, o = c.QH(e);
            for (const i of t){
                if (i._zod.def.when) {
                    if (!i._zod.def.when(e)) continue;
                } else if (o) continue;
                const t = e.issues.length, a = i._zod.check(e);
                if (a instanceof Promise && !1 === r?.async) throw new s.GT;
                if (n || a instanceof Promise) n = (n ?? Promise.resolve()).then(async ()=>{
                    await a;
                    e.issues.length !== t && (o || (o = c.QH(e, t)));
                });
                else {
                    if (e.issues.length === t) continue;
                    o || (o = c.QH(e, t));
                }
            }
            return n ? n.then(()=>e) : e;
        };
        e._zod.run = (r, o)=>{
            const i = e._zod.parse(r, o);
            if (i instanceof Promise) {
                if (!1 === o.async) throw new s.GT;
                return i.then((e)=>t(e, n, o));
            }
            return t(i, n, o);
        };
    }
    e["~standard"] = {
        validate: (t)=>{
            try {
                const r = (0, i.xL)(e, t);
                return r.success ? {
                    value: r.data
                } : {
                    issues: r.error?.issues
                };
            } catch (r) {
                return (0, i.bp)(e, t).then((e)=>e.success ? {
                        value: e.data
                    } : {
                        issues: e.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
}), d = s.xI("$ZodString", (e, t)=>{
    u.init(e, t), e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? a.Yj(e._zod.bag), e._zod.parse = (r, n)=>{
        if (t.coerce) try {
            r.value = String(r.value);
        } catch (n) {}
        return "string" == typeof r.value || r.issues.push({
            expected: "string",
            code: "invalid_type",
            input: r.value,
            inst: e
        }), r;
    };
}), p = s.xI("$ZodStringFormat", (e, t)=>{
    n.ql.init(e, t), d.init(e, t);
}), m = s.xI("$ZodGUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Os), p.init(e, t);
}), h = s.xI("$ZodUUID", (e, t)=>{
    if (t.version) {
        const e = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        }[t.version];
        if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
        t.pattern ?? (t.pattern = a.uR(e));
    } else t.pattern ?? (t.pattern = a.uR());
    p.init(e, t);
}), f = s.xI("$ZodEmail", (e, t)=>{
    t.pattern ?? (t.pattern = a.Rp), p.init(e, t);
}), g = s.xI("$ZodURL", (e, t)=>{
    p.init(e, t), e._zod.check = (r)=>{
        try {
            const n = r.value, s = new URL(n), o = s.href;
            return t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: a.OI.source,
                input: r.value,
                inst: e,
                continue: !t.abort
            })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: r.value,
                inst: e,
                continue: !t.abort
            })), void (!n.endsWith("/") && o.endsWith("/") ? r.value = o.slice(0, -1) : r.value = o);
        } catch (n) {
            r.issues.push({
                code: "invalid_format",
                format: "url",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
}), y = s.xI("$ZodEmoji", (e, t)=>{
    t.pattern ?? (t.pattern = a.Zg()), p.init(e, t);
}), w = s.xI("$ZodNanoID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Ak), p.init(e, t);
}), v = s.xI("$ZodCUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.gF), p.init(e, t);
}), _ = s.xI("$ZodCUID2", (e, t)=>{
    t.pattern ?? (t.pattern = a.Gl), p.init(e, t);
}), A = s.xI("$ZodULID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Z0), p.init(e, t);
}), S = s.xI("$ZodXID", (e, t)=>{
    t.pattern ?? (t.pattern = a.kM), p.init(e, t);
}), b = s.xI("$ZodKSUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.fO), p.init(e, t);
}), E = s.xI("$ZodISODateTime", (e, t)=>{
    t.pattern ?? (t.pattern = a.w$(t)), p.init(e, t);
}), I = s.xI("$ZodISODate", (e, t)=>{
    t.pattern ?? (t.pattern = a.p6), p.init(e, t);
}), C = s.xI("$ZodISOTime", (e, t)=>{
    t.pattern ?? (t.pattern = a.kB(t)), p.init(e, t);
}), k = s.xI("$ZodISODuration", (e, t)=>{
    t.pattern ?? (t.pattern = a.p0), p.init(e, t);
}), x = s.xI("$ZodIPv4", (e, t)=>{
    t.pattern ?? (t.pattern = a.uX), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.format = "ipv4";
    });
}), T = s.xI("$ZodIPv6", (e, t)=>{
    t.pattern ?? (t.pattern = a.ug), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.format = "ipv6";
    }), e._zod.check = (r)=>{
        try {
            new URL(`http://[${r.value}]`);
        } catch  {
            r.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
}), R = s.xI("$ZodCIDRv4", (e, t)=>{
    t.pattern ?? (t.pattern = a.zr), p.init(e, t);
}), B = s.xI("$ZodCIDRv6", (e, t)=>{
    t.pattern ?? (t.pattern = a.l7), p.init(e, t), e._zod.check = (r)=>{
        const [n, s] = r.value.split("/");
        try {
            if (!s) throw new Error;
            const e = Number(s);
            if (`${e}` !== s) throw new Error;
            if (e < 0 || e > 128) throw new Error;
            new URL(`http://[${n}]`);
        } catch  {
            r.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
});
function P(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return atob(e), !0;
    } catch  {
        return !1;
    }
}
const J = s.xI("$ZodBase64", (e, t)=>{
    t.pattern ?? (t.pattern = a.K3), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.contentEncoding = "base64";
    }), e._zod.check = (r)=>{
        P(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const M = s.xI("$ZodBase64URL", (e, t)=>{
    t.pattern ?? (t.pattern = a.r0), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.contentEncoding = "base64url";
    }), e._zod.check = (r)=>{
        (function(e) {
            if (!a.r0.test(e)) return !1;
            const t = e.replace(/[-_]/g, (e)=>"-" === e ? "+" : "/");
            return P(t.padEnd(4 * Math.ceil(t.length / 4), "="));
        })(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), q = s.xI("$ZodE164", (e, t)=>{
    t.pattern ?? (t.pattern = a.hQ), p.init(e, t);
});
const D = s.xI("$ZodJWT", (e, t)=>{
    p.init(e, t), e._zod.check = (r)=>{
        (function(e, t = null) {
            try {
                const r = e.split(".");
                if (3 !== r.length) return !1;
                const [n] = r;
                if (!n) return !1;
                const s = JSON.parse(atob(n));
                return !("typ" in s && "JWT" !== s?.typ || !s.alg || t && (!("alg" in s) || s.alg !== t));
            } catch  {
                return !1;
            }
        })(r.value, t.alg) || r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), O = s.xI("$ZodNumber", (e, t)=>{
    u.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? a.ai, e._zod.parse = (r, n)=>{
        if (t.coerce) try {
            r.value = Number(r.value);
        } catch (e) {}
        const s = r.value;
        if ("number" == typeof s && !Number.isNaN(s) && Number.isFinite(s)) return r;
        const o = "number" == typeof s ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
        return r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: s,
            inst: e,
            ...o ? {
                received: o
            } : {}
        }), r;
    };
}), N = s.xI("$ZodNumber", (e, t)=>{
    n.KH.init(e, t), O.init(e, t);
}), F = s.xI("$ZodBoolean", (e, t)=>{
    u.init(e, t), e._zod.pattern = a.zM, e._zod.parse = (r, n)=>{
        if (t.coerce) try {
            r.value = Boolean(r.value);
        } catch (e) {}
        const s = r.value;
        return "boolean" == typeof s || r.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: s,
            inst: e
        }), r;
    };
}), U = s.xI("$ZodNull", (e, t)=>{
    u.init(e, t), e._zod.pattern = a.ch, e._zod.values = new Set([
        null
    ]), e._zod.parse = (t, r)=>{
        const n = t.value;
        return null === n || t.issues.push({
            expected: "null",
            code: "invalid_type",
            input: n,
            inst: e
        }), t;
    };
}), L = s.xI("$ZodAny", (e, t)=>{
    u.init(e, t), e._zod.parse = (e)=>e;
}), $ = s.xI("$ZodUnknown", (e, t)=>{
    u.init(e, t), e._zod.parse = (e)=>e;
}), Q = s.xI("$ZodNever", (e, t)=>{
    u.init(e, t), e._zod.parse = (t, r)=>(t.issues.push({
            expected: "never",
            code: "invalid_type",
            input: t.value,
            inst: e
        }), t);
});
function j(e, t, r) {
    e.issues.length && t.issues.push(...c.lQ(r, e.issues)), t.value[r] = e.value;
}
const G = s.xI("$ZodArray", (e, t)=>{
    u.init(e, t), e._zod.parse = (r, n)=>{
        const s = r.value;
        if (!Array.isArray(s)) return r.issues.push({
            expected: "array",
            code: "invalid_type",
            input: s,
            inst: e
        }), r;
        r.value = Array(s.length);
        const o = [];
        for(let e = 0; e < s.length; e++){
            const i = s[e], a = t.element._zod.run({
                value: i,
                issues: []
            }, n);
            a instanceof Promise ? o.push(a.then((t)=>j(t, r, e))) : j(a, r, e);
        }
        return o.length ? Promise.all(o).then(()=>r) : r;
    };
});
function H(e, t, r) {
    e.issues.length && t.issues.push(...c.lQ(r, e.issues)), t.value[r] = e.value;
}
function z(e, t, r, n) {
    e.issues.length ? void 0 === n[r] ? t.value[r] = r in n ? void 0 : e.value : t.issues.push(...c.lQ(r, e.issues)) : void 0 === e.value ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
const W = s.xI("$ZodObject", (e, t)=>{
    u.init(e, t);
    const r = c.PO(()=>{
        const e = Object.keys(t.shape);
        for (const r of e)if (!(t.shape[r] instanceof u)) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
        const r = c.NM(t.shape);
        return {
            shape: t.shape,
            keys: e,
            keySet: new Set(e),
            numKeys: e.length,
            optionalKeys: new Set(r)
        };
    });
    c.gJ(e._zod, "propValues", ()=>{
        const e = t.shape, r = {};
        for(const t in e){
            const n = e[t]._zod;
            if (n.values) {
                r[t] ?? (r[t] = new Set);
                for (const e of n.values)r[t].add(e);
            }
        }
        return r;
    });
    let n;
    const i = c.Gv, a = !s.cr.jitless, l = c.hI, d = a && l.value, p = t.catchall;
    let m;
    e._zod.parse = (s, l)=>{
        m ?? (m = r.value);
        const u = s.value;
        if (!i(u)) return s.issues.push({
            expected: "object",
            code: "invalid_type",
            input: u,
            inst: e
        }), s;
        const h = [];
        if (a && d && !1 === l?.async && !0 !== l.jitless) n || (n = ((e)=>{
            const t = new o([
                "shape",
                "payload",
                "ctx"
            ]), n = r.value, s = (e)=>{
                const t = c.UQ(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
            };
            t.write("const input = payload.value;");
            const i = Object.create(null);
            let a = 0;
            for (const e of n.keys)i[e] = "key_" + a++;
            t.write("const newResult = {}");
            for (const e of n.keys)if (n.optionalKeys.has(e)) {
                const r = i[e];
                t.write(`const ${r} = ${s(e)};`);
                const n = c.UQ(e);
                t.write(`\n        if (${r}.issues.length) {\n          if (input[${n}] === undefined) {\n            if (${n} in input) {\n              newResult[${n}] = undefined;\n            }\n          } else {\n            payload.issues = payload.issues.concat(\n              ${r}.issues.map((iss) => ({\n                ...iss,\n                path: iss.path ? [${n}, ...iss.path] : [${n}],\n              }))\n            );\n          }\n        } else if (${r}.value === undefined) {\n          if (${n} in input) newResult[${n}] = undefined;\n        } else {\n          newResult[${n}] = ${r}.value;\n        }\n        `);
            } else {
                const r = i[e];
                t.write(`const ${r} = ${s(e)};`), t.write(`\n          if (${r}.issues.length) payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${c.UQ(e)}, ...iss.path] : [${c.UQ(e)}]\n          })));`), t.write(`newResult[${c.UQ(e)}] = ${r}.value`);
            }
            t.write("payload.value = newResult;"), t.write("return payload;");
            const l = t.compile();
            return (t, r)=>l(e, t, r);
        })(t.shape)), s = n(s, l);
        else {
            s.value = {};
            const e = m.shape;
            for (const t of m.keys){
                const r = e[t], n = r._zod.run({
                    value: u[t],
                    issues: []
                }, l), o = "optional" === r._zod.optin && "optional" === r._zod.optout;
                n instanceof Promise ? h.push(n.then((e)=>o ? z(e, s, t, u) : H(e, s, t))) : o ? z(n, s, t, u) : H(n, s, t);
            }
        }
        if (!p) return h.length ? Promise.all(h).then(()=>s) : s;
        const f = [], g = m.keySet, y = p._zod, w = y.def.type;
        for (const e of Object.keys(u)){
            if (g.has(e)) continue;
            if ("never" === w) {
                f.push(e);
                continue;
            }
            const t = y.run({
                value: u[e],
                issues: []
            }, l);
            t instanceof Promise ? h.push(t.then((t)=>H(t, s, e))) : H(t, s, e);
        }
        return f.length && s.issues.push({
            code: "unrecognized_keys",
            keys: f,
            input: u,
            inst: e
        }), h.length ? Promise.all(h).then(()=>s) : s;
    };
});
function V(e, t, r, n) {
    for (const r of e)if (0 === r.issues.length) return t.value = r.value, t;
    return t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: r,
        errors: e.map((e)=>e.issues.map((e)=>c.iR(e, n, s.$W())))
    }), t;
}
const K = s.xI("$ZodUnion", (e, t)=>{
    u.init(e, t), c.gJ(e._zod, "optin", ()=>t.options.some((e)=>"optional" === e._zod.optin) ? "optional" : void 0), c.gJ(e._zod, "optout", ()=>t.options.some((e)=>"optional" === e._zod.optout) ? "optional" : void 0), c.gJ(e._zod, "values", ()=>{
        if (t.options.every((e)=>e._zod.values)) return new Set(t.options.flatMap((e)=>Array.from(e._zod.values)));
    }), c.gJ(e._zod, "pattern", ()=>{
        if (t.options.every((e)=>e._zod.pattern)) {
            const e = t.options.map((e)=>e._zod.pattern);
            return new RegExp(`^(${e.map((e)=>c.p6(e.source)).join("|")})$`);
        }
    }), e._zod.parse = (r, n)=>{
        let s = !1;
        const o = [];
        for (const e of t.options){
            const t = e._zod.run({
                value: r.value,
                issues: []
            }, n);
            if (t instanceof Promise) o.push(t), s = !0;
            else {
                if (0 === t.issues.length) return t;
                o.push(t);
            }
        }
        return s ? Promise.all(o).then((t)=>V(t, r, e, n)) : V(o, r, e, n);
    };
}), Y = s.xI("$ZodDiscriminatedUnion", (e, t)=>{
    K.init(e, t);
    const r = e._zod.parse;
    c.gJ(e._zod, "propValues", ()=>{
        const e = {};
        for (const r of t.options){
            const n = r._zod.propValues;
            if (!n || 0 === Object.keys(n).length) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
            for (const [t, r] of Object.entries(n)){
                e[t] || (e[t] = new Set);
                for (const n of r)e[t].add(n);
            }
        }
        return e;
    });
    const n = c.PO(()=>{
        const e = t.options, r = new Map;
        for (const n of e){
            const e = n._zod.propValues[t.discriminator];
            if (!e || 0 === e.size) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
            for (const t of e){
                if (r.has(t)) throw new Error(`Duplicate discriminator value "${String(t)}"`);
                r.set(t, n);
            }
        }
        return r;
    });
    e._zod.parse = (s, o)=>{
        const i = s.value;
        if (!c.Gv(i)) return s.issues.push({
            code: "invalid_type",
            expected: "object",
            input: i,
            inst: e
        }), s;
        const a = n.value.get(i?.[t.discriminator]);
        return a ? a._zod.run(s, o) : t.unionFallback ? r(s, o) : (s.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            input: i,
            path: [
                t.discriminator
            ],
            inst: e
        }), s);
    };
}), Z = s.xI("$ZodIntersection", (e, t)=>{
    u.init(e, t), e._zod.parse = (e, r)=>{
        const n = e.value, s = t.left._zod.run({
            value: n,
            issues: []
        }, r), o = t.right._zod.run({
            value: n,
            issues: []
        }, r);
        return s instanceof Promise || o instanceof Promise ? Promise.all([
            s,
            o
        ]).then(([t, r])=>ee(e, t, r)) : ee(e, s, o);
    };
});
function X(e, t) {
    if (e === t) return {
        valid: !0,
        data: e
    };
    if (e instanceof Date && t instanceof Date && +e === +t) return {
        valid: !0,
        data: e
    };
    if (c.Qd(e) && c.Qd(t)) {
        const r = Object.keys(t), n = Object.keys(e).filter((e)=>-1 !== r.indexOf(e)), s = {
            ...e,
            ...t
        };
        for (const r of n){
            const n = X(e[r], t[r]);
            if (!n.valid) return {
                valid: !1,
                mergeErrorPath: [
                    r,
                    ...n.mergeErrorPath
                ]
            };
            s[r] = n.data;
        }
        return {
            valid: !0,
            data: s
        };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return {
            valid: !1,
            mergeErrorPath: []
        };
        const r = [];
        for(let n = 0; n < e.length; n++){
            const s = X(e[n], t[n]);
            if (!s.valid) return {
                valid: !1,
                mergeErrorPath: [
                    n,
                    ...s.mergeErrorPath
                ]
            };
            r.push(s.data);
        }
        return {
            valid: !0,
            data: r
        };
    }
    return {
        valid: !1,
        mergeErrorPath: []
    };
}
function ee(e, t, r) {
    if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), c.QH(e)) return e;
    const n = X(t.value, r.value);
    if (!n.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
    return e.value = n.data, e;
}
const te = s.xI("$ZodRecord", (e, t)=>{
    u.init(e, t), e._zod.parse = (r, n)=>{
        const o = r.value;
        if (!c.Qd(o)) return r.issues.push({
            expected: "record",
            code: "invalid_type",
            input: o,
            inst: e
        }), r;
        const i = [];
        if (t.keyType._zod.values) {
            const s = t.keyType._zod.values;
            r.value = {};
            for (const e of s)if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                const s = t.valueType._zod.run({
                    value: o[e],
                    issues: []
                }, n);
                s instanceof Promise ? i.push(s.then((t)=>{
                    t.issues.length && r.issues.push(...c.lQ(e, t.issues)), r.value[e] = t.value;
                })) : (s.issues.length && r.issues.push(...c.lQ(e, s.issues)), r.value[e] = s.value);
            }
            let a;
            for(const e in o)s.has(e) || (a = a ?? [], a.push(e));
            a && a.length > 0 && r.issues.push({
                code: "unrecognized_keys",
                input: o,
                inst: e,
                keys: a
            });
        } else {
            r.value = {};
            for (const a of Reflect.ownKeys(o)){
                if ("__proto__" === a) continue;
                const l = t.keyType._zod.run({
                    value: a,
                    issues: []
                }, n);
                if (l instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (l.issues.length) {
                    r.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: l.issues.map((e)=>c.iR(e, n, s.$W())),
                        input: a,
                        path: [
                            a
                        ],
                        inst: e
                    }), r.value[l.value] = l.value;
                    continue;
                }
                const u = t.valueType._zod.run({
                    value: o[a],
                    issues: []
                }, n);
                u instanceof Promise ? i.push(u.then((e)=>{
                    e.issues.length && r.issues.push(...c.lQ(a, e.issues)), r.value[l.value] = e.value;
                })) : (u.issues.length && r.issues.push(...c.lQ(a, u.issues)), r.value[l.value] = u.value);
            }
        }
        return i.length ? Promise.all(i).then(()=>r) : r;
    };
});
const re = s.xI("$ZodEnum", (e, t)=>{
    u.init(e, t);
    const r = c.w5(t.entries);
    e._zod.values = new Set(r), e._zod.pattern = new RegExp(`^(${r.filter((e)=>c.qQ.has(typeof e)).map((e)=>"string" == typeof e ? c.$f(e) : e.toString()).join("|")})$`), e._zod.parse = (t, n)=>{
        const s = t.value;
        return e._zod.values.has(s) || t.issues.push({
            code: "invalid_value",
            values: r,
            input: s,
            inst: e
        }), t;
    };
}), ne = s.xI("$ZodLiteral", (e, t)=>{
    u.init(e, t), e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((e)=>"string" == typeof e ? c.$f(e) : e ? e.toString() : String(e)).join("|")})$`), e._zod.parse = (r, n)=>{
        const s = r.value;
        return e._zod.values.has(s) || r.issues.push({
            code: "invalid_value",
            values: t.values,
            input: s,
            inst: e
        }), r;
    };
}), se = s.xI("$ZodTransform", (e, t)=>{
    u.init(e, t), e._zod.parse = (e, r)=>{
        const n = t.transform(e.value, e);
        if (r.async) {
            return (n instanceof Promise ? n : Promise.resolve(n)).then((t)=>(e.value = t, e));
        }
        if (n instanceof Promise) throw new s.GT;
        return e.value = n, e;
    };
}), oe = s.xI("$ZodOptional", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", c.gJ(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            void 0
        ]) : void 0), c.gJ(e._zod, "pattern", ()=>{
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${c.p6(e.source)})?$`) : void 0;
    }), e._zod.parse = (e, r)=>"optional" === t.innerType._zod.optin ? t.innerType._zod.run(e, r) : void 0 === e.value ? e : t.innerType._zod.run(e, r);
}), ie = s.xI("$ZodNullable", (e, t)=>{
    u.init(e, t), c.gJ(e._zod, "optin", ()=>t.innerType._zod.optin), c.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), c.gJ(e._zod, "pattern", ()=>{
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${c.p6(e.source)}|null)$`) : void 0;
    }), c.gJ(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            null
        ]) : void 0), e._zod.parse = (e, r)=>null === e.value ? e : t.innerType._zod.run(e, r);
}), ae = s.xI("$ZodDefault", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", c.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
        if (void 0 === e.value) return e.value = t.defaultValue, e;
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then((e)=>ce(e, t)) : ce(n, t);
    };
});
function ce(e, t) {
    return void 0 === e.value && (e.value = t.defaultValue), e;
}
const le = s.xI("$ZodPrefault", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", c.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>(void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, r));
}), ue = s.xI("$ZodNonOptional", (e, t)=>{
    u.init(e, t), c.gJ(e._zod, "values", ()=>{
        const e = t.innerType._zod.values;
        return e ? new Set([
            ...e
        ].filter((e)=>void 0 !== e)) : void 0;
    }), e._zod.parse = (r, n)=>{
        const s = t.innerType._zod.run(r, n);
        return s instanceof Promise ? s.then((t)=>de(t, e)) : de(s, e);
    };
});
function de(e, t) {
    return e.issues.length || void 0 !== e.value || e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: t
    }), e;
}
const pe = s.xI("$ZodCatch", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", c.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), c.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then((n)=>(e.value = n.value, n.issues.length && (e.value = t.catchValue({
                ...e,
                error: {
                    issues: n.issues.map((e)=>c.iR(e, r, s.$W()))
                },
                input: e.value
            }), e.issues = []), e)) : (e.value = n.value, n.issues.length && (e.value = t.catchValue({
            ...e,
            error: {
                issues: n.issues.map((e)=>c.iR(e, r, s.$W()))
            },
            input: e.value
        }), e.issues = []), e);
    };
}), me = s.xI("$ZodPipe", (e, t)=>{
    u.init(e, t), c.gJ(e._zod, "values", ()=>t.in._zod.values), c.gJ(e._zod, "optin", ()=>t.in._zod.optin), c.gJ(e._zod, "optout", ()=>t.out._zod.optout), e._zod.parse = (e, r)=>{
        const n = t.in._zod.run(e, r);
        return n instanceof Promise ? n.then((e)=>he(e, t, r)) : he(n, t, r);
    };
});
function he(e, t, r) {
    return c.QH(e) ? e : t.out._zod.run({
        value: e.value,
        issues: e.issues
    }, r);
}
const fe = s.xI("$ZodReadonly", (e, t)=>{
    u.init(e, t), c.gJ(e._zod, "propValues", ()=>t.innerType._zod.propValues), c.gJ(e._zod, "values", ()=>t.innerType._zod.values), c.gJ(e._zod, "optin", ()=>t.innerType._zod.optin), c.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), e._zod.parse = (e, r)=>{
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then(ge) : ge(n);
    };
});
function ge(e) {
    return e.value = Object.freeze(e.value), e;
}
const ye = s.xI("$ZodCustom", (e, t)=>{
    n.QP.init(e, t), u.init(e, t), e._zod.parse = (e, t)=>e, e._zod.check = (r)=>{
        const n = r.value, s = t.fn(n);
        if (s instanceof Promise) return s.then((t)=>we(t, r, n, e));
        we(s, r, n, e);
    };
});
function we(e, t, r, n) {
    if (!e) {
        const e = {
            code: "custom",
            input: r,
            inst: n,
            path: [
                ...n._zod.def.path ?? []
            ],
            continue: !n._zod.def.abort
        };
        n._zod.def.params && (e.params = n._zod.def.params), t.issues.push(c.sn(e));
    }
}
