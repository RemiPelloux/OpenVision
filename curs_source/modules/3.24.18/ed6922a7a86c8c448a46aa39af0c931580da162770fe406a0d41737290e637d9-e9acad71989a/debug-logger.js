import { bdt } from "./HVr.js";
import { tge } from "./carrier.js";
import { Qh, kE } from "./debug-build.js";
import { rAe } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Og, c3 } from "./worldwide.js";
function Vtg() {
    _Wr().enabled = !0;
}
function jtg() {
    _Wr().enabled = !1;
}
function ckc() {
    return _Wr().enabled;
}
function qtg(...e) {
    vWr("log", ...e);
}
function ztg(...e) {
    vWr("warn", ...e);
}
function Ktg(...e) {
    vWr("error", ...e);
}
function vWr(e, ...t) {
    Qh && ckc() && rAe(()=>{
        Og.console[e](`${lkc}[${e}]:`, ...t);
    });
}
function _Wr() {
    return Qh ? bdt("loggerSettings", ()=>({
            enabled: !1
        })) : {
        enabled: !1
    };
}
var hLt, lkc, pLt, zr;
export { Ktg, Vtg, _Wr, ckc, hLt, jtg, lkc, pLt, qtg, vWr, zr, ztg };
var __wakaru_Xk_initialized = false;
export function Xk() {
if (__wakaru_Xk_initialized) return;
__wakaru_Xk_initialized = true;
"use strict";
x(), tge(), kE(), c3(), hLt = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
], lkc = "Sentry Logger ", pLt = {}, zr = {
    enable: Vtg,
    disable: jtg,
    isEnabled: ckc,
    log: qtg,
    warn: ztg,
    error: Ktg
};

}
