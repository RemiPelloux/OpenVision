"use strict";
require.d(exports, {
    l: ()=>p,
    v: ()=>f
});
var n = require("./module-768.js");
const o = [
    "fastRetryBaseDelayMs",
    "fastRetryMaxDelayMs",
    "fastRetryMaxAttempts",
    "periodicRetryBaseDelayMs",
    "periodicRetryMaxDelayMs",
    "maxPeriodicCycles",
    "focusRetryCooldownMs",
    "inlineReconnectCooldownMs",
    "streamableHttpSession404TombstoneThreshold",
    "healthProbeTimeoutMs",
    "toolCallIdleTimeoutMs",
    "toolCallMaxTotalTimeoutMs",
    "degradedProbeDelayMs",
    "maxDegradedProbeFailures",
    "keepaliveProbeDelayMs",
    "keepaliveJitterMs",
    "stabilityThresholdMs",
    "nonRetryableWakeRetryCooldownMs",
    "networkResumeReconnectDebounceMs"
], s = [
    "stdioConnectFailuresAreNonRetryable",
    "retryNonRetryableOnWake",
    "retryNonRetryableAutomatically",
    "networkResumeReconnectEnabled",
    "toolCallBoundedTimeoutEnabled"
];
let i = {};
function a(e, t) {
    const r = e[t];
    return "number" == typeof r && Number.isFinite(r) ? r : void 0;
}
function c(e, t) {
    const r = e[t];
    return "boolean" == typeof r ? r : void 0;
}
function u(e) {
    const t = {};
    for (const r of o){
        const n = a(e, r);
        void 0 !== n && (t[r] = n);
    }
    for (const r of s){
        const n = c(e, r);
        void 0 !== n && (t[r] = n);
    }
    return t;
}
function l(e) {
    if (!e || "object" != typeof e) return;
    const t = e, r = "string" == typeof t.identifier && t.identifier.length > 0 ? t.identifier : void 0, n = "string" == typeof t.hostname && t.hostname.length > 0 ? t.hostname.toLowerCase() : void 0;
    return void 0 !== r || void 0 !== n ? {
        ...u(t),
        ...void 0 !== r ? {
            identifier: r
        } : {},
        ...void 0 !== n ? {
            hostname: n
        } : {}
    } : void 0;
}
function d(e, t) {
    if (!t) return !1;
    if (void 0 !== e.identifier && e.identifier !== t.identifier) return !1;
    if (void 0 !== e.hostname) {
        const r = function(e) {
            if (e && "stdio" !== e.type) return (0, n.si)(e.serverUrl);
        }(t.serverInfo);
        if (!r || r !== e.hostname) return !1;
    }
    return !0;
}
function p(e) {
    if (!e || "object" != typeof e) return void (i = {});
    const t = e, r = Array.isArray(t.overrides) ? t.overrides.map(l).filter((e)=>void 0 !== e) : void 0;
    i = {
        ...u(t),
        ...void 0 !== r ? {
            overrides: r
        } : {}
    };
}
function f(e, t) {
    let r = i[e];
    for (const n of i.overrides ?? []){
        if (!d(n, t)) continue;
        const o = n[e];
        void 0 !== o && (r = o);
    }
    return r;
}
