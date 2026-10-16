"use strict";
require.d(exports, {
    rS: ()=>V,
    EB: ()=>E,
    bz: ()=>ee,
    YO: ()=>ie,
    zM: ()=>Y,
    Ie: ()=>Je,
    gM: ()=>fe,
    k5: ()=>ve,
    E$: ()=>me,
    eu: ()=>be,
    _H: ()=>ue,
    ch: ()=>X,
    ai: ()=>K,
    Ik: ()=>ce,
    lq: ()=>xe,
    vk: ()=>je,
    g1: ()=>ye,
    Yj: ()=>k,
    KC: ()=>de,
    L5: ()=>re,
    OZ: ()=>I
});
var n = require("./module-7381.js"), o = require("./module-5521.js"), s = require("./module-7246.js");
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
var u = require("./module-7888.js"), l = require("./module-9567.js"), d = require("./module-8880.js"), p = require("./module-4287.js"), f = require("./module-6749.js");
const h = (e, t)=>{
    f.a$.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
        format: {
            value: (t)=>f.Wk(e, t)
        },
        flatten: {
            value: (t)=>f.JM(e, t)
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
}, m = (n.xI("ZodError", h), n.xI("ZodError", h, {
    Parent: Error
})), g = p.Tj(m), y = p.Rb(m), _ = p.Od(m), v = p.wG(m), w = n.xI("ZodType", (e, t)=>(o.W4.init(e, t), e.def = t, Object.defineProperty(e, "_def", {
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
        }), e.clone = (t, r)=>s.o8(e, t, r), e.brand = ()=>e, e.register = (t, r)=>(t.add(e, r), e), e.parse = (t, r)=>g(e, t, r, {
            callee: e.parse
        }), e.safeParse = (t, r)=>_(e, t, r), e.parseAsync = async (t, r)=>y(e, t, r, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (t, r)=>v(e, t, r), e.spa = e.safeParseAsync, e.refine = (t, r)=>e.check(function(e, t = {}) {
            return u.fU(Me, e, t);
        }(t, r)), e.superRefine = (t)=>e.check(function(e) {
            const t = function(e) {
                const t = new l.QP({
                    check: "custom"
                });
                return t._zod.check = e, t;
            }((r)=>(r.addIssue = (e)=>{
                    if ("string" == typeof e) r.issues.push(s.sn(e, r.value, t._zod.def));
                    else {
                        const n = e;
                        n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(s.sn(n));
                    }
                }, e(r.value, r)));
            return t;
        }(t)), e.overwrite = (t)=>e.check(u.bS(t)), e.optional = ()=>xe(e), e.nullable = ()=>Oe(e), e.nullish = ()=>xe(Oe(e)), e.nonoptional = (t)=>(function(e, t) {
            return new Ce({
                type: "nonoptional",
                innerType: e,
                ...s.A2(t)
            });
        })(e, t), e.array = ()=>ie(e), e.or = (t)=>de([
            e,
            t
        ]), e.and = (t)=>me(e, t), e.transform = (t)=>Re(e, ke(t)), e.default = (t)=>{
        return r = t, new Pe({
            type: "default",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.prefault = (t)=>{
        return r = t, new Ie({
            type: "prefault",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.catch = (t)=>{
        return new Ae({
            type: "catch",
            innerType: e,
            catchValue: "function" == typeof (r = t) ? r : ()=>r
        });
        var r;
    }, e.pipe = (t)=>Re(e, t), e.readonly = ()=>new Ne({
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
    }, e.isOptional = ()=>e.safeParse(void 0).success, e.isNullable = ()=>e.safeParse(null).success, e)), b = n.xI("_ZodString", (e, t)=>{
    o.$v.init(e, t), w.init(e, t);
    const r = e._zod.bag;
    e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...t)=>e.check(u.Fk(...t)), e.includes = (...t)=>e.check(u.dR(...t)), e.startsWith = (...t)=>e.check(u.$S(...t)), e.endsWith = (...t)=>e.check(u.ER(...t)), e.min = (...t)=>e.check(u.m9(...t)), e.max = (...t)=>e.check(u.Eb(...t)), e.length = (...t)=>e.check(u.YA(...t)), e.nonempty = (...t)=>e.check(u.m9(1, ...t)), e.lowercase = (t)=>e.check(u.hH(t)), e.uppercase = (t)=>e.check(u.qF(t)), e.trim = ()=>e.check(u.WN()), e.normalize = (...t)=>e.check(u.lo(...t)), e.toLowerCase = ()=>e.check(u.Il()), e.toUpperCase = ()=>e.check(u.xY());
}), S = n.xI("ZodString", (e, t)=>{
    o.$v.init(e, t), b.init(e, t), e.email = (t)=>e.check(u.Mu(x, t)), e.url = (t)=>e.check(u.Fn(P, t)), e.jwt = (t)=>e.check(u.rk(L, t)), e.emoji = (t)=>e.check(u.aC(C, t)), e.guid = (t)=>e.check(u.tB(T, t)), e.uuid = (t)=>e.check(u.Be(O, t)), e.uuidv4 = (t)=>e.check(u.nA(O, t)), e.uuidv6 = (t)=>e.check(u.pY(O, t)), e.uuidv7 = (t)=>e.check(u.wA(O, t)), e.nanoid = (t)=>e.check(u.Dl(A, t)), e.guid = (t)=>e.check(u.tB(T, t)), e.cuid = (t)=>e.check(u.fs($, t)), e.cuid2 = (t)=>e.check(u.Bj(R, t)), e.ulid = (t)=>e.check(u.Ct(N, t)), e.base64 = (t)=>e.check(u.rt(z, t)), e.base64url = (t)=>e.check(u.cU(U, t)), e.xid = (t)=>e.check(u.Pw(M, t)), e.ksuid = (t)=>e.check(u._z(J, t)), e.ipv4 = (t)=>e.check(u.Ny(j, t)), e.ipv6 = (t)=>e.check(u.$O(D, t)), e.cidrv4 = (t)=>e.check(u.Uy(F, t)), e.cidrv6 = (t)=>e.check(u.gP(q, t)), e.e164 = (t)=>e.check(u.KB(B, t)), e.datetime = (t)=>e.check(d.w$(t)), e.date = (t)=>e.check(d.p6(t)), e.time = (t)=>e.check(d.kB(t)), e.duration = (t)=>e.check(d.p0(t));
});
function k(e) {
    return u.Rl(S, e);
}
const E = n.xI("ZodStringFormat", (e, t)=>{
    o.EY.init(e, t), b.init(e, t);
}), x = n.xI("ZodEmail", (e, t)=>{
    o.qG.init(e, t), E.init(e, t);
});
const T = n.xI("ZodGUID", (e, t)=>{
    o.Zc.init(e, t), E.init(e, t);
});
const O = n.xI("ZodUUID", (e, t)=>{
    o.Zn.init(e, t), E.init(e, t);
});
const P = n.xI("ZodURL", (e, t)=>{
    o.VY.init(e, t), E.init(e, t);
});
function I(e) {
    return u.Fn(P, e);
}
const C = n.xI("ZodEmoji", (e, t)=>{
    o.cG.init(e, t), E.init(e, t);
});
const A = n.xI("ZodNanoID", (e, t)=>{
    o.Py.init(e, t), E.init(e, t);
});
const $ = n.xI("ZodCUID", (e, t)=>{
    o.bl.init(e, t), E.init(e, t);
});
const R = n.xI("ZodCUID2", (e, t)=>{
    o.Zu.init(e, t), E.init(e, t);
});
const N = n.xI("ZodULID", (e, t)=>{
    o.g5.init(e, t), E.init(e, t);
});
const M = n.xI("ZodXID", (e, t)=>{
    o.TF.init(e, t), E.init(e, t);
});
const J = n.xI("ZodKSUID", (e, t)=>{
    o.GY.init(e, t), E.init(e, t);
});
const j = n.xI("ZodIPv4", (e, t)=>{
    o.Lc.init(e, t), E.init(e, t);
});
const D = n.xI("ZodIPv6", (e, t)=>{
    o.Zy.init(e, t), E.init(e, t);
});
const F = n.xI("ZodCIDRv4", (e, t)=>{
    o.CI.init(e, t), E.init(e, t);
});
const q = n.xI("ZodCIDRv6", (e, t)=>{
    o.Cn.init(e, t), E.init(e, t);
});
const z = n.xI("ZodBase64", (e, t)=>{
    o.Dq.init(e, t), E.init(e, t);
});
const U = n.xI("ZodBase64URL", (e, t)=>{
    o.CQ.init(e, t), E.init(e, t);
});
const B = n.xI("ZodE164", (e, t)=>{
    o.Oy.init(e, t), E.init(e, t);
});
const L = n.xI("ZodJWT", (e, t)=>{
    o.h8.init(e, t), E.init(e, t);
});
const V = n.xI("ZodNumber", (e, t)=>{
    o.vz.init(e, t), w.init(e, t), e.gt = (t, r)=>e.check(u.Tx(t, r)), e.gte = (t, r)=>e.check(u.qm(t, r)), e.min = (t, r)=>e.check(u.qm(t, r)), e.lt = (t, r)=>e.check(u.Au(t, r)), e.lte = (t, r)=>e.check(u.Zm(t, r)), e.max = (t, r)=>e.check(u.Zm(t, r)), e.int = (t)=>e.check(W(t)), e.safe = (t)=>e.check(W(t)), e.positive = (t)=>e.check(u.Tx(0, t)), e.nonnegative = (t)=>e.check(u.qm(0, t)), e.negative = (t)=>e.check(u.Au(0, t)), e.nonpositive = (t)=>e.check(u.Zm(0, t)), e.multipleOf = (t, r)=>e.check(u.Hi(t, r)), e.step = (t, r)=>e.check(u.Hi(t, r)), e.finite = ()=>e;
    const r = e._zod.bag;
    e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), e.isFinite = !0, e.format = r.format ?? null;
});
function K(e) {
    return u.F7(V, e);
}
const Z = n.xI("ZodNumberFormat", (e, t)=>{
    o.I.init(e, t), V.init(e, t);
});
function W(e) {
    return u.LK(Z, e);
}
const H = n.xI("ZodBoolean", (e, t)=>{
    o.sF.init(e, t), w.init(e, t);
});
function Y(e) {
    return u._L(H, e);
}
const G = n.xI("ZodNull", (e, t)=>{
    o.x8.init(e, t), w.init(e, t);
});
function X(e) {
    return u.jw(G, e);
}
const Q = n.xI("ZodAny", (e, t)=>{
    o.Gb.init(e, t), w.init(e, t);
});
function ee() {
    return u.KA(Q);
}
const te = n.xI("ZodUnknown", (e, t)=>{
    o.GP.init(e, t), w.init(e, t);
});
function re() {
    return u.em(te);
}
const ne = n.xI("ZodNever", (e, t)=>{
    o.Um.init(e, t), w.init(e, t);
});
function oe(e) {
    return u.G8(ne, e);
}
const se = n.xI("ZodArray", (e, t)=>{
    o.$p.init(e, t), w.init(e, t), e.element = t.element, e.min = (t, r)=>e.check(u.m9(t, r)), e.nonempty = (t)=>e.check(u.m9(1, t)), e.max = (t, r)=>e.check(u.Eb(t, r)), e.length = (t, r)=>e.check(u.YA(t, r)), e.unwrap = ()=>e.element;
});
function ie(e, t) {
    return u.dZ(se, e, t);
}
const ae = n.xI("ZodObject", (e, t)=>{
    o.L8.init(e, t), w.init(e, t), s.gJ(e, "shape", ()=>t.shape), e.keyof = ()=>ve(Object.keys(e._zod.def.shape)), e.catchall = (t)=>e.clone({
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
            catchall: oe()
        }), e.strip = ()=>e.clone({
            ...e._zod.def,
            catchall: void 0
        }), e.extend = (t)=>s.X$(e, t), e.merge = (t)=>s.h1(e, t), e.pick = (t)=>s.Up(e, t), e.omit = (t)=>s.cJ(e, t), e.partial = (...t)=>s.OH(Ee, e, t[0]), e.required = (...t)=>s.mw(Ce, e, t[0]);
});
function ce(e, t) {
    const r = {
        type: "object",
        get shape () {
            return s.Vy(this, "shape", {
                ...e
            }), this.shape;
        },
        ...s.A2(t)
    };
    return new ae(r);
}
function ue(e, t) {
    return new ae({
        type: "object",
        get shape () {
            return s.Vy(this, "shape", {
                ...e
            }), this.shape;
        },
        catchall: re(),
        ...s.A2(t)
    });
}
const le = n.xI("ZodUnion", (e, t)=>{
    o.cu.init(e, t), w.init(e, t), e.options = t.options;
});
function de(e, t) {
    return new le({
        type: "union",
        options: e,
        ...s.A2(t)
    });
}
const pe = n.xI("ZodDiscriminatedUnion", (e, t)=>{
    le.init(e, t), o.P0.init(e, t);
});
function fe(e, t, r) {
    return new pe({
        type: "union",
        options: t,
        discriminator: e,
        ...s.A2(r)
    });
}
const he = n.xI("ZodIntersection", (e, t)=>{
    o.LJ.init(e, t), w.init(e, t);
});
function me(e, t) {
    return new he({
        type: "intersection",
        left: e,
        right: t
    });
}
const ge = n.xI("ZodRecord", (e, t)=>{
    o.h.init(e, t), w.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ye(e, t, r) {
    return new ge({
        type: "record",
        keyType: e,
        valueType: t,
        ...s.A2(r)
    });
}
const _e = n.xI("ZodEnum", (e, t)=>{
    o.VO.init(e, t), w.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
    const r = new Set(Object.keys(t.entries));
    e.extract = (e, n)=>{
        const o = {};
        for (const n of e){
            if (!r.has(n)) throw new Error(`Key ${n} not found in enum`);
            o[n] = t.entries[n];
        }
        return new _e({
            ...t,
            checks: [],
            ...s.A2(n),
            entries: o
        });
    }, e.exclude = (e, n)=>{
        const o = {
            ...t.entries
        };
        for (const t of e){
            if (!r.has(t)) throw new Error(`Key ${t} not found in enum`);
            delete o[t];
        }
        return new _e({
            ...t,
            checks: [],
            ...s.A2(n),
            entries: o
        });
    };
});
function ve(e, t) {
    const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
            e,
            e
        ])) : e;
    return new _e({
        type: "enum",
        entries: r,
        ...s.A2(t)
    });
}
const we = n.xI("ZodLiteral", (e, t)=>{
    o.nu.init(e, t), w.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
        get () {
            if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return t.values[0];
        }
    });
});
function be(e, t) {
    return new we({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...s.A2(t)
    });
}
const Se = n.xI("ZodTransform", (e, t)=>{
    o.Wc.init(e, t), w.init(e, t), e._zod.parse = (r, n)=>{
        r.addIssue = (n)=>{
            if ("string" == typeof n) r.issues.push(s.sn(n, r.value, t));
            else {
                const t = n;
                t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = r.value), t.inst ?? (t.inst = e), t.continue ?? (t.continue = !0), r.issues.push(s.sn(t));
            }
        };
        const o = t.transform(r.value, r);
        return o instanceof Promise ? o.then((e)=>(r.value = e, r)) : (r.value = o, r);
    };
});
function ke(e) {
    return new Se({
        type: "transform",
        transform: e
    });
}
const Ee = n.xI("ZodOptional", (e, t)=>{
    o.ig.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function xe(e) {
    return new Ee({
        type: "optional",
        innerType: e
    });
}
const Te = n.xI("ZodNullable", (e, t)=>{
    o.qc.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function Oe(e) {
    return new Te({
        type: "nullable",
        innerType: e
    });
}
const Pe = n.xI("ZodDefault", (e, t)=>{
    o.rv.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeDefault = e.unwrap;
});
const Ie = n.xI("ZodPrefault", (e, t)=>{
    o.VF.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Ce = n.xI("ZodNonOptional", (e, t)=>{
    o.N$.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Ae = n.xI("ZodCatch", (e, t)=>{
    o.t$.init(e, t), w.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeCatch = e.unwrap;
});
const $e = n.xI("ZodPipe", (e, t)=>{
    o._m.init(e, t), w.init(e, t), e.in = t.in, e.out = t.out;
});
function Re(e, t) {
    return new $e({
        type: "pipe",
        in: e,
        out: t
    });
}
const Ne = n.xI("ZodReadonly", (e, t)=>{
    o.Sb.init(e, t), w.init(e, t);
});
const Me = n.xI("ZodCustom", (e, t)=>{
    o.b0.init(e, t), w.init(e, t);
});
function Je(e, t) {
    return u.FO(Me, e ?? (()=>!0), t);
}
function je(e, t) {
    return Re(ke(e), t);
}
