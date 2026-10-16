"use strict";
require.d(exports, {
    B1j: ()=>o,
    c8u: ()=>ne,
    uOd: ()=>le,
    E_S: ()=>ce,
    Ico: ()=>Q,
    O3I: ()=>m,
    tBH: ()=>d,
    eod: ()=>i,
    Fmf: ()=>re,
    jIB: ()=>V,
    VDJ: ()=>P,
    X5z: ()=>I,
    $HQ: ()=>n.$H,
    Gpm: ()=>ae,
    PKk: ()=>we,
    Ezk: ()=>ge,
    qFm: ()=>pe,
    eaG: ()=>T,
    q2e: ()=>c,
    mtU: ()=>ye,
    utF: ()=>ve
});
var n = require("./module-50768.js");
require("./module-50623.js");
class o {
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
const s = 1e3;
async function i(e) {
    const t = [], r = new Set;
    let n;
    for(let o = 1;; o++){
        const i = await e.fetchPage(n), a = e.itemsOf(i);
        t.push(...a);
        const l = e.nextCursorOf(i);
        if (!l || r.has(l)) return t;
        if (o >= s) throw new Error(`MCP list did not end after ${s} pages; refusing to keep paging`);
        r.add(l), n = l;
    }
}
function a(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e])=>void 0 !== e));
}
function l(e, t) {
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
function c(e, t) {
    return l(e, t);
}
var u = require("./module-76982.js");
function d(e, t) {
    const r = e?.access_token, n = "string" == typeof r ? r.length : 0, o = Boolean(e?.refresh_token), s = "number" == typeof e?.expires_in && Number.isFinite(e.expires_in) ? e.expires_in : null;
    return {
        accessTokenLen: n,
        refreshTokenPresent: o,
        expiresAtTimestamp: t?.expiresInIsFresh && null !== s ? Date.now() + Math.round(1e3 * s) : null,
        grantedScope: "string" == typeof e?.scope && e.scope.length > 0 ? e.scope : null
    };
}
function p(e) {
    if (e) return (0, u.createHash)("sha256").update(e).digest("hex").slice(0, 12);
}
function h(e) {
    if (e && 0 !== e.length) return p(JSON.stringify([
        ...e
    ].sort()));
}
function m(e) {
    return {
        clientIdHash: p(e?.client_id),
        hasClientSecret: (e?.client_secret ?? "").length > 0,
        redirectUrisHash: h(e?.redirect_uris),
        redirectUriCount: e?.redirect_uris?.length ?? 0
    };
}
function f(e, t) {
    let r = e;
    for (const e of t){
        if ("object" != typeof r || null === r || !(e in r)) return;
        r = r[e];
    }
    return r;
}
function g(e, t) {
    for (const r of t)if ("string" == typeof f(e, r.split("."))) return f(e, r.split("."));
}
function y(e) {
    if (!e || "object" != typeof e) return;
    const t = e.errorCode;
    return "string" == typeof t ? t : void 0;
}
function v(e) {
    if (!e) return;
    const t = e.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r = t?.[1] ?? t?.[2] ?? t?.[3];
    if (!r) return;
    const n = Number.parseInt(r, 10);
    return Number.isNaN(n) ? void 0 : n;
}
function w(e) {
    if (e instanceof Error) {
        const t = e.message;
        return t && t !== e.name ? T(t) : void 0;
    }
    if (null != e) {
        const t = String(e);
        return t ? T(t) : void 0;
    }
}
function b(e) {
    if (e && "object" == typeof e) return e.cause;
}
function _(e, t = 4) {
    const r = [];
    let n = e;
    for(let e = 0; e < t && null != n; e++){
        if (n instanceof Error) {
            const e = w(n);
            r.push(e ? `${n.name}: ${e}` : n.name), n = b(n);
            continue;
        }
        r.push(T(String(n)));
        break;
    }
    return r.length > 1 ? r.join(" > ") : void 0;
}
const S = "[REDACTED]", x = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
function k(e) {
    return e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${S}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${S}`);
}
function E(e, t = 256) {
    return e.length > t ? `${e.slice(0, Math.max(0, t - 3))}...` : e;
}
function T(e, t) {
    return E(k(e), t?.maxLength);
}
function C(e) {
    if ("string" == typeof e) return E(k(e));
    if (void 0 !== e) try {
        const t = JSON.stringify(e, (e, t)=>e && function(e) {
                const t = e.toLowerCase();
                return "code" === t || "authorization" === t || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("assertion") || t.includes("verifier") || t.includes("challenge") || x.test(t);
            }(e) ? S : "string" == typeof t ? k(t) : t);
        if (!t) return;
        return E(t);
    } catch  {
        return;
    }
}
function I(e) {
    const t = b(e), r = e instanceof Error ? e.name : null != e ? typeof e : void 0, n = t instanceof Error ? t.name : void 0, o = w(t), s = w(e) ?? o, i = g(e, [
        "code",
        "cause.code"
    ]), l = y(e) ?? y(t) ?? g(e, [
        "errorCode",
        "error",
        "cause.errorCode",
        "cause.error",
        "body.error",
        "response.body.error"
    ]), c = function(e, t) {
        for (const r of t){
            const t = f(e, r.split("."));
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
    ]) ?? v(s) ?? v(o), u = C(f(e, [
        "response",
        "body"
    ]) ?? f(e, [
        "body"
    ]) ?? f(e, [
        "data"
    ]) ?? f(e, [
        "cause",
        "body"
    ]) ?? f(e, [
        "cause",
        "response",
        "body"
    ])), d = function(e) {
        const t = e.message?.toLowerCase(), r = e.code?.toLowerCase();
        return t?.includes("timed out") || t?.includes("timeout") || t?.includes("etimedout") || "etimedout" === r ? "timeout" : t?.includes("enotfound") || t?.includes("eai_again") || t?.includes("dns") || "enotfound" === r || "eai_again" === r ? "dns" : t?.includes("certificate") || t?.includes("tls") || t?.includes("ssl") ? "tls" : t?.includes("econnreset") || t?.includes("connection reset") || "econnreset" === r ? "connection_reset" : t?.includes("econnrefused") || t?.includes("connection refused") || "econnrefused" === r ? "connection_refused" : void 0;
    }({
        message: s,
        code: i
    }), p = l ? "oauth_error" : d ? "auth_transport_error" : s ? "generic_error" : void 0;
    return a({
        errorName: r,
        errorMessage: s,
        errorType: null != e ? typeof e : void 0,
        httpStatus: c,
        oauthErrorCode: l,
        errorResponseSummary: u,
        networkClassification: d,
        causeName: n,
        causeMessage: o,
        causeChain: _(e),
        sdkErrorKind: p
    });
}
const A = {
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
function P(e) {
    const t = e.message ?? A[e.event], r = {
        event: e.event,
        cursorMcp: {
            oauth: a({
                ...e.metadata
            })
        }
    }, n = e.level ?? "info";
    "error" !== n ? "warn" !== n ? "debug" !== n ? e.logger.info?.(t, r) : e.logger.debug?.(t, r) : e.logger.warn?.(t, r) : e.logger.error?.(t, e.error, r);
}
const M = 4096;
function R(e) {
    return "object" == typeof e && null !== e && "url" in e && "string" == typeof e.url;
}
function O(e) {
    return "string" == typeof e ? e : e instanceof URL ? e.toString() : e.url;
}
function D(e) {
    const t = [];
    return e.forEach((e, r)=>{
        t.push(r);
    }), t.sort();
}
function N(e) {
    if (null === e) return null;
    const t = Number.parseInt(e, 10);
    return Number.isNaN(t) ? null : t;
}
function F(e, t) {
    if (null == e) return {
        kind: "none",
        bytes: 0,
        contentLength: N(t.get("content-length"))
    };
    if ("string" == typeof e) {
        const r = (new TextEncoder).encode(e).length;
        return {
            kind: "text",
            bytes: r,
            contentLength: N(t.get("content-length")) ?? r
        };
    }
    if (e instanceof URLSearchParams) {
        const r = e.toString(), n = (new TextEncoder).encode(r).length;
        return {
            kind: "text",
            bytes: n,
            contentLength: N(t.get("content-length")) ?? n
        };
    }
    return e instanceof Blob ? {
        kind: "blob",
        bytes: e.size,
        contentLength: N(t.get("content-length")) ?? e.size
    } : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? {
        kind: "binary",
        bytes: e.byteLength,
        contentLength: N(t.get("content-length")) ?? e.byteLength
    } : "object" == typeof e && null !== e && ("getReader" in e || Symbol.asyncIterator in e) ? {
        kind: "stream",
        bytes: null,
        contentLength: N(t.get("content-length"))
    } : {
        kind: "unknown",
        bytes: null,
        contentLength: N(t.get("content-length"))
    };
}
function L(e, t) {
    if (null === e || !e.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
    const r = "string" == typeof t ? function(e, t) {
        for (const r of e.split("&")){
            const e = r.indexOf("="), n = e >= 0 ? r.slice(0, e) : r;
            let o;
            try {
                o = decodeURIComponent(n.replaceAll("+", " "));
            } catch  {
                return;
            }
            if (o !== t) continue;
            const s = e >= 0 ? r.slice(e + 1) : "";
            try {
                return decodeURIComponent(s.replaceAll("+", " "));
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
function U(e) {
    const { input: t, init: r } = e, n = l(O(t)), o = function(e, t) {
        const r = new Headers(R(e) ? e.headers : void 0);
        return new Headers(t?.headers).forEach((e, t)=>{
            r.set(t, e);
        }), r;
    }(t, r), s = D(o), i = o.get("content-type"), a = p(o.get("mcp-session-id") ?? void 0), c = o.get("authorization"), u = c ? c.split(/\s+/, 1)[0] ?? null : null;
    return {
        method: (r?.method ?? (R(t) ? t.method : void 0) ?? "GET").toUpperCase(),
        url: n,
        headers: {
            names: s,
            count: s.length
        },
        contentType: i,
        body: F(r?.body, o),
        sessionIdHash: a ?? null,
        authorizationScheme: u
    };
}
function B(e, t) {
    const r = D(e.headers), n = N(e.headers.get("content-length"));
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
        sessionIdHash: p(e.headers.get("mcp-session-id") ?? void 0) ?? null,
        wwwAuthenticateHash: p(e.headers.get("www-authenticate") ?? void 0) ?? null,
        mcpProtocolVersion: e.headers.get("mcp-protocol-version") ?? null,
        requestId: e.headers.get("x-request-id") ?? null
    };
}
function $(e) {
    const t = {};
    return void 0 !== e.errorName && (t.name = e.errorName), void 0 !== e.errorMessage && (t.message = e.errorMessage), void 0 !== e.errorType && (t.type = e.errorType), void 0 !== e.oauthErrorCode && (t.oauthErrorCode = e.oauthErrorCode), void 0 !== e.errorResponseSummary && (t.responseSummary = e.errorResponseSummary), void 0 !== e.networkClassification && (t.networkClassification = e.networkClassification), void 0 !== e.sdkErrorKind && (t.sdkErrorKind = e.sdkErrorKind), t;
}
function q(e, t) {
    const r = U({
        input: e,
        init: t
    });
    if (void 0 !== L(r.contentType, t?.body)) return !0;
    const n = r.url.path?.toLowerCase() ?? "";
    return n.endsWith("/token") || n.includes("/oauth/token") || n.includes("/connect/token");
}
async function j(e, t) {
    try {
        const r = await e.clone().text();
        return r.length > t ? r.slice(0, t) : r;
    } catch  {
        return;
    }
}
function J(e) {
    if (!function(e) {
        return "/mcp" === e || !0 === e?.endsWith("/mcp");
    }(l(O(e.input)).path)) return T(e.rawText, {
        maxLength: M
    });
    try {
        const t = JSON.parse(e.rawText);
        return "object" == typeof t && null !== t ? function(e) {
            const t = e.error;
            if ("string" == typeof t) return JSON.stringify({
                error: t
            });
            if ("object" != typeof t || null === t) return;
            const r = t, n = "number" == typeof r.code || "string" == typeof r.code ? r.code : void 0, o = "string" == typeof r.message ? T(r.message, {
                maxLength: M
            }) : void 0;
            if (void 0 === n && void 0 === o) return;
            return JSON.stringify({
                ...void 0 !== n ? {
                    code: n
                } : {},
                ...void 0 !== o ? {
                    message: o
                } : {}
            });
        }(t) : void 0;
    } catch  {
        return;
    }
}
async function z(e) {
    if (!q(e.input, e.init)) return;
    const t = await j(e.response, M);
    if (void 0 !== t) try {
        return C(JSON.parse(t));
    } catch  {
        return T(t, {
            maxLength: M
        });
    }
}
async function H(e) {
    const t = await async function(e, t) {
        try {
            if (t.ok) return;
            const r = t.headers.get("content-type")?.toLowerCase() ?? "";
            if (!r.includes("json") && !r.includes("text")) return;
            const n = await j(t, M);
            if (void 0 === n) return;
            return J({
                input: e,
                rawText: n
            });
        } catch  {
            return;
        }
    }(e.input, e.response);
    return {
        responseErrorSummary: t,
        oauthTokenErrorBodySummary: void 0 === t ? await z({
            input: e.input,
            response: e.response,
            init: e.init
        }) : void 0
    };
}
function W(e) {
    const { logger: t, response: r } = e, n = function(e) {
        const { input: t, init: r, response: n, durationMs: o, metadata: s, responseErrorSummary: i, oauthTokenErrorBodySummary: a } = e, l = U({
            input: t,
            init: r
        }), c = L(l.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: n.ok ? "success" : "http_error",
            durationMs: o,
            cursorMcp: {
                transport: {
                    ...s,
                    request: l,
                    response: B(n, i),
                    ...void 0 !== c ? {
                        oauth: {
                            grantType: c
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
        return 401 === e.response.status && null === e.request.authorizationScheme && e.response.headers.has("www-authenticate") && !q(e.input, e.init);
    }({
        response: r,
        request: n.cursorMcp.transport.request,
        input: e.input,
        init: e.init
    }) ? t.warn?.("MCP HTTP exchange completed", n) : t.debug?.("MCP HTTP exchange completed", n);
}
function G(e) {
    const { logger: t } = e;
    t.warn?.("MCP HTTP exchange failed", function(e) {
        const { input: t, init: r, error: n, durationMs: o, metadata: s, responseFromError: i, responseErrorSummary: a, oauthTokenErrorBodySummary: l } = e, c = I(n), u = U({
            input: t,
            init: r
        }), d = L(u.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: "error",
            durationMs: o,
            cursorMcp: {
                transport: {
                    ...s,
                    request: u,
                    response: void 0 !== i ? B(i, a) : {
                        status: c.httpStatus ?? null,
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
                    ...void 0 !== l ? {
                        oauthTokenErrorBodySummary: l
                    } : {},
                    error: $(c)
                }
            }
        };
    }(e));
}
function Y(e, t, r) {
    try {
        e();
    } catch  {
        t.warn?.("MCP HTTP exchange logging failed", {
            event: "mcp_http_exchange_logging_failure",
            phase: r
        });
    }
}
function V(e) {
    const { fetch: t, logger: r, metadata: n, logSuccessfulExchanges: o = !0 } = e;
    return async (e, s)=>{
        const i = Date.now();
        try {
            const a = await t(e, s), { responseErrorSummary: l, oauthTokenErrorBodySummary: c } = a.ok ? {} : await H({
                input: e,
                init: s,
                response: a
            });
            return !o && a.ok || Y(()=>{
                W({
                    logger: r,
                    input: e,
                    init: s,
                    response: a,
                    durationMs: Date.now() - i,
                    metadata: n,
                    responseErrorSummary: l,
                    oauthTokenErrorBodySummary: c
                });
            }, r, "success"), a;
        } catch (t) {
            const o = function(e) {
                if (!e || "object" != typeof e) return;
                const t = [
                    e.response,
                    e.cause?.response
                ];
                for (const e of t)if (e && "object" == typeof e && "status" in e && "number" == typeof e.status && "headers" in e && "function" == typeof e.headers?.get) return e;
            }(t), { responseErrorSummary: a, oauthTokenErrorBodySummary: l } = o ? await H({
                input: e,
                init: s,
                response: o
            }) : {};
            throw Y(()=>{
                G({
                    logger: r,
                    input: e,
                    init: s,
                    error: t,
                    durationMs: Date.now() - i,
                    metadata: n,
                    responseFromError: o,
                    responseErrorSummary: a,
                    oauthTokenErrorBodySummary: l
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
const K = [
    "0.0.0.0/0",
    "::/0"
];
function Z(e) {
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
function X(e) {
    const t = Z(e.mcpNetworkAllowlist), r = Z(e.mcpNetworkDenylist), n = e.mcpNetworkMode;
    if ("deny_all" === n || r.entries.includes("*") || r.hasInvalidEntries) return {
        version: 1,
        default: "deny"
    };
    if ("allow_all" === n) return {
        version: 1,
        default: "deny",
        allow: [
            ...K
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
    if ("allowlist" === n || t.hasConfiguredEntries) {
        const e = function(e) {
            return e.entries.includes("*") ? [
                ...K
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
            ...K
        ],
        ...r.entries.length > 0 ? {
            deny: r.entries
        } : {}
    };
}
async function Q(e, t) {
    const { resolveSandboxPolicyForWorkspace: n } = await Promise.resolve().then(require.bind(require, "./module-25925.js")), o = {
        type: "workspace_readwrite",
        sandboxWorkspaceRoot: t,
        networkPolicy: X(e),
        networkPolicyStrict: !0
    }, { policy: s } = await n(t, {
        perUser: o
    });
    return s;
}
const ee = [
    "0.0.0.0/0",
    "::/0"
];
function te(e) {
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
function re(e) {
    const t = !0 === e.enabled, r = te(e.mcpNetworkDenylist), o = "deny_all" === e.mcpNetworkMode || r.entries.includes("*") || r.hasInvalidEntries, s = t ? function(e) {
        if ("allow_all" === e.mcpNetworkMode) return [
            ...ee
        ];
        const t = te(e.mcpNetworkAllowlist);
        if ("allowlist" === e.mcpNetworkMode) return t.entries.includes("*") ? [
            ...ee
        ] : t.entries;
        if (!function(e) {
            return (e.mcpNetworkAllowlist ?? []).some((e)=>e.trim().length > 0);
        }(e)) return [
            ...ee
        ];
        const r = (0, n.b6)(e);
        return r.includes("*") ? [
            ...ee
        ] : r;
    }(e) : [], i = t ? o ? [
        "*"
    ] : r.entries : [];
    return JSON.stringify({
        enabled: t,
        mode: e.mcpNetworkMode,
        allow: o ? [] : s,
        deny: i
    });
}
class ne extends Error {
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
const oe = new Set([
    "UnauthorizedError",
    "InvalidGrantError",
    "InvalidTokenError",
    "InvalidClientError",
    "UnauthorizedClientError"
]), se = new Set([
    "invalid_grant",
    "invalid_token",
    "invalid_client",
    "unauthorized_client"
]), ie = [
    /\btoken (?:has |is )?expired\b/i,
    /\btoken (?:was|is) invalid\b/i,
    /\binvalid (?:refresh[ _]?)?token\b/i,
    /\btoken (?:has been |was )?revoked\b/i
];
function ae(e) {
    if (null === e || "object" != typeof e) return !1;
    const t = e.name;
    if ("string" == typeof t && oe.has(t)) return !0;
    const r = e.errorCode;
    return !("string" != typeof r || !se.has(r.toLowerCase())) || function(e) {
        if (null === e || "object" != typeof e) return !1;
        const t = e.name, r = e.errorCode;
        if ("InvalidRequestError" !== t && ("string" != typeof r || "invalid_request" !== r.toLowerCase())) return !1;
        const n = e.message;
        return "string" == typeof n && ie.some((e)=>e.test(n));
    }(e);
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
const le = 8192;
new Set([
    "ENOENT",
    "EACCES",
    "ENOTDIR",
    "EPERM"
]);
function ce(e, t) {
    void 0 !== t && t.length > 0 && e.searchParams.set("scope", t.join(" "));
}
new Set([
    "invalid_refresh_token",
    "token_revoked",
    "token_expired"
]);
const ue = /\$\{[^}]*\}/;
function de(e) {
    if (void 0 === e) return;
    const t = e.trim();
    return 0 !== t.length && ue.test(t) ? t : void 0;
}
function pe(e) {
    if (void 0 !== de(e)) return;
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
var he = require("./module-61771.js");
const me = 3e5, fe = new Map;
async function ge(e, t = fetch) {
    if (void 0 === (0, he.sr)(e)) return;
    const r = new URL(e), n = `${r.origin}/.well-known/oauth-protected-resource${r.pathname.replace(/\/+$/, "")}`, o = fe.get(n);
    if (void 0 !== o && o.expiresAtMs > Date.now()) return o.metadata;
    let s;
    try {
        const e = await t(n);
        if (!e.ok) return;
        s = (0, he.vI)(await e.json());
    } catch  {
        return;
    }
    return fe.set(n, {
        metadata: s,
        expiresAtMs: Date.now() + me
    }), s;
}
Error;
function ye(e, t) {
    if (void 0 === t) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    const r = Object.entries(t), n = r.find(([e])=>e.toLowerCase() === he.Qy);
    if (void 0 === n) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    let o;
    try {
        o = new URL(e).origin;
    } catch  {
        o = void 0;
    }
    return {
        headers: Object.fromEntries(r.filter(([e])=>e.toLowerCase() !== he.Qy)),
        cursorAuthHeaderValue: n[1],
        cursorAuthOrigin: o
    };
}
function ve(e, t, r) {
    return async (n, o)=>{
        let s;
        try {
            s = new URL("string" == typeof n ? n : n.toString()).origin;
        } catch  {
            return r(n, o);
        }
        if (s !== t) return r(n, o);
        const i = await e();
        if (void 0 === i || 0 === i.length) return r(n, o);
        const a = new Headers(o?.headers);
        return a.set(he.Qy, i), r(n, {
            ...o,
            headers: a,
            redirect: "manual"
        });
    };
}
function we(e) {
    const t = function(e) {
        if (!e || "object" != typeof e) return;
        const t = e.code;
        if ("number" == typeof t && t >= 100 && t <= 599) return t;
        if ("string" == typeof t && /^\d{3}$/.test(t) && Number(t) >= 100 && Number(t) <= 599) return Number(t);
        const r = e instanceof Error || "string" == typeof e.message ? e.message : void 0;
        if (!r) return;
        const n = r.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n?.[1]) return;
        const o = Number.parseInt(n[1], 10);
        return Number.isNaN(o) ? void 0 : o;
    }(e);
    return void 0 !== t ? 400 === t || 404 === t || 405 === t : !!(e instanceof Error && e.message.toLowerCase().includes("sessionid must be provided")) || function(e) {
        if (!(e instanceof Error)) return !1;
        const t = e, r = e.cause?.code;
        return "ECONNREFUSED" === t.code || "ECONNREFUSED" === r || e.message.includes("ECONNREFUSED");
    }(e);
}
