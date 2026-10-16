"use strict";
require.d(exports, {
    $y: ()=>s.$y,
    O3: ()=>c,
    QD: ()=>o.QD,
    VD: ()=>T,
    X5: ()=>E,
    dE: ()=>b,
    e: ()=>w,
    q2: ()=>o.q2,
    qY: ()=>s.qY,
    tB: ()=>s.tB,
    wN: ()=>i,
    xn: ()=>k
});
var n = require("./module-6982.js"), o = require("./module-4792.js"), s = require("./module-1970.js");
function i(e) {
    if (e) return (0, n.createHash)("sha256").update(e).digest("hex").slice(0, 12);
}
function a(e) {
    if (e && 0 !== e.length) return i(JSON.stringify([
        ...e
    ].sort()));
}
function c(e) {
    return {
        clientIdHash: i(e?.client_id),
        hasClientSecret: (e?.client_secret ?? "").length > 0,
        redirectUrisHash: a(e?.redirect_uris),
        redirectUriCount: e?.redirect_uris?.length ?? 0
    };
}
function u(e, t) {
    let r = e;
    for (const e of t){
        if ("object" != typeof r || null === r || !(e in r)) return;
        r = r[e];
    }
    return r;
}
function l(e, t) {
    for (const r of t)if ("string" == typeof u(e, r.split("."))) return u(e, r.split("."));
}
function d(e) {
    if (!e || "object" != typeof e) return;
    const t = e.errorCode;
    return "string" == typeof t ? t : void 0;
}
function p(e) {
    if (!e) return;
    const t = e.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r = t?.[1] ?? t?.[2] ?? t?.[3];
    if (!r) return;
    const n = Number.parseInt(r, 10);
    return Number.isNaN(n) ? void 0 : n;
}
function f(e) {
    if (e instanceof Error) {
        const t = e.message;
        return t && t !== e.name ? w(t) : void 0;
    }
    if (null != e) {
        const t = String(e);
        return t ? w(t) : void 0;
    }
}
function h(e) {
    if (e && "object" == typeof e) return e.cause;
}
function m(e, t = 4) {
    const r = [];
    let n = e;
    for(let e = 0; e < t && null != n; e++){
        if (n instanceof Error) {
            const e = f(n);
            r.push(e ? `${n.name}: ${e}` : n.name), n = h(n);
            continue;
        }
        r.push(w(String(n)));
        break;
    }
    return r.length > 1 ? r.join(" > ") : void 0;
}
const g = "[REDACTED]", y = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
function _(e) {
    return e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${g}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${g}`);
}
function v(e, t = 256) {
    return e.length > t ? `${e.slice(0, Math.max(0, t - 3))}...` : e;
}
function w(e, t) {
    return v(_(e), t?.maxLength);
}
function b(e) {
    return S(e);
}
function S(e) {
    if ("string" == typeof e) return v(_(e));
    if (void 0 !== e) try {
        const t = JSON.stringify(e, (e, t)=>e && function(e) {
                const t = e.toLowerCase();
                return "code" === t || "authorization" === t || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("assertion") || t.includes("verifier") || t.includes("challenge") || y.test(t);
            }(e) ? g : "string" == typeof t ? _(t) : t);
        if (!t) return;
        return v(t);
    } catch  {
        return;
    }
}
function k(e) {
    if (!e || "object" != typeof e) return;
    const t = [
        e.response,
        e.cause?.response
    ];
    for (const e of t)if (e && "object" == typeof e && "status" in e && "number" == typeof e.status && "headers" in e && "function" == typeof e.headers?.get) return e;
}
function E(e) {
    const t = h(e), r = e instanceof Error ? e.name : null != e ? typeof e : void 0, n = t instanceof Error ? t.name : void 0, s = f(t), i = f(e) ?? s, a = l(e, [
        "code",
        "cause.code"
    ]), c = d(e) ?? d(t) ?? l(e, [
        "errorCode",
        "error",
        "cause.errorCode",
        "cause.error",
        "body.error",
        "response.body.error"
    ]), g = function(e, t) {
        for (const r of t){
            const t = u(e, r.split("."));
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
    ]) ?? p(i) ?? p(s), y = S(u(e, [
        "response",
        "body"
    ]) ?? u(e, [
        "body"
    ]) ?? u(e, [
        "data"
    ]) ?? u(e, [
        "cause",
        "body"
    ]) ?? u(e, [
        "cause",
        "response",
        "body"
    ])), _ = function(e) {
        const t = e.message?.toLowerCase(), r = e.code?.toLowerCase();
        return t?.includes("timed out") || t?.includes("timeout") || t?.includes("etimedout") || "etimedout" === r ? "timeout" : t?.includes("enotfound") || t?.includes("eai_again") || t?.includes("dns") || "enotfound" === r || "eai_again" === r ? "dns" : t?.includes("certificate") || t?.includes("tls") || t?.includes("ssl") ? "tls" : t?.includes("econnreset") || t?.includes("connection reset") || "econnreset" === r ? "connection_reset" : t?.includes("econnrefused") || t?.includes("connection refused") || "econnrefused" === r ? "connection_refused" : void 0;
    }({
        message: i,
        code: a
    }), v = c ? "oauth_error" : _ ? "auth_transport_error" : i ? "generic_error" : void 0;
    return (0, o.zd)({
        errorName: r,
        errorMessage: i,
        errorType: null != e ? typeof e : void 0,
        httpStatus: g,
        oauthErrorCode: c,
        errorResponseSummary: y,
        networkClassification: _,
        causeName: n,
        causeMessage: s,
        causeChain: m(e),
        sdkErrorKind: v
    });
}
const x = {
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
function T(e) {
    const t = e.message ?? x[e.event], r = {
        event: e.event,
        cursorMcp: {
            oauth: (0, o.zd)({
                ...e.metadata
            })
        }
    }, n = e.level ?? "info";
    "error" !== n ? "warn" !== n ? "debug" !== n ? e.logger.info?.(t, r) : e.logger.debug?.(t, r) : e.logger.warn?.(t, r) : e.logger.error?.(t, e.error, r);
}
