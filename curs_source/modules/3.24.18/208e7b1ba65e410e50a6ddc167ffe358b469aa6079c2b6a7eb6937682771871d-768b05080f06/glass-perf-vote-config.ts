import { h } from "./tslib.es6.js";
var x7;
export { x7 };
var __wakaru_TBe_initialized = false;
export function TBe() {
if (__wakaru_TBe_initialized) return;
__wakaru_TBe_initialized = true;
"use strict";
h(), x7 = {
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
