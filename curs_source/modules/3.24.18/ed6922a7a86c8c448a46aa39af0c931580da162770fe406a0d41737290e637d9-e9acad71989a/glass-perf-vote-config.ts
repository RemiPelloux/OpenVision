import { x } from "./tslib.es6.js";
var Pqc;
export { Pqc };
var __wakaru_QCg_initialized = false;
export function QCg() {
if (__wakaru_QCg_initialized) return;
__wakaru_QCg_initialized = true;
"use strict";
x(), Pqc = {
    enabled: !1,
    tagLabel: "Perf vibe check",
    yellowTooltip: "Report slow perf experience",
    redTooltip: "Report disruptive perf experience",
    yellowTitle: "Slow perf",
    redTitle: "Disruptive perf",
    noteSubtitle: "Add a note? (optional)",
    notePlaceholder: "What happened? e.g. switching chats took ~5s"
};

}
