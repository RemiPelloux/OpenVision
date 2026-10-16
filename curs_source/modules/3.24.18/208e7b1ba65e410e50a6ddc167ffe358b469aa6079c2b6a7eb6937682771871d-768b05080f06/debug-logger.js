import { xs } from "./carrier.js";
import { sk } from "./console-integration.js";
import { gt, tt } from "./debug-build.js";
import { h } from "./tslib.es6.js";
import { ld } from "./version.js";
import { Ot, dn } from "./worldwide.js";
function yp(e, t, n = Ot) {
    const r = n.__SENTRY__ = n.__SENTRY__ || {}, s = r[ld] = r[ld] || {};
    return s[e] || (s[e] = t());
}
function Z5e() {
    yC().enabled = !0;
}
function e3e() {
    yC().enabled = !1;
}
function c8() {
    return yC().enabled;
}
function t3e(...e) {
    SC("log", ...e);
}
function n3e(...e) {
    SC("warn", ...e);
}
function r3e(...e) {
    SC("error", ...e);
}
function SC(e, ...t) {
    tt && c8() && sk(()=>{
        Ot.console[e](`${l8}[${e}]:`, ...t);
    });
}
function yC() {
    return tt ? yp("loggerSettings", ()=>({
            enabled: !1
        })) : {
        enabled: !1
    };
}
var wp, l8, Ep, lt;
export { Ep, SC, Z5e, c8, e3e, l8, lt, n3e, r3e, t3e, wp, yC, yp };
var __wakaru_Ke_initialized = false;
export function Ke() {
if (__wakaru_Ke_initialized) return;
__wakaru_Ke_initialized = true;
"use strict";
h(), xs(), gt(), dn(), wp = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
], l8 = "Sentry Logger ", Ep = {}, lt = {
    enable: Z5e,
    disable: e3e,
    isEnabled: c8,
    log: t3e,
    warn: n3e,
    error: r3e
};

}
