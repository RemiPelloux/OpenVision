import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
var PMp;
export { PMp };
var __wakaru_epe_initialized = false;
export function epe() {
if (__wakaru_epe_initialized) return;
__wakaru_epe_initialized = true;
"use strict";
E(), Ki(), PMp = new Set([
    "localhost",
    "127.0.0.1",
    "::1",
    "[::1]",
    "0000:0000:0000:0000:0000:0000:0000:0001",
    "[0000:0000:0000:0000:0000:0000:0000:0001]"
]);

}
