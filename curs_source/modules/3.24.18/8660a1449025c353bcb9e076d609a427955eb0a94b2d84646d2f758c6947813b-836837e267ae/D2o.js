import { Sa } from "./Iwo.js";
import { $Ro, $od, ARo, Aod, BRo, Bod, CRo, Cod, DRo, Dod, ERo, Eod, FRo, Fke, Fod, Fse, God, Hod, IRo, Iod, Kod, LRo, Lod, MRo, Mod, NRo, Nod, ORo, Ood, PRo, Pod, RRo, Rod, SRo, TQn, TRo, Tod, URo, Uod, Vod, W6t, Wod, Yod, _Ro, bRo, evr, fRo, jRo, jod, kRo, kod, kx, qod, tvr, vRo, wRo, wod, xRo, xod, yRo, zRo, zod } from "./SZu.js";
import { f4 } from "./checks.js";
import { Cf, Tld } from "./from-json-schema.js";
import { _vr, bvr, vvr, yvr } from "./iso.js";
import { Bke } from "./registries.js";
import { Qw } from "./schemas.js";
import { $Qn, $vr, Ahn, Avr, BQn, Bvr, DQn, Dhn, Dvr, FQn, Fhn, Fvr, GQn, Gvr, HQn, Hvr, JQn, Jvr, K6t, KQn, Kvr, LQn, Lhn, Lvr, MQn, Mhn, Mvr, NQn, Nhn, Nvr, OQn, Ohn, Ovr, PQn, Phn, Pvr, QQn, Qvr, Rhn, Rvr, UQn, Uvr, V6t, VOe, VQn, Vvr, WQn, Wvr, XQn, Xvr, YQn, Yvr, ZQn, Zvr, cPo, dO, e_r, i_r, jQn, jvr, lPo, n_r, qQn, qvr, r_r, t_r, uPo, w_t, xC, xhn, zQn, zvr } from "./schemas_2.js";
export function sad(t) {
    return Cod(vvr, t);
}
export function oad(t) {
    return Tod(_vr, t);
}
export function aad(t) {
    return Eod(bvr, t);
}
export function lad(t) {
    return Iod(yvr, t);
}
export var had = {};
Sa(had, {
    ZodAny: ()=>Dvr,
    ZodArray: ()=>Fvr,
    ZodBase64: ()=>GQn,
    ZodBase64URL: ()=>qQn,
    ZodBigInt: ()=>Dhn,
    ZodBigIntFormat: ()=>KQn,
    ZodBoolean: ()=>Mhn,
    ZodCIDRv4: ()=>HQn,
    ZodCIDRv6: ()=>WQn,
    ZodCUID: ()=>LQn,
    ZodCUID2: ()=>OQn,
    ZodCatch: ()=>Qvr,
    ZodCodec: ()=>JQn,
    ZodCustom: ()=>Fhn,
    ZodCustomStringFormat: ()=>V6t,
    ZodDate: ()=>YQn,
    ZodDefault: ()=>Yvr,
    ZodDiscriminatedUnion: ()=>Uvr,
    ZodE164: ()=>zQn,
    ZodEmail: ()=>MQn,
    ZodEmoji: ()=>DQn,
    ZodEnum: ()=>K6t,
    ZodExactOptional: ()=>Vvr,
    ZodFile: ()=>qvr,
    ZodFunction: ()=>r_r,
    ZodGUID: ()=>Ahn,
    ZodIPv4: ()=>jQn,
    ZodIPv6: ()=>$Qn,
    ZodIntersection: ()=>jvr,
    ZodJWT: ()=>VQn,
    ZodKSUID: ()=>UQn,
    ZodLazy: ()=>n_r,
    ZodLiteral: ()=>Gvr,
    ZodMAC: ()=>Avr,
    ZodMap: ()=>Hvr,
    ZodNaN: ()=>Jvr,
    ZodNanoID: ()=>NQn,
    ZodNever: ()=>Lvr,
    ZodNonOptional: ()=>ZQn,
    ZodNull: ()=>Mvr,
    ZodNullable: ()=>Kvr,
    ZodNumber: ()=>Phn,
    ZodNumberFormat: ()=>w_t,
    ZodObject: ()=>Nhn,
    ZodOptional: ()=>XQn,
    ZodPipe: ()=>QQn,
    ZodPrefault: ()=>Xvr,
    ZodPromise: ()=>i_r,
    ZodReadonly: ()=>e_r,
    ZodRecord: ()=>Ohn,
    ZodSet: ()=>Wvr,
    ZodString: ()=>xhn,
    ZodStringFormat: ()=>dO,
    ZodSuccess: ()=>Zvr,
    ZodSymbol: ()=>Rvr,
    ZodTemplateLiteral: ()=>t_r,
    ZodTransform: ()=>zvr,
    ZodTuple: ()=>$vr,
    ZodType: ()=>xC,
    ZodULID: ()=>FQn,
    ZodURL: ()=>Rhn,
    ZodUUID: ()=>VOe,
    ZodUndefined: ()=>Pvr,
    ZodUnion: ()=>Lhn,
    ZodUnknown: ()=>Nvr,
    ZodVoid: ()=>Ovr,
    ZodXID: ()=>BQn,
    ZodXor: ()=>Bvr,
    _ZodString: ()=>PQn,
    _default: ()=>ePo,
    _function: ()=>xvr,
    any: ()=>Xad,
    array: ()=>IQn,
    base64: ()=>Dad,
    base64url: ()=>Nad,
    bigint: ()=>qad,
    boolean: ()=>K2o,
    catch: ()=>iPo,
    check: ()=>_ld,
    cidrv4: ()=>Pad,
    cidrv6: ()=>Mad,
    codec: ()=>gld,
    cuid: ()=>wad,
    cuid2: ()=>Cad,
    custom: ()=>bld,
    date: ()=>Qad,
    describe: ()=>lPo,
    discriminatedUnion: ()=>rld,
    e164: ()=>Lad,
    email: ()=>pad,
    emoji: ()=>Sad,
    enum: ()=>Evr,
    exactOptional: ()=>J2o,
    file: ()=>dld,
    float32: ()=>$ad,
    float64: ()=>Had,
    function: ()=>xvr,
    guid: ()=>mad,
    hash: ()=>jad,
    hex: ()=>Uad,
    hostname: ()=>Bad,
    httpUrl: ()=>yad,
    instanceof: ()=>yld,
    int: ()=>wvr,
    int32: ()=>Wad,
    int64: ()=>zad,
    intersection: ()=>X2o,
    ipv4: ()=>xad,
    ipv6: ()=>Rad,
    json: ()=>Sld,
    jwt: ()=>Oad,
    keyof: ()=>Jad,
    ksuid: ()=>Iad,
    lazy: ()=>sPo,
    literal: ()=>uld,
    looseObject: ()=>nld,
    looseRecord: ()=>old,
    mac: ()=>Aad,
    map: ()=>ald,
    meta: ()=>cPo,
    nan: ()=>mld,
    nanoid: ()=>kad,
    nativeEnum: ()=>cld,
    never: ()=>Cvr,
    nonoptional: ()=>nPo,
    null: ()=>Y2o,
    nullable: ()=>AQn,
    nullish: ()=>hld,
    number: ()=>V2o,
    object: ()=>eld,
    optional: ()=>xQn,
    partialRecord: ()=>sld,
    pipe: ()=>RQn,
    prefault: ()=>tPo,
    preprocess: ()=>kld,
    promise: ()=>vld,
    readonly: ()=>rPo,
    record: ()=>Q2o,
    refine: ()=>oPo,
    set: ()=>lld,
    strictObject: ()=>tld,
    string: ()=>kvr,
    stringFormat: ()=>Fad,
    stringbool: ()=>uPo,
    success: ()=>pld,
    superRefine: ()=>aPo,
    symbol: ()=>Kad,
    templateLiteral: ()=>fld,
    transform: ()=>Ivr,
    tuple: ()=>Z2o,
    uint32: ()=>Gad,
    uint64: ()=>Vad,
    ulid: ()=>Tad,
    undefined: ()=>Yad,
    union: ()=>Tvr,
    unknown: ()=>z6t,
    url: ()=>bad,
    uuid: ()=>gad,
    uuidv4: ()=>fad,
    uuidv6: ()=>vad,
    uuidv7: ()=>_ad,
    void: ()=>Zad,
    xid: ()=>Ead,
    xor: ()=>ild
});
export function kvr(t) {
    return fRo(xhn, t);
}
export function pad(t) {
    return vRo(MQn, t);
}
export function mad(t) {
    return evr(Ahn, t);
}
export function gad(t) {
    return _Ro(VOe, t);
}
export function fad(t) {
    return bRo(VOe, t);
}
export function vad(t) {
    return yRo(VOe, t);
}
export function _ad(t) {
    return SRo(VOe, t);
}
export function bad(t) {
    return tvr(Rhn, t);
}
export function yad(t) {
    return tvr(Rhn, {
        protocol: /^https?$/,
        hostname: W6t.domain,
        ...kx.normalizeParams(t)
    });
}
export function Sad(t) {
    return kRo(DQn, t);
}
export function kad(t) {
    return wRo(NQn, t);
}
export function wad(t) {
    return CRo(LQn, t);
}
export function Cad(t) {
    return TRo(OQn, t);
}
export function Tad(t) {
    return ERo(FQn, t);
}
export function Ead(t) {
    return IRo(BQn, t);
}
export function Iad(t) {
    return xRo(UQn, t);
}
export function xad(t) {
    return ARo(jQn, t);
}
export function Aad(t) {
    return wod(Avr, t);
}
export function Rad(t) {
    return RRo($Qn, t);
}
export function Pad(t) {
    return PRo(HQn, t);
}
export function Mad(t) {
    return MRo(WQn, t);
}
export function Dad(t) {
    return DRo(GQn, t);
}
export function Nad(t) {
    return NRo(qQn, t);
}
export function Lad(t) {
    return LRo(zQn, t);
}
export function Oad(t) {
    return ORo(VQn, t);
}
export function Fad(t, e, n = {}) {
    return TQn(V6t, t, e, n);
}
export function Bad(t) {
    return TQn(V6t, "hostname", W6t.hostname, t);
}
export function Uad(t) {
    return TQn(V6t, "hex", W6t.hex, t);
}
export function jad(t, e) {
    const n = e?.enc ?? "hex", i = `${t}_${n}`, r = W6t[i];
    if (!r) throw new Error(`Unrecognized hash format: ${i}`);
    return TQn(V6t, i, r, e);
}
export function V2o(t) {
    return FRo(Phn, t);
}
export function wvr(t) {
    return BRo(w_t, t);
}
export function $ad(t) {
    return Aod(w_t, t);
}
export function Had(t) {
    return Rod(w_t, t);
}
export function Wad(t) {
    return Pod(w_t, t);
}
export function Gad(t) {
    return Mod(w_t, t);
}
export function K2o(t) {
    return URo(Mhn, t);
}
export function qad(t) {
    return Nod(Dhn, t);
}
export function zad(t) {
    return Ood(KQn, t);
}
export function Vad(t) {
    return Fod(KQn, t);
}
export function Kad(t) {
    return Bod(Rvr, t);
}
export function Yad(t) {
    return Uod(Pvr, t);
}
export function Y2o(t) {
    return jod(Mvr, t);
}
export function Xad() {
    return $od(Dvr);
}
export function z6t() {
    return jRo(Nvr);
}
export function Cvr(t) {
    return $Ro(Lvr, t);
}
export function Zad(t) {
    return Hod(Ovr, t);
}
export function Qad(t) {
    return Wod(YQn, t);
}
export function IQn(t, e) {
    return zod(Fvr, t, e);
}
export function Jad(t) {
    const e = t._zod.def.shape;
    return Evr(Object.keys(e));
}
export function eld(t, e) {
    const n = {
        type: "object",
        shape: t ?? {},
        ...kx.normalizeParams(e)
    };
    return new Nhn(n);
}
export function tld(t, e) {
    return new Nhn({
        type: "object",
        shape: t,
        catchall: Cvr(),
        ...kx.normalizeParams(e)
    });
}
export function nld(t, e) {
    return new Nhn({
        type: "object",
        shape: t,
        catchall: z6t(),
        ...kx.normalizeParams(e)
    });
}
export function Tvr(t, e) {
    return new Lhn({
        type: "union",
        options: t,
        ...kx.normalizeParams(e)
    });
}
export function ild(t, e) {
    return new Bvr({
        type: "union",
        options: t,
        inclusive: !1,
        ...kx.normalizeParams(e)
    });
}
export function rld(t, e, n) {
    return new Uvr({
        type: "union",
        options: e,
        discriminator: t,
        ...kx.normalizeParams(n)
    });
}
export function X2o(t, e) {
    return new jvr({
        type: "intersection",
        left: t,
        right: e
    });
}
export function Z2o(t, e, n) {
    const i = e instanceof Qw, r = i ? n : e, s = i ? e : null;
    return new $vr({
        type: "tuple",
        items: t,
        rest: s,
        ...kx.normalizeParams(r)
    });
}
export function Q2o(t, e, n) {
    return new Ohn({
        type: "record",
        keyType: t,
        valueType: e,
        ...kx.normalizeParams(n)
    });
}
export function sld(t, e, n) {
    const i = Fke(t);
    return i._zod.values = void 0, new Ohn({
        type: "record",
        keyType: i,
        valueType: e,
        ...kx.normalizeParams(n)
    });
}
export function old(t, e, n) {
    return new Ohn({
        type: "record",
        keyType: t,
        valueType: e,
        mode: "loose",
        ...kx.normalizeParams(n)
    });
}
export function ald(t, e, n) {
    return new Hvr({
        type: "map",
        keyType: t,
        valueType: e,
        ...kx.normalizeParams(n)
    });
}
export function lld(t, e) {
    return new Wvr({
        type: "set",
        valueType: t,
        ...kx.normalizeParams(e)
    });
}
export function Evr(t, e) {
    const n = Array.isArray(t) ? Object.fromEntries(t.map((i)=>[
            i,
            i
        ])) : t;
    return new K6t({
        type: "enum",
        entries: n,
        ...kx.normalizeParams(e)
    });
}
export function cld(t, e) {
    return new K6t({
        type: "enum",
        entries: t,
        ...kx.normalizeParams(e)
    });
}
export function uld(t, e) {
    return new Gvr({
        type: "literal",
        values: Array.isArray(t) ? t : [
            t
        ],
        ...kx.normalizeParams(e)
    });
}
export function dld(t) {
    return Vod(qvr, t);
}
export function Ivr(t) {
    return new zvr({
        type: "transform",
        transform: t
    });
}
export function xQn(t) {
    return new XQn({
        type: "optional",
        innerType: t
    });
}
export function J2o(t) {
    return new Vvr({
        type: "optional",
        innerType: t
    });
}
export function AQn(t) {
    return new Kvr({
        type: "nullable",
        innerType: t
    });
}
export function hld(t) {
    return xQn(AQn(t));
}
export function ePo(t, e) {
    return new Yvr({
        type: "default",
        innerType: t,
        get defaultValue () {
            return typeof e == "function" ? e() : kx.shallowClone(e);
        }
    });
}
export function tPo(t, e) {
    return new Xvr({
        type: "prefault",
        innerType: t,
        get defaultValue () {
            return typeof e == "function" ? e() : kx.shallowClone(e);
        }
    });
}
export function nPo(t, e) {
    return new ZQn({
        type: "nonoptional",
        innerType: t,
        ...kx.normalizeParams(e)
    });
}
export function pld(t) {
    return new Zvr({
        type: "success",
        innerType: t
    });
}
export function iPo(t, e) {
    return new Qvr({
        type: "catch",
        innerType: t,
        catchValue: typeof e == "function" ? e : ()=>e
    });
}
export function mld(t) {
    return qod(Jvr, t);
}
export function RQn(t, e) {
    return new QQn({
        type: "pipe",
        in: t,
        out: e
    });
}
export function gld(t, e, n) {
    return new JQn({
        type: "pipe",
        in: t,
        out: e,
        transform: n.decode,
        reverseTransform: n.encode
    });
}
export function rPo(t) {
    return new e_r({
        type: "readonly",
        innerType: t
    });
}
export function fld(t, e) {
    return new t_r({
        type: "template_literal",
        parts: t,
        ...kx.normalizeParams(e)
    });
}
export function sPo(t) {
    return new n_r({
        type: "lazy",
        getter: t
    });
}
export function vld(t) {
    return new i_r({
        type: "promise",
        innerType: t
    });
}
export function xvr(t) {
    return new r_r({
        type: "function",
        input: Array.isArray(t?.input) ? Z2o(t?.input) : t?.input ?? IQn(z6t()),
        output: t?.output ?? z6t()
    });
}
export function _ld(t) {
    const e = new f4({
        check: "custom"
    });
    return e._zod.check = t, e;
}
export function bld(t, e) {
    return Kod(Fhn, t ?? (()=>!0), e);
}
export function oPo(t, e = {}) {
    return zRo(Fhn, t, e);
}
export function aPo(t) {
    return Yod(t);
}
export function yld(t, e = {}) {
    const n = new Fhn({
        type: "custom",
        check: "custom",
        fn: (i)=>i instanceof t,
        abort: !0,
        ...kx.normalizeParams(e)
    });
    return n._zod.bag.Class = t, n._zod.check = (i)=>{
        i.value instanceof t || i.issues.push({
            code: "invalid_type",
            expected: t.name,
            input: i.value,
            inst: n,
            path: [
                ...n._zod.def.path ?? []
            ]
        });
    }, n;
}
export function Sld(t) {
    const e = sPo(()=>Tvr([
            kvr(t),
            V2o(),
            K2o(),
            Y2o(),
            IQn(e),
            Q2o(kvr(), e)
        ]));
    return e;
}
export function kld(t, e) {
    return RQn(Ivr(t), e);
}
export function CTy(t) {
    Fse({
        customError: t
    });
}
export function TTy() {
    return Fse().customError;
}
function ITy(t, e) {
    const n = t.$schema;
    return n === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : n === "http://json-schema.org/draft-07/schema#" ? "draft-7" : n === "http://json-schema.org/draft-04/schema#" ? "draft-4" : e ?? "draft-2020-12";
}
function xTy(t, e) {
    if (!t.startsWith("#")) throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
    const n = t.slice(1).split("/").filter(Boolean);
    if (n.length === 0) return e.rootSchema;
    const i = e.version === "draft-2020-12" ? "$defs" : "definitions";
    if (n[0] === i) {
        const r = n[1];
        if (!r || !e.defs[r]) throw new Error(`Reference not found: ${t}`);
        return e.defs[r];
    }
    throw new Error(`Reference not found: ${t}`);
}
function Cld(t, e) {
    if (t.not !== void 0) {
        if (typeof t.not == "object" && Object.keys(t.not).length === 0) return Cf.never();
        throw new Error("not is not supported in Zod (except { not: {} } for never)");
    }
    if (t.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
    if (t.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
    if (t.if !== void 0 || t.then !== void 0 || t.else !== void 0) throw new Error("Conditional schemas (if/then/else) are not supported");
    if (t.dependentSchemas !== void 0 || t.dependentRequired !== void 0) throw new Error("dependentSchemas and dependentRequired are not supported");
    if (t.$ref) {
        const r = t.$ref;
        if (e.refs.has(r)) return e.refs.get(r);
        if (e.processing.has(r)) return Cf.lazy(()=>{
            if (!e.refs.has(r)) throw new Error(`Circular reference not resolved: ${r}`);
            return e.refs.get(r);
        });
        e.processing.add(r);
        const s = xTy(r, e), o = Use(s, e);
        return e.refs.set(r, o), e.processing.delete(r), o;
    }
    if (t.enum !== void 0) {
        const r = t.enum;
        if (e.version === "openapi-3.0" && t.nullable === !0 && r.length === 1 && r[0] === null) return Cf.null();
        if (r.length === 0) return Cf.never();
        if (r.length === 1) return Cf.literal(r[0]);
        if (r.every((o)=>typeof o == "string")) return Cf.enum(r);
        const s = r.map((o)=>Cf.literal(o));
        return s.length < 2 ? s[0] : Cf.union([
            s[0],
            s[1],
            ...s.slice(2)
        ]);
    }
    if (t.const !== void 0) return Cf.literal(t.const);
    const n = t.type;
    if (Array.isArray(n)) {
        const r = n.map((s)=>{
            const o = {
                ...t,
                type: s
            };
            return Cld(o, e);
        });
        return r.length === 0 ? Cf.never() : r.length === 1 ? r[0] : Cf.union(r);
    }
    if (!n) return Cf.any();
    let i;
    switch(n){
        case "string":
            {
                let r = Cf.string();
                if (t.format) {
                    const s = t.format;
                    s === "email" ? r = r.check(Cf.email()) : s === "uri" || s === "uri-reference" ? r = r.check(Cf.url()) : s === "uuid" || s === "guid" ? r = r.check(Cf.uuid()) : s === "date-time" ? r = r.check(Cf.iso.datetime()) : s === "date" ? r = r.check(Cf.iso.date()) : s === "time" ? r = r.check(Cf.iso.time()) : s === "duration" ? r = r.check(Cf.iso.duration()) : s === "ipv4" ? r = r.check(Cf.ipv4()) : s === "ipv6" ? r = r.check(Cf.ipv6()) : s === "mac" ? r = r.check(Cf.mac()) : s === "cidr" ? r = r.check(Cf.cidrv4()) : s === "cidr-v6" ? r = r.check(Cf.cidrv6()) : s === "base64" ? r = r.check(Cf.base64()) : s === "base64url" ? r = r.check(Cf.base64url()) : s === "e164" ? r = r.check(Cf.e164()) : s === "jwt" ? r = r.check(Cf.jwt()) : s === "emoji" ? r = r.check(Cf.emoji()) : s === "nanoid" ? r = r.check(Cf.nanoid()) : s === "cuid" ? r = r.check(Cf.cuid()) : s === "cuid2" ? r = r.check(Cf.cuid2()) : s === "ulid" ? r = r.check(Cf.ulid()) : s === "xid" ? r = r.check(Cf.xid()) : s === "ksuid" && (r = r.check(Cf.ksuid()));
                }
                typeof t.minLength == "number" && (r = r.min(t.minLength)), typeof t.maxLength == "number" && (r = r.max(t.maxLength)), t.pattern && (r = r.regex(new RegExp(t.pattern))), i = r;
                break;
            }
        case "number":
        case "integer":
            {
                let r = n === "integer" ? Cf.number().int() : Cf.number();
                typeof t.minimum == "number" && (r = r.min(t.minimum)), typeof t.maximum == "number" && (r = r.max(t.maximum)), typeof t.exclusiveMinimum == "number" ? r = r.gt(t.exclusiveMinimum) : t.exclusiveMinimum === !0 && typeof t.minimum == "number" && (r = r.gt(t.minimum)), typeof t.exclusiveMaximum == "number" ? r = r.lt(t.exclusiveMaximum) : t.exclusiveMaximum === !0 && typeof t.maximum == "number" && (r = r.lt(t.maximum)), typeof t.multipleOf == "number" && (r = r.multipleOf(t.multipleOf)), i = r;
                break;
            }
        case "boolean":
            {
                i = Cf.boolean();
                break;
            }
        case "null":
            {
                i = Cf.null();
                break;
            }
        case "object":
            {
                const r = {}, s = t.properties || {}, o = new Set(t.required || []);
                for (const [l, c] of Object.entries(s)){
                    const u = Use(c, e);
                    r[l] = o.has(l) ? u : u.optional();
                }
                if (t.propertyNames) {
                    const l = Use(t.propertyNames, e), c = t.additionalProperties && typeof t.additionalProperties == "object" ? Use(t.additionalProperties, e) : Cf.any();
                    if (Object.keys(r).length === 0) {
                        i = Cf.record(l, c);
                        break;
                    }
                    const u = Cf.object(r).passthrough(), d = Cf.looseRecord(l, c);
                    i = Cf.intersection(u, d);
                    break;
                }
                if (t.patternProperties) {
                    const l = t.patternProperties, c = Object.keys(l), u = [];
                    for (const h of c){
                        const p = Use(l[h], e), g = Cf.string().regex(new RegExp(h));
                        u.push(Cf.looseRecord(g, p));
                    }
                    const d = [];
                    if (Object.keys(r).length > 0 && d.push(Cf.object(r).passthrough()), d.push(...u), d.length === 0) i = Cf.object({}).passthrough();
                    else if (d.length === 1) i = d[0];
                    else {
                        let h = Cf.intersection(d[0], d[1]);
                        for(let p = 2; p < d.length; p++)h = Cf.intersection(h, d[p]);
                        i = h;
                    }
                    break;
                }
                const a = Cf.object(r);
                t.additionalProperties === !1 ? i = a.strict() : typeof t.additionalProperties == "object" ? i = a.catchall(Use(t.additionalProperties, e)) : i = a.passthrough();
                break;
            }
        case "array":
            {
                const r = t.prefixItems, s = t.items;
                if (r && Array.isArray(r)) {
                    const o = r.map((l)=>Use(l, e)), a = s && typeof s == "object" && !Array.isArray(s) ? Use(s, e) : void 0;
                    a ? i = Cf.tuple(o).rest(a) : i = Cf.tuple(o), typeof t.minItems == "number" && (i = i.check(Cf.minLength(t.minItems))), typeof t.maxItems == "number" && (i = i.check(Cf.maxLength(t.maxItems)));
                } else if (Array.isArray(s)) {
                    const o = s.map((l)=>Use(l, e)), a = t.additionalItems && typeof t.additionalItems == "object" ? Use(t.additionalItems, e) : void 0;
                    a ? i = Cf.tuple(o).rest(a) : i = Cf.tuple(o), typeof t.minItems == "number" && (i = i.check(Cf.minLength(t.minItems))), typeof t.maxItems == "number" && (i = i.check(Cf.maxLength(t.maxItems)));
                } else if (s !== void 0) {
                    const o = Use(s, e);
                    let a = Cf.array(o);
                    typeof t.minItems == "number" && (a = a.min(t.minItems)), typeof t.maxItems == "number" && (a = a.max(t.maxItems)), i = a;
                } else i = Cf.array(Cf.any());
                break;
            }
        default:
            throw new Error(`Unsupported type: ${n}`);
    }
    return t.description && (i = i.describe(t.description)), t.default !== void 0 && (i = i.default(t.default)), i;
}
function Use(t, e) {
    if (typeof t == "boolean") return t ? Cf.any() : Cf.never();
    let n = Cld(t, e);
    const i = t.type || t.enum !== void 0 || t.const !== void 0;
    if (t.anyOf && Array.isArray(t.anyOf)) {
        const a = t.anyOf.map((c)=>Use(c, e)), l = Cf.union(a);
        n = i ? Cf.intersection(n, l) : l;
    }
    if (t.oneOf && Array.isArray(t.oneOf)) {
        const a = t.oneOf.map((c)=>Use(c, e)), l = Cf.xor(a);
        n = i ? Cf.intersection(n, l) : l;
    }
    if (t.allOf && Array.isArray(t.allOf)) if (t.allOf.length === 0) n = i ? n : Cf.any();
    else {
        let a = i ? n : Use(t.allOf[0], e);
        const l = i ? 0 : 1;
        for(let c = l; c < t.allOf.length; c++)a = Cf.intersection(a, Use(t.allOf[c], e));
        n = a;
    }
    t.nullable === !0 && e.version === "openapi-3.0" && (n = Cf.nullable(n)), t.readOnly === !0 && (n = Cf.readonly(n));
    const r = {}, s = [
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor"
    ];
    for (const a of s)a in t && (r[a] = t[a]);
    const o = [
        "contentEncoding",
        "contentMediaType",
        "contentSchema"
    ];
    for (const a of o)a in t && (r[a] = t[a]);
    for (const a of Object.keys(t))Tld.has(a) || (r[a] = t[a]);
    return Object.keys(r).length > 0 && e.registry.add(n, r), n;
}
export function ATy(t, e) {
    if (typeof t == "boolean") return t ? Cf.any() : Cf.never();
    const n = ITy(t, e?.defaultTarget), i = t.$defs || t.definitions || {}, r = {
        version: n,
        defs: i,
        refs: new Map,
        processing: new Set,
        rootSchema: t,
        registry: e?.registry ?? Bke
    };
    return Use(t, r);
}
export var Eld = {};
Sa(Eld, {
    bigint: ()=>NTy,
    boolean: ()=>DTy,
    date: ()=>LTy,
    number: ()=>MTy,
    string: ()=>PTy
});
function PTy(t) {
    return kod(xhn, t);
}
function MTy(t) {
    return xod(Phn, t);
}
function DTy(t) {
    return Dod(Mhn, t);
}
function NTy(t) {
    return Lod(Dhn, t);
}
function LTy(t) {
    return God(YQn, t);
}
export { _vr, bvr, vvr, yvr };

export var D2o = {};
Object.defineProperty(D2o, "ZodISODate", {
    enumerable: true,
    get: ()=>_vr
});
Object.defineProperty(D2o, "ZodISODateTime", {
    enumerable: true,
    get: ()=>vvr
});
Object.defineProperty(D2o, "ZodISODuration", {
    enumerable: true,
    get: ()=>yvr
});
Object.defineProperty(D2o, "ZodISOTime", {
    enumerable: true,
    get: ()=>bvr
});
Object.defineProperty(D2o, "date", {
    enumerable: true,
    get: ()=>oad
});
Object.defineProperty(D2o, "datetime", {
    enumerable: true,
    get: ()=>sad
});
Object.defineProperty(D2o, "duration", {
    enumerable: true,
    get: ()=>lad
});
Object.defineProperty(D2o, "time", {
    enumerable: true,
    get: ()=>aad
});
