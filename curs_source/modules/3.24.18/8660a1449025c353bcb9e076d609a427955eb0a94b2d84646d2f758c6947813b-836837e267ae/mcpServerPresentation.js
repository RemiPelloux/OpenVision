import { E } from "./tslib.es6.js";
var CKm, TKm, EKm;
export { CKm, EKm, TKm };
var __wakaru_$In_initialized = false;
export function $In() {
if (__wakaru_$In_initialized) return;
__wakaru_$In_initialized = true;
"use strict";
E(), CKm = "Server is not on the team network allowlist", TKm = "Provides tools and context through MCP", EKm = {
    connecting: {
        full: "Connecting...",
        compact: "Connecting"
    },
    checking: {
        full: "Checking server status...",
        compact: "Checking"
    },
    openingAuthorization: {
        full: "Opening authorization...",
        compact: "Opening"
    },
    waitingForCallback: {
        full: "Waiting for callback...",
        compact: "Waiting"
    },
    exchangingToken: {
        full: "Exchanging token...",
        compact: "Exchanging"
    }
};

}
