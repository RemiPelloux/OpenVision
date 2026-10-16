import { Mte, Pko, aet, lQ, nGu } from "./Iwo.js";
import { FWu, G1o, P1o, QWu, Rko, UWu, X1o, _hr, cQ, hko, oWu, zWu } from "./SZu.js";
import { Tko, VWu } from "./api.js";
import { sGu } from "./clientreport.js";
import { TFt, mhr } from "./constants.js";
import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { kOe } from "./dsn.js";
import { Evt } from "./dynamicSamplingContext.js";
import { _ke } from "./envelope.js";
import { Z1o } from "./envelope_2.js";
import { aGu } from "./eventUtils.js";
import { Iko, hQ } from "./integration.js";
import { lXn } from "./internal.js";
import { Mko } from "./internal_2.js";
import { _j } from "./is.js";
import { k1o } from "./merge.js";
import { uve } from "./misc.js";
import { XYn } from "./parseSampleRate.js";
import { gko } from "./prepareEvent.js";
import { BYn, Gje, SOe, bFt, kun, vM, xse } from "./scope.js";
import { WYn, kvt } from "./semanticAttributes.js";
import { gke } from "./sentryNonRecordingSpan.js";
import { ihr } from "./session.js";
import { W1o } from "./should-ignore-span.js";
import { B1o, Kb, phr, uQ } from "./spanUtils.js";
import { fvt } from "./stackStrategy.js";
import { iXn, khr } from "./syncpromise.js";
import { bOe, yvt } from "./trace.js";
import { Cde, Run, dve } from "./traceLifecycleProfiler.js";
import { hhy } from "./transactionEvent.js";
import { E } from "./tslib.es6.js";
function _Ft(t) {
    return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function dke(t) {
    return t === null || _Ft(t) || typeof t != "object" && typeof t != "function";
}
function _1o(t) {
    if (zuy(t)) return !0;
    try {
        lQ(t, "__sentry_captured__", !0);
    } catch  {}
    return !1;
}
function zuy(t) {
    try {
        return t.__sentry_captured__;
    } catch  {}
}
function _M() {
    const t = bOe();
    return yvt(t).getIsolationScope();
}
function w1o(t) {
    const e = t.getPropagationContext(), { traceId: n, parentSpanId: i, propagationSpanId: r } = e, s = {
        trace_id: n,
        span_id: r || gke()
    };
    return i && (s.parent_span_id = i), s;
}
function idy(t) {
    return t === "http" || t === "https";
}
function fke(t, e = !1) {
    const { host: n, path: i, pass: r, port: s, projectId: o, protocol: a, publicKey: l } = t;
    return `${a}://${l}${e && r ? `:${r}` : ""}@${n}${s ? `:${s}` : ""}/${i && `${i}/`}${o}`;
}
function rdy(t) {
    if (!rg) return !0;
    const { port: e, projectId: n, protocol: i } = t;
    return [
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ].find((o)=>t[o] ? !1 : (so.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? idy(i) ? e && isNaN(parseInt(e, 10)) ? (so.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (so.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (so.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function M1o(t) {
    const e = typeof t == "string" ? P1o(t) : oWu(t);
    if (!(!e || !rdy(e))) return e;
}
function wvt(t) {
    if (typeof t == "boolean") return Number(t);
    const e = typeof t == "string" ? parseFloat(t) : t;
    if (!(typeof e != "number" || isNaN(e) || e < 0 || e > 1)) return e;
}
function pdy(t, e) {
    const n = e.parent_span_id, i = e.span_id;
    if (n) for (const r of t)r.parent_span_id === i && (r.parent_span_id = n);
}
function fhr(t, e) {
    const n = e.getPropagationContext();
    return n.dsc || G1o(n.traceId, t);
}
function vWu(t, e) {
    const [n, i] = t;
    return [
        n,
        [
            ...i,
            e
        ]
    ];
}
function bWu(t) {
    const e = typeof t.data == "string" ? _hr(t.data) : t.data;
    return [
        {
            type: "attachment",
            length: e.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        },
        e
    ];
}
function Cdy(t, e) {
    if (!e) return t;
    const n = t.sdk || {};
    return t.sdk = {
        ...n,
        name: n.name || e.name,
        version: n.version || e.version,
        integrations: [
            ...t.sdk?.integrations || [],
            ...e.integrations || []
        ],
        packages: [
            ...t.sdk?.packages || [],
            ...e.packages || []
        ],
        settings: t.sdk?.settings || e.settings ? {
            ...t.sdk?.settings,
            ...e.settings
        } : void 0
    }, t;
}
function SWu(t, e, n, i) {
    const r = Run(n), s = {
        sent_at: new Date().toISOString(),
        ...r && {
            sdk: r
        },
        ...!!i && e && {
            dsn: fke(e)
        }
    }, o = "aggregates" in t ? [
        {
            type: "sessions"
        },
        t
    ] : [
        {
            type: "session"
        },
        t.toJSON()
    ];
    return Cde(s, [
        o
    ]);
}
function kWu(t, e, n, i) {
    const r = Run(n), s = t.type && t.type !== "replay_event" ? t.type : "event";
    Cdy(t, n?.sdk);
    const o = X1o(t, r, i, e);
    return delete t.sdkProcessingMetadata, Cde(o, [
        [
            {
                type: s
            },
            t
        ]
    ]);
}
function yhr(t) {
    return new khr((e, n)=>{
        n(t);
    });
}
function mko(t, e, n, i, r, s) {
    const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = t, l = {
        ...e,
        event_id: e.event_id || n.event_id || vM(),
        timestamp: e.timestamp || Gje()
    }, c = n.integrations || t.integrations.map((_)=>_.name);
    Ody(l, t), Udy(l, c), r && r.emit("applyFrameMetadata", e), e.type === void 0 && Fdy(l, t.stackParser);
    const u = $dy(i, n.captureContext);
    n.mechanism && cQ(l, n.mechanism);
    const d = r ? r.getEventProcessors() : [], h = dve().getScopeData();
    if (s) {
        const _ = s.getScopeData();
        aet(h, _);
    }
    if (u) {
        const _ = u.getScopeData();
        aet(h, _);
    }
    const p = [
        ...n.attachments || [],
        ...h.attachments
    ];
    p.length && (n.attachments = p), UWu(l, h);
    const g = [
        ...d,
        ...h.eventProcessors
    ];
    return FWu(g, l, n).then((_)=>(_ && Bdy(_), typeof o == "number" && o > 0 ? jdy(_, o, a) : _));
}
function Ody(t, e) {
    const { environment: n, release: i, dist: r, maxValueLength: s } = e;
    t.environment = t.environment || n || TFt, !t.release && i && (t.release = i), !t.dist && r && (t.dist = r);
    const o = t.request;
    o?.url && (o.url = s ? kun(o.url, s) : o.url);
}
function Fdy(t, e) {
    const n = hko(e);
    t.exception?.values?.forEach((i)=>{
        i.stacktrace?.frames?.forEach((r)=>{
            r.filename && (r.debug_id = n[r.filename]);
        });
    });
}
function Bdy(t) {
    const e = {};
    if (t.exception?.values?.forEach((i)=>{
        i.stacktrace?.frames?.forEach((r)=>{
            r.debug_id && (r.abs_path ? e[r.abs_path] = r.debug_id : r.filename && (e[r.filename] = r.debug_id), delete r.debug_id);
        });
    }), Object.keys(e).length === 0) return;
    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
    const n = t.debug_meta.images;
    Object.entries(e).forEach(([i, r])=>{
        n.push({
            type: "sourcemap",
            code_file: i,
            debug_id: r
        });
    });
}
function Udy(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [
        ...t.sdk.integrations || [],
        ...e
    ]);
}
function jdy(t, e, n) {
    if (!t) return null;
    const i = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map((r)=>({
                    ...r,
                    ...r.data && {
                        data: Mte(r.data, e, n)
                    }
                }))
        },
        ...t.user && {
            user: Mte(t.user, e, n)
        },
        ...t.contexts && {
            contexts: Mte(t.contexts, e, n)
        },
        ...t.extra && {
            extra: Mte(t.extra, e, n)
        }
    };
    return t.contexts?.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = Mte(t.contexts.trace.data, e, n))), t.spans && (i.spans = t.spans.map((r)=>({
            ...r,
            ...r.data && {
                data: Mte(r.data, e, n)
            }
        }))), t.contexts?.flags && i.contexts && (i.contexts.flags = Mte(t.contexts.flags, 3, n)), i;
}
function $dy(t, e) {
    if (!e) return t;
    const n = t ? t.clone() : new SOe;
    return n.update(e), n;
}
function zdy(t) {
    return `${zWu(t)}${t.projectId}/envelope/`;
}
function Vdy(t, e) {
    const n = {
        sentry_version: VWu
    };
    return t.publicKey && (n.sentry_key = t.publicKey), e && (n.sentry_client = `${e.name}/${e.version}`), new URLSearchParams(n).toString();
}
function wko(t, e, n) {
    return e || `${zdy(t)}?${Vdy(t, n)}`;
}
function Ydy(t, e) {
    const n = {};
    return e.forEach((i)=>{
        i && YWu(t, i, n);
    }), n;
}
function KWu(t, e) {
    for (const n of e)n?.afterAllSetup && n.afterAllSetup(t);
}
function YWu(t, e, n) {
    if (n[e.name]) {
        rg && so.log(`Integration skipped because it was already installed: ${e.name}`);
        return;
    }
    if (n[e.name] = e, Iko.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), Iko.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
        const i = e.preprocessEvent.bind(e);
        t.on("preprocessEvent", (r, s)=>i(r, s, t));
    }
    if (typeof e.processEvent == "function") {
        const i = e.processEvent.bind(e), r = Object.assign((s, o)=>i(s, o, t), {
            id: e.name
        });
        t.addEventProcessor(r);
    }
    rg && so.log(`Integration installed: ${e.name}`);
}
function Qdy(t) {
    return [
        {
            type: "log",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.log+json"
        },
        {
            items: t
        }
    ];
}
function Jdy(t, e, n, i) {
    const r = {};
    return e?.sdk && (r.sdk = {
        name: e.sdk.name,
        version: e.sdk.version
    }), n && i && (r.dsn = fke(i)), Cde(r, [
        Qdy(t)
    ]);
}
function aXn(t, e) {
    const n = e ?? QWu(t) ?? [];
    if (n.length === 0) return;
    const i = t.getOptions(), r = Jdy(n, i._metadata, i.tunnel, t.getDsn());
    Rko().set(t, []), t.emit("flushLogs"), t.sendEnvelope(r);
}
function ihy(t) {
    return [
        {
            type: "trace_metric",
            item_count: t.length,
            content_type: "application/vnd.sentry.items.trace-metric+json"
        },
        {
            items: t
        }
    ];
}
function rhy(t, e, n, i) {
    const r = {};
    return e?.sdk && (r.sdk = {
        name: e.sdk.name,
        version: e.sdk.version
    }), n && i && (r.dsn = fke(i)), Cde(r, [
        ihy(t)
    ]);
}
function cXn(t, e) {
    const n = e ?? nGu(t) ?? [];
    if (n.length === 0) return;
    const i = t.getOptions(), r = rhy(n, i._metadata, i.tunnel, t.getDsn());
    Pko().set(t, []), t.emit("flushMetrics"), t.sendEnvelope(r);
}
function rGu(t, e, n) {
    const i = [
        {
            type: "client_report"
        },
        {
            timestamp: n || Gje(),
            discarded_events: t
        }
    ];
    return Cde(e ? {
        dsn: e
    } : {}, [
        i
    ]);
}
function oGu(t) {
    const e = [];
    t.message && e.push(t.message);
    try {
        const n = t.exception.values[t.exception.values.length - 1];
        n?.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
    } catch  {}
    return e;
}
function uhy(t) {
    const { trace_id: e, parent_span_id: n, span_id: i, status: r, origin: s, data: o, op: a } = t.contexts?.trace ?? {};
    return {
        data: o ?? {},
        description: t.transaction,
        op: a,
        parent_span_id: n,
        span_id: i ?? "",
        start_timestamp: t.start_timestamp ?? 0,
        status: r,
        timestamp: t.timestamp,
        trace_id: e ?? "",
        origin: s,
        profile_id: o?.[WYn],
        exclusive_time: o?.[kvt],
        measurements: t.measurements,
        is_segment: !0
    };
}
function dhy(t) {
    return {
        type: "transaction",
        timestamp: t.timestamp,
        start_timestamp: t.start_timestamp,
        transaction: t.description,
        contexts: {
            trace: {
                trace_id: t.trace_id,
                span_id: t.span_id,
                parent_span_id: t.parent_span_id,
                op: t.op,
                status: t.status,
                origin: t.origin,
                data: {
                    ...t.data,
                    ...t.profile_id && {
                        [WYn]: t.profile_id
                    },
                    ...t.exclusive_time && {
                        [kvt]: t.exclusive_time
                    }
                }
            }
        },
        measurements: t.measurements
    };
}
function xhr(t) {
    return {
        message: t,
        [Fko]: !0
    };
}
function Dko(t) {
    return {
        message: t,
        [Bko]: !0
    };
}
function lGu(t) {
    return !!t && typeof t == "object" && Fko in t;
}
function cGu(t) {
    return !!t && typeof t == "object" && Bko in t;
}
function uGu(t, e, n, i, r) {
    let s = 0, o;
    t.on(n, ()=>{
        s = 0, clearTimeout(o);
    }), t.on(e, (a)=>{
        s += i(a), s >= 8e5 ? r(t) : (clearTimeout(o), o = setTimeout(()=>{
            r(t);
        }, mGu));
    }), t.on("flush", ()=>{
        r(t);
    });
}
function phy(t, e) {
    const n = `${e} must return \`null\` or a valid event.`;
    if (fvt(t)) return t.then((i)=>{
        if (!xse(i) && i !== null) throw xhr(n);
        return i;
    }, (i)=>{
        throw xhr(`${e} rejected with ${i}`);
    });
    if (!xse(t) && t !== null) throw xhr(n);
    return t;
}
function mhy(t, e, n, i) {
    const { beforeSend: r, beforeSendTransaction: s, beforeSendSpan: o, ignoreSpans: a } = e;
    let l = n;
    if (Nko(l) && r) return r(l, i);
    if (dGu(l)) {
        if (o || a) {
            const c = uhy(l);
            if (a?.length && phr(c, a)) return null;
            if (o) {
                const u = o(c);
                u ? l = BYn(n, dhy(u)) : B1o();
            }
            if (l.spans) {
                const u = [], d = l.spans;
                for (const p of d){
                    if (a?.length && phr(p, a)) {
                        pdy(d, p);
                        continue;
                    }
                    if (o) {
                        const g = o(p);
                        g ? u.push(g) : (B1o(), u.push(p));
                    } else u.push(p);
                }
                const h = l.spans.length - u.length;
                h && t.recordDroppedEvent("before_send", "span", h), l.spans = u;
            }
        }
        if (s) {
            if (l.spans) {
                const c = l.spans.length;
                l.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: c
                };
            }
            return s(l, i);
        }
    }
    return l;
}
function Nko(t) {
    return t.type === void 0;
}
function dGu(t) {
    return t.type === "transaction";
}
function ghy(t) {
    let e = 0;
    return t.name && (e += t.name.length * 2), e += 8, e + hGu(t.attributes);
}
function fhy(t) {
    let e = 0;
    return t.message && (e += t.message.length * 2), e + hGu(t.attributes);
}
function hGu(t) {
    if (!t) return 0;
    let e = 0;
    return Object.values(t).forEach((n)=>{
        Array.isArray(n) ? e += n.length * pGu(n[0]) : dke(n) ? e += pGu(n) : e += 100;
    }), e;
}
function pGu(t) {
    return typeof t == "string" ? t.length * 2 : typeof t == "number" ? 8 : typeof t == "boolean" ? 4 : 0;
}
var Lko, Oko, Fko, Bko, mGu, uXn;
export { $dy, Bdy, Bko, Cdy, Dko, Fdy, Fko, Jdy, KWu, Lko, M1o, Nko, Ody, Oko, Qdy, SWu, Udy, Vdy, YWu, Ydy, _1o, _Ft, _M, aXn, bWu, cGu, cXn, dGu, dhy, dke, fhr, fhy, fke, ghy, hGu, idy, ihy, jdy, kWu, lGu, mGu, mhy, mko, oGu, pGu, pdy, phy, rGu, rdy, rhy, uGu, uXn, uhy, vWu, w1o, wko, wvt, xhr, yhr, zdy, zuy };
var __wakaru_gGu_initialized = false;
export function gGu() {
if (__wakaru_gGu_initialized) return;
__wakaru_gGu_initialized = true;
"use strict";
E(), Tko(), mhr(), JA(), qR(), Z1o(), hQ(), lXn(), Mko(), ihr(), Evt(), sGu(), JC(), kOe(), _ke(), aGu(), _j(), k1o(), uve(), XYn(), gko(), W1o(), uQ(), iXn(), hhy(), Lko = "Not capturing exception because it's already been captured.", Oko = "Discarded session because of missing or non-string release", Fko = Symbol.for("SentryInternalError"), Bko = Symbol.for("SentryDoNotSendEventError"), mGu = 5e3, uXn = class {
    constructor(t){
        if (this._options = t, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = M1o(t.dsn) : rg && so.warn("No DSN provided, client will not send events."), this._dsn) {
            const n = wko(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: n
            });
        }
        this._options.enableLogs && uGu(this, "afterCaptureLog", "flushLogs", fhy, aXn), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) && uGu(this, "afterCaptureMetric", "flushMetrics", ghy, cXn);
    }
    captureException(t, e, n) {
        const i = vM();
        if (_1o(t)) return rg && so.log(Lko), i;
        const r = {
            event_id: i,
            ...e
        };
        return this._process(this.eventFromException(t, r).then((s)=>this._captureEvent(s, r, n))), r.event_id;
    }
    captureMessage(t, e, n, i) {
        const r = {
            event_id: vM(),
            ...n
        }, s = _Ft(t) ? t : String(t), o = dke(t) ? this.eventFromMessage(s, e, r) : this.eventFromException(t, r);
        return this._process(o.then((a)=>this._captureEvent(a, r, i))), r.event_id;
    }
    captureEvent(t, e, n) {
        const i = vM();
        if (e?.originalException && _1o(e.originalException)) return rg && so.log(Lko), i;
        const r = {
            event_id: i,
            ...e
        }, s = t.sdkProcessingMetadata || {}, o = s.capturedSpanScope, a = s.capturedSpanIsolationScope;
        return this._process(this._captureEvent(t, r, o || n, a)), r.event_id;
    }
    captureSession(t) {
        this.sendSession(t), bFt(t, {
            init: !1
        });
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    async flush(t) {
        const e = this._transport;
        if (!e) return !0;
        this.emit("flush");
        const n = await this._isClientDoneProcessing(t), i = await e.flush(t);
        return n && i;
    }
    async close(t) {
        const e = await this.flush(t);
        return this.getOptions().enabled = !1, this.emit("close"), e;
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(t) {
        this._eventProcessors.push(t);
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({ name: t })=>t.startsWith("Spotlight"))) && this._setupIntegrations();
    }
    getIntegrationByName(t) {
        return this._integrations[t];
    }
    addIntegration(t) {
        const e = this._integrations[t.name];
        YWu(this, t, this._integrations), e || KWu(this, [
            t
        ]);
    }
    sendEvent(t, e = {}) {
        this.emit("beforeSendEvent", t, e);
        let n = kWu(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const i of e.attachments || [])n = vWu(n, bWu(i));
        this.sendEnvelope(n).then((i)=>this.emit("afterSendEvent", t, i));
    }
    sendSession(t) {
        const { release: e, environment: n = TFt } = this._options;
        if ("aggregates" in t) {
            const r = t.attrs || {};
            if (!r.release && !e) {
                rg && so.warn(Oko);
                return;
            }
            r.release = r.release || e, r.environment = r.environment || n, t.attrs = r;
        } else {
            if (!t.release && !e) {
                rg && so.warn(Oko);
                return;
            }
            t.release = t.release || e, t.environment = t.environment || n;
        }
        this.emit("beforeSendSession", t);
        const i = SWu(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(i);
    }
    recordDroppedEvent(t, e, n = 1) {
        if (this._options.sendClientReports) {
            const i = `${t}:${e}`;
            rg && so.log(`Recording outcome: "${i}"${n > 1 ? ` (${n} times)` : ""}`), this._outcomes[i] = (this._outcomes[i] || 0) + n;
        }
    }
    on(t, e) {
        const n = this._hooks[t] = this._hooks[t] || new Set, i = (...r)=>e(...r);
        return n.add(i), ()=>{
            n.delete(i);
        };
    }
    emit(t, ...e) {
        const n = this._hooks[t];
        n && n.forEach((i)=>i(...e));
    }
    async sendEnvelope(t) {
        if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport) try {
            return await this._transport.send(t);
        } catch (e) {
            return rg && so.error("Error while sending envelope:", e), {};
        }
        return rg && so.error("Transport disabled"), {};
    }
    _setupIntegrations() {
        const { integrations: t } = this._options;
        this._integrations = Ydy(this, t), KWu(this, t);
    }
    _updateSessionFromEvent(t, e) {
        let n = e.level === "fatal", i = !1;
        const r = e.exception?.values;
        if (r) {
            i = !0, n = !1;
            for (const a of r)if (a.mechanism?.handled === !1) {
                n = !0;
                break;
            }
        }
        const s = t.status === "ok";
        (s && t.errors === 0 || s && n) && (bFt(t, {
            ...n && {
                status: "crashed"
            },
            errors: t.errors || Number(i || n)
        }), this.captureSession(t));
    }
    async _isClientDoneProcessing(t) {
        let e = 0;
        for(; !t || e < t;){
            if (await new Promise((n)=>setTimeout(n, 1)), !this._numProcessing) return !0;
            e++;
        }
        return !1;
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(t, e, n, i) {
        const r = this.getOptions(), s = Object.keys(this._integrations);
        return !e.integrations && s?.length && (e.integrations = s), this.emit("preprocessEvent", t, e), t.type || i.setLastEventId(t.event_id || e.event_id), mko(r, t, e, n, this, i).then((o)=>{
            if (o === null) return o;
            this.emit("postprocessEvent", o, e), o.contexts = {
                trace: w1o(n),
                ...o.contexts
            };
            const a = fhr(this, n);
            return o.sdkProcessingMetadata = {
                dynamicSamplingContext: a,
                ...o.sdkProcessingMetadata
            }, o;
        });
    }
    _captureEvent(t, e = {}, n = Kb(), i = _M()) {
        return rg && Nko(t) && so.log(`Captured error event \`${oGu(t)[0] || "<unknown>"}\``), this._processEvent(t, e, n, i).then((r)=>r.event_id, (r)=>{
            rg && (cGu(r) ? so.log(r.message) : lGu(r) ? so.warn(r.message) : so.warn(r));
        });
    }
    _processEvent(t, e, n, i) {
        const r = this.getOptions(), { sampleRate: s } = r, o = dGu(t), a = Nko(t), l = t.type || "error", c = `before send for type \`${l}\``, u = typeof s > "u" ? void 0 : wvt(s);
        if (a && typeof u == "number" && Math.random() > u) return this.recordDroppedEvent("sample_rate", "error"), yhr(Dko(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
        const d = l === "replay_event" ? "replay" : l;
        return this._prepareEvent(t, e, n, i).then((h)=>{
            if (h === null) throw this.recordDroppedEvent("event_processor", d), Dko("An event processor returned `null`, will not send event.");
            if (e.data && e.data.__sentry__ === !0) return h;
            const g = mhy(this, r, h, e);
            return phy(g, c);
        }).then((h)=>{
            if (h === null) {
                if (this.recordDroppedEvent("before_send", d), o) {
                    const _ = 1 + (t.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", _);
                }
                throw Dko(`${c} returned \`null\`, will not send event.`);
            }
            const p = n.getSession() || i.getSession();
            if (a && p && this._updateSessionFromEvent(p, h), o) {
                const f = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0, _ = h.spans ? h.spans.length : 0, b = f - _;
                b > 0 && this.recordDroppedEvent("before_send", "span", b);
            }
            const g = h.transaction_info;
            if (o && g && h.transaction !== t.transaction) {
                const f = "custom";
                h.transaction_info = {
                    ...g,
                    source: f
                };
            }
            return this.sendEvent(h, e), h;
        }).then(null, (h)=>{
            throw cGu(h) || lGu(h) ? h : (this.captureException(h, {
                mechanism: {
                    handled: !1,
                    type: "internal"
                },
                data: {
                    __sentry__: !0
                },
                originalException: h
            }), xhr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`));
        });
    }
    _process(t) {
        this._numProcessing++, t.then((e)=>(this._numProcessing--, e), (e)=>(this._numProcessing--, e));
    }
    _clearOutcomes() {
        const t = this._outcomes;
        return this._outcomes = {}, Object.entries(t).map(([e, n])=>{
            const [i, r] = e.split(":");
            return {
                reason: i,
                category: r,
                quantity: n
            };
        });
    }
    _flushOutcomes() {
        rg && so.log("Flushing outcomes...");
        const t = this._clearOutcomes();
        if (t.length === 0) {
            rg && so.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            rg && so.log("No dsn provided, will not send outcomes");
            return;
        }
        rg && so.log("Sending outcomes:", t);
        const e = rGu(t, this._options.tunnel && fke(this._dsn));
        this.sendEnvelope(e);
    }
};

}
