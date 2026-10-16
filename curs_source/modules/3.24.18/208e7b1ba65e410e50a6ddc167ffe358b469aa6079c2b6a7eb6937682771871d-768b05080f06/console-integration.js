import { Dk, _I, fk } from "./console.js";
import { hW } from "./constants_3.js";
import { dt } from "./currentScopes.js";
import { gt, tt } from "./debug-build.js";
import { Ep, Ke, lt, wp, yp } from "./debug-logger.js";
import { HC } from "./extraerrordata.js";
import { H8 } from "./featureFlagsIntegration.js";
import { ar } from "./integration.js";
import { Fp, _W } from "./internal.js";
import { Ip, uk, yc } from "./scope.js";
import { Rn, wc } from "./semanticAttributes.js";
import { pk } from "./sentryNonRecordingSpan.js";
import { ms } from "./sessionReplay.js";
import { Cp, F8, J8, Kn, Rr, Up, ps, vk, z8 } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
import { LB } from "./utils_2.js";
import { Ot } from "./worldwide.js";
function sk(e) {
    if (!("console" in Ot)) return e();
    const t = Ot.console, n = {}, r = Object.keys(Ep);
    r.forEach((s)=>{
        const i = Ep[s];
        n[s] = t[s], t[s] = i;
    });
    try {
        return e();
    } finally{
        r.forEach((s)=>{
            t[s] = n[s];
        });
    }
}
function p8(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function o3e(e) {
    return e === null || p8(e) || typeof e != "object" && typeof e != "function";
}
function C3e() {
    return yp("globalScope", ()=>new yc);
}
function I3e(e) {
    const t = e.getPropagationContext(), { traceId: n, parentSpanId: r, propagationSpanId: s } = t, i = {
        trace_id: n,
        span_id: s || pk()
    };
    return r && (i.parent_span_id = r), i;
}
function W3e(e) {
    const { spanId: t, traceId: n, isRemote: r } = e.spanContext(), s = r ? t : ps(e).parent_span_id, i = vk(e).scope, a = r ? i?.getPropagationContext().propagationSpanId || pk() : t;
    return {
        parent_span_id: s,
        span_id: a,
        trace_id: n
    };
}
function K3e(e, t) {
    const n = t.getPropagationContext();
    return n.dsc || z8(n.traceId, e);
}
function oW(e, t) {
    const { extra: n, tags: r, user: s, contexts: i, level: a, sdkProcessingMetadata: o, breadcrumbs: l, fingerprint: d, eventProcessors: u, attachments: m, propagationContext: f, transactionName: v, span: T } = t;
    Ik(e, "extra", n), Ik(e, "tags", r), Ik(e, "user", s), Ik(e, "contexts", i), e.sdkProcessingMetadata = uk(e.sdkProcessingMetadata, o, 2), a && (e.level = a), v && (e.transactionName = v), T && (e.span = T), l.length && (e.breadcrumbs = [
        ...e.breadcrumbs,
        ...l
    ]), d.length && (e.fingerprint = [
        ...e.fingerprint,
        ...d
    ]), u.length && (e.eventProcessors = [
        ...e.eventProcessors,
        ...u
    ]), m.length && (e.attachments = [
        ...e.attachments,
        ...m
    ]), e.propagationContext = {
        ...e.propagationContext,
        ...f
    };
}
function Ik(e, t, n) {
    e[t] = uk(e[t], n, 1);
}
function bFe(e, t) {
    return t ? fk(t, ()=>{
        const n = H8(), r = n ? W3e(n) : I3e(t);
        return [
            n ? Up(n) : K3e(e, t),
            r
        ];
    }) : [
        void 0,
        void 0
    ];
}
function CFe(e) {
    return [
        {
            type: "log",
            item_count: e.length,
            content_type: "application/vnd.sentry.items.log+json"
        },
        {
            items: e
        }
    ];
}
function IFe(e, t, n, r) {
    const s = {};
    return t?.sdk && (s.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && r && (s.dsn = F8(r)), J8(s, [
        CFe(e)
    ]);
}
function MFe(e) {
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
function xi(e, t, n, r = !0) {
    n && (!e[t] || r) && (e[t] = n);
}
function PFe(e, t) {
    const n = iI(), r = fW(e);
    r === void 0 ? n.set(e, [
        t
    ]) : (n.set(e, [
        ...r,
        t
    ]), r.length >= _W && NFe(e, r));
}
function gW(e, t = Rr(), n = PFe) {
    const r = t?.getClient() ?? Kn();
    if (!r) {
        tt && lt.warn("No client available to capture log.");
        return;
    }
    const { release: s, environment: i, enableLogs: a = !1, beforeSendLog: o } = r.getOptions();
    if (!a) {
        tt && lt.warn("logging option not enabled, log will not be captured.");
        return;
    }
    const [, l] = bFe(r, t), d = {
        ...e.attributes
    }, { user: { id: u, email: m, username: f } } = DFe(t);
    xi(d, "user.id", u, !1), xi(d, "user.email", m, !1), xi(d, "user.name", f, !1), xi(d, "sentry.release", s), xi(d, "sentry.environment", i);
    const { name: v, version: T } = r.getSdkMetadata()?.sdk ?? {};
    xi(d, "sentry.sdk.name", v), xi(d, "sentry.sdk.version", T);
    const S = r.getIntegrationByName("Replay"), k = S?.getReplayId(!0);
    xi(d, "sentry.replay_id", k), k && S?.getRecordingMode() === "buffer" && xi(d, "sentry._internal.replay_is_buffering", !0);
    const y = e.message;
    if (p8(y)) {
        const { __sentry_template_string__: ue, __sentry_template_values__: Ee = [] } = y;
        Ee?.length && (d["sentry.message.template"] = ue), Ee.forEach((me, Nt)=>{
            d[`sentry.message.parameter.${Nt}`] = me;
        });
    }
    const b = Ip(t);
    xi(d, "sentry.trace.parent_span_id", b?.spanContext().spanId);
    const I = {
        ...e,
        attributes: d
    };
    r.emit("beforeCaptureLog", I);
    const G = o ? sk(()=>o(I)) : I;
    if (!G) {
        r.recordDroppedEvent("before_send", "log_item", 1), tt && lt.warn("beforeSendLog returned null, log will not be captured.");
        return;
    }
    const { level: U, message: X, attributes: W = {}, severityNumber: K } = G, H = {
        timestamp: Cp(),
        level: U,
        body: X,
        trace_id: l?.trace_id,
        severity_number: K ?? hW[U],
        attributes: Object.keys(W).reduce((ue, Ee)=>(ue[Ee] = MFe(W[Ee]), ue), {})
    };
    n(r, H), r.emit("afterCaptureLog", G);
}
function NFe(e, t) {
    const n = t ?? fW(e) ?? [];
    if (n.length === 0) return;
    const r = e.getOptions(), s = IFe(n, r._metadata, r.tunnel, e.getDsn());
    iI().set(e, []), e.emit("flushLogs"), e.sendEnvelope(s);
}
function fW(e) {
    return iI().get(e);
}
function DFe(e) {
    const t = C3e().getScopeData();
    return oW(t, ms().getScopeData()), oW(t, e.getScopeData()), t;
}
function iI() {
    return yp("clientToLogBufferMap", ()=>new WeakMap);
}
function OB(e, t, n) {
    return "util" in Ot && typeof Ot.util.format == "function" ? Ot.util.format(...e) : M8e(e, t, n);
}
function M8e(e, t, n) {
    return e.map((r)=>o3e(r) ? String(r) : JSON.stringify(HC(r, t, n))).join(" ");
}
function P8e(e) {
    return /%[sdifocO]/.test(e);
}
function N8e(e, t) {
    const n = {}, r = new Array(t.length).fill("{}").join(" ");
    return n["sentry.message.template"] = `${e} ${r}`, t.forEach((s, i)=>{
        n[`sentry.message.parameter.${i}`] = s;
    }), n;
}
var UB, yI, xB, D8e;
export { C3e, CFe, D8e, DFe, I3e, IFe, Ik, K3e, M8e, MFe, N8e, NFe, OB, P8e, PFe, UB, W3e, bFe, fW, gW, iI, o3e, oW, p8, sk, xB, xi, yI };
var __wakaru_O8e_initialized = false;
export function O8e() {
if (__wakaru_O8e_initialized) return;
__wakaru_O8e_initialized = true;
"use strict";
h(), dt(), gt(), Dk(), ar(), Rn(), Ke(), Fp(), LB(), UB = "ConsoleLogs", yI = {
    [wc]: "auto.log.console"
}, xB = ((e = {})=>{
    const t = e.levels || wp;
    return {
        name: UB,
        setup (n) {
            const { enableLogs: r, normalizeDepth: s = 3, normalizeMaxBreadth: i = 1e3 } = n.getOptions();
            if (!r) {
                tt && lt.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
                return;
            }
            _I(({ args: a, level: o })=>{
                if (Kn() !== n || !t.includes(o)) return;
                const l = a[0], d = a.slice(1);
                if (o === "assert") {
                    if (!l) {
                        const v = d.length > 0 ? `Assertion failed: ${OB(d, s, i)}` : "Assertion failed";
                        gW({
                            level: "error",
                            message: v,
                            attributes: yI
                        });
                    }
                    return;
                }
                const u = o === "log", m = a.length > 1 && typeof a[0] == "string" && !P8e(a[0]), f = {
                    ...yI,
                    ...m ? N8e(l, d) : {}
                };
                gW({
                    level: u ? "info" : o,
                    message: OB(a, s, i),
                    severityNumber: u ? 10 : void 0,
                    attributes: f
                });
            });
        }
    };
}), D8e = xB;

}
