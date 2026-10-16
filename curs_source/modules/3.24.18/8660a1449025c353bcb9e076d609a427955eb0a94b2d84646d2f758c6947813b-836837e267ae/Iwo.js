import { Ide } from "./arrays.js";
import { _Zu } from "./async.js";
import { Jdr } from "./browser.js";
import { COe, JK, zje } from "./browserTracingIntegration.js";
import { vl } from "./buildFlags.js";
import { El } from "./cancellation.js";
import { _M, cXn, dke, wvt } from "./client.js";
import { Sv } from "./composerMessageStorageService.js";
import { Mzu, Pzu, Rzu } from "./consola.js";
import { Dun } from "./console-integration.js";
import { cpr } from "./constants_3.js";
import { Wwo, lVu, uVu } from "./constants_4.js";
import { _Vu } from "./constants_5.js";
import { CVu, Kwo, TVu, Ywo } from "./constants_6.js";
import { PVu, qun } from "./constants_7.js";
import { rg } from "./debug-build.js";
import { Dvt } from "./debug-build_2.js";
import { so } from "./debug-logger.js";
import { zKu } from "./dom.js";
import { q1o } from "./dynamicSamplingContext.js";
import { GKu, set } from "./elementTiming.js";
import { $Xu, BXu, HXu, UXu, jXu } from "./extpath.js";
import { $Ft, $zu, BFt, Bzu, Dwo, Dzu, Ede, Fzu, Gun, Gxe, Lwo, Lzu, Mwo, Nwo, Nzu, Ozu, Pvt, UFt, Uzu, Xje, Zje, _Xn, apr, bXn, det, fXn, jFt, jzu, opr, rpr, spr, uet, vXn, yXn } from "./gen-ai-attributes.js";
import { GFt } from "./getActivationStart.js";
import { aKu } from "./getCLS.js";
import { vKu } from "./getINP.js";
import { yKu } from "./getLCP.js";
import { jXn } from "./getNativeImplementation.js";
import { Vun } from "./getNavigationEntry.js";
import { bpr } from "./getVisibilityWatcher.js";
import { bZu, yZu } from "./global.js";
import { CD } from "./growthbook.js";
import { u1o, vFt } from "./handlers.js";
import { vpr } from "./initUnique.js";
import { Ase, Epr, FXn, OKu, Tpr, VFt, eL, zq } from "./inp.js";
import { LXn, Qun } from "./instrument.js";
import { iGu } from "./internal_2.js";
import { p1o } from "./is.js";
import { np } from "./iterator.js";
import { Fwo, SXn, kXn } from "./messageTruncation.js";
import { Vje } from "./moduleMetadata.js";
import { Ot } from "./network.js";
import { XYu } from "./nls.js";
import { fWu } from "./normalize.js";
import { qFt } from "./observe.js";
import { g0o } from "./onHidden.js";
import { kKu } from "./onTTFB.js";
import { Ohr } from "./parameterize.js";
import { Rde, Uvt, Z0, cXu, dXu, g1, iY, kCo, lXu, lh, uXu } from "./path_2.js";
import { YR } from "./resources.js";
import { BYn, Hxe, vM, wun, xse } from "./scope.js";
import { KE, SFt, Svt, YF, bx, kFt, kvt } from "./semanticAttributes.js";
import { Wxe } from "./sentryNonRecordingSpan.js";
import { Cvt, JN, Kb, M3, Pun, Yb, ah, vke } from "./sentrySpan.js";
import { xko } from "./server-runtime-client.js";
import { Tvt, hhr } from "./spanUtils.js";
import { TI } from "./spanstatus.js";
import { fvt } from "./stackStrategy.js";
import { Vdr, qq } from "./stacktrace.js";
import { GXu } from "./stream.js";
import { HFt } from "./supports.js";
import { bOe, s7, tXn, yvt } from "./trace.js";
import { dve } from "./traceLifecycleProfiler.js";
import { Zk } from "./types.js";
import { CYu } from "./types_2.js";
import { XCo, ZCo, nAe, oZu, rZu, rt, sZu } from "./uri.js";
import { E1o, I1o } from "./utils.js";
import { Jje, gve } from "./utils_8.js";
import { $wo, Hwo, Jzu, Kzu, Qje, Qzu, Uwo, Vzu, Xzu, Yzu, Zzu, dpr, eVu, iVu, jwo, nVu, oVu, rVu, sVu, tVu, upr } from "./vercel-ai-attributes.js";
import { _Oe } from "./version.js";
import { $t } from "./window.js";
import { o_ } from "./worldwide.js";
import { vve } from "./xhr.js";
var QSo = Object.defineProperty, Tuy = Object.getOwnPropertyDescriptor, JSo = Object.getOwnPropertyNames, Iuy = Object.prototype.hasOwnProperty, IHu = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), xHu = (t)=>{
    throw TypeError(t);
}, Sa = (t, e)=>{
    for(var n in e)QSo(t, n, {
        get: e[n],
        enumerable: !0
    });
}, Auy = (t, e, n, i)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let r of JSo(e))!Iuy.call(t, r) && r !== n && QSo(t, r, {
        get: ()=>e[r],
        enumerable: !(i = Tuy(e, r)) || i.enumerable
    });
    return t;
};
export function gFt(t, e, n = o_) {
    const i = n.__SENTRY__ = n.__SENTRY__ || {}, r = i[_Oe] = i[_Oe] || {};
    return r[t] || (r[t] = e());
}
export function Ise(t) {
    try {
        return !t || typeof t != "function" ? Vdr : t.name || Vdr;
    } catch  {
        return Vdr;
    }
}
export function net(t, e) {
    vFt[t] = vFt[t] || [], vFt[t].push(e);
}
export function iet(t, e) {
    if (!u1o[t]) {
        u1o[t] = !0;
        try {
            e();
        } catch (n) {
            rg && so.error(`Error while instrumenting ${t}`, n);
        }
    }
}
export function uke(t, e) {
    const n = t && vFt[t];
    if (n) for (const i of n)try {
        i(e);
    } catch (r) {
        rg && so.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Ise(i)}
Error:`, r);
    }
}
export function yOe(t) {
    switch(p1o.call(t)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return Hje(t, Error);
    }
}
export function bun(t, e) {
    return p1o.call(t) === `[object ${e}]`;
}
export function wde(t) {
    return bun(t, "String");
}
export function gvt(t) {
    return typeof Event < "u" && Hje(t, Event);
}
export function DHu(t) {
    return typeof Element < "u" && Hje(t, Element);
}
export function NHu(t) {
    return bun(t, "RegExp");
}
export function LHu(t) {
    return xse(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
}
export function Hje(t, e) {
    try {
        return t instanceof e;
    } catch  {
        return !1;
    }
}
export function h1o(t) {
    return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
export function OHu(t) {
    return typeof Request < "u" && Hje(t, Request);
}
export function Qdr(t) {
    if (!Jdr.HTMLElement) return null;
    let e = t;
    const n = 5;
    for(let i = 0; i < n; i++){
        if (!e) return null;
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement;
        }
        e = e.parentNode;
    }
    return null;
}
export function lQ(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch  {
        rg && so.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
export function m1o(t) {
    if (yOe(t)) return {
        message: t.message,
        name: t.name,
        stack: t.stack,
        ...jHu(t)
    };
    if (gvt(t)) {
        const e = {
            type: t.type,
            target: UHu(t.target),
            currentTarget: UHu(t.currentTarget),
            ...jHu(t)
        };
        return typeof CustomEvent < "u" && Hje(t, CustomEvent) && (e.detail = t.detail), e;
    } else return t;
}
function UHu(t) {
    try {
        return DHu(t) ? Ase(t) : Object.prototype.toString.call(t);
    } catch  {
        return "<unknown>";
    }
}
function jHu(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for(const n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    } else return {};
}
export function FYn(t, e, n = !1) {
    return wde(t) ? NHu(e) ? e.test(t) : wde(e) ? n ? t === e : t.includes(e) : !1 : !1;
}
export function Pte(t, e = [], n = !1) {
    return e.some((i)=>FYn(t, i, n));
}
function tdy(t) {
    try {
        const e = o_.WeakRef;
        if (typeof e == "function") return new e(t);
    } catch  {}
    return t;
}
export function nWu(t, e, n) {
    t && (lQ(t, I1o, tdy(n)), lQ(t, E1o, e));
}
export function F1o(t, e) {
    const n = t[hhr] || t;
    lQ(e, hhr, n), t[Tvt] ? t[Tvt].add(e) : lQ(t, Tvt, new Set([
        e
    ]));
}
export function ghr(t, e) {
    lQ(t, q1o, e);
}
export function Mte(t, e = 100, n = 1 / 0) {
    try {
        return z1o("", t, e, n);
    } catch (i) {
        return {
            ERROR: `**non-serializable** (${i})`
        };
    }
}
function z1o(t, e, n = 1 / 0, i = 1 / 0, r = Sdy()) {
    const [s, o] = r;
    if (e == null || [
        "boolean",
        "string"
    ].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
    if (fdy(e)) return "[SolidStore]";
    const a = gdy(t, e);
    if (!a.startsWith("[object ")) return a;
    if (e.__sentry_skip_normalization__) return e;
    const l = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
    if (l === 0) return a.replace("object ", "");
    if (s(e)) return "[Circular ~]";
    const c = e;
    if (c && typeof c.toJSON == "function") try {
        const p = c.toJSON();
        return z1o("", p, l - 1, i, r);
    } catch  {}
    const u = Array.isArray(e) ? [] : {};
    let d = 0;
    const h = m1o(e);
    for(const p in h){
        if (!Object.prototype.hasOwnProperty.call(h, p)) continue;
        if (d >= i) {
            u[p] = "[MaxProperties ~]";
            break;
        }
        const g = Object.getOwnPropertyDescriptor(h, p);
        if (p === "children" && g && !("value" in g)) {
            u[p] = "[Getter]", d++;
            continue;
        }
        const f = h[p];
        u[p] = z1o(p, f, l - 1, i, r), d++;
    }
    return o(e), u;
}
function gdy(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
        if (t === "domainEmitter") return "[DomainEmitter]";
        if (typeof global < "u" && e === global) return "[Global]";
        if (typeof window < "u" && e === window) return "[Window]";
        if (typeof document < "u" && e === document) return "[Document]";
        if (h1o(e)) return "[VueViewModel]";
        if (LHu(e)) return "[SyntheticEvent]";
        if (typeof e == "number" && !Number.isFinite(e)) return `[${e}]`;
        if (typeof e == "function") return `[Function: ${Ise(e)}]`;
        if (typeof e == "symbol") return `[${String(e)}]`;
        if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
        const n = vdy(e);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
    } catch (n) {
        return `**non-serializable** (${n})`;
    }
}
function fdy(t) {
    if (t === null || typeof t != "object") return !1;
    try {
        return Object.getOwnPropertySymbols(t).some((e)=>e.description === fWu);
    } catch  {
        return !1;
    }
}
function vdy(t) {
    const e = Object.getPrototypeOf(t);
    return e?.constructor ? e.constructor.name : "null prototype";
}
function Sdy() {
    const t = new WeakSet;
    function e(i) {
        return t.has(i) ? !0 : (t.add(i), !1);
    }
    function n(i) {
        t.delete(i);
    }
    return [
        e,
        n
    ];
}
export function CWu(t) {
    if (!rg) return;
    const { description: e = "< unknown name >", op: n = "< unknown op >", parent_span_id: i } = Yb(t), { spanId: r } = t.spanContext(), s = zje(t), o = JN(t), a = o === t, l = `[Tracing] Starting ${s ? "sampled" : "unsampled"} ${a ? "root " : ""}span`, c = [
        `op: ${n}`,
        `name: ${e}`,
        `ID: ${r}`
    ];
    if (i && c.push(`parent ID: ${i}`), !a) {
        const { op: u, description: d } = Yb(o);
        c.push(`root ID: ${o.spanContext().spanId}`), u && c.push(`root op: ${u}`), d && c.push(`root description: ${d}`);
    }
    so.log(`${l}
  ${c.join(`
  `)}`);
}
export function J1o(t, e, n, i = eL()) {
    const r = i && JN(i);
    r && (rg && so.log(`[Measurement] Setting measurement on root span: ${t} = ${e} ${n}`), r.addEvent(t, {
        [kFt]: e,
        [SFt]: n
    }));
}
export function JYn(t, e, n = ()=>{}, i = ()=>{}) {
    let r;
    try {
        r = t();
    } catch (s) {
        throw e(s), n(), s;
    }
    return Idy(r, e, n, i);
}
function Idy(t, e, n, i) {
    return fvt(t) ? t.then((r)=>(n(), i(r), r), (r)=>{
        throw e(r), n(), r;
    }) : (n(), i(t), t);
}
export function AWu(t, e, n) {
    if (!JK(t)) return [
        !1
    ];
    let i, r;
    typeof t.tracesSampler == "function" ? (r = t.tracesSampler({
        ...e,
        inheritOrSampleWith: (a)=>typeof e.parentSampleRate == "number" ? e.parentSampleRate : typeof e.parentSampled == "boolean" ? Number(e.parentSampled) : a
    }), i = !0) : e.parentSampled !== void 0 ? r = e.parentSampled : typeof t.tracesSampleRate < "u" && (r = t.tracesSampleRate, i = !0);
    const s = wvt(r);
    if (s === void 0) return rg && so.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [
        !1
    ];
    if (!s) return rg && so.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [
        !1,
        s,
        i
    ];
    const o = n < s;
    return o || rg && so.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [
        o,
        s,
        i
    ];
}
export function wOe(t, e) {
    const n = eXn();
    if (n.startSpanManual) return n.startSpanManual(t, e);
    const i = oko(t), { forceTransaction: r, parentSpan: s, scope: o } = t, a = o?.clone();
    return s7(a, ()=>MWu(s)(()=>{
            const c = Kb(), u = ako(c, s), h = t.onlyIfParent && !u ? new Wxe : sko({
                parentSpan: u,
                spanArguments: i,
                forceTransaction: r,
                scope: c
            });
            return Hxe(c, h), JYn(()=>e(h, ()=>h.end()), ()=>{
                const { status: p } = Yb(h);
                h.isRecording() && (!p || p === "ok") && h.setStatus({
                    code: TI,
                    message: "internal_error"
                });
            });
        }));
}
export function IFt(t, e) {
    const n = eXn();
    return n.withActiveSpan ? n.withActiveSpan(t, e) : s7((i)=>(Hxe(i, t || void 0), e(i)));
}
export function sko({ parentSpan: t, spanArguments: e, forceTransaction: n, scope: i }) {
    if (!JK()) {
        const o = new Wxe;
        if (n || !t) {
            const a = {
                sampled: "false",
                sample_rate: "0",
                transaction: e.name,
                ...vke(o)
            };
            ghr(o, a);
        }
        return o;
    }
    const r = _M();
    let s;
    if (t && !n) s = xdy(t, i, e), F1o(t, s);
    else if (t) {
        const o = vke(t), { traceId: a, spanId: l } = t.spanContext(), c = zje(t);
        s = PWu({
            traceId: a,
            parentSpanId: l,
            ...e
        }, i, c), ghr(s, o);
    } else {
        const { traceId: o, dsc: a, parentSpanId: l, sampled: c } = {
            ...r.getPropagationContext(),
            ...i.getPropagationContext()
        };
        s = PWu({
            traceId: o,
            parentSpanId: l,
            ...e
        }, i, c), a && ghr(s, a);
    }
    return CWu(s), nWu(s, i, r), s;
}
export function oko(t) {
    const n = {
        isStandalone: (t.experimental || {}).standalone,
        ...t
    };
    if (t.startTime) {
        const i = {
            ...n
        };
        return i.startTimestamp = Cvt(t.startTime), delete i.startTime, i;
    }
    return n;
}
export function eXn() {
    const t = bOe();
    return yvt(t);
}
function PWu(t, e, n) {
    const i = ah(), r = i?.getOptions() || {}, { name: s = "" } = t, o = {
        spanAttributes: {
            ...t.attributes
        },
        spanName: s,
        parentSampled: n
    };
    i?.emit("beforeSampling", o, {
        decision: !1
    });
    const a = o.parentSampled ?? n, l = o.spanAttributes, c = e.getPropagationContext(), [u, d, h] = e.getScopeData().sdkProcessingMetadata[tXn] ? [
        !1
    ] : AWu(r, {
        name: s,
        parentSampled: a,
        attributes: l,
        parentSampleRate: wvt(c.dsc?.sample_rate)
    }, c.sampleRand), p = new Pun({
        ...t,
        attributes: {
            [YF]: "custom",
            [Svt]: d !== void 0 && h ? d : void 0,
            ...l
        },
        sampled: u
    });
    return !u && i && (rg && so.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), i.recordDroppedEvent("sample_rate", "transaction")), i && i.emit("spanStart", p), p;
}
function xdy(t, e, n) {
    const { spanId: i, traceId: r } = t.spanContext(), s = e.getScopeData().sdkProcessingMetadata[tXn] ? !1 : zje(t), o = s ? new Pun({
        ...n,
        parentSpanId: i,
        traceId: r,
        sampled: s
    }) : new Wxe({
        traceId: r
    });
    F1o(t, o);
    const a = ah();
    return a && (a.emit("spanStart", o), n.endTimestamp && a.emit("spanEnd", o)), o;
}
export function ako(t, e) {
    if (e) return e;
    if (e === null) return;
    const n = wun(t);
    if (!n) return;
    const i = ah();
    return (i ? i.getOptions() : {}).parentSpanIsAlwaysRootSpan ? JN(n) : n;
}
export function MWu(t) {
    return t !== void 0 ? (e)=>IFt(t, e) : (e)=>e();
}
export function aet(t, e) {
    const { extra: n, tags: i, user: r, contexts: s, level: o, sdkProcessingMetadata: a, breadcrumbs: l, fingerprint: c, eventProcessors: u, attachments: d, propagationContext: h, transactionName: p, span: g } = e;
    whr(t, "extra", n), whr(t, "tags", i), whr(t, "user", r), whr(t, "contexts", s), t.sdkProcessingMetadata = BYn(t.sdkProcessingMetadata, a, 2), o && (t.level = o), p && (t.transactionName = p), g && (t.span = g), l.length && (t.breadcrumbs = [
        ...t.breadcrumbs,
        ...l
    ]), c.length && (t.fingerprint = [
        ...t.fingerprint,
        ...c
    ]), u.length && (t.eventProcessors = [
        ...t.eventProcessors,
        ...u
    ]), d.length && (t.attachments = [
        ...t.attachments,
        ...d
    ]), t.propagationContext = {
        ...t.propagationContext,
        ...h
    };
}
function whr(t, e, n) {
    t[e] = BYn(t[e], n, 1);
}
export async function Sko(t) {
    const e = ah();
    return e ? e.flush(t) : (rg && so.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
function ohy(t) {
    switch(typeof t){
        case "number":
            return Number.isInteger(t) ? {
                value: t,
                type: "integer"
            } : {
                value: t,
                type: "double"
            };
        case "boolean":
            return {
                value: t,
                type: "boolean"
            };
        case "string":
            return {
                value: t,
                type: "string"
            };
        default:
            {
                let e = "";
                try {
                    e = JSON.stringify(t) ?? "";
                } catch  {}
                return {
                    value: e,
                    type: "string"
                };
            }
    }
}
function cet(t, e, n, i = !0) {
    n && (i || !(e in t)) && (t[e] = n);
}
export function eGu(t, e) {
    const n = Pko(), i = nGu(t);
    i === void 0 ? n.set(t, [
        e
    ]) : (n.set(t, [
        ...i,
        e
    ]), i.length >= iGu && cXn(t, i));
}
function ahy(t, e, n) {
    const { release: i, environment: r } = e.getOptions(), s = {
        ...t.attributes
    }, { user: { id: o, email: a, username: l } } = chy(n);
    cet(s, "user.id", o, !1), cet(s, "user.email", a, !1), cet(s, "user.name", l, !1), cet(s, "sentry.release", i), cet(s, "sentry.environment", r);
    const { name: c, version: u } = e.getSdkMetadata()?.sdk ?? {};
    cet(s, "sentry.sdk.name", c), cet(s, "sentry.sdk.version", u);
    const d = e.getIntegrationByName("Replay"), h = d?.getReplayId(!0);
    return cet(s, "sentry.replay_id", h), h && d?.getRecordingMode() === "buffer" && cet(s, "sentry._internal.replay_is_buffering", !0), {
        ...t,
        attributes: s
    };
}
function lhy(t, e, n) {
    const i = {};
    for(const l in t.attributes)t.attributes[l] !== void 0 && (i[l] = ohy(t.attributes[l]));
    const [, r] = xko(e, n), s = wun(n), o = s ? s.spanContext().traceId : r?.trace_id, a = s ? s.spanContext().spanId : void 0;
    return {
        timestamp: M3(),
        trace_id: o ?? "",
        span_id: a,
        name: t.name,
        type: t.type,
        unit: t.unit,
        value: t.value,
        attributes: i
    };
}
export function tGu(t, e) {
    const n = e?.scope ?? Kb(), i = e?.captureSerializedMetric ?? eGu, r = n?.getClient() ?? ah();
    if (!r) {
        rg && so.warn("No client available to capture metric.");
        return;
    }
    const { _experiments: s, enableMetrics: o, beforeSendMetric: a } = r.getOptions();
    if (!(o ?? s?.enableMetrics ?? !0)) {
        rg && so.warn("metrics option not enabled, metric will not be captured.");
        return;
    }
    const c = ahy(t, r, n), u = a || s?.beforeSendMetric, d = u ? u(c) : c;
    if (!d) {
        rg && so.log("`beforeSendMetric` returned `null`, will not send metric.");
        return;
    }
    const h = lhy(d, r, n);
    rg && so.log("[Metric]", h), i(r, h), r.emit("afterCaptureMetric", c);
}
export function nGu(t) {
    return Pko().get(t);
}
function chy(t) {
    const e = dve().getScopeData();
    return aet(e, _M().getScopeData()), aet(e, t.getScopeData()), e;
}
export function Pko() {
    return gFt("clientToMetricBufferMap", ()=>new WeakMap);
}
export function hve(t) {
    if (!t) return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const n = e[6] || "", i = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: n,
        hash: i,
        relative: e[5] + n + i
    };
}
function Wun(t, e, n, i, r) {
    Dun({
        level: t,
        message: e,
        attributes: n,
        severityNumber: r
    }, i);
}
export function ngy(t, e, { scope: n } = {}) {
    Wun("trace", t, e, n);
}
export function igy(t, e, { scope: n } = {}) {
    Wun("debug", t, e, n);
}
export function rgy(t, e, { scope: n } = {}) {
    Wun("info", t, e, n);
}
export function sgy(t, e, { scope: n } = {}) {
    Wun("warn", t, e, n);
}
export function ogy(t, e, { scope: n } = {}) {
    Wun("error", t, e, n);
}
export function agy(t, e, { scope: n } = {}) {
    Wun("fatal", t, e, n);
}
export function xwo(t, e, n) {
    return "util" in o_ && typeof o_.util.format == "function" ? o_.util.format(...t) : cgy(t, e, n);
}
function cgy(t, e, n) {
    return t.map((i)=>dke(i) ? String(i) : JSON.stringify(Mte(i, e, n))).join(" ");
}
export function ugy(t) {
    return /%[sdifocO]/.test(t);
}
export function dgy(t, e) {
    const n = {}, i = new Array(e.length).fill("{}").join(" ");
    return n["sentry.message.template"] = `${t} ${i}`, e.forEach((r, s)=>{
        n[`sentry.message.parameter.${s}`] = r;
    }), n;
}
export var ipr = {};
Sa(ipr, {
    count: ()=>pgy,
    distribution: ()=>ggy,
    gauge: ()=>mgy
});
function Rwo(t, e, n, i) {
    tGu({
        type: t,
        name: e,
        value: n,
        unit: i?.unit,
        attributes: i?.attributes
    }, {
        scope: i?.scope
    });
}
function pgy(t, e = 1, n) {
    Rwo("counter", t, e, n);
}
function mgy(t, e, n) {
    Rwo("gauge", t, e, n);
}
function ggy(t, e, n) {
    Rwo("distribution", t, e, n);
}
export function Pwo(t = {}) {
    const e = new Set(t.levels ?? Rzu), n = t.client;
    return {
        log (i) {
            const { type: r, level: s, message: o, args: a, tag: l, date: c, ...u } = i, d = n || ah();
            if (!d) return;
            const h = vgy(r, s);
            if (!e.has(h)) return;
            const { normalizeDepth: p = 3, normalizeMaxBreadth: g = 1e3 } = d.getOptions(), f = [];
            o && f.push(o), a && a.length > 0 && f.push(xwo(a, p, g));
            const _ = f.join(" ");
            u["sentry.origin"] = "auto.log.consola", l && (u["consola.tag"] = l), r && (u["consola.type"] = r), s != null && typeof s == "number" && (u["consola.level"] = s), Dun({
                level: h,
                message: _,
                attributes: u
            });
        }
    };
}
function vgy(t, e) {
    if (t === "verbose") return "debug";
    if (t === "silent") return "trace";
    if (t) {
        const n = Pzu[t];
        if (n) return n;
    }
    if (typeof e == "number") {
        const n = Mzu[e];
        if (n) return n;
    }
    return "info";
}
function Owo(t, e) {
    if (SXn(t) <= e) return t;
    let n = 0, i = t.length, r = "";
    for(; n <= i;){
        const s = Math.floor((n + i) / 2), o = t.slice(0, s);
        SXn(o) <= e ? (r = o, n = s + 1) : i = s - 1;
    }
    return r;
}
function bgy(t) {
    return typeof t == "string" ? t : t.text;
}
function Hzu(t, e) {
    return typeof t == "string" ? e : {
        ...t,
        text: e
    };
}
function ygy(t) {
    return t !== null && typeof t == "object" && "content" in t && typeof t.content == "string";
}
function Sgy(t) {
    return t !== null && typeof t == "object" && "parts" in t && Array.isArray(t.parts) && t.parts.length > 0;
}
function kgy(t, e) {
    const n = {
        ...t,
        content: ""
    }, i = kXn(n), r = e - i;
    if (r <= 0) return [];
    const s = Owo(t.content, r);
    return [
        {
            ...t,
            content: s
        }
    ];
}
function wgy(t, e) {
    const { parts: n } = t, i = n.map((a)=>Hzu(a, "")), r = kXn({
        ...t,
        parts: i
    });
    let s = e - r;
    if (s <= 0) return [];
    const o = [];
    for (const a of n){
        const l = bgy(a), c = SXn(l);
        if (c <= s) o.push(a), s -= c;
        else if (o.length === 0) {
            const u = Owo(l, s);
            u && o.push(Hzu(a, u));
            break;
        } else break;
    }
    return o.length > 0 ? [
        {
            ...t,
            parts: o
        }
    ] : [];
}
function Cgy(t, e) {
    return !t || typeof t != "object" ? [] : ygy(t) ? kgy(t, e) : Sgy(t) ? wgy(t, e) : [];
}
function Tgy(t, e) {
    if (!Array.isArray(t) || t.length === 0 || kXn(t) <= e) return t;
    const i = t.map(kXn);
    let r = 0, s = t.length;
    for(let o = t.length - 1; o >= 0; o--){
        const a = i[o];
        if (a && r + a > e) break;
        a && (r += a), s = o;
    }
    if (s === t.length) {
        const o = t[t.length - 1];
        return Cgy(o, e);
    }
    return t.slice(s);
}
function Egy(t) {
    return Tgy(t, Fwo);
}
function Igy(t) {
    return Owo(t, Fwo);
}
function wXn(t) {
    return t.includes("messages") ? "messages" : t.includes("completions") ? "completions" : t.includes("models") ? "models" : t.includes("chat") ? "chat" : t.split(".").pop() || "unknown";
}
function lpr(t) {
    return `gen_ai.${wXn(t)}`;
}
function Wzu(t, e) {
    return t ? `${t}.${e}` : e;
}
function Bwo(t, e, n, i, r) {
    if (e !== void 0 && t.setAttributes({
        [uet]: e
    }), n !== void 0 && t.setAttributes({
        [det]: n
    }), e !== void 0 || n !== void 0 || i !== void 0 || r !== void 0) {
        const s = (e ?? 0) + (n ?? 0) + (i ?? 0) + (r ?? 0);
        t.setAttributes({
            [jFt]: s
        });
    }
}
function Mvt(t) {
    if (typeof t == "string") return Igy(t);
    if (Array.isArray(t)) {
        const e = Egy(t);
        return JSON.stringify(e);
    }
    return JSON.stringify(t);
}
function Agy(t, e) {
    const n = t.parent_span_id;
    if (!n) return;
    const i = t.data[uet], r = t.data[det];
    if (typeof i == "number" || typeof r == "number") {
        const s = e.get(n) || {
            inputTokens: 0,
            outputTokens: 0
        };
        typeof i == "number" && (s.inputTokens += i), typeof r == "number" && (s.outputTokens += r), e.set(n, s);
    }
}
function qzu(t, e) {
    const n = e.get(t.span_id);
    !n || !t.data || (n.inputTokens > 0 && (t.data[uet] = n.inputTokens), n.outputTokens > 0 && (t.data[det] = n.outputTokens), (n.inputTokens > 0 || n.outputTokens > 0) && (t.data["gen_ai.usage.total_tokens"] = n.inputTokens + n.outputTokens));
}
export function Rgy(t) {
    return cpr.get(t);
}
export function Pgy(t) {
    cpr.delete(t);
}
function aVu(t, e) {
    t.setAttribute(KE, e);
}
function Dgy(t) {
    const { data: e, description: n } = Yb(t);
    if (!n) return;
    if (e[$wo] && e[Hwo] && n === "ai.toolCall") {
        Ogy(t, e);
        return;
    }
    const i = e[Qje], r = e[Jzu];
    typeof i != "string" || typeof r != "string" || !i || !r || Fgy(t, n, e);
}
function Ngy(t) {
    if (t.type === "transaction" && t.spans) {
        const e = new Map;
        for (const i of t.spans)Lgy(i), Agy(i, e);
        for (const i of t.spans)i.op === "gen_ai.invoke_agent" && qzu(i, e);
        const n = t.contexts?.trace;
        n && n.op === "gen_ai.invoke_agent" && qzu(n, e);
    }
    return t;
}
function Lgy(t) {
    const { data: e, origin: n } = t;
    if (n === "auto.vercelai.otel") {
        pve(e, iVu, dpr), pve(e, rVu, upr), pve(e, tVu, Gun), typeof e[dpr] == "number" && typeof e[upr] == "number" && (e["gen_ai.usage.total_tokens"] = e[dpr] + e[upr]), pve(e, Zzu, "gen_ai.request.messages"), pve(e, Yzu, "gen_ai.response.text"), pve(e, Xzu, "gen_ai.response.tool_calls"), pve(e, Kzu, "gen_ai.response.object"), pve(e, Qzu, "gen_ai.request.available_tools"), pve(e, sVu, "gen_ai.tool.input"), pve(e, oVu, "gen_ai.tool.output"), pve(e, Vzu, "gen_ai.request.schema"), Ugy(e);
        for (const i of Object.keys(e))i.startsWith("ai.") && pve(e, i, `vercel.${i}`);
    }
}
function pve(t, e, n) {
    t[e] != null && (t[n] = t[e], delete t[e]);
}
function Ogy(t, e) {
    aVu(t, "auto.vercelai.otel"), t.setAttribute(bx, "gen_ai.execute_tool"), pve(e, $wo, "gen_ai.tool.name"), pve(e, Hwo, "gen_ai.tool.call.id");
    const n = e["gen_ai.tool.call.id"];
    typeof n == "string" && cpr.set(n, t), e["gen_ai.tool.type"] || t.setAttribute("gen_ai.tool.type", "function");
    const i = e["gen_ai.tool.name"];
    i && t.updateName(`execute_tool ${i}`);
}
function Fgy(t, e, n) {
    aVu(t, "auto.vercelai.otel");
    const i = e.replace("ai.", "");
    t.setAttribute("ai.pipeline.name", i), t.updateName(i);
    const r = n[nVu];
    if (r && typeof r == "string" && (t.updateName(`${i} ${r}`), t.setAttribute("gen_ai.function_id", r)), n[Uwo]) {
        const s = Mvt(n[Uwo]);
        t.setAttribute("gen_ai.prompt", s);
    }
    if (n[Qje] && !n[jwo] && t.setAttribute(jwo, n[Qje]), t.setAttribute("ai.streaming", e.includes("stream")), e === "ai.generateText") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.generateText.doGenerate") {
        t.setAttribute(bx, "gen_ai.generate_text"), t.updateName(`generate_text ${n[Qje]}`);
        return;
    }
    if (e === "ai.streamText") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.streamText.doStream") {
        t.setAttribute(bx, "gen_ai.stream_text"), t.updateName(`stream_text ${n[Qje]}`);
        return;
    }
    if (e === "ai.generateObject") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.generateObject.doGenerate") {
        t.setAttribute(bx, "gen_ai.generate_object"), t.updateName(`generate_object ${n[Qje]}`);
        return;
    }
    if (e === "ai.streamObject") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.streamObject.doStream") {
        t.setAttribute(bx, "gen_ai.stream_object"), t.updateName(`stream_object ${n[Qje]}`);
        return;
    }
    if (e === "ai.embed") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.embed.doEmbed") {
        t.setAttribute(bx, "gen_ai.embed"), t.updateName(`embed ${n[Qje]}`);
        return;
    }
    if (e === "ai.embedMany") {
        t.setAttribute(bx, "gen_ai.invoke_agent");
        return;
    }
    if (e === "ai.embedMany.doEmbed") {
        t.setAttribute(bx, "gen_ai.embed_many"), t.updateName(`embed_many ${n[Qje]}`);
        return;
    }
    if (e.startsWith("ai.stream")) {
        t.setAttribute(bx, "ai.run");
        return;
    }
}
export function Bgy(t) {
    t.on("spanStart", Dgy), t.addEventProcessor(Object.assign(Ngy, {
        id: "VercelAiEventProcessor"
    }));
}
function Ugy(t) {
    const e = t[eVu];
    if (e) try {
        const n = JSON.parse(e);
        if (n.openai && (EOe(t, Gun, n.openai.cachedPromptTokens), EOe(t, "gen_ai.usage.output_tokens.reasoning", n.openai.reasoningTokens), EOe(t, "gen_ai.usage.output_tokens.prediction_accepted", n.openai.acceptedPredictionTokens), EOe(t, "gen_ai.usage.output_tokens.prediction_rejected", n.openai.rejectedPredictionTokens), EOe(t, "gen_ai.conversation.id", n.openai.responseId)), n.anthropic) {
            const i = n.anthropic.usage?.cache_read_input_tokens ?? n.anthropic.cacheReadInputTokens;
            EOe(t, Gun, i);
            const r = n.anthropic.usage?.cache_creation_input_tokens ?? n.anthropic.cacheCreationInputTokens;
            EOe(t, Dwo, r);
        }
        n.bedrock?.usage && (EOe(t, Gun, n.bedrock.usage.cacheReadInputTokens), EOe(t, Dwo, n.bedrock.usage.cacheWriteInputTokens)), n.deepseek && (EOe(t, Gun, n.deepseek.promptCacheHitTokens), EOe(t, "gen_ai.usage.input_tokens.cache_miss", n.deepseek.promptCacheMissTokens));
    } catch  {}
}
function EOe(t, e, n) {
    n != null && (t[e] = n);
}
function Gwo(t) {
    return t.includes("chat.completions") ? Nwo.CHAT : t.includes("responses") ? Nwo.RESPONSES : t.split(".").pop() || "unknown";
}
function dVu(t) {
    return `gen_ai.${Gwo(t)}`;
}
function $gy(t) {
    return lVu.includes(t);
}
function Hgy(t, e) {
    return t ? `${t}.${e}` : e;
}
function Wgy(t) {
    return t !== null && typeof t == "object" && "object" in t && t.object === "chat.completion";
}
function Ggy(t) {
    return t !== null && typeof t == "object" && "object" in t && t.object === "response";
}
function qgy(t) {
    return t !== null && typeof t == "object" && "type" in t && typeof t.type == "string" && t.type.startsWith("response.");
}
function zgy(t) {
    return t !== null && typeof t == "object" && "object" in t && t.object === "chat.completion.chunk";
}
function qwo(t, e, n, i) {
    e !== void 0 && t.setAttributes({
        [$zu]: e,
        [uet]: e
    }), n !== void 0 && t.setAttributes({
        [jzu]: n,
        [det]: n
    }), i !== void 0 && t.setAttributes({
        [jFt]: i
    });
}
function zwo(t, e, n, i) {
    t.setAttributes({
        [Fzu]: e,
        [UFt]: e
    }), t.setAttributes({
        [Bzu]: n,
        [BFt]: n
    }), t.setAttributes({
        [Uzu]: new Date(i * 1e3).toISOString()
    });
}
function Vgy(t, e) {
    for (const n of t){
        const i = n.index;
        if (!(i === void 0 || !n.function)) if (!(i in e.chatCompletionToolCalls)) e.chatCompletionToolCalls[i] = {
            ...n,
            function: {
                name: n.function.name,
                arguments: n.function.arguments || ""
            }
        };
        else {
            const r = e.chatCompletionToolCalls[i];
            n.function.arguments && r?.function && (r.function.arguments += n.function.arguments);
        }
    }
}
function Kgy(t, e, n) {
    e.responseId = t.id ?? e.responseId, e.responseModel = t.model ?? e.responseModel, e.responseTimestamp = t.created ?? e.responseTimestamp, t.usage && (e.promptTokens = t.usage.prompt_tokens, e.completionTokens = t.usage.completion_tokens, e.totalTokens = t.usage.total_tokens);
    for (const i of t.choices ?? [])n && (i.delta?.content && e.responseTexts.push(i.delta.content), i.delta?.tool_calls && Vgy(i.delta.tool_calls, e)), i.finish_reason && e.finishReasons.push(i.finish_reason);
}
function Ygy(t, e, n, i) {
    if (!(t && typeof t == "object")) {
        e.eventTypes.push("unknown:non-object");
        return;
    }
    if (t instanceof Error) {
        i.setStatus({
            code: TI,
            message: "internal_error"
        }), Sv(t, {
            mechanism: {
                handled: !1,
                type: "auto.ai.openai.stream-response"
            }
        });
        return;
    }
    if (!("type" in t)) return;
    const r = t;
    if (!uVu.includes(r.type)) {
        e.eventTypes.push(r.type);
        return;
    }
    if (n && (r.type === "response.output_item.done" && "item" in r && e.responsesApiToolCalls.push(r.item), r.type === "response.output_text.delta" && "delta" in r && r.delta)) {
        e.responseTexts.push(r.delta);
        return;
    }
    if ("response" in r) {
        const { response: s } = r;
        e.responseId = s.id ?? e.responseId, e.responseModel = s.model ?? e.responseModel, e.responseTimestamp = s.created_at ?? e.responseTimestamp, s.usage && (e.promptTokens = s.usage.input_tokens, e.completionTokens = s.usage.output_tokens, e.totalTokens = s.usage.total_tokens), s.status && e.finishReasons.push(s.status), n && s.output_text && e.responseTexts.push(s.output_text);
    }
}
async function* Xgy(t, e, n) {
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
        for await (const r of t)zgy(r) ? Kgy(r, i, n) : qgy(r) && Ygy(r, i, n, e), yield r;
    } finally{
        zwo(e, i.responseId, i.responseModel, i.responseTimestamp), qwo(e, i.promptTokens, i.completionTokens, i.totalTokens), e.setAttributes({
            [yXn]: !0
        }), i.finishReasons.length && e.setAttributes({
            [Pvt]: JSON.stringify(i.finishReasons)
        }), n && i.responseTexts.length && e.setAttributes({
            [Gxe]: i.responseTexts.join("")
        });
        const s = [
            ...Object.values(i.chatCompletionToolCalls),
            ...i.responsesApiToolCalls
        ];
        s.length > 0 && e.setAttributes({
            [Zje]: JSON.stringify(s)
        }), e.end();
    }
}
function Qgy(t, e) {
    const n = {
        [fXn]: "openai",
        [$Ft]: Gwo(e),
        [KE]: "auto.ai.openai"
    };
    if (t.length > 0 && typeof t[0] == "object" && t[0] !== null) {
        const i = t[0], r = Array.isArray(i.tools) ? i.tools : [], o = i.web_search_options && typeof i.web_search_options == "object" ? [
            {
                type: "web_search_options",
                ...i.web_search_options
            }
        ] : [], a = [
            ...r,
            ...o
        ];
        a.length > 0 && (n[apr] = JSON.stringify(a));
    }
    if (t.length > 0 && typeof t[0] == "object" && t[0] !== null) {
        const i = t[0];
        n[Ede] = i.model ?? "unknown", "temperature" in i && (n[vXn] = i.temperature), "top_p" in i && (n[bXn] = i.top_p), "frequency_penalty" in i && (n[_Xn] = i.frequency_penalty), "presence_penalty" in i && (n[opr] = i.presence_penalty), "stream" in i && (n[rpr] = i.stream);
    } else n[Ede] = "unknown";
    return n;
}
function Jgy(t, e, n) {
    if (zwo(t, e.id, e.model, e.created), e.usage && qwo(t, e.usage.prompt_tokens, e.usage.completion_tokens, e.usage.total_tokens), Array.isArray(e.choices)) {
        const i = e.choices.map((r)=>r.finish_reason).filter((r)=>r !== null);
        if (i.length > 0 && t.setAttributes({
            [Pvt]: JSON.stringify(i)
        }), n) {
            const r = e.choices.map((s)=>s.message?.tool_calls).filter((s)=>Array.isArray(s) && s.length > 0).flat();
            r.length > 0 && t.setAttributes({
                [Zje]: JSON.stringify(r)
            });
        }
    }
}
function efy(t, e, n) {
    if (zwo(t, e.id, e.model, e.created_at), e.status && t.setAttributes({
        [Pvt]: JSON.stringify([
            e.status
        ])
    }), e.usage && qwo(t, e.usage.input_tokens, e.usage.output_tokens, e.usage.total_tokens), n) {
        const i = e;
        if (Array.isArray(i.output) && i.output.length > 0) {
            const r = i.output.filter((s)=>typeof s == "object" && s !== null && s.type === "function_call");
            r.length > 0 && t.setAttributes({
                [Zje]: JSON.stringify(r)
            });
        }
    }
}
function tfy(t, e, n) {
    if (!e || typeof e != "object") return;
    const i = e;
    if (Wgy(i)) {
        if (Jgy(t, i, n), n && i.choices?.length) {
            const r = i.choices.map((s)=>s.message?.content || "");
            t.setAttributes({
                [Gxe]: JSON.stringify(r)
            });
        }
    } else Ggy(i) && (efy(t, i, n), n && i.output_text && t.setAttributes({
        [Gxe]: i.output_text
    }));
}
function pVu(t, e) {
    if ("messages" in e) {
        const n = Mvt(e.messages);
        t.setAttributes({
            [Xje]: n
        });
    }
    if ("input" in e) {
        const n = Mvt(e.input);
        t.setAttributes({
            [Xje]: n
        });
    }
}
function nfy() {
    const e = Kb().getClient(), n = e?.getIntegrationByName(Wwo), i = n ? !!e?.getOptions().sendDefaultPii : !1;
    return {
        recordInputs: n?.options?.recordInputs ?? i,
        recordOutputs: n?.options?.recordOutputs ?? i
    };
}
function ify(t, e, n, i) {
    return async function(...s) {
        const o = i || nfy(), a = Qgy(s, e), l = a[Ede] || "unknown", c = Gwo(e), u = s[0];
        return u && typeof u == "object" && u.stream === !0 ? wOe({
            name: `${c} ${l} stream-response`,
            op: dVu(e),
            attributes: a
        }, async (h)=>{
            try {
                o.recordInputs && s[0] && typeof s[0] == "object" && pVu(h, s[0]);
                const p = await t.apply(n, s);
                return Xgy(p, h, o.recordOutputs ?? !1);
            } catch (p) {
                throw h.setStatus({
                    code: TI,
                    message: "internal_error"
                }), Sv(p, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.openai.stream",
                        data: {
                            function: e
                        }
                    }
                }), h.end(), p;
            }
        }) : set({
            name: `${c} ${l}`,
            op: dVu(e),
            attributes: a
        }, async (h)=>{
            try {
                o.recordInputs && s[0] && typeof s[0] == "object" && pVu(h, s[0]);
                const p = await t.apply(n, s);
                return tfy(h, p, o.recordOutputs), p;
            } catch (p) {
                throw Sv(p, {
                    mechanism: {
                        handled: !1,
                        type: "auto.ai.openai",
                        data: {
                            function: e
                        }
                    }
                }), p;
            }
        });
    };
}
function mVu(t, e = "", n) {
    return new Proxy(t, {
        get (i, r) {
            const s = i[r], o = Hgy(e, String(r));
            return typeof s == "function" && $gy(o) ? ify(s, o, i, n) : typeof s == "function" ? s.bind(i) : s && typeof s == "object" ? mVu(s, o, n) : s;
        }
    });
}
export function gVu(t, e) {
    return mVu(t, "", e);
}
function sfy(t, e) {
    return "type" in t && typeof t.type == "string" && t.type === "error" ? (e.setStatus({
        code: TI,
        message: t.error?.type ?? "internal_error"
    }), Sv(t.error, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic.anthropic_error"
        }
    }), !0) : !1;
}
function ofy(t, e) {
    if (t.type === "message_delta" && t.usage && "output_tokens" in t.usage && typeof t.usage.output_tokens == "number" && (e.completionTokens = t.usage.output_tokens), t.message) {
        const n = t.message;
        n.id && (e.responseId = n.id), n.model && (e.responseModel = n.model), n.stop_reason && e.finishReasons.push(n.stop_reason), n.usage && (typeof n.usage.input_tokens == "number" && (e.promptTokens = n.usage.input_tokens), typeof n.usage.cache_creation_input_tokens == "number" && (e.cacheCreationInputTokens = n.usage.cache_creation_input_tokens), typeof n.usage.cache_read_input_tokens == "number" && (e.cacheReadInputTokens = n.usage.cache_read_input_tokens));
    }
}
function afy(t, e) {
    t.type !== "content_block_start" || typeof t.index != "number" || !t.content_block || (t.content_block.type === "tool_use" || t.content_block.type === "server_tool_use") && (e.activeToolBlocks[t.index] = {
        id: t.content_block.id,
        name: t.content_block.name,
        inputJsonParts: []
    });
}
function lfy(t, e, n) {
    if (!(t.type !== "content_block_delta" || !t.delta)) {
        if (typeof t.index == "number" && "partial_json" in t.delta && typeof t.delta.partial_json == "string") {
            const i = e.activeToolBlocks[t.index];
            i && i.inputJsonParts.push(t.delta.partial_json);
        }
        n && typeof t.delta.text == "string" && e.responseTexts.push(t.delta.text);
    }
}
function cfy(t, e) {
    if (t.type !== "content_block_stop" || typeof t.index != "number") return;
    const n = e.activeToolBlocks[t.index];
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
    e.toolCalls.push({
        type: "tool_use",
        id: n.id,
        name: n.name,
        input: r
    }), delete e.activeToolBlocks[t.index];
}
function fVu(t, e, n, i) {
    !(t && typeof t == "object") || sfy(t, i) || (ofy(t, e), afy(t, e), lfy(t, e, n), cfy(t, e));
}
function ufy(t, e, n) {
    e.isRecording() && (t.responseId && e.setAttributes({
        [UFt]: t.responseId
    }), t.responseModel && e.setAttributes({
        [BFt]: t.responseModel
    }), Bwo(e, t.promptTokens, t.completionTokens, t.cacheCreationInputTokens, t.cacheReadInputTokens), e.setAttributes({
        [yXn]: !0
    }), t.finishReasons.length > 0 && e.setAttributes({
        [Pvt]: JSON.stringify(t.finishReasons)
    }), n && t.responseTexts.length > 0 && e.setAttributes({
        [Gxe]: t.responseTexts.join("")
    }), n && t.toolCalls.length > 0 && e.setAttributes({
        [Zje]: JSON.stringify(t.toolCalls)
    }), e.end());
}
async function* dfy(t, e, n) {
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
        for await (const r of t)fVu(r, i, n, e), yield r;
    } finally{
        i.responseId && e.setAttributes({
            [UFt]: i.responseId
        }), i.responseModel && e.setAttributes({
            [BFt]: i.responseModel
        }), Bwo(e, i.promptTokens, i.completionTokens, i.cacheCreationInputTokens, i.cacheReadInputTokens), e.setAttributes({
            [yXn]: !0
        }), i.finishReasons.length > 0 && e.setAttributes({
            [Pvt]: JSON.stringify(i.finishReasons)
        }), n && i.responseTexts.length > 0 && e.setAttributes({
            [Gxe]: i.responseTexts.join("")
        }), n && i.toolCalls.length > 0 && e.setAttributes({
            [Zje]: JSON.stringify(i.toolCalls)
        }), e.end();
    }
}
function hfy(t, e, n) {
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
    return t.on("streamEvent", (r)=>{
        fVu(r, i, n, e);
    }), t.on("message", ()=>{
        ufy(i, e, n);
    }), t.on("error", (r)=>{
        Sv(r, {
            mechanism: {
                handled: !1,
                type: "auto.ai.anthropic.stream_error"
            }
        }), e.isRecording() && (e.setStatus({
            code: TI,
            message: "stream_error"
        }), e.end());
    }), t;
}
function mfy(t) {
    return _Vu.includes(t);
}
function gfy(t, e) {
    e.error && (t.setStatus({
        code: TI,
        message: e.error.type || "internal_error"
    }), Sv(e.error, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic.anthropic_error"
        }
    }));
}
function vfy(t, e) {
    const n = {
        [fXn]: "anthropic",
        [$Ft]: wXn(e),
        [KE]: "auto.ai.anthropic"
    };
    if (t.length > 0 && typeof t[0] == "object" && t[0] !== null) {
        const i = t[0];
        i.tools && Array.isArray(i.tools) && (n[apr] = JSON.stringify(i.tools)), n[Ede] = i.model ?? "unknown", "temperature" in i && (n[vXn] = i.temperature), "top_p" in i && (n[bXn] = i.top_p), "stream" in i && (n[rpr] = i.stream), "top_k" in i && (n[Mwo] = i.top_k), "frequency_penalty" in i && (n[_Xn] = i.frequency_penalty), "max_tokens" in i && (n[spr] = i.max_tokens);
    } else e === "models.retrieve" || e === "models.get" ? n[Ede] = t[0] : n[Ede] = "unknown";
    return n;
}
function Vwo(t, e) {
    if ("messages" in e) {
        const n = Mvt(e.messages);
        t.setAttributes({
            [Xje]: n
        });
    }
    if ("input" in e) {
        const n = Mvt(e.input);
        t.setAttributes({
            [Xje]: n
        });
    }
    "prompt" in e && t.setAttributes({
        [Dzu]: JSON.stringify(e.prompt)
    });
}
function _fy(t, e) {
    if ("content" in e && Array.isArray(e.content)) {
        t.setAttributes({
            [Gxe]: e.content.map((i)=>i.text).filter((i)=>!!i).join("")
        });
        const n = [];
        for (const i of e.content)(i.type === "tool_use" || i.type === "server_tool_use") && n.push(i);
        n.length > 0 && t.setAttributes({
            [Zje]: JSON.stringify(n)
        });
    }
    "completion" in e && t.setAttributes({
        [Gxe]: e.completion
    }), "input_tokens" in e && t.setAttributes({
        [Gxe]: JSON.stringify(e.input_tokens)
    });
}
function bfy(t, e) {
    "id" in e && "model" in e && (t.setAttributes({
        [UFt]: e.id,
        [BFt]: e.model
    }), "created" in e && typeof e.created == "number" && t.setAttributes({
        [Lwo]: new Date(e.created * 1e3).toISOString()
    }), "created_at" in e && typeof e.created_at == "number" && t.setAttributes({
        [Lwo]: new Date(e.created_at * 1e3).toISOString()
    }), "usage" in e && e.usage && Bwo(t, e.usage.input_tokens, e.usage.output_tokens, e.usage.cache_creation_input_tokens, e.usage.cache_read_input_tokens));
}
function yfy(t, e, n) {
    if (!(!e || typeof e != "object")) {
        if ("type" in e && e.type === "error") {
            gfy(t, e);
            return;
        }
        n && _fy(t, e), bfy(t, e);
    }
}
function yVu(t, e, n) {
    throw Sv(t, {
        mechanism: {
            handled: !1,
            type: "auto.ai.anthropic",
            data: {
                function: n
            }
        }
    }), e.isRecording() && (e.setStatus({
        code: TI,
        message: "internal_error"
    }), e.end()), t;
}
function Sfy(t, e, n, i, r, s, o, a, l, c, u) {
    const d = r[Ede] ?? "unknown", h = {
        name: `${s} ${d} stream-response`,
        op: lpr(o),
        attributes: r
    };
    return c && !u ? wOe(h, async (p)=>{
        try {
            l.recordInputs && a && Vwo(p, a);
            const g = await t.apply(n, i);
            return dfy(g, p, l.recordOutputs ?? !1);
        } catch (g) {
            return yVu(g, p, o);
        }
    }) : wOe(h, (p)=>{
        try {
            l.recordInputs && a && Vwo(p, a);
            const g = e.apply(n, i);
            return hfy(g, p, l.recordOutputs ?? !1);
        } catch (g) {
            return yVu(g, p, o);
        }
    });
}
function kfy(t, e, n, i) {
    return new Proxy(t, {
        apply (r, s, o) {
            const a = vfy(o, e), l = a[Ede] ?? "unknown", c = wXn(e), u = typeof o[0] == "object" ? o[0] : void 0, d = !!u?.stream, h = e === "messages.stream";
            return d || h ? Sfy(t, r, n, o, a, c, e, u, i, d, h) : set({
                name: `${c} ${l}`,
                op: lpr(e),
                attributes: a
            }, (p)=>(i.recordInputs && u && Vwo(p, u), JYn(()=>r.apply(n, o), (g)=>{
                    Sv(g, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.anthropic",
                            data: {
                                function: e
                            }
                        }
                    });
                }, ()=>{}, (g)=>yfy(p, g, i.recordOutputs))));
        }
    });
}
function SVu(t, e = "", n) {
    return new Proxy(t, {
        get (i, r) {
            const s = i[r], o = Wzu(e, String(r));
            return typeof s == "function" && mfy(o) ? kfy(s, o, i, n) : typeof s == "function" ? s.bind(i) : s && typeof s == "object" ? SVu(s, o, n) : s;
        }
    });
}
export function kVu(t, e) {
    const n = !!ah()?.getOptions().sendDefaultPii, i = {
        recordInputs: n,
        recordOutputs: n,
        ...e
    };
    return SVu(t, "", i);
}
function Cfy(t, e) {
    const n = t?.promptFeedback;
    if (n?.blockReason) {
        const i = n.blockReasonMessage ?? n.blockReason;
        return e.setStatus({
            code: TI,
            message: `Content blocked: ${i}`
        }), Sv(`Content blocked: ${i}`, {
            mechanism: {
                handled: !1,
                type: "auto.ai.google_genai"
            }
        }), !0;
    }
    return !1;
}
function Tfy(t, e) {
    typeof t.responseId == "string" && (e.responseId = t.responseId), typeof t.modelVersion == "string" && (e.responseModel = t.modelVersion);
    const n = t.usageMetadata;
    n && (typeof n.promptTokenCount == "number" && (e.promptTokens = n.promptTokenCount), typeof n.candidatesTokenCount == "number" && (e.completionTokens = n.candidatesTokenCount), typeof n.totalTokenCount == "number" && (e.totalTokens = n.totalTokenCount));
}
function Efy(t, e, n) {
    Array.isArray(t.functionCalls) && e.toolCalls.push(...t.functionCalls);
    for (const i of t.candidates ?? []){
        i?.finishReason && !e.finishReasons.includes(i.finishReason) && e.finishReasons.push(i.finishReason);
        for (const r of i?.content?.parts ?? [])n && r.text && e.responseTexts.push(r.text), r.functionCall && e.toolCalls.push({
            type: "function",
            id: r.functionCall.id,
            name: r.functionCall.name,
            arguments: r.functionCall.args
        });
    }
}
function Ify(t, e, n, i) {
    !t || Cfy(t, i) || (Tfy(t, e), Efy(t, e, n));
}
async function* xfy(t, e, n) {
    const i = {
        responseTexts: [],
        finishReasons: [],
        toolCalls: []
    };
    try {
        for await (const r of t)Ify(r, i, n, e), yield r;
    } finally{
        const r = {
            [yXn]: !0
        };
        i.responseId && (r[UFt] = i.responseId), i.responseModel && (r[BFt] = i.responseModel), i.promptTokens !== void 0 && (r[uet] = i.promptTokens), i.completionTokens !== void 0 && (r[det] = i.completionTokens), i.totalTokens !== void 0 && (r[jFt] = i.totalTokens), i.finishReasons.length && (r[Pvt] = JSON.stringify(i.finishReasons)), n && i.responseTexts.length && (r[Gxe] = i.responseTexts.join("")), n && i.toolCalls.length && (r[Zje] = JSON.stringify(i.toolCalls)), e.setAttributes(r), e.end();
    }
}
function Rfy(t) {
    if (Kwo.includes(t)) return !0;
    const e = t.split(".").pop();
    return Kwo.includes(e);
}
function Pfy(t) {
    return t.includes("Stream") || t.endsWith("generateContentStream") || t.endsWith("sendMessageStream");
}
function EVu(t, e) {
    if ("model" in t && typeof t.model == "string") return t.model;
    if (e && typeof e == "object") {
        const n = e;
        if ("model" in n && typeof n.model == "string") return n.model;
        if ("modelVersion" in n && typeof n.modelVersion == "string") return n.modelVersion;
    }
    return "unknown";
}
function Dfy(t) {
    const e = {};
    return "temperature" in t && typeof t.temperature == "number" && (e[vXn] = t.temperature), "topP" in t && typeof t.topP == "number" && (e[bXn] = t.topP), "topK" in t && typeof t.topK == "number" && (e[Mwo] = t.topK), "maxOutputTokens" in t && typeof t.maxOutputTokens == "number" && (e[spr] = t.maxOutputTokens), "frequencyPenalty" in t && typeof t.frequencyPenalty == "number" && (e[_Xn] = t.frequencyPenalty), "presencePenalty" in t && typeof t.presencePenalty == "number" && (e[opr] = t.presencePenalty), e;
}
function Nfy(t, e, n) {
    const i = {
        [fXn]: CVu,
        [$Ft]: wXn(t),
        [KE]: "auto.ai.google_genai"
    };
    if (e) {
        if (i[Ede] = EVu(e, n), "config" in e && typeof e.config == "object" && e.config) {
            const r = e.config;
            if (Object.assign(i, Dfy(r)), "tools" in r && Array.isArray(r.tools)) {
                const s = r.tools.map((o)=>o.functionDeclarations);
                i[apr] = JSON.stringify(s);
            }
        }
    } else i[Ede] = EVu({}, n);
    return i;
}
function IVu(t, e) {
    if ("contents" in e) {
        const n = e.contents, i = Mvt(n);
        t.setAttributes({
            [Xje]: i
        });
    }
    if ("message" in e) {
        const n = e.message, i = Mvt(n);
        t.setAttributes({
            [Xje]: i
        });
    }
    if ("history" in e) {
        const n = e.history, i = Mvt(n);
        t.setAttributes({
            [Xje]: i
        });
    }
}
function Lfy(t, e, n) {
    if (!(!e || typeof e != "object")) {
        if (e.usageMetadata && typeof e.usageMetadata == "object") {
            const i = e.usageMetadata;
            typeof i.promptTokenCount == "number" && t.setAttributes({
                [uet]: i.promptTokenCount
            }), typeof i.candidatesTokenCount == "number" && t.setAttributes({
                [det]: i.candidatesTokenCount
            }), typeof i.totalTokenCount == "number" && t.setAttributes({
                [jFt]: i.totalTokenCount
            });
        }
        if (n && Array.isArray(e.candidates) && e.candidates.length > 0) {
            const i = e.candidates.map((r)=>r.content?.parts && Array.isArray(r.content.parts) ? r.content.parts.map((s)=>typeof s.text == "string" ? s.text : "").filter((s)=>s.length > 0).join("") : "").filter((r)=>r.length > 0);
            i.length > 0 && t.setAttributes({
                [Gxe]: i.join("")
            });
        }
        if (n && e.functionCalls) {
            const i = e.functionCalls;
            Array.isArray(i) && i.length > 0 && t.setAttributes({
                [Zje]: JSON.stringify(i)
            });
        }
    }
}
function xVu(t, e, n, i) {
    const r = e === Ywo;
    return new Proxy(t, {
        apply (s, o, a) {
            const l = a[0], c = Nfy(e, l, n), u = c[Ede] ?? "unknown", d = wXn(e);
            return Pfy(e) ? wOe({
                name: `${d} ${u} stream-response`,
                op: lpr(e),
                attributes: c
            }, async (h)=>{
                try {
                    i.recordInputs && l && IVu(h, l);
                    const p = await s.apply(n, a);
                    return xfy(p, h, !!i.recordOutputs);
                } catch (p) {
                    throw h.setStatus({
                        code: TI,
                        message: "internal_error"
                    }), Sv(p, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.google_genai",
                            data: {
                                function: e
                            }
                        }
                    }), h.end(), p;
                }
            }) : set({
                name: r ? `${d} ${u} create` : `${d} ${u}`,
                op: lpr(e),
                attributes: c
            }, (h)=>(i.recordInputs && l && IVu(h, l), JYn(()=>s.apply(n, a), (p)=>{
                    Sv(p, {
                        mechanism: {
                            handled: !1,
                            type: "auto.ai.google_genai",
                            data: {
                                function: e
                            }
                        }
                    });
                }, ()=>{}, (p)=>{
                    r || Lfy(h, p, i.recordOutputs);
                })));
        }
    });
}
function Zwo(t, e = "", n) {
    return new Proxy(t, {
        get: (i, r, s)=>{
            const o = Reflect.get(i, r, s), a = Wzu(e, String(r));
            if (typeof o == "function" && Rfy(a)) {
                if (a === Ywo) {
                    const l = xVu(o, a, i, n);
                    return function(...u) {
                        const d = l(...u);
                        return d && typeof d == "object" ? Zwo(d, TVu, n) : d;
                    };
                }
                return xVu(o, a, i, n);
            }
            return typeof o == "function" ? o.bind(i) : o && typeof o == "object" ? Zwo(o, a, n) : o;
        }
    });
}
export function AVu(t, e) {
    const n = !!ah()?.getOptions().sendDefaultPii, i = {
        recordInputs: n,
        recordOutputs: n,
        ...e
    };
    return Zwo(t, "", i);
}
function mve(t) {
    if (typeof t == "string") return t;
    try {
        return JSON.stringify(t);
    } catch  {
        return String(t);
    }
}
function TXn(t) {
    const e = t.toLowerCase();
    return PVu[e] ?? e;
}
function MVu(t) {
    return t.includes("System") ? "system" : t.includes("Human") ? "user" : t.includes("AI") || t.includes("Assistant") ? "assistant" : t.includes("Function") ? "function" : t.includes("Tool") ? "tool" : "user";
}
function DVu(t) {
    if (!(!t || Array.isArray(t))) return t.invocation_params;
}
function Ffy(t) {
    return t.map((e)=>{
        const n = e._getType;
        if (typeof n == "function") {
            const r = n.call(e);
            return {
                role: TXn(r),
                content: mve(e.content)
            };
        }
        const i = e.constructor?.name;
        if (i) return {
            role: TXn(MVu(i)),
            content: mve(e.content)
        };
        if (e.type) {
            const r = String(e.type).toLowerCase();
            return {
                role: TXn(r),
                content: mve(e.content)
            };
        }
        if (e.role) return {
            role: TXn(String(e.role)),
            content: mve(e.content)
        };
        if (e.lc === 1 && e.kwargs) {
            const r = e.id, s = Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "", o = typeof s == "string" ? MVu(s) : "user";
            return {
                role: TXn(o),
                content: mve(e.kwargs?.content)
            };
        }
        return {
            role: "user",
            content: mve(e.content)
        };
    });
}
function Bfy(t, e, n) {
    const i = {}, r = "kwargs" in t ? t.kwargs : void 0, s = e?.temperature ?? n?.ls_temperature ?? r?.temperature;
    gve(i, vXn, s);
    const o = e?.max_tokens ?? n?.ls_max_tokens ?? r?.max_tokens;
    gve(i, spr, o);
    const a = e?.top_p ?? r?.top_p;
    gve(i, bXn, a);
    const l = e?.frequency_penalty;
    gve(i, _Xn, l);
    const c = e?.presence_penalty;
    return gve(i, opr, c), e && "stream" in e && Jje(i, rpr, !!e.stream), i;
}
function NVu(t, e, n, i, r, s) {
    return {
        [fXn]: mve(t ?? "langchain"),
        [$Ft]: n,
        [Ede]: mve(e),
        [KE]: qun,
        ...Bfy(i, r, s)
    };
}
function Ufy(t, e, n, i, r) {
    const s = r?.ls_provider, o = i?.model ?? r?.ls_model_name ?? "unknown", a = NVu(s, o, "pipeline", t, i, r);
    if (n && Array.isArray(e) && e.length > 0) {
        const l = e.map((c)=>({
                role: "user",
                content: c
            }));
        Jje(a, Xje, mve(l));
    }
    return a;
}
function jfy(t, e, n, i, r) {
    const s = r?.ls_provider ?? t.id?.[2], o = i?.model ?? r?.ls_model_name ?? "unknown", a = NVu(s, o, "chat", t, i, r);
    if (n && Array.isArray(e) && e.length > 0) {
        const l = Ffy(e.flat());
        Jje(a, Xje, mve(l));
    }
    return a;
}
function $fy(t, e) {
    const n = [], i = t.flat();
    for (const r of i){
        const s = r.message?.content;
        if (Array.isArray(s)) for (const o of s){
            const a = o;
            a.type === "tool_use" && n.push(a);
        }
    }
    n.length > 0 && Jje(e, Zje, mve(n));
}
function Hfy(t, e) {
    if (!t) return;
    const n = t.tokenUsage, i = t.usage;
    if (n) gve(e, uet, n.promptTokens), gve(e, det, n.completionTokens), gve(e, jFt, n.totalTokens);
    else if (i) {
        gve(e, uet, i.input_tokens), gve(e, det, i.output_tokens);
        const r = Number(i.input_tokens), s = Number(i.output_tokens), o = (Number.isNaN(r) ? 0 : r) + (Number.isNaN(s) ? 0 : s);
        o > 0 && gve(e, jFt, o), i.cache_creation_input_tokens !== void 0 && gve(e, Lzu, i.cache_creation_input_tokens), i.cache_read_input_tokens !== void 0 && gve(e, Ozu, i.cache_read_input_tokens);
    }
}
function Wfy(t, e) {
    if (!t) return;
    const n = {};
    if (Array.isArray(t.generations)) {
        const s = t.generations.flat().map((o)=>o.generation_info?.finish_reason).filter((o)=>typeof o == "string");
        if (s.length > 0 && Jje(n, Pvt, mve(s)), $fy(t.generations, n), e) {
            const o = t.generations.flat().map((a)=>a.text ?? a.message?.content).filter((a)=>typeof a == "string");
            o.length > 0 && Jje(n, Gxe, mve(o));
        }
    }
    Hfy(t.llmOutput, n);
    const i = t.llmOutput, r = i?.model_name ?? i?.model;
    return r && Jje(n, BFt, r), i?.id && Jje(n, UFt, i.id), i?.stop_reason && Jje(n, Nzu, mve(i.stop_reason)), n;
}
export function qfy(t = {}) {
    const e = t.recordInputs ?? !1, n = t.recordOutputs ?? !1, i = new Map, r = (o)=>{
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
        handleLLMStart (o, a, l, c, u, d, h, p) {
            const g = DVu(d), f = Ufy(o, a, e, g, h), _ = f[Ede], b = f[$Ft];
            wOe({
                name: `${b} ${_}`,
                op: "gen_ai.pipeline",
                attributes: {
                    ...f,
                    [bx]: "gen_ai.pipeline"
                }
            }, (y)=>(i.set(l, y), y));
        },
        handleChatModelStart (o, a, l, c, u, d, h, p) {
            const g = DVu(d), f = jfy(o, a, e, g, h), _ = f[Ede], b = f[$Ft];
            wOe({
                name: `${b} ${_}`,
                op: "gen_ai.chat",
                attributes: {
                    ...f,
                    [bx]: "gen_ai.chat"
                }
            }, (y)=>(i.set(l, y), y));
        },
        handleLLMEnd (o, a, l, c, u) {
            const d = i.get(a);
            if (d?.isRecording()) {
                const h = Wfy(o, n);
                h && d.setAttributes(h), r(a);
            }
        },
        handleLLMError (o, a) {
            const l = i.get(a);
            l?.isRecording() && (l.setStatus({
                code: TI,
                message: "llm_error"
            }), r(a)), Sv(o, {
                mechanism: {
                    handled: !1,
                    type: `${qun}.llm_error_handler`
                }
            });
        },
        handleChainStart (o, a, l, c) {
            const u = o.name || "unknown_chain", d = {
                [KE]: "auto.ai.langchain",
                "langchain.chain.name": u
            };
            e && (d["langchain.chain.inputs"] = JSON.stringify(a)), wOe({
                name: `chain ${u}`,
                op: "gen_ai.invoke_agent",
                attributes: {
                    ...d,
                    [bx]: "gen_ai.invoke_agent"
                }
            }, (h)=>(i.set(l, h), h));
        },
        handleChainEnd (o, a) {
            const l = i.get(a);
            l?.isRecording() && (n && l.setAttributes({
                "langchain.chain.outputs": JSON.stringify(o)
            }), r(a));
        },
        handleChainError (o, a) {
            const l = i.get(a);
            l?.isRecording() && (l.setStatus({
                code: TI,
                message: "chain_error"
            }), r(a)), Sv(o, {
                mechanism: {
                    handled: !1,
                    type: `${qun}.chain_error_handler`
                }
            });
        },
        handleToolStart (o, a, l, c) {
            const u = o.name || "unknown_tool", d = {
                [KE]: qun,
                "gen_ai.tool.name": u
            };
            e && (d["gen_ai.tool.input"] = a), wOe({
                name: `execute_tool ${u}`,
                op: "gen_ai.execute_tool",
                attributes: {
                    ...d,
                    [bx]: "gen_ai.execute_tool"
                }
            }, (h)=>(i.set(l, h), h));
        },
        handleToolEnd (o, a) {
            const l = i.get(a);
            l?.isRecording() && (n && l.setAttributes({
                "gen_ai.tool.output": JSON.stringify(o)
            }), r(a));
        },
        handleToolError (o, a) {
            const l = i.get(a);
            l?.isRecording() && (l.setStatus({
                code: TI,
                message: "tool_error"
            }), r(a)), Sv(o, {
                mechanism: {
                    handled: !1,
                    type: `${qun}.tool_error_handler`
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
export function EXn(t) {
    if (t !== void 0) return t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
export function Kfy() {
    try {
        return new ErrorEvent(""), !0;
    } catch  {
        return !1;
    }
}
export function Yfy() {
    try {
        return new DOMError(""), !0;
    } catch  {
        return !1;
    }
}
export function Xfy() {
    try {
        return new DOMException(""), !0;
    } catch  {
        return !1;
    }
}
export function OVu() {
    return "history" in HFt && !!HFt.history;
}
export function e0o() {
    if (!("fetch" in HFt)) return !1;
    try {
        return new Headers, new Request("http://www.example.com"), new Response, !0;
    } catch  {
        return !1;
    }
}
export function ppr(t) {
    return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
export function mpr() {
    if (typeof EdgeRuntime == "string") return !0;
    if (!e0o()) return !1;
    if (ppr(HFt.fetch)) return !0;
    let t = !1;
    const e = HFt.document;
    if (e && typeof e.createElement == "function") try {
        const n = e.createElement("iframe");
        n.hidden = !0, e.head.appendChild(n), n.contentWindow?.fetch && (t = ppr(n.contentWindow.fetch)), e.head.removeChild(n);
    } catch (n) {
        rg && so.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
    }
    return t;
}
export function t0o() {
    return "ReportingObserver" in HFt;
}
export function Zfy() {
    if (!e0o()) return !1;
    try {
        return new Request("_", {
            referrerPolicy: "origin"
        }), !0;
    } catch  {
        return !1;
    }
}
export function WFt(t, e) {
    const n = "fetch";
    net(n, t), iet(n, ()=>UVu(void 0, e));
}
export function n0o(t) {
    const e = "fetch-body-resolved";
    net(e, t), iet(e, ()=>UVu(Jfy));
}
function UVu(t, e = !1) {
    e && !mpr() || CD(o_, "fetch", function(n) {
        return function(...i) {
            const r = new Error, { method: s, url: o } = evy(i), a = {
                args: i,
                fetchData: {
                    method: s,
                    url: o
                },
                startTimestamp: M3() * 1e3,
                virtualError: r,
                headers: tvy(i)
            };
            return t || uke("fetch", {
                ...a
            }), n.apply(o_, i).then(async (l)=>(t ? t(l) : uke("fetch", {
                    ...a,
                    endTimestamp: M3() * 1e3,
                    response: l
                }), l), (l)=>{
                if (uke("fetch", {
                    ...a,
                    endTimestamp: M3() * 1e3,
                    error: l
                }), yOe(l) && l.stack === void 0 && (l.stack = r.stack, lQ(l, "framesToPop", 1)), l instanceof TypeError && (l.message === "Failed to fetch" || l.message === "Load failed" || l.message === "NetworkError when attempting to fetch resource.")) try {
                    const c = new URL(a.fetchData.url);
                    l.message = `${l.message} (${c.host})`;
                } catch  {}
                throw l;
            });
        };
    });
}
async function Qfy(t, e) {
    if (t?.body) {
        const n = t.body, i = n.getReader(), r = setTimeout(()=>{
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
                clearTimeout(o), a && (e(), s = !1);
            } catch  {
                s = !1;
            } finally{
                clearTimeout(o);
            }
        }
        clearTimeout(r), i.releaseLock(), n.cancel().then(null, ()=>{});
    }
}
function Jfy(t) {
    let e;
    try {
        e = t.clone();
    } catch  {
        return;
    }
    Qfy(e, ()=>{
        uke("fetch-body-resolved", {
            endTimestamp: M3() * 1e3,
            response: t
        });
    });
}
function i0o(t, e) {
    return !!t && typeof t == "object" && !!t[e];
}
function jVu(t) {
    return typeof t == "string" ? t : t ? i0o(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
}
function evy(t) {
    if (t.length === 0) return {
        method: "GET",
        url: ""
    };
    if (t.length === 2) {
        const [n, i] = t;
        return {
            url: jVu(n),
            method: i0o(i, "method") ? String(i.method).toUpperCase() : "GET"
        };
    }
    const e = t[0];
    return {
        url: jVu(e),
        method: i0o(e, "method") ? String(e.method).toUpperCase() : "GET"
    };
}
function tvy(t) {
    const [e, n] = t;
    try {
        if (typeof n == "object" && n !== null && "headers" in n && n.headers) return new Headers(n.headers);
        if (OHu(e)) return new Headers(e.headers);
    } catch  {}
}
export function $Vu() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
export function r0o() {
    return "npm";
}
export function WVu() {
    return !$Vu() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
}
function s0o(t, e) {
    return t.require(e);
}
export function ivy(t, e = module) {
    let n;
    try {
        n = s0o(e, t);
    } catch  {}
    if (!n) try {
        const { cwd: i } = s0o(e, "process");
        n = s0o(e, `${i()}/node_modules/${t}`);
    } catch  {}
    return n;
}
export function IXn() {
    return typeof window < "u" && (!WVu() || rvy());
}
function rvy() {
    return o_.process?.type === "renderer";
}
export function ovy(t, e, n) {
    const i = t[e];
    if (typeof i == "function") {
        try {
            t[e] = n;
        } catch  {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
        }
        if (t.default === i) try {
            t.default = n;
        } catch  {
            Object.defineProperty(t, "default", {
                value: n,
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
        }
    }
}
export function o0o(t, e = !1) {
    return !(e || t && !t.startsWith("/") && !t.match(/^[A-Z]:/) && !t.startsWith(".") && !t.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && t !== void 0 && !t.includes("node_modules/");
}
export function qVu(t) {
    const e = /^\s*[-]{4,}$/, n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/, i = /at (?:async )?(.+?) \(data:(.*?),/;
    return (r)=>{
        const s = r.match(i);
        if (s) return {
            filename: `<data:${s[2]}>`,
            function: s[1]
        };
        const o = r.match(n);
        if (o) {
            let a, l, c, u, d;
            if (o[1]) {
                c = o[1];
                let g = c.lastIndexOf(".");
                if (c[g - 1] === "." && g--, g > 0) {
                    a = c.slice(0, g), l = c.slice(g + 1);
                    const f = a.indexOf(".Module");
                    f > 0 && (c = c.slice(f + 1), a = a.slice(0, f));
                }
                u = void 0;
            }
            l && (u = a, d = l), l === "<anonymous>" && (d = void 0, c = void 0), c === void 0 && (d = d || qq, c = u ? `${u}.${d}` : d);
            let h = o[2]?.startsWith("file://") ? o[2].slice(7) : o[2];
            const p = o[5] === "native";
            return h?.match(/\/[A-Z]:/) && (h = h.slice(1)), !h && o[5] && !p && (h = o[5]), {
                filename: h ? decodeURI(h) : void 0,
                module: t ? t(h) : void 0,
                function: c,
                lineno: VVu(o[3]),
                colno: VVu(o[4]),
                in_app: o0o(h || "", p)
            };
        }
        if (r.match(e)) return {
            filename: r
        };
    };
}
export function zVu(t) {
    return [
        90,
        qVu(t)
    ];
}
function VVu(t) {
    return parseInt(t || "", 10) || void 0;
}
export function lvy(t, e, n, i) {
    const r = t();
    let s = !1, o = !0;
    return setInterval(()=>{
        const a = r.getTimeMs();
        s === !1 && a > e + n && (s = !0, o && i()), a < e + n && (s = !1);
    }, 20), {
        poll: ()=>{
            r.reset();
        },
        enabled: (a)=>{
            o = a;
        }
    };
}
export function cvy(t, e, n) {
    const i = e ? e.replace(/^file:\/\//, "") : void 0, r = t.location.columnNumber ? t.location.columnNumber + 1 : void 0, s = t.location.lineNumber ? t.location.lineNumber + 1 : void 0;
    return {
        filename: i,
        module: n(i),
        function: t.functionName || qq,
        colno: r,
        lineno: s,
        in_app: i ? o0o(i) : void 0
    };
}
export function XVu(t) {
    const n = o_[Symbol.for("@vercel/request-context")]?.get?.();
    n?.waitUntil && n.waitUntil(t);
}
async function gpr(t) {
    try {
        so.log("Flushing events..."), await Sko(t), so.log("Done flushing events");
    } catch (e) {
        so.log(`Error while flushing events:
`, e);
    }
}
export async function hvy(t = {}) {
    const { timeout: e = 2e3 } = t;
    if ("cloudflareWaitUntil" in t && typeof t?.cloudflareWaitUntil == "function") {
        t.cloudflareWaitUntil(gpr(e));
        return;
    }
    if ("cloudflareCtx" in t && typeof t.cloudflareCtx?.waitUntil == "function") {
        t.cloudflareCtx.waitUntil(gpr(e));
        return;
    }
    if (o_[Symbol.for("@vercel/request-context")]) {
        XVu(gpr(e));
        return;
    }
    if (typeof process > "u") return;
    (!!process.env.FUNCTIONS_WORKER_RUNTIME || !!process.env.LAMBDA_TASK_ROOT || !!process.env.K_SERVICE || !!process.env.CF_PAGES || !!process.env.VERCEL || !!process.env.NETLIFY) && await gpr(e);
}
export function a0o(t, e) {
    return vpr.get(t) || vpr.set(t, new e), vpr.get(t);
}
export function v0o(t, e = !1) {
    return Cpr("cls", t, Cvy, EKu, e);
}
export function _0o(t, e = !1) {
    return Cpr("lcp", t, Tvy, IKu, e);
}
function wvy(t) {
    return Cpr("ttfb", t, Evy, xKu);
}
export function wKu(t) {
    return Cpr("inp", t, Ivy, AKu);
}
export function Nvt(t, e) {
    return CKu(t, e), LXn[t] || (xvy(t), LXn[t] = !0), TKu(t, e);
}
function NXn(t, e) {
    const n = Qun[t];
    if (n?.length) for (const i of n)try {
        i(e);
    } catch (r) {
        Dvt && so.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Ise(i)}
Error:`, r);
    }
}
function Cvy() {
    return aKu((t)=>{
        NXn("cls", {
            metric: t
        }), EKu = t;
    }, {
        reportAllChanges: !0
    });
}
function Tvy() {
    return yKu((t)=>{
        NXn("lcp", {
            metric: t
        }), IKu = t;
    }, {
        reportAllChanges: !0
    });
}
function Evy() {
    return kKu((t)=>{
        NXn("ttfb", {
            metric: t
        }), xKu = t;
    });
}
function Ivy() {
    return vKu((t)=>{
        NXn("inp", {
            metric: t
        }), AKu = t;
    });
}
function Cpr(t, e, n, i, r = !1) {
    CKu(t, e);
    let s;
    return LXn[t] || (s = n(), LXn[t] = !0), i && e({
        metric: i
    }), TKu(t, e, r ? s : void 0);
}
function xvy(t) {
    const e = {};
    t === "event" && (e.durationThreshold = 0), qFt(t, (n)=>{
        NXn(t, {
            entries: n
        });
    }, e);
}
function CKu(t, e) {
    Qun[t] = Qun[t] || [], Qun[t].push(e);
}
function TKu(t, e, n) {
    return ()=>{
        n && n();
        const i = Qun[t];
        if (!i) return;
        const r = i.indexOf(e);
        r !== -1 && i.splice(r, 1);
    };
}
function Avy(t) {
    return "duration" in t;
}
var EKu, IKu, xKu, AKu;
function b0o(t) {
    return typeof t == "number" && isFinite(t);
}
function Lvt(t, e, n, { ...i }) {
    const r = Yb(t).start_timestamp;
    return r && r > e && typeof t.updateStartTime == "function" && t.updateStartTime(e), IFt(t, ()=>{
        const s = COe({
            startTime: e,
            ...i
        });
        return s && s.end(n), s;
    });
}
export function y0o(t) {
    const e = ah();
    if (!e) return;
    const { name: n, transaction: i, attributes: r, startTime: s } = t, { release: o, environment: a, sendDefaultPii: l } = e.getOptions(), u = e.getIntegrationByName("Replay")?.getReplayId(), d = Kb(), h = d.getUser(), p = h !== void 0 ? h.email || h.id || h.ip_address : void 0;
    let g;
    try {
        g = d.getScopeData().contexts.profile.profile_id;
    } catch  {}
    const f = {
        release: o,
        environment: a,
        user: p || void 0,
        profile_id: g || void 0,
        replay_id: u || void 0,
        transaction: i,
        "user_agent.original": Zk.navigator?.userAgent,
        "client.address": l ? "{{auto}}" : void 0,
        ...r
    };
    return COe({
        name: n,
        attributes: f,
        startTime: s,
        experimental: {
            standalone: !0
        }
    });
}
function OXn() {
    return Zk.addEventListener && Zk.performance;
}
export function yj(t) {
    return t / 1e3;
}
function Rvy(t) {
    let e = "unknown", n = "unknown", i = "";
    for (const r of t){
        if (r === "/") {
            [e, n] = t.split("/");
            break;
        }
        if (!isNaN(Number(r))) {
            e = i === "h" ? "http" : i, n = t.split(i)[1];
            break;
        }
        i += r;
    }
    return i === t && (e = i), {
        name: e,
        version: n
    };
}
function RKu(t) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(t);
    } catch  {
        return !1;
    }
}
function PKu(t, e) {
    let n, i = !1;
    function r(a) {
        !i && n && e(a, n), i = !0;
    }
    g0o(()=>{
        r("pagehide");
    });
    const s = t.on("beforeStartNavigationSpan", (a, l)=>{
        l?.isRedirect || (r("navigation"), s(), o());
    }), o = t.on("afterStartPageLoadSpan", (a)=>{
        n = a.spanContext().spanId, o();
    });
}
function Pvy(t) {
    let e = 0, n;
    if (!RKu("layout-shift")) return;
    const i = v0o(({ metric: r })=>{
        const s = r.entries[r.entries.length - 1];
        s && (e = r.value, n = s);
    }, !0);
    PKu(t, (r, s)=>{
        Mvy(e, n, s, r), i();
    });
}
function Mvy(t, e, n, i) {
    Dvt && so.log(`Sending CLS span (${t})`);
    const r = e ? yj((zq() || 0) + e.startTime) : M3(), s = Kb().getScopeData().transactionName, o = e ? Ase(e.sources[0]?.node) : "Layout shift", a = {
        [KE]: "auto.http.browser.cls",
        [bx]: "ui.webvital.cls",
        [kvt]: 0,
        "sentry.pageload.span_id": n,
        "sentry.report_event": i
    };
    e?.sources && e.sources.forEach((c, u)=>{
        a[`cls.source.${u + 1}`] = Ase(c.node);
    });
    const l = y0o({
        name: o,
        transaction: s,
        attributes: a,
        startTime: r
    });
    l && (l.addEvent("cls", {
        [SFt]: "",
        [kFt]: t
    }), l.end(r));
}
function Nvy(t) {
    let e = 0, n;
    if (!RKu("largest-contentful-paint")) return;
    const i = _0o(({ metric: r })=>{
        const s = r.entries[r.entries.length - 1];
        s && (e = r.value, n = s);
    }, !0);
    PKu(t, (r, s)=>{
        Lvy(e, n, s, r), i();
    });
}
function Lvy(t, e, n, i) {
    Dvt && so.log(`Sending LCP span (${t})`);
    const r = yj((zq() || 0) + (e?.startTime || 0)), s = Kb().getScopeData().transactionName, o = e ? Ase(e.element) : "Largest contentful paint", a = {
        [KE]: "auto.http.browser.lcp",
        [bx]: "ui.webvital.lcp",
        [kvt]: 0,
        "sentry.pageload.span_id": n,
        "sentry.report_event": i
    };
    e && (e.element && (a["lcp.element"] = Ase(e.element)), e.id && (a["lcp.id"] = e.id), e.url && (a["lcp.url"] = e.url), e.loadTime != null && (a["lcp.loadTime"] = e.loadTime), e.renderTime != null && (a["lcp.renderTime"] = e.renderTime), e.size != null && (a["lcp.size"] = e.size));
    const l = y0o({
        name: o,
        transaction: s,
        attributes: a,
        startTime: r
    });
    l && (l.addEvent("lcp", {
        [SFt]: "millisecond",
        [kFt]: t
    }), l.end(r));
}
function zxe(t) {
    return t && ((zq() || performance.timeOrigin) + t) / 1e3;
}
export function S0o(t) {
    const e = {};
    if (t.nextHopProtocol != null) {
        const { name: n, version: i } = Rvy(t.nextHopProtocol);
        e["network.protocol.version"] = i, e["network.protocol.name"] = n;
    }
    return zq() || OXn()?.timeOrigin ? Fvy({
        ...e,
        "http.request.redirect_start": zxe(t.redirectStart),
        "http.request.redirect_end": zxe(t.redirectEnd),
        "http.request.worker_start": zxe(t.workerStart),
        "http.request.fetch_start": zxe(t.fetchStart),
        "http.request.domain_lookup_start": zxe(t.domainLookupStart),
        "http.request.domain_lookup_end": zxe(t.domainLookupEnd),
        "http.request.connect_start": zxe(t.connectStart),
        "http.request.secure_connection_start": zxe(t.secureConnectionStart),
        "http.request.connection_end": zxe(t.connectEnd),
        "http.request.request_start": zxe(t.requestStart),
        "http.request.response_start": zxe(t.responseStart),
        "http.request.response_end": zxe(t.responseEnd),
        "http.request.time_to_first_byte": t.responseStart != null ? t.responseStart / 1e3 : void 0
    }) : e;
}
function Fvy(t) {
    return Object.fromEntries(Object.entries(t).filter(([, e])=>e != null));
}
export function DKu() {
    if (OXn() && zq()) {
        const e = Bvy();
        return ()=>{
            e();
        };
    }
    return ()=>{};
}
function Bvy() {
    return wKu(OKu);
}
export function NKu() {
    const t = Object.keys(Epr);
    IXn() && t.forEach((r)=>{
        Zk.addEventListener(r, e, {
            capture: !0,
            passive: !0
        });
    });
    function e(r) {
        const s = r.target;
        if (!s) return;
        const o = Ase(s), a = Math.round(r.timeStamp);
        if (VFt.set(a, o), VFt.size > 50) {
            const l = VFt.keys().next().value;
            l !== void 0 && VFt.delete(l);
        }
    }
    function n(r) {
        const s = Math.round(r.startTime);
        let o = VFt.get(s);
        if (!o) for(let a = -5; a <= 5; a++){
            const l = VFt.get(s + a);
            if (l) {
                o = l;
                break;
            }
        }
        return o || "<unknown>";
    }
    const i = ({ entries: r })=>{
        const s = eL(), o = s && JN(s);
        r.forEach((a)=>{
            if (!Avy(a)) return;
            const l = a.interactionId;
            if (l == null || FXn.has(l)) return;
            const c = a.target ? Ase(a.target) : n(a);
            if (Tpr.length > 10) {
                const u = Tpr.shift();
                FXn.delete(u);
            }
            Tpr.push(l), FXn.set(l, {
                span: o,
                elementName: c
            });
        });
    };
    Nvt("event", i), Nvt("first-input", i);
}
export function FKu({ recordClsStandaloneSpans: t, recordLcpStandaloneSpans: e, client: n }) {
    const i = OXn();
    if (i && zq()) {
        i.mark && Zk.performance.mark("sentry-tracing-init");
        const r = e ? Nvy(n) : $vy(), s = Hvy(), o = t ? Pvy(n) : jvy();
        return ()=>{
            r?.(), s(), o?.();
        };
    }
    return ()=>{};
}
export function BKu() {
    Nvt("longtask", ({ entries: t })=>{
        const e = eL();
        if (!e) return;
        const { op: n, start_timestamp: i } = Yb(e);
        for (const r of t){
            const s = yj(zq() + r.startTime), o = yj(r.duration);
            n === "navigation" && i && s < i || Lvt(e, s, s + o, {
                name: "Main UI thread blocked",
                op: "ui.long-task",
                attributes: {
                    [KE]: "auto.ui.browser.metrics"
                }
            });
        }
    });
}
export function UKu() {
    new PerformanceObserver((e)=>{
        const n = eL();
        if (n) for (const i of e.getEntries()){
            if (!i.scripts[0]) continue;
            const r = yj(zq() + i.startTime), { start_timestamp: s, op: o } = Yb(n);
            if (o === "navigation" && s && r < s) continue;
            const a = yj(i.duration), l = {
                [KE]: "auto.ui.browser.metrics"
            }, c = i.scripts[0], { invoker: u, invokerType: d, sourceURL: h, sourceFunctionName: p, sourceCharPosition: g } = c;
            l["browser.script.invoker"] = u, l["browser.script.invoker_type"] = d, h && (l["code.filepath"] = h), p && (l["code.function"] = p), g !== -1 && (l["browser.script.source_char_position"] = g), Lvt(n, r, r + a, {
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                attributes: l
            });
        }
    }).observe({
        type: "long-animation-frame",
        buffered: !0
    });
}
export function jKu() {
    Nvt("event", ({ entries: t })=>{
        const e = eL();
        if (e) {
            for (const n of t)if (n.name === "click") {
                const i = yj(zq() + n.startTime), r = yj(n.duration), s = {
                    name: Ase(n.target),
                    op: `ui.interaction.${n.name}`,
                    startTime: i,
                    attributes: {
                        [KE]: "auto.ui.browser.metrics"
                    }
                }, o = Qdr(n.target);
                o && (s.attributes["ui.component_name"] = o), Lvt(e, i, i + r, s);
            }
        }
    });
}
function jvy() {
    return v0o(({ metric: t })=>{
        const e = t.entries[t.entries.length - 1];
        e && (Vxe.cls = {
            value: t.value,
            unit: ""
        }, xpr = e);
    }, !0);
}
function $vy() {
    return _0o(({ metric: t })=>{
        const e = t.entries[t.entries.length - 1];
        e && (Vxe.lcp = {
            value: t.value,
            unit: "millisecond"
        }, fve = e);
    }, !0);
}
function Hvy() {
    return wvy(({ metric: t })=>{
        t.entries[t.entries.length - 1] && (Vxe.ttfb = {
            value: t.value,
            unit: "millisecond"
        });
    });
}
export function $Ku(t, e) {
    const n = OXn(), i = zq();
    if (!n?.getEntries || !i) return;
    const r = yj(i), s = n.getEntries(), { op: o, start_timestamp: a } = Yb(t);
    s.slice(k0o).forEach((l)=>{
        const c = yj(l.startTime), u = yj(Math.max(0, l.duration));
        if (!(o === "navigation" && a && r + c < a)) switch(l.entryType){
            case "navigation":
                {
                    zvy(t, l, r);
                    break;
                }
            case "mark":
            case "paint":
            case "measure":
                {
                    Gvy(t, l, c, u, r, e.ignorePerformanceApiSpans);
                    const d = bpr(), h = l.startTime < d.firstHiddenTime;
                    l.name === "first-paint" && h && (Vxe.fp = {
                        value: l.startTime,
                        unit: "millisecond"
                    }), l.name === "first-contentful-paint" && h && (Vxe.fcp = {
                        value: l.startTime,
                        unit: "millisecond"
                    });
                    break;
                }
            case "resource":
                {
                    Yvy(t, l, l.name, c, u, r, e.ignoreResourceSpans);
                    break;
                }
        }
    }), k0o = Math.max(s.length - 1, 0), Xvy(t), o === "pageload" && (Jvy(Vxe), e.recordClsOnPageloadSpan || delete Vxe.cls, e.recordLcpOnPageloadSpan || delete Vxe.lcp, Object.entries(Vxe).forEach(([l, c])=>{
        J1o(l, c.value, c.unit);
    }), t.setAttribute("performance.timeOrigin", r), t.setAttribute("performance.activationStart", GFt()), Zvy(t, e)), fve = void 0, xpr = void 0, Vxe = {};
}
function Wvy(t) {
    if (t?.entryType === "measure") try {
        return t.detail.devtools.track === "Components \u269B";
    } catch  {
        return;
    }
}
function Gvy(t, e, n, i, r, s) {
    if (Wvy(e) || [
        "mark",
        "measure"
    ].includes(e.entryType) && Pte(e.name, s)) return;
    const o = Vun(!1), a = yj(o ? o.requestStart : 0), l = r + Math.max(n, a), c = r + n, u = c + i, d = {
        [KE]: "auto.resource.browser.metrics"
    };
    l !== c && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = l), qvy(d, e), l <= u && Lvt(t, l, u, {
        name: e.name,
        op: e.entryType,
        attributes: d
    });
}
function qvy(t, e) {
    try {
        const n = e.detail;
        if (!n) return;
        if (typeof n == "object") {
            for (const [i, r] of Object.entries(n))if (r && dke(r)) t[`sentry.browser.measure.detail.${i}`] = r;
            else if (r !== void 0) try {
                t[`sentry.browser.measure.detail.${i}`] = JSON.stringify(r);
            } catch  {}
            return;
        }
        if (dke(n)) {
            t["sentry.browser.measure.detail"] = n;
            return;
        }
        try {
            t["sentry.browser.measure.detail"] = JSON.stringify(n);
        } catch  {}
    } catch  {}
}
function zvy(t, e, n) {
    [
        "unloadEvent",
        "redirect",
        "domContentLoadedEvent",
        "loadEvent",
        "connect"
    ].forEach((i)=>{
        Ipr(t, e, i, n);
    }), Ipr(t, e, "secureConnection", n, "TLS/SSL"), Ipr(t, e, "fetch", n, "cache"), Ipr(t, e, "domainLookup", n, "DNS"), Kvy(t, e, n);
}
function Ipr(t, e, n, i, r = n) {
    const s = Vvy(n), o = e[s], a = e[`${n}Start`];
    !a || !o || Lvt(t, i + yj(a), i + yj(o), {
        op: `browser.${r}`,
        name: e.name,
        attributes: {
            [KE]: "auto.ui.browser.metrics",
            ...n === "redirect" && e.redirectCount != null ? {
                "http.redirect_count": e.redirectCount
            } : {}
        }
    });
}
function Vvy(t) {
    return t === "secureConnection" ? "connectEnd" : t === "fetch" ? "domainLookupStart" : `${t}End`;
}
function Kvy(t, e, n) {
    const i = n + yj(e.requestStart), r = n + yj(e.responseEnd), s = n + yj(e.responseStart);
    e.responseEnd && (Lvt(t, i, r, {
        op: "browser.request",
        name: e.name,
        attributes: {
            [KE]: "auto.ui.browser.metrics"
        }
    }), Lvt(t, s, r, {
        op: "browser.response",
        name: e.name,
        attributes: {
            [KE]: "auto.ui.browser.metrics"
        }
    }));
}
function Yvy(t, e, n, i, r, s, o) {
    if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
    const a = e.initiatorType ? `resource.${e.initiatorType}` : "resource.other";
    if (o?.includes(a)) return;
    const l = {
        [KE]: "auto.resource.browser.metrics"
    }, c = hve(n);
    c.protocol && (l["url.scheme"] = c.protocol.split(":").pop()), c.host && (l["server.address"] = c.host), l["url.same_origin"] = n.includes(Zk.location.origin), Qvy(e, l, [
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
        ...l,
        ...S0o(e)
    }, d = s + i, h = d + r;
    Lvt(t, d, h, {
        name: n.replace(Zk.location.origin, ""),
        op: a,
        attributes: u
    });
}
function Xvy(t) {
    const e = Zk.navigator;
    if (!e) return;
    const n = e.connection;
    n && (n.effectiveType && t.setAttribute("effectiveConnectionType", n.effectiveType), n.type && t.setAttribute("connectionType", n.type), b0o(n.rtt) && (Vxe["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
    })), b0o(e.deviceMemory) && t.setAttribute("deviceMemory", `${e.deviceMemory} GB`), b0o(e.hardwareConcurrency) && t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency));
}
function Zvy(t, e) {
    fve && e.recordLcpOnPageloadSpan && (fve.element && t.setAttribute("lcp.element", Ase(fve.element)), fve.id && t.setAttribute("lcp.id", fve.id), fve.url && t.setAttribute("lcp.url", fve.url.trim().slice(0, 200)), fve.loadTime != null && t.setAttribute("lcp.loadTime", fve.loadTime), fve.renderTime != null && t.setAttribute("lcp.renderTime", fve.renderTime), t.setAttribute("lcp.size", fve.size)), xpr?.sources && e.recordClsOnPageloadSpan && xpr.sources.forEach((n, i)=>t.setAttribute(`cls.source.${i + 1}`, Ase(n.node)));
}
function Qvy(t, e, n) {
    n.forEach(([i, r])=>{
        const s = t[i];
        s != null && (typeof s == "number" && s < HKu || typeof s == "string") && (e[r] = s);
    });
}
function Jvy(t) {
    const e = Vun(!1);
    if (!e) return;
    const { responseStart: n, requestStart: i } = e;
    i <= n && (t["ttfb.requestTime"] = {
        value: n - i,
        unit: "millisecond"
    });
}
var fve, xpr;
export function WKu() {
    return OXn() && zq() ? Nvt("element", GKu) : ()=>{};
}
export function w0o(t) {
    net("dom", t), iet("dom", n_y);
}
function n_y() {
    if (!Zk.document) return;
    const t = uke.bind(null, "dom"), e = qKu(t, !0);
    Zk.document.addEventListener("click", e, !1), Zk.document.addEventListener("keypress", e, !1), [
        "EventTarget",
        "Node"
    ].forEach((n)=>{
        const r = Zk[n]?.prototype;
        r?.hasOwnProperty?.("addEventListener") && (CD(r, "addEventListener", function(s) {
            return function(o, a, l) {
                if (o === "click" || o == "keypress") try {
                    const c = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, u = c[o] = c[o] || {
                        refCount: 0
                    };
                    if (!u.handler) {
                        const d = qKu(t);
                        u.handler = d, s.call(this, o, d, l);
                    }
                    u.refCount++;
                } catch  {}
                return s.call(this, o, a, l);
            };
        }), CD(r, "removeEventListener", function(s) {
            return function(o, a, l) {
                if (o === "click" || o == "keypress") try {
                    const c = this.__sentry_instrumentation_handlers__ || {}, u = c[o];
                    u && (u.refCount--, u.refCount <= 0 && (s.call(this, o, u.handler, l), u.handler = void 0, delete c[o]), Object.keys(c).length === 0 && delete this.__sentry_instrumentation_handlers__);
                } catch  {}
                return s.call(this, o, a, l);
            };
        }));
    });
}
function i_y(t) {
    if (t.type !== C0o) return !1;
    try {
        if (!t.target || t.target._sentryId !== T0o) return !1;
    } catch  {}
    return !0;
}
function r_y(t, e) {
    return t !== "keypress" ? !1 : e?.tagName ? !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) : !0;
}
function qKu(t, e = !1) {
    return (n)=>{
        if (!n || n._sentryCaptured) return;
        const i = s_y(n);
        if (r_y(n.type, i)) return;
        lQ(n, "_sentryCaptured", !0), i && !i._sentryId && lQ(i, "_sentryId", vM());
        const r = n.type === "keypress" ? "input" : n.type;
        i_y(n) || (t({
            event: n,
            name: r,
            global: e
        }), C0o = n.type, T0o = i ? i._sentryId : void 0), clearTimeout(VKu), VKu = Zk.setTimeout(()=>{
            T0o = void 0, C0o = void 0;
        }, zKu);
    };
}
function s_y(t) {
    try {
        return t.target;
    } catch  {
        return null;
    }
}
var VKu, C0o, T0o;
export function KFt(t) {
    const e = "history";
    net(e, t), iet(e, a_y);
}
function a_y() {
    if (Zk.addEventListener("popstate", ()=>{
        const e = Zk.location.href, n = Apr;
        if (Apr = e, n === e) return;
        uke("history", {
            from: n,
            to: e
        });
    }), !OVu()) return;
    function t(e) {
        return function(...n) {
            const i = n.length > 2 ? n[2] : void 0;
            if (i) {
                const r = Apr, s = l_y(String(i));
                if (Apr = s, r === s) return e.apply(this, n);
                uke("history", {
                    from: r,
                    to: s
                });
            }
            return e.apply(this, n);
        };
    }
    CD(Zk.history, "pushState", t), CD(Zk.history, "replaceState", t);
}
function l_y(t) {
    try {
        return new URL(t, Zk.location.origin).toString();
    } catch  {
        return t;
    }
}
var Apr;
export function BXn(t) {
    const e = jXn[t];
    if (e) return e;
    let n = Zk[t];
    if (ppr(n)) return jXn[t] = n.bind(Zk);
    const i = Zk.document;
    if (i && typeof i.createElement == "function") try {
        const r = i.createElement("iframe");
        r.hidden = !0, i.head.appendChild(r);
        const s = r.contentWindow;
        s?.[t] && (n = s[t]), i.head.removeChild(r);
    } catch (r) {
        Dvt && so.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `, r);
    }
    return n && (jXn[t] = n.bind(Zk));
}
export function KKu(t) {
    jXn[t] = void 0;
}
export function UXn(...t) {
    return BXn("setTimeout")(...t);
}
export function edn(t) {
    net("xhr", t), iet("xhr", d_y);
}
function d_y() {
    if (!Zk.XMLHttpRequest) return;
    const t = XMLHttpRequest.prototype;
    t.open = new Proxy(t.open, {
        apply (e, n, i) {
            const r = new Error, s = M3() * 1e3, o = wde(i[0]) ? i[0].toUpperCase() : void 0, a = h_y(i[1]);
            if (!o || !a) return e.apply(n, i);
            n[vve] = {
                method: o,
                url: a,
                request_headers: {}
            }, o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
            const l = ()=>{
                const c = n[vve];
                if (c && n.readyState === 4) {
                    try {
                        c.status_code = n.status;
                    } catch  {}
                    const u = {
                        endTimestamp: M3() * 1e3,
                        startTimestamp: s,
                        xhr: n,
                        virtualError: r
                    };
                    uke("xhr", u);
                }
            };
            return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, {
                apply (c, u, d) {
                    return l(), c.apply(u, d);
                }
            }) : n.addEventListener("readystatechange", l), n.setRequestHeader = new Proxy(n.setRequestHeader, {
                apply (c, u, d) {
                    const [h, p] = d, g = u[vve];
                    return g && wde(h) && wde(p) && (g.request_headers[h.toLowerCase()] = p), c.apply(u, d);
                }
            }), e.apply(n, i);
        }
    }), t.send = new Proxy(t.send, {
        apply (e, n, i) {
            const r = n[vve];
            if (!r) return e.apply(n, i);
            i[0] !== void 0 && (r.body = i[0]);
            const s = {
                startTimestamp: M3() * 1e3,
                xhr: n
            };
            return uke("xhr", s), e.apply(n, i);
        }
    });
}
function h_y(t) {
    if (wde(t)) return t;
    try {
        return t.toString();
    } catch  {}
}
export function YKu(t) {
    return new URLSearchParams(t).toString();
}
export function tdn(t, e = so) {
    try {
        if (typeof t == "string") return [
            t
        ];
        if (t instanceof URLSearchParams) return [
            t.toString()
        ];
        if (t instanceof FormData) return [
            YKu(t)
        ];
        if (!t) return [
            void 0
        ];
    } catch (n) {
        return Dvt && e.error(n, "Failed to serialize body", t), [
            void 0,
            "BODY_PARSE_ERROR"
        ];
    }
    return Dvt && e.log("Skipping network body because of body type", t), [
        void 0,
        "UNPARSEABLE_BODY_TYPE"
    ];
}
export function Rpr(t = []) {
    if (!(t.length !== 2 || typeof t[1] != "object")) return t[1].body;
}
export function E0o(t) {
    let e;
    try {
        e = t.getAllResponseHeaders();
    } catch (n) {
        return Dvt && so.error(n, "Failed to get xhr response headers", t), {};
    }
    return e ? e.split(`\r
`).reduce((n, i)=>{
        const [r, s] = i.split(": ");
        return s && (n[r.toLowerCase()] = s), n;
    }, {}) : {};
}
export function XKu(t, e) {
    const n = t;
    typeof n.vscodeWindowId != "number" && Object.defineProperty(n, "vscodeWindowId", {
        get: ()=>e
    });
}
export function _ve(t) {
    return t === $t ? !1 : typeof t?.vscodeWindowId == "number";
}
export function Pse(t, e = 0) {
    const n = t.vscodeWindowId;
    return typeof n == "number" ? n : e;
}
export function ZKu(t, e) {
    const n = Object.create(null);
    for (const i of t){
        const r = e(i);
        let s = n[r];
        s || (s = n[r] = []), s.push(i);
    }
    return n;
}
export function QKu(t, e) {
    const n = [], i = [];
    for (const r of t)e.has(r) || n.push(r);
    for (const r of e)t.has(r) || i.push(r);
    return {
        removed: n,
        added: i
    };
}
export function g_y(t, e) {
    const n = [], i = [];
    for (const [r, s] of t)e.has(r) || n.push(s);
    for (const [r, s] of e)t.has(r) || i.push(s);
    return {
        removed: n,
        added: i
    };
}
export function f_y(t, e) {
    const n = new Set;
    for (const i of e)t.has(i) && n.add(i);
    return n;
}
export function v_y(t) {
    XFt.setUnexpectedErrorHandler(t);
}
export function $Xn(t) {
    XFt.onUnexpectedError(t);
}
export function xr(t) {
    Ya(t) || XFt.onUnexpectedError(t);
}
export function uP(t) {
    Ya(t) || XFt.onUnexpectedExternalError(t);
}
export function Ppr(t) {
    if (t instanceof Error) {
        const { name: e, message: n, cause: i } = t, r = t.stacktrace || t.stack;
        return {
            $isError: !0,
            name: e,
            message: n,
            stack: r,
            noTelemetry: TD.isErrorNoTelemetry(t),
            cause: i ? Ppr(i) : void 0,
            code: t.code
        };
    }
    return t;
}
export function ndn(t) {
    let e;
    return t.noTelemetry ? e = new TD : (e = new Error, e.name = t.name), e.message = t.message, e.stack = t.stack, t.code && (e.code = t.code), t.cause && (e.cause = ndn(t.cause)), e;
}
export function Ya(t) {
    return t instanceof Hc ? !0 : t instanceof Error && t.name === HXn && t.message === HXn;
}
export function IOe() {
    const t = new Error(HXn);
    return t.name = t.message, t;
}
export function yke(t) {
    return new DOMException(t, "AbortError");
}
export function p1(t) {
    return t ? new Error(`Illegal argument: ${t}`) : new Error("Illegal argument");
}
export function I0o(t) {
    return t ? new Error(`Illegal state: ${t}`) : new Error("Illegal state");
}
export function uf(t) {
    return t ? t.message ? t.message : t.stack ? t.stack.split(`
`)[0] : String(t) : "Error";
}
export function x0o(t) {
    let e = t;
    for(; e;){
        if (e instanceof DOMException && e.name === "TimeoutError") return !0;
        if (e instanceof Error && e.cause) e = e.cause;
        else break;
    }
    return !1;
}
export function e$e(t, e, n) {
    if (!n) return t;
    n.throwIfAborted();
    let i = n, r, s;
    const o = new Promise((c, u)=>{
        r = c, s = u;
    }), a = ()=>{
        const c = {
            signal: i,
            resolve: r,
            reject: s
        };
        return i?.removeEventListener("abort", l), i = void 0, r = void 0, s = void 0, c;
    }, l = ()=>{
        const { signal: c, reject: u } = a(), d = new Error(e);
        d.cause = c?.reason, u?.(d);
    };
    return n.addEventListener("abort", l), t.then((c)=>a().resolve?.(c), (c)=>a().reject?.(c)), o;
}
export function nYu() {
    const t = Date.now();
    return t < R0o ? !1 : (R0o = t + rYu, !0);
}
export function __y(t) {
    t && (Dpr = !0);
}
export function b_y() {
    return Dpr;
}
export function mQ(t, e) {
    const n = this;
    let i = !1, r;
    return function() {
        if (i) return r;
        if (i = !0, e) try {
            r = t.apply(n, arguments);
        } finally{
            e();
        }
        else r = t.apply(n, arguments);
        return r;
    };
}
export function Kxe(t, e, n = t.length - 1) {
    const i = sYu(t, e, n);
    if (i !== -1) return t[i];
}
export function sYu(t, e, n = t.length - 1) {
    for(let i = n; i >= 0; i--){
        const r = t[i];
        if (e(r)) return i;
    }
    return -1;
}
export function idn(t, e) {
    const n = rdn(t, e);
    return n === -1 ? void 0 : t[n];
}
export function rdn(t, e, n = 0, i = t.length) {
    let r = n, s = i;
    for(; r < s;){
        const o = Math.floor((r + s) / 2);
        e(t[o]) ? r = o + 1 : s = o;
    }
    return r - 1;
}
export function y_y(t, e) {
    const n = t$e(t, e);
    return n === t.length ? void 0 : t[n];
}
export function t$e(t, e, n = 0, i = t.length) {
    let r = n, s = i;
    for(; r < s;){
        const o = Math.floor((r + s) / 2);
        e(t[o]) ? s = o : r = o + 1;
    }
    return r;
}
export function P0o(t, e) {
    if (t.length === 0) return;
    let n = t[0];
    for(let i = 1; i < t.length; i++){
        const r = t[i];
        e(r, n) > 0 && (n = r);
    }
    return n;
}
export function oYu(t, e) {
    if (t.length === 0) return;
    let n = t[0];
    for(let i = 1; i < t.length; i++){
        const r = t[i];
        e(r, n) >= 0 && (n = r);
    }
    return n;
}
export function aYu(t, e) {
    return P0o(t, (n, i)=>-e(n, i));
}
export function S_y(t, e) {
    if (t.length === 0) return -1;
    let n = 0;
    for(let i = 1; i < t.length; i++){
        const r = t[i];
        e(r, t[n]) > 0 && (n = i);
    }
    return n;
}
export function k_y(t, e) {
    for (const n of t){
        const i = e(n);
        if (i !== void 0) return i;
    }
}
export function o7(t) {
    if (t.length === 0) throw new Error("Invalid tail call");
    return [
        t.slice(0, t.length - 1),
        t[t.length - 1]
    ];
}
export function Zm(t, e, n = (i, r)=>i === r) {
    if (t === e) return !0;
    if (!t || !e || t.length !== e.length) return !1;
    for(let i = 0, r = t.length; i < r; i++)if (!n(t[i], e[i])) return !1;
    return !0;
}
export function Npr(t, e) {
    const n = t.length - 1;
    e < n && (t[e] = t[n]), t.pop();
}
export function Ovt(t, e, n) {
    return lYu(t.length, (i)=>n(t[i], e));
}
export function lYu(t, e) {
    let n = 0, i = t - 1;
    for(; n <= i;){
        const r = (n + i) / 2 | 0, s = e(r);
        if (s < 0) n = r + 1;
        else if (s > 0) i = r - 1;
        else return r;
    }
    return -(n + 1);
}
export function Lpr(t, e, n) {
    if (t = t | 0, t >= e.length) throw new TypeError("invalid index");
    const i = e[Math.floor(e.length * Math.random())], r = [], s = [], o = [];
    for (const a of e){
        const l = n(a, i);
        l < 0 ? r.push(a) : l > 0 ? s.push(a) : o.push(a);
    }
    return t < r.length ? Lpr(t, r, n) : t < r.length + o.length ? o[0] : Lpr(t - (r.length + o.length), s, n);
}
export function WXn(t, e) {
    const n = [];
    let i;
    for (const r of t.slice(0).sort(e))!i || e(i[0], r) !== 0 ? (i = [
        r
    ], n.push(i)) : i.push(r);
    return n;
}
export function* Opr(t, e) {
    let n, i;
    for (const r of t)i !== void 0 && e(i, r) ? n.push(r) : (n && (yield n), n = [
        r
    ]), i = r;
    n && (yield n);
}
export function cYu(t, e) {
    for(let n = 0; n <= t.length; n++)e(n === 0 ? void 0 : t[n - 1], n === t.length ? void 0 : t[n]);
}
export function w_y(t, e) {
    for(let n = 0; n < t.length; n++)e(n === 0 ? void 0 : t[n - 1], t[n], n + 1 === t.length ? void 0 : t[n + 1]);
}
export function N0o(t, e, n) {
    const i = [];
    function r(a, l, c) {
        if (l === 0 && c.length === 0) return;
        const u = i[i.length - 1];
        u && u.start + u.deleteCount === a ? (u.deleteCount += l, u.toInsert.push(...c)) : i.push({
            start: a,
            deleteCount: l,
            toInsert: c
        });
    }
    let s = 0, o = 0;
    for(;;){
        if (s === t.length) {
            r(s, 0, e.slice(o));
            break;
        }
        if (o === e.length) {
            r(s, t.length - s, []);
            break;
        }
        const a = t[s], l = e[o], c = n(a, l);
        c === 0 ? (s += 1, o += 1) : c < 0 ? (r(s, 1, []), s += 1) : c > 0 && (r(s, 0, [
            l
        ]), o += 1);
    }
    return i;
}
export function ZFt(t, e, n) {
    const i = N0o(t, e, n), r = [], s = [];
    for (const o of i)r.push(...t.slice(o.start, o.start + o.deleteCount)), s.push(...o.toInsert);
    return {
        removed: r,
        added: s
    };
}
export function C_y(t, e, n) {
    if (n === 0) return [];
    const i = t.slice(0, n).sort(e);
    return T_y(t, e, i, n, t.length), i;
}
function T_y(t, e, n, i, r) {
    for(const s = n.length; i < r; i++){
        const o = t[i];
        if (e(o, n[s - 1]) < 0) {
            n.pop();
            const a = t$e(n, (l)=>e(o, l) < 0);
            n.splice(a, 0, o);
        }
    }
}
export function Mm(t) {
    return t.filter((e)=>!!e);
}
export function Fpr(t) {
    let e = 0;
    for(let n = 0; n < t.length; n++)t[n] && (t[e] = t[n], e += 1);
    t.length = e;
}
export function E_y(t, e, n) {
    t.splice(n, 0, t.splice(e, 1)[0]);
}
export function L0o(t) {
    return !Array.isArray(t) || t.length === 0;
}
export function CC(t) {
    return Array.isArray(t) && t.length > 0;
}
export function kk(t, e = (n)=>n) {
    const n = new Set;
    return t.filter((i)=>{
        const r = e(i);
        return n.has(r) ? !1 : (n.add(r), !0);
    });
}
export function I_y(t) {
    const e = new Set;
    return (n)=>{
        const i = t(n);
        return e.has(i) ? !1 : (e.add(i), !0);
    };
}
export function x_y(t, e, n = (i, r)=>i === r) {
    let i = 0;
    for(let r = 0, s = Math.min(t.length, e.length); r < s && n(t[r], e[r]); r++)i++;
    return i;
}
export function Dte(t, e) {
    let n = typeof e == "number" ? t : 0;
    typeof e == "number" ? n = t : (n = 0, e = t);
    const i = [];
    if (n <= e) for(let r = n; r < e; r++)i.push(r);
    else for(let r = n; r > e; r--)i.push(r);
    return i;
}
export function GXn(t, e, n) {
    return t.reduce((i, r)=>(i[e(r)] = n ? n(r) : r, i), Object.create(null));
}
export function O0o(t, e) {
    return t.push(e), ()=>F0o(t, e);
}
export function F0o(t, e) {
    const n = t.indexOf(e);
    if (n > -1) return t.splice(n, 1), e;
}
export function qXn(t, e, n) {
    const i = t.slice(0, e), r = t.slice(e);
    return i.concat(n, r);
}
export function B0o(t, e) {
    let n;
    if (typeof e == "number") {
        let i = e;
        n = ()=>{
            const r = Math.sin(i++) * 179426549;
            return r - Math.floor(r);
        };
    } else n = Math.random;
    for(let i = t.length - 1; i > 0; i -= 1){
        const r = Math.floor(n() * (i + 1)), s = t[i];
        t[i] = t[r], t[r] = s;
    }
}
export function U0o(t, e) {
    const n = t.indexOf(e);
    n > -1 && (t.splice(n, 1), t.unshift(e));
}
export function Bpr(t, e) {
    const n = t.indexOf(e);
    n > -1 && (t.splice(n, 1), t.push(e));
}
export function j0o(t, e) {
    for (const n of e)t.push(n);
}
export function A_y(t, e) {
    return Array.isArray(t) ? t.map(e) : e(t);
}
export function Nte(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
export function Upr(t, e, n) {
    const i = uYu(t, e), r = t.length, s = n.length;
    t.length = r + s;
    for(let o = r - 1; o >= i; o--)t[o + s] = t[o];
    for(let o = 0; o < s; o++)t[o + i] = n[o];
}
export function jpr(t, e, n, i) {
    const r = uYu(t, e);
    let s = t.splice(r, n);
    return s === void 0 && (s = []), Upr(t, r, i), s;
}
function uYu(t, e) {
    return e < 0 ? Math.max(e + t.length, 0) : Math.min(e, t.length);
}
export function I5(t, e) {
    return (n, i)=>e(t(n), t(i));
}
export function dYu(...t) {
    return (e, n)=>{
        for (const i of t){
            const r = i(e, n);
            if (!Ide.isNeitherLessOrGreaterThan(r)) return r;
        }
        return Ide.neitherLessOrGreaterThan;
    };
}
export function hYu(t) {
    return (e, n)=>-t(e, n);
}
export function R_y(t) {
    return (e, n)=>e === void 0 ? n === void 0 ? Ide.neitherLessOrGreaterThan : Ide.lessThan : n === void 0 ? Ide.greaterThan : t(e, n);
}
export function QFt(t, e, n) {
    let i = t.get(e);
    return i === void 0 && (i = n, t.set(e, i)), i;
}
export function P_y(t) {
    return Array.isArray(t);
}
export function $0o(t, e) {
    if (t === e) return !0;
    if (t.size !== e.size) return !1;
    for (const [n, i] of t)if (!e.has(n) || e.get(n) !== i) return !1;
    for (const [n] of e)if (!t.has(n)) return !1;
    return !0;
}
export function adn(t, e) {
    if (!t) throw new Error(e ? `Assertion failed (${e})` : "Assertion Failed");
}
export function rO(t, e = "Unreachable") {
    throw new Error(e);
}
export function q0o(t, e = "unexpected state") {
    if (!t) throw typeof e == "string" ? new xh(`Assertion Failed: ${e}`) : e;
}
export function SYu(t, e = "Soft Assertion Failed") {
    t || xr(new xh(e));
}
export function xde(t) {
    if (!t()) {
        debugger;
        t(), xr(new xh("Assertion Failed"));
    }
}
export function i$e(t, e) {
    let n = 0;
    for(; n < t.length - 1;){
        const i = t[n], r = t[n + 1];
        if (!e(i, r)) return !1;
        n++;
    }
    return !0;
}
export function Yo(t) {
    return typeof t == "string";
}
export function r$e(t) {
    return Array.isArray(t) && t.every((e)=>Yo(e));
}
export function wf(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t) && !(t instanceof RegExp) && !(t instanceof Date);
}
export function M_y(t) {
    const e = Object.getPrototypeOf(Uint8Array);
    return typeof t == "object" && t instanceof e;
}
export function zR(t) {
    return typeof t == "number" && !isNaN(t);
}
export function z0o(t) {
    return !!t && typeof t[Symbol.iterator] == "function";
}
export function dP(t) {
    return t === !0 || t === !1;
}
export function Ov(t) {
    return typeof t > "u";
}
export function $m(t) {
    return !Yw(t);
}
export function Yw(t) {
    return Ov(t) || t === null;
}
export function Kv(t, e) {
    if (!t) throw new Error(e ? `Unexpected type, expected '${e}'` : "Unexpected type");
}
export function Md(t) {
    return q0o(t != null, "Argument is `undefined` or `null`."), t;
}
export function Ske(...t) {
    const e = [];
    for(let n = 0; n < t.length; n++){
        const i = t[n];
        if (Yw(i)) throw new Error(`Assertion Failed: argument at index ${n} is undefined or null`);
        e.push(i);
    }
    return e;
}
export function xOe(t) {
    if (!wf(t)) return !1;
    for(const e in t)if (CYu.call(t, e)) return !1;
    return !0;
}
export function Fvt(t) {
    return typeof t == "function";
}
export function kYu(...t) {
    return t.length > 0 && t.every(Fvt);
}
export function wYu(t, e) {
    const n = Math.min(t.length, e.length);
    for(let i = 0; i < n; i++)D_y(t[i], e[i]);
}
function D_y(t, e) {
    if (Yo(e)) {
        if (typeof t !== e) throw new Error(`argument does not match constraint: typeof ${e}`);
    } else if (Fvt(e)) {
        try {
            if (t instanceof e) return;
        } catch  {}
        if (!Yw(t) && t.constructor === e || e.length === 1 && e.call(void 0, t) === !0) return;
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
function tTx(t) {
    return t;
}
export function ldn(t, e) {
    if (pet?.onLifecycleMisuse?.(t, e), !cdn) return;
    const n = `${e}\0${t.stack ?? ""}`;
    Gpr.has(n) || Gpr.size >= xYu || (Gpr.add(n), cdn(t, e));
}
export function V0o(t) {
    ldn(t, "disposable_post_dispose_set");
}
export function N_y(t) {
    if (globalThis.Object !== Object || (EYu() && console.warn(`[LEAKED DISPOSABLE] ${t}`), !cdn || qpr.has(t) || qpr.size >= AYu)) return;
    qpr.add(t);
    const e = t.split(`
`).slice(1).find((i)=>!i.match(/common\/(lifecycle|event)/)), n = new Error(`[LEAKED DISPOSABLE] ${e}`);
    n.stack = t, cdn(n, "disposable_leak");
}
export function Wpr(t) {
    pet = t;
}
export function het(t) {
    return pet?.trackDisposable(t), t;
}
export function AOe(t) {
    pet?.markAsDisposed(t);
}
export function JFt(t, e) {
    pet?.setParent(t, e);
}
function L_y(t, e) {
    if (pet) for (const n of t)pet.setParent(n, e);
}
export function m4(t) {
    return pet?.markAsSingleton(t), t;
}
export function kke(t) {
    return typeof t == "object" && t !== null && typeof t.dispose == "function" && t.dispose.length === 0;
}
export function Nc(t) {
    if (np.is(t)) {
        let e;
        for (const n of t)if (n) try {
            n.dispose();
        } catch (i) {
            (e ??= []).push(i);
        }
        if (e !== void 0) throw e.length === 1 ? e[0] : new AggregateError(e, "Encountered errors while disposing of store");
        return Array.isArray(t) ? [] : t;
    } else if (t) return t.dispose(), t;
}
export function m1(...t) {
    Nc(t);
}
export function N1(...t) {
    const e = Pn(()=>Nc(t));
    return L_y(t, e), e;
}
export function Pn(t) {
    const e = het({
        dispose: mQ(()=>{
            AOe(e), t();
        })
    });
    return e;
}
export function O_y(t, e) {
    let n = !1;
    return t.then((i)=>{
        n || e(i);
    }), Pn(()=>{
        n = !0;
    });
}
export function bve(t, e) {
    return t.then((n)=>(e.isDisposed ? n.dispose() : e.add(n), n));
}
export function BYu() {
    return (jYu++).toString(16).padStart(3, "0");
}
export function Cke(t) {
    const e = new El;
    let n;
    t && (t.aborted ? e.cancel() : (n = ()=>e.cancel(), t.addEventListener("abort", n, {
        once: !0
    })));
    const i = ()=>{
        t && n && t.removeEventListener("abort", n), e.dispose();
    };
    return {
        get token () {
            return e.token;
        },
        dispose: i,
        [Symbol.dispose]: i
    };
}
export function e6t(t) {
    const e = new El;
    return t.add({
        dispose () {
            e.cancel();
        }
    }), e.token;
}
export function rCo() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
export function XXn() {
    return globalThis._VSCODE_NLS_LANGUAGE;
}
function emr(t, e) {
    let n;
    return e.length === 0 ? n = t : n = t.replace(/\{(\d+)\}/g, (i, r)=>{
        const s = parseInt(r, 10), o = e[s];
        let a = i;
        return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
    }), XYu && (n = "\uFF3B" + n.replace(/[aouei]/g, "$&$&") + "\uFF3D"), n;
}
export function D(t, e, ...n) {
    return emr(typeof t == "number" ? YYu(t, e) : e, n);
}
function YYu(t, e) {
    const n = rCo()?.[t];
    if (typeof n != "string") {
        if (typeof e == "string") return e;
        throw new Error(`!!! NLS MISSING: ${t} !!!`);
    }
    return n;
}
export function At(t, e, ...n) {
    let i;
    typeof t == "number" ? i = YYu(t, e) : i = e;
    const r = emr(i, n);
    return {
        value: r,
        original: e === i ? r : emr(e, n)
    };
}
export function tmr(t) {
    switch(t){
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
export function sCo() {
    if (!_Co) {
        _Co = !0;
        const t = new Uint8Array(2);
        t[0] = 1, t[1] = 2, vCo = new Uint16Array(t.buffer)[0] === 513;
    }
    return vCo;
}
export function oCo(t) {
    return parseFloat(t) >= 25;
}
export function F_y(t) {
    eZn = t;
}
export function ZYu() {
    return eZn ?? "unknown";
}
export function QYu() {
    return !t6t || eZn === void 0 ? !1 : oCo(eZn);
}
function B_y(t, e) {
    if (t === null || typeof t != "object") throw new kCo(e, "Object", t);
}
export function kj(t, e) {
    if (typeof t != "string") throw new kCo(e, "string", t);
}
export function eT(t) {
    return t === iY || t === Rde;
}
export function SCo(t) {
    return t === iY;
}
export function get(t) {
    return t >= lXu && t <= uXu || t >= cXu && t <= dXu;
}
export function lmr(t, e, n, i) {
    let r = "", s = 0, o = -1, a = 0, l = 0;
    for(let c = 0; c <= t.length; ++c){
        if (c < t.length) l = t.charCodeAt(c);
        else {
            if (i(l)) break;
            l = iY;
        }
        if (i(l)) {
            if (!(o === c - 1 || a === 1)) if (a === 2) {
                if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== Uvt || r.charCodeAt(r.length - 2) !== Uvt) {
                    if (r.length > 2) {
                        const u = r.lastIndexOf(n);
                        u === -1 ? (r = "", s = 0) : (r = r.slice(0, u), s = r.length - 1 - r.lastIndexOf(n)), o = c, a = 0;
                        continue;
                    } else if (r.length !== 0) {
                        r = "", s = 0, o = c, a = 0;
                        continue;
                    }
                }
                e && (r += r.length > 0 ? `${n}..` : "..", s = 2);
            } else r.length > 0 ? r += `${n}${t.slice(o + 1, c)}` : r = t.slice(o + 1, c), s = c - o - 1;
            o = c, a = 0;
        } else l === Uvt && a !== -1 ? ++a : a = -1;
    }
    return r;
}
function U_y(t) {
    return t ? `${t[0] === "." ? "" : "."}${t}` : "";
}
export function aXu(t, e) {
    B_y(e, "pathObject");
    const n = e.dir || e.root, i = e.base || `${e.name || ""}${U_y(e.ext)}`;
    return n ? n === e.root ? `${n}${i}` : `${n}${t}${i}` : i;
}
export function mXu(t) {
    return t;
}
export function W_y(t) {
    if (!t || (t = t.replace(/\r\n/g, `
`), !t.includes("\r"))) return t;
    const e = t.split(`
`), n = [];
    for (const i of e){
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
export function vdn(t, e) {
    return t && t.replace(/\r\n|\n|\r/g, e);
}
export function fXu(t) {
    if (!t) return t;
    const e = t.indexOf("@");
    if (e === -1) return t;
    const n = t.substring(0, e), i = t.substring(e + 1);
    if (n.length === 0 || i.length === 0) return t;
    const r = n.charAt(0) + "***", s = i.indexOf(".");
    if (s === -1) return `${r}@${i.charAt(0)}***`;
    const o = i.substring(0, s), a = i.substring(s), l = o.charAt(0) + "***" + a;
    return `${r}@${l}`;
}
export function Vq(t) {
    return !t || typeof t != "string" ? !0 : t.trim().length === 0;
}
export function rY(t, ...e) {
    return e.length === 0 ? t : t.replace(IXu, function(n, i) {
        const r = parseInt(i, 10);
        return isNaN(r) || r < 0 || r >= e.length ? n : e[r];
    });
}
export function r6t(t, e) {
    return Object.keys(e).length === 0 ? t : t.replace(xXu, (n, i)=>e[i] ?? n);
}
export function G_y(t) {
    return t.replace(/[<>"'&]/g, (e)=>{
        switch(e){
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
        return e;
    });
}
export function tW(t) {
    return t.replace(/[<>&]/g, function(e) {
        switch(e){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return e;
        }
    });
}
export function dA(t) {
    return t.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
export function _Xu(t, e) {
    let n = 0, i = t.indexOf(e);
    for(; i !== -1;)n++, i = t.indexOf(e, i + e.length);
    return n;
}
export function _dn(t, e, n = "\u2026") {
    return t.length <= e ? t : `${t.substr(0, e)}${n}`;
}
export function q_y(t, e, n = "\u2026") {
    if (t.length <= e) return t;
    const i = Math.ceil(e / 2) - n.length / 2, r = Math.floor(e / 2) - n.length / 2;
    return `${t.substr(0, i)}${n}${t.substr(t.length - r)}`;
}
export function fet(t, e = " ") {
    const n = nZn(t, e);
    return Eke(n, e);
}
export function nZn(t, e) {
    if (!t || !e) return t;
    const n = e.length;
    let i = 0;
    if (n === 1) {
        const r = e.charCodeAt(0);
        for(; i < t.length && t.charCodeAt(i) === r;)i++;
    } else for(; t.startsWith(e, i);)i += n;
    return t.substring(i);
}
export function Eke(t, e) {
    if (!t || !e) return t;
    const n = e.length, i = t.length;
    if (n === 1) {
        let s = i;
        const o = e.charCodeAt(0);
        for(; s > 0 && t.charCodeAt(s - 1) === o;)s--;
        return t.substring(0, s);
    }
    let r = i;
    for(; r > 0 && t.endsWith(e, r);)r -= n;
    return t.substring(0, r);
}
export function z_y(t) {
    return t.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*");
}
export function bXu(t) {
    return t.replace(/\*/g, "");
}
export function cmr(t, e, n = {}) {
    if (!t) throw new Error("Cannot create regex from empty string");
    e || (t = dA(t)), n.wholeWord && (/\B/.test(t.charAt(0)) || (t = "\\b" + t), /\B/.test(t.charAt(t.length - 1)) || (t = t + "\\b"));
    let i = "";
    return n.global && (i += "g"), n.matchCase || (i += "i"), n.multiline && (i += "m"), n.unicode && (i += "u"), new RegExp(t, i);
}
export function V_y(t) {
    return t.source === "^" || t.source === "^$" || t.source === "$" || t.source === "^\\s*$" ? !1 : !!(t.exec("") && t.lastIndex === 0);
}
export function ww(t) {
    return t.split(/\r\n|\r|\n/);
}
export function sY(t) {
    for(let e = 0, n = t.length; e < n; e++){
        const i = t.charCodeAt(e);
        if (i !== 32 && i !== 9) return e;
    }
    return -1;
}
export function EI(t, e = 0, n = t.length) {
    for(let i = e; i < n; i++){
        const r = t.charCodeAt(i);
        if (r !== 32 && r !== 9) return t.substring(e, i);
    }
    return t.substring(e, n);
}
export function Jxe(t, e = t.length - 1) {
    for(let n = e; n >= 0; n--){
        const i = t.charCodeAt(n);
        if (i !== 32 && i !== 9) return n;
    }
    return -1;
}
export function K_y(t) {
    const e = sY(t);
    return e === -1 ? t.length : e;
}
export function fQ(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}
export function umr(t, e, n = 0, i = t.length, r = 0, s = e.length) {
    for(; n < i && r < s; n++, r++){
        const l = t.charCodeAt(n), c = e.charCodeAt(r);
        if (l < c) return -1;
        if (l > c) return 1;
    }
    const o = i - n, a = s - r;
    return o < a ? -1 : o > a ? 1 : 0;
}
export function eAe(t, e) {
    return s6t(t, e, 0, t.length, 0, e.length);
}
export function s6t(t, e, n = 0, i = t.length, r = 0, s = e.length) {
    for(; n < i && r < s; n++, r++){
        let l = t.charCodeAt(n), c = e.charCodeAt(r);
        if (l === c) continue;
        if (l >= 128 || c >= 128) return umr(t.toLowerCase(), e.toLowerCase(), n, i, r, s);
        jvt(l) && (l -= 32), jvt(c) && (c -= 32);
        const u = l - c;
        if (u !== 0) return u;
    }
    const o = i - n, a = s - r;
    return o < a ? -1 : o > a ? 1 : 0;
}
export function dmr(t) {
    return t >= 48 && t <= 57;
}
export function jvt(t) {
    return t >= 97 && t <= 122;
}
export function tAe(t) {
    return t >= 65 && t <= 90;
}
export function Zw(t, e) {
    return t.length === e.length && s6t(t, e) === 0;
}
export function $vt(t, e) {
    const n = e.length;
    return e.length > t.length ? !1 : s6t(t, e, 0, n) === 0;
}
export function Y_y(t, e) {
    const n = t.length, i = n - e.length;
    return i >= 0 && s6t(t, e, i, n) === 0;
}
export function Ike(t, e) {
    const n = Math.min(t.length, e.length);
    let i;
    for(i = 0; i < n; i++)if (t.charCodeAt(i) !== e.charCodeAt(i)) return i;
    return n;
}
export function bdn(t, e) {
    const n = Math.min(t.length, e.length);
    let i;
    const r = t.length - 1, s = e.length - 1;
    for(i = 0; i < n; i++)if (t.charCodeAt(r - i) !== e.charCodeAt(s - i)) return i;
    return n;
}
export function K9(t) {
    return 55296 <= t && t <= 56319;
}
export function o6t(t) {
    return 56320 <= t && t <= 57343;
}
export function CCo(t, e) {
    return (t - 55296 << 10) + (e - 56320) + 65536;
}
export function hmr(t, e, n) {
    const i = t.charCodeAt(n);
    if (K9(i) && n + 1 < e) {
        const r = t.charCodeAt(n + 1);
        if (o6t(r)) return CCo(i, r);
    }
    return i;
}
export function X_y(t, e) {
    const n = t.charCodeAt(e - 1);
    if (o6t(n) && e > 1) {
        const i = t.charCodeAt(e - 2);
        if (K9(i)) return CCo(i, n);
    }
    return n;
}
export function TCo(t, e) {
    return new sZn(t, e).nextGraphemeLength();
}
export function yXu(t, e) {
    return new sZn(t, e).prevGraphemeLength();
}
export function SXu(t, e) {
    e > 0 && o6t(t.charCodeAt(e)) && e--;
    const n = e + TCo(t, e);
    return [
        n - yXu(t, n),
        n
    ];
}
function Z_y() {
    return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
export function Hvt(t) {
    return pmr || (pmr = Z_y()), pmr.test(t);
}
export function a6t(t) {
    return AXu.test(t);
}
export function kXu(t) {
    return ACo.test(t);
}
export function Wvt(t) {
    return t >= 11904 && t <= 55215 || t >= 63744 && t <= 64255 || t >= 65281 && t <= 65374;
}
export function ECo(t) {
    return t >= 127462 && t <= 127487 || t === 8986 || t === 8987 || t === 9200 || t === 9203 || t >= 9728 && t <= 10175 || t === 11088 || t === 11093 || t >= 127744 && t <= 128591 || t >= 128640 && t <= 128764 || t >= 128992 && t <= 129008 || t >= 129280 && t <= 129535 || t >= 129648 && t <= 129782;
}
export function wXu(t, e, n = "") {
    const i = t.trimStart();
    if (i.length < e) return i;
    const r = /\b/g;
    let s = 0;
    for(; r.test(i) && !(i.length - r.lastIndex < e);)s = r.lastIndex, r.lastIndex += 1;
    return s === 0 ? i : n + i.substring(s).trimStart();
}
export function iZn(t) {
    return t && (t = t.replace(DXu, "")), t;
}
export function Q_y(t) {
    return iZn(t).replace(NXu, "");
}
export function CXu(t) {
    return !!(t && t.length > 0 && t.charCodeAt(0) === 65279);
}
export function ICo(t, e) {
    if (!t || !e || t.length < e.length) return !1;
    const n = e.length, i = t.toLowerCase();
    let r = 0, s = -1;
    for(; r < n;){
        const o = i.indexOf(e[r], s + 1);
        if (o < 0) return !1;
        s = o, r++;
    }
    return !0;
}
export function xCo(t, e = !1) {
    return t ? (e && (t = t.replace(/\\./g, "")), t.toLowerCase() !== t) : !1;
}
export function J_y(t, e = 1) {
    if (e === 0) return "";
    let n = -1;
    do n = t.indexOf(`
`, n + 1), e--;
    while (e > 0 && n >= 0)
    return n === -1 ? t : (t[n - 1] === "\r" && n--, t.substr(0, n));
}
export function TXu(t) {
    return t = t % 52, t < 26 ? String.fromCharCode(97 + t) : String.fromCharCode(65 + t - 26);
}
export function EXu(t, e) {
    return t === 0 ? e !== 5 && e !== 7 : t === 2 && e === 3 ? !1 : t === 4 || t === 2 || t === 3 || e === 4 || e === 2 || e === 3 ? !0 : !(t === 8 && (e === 8 || e === 9 || e === 11 || e === 12) || (t === 11 || t === 9) && (e === 9 || e === 10) || (t === 12 || t === 10) && e === 10 || e === 5 || e === 13 || e === 7 || t === 1 || t === 13 && e === 14 || t === 6 && e === 6);
}
export function eby() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
export function tby(t, e) {
    if (t === 0) return 0;
    const n = nby(t, e);
    if (n !== void 0) return n;
    const i = new rZn(e, t);
    return i.prevCodePoint(), i.offset;
}
function nby(t, e) {
    const n = new rZn(e, t);
    let i = n.prevCodePoint();
    for(; iby(i) || i === 65039 || i === 8419;){
        if (n.offset === 0) return;
        i = n.prevCodePoint();
    }
    if (!ECo(i)) return;
    let r = n.offset;
    return r > 0 && n.prevCodePoint() === 8205 && (r = n.offset), r;
}
function iby(t) {
    return 127995 <= t && t <= 127999;
}
function qvt(t) {
    return t === 47 || t === 92;
}
export function l6t(t) {
    return t.replace(/[\\/]/g, lh.sep);
}
export function OXu(t) {
    return t.indexOf("/") === -1 && (t = l6t(t)), /^[a-zA-Z]:(\/|$)/.test(t) && (t = "/" + t), t;
}
export function DCo(t, e = lh.sep) {
    if (!t) return "";
    const n = t.length, i = t.charCodeAt(0);
    if (qvt(i)) {
        if (qvt(t.charCodeAt(1)) && !qvt(t.charCodeAt(2))) {
            let s = 3;
            const o = s;
            for(; s < n && !qvt(t.charCodeAt(s)); s++);
            if (o !== s && !qvt(t.charCodeAt(s + 1))) {
                for(s += 1; s < n; s++)if (qvt(t.charCodeAt(s))) return t.slice(0, s + 1).replace(/[\\/]/g, e);
            }
        }
        return e;
    } else if (FXu(i) && t.charCodeAt(1) === 58) return qvt(t.charCodeAt(2)) ? t.slice(0, 2) + e : t.slice(0, 2);
    let r = t.indexOf("://");
    if (r !== -1) {
        for(r += 3; r < n; r++)if (qvt(t.charCodeAt(r))) return t.slice(0, r + 1);
    }
    return "";
}
export function c6t(t) {
    if (!xa || !t || t.length < 5) return !1;
    let e = t.charCodeAt(0);
    if (e !== 92 || (e = t.charCodeAt(1), e !== 92)) return !1;
    let n = 2;
    const i = n;
    for(; n < t.length && (e = t.charCodeAt(n), e !== 92); n++);
    return !(i === n || (e = t.charCodeAt(n + 1), isNaN(e) || e === 92));
}
export function fmr(t, e = xa) {
    const n = e ? BXu : UXu;
    return !(!t || t.length === 0 || /^\s+$/.test(t) || (n.lastIndex = 0, n.test(t)) || e && jXu.test(t) || t === "." || t === ".." || e && t[t.length - 1] === "." || e && t.length !== t.trim().length || t.length > 255);
}
export function vmr(t, e, n) {
    const i = t === e;
    return !n || i ? i : !t || !e ? !1 : Zw(t, e);
}
function rby(t, e, n) {
    return n === 0 ? !0 : t.charCodeAt(0) !== e.charCodeAt(0) ? !1 : n === 1 ? !0 : t.charCodeAt(n - 1) !== e.charCodeAt(n - 1) ? !1 : t.startsWith(e);
}
function sby(t, e, n) {
    for(let i = 0; i < n; i++){
        let r = t.charCodeAt(i), s = e.charCodeAt(i);
        if (r !== s) {
            if (r >= 128 || s >= 128) return s6t(t, e, i, n, i, n) === 0;
            if (r >= 97 && r <= 122 && (r -= 32), s >= 97 && s <= 122 && (s -= 32), r !== s) return !1;
        }
    }
    return !0;
}
export function c$e(t, e, n, i = g1) {
    if (t === e) return !0;
    if (!t || !e) return !1;
    const r = t.length, s = e.length;
    if (s > r) return !1;
    const o = i.charCodeAt(0), a = e.charCodeAt(s - 1) === o;
    if (s < r && !a && t.charCodeAt(s) !== o) return !1;
    if (n) {
        if (!sby(t, e, s)) return !1;
    } else if (!rby(t, e, s)) return !1;
    return s === r || a ? !0 : t.charCodeAt(s) === o;
}
function FXu(t) {
    return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
export function _mr(t) {
    return xa ? (t = Eke(t, g1), t.endsWith(":") && (t += g1)) : (t = Eke(t, g1), t || (t = g1)), t;
}
export function oZn(t, e = xa) {
    return e ? FXu(t.charCodeAt(0)) && t.charCodeAt(1) === 58 : !1;
}
export function oby(t, e = xa) {
    return oZn(t, e) ? t[0] : void 0;
}
export function NCo(t, e, n) {
    return e.length > t.length ? -1 : t === e ? 0 : (n && (t = t.toLowerCase(), e = e.toLowerCase()), t.indexOf(e));
}
export function aby(t) {
    const e = t.split(":");
    let n, i, r;
    for (const s of e){
        const o = Number(s);
        zR(o) ? i === void 0 ? i = o : r === void 0 && (r = o) : n = n ? [
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
export function LCo(t, e, n = 8) {
    let i = "";
    for(let s = 0; s < n; s++){
        let o;
        s === 0 && xa && !e && (n === 3 || n === 4) ? o = HXu : o = $Xu, i += o.charAt(Math.floor(Math.random() * o.length));
    }
    let r;
    return e ? r = `${e}-${i}` : r = i, t ? Z0(t, r) : r;
}
export function Sdn(t) {
    const e = t;
    return e ? [
        e.on,
        e.pause,
        e.resume,
        e.destroy
    ].every((n)=>typeof n == "function") : !1;
}
export function OCo(t) {
    const e = t;
    return e ? Sdn(e.stream) && Array.isArray(e.buffer) && typeof e.ended == "boolean" : !1;
}
export function vet(t, e) {
    return new GXu(t, e);
}
function lby(t, e) {
    const n = [];
    let i;
    for(; (i = t.read()) !== null;)n.push(i);
    return e(n);
}
export function cby(t, e, n) {
    const i = [];
    let r;
    for(; (r = t.read()) !== null && i.length < n;)i.push(r);
    return r === null && i.length > 0 ? e(i) : {
        read: ()=>{
            if (i.length > 0) return i.shift();
            if (typeof r < "u") {
                const s = r;
                return r = void 0, s;
            }
            return t.read();
        }
    };
}
export function FCo(t, e) {
    return new Promise((n, i)=>{
        const r = [];
        _et(t, {
            onData: (s)=>{
                e && r.push(s);
            },
            onError: (s)=>{
                e ? i(s) : n(void 0);
            },
            onEnd: ()=>{
                n(e ? e(r) : void 0);
            }
        });
    });
}
export function _et(t, e, n) {
    t.on("error", (i)=>{
        n?.isCancellationRequested || e.onError(i);
    }), t.on("end", ()=>{
        n?.isCancellationRequested || e.onEnd();
    }), t.on("data", (i)=>{
        n?.isCancellationRequested || e.onData(i);
    });
}
export function WXu(t, e) {
    return new Promise((n, i)=>{
        const r = new Nt, s = [], o = (c)=>{
            if (s.push(c), s.length > e) return r.dispose(), t.pause(), n({
                stream: t,
                buffer: s,
                ended: !1
            });
        }, a = (c)=>(r.dispose(), i(c)), l = ()=>(r.dispose(), n({
                stream: t,
                buffer: s,
                ended: !0
            }));
        r.add(Pn(()=>t.removeListener("error", a))), t.on("error", a), r.add(Pn(()=>t.removeListener("end", l))), t.on("end", l), r.add(Pn(()=>t.removeListener("data", o))), t.on("data", o);
    });
}
function uby(t, e) {
    const n = vet(e);
    return n.end(t), n;
}
export function dby() {
    const t = vet(()=>{
        throw new Error("not supported");
    });
    return t.end(), t;
}
function hby(t) {
    let e = !1;
    return {
        read: ()=>e ? null : (e = !0, t)
    };
}
export function pby(t, e, n) {
    const i = vet(n);
    return _et(t, {
        onData: (r)=>i.write(e.data(r)),
        onError: (r)=>i.error(e.error ? e.error(r) : r),
        onEnd: ()=>i.end()
    }), i;
}
function mby(t, e, n) {
    let i = !1;
    return {
        read: ()=>{
            const r = e.read();
            return i ? r : (i = !0, r !== null ? n([
                t,
                r
            ]) : t);
        }
    };
}
function gby(t, e, n) {
    let i = !1;
    const r = vet(n);
    return _et(e, {
        onData: (s)=>i ? r.write(s) : (i = !0, r.write(n([
                t,
                s
            ]))),
        onError: (s)=>r.error(s),
        onEnd: ()=>{
            i || (i = !0, r.write(t)), r.end();
        }
    }), r;
}
export function zvt(t, e) {
    const n = ymr;
    ymr = t;
    try {
        return e();
    } finally{
        ymr = n;
    }
}
export function fby() {
    return ymr;
}
export function qXu(t) {
    WCo = t;
}
export function vby(t) {
    GCo = t;
}
export function zXu(t) {
    qCo = t;
}
export function VXu(t) {
    zCo = t;
}
export function KXu(t, e) {
    if (zCo && t.byteLength >= qCo) try {
        zCo({
            buffer: t,
            byteLength: t.byteLength,
            source: e
        });
    } catch  {}
}
export function _by(t, e, n = 0) {
    const i = e.byteLength, r = t.byteLength;
    if (i === 0) return 0;
    if (i === 1) return t.indexOf(e[0]);
    if (i > r - n) return -1;
    const s = QXu.value;
    s.fill(e.length);
    for(let c = 0; c < e.length; c++)s[e[c]] = e.length - c - 1;
    let o = n + e.length - 1, a = o, l = -1;
    for(; o < r;)if (t[o] === e[a]) {
        if (a === 0) {
            l = o;
            break;
        }
        o--, a--;
    } else o += Math.max(e.length - a, s[t[o]]), a = e.length - 1;
    return l;
}
export function bby(t, e) {
    return t[e + 0] << 0 >>> 0 | t[e + 1] << 8 >>> 0;
}
export function yby(t, e, n) {
    t[n + 0] = e & 255, e = e >>> 8, t[n + 1] = e & 255;
}
export function Nse(t, e) {
    return t[e] * 2 ** 24 + t[e + 1] * 2 ** 16 + t[e + 2] * 2 ** 8 + t[e + 3];
}
export function Lse(t, e, n) {
    t[n + 3] = e, e = e >>> 8, t[n + 2] = e, e = e >>> 8, t[n + 1] = e, e = e >>> 8, t[n] = e;
}
export function Sby(t, e) {
    return t[e + 0] << 0 >>> 0 | t[e + 1] << 8 >>> 0 | t[e + 2] << 16 >>> 0 | t[e + 3] << 24 >>> 0;
}
export function kby(t, e, n) {
    t[n + 0] = e & 255, e = e >>> 8, t[n + 1] = e & 255, e = e >>> 8, t[n + 2] = e & 255, e = e >>> 8, t[n + 3] = e & 255;
}
export function BCo(t, e) {
    return t[e];
}
export function UCo(t, e, n) {
    t[n] = e;
}
export function YXu(t) {
    return lby(t, (e)=>Tr.concat(e));
}
export function XXu(t) {
    return hby(t);
}
export function Kq(t) {
    return FCo(t, (e)=>e.length === 1 ? e[0] : Tr.concat(e));
}
export async function wby(t) {
    return t.ended ? Tr.concat(t.buffer) : Tr.concat([
        ...t.buffer,
        await Kq(t.stream)
    ]);
}
export function Vvt(t) {
    return uby(t, (e)=>Tr.concat(e));
}
export function jCo(t) {
    return vet((e)=>Tr.concat(e), t);
}
export function Cby(t, e) {
    return mby(t, e, (n)=>Tr.concat(n));
}
export function ZXu(t, e) {
    return gby(t, e, (n)=>Tr.concat(n));
}
export function N3(t) {
    let e = 0, n = 0, i = 0;
    const r = new Uint8Array(Math.floor(t.length / 4 * 3)), s = (a)=>{
        switch(n){
            case 3:
                r[i++] = e | a, n = 0;
                break;
            case 2:
                r[i++] = e | a >>> 2, e = a << 6, n = 3;
                break;
            case 1:
                r[i++] = e | a >>> 4, e = a << 4, n = 2;
                break;
            default:
                e = a << 2, n = 1;
        }
    };
    for(let a = 0; a < t.length; a++){
        const l = t.charCodeAt(a);
        if (l >= 65 && l <= 90) s(l - 65);
        else if (l >= 97 && l <= 122) s(l - 97 + 26);
        else if (l >= 48 && l <= 57) s(l - 48 + 52);
        else if (l === 43 || l === 45) s(62);
        else if (l === 47 || l === 95) s(63);
        else {
            if (l === 61) break;
            throw new SyntaxError(`Unexpected base64 character ${t[a]}`);
        }
    }
    const o = i;
    for(; n > 0;)s(0);
    return Tr.wrap(r).slice(0, o);
}
export function kdn(t) {
    const e = t.split(".")[1], n = N3(e);
    return JSON.parse(n.toString());
}
export function VR({ buffer: t }, e = !0, n = !1) {
    const i = t.toBase64;
    if (typeof i == "function") return i.call(t, {
        alphabet: n ? "base64url" : "base64",
        omitPadding: !e
    });
    const r = n ? tZu : eZu;
    let s = "";
    const o = t.byteLength % 3;
    let a = 0;
    for(; a < t.byteLength - o; a += 3){
        const l = t[a + 0], c = t[a + 1], u = t[a + 2];
        s += r[l >>> 2], s += r[(l << 4 | c >>> 4) & 63], s += r[(c << 2 | u >>> 6) & 63], s += r[u & 63];
    }
    if (o === 1) {
        const l = t[a + 0];
        s += r[l >>> 2], s += r[l << 4 & 63], e && (s += "==");
    } else if (o === 2) {
        const l = t[a + 0], c = t[a + 1];
        s += r[l >>> 2], s += r[(l << 4 | c >>> 4) & 63], s += r[c << 2 & 63], e && (s += "=");
    }
    return s;
}
var GCo, zCo, ymr;
export function Tby(t, e) {
    if (!t.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
    if (t.scheme && !rZu.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (t.path) {
        if (t.authority) {
            if (!sZu.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (oZu.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
}
export function Eby(t, e) {
    return !t && !e ? "file" : t;
}
export function Iby(t, e) {
    switch(t){
        case "https":
        case "http":
        case "file":
            e ? e[0] !== nAe && (e = nAe + e) : e = nAe;
            break;
    }
    return e;
}
export function VCo(t, e) {
    return t.path === e.path && (t.scheme ?? "") === (e.scheme ?? "") && (t.query ?? "") === (e.query ?? "") && (t.fragment ?? "") === (e.fragment ?? "");
}
export function Smr(t) {
    return !t || typeof t != "object" ? !1 : typeof t.scheme == "string" && (typeof t.authority == "string" || typeof t.authority > "u") && (typeof t.path == "string" || typeof t.path > "u") && (typeof t.query == "string" || typeof t.query > "u") && (typeof t.fragment == "string" || typeof t.fragment > "u");
}
function nZu(t, e, n) {
    let i, r = -1;
    for(let s = 0; s < t.length; s++){
        const o = t.charCodeAt(s);
        if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || e && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) r !== -1 && (i += encodeURIComponent(t.substring(r, s)), r = -1), i !== void 0 && (i += t.charAt(s));
        else {
            i === void 0 && (i = t.substr(0, s));
            const a = XCo[o];
            a !== void 0 ? (r !== -1 && (i += encodeURIComponent(t.substring(r, s)), r = -1), i += a) : r === -1 && (r = s);
        }
    }
    return r !== -1 && (i += encodeURIComponent(t.substring(r))), i !== void 0 ? i : t;
}
function xby(t) {
    let e;
    for(let n = 0; n < t.length; n++){
        const i = t.charCodeAt(n);
        i === 35 || i === 63 ? (e === void 0 && (e = t.substr(0, n)), e += XCo[i]) : e !== void 0 && (e += t[n]);
    }
    return e !== void 0 ? e : t;
}
export function u6t(t, e) {
    let n;
    return t.authority && t.path.length > 1 && t.scheme === "file" ? n = `//${t.authority}${t.path}` : t.path.charCodeAt(0) === 47 && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && t.path.charCodeAt(2) === 58 ? e ? n = t.path.substr(1) : n = t.path[1].toLowerCase() + t.path.substr(2) : n = t.path, xa && (n = n.replace(/\//g, "\\")), n;
}
export function KR(t, e, n) {
    try {
        let i = u6t(t, e);
        return n && (i = i.replace(/\\/g, "/")), i;
    } catch  {
        return u6t(t, e);
    }
}
export function KCo(t, e) {
    const n = e ? xby : nZu;
    let i = "", { scheme: r, authority: s, path: o, query: a, fragment: l } = t;
    if (r && (i += r, i += ":"), (s || r === "file") && (i += nAe, i += nAe), s) {
        let c = s.indexOf("@");
        if (c !== -1) {
            const u = s.substr(0, c);
            s = s.substr(c + 1), c = u.lastIndexOf(":"), c === -1 ? i += n(u, !1, !1) : (i += n(u.substr(0, c), !1, !1), i += ":", i += n(u.substr(c + 1), !1, !0)), i += "@";
        }
        s = s.toLowerCase(), c = s.lastIndexOf(":"), c === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, c), !1, !0), i += s.substr(c));
    }
    if (o) {
        if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
            const c = o.charCodeAt(1);
            c >= 65 && c <= 90 && (o = `/${String.fromCharCode(c + 32)}:${o.substr(3)}`);
        } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
            const c = o.charCodeAt(0);
            c >= 65 && c <= 90 && (o = `${String.fromCharCode(c + 32)}:${o.substr(2)}`);
        }
        i += n(o, !0, !1);
    }
    return a && (i += "?", i += n(a, !1, !1)), l && (i += "#", i += e ? l : nZu(l, !1, !1)), i;
}
function iZu(t) {
    try {
        return decodeURIComponent(t);
    } catch  {
        return t.length > 3 ? t.substr(0, 3) + iZu(t.substr(3)) : t;
    }
}
export function kmr(t) {
    return t.match(ZCo) ? t.replace(ZCo, (e)=>iZu(e)) : t;
}
export function Tdn(t) {
    if (t.scheme !== Ot.vscodeNotebookCell) throw new Error(`Expected vscode-notebook-cell scheme, got ${t.scheme}`);
    if (!t.fragment) throw new Error(`Expected notebook fragment, got ${t.fragment}`);
    const e = t.fragment.indexOf("s");
    if (e < 0) throw new Error(`Expected notebook fragment, got ${t.fragment}`);
    const n = N3(t.fragment.substring(e + 1)).toString();
    return t.with({
        scheme: n,
        fragment: null
    });
}
export function xke(t, e) {
    return rt.isUri(t) ? Zw(t.scheme, e) : $vt(t, e + ":");
}
export function h6t(t, ...e) {
    return e.some((n)=>xke(t, n));
}
export function Aby(t) {
    return `${t.quality ?? "oss"}-${t.commit ?? "dev"}`;
}
export function DOe(t) {
    return u6t(t, !0);
}
export function Cmr(t, e) {
    const n = [];
    for(let i = 0; i < t.length; i++){
        const r = e(t[i]);
        t.some((s, o)=>o === i ? !1 : YR(r, e(s))) || n.push(t[i]);
    }
    return n;
}
export function x5(t, e, n) {
    if (e) {
        let i = t.path;
        return i && i[0] !== lh.sep && (i = lh.sep + i), t.with({
            scheme: n,
            authority: e,
            path: i
        });
    }
    return t.with({
        scheme: n
    });
}
export function uZn(t) {
    return !!t && typeof t.then == "function";
}
export function XE(t) {
    const e = new El, n = t(e.token);
    let i = !1;
    const r = new Promise((s, o)=>{
        const a = e.token.onCancellationRequested(()=>{
            i = !0, a.dispose(), o(new Hc);
        });
        Promise.resolve(n).then((l)=>{
            a.dispose(), e.dispose(), i ? kke(l) && l.dispose() : s(l);
        }, (l)=>{
            a.dispose(), e.dispose(), o(l);
        });
    });
    return new class {
        cancel() {
            e.cancel(), e.dispose();
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
export function yx(t, e, n) {
    return new Promise((i, r)=>{
        const s = e.onCancellationRequested(()=>{
            s.dispose(), i(n);
        });
        t.then(i, r).finally(()=>s.dispose());
    });
}
export function aO(t, e) {
    return new Promise((n, i)=>{
        const r = e.onCancellationRequested(()=>{
            r.dispose(), i(new Hc);
        });
        t.then(n, i).finally(()=>r.dispose());
    });
}
export function Mby(t) {
    let e = -1;
    const n = t.map((s, o)=>s.then((a)=>(e = o, a))), i = Promise.race(n);
    i.cancel = ()=>{
        t.forEach((s, o)=>{
            o !== e && s.cancel && s.cancel();
        });
    };
    const r = ()=>i.cancel();
    return i.then(r, r), i;
}
export function Vh(t, e, n) {
    let i;
    const r = setTimeout(()=>{
        i?.(void 0), n?.();
    }, e);
    return Promise.race([
        t.finally(()=>clearTimeout(r)),
        new Promise((s)=>i = s)
    ]);
}
export function LOe() {
    let t, e;
    return {
        promise: new Promise((i, r)=>{
            t = i, e = r;
        }),
        resolve: t,
        reject: e
    };
}
export function Wd(t, e) {
    return e ? new Promise((n, i)=>{
        const r = setTimeout(()=>{
            s.dispose(), n();
        }, t), s = e.onCancellationRequested(()=>{
            clearTimeout(r), s.dispose(), i(new Hc);
        });
    }) : XE((n)=>Wd(t, n));
}
export function Ec(t, e = 0, n) {
    const i = setTimeout(()=>{
        t(), n && r.dispose();
    }, e), r = Pn(()=>{
        clearTimeout(i), n?.delete(r);
    });
    return n?.add(r), r;
}
export function Dby(t) {
    const e = [];
    let n = 0;
    const i = t.length;
    function r() {
        return n < i ? t[n++]() : null;
    }
    function s(o) {
        o != null && e.push(o);
        const a = r();
        return a ? a.then(s) : Promise.resolve(e);
    }
    return Promise.resolve(null).then(s);
}
export function nTo(t, e = (i)=>!!i, n = null) {
    let i = 0;
    const r = t.length, s = ()=>{
        if (i >= r) return Promise.resolve(n);
        const o = t[i++];
        return Promise.resolve(o()).then((l)=>e(l) ? Promise.resolve(l) : s());
    };
    return s();
}
export async function Nby(t, e, n) {
    let i;
    for(let r = 0; r < n; r++)try {
        return await t();
    } catch (s) {
        i = s, await Wd(e);
    }
    throw i;
}
export function Lby(t) {
    const e = new El, n = t(e.token);
    return new _Zu(e, async (i)=>{
        const r = e.token.onCancellationRequested(()=>{
            r.dispose(), e.dispose(), i.reject(new Hc);
        });
        try {
            for await (const s of n){
                if (e.token.isCancellationRequested) return;
                i.emitOne(s);
            }
            r.dispose(), e.dispose();
        } catch (s) {
            r.dispose(), e.dispose(), i.reject(s);
        }
    });
}
export function eR() {
    return globalThis._CURSOR_SENTRY;
}
export function Oby() {
    return {
        send: function(e) {
            const n = eR().buffer;
            return n.length < 64 && n.push(e), Promise.resolve({
                statusCode: 200
            });
        },
        flush: function(e) {
            return Promise.resolve(!0);
        }
    };
}
function Fby() {
    return {
        send: function(t) {
            return eR().transport.send(t);
        },
        flush: function(t) {
            return eR().transport.flush(t);
        }
    };
}
export function Bby() {
    return {
        defaultIntegrations: [],
        dsn: vl.developmentTooling ? yZu : bZu,
        maxBreadcrumbs: 200,
        transport: Fby
    };
}
export function Uby(t) {
    let e;
    const n = [];
    let i;
    return Vje(t, (r, s)=>{
        if (s === "event" || s === "transaction" || s === "feedback") e = Array.isArray(r) ? r[1] : void 0;
        else if (s === "attachment") {
            const [o, a] = r;
            n.push({
                filename: o.filename,
                attachmentType: o.attachment_type,
                contentType: o.content_type,
                data: a
            });
        } else s === "profile" && (i = r[1]);
    }), e ? [
        e,
        n,
        i
    ] : void 0;
}
export { GCo, Ohr, Sa };

export var Iwo = {};
Object.defineProperty(Iwo, "debug", {
    enumerable: true,
    get: ()=>igy
});
Object.defineProperty(Iwo, "error", {
    enumerable: true,
    get: ()=>ogy
});
Object.defineProperty(Iwo, "fatal", {
    enumerable: true,
    get: ()=>agy
});
Object.defineProperty(Iwo, "fmt", {
    enumerable: true,
    get: ()=>Ohr
});
Object.defineProperty(Iwo, "info", {
    enumerable: true,
    get: ()=>rgy
});
Object.defineProperty(Iwo, "trace", {
    enumerable: true,
    get: ()=>ngy
});
Object.defineProperty(Iwo, "warn", {
    enumerable: true,
    get: ()=>sgy
});

import { Sj, bo } from "./arrays.js";
import { gXu, wCo } from "./cache.js";
import { Dvy } from "./cls.js";
import { YFt } from "./collections.js";
import { Mse } from "./functional.js";
import { Kun } from "./getActivationStart.js";
import { fpr } from "./getNavigationEntry.js";
import { u0o } from "./getVisibilityWatcher.js";
import { fh } from "./index_10.js";
import { Uvy } from "./inp.js";
import { Jun } from "./instrument.js";
import { IT } from "./iterator.js";
import { ES, hP } from "./lazy.js";
import { Ovy } from "./lcp.js";
import { a7, tL } from "./linkedList.js";
import { du, odn } from "./map.js";
import { Bt } from "./nls.js";
import { MKu } from "./resourceTiming.js";
import { D3, Xw } from "./stopwatch.js";
import { POe } from "./stream.js";
import { vXu } from "./strings.cursor.js";
import { E } from "./tslib.es6.js";
import { Rse } from "./types.js";
import { zFt } from "./utils_9.js";
var HKu, k0o, Vxe;
var iYu, XFt, HXn, Hc, Mpr, TD, xh, A0o, rYu, R0o, Dpr;
var K0o, cdn, TYu, EYu, IYu, Gpr, xYu, qpr, AYu, RYu, PYu, pet, MYu, Y0o, DYu, X0o, Nt, zpr, st, Vn, NYu, Vpr, udn, LYu, OYu, da;
var Z0o, UYu, en, Ypr, Xpr, Q0o, jYu, $Yu, Zpr, J0o, HYu, VXn, WYu, Qpr, tt, GYu, eCo, KXn, Dse, tCo, nCo, qYu, wke, Jpr, ddn, eY, zYu, VYu;
var met, hdn, t6t, pdn, aCo, lCo, nmr, cCo, imr, uCo, dCo, mdn, ZXn, rmr, hCo, s$e, o$e, Lte, pCo, JYu, TC, QXn, xa, _r, a_, JXn, I0, gdn, th, eXu, tXu, tY, mCo, JH, yve, ROe, bM, Tke, gCo, nXu, fCo, iXu, Ade, rd, Hg, vCo, _Co, smr, bCo, rXu, yCo, sXu, eZn, Xxe, Zxe, oXu;
var IXu, xXu, rZn, sZn, pmr, AXu, ACo, RXu, PXu, MXu, DXu, NXu, LXu, RCo, PCo, mmr, Gvt, gmr, MCo, ydn;
var wdn, QXu, Cdn, $Co, JXu, Kvt, bmr, HCo, WCo, qCo, Tr, eZu, tZu;
export { $Co, $Yu, A0o, ACo, AXu, AYu, Ade, Cdn, DXu, DYu, Dpr, Dse, EYu, GYu, Gpr, Gvt, HCo, HKu, HXn, HYu, Hc, Hg, I0, IXu, IYu, J0o, JH, JXn, JXu, JYu, Jpr, K0o, KXn, Kvt, LXu, LYu, Lte, MCo, MXu, MYu, Mpr, NXu, NYu, Nt, OYu, PCo, PXu, PYu, Q0o, QXn, QXu, Qpr, R0o, RCo, ROe, RXu, RYu, TC, TD, TYu, Tke, Tr, UYu, VXn, VYu, Vn, Vpr, Vxe, WCo, WYu, X0o, XFt, Xpr, Xxe, Y0o, Ypr, Z0o, ZXn, Zpr, Zxe, _Co, _r, aCo, a_, bCo, bM, bmr, cCo, cdn, dCo, da, ddn, eCo, eXu, eY, eZn, eZu, en, fCo, gCo, gdn, gmr, hCo, hdn, iXu, iYu, imr, jYu, k0o, lCo, mCo, mdn, met, mmr, nCo, nXu, nmr, o$e, oXu, pCo, pdn, pet, pmr, qCo, qYu, qpr, rXu, rYu, rZn, rd, rmr, s$e, sXu, sZn, smr, st, t6t, tCo, tXu, tY, tZu, th, tt, uCo, udn, vCo, wdn, wke, xXu, xYu, xa, xh, yCo, ydn, yve, zYu, zpr };
var __wakaru_e_y_initialized = false;
export function e_y() {
if (__wakaru_e_y_initialized) return;
__wakaru_e_y_initialized = true;
"use strict";
E(), fh(), Rse(), Dvy(), Jun(), Ovy(), MKu(), zFt(), Kun(), fpr(), u0o(), Uvy(), HKu = 2147483647, k0o = 0, Vxe = {};

}
var __wakaru_Ei_initialized = false;
export function Ei() {
if (__wakaru_Ei_initialized) return;
__wakaru_Ei_initialized = true;
"use strict";
E(), iYu = class {
    constructor(){
        this.listeners = [], this.unexpectedErrorHandler = function(t) {
            setTimeout(()=>{
                throw t.stack ? TD.isErrorNoTelemetry(t) ? new TD(t.message + `

` + t.stack) : new Error(t.message + `

` + t.stack) : t;
            }, 0);
        };
    }
    addListener(t) {
        return this.listeners.push(t), ()=>{
            this._removeListener(t);
        };
    }
    emit(t) {
        this.listeners.forEach((e)=>{
            e(t);
        });
    }
    _removeListener(t) {
        this.listeners.splice(this.listeners.indexOf(t), 1);
    }
    setUnexpectedErrorHandler(t) {
        this.unexpectedErrorHandler = t;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(t) {
        this.unexpectedErrorHandler(t), this.emit(t);
    }
    onUnexpectedExternalError(t) {
        this.unexpectedErrorHandler(t);
    }
}, XFt = new iYu, HXn = "Canceled", Hc = class extends Error {
    constructor(){
        if (super(HXn), this.name = this.message, Dpr && typeof console < "u" && nYu()) {
            const t = new Error().stack ?? "";
            A0o.some((e)=>t.includes(e)) && console.trace("[DebugCancellation] CancellationError created");
        }
    }
}, Mpr = class extends Error {
    constructor(t){
        super("NotSupported"), t && (this.message = t);
    }
}, TD = class FQc extends Error {
    constructor(e){
        super(e), this.name = "CodeExpectedError";
    }
    static fromError(e) {
        if (e instanceof FQc) return e;
        const n = new FQc;
        return n.message = e.message, n.stack = e.stack, n;
    }
    static isErrorNoTelemetry(e) {
        return e.name === "CodeExpectedError";
    }
}, xh = class jxb extends Error {
    constructor(e){
        super(e || "An unexpected bug occurred."), Object.setPrototypeOf(this, jxb.prototype);
    }
}, A0o = [
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
], rYu = 5e3, R0o = 0, Dpr = !1;

}
var __wakaru_Qe_initialized = false;
export function Qe() {
if (__wakaru_Qe_initialized) return;
__wakaru_Qe_initialized = true;
"use strict";
if (E(), bo(), YFt(), du(), Mse(), IT(), K0o = !1, cdn = void 0, TYu = (t)=>{
    K0o = t;
}, EYu = ()=>K0o, IYu = (t)=>{
    cdn = t;
}, Gpr = new Set, xYu = 50, qpr = new Set, AYu = 50, RYu = 16, PYu = !1, pet = null, MYu = class {
    constructor(){
        this._registry = new FinalizationRegistry(N_y);
    }
    trackDisposable(t) {
        const e = Error, n = e.stackTraceLimit;
        e.stackTraceLimit = RYu;
        const i = new Error("CREATED via:").stack;
        e.stackTraceLimit = n, this._registry.register(t, i, t);
    }
    setParent(t, e) {
        e ? this._registry.unregister(t) : this.trackDisposable(t);
    }
    markAsDisposed(t) {
        this._registry.unregister(t);
    }
    markAsSingleton(t) {
        this._registry.unregister(t);
    }
}, Y0o = class Hxb {
    constructor(){
        this.livingDisposables = new Map;
    }
    getDisposableData(e) {
        let n = this.livingDisposables.get(e);
        return n || (n = {
            parent: null,
            source: null,
            isSingleton: !1,
            value: e,
            idx: Hxb.idx++
        }, this.livingDisposables.set(e, n)), n;
    }
    trackDisposable(e) {
        const n = this.getDisposableData(e);
        n.source || (n.source = new Error().stack);
    }
    setParent(e, n) {
        const i = this.getDisposableData(e);
        i.parent = n;
    }
    markAsDisposed(e) {
        this.livingDisposables.delete(e);
    }
    markAsSingleton(e) {
        this.getDisposableData(e).isSingleton = !0;
    }
    getRootParent(e, n) {
        const i = n.get(e);
        if (i) return i;
        const r = e.parent ? this.getRootParent(this.getDisposableData(e.parent), n) : e;
        return n.set(e, r), r;
    }
    getTrackedDisposables() {
        const e = new Map;
        return [
            ...this.livingDisposables.entries()
        ].filter(([, i])=>i.source !== null && !this.getRootParent(i, e).isSingleton).flatMap(([i])=>i);
    }
    computeLeakingDisposables(e = 10, n) {
        let i;
        if (n) i = n;
        else {
            const l = new Map, c = [
                ...this.livingDisposables.values()
            ].filter((d)=>d.source !== null && !this.getRootParent(d, l).isSingleton);
            if (c.length === 0) return;
            const u = new Set(c.map((d)=>d.value));
            if (i = c.filter((d)=>!(d.parent && u.has(d.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
        }
        if (!i) return;
        function r(l) {
            function c(d, h) {
                for(; d.length > 0 && h.some((p)=>typeof p == "string" ? p === d[0] : d[0].match(p));)d.shift();
            }
            const u = l.source.split(`
`).map((d)=>d.trim().replace("at ", "")).filter((d)=>d !== "");
            return c(u, [
                "Error",
                /^trackDisposable \(.*\)$/,
                /^DisposableTracker.trackDisposable \(.*\)$/
            ]), u.reverse();
        }
        const s = new odn;
        for (const l of i){
            const c = r(l);
            for(let u = 0; u <= c.length; u++)s.add(c.slice(0, u).join(`
`), l);
        }
        i.sort(I5((l)=>l.idx, Sj));
        let o = "", a = 0;
        for (const l of i.slice(0, e)){
            a++;
            const c = r(l), u = [];
            for(let d = 0; d < c.length; d++){
                let h = c[d];
                h = `(shared with ${s.get(c.slice(0, d + 1).join(`
`)).size}/${i.length} leaks) at ${h}`;
                const g = s.get(c.slice(0, d).join(`
`)), f = ZKu([
                    ...g
                ].map((_)=>r(_)[d]), (_)=>_);
                delete f[c[d]];
                for (const [_, b] of Object.entries(f))u.unshift(`    - stacktraces of ${b.length} other leaks continue with ${_}`);
                u.unshift(h);
            }
            o += `


==================== Leaking disposable ${a}/${i.length}: ${l.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
        }
        return i.length > e && (o += `


... and ${i.length - e} more leaking disposables

`), {
            leaks: i,
            details: o
        };
    }
}, Y0o.idx = 0, DYu = Y0o, PYu) {
    const t = "__is_disposable_tracked__";
    Wpr(new class {
        trackDisposable(e) {
            const n = new Error("Potentially leaked disposable").stack;
            setTimeout(()=>{
                e[t] || console.log(n);
            }, 3e3);
        }
        setParent(e, n) {
            if (e && e !== st.None) try {
                e[t] = !0;
            } catch  {}
        }
        markAsDisposed(e) {
            if (e && e !== st.None) try {
                e[t] = !0;
            } catch  {}
        }
        markAsSingleton(e) {}
    });
}
X0o = class jQc {
    constructor(){
        this._toDispose = new Set, this._isDisposed = !1, het(this);
    }
    dispose() {
        this._isDisposed || (AOe(this), this._isDisposed = !0, this.clear());
    }
    [Symbol.dispose]() {
        this.dispose();
    }
    get isDisposed() {
        return this._isDisposed;
    }
    has(e) {
        return this._toDispose.has(e);
    }
    get size() {
        return this._toDispose.size;
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            Nc(this._toDispose);
        } finally{
            this._toDispose.clear();
        }
    }
    add(e) {
        if (!e) return e;
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        if (JFt(e, this), this._isDisposed) {
            const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
            jQc.DISABLE_DISPOSED_WARNING || console.warn(n.stack), V0o(n);
        } else this._toDispose.add(e);
        return e;
    }
    delete(e) {
        if (e) {
            if (e === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(e), e.dispose();
        }
    }
    deleteAndLeak(e) {
        e && this._toDispose.has(e) && (this._toDispose.delete(e), JFt(e, null));
    }
    transferOut(e) {
        if (this._isDisposed) {
            const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
            jQc.DISABLE_DISPOSED_WARNING || console.warn(n.stack), ldn(n, "disposable_use_after_dispose");
        }
        return this.deleteAndLeak(e), e;
    }
}, X0o.DISABLE_DISPOSED_WARNING = !1, Nt = X0o, zpr = class {
    constructor(t){
        this._isDisposed = !1, this._value = t, het(this), JFt(t, this);
    }
    get value() {
        if (this._value === void 0) {
            const t = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out");
            throw Nt.DISABLE_DISPOSED_WARNING || console.warn(t.stack), ldn(t, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), t;
        }
        return this._value;
    }
    get rawValue() {
        return this._value;
    }
    transferOut() {
        const t = this.value;
        return this._value = void 0, JFt(t, null), t;
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, AOe(this), this._value?.dispose(), this._value = void 0);
    }
    [Symbol.dispose]() {
        this.dispose();
    }
}, st = class {
    constructor(){
        this._store = new Nt, het(this), JFt(this._store, this);
    }
    dispose() {
        AOe(this), this._store.dispose();
    }
    _register(t) {
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return this._store.add(t);
    }
}, st.None = Object.freeze({
    dispose () {}
}), Vn = class {
    constructor(){
        this._isDisposed = !1, het(this);
    }
    get value() {
        return this._isDisposed ? void 0 : this._value;
    }
    set value(t) {
        if (this._isDisposed) {
            if (t) {
                const e = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
                Nt.DISABLE_DISPOSED_WARNING || console.warn(e.stack), V0o(e), t.dispose();
            }
            return;
        }
        t !== this._value && (this._value?.dispose(), t && JFt(t, this), this._value = t);
    }
    clear() {
        this.value = void 0;
    }
    dispose() {
        this._isDisposed = !0, AOe(this), this._value?.dispose(), this._value = void 0;
    }
    clearAndLeak() {
        const t = this._value;
        return this._value = void 0, t && JFt(t, null), t;
    }
}, NYu = class {
    constructor(t){
        this._disposable = new Vn, this._isDisposed = !1, this._disposable.value = t;
    }
    get value() {
        return this._disposable.value;
    }
    set value(t) {
        !this._isDisposed && t === this._disposable.value || (this._disposable.value = t);
    }
    dispose() {
        this._isDisposed = !0, this._disposable.dispose();
    }
}, Vpr = class {
    constructor(t){
        this._disposable = t, this._counter = 1;
    }
    acquire() {
        return this._counter++, this;
    }
    release() {
        return --this._counter === 0 && this._disposable.dispose(), this;
    }
}, udn = class {
    constructor(){
        this.references = new Map;
    }
    acquire(t, ...e) {
        let n = this.references.get(t);
        n || (n = {
            counter: 0,
            object: this.createReferencedObject(t, ...e)
        }, this.references.set(t, n));
        const { object: i } = n, r = mQ(()=>{
            --n.counter === 0 && (this.destroyReferencedObject(t, n.object), this.references.delete(t));
        });
        return n.counter++, {
            object: i,
            dispose: r,
            [Symbol.dispose]: r
        };
    }
}, LYu = class {
    constructor(t){
        this.referenceCollection = t;
    }
    async acquire(t, ...e) {
        const n = this.referenceCollection.acquire(t, ...e);
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
}, OYu = class {
    constructor(t){
        this.object = t;
    }
    dispose() {}
    [Symbol.dispose]() {}
}, da = class {
    constructor(t = new Map){
        this._isDisposed = !1, this._store = t, het(this);
    }
    dispose() {
        AOe(this), this._isDisposed = !0, this.clearAndDisposeAll();
    }
    clearAndDisposeAll() {
        if (this._store.size) try {
            Nc(this._store.values());
        } finally{
            this._store.clear();
        }
    }
    has(t) {
        return this._store.has(t);
    }
    get size() {
        return this._store.size;
    }
    get(t) {
        return this._store.get(t);
    }
    set(t, e, n = !1) {
        if (this._isDisposed) {
            const i = new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!");
            console.warn(i.stack), V0o(i);
            return;
        }
        n || this._store.get(t)?.dispose(), this._store.set(t, e);
    }
    deleteAndDispose(t) {
        this._store.get(t)?.dispose(), this._store.delete(t);
    }
    deleteAndLeak(t) {
        const e = this._store.get(t);
        return this._store.delete(t), e;
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
var __wakaru_Gt_initialized = false;
export function Gt() {
if (__wakaru_Gt_initialized) return;
__wakaru_Gt_initialized = true;
"use strict";
E(), YFt(), Ei(), Mse(), Qe(), a7(), D3(), Z0o = !1, UYu = !1, ((t)=>{
    t.None = ()=>st.None;
    function e($) {
        if (UYu) {
            const { onDidAddListener: H } = $, G = Zpr.create();
            let q = 0;
            $.onDidAddListener = ()=>{
                ++q === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), G.print()), H?.();
            };
        }
    }
    function n($, H) {
        return p($, ()=>{}, 0, void 0, !0, void 0, H);
    }
    t.defer = n;
    function i($) {
        return (H, G = null, q)=>{
            let K = !1, V;
            return V = $((Y)=>{
                if (!K) return V ? V.dispose() : K = !0, H.call(G, Y);
            }, null, q), K && V.dispose(), V;
        };
    }
    t.once = i;
    function r($, H) {
        return t.once(t.filter($, H));
    }
    t.onceIf = r;
    function s($, H, G) {
        return d((q, K = null, V)=>$((Y)=>q.call(K, H(Y)), null, V), G);
    }
    t.map = s;
    function o($, H, G) {
        return d((q, K = null, V)=>$((Y)=>{
                H(Y), q.call(K, Y);
            }, null, V), G);
    }
    t.forEach = o;
    function a($, H, G) {
        return d((q, K = null, V)=>$((Y)=>H(Y) && q.call(K, Y), null, V), G);
    }
    t.filter = a;
    function l($) {
        return $;
    }
    t.signal = l;
    function c(...$) {
        return (H, G = null, q)=>{
            const K = N1(...$.map((V)=>V((Y)=>H.call(G, Y))));
            return h(K, q);
        };
    }
    t.any = c;
    function u($, H, G, q) {
        let K = G;
        return s($, (V)=>(K = H(K, V), K), q);
    }
    t.reduce = u;
    function d($, H) {
        let G;
        const q = {
            onWillAddFirstListener () {
                G = $(K.fire, K);
            },
            onDidRemoveLastListener () {
                G?.dispose();
            }
        };
        H || e(q);
        const K = new tt(q);
        return H?.add(K), K.event;
    }
    function h($, H) {
        return H instanceof Array ? H.push($) : H && H.add($), $;
    }
    function p($, H, G = 100, q = !1, K = !1, V, Y) {
        let J, Q, te, ee = 0, re;
        const ie = {
            leakWarningThreshold: V,
            onWillAddFirstListener () {
                J = $((se)=>{
                    ee++, Q = H(Q, se), q && !te && (oe.fire(Q), Q = void 0), re ??= ()=>{
                        const le = Q;
                        Q = void 0, te = void 0, (!q || ee > 1) && oe.fire(le), ee = 0;
                    }, typeof G == "number" ? (clearTimeout(te), te = setTimeout(re, G)) : te === void 0 && (te = 0, queueMicrotask(re));
                });
            },
            onWillRemoveListener () {
                K && ee > 0 && re?.();
            },
            onDidRemoveLastListener () {
                re = void 0, J.dispose();
            }
        };
        Y || e(ie);
        const oe = new tt(ie);
        return Y?.add(oe), oe.event;
    }
    t.debounce = p;
    function g($, H = 0, G) {
        return t.debounce($, (q, K)=>q ? (q.push(K), q) : [
                K
            ], H, void 0, !0, void 0, G);
    }
    t.accumulate = g;
    function f($, H = (q, K)=>q === K, G) {
        let q = !0, K;
        return a($, (V)=>{
            const Y = q || !H(V, K);
            return q = !1, K = V, Y;
        }, G);
    }
    t.latch = f;
    function _($, H, G) {
        return [
            t.filter($, H, G),
            t.filter($, (q)=>!H(q), G)
        ];
    }
    t.split = _;
    function b($, H = !1, G = [], q) {
        let K = G.slice(), V = $((Q)=>{
            K ? K.push(Q) : J.fire(Q);
        });
        q && q.add(V);
        const Y = ()=>{
            K?.forEach((Q)=>J.fire(Q)), K = null;
        }, J = new tt({
            onWillAddFirstListener () {
                V || (V = $((Q)=>J.fire(Q)), q && q.add(V));
            },
            onDidAddFirstListener () {
                K && (H ? setTimeout(Y) : Y());
            },
            onDidRemoveLastListener () {
                V && V.dispose(), V = null;
            }
        });
        return q && q.add(J), J.event;
    }
    t.buffer = b;
    function y($, H) {
        return (q, K, V)=>{
            const Y = H(new k);
            return $(function(J) {
                const Q = Y.evaluate(J);
                Q !== S && q.call(K, Q);
            }, void 0, V);
        };
    }
    t.chain = y;
    const S = Symbol("HaltChainable");
    class k {
        constructor(){
            this.steps = [];
        }
        map(H) {
            return this.steps.push(H), this;
        }
        forEach(H) {
            return this.steps.push((G)=>(H(G), G)), this;
        }
        filter(H) {
            return this.steps.push((G)=>H(G) ? G : S), this;
        }
        reduce(H, G) {
            let q = G;
            return this.steps.push((K)=>(q = H(q, K), q)), this;
        }
        latch(H = (G, q)=>G === q) {
            let G = !0, q;
            return this.steps.push((K)=>{
                const V = G || !H(K, q);
                return G = !1, q = K, V ? K : S;
            }), this;
        }
        evaluate(H) {
            for (const G of this.steps)if (H = G(H), H === S) break;
            return H;
        }
    }
    function C($, H, G = (q)=>q) {
        const q = (...J)=>Y.fire(G(...J)), K = ()=>$.on(H, q), V = ()=>$.removeListener(H, q), Y = new tt({
            onWillAddFirstListener: K,
            onDidRemoveLastListener: V
        });
        return Y.event;
    }
    t.fromNodeEventEmitter = C;
    function T($) {
        let H;
        const G = ()=>{
            H = $.subscribe((V)=>K.fire(V));
        }, q = ()=>{
            H?.unsubscribe(), H = void 0;
        }, K = new tt({
            onWillAddFirstListener: G,
            onDidRemoveLastListener: q
        });
        return K.event;
    }
    t.fromRxJS = T;
    function I($, H, G = (q)=>q) {
        const q = (...J)=>Y.fire(G(...J)), K = ()=>$.addEventListener(H, q), V = ()=>$.removeEventListener(H, q), Y = new tt({
            onWillAddFirstListener: K,
            onDidRemoveLastListener: V
        });
        return Y.event;
    }
    t.fromDOMEventEmitter = I;
    function A($, H) {
        return new Promise((G)=>i($)(G, null, H));
    }
    t.toPromise = A;
    function P($) {
        const H = new tt;
        return $.then((G)=>{
            H.fire(G);
        }, ()=>{
            H.fire(void 0);
        }).finally(()=>{
            H.dispose();
        }), H.event;
    }
    t.fromPromise = P;
    function M($, H) {
        return $((G)=>H.fire(G));
    }
    t.forward = M;
    function O($, H, G) {
        return H(G), $((q)=>H(q));
    }
    t.runAndSubscribe = O;
    class N {
        constructor(H, G){
            this._observable = H, this._counter = 0, this._hasChanged = !1;
            const q = {
                onWillAddFirstListener: ()=>{
                    H.addObserver(this), this._observable.reportChanges();
                },
                onDidRemoveLastListener: ()=>{
                    H.removeObserver(this);
                }
            };
            G || e(q), this.emitter = new tt(q), G && G.add(this.emitter);
        }
        beginUpdate(H) {
            this._counter++;
        }
        handlePossibleChange(H) {}
        handleChange(H, G) {
            this._hasChanged = !0;
        }
        endUpdate(H) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
        }
    }
    function U($, H) {
        return new N($, H).emitter.event;
    }
    t.fromObservable = U;
    function j($) {
        return (H, G, q)=>{
            let K = 0, V = !1;
            const Y = {
                beginUpdate () {
                    K++;
                },
                endUpdate () {
                    K--, K === 0 && ($.reportChanges(), V && (V = !1, H.call(G)));
                },
                handlePossibleChange () {},
                handleChange () {
                    V = !0;
                }
            };
            $.addObserver(Y), $.reportChanges();
            const J = {
                dispose () {
                    $.removeObserver(Y);
                }
            };
            return q instanceof Nt ? q.add(J) : Array.isArray(q) && q.push(J), J;
        };
    }
    t.fromObservableLight = j;
})(en || (en = {})), Ypr = class HQc {
    constructor(e){
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e}_${HQc._idPool++}`, HQc.all.add(this);
    }
    start(e) {
        this._stopWatch = new Xw, this.listenerCount = e;
    }
    stop() {
        if (this._stopWatch) {
            const e = this._stopWatch.elapsed();
            this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0;
        }
    }
}, Ypr.all = new Set, Ypr._idPool = 0, Xpr = Ypr, Q0o = -1, jYu = 1, $Yu = class {
    constructor(t, e, n = BYu()){
        this._errorHandler = t, this.threshold = e, this.name = n, this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(t, e) {
        const n = this.threshold;
        if (n <= 0 || e < n) return;
        this._stacks || (this._stacks = new Map);
        const i = t.value, r = this._stacks.get(i) || 0;
        if (this._stacks.set(i, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
            this._warnCountdown = n * .5;
            const [s, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${e} listeners already. MOST frequent listener (${o}):`;
            console.warn(a), console.warn(s);
            const l = o / e > .3 ? "dominated" : "popular", c = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new J0o(l, a, s, e, c);
            this._errorHandler(u), ldn(u, "emitter_listener_leak");
        }
        return ()=>{
            const s = this._stacks.get(i) || 0;
            s <= 1 ? this._stacks.delete(i) : this._stacks.set(i, s - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) return;
        let t, e = 0;
        for (const [n, i] of this._stacks)(!t || e < i) && (t = [
            n,
            i
        ], e = i);
        return t;
    }
}, Zpr = class Gxb {
    constructor(e){
        this.value = e;
    }
    static create() {
        const e = new Error;
        return new Gxb(e.stack ?? "");
    }
    print() {
        console.warn(this.value.split(`
`).slice(2).join(`
`));
    }
}, J0o = class extends Error {
    constructor(t, e, n, i, r){
        super(r ? `[${r}] potential listener LEAK detected, ${t}` : `potential listener LEAK detected, ${t}`), this.name = "ListenerLeakError", this.kind = t, this.listenerCount = i, this.details = e, this.stack = n;
    }
}, HYu = class extends J0o {
    constructor(t, e, n, i, r){
        super(t, e, n, i, r), this.name = "ListenerRefusalError";
    }
}, VXn = class {
    constructor(t){
        this.value = t;
    }
}, WYu = 2, Qpr = (t, e)=>{
    if (t instanceof VXn) e(t);
    else for(let n = 0; n < t.length; n++){
        const i = t[n];
        i && e(i);
    }
}, tt = class {
    constructor(t){
        this._size = 0, this._options = t, (Q0o > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? Q0o, this._leakWarningName = this._options?.leakWarningName ?? BYu(), this._leakWarningErrorHandler = this._options?.onListenerError ?? xr), this._perfMon = this._options?._profName ? new Xpr(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
    }
    _getLeakageMonitor() {
        if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new $Yu(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
    }
    dispose() {
        if (!this._disposed) {
            if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                if (Z0o) {
                    const t = this._listeners;
                    queueMicrotask(()=>{
                        Qpr(t, (e)=>e.stack?.print());
                    });
                }
                Qpr(this._listeners, (t)=>{
                    t.value = void 0;
                }), this._listeners = void 0, this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
        }
    }
    get event() {
        return this._event ??= (t, e, n)=>{
            if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
                const a = this._getLeakageMonitor();
                if (a) {
                    const l = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
                    console.warn(l);
                    const c = a.getMostFrequentStack() ?? [
                        "UNKNOWN stack",
                        -1
                    ], u = c[1] / this._size > .3 ? "dominated" : "popular", d = new HYu(u, `${l}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0], this._size, this._options?.leakWarningName);
                    return (this._options?.onListenerError || xr)(d), ldn(d, "emitter_listener_refusal"), st.None;
                }
            }
            if (this._disposed) {
                const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
                return ldn(a, "emitter_use_after_dispose"), st.None;
            }
            e && (t = t.bind(e));
            const i = new VXn(t);
            let r, s;
            if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * .2)) {
                const a = this._getLeakageMonitor();
                a && (i.stack = Zpr.create(), r = a.check(i.stack, this._size + 1));
            }
            Z0o && (i.stack = s ?? Zpr.create()), this._listeners ? this._listeners instanceof VXn ? (this._deliveryQueue ??= new eCo, this._listeners = [
                this._listeners,
                i
            ]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
            const o = Pn(()=>{
                r?.(), this._removeListener(i);
            });
            return n instanceof Nt ? n.add(o) : Array.isArray(n) && n.push(o), o;
        }, this._event;
    }
    _removeListener(t) {
        if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
        if (this._size === 1) {
            this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
            return;
        }
        const e = this._listeners, n = e.indexOf(t);
        if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
        this._size--, e[n] = void 0;
        const i = this._deliveryQueue.current === this;
        if (this._size * WYu <= e.length) {
            let r = 0;
            for(let s = 0; s < e.length; s++)e[s] ? e[r++] = e[s] : i && r < this._deliveryQueue.end && (this._deliveryQueue.end--, r < this._deliveryQueue.i && this._deliveryQueue.i--);
            e.length = r;
        }
    }
    _deliver(t, e) {
        if (!t) return;
        const n = this._options?.onListenerError || xr;
        if (!n) {
            t.value(e);
            return;
        }
        try {
            t.value(e);
        } catch (i) {
            n(i);
        }
    }
    _deliverQueue(t) {
        const e = t.current._listeners;
        for(; t.i < t.end;)this._deliver(e[t.i++], t.value);
        t.reset();
    }
    fire(t) {
        if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof VXn) this._deliver(this._listeners, t);
        else {
            const e = this._deliveryQueue;
            e.enqueue(this, t, this._listeners.length), this._deliverQueue(e);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}, GYu = ()=>new eCo, eCo = class {
    constructor(){
        this.i = -1, this.end = 0;
    }
    enqueue(t, e, n) {
        this.i = 0, this.end = n, this.current = t, this.value = e;
    }
    reset() {
        this.i = this.end, this.current = void 0, this.value = void 0;
    }
}, KXn = class extends tt {
    async fireAsync(t, e, n) {
        if (this._listeners) for(this._asyncDeliveryQueue || (this._asyncDeliveryQueue = new tL), Qpr(this._listeners, (i)=>this._asyncDeliveryQueue.push([
                i.value,
                t
            ])); this._asyncDeliveryQueue.size > 0 && !e.isCancellationRequested;){
            const [i, r] = this._asyncDeliveryQueue.shift(), s = [], o = {
                ...r,
                token: e,
                waitUntil: (a)=>{
                    if (Object.isFrozen(s)) throw new Error("waitUntil can NOT be called asynchronous");
                    n && (a = n(a, i)), s.push(a);
                }
            };
            try {
                i(o);
            } catch (a) {
                xr(a);
                continue;
            }
            Object.freeze(s), await Promise.allSettled(s).then((a)=>{
                for (const l of a)l.status === "rejected" && xr(l.reason);
            });
        }
    }
}, Dse = class extends tt {
    constructor(t){
        super(t), this._isPaused = 0, this._eventQueue = new tL, this._mergeFn = t?.merge;
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
                const t = Array.from(this._eventQueue);
                this._eventQueue.clear(), super.fire(this._mergeFn(t));
            }
        } else for(; !this._isPaused && this._eventQueue.size !== 0;)super.fire(this._eventQueue.shift());
    }
    fire(t) {
        this._size && (this._isPaused !== 0 ? this._eventQueue.push(t) : super.fire(t));
    }
}, tCo = class extends Dse {
    constructor(t){
        super(t), this._delay = t.delay ?? 100;
    }
    fire(t) {
        this._handle || (this.pause(), this._handle = setTimeout(()=>{
            this._handle = void 0, this.resume();
        }, this._delay)), super.fire(t);
    }
}, nCo = class extends tt {
    constructor(t){
        super(t), this._queuedEvents = [], this._mergeFn = t?.merge;
    }
    fire(t) {
        this.hasListeners() && (this._queuedEvents.push(t), this._queuedEvents.length === 1 && queueMicrotask(()=>{
            this._mergeFn ? super.fire(this._mergeFn(this._queuedEvents)) : this._queuedEvents.forEach((e)=>super.fire(e)), this._queuedEvents = [];
        }));
    }
}, qYu = class {
    constructor(t){
        this.event = t, this._listener = new Vn;
    }
    hook(t, e) {
        this._listener.value = this.event(t, e);
    }
    unhook() {
        this._listener.clear();
    }
    disposeListener() {
        this._listener.dispose();
    }
}, wke = class {
    constructor(){
        this.hasListeners = !1, this.sources = [], this.emitter = new tt({
            onWillAddFirstListener: ()=>this.onFirstListenerAdd(),
            onDidRemoveLastListener: ()=>this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(t) {
        const e = new qYu(t);
        return this.sources.push(e), this.hasListeners && e.hook(this.emitter.fire, this.emitter), Pn(mQ(()=>{
            e.disposeListener();
            const i = this.sources.indexOf(e);
            i !== -1 && this.sources.splice(i, 1);
        }));
    }
    onFirstListenerAdd() {
        this.hasListeners = !0, this.sources.forEach((t)=>t.hook(this.emitter.fire, this.emitter));
    }
    onLastListenerRemove() {
        this.hasListeners = !1, this.sources.forEach((t)=>t.unhook());
    }
    dispose() {
        this.emitter.dispose();
        for (const t of this.sources)t.disposeListener();
        this.sources.length = 0;
    }
}, Jpr = class {
    constructor(t, e, n, i){
        this._store = new Nt;
        const r = this._store.add(new wke), s = this._store.add(new da);
        function o(a) {
            s.set(a, r.add(i(a)));
        }
        for (const a of t)o(a);
        this._store.add(e((a)=>{
            o(a);
        })), this._store.add(n((a)=>{
            s.deleteAndDispose(a);
        })), this.event = r.event;
    }
    dispose() {
        this._store.dispose();
    }
}, ddn = class {
    constructor(){
        this.data = [];
    }
    wrapEvent(t, e, n) {
        return (i, r, s)=>t((o)=>{
                const a = this.data[this.data.length - 1];
                if (!e) {
                    a ? a.buffers.push(()=>i.call(r, o)) : i.call(r, o);
                    return;
                }
                const l = a;
                if (!l) {
                    i.call(r, e(n, o));
                    return;
                }
                l.items ??= [], l.items.push(o), l.buffers.length === 0 && a.buffers.push(()=>{
                    l.reducedResult ??= n ? l.items.reduce(e, n) : l.items.reduce(e), i.call(r, l.reducedResult);
                });
            }, void 0, s);
    }
    bufferEvents(t) {
        const e = {
            buffers: new Array
        };
        this.data.push(e);
        const n = t();
        return this.data.pop(), e.buffers.forEach((i)=>i()), n;
    }
}, eY = class {
    constructor(){
        this.listening = !1, this.inputEvent = en.None, this.emitter = new tt({
            onDidAddFirstListener: ()=>{
                this.listening = !0, this.inputEventListener?.dispose(), this.inputEventListener = new Vn, this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: ()=>{
                this.listening = !1, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
            }
        }), this.event = this.emitter.event;
    }
    set input(t) {
        this.inputEvent = t, this.listening && (this.inputEventListener ??= new Vn, this.inputEventListener.value = t(this.emitter.fire, this.emitter));
    }
    dispose() {
        this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = en.None, this.emitter.dispose();
    }
}, zYu = class {
    constructor(t){
        this._value = t, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    static const(t) {
        return new VYu(t);
    }
    get value() {
        return this._value;
    }
    set value(t) {
        t !== this._value && (this._value = t, this._onDidChange.fire(void 0));
    }
}, VYu = class {
    constructor(t){
        this.value = t, this.onDidChange = en.None;
    }
};

}
var __wakaru_Di_initialized = false;
export function Di() {
if (__wakaru_Di_initialized) return;
__wakaru_Di_initialized = true;
"use strict";
if (E(), Bt(), met = "en", hdn = !1, t6t = !1, pdn = !1, aCo = !1, lCo = !1, nmr = !1, cCo = !1, imr = !1, uCo = !1, dCo = !1, mdn = void 0, ZXn = met, rmr = met, hCo = void 0, s$e = void 0, o$e = globalThis, Lte = void 0, typeof o$e.vscode < "u" && typeof o$e.vscode.process < "u" ? Lte = o$e.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (Lte = process), pCo = typeof Lte?.versions?.electron == "string", JYu = pCo && Lte?.type === "renderer", typeof Lte == "object") {
    hdn = Lte.platform === "win32", t6t = Lte.platform === "darwin", pdn = Lte.platform === "linux", aCo = pdn && !!Lte.env.SNAP && !!Lte.env.SNAP_REVISION, cCo = pCo, uCo = !!Lte.env.CI || !!Lte.env.BUILD_ARTIFACTSTAGINGDIRECTORY, mdn = met, ZXn = met;
    const t = Lte.env.VSCODE_NLS_CONFIG;
    if (t) try {
        const e = JSON.parse(t);
        mdn = e.userLocale, rmr = e.osLocale, ZXn = e.resolvedLanguage || met, hCo = e.languagePack?.translationsConfigFile;
    } catch  {}
    lCo = !0;
} else typeof navigator == "object" && !JYu ? (s$e = navigator.userAgent, hdn = s$e.indexOf("Windows") >= 0, t6t = s$e.indexOf("Macintosh") >= 0, imr = (s$e.indexOf("Macintosh") >= 0 || s$e.indexOf("iPad") >= 0 || s$e.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, pdn = s$e.indexOf("Linux") >= 0, dCo = s$e?.indexOf("Mobi") >= 0, nmr = !0, ZXn = XXn() || met, mdn = navigator.language.toLowerCase(), rmr = mdn) : console.error("Unable to resolve platform.");
TC = ((t)=>(t[t.Web = 0] = "Web", t[t.Mac = 1] = "Mac", t[t.Linux = 2] = "Linux", t[t.Windows = 3] = "Windows", t))(TC || {}), QXn = 0, t6t ? QXn = 1 : hdn ? QXn = 3 : pdn && (QXn = 2), xa = hdn, _r = t6t, a_ = pdn, JXn = aCo, I0 = lCo, gdn = cCo, th = nmr, eXu = nmr && typeof o$e.importScripts == "function", tXu = eXu ? o$e.origin : void 0, tY = imr, mCo = dCo, JH = uCo, yve = QXn, ROe = s$e, bM = ZXn, ((t)=>{
    function e() {
        return bM;
    }
    t.value = e;
    function n() {
        return bM.length === 2 ? bM === "en" : bM.length >= 3 ? bM[0] === "e" && bM[1] === "n" && bM[2] === "-" : !1;
    }
    t.isDefaultVariant = n;
    function i() {
        return bM === "en";
    }
    t.isDefault = i;
})(Tke || (Tke = {})), gCo = mdn, nXu = rmr, fCo = hCo, iXu = typeof o$e.postMessage == "function" && !o$e.importScripts, Ade = (()=>{
    if (iXu) {
        const t = [];
        o$e.addEventListener("message", (n)=>{
            if (n.data && n.data.vscodeScheduleAsyncWork) for(let i = 0, r = t.length; i < r; i++){
                const s = t[i];
                if (s.id === n.data.vscodeScheduleAsyncWork) {
                    t.splice(i, 1), s.callback();
                    return;
                }
            }
        });
        let e = 0;
        return (n)=>{
            const i = ++e;
            t.push({
                id: i,
                callback: n
            }), o$e.postMessage({
                vscodeScheduleAsyncWork: i
            }, "*");
        };
    }
    return (t)=>setTimeout(t);
})(), rd = ((t)=>(t[t.Windows = 1] = "Windows", t[t.Macintosh = 2] = "Macintosh", t[t.Linux = 3] = "Linux", t))(rd || {}), Hg = t6t || imr ? 2 : hdn ? 1 : 3, vCo = !0, _Co = !1, smr = !!(ROe && ROe.indexOf("Chrome") >= 0), bCo = !!(ROe && ROe.indexOf("Firefox") >= 0), rXu = !!(!smr && ROe && ROe.indexOf("Safari") >= 0), yCo = !!(ROe && ROe.indexOf("Edg/") >= 0), sXu = !!(ROe && ROe.indexOf("Android") >= 0), eZn = void 0, Xxe = Lte?.arch, Zxe = Lte?.platform, oXu = Lte?.versions?.node;

}
var __wakaru_Fa_initialized = false;
export function Fa() {
if (__wakaru_Fa_initialized) return;
__wakaru_Fa_initialized = true;
"use strict";
E(), wCo(), hP(), vXu(), IXu = /{(\d+)}/g, xXu = /{([^}]+)}/g, rZn = class {
    get offset() {
        return this._offset;
    }
    constructor(t, e = 0){
        this._str = t, this._len = t.length, this._offset = e;
    }
    setOffset(t) {
        this._offset = t;
    }
    prevCodePoint() {
        const t = X_y(this._str, this._offset);
        return this._offset -= t >= 65536 ? 2 : 1, t;
    }
    nextCodePoint() {
        const t = hmr(this._str, this._len, this._offset);
        return this._offset += t >= 65536 ? 2 : 1, t;
    }
    eol() {
        return this._offset >= this._len;
    }
}, sZn = class {
    get offset() {
        return this._iterator.offset;
    }
    constructor(t, e = 0){
        this._iterator = new rZn(t, e);
    }
    nextGraphemeLength() {
        const t = PCo.getInstance(), e = this._iterator, n = e.offset;
        let i = t.getGraphemeBreakType(e.nextCodePoint());
        for(; !e.eol();){
            const r = e.offset, s = t.getGraphemeBreakType(e.nextCodePoint());
            if (EXu(i, s)) {
                e.setOffset(r);
                break;
            }
            i = s;
        }
        return e.offset - n;
    }
    prevGraphemeLength() {
        const t = PCo.getInstance(), e = this._iterator, n = e.offset;
        let i = t.getGraphemeBreakType(e.prevCodePoint());
        for(; e.offset > 0;){
            const r = e.offset, s = t.getGraphemeBreakType(e.prevCodePoint());
            if (EXu(s, i)) {
                e.setOffset(r);
                break;
            }
            i = s;
        }
        return n - e.offset;
    }
    eol() {
        return this._iterator.eol();
    }
}, pmr = void 0, AXu = /^[\t\n\r\x20-\x7E]*$/, ACo = /[\u2028\u2029]/, RXu = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, PXu = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, MXu = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, DXu = new RegExp("(?:" + [
    RXu.source,
    PXu.source,
    MXu.source
].join("|") + ")", "g"), NXu = /\\\[.*?\\\]/g, LXu = "\uFEFF", RCo = class rXi {
    static getInstance() {
        return rXi._INSTANCE || (rXi._INSTANCE = new rXi), rXi._INSTANCE;
    }
    constructor(){
        this._data = eby();
    }
    getGraphemeBreakType(e) {
        if (e < 32) return e === 10 ? 3 : e === 13 ? 2 : 4;
        if (e < 127) return 0;
        const n = this._data, i = n.length / 3;
        let r = 1;
        for(; r <= i;)if (e < n[3 * r]) r = 2 * r;
        else if (e > n[3 * r + 1]) r = 2 * r + 1;
        else return n[3 * r + 2];
        return 0;
    }
}, RCo._INSTANCE = null, PCo = RCo, mmr = "\xA0", Gvt = class WQc {
    constructor(e){
        this.confusableDictionary = e;
    }
    static getInstance(e) {
        return WQc.cache.get(Array.from(e).join(","));
    }
    static getLocales() {
        return WQc._locales.value;
    }
    isAmbiguous(e) {
        return this.confusableDictionary.has(e);
    }
    containsAmbiguousCharacter(e) {
        for(let n = 0; n < e.length; n++){
            const i = e.codePointAt(n);
            if (typeof i == "number" && this.isAmbiguous(i)) return !0;
        }
        return !1;
    }
    getPrimaryConfusable(e) {
        return this.confusableDictionary.get(e);
    }
    getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys());
    }
}, Gvt.ambiguousCharacterData = new ES(()=>JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Gvt.cache = new gXu((t)=>{
    const e = t.split(",");
    function n(u) {
        const d = new Map;
        for(let h = 0; h < u.length; h += 2)d.set(u[h], u[h + 1]);
        return d;
    }
    function i(u, d) {
        const h = new Map(u);
        for (const [p, g] of d)h.set(p, g);
        return h;
    }
    function r(u, d) {
        if (!u) return d;
        const h = new Map;
        for (const [p, g] of u)d.has(p) && h.set(p, g);
        return h;
    }
    const s = Gvt.ambiguousCharacterData.value;
    let o = e.filter((u)=>!u.startsWith("_") && u in s);
    o.length === 0 && (o = [
        "_default"
    ]);
    let a;
    for (const u of o){
        const d = n(s[u]);
        a = r(a, d);
    }
    const l = n(s._common), c = i(l, a);
    return new Gvt(c);
}), Gvt._locales = new ES(()=>Object.keys(Gvt.ambiguousCharacterData.value).filter((t)=>!t.startsWith("_"))), gmr = Gvt, MCo = class sXi {
    static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
    }
    static getData() {
        return this._data || (this._data = new Set([
            ...Object.values(sXi.getRawData())
        ].flat())), this._data;
    }
    static isInvisibleCharacter(e) {
        return sXi.getData().has(e);
    }
    static containsInvisibleCharacter(e) {
        for(let n = 0; n < e.length; n++){
            const i = e.codePointAt(n);
            if (typeof i == "number" && (sXi.isInvisibleCharacter(i) || i === 32)) return !0;
        }
        return !1;
    }
    static get codePoints() {
        return sXi.getData();
    }
}, MCo._data = void 0, ydn = MCo;

}
var __wakaru_Ga_initialized = false;
export function Ga() {
if (__wakaru_Ga_initialized) return;
__wakaru_Ga_initialized = true;
"use strict";
E(), hP(), POe(), wdn = typeof Buffer < "u", QXu = new ES(()=>new Uint8Array(256)), JXu = 512 * 1024, Kvt = null, bmr = !1, HCo = !1, WCo = 1 / 0, qCo = 1 / 0, Tr = class gue {
    static alloc(e) {
        let n;
        return wdn ? n = new gue(Buffer.allocUnsafe(e)) : n = new gue(new Uint8Array(e)), KXu(n, "alloc"), n;
    }
    static wrap(e) {
        wdn && !Buffer.isBuffer(e) && (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength));
        const n = new gue(e);
        return KXu(n, "wrap"), n;
    }
    static fromString(e, n) {
        return !(n?.dontUseNodeBuffer || !1) && wdn ? new gue(Buffer.from(e)) : (Cdn || (Cdn = new TextEncoder), new gue(Cdn.encode(e)));
    }
    static withPooledString(e, n) {
        if (wdn) return n(gue.fromString(e));
        if (bmr) return HCo || (HCo = !0, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), n(gue.fromString(e));
        const i = e.length * 3;
        if (i > JXu) return n(gue.fromString(e));
        if (Cdn || (Cdn = new TextEncoder), !Kvt || Kvt.byteLength < i) {
            let s = Kvt ? Kvt.byteLength * 2 : 16384;
            for(; s < i;)s *= 2;
            Kvt = new Uint8Array(s);
        }
        const r = Cdn.encodeInto(e, Kvt).written;
        bmr = !0;
        try {
            return n(new gue(Kvt.subarray(0, r)));
        } finally{
            bmr = !1;
        }
    }
    static fromByteArray(e) {
        const n = gue.alloc(e.length);
        for(let i = 0, r = e.length; i < r; i++)n.buffer[i] = e[i];
        return n;
    }
    static concat(e, n) {
        if (typeof n > "u") {
            n = 0;
            for(let s = 0, o = e.length; s < o; s++)n += e[s].byteLength;
        }
        const i = gue.alloc(n);
        let r = 0;
        for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            i.set(a, r), r += a.byteLength;
        }
        return i;
    }
    constructor(e){
        this.buffer = e, this.byteLength = this.buffer.byteLength;
    }
    clone() {
        const e = gue.alloc(this.byteLength);
        return e.set(this), e;
    }
    toString() {
        if (wdn) return this.buffer.toString();
        if (GCo && this.buffer.byteLength > WCo) try {
            GCo(this.buffer.byteLength);
        } catch  {}
        return $Co || ($Co = new TextDecoder), $Co.decode(this.buffer);
    }
    slice(e, n) {
        return new gue(this.buffer.subarray(e, n));
    }
    set(e, n) {
        if (e instanceof gue) this.buffer.set(e.buffer, n);
        else if (e instanceof Uint8Array) this.buffer.set(e, n);
        else if (e instanceof ArrayBuffer) this.buffer.set(new Uint8Array(e), n);
        else if (ArrayBuffer.isView(e)) this.buffer.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), n);
        else throw new Error("Unknown argument 'array'");
    }
    readUInt32BE(e) {
        return Nse(this.buffer, e);
    }
    writeUInt32BE(e, n) {
        Lse(this.buffer, e, n);
    }
    readUInt32LE(e) {
        return Sby(this.buffer, e);
    }
    writeUInt32LE(e, n) {
        kby(this.buffer, e, n);
    }
    readUInt8(e) {
        return BCo(this.buffer, e);
    }
    writeUInt8(e, n) {
        UCo(this.buffer, e, n);
    }
    indexOf(e, n = 0) {
        return _by(this.buffer, e instanceof gue ? e.buffer : e, n);
    }
    equals(e) {
        return this === e ? !0 : this.byteLength !== e.byteLength ? !1 : this.buffer.every((n, i)=>n === e.buffer[i]);
    }
}, eZu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tZu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

}
