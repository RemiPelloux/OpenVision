import { FYn } from "./Iwo.js";
import { $je, G1o, _Wu } from "./SZu.js";
import { JK, zje } from "./browserTracingIntegration.js";
import { $xe } from "./carrier.js";
import { fke } from "./client.js";
import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { Evt, q1o } from "./dynamicSamplingContext.js";
import { Z1o } from "./envelope_2.js";
import { jYn } from "./index.js";
import { Q1o } from "./logSpans.js";
import { EWu } from "./measurement.js";
import { Rte } from "./object.js";
import { bvt } from "./propagationContext.js";
import { Gje, mke } from "./scope.js";
import { $Yn, HYn, KE, QH, SFt, Svt, WYn, YF, bx, kFt, kvt } from "./semanticAttributes.js";
import { gke } from "./sentryNonRecordingSpan.js";
import { yFt } from "./spanOnScope.js";
import { Eun, T1o, zYn } from "./spanstatus.js";
import { pke, y1o } from "./time.js";
import { bOe, ohr, yvt } from "./trace.js";
import { Cde } from "./traceLifecycleProfiler.js";
import { chr } from "./tracing.js";
import { E } from "./tslib.es6.js";
import { E1o, I1o, KYn } from "./utils.js";
import { o_ } from "./worldwide.js";
function Vuy() {
    const { performance: t } = o_;
    if (!t?.now || !t.timeOrigin) return Gje;
    const e = t.timeOrigin;
    return ()=>(e + t.now()) / y1o;
}
function M3() {
    return (GHu ?? (GHu = Vuy()))();
}
var GHu;
function Kb() {
    const t = bOe();
    return yvt(t).getCurrentScope();
}
function ah() {
    return Kb().getClient();
}
function ndy(t) {
    if (t) {
        if (typeof t == "object" && "deref" in t && typeof t.deref == "function") try {
            return t.deref();
        } catch  {
            return;
        }
        return t;
    }
}
function VYn(t) {
    const e = t;
    return {
        scope: e[E1o],
        isolationScope: ndy(e[I1o])
    };
}
function ady(t) {
    const { spanId: e, traceId: n } = t.spanContext(), { data: i, op: r, parent_span_id: s, status: o, origin: a, links: l } = Yb(t);
    return {
        parent_span_id: s,
        span_id: e,
        trace_id: n,
        data: i,
        op: r,
        status: o,
        origin: a,
        links: l
    };
}
function L1o(t) {
    if (t && t.length > 0) return t.map(({ context: { spanId: e, traceId: n, traceFlags: i, ...r }, attributes: s })=>({
            span_id: e,
            trace_id: n,
            sampled: i === dhr,
            attributes: s,
            ...r
        }));
}
function Cvt(t) {
    return typeof t == "number" ? pWu(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? pWu(t.getTime()) : M3();
}
function pWu(t) {
    return t > 9999999999 ? t / 1e3 : t;
}
function Yb(t) {
    if (udy(t)) return t.getSpanJSON();
    const { spanId: e, traceId: n } = t.spanContext();
    if (cdy(t)) {
        const { attributes: i, startTime: r, name: s, endTime: o, status: a, links: l } = t, c = "parentSpanId" in t ? t.parentSpanId : "parentSpanContext" in t ? t.parentSpanContext?.spanId : void 0;
        return {
            span_id: e,
            trace_id: n,
            data: i,
            description: s,
            parent_span_id: c,
            start_timestamp: Cvt(r),
            timestamp: Cvt(o) || void 0,
            status: O1o(a),
            op: i[bx],
            origin: i[KE],
            links: L1o(l)
        };
    }
    return {
        span_id: e,
        trace_id: n,
        start_timestamp: 0,
        data: {}
    };
}
function cdy(t) {
    const e = t;
    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
}
function udy(t) {
    return typeof t.getSpanJSON == "function";
}
function O1o(t) {
    if (!(!t || t.code === T1o)) return t.code === zYn ? "ok" : t.message || "internal_error";
}
function CFt(t) {
    const e = new Set;
    function n(i) {
        if (!e.has(i) && zje(i)) {
            e.add(i);
            const r = i[Tvt] ? Array.from(i[Tvt]) : [];
            for (const s of r)n(s);
        }
    }
    return n(t), Array.from(e);
}
function JN(t) {
    return t[hhr] || t;
}
function B1o() {
    $1o || ($je(()=>{
        console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    }), $1o = !0);
}
var j1o, dhr, $1o, Tvt, hhr;
function mWu(t) {
    so.log(`Ignoring span ${t.op} - ${t.description} because it matches \`ignoreSpans\`.`);
}
function phr(t, e) {
    if (!e?.length || !t.description) return !1;
    for (const n of e){
        if (mdy(n)) {
            if (FYn(t.description, n)) return rg && mWu(t), !0;
            continue;
        }
        if (!n.name && !n.op) continue;
        const i = n.name ? FYn(t.description, n.name) : !0, r = n.op ? t.op && FYn(t.op, n.op) : !0;
        if (i && r) return rg && mWu(t), !0;
    }
    return !1;
}
function mdy(t) {
    return typeof t == "string" || t instanceof RegExp;
}
function vke(t) {
    const e = ah();
    if (!e) return {};
    const n = JN(t), i = Yb(n), r = i.data, s = n.spanContext().traceState, o = s?.get("sentry.sample_rate") ?? r[Svt] ?? r[$Yn];
    function a(g) {
        return (typeof o == "number" || typeof o == "string") && (g.sample_rate = `${o}`), g;
    }
    const l = n[q1o];
    if (l) return a(l);
    const c = s?.get("sentry.dsc"), u = c && ohr(c);
    if (u) return a(u);
    const d = G1o(t.spanContext().traceId, e), h = r[YF], p = i.description;
    return h !== "url" && p && (d.transaction = p), JK() && (d.sampled = String(zje(n)), d.sample_rand = s?.get("sentry.sample_rand") ?? VYn(n).scope?.getPropagationContext().sampleRand.toString()), a(d), e.emit("createDsc", d, n), d;
}
function wWu(t, e) {
    function n(p) {
        return !!p.trace_id && !!p.public_key;
    }
    const i = vke(t[0]), r = e?.getDsn(), s = e?.getOptions().tunnel, o = {
        sent_at: new Date().toISOString(),
        ...n(i) && {
            trace: i
        },
        ...!!s && r && {
            dsn: fke(r)
        }
    }, { beforeSendSpan: a, ignoreSpans: l } = e?.getOptions() || {}, c = l?.length ? t.filter((p)=>!phr(Yb(p), l)) : t, u = t.length - c.length;
    u && e?.recordDroppedEvent("before_send", "span", u);
    const d = a ? (p)=>{
        const g = Yb(p), f = a(g);
        return f || (B1o(), g);
    } : Yb, h = [];
    for (const p of c){
        const g = d(p);
        g && h.push(_Wu(g));
    }
    return Cde(o, h);
}
function TWu(t) {
    if (!rg) return;
    const { description: e = "< unknown name >", op: n = "< unknown op >" } = Yb(t), { spanId: i } = t.spanContext(), s = JN(t) === t, o = `[Tracing] Finishing "${n}" ${s ? "root " : ""}span "${e}" with ID ${i}`;
    so.log(o);
}
function eko(t) {
    if (!t || t.length === 0) return;
    const e = {};
    return t.forEach((n)=>{
        const i = n.attributes || {}, r = i[SFt], s = i[kFt];
        typeof r == "string" && typeof s == "number" && (e[n.name] = {
            value: s,
            unit: r
        });
    }), e;
}
function IWu(t) {
    return t && typeof t == "number" || t instanceof Date || Array.isArray(t);
}
function xWu(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
}
function Tdy(t) {
    return t instanceof Pun && t.isStandaloneSpan();
}
function Edy(t) {
    const e = ah();
    if (!e) return;
    const n = t[1];
    if (!n || n.length === 0) {
        e.recordDroppedEvent("before_send", "span");
        return;
    }
    e.sendEnvelope(t);
}
var tko, Pun;
export { $1o, B1o, CFt, Cvt, Edy, GHu, IWu, JN, Kb, L1o, M3, O1o, Pun, TWu, Tdy, Tvt, VYn, Vuy, Yb, ady, ah, cdy, dhr, eko, hhr, j1o, mWu, mdy, ndy, pWu, phr, tko, udy, vke, wWu, xWu };
var __wakaru_uQ_initialized = false;
export function uQ() {
if (__wakaru_uQ_initialized) return;
__wakaru_uQ_initialized = true;
"use strict";
E(), jYn(), $xe(), JA(), QH(), Eun(), KYn(), Rte(), bvt(), pke(), chr(), JC(), yFt(), j1o = 0, dhr = 1, $1o = !1, Tvt = "_sentryChildSpans", hhr = "_sentryRootSpan";

}
var __wakaru_nko_initialized = false;
export function nko() {
if (__wakaru_nko_initialized) return;
__wakaru_nko_initialized = true;
"use strict";
E(), JA(), qR(), Z1o(), QH(), JC(), bvt(), uQ(), pke(), Evt(), Q1o(), EWu(), KYn(), tko = 1e3, Pun = class {
    constructor(t = {}){
        this._traceId = t.traceId || mke(), this._spanId = t.spanId || gke(), this._startTime = t.startTimestamp || M3(), this._links = t.links, this._attributes = {}, this.setAttributes({
            [KE]: "manual",
            [bx]: t.op,
            ...t.attributes
        }), this._name = t.name, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.endTimestamp && (this._endTime = t.endTimestamp), this._events = [], this._isStandaloneSpan = t.isStandalone, this._endTime && this._onSpanEnded();
    }
    addLink(t) {
        return this._links ? this._links.push(t) : this._links = [
            t
        ], this;
    }
    addLinks(t) {
        return this._links ? this._links.push(...t) : this._links = t, this;
    }
    recordException(t, e) {}
    spanContext() {
        const { _spanId: t, _traceId: e, _sampled: n } = this;
        return {
            spanId: t,
            traceId: e,
            traceFlags: n ? dhr : j1o
        };
    }
    setAttribute(t, e) {
        return e === void 0 ? delete this._attributes[t] : this._attributes[t] = e, this;
    }
    setAttributes(t) {
        return Object.keys(t).forEach((e)=>this.setAttribute(e, t[e])), this;
    }
    updateStartTime(t) {
        this._startTime = Cvt(t);
    }
    setStatus(t) {
        return this._status = t, this;
    }
    updateName(t) {
        return this._name = t, this.setAttribute(YF, "custom"), this;
    }
    end(t) {
        this._endTime || (this._endTime = Cvt(t), TWu(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[bx],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: O1o(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[KE],
            profile_id: this._attributes[WYn],
            exclusive_time: this._attributes[kvt],
            measurements: eko(this._events),
            is_segment: this._isStandaloneSpan && JN(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? JN(this).spanContext().spanId : void 0,
            links: L1o(this._links)
        };
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(t, e, n) {
        rg && so.log("[Tracing] Adding an event to span:", t);
        const i = IWu(e) ? e : n || M3(), r = IWu(e) ? {} : e || {}, s = {
            name: t,
            time: Cvt(i),
            attributes: r
        };
        return this._events.push(s), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        const t = ah();
        if (t && t.emit("spanEnd", this), !(this._isStandaloneSpan || this === JN(this))) return;
        if (this._isStandaloneSpan) {
            this._sampled ? Edy(wWu([
                this
            ], t)) : (rg && so.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t && t.recordDroppedEvent("sample_rate", "span"));
            return;
        }
        const n = this._convertSpanToTransaction();
        n && (VYn(this).scope || Kb()).captureEvent(n);
    }
    _convertSpanToTransaction() {
        if (!xWu(Yb(this))) return;
        this._name || (rg && so.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        const { scope: t, isolationScope: e } = VYn(this), n = t?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (this._sampled !== !0) return;
        const r = CFt(this).filter((c)=>c !== this && !Tdy(c)).map((c)=>Yb(c)).filter(xWu), s = this._attributes[YF];
        delete this._attributes[HYn], r.forEach((c)=>{
            delete c.data[HYn];
        });
        const o = {
            contexts: {
                trace: ady(this)
            },
            spans: r.length > tko ? r.sort((c, u)=>c.start_timestamp - u.start_timestamp).slice(0, tko) : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: t,
                capturedSpanIsolationScope: e,
                dynamicSamplingContext: vke(this)
            },
            request: n,
            ...s && {
                transaction_info: {
                    source: s
                }
            }
        }, a = eko(this._events);
        return a && Object.keys(a).length && (rg && so.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), o.measurements = a), o;
    }
};

}
