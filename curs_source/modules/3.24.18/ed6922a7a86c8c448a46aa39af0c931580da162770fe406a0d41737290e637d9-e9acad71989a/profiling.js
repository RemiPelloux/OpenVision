import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
function _0c(e) {
    return !!e && typeof e._profiler < "u" && typeof e._profiler.start == "function" && typeof e._profiler.stop == "function";
}
function lsg() {
    const e = Pu();
    if (!e) {
        Qh && zr.warn("No Sentry client available, profiling is not started");
        return;
    }
    const t = e.getIntegrationByName("ProfilingIntegration");
    if (!t) {
        Qh && zr.warn("ProfilingIntegration is not available");
        return;
    }
    if (!_0c(t)) {
        Qh && zr.warn("Profiler is not available on profiling integration.");
        return;
    }
    t._profiler.start();
}
function usg() {
    const e = Pu();
    if (!e) {
        Qh && zr.warn("No Sentry client available, profiling is not started");
        return;
    }
    const t = e.getIntegrationByName("ProfilingIntegration");
    if (!t) {
        Qh && zr.warn("ProfilingIntegration is not available");
        return;
    }
    if (!_0c(t)) {
        Qh && zr.warn("Profiler is not available on profiling integration.");
        return;
    }
    t._profiler.stop();
}
var b0c;
export { _0c, b0c, lsg, usg };
var __wakaru_dsg_initialized = false;
export function dsg() {
if (__wakaru_dsg_initialized) return;
__wakaru_dsg_initialized = true;
"use strict";
x(), NT(), kE(), Xk(), b0c = {
    startProfiler: lsg,
    stopProfiler: usg
};

}
