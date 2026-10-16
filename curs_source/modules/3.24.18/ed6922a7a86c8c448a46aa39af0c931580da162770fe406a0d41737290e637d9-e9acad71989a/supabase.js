import { mVr } from "./breadcrumbs.js";
import { Km } from "./composerMessageStorageService.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { B3e } from "./elementTiming.js";
import { tJ } from "./exports.js";
import { KH } from "./index_2.js";
import { YH } from "./integration.js";
import { YB } from "./is.js";
import { Mie } from "./misc.js";
import { ZB, qH, xdt } from "./qIc.js";
import { mK } from "./scope.js";
import { W9, a1, jC } from "./semanticAttributes.js";
import { Ehn, w0 } from "./spanstatus.js";
import { x } from "./tslib.es6.js";
function Khi(e) {
    try {
        e.__SENTRY_INSTRUMENTED__ = !0;
    } catch  {}
}
function Yhi(e) {
    try {
        return e.__SENTRY_INSTRUMENTED__;
    } catch  {
        return !1;
    }
}
function Grg(e, t = {}) {
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
function Vrg(e, t) {
    if (t === "" || t === "*") return "select(*)";
    if (e === "select") return `select(${t})`;
    if (e === "or" || e.endsWith(".or")) return `${e}${t}`;
    const [n, ...i] = t.split(".");
    let r;
    return n?.startsWith("fts") ? r = "textSearch" : n?.startsWith("plfts") ? r = "textSearch[plain]" : n?.startsWith("phfts") ? r = "textSearch[phrase]" : n?.startsWith("wfts") ? r = "textSearch[websearch]" : r = n && a0c[n] || "filter", `${r}(${e}, ${i.join(".")})`;
}
function r0c(e, t = !1) {
    return new Proxy(e, {
        apply (n, i, r) {
            return B3e({
                name: `auth ${t ? "(admin) " : ""}${e.name}`,
                attributes: {
                    [jC]: "auto.db.supabase",
                    [a1]: "db",
                    "db.system": "postgresql",
                    "db.operation": `auth.${t ? "admin." : ""}${e.name}`
                }
            }, (s)=>Reflect.apply(n, i, r).then((o)=>(o && typeof o == "object" && "error" in o && o.error ? (s.setStatus({
                        code: w0
                    }), Km(o.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    })) : s.setStatus({
                        code: Ehn
                    }), s.end(), o)).catch((o)=>{
                    throw s.setStatus({
                        code: w0
                    }), s.end(), Km(o, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    }), o;
                }).then(...r));
        }
    });
}
function jrg(e) {
    const t = e.auth;
    if (!(!t || Yhi(e.auth))) {
        for (const n of s0c){
            const i = t[n];
            i && typeof e.auth[n] == "function" && (e.auth[n] = r0c(i));
        }
        for (const n of o0c){
            const i = t.admin[n];
            i && typeof e.auth.admin[n] == "function" && (e.auth.admin[n] = r0c(i, !0));
        }
        Khi(e.auth);
    }
}
function qrg(e) {
    Yhi(e.prototype.from) || (e.prototype.from = new Proxy(e.prototype.from, {
        apply (t, n, i) {
            const r = Reflect.apply(t, n, i), s = r.constructor;
            return Krg(s), r;
        }
    }), Khi(e.prototype.from));
}
function zrg(e) {
    Yhi(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, {
        apply (t, n, i) {
            const r = wVr, s = n, o = Grg(s.method, s.headers);
            if (!r.includes(o) || !s?.url?.pathname || typeof s.url.pathname != "string") return Reflect.apply(t, n, i);
            const a = s.url.pathname.split("/"), c = a.length > 0 ? a[a.length - 1] : "", l = [];
            for (const [g, f] of s.url.searchParams.entries())l.push(Vrg(g, f));
            const u = Object.create(null);
            if (mK(s.body)) for (const [g, f] of Object.entries(s.body))u[g] = f;
            const h = `${o === "select" ? "" : `${o}${u ? "(...) " : ""}`}${l.join(" ")} from(${c})`, p = {
                "db.table": c,
                "db.schema": s.schema,
                "db.url": s.url.origin,
                "db.sdk": s.headers["X-Client-Info"],
                "db.system": "postgresql",
                "db.operation": o,
                [jC]: "auto.db.supabase",
                [a1]: "db"
            };
            return l.length && (p["db.query"] = l), Object.keys(u).length && (p["db.body"] = u), B3e({
                name: h,
                attributes: p
            }, (g)=>Reflect.apply(t, n, []).then((f)=>{
                    if (g && (f && typeof f == "object" && "status" in f && xdt(g, f.status || 500), g.end()), f.error) {
                        const y = new Error(f.error.message);
                        f.error.code && (y.code = f.error.code), f.error.details && (y.details = f.error.details);
                        const T = {};
                        l.length && (T.query = l), Object.keys(u).length && (T.body = u), Km(y, (E)=>(E.addEventProcessor((A)=>(qH(A, {
                                    handled: !1,
                                    type: "auto.db.supabase.postgres"
                                }), A)), E.setContext("supabase", T), E));
                    }
                    const v = {
                        type: "supabase",
                        category: `db.${o}`,
                        message: h
                    }, b = {};
                    return l.length && (b.query = l), Object.keys(u).length && (b.body = u), Object.keys(b).length && (v.data = b), ZB(v), f;
                }, (f)=>{
                    throw g && (xdt(g, 500), g.end()), f;
                }).then(...i));
        }
    }), Khi(e.prototype.then));
}
function Krg(e) {
    for (const t of wVr)Yhi(e.prototype[t]) || (e.prototype[t] = new Proxy(e.prototype[t], {
        apply (n, i, r) {
            const s = Reflect.apply(n, i, r), o = s.constructor;
            return Qh && zr.log(`Instrumenting ${t} operation's PostgRESTFilterBuilder`), zrg(o), s;
        }
    }), Khi(e.prototype[t]));
}
var s0c, o0c, a0c, wVr, zhn, c0c, l0c, Xhi;
export { Grg, Khi, Krg, Vrg, Xhi, Yhi, a0c, c0c, jrg, l0c, o0c, qrg, r0c, s0c, wVr, zhn, zrg };
var __wakaru_Yrg_initialized = false;
export function Yrg() {
if (__wakaru_Yrg_initialized) return;
__wakaru_Yrg_initialized = true;
"use strict";
x(), mVr(), kE(), tJ(), YH(), W9(), KH(), Xk(), YB(), Mie(), s0c = [
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
], o0c = [
    "createUser",
    "deleteUser",
    "listUsers",
    "getUserById",
    "updateUserById",
    "inviteUserByEmail"
], a0c = {
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
}, wVr = [
    "select",
    "insert",
    "upsert",
    "update",
    "delete"
], zhn = (e)=>{
    if (!e) {
        Qh && zr.warn("Supabase integration was not installed because no Supabase client was provided.");
        return;
    }
    const t = e.constructor === Function ? e : e.constructor;
    qrg(t), jrg(e);
}, c0c = "Supabase", l0c = ((e)=>({
        setupOnce () {
            zhn(e);
        },
        name: c0c
    })), Xhi = (e)=>l0c(e.supabaseClient);

}
