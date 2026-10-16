"use strict";
require.d(exports, {
    jI: ()=>S
});
var n = require("./module-4792.js"), o = require("./module-2557.js");
const s = 4096;
function i(e) {
    return "object" == typeof e && null !== e && "url" in e && "string" == typeof e.url;
}
function a(e) {
    return "string" == typeof e ? e : e instanceof URL ? e.toString() : e.url;
}
function c(e) {
    const t = [];
    return e.forEach((e, r)=>{
        t.push(r);
    }), t.sort();
}
function u(e) {
    if (null === e) return null;
    const t = Number.parseInt(e, 10);
    return Number.isNaN(t) ? null : t;
}
function l(e, t) {
    if (null == e) return {
        kind: "none",
        bytes: 0,
        contentLength: u(t.get("content-length"))
    };
    if ("string" == typeof e) {
        const r = (new TextEncoder).encode(e).length;
        return {
            kind: "text",
            bytes: r,
            contentLength: u(t.get("content-length")) ?? r
        };
    }
    if (e instanceof URLSearchParams) {
        const r = e.toString(), n = (new TextEncoder).encode(r).length;
        return {
            kind: "text",
            bytes: n,
            contentLength: u(t.get("content-length")) ?? n
        };
    }
    return e instanceof Blob ? {
        kind: "blob",
        bytes: e.size,
        contentLength: u(t.get("content-length")) ?? e.size
    } : e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? {
        kind: "binary",
        bytes: e.byteLength,
        contentLength: u(t.get("content-length")) ?? e.byteLength
    } : "object" == typeof e && null !== e && ("getReader" in e || Symbol.asyncIterator in e) ? {
        kind: "stream",
        bytes: null,
        contentLength: u(t.get("content-length"))
    } : {
        kind: "unknown",
        bytes: null,
        contentLength: u(t.get("content-length"))
    };
}
function d(e, t) {
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
function p(e) {
    const { input: t, init: r } = e, s = a(t), u = (0, n.nT)(s), d = function(e, t) {
        const r = new Headers(i(e) ? e.headers : void 0);
        return new Headers(t?.headers).forEach((e, t)=>{
            r.set(t, e);
        }), r;
    }(t, r), p = c(d), f = d.get("content-type"), h = (0, o.wN)(d.get("mcp-session-id") ?? void 0), m = d.get("authorization"), g = m ? m.split(/\s+/, 1)[0] ?? null : null;
    return {
        method: (r?.method ?? (i(t) ? t.method : void 0) ?? "GET").toUpperCase(),
        url: u,
        headers: {
            names: p,
            count: p.length
        },
        contentType: f,
        body: l(r?.body, d),
        sessionIdHash: h ?? null,
        authorizationScheme: g
    };
}
function f(e, t) {
    const r = c(e.headers), n = u(e.headers.get("content-length"));
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
        sessionIdHash: (0, o.wN)(e.headers.get("mcp-session-id") ?? void 0) ?? null,
        wwwAuthenticateHash: (0, o.wN)(e.headers.get("www-authenticate") ?? void 0) ?? null,
        mcpProtocolVersion: e.headers.get("mcp-protocol-version") ?? null,
        requestId: e.headers.get("x-request-id") ?? null
    };
}
function h(e) {
    const t = {};
    return void 0 !== e.errorName && (t.name = e.errorName), void 0 !== e.errorMessage && (t.message = e.errorMessage), void 0 !== e.errorType && (t.type = e.errorType), void 0 !== e.oauthErrorCode && (t.oauthErrorCode = e.oauthErrorCode), void 0 !== e.errorResponseSummary && (t.responseSummary = e.errorResponseSummary), void 0 !== e.networkClassification && (t.networkClassification = e.networkClassification), void 0 !== e.sdkErrorKind && (t.sdkErrorKind = e.sdkErrorKind), t;
}
function m(e, t) {
    const r = p({
        input: e,
        init: t
    });
    if (void 0 !== d(r.contentType, t?.body)) return !0;
    const n = r.url.path?.toLowerCase() ?? "";
    return n.endsWith("/token") || n.includes("/oauth/token") || n.includes("/connect/token");
}
async function g(e, t) {
    try {
        const r = await e.clone().text();
        return r.length > t ? r.slice(0, t) : r;
    } catch  {
        return;
    }
}
function y(e) {
    if (!function(e) {
        return "/mcp" === e || !0 === e?.endsWith("/mcp");
    }((0, n.nT)(a(e.input)).path)) return (0, o.e)(e.rawText, {
        maxLength: s
    });
    try {
        const t = JSON.parse(e.rawText);
        return "object" == typeof t && null !== t ? function(e) {
            const t = e.error;
            if ("string" == typeof t) return JSON.stringify({
                error: t
            });
            if ("object" != typeof t || null === t) return;
            const r = t, n = "number" == typeof r.code || "string" == typeof r.code ? r.code : void 0, i = "string" == typeof r.message ? (0, o.e)(r.message, {
                maxLength: s
            }) : void 0;
            if (void 0 === n && void 0 === i) return;
            return JSON.stringify({
                ...void 0 !== n ? {
                    code: n
                } : {},
                ...void 0 !== i ? {
                    message: i
                } : {}
            });
        }(t) : void 0;
    } catch  {
        return;
    }
}
async function _(e) {
    const t = await async function(e, t) {
        try {
            if (t.ok) return;
            const r = t.headers.get("content-type")?.toLowerCase() ?? "";
            if (!r.includes("json") && !r.includes("text")) return;
            const n = await g(t, s);
            if (void 0 === n) return;
            return y({
                input: e,
                rawText: n
            });
        } catch  {
            return;
        }
    }(e.input, e.response), r = void 0 === t ? await async function(e) {
        if (!m(e.input, e.init)) return;
        const t = await g(e.response, s);
        if (void 0 !== t) try {
            return (0, o.dE)(JSON.parse(t));
        } catch  {
            return (0, o.e)(t, {
                maxLength: s
            });
        }
    }({
        input: e.input,
        response: e.response,
        init: e.init
    }) : void 0;
    return {
        responseErrorSummary: t,
        oauthTokenErrorBodySummary: r
    };
}
function v(e) {
    const { logger: t, response: r } = e, n = function(e) {
        const { input: t, init: r, response: n, durationMs: o, metadata: s, responseErrorSummary: i, oauthTokenErrorBodySummary: a } = e, c = p({
            input: t,
            init: r
        }), u = d(c.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: n.ok ? "success" : "http_error",
            durationMs: o,
            cursorMcp: {
                transport: {
                    ...s,
                    request: c,
                    response: f(n, i),
                    ...void 0 !== u ? {
                        oauth: {
                            grantType: u
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
        return 401 === e.response.status && null === e.request.authorizationScheme && e.response.headers.has("www-authenticate") && !m(e.input, e.init);
    }({
        response: r,
        request: n.cursorMcp.transport.request,
        input: e.input,
        init: e.init
    }) ? t.warn?.("MCP HTTP exchange completed", n) : t.debug?.("MCP HTTP exchange completed", n);
}
function w(e) {
    const { logger: t } = e;
    t.warn?.("MCP HTTP exchange failed", function(e) {
        const { input: t, init: r, error: n, durationMs: s, metadata: i, responseFromError: a, responseErrorSummary: c, oauthTokenErrorBodySummary: u } = e, l = (0, o.X5)(n), m = p({
            input: t,
            init: r
        }), g = d(m.contentType, r?.body);
        return {
            event: "mcp_http_exchange",
            outcome: "error",
            durationMs: s,
            cursorMcp: {
                transport: {
                    ...i,
                    request: m,
                    response: void 0 !== a ? f(a, c) : {
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
                            ...void 0 !== c ? {
                                errorSummary: c
                            } : {}
                        },
                        requestId: null,
                        sessionIdHash: null,
                        wwwAuthenticateHash: null,
                        mcpProtocolVersion: null
                    },
                    ...void 0 !== g ? {
                        oauth: {
                            grantType: g
                        }
                    } : {},
                    ...void 0 !== u ? {
                        oauthTokenErrorBodySummary: u
                    } : {},
                    error: h(l)
                }
            }
        };
    }(e));
}
function b(e, t, r) {
    try {
        e();
    } catch  {
        t.warn?.("MCP HTTP exchange logging failed", {
            event: "mcp_http_exchange_logging_failure",
            phase: r
        });
    }
}
function S(e) {
    const { fetch: t, logger: r, metadata: n, logSuccessfulExchanges: s = !0 } = e;
    return async (e, i)=>{
        const a = Date.now();
        try {
            const o = await t(e, i), { responseErrorSummary: c, oauthTokenErrorBodySummary: u } = o.ok ? {} : await _({
                input: e,
                init: i,
                response: o
            });
            return !s && o.ok || b(()=>{
                v({
                    logger: r,
                    input: e,
                    init: i,
                    response: o,
                    durationMs: Date.now() - a,
                    metadata: n,
                    responseErrorSummary: c,
                    oauthTokenErrorBodySummary: u
                });
            }, r, "success"), o;
        } catch (t) {
            const s = (0, o.xn)(t), { responseErrorSummary: c, oauthTokenErrorBodySummary: u } = s ? await _({
                input: e,
                init: i,
                response: s
            }) : {};
            throw b(()=>{
                w({
                    logger: r,
                    input: e,
                    init: i,
                    error: t,
                    durationMs: Date.now() - a,
                    metadata: n,
                    responseFromError: s,
                    responseErrorSummary: c,
                    oauthTokenErrorBodySummary: u
                });
            }, r, "failure"), t;
        }
    };
}
