import { Cc } from "./HVr.js";
import { $bu, Abu, Bbu, C1, C8s, Dbu, Fbu, Gbu, Hbu, Jbu, Kbu, Lbu, Mbu, Nbu, Obu, Pbu, Qbu, R8s, Rbu, S8s, T8s, Ubu, Vbu, Wbt, Wbu, Xbu, Ybu, Yue, Zbu, _8s, a8s, b8s, c8s, d8s, eyu, f8s, g8s, h8s, i8s, iyu, jbu, k8s, l8s, m8s, n8s, nyu, o5i, o8s, p8s, qbu, r8s, rX, s5i, s8s, t8s, tyu, u8s, uAn, v8s, w8s, y8s, zbu } from "./f0s.js";
import { S2 } from "./checks_4.js";
import { PSu, nm } from "./from-json-schema.js";
import { C5i, T5i, k5i, w5i } from "./iso_2.js";
import { Xue } from "./registries_2.js";
import { wS } from "./schemas_5.js";
import { $5i, $M, A8t, AAn, B5i, B8t, BAn, CAn, D8t, DAn, E0e, EAn, F5i, F8t, FAn, Fk, G5i, H5i, IAn, J5i, K5i, K7s, L5i, L8t, LAn, M8t, MAn, N5i, N8t, NAn, O5i, O8t, OAn, P8t, PAn, Q5i, R8t, RAn, SAn, TAn, U5i, V5i, W5i, X5i, Y5i, Z5i, _An, a9i, bAn, c9i, e9i, fAn, i9i, iQe, j5i, kAn, l9i, n9i, o9i, q5i, q7s, qbt, r9i, s9i, t9i, vAn, wAn, xAn, yAn, z5i, z7s, zbt } from "./schemas_6.js";
export function pyu(e) {
    return Dbu(k5i, e);
}
export function myu(e) {
    return Mbu(w5i, e);
}
export function gyu(e) {
    return Pbu(C5i, e);
}
export function fyu(e) {
    return Lbu(T5i, e);
}
export var yyu = {};
Cc(yyu, {
    ZodAny: ()=>B5i,
    ZodArray: ()=>W5i,
    ZodBase64: ()=>AAn,
    ZodBase64URL: ()=>RAn,
    ZodBigInt: ()=>L8t,
    ZodBigIntFormat: ()=>PAn,
    ZodBoolean: ()=>P8t,
    ZodCIDRv4: ()=>xAn,
    ZodCIDRv6: ()=>IAn,
    ZodCUID: ()=>yAn,
    ZodCUID2: ()=>SAn,
    ZodCatch: ()=>i9i,
    ZodCodec: ()=>BAn,
    ZodCustom: ()=>B8t,
    ZodCustomStringFormat: ()=>qbt,
    ZodDate: ()=>LAn,
    ZodDefault: ()=>e9i,
    ZodDiscriminatedUnion: ()=>V5i,
    ZodE164: ()=>DAn,
    ZodEmail: ()=>vAn,
    ZodEmoji: ()=>_An,
    ZodEnum: ()=>zbt,
    ZodExactOptional: ()=>Q5i,
    ZodFile: ()=>X5i,
    ZodFunction: ()=>l9i,
    ZodGUID: ()=>R8t,
    ZodIPv4: ()=>TAn,
    ZodIPv6: ()=>EAn,
    ZodIntersection: ()=>j5i,
    ZodJWT: ()=>MAn,
    ZodKSUID: ()=>CAn,
    ZodLazy: ()=>a9i,
    ZodLiteral: ()=>Y5i,
    ZodMAC: ()=>L5i,
    ZodMap: ()=>z5i,
    ZodNaN: ()=>r9i,
    ZodNanoID: ()=>bAn,
    ZodNever: ()=>$5i,
    ZodNonOptional: ()=>OAn,
    ZodNull: ()=>F5i,
    ZodNullable: ()=>J5i,
    ZodNumber: ()=>M8t,
    ZodNumberFormat: ()=>iQe,
    ZodObject: ()=>N8t,
    ZodOptional: ()=>NAn,
    ZodPipe: ()=>FAn,
    ZodPrefault: ()=>t9i,
    ZodPromise: ()=>c9i,
    ZodReadonly: ()=>s9i,
    ZodRecord: ()=>F8t,
    ZodSet: ()=>K5i,
    ZodString: ()=>A8t,
    ZodStringFormat: ()=>$M,
    ZodSuccess: ()=>n9i,
    ZodSymbol: ()=>N5i,
    ZodTemplateLiteral: ()=>o9i,
    ZodTransform: ()=>Z5i,
    ZodTuple: ()=>q5i,
    ZodType: ()=>Fk,
    ZodULID: ()=>kAn,
    ZodURL: ()=>D8t,
    ZodUUID: ()=>E0e,
    ZodUndefined: ()=>O5i,
    ZodUnion: ()=>O8t,
    ZodUnknown: ()=>U5i,
    ZodVoid: ()=>H5i,
    ZodXID: ()=>wAn,
    ZodXor: ()=>G5i,
    _ZodString: ()=>fAn,
    _default: ()=>B7s,
    _function: ()=>P5i,
    any: ()=>rSu,
    array: ()=>hAn,
    base64: ()=>Hyu,
    base64url: ()=>Wyu,
    bigint: ()=>Jyu,
    boolean: ()=>M7s,
    catch: ()=>H7s,
    check: ()=>ESu,
    cidrv4: ()=>Uyu,
    cidrv6: ()=>$yu,
    codec: ()=>wSu,
    cuid: ()=>Dyu,
    cuid2: ()=>Myu,
    custom: ()=>xSu,
    date: ()=>oSu,
    describe: ()=>q7s,
    discriminatedUnion: ()=>hSu,
    e164: ()=>Gyu,
    email: ()=>Syu,
    emoji: ()=>Ayu,
    enum: ()=>D5i,
    exactOptional: ()=>F7s,
    file: ()=>bSu,
    float32: ()=>Yyu,
    float64: ()=>Xyu,
    function: ()=>P5i,
    guid: ()=>kyu,
    hash: ()=>Kyu,
    hex: ()=>zyu,
    hostname: ()=>qyu,
    httpUrl: ()=>Iyu,
    instanceof: ()=>ISu,
    int: ()=>I5i,
    int32: ()=>Zyu,
    int64: ()=>eSu,
    intersection: ()=>L7s,
    ipv4: ()=>Oyu,
    ipv6: ()=>Byu,
    json: ()=>ASu,
    jwt: ()=>Vyu,
    keyof: ()=>aSu,
    ksuid: ()=>Nyu,
    lazy: ()=>G7s,
    literal: ()=>_Su,
    looseObject: ()=>uSu,
    looseRecord: ()=>mSu,
    mac: ()=>Fyu,
    map: ()=>gSu,
    meta: ()=>z7s,
    nan: ()=>kSu,
    nanoid: ()=>Ryu,
    nativeEnum: ()=>vSu,
    never: ()=>A5i,
    nonoptional: ()=>$7s,
    null: ()=>P7s,
    nullable: ()=>mAn,
    nullish: ()=>ySu,
    number: ()=>D7s,
    object: ()=>cSu,
    optional: ()=>pAn,
    partialRecord: ()=>pSu,
    pipe: ()=>gAn,
    prefault: ()=>U7s,
    preprocess: ()=>RSu,
    promise: ()=>TSu,
    readonly: ()=>W7s,
    record: ()=>O7s,
    refine: ()=>V7s,
    set: ()=>fSu,
    strictObject: ()=>lSu,
    string: ()=>x5i,
    stringFormat: ()=>jyu,
    stringbool: ()=>K7s,
    success: ()=>SSu,
    superRefine: ()=>j7s,
    symbol: ()=>nSu,
    templateLiteral: ()=>CSu,
    transform: ()=>M5i,
    tuple: ()=>N7s,
    uint32: ()=>Qyu,
    uint64: ()=>tSu,
    ulid: ()=>Pyu,
    undefined: ()=>iSu,
    union: ()=>R5i,
    unknown: ()=>jbt,
    url: ()=>xyu,
    uuid: ()=>wyu,
    uuidv4: ()=>Cyu,
    uuidv6: ()=>Tyu,
    uuidv7: ()=>Eyu,
    void: ()=>sSu,
    xid: ()=>Lyu,
    xor: ()=>dSu
});
export function x5i(e) {
    return t8s(A8t, e);
}
export function Syu(e) {
    return n8s(vAn, e);
}
export function kyu(e) {
    return s5i(R8t, e);
}
export function wyu(e) {
    return i8s(E0e, e);
}
export function Cyu(e) {
    return r8s(E0e, e);
}
export function Tyu(e) {
    return s8s(E0e, e);
}
export function Eyu(e) {
    return o8s(E0e, e);
}
export function xyu(e) {
    return o5i(D8t, e);
}
export function Iyu(e) {
    return o5i(D8t, {
        protocol: /^https?$/,
        hostname: Wbt.domain,
        ...C1.normalizeParams(e)
    });
}
export function Ayu(e) {
    return a8s(_An, e);
}
export function Ryu(e) {
    return c8s(bAn, e);
}
export function Dyu(e) {
    return l8s(yAn, e);
}
export function Myu(e) {
    return u8s(SAn, e);
}
export function Pyu(e) {
    return d8s(kAn, e);
}
export function Lyu(e) {
    return h8s(wAn, e);
}
export function Nyu(e) {
    return p8s(CAn, e);
}
export function Oyu(e) {
    return m8s(TAn, e);
}
export function Fyu(e) {
    return Rbu(L5i, e);
}
export function Byu(e) {
    return g8s(EAn, e);
}
export function Uyu(e) {
    return f8s(xAn, e);
}
export function $yu(e) {
    return v8s(IAn, e);
}
export function Hyu(e) {
    return _8s(AAn, e);
}
export function Wyu(e) {
    return b8s(RAn, e);
}
export function Gyu(e) {
    return y8s(DAn, e);
}
export function Vyu(e) {
    return S8s(MAn, e);
}
export function jyu(e, t, n = {}) {
    return uAn(qbt, e, t, n);
}
export function qyu(e) {
    return uAn(qbt, "hostname", Wbt.hostname, e);
}
export function zyu(e) {
    return uAn(qbt, "hex", Wbt.hex, e);
}
export function Kyu(e, t) {
    const n = t?.enc ?? "hex", i = `${e}_${n}`, r = Wbt[i];
    if (!r) throw new Error(`Unrecognized hash format: ${i}`);
    return uAn(qbt, i, r, t);
}
export function D7s(e) {
    return k8s(M8t, e);
}
export function I5i(e) {
    return w8s(iQe, e);
}
export function Yyu(e) {
    return Obu(iQe, e);
}
export function Xyu(e) {
    return Fbu(iQe, e);
}
export function Zyu(e) {
    return Bbu(iQe, e);
}
export function Qyu(e) {
    return Ubu(iQe, e);
}
export function M7s(e) {
    return C8s(P8t, e);
}
export function Jyu(e) {
    return Hbu(L8t, e);
}
export function eSu(e) {
    return Gbu(PAn, e);
}
export function tSu(e) {
    return Vbu(PAn, e);
}
export function nSu(e) {
    return jbu(N5i, e);
}
export function iSu(e) {
    return qbu(O5i, e);
}
export function P7s(e) {
    return zbu(F5i, e);
}
export function rSu() {
    return Kbu(B5i);
}
export function jbt() {
    return T8s(U5i);
}
export function A5i(e) {
    return Ybu($5i, e);
}
export function sSu(e) {
    return Xbu(H5i, e);
}
export function oSu(e) {
    return Zbu(LAn, e);
}
export function hAn(e, t) {
    return eyu(W5i, e, t);
}
export function aSu(e) {
    const t = e._zod.def.shape;
    return D5i(Object.keys(t));
}
export function cSu(e, t) {
    const n = {
        type: "object",
        shape: e ?? {},
        ...C1.normalizeParams(t)
    };
    return new N8t(n);
}
export function lSu(e, t) {
    return new N8t({
        type: "object",
        shape: e,
        catchall: A5i(),
        ...C1.normalizeParams(t)
    });
}
export function uSu(e, t) {
    return new N8t({
        type: "object",
        shape: e,
        catchall: jbt(),
        ...C1.normalizeParams(t)
    });
}
export function R5i(e, t) {
    return new O8t({
        type: "union",
        options: e,
        ...C1.normalizeParams(t)
    });
}
export function dSu(e, t) {
    return new G5i({
        type: "union",
        options: e,
        inclusive: !1,
        ...C1.normalizeParams(t)
    });
}
export function hSu(e, t, n) {
    return new V5i({
        type: "union",
        options: t,
        discriminator: e,
        ...C1.normalizeParams(n)
    });
}
export function L7s(e, t) {
    return new j5i({
        type: "intersection",
        left: e,
        right: t
    });
}
export function N7s(e, t, n) {
    const i = t instanceof wS, r = i ? n : t, s = i ? t : null;
    return new q5i({
        type: "tuple",
        items: e,
        rest: s,
        ...C1.normalizeParams(r)
    });
}
export function O7s(e, t, n) {
    return new F8t({
        type: "record",
        keyType: e,
        valueType: t,
        ...C1.normalizeParams(n)
    });
}
export function pSu(e, t, n) {
    const i = Yue(e);
    return i._zod.values = void 0, new F8t({
        type: "record",
        keyType: i,
        valueType: t,
        ...C1.normalizeParams(n)
    });
}
export function mSu(e, t, n) {
    return new F8t({
        type: "record",
        keyType: e,
        valueType: t,
        mode: "loose",
        ...C1.normalizeParams(n)
    });
}
export function gSu(e, t, n) {
    return new z5i({
        type: "map",
        keyType: e,
        valueType: t,
        ...C1.normalizeParams(n)
    });
}
export function fSu(e, t) {
    return new K5i({
        type: "set",
        valueType: e,
        ...C1.normalizeParams(t)
    });
}
export function D5i(e, t) {
    const n = Array.isArray(e) ? Object.fromEntries(e.map((i)=>[
            i,
            i
        ])) : e;
    return new zbt({
        type: "enum",
        entries: n,
        ...C1.normalizeParams(t)
    });
}
export function vSu(e, t) {
    return new zbt({
        type: "enum",
        entries: e,
        ...C1.normalizeParams(t)
    });
}
export function _Su(e, t) {
    return new Y5i({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...C1.normalizeParams(t)
    });
}
export function bSu(e) {
    return tyu(X5i, e);
}
export function M5i(e) {
    return new Z5i({
        type: "transform",
        transform: e
    });
}
export function pAn(e) {
    return new NAn({
        type: "optional",
        innerType: e
    });
}
export function F7s(e) {
    return new Q5i({
        type: "optional",
        innerType: e
    });
}
export function mAn(e) {
    return new J5i({
        type: "nullable",
        innerType: e
    });
}
export function ySu(e) {
    return pAn(mAn(e));
}
export function B7s(e, t) {
    return new e9i({
        type: "default",
        innerType: e,
        get defaultValue () {
            return typeof t == "function" ? t() : C1.shallowClone(t);
        }
    });
}
export function U7s(e, t) {
    return new t9i({
        type: "prefault",
        innerType: e,
        get defaultValue () {
            return typeof t == "function" ? t() : C1.shallowClone(t);
        }
    });
}
export function $7s(e, t) {
    return new OAn({
        type: "nonoptional",
        innerType: e,
        ...C1.normalizeParams(t)
    });
}
export function SSu(e) {
    return new n9i({
        type: "success",
        innerType: e
    });
}
export function H7s(e, t) {
    return new i9i({
        type: "catch",
        innerType: e,
        catchValue: typeof t == "function" ? t : ()=>t
    });
}
export function kSu(e) {
    return Jbu(r9i, e);
}
export function gAn(e, t) {
    return new FAn({
        type: "pipe",
        in: e,
        out: t
    });
}
export function wSu(e, t, n) {
    return new BAn({
        type: "pipe",
        in: e,
        out: t,
        transform: n.decode,
        reverseTransform: n.encode
    });
}
export function W7s(e) {
    return new s9i({
        type: "readonly",
        innerType: e
    });
}
export function CSu(e, t) {
    return new o9i({
        type: "template_literal",
        parts: e,
        ...C1.normalizeParams(t)
    });
}
export function G7s(e) {
    return new a9i({
        type: "lazy",
        getter: e
    });
}
export function TSu(e) {
    return new c9i({
        type: "promise",
        innerType: e
    });
}
export function P5i(e) {
    return new l9i({
        type: "function",
        input: Array.isArray(e?.input) ? N7s(e?.input) : e?.input ?? hAn(jbt()),
        output: e?.output ?? jbt()
    });
}
export function ESu(e) {
    const t = new S2({
        check: "custom"
    });
    return t._zod.check = e, t;
}
export function xSu(e, t) {
    return nyu(B8t, e ?? (()=>!0), t);
}
export function V7s(e, t = {}) {
    return R8s(B8t, e, t);
}
export function j7s(e) {
    return iyu(e);
}
export function ISu(e, t = {}) {
    const n = new B8t({
        type: "custom",
        check: "custom",
        fn: (i)=>i instanceof e,
        abort: !0,
        ...C1.normalizeParams(t)
    });
    return n._zod.bag.Class = e, n._zod.check = (i)=>{
        i.value instanceof e || i.issues.push({
            code: "invalid_type",
            expected: e.name,
            input: i.value,
            inst: n,
            path: [
                ...n._zod.def.path ?? []
            ]
        });
    }, n;
}
export function ASu(e) {
    const t = G7s(()=>R5i([
            x5i(e),
            D7s(),
            M7s(),
            P7s(),
            hAn(t),
            O7s(x5i(), t)
        ]));
    return t;
}
export function RSu(e, t) {
    return gAn(M5i(e), t);
}
export function Vav(e) {
    rX({
        customError: e
    });
}
export function jav() {
    return rX().customError;
}
function zav(e, t) {
    const n = e.$schema;
    return n === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : n === "http://json-schema.org/draft-07/schema#" ? "draft-7" : n === "http://json-schema.org/draft-04/schema#" ? "draft-4" : t ?? "draft-2020-12";
}
function Kav(e, t) {
    if (!e.startsWith("#")) throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
    const n = e.slice(1).split("/").filter(Boolean);
    if (n.length === 0) return t.rootSchema;
    const i = t.version === "draft-2020-12" ? "$defs" : "definitions";
    if (n[0] === i) {
        const r = n[1];
        if (!r || !t.defs[r]) throw new Error(`Reference not found: ${e}`);
        return t.defs[r];
    }
    throw new Error(`Reference not found: ${e}`);
}
function MSu(e, t) {
    if (e.not !== void 0) {
        if (typeof e.not == "object" && Object.keys(e.not).length === 0) return nm.never();
        throw new Error("not is not supported in Zod (except { not: {} } for never)");
    }
    if (e.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
    if (e.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
    if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0) throw new Error("Conditional schemas (if/then/else) are not supported");
    if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0) throw new Error("dependentSchemas and dependentRequired are not supported");
    if (e.$ref) {
        const r = e.$ref;
        if (t.refs.has(r)) return t.refs.get(r);
        if (t.processing.has(r)) return nm.lazy(()=>{
            if (!t.refs.has(r)) throw new Error(`Circular reference not resolved: ${r}`);
            return t.refs.get(r);
        });
        t.processing.add(r);
        const s = Kav(r, t), o = sX(s, t);
        return t.refs.set(r, o), t.processing.delete(r), o;
    }
    if (e.enum !== void 0) {
        const r = e.enum;
        if (t.version === "openapi-3.0" && e.nullable === !0 && r.length === 1 && r[0] === null) return nm.null();
        if (r.length === 0) return nm.never();
        if (r.length === 1) return nm.literal(r[0]);
        if (r.every((o)=>typeof o == "string")) return nm.enum(r);
        const s = r.map((o)=>nm.literal(o));
        return s.length < 2 ? s[0] : nm.union([
            s[0],
            s[1],
            ...s.slice(2)
        ]);
    }
    if (e.const !== void 0) return nm.literal(e.const);
    const n = e.type;
    if (Array.isArray(n)) {
        const r = n.map((s)=>{
            const o = {
                ...e,
                type: s
            };
            return MSu(o, t);
        });
        return r.length === 0 ? nm.never() : r.length === 1 ? r[0] : nm.union(r);
    }
    if (!n) return nm.any();
    let i;
    switch(n){
        case "string":
            {
                let r = nm.string();
                if (e.format) {
                    const s = e.format;
                    s === "email" ? r = r.check(nm.email()) : s === "uri" || s === "uri-reference" ? r = r.check(nm.url()) : s === "uuid" || s === "guid" ? r = r.check(nm.uuid()) : s === "date-time" ? r = r.check(nm.iso.datetime()) : s === "date" ? r = r.check(nm.iso.date()) : s === "time" ? r = r.check(nm.iso.time()) : s === "duration" ? r = r.check(nm.iso.duration()) : s === "ipv4" ? r = r.check(nm.ipv4()) : s === "ipv6" ? r = r.check(nm.ipv6()) : s === "mac" ? r = r.check(nm.mac()) : s === "cidr" ? r = r.check(nm.cidrv4()) : s === "cidr-v6" ? r = r.check(nm.cidrv6()) : s === "base64" ? r = r.check(nm.base64()) : s === "base64url" ? r = r.check(nm.base64url()) : s === "e164" ? r = r.check(nm.e164()) : s === "jwt" ? r = r.check(nm.jwt()) : s === "emoji" ? r = r.check(nm.emoji()) : s === "nanoid" ? r = r.check(nm.nanoid()) : s === "cuid" ? r = r.check(nm.cuid()) : s === "cuid2" ? r = r.check(nm.cuid2()) : s === "ulid" ? r = r.check(nm.ulid()) : s === "xid" ? r = r.check(nm.xid()) : s === "ksuid" && (r = r.check(nm.ksuid()));
                }
                typeof e.minLength == "number" && (r = r.min(e.minLength)), typeof e.maxLength == "number" && (r = r.max(e.maxLength)), e.pattern && (r = r.regex(new RegExp(e.pattern))), i = r;
                break;
            }
        case "number":
        case "integer":
            {
                let r = n === "integer" ? nm.number().int() : nm.number();
                typeof e.minimum == "number" && (r = r.min(e.minimum)), typeof e.maximum == "number" && (r = r.max(e.maximum)), typeof e.exclusiveMinimum == "number" ? r = r.gt(e.exclusiveMinimum) : e.exclusiveMinimum === !0 && typeof e.minimum == "number" && (r = r.gt(e.minimum)), typeof e.exclusiveMaximum == "number" ? r = r.lt(e.exclusiveMaximum) : e.exclusiveMaximum === !0 && typeof e.maximum == "number" && (r = r.lt(e.maximum)), typeof e.multipleOf == "number" && (r = r.multipleOf(e.multipleOf)), i = r;
                break;
            }
        case "boolean":
            {
                i = nm.boolean();
                break;
            }
        case "null":
            {
                i = nm.null();
                break;
            }
        case "object":
            {
                const r = {}, s = e.properties || {}, o = new Set(e.required || []);
                for (const [c, l] of Object.entries(s)){
                    const u = sX(l, t);
                    r[c] = o.has(c) ? u : u.optional();
                }
                if (e.propertyNames) {
                    const c = sX(e.propertyNames, t), l = e.additionalProperties && typeof e.additionalProperties == "object" ? sX(e.additionalProperties, t) : nm.any();
                    if (Object.keys(r).length === 0) {
                        i = nm.record(c, l);
                        break;
                    }
                    const u = nm.object(r).passthrough(), h = nm.looseRecord(c, l);
                    i = nm.intersection(u, h);
                    break;
                }
                if (e.patternProperties) {
                    const c = e.patternProperties, l = Object.keys(c), u = [];
                    for (const p of l){
                        const g = sX(c[p], t), f = nm.string().regex(new RegExp(p));
                        u.push(nm.looseRecord(f, g));
                    }
                    const h = [];
                    if (Object.keys(r).length > 0 && h.push(nm.object(r).passthrough()), h.push(...u), h.length === 0) i = nm.object({}).passthrough();
                    else if (h.length === 1) i = h[0];
                    else {
                        let p = nm.intersection(h[0], h[1]);
                        for(let g = 2; g < h.length; g++)p = nm.intersection(p, h[g]);
                        i = p;
                    }
                    break;
                }
                const a = nm.object(r);
                e.additionalProperties === !1 ? i = a.strict() : typeof e.additionalProperties == "object" ? i = a.catchall(sX(e.additionalProperties, t)) : i = a.passthrough();
                break;
            }
        case "array":
            {
                const r = e.prefixItems, s = e.items;
                if (r && Array.isArray(r)) {
                    const o = r.map((c)=>sX(c, t)), a = s && typeof s == "object" && !Array.isArray(s) ? sX(s, t) : void 0;
                    a ? i = nm.tuple(o).rest(a) : i = nm.tuple(o), typeof e.minItems == "number" && (i = i.check(nm.minLength(e.minItems))), typeof e.maxItems == "number" && (i = i.check(nm.maxLength(e.maxItems)));
                } else if (Array.isArray(s)) {
                    const o = s.map((c)=>sX(c, t)), a = e.additionalItems && typeof e.additionalItems == "object" ? sX(e.additionalItems, t) : void 0;
                    a ? i = nm.tuple(o).rest(a) : i = nm.tuple(o), typeof e.minItems == "number" && (i = i.check(nm.minLength(e.minItems))), typeof e.maxItems == "number" && (i = i.check(nm.maxLength(e.maxItems)));
                } else if (s !== void 0) {
                    const o = sX(s, t);
                    let a = nm.array(o);
                    typeof e.minItems == "number" && (a = a.min(e.minItems)), typeof e.maxItems == "number" && (a = a.max(e.maxItems)), i = a;
                } else i = nm.array(nm.any());
                break;
            }
        default:
            throw new Error(`Unsupported type: ${n}`);
    }
    return e.description && (i = i.describe(e.description)), e.default !== void 0 && (i = i.default(e.default)), i;
}
function sX(e, t) {
    if (typeof e == "boolean") return e ? nm.any() : nm.never();
    let n = MSu(e, t);
    const i = e.type || e.enum !== void 0 || e.const !== void 0;
    if (e.anyOf && Array.isArray(e.anyOf)) {
        const a = e.anyOf.map((l)=>sX(l, t)), c = nm.union(a);
        n = i ? nm.intersection(n, c) : c;
    }
    if (e.oneOf && Array.isArray(e.oneOf)) {
        const a = e.oneOf.map((l)=>sX(l, t)), c = nm.xor(a);
        n = i ? nm.intersection(n, c) : c;
    }
    if (e.allOf && Array.isArray(e.allOf)) if (e.allOf.length === 0) n = i ? n : nm.any();
    else {
        let a = i ? n : sX(e.allOf[0], t);
        const c = i ? 0 : 1;
        for(let l = c; l < e.allOf.length; l++)a = nm.intersection(a, sX(e.allOf[l], t));
        n = a;
    }
    e.nullable === !0 && t.version === "openapi-3.0" && (n = nm.nullable(n)), e.readOnly === !0 && (n = nm.readonly(n));
    const r = {}, s = [
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor"
    ];
    for (const a of s)a in e && (r[a] = e[a]);
    const o = [
        "contentEncoding",
        "contentMediaType",
        "contentSchema"
    ];
    for (const a of o)a in e && (r[a] = e[a]);
    for (const a of Object.keys(e))PSu.has(a) || (r[a] = e[a]);
    return Object.keys(r).length > 0 && t.registry.add(n, r), n;
}
export function Yav(e, t) {
    if (typeof e == "boolean") return e ? nm.any() : nm.never();
    const n = zav(e, t?.defaultTarget), i = e.$defs || e.definitions || {}, r = {
        version: n,
        defs: i,
        refs: new Map,
        processing: new Set,
        rootSchema: e,
        registry: t?.registry ?? Xue
    };
    return sX(e, r);
}
export var LSu = {};
Cc(LSu, {
    bigint: ()=>ecv,
    boolean: ()=>Jav,
    date: ()=>tcv,
    number: ()=>Qav,
    string: ()=>Zav
});
function Zav(e) {
    return Abu(A8t, e);
}
function Qav(e) {
    return Nbu(M8t, e);
}
function Jav(e) {
    return $bu(P8t, e);
}
function ecv(e) {
    return Wbu(L8t, e);
}
function tcv(e) {
    return Qbu(LAn, e);
}
export { C5i, T5i, k5i, w5i };

export var v7s = {};
Object.defineProperty(v7s, "ZodISODate", {
    enumerable: true,
    get: ()=>w5i
});
Object.defineProperty(v7s, "ZodISODateTime", {
    enumerable: true,
    get: ()=>k5i
});
Object.defineProperty(v7s, "ZodISODuration", {
    enumerable: true,
    get: ()=>T5i
});
Object.defineProperty(v7s, "ZodISOTime", {
    enumerable: true,
    get: ()=>C5i
});
Object.defineProperty(v7s, "date", {
    enumerable: true,
    get: ()=>myu
});
Object.defineProperty(v7s, "datetime", {
    enumerable: true,
    get: ()=>pyu
});
Object.defineProperty(v7s, "duration", {
    enumerable: true,
    get: ()=>fyu
});
Object.defineProperty(v7s, "time", {
    enumerable: true,
    get: ()=>gyu
});
