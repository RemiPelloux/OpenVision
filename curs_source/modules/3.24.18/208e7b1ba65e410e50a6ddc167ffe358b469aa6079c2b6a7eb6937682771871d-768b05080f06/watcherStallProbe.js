import { h } from "./tslib.es6.js";
var hM, mi;
export { hM, mi };
var __wakaru_ZVe_initialized = false;
export function ZVe() {
if (__wakaru_ZVe_initialized) return;
__wakaru_ZVe_initialized = true;
"use strict";
h(), hM = "cursor.mainWatcherStallProbe.config", mi = {
    enabled: !1,
    flushThresholdMs: 250,
    anchorIntervalMs: 1e3,
    anchorLagMs: 500,
    cooldownMs: 6e4,
    sessionCap: 10
};

}
