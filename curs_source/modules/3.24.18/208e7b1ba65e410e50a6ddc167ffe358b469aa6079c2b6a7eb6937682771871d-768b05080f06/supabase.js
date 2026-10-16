import { uI } from "./breadcrumbs.js";
import { fk, y8 } from "./console.js";
import { bW } from "./console_2.js";
import { gt, tt } from "./debug-build.js";
import { Ke, lt } from "./debug-logger.js";
import { jC } from "./dynamicSamplingContext.js";
import { Vr } from "./exports.js";
import { ir } from "./index_3.js";
import { ar } from "./integration.js";
import { fn } from "./is.js";
import { es } from "./misc.js";
import { Ip, ao, hk, ok } from "./scope.js";
import { LC, Np, Rn, gd, wc } from "./semanticAttributes.js";
import { wk } from "./sentryNonRecordingSpan.js";
import { ms } from "./sessionReplay.js";
import { Ec, GC, Kn, Lp, Mp, Rr, Sk, Td, Up, bk, dd, ps, vd } from "./spanUtils.js";
import { _k, vr } from "./spanstatus.js";
import { RC } from "./stackStrategy.js";
import { gs } from "./storageMain.js";
import { QC } from "./trace.js";
import { h } from "./tslib.es6.js";
import { FC, xC } from "./utils.js";
import { Ot } from "./worldwide.js";
function A3e(e) {
    if (e < 400 && e >= 100) return {
        code: _k
    };
    if (e >= 400 && e < 500) switch(e){
        case 401:
            return {
                code: vr,
                message: "unauthenticated"
            };
        case 403:
            return {
                code: vr,
                message: "permission_denied"
            };
        case 404:
            return {
                code: vr,
                message: "not_found"
            };
        case 409:
            return {
                code: vr,
                message: "already_exists"
            };
        case 413:
            return {
                code: vr,
                message: "failed_precondition"
            };
        case 429:
            return {
                code: vr,
                message: "resource_exhausted"
            };
        case 499:
            return {
                code: vr,
                message: "cancelled"
            };
        default:
            return {
                code: vr,
                message: "invalid_argument"
            };
    }
    if (e >= 500 && e < 600) switch(e){
        case 501:
            return {
                code: vr,
                message: "unimplemented"
            };
        case 503:
            return {
                code: vr,
                message: "unavailable"
            };
        case 504:
            return {
                code: vr,
                message: "deadline_exceeded"
            };
        default:
            return {
                code: vr,
                message: "internal_error"
            };
    }
    return {
        code: vr,
        message: "internal_error"
    };
}
function D8(e, t) {
    e.setAttribute("http.response.status_code", t);
    const n = A3e(t);
    n.message !== "unknown_error" && e.setStatus(n);
}
function M3e(e) {
    try {
        const t = Ot.WeakRef;
        if (typeof t == "function") return new t(e);
    } catch  {}
    return e;
}
function N3e(e, t, n) {
    e && (ao(e, FC, M3e(n)), ao(e, xC, t));
}
function B8(e) {
    if (typeof e == "boolean") return Number(e);
    const t = typeof e == "string" ? parseFloat(e) : e;
    if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t;
}
function j8(e, t) {
    const n = e[Sk] || e;
    ao(t, Sk, n), e[Td] ? e[Td].add(t) : ao(e, Td, new Set([
        t
    ]));
}
function $C(e, t) {
    ao(e, jC, t);
}
function rFe(e) {
    if (!tt) return;
    const { description: t = "< unknown name >", op: n = "< unknown op >", parent_span_id: r } = ps(e), { spanId: s } = e.spanContext(), i = Lp(e), a = Ec(e), o = a === e, l = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${o ? "root " : ""}span`, d = [
        `op: ${n}`,
        `name: ${t}`,
        `ID: ${s}`
    ];
    if (r && d.push(`parent ID: ${r}`), !o) {
        const { op: u, description: m } = ps(a);
        d.push(`root ID: ${a.spanContext().spanId}`), u && d.push(`root op: ${u}`), m && d.push(`root description: ${m}`);
    }
    lt.log(`${l}
  ${d.join(`
  `)}`);
}
function oFe(e, t, n = ()=>{}, r = ()=>{}) {
    let s;
    try {
        s = e();
    } catch (i) {
        throw t(i), n(), i;
    }
    return cFe(s, t, n, r);
}
function cFe(e, t, n, r) {
    return RC(e) ? e.then((s)=>(n(), r(s), s), (s)=>{
        throw t(s), n(), s;
    }) : (n(), r(e), e);
}
function lFe(e, t, n) {
    if (!GC(e)) return [
        !1
    ];
    let r, s;
    typeof e.tracesSampler == "function" ? (s = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (o)=>typeof t.parentSampleRate == "number" ? t.parentSampleRate : typeof t.parentSampled == "boolean" ? Number(t.parentSampled) : o
    }), r = !0) : t.parentSampled !== void 0 ? s = t.parentSampled : typeof e.tracesSampleRate < "u" && (s = e.tracesSampleRate, r = !0);
    const i = B8(s);
    if (i === void 0) return tt && lt.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), [
        !1
    ];
    if (!i) return tt && lt.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [
        !1,
        i,
        r
    ];
    const a = n < i;
    return a || tt && lt.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [
        a,
        i,
        r
    ];
}
function rW(e, t) {
    const n = sW();
    if (n.startSpan) return n.startSpan(e, t);
    const r = mFe(e), { forceTransaction: s, parentSpan: i, scope: a } = e, o = a?.clone();
    return fk(o, ()=>gFe(i)(()=>{
            const d = Rr(), u = hFe(d, i), f = e.onlyIfParent && !u ? new wk : uFe({
                parentSpan: u,
                spanArguments: r,
                forceTransaction: s,
                scope: d
            });
            return hk(d, f), oFe(()=>t(f), ()=>{
                const { status: v } = ps(f);
                f.isRecording() && (!v || v === "ok") && f.setStatus({
                    code: vr,
                    message: "internal_error"
                });
            }, ()=>{
                f.end();
            });
        }));
}
function dFe(e, t) {
    const n = sW();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : fk((r)=>(hk(r, e || void 0), t(r)));
}
function uFe({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
    if (!GC()) {
        const a = new wk;
        if (n || !e) {
            const o = {
                sampled: "false",
                sample_rate: "0",
                transaction: t.name,
                ...Up(a)
            };
            $C(a, o);
        }
        return a;
    }
    const s = ms();
    let i;
    if (e && !n) i = pFe(e, r, t), j8(e, i);
    else if (e) {
        const a = Up(e), { traceId: o, spanId: l } = e.spanContext(), d = Lp(e);
        i = iW({
            traceId: o,
            parentSpanId: l,
            ...t
        }, r, d), $C(i, a);
    } else {
        const { traceId: a, dsc: o, parentSpanId: l, sampled: d } = {
            ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        i = iW({
            traceId: a,
            parentSpanId: l,
            ...t
        }, r, d), o && $C(i, o);
    }
    return rFe(i), N3e(i, r, s), i;
}
function mFe(e) {
    const n = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        const r = {
            ...n
        };
        return r.startTimestamp = vd(e.startTime), delete r.startTime, r;
    }
    return n;
}
function sW() {
    const e = dd();
    return Mp(e);
}
function iW(e, t, n) {
    const r = Kn(), s = r?.getOptions() || {}, { name: i = "" } = e, a = {
        spanAttributes: {
            ...e.attributes
        },
        spanName: i,
        parentSampled: n
    };
    r?.emit("beforeSampling", a, {
        decision: !1
    });
    const o = a.parentSampled ?? n, l = a.spanAttributes, d = t.getPropagationContext(), [u, m, f] = t.getScopeData().sdkProcessingMetadata[QC] ? [
        !1
    ] : lFe(s, {
        name: i,
        parentSampled: o,
        attributes: l,
        parentSampleRate: B8(d.dsc?.sample_rate)
    }, d.sampleRand), v = new bk({
        ...e,
        attributes: {
            [Np]: "custom",
            [LC]: m !== void 0 && f ? m : void 0,
            ...l
        },
        sampled: u
    });
    return !u && r && (tt && lt.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", "transaction")), r && r.emit("spanStart", v), v;
}
function pFe(e, t, n) {
    const { spanId: r, traceId: s } = e.spanContext(), i = t.getScopeData().sdkProcessingMetadata[QC] ? !1 : Lp(e), a = i ? new bk({
        ...n,
        parentSpanId: r,
        traceId: s,
        sampled: i
    }) : new wk({
        traceId: s
    });
    j8(e, a);
    const o = Kn();
    return o && (o.emit("spanStart", a), n.endTimestamp && o.emit("spanEnd", a)), a;
}
function hFe(e, t) {
    if (t) return t;
    if (t === null) return;
    const n = Ip(e);
    if (!n) return;
    const r = Kn();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Ec(n) : n;
}
function gFe(e) {
    return e !== void 0 ? (t)=>dFe(e, t) : (t)=>t();
}
function Ok(e) {
    try {
        e.__SENTRY_INSTRUMENTED__ = !0;
    } catch  {}
}
function Lk(e) {
    try {
        return e.__SENTRY_INSTRUMENTED__;
    } catch  {
        return !1;
    }
}
function q6e(e, t = {}) {
    switch(e){
        case "GET":
            return "select";
        case "POST":
            return t.Prefer?.includes("resolution=") ? "upsert" : "insert";
        case "PATCH":
            return "update";
        case "DELETE":
            return "delete";
        default:
            return "<unknown-op>";
    }
}
function K6e(e, t) {
    if (t === "" || t === "*") return "select(*)";
    if (e === "select") return `select(${t})`;
    if (e === "or" || e.endsWith(".or")) return `${e}${t}`;
    const [n, ...r] = t.split(".");
    let s;
    return n?.startsWith("fts") ? s = "textSearch" : n?.startsWith("plfts") ? s = "textSearch[plain]" : n?.startsWith("phfts") ? s = "textSearch[phrase]" : n?.startsWith("wfts") ? s = "textSearch[websearch]" : s = n && pB[n] || "filter", `${s}(${e}, ${r.join(".")})`;
}
function dB(e, t = !1) {
    return new Proxy(e, {
        apply (n, r, s) {
            return rW({
                name: `auth ${t ? "(admin) " : ""}${e.name}`,
                attributes: {
                    [wc]: "auto.db.supabase",
                    [gd]: "db",
                    "db.system": "postgresql",
                    "db.operation": `auth.${t ? "admin." : ""}${e.name}`
                }
            }, (i)=>Reflect.apply(n, r, s).then((a)=>(a && typeof a == "object" && "error" in a && a.error ? (i.setStatus({
                        code: vr
                    }), gs(a.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    })) : i.setStatus({
                        code: _k
                    }), i.end(), a)).catch((a)=>{
                    throw i.setStatus({
                        code: vr
                    }), i.end(), gs(a, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    }), a;
                }).then(...s));
        }
    });
}
function z6e(e) {
    const t = e.auth;
    if (!(!t || Lk(e.auth))) {
        for (const n of uB){
            const r = t[n];
            r && typeof e.auth[n] == "function" && (e.auth[n] = dB(r));
        }
        for (const n of mB){
            const r = t.admin[n];
            r && typeof e.auth.admin[n] == "function" && (e.auth.admin[n] = dB(r, !0));
        }
        Ok(e.auth);
    }
}
function Y6e(e) {
    Lk(e.prototype.from) || (e.prototype.from = new Proxy(e.prototype.from, {
        apply (t, n, r) {
            const s = Reflect.apply(t, n, r), i = s.constructor;
            return X6e(i), s;
        }
    }), Ok(e.prototype.from));
}
function J6e(e) {
    Lk(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, {
        apply (t, n, r) {
            const s = TI, i = n, a = q6e(i.method, i.headers);
            if (!s.includes(a) || !i?.url?.pathname || typeof i.url.pathname != "string") return Reflect.apply(t, n, r);
            const o = i.url.pathname.split("/"), l = o.length > 0 ? o[o.length - 1] : "", d = [];
            for (const [v, T] of i.url.searchParams.entries())d.push(K6e(v, T));
            const u = Object.create(null);
            if (ok(i.body)) for (const [v, T] of Object.entries(i.body))u[v] = T;
            const m = `${a === "select" ? "" : `${a}${u ? "(...) " : ""}`}${d.join(" ")} from(${l})`, f = {
                "db.table": l,
                "db.schema": i.schema,
                "db.url": i.url.origin,
                "db.sdk": i.headers["X-Client-Info"],
                "db.system": "postgresql",
                "db.operation": a,
                [wc]: "auto.db.supabase",
                [gd]: "db"
            };
            return d.length && (f["db.query"] = d), Object.keys(u).length && (f["db.body"] = u), rW({
                name: m,
                attributes: f
            }, (v)=>Reflect.apply(t, n, []).then((T)=>{
                    if (v && (T && typeof T == "object" && "status" in T && D8(v, T.status || 500), v.end()), T.error) {
                        const y = new Error(T.error.message);
                        T.error.code && (y.code = T.error.code), T.error.details && (y.details = T.error.details);
                        const b = {};
                        d.length && (b.query = d), Object.keys(u).length && (b.body = u), gs(y, (I)=>(I.addEventProcessor((G)=>(y8(G, {
                                    handled: !1,
                                    type: "auto.db.supabase.postgres"
                                }), G)), I.setContext("supabase", b), I));
                    }
                    const S = {
                        type: "supabase",
                        category: `db.${a}`,
                        message: m
                    }, k = {};
                    return d.length && (k.query = d), Object.keys(u).length && (k.body = u), Object.keys(k).length && (S.data = k), bW(S), T;
                }, (T)=>{
                    throw v && (D8(v, 500), v.end()), T;
                }).then(...r));
        }
    }), Ok(e.prototype.then));
}
function X6e(e) {
    for (const t of TI)Lk(e.prototype[t]) || (e.prototype[t] = new Proxy(e.prototype[t], {
        apply (n, r, s) {
            const i = Reflect.apply(n, r, s), a = i.constructor;
            return tt && lt.log(`Instrumenting ${t} operation's PostgRESTFilterBuilder`), J6e(a), i;
        }
    }), Ok(e.prototype[t]));
}
var uB, mB, pB, TI, hB, gB, fB, Q6e;
export { $C, A3e, B8, D8, J6e, K6e, Lk, M3e, N3e, Ok, Q6e, TI, X6e, Y6e, cFe, dB, dFe, fB, gB, gFe, hB, hFe, iW, j8, lFe, mB, mFe, oFe, pB, pFe, q6e, rFe, rW, sW, uB, uFe, z6e };
var __wakaru_Z6e_initialized = false;
export function Z6e() {
if (__wakaru_Z6e_initialized) return;
__wakaru_Z6e_initialized = true;
"use strict";
h(), uI(), gt(), Vr(), ar(), Rn(), ir(), Ke(), fn(), es(), uB = [
    "reauthenticate",
    "signInAnonymously",
    "signInWithOAuth",
    "signInWithIdToken",
    "signInWithOtp",
    "signInWithPassword",
    "signInWithSSO",
    "signOut",
    "signUp",
    "verifyOtp"
], mB = [
    "createUser",
    "deleteUser",
    "listUsers",
    "getUserById",
    "updateUserById",
    "inviteUserByEmail"
], pB = {
    eq: "eq",
    neq: "neq",
    gt: "gt",
    gte: "gte",
    lt: "lt",
    lte: "lte",
    like: "like",
    "like(all)": "likeAllOf",
    "like(any)": "likeAnyOf",
    ilike: "ilike",
    "ilike(all)": "ilikeAllOf",
    "ilike(any)": "ilikeAnyOf",
    is: "is",
    in: "in",
    cs: "contains",
    cd: "containedBy",
    sr: "rangeGt",
    nxl: "rangeGte",
    sl: "rangeLt",
    nxr: "rangeLte",
    adj: "rangeAdjacent",
    ov: "overlaps",
    fts: "",
    plfts: "plain",
    phfts: "phrase",
    wfts: "websearch",
    not: "not"
}, TI = [
    "select",
    "insert",
    "upsert",
    "update",
    "delete"
], hB = (e)=>{
    if (!e) {
        tt && lt.warn("Supabase integration was not installed because no Supabase client was provided.");
        return;
    }
    const t = e.constructor === Function ? e : e.constructor;
    Y6e(t), z6e(e);
}, gB = "Supabase", fB = ((e)=>({
        setupOnce () {
            hB(e);
        },
        name: gB
    })), Q6e = (e)=>fB(e.supabaseClient);

}
