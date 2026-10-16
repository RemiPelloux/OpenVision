import { NT } from "./currentScopes.js";
import { Whn } from "./internal.js";
import { x } from "./tslib.es6.js";
import { o1c } from "./utils_2.js";
var l1c, u1c, d1c;
export { d1c, l1c, u1c };
var __wakaru_Mog_initialized = false;
export function Mog() {
if (__wakaru_Mog_initialized) return;
__wakaru_Mog_initialized = true;
"use strict";
x(), NT(), Whn(), o1c(), l1c = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal"
], u1c = {
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
}, d1c = {
    0: "fatal",
    1: "warn",
    2: "info",
    3: "info",
    4: "debug",
    5: "trace"
};

}
