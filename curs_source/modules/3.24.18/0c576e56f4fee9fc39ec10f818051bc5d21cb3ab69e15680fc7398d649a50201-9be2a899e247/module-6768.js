"use strict";
require.d(exports, {
    Tr: ()=>m,
    dg: ()=>l,
    eZ: ()=>f,
    qA: ()=>p,
    sv: ()=>d,
    wW: ()=>h
});
var n = require("./module-496.js");
const o = 3e4, s = 3e4, i = 1e4, a = 3, c = 3e5, u = 3e4;
function l(e) {
    const t = (0, n.v)("stabilityThresholdMs", e) ?? o;
    return Math.max(5e3, Math.min(Math.trunc(t), 6e5));
}
function d(e) {
    const t = (0, n.v)("degradedProbeDelayMs", e) ?? s;
    return Math.max(1e3, Math.min(Math.trunc(t), 36e5));
}
function p(e) {
    const t = (0, n.v)("healthProbeTimeoutMs", e) ?? i;
    return Math.max(1e3, Math.min(Math.trunc(t), 12e4));
}
function f(e) {
    const t = (0, n.v)("maxDegradedProbeFailures", e) ?? a;
    return Math.max(1, Math.min(Math.trunc(t), 20));
}
function h(e) {
    const t = (0, n.v)("keepaliveProbeDelayMs", e) ?? c;
    return Math.max(1e4, Math.min(Math.trunc(t), 36e5));
}
function m(e) {
    const t = (0, n.v)("keepaliveJitterMs", e) ?? u;
    return Math.max(0, Math.min(Math.trunc(t), 36e5));
}
