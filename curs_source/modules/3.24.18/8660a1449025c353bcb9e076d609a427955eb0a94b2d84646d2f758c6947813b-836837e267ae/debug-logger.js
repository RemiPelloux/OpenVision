import { gFt } from "./Iwo.js";
import { $je } from "./SZu.js";
import { $xe } from "./carrier.js";
import { qR, rg } from "./debug-build.js";
import { E } from "./tslib.es6.js";
import { o_, r7 } from "./worldwide.js";
function Ruy() {
    r1o().enabled = !0;
}
function Puy() {
    r1o().enabled = !1;
}
function AHu() {
    return r1o().enabled;
}
function Muy(...t) {
    i1o("log", ...t);
}
function Duy(...t) {
    i1o("warn", ...t);
}
function Nuy(...t) {
    i1o("error", ...t);
}
function i1o(t, ...e) {
    rg && AHu() && $je(()=>{
        o_.console[t](`${RHu}[${t}]:`, ...e);
    });
}
function r1o() {
    return rg ? gFt("loggerSettings", ()=>({
            enabled: !1
        })) : {
        enabled: !1
    };
}
var vun, RHu, _un, so;
export { AHu, Duy, Muy, Nuy, Puy, RHu, Ruy, _un, i1o, r1o, so, vun };
var __wakaru_JC_initialized = false;
export function JC() {
if (__wakaru_JC_initialized) return;
__wakaru_JC_initialized = true;
"use strict";
E(), $xe(), qR(), r7(), vun = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
], RHu = "Sentry Logger ", _un = {}, so = {
    enable: Ruy,
    disable: Puy,
    isEnabled: AHu,
    log: Muy,
    warn: Duy,
    error: Nuy
};

}
