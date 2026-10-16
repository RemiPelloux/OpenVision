import { Die, Nie, TTe, Wle, h0 } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var ZCl, Atf, Rtf, Ptf, Mtf;
export { Atf, Mtf, Ptf, Rtf, ZCl };
var __wakaru_lPi_initialized = false;
export function lPi() {
if (__wakaru_lPi_initialized) return;
__wakaru_lPi_initialized = true;
"use strict";
E(), Nie(), ZCl = "tool_serve", Atf = "relay", Rtf = {
    tool_serve: "tool",
    relay: "relay"
}, Ptf = new Map([
    [
        h0,
        "nudge"
    ],
    [
        Wle,
        "recall"
    ],
    [
        TTe,
        "hangup"
    ],
    [
        Die,
        "silent"
    ]
]), Mtf = new Set([
    "mint_failed",
    "socket_error",
    "mic_denied",
    "mic_timeout",
    "connecting_stuck",
    "connecting_abandoned"
]);

}
