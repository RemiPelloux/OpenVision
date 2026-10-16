import { Hl } from "./desktopBridgeCliClient.js";
import { w } from "./tslib.es6.js";
var N1;
export { N1 };
var __wakaru_i0_initialized = false;
export function i0() {
if (__wakaru_i0_initialized) return;
__wakaru_i0_initialized = true;
"use strict";
w(), Hl(), N1 = [
    "Usage: cursor desktop <command>",
    "",
    "Interact with chat threads in a running Cursor desktop app.",
    "",
    "Commands",
    "  ls                                List threads live in running desktop instances",
    "  send <thread> [text...]           Send a message to a live desktop thread",
    "",
    "Options",
    "  --json                            Machine-readable output",
    "  --force                           (send) Submit immediately, interrupting a running turn",
    "  --stdin                           (send) Read message text from stdin",
    "  -h --help                         Print usage",
    "",
    "<thread> is a thread id from `cursor desktop ls`, or a unique prefix of one."
].join(`
`);

}
