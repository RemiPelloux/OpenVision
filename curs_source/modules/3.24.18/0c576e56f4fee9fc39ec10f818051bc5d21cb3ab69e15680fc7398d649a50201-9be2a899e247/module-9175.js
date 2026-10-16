"use strict";
require.d(exports, {
    Gv: ()=>h,
    WQ: ()=>m,
    fh: ()=>p,
    tz: ()=>d,
    yD: ()=>f
});
var n = require("./module-3168.js"), o = require("./module-496.js");
const s = 12e4, i = 36e5, a = 36e5, c = 5e3, u = "MCP error -32001: Request timed out";
function l(e) {
    const t = (0, o.v)("toolCallIdleTimeoutMs", e) ?? s;
    return Math.max(5e3, Math.min(Math.trunc(t), 18e5));
}
function d(e, t, r) {
    const n = t?.enabled ?? function(e) {
        return (0, o.v)("toolCallBoundedTimeoutEnabled", e) ?? !0;
    }(r);
    if (!n) return {
        timeout: a,
        ...void 0 !== e ? {
            onprogress: e
        } : {}
    };
    const s = Math.max(5e3, Math.min(Math.trunc(t?.timeoutMs ?? l(r)), 18e5)), c = Math.max(s, Math.min(Math.trunc(t?.maxTotalTimeoutMs ?? function(e) {
        const t = l(e), r = (0, o.v)("toolCallMaxTotalTimeoutMs", e) ?? i;
        return Math.max(t, Math.min(Math.trunc(r), 36e5));
    }(r)), 36e5));
    return {
        timeout: s,
        resetTimeoutOnProgress: !0,
        maxTotalTimeout: c,
        ...void 0 !== e ? {
            onprogress: e
        } : {}
    };
}
function p(e, t, r = Date.now()) {
    if (void 0 === e.maxTotalTimeout) return e;
    const n = e.maxTotalTimeout - (r - t);
    return n <= 0 ? null : {
        ...e,
        timeout: Math.min(e.timeout, n),
        maxTotalTimeout: n
    };
}
function f() {
    return new Error(u);
}
function h(e) {
    const t = e instanceof Error ? e.message : String(e);
    return (0, n.v)(t);
}
function m(e, t, r) {
    return void 0 === r ? "legacy" : r > t && e >= r - c ? "max_total" : "idle";
}
