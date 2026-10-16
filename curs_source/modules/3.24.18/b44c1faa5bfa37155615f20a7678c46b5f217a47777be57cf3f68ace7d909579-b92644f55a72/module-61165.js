"use strict";
require.d(exports, {
    rS: ()=>G,
    EB: ()=>E,
    bz: ()=>ee,
    YO: ()=>ie,
    zM: ()=>K,
    Ie: ()=>De,
    gM: ()=>me,
    k5: ()=>ve,
    E$: ()=>fe,
    eu: ()=>Ae,
    _H: ()=>le,
    ch: ()=>Z,
    ai: ()=>H,
    Ik: ()=>ce,
    lq: ()=>Ie,
    vk: ()=>Oe,
    g1: ()=>ye,
    Yj: ()=>b,
    KC: ()=>de,
    L5: ()=>re,
    OZ: ()=>T
});
var n = require("./module-47381.js"), s = require("./module-25521.js"), o = require("./module-7246.js");
Symbol("ZodOutput"), Symbol("ZodInput");
class i {
    constructor(){
        this._map = new Map, this._idmap = new Map;
    }
    add(e, ...t) {
        const r = t[0];
        if (this._map.set(e, r), r && "object" == typeof r && "id" in r) {
            if (this._idmap.has(r.id)) throw new Error(`ID ${r.id} already exists in the registry`);
            this._idmap.set(r.id, e);
        }
        return this;
    }
    clear() {
        return this._map = new Map, this._idmap = new Map, this;
    }
    remove(e) {
        const t = this._map.get(e);
        return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
    }
    get(e) {
        const t = e._zod.parent;
        if (t) {
            const r = {
                ...this.get(t) ?? {}
            };
            return delete r.id, {
                ...r,
                ...this._map.get(e)
            };
        }
        return this._map.get(e);
    }
    has(e) {
        return this._map.has(e);
    }
}
function a() {
    return new i;
}
const c = a();
var l = require("./module-87888.js"), u = require("./module-39567.js"), d = require("./module-78880.js"), p = require("./module-4287.js"), m = require("./module-6749.js");
const h = (e, t)=>{
    m.a$.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
        format: {
            value: (t)=>m.Wk(e, t)
        },
        flatten: {
            value: (t)=>m.JM(e, t)
        },
        addIssue: {
            value: (t)=>e.issues.push(t)
        },
        addIssues: {
            value: (t)=>e.issues.push(...t)
        },
        isEmpty: {
            get: ()=>0 === e.issues.length
        }
    });
}, f = (n.xI("ZodError", h), n.xI("ZodError", h, {
    Parent: Error
})), g = p.Tj(f), y = p.Rb(f), w = p.Od(f), v = p.wG(f), _ = n.xI("ZodType", (e, t)=>(s.W4.init(e, t), e.def = t, Object.defineProperty(e, "_def", {
        value: t
    }), e.check = (...r)=>e.clone({
            ...t,
            checks: [
                ...t.checks ?? [],
                ...r.map((e)=>"function" == typeof e ? {
                        _zod: {
                            check: e,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : e)
            ]
        }), e.clone = (t, r)=>o.o8(e, t, r), e.brand = ()=>e, e.register = (t, r)=>(t.add(e, r), e), e.parse = (t, r)=>g(e, t, r, {
            callee: e.parse
        }), e.safeParse = (t, r)=>w(e, t, r), e.parseAsync = async (t, r)=>y(e, t, r, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (t, r)=>v(e, t, r), e.spa = e.safeParseAsync, e.refine = (t, r)=>e.check(function(e, t = {}) {
            return l.fU(qe, e, t);
        }(t, r)), e.superRefine = (t)=>e.check(function(e) {
            const t = function(e) {
                const t = new u.QP({
                    check: "custom"
                });
                return t._zod.check = e, t;
            }((r)=>(r.addIssue = (e)=>{
                    if ("string" == typeof e) r.issues.push(o.sn(e, r.value, t._zod.def));
                    else {
                        const n = e;
                        n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(o.sn(n));
                    }
                }, e(r.value, r)));
            return t;
        }(t)), e.overwrite = (t)=>e.check(l.bS(t)), e.optional = ()=>Ie(e), e.nullable = ()=>ke(e), e.nullish = ()=>Ie(ke(e)), e.nonoptional = (t)=>(function(e, t) {
            return new Re({
                type: "nonoptional",
                innerType: e,
                ...o.A2(t)
            });
        })(e, t), e.array = ()=>ie(e), e.or = (t)=>de([
            e,
            t
        ]), e.and = (t)=>fe(e, t), e.transform = (t)=>Je(e, be(t)), e.default = (t)=>{
        return r = t, new xe({
            type: "default",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.prefault = (t)=>{
        return r = t, new Te({
            type: "prefault",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.catch = (t)=>{
        return new Be({
            type: "catch",
            innerType: e,
            catchValue: "function" == typeof (r = t) ? r : ()=>r
        });
        var r;
    }, e.pipe = (t)=>Je(e, t), e.readonly = ()=>new Me({
            type: "readonly",
            innerType: e
        }), e.describe = (t)=>{
        const r = e.clone();
        return c.add(r, {
            description: t
        }), r;
    }, Object.defineProperty(e, "description", {
        get: ()=>c.get(e)?.description,
        configurable: !0
    }), e.meta = (...t)=>{
        if (0 === t.length) return c.get(e);
        const r = e.clone();
        return c.add(r, t[0]), r;
    }, e.isOptional = ()=>e.safeParse(void 0).success, e.isNullable = ()=>e.safeParse(null).success, e)), A = n.xI("_ZodString", (e, t)=>{
    s.$v.init(e, t), _.init(e, t);
    const r = e._zod.bag;
    e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...t)=>e.check(l.Fk(...t)), e.includes = (...t)=>e.check(l.dR(...t)), e.startsWith = (...t)=>e.check(l.$S(...t)), e.endsWith = (...t)=>e.check(l.ER(...t)), e.min = (...t)=>e.check(l.m9(...t)), e.max = (...t)=>e.check(l.Eb(...t)), e.length = (...t)=>e.check(l.YA(...t)), e.nonempty = (...t)=>e.check(l.m9(1, ...t)), e.lowercase = (t)=>e.check(l.hH(t)), e.uppercase = (t)=>e.check(l.qF(t)), e.trim = ()=>e.check(l.WN()), e.normalize = (...t)=>e.check(l.lo(...t)), e.toLowerCase = ()=>e.check(l.Il()), e.toUpperCase = ()=>e.check(l.xY());
}), S = n.xI("ZodString", (e, t)=>{
    s.$v.init(e, t), A.init(e, t), e.email = (t)=>e.check(l.Mu(I, t)), e.url = (t)=>e.check(l.Fn(x, t)), e.jwt = (t)=>e.check(l.rk(j, t)), e.emoji = (t)=>e.check(l.aC(R, t)), e.guid = (t)=>e.check(l.tB(C, t)), e.uuid = (t)=>e.check(l.Be(k, t)), e.uuidv4 = (t)=>e.check(l.nA(k, t)), e.uuidv6 = (t)=>e.check(l.pY(k, t)), e.uuidv7 = (t)=>e.check(l.wA(k, t)), e.nanoid = (t)=>e.check(l.Dl(B, t)), e.guid = (t)=>e.check(l.tB(C, t)), e.cuid = (t)=>e.check(l.fs(P, t)), e.cuid2 = (t)=>e.check(l.Bj(J, t)), e.ulid = (t)=>e.check(l.Ct(M, t)), e.base64 = (t)=>e.check(l.rt(L, t)), e.base64url = (t)=>e.check(l.cU($, t)), e.xid = (t)=>e.check(l.Pw(q, t)), e.ksuid = (t)=>e.check(l._z(D, t)), e.ipv4 = (t)=>e.check(l.Ny(O, t)), e.ipv6 = (t)=>e.check(l.$O(N, t)), e.cidrv4 = (t)=>e.check(l.Uy(F, t)), e.cidrv6 = (t)=>e.check(l.gP(U, t)), e.e164 = (t)=>e.check(l.KB(Q, t)), e.datetime = (t)=>e.check(d.w$(t)), e.date = (t)=>e.check(d.p6(t)), e.time = (t)=>e.check(d.kB(t)), e.duration = (t)=>e.check(d.p0(t));
});
function b(e) {
    return l.Rl(S, e);
}
const E = n.xI("ZodStringFormat", (e, t)=>{
    s.EY.init(e, t), A.init(e, t);
}), I = n.xI("ZodEmail", (e, t)=>{
    s.qG.init(e, t), E.init(e, t);
});
const C = n.xI("ZodGUID", (e, t)=>{
    s.Zc.init(e, t), E.init(e, t);
});
const k = n.xI("ZodUUID", (e, t)=>{
    s.Zn.init(e, t), E.init(e, t);
});
const x = n.xI("ZodURL", (e, t)=>{
    s.VY.init(e, t), E.init(e, t);
});
function T(e) {
    return l.Fn(x, e);
}
const R = n.xI("ZodEmoji", (e, t)=>{
    s.cG.init(e, t), E.init(e, t);
});
const B = n.xI("ZodNanoID", (e, t)=>{
    s.Py.init(e, t), E.init(e, t);
});
const P = n.xI("ZodCUID", (e, t)=>{
    s.bl.init(e, t), E.init(e, t);
});
const J = n.xI("ZodCUID2", (e, t)=>{
    s.Zu.init(e, t), E.init(e, t);
});
const M = n.xI("ZodULID", (e, t)=>{
    s.g5.init(e, t), E.init(e, t);
});
const q = n.xI("ZodXID", (e, t)=>{
    s.TF.init(e, t), E.init(e, t);
});
const D = n.xI("ZodKSUID", (e, t)=>{
    s.GY.init(e, t), E.init(e, t);
});
const O = n.xI("ZodIPv4", (e, t)=>{
    s.Lc.init(e, t), E.init(e, t);
});
const N = n.xI("ZodIPv6", (e, t)=>{
    s.Zy.init(e, t), E.init(e, t);
});
const F = n.xI("ZodCIDRv4", (e, t)=>{
    s.CI.init(e, t), E.init(e, t);
});
const U = n.xI("ZodCIDRv6", (e, t)=>{
    s.Cn.init(e, t), E.init(e, t);
});
const L = n.xI("ZodBase64", (e, t)=>{
    s.Dq.init(e, t), E.init(e, t);
});
const $ = n.xI("ZodBase64URL", (e, t)=>{
    s.CQ.init(e, t), E.init(e, t);
});
const Q = n.xI("ZodE164", (e, t)=>{
    s.Oy.init(e, t), E.init(e, t);
});
const j = n.xI("ZodJWT", (e, t)=>{
    s.h8.init(e, t), E.init(e, t);
});
const G = n.xI("ZodNumber", (e, t)=>{
    s.vz.init(e, t), _.init(e, t), e.gt = (t, r)=>e.check(l.Tx(t, r)), e.gte = (t, r)=>e.check(l.qm(t, r)), e.min = (t, r)=>e.check(l.qm(t, r)), e.lt = (t, r)=>e.check(l.Au(t, r)), e.lte = (t, r)=>e.check(l.Zm(t, r)), e.max = (t, r)=>e.check(l.Zm(t, r)), e.int = (t)=>e.check(W(t)), e.safe = (t)=>e.check(W(t)), e.positive = (t)=>e.check(l.Tx(0, t)), e.nonnegative = (t)=>e.check(l.qm(0, t)), e.negative = (t)=>e.check(l.Au(0, t)), e.nonpositive = (t)=>e.check(l.Zm(0, t)), e.multipleOf = (t, r)=>e.check(l.Hi(t, r)), e.step = (t, r)=>e.check(l.Hi(t, r)), e.finite = ()=>e;
    const r = e._zod.bag;
    e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), e.isFinite = !0, e.format = r.format ?? null;
});
function H(e) {
    return l.F7(G, e);
}
const z = n.xI("ZodNumberFormat", (e, t)=>{
    s.I.init(e, t), G.init(e, t);
});
function W(e) {
    return l.LK(z, e);
}
const V = n.xI("ZodBoolean", (e, t)=>{
    s.sF.init(e, t), _.init(e, t);
});
function K(e) {
    return l._L(V, e);
}
const Y = n.xI("ZodNull", (e, t)=>{
    s.x8.init(e, t), _.init(e, t);
});
function Z(e) {
    return l.jw(Y, e);
}
const X = n.xI("ZodAny", (e, t)=>{
    s.Gb.init(e, t), _.init(e, t);
});
function ee() {
    return l.KA(X);
}
const te = n.xI("ZodUnknown", (e, t)=>{
    s.GP.init(e, t), _.init(e, t);
});
function re() {
    return l.em(te);
}
const ne = n.xI("ZodNever", (e, t)=>{
    s.Um.init(e, t), _.init(e, t);
});
function se(e) {
    return l.G8(ne, e);
}
const oe = n.xI("ZodArray", (e, t)=>{
    s.$p.init(e, t), _.init(e, t), e.element = t.element, e.min = (t, r)=>e.check(l.m9(t, r)), e.nonempty = (t)=>e.check(l.m9(1, t)), e.max = (t, r)=>e.check(l.Eb(t, r)), e.length = (t, r)=>e.check(l.YA(t, r)), e.unwrap = ()=>e.element;
});
function ie(e, t) {
    return l.dZ(oe, e, t);
}
const ae = n.xI("ZodObject", (e, t)=>{
    s.L8.init(e, t), _.init(e, t), o.gJ(e, "shape", ()=>t.shape), e.keyof = ()=>ve(Object.keys(e._zod.def.shape)), e.catchall = (t)=>e.clone({
            ...e._zod.def,
            catchall: t
        }), e.passthrough = ()=>e.clone({
            ...e._zod.def,
            catchall: re()
        }), e.loose = ()=>e.clone({
            ...e._zod.def,
            catchall: re()
        }), e.strict = ()=>e.clone({
            ...e._zod.def,
            catchall: se()
        }), e.strip = ()=>e.clone({
            ...e._zod.def,
            catchall: void 0
        }), e.extend = (t)=>o.X$(e, t), e.merge = (t)=>o.h1(e, t), e.pick = (t)=>o.Up(e, t), e.omit = (t)=>o.cJ(e, t), e.partial = (...t)=>o.OH(Ee, e, t[0]), e.required = (...t)=>o.mw(Re, e, t[0]);
});
function ce(e, t) {
    const r = {
        type: "object",
        get shape () {
            return o.Vy(this, "shape", {
                ...e
            }), this.shape;
        },
        ...o.A2(t)
    };
    return new ae(r);
}
function le(e, t) {
    return new ae({
        type: "object",
        get shape () {
            return o.Vy(this, "shape", {
                ...e
            }), this.shape;
        },
        catchall: re(),
        ...o.A2(t)
    });
}
const ue = n.xI("ZodUnion", (e, t)=>{
    s.cu.init(e, t), _.init(e, t), e.options = t.options;
});
function de(e, t) {
    return new ue({
        type: "union",
        options: e,
        ...o.A2(t)
    });
}
const pe = n.xI("ZodDiscriminatedUnion", (e, t)=>{
    ue.init(e, t), s.P0.init(e, t);
});
function me(e, t, r) {
    return new pe({
        type: "union",
        options: t,
        discriminator: e,
        ...o.A2(r)
    });
}
const he = n.xI("ZodIntersection", (e, t)=>{
    s.LJ.init(e, t), _.init(e, t);
});
function fe(e, t) {
    return new he({
        type: "intersection",
        left: e,
        right: t
    });
}
const ge = n.xI("ZodRecord", (e, t)=>{
    s.h.init(e, t), _.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ye(e, t, r) {
    return new ge({
        type: "record",
        keyType: e,
        valueType: t,
        ...o.A2(r)
    });
}
const we = n.xI("ZodEnum", (e, t)=>{
    s.VO.init(e, t), _.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
    const r = new Set(Object.keys(t.entries));
    e.extract = (e, n)=>{
        const s = {};
        for (const n of e){
            if (!r.has(n)) throw new Error(`Key ${n} not found in enum`);
            s[n] = t.entries[n];
        }
        return new we({
            ...t,
            checks: [],
            ...o.A2(n),
            entries: s
        });
    }, e.exclude = (e, n)=>{
        const s = {
            ...t.entries
        };
        for (const t of e){
            if (!r.has(t)) throw new Error(`Key ${t} not found in enum`);
            delete s[t];
        }
        return new we({
            ...t,
            checks: [],
            ...o.A2(n),
            entries: s
        });
    };
});
function ve(e, t) {
    const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
            e,
            e
        ])) : e;
    return new we({
        type: "enum",
        entries: r,
        ...o.A2(t)
    });
}
const _e = n.xI("ZodLiteral", (e, t)=>{
    s.nu.init(e, t), _.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
        get () {
            if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return t.values[0];
        }
    });
});
function Ae(e, t) {
    return new _e({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...o.A2(t)
    });
}
const Se = n.xI("ZodTransform", (e, t)=>{
    s.Wc.init(e, t), _.init(e, t), e._zod.parse = (r, n)=>{
        r.addIssue = (n)=>{
            if ("string" == typeof n) r.issues.push(o.sn(n, r.value, t));
            else {
                const t = n;
                t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = r.value), t.inst ?? (t.inst = e), t.continue ?? (t.continue = !0), r.issues.push(o.sn(t));
            }
        };
        const s = t.transform(r.value, r);
        return s instanceof Promise ? s.then((e)=>(r.value = e, r)) : (r.value = s, r);
    };
});
function be(e) {
    return new Se({
        type: "transform",
        transform: e
    });
}
const Ee = n.xI("ZodOptional", (e, t)=>{
    s.ig.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function Ie(e) {
    return new Ee({
        type: "optional",
        innerType: e
    });
}
const Ce = n.xI("ZodNullable", (e, t)=>{
    s.qc.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function ke(e) {
    return new Ce({
        type: "nullable",
        innerType: e
    });
}
const xe = n.xI("ZodDefault", (e, t)=>{
    s.rv.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeDefault = e.unwrap;
});
const Te = n.xI("ZodPrefault", (e, t)=>{
    s.VF.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Re = n.xI("ZodNonOptional", (e, t)=>{
    s.N$.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Be = n.xI("ZodCatch", (e, t)=>{
    s.t$.init(e, t), _.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeCatch = e.unwrap;
});
const Pe = n.xI("ZodPipe", (e, t)=>{
    s._m.init(e, t), _.init(e, t), e.in = t.in, e.out = t.out;
});
function Je(e, t) {
    return new Pe({
        type: "pipe",
        in: e,
        out: t
    });
}
const Me = n.xI("ZodReadonly", (e, t)=>{
    s.Sb.init(e, t), _.init(e, t);
});
const qe = n.xI("ZodCustom", (e, t)=>{
    s.b0.init(e, t), _.init(e, t);
});
function De(e, t) {
    return l.FO(qe, e ?? (()=>!0), t);
}
function Oe(e, t) {
    return Je(be(e), t);
}
