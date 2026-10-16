import { x } from "./tslib.es6.js";
var Xch, Zch, Qch;
export { Qch, Xch, Zch };
var __wakaru_NOn_initialized = false;
export function NOn() {
if (__wakaru_NOn_initialized) return;
__wakaru_NOn_initialized = true;
"use strict";
x(), Xch = "Server is not on the team network allowlist", Zch = "Provides tools and context through MCP", Qch = {
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
