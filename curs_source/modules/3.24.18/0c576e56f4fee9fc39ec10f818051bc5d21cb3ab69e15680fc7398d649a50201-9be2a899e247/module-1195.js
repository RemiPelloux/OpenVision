"use strict";
require.d(exports, {
    AR: ()=>_,
    Hr: ()=>p,
    QB: ()=>v,
    R0: ()=>o,
    RI: ()=>d,
    a6: ()=>u,
    qL: ()=>i,
    uO: ()=>f
});
var n = require("./module-3168.js");
const o = new Set([
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
]), s = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, i = [
    /fetch failed/i,
    /network error/i,
    /socket hang up/i,
    /client network socket disconnected/i,
    /connection (?:timed out|timeout|closed|terminated)/i,
    /request timed out/i,
    /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|INTERNET_DISCONNECTED|CONNECTION_(?:RESET|CLOSED|ABORTED|FAILED|REFUSED|TIMED_OUT)|TIMED_OUT|ABORTED|NAME_NOT_RESOLVED|NAME_RESOLUTION_FAILED|DNS_TIMED_OUT|SOCKET_NOT_CONNECTED|ADDRESS_UNREACHABLE|TUNNEL_CONNECTION_FAILED|EMPTY_RESPONSE|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR)\b/
], a = new Set([
    "ECONNRESET",
    "EPIPE"
]), c = [
    /socket hang up/i,
    /client network socket disconnected/i,
    /connection (?:closed|terminated)/i,
    /ERR_STREAM_PREMATURE_CLOSE/i,
    /premature close/i,
    /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|CONNECTION_(?:RESET|CLOSED|ABORTED)|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR|EMPTY_RESPONSE)\b/
], u = new Set([
    429,
    502,
    503,
    504
]);
function l(e) {
    const t = e.code, r = (e instanceof Error || "string" == typeof e.message ? e.message : "").match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), n = r?.[1] ?? r?.[2] ?? r?.[3], o = void 0 !== n ? parseInt(n, 10) : void 0;
    if ("number" == typeof t && t >= 100) return void 0 !== o && u.has(o) && !u.has(t) ? o : t;
    if ("string" == typeof t && /^\d{3}$/.test(t)) {
        const e = Number.parseInt(t, 10);
        return e >= 100 && e <= 599 ? e : o;
    }
    return o;
}
function d(e) {
    if (!e || "object" != typeof e) return;
    const t = l(e);
    if (void 0 !== t) return t;
    const r = e.cause;
    return r && "object" == typeof r ? l(r) : void 0;
}
function p(e) {
    const t = e.message ?? "", r = d(e);
    if (function(e) {
        return /Failed to open SSE stream:?\s*$/i.test(e.trim());
    }(t)) return void 0 !== r && u.has(r);
    if (s.test(t)) return !1;
    const n = e.code ?? e.cause?.code;
    return !("string" != typeof n || !o.has(n)) || !(void 0 === r || !u.has(r)) || i.some((e)=>e.test(t));
}
const f = 8192, h = new Set([
    "ENOENT",
    "EACCES",
    "ENOTDIR",
    "EPERM"
]), m = [
    /cannot find module/i,
    /module not found/i,
    /syntaxerror/i,
    /command not found/i,
    /is not recognized as an internal or external command/i,
    /no such file or directory/i,
    /err_module_not_found/i
];
function g(e) {
    return /MCP error -32000:\s*Connection closed/i.test(e.message ?? "");
}
function y(e, t) {
    return [
        e,
        ...t
    ].map((e)=>e.toLowerCase()).some((e)=>e.includes("mcp-remote"));
}
function _(e, t, r, s, a) {
    if (e instanceof Error) {
        const t = e.code ?? e.cause?.code;
        if ("string" == typeof t && h.has(t)) return !1;
        if (y(s, a) && (0, n.v)(e.message ?? "")) return !0;
        if (!g(e) && p(e)) return !0;
    }
    const c = t;
    if (c.trim().length > 0) {
        if (function(e) {
            return m.some((t)=>t.test(e));
        }(c)) return !1;
        if (function(e) {
            for (const t of o)if (e.includes(t)) return !0;
            return i.some((t)=>t.test(e));
        }(c)) return !0;
    }
    return !(e instanceof Error && g(e) && 0 === c.trim().length && !y(s, a)) && !r;
}
function v(e) {
    const t = e.code ?? e.cause?.code;
    if ("string" == typeof t && a.has(t)) return !0;
    const r = e.message ?? "";
    return c.some((e)=>e.test(r));
}
