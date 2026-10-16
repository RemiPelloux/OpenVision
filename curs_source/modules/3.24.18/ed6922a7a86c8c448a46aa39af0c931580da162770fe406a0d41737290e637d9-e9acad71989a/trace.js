import { Ddt } from "./HVr.js";
import { Ahn, GWr, kLt } from "./baggage.js";
import { tge } from "./carrier.js";
import { aqe } from "./client.js";
import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { uqe } from "./dynamicSamplingContext.js";
import { whi } from "./handleCallbackErrors.js";
import { wLt } from "./hasSpansEnabled.js";
import { yhn } from "./index.js";
import { hGr } from "./logSpans.js";
import { Rhn } from "./parseSampleRate.js";
import { iqe } from "./propagationContext.js";
import { $kc, Gkc, Ikc, Okc, dLt, xkc } from "./qIc.js";
import { lwc } from "./sampling.js";
import { jce } from "./scope.js";
import { W9 } from "./semanticAttributes.js";
import { Shi } from "./sentryNonRecordingSpan.js";
import { Cdt } from "./spanOnScope.js";
import { Pu, fGr, zH } from "./spanUtils.js";
import { SLt } from "./spanstatus.js";
import { Dkc } from "./stackStrategy.js";
import { phi } from "./tracing.js";
import { x } from "./tslib.es6.js";
import { Ihn } from "./utils.js";
import { Og } from "./worldwide.js";
function jke() {
    return dLt(Og), Og;
}
function bLt() {
    const e = jke(), t = dLt(e);
    return t.stack = t.stack || new Dkc(xkc(), Ikc());
}
function ung(e) {
    return bLt().withScope(e);
}
function dng(e, t) {
    const n = bLt();
    return n.withScope(()=>(n.getStackTop().scope = e, t(e)));
}
function Rkc(e) {
    return bLt().withScope(()=>e(bLt().getIsolationScope()));
}
function hng() {
    return {
        withIsolationScope: Rkc,
        withScope: ung,
        withSetScope: dng,
        withSetIsolationScope: (e, t)=>Rkc(t),
        getCurrentScope: ()=>bLt().getScope(),
        getIsolationScope: ()=>bLt().getIsolationScope()
    };
}
function rqe(e) {
    const t = dLt(e);
    return t.acs ? t.acs : hng();
}
function XB(...e) {
    const t = jke(), n = rqe(t);
    if (e.length === 2) {
        const [i, r] = e;
        return i ? n.withSetScope(i, r) : n.withScope(r);
    }
    return n.withScope(e[0]);
}
function uhi(e) {
    const t = Okc(e);
    if (!t) return;
    const n = Object.entries(t).reduce((i, [r, s])=>{
        if (r.match(GWr)) {
            const o = r.slice(Ahn.length);
            i[o] = s;
        }
        return i;
    }, {});
    if (Object.keys(n).length > 0) return n;
}
function dhi(e, t) {
    const n = Gkc(e), i = uhi(t);
    if (!n?.traceId) return {
        traceId: jce(),
        sampleRand: Math.random()
    };
    const r = yng(n, i);
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
function yng(e, t) {
    const n = aqe(t?.sample_rand);
    if (n !== void 0) return n;
    const i = aqe(t?.sample_rate);
    return i && e?.parentSampled !== void 0 ? e.parentSampled ? Math.random() * i : i + Math.random() * (1 - i) : Math.random();
}
function jkc(e, t) {
    const n = $kc(e);
    return t && n && t !== n ? (zr.log(`Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`), !1) : (e.getOptions().strictTraceContinuation || !1) && (t && !n || !t && n) ? (zr.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`), !1) : !0;
}
function _Gr(e) {
    return XB((t)=>(t.setPropagationContext({
            traceId: jce(),
            sampleRand: Math.random()
        }), Qh && zr.log(`Starting a new trace with id ${t.getPropagationContext().traceId}`), Ddt(null, e)));
}
var Nhn, kGr;
export { Nhn, Rkc, XB, _Gr, bLt, dhi, dng, hng, jkc, jke, kGr, rqe, uhi, ung, yng };
var __wakaru_xLt_initialized = false;
export function xLt() {
if (__wakaru_xLt_initialized) return;
__wakaru_xLt_initialized = true;
"use strict";
x(), yhn(), tge(), NT(), kE(), W9(), kLt(), Xk(), whi(), wLt(), Rhn(), iqe(), Cdt(), zH(), phi(), uqe(), hGr(), lwc(), Shi(), fGr(), SLt(), Ihn(), Nhn = "__SENTRY_SUPPRESS_TRACING__", kGr = (e, t)=>{
    const n = jke(), i = rqe(n);
    if (i.continueTrace) return i.continueTrace(e, t);
    const { sentryTrace: r, baggage: s } = e, o = Pu(), a = uhi(s);
    return o && !jkc(o, a?.org_id) ? _Gr(t) : XB((c)=>{
        const l = dhi(r, s);
        return c.setPropagationContext(l), t();
    });
};

}
