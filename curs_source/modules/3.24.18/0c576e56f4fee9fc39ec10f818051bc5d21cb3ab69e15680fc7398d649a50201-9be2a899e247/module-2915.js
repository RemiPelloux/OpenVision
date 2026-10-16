"use strict";
require.d(exports, {
    E7: ()=>_,
    FM: ()=>l,
    H$: ()=>h,
    OV: ()=>u,
    UZ: ()=>y,
    XP: ()=>m,
    YM: ()=>c,
    dQ: ()=>a,
    ef: ()=>v,
    mY: ()=>d,
    zB: ()=>g
});
var n = require("./module-8691.js");
let o, s, i = "local";
function a(e) {
    o = e;
}
function c(e) {
    i = e;
}
function u() {
    return i;
}
function l(e, t, r = "distribution", n = []) {
    if (!o) return;
    const s = [
        `lease_connection:${i}`,
        ...n
    ];
    try {
        o.emit(e, t, r, s);
    } catch  {}
}
function d(e) {
    s = e;
}
let p, f = "v1";
function h(e) {
    f = e;
}
function m() {
    return f;
}
function g(e) {
    p = e;
}
function y(e) {
    return p ? p(e) : {
        mcpAuthMeta: e
    };
}
function _(e) {
    const t = [
        `failure_reason:${e.reason}`,
        `retryable:${String(e.retryable)}`
    ];
    return void 0 !== e.httpStatus && t.push(`status_code:${String(e.httpStatus)}`), t;
}
function v({ identifier: e, phase: t, error: r, serverType: o, classification: i, captureException: a = !0, extraData: c }) {
    const u = i ?? (0, n.FI)(r, o), l = r instanceof Error ? r.message : String(r), d = {
        identifier: e,
        phase: t,
        reason: u.reason,
        retryable: u.retryable,
        http_status: u.httpStatus,
        server_type: o,
        ...c
    };
    if (s && (s.addBreadcrumb({
        category: "mcp.v2.failure",
        level: "error",
        message: l,
        data: d
    }), a)) {
        const e = new Error(l);
        e.name = "McpV2Error", e.stack = r instanceof Error ? r.stack : void 0, e.mcpFailure = d, s.captureException(e);
    }
    return u;
}
