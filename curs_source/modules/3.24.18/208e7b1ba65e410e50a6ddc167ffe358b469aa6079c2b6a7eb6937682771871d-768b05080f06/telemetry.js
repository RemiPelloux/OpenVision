import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var Fi, sWe, bI, RI, QB, wd, Ed, CI, Fk, ZB, Vp, II, Wk, iWe;
export { CI, Ed, Fi, Fk, II, QB, RI, Vp, Wk, ZB, bI, iWe, sWe, wd };
var __wakaru_ts_initialized = false;
export function ts() {
if (__wakaru_ts_initialized) return;
__wakaru_ts_initialized = true;
"use strict";
h(), ne(), Fi = Q("telemetryService"), sWe = Q("customEndpointTelemetryService"), bI = "telemetry.currentSessionDate", RI = "telemetry.firstSessionDate", QB = "telemetry.lastSessionDate", wd = "telemetry.machineId", Ed = "telemetry.macMachineId", CI = "telemetry.sqmId", Fk = "telemetry.devDeviceId", ZB = "crashReporting", Vp = "crashReporting.enabled", II = "telemetry.enableCrashReporter", Wk = "telemetry.enableTelemetry", iWe = Q("mainProcessPerformanceTelemetryService");

}
