import { vhn } from "./HVr.js";
import { T7, lAe } from "./browserTracingIntegration.js";
import { tge } from "./carrier.js";
import { zce } from "./client.js";
import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { sGr, uqe } from "./dynamicSamplingContext.js";
import { dGr } from "./envelope_2.js";
import { yhn } from "./index.js";
import { hGr } from "./logSpans.js";
import { swc } from "./measurement.js";
import { wV } from "./object.js";
import { iqe } from "./propagationContext.js";
import { Zkc, rAe, rGr } from "./qIc.js";
import { aAe, jce } from "./scope.js";
import { Edt, Shn, Tdt, W9, a1, jC, khn, oqe, sqe, whn, zL } from "./semanticAttributes.js";
import { qce } from "./sentryNonRecordingSpan.js";
import { Cdt } from "./spanOnScope.js";
import { Ehn, SLt, UWr } from "./spanstatus.js";
import { LWr, Vce } from "./time.js";
import { jke, rqe, uhi } from "./trace.js";
import { phi } from "./tracing.js";
import { x } from "./tslib.es6.js";
import { $Wr, HWr, Ihn } from "./utils.js";
import { eJ } from "./utils_29.js";
import { Og } from "./worldwide.js";
function ang() {
    const { performance: e } = Og;
    if (!e?.now || !e.timeOrigin) return aAe;
    const t = e.timeOrigin;
    return ()=>(t + e.now()) / LWr;
}
function sR() {
    return (wkc ?? (wkc = ang()))();
}
var wkc;
function nv() {
    const e = jke();
    return rqe(e).getCurrentScope();
}
function Pu() {
    return nv().getClient();
}
function fng(e) {
    if (e) {
        if (typeof e == "object" && "deref" in e && typeof e.deref == "function") try {
            return e.deref();
        } catch  {
            return;
        }
        return e;
    }
}
function xhn(e) {
    const t = e;
    return {
        scope: t[$Wr],
        isolationScope: fng(t[HWr])
    };
}
function Sng(e) {
    const { spanId: t, traceId: n } = e.spanContext(), { data: i, op: r, parent_span_id: s, status: o, origin: a, links: c } = iv(e);
    return {
        parent_span_id: s,
        span_id: t,
        trace_id: n,
        data: i,
        op: r,
        status: o,
        origin: a,
        links: c
    };
}
function YWr(e) {
    if (e && e.length > 0) return e.map(({ context: { spanId: t, traceId: n, traceFlags: i, ...r }, attributes: s })=>({
            span_id: t,
            trace_id: n,
            sampled: i === ghi,
            attributes: s,
            ...r
        }));
}
function cqe(e) {
    return typeof e == "number" ? qkc(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? qkc(e.getTime()) : sR();
}
function qkc(e) {
    return e > 9999999999 ? e / 1e3 : e;
}
function iv(e) {
    if (Cng(e)) return e.getSpanJSON();
    const { spanId: t, traceId: n } = e.spanContext();
    if (wng(e)) {
        const { attributes: i, startTime: r, name: s, endTime: o, status: a, links: c } = e, l = "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext?.spanId : void 0;
        return {
            span_id: t,
            trace_id: n,
            data: i,
            description: s,
            parent_span_id: l,
            start_timestamp: cqe(r),
            timestamp: cqe(o) || void 0,
            status: XWr(a),
            op: i[a1],
            origin: i[jC],
            links: YWr(c)
        };
    }
    return {
        span_id: t,
        trace_id: n,
        start_timestamp: 0,
        data: {}
    };
}
function wng(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function Cng(e) {
    return typeof e.getSpanJSON == "function";
}
function XWr(e) {
    if (!(!e || e.code === UWr)) return e.code === Ehn ? "ok" : e.message || "internal_error";
}
function Idt(e) {
    const t = new Set;
    function n(i) {
        if (!t.has(i) && lAe(i)) {
            t.add(i);
            const r = i[lqe] ? Array.from(i[lqe]) : [];
            for (const s of r)n(s);
        }
    }
    return n(e), Array.from(t);
}
function pD(e) {
    return e[fhi] || e;
}
function QWr() {
    tGr || (rAe(()=>{
        console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    }), tGr = !0);
}
var eGr, ghi, tGr, lqe, fhi;
function zkc(e) {
    zr.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function vhi(e, t) {
    if (!t?.length || !e.description) return !1;
    for (const n of t){
        if (Ing(n)) {
            if (vhn(e.description, n)) return Qh && zkc(e), !0;
            continue;
        }
        if (!n.name && !n.op) continue;
        const i = n.name ? vhn(e.description, n.name) : !0, r = n.op ? e.op && vhn(e.op, n.op) : !0;
        if (i && r) return Qh && zkc(e), !0;
    }
    return !1;
}
function Ing(e) {
    return typeof e == "string" || e instanceof RegExp;
}
function Kce(e) {
    const t = Pu();
    if (!t) return {};
    const n = pD(e), i = iv(n), r = i.data, s = n.spanContext().traceState, o = s?.get("sentry.sample_rate") ?? r[sqe] ?? r[Shn];
    function a(f) {
        return (typeof o == "number" || typeof o == "string") && (f.sample_rate = `${o}`), f;
    }
    const c = n[sGr];
    if (c) return a(c);
    const l = s?.get("sentry.dsc"), u = l && uhi(l);
    if (u) return a(u);
    const h = rGr(e.spanContext().traceId, t), p = r[zL], g = i.description;
    return p !== "url" && g && (h.transaction = g), T7() && (h.sampled = String(lAe(n)), h.sample_rand = s?.get("sentry.sample_rand") ?? xhn(n).scope?.getPropagationContext().sampleRand.toString()), a(h), t.emit("createDsc", h, n), h;
}
function nwc(e, t) {
    function n(g) {
        return !!g.trace_id && !!g.public_key;
    }
    const i = Kce(e[0]), r = t?.getDsn(), s = t?.getOptions().tunnel, o = {
        sent_at: new Date().toISOString(),
        ...n(i) && {
            trace: i
        },
        ...!!s && r && {
            dsn: zce(r)
        }
    }, { beforeSendSpan: a, ignoreSpans: c } = t?.getOptions() || {}, l = c?.length ? e.filter((g)=>!vhi(iv(g), c)) : e, u = e.length - l.length;
    u && t?.recordDroppedEvent("before_send", "span", u);
    const h = a ? (g)=>{
        const f = iv(g), v = a(f);
        return v || (QWr(), f);
    } : iv, p = [];
    for (const g of l){
        const f = h(g);
        f && p.push(Zkc(f));
    }
    return eJ(o, p);
}
function rwc(e) {
    if (!Qh) return;
    const { description: t = "< unknown name >", op: n = "< unknown op >" } = iv(e), { spanId: i } = e.spanContext(), s = pD(e) === e, o = `[Tracing] Finishing "${n}" ${s ? "root " : ""}span "${t}" with ID ${i}`;
    zr.log(o);
}
function mGr(e) {
    if (!e || e.length === 0) return;
    const t = {};
    return e.forEach((n)=>{
        const i = n.attributes || {}, r = i[Tdt], s = i[Edt];
        typeof r == "string" && typeof s == "number" && (t[n.name] = {
            value: s,
            unit: r
        });
    }), t;
}
function owc(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e);
}
function awc(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function Ung(e) {
    return e instanceof ELt && e.isStandaloneSpan();
}
function $ng(e) {
    const t = Pu();
    if (!t) return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return;
    }
    t.sendEnvelope(e);
}
var gGr, ELt;
export { $ng, Cng, ELt, Idt, Ing, Kce, Pu, QWr, Sng, Ung, XWr, YWr, ang, awc, cqe, eGr, fhi, fng, gGr, ghi, iv, lqe, mGr, nv, nwc, owc, pD, qkc, rwc, sR, tGr, vhi, wkc, wng, xhn, zkc };
var __wakaru_zH_initialized = false;
export function zH() {
if (__wakaru_zH_initialized) return;
__wakaru_zH_initialized = true;
"use strict";
x(), yhn(), tge(), NT(), W9(), SLt(), Ihn(), wV(), iqe(), Vce(), phi(), Xk(), Cdt(), eGr = 0, ghi = 1, tGr = !1, lqe = "_sentryChildSpans", fhi = "_sentryRootSpan";

}
var __wakaru_fGr_initialized = false;
export function fGr() {
if (__wakaru_fGr_initialized) return;
__wakaru_fGr_initialized = true;
"use strict";
x(), NT(), kE(), dGr(), W9(), Xk(), iqe(), zH(), Vce(), uqe(), hGr(), swc(), Ihn(), gGr = 1e3, ELt = class {
    constructor(e = {}){
        this._traceId = e.traceId || jce(), this._spanId = e.spanId || qce(), this._startTime = e.startTimestamp || sR(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [jC]: "manual",
            [a1]: e.op,
            ...e.attributes
        }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded();
    }
    addLink(e) {
        return this._links ? this._links.push(e) : this._links = [
            e
        ], this;
    }
    addLinks(e) {
        return this._links ? this._links.push(...e) : this._links = e, this;
    }
    recordException(e, t) {}
    spanContext() {
        const { _spanId: e, _traceId: t, _sampled: n } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: n ? ghi : eGr
        };
    }
    setAttribute(e, t) {
        return t === void 0 ? delete this._attributes[e] : this._attributes[e] = t, this;
    }
    setAttributes(e) {
        return Object.keys(e).forEach((t)=>this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
        this._startTime = cqe(e);
    }
    setStatus(e) {
        return this._status = e, this;
    }
    updateName(e) {
        return this._name = e, this.setAttribute(zL, "custom"), this;
    }
    end(e) {
        this._endTime || (this._endTime = cqe(e), rwc(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[a1],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: XWr(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[jC],
            profile_id: this._attributes[whn],
            exclusive_time: this._attributes[oqe],
            measurements: mGr(this._events),
            is_segment: this._isStandaloneSpan && pD(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? pD(this).spanContext().spanId : void 0,
            links: YWr(this._links)
        };
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
        Qh && zr.log("[Tracing] Adding an event to span:", e);
        const i = owc(t) ? t : n || sR(), r = owc(t) ? {} : t || {}, s = {
            name: e,
            time: cqe(i),
            attributes: r
        };
        return this._events.push(s), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        const e = Pu();
        if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === pD(this))) return;
        if (this._isStandaloneSpan) {
            this._sampled ? $ng(nwc([
                this
            ], e)) : (Qh && zr.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return;
        }
        const n = this._convertSpanToTransaction();
        n && (xhn(this).scope || nv()).captureEvent(n);
    }
    _convertSpanToTransaction() {
        if (!awc(iv(this))) return;
        this._name || (Qh && zr.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        const { scope: e, isolationScope: t } = xhn(this), n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (this._sampled !== !0) return;
        const r = Idt(this).filter((l)=>l !== this && !Ung(l)).map((l)=>iv(l)).filter(awc), s = this._attributes[zL];
        delete this._attributes[khn], r.forEach((l)=>{
            delete l.data[khn];
        });
        const o = {
            contexts: {
                trace: Sng(this)
            },
            spans: r.length > gGr ? r.sort((l, u)=>l.start_timestamp - u.start_timestamp).slice(0, gGr) : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: e,
                capturedSpanIsolationScope: t,
                dynamicSamplingContext: Kce(this)
            },
            request: n,
            ...s && {
                transaction_info: {
                    source: s
                }
            }
        }, a = mGr(this._events);
        return a && Object.keys(a).length && (Qh && zr.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), o.measurements = a), o;
    }
};

}
