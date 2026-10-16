import { IFt } from "./Iwo.js";
import { KHu, YHu, aWu, fun, iWu, uWu } from "./SZu.js";
import { A1o, Iun, YYn } from "./baggage.js";
import { $xe } from "./carrier.js";
import { wvt } from "./client.js";
import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { Evt } from "./dynamicSamplingContext.js";
import { bhr } from "./handleCallbackErrors.js";
import { xun } from "./hasSpansEnabled.js";
import { jYn } from "./index.js";
import { Q1o } from "./logSpans.js";
import { XYn } from "./parseSampleRate.js";
import { bvt } from "./propagationContext.js";
import { RWu } from "./sampling.js";
import { mke } from "./scope.js";
import { QH } from "./semanticAttributes.js";
import { vhr } from "./sentryNonRecordingSpan.js";
import { yFt } from "./spanOnScope.js";
import { ah, nko, uQ } from "./spanUtils.js";
import { Eun } from "./spanstatus.js";
import { QHu } from "./stackStrategy.js";
import { chr } from "./tracing.js";
import { E } from "./tslib.es6.js";
import { KYn } from "./utils.js";
import { o_ } from "./worldwide.js";
function bOe() {
    return fun(o_), o_;
}
function Cun() {
    const t = bOe(), e = fun(t);
    return e.stack = e.stack || new QHu(KHu(), YHu());
}
function Xuy(t) {
    return Cun().withScope(t);
}
function Zuy(t, e) {
    const n = Cun();
    return n.withScope(()=>(n.getStackTop().scope = t, e(t)));
}
function ZHu(t) {
    return Cun().withScope(()=>t(Cun().getIsolationScope()));
}
function Quy() {
    return {
        withIsolationScope: ZHu,
        withScope: Xuy,
        withSetScope: Zuy,
        withSetIsolationScope: (t, e)=>ZHu(e),
        getCurrentScope: ()=>Cun().getScope(),
        getIsolationScope: ()=>Cun().getIsolationScope()
    };
}
function yvt(t) {
    const e = fun(t);
    return e.acs ? e.acs : Quy();
}
function s7(...t) {
    const e = bOe(), n = yvt(e);
    if (t.length === 2) {
        const [i, r] = t;
        return i ? n.withSetScope(i, r) : n.withScope(r);
    }
    return n.withScope(t[0]);
}
function ohr(t) {
    const e = iWu(t);
    if (!e) return;
    const n = Object.entries(e).reduce((i, [r, s])=>{
        if (r.match(A1o)) {
            const o = r.slice(YYn.length);
            i[o] = s;
        }
        return i;
    }, {});
    if (Object.keys(n).length > 0) return n;
}
function ahr(t, e) {
    const n = uWu(t), i = ohr(e);
    if (!n?.traceId) return {
        traceId: mke(),
        sampleRand: Math.random()
    };
    const r = ody(n, i);
    i && (i.sample_rand = r.toString());
    const { traceId: s, parentSpanId: o, parentSampled: a } = n;
    return {
        traceId: s,
        parentSpanId: o,
        sampled: a,
        dsc: i || {},
        sampleRand: r
    };
}
function ody(t, e) {
    const n = wvt(e?.sample_rand);
    if (n !== void 0) return n;
    const i = wvt(e?.sample_rate);
    return i && t?.parentSampled !== void 0 ? t.parentSampled ? Math.random() * i : i + Math.random() * (1 - i) : Math.random();
}
function hWu(t, e) {
    const n = aWu(t);
    return e && n && e !== n ? (so.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e}, SDK options: ${n})`), !1) : (t.getOptions().strictTraceContinuation || !1) && (e && !n || !e && n) ? (so.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e}, Sentry client: ${n})`), !1) : !0;
}
function rko(t) {
    return s7((e)=>(e.setPropagationContext({
            traceId: mke(),
            sampleRand: Math.random()
        }), rg && so.log(`Starting a new trace with id ${e.getPropagationContext().traceId}`), IFt(null, t)));
}
var tXn, lko;
export { Cun, Quy, Xuy, ZHu, Zuy, ahr, bOe, hWu, lko, ody, ohr, rko, s7, tXn, yvt };
var __wakaru_Mun_initialized = false;
export function Mun() {
if (__wakaru_Mun_initialized) return;
__wakaru_Mun_initialized = true;
"use strict";
E(), jYn(), $xe(), JA(), qR(), QH(), Iun(), JC(), bhr(), xun(), XYn(), bvt(), yFt(), uQ(), chr(), Evt(), Q1o(), RWu(), vhr(), nko(), Eun(), KYn(), tXn = "__SENTRY_SUPPRESS_TRACING__", lko = (t, e)=>{
    const n = bOe(), i = yvt(n);
    if (i.continueTrace) return i.continueTrace(t, e);
    const { sentryTrace: r, baggage: s } = t, o = ah(), a = ohr(s);
    return o && !hWu(o, a?.org_id) ? rko(e) : s7((l)=>{
        const c = ahr(r, s);
        return l.setPropagationContext(c), e();
    });
};

}
