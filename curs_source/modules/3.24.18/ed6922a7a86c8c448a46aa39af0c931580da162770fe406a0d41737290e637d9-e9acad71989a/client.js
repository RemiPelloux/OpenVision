import { $3e, Nwc, TV, jGr, jH } from "./HVr.js";
import { Ewc, UGr } from "./api.js";
import { Bwc } from "./clientreport.js";
import { Adt, _hi } from "./constants.js";
import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { Kke } from "./dsn.js";
import { uqe } from "./dynamicSamplingContext.js";
import { Yce } from "./envelope.js";
import { dGr } from "./envelope_2.js";
import { $wc } from "./eventUtils.js";
import { HGr, YH } from "./integration.js";
import { Whn } from "./internal.js";
import { qGr } from "./internal_2.js";
import { YB } from "./is.js";
import { OWr } from "./merge.js";
import { Mie } from "./misc.js";
import { Rhn } from "./parseSampleRate.js";
import { AGr } from "./prepareEvent.js";
import { Dwc, EGr, Twc, Ukc, VGr, _wc, fwc, jWr, khi, qH, rGr, uGr } from "./qIc.js";
import { _hn, aAe, gI, mK, vLt, wdt, zke } from "./scope.js";
import { oqe, whn } from "./semanticAttributes.js";
import { qce } from "./sentryNonRecordingSpan.js";
import { ahi } from "./session.js";
import { iGr } from "./should-ignore-span.js";
import { QWr, nv, vhi, zH } from "./spanUtils.js";
import { eqe } from "./stackStrategy.js";
import { Ehi, Fhn } from "./syncpromise.js";
import { jke, rqe } from "./trace.js";
import { Eig } from "./transactionEvent.js";
import { x } from "./tslib.es6.js";
import { Pie, TLt, eJ } from "./utils_29.js";
function kdt(e) {
    return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function Wce(e) {
    return e === null || kdt(e) || typeof e != "object" && typeof e != "function";
}
function MWr(e) {
    if (ong(e)) return !0;
    try {
        jH(e, "__sentry_captured__", !0);
    } catch  {}
    return !1;
}
function ong(e) {
    try {
        return e.__sentry_captured__;
    } catch  {}
}
function fI() {
    const e = jke();
    return rqe(e).getIsolationScope();
}
function FWr(e) {
    const t = e.getPropagationContext(), { traceId: n, parentSpanId: i, propagationSpanId: r } = t, s = {
        trace_id: n,
        span_id: r || qce()
    };
    return i && (s.parent_span_id = i), s;
}
function vng(e) {
    return e === "http" || e === "https";
}
function zce(e, t = !1) {
    const { host: n, path: i, pass: r, port: s, projectId: o, protocol: a, publicKey: c } = e;
    return `${a}://${c}${t && r ? `:${r}` : ""}@${n}${s ? `:${s}` : ""}/${i && `${i}/`}${o}`;
}
function _ng(e) {
    if (!Qh) return !0;
    const { port: t, projectId: n, protocol: i } = e;
    return [
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ].find((o)=>e[o] ? !1 : (zr.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? vng(i) ? t && isNaN(parseInt(t, 10)) ? (zr.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (zr.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (zr.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function qWr(e) {
    const t = typeof e == "string" ? jWr(e) : Ukc(e);
    if (!(!t || !_ng(t))) return t;
}
function aqe(e) {
    if (typeof e == "boolean") return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t;
}
function xng(e, t) {
    const n = t.parent_span_id, i = t.span_id;
    if (n) for (const r of e)r.parent_span_id === i && (r.parent_span_id = n);
}
function yhi(e, t) {
    const n = t.getPropagationContext();
    return n.dsc || rGr(n.traceId, e);
}
function Xkc(e, t) {
    const [n, i] = e;
    return [
        n,
        [
            ...i,
            t
        ]
    ];
}
function Qkc(e) {
    const t = typeof e.data == "string" ? khi(e.data) : e.data;
    return [
        {
            type: "attachment",
            length: t.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
        },
        t
    ];
}
function Bng(e, t) {
    if (!t) return e;
    const n = e.sdk || {};
    return e.sdk = {
        ...n,
        name: n.name || t.name,
        version: n.version || t.version,
        integrations: [
            ...e.sdk?.integrations || [],
            ...t.integrations || []
        ],
        packages: [
            ...e.sdk?.packages || [],
            ...t.packages || []
        ],
        settings: e.sdk?.settings || t.settings ? {
            ...e.sdk?.settings,
            ...t.settings
        } : void 0
    }, e;
}
function ewc(e, t, n, i) {
    const r = TLt(n), s = {
        sent_at: new Date().toISOString(),
        ...r && {
            sdk: r
        },
        ...!!i && t && {
            dsn: zce(t)
        }
    }, o = "aggregates" in e ? [
        {
            type: "sessions"
        },
        e
    ] : [
        {
            type: "session"
        },
        e.toJSON()
    ];
    return eJ(s, [
        o
    ]);
}
function twc(e, t, n, i) {
    const r = TLt(n), s = e.type && e.type !== "replay_event" ? e.type : "event";
    Bng(e, n?.sdk);
    const o = uGr(e, r, i, t);
    return delete e.sdkProcessingMetadata, eJ(o, [
        [
            {
                type: s
            },
            e
        ]
    ]);
}
function Chi(e) {
    return new Ehi((t, n)=>{
        n(e);
    });
}
function IGr(e, t, n, i, r, s) {
    const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e, c = {
        ...t,
        event_id: t.event_id || n.event_id || gI(),
        timestamp: t.timestamp || aAe()
    }, l = n.integrations || e.integrations.map((b)=>b.name);
    Xng(c, e), Jng(c, l), r && r.emit("applyFrameMetadata", t), t.type === void 0 && Zng(c, e.stackParser);
    const u = tig(i, n.captureContext);
    n.mechanism && qH(c, n.mechanism);
    const h = r ? r.getEventProcessors() : [], p = Pie().getScopeData();
    if (s) {
        const b = s.getScopeData();
        $3e(p, b);
    }
    if (u) {
        const b = u.getScopeData();
        $3e(p, b);
    }
    const g = [
        ...n.attachments || [],
        ...p.attachments
    ];
    g.length && (n.attachments = g), _wc(c, p);
    const f = [
        ...h,
        ...p.eventProcessors
    ];
    return fwc(f, c, n).then((b)=>(b && Qng(b), typeof o == "number" && o > 0 ? eig(b, o, a) : b));
}
function Xng(e, t) {
    const { environment: n, release: i, dist: r, maxValueLength: s } = t;
    e.environment = e.environment || n || Adt, !e.release && i && (e.release = i), !e.dist && r && (e.dist = r);
    const o = e.request;
    o?.url && (o.url = s ? vLt(o.url, s) : o.url);
}
function Zng(e, t) {
    const n = EGr(t);
    e.exception?.values?.forEach((i)=>{
        i.stacktrace?.frames?.forEach((r)=>{
            r.filename && (r.debug_id = n[r.filename]);
        });
    });
}
function Qng(e) {
    const t = {};
    if (e.exception?.values?.forEach((i)=>{
        i.stacktrace?.frames?.forEach((r)=>{
            r.debug_id && (r.abs_path ? t[r.abs_path] = r.debug_id : r.filename && (t[r.filename] = r.debug_id), delete r.debug_id);
        });
    }), Object.keys(t).length === 0) return;
    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
    const n = e.debug_meta.images;
    Object.entries(t).forEach(([i, r])=>{
        n.push({
            type: "sourcemap",
            code_file: i,
            debug_id: r
        });
    });
}
function Jng(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [
        ...e.sdk.integrations || [],
        ...t
    ]);
}
function eig(e, t, n) {
    if (!e) return null;
    const i = {
        ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map((r)=>({
                    ...r,
                    ...r.data && {
                        data: TV(r.data, t, n)
                    }
                }))
        },
        ...e.user && {
            user: TV(e.user, t, n)
        },
        ...e.contexts && {
            contexts: TV(e.contexts, t, n)
        },
        ...e.extra && {
            extra: TV(e.extra, t, n)
        }
    };
    return e.contexts?.trace && i.contexts && (i.contexts.trace = e.contexts.trace, e.contexts.trace.data && (i.contexts.trace.data = TV(e.contexts.trace.data, t, n))), e.spans && (i.spans = e.spans.map((r)=>({
            ...r,
            ...r.data && {
                data: TV(r.data, t, n)
            }
        }))), e.contexts?.flags && i.contexts && (i.contexts.flags = TV(e.contexts.flags, 3, n)), i;
}
function tig(e, t) {
    if (!t) return e;
    const n = e ? e.clone() : new zke;
    return n.update(t), n;
}
function oig(e) {
    return `${Twc(e)}${e.projectId}/envelope/`;
}
function aig(e, t) {
    const n = {
        sentry_version: Ewc
    };
    return e.publicKey && (n.sentry_key = e.publicKey), t && (n.sentry_client = `${t.name}/${t.version}`), new URLSearchParams(n).toString();
}
function FGr(e, t, n) {
    return t || `${oig(e)}?${aig(e, n)}`;
}
function lig(e, t) {
    const n = {};
    return t.forEach((i)=>{
        i && Iwc(e, i, n);
    }), n;
}
function xwc(e, t) {
    for (const n of t)n?.afterAllSetup && n.afterAllSetup(e);
}
function Iwc(e, t, n) {
    if (n[t.name]) {
        Qh && zr.log(`Integration skipped because it was already installed: ${t.name}`);
        return;
    }
    if (n[t.name] = t, HGr.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(), HGr.push(t.name)), t.setup && typeof t.setup == "function" && t.setup(e), typeof t.preprocessEvent == "function") {
        const i = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", (r, s)=>i(r, s, e));
    }
    if (typeof t.processEvent == "function") {
        const i = t.processEvent.bind(t), r = Object.assign((s, o)=>i(s, o, e), {
            id: t.name
        });
        e.addEventProcessor(r);
    }
    Qh && zr.log(`Integration installed: ${t.name}`);
}
function hig(e) {
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
function pig(e, t, n, i) {
    const r = {};
    return t?.sdk && (r.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && i && (r.dsn = zce(i)), eJ(r, [
        hig(e)
    ]);
}
function Hhn(e, t) {
    const n = t ?? Dwc(e) ?? [];
    if (n.length === 0) return;
    const i = e.getOptions(), r = pig(n, i._metadata, i.tunnel, e.getDsn());
    VGr().set(e, []), e.emit("flushLogs"), e.sendEnvelope(r);
}
function vig(e) {
    return [
        {
            type: "trace_metric",
            item_count: e.length,
            content_type: "application/vnd.sentry.items.trace-metric+json"
        },
        {
            items: e
        }
    ];
}
function _ig(e, t, n, i) {
    const r = {};
    return t?.sdk && (r.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && i && (r.dsn = zce(i)), eJ(r, [
        vig(e)
    ]);
}
function Ghn(e, t) {
    const n = t ?? Nwc(e) ?? [];
    if (n.length === 0) return;
    const i = e.getOptions(), r = _ig(n, i._metadata, i.tunnel, e.getDsn());
    jGr().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(r);
}
function Fwc(e, t, n) {
    const i = [
        {
            type: "client_report"
        },
        {
            timestamp: n || aAe(),
            discarded_events: e
        }
    ];
    return eJ(t ? {
        dsn: t
    } : {}, [
        i
    ]);
}
function Uwc(e) {
    const t = [];
    e.message && t.push(e.message);
    try {
        const n = e.exception.values[e.exception.values.length - 1];
        n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch  {}
    return t;
}
function Cig(e) {
    const { trace_id: t, parent_span_id: n, span_id: i, status: r, origin: s, data: o, op: a } = e.contexts?.trace ?? {};
    return {
        data: o ?? {},
        description: e.transaction,
        op: a,
        parent_span_id: n,
        span_id: i ?? "",
        start_timestamp: e.start_timestamp ?? 0,
        status: r,
        timestamp: e.timestamp,
        trace_id: t ?? "",
        origin: s,
        profile_id: o?.[whn],
        exclusive_time: o?.[oqe],
        measurements: e.measurements,
        is_segment: !0
    };
}
function Tig(e) {
    return {
        type: "transaction",
        timestamp: e.timestamp,
        start_timestamp: e.start_timestamp,
        transaction: e.description,
        contexts: {
            trace: {
                trace_id: e.trace_id,
                span_id: e.span_id,
                parent_span_id: e.parent_span_id,
                op: e.op,
                status: e.status,
                origin: e.origin,
                data: {
                    ...e.data,
                    ...e.profile_id && {
                        [whn]: e.profile_id
                    },
                    ...e.exclusive_time && {
                        [oqe]: e.exclusive_time
                    }
                }
            }
        },
        measurements: e.measurements
    };
}
function Mhi(e) {
    return {
        message: e,
        [ZGr]: !0
    };
}
function zGr(e) {
    return {
        message: e,
        [QGr]: !0
    };
}
function Hwc(e) {
    return !!e && typeof e == "object" && ZGr in e;
}
function Wwc(e) {
    return !!e && typeof e == "object" && QGr in e;
}
function Gwc(e, t, n, i, r) {
    let s = 0, o;
    e.on(n, ()=>{
        s = 0, clearTimeout(o);
    }), e.on(t, (a)=>{
        s += i(a), s >= 8e5 ? r(e) : (clearTimeout(o), o = setTimeout(()=>{
            r(e);
        }, zwc));
    }), e.on("flush", ()=>{
        r(e);
    });
}
function xig(e, t) {
    const n = `${t} must return \`null\` or a valid event.`;
    if (eqe(e)) return e.then((i)=>{
        if (!mK(i) && i !== null) throw Mhi(n);
        return i;
    }, (i)=>{
        throw Mhi(`${t} rejected with ${i}`);
    });
    if (!mK(e) && e !== null) throw Mhi(n);
    return e;
}
function Iig(e, t, n, i) {
    const { beforeSend: r, beforeSendTransaction: s, beforeSendSpan: o, ignoreSpans: a } = t;
    let c = n;
    if (KGr(c) && r) return r(c, i);
    if (Vwc(c)) {
        if (o || a) {
            const l = Cig(c);
            if (a?.length && vhi(l, a)) return null;
            if (o) {
                const u = o(l);
                u ? c = _hn(n, Tig(u)) : QWr();
            }
            if (c.spans) {
                const u = [], h = c.spans;
                for (const g of h){
                    if (a?.length && vhi(g, a)) {
                        xng(h, g);
                        continue;
                    }
                    if (o) {
                        const f = o(g);
                        f ? u.push(f) : (QWr(), u.push(g));
                    } else u.push(g);
                }
                const p = c.spans.length - u.length;
                p && e.recordDroppedEvent("before_send", "span", p), c.spans = u;
            }
        }
        if (s) {
            if (c.spans) {
                const l = c.spans.length;
                c.sdkProcessingMetadata = {
                    ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: l
                };
            }
            return s(c, i);
        }
    }
    return c;
}
function KGr(e) {
    return e.type === void 0;
}
function Vwc(e) {
    return e.type === "transaction";
}
function Aig(e) {
    let t = 0;
    return e.name && (t += e.name.length * 2), t += 8, t + jwc(e.attributes);
}
function Rig(e) {
    let t = 0;
    return e.message && (t += e.message.length * 2), t + jwc(e.attributes);
}
function jwc(e) {
    if (!e) return 0;
    let t = 0;
    return Object.values(e).forEach((n)=>{
        Array.isArray(n) ? t += n.length * qwc(n[0]) : Wce(n) ? t += qwc(n) : t += 100;
    }), t;
}
function qwc(e) {
    return typeof e == "string" ? e.length * 2 : typeof e == "number" ? 8 : typeof e == "boolean" ? 4 : 0;
}
var YGr, XGr, ZGr, QGr, zwc, Vhn;
export { Aig, Bng, Chi, Cig, FGr, FWr, Fwc, Ghn, Gwc, Hhn, Hwc, IGr, Iig, Iwc, Jng, KGr, MWr, Mhi, QGr, Qkc, Qng, Rig, Tig, Uwc, Vhn, Vwc, Wce, Wwc, XGr, Xkc, Xng, YGr, ZGr, Zng, _ig, _ng, aig, aqe, eig, ewc, fI, hig, jwc, kdt, lig, oig, ong, pig, qWr, qwc, tig, twc, vig, vng, xig, xng, xwc, yhi, zGr, zce, zwc };
var __wakaru_Kwc_initialized = false;
export function Kwc() {
if (__wakaru_Kwc_initialized) return;
__wakaru_Kwc_initialized = true;
"use strict";
x(), UGr(), _hi(), NT(), kE(), dGr(), YH(), Whn(), qGr(), ahi(), uqe(), Bwc(), Xk(), Kke(), Yce(), $wc(), YB(), OWr(), Mie(), Rhn(), AGr(), iGr(), zH(), Fhn(), Eig(), YGr = "Not capturing exception because it's already been captured.", XGr = "Discarded session because of missing or non-string release", ZGr = Symbol.for("SentryInternalError"), QGr = Symbol.for("SentryDoNotSendEventError"), zwc = 5e3, Vhn = class {
    constructor(e){
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = qWr(e.dsn) : Qh && zr.warn("No DSN provided, client will not send events."), this._dsn) {
            const n = FGr(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: n
            });
        }
        this._options.enableLogs && Gwc(this, "afterCaptureLog", "flushLogs", Rig, Hhn), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) && Gwc(this, "afterCaptureMetric", "flushMetrics", Aig, Ghn);
    }
    captureException(e, t, n) {
        const i = gI();
        if (MWr(e)) return Qh && zr.log(YGr), i;
        const r = {
            event_id: i,
            ...t
        };
        return this._process(this.eventFromException(e, r).then((s)=>this._captureEvent(s, r, n))), r.event_id;
    }
    captureMessage(e, t, n, i) {
        const r = {
            event_id: gI(),
            ...n
        }, s = kdt(e) ? e : String(e), o = Wce(e) ? this.eventFromMessage(s, t, r) : this.eventFromException(e, r);
        return this._process(o.then((a)=>this._captureEvent(a, r, i))), r.event_id;
    }
    captureEvent(e, t, n) {
        const i = gI();
        if (t?.originalException && MWr(t.originalException)) return Qh && zr.log(YGr), i;
        const r = {
            event_id: i,
            ...t
        }, s = e.sdkProcessingMetadata || {}, o = s.capturedSpanScope, a = s.capturedSpanIsolationScope;
        return this._process(this._captureEvent(e, r, o || n, a)), r.event_id;
    }
    captureSession(e) {
        this.sendSession(e), wdt(e, {
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
    async flush(e) {
        const t = this._transport;
        if (!t) return !0;
        this.emit("flush");
        const n = await this._isClientDoneProcessing(e), i = await t.flush(e);
        return n && i;
    }
    async close(e) {
        const t = await this.flush(e);
        return this.getOptions().enabled = !1, this.emit("close"), t;
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e);
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({ name: e })=>e.startsWith("Spotlight"))) && this._setupIntegrations();
    }
    getIntegrationByName(e) {
        return this._integrations[e];
    }
    addIntegration(e) {
        const t = this._integrations[e.name];
        Iwc(this, e, this._integrations), t || xwc(this, [
            e
        ]);
    }
    sendEvent(e, t = {}) {
        this.emit("beforeSendEvent", e, t);
        let n = twc(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const i of t.attachments || [])n = Xkc(n, Qkc(i));
        this.sendEnvelope(n).then((i)=>this.emit("afterSendEvent", e, i));
    }
    sendSession(e) {
        const { release: t, environment: n = Adt } = this._options;
        if ("aggregates" in e) {
            const r = e.attrs || {};
            if (!r.release && !t) {
                Qh && zr.warn(XGr);
                return;
            }
            r.release = r.release || t, r.environment = r.environment || n, e.attrs = r;
        } else {
            if (!e.release && !t) {
                Qh && zr.warn(XGr);
                return;
            }
            e.release = e.release || t, e.environment = e.environment || n;
        }
        this.emit("beforeSendSession", e);
        const i = ewc(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(i);
    }
    recordDroppedEvent(e, t, n = 1) {
        if (this._options.sendClientReports) {
            const i = `${e}:${t}`;
            Qh && zr.log(`Recording outcome: "${i}"${n > 1 ? ` (${n} times)` : ""}`), this._outcomes[i] = (this._outcomes[i] || 0) + n;
        }
    }
    on(e, t) {
        const n = this._hooks[e] = this._hooks[e] || new Set, i = (...r)=>t(...r);
        return n.add(i), ()=>{
            n.delete(i);
        };
    }
    emit(e, ...t) {
        const n = this._hooks[e];
        n && n.forEach((i)=>i(...t));
    }
    async sendEnvelope(e) {
        if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) try {
            return await this._transport.send(e);
        } catch (t) {
            return Qh && zr.error("Error while sending envelope:", t), {};
        }
        return Qh && zr.error("Transport disabled"), {};
    }
    _setupIntegrations() {
        const { integrations: e } = this._options;
        this._integrations = lig(this, e), xwc(this, e);
    }
    _updateSessionFromEvent(e, t) {
        let n = t.level === "fatal", i = !1;
        const r = t.exception?.values;
        if (r) {
            i = !0, n = !1;
            for (const a of r)if (a.mechanism?.handled === !1) {
                n = !0;
                break;
            }
        }
        const s = e.status === "ok";
        (s && e.errors === 0 || s && n) && (wdt(e, {
            ...n && {
                status: "crashed"
            },
            errors: e.errors || Number(i || n)
        }), this.captureSession(e));
    }
    async _isClientDoneProcessing(e) {
        let t = 0;
        for(; !e || t < e;){
            if (await new Promise((n)=>setTimeout(n, 1)), !this._numProcessing) return !0;
            t++;
        }
        return !1;
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(e, t, n, i) {
        const r = this.getOptions(), s = Object.keys(this._integrations);
        return !t.integrations && s?.length && (t.integrations = s), this.emit("preprocessEvent", e, t), e.type || i.setLastEventId(e.event_id || t.event_id), IGr(r, e, t, n, this, i).then((o)=>{
            if (o === null) return o;
            this.emit("postprocessEvent", o, t), o.contexts = {
                trace: FWr(n),
                ...o.contexts
            };
            const a = yhi(this, n);
            return o.sdkProcessingMetadata = {
                dynamicSamplingContext: a,
                ...o.sdkProcessingMetadata
            }, o;
        });
    }
    _captureEvent(e, t = {}, n = nv(), i = fI()) {
        return Qh && KGr(e) && zr.log(`Captured error event \`${Uwc(e)[0] || "<unknown>"}\``), this._processEvent(e, t, n, i).then((r)=>r.event_id, (r)=>{
            Qh && (Wwc(r) ? zr.log(r.message) : Hwc(r) ? zr.warn(r.message) : zr.warn(r));
        });
    }
    _processEvent(e, t, n, i) {
        const r = this.getOptions(), { sampleRate: s } = r, o = Vwc(e), a = KGr(e), c = e.type || "error", l = `before send for type \`${c}\``, u = typeof s > "u" ? void 0 : aqe(s);
        if (a && typeof u == "number" && Math.random() > u) return this.recordDroppedEvent("sample_rate", "error"), Chi(zGr(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
        const h = c === "replay_event" ? "replay" : c;
        return this._prepareEvent(e, t, n, i).then((p)=>{
            if (p === null) throw this.recordDroppedEvent("event_processor", h), zGr("An event processor returned `null`, will not send event.");
            if (t.data && t.data.__sentry__ === !0) return p;
            const f = Iig(this, r, p, t);
            return xig(f, l);
        }).then((p)=>{
            if (p === null) {
                if (this.recordDroppedEvent("before_send", h), o) {
                    const b = 1 + (e.spans || []).length;
                    this.recordDroppedEvent("before_send", "span", b);
                }
                throw zGr(`${l} returned \`null\`, will not send event.`);
            }
            const g = n.getSession() || i.getSession();
            if (a && g && this._updateSessionFromEvent(g, p), o) {
                const v = p.sdkProcessingMetadata?.spanCountBeforeProcessing || 0, b = p.spans ? p.spans.length : 0, y = v - b;
                y > 0 && this.recordDroppedEvent("before_send", "span", y);
            }
            const f = p.transaction_info;
            if (o && f && p.transaction !== e.transaction) {
                const v = "custom";
                p.transaction_info = {
                    ...f,
                    source: v
                };
            }
            return this.sendEvent(p, t), p;
        }).then(null, (p)=>{
            throw Wwc(p) || Hwc(p) ? p : (this.captureException(p, {
                mechanism: {
                    handled: !1,
                    type: "internal"
                },
                data: {
                    __sentry__: !0
                },
                originalException: p
            }), Mhi(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`));
        });
    }
    _process(e) {
        this._numProcessing++, e.then((t)=>(this._numProcessing--, t), (t)=>(this._numProcessing--, t));
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([t, n])=>{
            const [i, r] = t.split(":");
            return {
                reason: i,
                category: r,
                quantity: n
            };
        });
    }
    _flushOutcomes() {
        Qh && zr.log("Flushing outcomes...");
        const e = this._clearOutcomes();
        if (e.length === 0) {
            Qh && zr.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            Qh && zr.log("No dsn provided, will not send outcomes");
            return;
        }
        Qh && zr.log("Sending outcomes:", e);
        const t = Fwc(e, this._options.tunnel && zce(this._dsn));
        this.sendEnvelope(t);
    }
};

}
