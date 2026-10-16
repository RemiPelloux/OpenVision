"use strict";
require.d(exports, {
    J_: ()=>a,
    MB: ()=>i,
    X1: ()=>s,
    qh: ()=>c
});
var n = require("./module-2573.js"), o = require("./module-496.js");
function s(e) {
    return "connected" === e?.type;
}
function i(e) {
    return ("failed" === e.type || "closed" === e.type) && !1 === e.automaticRetry;
}
function a(e, t, r) {
    return ("failed" === e.type || "closed" === e.type) && (!1 !== e.automaticRetry || !0 === (0, o.v)("retryNonRetryableOnWake", r)) && "needsUserAuth" !== t.type && "expired" !== t.type;
}
function c(e, t) {
    return i(e) ? (0, o.v)("nonRetryableWakeRetryCooldownMs", t) ?? n.yw : (0, n.eu)(t);
}
