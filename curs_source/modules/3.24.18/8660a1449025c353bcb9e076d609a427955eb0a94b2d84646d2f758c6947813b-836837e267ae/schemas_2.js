import { AQn, Cvr, Evr, IQn, Ivr, J2o, RQn, Tvr, X2o, aPo, aad, ePo, iPo, lad, nPo, oPo, oad, rPo, sad, tPo, wvr, xQn, z6t } from "./D2o.js";
import { ARo, Bse, CQn, CRo, DRo, ERo, Fke, IRo, Ive, Jod, LRo, MRo, Met, NRo, ORo, PRo, Pa, Qod, RRo, SRo, S_t, TRo, Zod, _Ro, avr, bRo, cvr, dvr, evr, hvr, ivr, kRo, k_t, khn, kx, lvr, m$e, mAe, nvr, ovr, rvr, svr, tvr, uvr, vRo, wQn, wRo, whn, xRo, xve, yRo, y_t } from "./SZu.js";
import { M2o } from "./checks_2.js";
import { lQn } from "./core.js";
import { Qq } from "./index_15.js";
import { Svr } from "./iso.js";
import { A2o, C2o, E2o, EQn, I2o, JRo, P2o, QRo, R2o, S2o, T2o, XRo, YRo, ZRo, _2o, a2o, b2o, c2o, d2o, e2o, f2o, g2o, gvr, h2o, i2o, k2o, l2o, m2o, mvr, n2o, o2o, p2o, r2o, s2o, t2o, u2o, v2o, w2o, x2o, y2o } from "./json-schema-processors.js";
import { $2o, B2o, F2o, G2o, H2o, L2o, O2o, U2o, W2o, dad, j2o, q2o, z2o } from "./parse_2.js";
import { Bke } from "./registries.js";
import { $Ao, BAo, Bfr, CAo, DAo, FAo, Ffr, GAo, Gfr, HAo, Hfr, JAo, KAo, Kfr, LAo, MAo, NAo, OAo, Ofr, PAo, QAo, Qfr, Qw, RAo, SAo, SQn, TAo, UAo, Ufr, VAo, Vfr, WAo, Wfr, XAo, Xfr, YAo, Yfr, ZAo, Zfr, _Ao, aRo, bAo, bQn, bhn, cO, cRo, eRo, fAo, gAo, iRo, jAo, jfr, kAo, lRo, nRo, oRo, q6t, qAo, qfr, rRo, sRo, tRo, vAo, wAo, yAo, yQn, zAo, zfr } from "./schemas.js";
import { Ihn, KRo, pvr } from "./to-json-schema.js";
import { E } from "./tslib.es6.js";
var xC, PQn, xhn, dO, MQn, Ahn, VOe, Rhn, DQn, NQn, LQn, OQn, FQn, BQn, UQn, jQn, Avr, $Qn, HQn, WQn, GQn, qQn, zQn, VQn, V6t, Phn, w_t, Mhn, Dhn, KQn, Rvr, Pvr, Mvr, Dvr, Nvr, Lvr, Ovr, YQn, Fvr, Nhn, Lhn, Bvr, Uvr, jvr, $vr, Ohn, Hvr, Wvr, K6t, Gvr, qvr, zvr, XQn, Vvr, Kvr, Yvr, Xvr, ZQn, Zvr, Qvr, Jvr, QQn, JQn, e_r, t_r, n_r, i_r, r_r, Fhn, lPo, cPo, uPo;
export { $Qn, $vr, Ahn, Avr, BQn, Bvr, DQn, Dhn, Dvr, FQn, Fhn, Fvr, GQn, Gvr, HQn, Hvr, JQn, Jvr, K6t, KQn, Kvr, LQn, Lhn, Lvr, MQn, Mhn, Mvr, NQn, Nhn, Nvr, OQn, Ohn, Ovr, PQn, Phn, Pvr, QQn, Qvr, Rhn, Rvr, UQn, Uvr, V6t, VOe, VQn, Vvr, WQn, Wvr, XQn, Xvr, YQn, Yvr, ZQn, Zvr, cPo, dO, e_r, i_r, jQn, jvr, lPo, n_r, qQn, qvr, r_r, t_r, uPo, w_t, xC, xhn, zQn, zvr };
var __wakaru_s_r_initialized = false;
export function s_r() {
if (__wakaru_s_r_initialized) return;
__wakaru_s_r_initialized = true;
E(), Qq(), Qq(), EQn(), pvr(), M2o(), Svr(), dad(), xC = Pa("ZodType", (t, e)=>(Qw.init(t, e), Object.assign(t["~standard"], {
        jsonSchema: {
            input: Ihn(t, "input"),
            output: Ihn(t, "output")
        }
    }), t.toJSONSchema = KRo(t, {}), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", {
        value: e
    }), t.check = (...n)=>t.clone(kx.mergeDefs(e, {
            checks: [
                ...e.checks ?? [],
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
        }), t.with = t.check, t.clone = (n, i)=>Fke(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t)), t.parse = (n, i)=>L2o(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>F2o(t, n, i), t.parseAsync = async (n, i)=>O2o(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>B2o(t, n, i), t.spa = t.safeParseAsync, t.encode = (n, i)=>U2o(t, n, i), t.decode = (n, i)=>j2o(t, n, i), t.encodeAsync = async (n, i)=>$2o(t, n, i), t.decodeAsync = async (n, i)=>H2o(t, n, i), t.safeEncode = (n, i)=>W2o(t, n, i), t.safeDecode = (n, i)=>G2o(t, n, i), t.safeEncodeAsync = async (n, i)=>q2o(t, n, i), t.safeDecodeAsync = async (n, i)=>z2o(t, n, i), t.refine = (n, i)=>t.check(oPo(n, i)), t.superRefine = (n)=>t.check(aPo(n)), t.overwrite = (n)=>t.check(Met(n)), t.optional = ()=>xQn(t), t.exactOptional = ()=>J2o(t), t.nullable = ()=>AQn(t), t.nullish = ()=>xQn(AQn(t)), t.nonoptional = (n)=>nPo(t, n), t.array = ()=>IQn(t), t.or = (n)=>Tvr([
            t,
            n
        ]), t.and = (n)=>X2o(t, n), t.transform = (n)=>RQn(t, Ivr(n)), t.default = (n)=>ePo(t, n), t.prefault = (n)=>tPo(t, n), t.catch = (n)=>iPo(t, n), t.pipe = (n)=>RQn(t, n), t.readonly = ()=>rPo(t), t.describe = (n)=>{
        const i = t.clone();
        return Bke.add(i, {
            description: n
        }), i;
    }, Object.defineProperty(t, "description", {
        get () {
            return Bke.get(t)?.description;
        },
        configurable: !0
    }), t.meta = (...n)=>{
        if (n.length === 0) return Bke.get(t);
        const i = t.clone();
        return Bke.add(i, n[0]), i;
    }, t.isOptional = ()=>t.safeParse(void 0).success, t.isNullable = ()=>t.safeParse(null).success, t.apply = (n)=>n(t), t)), PQn = Pa("_ZodString", (t, e)=>{
    q6t.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (i, r, s)=>YRo(t, i, r, s);
    const n = t._zod.bag;
    t.format = n.format ?? null, t.minLength = n.minimum ?? null, t.maxLength = n.maximum ?? null, t.regex = (...i)=>t.check(nvr(...i)), t.includes = (...i)=>t.check(svr(...i)), t.startsWith = (...i)=>t.check(ovr(...i)), t.endsWith = (...i)=>t.check(avr(...i)), t.min = (...i)=>t.check(xve(...i)), t.max = (...i)=>t.check(Bse(...i)), t.length = (...i)=>t.check(CQn(...i)), t.nonempty = (...i)=>t.check(xve(1, ...i)), t.lowercase = (i)=>t.check(ivr(i)), t.uppercase = (i)=>t.check(rvr(i)), t.trim = ()=>t.check(m$e()), t.normalize = (...i)=>t.check(cvr(...i)), t.toLowerCase = ()=>t.check(uvr()), t.toUpperCase = ()=>t.check(dvr()), t.slugify = ()=>t.check(hvr());
}), xhn = Pa("ZodString", (t, e)=>{
    q6t.init(t, e), PQn.init(t, e), t.email = (n)=>t.check(vRo(MQn, n)), t.url = (n)=>t.check(tvr(Rhn, n)), t.jwt = (n)=>t.check(ORo(VQn, n)), t.emoji = (n)=>t.check(kRo(DQn, n)), t.guid = (n)=>t.check(evr(Ahn, n)), t.uuid = (n)=>t.check(_Ro(VOe, n)), t.uuidv4 = (n)=>t.check(bRo(VOe, n)), t.uuidv6 = (n)=>t.check(yRo(VOe, n)), t.uuidv7 = (n)=>t.check(SRo(VOe, n)), t.nanoid = (n)=>t.check(wRo(NQn, n)), t.guid = (n)=>t.check(evr(Ahn, n)), t.cuid = (n)=>t.check(CRo(LQn, n)), t.cuid2 = (n)=>t.check(TRo(OQn, n)), t.ulid = (n)=>t.check(ERo(FQn, n)), t.base64 = (n)=>t.check(DRo(GQn, n)), t.base64url = (n)=>t.check(NRo(qQn, n)), t.xid = (n)=>t.check(IRo(BQn, n)), t.ksuid = (n)=>t.check(xRo(UQn, n)), t.ipv4 = (n)=>t.check(ARo(jQn, n)), t.ipv6 = (n)=>t.check(RRo($Qn, n)), t.cidrv4 = (n)=>t.check(PRo(HQn, n)), t.cidrv6 = (n)=>t.check(MRo(WQn, n)), t.e164 = (n)=>t.check(LRo(zQn, n)), t.datetime = (n)=>t.check(sad(n)), t.date = (n)=>t.check(oad(n)), t.time = (n)=>t.check(aad(n)), t.duration = (n)=>t.check(lad(n));
}), dO = Pa("ZodStringFormat", (t, e)=>{
    cO.init(t, e), PQn.init(t, e);
}), MQn = Pa("ZodEmail", (t, e)=>{
    vAo.init(t, e), dO.init(t, e);
}), Ahn = Pa("ZodGUID", (t, e)=>{
    gAo.init(t, e), dO.init(t, e);
}), VOe = Pa("ZodUUID", (t, e)=>{
    fAo.init(t, e), dO.init(t, e);
}), Rhn = Pa("ZodURL", (t, e)=>{
    _Ao.init(t, e), dO.init(t, e);
}), DQn = Pa("ZodEmoji", (t, e)=>{
    bAo.init(t, e), dO.init(t, e);
}), NQn = Pa("ZodNanoID", (t, e)=>{
    yAo.init(t, e), dO.init(t, e);
}), LQn = Pa("ZodCUID", (t, e)=>{
    SAo.init(t, e), dO.init(t, e);
}), OQn = Pa("ZodCUID2", (t, e)=>{
    kAo.init(t, e), dO.init(t, e);
}), FQn = Pa("ZodULID", (t, e)=>{
    wAo.init(t, e), dO.init(t, e);
}), BQn = Pa("ZodXID", (t, e)=>{
    CAo.init(t, e), dO.init(t, e);
}), UQn = Pa("ZodKSUID", (t, e)=>{
    TAo.init(t, e), dO.init(t, e);
}), jQn = Pa("ZodIPv4", (t, e)=>{
    RAo.init(t, e), dO.init(t, e);
}), Avr = Pa("ZodMAC", (t, e)=>{
    MAo.init(t, e), dO.init(t, e);
}), $Qn = Pa("ZodIPv6", (t, e)=>{
    PAo.init(t, e), dO.init(t, e);
}), HQn = Pa("ZodCIDRv4", (t, e)=>{
    DAo.init(t, e), dO.init(t, e);
}), WQn = Pa("ZodCIDRv6", (t, e)=>{
    NAo.init(t, e), dO.init(t, e);
}), GQn = Pa("ZodBase64", (t, e)=>{
    LAo.init(t, e), dO.init(t, e);
}), qQn = Pa("ZodBase64URL", (t, e)=>{
    OAo.init(t, e), dO.init(t, e);
}), zQn = Pa("ZodE164", (t, e)=>{
    FAo.init(t, e), dO.init(t, e);
}), VQn = Pa("ZodJWT", (t, e)=>{
    BAo.init(t, e), dO.init(t, e);
}), V6t = Pa("ZodCustomStringFormat", (t, e)=>{
    UAo.init(t, e), dO.init(t, e);
}), Phn = Pa("ZodNumber", (t, e)=>{
    bQn.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (i, r, s)=>XRo(t, i, r, s), t.gt = (i, r)=>t.check(S_t(i, r)), t.gte = (i, r)=>t.check(Ive(i, r)), t.min = (i, r)=>t.check(Ive(i, r)), t.lt = (i, r)=>t.check(y_t(i, r)), t.lte = (i, r)=>t.check(mAe(i, r)), t.max = (i, r)=>t.check(mAe(i, r)), t.int = (i)=>t.check(wvr(i)), t.safe = (i)=>t.check(wvr(i)), t.positive = (i)=>t.check(S_t(0, i)), t.nonnegative = (i)=>t.check(Ive(0, i)), t.negative = (i)=>t.check(y_t(0, i)), t.nonpositive = (i)=>t.check(mAe(0, i)), t.multipleOf = (i, r)=>t.check(khn(i, r)), t.step = (i, r)=>t.check(khn(i, r)), t.finite = ()=>t;
    const n = t._zod.bag;
    t.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), t.isFinite = !0, t.format = n.format ?? null;
}), w_t = Pa("ZodNumberFormat", (t, e)=>{
    Ofr.init(t, e), Phn.init(t, e);
}), Mhn = Pa("ZodBoolean", (t, e)=>{
    yQn.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ZRo(t, n, i, r);
}), Dhn = Pa("ZodBigInt", (t, e)=>{
    Ffr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (i, r, s)=>QRo(t, i, r, s), t.gte = (i, r)=>t.check(Ive(i, r)), t.min = (i, r)=>t.check(Ive(i, r)), t.gt = (i, r)=>t.check(S_t(i, r)), t.gte = (i, r)=>t.check(Ive(i, r)), t.min = (i, r)=>t.check(Ive(i, r)), t.lt = (i, r)=>t.check(y_t(i, r)), t.lte = (i, r)=>t.check(mAe(i, r)), t.max = (i, r)=>t.check(mAe(i, r)), t.positive = (i)=>t.check(S_t(BigInt(0), i)), t.negative = (i)=>t.check(y_t(BigInt(0), i)), t.nonpositive = (i)=>t.check(mAe(BigInt(0), i)), t.nonnegative = (i)=>t.check(Ive(BigInt(0), i)), t.multipleOf = (i, r)=>t.check(khn(i, r));
    const n = t._zod.bag;
    t.minValue = n.minimum ?? null, t.maxValue = n.maximum ?? null, t.format = n.format ?? null;
}), KQn = Pa("ZodBigIntFormat", (t, e)=>{
    jAo.init(t, e), Dhn.init(t, e);
}), Rvr = Pa("ZodSymbol", (t, e)=>{
    $Ao.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>JRo(t, n, i, r);
}), Pvr = Pa("ZodUndefined", (t, e)=>{
    HAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>t2o(t, n, i, r);
}), Mvr = Pa("ZodNull", (t, e)=>{
    WAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>e2o(t, n, i, r);
}), Dvr = Pa("ZodAny", (t, e)=>{
    GAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>r2o(t, n, i, r);
}), Nvr = Pa("ZodUnknown", (t, e)=>{
    Bfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>s2o(t, n, i, r);
}), Lvr = Pa("ZodNever", (t, e)=>{
    Ufr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>i2o(t, n, i, r);
}), Ovr = Pa("ZodVoid", (t, e)=>{
    qAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>n2o(t, n, i, r);
}), YQn = Pa("ZodDate", (t, e)=>{
    zAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (i, r, s)=>o2o(t, i, r, s), t.min = (i, r)=>t.check(Ive(i, r)), t.max = (i, r)=>t.check(mAe(i, r));
    const n = t._zod.bag;
    t.minDate = n.minimum ? new Date(n.minimum) : null, t.maxDate = n.maximum ? new Date(n.maximum) : null;
}), Fvr = Pa("ZodArray", (t, e)=>{
    jfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>_2o(t, n, i, r), t.element = e.element, t.min = (n, i)=>t.check(xve(n, i)), t.nonempty = (n)=>t.check(xve(1, n)), t.max = (n, i)=>t.check(Bse(n, i)), t.length = (n, i)=>t.check(CQn(n, i)), t.unwrap = ()=>t.element;
}), Nhn = Pa("ZodObject", (t, e)=>{
    VAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>b2o(t, n, i, r), kx.defineLazy(t, "shape", ()=>e.shape), t.keyof = ()=>Evr(Object.keys(t._zod.def.shape)), t.catchall = (n)=>t.clone({
            ...t._zod.def,
            catchall: n
        }), t.passthrough = ()=>t.clone({
            ...t._zod.def,
            catchall: z6t()
        }), t.loose = ()=>t.clone({
            ...t._zod.def,
            catchall: z6t()
        }), t.strict = ()=>t.clone({
            ...t._zod.def,
            catchall: Cvr()
        }), t.strip = ()=>t.clone({
            ...t._zod.def,
            catchall: void 0
        }), t.extend = (n)=>kx.extend(t, n), t.safeExtend = (n)=>kx.safeExtend(t, n), t.merge = (n)=>kx.merge(t, n), t.pick = (n)=>kx.pick(t, n), t.omit = (n)=>kx.omit(t, n), t.partial = (...n)=>kx.partial(XQn, t, n[0]), t.required = (...n)=>kx.required(ZQn, t, n[0]);
}), Lhn = Pa("ZodUnion", (t, e)=>{
    bhn.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>mvr(t, n, i, r), t.options = e.options;
}), Bvr = Pa("ZodXor", (t, e)=>{
    Lhn.init(t, e), KAo.init(t, e), t._zod.processJSONSchema = (n, i, r)=>mvr(t, n, i, r), t.options = e.options;
}), Uvr = Pa("ZodDiscriminatedUnion", (t, e)=>{
    Lhn.init(t, e), Hfr.init(t, e);
}), jvr = Pa("ZodIntersection", (t, e)=>{
    YAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>y2o(t, n, i, r);
}), $vr = Pa("ZodTuple", (t, e)=>{
    Wfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>S2o(t, n, i, r), t.rest = (n)=>t.clone({
            ...t._zod.def,
            rest: n
        });
}), Ohn = Pa("ZodRecord", (t, e)=>{
    Gfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>k2o(t, n, i, r), t.keyType = e.keyType, t.valueType = e.valueType;
}), Hvr = Pa("ZodMap", (t, e)=>{
    XAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>f2o(t, n, i, r), t.keyType = e.keyType, t.valueType = e.valueType, t.min = (...n)=>t.check(k_t(...n)), t.nonempty = (n)=>t.check(k_t(1, n)), t.max = (...n)=>t.check(whn(...n)), t.size = (...n)=>t.check(wQn(...n));
}), Wvr = Pa("ZodSet", (t, e)=>{
    ZAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>v2o(t, n, i, r), t.min = (...n)=>t.check(k_t(...n)), t.nonempty = (n)=>t.check(k_t(1, n)), t.max = (...n)=>t.check(whn(...n)), t.size = (...n)=>t.check(wQn(...n));
}), K6t = Pa("ZodEnum", (t, e)=>{
    qfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (i, r, s)=>a2o(t, i, r, s), t.enum = e.entries, t.options = Object.values(e.entries);
    const n = new Set(Object.keys(e.entries));
    t.extract = (i, r)=>{
        const s = {};
        for (const o of i)if (n.has(o)) s[o] = e.entries[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new K6t({
            ...e,
            checks: [],
            ...kx.normalizeParams(r),
            entries: s
        });
    }, t.exclude = (i, r)=>{
        const s = {
            ...e.entries
        };
        for (const o of i)if (n.has(o)) delete s[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new K6t({
            ...e,
            checks: [],
            ...kx.normalizeParams(r),
            entries: s
        });
    };
}), Gvr = Pa("ZodLiteral", (t, e)=>{
    zfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>l2o(t, n, i, r), t.values = new Set(e.values), Object.defineProperty(t, "value", {
        get () {
            if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            return e.values[0];
        }
    });
}), qvr = Pa("ZodFile", (t, e)=>{
    QAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>d2o(t, n, i, r), t.min = (n, i)=>t.check(k_t(n, i)), t.max = (n, i)=>t.check(whn(n, i)), t.mime = (n, i)=>t.check(lvr(Array.isArray(n) ? n : [
            n
        ], i));
}), zvr = Pa("ZodTransform", (t, e)=>{
    Vfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>g2o(t, n, i, r), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new lQn(t.constructor.name);
        n.addIssue = (s)=>{
            if (typeof s == "string") n.issues.push(kx.issue(s, n.value, e));
            else {
                const o = s;
                o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), n.issues.push(kx.issue(o));
            }
        };
        const r = e.transform(n.value, n);
        return r instanceof Promise ? r.then((s)=>(n.value = s, n)) : (n.value = r, n);
    };
}), XQn = Pa("ZodOptional", (t, e)=>{
    SQn.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>gvr(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), Vvr = Pa("ZodExactOptional", (t, e)=>{
    Kfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>gvr(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), Kvr = Pa("ZodNullable", (t, e)=>{
    Yfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>w2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), Yvr = Pa("ZodDefault", (t, e)=>{
    JAo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>T2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType, t.removeDefault = t.unwrap;
}), Xvr = Pa("ZodPrefault", (t, e)=>{
    eRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>E2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), ZQn = Pa("ZodNonOptional", (t, e)=>{
    tRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>C2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), Zvr = Pa("ZodSuccess", (t, e)=>{
    nRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>h2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), Qvr = Pa("ZodCatch", (t, e)=>{
    iRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>I2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType, t.removeCatch = t.unwrap;
}), Jvr = Pa("ZodNaN", (t, e)=>{
    rRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>c2o(t, n, i, r);
}), QQn = Pa("ZodPipe", (t, e)=>{
    Xfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>x2o(t, n, i, r), t.in = e.in, t.out = e.out;
}), JQn = Pa("ZodCodec", (t, e)=>{
    QQn.init(t, e), Zfr.init(t, e);
}), e_r = Pa("ZodReadonly", (t, e)=>{
    sRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>A2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), t_r = Pa("ZodTemplateLiteral", (t, e)=>{
    oRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>u2o(t, n, i, r);
}), n_r = Pa("ZodLazy", (t, e)=>{
    cRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>P2o(t, n, i, r), t.unwrap = ()=>t._zod.def.getter();
}), i_r = Pa("ZodPromise", (t, e)=>{
    lRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>R2o(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), r_r = Pa("ZodFunction", (t, e)=>{
    aRo.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>m2o(t, n, i, r);
}), Fhn = Pa("ZodCustom", (t, e)=>{
    Qfr.init(t, e), xC.init(t, e), t._zod.processJSONSchema = (n, i, r)=>p2o(t, n, i, r);
}), lPo = Zod, cPo = Qod, uPo = (...t)=>Jod({
        Codec: JQn,
        Boolean: Mhn,
        String: xhn
    }, ...t);

}
