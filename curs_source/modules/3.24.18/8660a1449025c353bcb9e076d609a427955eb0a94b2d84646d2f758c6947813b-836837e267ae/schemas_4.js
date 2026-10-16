import { pkt } from "./api_4.js";
import { Wpi } from "./checks_3.js";
import { aIS } from "./checks_4.js";
import { Dfa, jFe } from "./core_3.js";
import { $Fe } from "./index_146.js";
import { AES, AIS, BUh, CES, CIS, DES, EES, EIS, FUh, GES, IES, IIS, Ijh, JES, KES, LSn, LUh, MES, Mjh, NES, OUh, Opi, PES, Pjh, QES, RES, RIS, Rjh, SES, SIS, TES, TIS, UUh, VES, XES, YES, ZES, _ES, _IS, aTS, ad, bES, bIS, cIS, cTS, dIS, dkt, eIS, eS, eva, fES, gES, iFr, jUh, kES, kIS, lIS, lTS, mES, nN, nrt, oTS, qES, rTS, sTS, sva, tva, uIS, uTS, vES, wES, wIS, xES, xIS, xjh, yES, yIS, zES } from "./ipa.js";
import { hIS } from "./iso_2.js";
import { JUh, KUh, QUh, VUh, XUh, YUh, ZUh, ajh, cjh, ejh, ijh, ljh, njh, nva, ojh, rjh, sFr, sjh, tjh, ujh, zUh } from "./json-schema-processors_2.js";
import { Cjh, Ejh, Sjh, Tjh, _jh, bjh, fjh, gIS, gjh, kjh, vjh, wjh, yjh } from "./parse_6.js";
import { hkt } from "./regexes_2.js";
import { NSn, qpi } from "./registries_2.js";
import { $7h, CUh, D4, DSn, EUh, G7h, Gpi, H7h, IUh, Jfa, K7h, SUh, TUh, V7h, W7h, X7h, Y7h, Zfa, aUh, bUh, cUh, dUh, fUh, gUh, hUh, iUh, j7h, kUh, lUh, mUh, nUh, oUh, pUh, q7h, rUh, sUh, tUh, uUh, vUh, wUh, xUh, yB, yUh, z7h } from "./schemas_3.js";
import { GUh, rFr, zpi } from "./to-json-schema_2.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var Jj, ova, Djh, SB, Njh, ava, Vpi, Ljh, Ojh, Fjh, Bjh, Ujh, jjh, $jh, Hjh, Wjh, Gjh, qjh, zjh, Vjh, Kjh, Yjh, Xjh, lva, Zjh, Qjh, Jjh, e$h, t$h, n$h, i$h, r$h, oFr, s$h, cva, o$h, a$h, l$h, c$h, uva, u$h, d$h, h$h, p$h;
export { $jh, Bjh, Djh, Fjh, Gjh, Hjh, Jj, Jjh, Kjh, Ljh, Njh, Ojh, Qjh, SB, Ujh, Vjh, Vpi, Wjh, Xjh, Yjh, Zjh, a$h, ava, c$h, cva, d$h, e$h, h$h, i$h, jjh, l$h, lva, n$h, o$h, oFr, ova, p$h, qjh, r$h, s$h, t$h, u$h, uva, zjh };
var __wakaru_aFr_initialized = false;
export function aFr() {
if (__wakaru_aFr_initialized) return;
__wakaru_aFr_initialized = true;
E(), $Fe(), sFr(), rFr(), aIS(), hIS(), gIS(), jFe(), DSn(), yb(), pkt(), qpi(), hkt(), hkt(), Wpi(), Jj = ad("ZodType", (t, e)=>(yB.init(t, e), Object.assign(t["~standard"], {
        jsonSchema: {
            input: zpi(t, "input"),
            output: zpi(t, "output")
        }
    }), t.toJSONSchema = GUh(t, {}), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", {
        value: e
    }), t.check = (...n)=>t.clone(dkt(e, {
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
        }), t.with = t.check, t.clone = (n, i)=>nrt(t, n, i), t.brand = ()=>t, t.register = ((n, i)=>(n.add(t, i), t)), t.parse = (n, i)=>gjh(t, n, i, {
            callee: t.parse
        }), t.safeParse = (n, i)=>vjh(t, n, i), t.parseAsync = async (n, i)=>fjh(t, n, i, {
            callee: t.parseAsync
        }), t.safeParseAsync = async (n, i)=>_jh(t, n, i), t.spa = t.safeParseAsync, t.encode = (n, i)=>bjh(t, n, i), t.decode = (n, i)=>yjh(t, n, i), t.encodeAsync = async (n, i)=>Sjh(t, n, i), t.decodeAsync = async (n, i)=>kjh(t, n, i), t.safeEncode = (n, i)=>wjh(t, n, i), t.safeDecode = (n, i)=>Cjh(t, n, i), t.safeEncodeAsync = async (n, i)=>Tjh(t, n, i), t.safeDecodeAsync = async (n, i)=>Ejh(t, n, i), t.refine = (n, i)=>t.check(AIS(n, i)), t.superRefine = (n)=>t.check(RIS(n)), t.overwrite = (n)=>t.check(LSn(n)), t.optional = ()=>Rjh(t), t.exactOptional = ()=>wIS(t), t.nullable = ()=>Pjh(t), t.nullish = ()=>Rjh(Pjh(t)), t.nonoptional = (n)=>EIS(t, n), t.array = ()=>bIS(t), t.or = (n)=>yIS([
            t,
            n
        ]), t.and = (n)=>SIS(t, n), t.transform = (n)=>Mjh(t, kIS(n)), t.default = (n)=>CIS(t, n), t.prefault = (n)=>TIS(t, n), t.catch = (n)=>IIS(t, n), t.pipe = (n)=>Mjh(t, n), t.readonly = ()=>xIS(t), t.describe = (n)=>{
        const i = t.clone();
        return NSn.add(i, {
            description: n
        }), i;
    }, Object.defineProperty(t, "description", {
        get () {
            return NSn.get(t)?.description;
        },
        configurable: !0
    }), t.meta = (...n)=>{
        if (n.length === 0) return NSn.get(t);
        const i = t.clone();
        return NSn.add(i, n[0]), i;
    }, t.isOptional = ()=>t.safeParse(void 0).success, t.isNullable = ()=>t.safeParse(null).success, t.apply = (n)=>n(t), t)), ova = ad("_ZodString", (t, e)=>{
    Gpi.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (i, r, s)=>zUh(t, i, r, s);
    const n = t._zod.bag;
    t.format = n.format ?? null, t.minLength = n.minimum ?? null, t.maxLength = n.maximum ?? null, t.regex = (...i)=>t.check(GES(...i)), t.includes = (...i)=>t.check(VES(...i)), t.startsWith = (...i)=>t.check(KES(...i)), t.endsWith = (...i)=>t.check(YES(...i)), t.min = (...i)=>t.check(iFr(...i)), t.max = (...i)=>t.check(UUh(...i)), t.length = (...i)=>t.check(jUh(...i)), t.nonempty = (...i)=>t.check(iFr(1, ...i)), t.lowercase = (i)=>t.check(qES(i)), t.uppercase = (i)=>t.check(zES(i)), t.trim = ()=>t.check(ZES()), t.normalize = (...i)=>t.check(XES(...i)), t.toLowerCase = ()=>t.check(QES()), t.toUpperCase = ()=>t.check(JES()), t.slugify = ()=>t.check(eIS());
}), Djh = ad("ZodString", (t, e)=>{
    Gpi.init(t, e), ova.init(t, e), t.email = (n)=>t.check(mES(Njh, n)), t.url = (n)=>t.check(bES(Ljh, n)), t.jwt = (n)=>t.check(NES(Xjh, n)), t.emoji = (n)=>t.check(yES(Ojh, n)), t.guid = (n)=>t.check(LUh(ava, n)), t.uuid = (n)=>t.check(gES(Vpi, n)), t.uuidv4 = (n)=>t.check(fES(Vpi, n)), t.uuidv6 = (n)=>t.check(vES(Vpi, n)), t.uuidv7 = (n)=>t.check(_ES(Vpi, n)), t.nanoid = (n)=>t.check(SES(Fjh, n)), t.guid = (n)=>t.check(LUh(ava, n)), t.cuid = (n)=>t.check(kES(Bjh, n)), t.cuid2 = (n)=>t.check(wES(Ujh, n)), t.ulid = (n)=>t.check(CES(jjh, n)), t.base64 = (n)=>t.check(PES(Vjh, n)), t.base64url = (n)=>t.check(MES(Kjh, n)), t.xid = (n)=>t.check(TES($jh, n)), t.ksuid = (n)=>t.check(EES(Hjh, n)), t.ipv4 = (n)=>t.check(IES(Wjh, n)), t.ipv6 = (n)=>t.check(xES(Gjh, n)), t.cidrv4 = (n)=>t.check(AES(qjh, n)), t.cidrv6 = (n)=>t.check(RES(zjh, n)), t.e164 = (n)=>t.check(DES(Yjh, n)), t.datetime = (n)=>t.check(lIS(n)), t.date = (n)=>t.check(cIS(n)), t.time = (n)=>t.check(uIS(n)), t.duration = (n)=>t.check(dIS(n));
}), SB = ad("ZodStringFormat", (t, e)=>{
    D4.init(t, e), ova.init(t, e);
}), Njh = ad("ZodEmail", (t, e)=>{
    H7h.init(t, e), SB.init(t, e);
}), ava = ad("ZodGUID", (t, e)=>{
    j7h.init(t, e), SB.init(t, e);
}), Vpi = ad("ZodUUID", (t, e)=>{
    $7h.init(t, e), SB.init(t, e);
}), Ljh = ad("ZodURL", (t, e)=>{
    W7h.init(t, e), SB.init(t, e);
}), Ojh = ad("ZodEmoji", (t, e)=>{
    G7h.init(t, e), SB.init(t, e);
}), Fjh = ad("ZodNanoID", (t, e)=>{
    q7h.init(t, e), SB.init(t, e);
}), Bjh = ad("ZodCUID", (t, e)=>{
    z7h.init(t, e), SB.init(t, e);
}), Ujh = ad("ZodCUID2", (t, e)=>{
    V7h.init(t, e), SB.init(t, e);
}), jjh = ad("ZodULID", (t, e)=>{
    K7h.init(t, e), SB.init(t, e);
}), $jh = ad("ZodXID", (t, e)=>{
    Y7h.init(t, e), SB.init(t, e);
}), Hjh = ad("ZodKSUID", (t, e)=>{
    X7h.init(t, e), SB.init(t, e);
}), Wjh = ad("ZodIPv4", (t, e)=>{
    tUh.init(t, e), SB.init(t, e);
}), Gjh = ad("ZodIPv6", (t, e)=>{
    nUh.init(t, e), SB.init(t, e);
}), qjh = ad("ZodCIDRv4", (t, e)=>{
    iUh.init(t, e), SB.init(t, e);
}), zjh = ad("ZodCIDRv6", (t, e)=>{
    rUh.init(t, e), SB.init(t, e);
}), Vjh = ad("ZodBase64", (t, e)=>{
    sUh.init(t, e), SB.init(t, e);
}), Kjh = ad("ZodBase64URL", (t, e)=>{
    oUh.init(t, e), SB.init(t, e);
}), Yjh = ad("ZodE164", (t, e)=>{
    aUh.init(t, e), SB.init(t, e);
}), Xjh = ad("ZodJWT", (t, e)=>{
    lUh.init(t, e), SB.init(t, e);
}), lva = ad("ZodNumber", (t, e)=>{
    Zfa.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (i, r, s)=>VUh(t, i, r, s), t.gt = (i, r)=>t.check(FUh(i, r)), t.gte = (i, r)=>t.check(tva(i, r)), t.min = (i, r)=>t.check(tva(i, r)), t.lt = (i, r)=>t.check(OUh(i, r)), t.lte = (i, r)=>t.check(eva(i, r)), t.max = (i, r)=>t.check(eva(i, r)), t.int = (i)=>t.check(Ijh(i)), t.safe = (i)=>t.check(Ijh(i)), t.positive = (i)=>t.check(FUh(0, i)), t.nonnegative = (i)=>t.check(tva(0, i)), t.negative = (i)=>t.check(OUh(0, i)), t.nonpositive = (i)=>t.check(eva(0, i)), t.multipleOf = (i, r)=>t.check(BUh(i, r)), t.step = (i, r)=>t.check(BUh(i, r)), t.finite = ()=>t;
    const n = t._zod.bag;
    t.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), t.isFinite = !0, t.format = n.format ?? null;
}), Zjh = ad("ZodNumberFormat", (t, e)=>{
    cUh.init(t, e), lva.init(t, e);
}), Qjh = ad("ZodBoolean", (t, e)=>{
    uUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>KUh(t, n, i, r);
}), Jjh = ad("ZodUnknown", (t, e)=>{
    dUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>XUh(t, n, i, r);
}), e$h = ad("ZodNever", (t, e)=>{
    hUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>YUh(t, n, i, r);
}), t$h = ad("ZodArray", (t, e)=>{
    pUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ejh(t, n, i, r), t.element = e.element, t.min = (n, i)=>t.check(iFr(n, i)), t.nonempty = (n)=>t.check(iFr(1, n)), t.max = (n, i)=>t.check(UUh(n, i)), t.length = (n, i)=>t.check(jUh(n, i)), t.unwrap = ()=>t.element;
}), n$h = ad("ZodObject", (t, e)=>{
    mUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>tjh(t, n, i, r), nN(t, "shape", ()=>e.shape), t.keyof = ()=>sva(Object.keys(t._zod.def.shape)), t.catchall = (n)=>t.clone({
            ...t._zod.def,
            catchall: n
        }), t.passthrough = ()=>t.clone({
            ...t._zod.def,
            catchall: xjh()
        }), t.loose = ()=>t.clone({
            ...t._zod.def,
            catchall: xjh()
        }), t.strict = ()=>t.clone({
            ...t._zod.def,
            catchall: _IS()
        }), t.strip = ()=>t.clone({
            ...t._zod.def,
            catchall: void 0
        }), t.extend = (n)=>oTS(t, n), t.safeExtend = (n)=>aTS(t, n), t.merge = (n)=>lTS(t, n), t.pick = (n)=>rTS(t, n), t.omit = (n)=>sTS(t, n), t.partial = (...n)=>cTS(cva, t, n[0]), t.required = (...n)=>uTS(uva, t, n[0]);
}), i$h = ad("ZodUnion", (t, e)=>{
    gUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>njh(t, n, i, r), t.options = e.options;
}), r$h = ad("ZodIntersection", (t, e)=>{
    fUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ijh(t, n, i, r);
}), oFr = ad("ZodEnum", (t, e)=>{
    vUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (i, r, s)=>ZUh(t, i, r, s), t.enum = e.entries, t.options = Object.values(e.entries);
    const n = new Set(Object.keys(e.entries));
    t.extract = (i, r)=>{
        const s = {};
        for (const o of i)if (n.has(o)) s[o] = e.entries[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new oFr({
            ...e,
            checks: [],
            ...eS(r),
            entries: s
        });
    }, t.exclude = (i, r)=>{
        const s = {
            ...e.entries
        };
        for (const o of i)if (n.has(o)) delete s[o];
        else throw new Error(`Key ${o} not found in enum`);
        return new oFr({
            ...e,
            checks: [],
            ...eS(r),
            entries: s
        });
    };
}), s$h = ad("ZodTransform", (t, e)=>{
    bUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>JUh(t, n, i, r), t._zod.parse = (n, i)=>{
        if (i.direction === "backward") throw new Dfa(t.constructor.name);
        n.addIssue = (s)=>{
            if (typeof s == "string") n.issues.push(Opi(s, n.value, e));
            else {
                const o = s;
                o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), n.issues.push(Opi(o));
            }
        };
        const r = e.transform(n.value, n);
        return r instanceof Promise ? r.then((s)=>(n.value = s, n)) : (n.value = r, n);
    };
}), cva = ad("ZodOptional", (t, e)=>{
    Jfa.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>nva(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), o$h = ad("ZodExactOptional", (t, e)=>{
    yUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>nva(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), a$h = ad("ZodNullable", (t, e)=>{
    SUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>rjh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), l$h = ad("ZodDefault", (t, e)=>{
    kUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ojh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType, t.removeDefault = t.unwrap;
}), c$h = ad("ZodPrefault", (t, e)=>{
    wUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ajh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), uva = ad("ZodNonOptional", (t, e)=>{
    CUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>sjh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), u$h = ad("ZodCatch", (t, e)=>{
    TUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ljh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType, t.removeCatch = t.unwrap;
}), d$h = ad("ZodPipe", (t, e)=>{
    EUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>cjh(t, n, i, r), t.in = e.in, t.out = e.out;
}), h$h = ad("ZodReadonly", (t, e)=>{
    IUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>ujh(t, n, i, r), t.unwrap = ()=>t._zod.def.innerType;
}), p$h = ad("ZodCustom", (t, e)=>{
    xUh.init(t, e), Jj.init(t, e), t._zod.processJSONSchema = (n, i, r)=>QUh(t, n, i, r);
});

}
