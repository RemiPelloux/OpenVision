import { JA } from "./currentScopes.js";
import { lXn } from "./internal.js";
import { E } from "./tslib.es6.js";
import { Izu } from "./utils_2.js";
var Rzu, Pzu, Mzu;
export { Mzu, Pzu, Rzu };
var __wakaru__gy_initialized = false;
export function _gy() {
if (__wakaru__gy_initialized) return;
__wakaru__gy_initialized = true;
"use strict";
E(), JA(), lXn(), Izu(), Rzu = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal"
], Pzu = {
    silent: "trace",
    fatal: "fatal",
    error: "error",
    warn: "warn",
    log: "info",
    info: "info",
    success: "info",
    fail: "error",
    ready: "info",
    start: "info",
    box: "info",
    debug: "debug",
    trace: "trace",
    verbose: "debug",
    critical: "fatal",
    notice: "info"
}, Mzu = {
    0: "fatal",
    1: "warn",
    2: "info",
    3: "info",
    4: "debug",
    5: "trace"
};

}
