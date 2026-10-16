import { E } from "./tslib.es6.js";
var Iet;
export { Iet };
var __wakaru_yky_initialized = false;
export function yky() {
if (__wakaru_yky_initialized) return;
__wakaru_yky_initialized = true;
"use strict";
E(), Iet = {
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
