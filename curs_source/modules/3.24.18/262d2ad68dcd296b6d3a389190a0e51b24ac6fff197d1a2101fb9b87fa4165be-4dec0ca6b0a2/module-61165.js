"use strict";
require.d(exports, {
    rS: ()=>H,
    EB: ()=>k,
    bz: ()=>ee,
    YO: ()=>ie,
    zM: ()=>K,
    Ie: ()=>Fe,
    gM: ()=>he,
    k5: ()=>we,
    E$: ()=>fe,
    eu: ()=>_e,
    _H: ()=>ce,
    ch: ()=>X,
    ai: ()=>W,
    Ik: ()=>le,
    lq: ()=>Ee,
    vk: ()=>Le,
    g1: ()=>ye,
    Yj: ()=>x,
    KC: ()=>de,
    L5: ()=>re,
    OZ: ()=>A
});
var n = require("./module-47381.js"), o = require("./module-25521.js"), s = require("./module-7246.js");
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
const l = a();
var c = require("./module-87888.js"), u = require("./module-39567.js"), d = require("./module-78880.js"), p = require("./module-4287.js"), h = require("./module-6749.js");
const m = (e, t)=>{
    h.a$.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
        format: {
            value: (t)=>h.Wk(e, t)
        },
        flatten: {
            value: (t)=>h.JM(e, t)
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
}, f = (n.xI("ZodError", m), n.xI("ZodError", m, {
    Parent: Error
})), g = p.Tj(f), y = p.Rb(f), v = p.Od(f), w = p.wG(f), b = n.xI("ZodType", (e, t)=>(o.W4.init(e, t), e.def = t, Object.defineProperty(e, "_def", {
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
        }), e.safeParse = (t, r)=>v(e, t, r), e.parseAsync = async (t, r)=>y(e, t, r, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (t, r)=>w(e, t, r), e.spa = e.safeParseAsync, e.refine = (t, r)=>e.check(function(e, t = {}) {
            return c.fU(Ne, e, t);
        }(t, r)), e.superRefine = (t)=>e.check(function(e) {
            const t = function(e) {
                const t = new u.QP({
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
        }(t)), e.overwrite = (t)=>e.check(c.bS(t)), e.optional = ()=>Ee(e), e.nullable = ()=>Ce(e), e.nullish = ()=>Ee(Ce(e)), e.nonoptional = (t)=>(function(e, t) {
            return new Pe({
                type: "nonoptional",
                innerType: e,
                ...s.A2(t)
            });
        })(e, t), e.array = ()=>ie(e), e.or = (t)=>de([
            e,
            t
        ]), e.and = (t)=>fe(e, t), e.transform = (t)=>Oe(e, xe(t)), e.default = (t)=>{
        return r = t, new Ie({
            type: "default",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.prefault = (t)=>{
        return r = t, new Ae({
            type: "prefault",
            innerType: e,
            get defaultValue () {
                return "function" == typeof r ? r() : r;
            }
        });
        var r;
    }, e.catch = (t)=>{
        return new Me({
            type: "catch",
            innerType: e,
            catchValue: "function" == typeof (r = t) ? r : ()=>r
        });
        var r;
    }, e.pipe = (t)=>Oe(e, t), e.readonly = ()=>new De({
            type: "readonly",
            innerType: e
        }), e.describe = (t)=>{
        const r = e.clone();
        return l.add(r, {
            description: t
        }), r;
    }, Object.defineProperty(e, "description", {
        get: ()=>l.get(e)?.description,
        configurable: !0
    }), e.meta = (...t)=>{
        if (0 === t.length) return l.get(e);
        const r = e.clone();
        return l.add(r, t[0]), r;
    }, e.isOptional = ()=>e.safeParse(void 0).success, e.isNullable = ()=>e.safeParse(null).success, e)), _ = n.xI("_ZodString", (e, t)=>{
    o.$v.init(e, t), b.init(e, t);
    const r = e._zod.bag;
    e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...t)=>e.check(c.Fk(...t)), e.includes = (...t)=>e.check(c.dR(...t)), e.startsWith = (...t)=>e.check(c.$S(...t)), e.endsWith = (...t)=>e.check(c.ER(...t)), e.min = (...t)=>e.check(c.m9(...t)), e.max = (...t)=>e.check(c.Eb(...t)), e.length = (...t)=>e.check(c.YA(...t)), e.nonempty = (...t)=>e.check(c.m9(1, ...t)), e.lowercase = (t)=>e.check(c.hH(t)), e.uppercase = (t)=>e.check(c.qF(t)), e.trim = ()=>e.check(c.WN()), e.normalize = (...t)=>e.check(c.lo(...t)), e.toLowerCase = ()=>e.check(c.Il()), e.toUpperCase = ()=>e.check(c.xY());
}), S = n.xI("ZodString", (e, t)=>{
    o.$v.init(e, t), _.init(e, t), e.email = (t)=>e.check(c.Mu(E, t)), e.url = (t)=>e.check(c.Fn(I, t)), e.jwt = (t)=>e.check(c.rk(z, t)), e.emoji = (t)=>e.check(c.aC(P, t)), e.guid = (t)=>e.check(c.tB(T, t)), e.uuid = (t)=>e.check(c.Be(C, t)), e.uuidv4 = (t)=>e.check(c.nA(C, t)), e.uuidv6 = (t)=>e.check(c.pY(C, t)), e.uuidv7 = (t)=>e.check(c.wA(C, t)), e.nanoid = (t)=>e.check(c.Dl(M, t)), e.guid = (t)=>e.check(c.tB(T, t)), e.cuid = (t)=>e.check(c.fs(R, t)), e.cuid2 = (t)=>e.check(c.Bj(O, t)), e.ulid = (t)=>e.check(c.Ct(D, t)), e.base64 = (t)=>e.check(c.rt(q, t)), e.base64url = (t)=>e.check(c.cU(j, t)), e.xid = (t)=>e.check(c.Pw(N, t)), e.ksuid = (t)=>e.check(c._z(F, t)), e.ipv4 = (t)=>e.check(c.Ny(L, t)), e.ipv6 = (t)=>e.check(c.$O(U, t)), e.cidrv4 = (t)=>e.check(c.Uy(B, t)), e.cidrv6 = (t)=>e.check(c.gP($, t)), e.e164 = (t)=>e.check(c.KB(J, t)), e.datetime = (t)=>e.check(d.w$(t)), e.date = (t)=>e.check(d.p6(t)), e.time = (t)=>e.check(d.kB(t)), e.duration = (t)=>e.check(d.p0(t));
});
function x(e) {
    return c.Rl(S, e);
}
const k = n.xI("ZodStringFormat", (e, t)=>{
    o.EY.init(e, t), _.init(e, t);
}), E = n.xI("ZodEmail", (e, t)=>{
    o.qG.init(e, t), k.init(e, t);
});
const T = n.xI("ZodGUID", (e, t)=>{
    o.Zc.init(e, t), k.init(e, t);
});
const C = n.xI("ZodUUID", (e, t)=>{
    o.Zn.init(e, t), k.init(e, t);
});
const I = n.xI("ZodURL", (e, t)=>{
    o.VY.init(e, t), k.init(e, t);
});
function A(e) {
    return c.Fn(I, e);
}
const P = n.xI("ZodEmoji", (e, t)=>{
    o.cG.init(e, t), k.init(e, t);
});
const M = n.xI("ZodNanoID", (e, t)=>{
    o.Py.init(e, t), k.init(e, t);
});
const R = n.xI("ZodCUID", (e, t)=>{
    o.bl.init(e, t), k.init(e, t);
});
const O = n.xI("ZodCUID2", (e, t)=>{
    o.Zu.init(e, t), k.init(e, t);
});
const D = n.xI("ZodULID", (e, t)=>{
    o.g5.init(e, t), k.init(e, t);
});
const N = n.xI("ZodXID", (e, t)=>{
    o.TF.init(e, t), k.init(e, t);
});
const F = n.xI("ZodKSUID", (e, t)=>{
    o.GY.init(e, t), k.init(e, t);
});
const L = n.xI("ZodIPv4", (e, t)=>{
    o.Lc.init(e, t), k.init(e, t);
});
const U = n.xI("ZodIPv6", (e, t)=>{
    o.Zy.init(e, t), k.init(e, t);
});
const B = n.xI("ZodCIDRv4", (e, t)=>{
    o.CI.init(e, t), k.init(e, t);
});
const $ = n.xI("ZodCIDRv6", (e, t)=>{
    o.Cn.init(e, t), k.init(e, t);
});
const q = n.xI("ZodBase64", (e, t)=>{
    o.Dq.init(e, t), k.init(e, t);
});
const j = n.xI("ZodBase64URL", (e, t)=>{
    o.CQ.init(e, t), k.init(e, t);
});
const J = n.xI("ZodE164", (e, t)=>{
    o.Oy.init(e, t), k.init(e, t);
});
const z = n.xI("ZodJWT", (e, t)=>{
    o.h8.init(e, t), k.init(e, t);
});
const H = n.xI("ZodNumber", (e, t)=>{
    o.vz.init(e, t), b.init(e, t), e.gt = (t, r)=>e.check(c.Tx(t, r)), e.gte = (t, r)=>e.check(c.qm(t, r)), e.min = (t, r)=>e.check(c.qm(t, r)), e.lt = (t, r)=>e.check(c.Au(t, r)), e.lte = (t, r)=>e.check(c.Zm(t, r)), e.max = (t, r)=>e.check(c.Zm(t, r)), e.int = (t)=>e.check(Y(t)), e.safe = (t)=>e.check(Y(t)), e.positive = (t)=>e.check(c.Tx(0, t)), e.nonnegative = (t)=>e.check(c.qm(0, t)), e.negative = (t)=>e.check(c.Au(0, t)), e.nonpositive = (t)=>e.check(c.Zm(0, t)), e.multipleOf = (t, r)=>e.check(c.Hi(t, r)), e.step = (t, r)=>e.check(c.Hi(t, r)), e.finite = ()=>e;
    const r = e._zod.bag;
    e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), e.isFinite = !0, e.format = r.format ?? null;
});
function W(e) {
    return c.F7(H, e);
}
const G = n.xI("ZodNumberFormat", (e, t)=>{
    o.I.init(e, t), H.init(e, t);
});
function Y(e) {
    return c.LK(G, e);
}
const V = n.xI("ZodBoolean", (e, t)=>{
    o.sF.init(e, t), b.init(e, t);
});
function K(e) {
    return c._L(V, e);
}
const Z = n.xI("ZodNull", (e, t)=>{
    o.x8.init(e, t), b.init(e, t);
});
function X(e) {
    return c.jw(Z, e);
}
const Q = n.xI("ZodAny", (e, t)=>{
    o.Gb.init(e, t), b.init(e, t);
});
function ee() {
    return c.KA(Q);
}
const te = n.xI("ZodUnknown", (e, t)=>{
    o.GP.init(e, t), b.init(e, t);
});
function re() {
    return c.em(te);
}
const ne = n.xI("ZodNever", (e, t)=>{
    o.Um.init(e, t), b.init(e, t);
});
function oe(e) {
    return c.G8(ne, e);
}
const se = n.xI("ZodArray", (e, t)=>{
    o.$p.init(e, t), b.init(e, t), e.element = t.element, e.min = (t, r)=>e.check(c.m9(t, r)), e.nonempty = (t)=>e.check(c.m9(1, t)), e.max = (t, r)=>e.check(c.Eb(t, r)), e.length = (t, r)=>e.check(c.YA(t, r)), e.unwrap = ()=>e.element;
});
function ie(e, t) {
    return c.dZ(se, e, t);
}
const ae = n.xI("ZodObject", (e, t)=>{
    o.L8.init(e, t), b.init(e, t), s.gJ(e, "shape", ()=>t.shape), e.keyof = ()=>we(Object.keys(e._zod.def.shape)), e.catchall = (t)=>e.clone({
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
        }), e.extend = (t)=>s.X$(e, t), e.merge = (t)=>s.h1(e, t), e.pick = (t)=>s.Up(e, t), e.omit = (t)=>s.cJ(e, t), e.partial = (...t)=>s.OH(ke, e, t[0]), e.required = (...t)=>s.mw(Pe, e, t[0]);
});
function le(e, t) {
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
function ce(e, t) {
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
const ue = n.xI("ZodUnion", (e, t)=>{
    o.cu.init(e, t), b.init(e, t), e.options = t.options;
});
function de(e, t) {
    return new ue({
        type: "union",
        options: e,
        ...s.A2(t)
    });
}
const pe = n.xI("ZodDiscriminatedUnion", (e, t)=>{
    ue.init(e, t), o.P0.init(e, t);
});
function he(e, t, r) {
    return new pe({
        type: "union",
        options: t,
        discriminator: e,
        ...s.A2(r)
    });
}
const me = n.xI("ZodIntersection", (e, t)=>{
    o.LJ.init(e, t), b.init(e, t);
});
function fe(e, t) {
    return new me({
        type: "intersection",
        left: e,
        right: t
    });
}
const ge = n.xI("ZodRecord", (e, t)=>{
    o.h.init(e, t), b.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ye(e, t, r) {
    return new ge({
        type: "record",
        keyType: e,
        valueType: t,
        ...s.A2(r)
    });
}
const ve = n.xI("ZodEnum", (e, t)=>{
    o.VO.init(e, t), b.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
    const r = new Set(Object.keys(t.entries));
    e.extract = (e, n)=>{
        const o = {};
        for (const n of e){
            if (!r.has(n)) throw new Error(`Key ${n} not found in enum`);
            o[n] = t.entries[n];
        }
        return new ve({
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
        return new ve({
            ...t,
            checks: [],
            ...s.A2(n),
            entries: o
        });
    };
});
function we(e, t) {
    const r = Array.isArray(e) ? Object.fromEntries(e.map((e)=>[
            e,
            e
        ])) : e;
    return new ve({
        type: "enum",
        entries: r,
        ...s.A2(t)
    });
}
const be = n.xI("ZodLiteral", (e, t)=>{
    o.nu.init(e, t), b.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
        get () {
            if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return t.values[0];
        }
    });
});
function _e(e, t) {
    return new be({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...s.A2(t)
    });
}
const Se = n.xI("ZodTransform", (e, t)=>{
    o.Wc.init(e, t), b.init(e, t), e._zod.parse = (r, n)=>{
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
function xe(e) {
    return new Se({
        type: "transform",
        transform: e
    });
}
const ke = n.xI("ZodOptional", (e, t)=>{
    o.ig.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function Ee(e) {
    return new ke({
        type: "optional",
        innerType: e
    });
}
const Te = n.xI("ZodNullable", (e, t)=>{
    o.qc.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
function Ce(e) {
    return new Te({
        type: "nullable",
        innerType: e
    });
}
const Ie = n.xI("ZodDefault", (e, t)=>{
    o.rv.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeDefault = e.unwrap;
});
const Ae = n.xI("ZodPrefault", (e, t)=>{
    o.VF.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Pe = n.xI("ZodNonOptional", (e, t)=>{
    o.N$.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType;
});
const Me = n.xI("ZodCatch", (e, t)=>{
    o.t$.init(e, t), b.init(e, t), e.unwrap = ()=>e._zod.def.innerType, e.removeCatch = e.unwrap;
});
const Re = n.xI("ZodPipe", (e, t)=>{
    o._m.init(e, t), b.init(e, t), e.in = t.in, e.out = t.out;
});
function Oe(e, t) {
    return new Re({
        type: "pipe",
        in: e,
        out: t
    });
}
const De = n.xI("ZodReadonly", (e, t)=>{
    o.Sb.init(e, t), b.init(e, t);
});
const Ne = n.xI("ZodCustom", (e, t)=>{
    o.b0.init(e, t), b.init(e, t);
});
function Fe(e, t) {
    return c.FO(Ne, e ?? (()=>!0), t);
}
function Le(e, t) {
    return Oe(xe(e), t);
}
