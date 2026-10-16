import { f7s } from "./checks_5.js";
import { qIn } from "./core_4.js";
import { C1, C8t, Nve, S8s, To, X6e, Y6e, Yue, Zue, _8s, a5i, a8s, ayu, b8s, c5i, c8s, cAn, d5i, d8s, eQe, f5i, f8s, g5i, g8s, gee, h5i, h8s, i8s, l5i, l8s, lAn, m5i, m8s, n8s, nQe, o5i, o8s, oyu, p5i, p8s, r8s, s5i, s8s, syu, tQe, u5i, u8s, v5i, v8s, vse, w8t, y8s } from "./f0s.js";
import { NU } from "./index_190.js";
import { E5i } from "./iso_2.js";
import { $8s, B8s, F8s, G8s, H8s, J8s, K8s, L8s, N8s, O8s, P8s, Q8s, U8s, V8s, W8s, X8s, Y8s, Z8s, a7s, b5i, c7s, d7s, dAn, e7s, g7s, h7s, i7s, j8s, l7s, m7s, n7s, o7s, p7s, q8s, r7s, s7s, t7s, u7s, y5i, z8s } from "./json-schema-processors_2.js";
import { A7s, C7s, E7s, I7s, R7s, S7s, T7s, b7s, byu, k7s, w7s, x7s, y7s } from "./parse_9.js";
import { Xue } from "./registries_2.js";
import { $Us, AUs, BM, BUs, CUs, DUs, EUs, FUs, GBi, GUs, HUs, IUs, J4s, JBi, KBi, KUs, LUs, MUs, NUs, OUs, PUs, QBi, RUs, SUs, TUs, UUs, VBi, VUs, Vbt, WBi, WUs, XBi, YBi, ZBi, _Us, aUs, bUs, cUs, e5i, eUs, fUs, gUs, i5i, iAn, iUs, jBi, jUs, kUs, lUs, mUs, n5i, nUs, oAn, oUs, qUs, rAn, rUs, sAn, sUs, t5i, tUs, vUs, wS, wUs, xUs, yUs, zBi, zUs } from "./schemas_5.js";
import { I8t, M8s, _5i } from "./to-json-schema_2.js";
import { x } from "./tslib.es6.js";
import { $7s, A5i, B7s, D5i, F7s, H7s, I5i, L7s, M5i, R5i, U7s, V7s, W7s, fyu, gAn, gyu, hAn, j7s, jbt, mAn, myu, pAn, pyu } from "./v7s.js";
var Fk, fAn, A8t, $M, vAn, R8t, E0e, D8t, _An, bAn, yAn, SAn, kAn, wAn, CAn, TAn, L5i, EAn, xAn, IAn, AAn, RAn, DAn, MAn, qbt, M8t, iQe, P8t, L8t, PAn, N5i, O5i, F5i, B5i, U5i, $5i, H5i, LAn, W5i, N8t, O8t, G5i, V5i, j5i, q5i, F8t, z5i, K5i, zbt, Y5i, X5i, Z5i, NAn, Q5i, J5i, e9i, t9i, OAn, n9i, i9i, r9i, FAn, BAn, s9i, o9i, a9i, c9i, l9i, B8t, q7s, z7s, K7s;
export { $5i, $M, A8t, AAn, B5i, B8t, BAn, CAn, D8t, DAn, E0e, EAn, F5i, F8t, FAn, Fk, G5i, H5i, IAn, J5i, K5i, K7s, L5i, L8t, LAn, M8t, MAn, N5i, N8t, NAn, O5i, O8t, OAn, P8t, PAn, Q5i, R8t, RAn, SAn, TAn, U5i, V5i, W5i, X5i, Y5i, Z5i, _An, a9i, bAn, c9i, e9i, fAn, i9i, iQe, j5i, kAn, l9i, n9i, o9i, q5i, q7s, qbt, r9i, s9i, t9i, vAn, wAn, xAn, yAn, z5i, z7s, zbt };
var __wakaru_u9i_initialized = false;
export function u9i() {
if (__wakaru_u9i_initialized) return;
__wakaru_u9i_initialized = true;
x(), NU(), NU(), dAn(), _5i(), f7s(), E5i(), byu(), Fk = To("ZodType", (e, t)=>(wS.init(e, t), Object.assign(e["~standard"], {
        jsonSchema: {
            input: I8t(e, "input"),
            output: I8t(e, "output")
        }
    }), e.toJSONSchema = M8s(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
        value: t
    }), e.check = (...n)=>e.clone(C1.mergeDefs(t, {
            checks: [
                ...t.checks ?? [],
                ...n.map((i)=>typeof i == "function" ? {
                        _zod: {
                            check: i,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : i)
            ]
        }), {
            parent: !0
        }), e.with = e.check, e.clone = (n, i)=>Yue(e, n, i), e.brand = ()=>e, e.register = ((n, i)=>(n.add(e, i), e)), e.parse = (n, i)=>b7s(e, n, i, {
            callee: e.parse
        }), e.safeParse = (n, i)=>S7s(e, n, i), e.parseAsync = async (n, i)=>y7s(e, n, i, {
            callee: e.parseAsync
        }), e.safeParseAsync = async (n, i)=>k7s(e, n, i), e.spa = e.safeParseAsync, e.encode = (n, i)=>w7s(e, n, i), e.decode = (n, i)=>C7s(e, n, i), e.encodeAsync = async (n, i)=>T7s(e, n, i), e.decodeAsync = async (n, i)=>E7s(e, n, i), e.safeEncode = (n, i)=>x7s(e, n, i), e.safeDecode = (n, i)=>I7s(e, n, i), e.safeEncodeAsync = async (n, i)=>A7s(e, n, i), e.safeDecodeAsync = async (n, i)=>R7s(e, n, i), e.refine = (n, i)=>e.check(V7s(n, i)), e.superRefine = (n)=>e.check(j7s(n)), e.overwrite = (n)=>e.check(Y6e(n)), e.optional = ()=>pAn(e), e.exactOptional = ()=>F7s(e), e.nullable = ()=>mAn(e), e.nullish = ()=>pAn(mAn(e)), e.nonoptional = (n)=>$7s(e, n), e.array = ()=>hAn(e), e.or = (n)=>R5i([
            e,
            n
        ]), e.and = (n)=>L7s(e, n), e.transform = (n)=>gAn(e, M5i(n)), e.default = (n)=>B7s(e, n), e.prefault = (n)=>U7s(e, n), e.catch = (n)=>H7s(e, n), e.pipe = (n)=>gAn(e, n), e.readonly = ()=>W7s(e), e.describe = (n)=>{
        const i = e.clone();
        return Xue.add(i, {
            description: n
        }), i;
    }, Object.defineProperty(e, "description", {
        get () {
            return Xue.get(e)?.description;
        },
        configurable: !0
    }), e.meta = (...n)=>{
        if (n.length === 0) return Xue.get(e);
        const i = e.clone();
        return Xue.add(i, n[0]), i;
    }, e.isOptional = ()=>e.safeParse(void 0).success, e.isNullable = ()=>e.safeParse(null).success, e.apply = (n)=>n(e), e)), fAn = To("_ZodString", (e, t)=>{
    Vbt.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (i, r, s)=>P8s(e, i, r, s);
    const n = e._zod.bag;
    e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...i)=>e.check(a5i(...i)), e.includes = (...i)=>e.check(u5i(...i)), e.startsWith = (...i)=>e.check(d5i(...i)), e.endsWith = (...i)=>e.check(h5i(...i)), e.min = (...i)=>e.check(Zue(...i)), e.max = (...i)=>e.check(gee(...i)), e.length = (...i)=>e.check(lAn(...i)), e.nonempty = (...i)=>e.check(Zue(1, ...i)), e.lowercase = (i)=>e.check(c5i(i)), e.uppercase = (i)=>e.check(l5i(i)), e.trim = ()=>e.check(X6e()), e.normalize = (...i)=>e.check(m5i(...i)), e.toLowerCase = ()=>e.check(g5i()), e.toUpperCase = ()=>e.check(f5i()), e.slugify = ()=>e.check(v5i());
}), A8t = To("ZodString", (e, t)=>{
    Vbt.init(e, t), fAn.init(e, t), e.email = (n)=>e.check(n8s(vAn, n)), e.url = (n)=>e.check(o5i(D8t, n)), e.jwt = (n)=>e.check(S8s(MAn, n)), e.emoji = (n)=>e.check(a8s(_An, n)), e.guid = (n)=>e.check(s5i(R8t, n)), e.uuid = (n)=>e.check(i8s(E0e, n)), e.uuidv4 = (n)=>e.check(r8s(E0e, n)), e.uuidv6 = (n)=>e.check(s8s(E0e, n)), e.uuidv7 = (n)=>e.check(o8s(E0e, n)), e.nanoid = (n)=>e.check(c8s(bAn, n)), e.guid = (n)=>e.check(s5i(R8t, n)), e.cuid = (n)=>e.check(l8s(yAn, n)), e.cuid2 = (n)=>e.check(u8s(SAn, n)), e.ulid = (n)=>e.check(d8s(kAn, n)), e.base64 = (n)=>e.check(_8s(AAn, n)), e.base64url = (n)=>e.check(b8s(RAn, n)), e.xid = (n)=>e.check(h8s(wAn, n)), e.ksuid = (n)=>e.check(p8s(CAn, n)), e.ipv4 = (n)=>e.check(m8s(TAn, n)), e.ipv6 = (n)=>e.check(g8s(EAn, n)), e.cidrv4 = (n)=>e.check(f8s(xAn, n)), e.cidrv6 = (n)=>e.check(v8s(IAn, n)), e.e164 = (n)=>e.check(y8s(DAn, n)), e.datetime = (n)=>e.check(pyu(n)), e.date = (n)=>e.check(myu(n)), e.time = (n)=>e.check(gyu(n)), e.duration = (n)=>e.check(fyu(n));
}), $M = To("ZodStringFormat", (e, t)=>{
    BM.init(e, t), fAn.init(e, t);
}), vAn = To("ZodEmail", (e, t)=>{
    tUs.init(e, t), $M.init(e, t);
}), R8t = To("ZodGUID", (e, t)=>{
    J4s.init(e, t), $M.init(e, t);
}), E0e = To("ZodUUID", (e, t)=>{
    eUs.init(e, t), $M.init(e, t);
}), D8t = To("ZodURL", (e, t)=>{
    nUs.init(e, t), $M.init(e, t);
}), _An = To("ZodEmoji", (e, t)=>{
    iUs.init(e, t), $M.init(e, t);
}), bAn = To("ZodNanoID", (e, t)=>{
    rUs.init(e, t), $M.init(e, t);
}), yAn = To("ZodCUID", (e, t)=>{
    sUs.init(e, t), $M.init(e, t);
}), SAn = To("ZodCUID2", (e, t)=>{
    oUs.init(e, t), $M.init(e, t);
}), kAn = To("ZodULID", (e, t)=>{
    aUs.init(e, t), $M.init(e, t);
}), wAn = To("ZodXID", (e, t)=>{
    cUs.init(e, t), $M.init(e, t);
}), CAn = To("ZodKSUID", (e, t)=>{
    lUs.init(e, t), $M.init(e, t);
}), TAn = To("ZodIPv4", (e, t)=>{
    mUs.init(e, t), $M.init(e, t);
}), L5i = To("ZodMAC", (e, t)=>{
    fUs.init(e, t), $M.init(e, t);
}), EAn = To("ZodIPv6", (e, t)=>{
    gUs.init(e, t), $M.init(e, t);
}), xAn = To("ZodCIDRv4", (e, t)=>{
    vUs.init(e, t), $M.init(e, t);
}), IAn = To("ZodCIDRv6", (e, t)=>{
    _Us.init(e, t), $M.init(e, t);
}), AAn = To("ZodBase64", (e, t)=>{
    bUs.init(e, t), $M.init(e, t);
}), RAn = To("ZodBase64URL", (e, t)=>{
    yUs.init(e, t), $M.init(e, t);
}), DAn = To("ZodE164", (e, t)=>{
    SUs.init(e, t), $M.init(e, t);
}), MAn = To("ZodJWT", (e, t)=>{
    kUs.init(e, t), $M.init(e, t);
}), qbt = To("ZodCustomStringFormat", (e, t)=>{
    wUs.init(e, t), $M.init(e, t);
}), M8t = To("ZodNumber", (e, t)=>{
    iAn.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (i, r, s)=>L8s(e, i, r, s), e.gt = (i, r)=>e.check(tQe(i, r)), e.gte = (i, r)=>e.check(vse(i, r)), e.min = (i, r)=>e.check(vse(i, r)), e.lt = (i, r)=>e.check(eQe(i, r)), e.lte = (i, r)=>e.check(Nve(i, r)), e.max = (i, r)=>e.check(Nve(i, r)), e.int = (i)=>e.check(I5i(i)), e.safe = (i)=>e.check(I5i(i)), e.positive = (i)=>e.check(tQe(0, i)), e.nonnegative = (i)=>e.check(vse(0, i)), e.negative = (i)=>e.check(eQe(0, i)), e.nonpositive = (i)=>e.check(Nve(0, i)), e.multipleOf = (i, r)=>e.check(w8t(i, r)), e.step = (i, r)=>e.check(w8t(i, r)), e.finite = ()=>e;
    const n = e._zod.bag;
    e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
}), iQe = To("ZodNumberFormat", (e, t)=>{
    WBi.init(e, t), M8t.init(e, t);
}), P8t = To("ZodBoolean", (e, t)=>{
    rAn.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>N8s(e, n, i, r);
}), L8t = To("ZodBigInt", (e, t)=>{
    GBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (i, r, s)=>O8s(e, i, r, s), e.gte = (i, r)=>e.check(vse(i, r)), e.min = (i, r)=>e.check(vse(i, r)), e.gt = (i, r)=>e.check(tQe(i, r)), e.gte = (i, r)=>e.check(vse(i, r)), e.min = (i, r)=>e.check(vse(i, r)), e.lt = (i, r)=>e.check(eQe(i, r)), e.lte = (i, r)=>e.check(Nve(i, r)), e.max = (i, r)=>e.check(Nve(i, r)), e.positive = (i)=>e.check(tQe(BigInt(0), i)), e.negative = (i)=>e.check(eQe(BigInt(0), i)), e.nonpositive = (i)=>e.check(Nve(BigInt(0), i)), e.nonnegative = (i)=>e.check(vse(BigInt(0), i)), e.multipleOf = (i, r)=>e.check(w8t(i, r));
    const n = e._zod.bag;
    e.minValue = n.minimum ?? null, e.maxValue = n.maximum ?? null, e.format = n.format ?? null;
}), PAn = To("ZodBigIntFormat", (e, t)=>{
    CUs.init(e, t), L8t.init(e, t);
}), N5i = To("ZodSymbol", (e, t)=>{
    TUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>F8s(e, n, i, r);
}), O5i = To("ZodUndefined", (e, t)=>{
    EUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>U8s(e, n, i, r);
}), F5i = To("ZodNull", (e, t)=>{
    xUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>B8s(e, n, i, r);
}), B5i = To("ZodAny", (e, t)=>{
    IUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>W8s(e, n, i, r);
}), U5i = To("ZodUnknown", (e, t)=>{
    VBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>G8s(e, n, i, r);
}), $5i = To("ZodNever", (e, t)=>{
    AUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>H8s(e, n, i, r);
}), H5i = To("ZodVoid", (e, t)=>{
    RUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>$8s(e, n, i, r);
}), LAn = To("ZodDate", (e, t)=>{
    DUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (i, r, s)=>V8s(e, i, r, s), e.min = (i, r)=>e.check(vse(i, r)), e.max = (i, r)=>e.check(Nve(i, r));
    const n = e._zod.bag;
    e.minDate = n.minimum ? new Date(n.minimum) : null, e.maxDate = n.maximum ? new Date(n.maximum) : null;
}), W5i = To("ZodArray", (e, t)=>{
    jBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>n7s(e, n, i, r), e.element = t.element, e.min = (n, i)=>e.check(Zue(n, i)), e.nonempty = (n)=>e.check(Zue(1, n)), e.max = (n, i)=>e.check(gee(n, i)), e.length = (n, i)=>e.check(lAn(n, i)), e.unwrap = ()=>e.element;
}), N8t = To("ZodObject", (e, t)=>{
    MUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>i7s(e, n, i, r), C1.defineLazy(e, "shape", ()=>t.shape), e.keyof = ()=>D5i(Object.keys(e._zod.def.shape)), e.catchall = (n)=>e.clone({
            ...e._zod.def,
            catchall: n
        }), e.passthrough = ()=>e.clone({
            ...e._zod.def,
            catchall: jbt()
        }), e.loose = ()=>e.clone({
            ...e._zod.def,
            catchall: jbt()
        }), e.strict = ()=>e.clone({
            ...e._zod.def,
            catchall: A5i()
        }), e.strip = ()=>e.clone({
            ...e._zod.def,
            catchall: void 0
        }), e.extend = (n)=>C1.extend(e, n), e.safeExtend = (n)=>C1.safeExtend(e, n), e.merge = (n)=>C1.merge(e, n), e.pick = (n)=>C1.pick(e, n), e.omit = (n)=>C1.omit(e, n), e.partial = (...n)=>C1.partial(NAn, e, n[0]), e.required = (...n)=>C1.required(OAn, e, n[0]);
}), O8t = To("ZodUnion", (e, t)=>{
    sAn.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>b5i(e, n, i, r), e.options = t.options;
}), G5i = To("ZodXor", (e, t)=>{
    O8t.init(e, t), PUs.init(e, t), e._zod.processJSONSchema = (n, i, r)=>b5i(e, n, i, r), e.options = t.options;
}), V5i = To("ZodDiscriminatedUnion", (e, t)=>{
    O8t.init(e, t), zBi.init(e, t);
}), j5i = To("ZodIntersection", (e, t)=>{
    LUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>r7s(e, n, i, r);
}), q5i = To("ZodTuple", (e, t)=>{
    KBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>s7s(e, n, i, r), e.rest = (n)=>e.clone({
            ...e._zod.def,
            rest: n
        });
}), F8t = To("ZodRecord", (e, t)=>{
    YBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>o7s(e, n, i, r), e.keyType = t.keyType, e.valueType = t.valueType;
}), z5i = To("ZodMap", (e, t)=>{
    NUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>e7s(e, n, i, r), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...n)=>e.check(nQe(...n)), e.nonempty = (n)=>e.check(nQe(1, n)), e.max = (...n)=>e.check(C8t(...n)), e.size = (...n)=>e.check(cAn(...n));
}), K5i = To("ZodSet", (e, t)=>{
    OUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>t7s(e, n, i, r), e.min = (...n)=>e.check(nQe(...n)), e.nonempty = (n)=>e.check(nQe(1, n)), e.max = (...n)=>e.check(C8t(...n)), e.size = (...n)=>e.check(cAn(...n));
}), zbt = To("ZodEnum", (e, t)=>{
    XBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (i, r, s)=>j8s(e, i, r, s), e.enum = t.entries, e.options = Object.values(t.entries);
    const n = new Set(Object.keys(t.entries));
    e.extract = (i, r)=>{
        const s = {};
        for (const o of i)if (n.has(o)) s[o] = t.entries[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new zbt({
            ...t,
            checks: [],
            ...C1.normalizeParams(r),
            entries: s
        });
    }, e.exclude = (i, r)=>{
        const s = {
            ...t.entries
        };
        for (const o of i)if (n.has(o)) delete s[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new zbt({
            ...t,
            checks: [],
            ...C1.normalizeParams(r),
            entries: s
        });
    };
}), Y5i = To("ZodLiteral", (e, t)=>{
    ZBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>q8s(e, n, i, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
        get () {
            if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return t.values[0];
        }
    });
}), X5i = To("ZodFile", (e, t)=>{
    FUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>Y8s(e, n, i, r), e.min = (n, i)=>e.check(nQe(n, i)), e.max = (n, i)=>e.check(C8t(n, i)), e.mime = (n, i)=>e.check(p5i(Array.isArray(n) ? n : [
            n
        ], i));
}), Z5i = To("ZodTransform", (e, t)=>{
    QBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>J8s(e, n, i, r), e._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new qIn(e.constructor.name);
        n.addIssue = (s)=>{
            if (typeof s == "string") n.issues.push(C1.issue(s, n.value, t));
            else {
                const o = s;
                o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = e), n.issues.push(C1.issue(o));
            }
        };
        const r = t.transform(n.value, n);
        return r instanceof Promise ? r.then((s)=>(n.value = s, n)) : (n.value = r, n);
    };
}), NAn = To("ZodOptional", (e, t)=>{
    oAn.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>y5i(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), Q5i = To("ZodExactOptional", (e, t)=>{
    JBi.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>y5i(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), J5i = To("ZodNullable", (e, t)=>{
    e5i.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>a7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), e9i = To("ZodDefault", (e, t)=>{
    BUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>l7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType, e.removeDefault = e.unwrap;
}), t9i = To("ZodPrefault", (e, t)=>{
    UUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>u7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), OAn = To("ZodNonOptional", (e, t)=>{
    $Us.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>c7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), n9i = To("ZodSuccess", (e, t)=>{
    HUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>X8s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), i9i = To("ZodCatch", (e, t)=>{
    WUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>d7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType, e.removeCatch = e.unwrap;
}), r9i = To("ZodNaN", (e, t)=>{
    GUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>z8s(e, n, i, r);
}), FAn = To("ZodPipe", (e, t)=>{
    t5i.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>h7s(e, n, i, r), e.in = t.in, e.out = t.out;
}), BAn = To("ZodCodec", (e, t)=>{
    FAn.init(e, t), n5i.init(e, t);
}), s9i = To("ZodReadonly", (e, t)=>{
    VUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>p7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), o9i = To("ZodTemplateLiteral", (e, t)=>{
    jUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>K8s(e, n, i, r);
}), a9i = To("ZodLazy", (e, t)=>{
    KUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>g7s(e, n, i, r), e.unwrap = ()=>e._zod.def.getter();
}), c9i = To("ZodPromise", (e, t)=>{
    zUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>m7s(e, n, i, r), e.unwrap = ()=>e._zod.def.innerType;
}), l9i = To("ZodFunction", (e, t)=>{
    qUs.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>Q8s(e, n, i, r);
}), B8t = To("ZodCustom", (e, t)=>{
    i5i.init(e, t), Fk.init(e, t), e._zod.processJSONSchema = (n, i, r)=>Z8s(e, n, i, r);
}), q7s = syu, z7s = oyu, K7s = (...e)=>ayu({
        Codec: BAn,
        Boolean: P8t,
        String: A8t
    }, ...e);

}
