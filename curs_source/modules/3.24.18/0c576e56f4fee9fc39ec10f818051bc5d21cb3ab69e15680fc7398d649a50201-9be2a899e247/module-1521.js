"use strict";
require.d(exports, {
    Gp: ()=>d,
    Nj: ()=>n,
    RR: ()=>o,
    S2: ()=>u,
    ZN: ()=>s,
    k_: ()=>c,
    yV: ()=>i,
    zG: ()=>a
});
class n extends Error {
    constructor(e){
        super(`OAuth refresh race detected for ${e}: sibling already rotated tokens; reconnecting to use fresh credentials`), this.name = "SiblingAlreadyRefreshedError";
    }
}
class o extends Error {
    constructor(e){
        super(`OAuth loopback redirect ${e} could not be bound; it is the only redirect registered for this desktop client`), this.name = "McpOAuthLoopbackUnavailableError";
    }
}
function s(e) {
    return e instanceof Error && "McpOAuthLoopbackUnavailableError" === e.name;
}
const i = "OAuthRefreshTransientError";
function a(e) {
    return e instanceof Error && e.name === i;
}
const c = new Set([
    "UnauthorizedError",
    "InvalidGrantError",
    "InvalidTokenError",
    "InvalidClientError",
    "UnauthorizedClientError"
]), u = new Set([
    "invalid_grant",
    "invalid_token",
    "invalid_client",
    "unauthorized_client"
]), l = [
    /\btoken (?:has |is )?expired\b/i,
    /\btoken (?:was|is) invalid\b/i,
    /\binvalid (?:refresh[ _]?)?token\b/i,
    /\btoken (?:has been |was )?revoked\b/i
];
function d(e) {
    if (null === e || "object" != typeof e) return !1;
    const t = e.name;
    if ("string" == typeof t && c.has(t)) return !0;
    const r = e.errorCode;
    return !("string" != typeof r || !u.has(r.toLowerCase())) || function(e) {
        if (null === e || "object" != typeof e) return !1;
        const t = e.name, r = e.errorCode;
        if ("InvalidRequestError" !== t && ("string" != typeof r || "invalid_request" !== r.toLowerCase())) return !1;
        const n = e.message;
        return "string" == typeof n && l.some((e)=>e.test(n));
    }(e);
}
