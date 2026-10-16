"use strict";
require.d(exports, {
    Gb: ()=>q,
    $p: ()=>H,
    Dq: ()=>O,
    CQ: ()=>D,
    sF: ()=>B,
    CI: ()=>P,
    Cn: ()=>M,
    bl: ()=>w,
    Zu: ()=>b,
    t$: ()=>pe,
    b0: ()=>ye,
    rv: ()=>ae,
    P0: ()=>Z,
    Oy: ()=>N,
    qG: ()=>f,
    cG: ()=>y,
    VO: ()=>re,
    Zc: ()=>h,
    Lc: ()=>I,
    Zy: ()=>A,
    v1: ()=>E,
    Ko: ()=>k,
    $N: ()=>C,
    Ax: ()=>T,
    LJ: ()=>X,
    h8: ()=>F,
    GY: ()=>x,
    nu: ()=>ne,
    Py: ()=>v,
    Um: ()=>J,
    N$: ()=>ue,
    x8: ()=>$,
    qc: ()=>ie,
    vz: ()=>L,
    I: ()=>U,
    L8: ()=>Y,
    ig: ()=>se,
    _m: ()=>he,
    VF: ()=>ce,
    Sb: ()=>fe,
    h: ()=>te,
    $v: ()=>d,
    EY: ()=>p,
    Wc: ()=>oe,
    W4: ()=>u,
    g5: ()=>_,
    VY: ()=>g,
    Zn: ()=>m,
    cu: ()=>K,
    GP: ()=>j,
    TF: ()=>S
});
var n = require("./module-39567.js"), o = require("./module-47381.js");
class s {
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
var i = require("./module-4287.js"), a = require("./module-58927.js"), l = require("./module-7246.js");
const c = {
    major: 4,
    minor: 0,
    patch: 0
}, u = o.xI("$ZodType", (e, t)=>{
    var r;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = c;
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
            let n, s = l.QH(e);
            for (const i of t){
                if (i._zod.def.when) {
                    if (!i._zod.def.when(e)) continue;
                } else if (s) continue;
                const t = e.issues.length, a = i._zod.check(e);
                if (a instanceof Promise && !1 === r?.async) throw new o.GT;
                if (n || a instanceof Promise) n = (n ?? Promise.resolve()).then(async ()=>{
                    await a;
                    e.issues.length !== t && (s || (s = l.QH(e, t)));
                });
                else {
                    if (e.issues.length === t) continue;
                    s || (s = l.QH(e, t));
                }
            }
            return n ? n.then(()=>e) : e;
        };
        e._zod.run = (r, s)=>{
            const i = e._zod.parse(r, s);
            if (i instanceof Promise) {
                if (!1 === s.async) throw new o.GT;
                return i.then((e)=>t(e, n, s));
            }
            return t(i, n, s);
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
}), d = o.xI("$ZodString", (e, t)=>{
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
}), p = o.xI("$ZodStringFormat", (e, t)=>{
    n.ql.init(e, t), d.init(e, t);
}), h = o.xI("$ZodGUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Os), p.init(e, t);
}), m = o.xI("$ZodUUID", (e, t)=>{
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
}), f = o.xI("$ZodEmail", (e, t)=>{
    t.pattern ?? (t.pattern = a.Rp), p.init(e, t);
}), g = o.xI("$ZodURL", (e, t)=>{
    p.init(e, t), e._zod.check = (r)=>{
        try {
            const n = r.value, o = new URL(n), s = o.href;
            return t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: a.OI.source,
                input: r.value,
                inst: e,
                continue: !t.abort
            })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: t.protocol.source,
                input: r.value,
                inst: e,
                continue: !t.abort
            })), void (!n.endsWith("/") && s.endsWith("/") ? r.value = s.slice(0, -1) : r.value = s);
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
}), y = o.xI("$ZodEmoji", (e, t)=>{
    t.pattern ?? (t.pattern = a.Zg()), p.init(e, t);
}), v = o.xI("$ZodNanoID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Ak), p.init(e, t);
}), w = o.xI("$ZodCUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.gF), p.init(e, t);
}), b = o.xI("$ZodCUID2", (e, t)=>{
    t.pattern ?? (t.pattern = a.Gl), p.init(e, t);
}), _ = o.xI("$ZodULID", (e, t)=>{
    t.pattern ?? (t.pattern = a.Z0), p.init(e, t);
}), S = o.xI("$ZodXID", (e, t)=>{
    t.pattern ?? (t.pattern = a.kM), p.init(e, t);
}), x = o.xI("$ZodKSUID", (e, t)=>{
    t.pattern ?? (t.pattern = a.fO), p.init(e, t);
}), k = o.xI("$ZodISODateTime", (e, t)=>{
    t.pattern ?? (t.pattern = a.w$(t)), p.init(e, t);
}), E = o.xI("$ZodISODate", (e, t)=>{
    t.pattern ?? (t.pattern = a.p6), p.init(e, t);
}), T = o.xI("$ZodISOTime", (e, t)=>{
    t.pattern ?? (t.pattern = a.kB(t)), p.init(e, t);
}), C = o.xI("$ZodISODuration", (e, t)=>{
    t.pattern ?? (t.pattern = a.p0), p.init(e, t);
}), I = o.xI("$ZodIPv4", (e, t)=>{
    t.pattern ?? (t.pattern = a.uX), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.format = "ipv4";
    });
}), A = o.xI("$ZodIPv6", (e, t)=>{
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
}), P = o.xI("$ZodCIDRv4", (e, t)=>{
    t.pattern ?? (t.pattern = a.zr), p.init(e, t);
}), M = o.xI("$ZodCIDRv6", (e, t)=>{
    t.pattern ?? (t.pattern = a.l7), p.init(e, t), e._zod.check = (r)=>{
        const [n, o] = r.value.split("/");
        try {
            if (!o) throw new Error;
            const e = Number(o);
            if (`${e}` !== o) throw new Error;
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
function R(e) {
    if ("" === e) return !0;
    if (e.length % 4 != 0) return !1;
    try {
        return atob(e), !0;
    } catch  {
        return !1;
    }
}
const O = o.xI("$ZodBase64", (e, t)=>{
    t.pattern ?? (t.pattern = a.K3), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.contentEncoding = "base64";
    }), e._zod.check = (r)=>{
        R(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const D = o.xI("$ZodBase64URL", (e, t)=>{
    t.pattern ?? (t.pattern = a.r0), p.init(e, t), e._zod.onattach.push((e)=>{
        e._zod.bag.contentEncoding = "base64url";
    }), e._zod.check = (r)=>{
        (function(e) {
            if (!a.r0.test(e)) return !1;
            const t = e.replace(/[-_]/g, (e)=>"-" === e ? "+" : "/");
            return R(t.padEnd(4 * Math.ceil(t.length / 4), "="));
        })(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), N = o.xI("$ZodE164", (e, t)=>{
    t.pattern ?? (t.pattern = a.hQ), p.init(e, t);
});
const F = o.xI("$ZodJWT", (e, t)=>{
    p.init(e, t), e._zod.check = (r)=>{
        (function(e, t = null) {
            try {
                const r = e.split(".");
                if (3 !== r.length) return !1;
                const [n] = r;
                if (!n) return !1;
                const o = JSON.parse(atob(n));
                return !("typ" in o && "JWT" !== o?.typ || !o.alg || t && (!("alg" in o) || o.alg !== t));
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
}), L = o.xI("$ZodNumber", (e, t)=>{
    u.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? a.ai, e._zod.parse = (r, n)=>{
        if (t.coerce) try {
            r.value = Number(r.value);
        } catch (e) {}
        const o = r.value;
        if ("number" == typeof o && !Number.isNaN(o) && Number.isFinite(o)) return r;
        const s = "number" == typeof o ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
        return r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: o,
            inst: e,
            ...s ? {
                received: s
            } : {}
        }), r;
    };
}), U = o.xI("$ZodNumber", (e, t)=>{
    n.KH.init(e, t), L.init(e, t);
}), B = o.xI("$ZodBoolean", (e, t)=>{
    u.init(e, t), e._zod.pattern = a.zM, e._zod.parse = (r, n)=>{
        if (t.coerce) try {
            r.value = Boolean(r.value);
        } catch (e) {}
        const o = r.value;
        return "boolean" == typeof o || r.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: o,
            inst: e
        }), r;
    };
}), $ = o.xI("$ZodNull", (e, t)=>{
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
}), q = o.xI("$ZodAny", (e, t)=>{
    u.init(e, t), e._zod.parse = (e)=>e;
}), j = o.xI("$ZodUnknown", (e, t)=>{
    u.init(e, t), e._zod.parse = (e)=>e;
}), J = o.xI("$ZodNever", (e, t)=>{
    u.init(e, t), e._zod.parse = (t, r)=>(t.issues.push({
            expected: "never",
            code: "invalid_type",
            input: t.value,
            inst: e
        }), t);
});
function z(e, t, r) {
    e.issues.length && t.issues.push(...l.lQ(r, e.issues)), t.value[r] = e.value;
}
const H = o.xI("$ZodArray", (e, t)=>{
    u.init(e, t), e._zod.parse = (r, n)=>{
        const o = r.value;
        if (!Array.isArray(o)) return r.issues.push({
            expected: "array",
            code: "invalid_type",
            input: o,
            inst: e
        }), r;
        r.value = Array(o.length);
        const s = [];
        for(let e = 0; e < o.length; e++){
            const i = o[e], a = t.element._zod.run({
                value: i,
                issues: []
            }, n);
            a instanceof Promise ? s.push(a.then((t)=>z(t, r, e))) : z(a, r, e);
        }
        return s.length ? Promise.all(s).then(()=>r) : r;
    };
});
function W(e, t, r) {
    e.issues.length && t.issues.push(...l.lQ(r, e.issues)), t.value[r] = e.value;
}
function G(e, t, r, n) {
    e.issues.length ? void 0 === n[r] ? t.value[r] = r in n ? void 0 : e.value : t.issues.push(...l.lQ(r, e.issues)) : void 0 === e.value ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
const Y = o.xI("$ZodObject", (e, t)=>{
    u.init(e, t);
    const r = l.PO(()=>{
        const e = Object.keys(t.shape);
        for (const r of e)if (!(t.shape[r] instanceof u)) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
        const r = l.NM(t.shape);
        return {
            shape: t.shape,
            keys: e,
            keySet: new Set(e),
            numKeys: e.length,
            optionalKeys: new Set(r)
        };
    });
    l.gJ(e._zod, "propValues", ()=>{
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
    const i = l.Gv, a = !o.cr.jitless, c = l.hI, d = a && c.value, p = t.catchall;
    let h;
    e._zod.parse = (o, c)=>{
        h ?? (h = r.value);
        const u = o.value;
        if (!i(u)) return o.issues.push({
            expected: "object",
            code: "invalid_type",
            input: u,
            inst: e
        }), o;
        const m = [];
        if (a && d && !1 === c?.async && !0 !== c.jitless) n || (n = ((e)=>{
            const t = new s([
                "shape",
                "payload",
                "ctx"
            ]), n = r.value, o = (e)=>{
                const t = l.UQ(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
            };
            t.write("const input = payload.value;");
            const i = Object.create(null);
            let a = 0;
            for (const e of n.keys)i[e] = "key_" + a++;
            t.write("const newResult = {}");
            for (const e of n.keys)if (n.optionalKeys.has(e)) {
                const r = i[e];
                t.write(`const ${r} = ${o(e)};`);
                const n = l.UQ(e);
                t.write(`\n        if (${r}.issues.length) {\n          if (input[${n}] === undefined) {\n            if (${n} in input) {\n              newResult[${n}] = undefined;\n            }\n          } else {\n            payload.issues = payload.issues.concat(\n              ${r}.issues.map((iss) => ({\n                ...iss,\n                path: iss.path ? [${n}, ...iss.path] : [${n}],\n              }))\n            );\n          }\n        } else if (${r}.value === undefined) {\n          if (${n} in input) newResult[${n}] = undefined;\n        } else {\n          newResult[${n}] = ${r}.value;\n        }\n        `);
            } else {
                const r = i[e];
                t.write(`const ${r} = ${o(e)};`), t.write(`\n          if (${r}.issues.length) payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${l.UQ(e)}, ...iss.path] : [${l.UQ(e)}]\n          })));`), t.write(`newResult[${l.UQ(e)}] = ${r}.value`);
            }
            t.write("payload.value = newResult;"), t.write("return payload;");
            const c = t.compile();
            return (t, r)=>c(e, t, r);
        })(t.shape)), o = n(o, c);
        else {
            o.value = {};
            const e = h.shape;
            for (const t of h.keys){
                const r = e[t], n = r._zod.run({
                    value: u[t],
                    issues: []
                }, c), s = "optional" === r._zod.optin && "optional" === r._zod.optout;
                n instanceof Promise ? m.push(n.then((e)=>s ? G(e, o, t, u) : W(e, o, t))) : s ? G(n, o, t, u) : W(n, o, t);
            }
        }
        if (!p) return m.length ? Promise.all(m).then(()=>o) : o;
        const f = [], g = h.keySet, y = p._zod, v = y.def.type;
        for (const e of Object.keys(u)){
            if (g.has(e)) continue;
            if ("never" === v) {
                f.push(e);
                continue;
            }
            const t = y.run({
                value: u[e],
                issues: []
            }, c);
            t instanceof Promise ? m.push(t.then((t)=>W(t, o, e))) : W(t, o, e);
        }
        return f.length && o.issues.push({
            code: "unrecognized_keys",
            keys: f,
            input: u,
            inst: e
        }), m.length ? Promise.all(m).then(()=>o) : o;
    };
});
function V(e, t, r, n) {
    for (const r of e)if (0 === r.issues.length) return t.value = r.value, t;
    return t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: r,
        errors: e.map((e)=>e.issues.map((e)=>l.iR(e, n, o.$W())))
    }), t;
}
const K = o.xI("$ZodUnion", (e, t)=>{
    u.init(e, t), l.gJ(e._zod, "optin", ()=>t.options.some((e)=>"optional" === e._zod.optin) ? "optional" : void 0), l.gJ(e._zod, "optout", ()=>t.options.some((e)=>"optional" === e._zod.optout) ? "optional" : void 0), l.gJ(e._zod, "values", ()=>{
        if (t.options.every((e)=>e._zod.values)) return new Set(t.options.flatMap((e)=>Array.from(e._zod.values)));
    }), l.gJ(e._zod, "pattern", ()=>{
        if (t.options.every((e)=>e._zod.pattern)) {
            const e = t.options.map((e)=>e._zod.pattern);
            return new RegExp(`^(${e.map((e)=>l.p6(e.source)).join("|")})$`);
        }
    }), e._zod.parse = (r, n)=>{
        let o = !1;
        const s = [];
        for (const e of t.options){
            const t = e._zod.run({
                value: r.value,
                issues: []
            }, n);
            if (t instanceof Promise) s.push(t), o = !0;
            else {
                if (0 === t.issues.length) return t;
                s.push(t);
            }
        }
        return o ? Promise.all(s).then((t)=>V(t, r, e, n)) : V(s, r, e, n);
    };
}), Z = o.xI("$ZodDiscriminatedUnion", (e, t)=>{
    K.init(e, t);
    const r = e._zod.parse;
    l.gJ(e._zod, "propValues", ()=>{
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
    const n = l.PO(()=>{
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
    e._zod.parse = (o, s)=>{
        const i = o.value;
        if (!l.Gv(i)) return o.issues.push({
            code: "invalid_type",
            expected: "object",
            input: i,
            inst: e
        }), o;
        const a = n.value.get(i?.[t.discriminator]);
        return a ? a._zod.run(o, s) : t.unionFallback ? r(o, s) : (o.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            input: i,
            path: [
                t.discriminator
            ],
            inst: e
        }), o);
    };
}), X = o.xI("$ZodIntersection", (e, t)=>{
    u.init(e, t), e._zod.parse = (e, r)=>{
        const n = e.value, o = t.left._zod.run({
            value: n,
            issues: []
        }, r), s = t.right._zod.run({
            value: n,
            issues: []
        }, r);
        return o instanceof Promise || s instanceof Promise ? Promise.all([
            o,
            s
        ]).then(([t, r])=>ee(e, t, r)) : ee(e, o, s);
    };
});
function Q(e, t) {
    if (e === t) return {
        valid: !0,
        data: e
    };
    if (e instanceof Date && t instanceof Date && +e === +t) return {
        valid: !0,
        data: e
    };
    if (l.Qd(e) && l.Qd(t)) {
        const r = Object.keys(t), n = Object.keys(e).filter((e)=>-1 !== r.indexOf(e)), o = {
            ...e,
            ...t
        };
        for (const r of n){
            const n = Q(e[r], t[r]);
            if (!n.valid) return {
                valid: !1,
                mergeErrorPath: [
                    r,
                    ...n.mergeErrorPath
                ]
            };
            o[r] = n.data;
        }
        return {
            valid: !0,
            data: o
        };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return {
            valid: !1,
            mergeErrorPath: []
        };
        const r = [];
        for(let n = 0; n < e.length; n++){
            const o = Q(e[n], t[n]);
            if (!o.valid) return {
                valid: !1,
                mergeErrorPath: [
                    n,
                    ...o.mergeErrorPath
                ]
            };
            r.push(o.data);
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
    if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), l.QH(e)) return e;
    const n = Q(t.value, r.value);
    if (!n.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
    return e.value = n.data, e;
}
const te = o.xI("$ZodRecord", (e, t)=>{
    u.init(e, t), e._zod.parse = (r, n)=>{
        const s = r.value;
        if (!l.Qd(s)) return r.issues.push({
            expected: "record",
            code: "invalid_type",
            input: s,
            inst: e
        }), r;
        const i = [];
        if (t.keyType._zod.values) {
            const o = t.keyType._zod.values;
            r.value = {};
            for (const e of o)if ("string" == typeof e || "number" == typeof e || "symbol" == typeof e) {
                const o = t.valueType._zod.run({
                    value: s[e],
                    issues: []
                }, n);
                o instanceof Promise ? i.push(o.then((t)=>{
                    t.issues.length && r.issues.push(...l.lQ(e, t.issues)), r.value[e] = t.value;
                })) : (o.issues.length && r.issues.push(...l.lQ(e, o.issues)), r.value[e] = o.value);
            }
            let a;
            for(const e in s)o.has(e) || (a = a ?? [], a.push(e));
            a && a.length > 0 && r.issues.push({
                code: "unrecognized_keys",
                input: s,
                inst: e,
                keys: a
            });
        } else {
            r.value = {};
            for (const a of Reflect.ownKeys(s)){
                if ("__proto__" === a) continue;
                const c = t.keyType._zod.run({
                    value: a,
                    issues: []
                }, n);
                if (c instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                if (c.issues.length) {
                    r.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: c.issues.map((e)=>l.iR(e, n, o.$W())),
                        input: a,
                        path: [
                            a
                        ],
                        inst: e
                    }), r.value[c.value] = c.value;
                    continue;
                }
                const u = t.valueType._zod.run({
                    value: s[a],
                    issues: []
                }, n);
                u instanceof Promise ? i.push(u.then((e)=>{
                    e.issues.length && r.issues.push(...l.lQ(a, e.issues)), r.value[c.value] = e.value;
                })) : (u.issues.length && r.issues.push(...l.lQ(a, u.issues)), r.value[c.value] = u.value);
            }
        }
        return i.length ? Promise.all(i).then(()=>r) : r;
    };
});
const re = o.xI("$ZodEnum", (e, t)=>{
    u.init(e, t);
    const r = l.w5(t.entries);
    e._zod.values = new Set(r), e._zod.pattern = new RegExp(`^(${r.filter((e)=>l.qQ.has(typeof e)).map((e)=>"string" == typeof e ? l.$f(e) : e.toString()).join("|")})$`), e._zod.parse = (t, n)=>{
        const o = t.value;
        return e._zod.values.has(o) || t.issues.push({
            code: "invalid_value",
            values: r,
            input: o,
            inst: e
        }), t;
    };
}), ne = o.xI("$ZodLiteral", (e, t)=>{
    u.init(e, t), e._zod.values = new Set(t.values), e._zod.pattern = new RegExp(`^(${t.values.map((e)=>"string" == typeof e ? l.$f(e) : e ? e.toString() : String(e)).join("|")})$`), e._zod.parse = (r, n)=>{
        const o = r.value;
        return e._zod.values.has(o) || r.issues.push({
            code: "invalid_value",
            values: t.values,
            input: o,
            inst: e
        }), r;
    };
}), oe = o.xI("$ZodTransform", (e, t)=>{
    u.init(e, t), e._zod.parse = (e, r)=>{
        const n = t.transform(e.value, e);
        if (r.async) {
            return (n instanceof Promise ? n : Promise.resolve(n)).then((t)=>(e.value = t, e));
        }
        if (n instanceof Promise) throw new o.GT;
        return e.value = n, e;
    };
}), se = o.xI("$ZodOptional", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", l.gJ(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            void 0
        ]) : void 0), l.gJ(e._zod, "pattern", ()=>{
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${l.p6(e.source)})?$`) : void 0;
    }), e._zod.parse = (e, r)=>"optional" === t.innerType._zod.optin ? t.innerType._zod.run(e, r) : void 0 === e.value ? e : t.innerType._zod.run(e, r);
}), ie = o.xI("$ZodNullable", (e, t)=>{
    u.init(e, t), l.gJ(e._zod, "optin", ()=>t.innerType._zod.optin), l.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), l.gJ(e._zod, "pattern", ()=>{
        const e = t.innerType._zod.pattern;
        return e ? new RegExp(`^(${l.p6(e.source)}|null)$`) : void 0;
    }), l.gJ(e._zod, "values", ()=>t.innerType._zod.values ? new Set([
            ...t.innerType._zod.values,
            null
        ]) : void 0), e._zod.parse = (e, r)=>null === e.value ? e : t.innerType._zod.run(e, r);
}), ae = o.xI("$ZodDefault", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", l.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
        if (void 0 === e.value) return e.value = t.defaultValue, e;
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then((e)=>le(e, t)) : le(n, t);
    };
});
function le(e, t) {
    return void 0 === e.value && (e.value = t.defaultValue), e;
}
const ce = o.xI("$ZodPrefault", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", l.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>(void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, r));
}), ue = o.xI("$ZodNonOptional", (e, t)=>{
    u.init(e, t), l.gJ(e._zod, "values", ()=>{
        const e = t.innerType._zod.values;
        return e ? new Set([
            ...e
        ].filter((e)=>void 0 !== e)) : void 0;
    }), e._zod.parse = (r, n)=>{
        const o = t.innerType._zod.run(r, n);
        return o instanceof Promise ? o.then((t)=>de(t, e)) : de(o, e);
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
const pe = o.xI("$ZodCatch", (e, t)=>{
    u.init(e, t), e._zod.optin = "optional", l.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), l.gJ(e._zod, "values", ()=>t.innerType._zod.values), e._zod.parse = (e, r)=>{
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then((n)=>(e.value = n.value, n.issues.length && (e.value = t.catchValue({
                ...e,
                error: {
                    issues: n.issues.map((e)=>l.iR(e, r, o.$W()))
                },
                input: e.value
            }), e.issues = []), e)) : (e.value = n.value, n.issues.length && (e.value = t.catchValue({
            ...e,
            error: {
                issues: n.issues.map((e)=>l.iR(e, r, o.$W()))
            },
            input: e.value
        }), e.issues = []), e);
    };
}), he = o.xI("$ZodPipe", (e, t)=>{
    u.init(e, t), l.gJ(e._zod, "values", ()=>t.in._zod.values), l.gJ(e._zod, "optin", ()=>t.in._zod.optin), l.gJ(e._zod, "optout", ()=>t.out._zod.optout), e._zod.parse = (e, r)=>{
        const n = t.in._zod.run(e, r);
        return n instanceof Promise ? n.then((e)=>me(e, t, r)) : me(n, t, r);
    };
});
function me(e, t, r) {
    return l.QH(e) ? e : t.out._zod.run({
        value: e.value,
        issues: e.issues
    }, r);
}
const fe = o.xI("$ZodReadonly", (e, t)=>{
    u.init(e, t), l.gJ(e._zod, "propValues", ()=>t.innerType._zod.propValues), l.gJ(e._zod, "values", ()=>t.innerType._zod.values), l.gJ(e._zod, "optin", ()=>t.innerType._zod.optin), l.gJ(e._zod, "optout", ()=>t.innerType._zod.optout), e._zod.parse = (e, r)=>{
        const n = t.innerType._zod.run(e, r);
        return n instanceof Promise ? n.then(ge) : ge(n);
    };
});
function ge(e) {
    return e.value = Object.freeze(e.value), e;
}
const ye = o.xI("$ZodCustom", (e, t)=>{
    n.QP.init(e, t), u.init(e, t), e._zod.parse = (e, t)=>e, e._zod.check = (r)=>{
        const n = r.value, o = t.fn(n);
        if (o instanceof Promise) return o.then((t)=>ve(t, r, n, e));
        ve(o, r, n, e);
    };
});
function ve(e, t, r, n) {
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
        n._zod.def.params && (e.params = n._zod.def.params), t.issues.push(l.sn(e));
    }
}
