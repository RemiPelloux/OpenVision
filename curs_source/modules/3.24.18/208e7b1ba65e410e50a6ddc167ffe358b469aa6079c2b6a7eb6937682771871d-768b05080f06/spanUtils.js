import { U8, x8 } from "./baggage.js";
import { xs } from "./carrier.js";
import { sk } from "./console-integration.js";
import { K8 } from "./constants_2.js";
import { dt } from "./currentScopes.js";
import { gt, tt } from "./debug-build.js";
import { Ke, lt, yp } from "./debug-logger.js";
import { W8 } from "./dsn.js";
import { co, jC } from "./dynamicSamplingContext.js";
import { zC } from "./envelope_2.js";
import { Pp } from "./index_2.js";
import { YC } from "./logSpans.js";
import { Z8 } from "./measurement.js";
import { _r } from "./object.js";
import { oo } from "./propagationContext.js";
import { NC, bC, mk, yc } from "./scope.js";
import { A8, I8, LC, M8, N8, Np, P8, Rn, UC, gd, wc } from "./semanticAttributes.js";
import { pk } from "./sentryNonRecordingSpan.js";
import { Sc } from "./spanOnScope.js";
import { O8, _k, fd } from "./spanstatus.js";
import { C8 } from "./stackStrategy.js";
import { DC, us } from "./time.js";
import { Tk } from "./tracing.js";
import { h } from "./tslib.es6.js";
import { Dp, FC, xC } from "./utils.js";
import { ld } from "./version.js";
import { Ot } from "./worldwide.js";
function dd() {
    return rk(Ot), Ot;
}
function rk(e) {
    const t = e.__SENTRY__ = e.__SENTRY__ || {};
    return t.version = t.version || ld, t[ld] = t[ld] || {};
}
function ak(e) {
    return bC(e, "String");
}
function d3e(e) {
    return bC(e, "RegExp");
}
function ck(e, t, n = !1) {
    return ak(e) ? d3e(t) ? t.test(e) : ak(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function T3e() {
    const { performance: e } = Ot;
    if (!e?.now || !e.timeOrigin) return NC;
    const t = e.timeOrigin;
    return ()=>(t + e.now()) / DC;
}
function Cp() {
    return (w8 ?? (w8 = T3e()))();
}
var w8;
function S3e() {
    return yp("defaultCurrentScope", ()=>new yc);
}
function y3e() {
    return yp("defaultIsolationScope", ()=>new yc);
}
function hd() {
    const e = dd(), t = rk(e);
    return t.stack = t.stack || new C8(S3e(), y3e());
}
function w3e(e) {
    return hd().withScope(e);
}
function E3e(e, t) {
    const n = hd();
    return n.withScope(()=>(n.getStackTop().scope = e, t(e)));
}
function R8(e) {
    return hd().withScope(()=>e(hd().getIsolationScope()));
}
function b3e() {
    return {
        withIsolationScope: R8,
        withScope: w3e,
        withSetScope: E3e,
        withSetIsolationScope: (e, t)=>R8(t),
        getCurrentScope: ()=>hd().getScope(),
        getIsolationScope: ()=>hd().getIsolationScope()
    };
}
function Mp(e) {
    const t = rk(e);
    return t.acs ? t.acs : b3e();
}
function Rr() {
    const e = dd();
    return Mp(e).getCurrentScope();
}
function Kn() {
    return Rr().getClient();
}
function P3e(e) {
    if (e) {
        if (typeof e == "object" && "deref" in e && typeof e.deref == "function") try {
            return e.deref();
        } catch  {
            return;
        }
        return e;
    }
}
function vk(e) {
    const t = e;
    return {
        scope: t[xC],
        isolationScope: P3e(t[FC])
    };
}
function D3e(e) {
    const t = O3e(e);
    if (!t) return;
    const n = Object.entries(t).reduce((r, [s, i])=>{
        if (s.match(x8)) {
            const a = s.slice(U8.length);
            r[a] = i;
        }
        return r;
    }, {});
    if (Object.keys(n).length > 0) return n;
}
function O3e(e) {
    if (!(!e || !ak(e) && !Array.isArray(e))) return Array.isArray(e) ? e.reduce((t, n)=>{
        const r = L8(n);
        return Object.entries(r).forEach(([s, i])=>{
            t[s] = i;
        }), t;
    }, {}) : L8(e);
}
function L8(e) {
    return e.split(",").map((t)=>{
        const n = t.indexOf("=");
        if (n === -1) return [];
        const r = t.slice(0, n), s = t.slice(n + 1);
        return [
            r,
            s
        ].map((i)=>{
            try {
                return decodeURIComponent(i.trim());
            } catch  {
                return;
            }
        });
    }).reduce((t, [n, r])=>(n && r && (t[n] = r), t), {});
}
function F8(e, t = !1) {
    const { host: n, path: r, pass: s, port: i, projectId: a, protocol: o, publicKey: l } = e;
    return `${o}://${l}${t && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${a}`;
}
function L3e(e) {
    return e.match(W8)?.[1];
}
function U3e(e) {
    const t = e.getOptions(), { host: n } = e.getDsn() || {};
    let r;
    return t.orgId ? r = String(t.orgId) : n && (r = L3e(n)), r;
}
function F3e(e) {
    const { spanId: t, traceId: n } = e.spanContext(), { data: r, op: s, parent_span_id: i, status: a, origin: o, links: l } = ps(e);
    return {
        parent_span_id: i,
        span_id: t,
        trace_id: n,
        data: r,
        op: s,
        status: a,
        origin: o,
        links: l
    };
}
function G8(e) {
    if (e && e.length > 0) return e.map(({ context: { spanId: t, traceId: n, traceFlags: r, ...s }, attributes: i })=>({
            span_id: t,
            trace_id: n,
            sampled: r === kk,
            attributes: i,
            ...s
        }));
}
function vd(e) {
    return typeof e == "number" ? V8(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? V8(e.getTime()) : Cp();
}
function V8(e) {
    return e > 9999999999 ? e / 1e3 : e;
}
function ps(e) {
    if (G3e(e)) return e.getSpanJSON();
    const { spanId: t, traceId: n } = e.spanContext();
    if (B3e(e)) {
        const { attributes: r, startTime: s, name: i, endTime: a, status: o, links: l } = e, d = "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext?.spanId : void 0;
        return {
            span_id: t,
            trace_id: n,
            data: r,
            description: i,
            parent_span_id: d,
            start_timestamp: vd(s),
            timestamp: vd(a) || void 0,
            status: $8(o),
            op: r[gd],
            origin: r[wc],
            links: G8(l)
        };
    }
    return {
        span_id: t,
        trace_id: n,
        start_timestamp: 0,
        data: {}
    };
}
function B3e(e) {
    const t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function G3e(e) {
    return typeof e.getSpanJSON == "function";
}
function Lp(e) {
    const { traceFlags: t } = e.spanContext();
    return t === kk;
}
function $8(e) {
    if (!(!e || e.code === O8)) return e.code === _k ? "ok" : e.message || "internal_error";
}
function V3e(e) {
    const t = new Set;
    function n(r) {
        if (!t.has(r) && Lp(r)) {
            t.add(r);
            const s = r[Td] ? Array.from(r[Td]) : [];
            for (const i of s)n(i);
        }
    }
    return n(e), Array.from(t);
}
function Ec(e) {
    return e[Sk] || e;
}
function $3e() {
    BC || (sk(()=>{
        console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    }), BC = !0);
}
var WC, kk, BC, Td, Sk;
function GC(e) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const t = e || Kn()?.getOptions();
    return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function q8(e) {
    lt.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function H3e(e, t) {
    if (!t?.length || !e.description) return !1;
    for (const n of t){
        if (q3e(n)) {
            if (ck(e.description, n)) return tt && q8(e), !0;
            continue;
        }
        if (!n.name && !n.op) continue;
        const r = n.name ? ck(e.description, n.name) : !0, s = n.op ? e.op && ck(e.op, n.op) : !0;
        if (r && s) return tt && q8(e), !0;
    }
    return !1;
}
function q3e(e) {
    return typeof e == "string" || e instanceof RegExp;
}
function z8(e, t) {
    const n = t.getOptions(), { publicKey: r } = t.getDsn() || {}, s = {
        environment: n.environment || K8,
        release: n.release,
        public_key: r,
        trace_id: e,
        org_id: U3e(t)
    };
    return t.emit("createDsc", s), s;
}
function Up(e) {
    const t = Kn();
    if (!t) return {};
    const n = Ec(e), r = ps(n), s = r.data, i = n.spanContext().traceState, a = i?.get("sentry.sample_rate") ?? s[LC] ?? s[I8];
    function o(T) {
        return (typeof a == "number" || typeof a == "string") && (T.sample_rate = `${a}`), T;
    }
    const l = n[jC];
    if (l) return o(l);
    const d = i?.get("sentry.dsc"), u = d && D3e(d);
    if (u) return o(u);
    const m = z8(e.spanContext().traceId, t), f = s[Np], v = r.description;
    return f !== "url" && v && (m.transaction = v), GC() && (m.sampled = String(Lp(n)), m.sample_rand = i?.get("sentry.sample_rand") ?? vk(n).scope?.getPropagationContext().sampleRand.toString()), o(m), t.emit("createDsc", m, n), m;
}
function J8(e, t = []) {
    return [
        e,
        t
    ];
}
function tFe(e) {
    return [
        {
            type: "span"
        },
        e
    ];
}
function nFe(e, t) {
    function n(v) {
        return !!v.trace_id && !!v.public_key;
    }
    const r = Up(e[0]), s = t?.getDsn(), i = t?.getOptions().tunnel, a = {
        sent_at: new Date().toISOString(),
        ...n(r) && {
            trace: r
        },
        ...!!i && s && {
            dsn: F8(s)
        }
    }, { beforeSendSpan: o, ignoreSpans: l } = t?.getOptions() || {}, d = l?.length ? e.filter((v)=>!H3e(ps(v), l)) : e, u = e.length - d.length;
    u && t?.recordDroppedEvent("before_send", "span", u);
    const m = o ? (v)=>{
        const T = ps(v), S = o(T);
        return S || ($3e(), T);
    } : ps, f = [];
    for (const v of d){
        const T = m(v);
        T && f.push(tFe(T));
    }
    return J8(a, f);
}
function sFe(e) {
    if (!tt) return;
    const { description: t = "< unknown name >", op: n = "< unknown op >" } = ps(e), { spanId: r } = e.spanContext(), i = Ec(e) === e, a = `[Tracing] Finishing "${n}" ${i ? "root " : ""}span "${t}" with ID ${r}`;
    lt.log(a);
}
function Q8(e) {
    if (!e || e.length === 0) return;
    const t = {};
    return e.forEach((n)=>{
        const r = n.attributes || {}, s = r[A8], i = r[M8];
        typeof s == "string" && typeof i == "number" && (t[n.name] = {
            value: i,
            unit: s
        });
    }), t;
}
function eW(e) {
    return e && typeof e == "number" || e instanceof Date || Array.isArray(e);
}
function tW(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function iFe(e) {
    return e instanceof bk && e.isStandaloneSpan();
}
function aFe(e) {
    const t = Kn();
    if (!t) return;
    const n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent("before_send", "span");
        return;
    }
    t.sendEnvelope(e);
}
var JC, bk;
export { $3e, $8, B3e, BC, Cp, D3e, E3e, Ec, F3e, F8, G3e, G8, GC, H3e, J8, JC, Kn, L3e, L8, Lp, Mp, O3e, P3e, Q8, R8, Rr, S3e, Sk, T3e, Td, U3e, Up, V3e, V8, WC, aFe, ak, b3e, bk, ck, d3e, dd, eW, hd, iFe, kk, nFe, ps, q3e, q8, rk, sFe, tFe, tW, vd, vk, w3e, w8, y3e, z8 };
var __wakaru_sr_initialized = false;
export function sr() {
if (__wakaru_sr_initialized) return;
__wakaru_sr_initialized = true;
"use strict";
h(), Pp(), xs(), dt(), Rn(), fd(), Dp(), _r(), oo(), us(), Tk(), Ke(), Sc(), WC = 0, kk = 1, BC = !1, Td = "_sentryChildSpans", Sk = "_sentryRootSpan";

}
var __wakaru_XC_initialized = false;
export function XC() {
if (__wakaru_XC_initialized) return;
__wakaru_XC_initialized = true;
"use strict";
h(), dt(), gt(), zC(), Rn(), Ke(), oo(), sr(), us(), co(), YC(), Z8(), Dp(), JC = 1e3, bk = class {
    constructor(e = {}){
        this._traceId = e.traceId || mk(), this._spanId = e.spanId || pk(), this._startTime = e.startTimestamp || Cp(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [wc]: "manual",
            [gd]: e.op,
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
            traceFlags: n ? kk : WC
        };
    }
    setAttribute(e, t) {
        return t === void 0 ? delete this._attributes[e] : this._attributes[e] = t, this;
    }
    setAttributes(e) {
        return Object.keys(e).forEach((t)=>this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
        this._startTime = vd(e);
    }
    setStatus(e) {
        return this._status = e, this;
    }
    updateName(e) {
        return this._name = e, this.setAttribute(Np, "custom"), this;
    }
    end(e) {
        this._endTime || (this._endTime = vd(e), sFe(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[gd],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: $8(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[wc],
            profile_id: this._attributes[P8],
            exclusive_time: this._attributes[N8],
            measurements: Q8(this._events),
            is_segment: this._isStandaloneSpan && Ec(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? Ec(this).spanContext().spanId : void 0,
            links: G8(this._links)
        };
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
        tt && lt.log("[Tracing] Adding an event to span:", e);
        const r = eW(t) ? t : n || Cp(), s = eW(t) ? {} : t || {}, i = {
            name: e,
            time: vd(r),
            attributes: s
        };
        return this._events.push(i), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        const e = Kn();
        if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === Ec(this))) return;
        if (this._isStandaloneSpan) {
            this._sampled ? aFe(nFe([
                this
            ], e)) : (tt && lt.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
            return;
        }
        const n = this._convertSpanToTransaction();
        n && (vk(this).scope || Rr()).captureEvent(n);
    }
    _convertSpanToTransaction() {
        if (!tW(ps(this))) return;
        this._name || (tt && lt.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        const { scope: e, isolationScope: t } = vk(this), n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
        if (this._sampled !== !0) return;
        const s = V3e(this).filter((d)=>d !== this && !iFe(d)).map((d)=>ps(d)).filter(tW), i = this._attributes[Np];
        delete this._attributes[UC], s.forEach((d)=>{
            delete d.data[UC];
        });
        const a = {
            contexts: {
                trace: F3e(this)
            },
            spans: s.length > JC ? s.sort((d, u)=>d.start_timestamp - u.start_timestamp).slice(0, JC) : s,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: "transaction",
            sdkProcessingMetadata: {
                capturedSpanScope: e,
                capturedSpanIsolationScope: t,
                dynamicSamplingContext: Up(this)
            },
            request: n,
            ...i && {
                transaction_info: {
                    source: i
                }
            }
        }, o = Q8(this._events);
        return o && Object.keys(o).length && (tt && lt.log("[Measurements] Adding measurements to transaction event", JSON.stringify(o, void 0, 2)), a.measurements = o), a;
    }
};

}
