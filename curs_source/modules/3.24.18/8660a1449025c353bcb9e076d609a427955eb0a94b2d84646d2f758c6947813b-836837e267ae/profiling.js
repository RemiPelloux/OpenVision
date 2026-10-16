import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { ah } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
function Uqu(t) {
    return !!t && typeof t._profiler < "u" && typeof t._profiler.start == "function" && typeof t._profiler.stop == "function";
}
function Ypy() {
    const t = ah();
    if (!t) {
        rg && so.warn("No Sentry client available, profiling is not started");
        return;
    }
    const e = t.getIntegrationByName("ProfilingIntegration");
    if (!e) {
        rg && so.warn("ProfilingIntegration is not available");
        return;
    }
    if (!Uqu(e)) {
        rg && so.warn("Profiler is not available on profiling integration.");
        return;
    }
    e._profiler.start();
}
function Xpy() {
    const t = ah();
    if (!t) {
        rg && so.warn("No Sentry client available, profiling is not started");
        return;
    }
    const e = t.getIntegrationByName("ProfilingIntegration");
    if (!e) {
        rg && so.warn("ProfilingIntegration is not available");
        return;
    }
    if (!Uqu(e)) {
        rg && so.warn("Profiler is not available on profiling integration.");
        return;
    }
    e._profiler.stop();
}
var jqu;
export { Uqu, Xpy, Ypy, jqu };
var __wakaru_Zpy_initialized = false;
export function Zpy() {
if (__wakaru_Zpy_initialized) return;
__wakaru_Zpy_initialized = true;
"use strict";
E(), JA(), qR(), JC(), jqu = {
    startProfiler: Ypy,
    stopProfiler: Xpy
};

}
