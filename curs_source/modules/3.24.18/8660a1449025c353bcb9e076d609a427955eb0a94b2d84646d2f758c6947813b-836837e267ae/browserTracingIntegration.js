import { $5w, B8l, K5w, W5w, Y5w, _qf, eZ, fqf, gqf, hke, i1, pLi, uqf, vqf } from "./BA.js";
import { $Ku, BKu, DKu, FKu, IFt, KFt, NKu, UKu, WKu, ako, eXn, ghr, jKu, oko, sko } from "./Iwo.js";
import { H5w } from "./backgroundtab.js";
import { _M } from "./client.js";
import { rg } from "./debug-build.js";
import { qv, uce } from "./debug-build_3.js";
import { so } from "./debug-logger.js";
import { ZYn } from "./errors.js";
import { DWu, LWu, NWu, OWu, xFt } from "./idleSpan.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { eL, zq } from "./inp.js";
import { V5w } from "./linkedTraces.js";
import { hqf, z0s } from "./request_2.js";
import { Gje, Hxe, mke } from "./scope.js";
import { KE, YF, qje } from "./semanticAttributes.js";
import { Wxe, gke } from "./sentryNonRecordingSpan.js";
import { CFt, Cvt, Kb, M3, Pun, Tvt, Yb, ah, dhr, phr, vke } from "./spanUtils.js";
import { TI } from "./spanstatus.js";
import { ahr, s7 } from "./trace.js";
import { E } from "./tslib.es6.js";
import { xGu } from "./url.js";
import { o_ } from "./worldwide.js";
function zje(t) {
    const { traceFlags: e } = t.spanContext();
    return e === dhr;
}
function ddy(t, e) {
    t[Tvt] && t[Tvt].delete(e);
}
function JK(t) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const e = t || ah()?.getOptions();
    return !!e && (e.tracesSampleRate != null || !!e.tracesSampler);
}
function COe(t) {
    const e = eXn();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    const n = oko(t), { forceTransaction: i, parentSpan: r } = t;
    return (t.scope ? (o)=>s7(t.scope, o) : r !== void 0 ? (o)=>IFt(r, o) : (o)=>o())(()=>{
        const o = Kb(), a = ako(o, r);
        return t.onlyIfParent && !a ? new Wxe : sko({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: i,
            scope: o
        });
    });
}
function nXn(t, e = {}) {
    const n = new Map;
    let i = !1, r, s, o = OWu, a = !e.disableAutoFinish;
    const l = [], { idleTimeout: c = xFt.idleTimeout, finalTimeout: u = xFt.finalTimeout, childSpanTimeout: d = xFt.childSpanTimeout, beforeSpanEnd: h, trimIdleSpanEndTimestamp: p = !0 } = e, g = ah();
    if (!g || !JK()) {
        const P = new Wxe, M = {
            sample_rate: "0",
            sampled: "false",
            ...vke(P)
        };
        return ghr(P, M), P;
    }
    const f = Kb(), _ = eL(), b = Ady(t);
    b.end = new Proxy(b.end, {
        apply (P, M, O) {
            if (h && h(b), M instanceof Wxe) return;
            const [N, ...U] = O, j = N || M3(), $ = Cvt(j), H = CFt(b).filter((J)=>J !== b), G = Yb(b);
            if (!H.length || !p) return A($), Reflect.apply(P, M, [
                $,
                ...U
            ]);
            const q = g.getOptions().ignoreSpans, K = H?.reduce((J, Q)=>{
                const te = Yb(Q);
                return !te.timestamp || q && phr(te, q) ? J : J ? Math.max(J, te.timestamp) : te.timestamp;
            }, void 0), V = G.start_timestamp, Y = Math.min(V ? V + u / 1e3 : 1 / 0, Math.max(V || -1 / 0, Math.min($, K || 1 / 0)));
            return A(Y), Reflect.apply(P, M, [
                Y,
                ...U
            ]);
        }
    });
    function y() {
        r && (clearTimeout(r), r = void 0);
    }
    function S() {
        s && (clearTimeout(s), s = void 0);
    }
    function k(P) {
        y(), r = setTimeout(()=>{
            !i && n.size === 0 && a && (o = NWu, b.end(P));
        }, c);
    }
    function C(P) {
        S(), r = setTimeout(()=>{
            !i && a && (o = DWu, b.end(P));
        }, d);
    }
    function T(P) {
        y(), n.set(P, !0);
        const M = M3();
        C(M + d / 1e3);
    }
    function I(P) {
        if (n.has(P) && n.delete(P), n.size === 0) {
            const M = M3();
            k(M + c / 1e3), S();
        }
    }
    function A(P) {
        i = !0, n.clear(), l.forEach(($)=>$()), Hxe(f, _);
        const M = Yb(b), { start_timestamp: O } = M;
        if (!O) return;
        M.data[qje] || b.setAttribute(qje, o), so.log(`[Tracing] Idle span "${M.op}" finished`);
        const U = CFt(b).filter(($)=>$ !== b);
        let j = 0;
        U.forEach(($)=>{
            $.isRecording() && ($.setStatus({
                code: TI,
                message: "cancelled"
            }), $.end(P), rg && so.log("[Tracing] Cancelling span since span ended early", JSON.stringify($, void 0, 2)));
            const H = Yb($), { timestamp: G = 0, start_timestamp: q = 0 } = H, K = q <= P, V = (u + c) / 1e3, Y = G - q <= V;
            if (rg) {
                const J = JSON.stringify($, void 0, 2);
                K ? Y || so.log("[Tracing] Discarding span since it finished after idle span final timeout", J) : so.log("[Tracing] Discarding span since it happened after idle span was finished", J);
            }
            (!Y || !K) && (ddy(b, $), j++);
        }), j > 0 && b.setAttribute("sentry.idle_span_discarded_spans", j);
    }
    return l.push(g.on("spanStart", (P)=>{
        if (i || P === b || Yb(P).timestamp || P instanceof Pun && P.isStandaloneSpan()) return;
        CFt(b).includes(P) && T(P.spanContext().spanId);
    })), l.push(g.on("spanEnd", (P)=>{
        i || I(P.spanContext().spanId);
    })), l.push(g.on("idleSpanEnableAutoFinish", (P)=>{
        P === b && (a = !0, k(), n.size && C());
    })), e.disableAutoFinish || k(), setTimeout(()=>{
        i || (b.setStatus({
            code: TI,
            message: "deadline_exceeded"
        }), o = LWu, b.end());
    }, u), b;
}
function Ady(t) {
    const e = COe(t);
    return Hxe(Kb(), e), rg && so.log("[Tracing] Started span is an idle span"), e;
}
function Oun(t, e) {
    const n = t.indexOf("://") <= 0 && t.indexOf("//") !== 0, i = e ?? (n ? xGu : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(t, i)) return;
        const r = new URL(t, i);
        return n ? {
            isRelative: n,
            pathname: r.pathname,
            search: r.search,
            hash: r.hash
        } : r;
    } catch  {}
}
var bqf, yqf, Sqf, lUl, cUl;
export { Ady, COe, JK, Oun, Sqf, bqf, cUl, ddy, lUl, nXn, yqf, zje };
var __wakaru_X5w_initialized = false;
export function X5w() {
if (__wakaru_X5w_initialized) return;
__wakaru_X5w_initialized = true;
E(), fh(), pQ(), uce(), eZ(), H5w(), V5w(), hqf(), bqf = "BrowserTracing", yqf = {
    ...xFt,
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
    ...z0s
}, Sqf = ((t = {})=>{
    const e = {
        name: void 0,
        source: void 0
    }, n = i1.document, { enableInp: i, enableElementTiming: r, enableLongTask: s, enableLongAnimationFrame: o, _experiments: { enableInteractions: a, enableStandaloneClsSpans: l, enableStandaloneLcpSpans: c }, beforeStartSpan: u, idleTimeout: d, finalTimeout: h, childSpanTimeout: p, markBackgroundSpan: g, traceFetch: f, traceXHR: _, trackFetchStreamPerformance: b, shouldCreateSpanForRequest: y, enableHTTPTimings: S, ignoreResourceSpans: k, ignorePerformanceApiSpans: C, instrumentPageLoad: T, instrumentNavigation: I, detectRedirects: A, linkPreviousTrace: P, consistentTraceSampling: M, enableReportPageLoaded: O, onRequestSpanStart: N, onRequestSpanEnd: U } = {
        ...yqf,
        ...t
    };
    let j, $, H;
    function G(q, K, V = !0) {
        const Y = K.op === "pageload", J = K.name, Q = u ? u(K) : K, te = Q.attributes || {};
        if (J !== Q.name && (te[YF] = "custom", Q.attributes = te), !V) {
            const ie = Gje();
            COe({
                ...Q,
                startTime: ie
            }).end(ie);
            return;
        }
        e.name = Q.name, e.source = te[YF];
        const ee = nXn(Q, {
            idleTimeout: d,
            finalTimeout: h,
            childSpanTimeout: p,
            disableAutoFinish: Y,
            beforeSpanEnd: (ie)=>{
                j?.(), $Ku(ie, {
                    recordClsOnPageloadSpan: !l,
                    recordLcpOnPageloadSpan: !c,
                    ignoreResourceSpans: k,
                    ignorePerformanceApiSpans: C
                }), _qf(q, void 0);
                const oe = Kb(), se = oe.getPropagationContext();
                oe.setPropagationContext({
                    ...se,
                    traceId: ee.spanContext().traceId,
                    sampled: zje(ee),
                    dsc: vke(ie)
                }), Y && (H = void 0);
            },
            trimIdleSpanEndTimestamp: !O
        });
        Y && O && (H = ee), _qf(q, ee);
        function re() {
            n && [
                "interactive",
                "complete"
            ].includes(n.readyState) && q.emit("idleSpanEnableAutoFinish", ee);
        }
        Y && !O && n && (n.addEventListener("readystatechange", ()=>{
            re();
        }), re());
    }
    return {
        name: bqf,
        setup (q) {
            if (ZYn(), j = FKu({
                recordClsStandaloneSpans: l || !1,
                recordLcpStandaloneSpans: c || !1,
                client: q
            }), i && DKu(), r && WKu(), o && o_.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? UKu() : s && BKu(), a && jKu(), A && n) {
                const V = ()=>{
                    $ = M3();
                };
                addEventListener("click", V, {
                    capture: !0
                }), addEventListener("keydown", V, {
                    capture: !0,
                    passive: !0
                });
            }
            function K() {
                const V = pLi(q);
                V && !Yb(V).timestamp && (qv && so.log(`[Tracing] Finishing current active span with op: ${Yb(V).op}`), V.setAttribute(qje, "cancelled"), V.end());
            }
            q.on("startNavigationSpan", (V, Y)=>{
                if (ah() !== q) return;
                if (Y?.isRedirect) {
                    qv && so.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), G(q, {
                        op: "navigation.redirect",
                        ...V
                    }, !1);
                    return;
                }
                $ = void 0, K(), _M().setPropagationContext({
                    traceId: mke(),
                    sampleRand: Math.random(),
                    propagationSpanId: JK() ? void 0 : gke()
                });
                const J = Kb();
                J.setPropagationContext({
                    traceId: mke(),
                    sampleRand: Math.random(),
                    propagationSpanId: JK() ? void 0 : gke()
                }), J.setSDKProcessingMetadata({
                    normalizedRequest: void 0
                }), G(q, {
                    op: "navigation",
                    ...V,
                    parentSpan: null,
                    forceTransaction: !0
                });
            }), q.on("startPageLoadSpan", (V, Y = {})=>{
                if (ah() !== q) return;
                K();
                const J = Y.sentryTrace || vqf("sentry-trace"), Q = Y.baggage || vqf("baggage"), te = ahr(J, Q), ee = Kb();
                ee.setPropagationContext(te), JK() || (ee.getPropagationContext().propagationSpanId = gke()), ee.setSDKProcessingMetadata({
                    normalizedRequest: B8l()
                }), G(q, {
                    op: "pageload",
                    ...V
                });
            }), q.on("endPageloadSpan", ()=>{
                O && H && (H.setAttribute(qje, "reportPageLoaded"), H.end());
            });
        },
        afterAllSetup (q) {
            let K = hke();
            if (P !== "off" && W5w(q, {
                linkPreviousTrace: P,
                consistentTraceSampling: M
            }), i1.location) {
                if (T) {
                    const V = zq();
                    gqf(q, {
                        name: i1.location.pathname,
                        startTime: V ? V / 1e3 : void 0,
                        attributes: {
                            [YF]: "url",
                            [KE]: "auto.pageload.browser"
                        }
                    });
                }
                I && KFt(({ to: V, from: Y })=>{
                    if (Y === void 0 && K?.indexOf(V) !== -1) {
                        K = void 0;
                        return;
                    }
                    K = void 0;
                    const J = Oun(V), Q = pLi(q), te = Q && A && Y5w(Q, $);
                    fqf(q, {
                        name: J?.pathname || i1.location.pathname,
                        attributes: {
                            [YF]: "url",
                            [KE]: "auto.navigation.browser"
                        }
                    }, {
                        url: V,
                        isRedirect: te
                    });
                });
            }
            g && $5w(), a && K5w(q, d, h, p, e), i && NKu(), uqf(q, {
                traceFetch: f,
                traceXHR: _,
                trackFetchStreamPerformance: b,
                tracePropagationTargets: q.getOptions().tracePropagationTargets,
                shouldCreateSpanForRequest: y,
                enableHTTPTimings: S,
                onRequestSpanStart: N,
                onRequestSpanEnd: U
            });
        }
    };
}), lUl = "_sentry_idleSpan", cUl = 1.5;

}
