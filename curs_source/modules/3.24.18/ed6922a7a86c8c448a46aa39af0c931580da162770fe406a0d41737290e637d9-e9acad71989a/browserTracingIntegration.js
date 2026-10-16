import { $jr, CV, Ddt, Lhn, Lie, Njr, Qdt, SGr, YLt, _Ec, _qe, bEc, bGr, bhi, fEc, fjr, hEc, jH, kEc, pEc, vEc, yEc, yGr, zdt } from "./HVr.js";
import { d0_ } from "./backgroundtab.js";
import { fI } from "./client.js";
import { Qh } from "./debug-build.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { Dhn } from "./errors.js";
import { Q$, z_ } from "./helpers.js";
import { d2o } from "./httpcontext.js";
import { Mdt, gwc, hwc, mwc, pwc } from "./idleSpan.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { Gce } from "./index_216.js";
import { Y4, mD } from "./inp.js";
import { LOo, eYh, f0_, tYh } from "./linkedTraces.js";
import { AVr, Fdt, qhn, xdt } from "./qIc.js";
import { JKh, MOo, Qsr, Zsr } from "./request_2.js";
import { aAe, jce, nge } from "./scope.js";
import { Shn, a1, cAe, jC, lhi, sqe, zL } from "./semanticAttributes.js";
import { ige, qce } from "./sentryNonRecordingSpan.js";
import { ELt, Idt, Kce, Pu, cqe, ghi, iv, lqe, nv, pD, sR, vhi } from "./spanUtils.js";
import { w0 } from "./spanstatus.js";
import { XB, dhi } from "./trace.js";
import { x } from "./tslib.es6.js";
import { aCc } from "./url.js";
import { Og } from "./worldwide.js";
import { Uie } from "./xhr.js";
function lAe(e) {
    const { traceFlags: t } = e.spanContext();
    return t === ghi;
}
function Tng(e, t) {
    e[lqe] && e[lqe].delete(t);
}
function T7(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const t = e || Pu()?.getOptions();
    return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Xke(e) {
    const t = Lhn();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    const n = yGr(e), { forceTransaction: i, parentSpan: r } = e;
    return (e.scope ? (o)=>XB(e.scope, o) : r !== void 0 ? (o)=>Ddt(r, o) : (o)=>o())(()=>{
        const o = nv(), a = SGr(o, r);
        return e.onlyIfParent && !a ? new ige : bGr({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: i,
            scope: o
        });
    });
}
function Ohn(e, t = {}) {
    const n = new Map;
    let i = !1, r, s, o = gwc, a = !t.disableAutoFinish;
    const c = [], { idleTimeout: l = Mdt.idleTimeout, finalTimeout: u = Mdt.finalTimeout, childSpanTimeout: h = Mdt.childSpanTimeout, beforeSpanEnd: p, trimIdleSpanEndTimestamp: g = !0 } = t, f = Pu();
    if (!f || !T7()) {
        const O = new ige, F = {
            sample_rate: "0",
            sampled: "false",
            ...Kce(O)
        };
        return bhi(O, F), O;
    }
    const v = nv(), b = mD(), y = Gng(e);
    y.end = new Proxy(y.end, {
        apply (O, F, H) {
            if (p && p(y), F instanceof ige) return;
            const [$, ...W] = H, G = $ || sR(), q = cqe(G), z = Idt(y).filter((ne)=>ne !== y), X = iv(y);
            if (!z.length || !g) return N(q), Reflect.apply(O, F, [
                q,
                ...W
            ]);
            const Y = f.getOptions().ignoreSpans, Z = z?.reduce((ne, ee)=>{
                const se = iv(ee);
                return !se.timestamp || Y && vhi(se, Y) ? ne : ne ? Math.max(ne, se.timestamp) : se.timestamp;
            }, void 0), K = X.start_timestamp, J = Math.min(K ? K + u / 1e3 : 1 / 0, Math.max(K || -1 / 0, Math.min(q, Z || 1 / 0)));
            return N(J), Reflect.apply(O, F, [
                J,
                ...W
            ]);
        }
    });
    function T() {
        r && (clearTimeout(r), r = void 0);
    }
    function E() {
        s && (clearTimeout(s), s = void 0);
    }
    function A(O) {
        T(), r = setTimeout(()=>{
            !i && n.size === 0 && a && (o = pwc, y.end(O));
        }, l);
    }
    function R(O) {
        E(), r = setTimeout(()=>{
            !i && a && (o = hwc, y.end(O));
        }, h);
    }
    function D(O) {
        T(), n.set(O, !0);
        const F = sR();
        R(F + h / 1e3);
    }
    function P(O) {
        if (n.has(O) && n.delete(O), n.size === 0) {
            const F = sR();
            A(F + l / 1e3), E();
        }
    }
    function N(O) {
        i = !0, n.clear(), c.forEach((q)=>q()), nge(v, b);
        const F = iv(y), { start_timestamp: H } = F;
        if (!H) return;
        F.data[cAe] || y.setAttribute(cAe, o), zr.log(`[Tracing] Idle span "${F.op}" finished`);
        const W = Idt(y).filter((q)=>q !== y);
        let G = 0;
        W.forEach((q)=>{
            q.isRecording() && (q.setStatus({
                code: w0,
                message: "cancelled"
            }), q.end(O), Qh && zr.log("[Tracing] Cancelling span since span ended early", JSON.stringify(q, void 0, 2)));
            const z = iv(q), { timestamp: X = 0, start_timestamp: Y = 0 } = z, Z = Y <= O, K = (u + l) / 1e3, J = X - Y <= K;
            if (Qh) {
                const ne = JSON.stringify(q, void 0, 2);
                Z ? J || zr.log("[Tracing] Discarding span since it finished after idle span final timeout", ne) : zr.log("[Tracing] Discarding span since it happened after idle span was finished", ne);
            }
            (!J || !Z) && (Tng(y, q), G++);
        }), G > 0 && y.setAttribute("sentry.idle_span_discarded_spans", G);
    }
    return c.push(f.on("spanStart", (O)=>{
        if (i || O === y || iv(O).timestamp || O instanceof ELt && O.isStandaloneSpan()) return;
        Idt(y).includes(O) && D(O.spanContext().spanId);
    })), c.push(f.on("spanEnd", (O)=>{
        i || P(O.spanContext().spanId);
    })), c.push(f.on("idleSpanEnableAutoFinish", (O)=>{
        O === y && (a = !0, A(), n.size && R());
    })), t.disableAutoFinish || A(), setTimeout(()=>{
        i || (y.setStatus({
            code: w0,
            message: "deadline_exceeded"
        }), o = mwc, y.end());
    }, u), y;
}
function Gng(e) {
    const t = Xke(e);
    return nge(nv(), t), Qh && zr.log("[Tracing] Started span is an idle span"), t;
}
function DLt(e, t) {
    const n = e.indexOf("://") <= 0 && e.indexOf("//") !== 0, i = t ?? (n ? aCc : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(e, i)) return;
        const r = new URL(e, i);
        return n ? {
            isRelative: n,
            pathname: r.pathname,
            search: r.search,
            hash: r.hash
        } : r;
    } catch  {}
}
function i0_(e) {
    return e.split(",").some((t)=>t.trim().startsWith("sentry-"));
}
function YKh(e) {
    try {
        return new URL(e, z_.location.origin).href;
    } catch  {
        return;
    }
}
function r0_(e) {
    return e.entryType === "resource" && "initiatorType" in e && typeof e.nextHopProtocol == "string" && (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest");
}
function XKh(e) {
    try {
        return new Headers(e);
    } catch  {
        return;
    }
}
function ZKh(e, t) {
    const { traceFetch: n, traceXHR: i, trackFetchStreamPerformance: r, shouldCreateSpanForRequest: s, enableHTTPTimings: o, tracePropagationTargets: a, onRequestSpanStart: c, onRequestSpanEnd: l } = {
        ...Qsr,
        ...t
    }, u = typeof s == "function" ? s : (f)=>!0, h = (f)=>o0_(f, a), p = {}, g = e.getOptions().propagateTraceparent;
    n && (e.addEventProcessor((f)=>(f.type === "transaction" && f.spans && f.spans.forEach((v)=>{
            if (v.op === "http.client") {
                const b = Zsr.get(v.span_id);
                b && (v.timestamp = b / 1e3, Zsr.delete(v.span_id));
            }
        }), f)), r && fjr((f)=>{
        if (f.response) {
            const v = MOo.get(f.response);
            v && f.endTimestamp && Zsr.set(v, f.endTimestamp);
        }
    }), zdt((f)=>{
        const v = AVr(f, u, h, p, {
            propagateTraceparent: g,
            onRequestSpanEnd: l
        });
        if (f.response && f.fetchData.__span && MOo.set(f.response, f.fetchData.__span), v) {
            const b = YKh(f.fetchData.url), y = b ? Lie(b).host : void 0;
            v.setAttributes({
                "http.url": b,
                "server.address": y
            }), o && QKh(v), c?.(v, {
                headers: f.headers
            });
        }
    })), i && YLt((f)=>{
        const v = a0_(f, u, h, p, g, l);
        v && (o && QKh(v), c?.(v, {
            headers: XKh(f.xhr.__sentry_xhr_v3__?.request_headers)
        }));
    });
}
function QKh(e) {
    const { url: t } = iv(e).data;
    if (!t || typeof t != "string") return;
    const n = _qe("resource", ({ entries: i })=>{
        i.forEach((r)=>{
            r0_(r) && r.name.endsWith(t) && (e.setAttributes(Njr(r)), setTimeout(n));
        });
    });
}
function o0_(e, t) {
    const n = Gce();
    if (n) {
        let i, r;
        try {
            i = new URL(e, n), r = new URL(n).origin;
        } catch  {
            return !1;
        }
        const s = i.origin === r;
        return t ? CV(i.toString(), t) || s && CV(i.pathname, t) : s;
    } else {
        const i = !!e.match(/^\/(?!\/)/);
        return t ? CV(e, t) : i;
    }
}
function a0_(e, t, n, i, r, s) {
    const o = e.xhr, a = o?.[Uie];
    if (!o || o.__sentry_own_request__ || !a) return;
    const { url: c, method: l } = a, u = T7() && t(c);
    if (e.endTimestamp && u) {
        const y = o.__sentry_xhr_span_id__;
        if (!y) return;
        const T = i[y];
        T && a.status_code !== void 0 && (xdt(T, a.status_code), T.end(), s?.(T, {
            headers: XKh($jr(o)),
            error: e.error
        }), delete i[y]);
        return;
    }
    const h = YKh(c), p = Lie(h || c), g = qhn(c), f = !!mD(), v = u && f ? Xke({
        name: `${l} ${g}`,
        attributes: {
            url: c,
            type: "xhr",
            "http.method": l,
            "http.url": h,
            "server.address": p?.host,
            [jC]: "auto.http.browser",
            [a1]: "http.client",
            ...p?.search && {
                "http.query": p?.search
            },
            ...p?.hash && {
                "http.fragment": p?.hash
            }
        }
    }) : new ige;
    o.__sentry_xhr_span_id__ = v.spanContext().spanId, i[o.__sentry_xhr_span_id__] = v, n(c) && c0_(o, T7() && f ? v : void 0, r);
    const b = Pu();
    return b && b.emit("beforeOutgoingRequestSpan", v, e), v;
}
function c0_(e, t, n) {
    const { "sentry-trace": i, baggage: r, traceparent: s } = Fdt({
        span: t,
        propagateTraceparent: n
    });
    i && l0_(e, i, r, s);
}
function l0_(e, t, n, i) {
    const r = e.__sentry_xhr_v3__?.request_headers;
    if (!(r?.["sentry-trace"] || !e.setRequestHeader)) try {
        if (e.setRequestHeader("sentry-trace", t), i && !r?.traceparent && e.setRequestHeader("traceparent", i), n) {
            const s = r?.baggage;
            (!s || !i0_(s)) && e.setRequestHeader("baggage", n);
        }
    } catch  {}
}
function u0_() {
    z_.document ? z_.document.addEventListener("visibilitychange", ()=>{
        const e = mD();
        if (!e) return;
        const t = pD(e);
        if (z_.document.hidden && t) {
            const n = "cancelled", { op: i, status: r } = iv(t);
            kg && zr.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${i}`), r || t.setStatus({
                code: w0,
                message: n
            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end();
        }
    }) : kg && zr.warn("[Tracing] Could not set up background tab detection due to lack of global document");
}
function h0_(e, { linkPreviousTrace: t, consistentTraceSampling: n }) {
    const i = t === "session-storage";
    let r = i ? g0_() : void 0;
    e.on("spanStart", (o)=>{
        if (pD(o) !== o) return;
        const a = nv().getPropagationContext();
        r = p0_(r, o, a), i && m0_(r);
    });
    let s = !0;
    n && e.on("beforeSampling", (o)=>{
        if (!r) return;
        const a = nv(), c = a.getPropagationContext();
        if (s && c.parentSpanId) {
            s = !1;
            return;
        }
        a.setPropagationContext({
            ...c,
            dsc: {
                ...c.dsc,
                sample_rate: String(r.sampleRate),
                sampled: String(POo(r.spanContext))
            },
            sampleRand: r.sampleRand
        }), o.parentSampled = POo(r.spanContext), o.parentSampleRate = r.sampleRate, o.spanAttributes = {
            ...o.spanAttributes,
            [Shn]: r.sampleRate
        };
    });
}
function p0_(e, t, n) {
    const i = iv(t);
    function r() {
        try {
            return Number(n.dsc?.sample_rate) ?? Number(i.data?.[sqe]);
        } catch  {
            return 0;
        }
    }
    const s = {
        spanContext: t.spanContext(),
        startTimestamp: i.start_timestamp,
        sampleRate: r(),
        sampleRand: n.sampleRand
    };
    if (!e) return s;
    const o = e.spanContext;
    return o.traceId === i.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= eYh && (kg && zr.log(`Adding previous_trace ${o} link to span ${{
        op: i.op,
        ...t.spanContext()
    }}`), t.addLink({
        context: o,
        attributes: {
            [lhi]: "previous_trace"
        }
    }), t.setAttribute(tYh, `${o.traceId}-${o.spanId}-${POo(o) ? 1 : 0}`)), s);
}
function m0_(e) {
    try {
        z_.sessionStorage.setItem(LOo, JSON.stringify(e));
    } catch (t) {
        kg && zr.warn("Could not store previous trace in sessionStorage", t);
    }
}
function g0_() {
    try {
        const e = z_.sessionStorage?.getItem(LOo);
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function POo(e) {
    return e.traceFlags === 1;
}
function nYh(e, t, n) {
    e.emit("startPageLoadSpan", t, n), nv().setTransactionName(t.name);
    const i = K9n(e);
    return i && e.emit("afterStartPageLoadSpan", i), i;
}
function iYh(e, t, n) {
    const { url: i, isRedirect: r } = n || {};
    e.emit("beforeStartNavigationSpan", t, {
        isRedirect: r
    }), e.emit("startNavigationSpan", t, {
        isRedirect: r
    });
    const s = nv();
    return s.setTransactionName(t.name), i && !r && s.setSDKProcessingMetadata({
        normalizedRequest: {
            ...d2o(),
            url: i
        }
    }), K9n(e);
}
function rYh(e) {
    return z_.document?.querySelector(`meta[name=${e}]`)?.getAttribute("content") || void 0;
}
function v0_(e, t, n, i, r) {
    const s = z_.document;
    let o;
    const a = ()=>{
        const c = "ui.action.click", l = K9n(e);
        if (l) {
            const u = iv(l).op;
            if ([
                "navigation",
                "pageload"
            ].includes(u)) {
                kg && zr.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`);
                return;
            }
        }
        if (o && (o.setAttribute(cAe, "interactionInterrupted"), o.end(), o = void 0), !r.name) {
            kg && zr.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`);
            return;
        }
        o = Ohn({
            name: r.name,
            op: c,
            attributes: {
                [zL]: r.source || "url"
            }
        }, {
            idleTimeout: t,
            finalTimeout: n,
            childSpanTimeout: i
        });
    };
    s && addEventListener("click", a, {
        capture: !0
    });
}
function K9n(e) {
    return e[NOo];
}
function sYh(e, t) {
    jH(e, NOo, t);
}
function _0_(e, t) {
    const n = iv(e), i = aAe(), r = n.start_timestamp;
    return !(i - r > OOo || t && i - t <= OOo);
}
var oYh, aYh, cYh, NOo, OOo;
export { DLt, Gng, K9n, NOo, OOo, Ohn, POo, QKh, T7, Tng, XKh, Xke, YKh, ZKh, _0_, a0_, aYh, c0_, cYh, g0_, h0_, i0_, iYh, l0_, lAe, m0_, nYh, o0_, oYh, p0_, r0_, rYh, sYh, u0_, v0_ };
var __wakaru_b0__initialized = false;
export function b0_() {
if (__wakaru_b0__initialized) return;
__wakaru_b0__initialized = true;
x(), $u(), XH(), _Z(), Q$(), d0_(), f0_(), JKh(), oYh = "BrowserTracing", aYh = {
    ...Mdt,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    enableElementTiming: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    _experiments: {},
    ...Qsr
}, cYh = ((e = {})=>{
    const t = {
        name: void 0,
        source: void 0
    }, n = z_.document, { enableInp: i, enableElementTiming: r, enableLongTask: s, enableLongAnimationFrame: o, _experiments: { enableInteractions: a, enableStandaloneClsSpans: c, enableStandaloneLcpSpans: l }, beforeStartSpan: u, idleTimeout: h, finalTimeout: p, childSpanTimeout: g, markBackgroundSpan: f, traceFetch: v, traceXHR: b, trackFetchStreamPerformance: y, shouldCreateSpanForRequest: T, enableHTTPTimings: E, ignoreResourceSpans: A, ignorePerformanceApiSpans: R, instrumentPageLoad: D, instrumentNavigation: P, detectRedirects: N, linkPreviousTrace: O, consistentTraceSampling: F, enableReportPageLoaded: H, onRequestSpanStart: $, onRequestSpanEnd: W } = {
        ...aYh,
        ...e
    };
    let G, q, z;
    function X(Y, Z, K = !0) {
        const J = Z.op === "pageload", ne = Z.name, ee = u ? u(Z) : Z, se = ee.attributes || {};
        if (ne !== ee.name && (se[zL] = "custom", ee.attributes = se), !K) {
            const ce = aAe();
            Xke({
                ...ee,
                startTime: ce
            }).end(ce);
            return;
        }
        t.name = ee.name, t.source = se[zL];
        const re = Ohn(ee, {
            idleTimeout: h,
            finalTimeout: p,
            childSpanTimeout: g,
            disableAutoFinish: J,
            beforeSpanEnd: (ce)=>{
                G?.(), yEc(ce, {
                    recordClsOnPageloadSpan: !c,
                    recordLcpOnPageloadSpan: !l,
                    ignoreResourceSpans: A,
                    ignorePerformanceApiSpans: R
                }), sYh(Y, void 0);
                const de = nv(), le = de.getPropagationContext();
                de.setPropagationContext({
                    ...le,
                    traceId: re.spanContext().traceId,
                    sampled: lAe(re),
                    dsc: Kce(ce)
                }), J && (z = void 0);
            },
            trimIdleSpanEndTimestamp: !H
        });
        J && H && (z = re), sYh(Y, re);
        function ue() {
            n && [
                "interactive",
                "complete"
            ].includes(n.readyState) && Y.emit("idleSpanEnableAutoFinish", re);
        }
        J && !H && n && (n.addEventListener("readystatechange", ()=>{
            ue();
        }), ue());
    }
    return {
        name: oYh,
        setup (Y) {
            if (Dhn(), G = fEc({
                recordClsStandaloneSpans: c || !1,
                recordLcpStandaloneSpans: l || !1,
                client: Y
            }), i && hEc(), r && kEc(), o && Og.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? _Ec() : s && vEc(), a && bEc(), N && n) {
                const K = ()=>{
                    q = sR();
                };
                addEventListener("click", K, {
                    capture: !0
                }), addEventListener("keydown", K, {
                    capture: !0,
                    passive: !0
                });
            }
            function Z() {
                const K = K9n(Y);
                K && !iv(K).timestamp && (kg && zr.log(`[Tracing] Finishing current active span with op: ${iv(K).op}`), K.setAttribute(cAe, "cancelled"), K.end());
            }
            Y.on("startNavigationSpan", (K, J)=>{
                if (Pu() !== Y) return;
                if (J?.isRedirect) {
                    kg && zr.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), X(Y, {
                        op: "navigation.redirect",
                        ...K
                    }, !1);
                    return;
                }
                q = void 0, Z(), fI().setPropagationContext({
                    traceId: jce(),
                    sampleRand: Math.random(),
                    propagationSpanId: T7() ? void 0 : qce()
                });
                const ne = nv();
                ne.setPropagationContext({
                    traceId: jce(),
                    sampleRand: Math.random(),
                    propagationSpanId: T7() ? void 0 : qce()
                }), ne.setSDKProcessingMetadata({
                    normalizedRequest: void 0
                }), X(Y, {
                    op: "navigation",
                    ...K,
                    parentSpan: null,
                    forceTransaction: !0
                });
            }), Y.on("startPageLoadSpan", (K, J = {})=>{
                if (Pu() !== Y) return;
                Z();
                const ne = J.sentryTrace || rYh("sentry-trace"), ee = J.baggage || rYh("baggage"), se = dhi(ne, ee), re = nv();
                re.setPropagationContext(se), T7() || (re.getPropagationContext().propagationSpanId = qce()), re.setSDKProcessingMetadata({
                    normalizedRequest: d2o()
                }), X(Y, {
                    op: "pageload",
                    ...K
                });
            }), Y.on("endPageloadSpan", ()=>{
                H && z && (z.setAttribute(cAe, "reportPageLoaded"), z.end());
            });
        },
        afterAllSetup (Y) {
            let Z = Gce();
            if (O !== "off" && h0_(Y, {
                linkPreviousTrace: O,
                consistentTraceSampling: F
            }), z_.location) {
                if (D) {
                    const K = Y4();
                    nYh(Y, {
                        name: z_.location.pathname,
                        startTime: K ? K / 1e3 : void 0,
                        attributes: {
                            [zL]: "url",
                            [jC]: "auto.pageload.browser"
                        }
                    });
                }
                P && Qdt(({ to: K, from: J })=>{
                    if (J === void 0 && Z?.indexOf(K) !== -1) {
                        Z = void 0;
                        return;
                    }
                    Z = void 0;
                    const ne = DLt(K), ee = K9n(Y), se = ee && N && _0_(ee, q);
                    iYh(Y, {
                        name: ne?.pathname || z_.location.pathname,
                        attributes: {
                            [zL]: "url",
                            [jC]: "auto.navigation.browser"
                        }
                    }, {
                        url: K,
                        isRedirect: se
                    });
                });
            }
            f && u0_(), a && v0_(Y, h, p, g, t), i && pEc(), ZKh(Y, {
                traceFetch: v,
                traceXHR: b,
                trackFetchStreamPerformance: y,
                tracePropagationTargets: Y.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: T,
                enableHTTPTimings: E,
                onRequestSpanStart: $,
                onRequestSpanEnd: W
            });
        }
    };
}), NOo = "_sentry_idleSpan", OOo = 1.5;

}
