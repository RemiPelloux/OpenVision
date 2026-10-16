import { iJ } from "./arrays.js";
import { WIc } from "./async.js";
import { ihi } from "./browser.js";
import { T7, Xke, lAe } from "./browserTracingIntegration.js";
import { kc } from "./buildFlags.js";
import { Eo } from "./cancellation.js";
import { Ghn, Wce, aqe, fI } from "./client.js";
import { Km } from "./composerMessageStorageService.js";
import { d1c, l1c, u1c } from "./consola.js";
import { ILt } from "./console-integration.js";
import { ppi } from "./constants_3.js";
import { G1c, H1c, ijr } from "./constants_4.js";
import { Z1c } from "./constants_5.js";
import { cjr, iTc, ljr, rTc } from "./constants_6.js";
import { $Lt, uTc } from "./constants_7.js";
import { Qh } from "./debug-build.js";
import { vqe } from "./debug-build_2.js";
import { zr } from "./debug-logger.js";
import { TEc } from "./dom.js";
import { sGr } from "./dynamicSamplingContext.js";
import { B3e, wEc } from "./elementTiming.js";
import { aIc, cIc, lIc, oIc, uIc } from "./extpath.js";
import { G3e, Gdt, Jhn, KVr, Qhn, ULt, Vdt, W3e, Wdt, Xhn, YVr, Zhn, _1c, b1c, cpi, dpi, epn, f1c, g1c, gqe, h1c, jdt, lpi, m1c, mAe, nJ, p1c, pAe, qVr, rge, upi, v1c, y1c, zVr } from "./gen-ai-attributes.js";
import { Kdt } from "./getActivationStart.js";
import { $Tc } from "./getCLS.js";
import { XTc } from "./getINP.js";
import { JTc } from "./getLCP.js";
import { ypn } from "./getNativeImplementation.js";
import { WLt } from "./getNavigationEntry.js";
import { wpi } from "./getVisibilityWatcher.js";
import { VIc, jIc } from "./global.js";
import { sA } from "./growthbook.js";
import { CWr, Sdt } from "./handlers.js";
import { Spi } from "./initUnique.js";
import { Api, Rpi, Y4, Zdt, gEc, gK, mD, vpn } from "./inp.js";
import { gpn, zLt } from "./instrument.js";
import { Owc } from "./internal_2.js";
import { xWr } from "./is.js";
import { _a } from "./iterator.js";
import { ZVr, npn, tpn } from "./messageTruncation.js";
import { uAe } from "./moduleMetadata.js";
import { gt } from "./network.js";
import { Txc } from "./nls.js";
import { Ykc } from "./normalize.js";
import { Ydt } from "./observe.js";
import { Ajr } from "./onHidden.js";
import { tEc } from "./onTTFB.js";
import { $hi } from "./parameterize.js";
import { A7, Bxc, Eu, Fxc, Jk, Nqr, Nxc, Oxc, Tqe, oJ, uS } from "./path_2.js";
import { d3 } from "./resources.js";
import { _Lt, _hn, gI, mK, nge } from "./scope.js";
import { Edt, Tdt, a1, jC, oqe, sqe, zL } from "./semanticAttributes.js";
import { ige } from "./sentryNonRecordingSpan.js";
import { ELt, Kce, Pu, cqe, iv, nv, pD, sR } from "./sentrySpan.js";
import { WGr } from "./server-runtime-client.js";
import { fhi, lqe } from "./spanUtils.js";
import { w0 } from "./spanstatus.js";
import { eqe } from "./stackStrategy.js";
import { K4, Zdi } from "./stacktrace.js";
import { hIc } from "./stream.js";
import { qdt } from "./supports.js";
import { Nhn, XB, jke, rqe } from "./trace.js";
import { Pie } from "./traceLifecycleProfiler.js";
import { by } from "./types.js";
import { exc } from "./types_2.js";
import { EIc, Ee, TIc, bge, hzr, pzr, xIc } from "./uri.js";
import { $Wr, HWr } from "./utils.js";
import { Fie, fAe } from "./utils_8.js";
import { A1c, B1c, D1c, E1c, F1c, I1c, JVr, L1c, M1c, N1c, O1c, P1c, R1c, U1c, ejr, gAe, gpi, mpi, njr, tjr, x1c } from "./vercel-ai-attributes.js";
import { Vke } from "./version.js";
import { on } from "./window.js";
import { Og } from "./worldwide.js";
import { Uie } from "./xhr.js";
var hWr = Object.defineProperty, $tg = Object.getOwnPropertyDescriptor, pWr = Object.getOwnPropertyNames, Wtg = Object.prototype.hasOwnProperty, okc = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), akc = (e)=>{
    throw TypeError(e);
}, Cc = (e, t)=>{
    for(var n in t)hWr(e, n, {
        get: t[n],
        enumerable: !0
    });
}, Gtg = (e, t, n, i)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let r of pWr(t))!Wtg.call(e, r) && r !== n && hWr(e, r, {
        get: ()=>t[r],
        enumerable: !(i = $tg(t, r)) || i.enumerable
    });
    return e;
};
export function bdt(e, t, n = Og) {
    const i = n.__SENTRY__ = n.__SENTRY__ || {}, r = i[Vke] = i[Vke] || {};
    return r[e] || (r[e] = t());
}
export function pK(e) {
    try {
        return !e || typeof e != "function" ? Zdi : e.name || Zdi;
    } catch  {
        return Zdi;
    }
}
export function N3e(e, t) {
    Sdt[e] = Sdt[e] || [], Sdt[e].push(t);
}
export function O3e(e, t) {
    if (!CWr[e]) {
        CWr[e] = !0;
        try {
            t();
        } catch (n) {
            Qh && zr.error(`Error while instrumenting ${e}`, n);
        }
    }
}
export function Hce(e, t) {
    const n = e && Sdt[e];
    if (n) for (const i of n)try {
        i(t);
    } catch (r) {
        Qh && zr.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pK(i)}
Error:`, r);
    }
}
export function qke(e) {
    switch(xWr.call(e)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return sAe(e, Error);
    }
}
export function mLt(e, t) {
    return xWr.call(e) === `[object ${t}]`;
}
export function JQ(e) {
    return mLt(e, "String");
}
export function Jje(e) {
    return typeof Event < "u" && sAe(e, Event);
}
export function hkc(e) {
    return typeof Element < "u" && sAe(e, Element);
}
export function pkc(e) {
    return mLt(e, "RegExp");
}
export function mkc(e) {
    return mK(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
export function sAe(e, t) {
    try {
        return e instanceof t;
    } catch  {
        return !1;
    }
}
export function EWr(e) {
    return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
export function gkc(e) {
    return typeof Request < "u" && sAe(e, Request);
}
export function nhi(e) {
    if (!ihi.HTMLElement) return null;
    let t = e;
    const n = 5;
    for(let i = 0; i < n; i++){
        if (!t) return null;
        if (t instanceof HTMLElement) {
            if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
            if (t.dataset.sentryElement) return t.dataset.sentryElement;
        }
        t = t.parentNode;
    }
    return null;
}
export function jH(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch  {
        Qh && zr.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
export function IWr(e) {
    if (qke(e)) return {
        message: e.message,
        name: e.name,
        stack: e.stack,
        ...bkc(e)
    };
    if (Jje(e)) {
        const t = {
            type: e.type,
            target: _kc(e.target),
            currentTarget: _kc(e.currentTarget),
            ...bkc(e)
        };
        return typeof CustomEvent < "u" && sAe(e, CustomEvent) && (t.detail = e.detail), t;
    } else return e;
}
function _kc(e) {
    try {
        return hkc(e) ? gK(e) : Object.prototype.toString.call(e);
    } catch  {
        return "<unknown>";
    }
}
function bkc(e) {
    if (typeof e == "object" && e !== null) {
        const t = {};
        for(const n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    } else return {};
}
export function vhn(e, t, n = !1) {
    return JQ(e) ? pkc(t) ? t.test(e) : JQ(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
export function CV(e, t = [], n = !1) {
    return t.some((i)=>vhn(e, i, n));
}
function gng(e) {
    try {
        const t = Og.WeakRef;
        if (typeof t == "function") return new t(e);
    } catch  {}
    return e;
}
export function Nkc(e, t, n) {
    e && (jH(e, HWr, gng(n)), jH(e, $Wr, t));
}
export function ZWr(e, t) {
    const n = e[fhi] || e;
    jH(t, fhi, n), e[lqe] ? e[lqe].add(t) : jH(e, lqe, new Set([
        t
    ]));
}
export function bhi(e, t) {
    jH(e, sGr, t);
}
export function TV(e, t = 100, n = 1 / 0) {
    try {
        return oGr("", e, t, n);
    } catch (i) {
        return {
            ERROR: `**non-serializable** (${i})`
        };
    }
}
function oGr(e, t, n = 1 / 0, i = 1 / 0, r = Nng()) {
    const [s, o] = r;
    if (t == null || [
        "boolean",
        "string"
    ].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
    if (Rng(t)) return "[SolidStore]";
    const a = Ang(e, t);
    if (!a.startsWith("[object ")) return a;
    if (t.__sentry_skip_normalization__) return t;
    const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
    if (c === 0) return a.replace("object ", "");
    if (s(t)) return "[Circular ~]";
    const l = t;
    if (l && typeof l.toJSON == "function") try {
        const g = l.toJSON();
        return oGr("", g, c - 1, i, r);
    } catch  {}
    const u = Array.isArray(t) ? [] : {};
    let h = 0;
    const p = IWr(t);
    for(const g in p){
        if (!Object.prototype.hasOwnProperty.call(p, g)) continue;
        if (h >= i) {
            u[g] = "[MaxProperties ~]";
            break;
        }
        const f = Object.getOwnPropertyDescriptor(p, g);
        if (g === "children" && f && !("value" in f)) {
            u[g] = "[Getter]", h++;
            continue;
        }
        const v = p[g];
        u[g] = oGr(g, v, c - 1, i, r), h++;
    }
    return o(t), u;
}
function Ang(e, t) {
    try {
        if (e === "domain" && t && typeof t == "object" && t._events) return "[Domain]";
        if (e === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && t === global) return "[Global]";
        if (typeof window < "u" && t === window) return "[Window]";
        if (typeof document < "u" && t === document) return "[Document]";
        if (EWr(t)) return "[VueViewModel]";
        if (mkc(t)) return "[SyntheticEvent]";
        if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
        if (typeof t == "function") return `[Function: ${pK(t)}]`;
        if (typeof t == "symbol") return `[${String(t)}]`;
        if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
        const n = Dng(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
    } catch (n) {
        return `**non-serializable** (${n})`;
    }
}
function Rng(e) {
    if (e === null || typeof e != "object") return !1;
    try {
        return Object.getOwnPropertySymbols(e).some((t)=>t.description === Ykc);
    } catch  {
        return !1;
    }
}
function Dng(e) {
    const t = Object.getPrototypeOf(e);
    return t?.constructor ? t.constructor.name : "null prototype";
}
function Nng() {
    const e = new WeakSet;
    function t(i) {
        return e.has(i) ? !0 : (e.add(i), !1);
    }
    function n(i) {
        e.delete(i);
    }
    return [
        t,
        n
    ];
}
export function iwc(e) {
    if (!Qh) return;
    const { description: t = "< unknown name >", op: n = "< unknown op >", parent_span_id: i } = iv(e), { spanId: r } = e.spanContext(), s = lAe(e), o = pD(e), a = o === e, c = `[Tracing] Starting ${s ? "sampled" : "unsampled"} ${a ? "root " : ""}span`, l = [
        `op: ${n}`,
        `name: ${t}`,
        `ID: ${r}`
    ];
    if (i && l.push(`parent ID: ${i}`), !a) {
        const { op: u, description: h } = iv(o);
        l.push(`root ID: ${o.spanContext().spanId}`), u && l.push(`root op: ${u}`), h && l.push(`root description: ${h}`);
    }
    zr.log(`${c}
  ${l.join(`
  `)}`);
}
export function pGr(e, t, n, i = mD()) {
    const r = i && pD(i);
    r && (Qh && zr.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), r.addEvent(e, {
        [Edt]: t,
        [Tdt]: n
    }));
}
export function Phn(e, t, n = ()=>{}, i = ()=>{}) {
    let r;
    try {
        r = e();
    } catch (s) {
        throw t(s), n(), s;
    }
    return Hng(r, t, n, i);
}
function Hng(e, t, n, i) {
    return eqe(e) ? e.then((r)=>(n(), i(r), r), (r)=>{
        throw t(r), n(), r;
    }) : (n(), i(e), e);
}
export function cwc(e, t, n) {
    if (!T7(e)) return [
        !1
    ];
    let i, r;
    typeof e.tracesSampler == "function" ? (r = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (a)=>typeof t.parentSampleRate == "number" ? t.parentSampleRate : typeof t.parentSampled == "boolean" ? Number(t.parentSampled) : a
    }), i = !0) : t.parentSampled !== void 0 ? r = t.parentSampled : typeof e.tracesSampleRate < "u" && (r = e.tracesSampleRate, i = !0);
    const s = aqe(r);
    if (s === void 0) return Qh && zr.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [
        !1
    ];
    if (!s) return Qh && zr.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [
        !1,
        s,
        i
    ];
    const o = n < s;
    return o || Qh && zr.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [
        o,
        s,
        i
    ];
}
export function Yke(e, t) {
    const n = Lhn();
    if (n.startSpanManual) return n.startSpanManual(e, t);
    const i = yGr(e), { forceTransaction: r, parentSpan: s, scope: o } = e, a = o?.clone();
    return XB(a, ()=>dwc(s)(()=>{
            const l = nv(), u = SGr(l, s), p = e.onlyIfParent && !u ? new ige : bGr({
                parentSpan: u,
                spanArguments: i,
                forceTransaction: r,
                scope: l
            });
            return nge(l, p), Phn(()=>t(p, ()=>p.end()), ()=>{
                const { status: g } = iv(p);
                p.isRecording() && (!g || g === "ok") && p.setStatus({
                    code: w0,
                    message: "internal_error"
                });
            });
        }));
}
export function Ddt(e, t) {
    const n = Lhn();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : XB((i)=>(nge(i, e || void 0), t(i)));
}
export function bGr({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: i }) {
    if (!T7()) {
        const o = new ige;
        if (n || !e) {
            const a = {
                sampled: "false",
                sample_rate: "0",
                transaction: t.name,
                ...Kce(o)
            };
            bhi(o, a);
        }
        return o;
    }
    const r = fI();
    let s;
    if (e && !n) s = Wng(e, i, t), ZWr(e, s);
    else if (e) {
        const o = Kce(e), { traceId: a, spanId: c } = e.spanContext(), l = lAe(e);
        s = uwc({
            traceId: a,
            parentSpanId: c,
            ...t
        }, i, l), bhi(s, o);
    } else {
        const { traceId: o, dsc: a, parentSpanId: c, sampled: l } = {
            ...r.getPropagationContext(),
            ...i.getPropagationContext()
        };
        s = uwc({
            traceId: o,
            parentSpanId: c,
            ...t
        }, i, l), a && bhi(s, a);
    }
    return iwc(s), Nkc(s, i, r), s;
}
export function yGr(e) {
    const n = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const i = {
            ...n
        };
        return i.startTimestamp = cqe(e.startTime), delete i.startTime, i;
    }
    return n;
}
export function Lhn() {
    const e = jke();
    return rqe(e);
}
function uwc(e, t, n) {
    const i = Pu(), r = i?.getOptions() || {}, { name: s = "" } = e, o = {
        spanAttributes: {
            ...e.attributes
        },
        spanName: s,
        parentSampled: n
    };
    i?.emit("beforeSampling", o, {
        decision: !1
    });
    const a = o.parentSampled ?? n, c = o.spanAttributes, l = t.getPropagationContext(), [u, h, p] = t.getScopeData().sdkProcessingMetadata[Nhn] ? [
        !1
    ] : cwc(r, {
        name: s,
        parentSampled: a,
        attributes: c,
        parentSampleRate: aqe(l.dsc?.sample_rate)
    }, l.sampleRand), g = new ELt({
        ...e,
        attributes: {
            [zL]: "custom",
            [sqe]: h !== void 0 && p ? h : void 0,
            ...c
        },
        sampled: u
    });
    return !u && i && (Qh && zr.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), i.recordDroppedEvent("sample_rate", "transaction")), i && i.emit("spanStart", g), g;
}
function Wng(e, t, n) {
    const { spanId: i, traceId: r } = e.spanContext(), s = t.getScopeData().sdkProcessingMetadata[Nhn] ? !1 : lAe(e), o = s ? new ELt({
        ...n,
        parentSpanId: i,
        traceId: r,
        sampled: s
    }) : new ige({
        traceId: r
    });
    ZWr(e, o);
    const a = Pu();
    return a && (a.emit("spanStart", o), n.endTimestamp && a.emit("spanEnd", o)), o;
}
export function SGr(e, t) {
    if (t) return t;
    if (t === null) return;
    const n = _Lt(e);
    if (!n) return;
    const i = Pu();
    return (i ? i.getOptions() : {}).parentSpanIsAlwaysRootSpan ? pD(n) : n;
}
export function dwc(e) {
    return e !== void 0 ? (t)=>Ddt(e, t) : (t)=>t();
}
export function $3e(e, t) {
    const { extra: n, tags: i, user: r, contexts: s, level: o, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: l, eventProcessors: u, attachments: h, propagationContext: p, transactionName: g, span: f } = t;
    xhi(e, "extra", n), xhi(e, "tags", i), xhi(e, "user", r), xhi(e, "contexts", s), e.sdkProcessingMetadata = _hn(e.sdkProcessingMetadata, a, 2), o && (e.level = o), g && (e.transactionName = g), f && (e.span = f), c.length && (e.breadcrumbs = [
        ...e.breadcrumbs,
        ...c
    ]), l.length && (e.fingerprint = [
        ...e.fingerprint,
        ...l
    ]), u.length && (e.eventProcessors = [
        ...e.eventProcessors,
        ...u
    ]), h.length && (e.attachments = [
        ...e.attachments,
        ...h
    ]), e.propagationContext = {
        ...e.propagationContext,
        ...p
    };
}
function xhi(e, t, n) {
    e[t] = _hn(e[t], n, 1);
}
export async function NGr(e) {
    const t = Pu();
    return t ? t.flush(e) : (Qh && zr.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
function yig(e) {
    switch(typeof e){
        case "number":
            return Number.isInteger(e) ? {
                value: e,
                type: "integer"
            } : {
                value: e,
                type: "double"
            };
        case "boolean":
            return {
                value: e,
                type: "boolean"
            };
        case "string":
            return {
                value: e,
                type: "string"
            };
        default:
            {
                let t = "";
                try {
                    t = JSON.stringify(e) ?? "";
                } catch  {}
                return {
                    value: t,
                    type: "string"
                };
            }
    }
}
function H3e(e, t, n, i = !0) {
    n && (i || !(t in e)) && (e[t] = n);
}
export function Pwc(e, t) {
    const n = jGr(), i = Nwc(e);
    i === void 0 ? n.set(e, [
        t
    ]) : (n.set(e, [
        ...i,
        t
    ]), i.length >= Owc && Ghn(e, i));
}
function Sig(e, t, n) {
    const { release: i, environment: r } = t.getOptions(), s = {
        ...e.attributes
    }, { user: { id: o, email: a, username: c } } = wig(n);
    H3e(s, "user.id", o, !1), H3e(s, "user.email", a, !1), H3e(s, "user.name", c, !1), H3e(s, "sentry.release", i), H3e(s, "sentry.environment", r);
    const { name: l, version: u } = t.getSdkMetadata()?.sdk ?? {};
    H3e(s, "sentry.sdk.name", l), H3e(s, "sentry.sdk.version", u);
    const h = t.getIntegrationByName("Replay"), p = h?.getReplayId(!0);
    return H3e(s, "sentry.replay_id", p), p && h?.getRecordingMode() === "buffer" && H3e(s, "sentry._internal.replay_is_buffering", !0), {
        ...e,
        attributes: s
    };
}
function kig(e, t, n) {
    const i = {};
    for(const c in e.attributes)e.attributes[c] !== void 0 && (i[c] = yig(e.attributes[c]));
    const [, r] = WGr(t, n), s = _Lt(n), o = s ? s.spanContext().traceId : r?.trace_id, a = s ? s.spanContext().spanId : void 0;
    return {
        timestamp: sR(),
        trace_id: o ?? "",
        span_id: a,
        name: e.name,
        type: e.type,
        unit: e.unit,
        value: e.value,
        attributes: i
    };
}
export function Lwc(e, t) {
    const n = t?.scope ?? nv(), i = t?.captureSerializedMetric ?? Pwc, r = n?.getClient() ?? Pu();
    if (!r) {
        Qh && zr.warn("No client available to capture metric.");
        return;
    }
    const { _experiments: s, enableMetrics: o, beforeSendMetric: a } = r.getOptions();
    if (!(o ?? s?.enableMetrics ?? !0)) {
        Qh && zr.warn("metrics option not enabled, metric will not be captured.");
        return;
    }
    const l = Sig(e, r, n), u = a || s?.beforeSendMetric, h = u ? u(l) : l;
    if (!h) {
        Qh && zr.log("`beforeSendMetric` returned `null`, will not send metric.");
        return;
    }
    const p = kig(h, r, n);
    Qh && zr.log("[Metric]", p), i(r, p), r.emit("afterCaptureMetric", l);
}
export function Nwc(e) {
    return jGr().get(e);
}
function wig(e) {
    const t = Pie().getScopeData();
    return $3e(t, fI().getScopeData()), $3e(t, e.getScopeData()), t;
}
export function jGr() {
    return bdt("clientToMetricBufferMap", ()=>new WeakMap);
}
export function Lie(e) {
    if (!e) return {};
    const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    const n = t[6] || "", i = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: i,
        relative: t[5] + n + i
    };
}
function BLt(e, t, n, i, r) {
    ILt({
        level: e,
        message: t,
        attributes: n,
        severityNumber: r
    }, i);
}
export function fog(e, t, { scope: n } = {}) {
    BLt("trace", e, t, n);
}
export function vog(e, t, { scope: n } = {}) {
    BLt("debug", e, t, n);
}
export function _og(e, t, { scope: n } = {}) {
    BLt("info", e, t, n);
}
export function bog(e, t, { scope: n } = {}) {
    BLt("warn", e, t, n);
}
export function yog(e, t, { scope: n } = {}) {
    BLt("error", e, t, n);
}
export function Sog(e, t, { scope: n } = {}) {
    BLt("fatal", e, t, n);
}
export function WVr(e, t, n) {
    return "util" in Og && typeof Og.util.format == "function" ? Og.util.format(...e) : wog(e, t, n);
}
function wog(e, t, n) {
    return e.map((i)=>Wce(i) ? String(i) : JSON.stringify(TV(i, t, n))).join(" ");
}
export function Cog(e) {
    return /%[sdifocO]/.test(e);
}
export function Tog(e, t) {
    const n = {}, i = new Array(t.length).fill("{}").join(" ");
    return n["sentry.message.template"] = `${e} ${i}`, t.forEach((r, s)=>{
        n[`sentry.message.parameter.${s}`] = r;
    }), n;
}
export var api = {};
Cc(api, {
    count: ()=>xog,
    distribution: ()=>Aog,
    gauge: ()=>Iog
});
function VVr(e, t, n, i) {
    Lwc({
        type: e,
        name: t,
        value: n,
        unit: i?.unit,
        attributes: i?.attributes
    }, {
        scope: i?.scope
    });
}
function xog(e, t = 1, n) {
    VVr("counter", e, t, n);
}
function Iog(e, t, n) {
    VVr("gauge", e, t, n);
}
function Aog(e, t, n) {
    VVr("distribution", e, t, n);
}
export function jVr(e = {}) {
    const t = new Set(e.levels ?? l1c), n = e.client;
    return {
        log (i) {
            const { type: r, level: s, message: o, args: a, tag: c, date: l, ...u } = i, h = n || Pu();
            if (!h) return;
            const p = Dog(r, s);
            if (!t.has(p)) return;
            const { normalizeDepth: g = 3, normalizeMaxBreadth: f = 1e3 } = h.getOptions(), v = [];
            o && v.push(o), a && a.length > 0 && v.push(WVr(a, g, f));
            const b = v.join(" ");
            u["sentry.origin"] = "auto.log.consola", c && (u["consola.tag"] = c), r && (u["consola.type"] = r), s != null && typeof s == "number" && (u["consola.level"] = s), ILt({
                level: p,
                message: b,
                attributes: u
            });
        }
    };
}
function Dog(e, t) {
    if (e === "verbose") return "debug";
    if (e === "silent") return "trace";
    if (e) {
        const n = u1c[e];
        if (n) return n;
    }
    if (typeof t == "number") {
        const n = d1c[t];
        if (n) return n;
    }
    return "info";
}
function XVr(e, t) {
    if (tpn(e) <= t) return e;
    let n = 0, i = e.length, r = "";
    for(; n <= i;){
        const s = Math.floor((n + i) / 2), o = e.slice(0, s);
        tpn(o) <= t ? (r = o, n = s + 1) : i = s - 1;
    }
    return r;
}
function Pog(e) {
    return typeof e == "string" ? e : e.text;
}
function S1c(e, t) {
    return typeof e == "string" ? t : {
        ...e,
        text: t
    };
}
function Log(e) {
    return e !== null && typeof e == "object" && "content" in e && typeof e.content == "string";
}
function Nog(e) {
    return e !== null && typeof e == "object" && "parts" in e && Array.isArray(e.parts) && e.parts.length > 0;
}
function Oog(e, t) {
    const n = {
        ...e,
        content: ""
    }, i = npn(n), r = t - i;
    if (r <= 0) return [];
    const s = XVr(e.content, r);
    return [
        {
            ...e,
            content: s
        }
    ];
}
function Fog(e, t) {
    const { parts: n } = e, i = n.map((a)=>S1c(a, "")), r = npn({
        ...e,
        parts: i
    });
    let s = t - r;
    if (s <= 0) return [];
    const o = [];
    for (const a of n){
        const c = Pog(a), l = tpn(c);
        if (l <= s) o.push(a), s -= l;
        else if (o.length === 0) {
            const u = XVr(c, s);
            u && o.push(S1c(a, u));
            break;
        } else break;
    }
    return o.length > 0 ? [
        {
            ...e,
            parts: o
        }
    ] : [];
}
function Bog(e, t) {
    return !e || typeof e != "object" ? [] : Log(e) ? Oog(e, t) : Nog(e) ? Fog(e, t) : [];
}
function Uog(e, t) {
    if (!Array.isArray(e) || e.length === 0 || npn(e) <= t) return e;
    const i = e.map(npn);
    let r = 0, s = e.length;
    for(let o = e.length - 1; o >= 0; o--){
        const a = i[o];
        if (a && r + a > t) break;
        a && (r += a), s = o;
    }
    if (s === e.length) {
        const o = e[e.length - 1];
        return Bog(o, t);
    }
    return e.slice(s);
}
function $og(e) {
    return Uog(e, ZVr);
}
function Hog(e) {
    return XVr(e, ZVr);
}
function ipn(e) {
    return e.includes("messages") ? "messages" : e.includes("completions") ? "completions" : e.includes("models") ? "models" : e.includes("chat") ? "chat" : e.split(".").pop() || "unknown";
}
function hpi(e) {
    return `gen_ai.${ipn(e)}`;
}
function k1c(e, t) {
    return e ? `${e}.${t}` : t;
}
function QVr(e, t, n, i, r) {
    if (t !== void 0 && e.setAttributes({
        [W3e]: t
    }), n !== void 0 && e.setAttributes({
        [G3e]: n
    }), t !== void 0 || n !== void 0 || i !== void 0 || r !== void 0) {
        const s = (t ?? 0) + (n ?? 0) + (i ?? 0) + (r ?? 0);
        e.setAttributes({
            [Vdt]: s
        });
    }
}
function fqe(e) {
    if (typeof e == "string") return Hog(e);
    if (Array.isArray(e)) {
        const t = $og(e);
        return JSON.stringify(t);
    }
    return JSON.stringify(e);
}
function Gog(e, t) {
    const n = e.parent_span_id;
    if (!n) return;
    const i = e.data[W3e], r = e.data[G3e];
    if (typeof i == "number" || typeof r == "number") {
        const s = t.get(n) || {
            inputTokens: 0,
            outputTokens: 0
        };
        typeof i == "number" && (s.inputTokens += i), typeof r == "number" && (s.outputTokens += r), t.set(n, s);
    }
}
function C1c(e, t) {
    const n = t.get(e.span_id);
    !n || !e.data || (n.inputTokens > 0 && (e.data[W3e] = n.inputTokens), n.outputTokens > 0 && (e.data[G3e] = n.outputTokens), (n.inputTokens > 0 || n.outputTokens > 0) && (e.data["gen_ai.usage.total_tokens"] = n.inputTokens + n.outputTokens));
}
export function Vog(e) {
    return ppi.get(e);
}
export function jog(e) {
    ppi.delete(e);
}
function $1c(e, t) {
    e.setAttribute(jC, t);
}
function zog(e) {
    const { data: t, description: n } = iv(e);
    if (!n) return;
    if (t[tjr] && t[njr] && n === "ai.toolCall") {
        Xog(e, t);
        return;
    }
    const i = t[gAe], r = t[M1c];
    typeof i != "string" || typeof r != "string" || !i || !r || Zog(e, n, t);
}
function Kog(e) {
    if (e.type === "transaction" && e.spans) {
        const t = new Map;
        for (const i of e.spans)Yog(i), Gog(i, t);
        for (const i of e.spans)i.op === "gen_ai.invoke_agent" && C1c(i, t);
        const n = e.contexts?.trace;
        n && n.op === "gen_ai.invoke_agent" && C1c(n, t);
    }
    return e;
}
function Yog(e) {
    const { data: t, origin: n } = e;
    if (n === "auto.vercelai.otel") {
        Nie(t, O1c, gpi), Nie(t, F1c, mpi), Nie(t, L1c, ULt), typeof t[gpi] == "number" && typeof t[mpi] == "number" && (t["gen_ai.usage.total_tokens"] = t[gpi] + t[mpi]), Nie(t, R1c, "gen_ai.request.messages"), Nie(t, I1c, "gen_ai.response.text"), Nie(t, A1c, "gen_ai.response.tool_calls"), Nie(t, x1c, "gen_ai.response.object"), Nie(t, D1c, "gen_ai.request.available_tools"), Nie(t, B1c, "gen_ai.tool.input"), Nie(t, U1c, "gen_ai.tool.output"), Nie(t, E1c, "gen_ai.request.schema"), Jog(t);
        for (const i of Object.keys(t))i.startsWith("ai.") && Nie(t, i, `vercel.${i}`);
    }
}
function Nie(e, t, n) {
    e[t] != null && (e[n] = e[t], delete e[t]);
}
function Xog(e, t) {
    $1c(e, "auto.vercelai.otel"), e.setAttribute(a1, "gen_ai.execute_tool"), Nie(t, tjr, "gen_ai.tool.name"), Nie(t, njr, "gen_ai.tool.call.id");
    const n = t["gen_ai.tool.call.id"];
    typeof n == "string" && ppi.set(n, e), t["gen_ai.tool.type"] || e.setAttribute("gen_ai.tool.type", "function");
    const i = t["gen_ai.tool.name"];
    i && e.updateName(`execute_tool ${i}`);
}
function Zog(e, t, n) {
    $1c(e, "auto.vercelai.otel");
    const i = t.replace("ai.", "");
    e.setAttribute("ai.pipeline.name", i), e.updateName(i);
    const r = n[N1c];
    if (r && typeof r == "string" && (e.updateName(`${i} ${r}`), e.setAttribute("gen_ai.function_id", r)), n[JVr]) {
        const s = fqe(n[JVr]);
        e.setAttribute("gen_ai.prompt", s);
    }
    if (n[gAe] && !n[ejr] && e.setAttribute(ejr, n[gAe]), e.setAttribute("ai.streaming", t.includes("stream")), t === "ai.generateText") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.generateText.doGenerate") {
        e.setAttribute(a1, "gen_ai.generate_text"), e.updateName(`generate_text ${n[gAe]}`);
        return;
    }
    if (t === "ai.streamText") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.streamText.doStream") {
        e.setAttribute(a1, "gen_ai.stream_text"), e.updateName(`stream_text ${n[gAe]}`);
        return;
    }
    if (t === "ai.generateObject") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.generateObject.doGenerate") {
        e.setAttribute(a1, "gen_ai.generate_object"), e.updateName(`generate_object ${n[gAe]}`);
        return;
    }
    if (t === "ai.streamObject") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.streamObject.doStream") {
        e.setAttribute(a1, "gen_ai.stream_object"), e.updateName(`stream_object ${n[gAe]}`);
        return;
    }
    if (t === "ai.embed") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.embed.doEmbed") {
        e.setAttribute(a1, "gen_ai.embed"), e.updateName(`embed ${n[gAe]}`);
        return;
    }
    if (t === "ai.embedMany") {
        e.setAttribute(a1, "gen_ai.invoke_agent");
        return;
    }
    if (t === "ai.embedMany.doEmbed") {
        e.setAttribute(a1, "gen_ai.embed_many"), e.updateName(`embed_many ${n[gAe]}`);
        return;
    }
    if (t.startsWith("ai.stream")) {
        e.setAttribute(a1, "ai.run");
        return;
    }
}
export function Qog(e) {
    e.on("spanStart", zog), e.addEventProcessor(Object.assign(Kog, {
        id: "VercelAiEventProcessor"
    }));
}
function Jog(e) {
    const t = e[P1c];
    if (t) try {
        const n = JSON.parse(t);
        if (n.openai && (Qke(e, ULt, n.openai.cachedPromptTokens), Qke(e, "gen_ai.usage.output_tokens.reasoning", n.openai.reasoningTokens), Qke(e, "gen_ai.usage.output_tokens.prediction_accepted", n.openai.acceptedPredictionTokens), Qke(e, "gen_ai.usage.output_tokens.prediction_rejected", n.openai.rejectedPredictionTokens), Qke(e, "gen_ai.conversation.id", n.openai.responseId)), n.anthropic) {
            const i = n.anthropic.usage?.cache_read_input_tokens ?? n.anthropic.cacheReadInputTokens;
            Qke(e, ULt, i);
            const r = n.anthropic.usage?.cache_creation_input_tokens ?? n.anthropic.cacheCreationInputTokens;
            Qke(e, zVr, r);
        }
        n.bedrock?.usage && (Qke(e, ULt, n.bedrock.usage.cacheReadInputTokens), Qke(e, zVr, n.bedrock.usage.cacheWriteInputTokens)), n.deepseek && (Qke(e, ULt, n.deepseek.promptCacheHitTokens), Qke(e, "gen_ai.usage.input_tokens.cache_miss", n.deepseek.promptCacheMissTokens));
    } catch  {}
}
function Qke(e, t, n) {
    n != null && (e[t] = n);
}
function rjr(e) {
    return e.includes("chat.completions") ? KVr.CHAT : e.includes("responses") ? KVr.RESPONSES : e.split(".").pop() || "unknown";
}
function V1c(e) {
    return `gen_ai.${rjr(e)}`;
}
function tag(e) {
    return H1c.includes(e);
}
function nag(e, t) {
    return e ? `${e}.${t}` : t;
}
function iag(e) {
    return e !== null && typeof e == "object" && "object" in e && e.object === "chat.completion";
}
function rag(e) {
    return e !== null && typeof e == "object" && "object" in e && e.object === "response";
}
function sag(e) {
    return e !== null && typeof e == "object" && "type" in e && typeof e.type == "string" && e.type.startsWith("response.");
}
function oag(e) {
    return e !== null && typeof e == "object" && "object" in e && e.object === "chat.completion.chunk";
}
function sjr(e, t, n, i) {
    t !== void 0 && e.setAttributes({
        [y1c]: t,
        [W3e]: t
    }), n !== void 0 && e.setAttributes({
        [b1c]: n,
        [G3e]: n
    }), i !== void 0 && e.setAttributes({
        [Vdt]: i
    });
}
function ojr(e, t, n, i) {
    e.setAttributes({
        [f1c]: t,
        [Gdt]: t
    }), e.setAttributes({
        [v1c]: n,
        [Wdt]: n
    }), e.setAttributes({
        [_1c]: new Date(i * 1e3).toISOString()
    });
}
function aag(e, t) {
    for (const n of e){
        const i = n.index;
        if (!(i === void 0 || !n.function)) if (!(i in t.chatCompletionToolCalls)) t.chatCompletionToolCalls[i] = {
            ...n,
            function: {
                name: n.function.name,
                arguments: n.function.arguments || ""
            }
        };
        else {
            const r = t.chatCompletionToolCalls[i];
            n.function.arguments && r?.function && (r.function.arguments += n.function.arguments);
        }
    }
}
function cag(e, t, n) {
    t.responseId = e.id ?? t.responseId, t.responseModel = e.model ?? t.responseModel, t.responseTimestamp = e.created ?? t.responseTimestamp, e.usage && (t.promptTokens = e.usage.prompt_tokens, t.completionTokens = e.usage.completion_tokens, t.totalTokens = e.usage.total_tokens);
    for (const i of e.choices ?? [])n && (i.delta?.content && t.responseTexts.push(i.delta.content), i.delta?.tool_calls && aag(i.delta.tool_calls, t)), i.finish_reason && t.finishReasons.push(i.finish_reason);
}
function lag(e, t, n, i) {
    if (!(e && typeof e == "object")) {
        t.eventTypes.push("unknown:non-object");
        return;
    }
    if (e instanceof Error) {
        i.setStatus({
            code: w0,
            message: "internal_error"
        }), Km(e, {
            mechanism: {
                handled: !1,
                type: "auto.ai.openai.stream-response"
            }
        });
        return;
    }
    if (!("type" in e)) return;
    const r = e;
    if (!G1c.includes(r.type)) {
        t.eventTypes.push(r.type);
        return;
    }
    if (n && (r.type === "response.output_item.done" && "item" in r && t.responsesApiToolCalls.push(r.item), r.type === "response.output_text.delta" && "delta" in r && r.delta)) {
        t.responseTexts.push(r.delta);
        return;
    }
    if ("response" in r) {
        const { response: s } = r;
        t.responseId = s.id ?? t.responseId, t.responseModel = s.model ?? t.responseModel, t.responseTimestamp = s.created_at ?? t.responseTimestamp, s.usage && (t.promptTokens = s.usage.input_tokens, t.completionTokens = s.usage.output_tokens, t.totalTokens = s.usage.total_tokens), s.status && t.finishReasons.push(s.status), n && s.output_text && t.responseTexts.push(s.output_text);
    }
}
async function* uag(e, t, n) {
    const i = {
        eventTypes: [],
        responseTexts: [],
        finishReasons: [],
        responseId: "",
        responseModel: "",
        responseTimestamp: 0,
        promptTokens: void 0,
        completionTokens: void 0,
        totalTokens: void 0,
        chatCompletionToolCalls: {},
        responsesApiToolCalls: []
    };
    try {
        for await (const r of e)oag(r) ? cag(r, i, n) : sag(r) && lag(r, i, n, t), yield r;
    } finally{
        ojr(t, i.responseId, i.responseModel, i.responseTimestamp), sjr(t, i.promptTokens, i.completionTokens, i.totalTokens), t.setAttributes({
            [epn]: !0
        }), i.finishReasons.length && t.setAttributes({
            [gqe]: JSON.stringify(i.finishReasons)
        }), n && i.responseTexts.length && t.setAttributes({
            [rge]: i.responseTexts.join("")
        });
        const s = [
            ...Object.values(i.chatCompletionToolCalls),
            ...i.responsesApiToolCalls
        ];
        s.length > 0 && t.setAttributes({
            [mAe]: JSON.stringify(s)
        }), t.end();
    }
}
function hag(e, t) {
    const n = {
        [Xhn]: "openai",
        [jdt]: rjr(t),
        [jC]: "auto.ai.openai"
    };
    if (e.length > 0 && typeof e[0] == "object" && e[0] !== null) {
        const i = e[0], r = Array.isArray(i.tools) ? i.tools : [], o = i.web_search_options && typeof i.web_search_options == "object" ? [
            {
                type: "web_search_options",
                ...i.web_search_options
            }
        ] : [], a = [
            ...r,
            ...o
        ];
        a.length > 0 && (n[dpi] = JSON.stringify(a));
    }
    if (e.length > 0 && typeof e[0] == "object" && e[0] !== null) {
        const i = e[0];
        n[nJ] = i.model ?? "unknown", "temperature" in i && (n[Zhn] = i.temperature), "top_p" in i && (n[Jhn] = i.top_p), "frequency_penalty" in i && (n[Qhn] = i.frequency_penalty), "presence_penalty" in i && (n[upi] = i.presence_penalty), "stream" in i && (n[cpi] = i.stream);
    } else n[nJ] = "unknown";
    return n;
}
function pag(e, t, n) {
    if (ojr(e, t.id, t.model, t.created), t.usage && sjr(e, t.usage.prompt_tokens, t.usage.completion_tokens, t.usage.total_tokens), Array.isArray(t.choices)) {
        const i = t.choices.map((r)=>r.finish_reason).filter((r)=>r !== null);
        if (i.length > 0 && e.setAttributes({
            [gqe]: JSON.stringify(i)
        }), n) {
            const r = t.choices.map((s)=>s.message?.tool_calls).filter((s)=>Array.isArray(s) && s.length > 0).flat();
            r.length > 0 && e.setAttributes({
                [mAe]: JSON.stringify(r)
            });
        }
    }
}
function mag(e, t, n) {
    if (ojr(e, t.id, t.model, t.created_at), t.status && e.setAttributes({
        [gqe]: JSON.stringify([
            t.status
        ])
    }), t.usage && sjr(e, t.usage.input_tokens, t.usage.output_tokens, t.usage.total_tokens), n) {
        const i = t;
        if (Array.isArray(i.output) && i.output.length > 0) {
            const r = i.output.filter((s)=>typeof s == "object" && s !== null && s.type === "function_call");
            r.length > 0 && e.setAttributes({
                [mAe]: JSON.stringify(r)
            });
        }
    }
}
function gag(e, t, n) {
    if (!t || typeof t != "object") return;
    const i = t;
    if (iag(i)) {
        if (pag(e, i, n), n && i.choices?.length) {
            const r = i.choices.map((s)=>s.message?.content || "");
            e.setAttributes({
                [rge]: JSON.stringify(r)
            });
        }
    } else rag(i) && (mag(e, i, n), n && i.output_text && e.setAttributes({
        [rge]: i.output_text
    }));
}
function q1c(e, t) {
    if ("messages" in t) {
        const n = fqe(t.messages);
        e.setAttributes({
            [pAe]: n
        });
    }
    if ("input" in t) {
        const n = fqe(t.input);
        e.setAttributes({
            [pAe]: n
        });
    }
}
function fag() {
    const t = nv().getClient(), n = t?.getIntegrationByName(ijr), i = n ? !!t?.getOptions().sendDefaultPii : !1;
    return {
        recordInputs: n?.options?.recordInputs ?? i,
        recordOutputs: n?.options?.recordOutputs ?? i
    };
}
function vag(e, t, n, i) {
    return async function(...s) {
        const o = i || fag(), a = hag(s, t), c = a[nJ] || "unknown", l = rjr(t), u = s[0];
        return u && typeof u == "object" && u.stream === !0 ? Yke({
            name: `${l} ${c} stream-response`,
            op: V1c(t),
            attributes: a
        }, async (p)=>{
            try {
                o.recordInputs && s[0] && typeof s[0] == "object" && q1c(p, s[0]);
                const g = await e.apply(n, s);
                return uag(g, p, o.recordOutputs ?? !1);
            } catch (g) {
                throw p.setStatus({
                    code: w0,
                    message: "internal_error"
                }), Km(g, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.openai.stream",
                        data: {
                            function: t
                        }
                    }
                }), p.end(), g;
            }
        }) : B3e({
            name: `${l} ${c}`,
            op: V1c(t),
            attributes: a
        }, async (p)=>{
            try {
                o.recordInputs && s[0] && typeof s[0] == "object" && q1c(p, s[0]);
                const g = await e.apply(n, s);
                return gag(p, g, o.recordOutputs), g;
            } catch (g) {
                throw Km(g, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.openai",
                        data: {
                            function: t
                        }
                    }
                }), g;
            }
        });
    };
}
function z1c(e, t = "", n) {
    return new Proxy(e, {
        get (i, r) {
            const s = i[r], o = nag(t, String(r));
            return typeof s == "function" && tag(o) ? vag(s, o, i, n) : typeof s == "function" ? s.bind(i) : s && typeof s == "object" ? z1c(s, o, n) : s;
        }
    });
}
export function K1c(e, t) {
    return z1c(e, "", t);
}
function bag(e, t) {
    return "type" in e && typeof e.type == "string" && e.type === "error" ? (t.setStatus({
        code: w0,
        message: e.error?.type ?? "internal_error"
    }), Km(e.error, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic.anthropic_error"
        }
    }), !0) : !1;
}
function yag(e, t) {
    if (e.type === "message_delta" && e.usage && "output_tokens" in e.usage && typeof e.usage.output_tokens == "number" && (t.completionTokens = e.usage.output_tokens), e.message) {
        const n = e.message;
        n.id && (t.responseId = n.id), n.model && (t.responseModel = n.model), n.stop_reason && t.finishReasons.push(n.stop_reason), n.usage && (typeof n.usage.input_tokens == "number" && (t.promptTokens = n.usage.input_tokens), typeof n.usage.cache_creation_input_tokens == "number" && (t.cacheCreationInputTokens = n.usage.cache_creation_input_tokens), typeof n.usage.cache_read_input_tokens == "number" && (t.cacheReadInputTokens = n.usage.cache_read_input_tokens));
    }
}
function Sag(e, t) {
    e.type !== "content_block_start" || typeof e.index != "number" || !e.content_block || (e.content_block.type === "tool_use" || e.content_block.type === "server_tool_use") && (t.activeToolBlocks[e.index] = {
        id: e.content_block.id,
        name: e.content_block.name,
        inputJsonParts: []
    });
}
function kag(e, t, n) {
    if (!(e.type !== "content_block_delta" || !e.delta)) {
        if (typeof e.index == "number" && "partial_json" in e.delta && typeof e.delta.partial_json == "string") {
            const i = t.activeToolBlocks[e.index];
            i && i.inputJsonParts.push(e.delta.partial_json);
        }
        n && typeof e.delta.text == "string" && t.responseTexts.push(e.delta.text);
    }
}
function wag(e, t) {
    if (e.type !== "content_block_stop" || typeof e.index != "number") return;
    const n = t.activeToolBlocks[e.index];
    if (!n) return;
    const i = n.inputJsonParts.join("");
    let r;
    try {
        r = i ? JSON.parse(i) : {};
    } catch  {
        r = {
            __unparsed: i
        };
    }
    t.toolCalls.push({
        type: "tool_use",
        id: n.id,
        name: n.name,
        input: r
    }), delete t.activeToolBlocks[e.index];
}
function Y1c(e, t, n, i) {
    !(e && typeof e == "object") || bag(e, i) || (yag(e, t), Sag(e, t), kag(e, t, n), wag(e, t));
}
function Cag(e, t, n) {
    t.isRecording() && (e.responseId && t.setAttributes({
        [Gdt]: e.responseId
    }), e.responseModel && t.setAttributes({
        [Wdt]: e.responseModel
    }), QVr(t, e.promptTokens, e.completionTokens, e.cacheCreationInputTokens, e.cacheReadInputTokens), t.setAttributes({
        [epn]: !0
    }), e.finishReasons.length > 0 && t.setAttributes({
        [gqe]: JSON.stringify(e.finishReasons)
    }), n && e.responseTexts.length > 0 && t.setAttributes({
        [rge]: e.responseTexts.join("")
    }), n && e.toolCalls.length > 0 && t.setAttributes({
        [mAe]: JSON.stringify(e.toolCalls)
    }), t.end());
}
async function* Tag(e, t, n) {
    const i = {
        responseTexts: [],
        finishReasons: [],
        responseId: "",
        responseModel: "",
        promptTokens: void 0,
        completionTokens: void 0,
        cacheCreationInputTokens: void 0,
        cacheReadInputTokens: void 0,
        toolCalls: [],
        activeToolBlocks: {}
    };
    try {
        for await (const r of e)Y1c(r, i, n, t), yield r;
    } finally{
        i.responseId && t.setAttributes({
            [Gdt]: i.responseId
        }), i.responseModel && t.setAttributes({
            [Wdt]: i.responseModel
        }), QVr(t, i.promptTokens, i.completionTokens, i.cacheCreationInputTokens, i.cacheReadInputTokens), t.setAttributes({
            [epn]: !0
        }), i.finishReasons.length > 0 && t.setAttributes({
            [gqe]: JSON.stringify(i.finishReasons)
        }), n && i.responseTexts.length > 0 && t.setAttributes({
            [rge]: i.responseTexts.join("")
        }), n && i.toolCalls.length > 0 && t.setAttributes({
            [mAe]: JSON.stringify(i.toolCalls)
        }), t.end();
    }
}
function Eag(e, t, n) {
    const i = {
        responseTexts: [],
        finishReasons: [],
        responseId: "",
        responseModel: "",
        promptTokens: void 0,
        completionTokens: void 0,
        cacheCreationInputTokens: void 0,
        cacheReadInputTokens: void 0,
        toolCalls: [],
        activeToolBlocks: {}
    };
    return e.on("streamEvent", (r)=>{
        Y1c(r, i, n, t);
    }), e.on("message", ()=>{
        Cag(i, t, n);
    }), e.on("error", (r)=>{
        Km(r, {
            mechanism: {
                handled: !1,
                type: "auto.ai.anthropic.stream_error"
            }
        }), t.isRecording() && (t.setStatus({
            code: w0,
            message: "stream_error"
        }), t.end());
    }), e;
}
function Iag(e) {
    return Z1c.includes(e);
}
function Aag(e, t) {
    t.error && (e.setStatus({
        code: w0,
        message: t.error.type || "internal_error"
    }), Km(t.error, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic.anthropic_error"
        }
    }));
}
function Dag(e, t) {
    const n = {
        [Xhn]: "anthropic",
        [jdt]: ipn(t),
        [jC]: "auto.ai.anthropic"
    };
    if (e.length > 0 && typeof e[0] == "object" && e[0] !== null) {
        const i = e[0];
        i.tools && Array.isArray(i.tools) && (n[dpi] = JSON.stringify(i.tools)), n[nJ] = i.model ?? "unknown", "temperature" in i && (n[Zhn] = i.temperature), "top_p" in i && (n[Jhn] = i.top_p), "stream" in i && (n[cpi] = i.stream), "top_k" in i && (n[qVr] = i.top_k), "frequency_penalty" in i && (n[Qhn] = i.frequency_penalty), "max_tokens" in i && (n[lpi] = i.max_tokens);
    } else t === "models.retrieve" || t === "models.get" ? n[nJ] = e[0] : n[nJ] = "unknown";
    return n;
}
function ajr(e, t) {
    if ("messages" in t) {
        const n = fqe(t.messages);
        e.setAttributes({
            [pAe]: n
        });
    }
    if ("input" in t) {
        const n = fqe(t.input);
        e.setAttributes({
            [pAe]: n
        });
    }
    "prompt" in t && e.setAttributes({
        [h1c]: JSON.stringify(t.prompt)
    });
}
function Mag(e, t) {
    if ("content" in t && Array.isArray(t.content)) {
        e.setAttributes({
            [rge]: t.content.map((i)=>i.text).filter((i)=>!!i).join("")
        });
        const n = [];
        for (const i of t.content)(i.type === "tool_use" || i.type === "server_tool_use") && n.push(i);
        n.length > 0 && e.setAttributes({
            [mAe]: JSON.stringify(n)
        });
    }
    "completion" in t && e.setAttributes({
        [rge]: t.completion
    }), "input_tokens" in t && e.setAttributes({
        [rge]: JSON.stringify(t.input_tokens)
    });
}
function Pag(e, t) {
    "id" in t && "model" in t && (e.setAttributes({
        [Gdt]: t.id,
        [Wdt]: t.model
    }), "created" in t && typeof t.created == "number" && e.setAttributes({
        [YVr]: new Date(t.created * 1e3).toISOString()
    }), "created_at" in t && typeof t.created_at == "number" && e.setAttributes({
        [YVr]: new Date(t.created_at * 1e3).toISOString()
    }), "usage" in t && t.usage && QVr(e, t.usage.input_tokens, t.usage.output_tokens, t.usage.cache_creation_input_tokens, t.usage.cache_read_input_tokens));
}
function Lag(e, t, n) {
    if (!(!t || typeof t != "object")) {
        if ("type" in t && t.type === "error") {
            Aag(e, t);
            return;
        }
        n && Mag(e, t), Pag(e, t);
    }
}
function J1c(e, t, n) {
    throw Km(e, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic",
            data: {
                function: n
            }
        }
    }), t.isRecording() && (t.setStatus({
        code: w0,
        message: "internal_error"
    }), t.end()), e;
}
function Nag(e, t, n, i, r, s, o, a, c, l, u) {
    const h = r[nJ] ?? "unknown", p = {
        name: `${s} ${h} stream-response`,
        op: hpi(o),
        attributes: r
    };
    return l && !u ? Yke(p, async (g)=>{
        try {
            c.recordInputs && a && ajr(g, a);
            const f = await e.apply(n, i);
            return Tag(f, g, c.recordOutputs ?? !1);
        } catch (f) {
            return J1c(f, g, o);
        }
    }) : Yke(p, (g)=>{
        try {
            c.recordInputs && a && ajr(g, a);
            const f = t.apply(n, i);
            return Eag(f, g, c.recordOutputs ?? !1);
        } catch (f) {
            return J1c(f, g, o);
        }
    });
}
function Oag(e, t, n, i) {
    return new Proxy(e, {
        apply (r, s, o) {
            const a = Dag(o, t), c = a[nJ] ?? "unknown", l = ipn(t), u = typeof o[0] == "object" ? o[0] : void 0, h = !!u?.stream, p = t === "messages.stream";
            return h || p ? Nag(e, r, n, o, a, l, t, u, i, h, p) : B3e({
                name: `${l} ${c}`,
                op: hpi(t),
                attributes: a
            }, (g)=>(i.recordInputs && u && ajr(g, u), Phn(()=>r.apply(n, o), (f)=>{
                    Km(f, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.anthropic",
                            data: {
                                function: t
                            }
                        }
                    });
                }, ()=>{}, (f)=>Lag(g, f, i.recordOutputs))));
        }
    });
}
function eTc(e, t = "", n) {
    return new Proxy(e, {
        get (i, r) {
            const s = i[r], o = k1c(t, String(r));
            return typeof s == "function" && Iag(o) ? Oag(s, o, i, n) : typeof s == "function" ? s.bind(i) : s && typeof s == "object" ? eTc(s, o, n) : s;
        }
    });
}
export function tTc(e, t) {
    const n = !!Pu()?.getOptions().sendDefaultPii, i = {
        recordInputs: n,
        recordOutputs: n,
        ...t
    };
    return eTc(e, "", i);
}
function Bag(e, t) {
    const n = e?.promptFeedback;
    if (n?.blockReason) {
        const i = n.blockReasonMessage ?? n.blockReason;
        return t.setStatus({
            code: w0,
            message: `Content blocked: ${i}`
        }), Km(`Content blocked: ${i}`, {
            mechanism: {
                handled: !1,
                type: "auto.ai.google_genai"
            }
        }), !0;
    }
    return !1;
}
function Uag(e, t) {
    typeof e.responseId == "string" && (t.responseId = e.responseId), typeof e.modelVersion == "string" && (t.responseModel = e.modelVersion);
    const n = e.usageMetadata;
    n && (typeof n.promptTokenCount == "number" && (t.promptTokens = n.promptTokenCount), typeof n.candidatesTokenCount == "number" && (t.completionTokens = n.candidatesTokenCount), typeof n.totalTokenCount == "number" && (t.totalTokens = n.totalTokenCount));
}
function $ag(e, t, n) {
    Array.isArray(e.functionCalls) && t.toolCalls.push(...e.functionCalls);
    for (const i of e.candidates ?? []){
        i?.finishReason && !t.finishReasons.includes(i.finishReason) && t.finishReasons.push(i.finishReason);
        for (const r of i?.content?.parts ?? [])n && r.text && t.responseTexts.push(r.text), r.functionCall && t.toolCalls.push({
            type: "function",
            id: r.functionCall.id,
            name: r.functionCall.name,
            arguments: r.functionCall.args
        });
    }
}
function Hag(e, t, n, i) {
    !e || Bag(e, i) || (Uag(e, t), $ag(e, t, n));
}
async function* Wag(e, t, n) {
    const i = {
        responseTexts: [],
        finishReasons: [],
        toolCalls: []
    };
    try {
        for await (const r of e)Hag(r, i, n, t), yield r;
    } finally{
        const r = {
            [epn]: !0
        };
        i.responseId && (r[Gdt] = i.responseId), i.responseModel && (r[Wdt] = i.responseModel), i.promptTokens !== void 0 && (r[W3e] = i.promptTokens), i.completionTokens !== void 0 && (r[G3e] = i.completionTokens), i.totalTokens !== void 0 && (r[Vdt] = i.totalTokens), i.finishReasons.length && (r[gqe] = JSON.stringify(i.finishReasons)), n && i.responseTexts.length && (r[rge] = i.responseTexts.join("")), n && i.toolCalls.length && (r[mAe] = JSON.stringify(i.toolCalls)), t.setAttributes(r), t.end();
    }
}
function Vag(e) {
    if (cjr.includes(e)) return !0;
    const t = e.split(".").pop();
    return cjr.includes(t);
}
function jag(e) {
    return e.includes("Stream") || e.endsWith("generateContentStream") || e.endsWith("sendMessageStream");
}
function sTc(e, t) {
    if ("model" in e && typeof e.model == "string") return e.model;
    if (t && typeof t == "object") {
        const n = t;
        if ("model" in n && typeof n.model == "string") return n.model;
        if ("modelVersion" in n && typeof n.modelVersion == "string") return n.modelVersion;
    }
    return "unknown";
}
function zag(e) {
    const t = {};
    return "temperature" in e && typeof e.temperature == "number" && (t[Zhn] = e.temperature), "topP" in e && typeof e.topP == "number" && (t[Jhn] = e.topP), "topK" in e && typeof e.topK == "number" && (t[qVr] = e.topK), "maxOutputTokens" in e && typeof e.maxOutputTokens == "number" && (t[lpi] = e.maxOutputTokens), "frequencyPenalty" in e && typeof e.frequencyPenalty == "number" && (t[Qhn] = e.frequencyPenalty), "presencePenalty" in e && typeof e.presencePenalty == "number" && (t[upi] = e.presencePenalty), t;
}
function Kag(e, t, n) {
    const i = {
        [Xhn]: iTc,
        [jdt]: ipn(e),
        [jC]: "auto.ai.google_genai"
    };
    if (t) {
        if (i[nJ] = sTc(t, n), "config" in t && typeof t.config == "object" && t.config) {
            const r = t.config;
            if (Object.assign(i, zag(r)), "tools" in r && Array.isArray(r.tools)) {
                const s = r.tools.map((o)=>o.functionDeclarations);
                i[dpi] = JSON.stringify(s);
            }
        }
    } else i[nJ] = sTc({}, n);
    return i;
}
function oTc(e, t) {
    if ("contents" in t) {
        const n = t.contents, i = fqe(n);
        e.setAttributes({
            [pAe]: i
        });
    }
    if ("message" in t) {
        const n = t.message, i = fqe(n);
        e.setAttributes({
            [pAe]: i
        });
    }
    if ("history" in t) {
        const n = t.history, i = fqe(n);
        e.setAttributes({
            [pAe]: i
        });
    }
}
function Yag(e, t, n) {
    if (!(!t || typeof t != "object")) {
        if (t.usageMetadata && typeof t.usageMetadata == "object") {
            const i = t.usageMetadata;
            typeof i.promptTokenCount == "number" && e.setAttributes({
                [W3e]: i.promptTokenCount
            }), typeof i.candidatesTokenCount == "number" && e.setAttributes({
                [G3e]: i.candidatesTokenCount
            }), typeof i.totalTokenCount == "number" && e.setAttributes({
                [Vdt]: i.totalTokenCount
            });
        }
        if (n && Array.isArray(t.candidates) && t.candidates.length > 0) {
            const i = t.candidates.map((r)=>r.content?.parts && Array.isArray(r.content.parts) ? r.content.parts.map((s)=>typeof s.text == "string" ? s.text : "").filter((s)=>s.length > 0).join("") : "").filter((r)=>r.length > 0);
            i.length > 0 && e.setAttributes({
                [rge]: i.join("")
            });
        }
        if (n && t.functionCalls) {
            const i = t.functionCalls;
            Array.isArray(i) && i.length > 0 && e.setAttributes({
                [mAe]: JSON.stringify(i)
            });
        }
    }
}
function aTc(e, t, n, i) {
    const r = t === ljr;
    return new Proxy(e, {
        apply (s, o, a) {
            const c = a[0], l = Kag(t, c, n), u = l[nJ] ?? "unknown", h = ipn(t);
            return jag(t) ? Yke({
                name: `${h} ${u} stream-response`,
                op: hpi(t),
                attributes: l
            }, async (p)=>{
                try {
                    i.recordInputs && c && oTc(p, c);
                    const g = await s.apply(n, a);
                    return Wag(g, p, !!i.recordOutputs);
                } catch (g) {
                    throw p.setStatus({
                        code: w0,
                        message: "internal_error"
                    }), Km(g, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.google_genai",
                            data: {
                                function: t
                            }
                        }
                    }), p.end(), g;
                }
            }) : B3e({
                name: r ? `${h} ${u} create` : `${h} ${u}`,
                op: hpi(t),
                attributes: l
            }, (p)=>(i.recordInputs && c && oTc(p, c), Phn(()=>s.apply(n, a), (g)=>{
                    Km(g, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.google_genai",
                            data: {
                                function: t
                            }
                        }
                    });
                }, ()=>{}, (g)=>{
                    r || Yag(p, g, i.recordOutputs);
                })));
        }
    });
}
function djr(e, t = "", n) {
    return new Proxy(e, {
        get: (i, r, s)=>{
            const o = Reflect.get(i, r, s), a = k1c(t, String(r));
            if (typeof o == "function" && Vag(a)) {
                if (a === ljr) {
                    const c = aTc(o, a, i, n);
                    return function(...u) {
                        const h = c(...u);
                        return h && typeof h == "object" ? djr(h, rTc, n) : h;
                    };
                }
                return aTc(o, a, i, n);
            }
            return typeof o == "function" ? o.bind(i) : o && typeof o == "object" ? djr(o, a, n) : o;
        }
    });
}
export function cTc(e, t) {
    const n = !!Pu()?.getOptions().sendDefaultPii, i = {
        recordInputs: n,
        recordOutputs: n,
        ...t
    };
    return djr(e, "", i);
}
function Oie(e) {
    if (typeof e == "string") return e;
    try {
        return JSON.stringify(e);
    } catch  {
        return String(e);
    }
}
function spn(e) {
    const t = e.toLowerCase();
    return uTc[t] ?? t;
}
function dTc(e) {
    return e.includes("System") ? "system" : e.includes("Human") ? "user" : e.includes("AI") || e.includes("Assistant") ? "assistant" : e.includes("Function") ? "function" : e.includes("Tool") ? "tool" : "user";
}
function hTc(e) {
    if (!(!e || Array.isArray(e))) return e.invocation_params;
}
function Zag(e) {
    return e.map((t)=>{
        const n = t._getType;
        if (typeof n == "function") {
            const r = n.call(t);
            return {
                role: spn(r),
                content: Oie(t.content)
            };
        }
        const i = t.constructor?.name;
        if (i) return {
            role: spn(dTc(i)),
            content: Oie(t.content)
        };
        if (t.type) {
            const r = String(t.type).toLowerCase();
            return {
                role: spn(r),
                content: Oie(t.content)
            };
        }
        if (t.role) return {
            role: spn(String(t.role)),
            content: Oie(t.content)
        };
        if (t.lc === 1 && t.kwargs) {
            const r = t.id, s = Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "", o = typeof s == "string" ? dTc(s) : "user";
            return {
                role: spn(o),
                content: Oie(t.kwargs?.content)
            };
        }
        return {
            role: "user",
            content: Oie(t.content)
        };
    });
}
function Qag(e, t, n) {
    const i = {}, r = "kwargs" in e ? e.kwargs : void 0, s = t?.temperature ?? n?.ls_temperature ?? r?.temperature;
    Fie(i, Zhn, s);
    const o = t?.max_tokens ?? n?.ls_max_tokens ?? r?.max_tokens;
    Fie(i, lpi, o);
    const a = t?.top_p ?? r?.top_p;
    Fie(i, Jhn, a);
    const c = t?.frequency_penalty;
    Fie(i, Qhn, c);
    const l = t?.presence_penalty;
    return Fie(i, upi, l), t && "stream" in t && fAe(i, cpi, !!t.stream), i;
}
function pTc(e, t, n, i, r, s) {
    return {
        [Xhn]: Oie(e ?? "langchain"),
        [jdt]: n,
        [nJ]: Oie(t),
        [jC]: $Lt,
        ...Qag(i, r, s)
    };
}
function Jag(e, t, n, i, r) {
    const s = r?.ls_provider, o = i?.model ?? r?.ls_model_name ?? "unknown", a = pTc(s, o, "pipeline", e, i, r);
    if (n && Array.isArray(t) && t.length > 0) {
        const c = t.map((l)=>({
                role: "user",
                content: l
            }));
        fAe(a, pAe, Oie(c));
    }
    return a;
}
function ecg(e, t, n, i, r) {
    const s = r?.ls_provider ?? e.id?.[2], o = i?.model ?? r?.ls_model_name ?? "unknown", a = pTc(s, o, "chat", e, i, r);
    if (n && Array.isArray(t) && t.length > 0) {
        const c = Zag(t.flat());
        fAe(a, pAe, Oie(c));
    }
    return a;
}
function tcg(e, t) {
    const n = [], i = e.flat();
    for (const r of i){
        const s = r.message?.content;
        if (Array.isArray(s)) for (const o of s){
            const a = o;
            a.type === "tool_use" && n.push(a);
        }
    }
    n.length > 0 && fAe(t, mAe, Oie(n));
}
function ncg(e, t) {
    if (!e) return;
    const n = e.tokenUsage, i = e.usage;
    if (n) Fie(t, W3e, n.promptTokens), Fie(t, G3e, n.completionTokens), Fie(t, Vdt, n.totalTokens);
    else if (i) {
        Fie(t, W3e, i.input_tokens), Fie(t, G3e, i.output_tokens);
        const r = Number(i.input_tokens), s = Number(i.output_tokens), o = (Number.isNaN(r) ? 0 : r) + (Number.isNaN(s) ? 0 : s);
        o > 0 && Fie(t, Vdt, o), i.cache_creation_input_tokens !== void 0 && Fie(t, m1c, i.cache_creation_input_tokens), i.cache_read_input_tokens !== void 0 && Fie(t, g1c, i.cache_read_input_tokens);
    }
}
function icg(e, t) {
    if (!e) return;
    const n = {};
    if (Array.isArray(e.generations)) {
        const s = e.generations.flat().map((o)=>o.generation_info?.finish_reason).filter((o)=>typeof o == "string");
        if (s.length > 0 && fAe(n, gqe, Oie(s)), tcg(e.generations, n), t) {
            const o = e.generations.flat().map((a)=>a.text ?? a.message?.content).filter((a)=>typeof a == "string");
            o.length > 0 && fAe(n, rge, Oie(o));
        }
    }
    ncg(e.llmOutput, n);
    const i = e.llmOutput, r = i?.model_name ?? i?.model;
    return r && fAe(n, Wdt, r), i?.id && fAe(n, Gdt, i.id), i?.stop_reason && fAe(n, p1c, Oie(i.stop_reason)), n;
}
export function scg(e = {}) {
    const t = e.recordInputs ?? !1, n = e.recordOutputs ?? !1, i = new Map, r = (o)=>{
        const a = i.get(o);
        a?.isRecording() && (a.end(), i.delete(o));
    }, s = {
        lc_serializable: !1,
        lc_namespace: [
            "langchain_core",
            "callbacks",
            "sentry"
        ],
        lc_secrets: void 0,
        lc_attributes: void 0,
        lc_aliases: void 0,
        lc_serializable_keys: void 0,
        lc_id: [
            "langchain_core",
            "callbacks",
            "sentry"
        ],
        lc_kwargs: {},
        name: "SentryCallbackHandler",
        ignoreLLM: !1,
        ignoreChain: !1,
        ignoreAgent: !1,
        ignoreRetriever: !1,
        ignoreCustomEvent: !1,
        raiseError: !1,
        awaitHandlers: !0,
        handleLLMStart (o, a, c, l, u, h, p, g) {
            const f = hTc(h), v = Jag(o, a, t, f, p), b = v[nJ], y = v[jdt];
            Yke({
                name: `${y} ${b}`,
                op: "gen_ai.pipeline",
                attributes: {
                    ...v,
                    [a1]: "gen_ai.pipeline"
                }
            }, (T)=>(i.set(c, T), T));
        },
        handleChatModelStart (o, a, c, l, u, h, p, g) {
            const f = hTc(h), v = ecg(o, a, t, f, p), b = v[nJ], y = v[jdt];
            Yke({
                name: `${y} ${b}`,
                op: "gen_ai.chat",
                attributes: {
                    ...v,
                    [a1]: "gen_ai.chat"
                }
            }, (T)=>(i.set(c, T), T));
        },
        handleLLMEnd (o, a, c, l, u) {
            const h = i.get(a);
            if (h?.isRecording()) {
                const p = icg(o, n);
                p && h.setAttributes(p), r(a);
            }
        },
        handleLLMError (o, a) {
            const c = i.get(a);
            c?.isRecording() && (c.setStatus({
                code: w0,
                message: "llm_error"
            }), r(a)), Km(o, {
                mechanism: {
                    handled: !1,
                    type: `${$Lt}.llm_error_handler`
                }
            });
        },
        handleChainStart (o, a, c, l) {
            const u = o.name || "unknown_chain", h = {
                [jC]: "auto.ai.langchain",
                "langchain.chain.name": u
            };
            t && (h["langchain.chain.inputs"] = JSON.stringify(a)), Yke({
                name: `chain ${u}`,
                op: "gen_ai.invoke_agent",
                attributes: {
                    ...h,
                    [a1]: "gen_ai.invoke_agent"
                }
            }, (p)=>(i.set(c, p), p));
        },
        handleChainEnd (o, a) {
            const c = i.get(a);
            c?.isRecording() && (n && c.setAttributes({
                "langchain.chain.outputs": JSON.stringify(o)
            }), r(a));
        },
        handleChainError (o, a) {
            const c = i.get(a);
            c?.isRecording() && (c.setStatus({
                code: w0,
                message: "chain_error"
            }), r(a)), Km(o, {
                mechanism: {
                    handled: !1,
                    type: `${$Lt}.chain_error_handler`
                }
            });
        },
        handleToolStart (o, a, c, l) {
            const u = o.name || "unknown_tool", h = {
                [jC]: $Lt,
                "gen_ai.tool.name": u
            };
            t && (h["gen_ai.tool.input"] = a), Yke({
                name: `execute_tool ${u}`,
                op: "gen_ai.execute_tool",
                attributes: {
                    ...h,
                    [a1]: "gen_ai.execute_tool"
                }
            }, (p)=>(i.set(c, p), p));
        },
        handleToolEnd (o, a) {
            const c = i.get(a);
            c?.isRecording() && (n && c.setAttributes({
                "gen_ai.tool.output": JSON.stringify(o)
            }), r(a));
        },
        handleToolError (o, a) {
            const c = i.get(a);
            c?.isRecording() && (c.setStatus({
                code: w0,
                message: "tool_error"
            }), r(a)), Km(o, {
                mechanism: {
                    handled: !1,
                    type: `${$Lt}.tool_error_handler`
                }
            });
        },
        copy () {
            return s;
        },
        toJSON () {
            return {
                lc: 1,
                type: "not_implemented",
                id: s.lc_id
            };
        },
        toJSONNotImplemented () {
            return {
                lc: 1,
                type: "not_implemented",
                id: s.lc_id
            };
        }
    };
    return s;
}
export function opn(e) {
    if (e !== void 0) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
export function ccg() {
    try {
        return new ErrorEvent(""), !0;
    } catch  {
        return !1;
    }
}
export function lcg() {
    try {
        return new DOMError(""), !0;
    } catch  {
        return !1;
    }
}
export function ucg() {
    try {
        return new DOMException(""), !0;
    } catch  {
        return !1;
    }
}
export function gTc() {
    return "history" in qdt && !!qdt.history;
}
export function mjr() {
    if (!("fetch" in qdt)) return !1;
    try {
        return new Headers, new Request("http://www.example.com"), new Response, !0;
    } catch  {
        return !1;
    }
}
export function vpi(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
export function _pi() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!mjr()) return !1;
    if (vpi(qdt.fetch)) return !0;
    let e = !1;
    const t = qdt.document;
    if (t && typeof t.createElement == "function") try {
        const n = t.createElement("iframe");
        n.hidden = !0, t.head.appendChild(n), n.contentWindow?.fetch && (e = vpi(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (n) {
        Qh && zr.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
    return e;
}
export function gjr() {
    return "ReportingObserver" in qdt;
}
export function dcg() {
    if (!mjr()) return !1;
    try {
        return new Request("_", {
            referrerPolicy: "origin"
        }), !0;
    } catch  {
        return !1;
    }
}
export function zdt(e, t) {
    const n = "fetch";
    N3e(n, e), O3e(n, ()=>_Tc(void 0, t));
}
export function fjr(e) {
    const t = "fetch-body-resolved";
    N3e(t, e), O3e(t, ()=>_Tc(pcg));
}
function _Tc(e, t = !1) {
    t && !_pi() || sA(Og, "fetch", function(n) {
        return function(...i) {
            const r = new Error, { method: s, url: o } = mcg(i), a = {
                args: i,
                fetchData: {
                    method: s,
                    url: o
                },
                startTimestamp: sR() * 1e3,
                virtualError: r,
                headers: gcg(i)
            };
            return e || Hce("fetch", {
                ...a
            }), n.apply(Og, i).then(async (c)=>(e ? e(c) : Hce("fetch", {
                    ...a,
                    endTimestamp: sR() * 1e3,
                    response: c
                }), c), (c)=>{
                if (Hce("fetch", {
                    ...a,
                    endTimestamp: sR() * 1e3,
                    error: c
                }), qke(c) && c.stack === void 0 && (c.stack = r.stack, jH(c, "framesToPop", 1)), c instanceof TypeError && (c.message === "Failed to fetch" || c.message === "Load failed" || c.message === "NetworkError when attempting to fetch resource.")) try {
                    const l = new URL(a.fetchData.url);
                    c.message = `${c.message} (${l.host})`;
                } catch  {}
                throw c;
            });
        };
    });
}
async function hcg(e, t) {
    if (e?.body) {
        const n = e.body, i = n.getReader(), r = setTimeout(()=>{
            n.cancel().then(null, ()=>{});
        }, 90 * 1e3);
        let s = !0;
        for(; s;){
            let o;
            try {
                o = setTimeout(()=>{
                    n.cancel().then(null, ()=>{});
                }, 5e3);
                const { done: a } = await i.read();
                clearTimeout(o), a && (t(), s = !1);
            } catch  {
                s = !1;
            } finally{
                clearTimeout(o);
            }
        }
        clearTimeout(r), i.releaseLock(), n.cancel().then(null, ()=>{});
    }
}
function pcg(e) {
    let t;
    try {
        t = e.clone();
    } catch  {
        return;
    }
    hcg(t, ()=>{
        Hce("fetch-body-resolved", {
            endTimestamp: sR() * 1e3,
            response: e
        });
    });
}
function vjr(e, t) {
    return !!e && typeof e == "object" && !!e[t];
}
function bTc(e) {
    return typeof e == "string" ? e : e ? vjr(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function mcg(e) {
    if (e.length === 0) return {
        method: "GET",
        url: ""
    };
    if (e.length === 2) {
        const [n, i] = e;
        return {
            url: bTc(n),
            method: vjr(i, "method") ? String(i.method).toUpperCase() : "GET"
        };
    }
    const t = e[0];
    return {
        url: bTc(t),
        method: vjr(t, "method") ? String(t.method).toUpperCase() : "GET"
    };
}
function gcg(e) {
    const [t, n] = e;
    try {
        if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
        if (gkc(t)) return new Headers(t.headers);
    } catch  {}
}
export function yTc() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
export function _jr() {
    return "npm";
}
export function kTc() {
    return !yTc() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
}
function bjr(e, t) {
    return e.require(t);
}
export function vcg(e, t = module) {
    let n;
    try {
        n = bjr(t, e);
    } catch  {}
    if (!n) try {
        const { cwd: i } = bjr(t, "process");
        n = bjr(t, `${i()}/node_modules/${e}`);
    } catch  {}
    return n;
}
export function apn() {
    return typeof window < "u" && (!kTc() || _cg());
}
function _cg() {
    return Og.process?.type === "renderer";
}
export function ycg(e, t, n) {
    const i = e[t];
    if (typeof i == "function") {
        try {
            e[t] = n;
        } catch  {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
        }
        if (e.default === i) try {
            e.default = n;
        } catch  {
            Object.defineProperty(e, "default", {
                value: n,
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
        }
    }
}
export function yjr(e, t = !1) {
    return !(t || e && !e.startsWith("/") && !e.match(/^[A-Z]:/) && !e.startsWith(".") && !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && e !== void 0 && !e.includes("node_modules/");
}
export function CTc(e) {
    const t = /^\s*[-]{4,}$/, n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/, i = /at (?:async )?(.+?) \(data:(.*?),/;
    return (r)=>{
        const s = r.match(i);
        if (s) return {
            filename: `<data:${s[2]}>`,
            function: s[1]
        };
        const o = r.match(n);
        if (o) {
            let a, c, l, u, h;
            if (o[1]) {
                l = o[1];
                let f = l.lastIndexOf(".");
                if (l[f - 1] === "." && f--, f > 0) {
                    a = l.slice(0, f), c = l.slice(f + 1);
                    const v = a.indexOf(".Module");
                    v > 0 && (l = l.slice(v + 1), a = a.slice(0, v));
                }
                u = void 0;
            }
            c && (u = a, h = c), c === "<anonymous>" && (h = void 0, l = void 0), l === void 0 && (h = h || K4, l = u ? `${u}.${h}` : h);
            let p = o[2]?.startsWith("file://") ? o[2].slice(7) : o[2];
            const g = o[5] === "native";
            return p?.match(/\/[A-Z]:/) && (p = p.slice(1)), !p && o[5] && !g && (p = o[5]), {
                filename: p ? decodeURI(p) : void 0,
                module: e ? e(p) : void 0,
                function: l,
                lineno: ETc(o[3]),
                colno: ETc(o[4]),
                in_app: yjr(p || "", g)
            };
        }
        if (r.match(t)) return {
            filename: r
        };
    };
}
export function TTc(e) {
    return [
        90,
        CTc(e)
    ];
}
function ETc(e) {
    return parseInt(e || "", 10) || void 0;
}
export function kcg(e, t, n, i) {
    const r = e();
    let s = !1, o = !0;
    return setInterval(()=>{
        const a = r.getTimeMs();
        s === !1 && a > t + n && (s = !0, o && i()), a < t + n && (s = !1);
    }, 20), {
        poll: ()=>{
            r.reset();
        },
        enabled: (a)=>{
            o = a;
        }
    };
}
export function wcg(e, t, n) {
    const i = t ? t.replace(/^file:\/\//, "") : void 0, r = e.location.columnNumber ? e.location.columnNumber + 1 : void 0, s = e.location.lineNumber ? e.location.lineNumber + 1 : void 0;
    return {
        filename: i,
        module: n(i),
        function: e.functionName || K4,
        colno: r,
        lineno: s,
        in_app: i ? yjr(i) : void 0
    };
}
export function ATc(e) {
    const n = Og[Symbol.for("@vercel/request-context")]?.get?.();
    n?.waitUntil && n.waitUntil(e);
}
async function bpi(e) {
    try {
        zr.log("Flushing events..."), await NGr(e), zr.log("Done flushing events");
    } catch (t) {
        zr.log(`Error while flushing events:
`, t);
    }
}
export async function Ecg(e = {}) {
    const { timeout: t = 2e3 } = e;
    if ("cloudflareWaitUntil" in e && typeof e?.cloudflareWaitUntil == "function") {
        e.cloudflareWaitUntil(bpi(t));
        return;
    }
    if ("cloudflareCtx" in e && typeof e.cloudflareCtx?.waitUntil == "function") {
        e.cloudflareCtx.waitUntil(bpi(t));
        return;
    }
    if (Og[Symbol.for("@vercel/request-context")]) {
        ATc(bpi(t));
        return;
    }
    if (typeof process > "u") return;
    (!!process.env.FUNCTIONS_WORKER_RUNTIME || !!process.env.LAMBDA_TASK_ROOT || !!process.env.K_SERVICE || !!process.env.CF_PAGES || !!process.env.VERCEL || !!process.env.NETLIFY) && await bpi(t);
}
export function Sjr(e, t) {
    return Spi.get(e) || Spi.set(e, new t), Spi.get(e);
}
export function Djr(e, t = !1) {
    return Ipi("cls", e, Bcg, sEc, t);
}
export function Mjr(e, t = !1) {
    return Ipi("lcp", e, Ucg, oEc, t);
}
function Fcg(e) {
    return Ipi("ttfb", e, $cg, aEc);
}
export function nEc(e) {
    return Ipi("inp", e, Hcg, cEc);
}
export function _qe(e, t) {
    return iEc(e, t), gpn[e] || (Wcg(e), gpn[e] = !0), rEc(e, t);
}
function mpn(e, t) {
    const n = zLt[e];
    if (n?.length) for (const i of n)try {
        i(t);
    } catch (r) {
        vqe && zr.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${pK(i)}
Error:`, r);
    }
}
function Bcg() {
    return $Tc((e)=>{
        mpn("cls", {
            metric: e
        }), sEc = e;
    }, {
        reportAllChanges: !0
    });
}
function Ucg() {
    return JTc((e)=>{
        mpn("lcp", {
            metric: e
        }), oEc = e;
    }, {
        reportAllChanges: !0
    });
}
function $cg() {
    return tEc((e)=>{
        mpn("ttfb", {
            metric: e
        }), aEc = e;
    });
}
function Hcg() {
    return XTc((e)=>{
        mpn("inp", {
            metric: e
        }), cEc = e;
    });
}
function Ipi(e, t, n, i, r = !1) {
    iEc(e, t);
    let s;
    return gpn[e] || (s = n(), gpn[e] = !0), i && t({
        metric: i
    }), rEc(e, t, r ? s : void 0);
}
function Wcg(e) {
    const t = {};
    e === "event" && (t.durationThreshold = 0), Ydt(e, (n)=>{
        mpn(e, {
            entries: n
        });
    }, t);
}
function iEc(e, t) {
    zLt[e] = zLt[e] || [], zLt[e].push(t);
}
function rEc(e, t, n) {
    return ()=>{
        n && n();
        const i = zLt[e];
        if (!i) return;
        const r = i.indexOf(t);
        r !== -1 && i.splice(r, 1);
    };
}
function Gcg(e) {
    return "duration" in e;
}
var sEc, oEc, aEc, cEc;
function Pjr(e) {
    return typeof e == "number" && isFinite(e);
}
function bqe(e, t, n, { ...i }) {
    const r = iv(e).start_timestamp;
    return r && r > t && typeof e.updateStartTime == "function" && e.updateStartTime(t), Ddt(e, ()=>{
        const s = Xke({
            startTime: t,
            ...i
        });
        return s && s.end(n), s;
    });
}
export function Ljr(e) {
    const t = Pu();
    if (!t) return;
    const { name: n, transaction: i, attributes: r, startTime: s } = e, { release: o, environment: a, sendDefaultPii: c } = t.getOptions(), u = t.getIntegrationByName("Replay")?.getReplayId(), h = nv(), p = h.getUser(), g = p !== void 0 ? p.email || p.id || p.ip_address : void 0;
    let f;
    try {
        f = h.getScopeData().contexts.profile.profile_id;
    } catch  {}
    const v = {
        release: o,
        environment: a,
        user: g || void 0,
        profile_id: f || void 0,
        replay_id: u || void 0,
        transaction: i,
        "user_agent.original": by.navigator?.userAgent,
        "client.address": c ? "{{auto}}" : void 0,
        ...r
    };
    return Xke({
        name: n,
        attributes: v,
        startTime: s,
        experimental: {
            standalone: !0
        }
    });
}
function fpn() {
    return by.addEventListener && by.performance;
}
export function QB(e) {
    return e / 1e3;
}
function Vcg(e) {
    let t = "unknown", n = "unknown", i = "";
    for (const r of e){
        if (r === "/") {
            [t, n] = e.split("/");
            break;
        }
        if (!isNaN(Number(r))) {
            t = i === "h" ? "http" : i, n = e.split(i)[1];
            break;
        }
        i += r;
    }
    return i === e && (t = i), {
        name: t,
        version: n
    };
}
function lEc(e) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(e);
    } catch  {
        return !1;
    }
}
function uEc(e, t) {
    let n, i = !1;
    function r(a) {
        !i && n && t(a, n), i = !0;
    }
    Ajr(()=>{
        r("pagehide");
    });
    const s = e.on("beforeStartNavigationSpan", (a, c)=>{
        c?.isRedirect || (r("navigation"), s(), o());
    }), o = e.on("afterStartPageLoadSpan", (a)=>{
        n = a.spanContext().spanId, o();
    });
}
function jcg(e) {
    let t = 0, n;
    if (!lEc("layout-shift")) return;
    const i = Djr(({ metric: r })=>{
        const s = r.entries[r.entries.length - 1];
        s && (t = r.value, n = s);
    }, !0);
    uEc(e, (r, s)=>{
        qcg(t, n, s, r), i();
    });
}
function qcg(e, t, n, i) {
    vqe && zr.log(`Sending CLS span (${e})`);
    const r = t ? QB((Y4() || 0) + t.startTime) : sR(), s = nv().getScopeData().transactionName, o = t ? gK(t.sources[0]?.node) : "Layout shift", a = {
        [jC]: "auto.http.browser.cls",
        [a1]: "ui.webvital.cls",
        [oqe]: 0,
        "sentry.pageload.span_id": n,
        "sentry.report_event": i
    };
    t?.sources && t.sources.forEach((l, u)=>{
        a[`cls.source.${u + 1}`] = gK(l.node);
    });
    const c = Ljr({
        name: o,
        transaction: s,
        attributes: a,
        startTime: r
    });
    c && (c.addEvent("cls", {
        [Tdt]: "",
        [Edt]: e
    }), c.end(r));
}
function Kcg(e) {
    let t = 0, n;
    if (!lEc("largest-contentful-paint")) return;
    const i = Mjr(({ metric: r })=>{
        const s = r.entries[r.entries.length - 1];
        s && (t = r.value, n = s);
    }, !0);
    uEc(e, (r, s)=>{
        Ycg(t, n, s, r), i();
    });
}
function Ycg(e, t, n, i) {
    vqe && zr.log(`Sending LCP span (${e})`);
    const r = QB((Y4() || 0) + (t?.startTime || 0)), s = nv().getScopeData().transactionName, o = t ? gK(t.element) : "Largest contentful paint", a = {
        [jC]: "auto.http.browser.lcp",
        [a1]: "ui.webvital.lcp",
        [oqe]: 0,
        "sentry.pageload.span_id": n,
        "sentry.report_event": i
    };
    t && (t.element && (a["lcp.element"] = gK(t.element)), t.id && (a["lcp.id"] = t.id), t.url && (a["lcp.url"] = t.url), t.loadTime != null && (a["lcp.loadTime"] = t.loadTime), t.renderTime != null && (a["lcp.renderTime"] = t.renderTime), t.size != null && (a["lcp.size"] = t.size));
    const c = Ljr({
        name: o,
        transaction: s,
        attributes: a,
        startTime: r
    });
    c && (c.addEvent("lcp", {
        [Tdt]: "millisecond",
        [Edt]: e
    }), c.end(r));
}
function oge(e) {
    return e && ((Y4() || performance.timeOrigin) + e) / 1e3;
}
export function Njr(e) {
    const t = {};
    if (e.nextHopProtocol != null) {
        const { name: n, version: i } = Vcg(e.nextHopProtocol);
        t["network.protocol.version"] = i, t["network.protocol.name"] = n;
    }
    return Y4() || fpn()?.timeOrigin ? Zcg({
        ...t,
        "http.request.redirect_start": oge(e.redirectStart),
        "http.request.redirect_end": oge(e.redirectEnd),
        "http.request.worker_start": oge(e.workerStart),
        "http.request.fetch_start": oge(e.fetchStart),
        "http.request.domain_lookup_start": oge(e.domainLookupStart),
        "http.request.domain_lookup_end": oge(e.domainLookupEnd),
        "http.request.connect_start": oge(e.connectStart),
        "http.request.secure_connection_start": oge(e.secureConnectionStart),
        "http.request.connection_end": oge(e.connectEnd),
        "http.request.request_start": oge(e.requestStart),
        "http.request.response_start": oge(e.responseStart),
        "http.request.response_end": oge(e.responseEnd),
        "http.request.time_to_first_byte": e.responseStart != null ? e.responseStart / 1e3 : void 0
    }) : t;
}
function Zcg(e) {
    return Object.fromEntries(Object.entries(e).filter(([, t])=>t != null));
}
export function hEc() {
    if (fpn() && Y4()) {
        const t = Qcg();
        return ()=>{
            t();
        };
    }
    return ()=>{};
}
function Qcg() {
    return nEc(gEc);
}
export function pEc() {
    const e = Object.keys(Rpi);
    apn() && e.forEach((r)=>{
        by.addEventListener(r, t, {
            capture: !0,
            passive: !0
        });
    });
    function t(r) {
        const s = r.target;
        if (!s) return;
        const o = gK(s), a = Math.round(r.timeStamp);
        if (Zdt.set(a, o), Zdt.size > 50) {
            const c = Zdt.keys().next().value;
            c !== void 0 && Zdt.delete(c);
        }
    }
    function n(r) {
        const s = Math.round(r.startTime);
        let o = Zdt.get(s);
        if (!o) for(let a = -5; a <= 5; a++){
            const c = Zdt.get(s + a);
            if (c) {
                o = c;
                break;
            }
        }
        return o || "<unknown>";
    }
    const i = ({ entries: r })=>{
        const s = mD(), o = s && pD(s);
        r.forEach((a)=>{
            if (!Gcg(a)) return;
            const c = a.interactionId;
            if (c == null || vpn.has(c)) return;
            const l = a.target ? gK(a.target) : n(a);
            if (Api.length > 10) {
                const u = Api.shift();
                vpn.delete(u);
            }
            Api.push(c), vpn.set(c, {
                span: o,
                elementName: l
            });
        });
    };
    _qe("event", i), _qe("first-input", i);
}
export function fEc({ recordClsStandaloneSpans: e, recordLcpStandaloneSpans: t, client: n }) {
    const i = fpn();
    if (i && Y4()) {
        i.mark && by.performance.mark("sentry-tracing-init");
        const r = t ? Kcg(n) : tlg(), s = nlg(), o = e ? jcg(n) : elg();
        return ()=>{
            r?.(), s(), o?.();
        };
    }
    return ()=>{};
}
export function vEc() {
    _qe("longtask", ({ entries: e })=>{
        const t = mD();
        if (!t) return;
        const { op: n, start_timestamp: i } = iv(t);
        for (const r of e){
            const s = QB(Y4() + r.startTime), o = QB(r.duration);
            n === "navigation" && i && s < i || bqe(t, s, s + o, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [jC]: "auto.ui.browser.metrics"
                }
            });
        }
    });
}
export function _Ec() {
    new PerformanceObserver((t)=>{
        const n = mD();
        if (n) for (const i of t.getEntries()){
            if (!i.scripts[0]) continue;
            const r = QB(Y4() + i.startTime), { start_timestamp: s, op: o } = iv(n);
            if (o === "navigation" && s && r < s) continue;
            const a = QB(i.duration), c = {
                [jC]: "auto.ui.browser.metrics"
            }, l = i.scripts[0], { invoker: u, invokerType: h, sourceURL: p, sourceFunctionName: g, sourceCharPosition: f } = l;
            c["browser.script.invoker"] = u, c["browser.script.invoker_type"] = h, p && (c["code.filepath"] = p), g && (c["code.function"] = g), f !== -1 && (c["browser.script.source_char_position"] = f), bqe(n, r, r + a, {
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                attributes: c
            });
        }
    }).observe({
        type: "long-animation-frame",
        buffered: !0
    });
}
export function bEc() {
    _qe("event", ({ entries: e })=>{
        const t = mD();
        if (t) {
            for (const n of e)if (n.name === "click") {
                const i = QB(Y4() + n.startTime), r = QB(n.duration), s = {
                    name: gK(n.target),
                    op: `ui.interaction.${n.name}`,
                    startTime: i,
                    attributes: {
                        [jC]: "auto.ui.browser.metrics"
                    }
                }, o = nhi(n.target);
                o && (s.attributes["ui.component_name"] = o), bqe(t, i, i + r, s);
            }
        }
    });
}
function elg() {
    return Djr(({ metric: e })=>{
        const t = e.entries[e.entries.length - 1];
        t && (age.cls = {
            value: e.value,
            unit: ""
        }, Mpi = t);
    }, !0);
}
function tlg() {
    return Mjr(({ metric: e })=>{
        const t = e.entries[e.entries.length - 1];
        t && (age.lcp = {
            value: e.value,
            unit: "millisecond"
        }, Bie = t);
    }, !0);
}
function nlg() {
    return Fcg(({ metric: e })=>{
        e.entries[e.entries.length - 1] && (age.ttfb = {
            value: e.value,
            unit: "millisecond"
        });
    });
}
export function yEc(e, t) {
    const n = fpn(), i = Y4();
    if (!n?.getEntries || !i) return;
    const r = QB(i), s = n.getEntries(), { op: o, start_timestamp: a } = iv(e);
    s.slice(Ojr).forEach((c)=>{
        const l = QB(c.startTime), u = QB(Math.max(0, c.duration));
        if (!(o === "navigation" && a && r + l < a)) switch(c.entryType){
            case "navigation":
                {
                    olg(e, c, r);
                    break;
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    rlg(e, c, l, u, r, t.ignorePerformanceApiSpans);
                    const h = wpi(), p = c.startTime < h.firstHiddenTime;
                    c.name === "first-paint" && p && (age.fp = {
                        value: c.startTime,
                        unit: "millisecond"
                    }), c.name === "first-contentful-paint" && p && (age.fcp = {
                        value: c.startTime,
                        unit: "millisecond"
                    });
                    break;
                }
            case "resource":
                {
                    llg(e, c, c.name, l, u, r, t.ignoreResourceSpans);
                    break;
                }
        }
    }), Ojr = Math.max(s.length - 1, 0), ulg(e), o === "pageload" && (plg(age), t.recordClsOnPageloadSpan || delete age.cls, t.recordLcpOnPageloadSpan || delete age.lcp, Object.entries(age).forEach(([c, l])=>{
        pGr(c, l.value, l.unit);
    }), e.setAttribute("performance.timeOrigin", r), e.setAttribute("performance.activationStart", Kdt()), dlg(e, t)), Bie = void 0, Mpi = void 0, age = {};
}
function ilg(e) {
    if (e?.entryType === "measure") try {
        return e.detail.devtools.track === "Components \u269B";
    } catch  {
        return;
    }
}
function rlg(e, t, n, i, r, s) {
    if (ilg(t) || [
        "mark",
        "measure"
    ].includes(t.entryType) && CV(t.name, s)) return;
    const o = WLt(!1), a = QB(o ? o.requestStart : 0), c = r + Math.max(n, a), l = r + n, u = l + i, h = {
        [jC]: "auto.resource.browser.metrics"
    };
    c !== l && (h["sentry.browser.measure_happened_before_request"] = !0, h["sentry.browser.measure_start_time"] = c), slg(h, t), c <= u && bqe(e, c, u, {
        name: t.name,
        op: t.entryType,
        attributes: h
    });
}
function slg(e, t) {
    try {
        const n = t.detail;
        if (!n) return;
        if (typeof n == "object") {
            for (const [i, r] of Object.entries(n))if (r && Wce(r)) e[`sentry.browser.measure.detail.${i}`] = r;
            else if (r !== void 0) try {
                e[`sentry.browser.measure.detail.${i}`] = JSON.stringify(r);
            } catch  {}
            return;
        }
        if (Wce(n)) {
            e["sentry.browser.measure.detail"] = n;
            return;
        }
        try {
            e["sentry.browser.measure.detail"] = JSON.stringify(n);
        } catch  {}
    } catch  {}
}
function olg(e, t, n) {
    [
        "unloadEvent",
        "redirect",
        "domContentLoadedEvent",
        "loadEvent",
        "connect"
    ].forEach((i)=>{
        Dpi(e, t, i, n);
    }), Dpi(e, t, "secureConnection", n, "TLS/SSL"), Dpi(e, t, "fetch", n, "cache"), Dpi(e, t, "domainLookup", n, "DNS"), clg(e, t, n);
}
function Dpi(e, t, n, i, r = n) {
    const s = alg(n), o = t[s], a = t[`${n}Start`];
    !a || !o || bqe(e, i + QB(a), i + QB(o), {
        op: `browser.${r}`,
        name: t.name,
        attributes: {
            [jC]: "auto.ui.browser.metrics",
            ...n === "redirect" && t.redirectCount != null ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    });
}
function alg(e) {
    return e === "secureConnection" ? "connectEnd" : e === "fetch" ? "domainLookupStart" : `${e}End`;
}
function clg(e, t, n) {
    const i = n + QB(t.requestStart), r = n + QB(t.responseEnd), s = n + QB(t.responseStart);
    t.responseEnd && (bqe(e, i, r, {
        op: "browser.request",
        name: t.name,
        attributes: {
            [jC]: "auto.ui.browser.metrics"
        }
    }), bqe(e, s, r, {
        op: "browser.response",
        name: t.name,
        attributes: {
            [jC]: "auto.ui.browser.metrics"
        }
    }));
}
function llg(e, t, n, i, r, s, o) {
    if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch") return;
    const a = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
    if (o?.includes(a)) return;
    const c = {
        [jC]: "auto.resource.browser.metrics"
    }, l = Lie(n);
    l.protocol && (c["url.scheme"] = l.protocol.split(":").pop()), l.host && (c["server.address"] = l.host), c["url.same_origin"] = n.includes(by.location.origin), hlg(t, c, [
        [
            "responseStatus",
            "http.response.status_code"
        ],
        [
            "transferSize",
            "http.response_transfer_size"
        ],
        [
            "encodedBodySize",
            "http.response_content_length"
        ],
        [
            "decodedBodySize",
            "http.decoded_response_content_length"
        ],
        [
            "renderBlockingStatus",
            "resource.render_blocking_status"
        ],
        [
            "deliveryType",
            "http.response_delivery_type"
        ]
    ]);
    const u = {
        ...c,
        ...Njr(t)
    }, h = s + i, p = h + r;
    bqe(e, h, p, {
        name: n.replace(by.location.origin, ""),
        op: a,
        attributes: u
    });
}
function ulg(e) {
    const t = by.navigator;
    if (!t) return;
    const n = t.connection;
    n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), Pjr(n.rtt) && (age["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })), Pjr(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`), Pjr(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency));
}
function dlg(e, t) {
    Bie && t.recordLcpOnPageloadSpan && (Bie.element && e.setAttribute("lcp.element", gK(Bie.element)), Bie.id && e.setAttribute("lcp.id", Bie.id), Bie.url && e.setAttribute("lcp.url", Bie.url.trim().slice(0, 200)), Bie.loadTime != null && e.setAttribute("lcp.loadTime", Bie.loadTime), Bie.renderTime != null && e.setAttribute("lcp.renderTime", Bie.renderTime), e.setAttribute("lcp.size", Bie.size)), Mpi?.sources && t.recordClsOnPageloadSpan && Mpi.sources.forEach((n, i)=>e.setAttribute(`cls.source.${i + 1}`, gK(n.node)));
}
function hlg(e, t, n) {
    n.forEach(([i, r])=>{
        const s = e[i];
        s != null && (typeof s == "number" && s < SEc || typeof s == "string") && (t[r] = s);
    });
}
function plg(e) {
    const t = WLt(!1);
    if (!t) return;
    const { responseStart: n, requestStart: i } = t;
    i <= n && (e["ttfb.requestTime"] = {
        value: n - i,
        unit: "millisecond"
    });
}
var Bie, Mpi;
export function kEc() {
    return fpn() && Y4() ? _qe("element", wEc) : ()=>{};
}
export function Fjr(e) {
    N3e("dom", e), O3e("dom", flg);
}
function flg() {
    if (!by.document) return;
    const e = Hce.bind(null, "dom"), t = CEc(e, !0);
    by.document.addEventListener("click", t, !1), by.document.addEventListener("keypress", t, !1), [
        "EventTarget",
        "Node"
    ].forEach((n)=>{
        const r = by[n]?.prototype;
        r?.hasOwnProperty?.("addEventListener") && (sA(r, "addEventListener", function(s) {
            return function(o, a, c) {
                if (o === "click" || o == "keypress") try {
                    const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, u = l[o] = l[o] || {
                        refCount: 0
                    };
                    if (!u.handler) {
                        const h = CEc(e);
                        u.handler = h, s.call(this, o, h, c);
                    }
                    u.refCount++;
                } catch  {}
                return s.call(this, o, a, c);
            };
        }), sA(r, "removeEventListener", function(s) {
            return function(o, a, c) {
                if (o === "click" || o == "keypress") try {
                    const l = this.__sentry_instrumentation_handlers__ || {}, u = l[o];
                    u && (u.refCount--, u.refCount <= 0 && (s.call(this, o, u.handler, c), u.handler = void 0, delete l[o]), Object.keys(l).length === 0 && delete this.__sentry_instrumentation_handlers__);
                } catch  {}
                return s.call(this, o, a, c);
            };
        }));
    });
}
function vlg(e) {
    if (e.type !== Bjr) return !1;
    try {
        if (!e.target || e.target._sentryId !== Ujr) return !1;
    } catch  {}
    return !0;
}
function _lg(e, t) {
    return e !== "keypress" ? !1 : t?.tagName ? !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) : !0;
}
function CEc(e, t = !1) {
    return (n)=>{
        if (!n || n._sentryCaptured) return;
        const i = blg(n);
        if (_lg(n.type, i)) return;
        jH(n, "_sentryCaptured", !0), i && !i._sentryId && jH(i, "_sentryId", gI());
        const r = n.type === "keypress" ? "input" : n.type;
        vlg(n) || (e({
            event: n,
            name: r,
            global: t
        }), Bjr = n.type, Ujr = i ? i._sentryId : void 0), clearTimeout(EEc), EEc = by.setTimeout(()=>{
            Ujr = void 0, Bjr = void 0;
        }, TEc);
    };
}
function blg(e) {
    try {
        return e.target;
    } catch  {
        return null;
    }
}
var EEc, Bjr, Ujr;
export function Qdt(e) {
    const t = "history";
    N3e(t, e), O3e(t, Slg);
}
function Slg() {
    if (by.addEventListener("popstate", ()=>{
        const t = by.location.href, n = Ppi;
        if (Ppi = t, n === t) return;
        Hce("history", {
            from: n,
            to: t
        });
    }), !gTc()) return;
    function e(t) {
        return function(...n) {
            const i = n.length > 2 ? n[2] : void 0;
            if (i) {
                const r = Ppi, s = klg(String(i));
                if (Ppi = s, r === s) return t.apply(this, n);
                Hce("history", {
                    from: r,
                    to: s
                });
            }
            return t.apply(this, n);
        };
    }
    sA(by.history, "pushState", e), sA(by.history, "replaceState", e);
}
function klg(e) {
    try {
        return new URL(e, by.location.origin).toString();
    } catch  {
        return e;
    }
}
var Ppi;
export function _pn(e) {
    const t = ypn[e];
    if (t) return t;
    let n = by[e];
    if (vpi(n)) return ypn[e] = n.bind(by);
    const i = by.document;
    if (i && typeof i.createElement == "function") try {
        const r = i.createElement("iframe");
        r.hidden = !0, i.head.appendChild(r);
        const s = r.contentWindow;
        s?.[e] && (n = s[e]), i.head.removeChild(r);
    } catch (r) {
        vqe && zr.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, r);
    }
    return n && (ypn[e] = n.bind(by));
}
export function xEc(e) {
    ypn[e] = void 0;
}
export function bpn(...e) {
    return _pn("setTimeout")(...e);
}
export function YLt(e) {
    N3e("xhr", e), O3e("xhr", Tlg);
}
function Tlg() {
    if (!by.XMLHttpRequest) return;
    const e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply (t, n, i) {
            const r = new Error, s = sR() * 1e3, o = JQ(i[0]) ? i[0].toUpperCase() : void 0, a = Elg(i[1]);
            if (!o || !a) return t.apply(n, i);
            n[Uie] = {
                method: o,
                url: a,
                request_headers: {}
            }, o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const c = ()=>{
                const l = n[Uie];
                if (l && n.readyState === 4) {
                    try {
                        l.status_code = n.status;
                    } catch  {}
                    const u = {
                        endTimestamp: sR() * 1e3,
                        startTimestamp: s,
                        xhr: n,
                        virtualError: r
                    };
                    Hce("xhr", u);
                }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply (l, u, h) {
                    return c(), l.apply(u, h);
                }
            }) : n.addEventListener("readystatechange", c), n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply (l, u, h) {
                    const [p, g] = h, f = u[Uie];
                    return f && JQ(p) && JQ(g) && (f.request_headers[p.toLowerCase()] = g), l.apply(u, h);
                }
            }), t.apply(n, i);
        }
    }), e.send = new Proxy(e.send, {
        apply (t, n, i) {
            const r = n[Uie];
            if (!r) return t.apply(n, i);
            i[0] !== void 0 && (r.body = i[0]);
            const s = {
                startTimestamp: sR() * 1e3,
                xhr: n
            };
            return Hce("xhr", s), t.apply(n, i);
        }
    });
}
function Elg(e) {
    if (JQ(e)) return e;
    try {
        return e.toString();
    } catch  {}
}
export function IEc(e) {
    return new URLSearchParams(e).toString();
}
export function XLt(e, t = zr) {
    try {
        if (typeof e == "string") return [
            e
        ];
        if (e instanceof URLSearchParams) return [
            e.toString()
        ];
        if (e instanceof FormData) return [
            IEc(e)
        ];
        if (!e) return [
            void 0
        ];
    } catch (n) {
        return vqe && t.error(n, "Failed to serialize body", e), [
            void 0,
            "BODY_PARSE_ERROR"
        ];
    }
    return vqe && t.log("Skipping network body because of body type", e), [
        void 0,
        "UNPARSEABLE_BODY_TYPE"
    ];
}
export function Lpi(e = []) {
    if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
export function $jr(e) {
    let t;
    try {
        t = e.getAllResponseHeaders();
    } catch (n) {
        return vqe && zr.error(n, "Failed to get xhr response headers", e), {};
    }
    return t ? t.split(`\r
`).reduce((n, i)=>{
        const [r, s] = i.split(": ");
        return s && (n[r.toLowerCase()] = s), n;
    }, {}) : {};
}
export function AEc(e, t) {
    const n = e;
    typeof n.vscodeWindowId != "number" && Object.defineProperty(n, "vscodeWindowId", {
        get: ()=>t
    });
}
export function $ie(e) {
    return e === on ? !1 : typeof e?.vscodeWindowId == "number";
}
export function cge(e, t = 0) {
    const n = e.vscodeWindowId;
    return typeof n == "number" ? n : t;
}
export function ZLt(e, t) {
    const n = Object.create(null);
    for (const i of e){
        const r = t(i);
        let s = n[r];
        s || (s = n[r] = []), s.push(i);
    }
    return n;
}
export function Spn(e, t) {
    const n = [], i = [];
    for (const r of e)t.has(r) || n.push(r);
    for (const r of t)e.has(r) || i.push(r);
    return {
        removed: n,
        added: i
    };
}
export function Hjr(e, t) {
    const n = [], i = [];
    for (const [r, s] of e)t.has(r) || n.push(s);
    for (const [r, s] of t)e.has(r) || i.push(s);
    return {
        removed: n,
        added: i
    };
}
export function Alg(e, t) {
    const n = new Set;
    for (const i of t)e.has(i) && n.add(i);
    return n;
}
export function Rlg(e) {
    Jdt.setUnexpectedErrorHandler(e);
}
export function kpn(e) {
    Jdt.onUnexpectedError(e);
}
export function ns(e) {
    ja(e) || Jdt.onUnexpectedError(e);
}
export function c1(e) {
    ja(e) || Jdt.onUnexpectedExternalError(e);
}
export function Npi(e) {
    if (e instanceof Error) {
        const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
        return {
            $isError: !0,
            name: t,
            message: n,
            stack: r,
            noTelemetry: OT.isErrorNoTelemetry(e),
            cause: i ? Npi(i) : void 0,
            code: e.code
        };
    }
    return e;
}
export function QLt(e) {
    let t;
    return e.noTelemetry ? t = new OT : (t = new Error, t.name = e.name), t.message = e.message, t.stack = e.stack, e.code && (t.code = e.code), e.cause && (t.cause = QLt(e.cause)), t;
}
export function ja(e) {
    return e instanceof Rl ? !0 : e instanceof Error && e.name === wpn && e.message === wpn;
}
export function uge() {
    const e = new Error(wpn);
    return e.name = e.message, e;
}
export function JLt(e) {
    return new DOMException(e, "AbortError");
}
export function C_(e) {
    return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument");
}
export function Wjr(e) {
    return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
export function Ym(e) {
    return e ? e.message ? e.message : e.stack ? e.stack.split(`
`)[0] : String(e) : "Error";
}
export function Gjr(e) {
    let t = e;
    for(; t;){
        if (t instanceof DOMException && t.name === "TimeoutError") return !0;
        if (t instanceof Error && t.cause) t = t.cause;
        else break;
    }
    return !1;
}
export function yqe(e, t, n) {
    if (!n) return e;
    n.throwIfAborted();
    let i = n, r, s;
    const o = new Promise((l, u)=>{
        r = l, s = u;
    }), a = ()=>{
        const l = {
            signal: i,
            resolve: r,
            reject: s
        };
        return i?.removeEventListener("abort", c), i = void 0, r = void 0, s = void 0, l;
    }, c = ()=>{
        const { signal: l, reject: u } = a(), h = new Error(t);
        h.cause = l?.reason, u?.(h);
    };
    return n.addEventListener("abort", c), e.then((l)=>a().resolve?.(l), (l)=>a().reject?.(l)), o;
}
export function PEc() {
    const e = Date.now();
    return e < jjr ? !1 : (jjr = e + NEc, !0);
}
export function Dlg(e) {
    e && (Fpi = !0);
}
export function Mlg() {
    return Fpi;
}
export function G9(e, t) {
    const n = this;
    let i = !1, r;
    return function() {
        if (i) return r;
        if (i = !0, t) try {
            r = e.apply(n, arguments);
        } finally{
            t();
        }
        else r = e.apply(n, arguments);
        return r;
    };
}
export function Hie(e, t, n = e.length - 1) {
    const i = eNt(e, t, n);
    if (i !== -1) return e[i];
}
export function eNt(e, t, n = e.length - 1) {
    for(let i = n; i >= 0; i--){
        const r = e[i];
        if (t(r)) return i;
    }
    return -1;
}
export function tNt(e, t) {
    const n = nNt(e, t);
    return n === -1 ? void 0 : e[n];
}
export function nNt(e, t, n = 0, i = e.length) {
    let r = n, s = i;
    for(; r < s;){
        const o = Math.floor((r + s) / 2);
        t(e[o]) ? r = o + 1 : s = o;
    }
    return r - 1;
}
export function Plg(e, t) {
    const n = dge(e, t);
    return n === e.length ? void 0 : e[n];
}
export function dge(e, t, n = 0, i = e.length) {
    let r = n, s = i;
    for(; r < s;){
        const o = Math.floor((r + s) / 2);
        t(e[o]) ? s = o : r = o + 1;
    }
    return r;
}
export function qjr(e, t) {
    if (e.length === 0) return;
    let n = e[0];
    for(let i = 1; i < e.length; i++){
        const r = e[i];
        t(r, n) > 0 && (n = r);
    }
    return n;
}
export function OEc(e, t) {
    if (e.length === 0) return;
    let n = e[0];
    for(let i = 1; i < e.length; i++){
        const r = e[i];
        t(r, n) >= 0 && (n = r);
    }
    return n;
}
export function FEc(e, t) {
    return qjr(e, (n, i)=>-t(n, i));
}
export function Llg(e, t) {
    if (e.length === 0) return -1;
    let n = 0;
    for(let i = 1; i < e.length; i++){
        const r = e[i];
        t(r, e[n]) > 0 && (n = i);
    }
    return n;
}
export function Bpi(e, t) {
    for (const n of e){
        const i = t(n);
        if (i !== void 0) return i;
    }
}
export function l3(e) {
    if (e.length === 0) throw new Error("Invalid tail call");
    return [
        e.slice(0, e.length - 1),
        e[e.length - 1]
    ];
}
export function nh(e, t, n = (i, r)=>i === r) {
    if (e === t) return !0;
    if (!e || !t || e.length !== t.length) return !1;
    for(let i = 0, r = e.length; i < r; i++)if (!n(e[i], t[i])) return !1;
    return !0;
}
export function Upi(e, t) {
    const n = e.length - 1;
    t < n && (e[t] = e[n]), e.pop();
}
export function V3e(e, t, n) {
    return Cpn(e.length, (i)=>n(e[i], t));
}
export function Cpn(e, t) {
    let n = 0, i = e - 1;
    for(; n <= i;){
        const r = (n + i) / 2 | 0, s = t(r);
        if (s < 0) n = r + 1;
        else if (s > 0) i = r - 1;
        else return r;
    }
    return -(n + 1);
}
export function $pi(e, t, n) {
    if (e = e | 0, e >= t.length) throw new TypeError("invalid index");
    const i = t[Math.floor(t.length * Math.random())], r = [], s = [], o = [];
    for (const a of t){
        const c = n(a, i);
        c < 0 ? r.push(a) : c > 0 ? s.push(a) : o.push(a);
    }
    return e < r.length ? $pi(e, r, n) : e < r.length + o.length ? o[0] : $pi(e - (r.length + o.length), s, n);
}
export function Wie(e, t) {
    const n = [];
    let i;
    for (const r of e.slice(0).sort(t))!i || t(i[0], r) !== 0 ? (i = [
        r
    ], n.push(i)) : i.push(r);
    return n;
}
export function* Hpi(e, t) {
    let n, i;
    for (const r of e)i !== void 0 && t(i, r) ? n.push(r) : (n && (yield n), n = [
        r
    ]), i = r;
    n && (yield n);
}
export function BEc(e, t) {
    for(let n = 0; n <= e.length; n++)t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
export function Nlg(e, t) {
    for(let n = 0; n < e.length; n++)t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
export function Yjr(e, t, n) {
    const i = [];
    function r(a, c, l) {
        if (c === 0 && l.length === 0) return;
        const u = i[i.length - 1];
        u && u.start + u.deleteCount === a ? (u.deleteCount += c, u.toInsert.push(...l)) : i.push({
            start: a,
            deleteCount: c,
            toInsert: l
        });
    }
    let s = 0, o = 0;
    for(;;){
        if (s === e.length) {
            r(s, 0, t.slice(o));
            break;
        }
        if (o === t.length) {
            r(s, e.length - s, []);
            break;
        }
        const a = e[s], c = t[o], l = n(a, c);
        l === 0 ? (s += 1, o += 1) : l < 0 ? (r(s, 1, []), s += 1) : l > 0 && (r(s, 0, [
            c
        ]), o += 1);
    }
    return i;
}
export function Sqe(e, t, n) {
    const i = Yjr(e, t, n), r = [], s = [];
    for (const o of i)r.push(...e.slice(o.start, o.start + o.deleteCount)), s.push(...o.toInsert);
    return {
        removed: r,
        added: s
    };
}
export function Olg(e, t, n) {
    if (n === 0) return [];
    const i = e.slice(0, n).sort(t);
    return Flg(e, t, i, n, e.length), i;
}
function Flg(e, t, n, i, r) {
    for(const s = n.length; i < r; i++){
        const o = e[i];
        if (t(o, n[s - 1]) < 0) {
            n.pop();
            const a = dge(n, (c)=>t(o, c) < 0);
            n.splice(a, 0, o);
        }
    }
}
export function qu(e) {
    return e.filter((t)=>!!t);
}
export function Tpn(e) {
    let t = 0;
    for(let n = 0; n < e.length; n++)e[n] && (e[t] = e[n], t += 1);
    e.length = t;
}
export function Blg(e, t, n) {
    e.splice(n, 0, e.splice(t, 1)[0]);
}
export function Wpi(e) {
    return !Array.isArray(e) || e.length === 0;
}
export function iy(e) {
    return Array.isArray(e) && e.length > 0;
}
export function Xm(e, t = (n)=>n) {
    const n = new Set;
    return e.filter((i)=>{
        const r = t(i);
        return n.has(r) ? !1 : (n.add(r), !0);
    });
}
export function Ulg(e) {
    const t = new Set;
    return (n)=>{
        const i = e(n);
        return t.has(i) ? !1 : (t.add(i), !0);
    };
}
export function $lg(e, t, n = (i, r)=>i === r) {
    let i = 0;
    for(let r = 0, s = Math.min(e.length, t.length); r < s && n(e[r], t[r]); r++)i++;
    return i;
}
export function x7(e, t) {
    let n = typeof t == "number" ? e : 0;
    typeof t == "number" ? n = e : (n = 0, t = e);
    const i = [];
    if (n <= t) for(let r = n; r < t; r++)i.push(r);
    else for(let r = n; r > t; r--)i.push(r);
    return i;
}
export function Epn(e, t, n) {
    return e.reduce((i, r)=>(i[t(r)] = n ? n(r) : r, i), Object.create(null));
}
export function kqe(e, t) {
    return e.push(t), ()=>Xjr(e, t);
}
export function Xjr(e, t) {
    const n = e.indexOf(t);
    if (n > -1) return e.splice(n, 1), t;
}
export function xpn(e, t, n) {
    const i = e.slice(0, t), r = e.slice(t);
    return i.concat(n, r);
}
export function Ipn(e, t) {
    let n;
    if (typeof t == "number") {
        let i = t;
        n = ()=>{
            const r = Math.sin(i++) * 179426549;
            return r - Math.floor(r);
        };
    } else n = Math.random;
    for(let i = e.length - 1; i > 0; i -= 1){
        const r = Math.floor(n() * (i + 1)), s = e[i];
        e[i] = e[r], e[r] = s;
    }
}
export function Zjr(e, t) {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), e.unshift(t));
}
export function Gpi(e, t) {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), e.push(t));
}
export function Qjr(e, t) {
    for (const n of t)e.push(n);
}
export function Hlg(e, t) {
    return Array.isArray(e) ? e.map(t) : t(e);
}
export function EV(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}
export function Vpi(e, t, n) {
    const i = UEc(e, t), r = e.length, s = n.length;
    e.length = r + s;
    for(let o = r - 1; o >= i; o--)e[o + s] = e[o];
    for(let o = 0; o < s; o++)e[o + i] = n[o];
}
export function jpi(e, t, n, i) {
    const r = UEc(e, t);
    let s = e.splice(r, n);
    return s === void 0 && (s = []), Vpi(e, r, i), s;
}
function UEc(e, t) {
    return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length);
}
export function DP(e, t) {
    return (n, i)=>t(e(n), e(i));
}
export function $Ec(...e) {
    return (t, n)=>{
        for (const i of e){
            const r = i(t, n);
            if (!iJ.isNeitherLessOrGreaterThan(r)) return r;
        }
        return iJ.neitherLessOrGreaterThan;
    };
}
export function HEc(e) {
    return (t, n)=>-e(t, n);
}
export function Wlg(e) {
    return (t, n)=>t === void 0 ? n === void 0 ? iJ.neitherLessOrGreaterThan : iJ.lessThan : n === void 0 ? iJ.greaterThan : e(t, n);
}
export async function Glg(e, t) {
    return (await Promise.all(e.map(async (i, r)=>({
            element: i,
            ok: await t(i, r)
        })))).find((i)=>i.ok)?.element;
}
export function eht(e, t, n) {
    let i = e.get(t);
    return i === void 0 && (i = n, e.set(t, i)), i;
}
export function Vlg(e) {
    return Array.isArray(e);
}
export function VEc(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (const [n, i] of e)if (!t.has(n) || t.get(n) !== i) return !1;
    for (const [n] of t)if (!e.has(n)) return !1;
    return !0;
}
export function oNt(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}
export function QN(e, t = "Unreachable") {
    throw new Error(t);
}
export function Rpn(e, t = "unexpected state") {
    if (!e) throw typeof t == "string" ? new Zu(`Assertion Failed: ${t}`) : t;
}
export function ZEc(e, t = "Soft Assertion Failed") {
    e || ns(new Zu(t));
}
export function rJ(e) {
    if (!e()) {
        debugger;
        e(), ns(new Zu("Assertion Failed"));
    }
}
export function vAe(e, t) {
    let n = 0;
    for(; n < e.length - 1;){
        const i = e[n], r = e[n + 1];
        if (!t(i, r)) return !1;
        n++;
    }
    return !0;
}
export function Xr(e) {
    return typeof e == "string";
}
export function _Ae(e) {
    return Array.isArray(e) && e.every((t)=>Xr(t));
}
export function dp(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
export function jlg(e) {
    const t = Object.getPrototypeOf(Uint8Array);
    return typeof e == "object" && e instanceof t;
}
export function T0(e) {
    return typeof e == "number" && !isNaN(e);
}
export function nqr(e) {
    return !!e && typeof e[Symbol.iterator] == "function";
}
export function Sx(e) {
    return e === !0 || e === !1;
}
export function om(e) {
    return typeof e > "u";
}
export function Tl(e) {
    return !Tf(e);
}
export function Tf(e) {
    return om(e) || e === null;
}
export function Im(e, t) {
    if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
export function tl(e) {
    return Rpn(e != null, "Argument is `undefined` or `null`."), e;
}
export function Zce(...e) {
    const t = [];
    for(let n = 0; n < e.length; n++){
        const i = e[n];
        if (Tf(i)) throw new Error(`Assertion Failed: argument at index ${n} is undefined or null`);
        t.push(i);
    }
    return t;
}
export function pge(e) {
    if (!dp(e)) return !1;
    for(const t in e)if (exc.call(e, t)) return !1;
    return !0;
}
export function wqe(e) {
    return typeof e == "function";
}
export function QEc(...e) {
    return e.length > 0 && e.every(wqe);
}
export function JEc(e, t) {
    const n = Math.min(e.length, t.length);
    for(let i = 0; i < n; i++)qlg(e[i], t[i]);
}
function qlg(e, t) {
    if (Xr(t)) {
        if (typeof e !== t) throw new Error(`argument does not match constraint: typeof ${t}`);
    } else if (wqe(t)) {
        try {
            if (e instanceof t) return;
        } catch  {}
        if (!Tf(e) && e.constructor === t || t.length === 1 && t.call(void 0, e) === !0) return;
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
function AWk(e) {
    return e;
}
export function aNt(e, t) {
    if (q3e?.onLifecycleMisuse?.(e, t), !cNt) return;
    const n = `${t}\0${e.stack ?? ""}`;
    Kpi.has(n) || Kpi.size >= rxc || (Kpi.add(n), cNt(e, t));
}
export function iqr(e) {
    aNt(e, "disposable_post_dispose_set");
}
export function zlg(e) {
    if (globalThis.Object !== Object || (nxc() && console.warn(`[LEAKED DISPOSABLE] ${e}`), !cNt || Ypi.has(e) || Ypi.size >= sxc)) return;
    Ypi.add(e);
    const t = e.split(`
`).slice(1).find((i)=>!i.match(/common\/(lifecycle|event)/)), n = new Error(`[LEAKED DISPOSABLE] ${t}`);
    n.stack = e, cNt(n, "disposable_leak");
}
export function zpi(e) {
    q3e = e;
}
export function j3e(e) {
    return q3e?.trackDisposable(e), e;
}
export function ewe(e) {
    q3e?.markAsDisposed(e);
}
export function tht(e, t) {
    q3e?.setParent(e, t);
}
function Klg(e, t) {
    if (q3e) for (const n of e)q3e.setParent(n, t);
}
export function u3(e) {
    return q3e?.markAsSingleton(e), e;
}
export function I7(e) {
    return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
export function Lo(e) {
    if (_a.is(e)) {
        let t;
        for (const n of e)if (n) try {
            n.dispose();
        } catch (i) {
            (t ??= []).push(i);
        }
        if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e;
    } else if (e) return e.dispose(), e;
}
export function Pk(...e) {
    Lo(e);
}
export function rqr(e) {
    for (const t of e)I7(t) && t.dispose();
    return [];
}
export function U_(...e) {
    const t = rn(()=>Lo(e));
    return Klg(e, t), t;
}
export function rn(e) {
    const t = j3e({
        dispose: G9(()=>{
            ewe(t), e();
        })
    });
    return t;
}
export function Ylg(e, t) {
    let n = !1;
    return e.then((i)=>{
        n || t(i);
    }), rn(()=>{
        n = !0;
    });
}
export function xV(e, t) {
    return e.then((n)=>(t.isDisposed ? n.dispose() : t.add(n), n));
}
export function pxc() {
    return (gxc++).toString(16).padStart(3, "0");
}
export function Xlg(e, t, n) {
    const i = new po;
    let r = new Set(e());
    for (const o of r)i.set(o, n(o));
    const s = new He;
    return s.add(t(()=>{
        const o = e(), a = Spn(r, o);
        for (const c of a.removed)i.deleteAndDispose(c);
        for (const c of a.added)i.set(c, n(c));
        r = new Set(o);
    })), s.add(i), s;
}
export function mge(e) {
    const t = new Eo;
    let n;
    e && (e.aborted ? t.cancel() : (n = ()=>t.cancel(), e.addEventListener("abort", n, {
        once: !0
    })));
    const i = ()=>{
        e && n && e.removeEventListener("abort", n), t.dispose();
    };
    return {
        get token () {
            return t.token;
        },
        dispose: i,
        [Symbol.dispose]: i
    };
}
export function nht(e) {
    const t = new Eo;
    return e.add({
        dispose () {
            t.cancel();
        }
    }), t.token;
}
export function fqr() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
export function imi() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}
function rmi(e, t) {
    let n;
    return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r)=>{
        const s = parseInt(r, 10), o = t[s];
        let a = i;
        return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
    }), Txc && (n = "\uFF3B" + n.replace(/[aouei]/g, "$&$&") + "\uFF3D"), n;
}
export function S(e, t, ...n) {
    return rmi(typeof e == "number" ? Cxc(e, t) : t, n);
}
function Cxc(e, t) {
    const n = fqr()?.[e];
    if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
    }
    return n;
}
export function Ae(e, t, ...n) {
    let i;
    typeof e == "number" ? i = Cxc(e, t) : i = t;
    const r = rmi(i, n);
    return {
        value: r,
        original: t === i ? r : rmi(t, n)
    };
}
export function Lpn(e) {
    switch(e){
        case 0:
            return "Web";
        case 1:
            return "Mac";
        case 2:
            return "Linux";
        case 3:
            return "Windows";
    }
}
export function vqr() {
    if (!Rqr) {
        Rqr = !0;
        const e = new Uint8Array(2);
        e[0] = 1, e[1] = 2, Aqr = new Uint16Array(e.buffer)[0] === 513;
    }
    return Aqr;
}
export function _qr(e) {
    return parseFloat(e) >= 25;
}
export function Zlg(e) {
    Bpn = e;
}
export function Exc() {
    return Bpn ?? "unknown";
}
export function Qlg() {
    return !iht || Bpn === void 0 ? !1 : _qr(Bpn);
}
function Jlg(e, t) {
    if (e === null || typeof e != "object") throw new Nqr(t, "Object", e);
}
export function e5(e, t) {
    if (typeof e != "string") throw new Nqr(t, "string", e);
}
export function Qk(e) {
    return e === A7 || e === oJ;
}
export function Lqr(e) {
    return e === A7;
}
export function Y3e(e) {
    return e >= Nxc && e <= Fxc || e >= Oxc && e <= Bxc;
}
export function umi(e, t, n, i) {
    let r = "", s = 0, o = -1, a = 0, c = 0;
    for(let l = 0; l <= e.length; ++l){
        if (l < e.length) c = e.charCodeAt(l);
        else {
            if (i(c)) break;
            c = A7;
        }
        if (i(c)) {
            if (!(o === l - 1 || a === 1)) if (a === 2) {
                if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== Tqe || r.charCodeAt(r.length - 2) !== Tqe) {
                    if (r.length > 2) {
                        const u = r.lastIndexOf(n);
                        u === -1 ? (r = "", s = 0) : (r = r.slice(0, u), s = r.length - 1 - r.lastIndexOf(n)), o = l, a = 0;
                        continue;
                    } else if (r.length !== 0) {
                        r = "", s = 0, o = l, a = 0;
                        continue;
                    }
                }
                t && (r += r.length > 0 ? `${n}..` : "..", s = 2);
            } else r.length > 0 ? r += `${n}${e.slice(o + 1, l)}` : r = e.slice(o + 1, l), s = l - o - 1;
            o = l, a = 0;
        } else c === Tqe && a !== -1 ? ++a : a = -1;
    }
    return r;
}
function eug(e) {
    return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
export function Lxc(e, t) {
    Jlg(t, "pathObject");
    const n = t.dir || t.root, i = t.base || `${t.name || ""}${eug(t.ext)}`;
    return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
export function Hxc(e) {
    return e;
}
export function rug(e) {
    if (!e || (e = e.replace(/\r\n/g, `
`), !e.includes("\r"))) return e;
    const t = e.split(`
`), n = [];
    for (const i of t){
        if (!i.includes("\r")) {
            n.push(i);
            continue;
        }
        let r = "", s = 0;
        for(let o = 0; o < i.length; o++){
            const a = i[o];
            a === "\r" ? s = 0 : (s < r.length ? r = r.substring(0, s) + a + r.substring(s + 1) : r += a, s++);
        }
        n.push(r);
    }
    return n.join(`
`);
}
export function _Nt(e, t) {
    return e && e.replace(/\r\n|\n|\r/g, t);
}
export function sug(e) {
    if (!e) return e;
    const t = e.indexOf("@");
    if (t === -1) return e;
    const n = e.substring(0, t), i = e.substring(t + 1);
    if (n.length === 0 || i.length === 0) return e;
    const r = n.charAt(0) + "***", s = i.indexOf(".");
    if (s === -1) return `${r}@${i.charAt(0)}***`;
    const o = i.substring(0, s), a = i.substring(s), c = o.charAt(0) + "***" + a;
    return `${r}@${c}`;
}
export function t5(e) {
    return !e || typeof e != "string" ? !0 : e.trim().length === 0;
}
export function wO(e, ...t) {
    return t.length === 0 ? e : e.replace(Yxc, function(n, i) {
        const r = parseInt(i, 10);
        return isNaN(r) || r < 0 || r >= t.length ? n : t[r];
    });
}
export function oht(e, t) {
    return Object.keys(t).length === 0 ? e : e.replace(Xxc, (n, i)=>t[i] ?? n);
}
export function oug(e) {
    return e.replace(/[<>"'&]/g, (t)=>{
        switch(t){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&apos;";
            case "&":
                return "&amp;";
        }
        return t;
    });
}
export function vK(e) {
    return e.replace(/[<>&]/g, function(t) {
        switch(t){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return t;
        }
    });
}
export function l1(e) {
    return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
export function hmi(e, t) {
    let n = 0, i = e.indexOf(t);
    for(; i !== -1;)n++, i = e.indexOf(t, i + t.length);
    return n;
}
export function bNt(e, t, n = "\u2026") {
    return e.length <= t ? e : `${e.substr(0, t)}${n}`;
}
export function Fqr(e, t, n = "\u2026") {
    if (e.length <= t) return e;
    const i = Math.ceil(t / 2) - n.length / 2, r = Math.floor(t / 2) - n.length / 2;
    return `${e.substr(0, i)}${n}${e.substr(e.length - r)}`;
}
export function Z3e(e, t = " ") {
    const n = Q3e(e, t);
    return Vie(n, t);
}
export function Q3e(e, t) {
    if (!e || !t) return e;
    const n = t.length;
    let i = 0;
    if (n === 1) {
        const r = t.charCodeAt(0);
        for(; i < e.length && e.charCodeAt(i) === r;)i++;
    } else for(; e.startsWith(t, i);)i += n;
    return e.substring(i);
}
export function Vie(e, t) {
    if (!e || !t) return e;
    const n = t.length, i = e.length;
    if (n === 1) {
        let s = i;
        const o = t.charCodeAt(0);
        for(; s > 0 && e.charCodeAt(s - 1) === o;)s--;
        return e.substring(0, s);
    }
    let r = i;
    for(; r > 0 && e.endsWith(t, r);)r -= n;
    return e.substring(0, r);
}
export function aug(e) {
    return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
}
export function Gxc(e) {
    return e.replace(/\*/g, "");
}
export function $pn(e, t, n = {}) {
    if (!e) throw new Error("Cannot create regex from empty string");
    t || (e = l1(e)), n.wholeWord && (/\B/.test(e.charAt(0)) || (e = "\\b" + e), /\B/.test(e.charAt(e.length - 1)) || (e = e + "\\b"));
    let i = "";
    return n.global && (i += "g"), n.matchCase || (i += "i"), n.multiline && (i += "m"), n.unicode && (i += "u"), new RegExp(e, i);
}
export function cug(e) {
    return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
export function lug(e, t) {
    return e.filter((n)=>n != null && n !== !1).join(t);
}
export function ry(e) {
    return e.split(/\r\n|\r|\n/);
}
export function R7(e) {
    for(let t = 0, n = e.length; t < n; t++){
        const i = e.charCodeAt(t);
        if (i !== 32 && i !== 9) return t;
    }
    return -1;
}
export function E0(e, t = 0, n = e.length) {
    for(let i = t; i < n; i++){
        const r = e.charCodeAt(i);
        if (r !== 32 && r !== 9) return e.substring(t, i);
    }
    return e.substring(t, n);
}
export function Jce(e, t = e.length - 1) {
    for(let n = t; n >= 0; n--){
        const i = e.charCodeAt(n);
        if (i !== 32 && i !== 9) return n;
    }
    return -1;
}
export function uug(e) {
    const t = R7(e);
    return t === -1 ? e.length : t;
}
export function n5(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
export function pmi(e, t, n = 0, i = e.length, r = 0, s = t.length) {
    for(; n < i && r < s; n++, r++){
        const c = e.charCodeAt(n), l = t.charCodeAt(r);
        if (c < l) return -1;
        if (c > l) return 1;
    }
    const o = i - n, a = s - r;
    return o < a ? -1 : o > a ? 1 : 0;
}
export function vge(e, t) {
    return aht(e, t, 0, e.length, 0, t.length);
}
export function aht(e, t, n = 0, i = e.length, r = 0, s = t.length) {
    for(; n < i && r < s; n++, r++){
        let c = e.charCodeAt(n), l = t.charCodeAt(r);
        if (c === l) continue;
        if (c >= 128 || l >= 128) return pmi(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
        xqe(c) && (c -= 32), xqe(l) && (l -= 32);
        const u = c - l;
        if (u !== 0) return u;
    }
    const o = i - n, a = s - r;
    return o < a ? -1 : o > a ? 1 : 0;
}
export function mmi(e) {
    return e >= 48 && e <= 57;
}
export function xqe(e) {
    return e >= 97 && e <= 122;
}
export function _ge(e) {
    return e >= 65 && e <= 90;
}
export function Hb(e, t) {
    return e.length === t.length && aht(e, t) === 0;
}
export function Iqe(e, t) {
    const n = t.length;
    return t.length > e.length ? !1 : aht(e, t, 0, n) === 0;
}
export function dug(e, t) {
    const n = e.length, i = n - t.length;
    return i >= 0 && aht(e, t, i, n) === 0;
}
export function jie(e, t) {
    const n = Math.min(e.length, t.length);
    let i;
    for(i = 0; i < n; i++)if (e.charCodeAt(i) !== t.charCodeAt(i)) return i;
    return n;
}
export function Aqe(e, t) {
    const n = Math.min(e.length, t.length);
    let i;
    const r = e.length - 1, s = t.length - 1;
    for(i = 0; i < n; i++)if (e.charCodeAt(r - i) !== t.charCodeAt(s - i)) return i;
    return n;
}
export function CO(e) {
    return 55296 <= e && e <= 56319;
}
export function cht(e) {
    return 56320 <= e && e <= 57343;
}
export function Bqr(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536;
}
export function gmi(e, t, n) {
    const i = e.charCodeAt(n);
    if (CO(i) && n + 1 < t) {
        const r = e.charCodeAt(n + 1);
        if (cht(r)) return Bqr(i, r);
    }
    return i;
}
export function hug(e, t) {
    const n = e.charCodeAt(t - 1);
    if (cht(n) && t > 1) {
        const i = e.charCodeAt(t - 2);
        if (CO(i)) return Bqr(i, n);
    }
    return n;
}
export function Uqr(e, t) {
    return new yNt(e, t).nextGraphemeLength();
}
export function Vxc(e, t) {
    return new yNt(e, t).prevGraphemeLength();
}
export function jxc(e, t) {
    t > 0 && cht(e.charCodeAt(t)) && t--;
    const n = t + Uqr(e, t);
    return [
        n - Vxc(e, n),
        n
    ];
}
function pug() {
    return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
export function Rqe(e) {
    return fmi || (fmi = pug()), fmi.test(e);
}
export function lht(e) {
    return Zxc.test(e);
}
export function qxc(e) {
    return Gqr.test(e);
}
export function Dqe(e) {
    return e >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374;
}
export function $qr(e) {
    return e >= 127462 && e <= 127487 || e === 8986 || e === 8987 || e === 9200 || e === 9203 || e >= 9728 && e <= 10175 || e === 11088 || e === 11093 || e >= 127744 && e <= 128591 || e >= 128640 && e <= 128764 || e >= 128992 && e <= 129008 || e >= 129280 && e <= 129535 || e >= 129648 && e <= 129782;
}
export function mug(e, t, n = "") {
    const i = e.trimStart();
    if (i.length < t) return i;
    const r = /\b/g;
    let s = 0;
    for(; r.test(i) && !(i.length - r.lastIndex < t);)s = r.lastIndex, r.lastIndex += 1;
    return s === 0 ? i : n + i.substring(s).trimStart();
}
export function* gug(e) {
    let t = 0;
    for (const n of e.matchAll(Vqr))t !== n.index && (yield {
        isCode: !1,
        str: e.substring(t, n.index)
    }), yield {
        isCode: !0,
        str: n[0]
    }, t = n.index + n[0].length;
    t !== e.length && (yield {
        isCode: !1,
        str: e.substring(t)
    });
}
export function ele(e) {
    return e && (e = e.replace(Vqr, "")), e;
}
export function fug(e) {
    return ele(e).replace(tIc, "");
}
export function zxc(e) {
    return !!(e && e.length > 0 && e.charCodeAt(0) === 65279);
}
export function Hpn(e, t) {
    if (!e || !t || e.length < t.length) return !1;
    const n = t.length, i = e.toLowerCase();
    let r = 0, s = -1;
    for(; r < n;){
        const o = i.indexOf(t[r], s + 1);
        if (o < 0) return !1;
        s = o, r++;
    }
    return !0;
}
export function Hqr(e, t = !1) {
    return e ? (t && (e = e.replace(/\\./g, "")), e.toLowerCase() !== e) : !1;
}
export function vug(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
export function _ug(e, t = 1) {
    if (t === 0) return "";
    let n = -1;
    do n = e.indexOf(`
`, n + 1), t--;
    while (t > 0 && n >= 0)
    return n === -1 ? e : (e[n - 1] === "\r" && n--, e.substr(0, n));
}
export function Wqr(e) {
    return e = e % 52, e < 26 ? String.fromCharCode(97 + e) : String.fromCharCode(65 + e - 26);
}
export function Kxc(e, t) {
    return e === 0 ? t !== 5 && t !== 7 : e === 2 && t === 3 ? !1 : e === 4 || e === 2 || e === 3 || t === 4 || t === 2 || t === 3 ? !0 : !(e === 8 && (t === 8 || t === 9 || t === 11 || t === 12) || (e === 11 || e === 9) && (t === 9 || t === 10) || (e === 12 || e === 10) && t === 10 || t === 5 || t === 13 || t === 7 || e === 1 || e === 13 && t === 14 || e === 6 && t === 6);
}
export function bug() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
export function yug(e, t) {
    if (e === 0) return 0;
    const n = Sug(e, t);
    if (n !== void 0) return n;
    const i = new Wpn(t, e);
    return i.prevCodePoint(), i.offset;
}
function Sug(e, t) {
    const n = new Wpn(t, e);
    let i = n.prevCodePoint();
    for(; kug(i) || i === 65039 || i === 8419;){
        if (n.offset === 0) return;
        i = n.prevCodePoint();
    }
    if (!$qr(i)) return;
    let r = n.offset;
    return r > 0 && n.prevCodePoint() === 8205 && (r = n.offset), r;
}
function kug(e) {
    return 127995 <= e && e <= 127999;
}
function Lqe(e) {
    return e === 47 || e === 92;
}
export function J3e(e) {
    return e.replace(/[\\/]/g, Eu.sep);
}
export function iIc(e) {
    return e.indexOf("/") === -1 && (e = J3e(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
export function rIc(e, t = Eu.sep) {
    if (!e) return "";
    const n = e.length, i = e.charCodeAt(0);
    if (Lqe(i)) {
        if (Lqe(e.charCodeAt(1)) && !Lqe(e.charCodeAt(2))) {
            let s = 3;
            const o = s;
            for(; s < n && !Lqe(e.charCodeAt(s)); s++);
            if (o !== s && !Lqe(e.charCodeAt(s + 1))) {
                for(s += 1; s < n; s++)if (Lqe(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
            }
        }
        return t;
    } else if (sIc(i) && e.charCodeAt(1) === 58) return Lqe(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
    let r = e.indexOf("://");
    if (r !== -1) {
        for(r += 3; r < n; r++)if (Lqe(e.charCodeAt(r))) return e.slice(0, r + 1);
    }
    return "";
}
export function uht(e) {
    if (!Oo || !e || e.length < 5) return !1;
    let t = e.charCodeAt(0);
    if (t !== 92 || (t = e.charCodeAt(1), t !== 92)) return !1;
    let n = 2;
    const i = n;
    for(; n < e.length && (t = e.charCodeAt(n), t !== 92); n++);
    return !(i === n || (t = e.charCodeAt(n + 1), isNaN(t) || t === 92));
}
export function Kqr(e, t = Oo) {
    const n = t ? oIc : aIc;
    return !(!e || e.length === 0 || /^\s+$/.test(e) || (n.lastIndex = 0, n.test(e)) || t && cIc.test(e) || e === "." || e === ".." || t && e[e.length - 1] === "." || t && e.length !== e.trim().length || e.length > 255);
}
export function Yqr(e, t, n) {
    const i = e === t;
    return !n || i ? i : !e || !t ? !1 : Hb(e, t);
}
function wug(e, t, n) {
    return n === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : n === 1 ? !0 : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? !1 : e.startsWith(t);
}
function Cug(e, t, n) {
    for(let i = 0; i < n; i++){
        let r = e.charCodeAt(i), s = t.charCodeAt(i);
        if (r !== s) {
            if (r >= 128 || s >= 128) return aht(e, t, i, n, i, n) === 0;
            if (r >= 97 && r <= 122 && (r -= 32), s >= 97 && s <= 122 && (s -= 32), r !== s) return !1;
        }
    }
    return !0;
}
export function kAe(e, t, n, i = uS) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const r = e.length, s = t.length;
    if (s > r) return !1;
    const o = i.charCodeAt(0), a = t.charCodeAt(s - 1) === o;
    if (s < r && !a && e.charCodeAt(s) !== o) return !1;
    if (n) {
        if (!Cug(e, t, s)) return !1;
    } else if (!wug(e, t, s)) return !1;
    return s === r || a ? !0 : e.charCodeAt(s) === o;
}
function sIc(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
export function _mi(e) {
    return Oo ? (e = Vie(e, uS), e.endsWith(":") && (e += uS)) : (e = Vie(e, uS), e || (e = uS)), e;
}
export function kNt(e, t = Oo) {
    return t ? sIc(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
export function Tug(e, t = Oo) {
    return kNt(e, t) ? e[0] : void 0;
}
export function Xqr(e, t, n) {
    return t.length > e.length ? -1 : e === t ? 0 : (n && (e = e.toLowerCase(), t = t.toLowerCase()), e.indexOf(t));
}
export function Eug(e) {
    const t = e.split(":");
    let n, i, r;
    for (const s of t){
        const o = Number(s);
        T0(o) ? i === void 0 ? i = o : r === void 0 && (r = o) : n = n ? [
            n,
            s
        ].join(":") : s;
    }
    if (!n) throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");
    return {
        path: n,
        line: i !== void 0 ? i : void 0,
        column: r !== void 0 ? r : i !== void 0 ? 1 : void 0
    };
}
export function Zqr(e, t, n = 8) {
    let i = "";
    for(let s = 0; s < n; s++){
        let o;
        s === 0 && Oo && !t && (n === 3 || n === 4) ? o = uIc : o = lIc, i += o.charAt(Math.floor(Math.random() * o.length));
    }
    let r;
    return t ? r = `${t}-${i}` : r = i, e ? Jk(e, r) : r;
}
export function wNt(e) {
    const t = e;
    return t ? [
        t.on,
        t.pause,
        t.resume,
        t.destroy
    ].every((n)=>typeof n == "function") : !1;
}
export function Qqr(e) {
    const t = e;
    return t ? wNt(t.stream) && Array.isArray(t.buffer) && typeof t.ended == "boolean" : !1;
}
export function eBe(e, t) {
    return new hIc(e, t);
}
function xug(e, t) {
    const n = [];
    let i;
    for(; (i = e.read()) !== null;)n.push(i);
    return t(n);
}
export function Iug(e, t, n) {
    const i = [];
    let r;
    for(; (r = e.read()) !== null && i.length < n;)i.push(r);
    return r === null && i.length > 0 ? t(i) : {
        read: ()=>{
            if (i.length > 0) return i.shift();
            if (typeof r < "u") {
                const s = r;
                return r = void 0, s;
            }
            return e.read();
        }
    };
}
export function Jqr(e, t) {
    return new Promise((n, i)=>{
        const r = [];
        tBe(e, {
            onData: (s)=>{
                t && r.push(s);
            },
            onError: (s)=>{
                t ? i(s) : n(void 0);
            },
            onEnd: ()=>{
                n(t ? t(r) : void 0);
            }
        });
    });
}
export function tBe(e, t, n) {
    e.on("error", (i)=>{
        n?.isCancellationRequested || t.onError(i);
    }), e.on("end", ()=>{
        n?.isCancellationRequested || t.onEnd();
    }), e.on("data", (i)=>{
        n?.isCancellationRequested || t.onData(i);
    });
}
export function dIc(e, t) {
    return new Promise((n, i)=>{
        const r = new He, s = [], o = (l)=>{
            if (s.push(l), s.length > t) return r.dispose(), e.pause(), n({
                stream: e,
                buffer: s,
                ended: !1
            });
        }, a = (l)=>(r.dispose(), i(l)), c = ()=>(r.dispose(), n({
                stream: e,
                buffer: s,
                ended: !0
            }));
        r.add(rn(()=>e.removeListener("error", a))), e.on("error", a), r.add(rn(()=>e.removeListener("end", c))), e.on("end", c), r.add(rn(()=>e.removeListener("data", o))), e.on("data", o);
    });
}
function Aug(e, t) {
    const n = eBe(t);
    return n.end(e), n;
}
export function Rug() {
    const e = eBe(()=>{
        throw new Error("not supported");
    });
    return e.end(), e;
}
function Dug(e) {
    let t = !1;
    return {
        read: ()=>t ? null : (t = !0, e)
    };
}
export function Mug(e, t, n) {
    const i = eBe(n);
    return tBe(e, {
        onData: (r)=>i.write(t.data(r)),
        onError: (r)=>i.error(t.error ? t.error(r) : r),
        onEnd: ()=>i.end()
    }), i;
}
function Pug(e, t, n) {
    let i = !1;
    return {
        read: ()=>{
            const r = t.read();
            return i ? r : (i = !0, r !== null ? n([
                e,
                r
            ]) : e);
        }
    };
}
function Lug(e, t, n) {
    let i = !1;
    const r = eBe(n);
    return tBe(t, {
        onData: (s)=>i ? r.write(s) : (i = !0, r.write(n([
                e,
                s
            ]))),
        onError: (s)=>r.error(s),
        onEnd: ()=>{
            i || (i = !0, r.write(e)), r.end();
        }
    }), r;
}
export function Nqe(e, t) {
    const n = Smi;
    Smi = e;
    try {
        return t();
    } finally{
        Smi = n;
    }
}
export function Nug() {
    return Smi;
}
export function pIc(e) {
    szr = e;
}
export function Oug(e) {
    ozr = e;
}
export function mIc(e) {
    azr = e;
}
export function gIc(e) {
    czr = e;
}
export function fIc(e, t) {
    if (czr && e.byteLength >= azr) try {
        czr({
            buffer: e,
            byteLength: e.byteLength,
            source: t
        });
    } catch  {}
}
export function Fug(e, t, n = 0) {
    const i = t.byteLength, r = e.byteLength;
    if (i === 0) return 0;
    if (i === 1) return e.indexOf(t[0]);
    if (i > r - n) return -1;
    const s = bIc.value;
    s.fill(t.length);
    for(let l = 0; l < t.length; l++)s[t[l]] = t.length - l - 1;
    let o = n + t.length - 1, a = o, c = -1;
    for(; o < r;)if (e[o] === t[a]) {
        if (a === 0) {
            c = o;
            break;
        }
        o--, a--;
    } else o += Math.max(t.length - a, s[e[o]]), a = t.length - 1;
    return c;
}
export function Bug(e, t) {
    return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0;
}
export function Uug(e, t, n) {
    e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255;
}
export function _K(e, t) {
    return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
export function bK(e, t, n) {
    e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
export function $ug(e, t) {
    return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
export function Hug(e, t, n) {
    e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
export function ezr(e, t) {
    return e[t];
}
export function tzr(e, t, n) {
    e[n] = t;
}
export function vIc(e) {
    return xug(e, (t)=>wi.concat(t));
}
export function nzr(e) {
    return Dug(e);
}
export function X4(e) {
    return Jqr(e, (t)=>t.length === 1 ? t[0] : wi.concat(t));
}
export async function Wug(e) {
    return e.ended ? wi.concat(e.buffer) : wi.concat([
        ...e.buffer,
        await X4(e.stream)
    ]);
}
export function wAe(e) {
    return Aug(e, (t)=>wi.concat(t));
}
export function bmi(e) {
    return eBe((t)=>wi.concat(t), e);
}
export function Gug(e, t) {
    return Pug(e, t, (n)=>wi.concat(n));
}
export function _Ic(e, t) {
    return Lug(e, t, (n)=>wi.concat(n));
}
export function YL(e) {
    let t = 0, n = 0, i = 0;
    const r = new Uint8Array(Math.floor(e.length / 4 * 3)), s = (a)=>{
        switch(n){
            case 3:
                r[i++] = t | a, n = 0;
                break;
            case 2:
                r[i++] = t | a >>> 2, t = a << 6, n = 3;
                break;
            case 1:
                r[i++] = t | a >>> 4, t = a << 4, n = 2;
                break;
            default:
                t = a << 2, n = 1;
        }
    };
    for(let a = 0; a < e.length; a++){
        const c = e.charCodeAt(a);
        if (c >= 65 && c <= 90) s(c - 65);
        else if (c >= 97 && c <= 122) s(c - 97 + 26);
        else if (c >= 48 && c <= 57) s(c - 48 + 52);
        else if (c === 43 || c === 45) s(62);
        else if (c === 47 || c === 95) s(63);
        else {
            if (c === 61) break;
            throw new SyntaxError(`Unexpected base64 character ${e[a]}`);
        }
    }
    const o = i;
    for(; n > 0;)s(0);
    return wi.wrap(r).slice(0, o);
}
export function CNt(e) {
    const t = e.split(".")[1], n = YL(t);
    return JSON.parse(n.toString());
}
export function _I({ buffer: e }, t = !0, n = !1) {
    const i = e.toBase64;
    if (typeof i == "function") return i.call(e, {
        alphabet: n ? "base64url" : "base64",
        omitPadding: !t
    });
    const r = n ? kIc : SIc;
    let s = "";
    const o = e.byteLength % 3;
    let a = 0;
    for(; a < e.byteLength - o; a += 3){
        const c = e[a + 0], l = e[a + 1], u = e[a + 2];
        s += r[c >>> 2], s += r[(c << 4 | l >>> 4) & 63], s += r[(l << 2 | u >>> 6) & 63], s += r[u & 63];
    }
    if (o === 1) {
        const c = e[a + 0];
        s += r[c >>> 2], s += r[c << 4 & 63], t && (s += "==");
    } else if (o === 2) {
        const c = e[a + 0], l = e[a + 1];
        s += r[c >>> 2], s += r[(c << 4 | l >>> 4) & 63], s += r[l << 2 & 63], t && (s += "=");
    }
    return s;
}
var ozr, czr, Smi;
export function Vug(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !TIc.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
        if (e.authority) {
            if (!EIc.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (xIc.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
}
export function jug(e, t) {
    return !e && !t ? "file" : e;
}
export function qug(e, t) {
    switch(e){
        case "https":
        case "http":
        case "file":
            t ? t[0] !== bge && (t = bge + t) : t = bge;
            break;
    }
    return t;
}
export function lzr(e, t) {
    return e.path === t.path && (e.scheme ?? "") === (t.scheme ?? "") && (e.query ?? "") === (t.query ?? "") && (e.fragment ?? "") === (t.fragment ?? "");
}
export function kmi(e) {
    return !e || typeof e != "object" ? !1 : typeof e.scheme == "string" && (typeof e.authority == "string" || typeof e.authority > "u") && (typeof e.path == "string" || typeof e.path > "u") && (typeof e.query == "string" || typeof e.query > "u") && (typeof e.fragment == "string" || typeof e.fragment > "u");
}
function wIc(e, t, n) {
    let i, r = -1;
    for(let s = 0; s < e.length; s++){
        const o = e.charCodeAt(s);
        if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
        else {
            i === void 0 && (i = e.substr(0, s));
            const a = hzr[o];
            a !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += a) : r === -1 && (r = s);
        }
    }
    return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function zug(e) {
    let t;
    for(let n = 0; n < e.length; n++){
        const i = e.charCodeAt(n);
        i === 35 || i === 63 ? (t === void 0 && (t = e.substr(0, n)), t += hzr[i]) : t !== void 0 && (t += e[n]);
    }
    return t !== void 0 ? t : e;
}
export function dht(e, t) {
    let n;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Oo && (n = n.replace(/\//g, "\\")), n;
}
export function hM(e, t, n) {
    try {
        let i = dht(e, t);
        return n && (i = i.replace(/\\/g, "/")), i;
    } catch  {
        return dht(e, t);
    }
}
export function uzr(e, t) {
    const n = t ? zug : wIc;
    let i = "", { scheme: r, authority: s, path: o, query: a, fragment: c } = e;
    if (r && (i += r, i += ":"), (s || r === "file") && (i += bge, i += bge), s) {
        let l = s.indexOf("@");
        if (l !== -1) {
            const u = s.substr(0, l);
            s = s.substr(l + 1), l = u.lastIndexOf(":"), l === -1 ? i += n(u, !1, !1) : (i += n(u.substr(0, l), !1, !1), i += ":", i += n(u.substr(l + 1), !1, !0)), i += "@";
        }
        s = s.toLowerCase(), l = s.lastIndexOf(":"), l === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, l), !1, !0), i += s.substr(l));
    }
    if (o) {
        if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
            const l = o.charCodeAt(1);
            l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`);
        } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
            const l = o.charCodeAt(0);
            l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`);
        }
        i += n(o, !0, !1);
    }
    return a && (i += "?", i += n(a, !1, !1)), c && (i += "#", i += t ? c : wIc(c, !1, !1)), i;
}
function CIc(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e.length > 3 ? e.substr(0, 3) + CIc(e.substr(3)) : e;
    }
}
export function wmi(e) {
    return e.match(pzr) ? e.replace(pzr, (t)=>CIc(t)) : e;
}
export function xNt(e) {
    if (e.scheme !== gt.vscodeNotebookCell) throw new Error(`Expected vscode-notebook-cell scheme, got ${e.scheme}`);
    if (!e.fragment) throw new Error(`Expected notebook fragment, got ${e.fragment}`);
    const t = e.fragment.indexOf("s");
    if (t < 0) throw new Error(`Expected notebook fragment, got ${e.fragment}`);
    const n = YL(e.fragment.substring(t + 1)).toString();
    return e.with({
        scheme: n,
        fragment: null
    });
}
export function MP(e, t) {
    return Ee.isUri(e) ? Hb(e.scheme, t) : Iqe(e, t + ":");
}
export function pht(e, ...t) {
    return t.some((n)=>MP(e, n));
}
export function Kug(e) {
    return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
export function CAe(e) {
    return dht(e, !0);
}
export function fzr(e, t) {
    const n = [];
    for(let i = 0; i < e.length; i++){
        const r = t(e[i]);
        e.some((s, o)=>o === i ? !1 : d3(r, t(s))) || n.push(e[i]);
    }
    return n;
}
export function XL(e, t, n) {
    if (t) {
        let i = e.path;
        return i && i[0] !== Eu.sep && (i = Eu.sep + i), e.with({
            scheme: n,
            authority: t,
            path: i
        });
    }
    return e.with({
        scheme: n
    });
}
export function jpn(e) {
    return !!e && typeof e.then == "function";
}
export function Wb(e) {
    const t = new Eo, n = e(t.token);
    let i = !1;
    const r = new Promise((s, o)=>{
        const a = t.token.onCancellationRequested(()=>{
            i = !0, a.dispose(), o(new Rl);
        });
        Promise.resolve(n).then((c)=>{
            a.dispose(), t.dispose(), i ? I7(c) && c.dispose() : s(c);
        }, (c)=>{
            a.dispose(), t.dispose(), o(c);
        });
    });
    return new class {
        cancel() {
            t.cancel(), t.dispose();
        }
        then(s, o) {
            return r.then(s, o);
        }
        catch(s) {
            return this.then(void 0, s);
        }
        finally(s) {
            return r.finally(s);
        }
    };
}
export function Tw(e, t, n) {
    return new Promise((i, r)=>{
        const s = t.onCancellationRequested(()=>{
            s.dispose(), i(n);
        });
        e.then(i, r).finally(()=>s.dispose());
    });
}
export function ZL(e, t) {
    return new Promise((n, i)=>{
        const r = t.onCancellationRequested(()=>{
            r.dispose(), i(new Rl);
        });
        e.then(n, i).finally(()=>r.dispose());
    });
}
export function NIc(e) {
    let t = -1;
    const n = e.map((s, o)=>s.then((a)=>(t = o, a))), i = Promise.race(n);
    i.cancel = ()=>{
        e.forEach((s, o)=>{
            o !== t && s.cancel && s.cancel();
        });
    };
    const r = ()=>i.cancel();
    return i.then(r, r), i;
}
export function Hp(e, t, n) {
    let i;
    const r = setTimeout(()=>{
        i?.(void 0), n?.();
    }, t);
    return Promise.race([
        e.finally(()=>clearTimeout(r)),
        new Promise((s)=>i = s)
    ]);
}
export function Sge() {
    let e, t;
    return {
        promise: new Promise((i, r)=>{
            e = i, t = r;
        }),
        resolve: e,
        reject: t
    };
}
export function Kl(e, t) {
    return t ? new Promise((n, i)=>{
        const r = setTimeout(()=>{
            s.dispose(), n();
        }, e), s = t.onCancellationRequested(()=>{
            clearTimeout(r), s.dispose(), i(new Rl);
        });
    }) : Wb((n)=>Kl(e, n));
}
export function Cl(e, t = 0, n) {
    const i = setTimeout(()=>{
        e(), n && r.dispose();
    }, t), r = rn(()=>{
        clearTimeout(i), n?.delete(r);
    });
    return n?.add(r), r;
}
export function OIc(e) {
    const t = [];
    let n = 0;
    const i = e.length;
    function r() {
        return n < i ? e[n++]() : null;
    }
    function s(o) {
        o != null && t.push(o);
        const a = r();
        return a ? a.then(s) : Promise.resolve(t);
    }
    return Promise.resolve(null).then(s);
}
export function xmi(e, t = (i)=>!!i, n = null) {
    let i = 0;
    const r = e.length, s = ()=>{
        if (i >= r) return Promise.resolve(n);
        const o = e[i++];
        return Promise.resolve(o()).then((c)=>t(c) ? Promise.resolve(c) : s());
    };
    return s();
}
export async function Zug(e, t, n) {
    let i;
    for(let r = 0; r < n; r++)try {
        return await e();
    } catch (s) {
        i = s, await Kl(t);
    }
    throw i;
}
export function Qug(e) {
    const t = new Eo, n = e(t.token);
    return new WIc(t, async (i)=>{
        const r = t.token.onCancellationRequested(()=>{
            r.dispose(), t.dispose(), i.reject(new Rl);
        });
        try {
            for await (const s of n){
                if (t.token.isCancellationRequested) return;
                i.emitOne(s);
            }
            r.dispose(), t.dispose();
        } catch (s) {
            r.dispose(), t.dispose(), i.reject(s);
        }
    });
}
export function BT() {
    return globalThis._CURSOR_SENTRY;
}
export function Jug() {
    return {
        send: function(t) {
            const n = BT().buffer;
            return n.length < 64 && n.push(t), Promise.resolve({
                statusCode: 200
            });
        },
        flush: function(t) {
            return Promise.resolve(!0);
        }
    };
}
function edg() {
    return {
        send: function(e) {
            return BT().transport.send(e);
        },
        flush: function(e) {
            return BT().transport.flush(e);
        }
    };
}
export function tdg() {
    return {
        defaultIntegrations: [],
        dsn: kc.developmentTooling ? jIc : VIc,
        maxBreadcrumbs: 200,
        transport: edg
    };
}
export function ndg(e) {
    let t;
    const n = [];
    let i;
    return uAe(e, (r, s)=>{
        if (s === "event" || s === "transaction" || s === "feedback") t = Array.isArray(r) ? r[1] : void 0;
        else if (s === "attachment") {
            const [o, a] = r;
            n.push({
                filename: o.filename,
                attachmentType: o.attachment_type,
                contentType: o.content_type,
                data: a
            });
        } else s === "profile" && (i = r[1]);
    }), t ? [
        t,
        n,
        i
    ] : void 0;
}
export { $hi, Cc, ozr };

export var HVr = {};
Object.defineProperty(HVr, "debug", {
    enumerable: true,
    get: ()=>vog
});
Object.defineProperty(HVr, "error", {
    enumerable: true,
    get: ()=>yog
});
Object.defineProperty(HVr, "fatal", {
    enumerable: true,
    get: ()=>Sog
});
Object.defineProperty(HVr, "fmt", {
    enumerable: true,
    get: ()=>$hi
});
Object.defineProperty(HVr, "info", {
    enumerable: true,
    get: ()=>_og
});
Object.defineProperty(HVr, "trace", {
    enumerable: true,
    get: ()=>fog
});
Object.defineProperty(HVr, "warn", {
    enumerable: true,
    get: ()=>bog
});

import { JB, dr } from "./arrays.js";
import { Oqr, Upn } from "./cache.js";
import { zcg } from "./cls.js";
import { lge } from "./collections.js";
import { E7 } from "./functional.js";
import { GLt } from "./getActivationStart.js";
import { ypi } from "./getNavigationEntry.js";
import { Cjr } from "./getVisibilityWatcher.js";
import { $u } from "./index_10.js";
import { Jcg } from "./inp.js";
import { KLt } from "./instrument.js";
import { Eg } from "./iterator.js";
import { Yf, qC } from "./lazy.js";
import { Xcg } from "./lcp.js";
import { JN, oA } from "./linkedList.js";
import { oc, sNt } from "./map.js";
import { rt } from "./nls.js";
import { dEc } from "./resourceTiming.js";
import { Vy, aA } from "./stopwatch.js";
import { nwe } from "./stream.js";
import { Wxc } from "./strings.cursor.js";
import { x } from "./tslib.es6.js";
import { fK } from "./types.js";
import { Xdt } from "./utils_9.js";
var SEc, Ojr, age;
var LEc, Jdt, wpn, Rl, Opi, OT, Zu, Vjr, NEc, jjr, Fpi;
var sqr, cNt, txc, nxc, ixc, Kpi, rxc, Ypi, sxc, oxc, axc, q3e, cxc, oqr, lxc, aqr, He, lNt, we, cn, uxc, Xpi, z3e, cqr, dxc, po;
var lqr, mxc, Ct, Qpi, Jpi, uqr, gxc, fxc, emi, dqr, vxc, Dpn, _xc, tmi, ve, bxc, hqr, Mpn, IV, pqr, mqr, yxc, Gie, nmi, uNt, V9, Sxc, kxc;
var K3e, dNt, iht, hNt, bqr, yqr, smi, Sqr, omi, kqr, wqr, pNt, Npn, ami, Cqr, bAe, yAe, AV, Tqr, xxc, lS, Opn, Oo, Ai, vf, Fpn, Q_, mNt, Dl, Ixc, Axc, KL, Eqr, j9, ZH, twe, Zk, Qce, xqr, Rxc, Iqr, Dxc, sJ, Ul, hp, Aqr, Rqr, gNt, Dqr, Mqr, Pqr, Mxc, Bpn, gge, fge, Pxc;
var Yxc, Xxc, Wpn, yNt, fmi, Zxc, Gqr, Qxc, Jxc, eIc, Vqr, tIc, nIc, jqr, qqr, Mqe, Pqe, vmi, zqr, SNt;
var TNt, bIc, ENt, izr, yIc, Oqe, ymi, rzr, szr, azr, wi, SIc, kIc;
export { AV, Ai, Aqr, Axc, Bpn, Cqr, Ct, Dl, Dpn, Dqr, Dxc, ENt, Eqr, Fpi, Fpn, Gie, Gqr, He, IV, Iqr, Ixc, Jdt, Jpi, Jxc, K3e, KL, Kpi, LEc, Mpn, Mqe, Mqr, Mxc, NEc, Npn, OT, Ojr, Oo, Opi, Opn, Oqe, Pqe, Pqr, Pxc, Q_, Qce, Qpi, Qxc, Rl, Rqr, Rxc, SEc, SIc, SNt, Sqr, Sxc, TNt, Tqr, Ul, V9, Vjr, Vqr, Wpn, Xpi, Xxc, Ypi, Yxc, ZH, Zk, Zu, Zxc, _xc, age, ami, aqr, axc, azr, bAe, bIc, bqr, bxc, cNt, cn, cqr, cxc, dNt, dqr, dxc, eIc, emi, fge, fmi, fxc, gNt, gge, gxc, hNt, hp, hqr, iht, ixc, izr, j9, jjr, jqr, kIc, kqr, kxc, lNt, lS, lqr, lxc, mNt, mqr, mxc, nIc, nmi, nxc, omi, oqr, oxc, pNt, po, pqr, q3e, qqr, rxc, rzr, sJ, smi, sqr, sxc, szr, tIc, tmi, twe, txc, uNt, uqr, uxc, ve, vf, vmi, vxc, we, wi, wpn, wqr, xqr, xxc, yAe, yIc, yNt, ymi, yqr, yxc, z3e, zqr };
var __wakaru_mlg_initialized = false;
export function mlg() {
if (__wakaru_mlg_initialized) return;
__wakaru_mlg_initialized = true;
"use strict";
x(), $u(), fK(), zcg(), KLt(), Xcg(), dEc(), Xdt(), GLt(), ypi(), Cjr(), Jcg(), SEc = 2147483647, Ojr = 0, age = {};

}
var __wakaru_si_initialized = false;
export function si() {
if (__wakaru_si_initialized) return;
__wakaru_si_initialized = true;
"use strict";
x(), LEc = class {
    constructor(){
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
            setTimeout(()=>{
                throw e.stack ? OT.isErrorNoTelemetry(e) ? new OT(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
            }, 0);
        };
    }
    addListener(e) {
        return this.listeners.push(e), ()=>{
            this._removeListener(e);
        };
    }
    emit(e) {
        this.listeners.forEach((t)=>{
            t(e);
        });
    }
    _removeListener(e) {
        this.listeners.splice(this.listeners.indexOf(e), 1);
    }
    setUnexpectedErrorHandler(e) {
        this.unexpectedErrorHandler = e;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(e) {
        this.unexpectedErrorHandler(e), this.emit(e);
    }
    onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
    }
}, Jdt = new LEc, wpn = "Canceled", Rl = class extends Error {
    constructor(){
        if (super(wpn), this.name = this.message, Fpi && typeof console < "u" && PEc()) {
            const e = new Error().stack ?? "";
            Vjr.some((t)=>e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
        }
    }
}, Opi = class extends Error {
    constructor(e){
        super("NotSupported"), e && (this.message = e);
    }
}, OT = class nIa extends Error {
    constructor(t){
        super(t), this.name = "CodeExpectedError";
    }
    static fromError(t) {
        if (t instanceof nIa) return t;
        const n = new nIa;
        return n.message = t.message, n.stack = t.stack, n;
    }
    static isErrorNoTelemetry(t) {
        return t.name === "CodeExpectedError";
    }
}, Zu = class gSm extends Error {
    constructor(t){
        super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, gSm.prototype);
    }
}, Vjr = [
    "composerChatService",
    "composerService",
    "composerUtilsService",
    "composerAgentService",
    "composerCapabilities",
    "composerDecisionsService",
    "aiServiceImpl",
    "toolsV2Service",
    "toolsV2HandlerRegistryService",
    "agentCompatService",
    "mockAgentStreamController",
    "mockComposerStreamController",
    "toolFormer",
    "ToolFormer",
    "tool",
    "agent",
    "Agent",
    "stream",
    "Stream",
    "ComposerFullInputBox",
    "composerActions",
    "cancelAll",
    "abortChatAndWaitForFinish",
    "abortGenerationUUID"
], NEc = 5e3, jjr = 0, Fpi = !1;

}
var __wakaru_Se_initialized = false;
export function Se() {
if (__wakaru_Se_initialized) return;
__wakaru_Se_initialized = true;
"use strict";
if (x(), dr(), lge(), oc(), E7(), Eg(), sqr = !1, cNt = void 0, txc = (e)=>{
    sqr = e;
}, nxc = ()=>sqr, ixc = (e)=>{
    cNt = e;
}, Kpi = new Set, rxc = 50, Ypi = new Set, sxc = 50, oxc = 16, axc = !1, q3e = null, cxc = class {
    constructor(){
        this._registry = new FinalizationRegistry(zlg);
    }
    trackDisposable(e) {
        const t = Error, n = t.stackTraceLimit;
        t.stackTraceLimit = oxc;
        const i = new Error("CREATED via:").stack;
        t.stackTraceLimit = n, this._registry.register(e, i, e);
    }
    setParent(e, t) {
        t ? this._registry.unregister(e) : this.trackDisposable(e);
    }
    markAsDisposed(e) {
        this._registry.unregister(e);
    }
    markAsSingleton(e) {
        this._registry.unregister(e);
    }
}, oqr = class vSm {
    constructor(){
        this.livingDisposables = new Map;
    }
    getDisposableData(t) {
        let n = this.livingDisposables.get(t);
        return n || (n = {
            parent: null,
            source: null,
            isSingleton: !1,
            value: t,
            idx: vSm.idx++
        }, this.livingDisposables.set(t, n)), n;
    }
    trackDisposable(t) {
        const n = this.getDisposableData(t);
        n.source || (n.source = new Error().stack);
    }
    setParent(t, n) {
        const i = this.getDisposableData(t);
        i.parent = n;
    }
    markAsDisposed(t) {
        this.livingDisposables.delete(t);
    }
    markAsSingleton(t) {
        this.getDisposableData(t).isSingleton = !0;
    }
    getRootParent(t, n) {
        const i = n.get(t);
        if (i) return i;
        const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
        return n.set(t, r), r;
    }
    getTrackedDisposables() {
        const t = new Map;
        return [
            ...this.livingDisposables.entries()
        ].filter(([, i])=>i.source !== null && !this.getRootParent(i, t).isSingleton).flatMap(([i])=>i);
    }
    computeLeakingDisposables(t = 10, n) {
        let i;
        if (n) i = n;
        else {
            const c = new Map, l = [
                ...this.livingDisposables.values()
            ].filter((h)=>h.source !== null && !this.getRootParent(h, c).isSingleton);
            if (l.length === 0) return;
            const u = new Set(l.map((h)=>h.value));
            if (i = l.filter((h)=>!(h.parent && u.has(h.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
        }
        if (!i) return;
        function r(c) {
            function l(h, p) {
                for(; h.length > 0 && p.some((g)=>typeof g == "string" ? g === h[0] : h[0].match(g));)h.shift();
            }
            const u = c.source.split(`
`).map((h)=>h.trim().replace("at ", "")).filter((h)=>h !== "");
            return l(u, [
                "Error",
                /^trackDisposable \(.*\)$/,
                /^DisposableTracker.trackDisposable \(.*\)$/
            ]), u.reverse();
        }
        const s = new sNt;
        for (const c of i){
            const l = r(c);
            for(let u = 0; u <= l.length; u++)s.add(l.slice(0, u).join(`
`), c);
        }
        i.sort(DP((c)=>c.idx, JB));
        let o = "", a = 0;
        for (const c of i.slice(0, t)){
            a++;
            const l = r(c), u = [];
            for(let h = 0; h < l.length; h++){
                let p = l[h];
                p = `(shared with ${s.get(l.slice(0, h + 1).join(`
`)).size}/${i.length} leaks) at ${p}`;
                const f = s.get(l.slice(0, h).join(`
`)), v = ZLt([
                    ...f
                ].map((b)=>r(b)[h]), (b)=>b);
                delete v[l[h]];
                for (const [b, y] of Object.entries(v))u.unshift(`    - stacktraces of ${y.length} other leaks continue with ${b}`);
                u.unshift(p);
            }
            o += `


==================== Leaking disposable ${a}/${i.length}: ${c.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
        }
        return i.length > t && (o += `


... and ${i.length - t} more leaking disposables

`), {
            leaks: i,
            details: o
        };
    }
}, oqr.idx = 0, lxc = oqr, axc) {
    const e = "__is_disposable_tracked__";
    zpi(new class {
        trackDisposable(t) {
            const n = new Error("Potentially leaked disposable").stack;
            setTimeout(()=>{
                t[e] || console.log(n);
            }, 3e3);
        }
        setParent(t, n) {
            if (t && t !== we.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsDisposed(t) {
            if (t && t !== we.None) try {
                t[e] = !0;
            } catch  {}
        }
        markAsSingleton(t) {}
    });
}
aqr = class sIa {
    constructor(){
        this._toDispose = new Set, this._isDisposed = !1, j3e(this);
    }
    dispose() {
        this._isDisposed || (ewe(this), this._isDisposed = !0, this.clear());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
    get isDisposed() {
        return this._isDisposed;
    }
    has(t) {
        return this._toDispose.has(t);
    }
    get size() {
        return this._toDispose.size;
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            Lo(this._toDispose);
        } finally{
            this._toDispose.clear();
        }
    }
    add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        if (tht(t, this), this._isDisposed) {
            const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
            sIa.DISABLE_DISPOSED_WARNING || console.warn(n.stack), iqr(n);
        } else this._toDispose.add(t);
        return t;
    }
    delete(t) {
        if (t) {
            if (t === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(t), t.dispose();
        }
    }
    deleteAndLeak(t) {
        t && this._toDispose.has(t) && (this._toDispose.delete(t), tht(t, null));
    }
    transferOut(t) {
        if (this._isDisposed) {
            const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
            sIa.DISABLE_DISPOSED_WARNING || console.warn(n.stack), aNt(n, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(t), t;
    }
}, aqr.DISABLE_DISPOSED_WARNING = !1, He = aqr, lNt = class {
    constructor(e){
        this._isDisposed = !1, this._value = e, j3e(this), tht(e, this);
    }
    get value() {
        if (this._value === void 0) {
            const e = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out");
            throw He.DISABLE_DISPOSED_WARNING || console.warn(e.stack), aNt(e, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), e;
        }
        return this._value;
    }
    get rawValue() {
        return this._value;
    }
    transferOut() {
        const e = this.value;
        return this._value = void 0, tht(e, null), e;
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, ewe(this), this._value?.dispose(), this._value = void 0);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, we = class {
    constructor(){
        this._store = new He, j3e(this), tht(this._store, this);
    }
    dispose() {
        ewe(this), this._store.dispose();
    }
    _register(e) {
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(e);
    }
}, we.None = Object.freeze({
    dispose () {}
}), cn = class {
    constructor(){
        this._isDisposed = !1, j3e(this);
    }
    get value() {
        return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
        if (this._isDisposed) {
            if (e) {
                const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
                He.DISABLE_DISPOSED_WARNING || console.warn(t.stack), iqr(t), e.dispose();
            }
            return;
        }
        e !== this._value && (this._value?.dispose(), e && tht(e, this), this._value = e);
    }
    clear() {
        this.value = void 0;
    }
    dispose() {
        this._isDisposed = !0, ewe(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
        const e = this._value;
        return this._value = void 0, e && tht(e, null), e;
    }
}, uxc = class {
    constructor(e){
        this._disposable = new cn, this._isDisposed = !1, this._disposable.value = e;
    }
    get value() {
        return this._disposable.value;
    }
    set value(e) {
        !this._isDisposed && e === this._disposable.value || (this._disposable.value = e);
    }
    dispose() {
        this._isDisposed = !0, this._disposable.dispose();
    }
}, Xpi = class {
    constructor(e){
        this._disposable = e, this._counter = 1;
    }
    acquire() {
        return this._counter++, this;
    }
    release() {
        return --this._counter === 0 && this._disposable.dispose(), this;
    }
}, z3e = class {
    constructor(){
        this.references = new Map;
    }
    acquire(e, ...t) {
        let n = this.references.get(e);
        n || (n = {
            counter: 0,
            object: this.createReferencedObject(e, ...t)
        }, this.references.set(e, n));
        const { object: i } = n, r = G9(()=>{
            --n.counter === 0 && (this.destroyReferencedObject(e, n.object), this.references.delete(e));
        });
        return n.counter++, {
            object: i,
            dispose: r,
            [Symbol.dispose]: r
        };
    }
}, cqr = class {
    constructor(e){
        this.referenceCollection = e;
    }
    async acquire(e, ...t) {
        const n = this.referenceCollection.acquire(e, ...t);
        try {
            const i = await n.object, r = ()=>n.dispose();
            return {
                object: i,
                dispose: r,
                [Symbol.dispose]: r
            };
        } catch (i) {
            throw n.dispose(), i;
        }
    }
}, dxc = class {
    constructor(e){
        this.object = e;
    }
    dispose() {}
    [Symbol.dispose]() {}
}, po = class {
    constructor(e = new Map){
        this._isDisposed = !1, this._store = e, j3e(this);
    }
    dispose() {
        ewe(this), this._isDisposed = !0, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (this._store.size) try {
            Lo(this._store.values());
        } finally{
            this._store.clear();
        }
    }
    has(e) {
        return this._store.has(e);
    }
    get size() {
        return this._store.size;
    }
    get(e) {
        return this._store.get(e);
    }
    set(e, t, n = !1) {
        if (this._isDisposed) {
            const i = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
            console.warn(i.stack), iqr(i);
            return;
        }
        n || this._store.get(e)?.dispose(), this._store.set(e, t);
    }
    deleteAndDispose(e) {
        this._store.get(e)?.dispose(), this._store.delete(e);
    }
    deleteAndLeak(e) {
        const t = this._store.get(e);
        return this._store.delete(e), t;
    }
    keys() {
        return this._store.keys();
    }
    values() {
        return this._store.values();
    }
    [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
    }
};

}
var __wakaru_bt_initialized = false;
export function bt() {
if (__wakaru_bt_initialized) return;
__wakaru_bt_initialized = true;
"use strict";
x(), lge(), si(), E7(), Se(), JN(), aA(), lqr = !1, mxc = !1, ((e)=>{
    e.None = ()=>we.None;
    function t(q) {
        if (mxc) {
            const { onDidAddListener: z } = q, X = emi.create();
            let Y = 0;
            q.onDidAddListener = ()=>{
                ++Y === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), X.print()), z?.();
            };
        }
    }
    function n(q, z) {
        return g(q, ()=>{}, 0, void 0, !0, void 0, z);
    }
    e.defer = n;
    function i(q) {
        return (z, X = null, Y)=>{
            let Z = !1, K;
            return K = q((J)=>{
                if (!Z) return K ? K.dispose() : Z = !0, z.call(X, J);
            }, null, Y), Z && K.dispose(), K;
        };
    }
    e.once = i;
    function r(q, z) {
        return e.once(e.filter(q, z));
    }
    e.onceIf = r;
    function s(q, z, X) {
        return h((Y, Z = null, K)=>q((J)=>Y.call(Z, z(J)), null, K), X);
    }
    e.map = s;
    function o(q, z, X) {
        return h((Y, Z = null, K)=>q((J)=>{
                z(J), Y.call(Z, J);
            }, null, K), X);
    }
    e.forEach = o;
    function a(q, z, X) {
        return h((Y, Z = null, K)=>q((J)=>z(J) && Y.call(Z, J), null, K), X);
    }
    e.filter = a;
    function c(q) {
        return q;
    }
    e.signal = c;
    function l(...q) {
        return (z, X = null, Y)=>{
            const Z = U_(...q.map((K)=>K((J)=>z.call(X, J))));
            return p(Z, Y);
        };
    }
    e.any = l;
    function u(q, z, X, Y) {
        let Z = X;
        return s(q, (K)=>(Z = z(Z, K), Z), Y);
    }
    e.reduce = u;
    function h(q, z) {
        let X;
        const Y = {
            onWillAddFirstListener () {
                X = q(Z.fire, Z);
            },
            onDidRemoveLastListener () {
                X?.dispose();
            }
        };
        z || t(Y);
        const Z = new ve(Y);
        return z?.add(Z), Z.event;
    }
    function p(q, z) {
        return z instanceof Array ? z.push(q) : z && z.add(q), q;
    }
    function g(q, z, X = 100, Y = !1, Z = !1, K, J) {
        let ne, ee, se, re = 0, ue;
        const ce = {
            leakWarningThreshold: K,
            onWillAddFirstListener () {
                ne = q((le)=>{
                    re++, ee = z(ee, le), Y && !se && (de.fire(ee), ee = void 0), ue ??= ()=>{
                        const ye = ee;
                        ee = void 0, se = void 0, (!Y || re > 1) && de.fire(ye), re = 0;
                    }, typeof X == "number" ? (clearTimeout(se), se = setTimeout(ue, X)) : se === void 0 && (se = 0, queueMicrotask(ue));
                });
            },
            onWillRemoveListener () {
                Z && re > 0 && ue?.();
            },
            onDidRemoveLastListener () {
                ue = void 0, ne.dispose();
            }
        };
        J || t(ce);
        const de = new ve(ce);
        return J?.add(de), de.event;
    }
    e.debounce = g;
    function f(q, z = 0, X) {
        return e.debounce(q, (Y, Z)=>Y ? (Y.push(Z), Y) : [
                Z
            ], z, void 0, !0, void 0, X);
    }
    e.accumulate = f;
    function v(q, z = (Y, Z)=>Y === Z, X) {
        let Y = !0, Z;
        return a(q, (K)=>{
            const J = Y || !z(K, Z);
            return Y = !1, Z = K, J;
        }, X);
    }
    e.latch = v;
    function b(q, z, X) {
        return [
            e.filter(q, z, X),
            e.filter(q, (Y)=>!z(Y), X)
        ];
    }
    e.split = b;
    function y(q, z = !1, X = [], Y) {
        let Z = X.slice(), K = q((ee)=>{
            Z ? Z.push(ee) : ne.fire(ee);
        });
        Y && Y.add(K);
        const J = ()=>{
            Z?.forEach((ee)=>ne.fire(ee)), Z = null;
        }, ne = new ve({
            onWillAddFirstListener () {
                K || (K = q((ee)=>ne.fire(ee)), Y && Y.add(K));
            },
            onDidAddFirstListener () {
                Z && (z ? setTimeout(J) : J());
            },
            onDidRemoveLastListener () {
                K && K.dispose(), K = null;
            }
        });
        return Y && Y.add(ne), ne.event;
    }
    e.buffer = y;
    function T(q, z) {
        return (Y, Z, K)=>{
            const J = z(new A);
            return q(function(ne) {
                const ee = J.evaluate(ne);
                ee !== E && Y.call(Z, ee);
            }, void 0, K);
        };
    }
    e.chain = T;
    const E = Symbol("HaltChainable");
    class A {
        constructor(){
            this.steps = [];
        }
        map(z) {
            return this.steps.push(z), this;
        }
        forEach(z) {
            return this.steps.push((X)=>(z(X), X)), this;
        }
        filter(z) {
            return this.steps.push((X)=>z(X) ? X : E), this;
        }
        reduce(z, X) {
            let Y = X;
            return this.steps.push((Z)=>(Y = z(Y, Z), Y)), this;
        }
        latch(z = (X, Y)=>X === Y) {
            let X = !0, Y;
            return this.steps.push((Z)=>{
                const K = X || !z(Z, Y);
                return X = !1, Y = Z, K ? Z : E;
            }), this;
        }
        evaluate(z) {
            for (const X of this.steps)if (z = X(z), z === E) break;
            return z;
        }
    }
    function R(q, z, X = (Y)=>Y) {
        const Y = (...ne)=>J.fire(X(...ne)), Z = ()=>q.on(z, Y), K = ()=>q.removeListener(z, Y), J = new ve({
            onWillAddFirstListener: Z,
            onDidRemoveLastListener: K
        });
        return J.event;
    }
    e.fromNodeEventEmitter = R;
    function D(q) {
        let z;
        const X = ()=>{
            z = q.subscribe((K)=>Z.fire(K));
        }, Y = ()=>{
            z?.unsubscribe(), z = void 0;
        }, Z = new ve({
            onWillAddFirstListener: X,
            onDidRemoveLastListener: Y
        });
        return Z.event;
    }
    e.fromRxJS = D;
    function P(q, z, X = (Y)=>Y) {
        const Y = (...ne)=>J.fire(X(...ne)), Z = ()=>q.addEventListener(z, Y), K = ()=>q.removeEventListener(z, Y), J = new ve({
            onWillAddFirstListener: Z,
            onDidRemoveLastListener: K
        });
        return J.event;
    }
    e.fromDOMEventEmitter = P;
    function N(q, z) {
        return new Promise((X)=>i(q)(X, null, z));
    }
    e.toPromise = N;
    function O(q) {
        const z = new ve;
        return q.then((X)=>{
            z.fire(X);
        }, ()=>{
            z.fire(void 0);
        }).finally(()=>{
            z.dispose();
        }), z.event;
    }
    e.fromPromise = O;
    function F(q, z) {
        return q((X)=>z.fire(X));
    }
    e.forward = F;
    function H(q, z, X) {
        return z(X), q((Y)=>z(Y));
    }
    e.runAndSubscribe = H;
    class $ {
        constructor(z, X){
            this._observable = z, this._counter = 0, this._hasChanged = !1;
            const Y = {
                onWillAddFirstListener: ()=>{
                    z.addObserver(this), this._observable.reportChanges();
                },
                onDidRemoveLastListener: ()=>{
                    z.removeObserver(this);
                }
            };
            X || t(Y), this.emitter = new ve(Y), X && X.add(this.emitter);
        }
        beginUpdate(z) {
            this._counter++;
        }
        handlePossibleChange(z) {}
        handleChange(z, X) {
            this._hasChanged = !0;
        }
        endUpdate(z) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
    }
    function W(q, z) {
        return new $(q, z).emitter.event;
    }
    e.fromObservable = W;
    function G(q) {
        return (z, X, Y)=>{
            let Z = 0, K = !1;
            const J = {
                beginUpdate () {
                    Z++;
                },
                endUpdate () {
                    Z--, Z === 0 && (q.reportChanges(), K && (K = !1, z.call(X)));
                },
                handlePossibleChange () {},
                handleChange () {
                    K = !0;
                }
            };
            q.addObserver(J), q.reportChanges();
            const ne = {
                dispose () {
                    q.removeObserver(J);
                }
            };
            return Y instanceof He ? Y.add(ne) : Array.isArray(Y) && Y.push(ne), ne;
        };
    }
    e.fromObservableLight = G;
})(Ct || (Ct = {})), Qpi = class aIa {
    constructor(t){
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${aIa._idPool++}`, aIa.all.add(this);
    }
    start(t) {
        this._stopWatch = new Vy, this.listenerCount = t;
    }
    stop() {
        if (this._stopWatch) {
            const t = this._stopWatch.elapsed();
            this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
        }
    }
}, Qpi.all = new Set, Qpi._idPool = 0, Jpi = Qpi, uqr = -1, gxc = 1, fxc = class {
    constructor(e, t, n = pxc()){
        this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(e, t) {
        const n = this.threshold;
        if (n <= 0 || t < n) return;
        this._stacks || (this._stacks = new Map);
        const i = e.value, r = this._stacks.get(i) || 0;
        if (this._stacks.set(i, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = n * .5;
            const [s, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
            console.warn(a), console.warn(s);
            const c = o / t > .3 ? "dominated" : "popular", l = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new dqr(c, a, s, t, l);
            this._errorHandler(u), aNt(u, "emitter_listener_leak");
        }
        return ()=>{
            const s = this._stacks.get(i) || 0;
            s <= 1 ? this._stacks.delete(i) : this._stacks.set(i, s - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) return;
        let e, t = 0;
        for (const [n, i] of this._stacks)(!e || t < i) && (e = [
            n,
            i
        ], t = i);
        return e;
    }
}, emi = class bSm {
    constructor(t){
        this.value = t;
    }
    static create() {
        const t = new Error;
        return new bSm(t.stack ?? "");
    }
    print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
    }
}, dqr = class extends Error {
    constructor(e, t, n, i, r){
        super(r ? `[${r}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = i, this.details = t, this.stack = n;
    }
}, vxc = class extends dqr {
    constructor(e, t, n, i, r){
        super(e, t, n, i, r), this.name = "ListenerRefusalError";
    }
}, Dpn = class {
    constructor(e){
        this.value = e;
    }
}, _xc = 2, tmi = (e, t)=>{
    if (e instanceof Dpn) t(e);
    else for(let n = 0; n < e.length; n++){
        const i = e[n];
        i && t(i);
    }
}, ve = class {
    constructor(e){
        this._size = 0, this._options = e, (uqr > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? uqr, this._leakWarningName = this._options?.leakWarningName ?? pxc(), this._leakWarningErrorHandler = this._options?.onListenerError ?? ns), this._perfMon = this._options?._profName ? new Jpi(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
        if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new fxc(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
        if (!this._disposed) {
            if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                if (lqr) {
                    const e = this._listeners;
                    queueMicrotask(()=>{
                        tmi(e, (t)=>t.stack?.print());
                    });
                }
                tmi(this._listeners, (e)=>{
                    e.value = void 0;
                }), this._listeners = void 0, this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
        }
    }
    get event() {
        return this._event ??= (e, t, n)=>{
            if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
                const a = this._getLeakageMonitor();
                if (a) {
                    const c = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
                    console.warn(c);
                    const l = a.getMostFrequentStack() ?? [
                        "UNKNOWN stack",
                        -1
                    ], u = l[1] / this._size > .3 ? "dominated" : "popular", h = new vxc(u, `${c}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0], this._size, this._options?.leakWarningName);
                    return (this._options?.onListenerError || ns)(h), aNt(h, "emitter_listener_refusal"), we.None;
                }
            }
            if (this._disposed) {
                const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
                return aNt(a, "emitter_use_after_dispose"), we.None;
            }
            t && (e = e.bind(t));
            const i = new Dpn(e);
            let r, s;
            if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * .2)) {
                const a = this._getLeakageMonitor();
                a && (i.stack = emi.create(), r = a.check(i.stack, this._size + 1));
            }
            lqr && (i.stack = s ?? emi.create()), this._listeners ? this._listeners instanceof Dpn ? (this._deliveryQueue ??= new hqr, this._listeners = [
                this._listeners,
                i
            ]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
            const o = rn(()=>{
                r?.(), this._removeListener(i);
            });
            return n instanceof He ? n.add(o) : Array.isArray(n) && n.push(o), o;
        }, this._event;
    }
    _removeListener(e) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (this._size === 1) {
            this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
            return;
        }
        const t = this._listeners, n = t.indexOf(e);
        if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, t[n] = void 0;
        const i = this._deliveryQueue.current === this;
        if (this._size * _xc <= t.length) {
            let r = 0;
            for(let s = 0; s < t.length; s++)t[s] ? t[r++] = t[s] : i && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
            t.length = r;
        }
    }
    _deliver(e, t) {
        if (!e) return;
        const n = this._options?.onListenerError || ns;
        if (!n) {
            e.value(t);
            return;
        }
        try {
            e.value(t);
        } catch (i) {
            n(i);
        }
    }
    _deliverQueue(e) {
        const t = e.current._listeners;
        for(; e.i < e.end;)this._deliver(t[e.i++], e.value);
        e.reset();
    }
    fire(e) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Dpn) this._deliver(this._listeners, e);
        else {
            const t = this._deliveryQueue;
            t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}, bxc = ()=>new hqr, hqr = class {
    constructor(){
        this.i = -1, this.end = 0;
    }
    enqueue(e, t, n) {
        this.i = 0, this.end = n, this.current = e, this.value = t;
    }
    reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
    }
}, Mpn = class extends ve {
    async fireAsync(e, t, n) {
        if (this._listeners) for(this._asyncDeliveryQueue || (this._asyncDeliveryQueue = new oA), tmi(this._listeners, (i)=>this._asyncDeliveryQueue.push([
                i.value,
                e
            ])); this._asyncDeliveryQueue.size > 0 && !t.isCancellationRequested;){
            const [i, r] = this._asyncDeliveryQueue.shift(), s = [], o = {
                ...r,
                token: t,
                waitUntil: (a)=>{
                    if (Object.isFrozen(s)) throw new Error("waitUntil can NOT be called asynchronous");
                    n && (a = n(a, i)), s.push(a);
                }
            };
            try {
                i(o);
            } catch (a) {
                ns(a);
                continue;
            }
            Object.freeze(s), await Promise.allSettled(s).then((a)=>{
                for (const c of a)c.status === "rejected" && ns(c.reason);
            });
        }
    }
}, IV = class extends ve {
    constructor(e){
        super(e), this._isPaused = 0, this._eventQueue = new oA, this._mergeFn = e?.merge;
    }
    get isPaused() {
        return this._isPaused !== 0;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (this._isPaused !== 0 && --this._isPaused === 0) if (this._mergeFn) {
            if (this._eventQueue.size > 0) {
                const e = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(e));
            }
        } else for(; !this._isPaused && this._eventQueue.size !== 0;)super.fire(this._eventQueue.shift());
    }
    fire(e) {
        this._size && (this._isPaused !== 0 ? this._eventQueue.push(e) : super.fire(e));
    }
}, pqr = class extends IV {
    constructor(e){
        super(e), this._delay = e.delay ?? 100;
    }
    fire(e) {
        this._handle || (this.pause(), this._handle = setTimeout(()=>{
            this._handle = void 0, this.resume();
        }, this._delay)), super.fire(e);
    }
}, mqr = class extends ve {
    constructor(e){
        super(e), this._queuedEvents = [], this._mergeFn = e?.merge;
    }
    fire(e) {
        this.hasListeners() && (this._queuedEvents.push(e), this._queuedEvents.length === 1 && queueMicrotask(()=>{
            this._mergeFn ? super.fire(this._mergeFn(this._queuedEvents)) : this._queuedEvents.forEach((t)=>super.fire(t)), this._queuedEvents = [];
        }));
    }
}, yxc = class {
    constructor(e){
        this.event = e, this._listener = new cn;
    }
    hook(e, t) {
        this._listener.value = this.event(e, t);
    }
    unhook() {
        this._listener.clear();
    }
    disposeListener() {
        this._listener.dispose();
    }
}, Gie = class {
    constructor(){
        this.hasListeners = !1, this.sources = [], this.emitter = new ve({
            onWillAddFirstListener: ()=>this.onFirstListenerAdd(),
            onDidRemoveLastListener: ()=>this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(e) {
        const t = new yxc(e);
        return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), rn(G9(()=>{
            t.disposeListener();
            const i = this.sources.indexOf(t);
            i !== -1 && this.sources.splice(i, 1);
        }));
    }
    onFirstListenerAdd() {
        this.hasListeners = !0, this.sources.forEach((e)=>e.hook(this.emitter.fire, this.emitter));
    }
    onLastListenerRemove() {
        this.hasListeners = !1, this.sources.forEach((e)=>e.unhook());
    }
    dispose() {
        this.emitter.dispose();
        for (const e of this.sources)e.disposeListener();
        this.sources.length = 0;
    }
}, nmi = class {
    constructor(e, t, n, i){
        this._store = new He;
        const r = this._store.add(new Gie), s = this._store.add(new po);
        function o(a) {
            s.set(a, r.add(i(a)));
        }
        for (const a of e)o(a);
        this._store.add(t((a)=>{
            o(a);
        })), this._store.add(n((a)=>{
            s.deleteAndDispose(a);
        })), this.event = r.event;
    }
    dispose() {
        this._store.dispose();
    }
}, uNt = class {
    constructor(){
        this.data = [];
    }
    wrapEvent(e, t, n) {
        return (i, r, s)=>e((o)=>{
                const a = this.data[this.data.length - 1];
                if (!t) {
                    a ? a.buffers.push(()=>i.call(r, o)) : i.call(r, o);
                    return;
                }
                const c = a;
                if (!c) {
                    i.call(r, t(n, o));
                    return;
                }
                c.items ??= [], c.items.push(o), c.buffers.length === 0 && a.buffers.push(()=>{
                    c.reducedResult ??= n ? c.items.reduce(t, n) : c.items.reduce(t), i.call(r, c.reducedResult);
                });
            }, void 0, s);
    }
    bufferEvents(e) {
        const t = {
            buffers: new Array
        };
        this.data.push(t);
        const n = e();
        return this.data.pop(), t.buffers.forEach((i)=>i()), n;
    }
}, V9 = class {
    constructor(){
        this.listening = !1, this.inputEvent = Ct.None, this.emitter = new ve({
            onDidAddFirstListener: ()=>{
                this.listening = !0, this.inputEventListener?.dispose(), this.inputEventListener = new cn, this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: ()=>{
                this.listening = !1, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
            }
        }), this.event = this.emitter.event;
    }
    set input(e) {
        this.inputEvent = e, this.listening && (this.inputEventListener ??= new cn, this.inputEventListener.value = e(this.emitter.fire, this.emitter));
    }
    dispose() {
        this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = Ct.None, this.emitter.dispose();
    }
}, Sxc = class {
    constructor(e){
        this._value = e, this._onDidChange = new ve, this.onDidChange = this._onDidChange.event;
    }
    static const(e) {
        return new kxc(e);
    }
    get value() {
        return this._value;
    }
    set value(e) {
        e !== this._value && (this._value = e, this._onDidChange.fire(void 0));
    }
}, kxc = class {
    constructor(e){
        this.value = e, this.onDidChange = Ct.None;
    }
};

}
var __wakaru_jn_initialized = false;
export function jn() {
if (__wakaru_jn_initialized) return;
__wakaru_jn_initialized = true;
"use strict";
if (x(), rt(), K3e = "en", dNt = !1, iht = !1, hNt = !1, bqr = !1, yqr = !1, smi = !1, Sqr = !1, omi = !1, kqr = !1, wqr = !1, pNt = void 0, Npn = K3e, ami = K3e, Cqr = void 0, bAe = void 0, yAe = globalThis, AV = void 0, typeof yAe.vscode < "u" && typeof yAe.vscode.process < "u" ? AV = yAe.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (AV = process), Tqr = typeof AV?.versions?.electron == "string", xxc = Tqr && AV?.type === "renderer", typeof AV == "object") {
    dNt = AV.platform === "win32", iht = AV.platform === "darwin", hNt = AV.platform === "linux", bqr = hNt && !!AV.env.SNAP && !!AV.env.SNAP_REVISION, Sqr = Tqr, kqr = !!AV.env.CI || !!AV.env.BUILD_ARTIFACTSTAGINGDIRECTORY, pNt = K3e, Npn = K3e;
    const e = AV.env.VSCODE_NLS_CONFIG;
    if (e) try {
        const t = JSON.parse(e);
        pNt = t.userLocale, ami = t.osLocale, Npn = t.resolvedLanguage || K3e, Cqr = t.languagePack?.translationsConfigFile;
    } catch  {}
    yqr = !0;
} else typeof navigator == "object" && !xxc ? (bAe = navigator.userAgent, dNt = bAe.indexOf("Windows") >= 0, iht = bAe.indexOf("Macintosh") >= 0, omi = (bAe.indexOf("Macintosh") >= 0 || bAe.indexOf("iPad") >= 0 || bAe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, hNt = bAe.indexOf("Linux") >= 0, wqr = bAe?.indexOf("Mobi") >= 0, smi = !0, Npn = imi() || K3e, pNt = navigator.language.toLowerCase(), ami = pNt) : console.error("Unable to resolve platform.");
lS = ((e)=>(e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows", e))(lS || {}), Opn = 0, iht ? Opn = 1 : dNt ? Opn = 3 : hNt && (Opn = 2), Oo = dNt, Ai = iht, vf = hNt, Fpn = bqr, Q_ = yqr, mNt = Sqr, Dl = smi, Ixc = smi && typeof yAe.importScripts == "function", Axc = Ixc ? yAe.origin : void 0, KL = omi, Eqr = wqr, j9 = kqr, ZH = Opn, twe = bAe, Zk = Npn, ((e)=>{
    function t() {
        return Zk;
    }
    e.value = t;
    function n() {
        return Zk.length === 2 ? Zk === "en" : Zk.length >= 3 ? Zk[0] === "e" && Zk[1] === "n" && Zk[2] === "-" : !1;
    }
    e.isDefaultVariant = n;
    function i() {
        return Zk === "en";
    }
    e.isDefault = i;
})(Qce || (Qce = {})), xqr = pNt, Rxc = ami, Iqr = Cqr, Dxc = typeof yAe.postMessage == "function" && !yAe.importScripts, sJ = (()=>{
    if (Dxc) {
        const e = [];
        yAe.addEventListener("message", (n)=>{
            if (n.data && n.data.vscodeScheduleAsyncWork) for(let i = 0, r = e.length; i < r; i++){
                const s = e[i];
                if (s.id === n.data.vscodeScheduleAsyncWork) {
                    e.splice(i, 1), s.callback();
                    return;
                }
            }
        });
        let t = 0;
        return (n)=>{
            const i = ++t;
            e.push({
                id: i,
                callback: n
            }), yAe.postMessage({
                vscodeScheduleAsyncWork: i
            }, "*");
        };
    }
    return (e)=>setTimeout(e);
})(), Ul = ((e)=>(e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux", e))(Ul || {}), hp = iht || omi ? 2 : dNt ? 1 : 3, Aqr = !0, Rqr = !1, gNt = !!(twe && twe.indexOf("Chrome") >= 0), Dqr = !!(twe && twe.indexOf("Firefox") >= 0), Mqr = !!(!gNt && twe && twe.indexOf("Safari") >= 0), Pqr = !!(twe && twe.indexOf("Edg/") >= 0), Mxc = !!(twe && twe.indexOf("Android") >= 0), Bpn = void 0, gge = AV?.arch, fge = AV?.platform, Pxc = AV?.versions?.node;

}
var __wakaru_Ps_initialized = false;
export function Ps() {
if (__wakaru_Ps_initialized) return;
__wakaru_Ps_initialized = true;
"use strict";
x(), Upn(), qC(), Wxc(), Yxc = /{(\d+)}/g, Xxc = /{([^}]+)}/g, Wpn = class {
    get offset() {
        return this._offset;
    }
    constructor(e, t = 0){
        this._str = e, this._len = e.length, this._offset = t;
    }
    setOffset(e) {
        this._offset = e;
    }
    prevCodePoint() {
        const e = hug(this._str, this._offset);
        return this._offset -= e >= 65536 ? 2 : 1, e;
    }
    nextCodePoint() {
        const e = gmi(this._str, this._len, this._offset);
        return this._offset += e >= 65536 ? 2 : 1, e;
    }
    eol() {
        return this._offset >= this._len;
    }
}, yNt = class {
    get offset() {
        return this._iterator.offset;
    }
    constructor(e, t = 0){
        this._iterator = new Wpn(e, t);
    }
    nextGraphemeLength() {
        const e = qqr.getInstance(), t = this._iterator, n = t.offset;
        let i = e.getGraphemeBreakType(t.nextCodePoint());
        for(; !t.eol();){
            const r = t.offset, s = e.getGraphemeBreakType(t.nextCodePoint());
            if (Kxc(i, s)) {
                t.setOffset(r);
                break;
            }
            i = s;
        }
        return t.offset - n;
    }
    prevGraphemeLength() {
        const e = qqr.getInstance(), t = this._iterator, n = t.offset;
        let i = e.getGraphemeBreakType(t.prevCodePoint());
        for(; t.offset > 0;){
            const r = t.offset, s = e.getGraphemeBreakType(t.prevCodePoint());
            if (Kxc(s, i)) {
                t.setOffset(r);
                break;
            }
            i = s;
        }
        return n - t.offset;
    }
    eol() {
        return this._iterator.eol();
    }
}, fmi = void 0, Zxc = /^[\t\n\r\x20-\x7E]*$/, Gqr = /[\u2028\u2029]/, Qxc = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, Jxc = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, eIc = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, Vqr = new RegExp("(?:" + [
    Qxc.source,
    Jxc.source,
    eIc.source
].join("|") + ")", "g"), tIc = /\\\[.*?\\\]/g, nIc = "\uFEFF", jqr = class AXn {
    static getInstance() {
        return AXn._INSTANCE || (AXn._INSTANCE = new AXn), AXn._INSTANCE;
    }
    constructor(){
        this._data = bug();
    }
    getGraphemeBreakType(t) {
        if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
        if (t < 127) return 0;
        const n = this._data, i = n.length / 3;
        let r = 1;
        for(; r <= i;)if (t < n[3 * r]) r = 2 * r;
        else if (t > n[3 * r + 1]) r = 2 * r + 1;
        else return n[3 * r + 2];
        return 0;
    }
}, jqr._INSTANCE = null, qqr = jqr, Mqe = "\xA0", Pqe = class cIa {
    constructor(t){
        this.confusableDictionary = t;
    }
    static getInstance(t) {
        return cIa.cache.get(Array.from(t).join(","));
    }
    static getLocales() {
        return cIa._locales.value;
    }
    isAmbiguous(t) {
        return this.confusableDictionary.has(t);
    }
    containsAmbiguousCharacter(t) {
        for(let n = 0; n < t.length; n++){
            const i = t.codePointAt(n);
            if (typeof i == "number" && this.isAmbiguous(i)) return !0;
        }
        return !1;
    }
    getPrimaryConfusable(t) {
        return this.confusableDictionary.get(t);
    }
    getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys());
    }
}, Pqe.ambiguousCharacterData = new Yf(()=>JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Pqe.cache = new Oqr((e)=>{
    const t = e.split(",");
    function n(u) {
        const h = new Map;
        for(let p = 0; p < u.length; p += 2)h.set(u[p], u[p + 1]);
        return h;
    }
    function i(u, h) {
        const p = new Map(u);
        for (const [g, f] of h)p.set(g, f);
        return p;
    }
    function r(u, h) {
        if (!u) return h;
        const p = new Map;
        for (const [g, f] of u)h.has(g) && p.set(g, f);
        return p;
    }
    const s = Pqe.ambiguousCharacterData.value;
    let o = t.filter((u)=>!u.startsWith("_") && u in s);
    o.length === 0 && (o = [
        "_default"
    ]);
    let a;
    for (const u of o){
        const h = n(s[u]);
        a = r(a, h);
    }
    const c = n(s._common), l = i(c, a);
    return new Pqe(l);
}), Pqe._locales = new Yf(()=>Object.keys(Pqe.ambiguousCharacterData.value).filter((e)=>!e.startsWith("_"))), vmi = Pqe, zqr = class RXn {
    static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
    }
    static getData() {
        return this._data || (this._data = new Set([
            ...Object.values(RXn.getRawData())
        ].flat())), this._data;
    }
    static isInvisibleCharacter(t) {
        return RXn.getData().has(t);
    }
    static containsInvisibleCharacter(t) {
        for(let n = 0; n < t.length; n++){
            const i = t.codePointAt(n);
            if (typeof i == "number" && (RXn.isInvisibleCharacter(i) || i === 32)) return !0;
        }
        return !1;
    }
    static get codePoints() {
        return RXn.getData();
    }
}, zqr._data = void 0, SNt = zqr;

}
var __wakaru_Fo_initialized = false;
export function Fo() {
if (__wakaru_Fo_initialized) return;
__wakaru_Fo_initialized = true;
"use strict";
x(), qC(), nwe(), TNt = typeof Buffer < "u", bIc = new Yf(()=>new Uint8Array(256)), yIc = 512 * 1024, Oqe = null, ymi = !1, rzr = !1, szr = 1 / 0, azr = 1 / 0, wi = class nQ {
    static alloc(t) {
        let n;
        return TNt ? n = new nQ(Buffer.allocUnsafe(t)) : n = new nQ(new Uint8Array(t)), fIc(n, "alloc"), n;
    }
    static wrap(t) {
        TNt && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
        const n = new nQ(t);
        return fIc(n, "wrap"), n;
    }
    static fromString(t, n) {
        return !(n?.dontUseNodeBuffer || !1) && TNt ? new nQ(Buffer.from(t)) : (ENt || (ENt = new TextEncoder), new nQ(ENt.encode(t)));
    }
    static withPooledString(t, n) {
        if (TNt) return n(nQ.fromString(t));
        if (ymi) return rzr || (rzr = !0, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), n(nQ.fromString(t));
        const i = t.length * 3;
        if (i > yIc) return n(nQ.fromString(t));
        if (ENt || (ENt = new TextEncoder), !Oqe || Oqe.byteLength < i) {
            let s = Oqe ? Oqe.byteLength * 2 : 16384;
            for(; s < i;)s *= 2;
            Oqe = new Uint8Array(s);
        }
        const r = ENt.encodeInto(t, Oqe).written;
        ymi = !0;
        try {
            return n(new nQ(Oqe.subarray(0, r)));
        } finally{
            ymi = !1;
        }
    }
    static fromByteArray(t) {
        const n = nQ.alloc(t.length);
        for(let i = 0, r = t.length; i < r; i++)n.buffer[i] = t[i];
        return n;
    }
    static concat(t, n) {
        if (typeof n > "u") {
            n = 0;
            for(let s = 0, o = t.length; s < o; s++)n += t[s].byteLength;
        }
        const i = nQ.alloc(n);
        let r = 0;
        for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            i.set(a, r), r += a.byteLength;
        }
        return i;
    }
    constructor(t){
        this.buffer = t, this.byteLength = this.buffer.byteLength;
    }
    clone() {
        const t = nQ.alloc(this.byteLength);
        return t.set(this), t;
    }
    toString() {
        if (TNt) return this.buffer.toString();
        if (ozr && this.buffer.byteLength > szr) try {
            ozr(this.buffer.byteLength);
        } catch  {}
        return izr || (izr = new TextDecoder), izr.decode(this.buffer);
    }
    slice(t, n) {
        return new nQ(this.buffer.subarray(t, n));
    }
    set(t, n) {
        if (t instanceof nQ) this.buffer.set(t.buffer, n);
        else if (t instanceof Uint8Array) this.buffer.set(t, n);
        else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
        else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
        else throw new Error("Unknown argument 'array'");
    }
    readUInt32BE(t) {
        return _K(this.buffer, t);
    }
    writeUInt32BE(t, n) {
        bK(this.buffer, t, n);
    }
    readUInt32LE(t) {
        return $ug(this.buffer, t);
    }
    writeUInt32LE(t, n) {
        Hug(this.buffer, t, n);
    }
    readUInt8(t) {
        return ezr(this.buffer, t);
    }
    writeUInt8(t, n) {
        tzr(this.buffer, t, n);
    }
    indexOf(t, n = 0) {
        return Fug(this.buffer, t instanceof nQ ? t.buffer : t, n);
    }
    equals(t) {
        return this === t ? !0 : this.byteLength !== t.byteLength ? !1 : this.buffer.every((n, i)=>n === t.buffer[i]);
    }
}, SIc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kIc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

}
