import { ES, Fq, Oq, ghe, pZ } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var OMo, g6h, f6h, v6h, _6h;
export { OMo, _6h, f6h, g6h, v6h };
var __wakaru_J5n_initialized = false;
export function J5n() {
if (__wakaru_J5n_initialized) return;
__wakaru_J5n_initialized = true;
"use strict";
x(), Fq(), OMo = "tool_serve", g6h = "relay", f6h = {
    tool_serve: "tool",
    relay: "relay"
}, v6h = new Map([
    [
        ES,
        "nudge"
    ],
    [
        pZ,
        "recall"
    ],
    [
        ghe,
        "hangup"
    ],
    [
        Oq,
        "silent"
    ]
]), _6h = new Set([
    "mint_failed",
    "socket_error",
    "mic_denied",
    "mic_timeout",
    "connecting_stuck",
    "connecting_abandoned"
]);

}
