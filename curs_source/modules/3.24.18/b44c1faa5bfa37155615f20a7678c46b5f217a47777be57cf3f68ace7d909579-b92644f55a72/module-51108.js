"use strict";
require.d(exports, {
    B1j: ()=>l,
    c8u: ()=>ce,
    uOd: ()=>he,
    E_S: ()=>fe,
    Ico: ()=>se,
    O3I: ()=>v,
    tBH: ()=>g,
    MEY: ()=>n.ME,
    eod: ()=>d,
    Fmf: ()=>ae,
    jIB: ()=>ee,
    VDJ: ()=>q,
    X5z: ()=>J,
    $HQ: ()=>n.$H,
    YaX: ()=>c,
    Gpm: ()=>pe,
    PKk: ()=>Ie,
    vdi: ()=>me,
    HHu: ()=>n.HH,
    Yl9: ()=>n.Yl,
    _NE: ()=>n._N,
    Ezk: ()=>Se,
    qFm: ()=>we,
    eaG: ()=>B,
    q2e: ()=>h,
    mtU: ()=>be,
    utF: ()=>Ee
});
var n = require("./module-50768.js");
const s = "mcp-provider://";
function o(e) {
    const t = e?.trim();
    return void 0 === t || 0 === t.length ? void 0 : t;
}
function i(e) {
    const t = e?.trim();
    return void 0 === t || 0 === t.length ? void 0 : t;
}
function a(e, t, r) {
    return t.length > 0 && function(e, t, r) {
        const s = r?.matchesServerUrlPattern ?? n.vc;
        return t.some((t)=>{
            const r = o(t.command), a = i(t.serverUrl);
            if (!(void 0 !== r) && !(void 0 !== a)) return !1;
            const c = void 0 === r || void 0 !== e.command && (0, n.mD)(r, e.command), l = void 0 === a || void 0 !== e.url && s(a, e.url);
            return c && l;
        });
    }(e, t, r);
}
function c(e, t, r) {
    if (void 0 === t) return !0;
    if (!0 === t.disableAll) return !1;
    if (function(e) {
        return !0 === e.url?.startsWith(s);
    }(e)) return !0;
    const c = t.allowedMcpServers ?? [];
    return 0 === c.length && !0 !== t.allowUserOverrideMcpServers || !!a(e, c, r) || !0 === t.allowUserOverrideMcpServers && !function(e, t, r) {
        const s = r?.matchesServerUrlPattern ?? n.vc;
        return (t ?? []).some((t)=>{
            const r = o(t.command), a = i(t.serverUrl);
            if (void 0 === r && void 0 === a) return !1;
            const c = void 0 === r || void 0 !== e.command && (0, n.mD)(r, e.command), l = void 0 === a || void 0 !== e.url && s(a, e.url);
            return c && l;
        });
    }(e, t.deniedMcpServers, r);
}
require("./module-50623.js");
class l {
    constructor(e = 864e5){
        this.ttl = e, this.staleDirty = !1, this.refreshGeneration = 0;
    }
    async get(e) {
        const t = performance.now();
        if (this.state && this.state.expiresAt > t && !this.staleDirty) return this.state.value;
        if (this.staleDirty && this.state) {
            const t = this.state.value;
            if (!this.refreshInFlight) {
                const t = this.refreshGeneration;
                let r;
                r = (async ()=>{
                    try {
                        const r = await e();
                        if (t !== this.refreshGeneration) return;
                        this.state = {
                            expiresAt: performance.now() + this.ttl,
                            value: r
                        }, this.staleDirty = !1;
                    } catch  {} finally{
                        r && this.refreshInFlight === r && (this.refreshInFlight = void 0);
                    }
                })(), this.refreshInFlight = r;
            }
            return t;
        }
        const r = await e();
        return this.state = {
            expiresAt: performance.now() + this.ttl,
            value: r
        }, this.staleDirty = !1, r;
    }
    invalidate() {
        this.refreshGeneration++, this.state = void 0, this.staleDirty = !1, this.refreshInFlight = void 0;
    }
    invalidateKeepingStale() {
        this.state && (this.staleDirty = !0);
    }
}
const u = 1e3;
async function d(e) {
    const t = [], r = new Set;
    let n;
    for(let s = 1;; s++){
        const o = await e.fetchPage(n), i = e.itemsOf(o);
        t.push(...i);
        const a = e.nextCursorOf(o);
        if (!a || r.has(a)) return t;
        if (s >= u) throw new Error(`MCP list did not end after ${u} pages; refusing to keep paging`);
        r.add(a), n = a;
    }
}
function p(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e])=>void 0 !== e));
}
function m(e, t) {
    const r = function(e) {
        try {
            const t = new URL(e);
            return {
                host: t.host,
                origin: t.origin,
                pathname: t.pathname
            };
        } catch  {
            return {
                host: null,
                origin: null,
                pathname: null
            };
        }
    }(e), n = !1 !== t?.includePath;
    return {
        host: r.host,
        origin: r.origin,
        path: n ? r.pathname : null
    };
}
function h(e, t) {
    return m(e, t);
}
var f = require("./module-76982.js");
function g(e, t) {
    const r = e?.access_token, n = "string" == typeof r ? r.length : 0, s = Boolean(e?.refresh_token), o = "number" == typeof e?.expires_in && Number.isFinite(e.expires_in) ? e.expires_in : null;
    return {
        accessTokenLen: n,
        refreshTokenPresent: s,
        expiresAtTimestamp: t?.expiresInIsFresh && null !== o ? Date.now() + Math.round(1e3 * o) : null,
        grantedScope: "string" == typeof e?.scope && e.scope.length > 0 ? e.scope : null
    };
}
function y(e) {
    if (e) return (0, f.createHash)("sha256").update(e).digest("hex").slice(0, 12);
}
function w(e) {
    if (e && 0 !== e.length) return y(JSON.stringify([
        ...e
    ].sort()));
}
function v(e) {
    return {
        clientIdHash: y(e?.client_id),
        hasClientSecret: (e?.client_secret ?? "").length > 0,
        redirectUrisHash: w(e?.redirect_uris),
        redirectUriCount: e?.redirect_uris?.length ?? 0
    };
}
function _(e, t) {
    let r = e;
    for (const e of t){
        if ("object" != typeof r || null === r || !(e in r)) return;
        r = r[e];
    }
    return r;
}
function A(e, t) {
    for (const r of t)if ("string" == typeof _(e, r.split("."))) return _(e, r.split("."));
}
function S(e) {
    if (!e || "object" != typeof e) return;
    const t = e.errorCode;
    return "string" == typeof t ? t : void 0;
}
function b(e) {
    if (!e) return;
    const t = e.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r = t?.[1] ?? t?.[2] ?? t?.[3];
    if (!r) return;
    const n = Number.parseInt(r, 10);
    return Number.isNaN(n) ? void 0 : n;
}
function E(e) {
    if (e instanceof Error) {
        const t = e.message;
        return t && t !== e.name ? B(t) : void 0;
    }
    if (null != e) {
        const t = String(e);
        return t ? B(t) : void 0;
    }
}
function I(e) {
    if (e && "object" == typeof e) return e.cause;
}
function C(e, t = 4) {
    const r = [];
    let n = e;
    for(let e = 0; e < t && null != n; e++){
        if (n instanceof Error) {
            const e = E(n);
            r.push(e ? `${n.name}: ${e}` : n.name), n = I(n);
            continue;
        }
        r.push(B(String(n)));
        break;
    }
    return r.length > 1 ? r.join(" > ") : void 0;
}
const k = "[REDACTED]", x = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
function T(e) {
    return e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${k}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${k}`);
}
function R(e, t = 256) {
    return e.length > t ? `${e.slice(0, Math.max(0, t - 3))}...` : e;
}
function B(e, t) {
    return R(T(e), t?.maxLength);
}
function P(e) {
    if ("string" == typeof e) return R(T(e));
    if (void 0 !== e) try {
        const t = JSON.stringify(e, (e, t)=>e && function(e) {
                const t = e.toLowerCase();
                return "code" === t || "authorization" === t || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("assertion") || t.includes("verifier") || t.includes("challenge") || x.test(t);
            }(e) ? k : "string" == typeof t ? T(t) : t);
        if (!t) return;
        return R(t);
    } catch  {
        return;
    }
}
function J(e) {
    const t = I(e), r = e instanceof Error ? e.name : null != e ? typeof e : void 0, n = t instanceof Error ? t.name : void 0, s = E(t), o = E(e) ?? s, i = A(e, [
        "code",
        "cause.code"
    ]), a = S(e) ?? S(t) ?? A(e, [
        "errorCode",
        "error",
        "cause.errorCode",
        "cause.error",
        "body.error",
        "response.body.error"
    ]), c = function(e, t) {
        for (const r of t){
            const t = _(e, r.split("."));
            if ("number" == typeof t && Number.isFinite(t)) return t;
        }
    }(e, [
        "status",
        "statusCode",
        "response.status",
        "response.statusCode",
        "cause.status",
        "cause.statusCode",
        "cause.response.status",
        "cause.response.statusCode"
    ]) ?? b(o) ?? b(s), l = P(_(e, [
        "response",
        "body"
    ]) ?? _(e, [
        "body"
    ]) ?? _(e, [
        "data"
    ]) ?? _(e, [
        "cause",
        "body"
    ]) ?? _(e, [
        "cause",
        "response",
        "body"
    ])), u = function(e) {
        const t = e.message?.toLowerCase(), r = e.code?.toLowerCase();
        return t?.includes("timed out") || t?.includes("timeout") || t?.includes("etimedout") || "etimedout" === r ? "timeout" : t?.includes("enotfound") || t?.includes("eai_again") || t?.includes("dns") || "enotfound" === r || "eai_again" === r ? "dns" : t?.includes("certificate") || t?.includes("tls") || t?.includes("ssl") ? "tls" : t?.includes("econnreset") || t?.includes("connection reset") || "econnreset" === r ? "connection_reset" : t?.includes("econnrefused") || t?.includes("connection refused") || "econnrefused" === r ? "connection_refused" : void 0;
    }({
        message: o,
        code: i
    }), d = a ? "oauth_error" : u ? "auth_transport_error" : o ? "generic_error" : void 0;
    return p({
        errorName: r,
        errorMessage: o,
        errorType: null != e ? typeof e : void 0,
        httpStatus: c,
        oauthErrorCode: a,
        errorResponseSummary: l,
        networkClassification: u,
        causeName: n,
        causeMessage: s,
        causeChain: C(e),
        sdkErrorKind: d
    });
}
const M = {
    mcp_oauth_provider_initialized: "MCP OAuth provider initialized",
    mcp_oauth_tokens_loaded: "MCP OAuth tokens loaded",
    mcp_oauth_tokens_saved: "MCP OAuth tokens saved",
    mcp_oauth_callback_completion: "MCP OAuth callback exchange completed",
    mcp_oauth_client_info_loaded: "MCP OAuth client information loaded",
    mcp_oauth_client_info_saved: "MCP OAuth client information saved",
    mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared",
    mcp_oauth_refresh_error_release: "MCP OAuth refresh error released",
    mcp_oauth_state_transition: "MCP OAuth state transition",
    mcp_oauth_credentials_invalidated: "MCP OAuth credentials invalidated"
};
function q(e) {
    const t = e.message ?? M[e.event], r = {
        event: e.event,
        cursorMcp: {
            oauth: p({
                ...e.metadata
            })
        }
    }, n = e.level ?? "info";
    "error" !== n ? "warn" !== n ? "debug" !== n ? e.logger.info?.(t, r) : e.logger.debug?.(t, r) : e.logger.warn?.(t, r) : e.logger.error?.(t, e.error, r);
}
const D = 4096;
function O(e) {
    return "object" == typeof e && null !== e && "url" in e && "string" == typeof e.url;
}
function N(e) {
    return "string" == typeof e ? e : e instanceof URL ? e.toString() : e.url;
}
function F(e) {
    const t = [];
    return e.forEach((e, r)=>{
        t.push(r);
    }), t.sort();
}
function U(e) {
    if (null === e) return null;
    const t = Number.parseInt(e, 10);
    return Number.isNaN(t) ? null : t;
}
function L(e, t) {
    if (null == e) return {
        kind: "none",
        bytes: 0,
        contentLength: U(t.get("content-length"))
    };
    if ("string" == typeof e) {
        const r = (new TextEncoder).encode(e).length;
        return {
            kind: "text",
            bytes: r,
            contentLength: U(t.get("content-length")) ?? r
        };
    }
    if (e instanceof URLSearchParams) {
        const r = e.toString(), n = (new TextEncoder).encode(r).length;
        return {
            kind: "text",
            bytes: n,
            contentLength: U(t.get("content-length")) ?? n
        };
    }
    return e instanceof Blob ? {
        kind: "blob",
        bytes: e.size,
        contentLength: U(t.get("content-length")) ?? e.size
    } : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? {
        kind: "binary",
        bytes: e.byteLength,
        contentLength: U(t.get("content-length")) ?? e.byteLength
    } : "object" == typeof e && null !== e && ("getReader" in e || Symbol.asyncIterator in e) ? {
        kind: "stream",
        bytes: null,
        contentLength: U(t.get("content-length"))
    } : {
        kind: "unknown",
        bytes: null,
        contentLength: U(t.get("content-length"))
    };
}
function $(e, t) {
    if (null === e || !e.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
    const r = "string" == typeof t ? function(e, t) {
        for (const r of e.split("&")){
            const e = r.indexOf("="), n = e >= 0 ? r.slice(0, e) : r;
            let s;
            try {
                s = decodeURIComponent(n.replaceAll("+", " "));
            } catch  {
                return;
            }
            if (s !== t) continue;
            const o = e >= 0 ? r.slice(e + 1) : "";
            try {
                return decodeURIComponent(o.replaceAll("+", " "));
            } catch  {
                return;
            }
        }
    }(t, "grant_type") : t instanceof URLSearchParams ? t.get("grant_type") ?? void 0 : void 0;
    return r ? function(e) {
        switch(e){
            case "authorization_code":
            case "refresh_token":
            case "client_credentials":
            case "urn:ietf:params:oauth:grant-type:jwt-bearer":
            case "urn:ietf:params:oauth:grant-type:token-exchange":
                return e;
            default:
                return "other";
        }
    }(r) : void 0;
}
function Q(e) {
    const { input: t, init: r } = e, n = m(N(t)), s = function(e, t) {
        const r = new Headers(O(e) ? e.headers : void 0);
        return new Headers(t?.headers).forEach((e, t)=>{
            r.set(t, e);
        }), r;
    }(t, r), o = F(s), i = s.get("content-type"), a = y(s.get("mcp-session-id") ?? void 0), c = s.get("authorization"), l = c ? c.split(/\s+/, 1)[0] ?? null : null;
    return {
        method: (r?.method ?? (O(t) ? t.method : void 0) ?? "GET").toUpperCase(),
        url: n,
        headers: {
            names: o,
            count: o.length
        },
        contentType: i,
        body: L(r?.body, s),
        sessionIdHash: a ?? null,
        authorizationScheme: l
    };
}
function j(e, t) {
    const r = F(e.headers), n = U(e.headers.get("content-length"));
    return {
        status: e.status,
        ok: e.ok,
        headers: {
            names: r,
            count: r.length
        },
        contentType: e.headers.get("content-type"),
        body: {
            kind: null === e.body ? "none" : "stream",
            bytes: null === e.body ? 0 : n,
            contentLength: n,
            ...void 0 !== t ? {
                errorSummary: t
            } : {}
        },
        sessionIdHash: y(e.headers.get("mcp-session-id") ?? void 0) ?? null,
        wwwAuthenticateHash: y(e.headers.get("www-authenticate") ?? void 0) ?? null,
        mcpProtocolVersion: e.headers.get("mcp-protocol-version") ?? null,
        requestId: e.headers.get("x-request-id") ?? null
    };
}
function G(e) {
    const t = {};
    return void 0 !== e.errorName && (t.name = e.errorName), void 0 !== e.errorMessage && (t.message = e.errorMessage), void 0 !== e.errorType && (t.type = e.errorType), void 0 !== e.oauthErrorCode && (t.oauthErrorCode = e.oauthErrorCode), void 0 !== e.errorResponseSummary && (t.responseSummary = e.errorResponseSummary), void 0 !== e.networkClassification && (t.networkClassification = e.networkClassification), void 0 !== e.sdkErrorKind && (t.sdkErrorKind = e.sdkErrorKind), t;
}
function H(e, t) {
    const r = Q({
        input: e,
        init: t
    });
    if (void 0 !== $(r.contentType, t?.body)) return !0;
    const n = r.url.path?.toLowerCase() ?? "";
    return n.endsWith("/token") || n.includes("/oauth/token") || n.includes("/connect/token");
}
async function z(e, t) {
    try {
        const r = await e.clone().text();
        return r.length > t ? r.slice(0, t) : r;
    } catch  {
        return;
    }
}
function W(e) {
    if (!function(e) {
        return "/mcp" === e || !0 === e?.endsWith("/mcp");
    }(m(N(e.input)).path)) return B(e.rawText, {
        maxLength: D
    });
    try {
        const t = JSON.parse(e.rawText);
        return "object" == typeof t && null !== t ? function(e) {
            const t = e.error;
            if ("string" == typeof t) return JSON.stringify({
                error: t
            });
            if ("object" != typeof t || null === t) return;
            const r = t, n = "number" == typeof r.code || "string" == typeof r.code ? r.code : void 0, s = "string" == typeof r.message ? B(r.message, {
                maxLength: D
            }) : void 0;
            if (void 0 === n && void 0 === s) return;
            return JSON.stringify({
                ...void 0 !== n ? {
                    code: n
                } : {},
                ...void 0 !== s ? {
                    message: s
                } : {}
            });
        }(t) : void 0;
    } catch  {
        return;
    }
}
async function V(e) {
    if (!H(e.input, e.init)) return;
    const t = await z(e.response, D);
    if (void 0 !== t) try {
        return P(JSON.parse(t));
    } catch  {
        return B(t, {
            maxLength: D
        });
    }
}
async function K(e) {
    const t = await async function(e, t) {
        try {
            if (t.ok) return;
            const r = t.headers.get("content-type")?.toLowerCase() ?? "";
            if (!r.includes("json") && !r.includes("text")) return;
            const n = await z(t, D);
            if (void 0 === n) return;
            return W({
                input: e,
                rawText: n
            });
        } catch  {
            return;
        }
    }(e.input, e.response);
    return {
        responseErrorSummary: t,
        oauthTokenErrorBodySummary: void 0 === t ? await V({
            input: e.input,
            response: e.response,
            init: e.init
        }) : void 0
    };
}
function Y(e) {
    const { logger: t, response: r } = e, n = function(e) {
        const { input: t, init: r, response: n, durationMs: s, metadata: o, responseErrorSummary: i, oauthTokenErrorBodySummary: a } = e, c = Q({
            input: t,
            init: r
        }), l = $(c.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: n.ok ? "success" : "http_error",
            durationMs: s,
            cursorMcp: {
                transport: {
                    ...o,
                    request: c,
                    response: j(n, i),
                    ...void 0 !== l ? {
                        oauth: {
                            grantType: l
                        }
                    } : {},
                    ...void 0 !== a ? {
                        oauthTokenErrorBodySummary: a
                    } : {}
                }
            }
        };
    }(e);
    r.ok ? t.info?.("MCP HTTP exchange completed", n) : !function(e) {
        return 401 === e.response.status && null === e.request.authorizationScheme && e.response.headers.has("www-authenticate") && !H(e.input, e.init);
    }({
        response: r,
        request: n.cursorMcp.transport.request,
        input: e.input,
        init: e.init
    }) ? t.warn?.("MCP HTTP exchange completed", n) : t.debug?.("MCP HTTP exchange completed", n);
}
function Z(e) {
    const { logger: t } = e;
    t.warn?.("MCP HTTP exchange failed", function(e) {
        const { input: t, init: r, error: n, durationMs: s, metadata: o, responseFromError: i, responseErrorSummary: a, oauthTokenErrorBodySummary: c } = e, l = J(n), u = Q({
            input: t,
            init: r
        }), d = $(u.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: "error",
            durationMs: s,
            cursorMcp: {
                transport: {
                    ...o,
                    request: u,
                    response: void 0 !== i ? j(i, a) : {
                        status: l.httpStatus ?? null,
                        ok: null,
                        headers: {
                            names: [],
                            count: 0
                        },
                        contentType: null,
                        body: {
                            kind: "none",
                            bytes: null,
                            contentLength: null,
                            ...void 0 !== a ? {
                                errorSummary: a
                            } : {}
                        },
                        requestId: null,
                        sessionIdHash: null,
                        wwwAuthenticateHash: null,
                        mcpProtocolVersion: null
                    },
                    ...void 0 !== d ? {
                        oauth: {
                            grantType: d
                        }
                    } : {},
                    ...void 0 !== c ? {
                        oauthTokenErrorBodySummary: c
                    } : {},
                    error: G(l)
                }
            }
        };
    }(e));
}
function X(e, t, r) {
    try {
        e();
    } catch  {
        t.warn?.("MCP HTTP exchange logging failed", {
            event: "mcp_http_exchange_logging_failure",
            phase: r
        });
    }
}
function ee(e) {
    const { fetch: t, logger: r, metadata: n, logSuccessfulExchanges: s = !0 } = e;
    return async (e, o)=>{
        const i = Date.now();
        try {
            const a = await t(e, o), { responseErrorSummary: c, oauthTokenErrorBodySummary: l } = a.ok ? {} : await K({
                input: e,
                init: o,
                response: a
            });
            return !s && a.ok || X(()=>{
                Y({
                    logger: r,
                    input: e,
                    init: o,
                    response: a,
                    durationMs: Date.now() - i,
                    metadata: n,
                    responseErrorSummary: c,
                    oauthTokenErrorBodySummary: l
                });
            }, r, "success"), a;
        } catch (t) {
            const s = function(e) {
                if (!e || "object" != typeof e) return;
                const t = [
                    e.response,
                    e.cause?.response
                ];
                for (const e of t)if (e && "object" == typeof e && "status" in e && "number" == typeof e.status && "headers" in e && "function" == typeof e.headers?.get) return e;
            }(t), { responseErrorSummary: a, oauthTokenErrorBodySummary: c } = s ? await K({
                input: e,
                init: o,
                response: s
            }) : {};
            throw X(()=>{
                Z({
                    logger: r,
                    input: e,
                    init: o,
                    error: t,
                    durationMs: Date.now() - i,
                    metadata: n,
                    responseFromError: s,
                    responseErrorSummary: a,
                    oauthTokenErrorBodySummary: c
                });
            }, r, "failure"), t;
        }
    };
}
new Set([
    "access_not_configured",
    "admin_policy_enforced",
    "policy_enforced"
]), new Set([
    "invalid_grant",
    "interaction_required",
    "unauthorized_client"
]), new Set([
    "50105",
    "53000",
    "53001",
    "53002",
    "53003",
    "53004",
    "530032",
    "90094",
    "7000112"
]), new Set([
    "InvalidGrantError",
    "InvalidRequestError"
]);
const te = [
    "0.0.0.0/0",
    "::/0"
];
function re(e) {
    const t = (e ?? []).filter((e)=>e.trim().length > 0), r = t.flatMap((e)=>{
        const t = (0, n.bi)(e);
        return void 0 === t ? [] : [
            t
        ];
    });
    return {
        hasConfiguredEntries: t.length > 0,
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function ne(e) {
    const t = re(e.mcpNetworkAllowlist), r = re(e.mcpNetworkDenylist), n = e.mcpNetworkMode;
    if ("deny_all" === n || r.entries.includes("*") || r.hasInvalidEntries) return {
        version: 1,
        default: "deny"
    };
    if ("allow_all" === n) return {
        version: 1,
        default: "deny",
        allow: [
            ...te
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
    if ("allowlist" === n || t.hasConfiguredEntries) {
        const e = function(e) {
            return e.entries.includes("*") ? [
                ...te
            ] : e.entries;
        }(t);
        return e.length > 0 ? {
            version: 1,
            default: "deny",
            allow: e,
            ...r.entries.length > 0 ? {
                deny: r.entries
            } : {}
        } : {
            version: 1,
            default: "deny"
        };
    }
    return {
        version: 1,
        default: "deny",
        allow: [
            ...te
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
}
async function se(e, t) {
    const { resolveSandboxPolicyForWorkspace: n } = await Promise.resolve().then(require.bind(require, "./module-25925.js")), s = {
        type: "workspace_readwrite",
        sandboxWorkspaceRoot: t,
        networkPolicy: ne(e),
        networkPolicyStrict: !0
    }, { policy: o } = await n(t, {
        perUser: s
    });
    return o;
}
const oe = [
    "0.0.0.0/0",
    "::/0"
];
function ie(e) {
    const t = (e ?? []).filter((e)=>e.trim().length > 0), r = t.flatMap((e)=>{
        const t = (0, n.bi)(e);
        return void 0 === t ? [] : [
            t
        ];
    });
    return {
        hasInvalidEntries: r.length !== t.length,
        entries: r
    };
}
function ae(e) {
    const t = !0 === e.enabled, r = ie(e.mcpNetworkDenylist), s = "deny_all" === e.mcpNetworkMode || r.entries.includes("*") || r.hasInvalidEntries, o = t ? function(e) {
        if ("allow_all" === e.mcpNetworkMode) return [
            ...oe
        ];
        const t = ie(e.mcpNetworkAllowlist);
        if ("allowlist" === e.mcpNetworkMode) return t.entries.includes("*") ? [
            ...oe
        ] : t.entries;
        if (!function(e) {
            return (e.mcpNetworkAllowlist ?? []).some((e)=>e.trim().length > 0);
        }(e)) return [
            ...oe
        ];
        const r = (0, n.b6)(e);
        return r.includes("*") ? [
            ...oe
        ] : r;
    }(e) : [], i = t ? s ? [
        "*"
    ] : r.entries : [];
    return JSON.stringify({
        enabled: t,
        mode: e.mcpNetworkMode,
        allow: s ? [] : o,
        deny: i
    });
}
class ce extends Error {
    constructor(e, t){
        super(`MCP server "${e}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e, this.name = "McpSandboxUnavailableError", void 0 !== t && (this.cause = t);
    }
}
new Map;
new Set, new Set([
    "connection_attempt"
]), new Set([
    "health_probe"
]);
require("./module-88485.js"), require("./module-9939.js");
Error;
Error;
const le = new Set([
    "UnauthorizedError",
    "InvalidGrantError",
    "InvalidTokenError",
    "InvalidClientError",
    "UnauthorizedClientError"
]), ue = new Set([
    "invalid_grant",
    "invalid_token",
    "invalid_client",
    "unauthorized_client"
]), de = [
    /\btoken (?:has |is )?expired\b/i,
    /\btoken (?:was|is) invalid\b/i,
    /\binvalid (?:refresh[ _]?)?token\b/i,
    /\btoken (?:has been |was )?revoked\b/i
];
function pe(e) {
    if (null === e || "object" != typeof e) return !1;
    const t = e.name;
    if ("string" == typeof t && le.has(t)) return !0;
    const r = e.errorCode;
    return !("string" != typeof r || !ue.has(r.toLowerCase())) || function(e) {
        if (null === e || "object" != typeof e) return !1;
        const t = e.name, r = e.errorCode;
        if ("InvalidRequestError" !== t && ("string" != typeof r || "invalid_request" !== r.toLowerCase())) return !1;
        const n = e.message;
        return "string" == typeof n && de.some((e)=>e.test(n));
    }(e);
}
function me(e) {
    return /\b(timeout|timed out|deadline exceeded)\b/i.test(e);
}
new Set([
    "EAI_AGAIN",
    "ECONNABORTED",
    "ECONNREFUSED",
    "ECONNRESET",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ENOTFOUND",
    "EPIPE",
    "ETIMEDOUT",
    "EADDRNOTAVAIL",
    "UND_ERR_CONNECT_TIMEOUT"
]), new Set([
    "ECONNRESET",
    "EPIPE"
]), new Set([
    429,
    502,
    503,
    504
]);
const he = 8192;
new Set([
    "ENOENT",
    "EACCES",
    "ENOTDIR",
    "EPERM"
]);
function fe(e, t) {
    void 0 !== t && t.length > 0 && e.searchParams.set("scope", t.join(" "));
}
new Set([
    "invalid_refresh_token",
    "token_revoked",
    "token_expired"
]);
const ge = /\$\{[^}]*\}/;
function ye(e) {
    if (void 0 === e) return;
    const t = e.trim();
    return 0 !== t.length && ge.test(t) ? t : void 0;
}
function we(e) {
    if (void 0 !== ye(e)) return;
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
var ve = require("./module-61771.js");
const _e = 3e5, Ae = new Map;
async function Se(e, t = fetch) {
    if (void 0 === (0, ve.sr)(e)) return;
    const r = new URL(e), n = `${r.origin}/.well-known/oauth-protected-resource${r.pathname.replace(/\/+$/, "")}`, s = Ae.get(n);
    if (void 0 !== s && s.expiresAtMs > Date.now()) return s.metadata;
    let o;
    try {
        const e = await t(n);
        if (!e.ok) return;
        o = (0, ve.vI)(await e.json());
    } catch  {
        return;
    }
    return Ae.set(n, {
        metadata: o,
        expiresAtMs: Date.now() + _e
    }), o;
}
Error;
function be(e, t) {
    if (void 0 === t) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    const r = Object.entries(t), n = r.find(([e])=>e.toLowerCase() === ve.Qy);
    if (void 0 === n) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    let s;
    try {
        s = new URL(e).origin;
    } catch  {
        s = void 0;
    }
    return {
        headers: Object.fromEntries(r.filter(([e])=>e.toLowerCase() !== ve.Qy)),
        cursorAuthHeaderValue: n[1],
        cursorAuthOrigin: s
    };
}
function Ee(e, t, r) {
    return async (n, s)=>{
        let o;
        try {
            o = new URL("string" == typeof n ? n : n.toString()).origin;
        } catch  {
            return r(n, s);
        }
        if (o !== t) return r(n, s);
        const i = await e();
        if (void 0 === i || 0 === i.length) return r(n, s);
        const a = new Headers(s?.headers);
        return a.set(ve.Qy, i), r(n, {
            ...s,
            headers: a,
            redirect: "manual"
        });
    };
}
function Ie(e) {
    const t = function(e) {
        if (!e || "object" != typeof e) return;
        const t = e.code;
        if ("number" == typeof t && t >= 100 && t <= 599) return t;
        if ("string" == typeof t && /^\d{3}$/.test(t) && Number(t) >= 100 && Number(t) <= 599) return Number(t);
        const r = e instanceof Error || "string" == typeof e.message ? e.message : void 0;
        if (!r) return;
        const n = r.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n?.[1]) return;
        const s = Number.parseInt(n[1], 10);
        return Number.isNaN(s) ? void 0 : s;
    }(e);
    return void 0 !== t ? 400 === t || 404 === t || 405 === t : !!(e instanceof Error && e.message.toLowerCase().includes("sessionid must be provided")) || function(e) {
        if (!(e instanceof Error)) return !1;
        const t = e, r = e.cause?.code;
        return "ECONNREFUSED" === t.code || "ECONNREFUSED" === r || e.message.includes("ECONNREFUSED");
    }(e);
}
