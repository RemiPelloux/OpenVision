import { bj, cQ, wFt } from "./SZu.js";
import { ewo } from "./breadcrumbs.js";
import { Sv } from "./composerMessageStorageService.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { set } from "./elementTiming.js";
import { Tde } from "./exports.js";
import { dQ } from "./index_2.js";
import { hQ } from "./integration.js";
import { _j } from "./is.js";
import { uve } from "./misc.js";
import { xse } from "./scope.js";
import { KE, QH, bx } from "./semanticAttributes.js";
import { TI, zYn } from "./spanstatus.js";
import { E } from "./tslib.es6.js";
function Ghr(t) {
    try {
        t.__SENTRY_INSTRUMENTED__ = !0;
    } catch  {}
}
function qhr(t) {
    try {
        return t.__SENTRY_INSTRUMENTED__;
    } catch  {
        return !1;
    }
}
function Apy(t, e = {}) {
    switch(t){
        case "GET":
            return "select";
        case "POST":
            return e.Prefer?.includes("resolution=") ? "upsert" : "insert";
        case "PATCH":
            return "update";
        case "DELETE":
            return "delete";
        default:
            return "<unknown-op>";
    }
}
function Rpy(t, e) {
    if (e === "" || e === "*") return "select(*)";
    if (t === "select") return `select(${e})`;
    if (t === "or" || t.endsWith(".or")) return `${t}${e}`;
    const [n, ...i] = e.split(".");
    let r;
    return n?.startsWith("fts") ? r = "textSearch" : n?.startsWith("plfts") ? r = "textSearch[plain]" : n?.startsWith("phfts") ? r = "textSearch[phrase]" : n?.startsWith("wfts") ? r = "textSearch[websearch]" : r = n && xqu[n] || "filter", `${r}(${t}, ${i.join(".")})`;
}
function Tqu(t, e = !1) {
    return new Proxy(t, {
        apply (n, i, r) {
            return set({
                name: `auth ${e ? "(admin) " : ""}${t.name}`,
                attributes: {
                    [KE]: "auto.db.supabase",
                    [bx]: "db",
                    "db.system": "postgresql",
                    "db.operation": `auth.${e ? "admin." : ""}${t.name}`
                }
            }, (s)=>Reflect.apply(n, i, r).then((o)=>(o && typeof o == "object" && "error" in o && o.error ? (s.setStatus({
                        code: TI
                    }), Sv(o.error, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    })) : s.setStatus({
                        code: zYn
                    }), s.end(), o)).catch((o)=>{
                    throw s.setStatus({
                        code: TI
                    }), s.end(), Sv(o, {
                        mechanism: {
                            handled: !1,
                            type: "auto.db.supabase.auth"
                        }
                    }), o;
                }).then(...r));
        }
    });
}
function Ppy(t) {
    const e = t.auth;
    if (!(!e || qhr(t.auth))) {
        for (const n of Equ){
            const i = e[n];
            i && typeof t.auth[n] == "function" && (t.auth[n] = Tqu(i));
        }
        for (const n of Iqu){
            const i = e.admin[n];
            i && typeof t.auth.admin[n] == "function" && (t.auth.admin[n] = Tqu(i, !0));
        }
        Ghr(t.auth);
    }
}
function Mpy(t) {
    qhr(t.prototype.from) || (t.prototype.from = new Proxy(t.prototype.from, {
        apply (e, n, i) {
            const r = Reflect.apply(e, n, i), s = r.constructor;
            return Npy(s), r;
        }
    }), Ghr(t.prototype.from));
}
function Dpy(t) {
    qhr(t.prototype.then) || (t.prototype.then = new Proxy(t.prototype.then, {
        apply (e, n, i) {
            const r = cwo, s = n, o = Apy(s.method, s.headers);
            if (!r.includes(o) || !s?.url?.pathname || typeof s.url.pathname != "string") return Reflect.apply(e, n, i);
            const a = s.url.pathname.split("/"), l = a.length > 0 ? a[a.length - 1] : "", c = [];
            for (const [p, g] of s.url.searchParams.entries())c.push(Rpy(p, g));
            const u = Object.create(null);
            if (xse(s.body)) for (const [p, g] of Object.entries(s.body))u[p] = g;
            const d = `${o === "select" ? "" : `${o}${u ? "(...) " : ""}`}${c.join(" ")} from(${l})`, h = {
                "db.table": l,
                "db.schema": s.schema,
                "db.url": s.url.origin,
                "db.sdk": s.headers["X-Client-Info"],
                "db.system": "postgresql",
                "db.operation": o,
                [KE]: "auto.db.supabase",
                [bx]: "db"
            };
            return c.length && (h["db.query"] = c), Object.keys(u).length && (h["db.body"] = u), set({
                name: d,
                attributes: h
            }, (p)=>Reflect.apply(e, n, []).then((g)=>{
                    if (p && (g && typeof g == "object" && "status" in g && wFt(p, g.status || 500), p.end()), g.error) {
                        const b = new Error(g.error.message);
                        g.error.code && (b.code = g.error.code), g.error.details && (b.details = g.error.details);
                        const y = {};
                        c.length && (y.query = c), Object.keys(u).length && (y.body = u), Sv(b, (S)=>(S.addEventProcessor((k)=>(cQ(k, {
                                    handled: !1,
                                    type: "auto.db.supabase.postgres"
                                }), k)), S.setContext("supabase", y), S));
                    }
                    const f = {
                        type: "supabase",
                        category: `db.${o}`,
                        message: d
                    }, _ = {};
                    return c.length && (_.query = c), Object.keys(u).length && (_.body = u), Object.keys(_).length && (f.data = _), bj(f), g;
                }, (g)=>{
                    throw p && (wFt(p, 500), p.end()), g;
                }).then(...i));
        }
    }), Ghr(t.prototype.then));
}
function Npy(t) {
    for (const e of cwo)qhr(t.prototype[e]) || (t.prototype[e] = new Proxy(t.prototype[e], {
        apply (n, i, r) {
            const s = Reflect.apply(n, i, r), o = s.constructor;
            return rg && so.log(`Instrumenting ${e} operation's PostgRESTFilterBuilder`), Dpy(o), s;
        }
    }), Ghr(t.prototype[e]));
}
var Equ, Iqu, xqu, cwo, pXn, Aqu, Rqu, zhr;
export { Apy, Aqu, Dpy, Equ, Ghr, Iqu, Mpy, Npy, Ppy, Rpy, Rqu, Tqu, cwo, pXn, qhr, xqu, zhr };
var __wakaru_Lpy_initialized = false;
export function Lpy() {
if (__wakaru_Lpy_initialized) return;
__wakaru_Lpy_initialized = true;
"use strict";
E(), ewo(), qR(), Tde(), hQ(), QH(), dQ(), JC(), _j(), uve(), Equ = [
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
], Iqu = [
    "createUser",
    "deleteUser",
    "listUsers",
    "getUserById",
    "updateUserById",
    "inviteUserByEmail"
], xqu = {
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
}, cwo = [
    "select",
    "insert",
    "upsert",
    "update",
    "delete"
], pXn = (t)=>{
    if (!t) {
        rg && so.warn("Supabase integration was not installed because no Supabase client was provided.");
        return;
    }
    const e = t.constructor === Function ? t : t.constructor;
    Mpy(e), Ppy(t);
}, Aqu = "Supabase", Rqu = ((t)=>({
        setupOnce () {
            pXn(t);
        },
        name: Aqu
    })), zhr = (t)=>Rqu(t.supabaseClient);

}
