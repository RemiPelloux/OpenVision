var GLASS_PERF_VOTE_CONFIG_DEFAULTS;
export { GLASS_PERF_VOTE_CONFIG_DEFAULTS };
var __wakaru_init_glass_perf_vote_config_initialized = false;
export function init_glass_perf_vote_config() {
if (__wakaru_init_glass_perf_vote_config_initialized) return;
__wakaru_init_glass_perf_vote_config_initialized = true;
"use strict";
GLASS_PERF_VOTE_CONFIG_DEFAULTS = {
    enabled: false,
    tagLabel: "Perf vibe check",
    yellowTooltip: "Report slow perf experience",
    redTooltip: "Report disruptive perf experience",
    yellowTitle: "Slow perf",
    redTitle: "Disruptive perf",
    noteSubtitle: "Add a note? (optional)",
    notePlaceholder: "What happened? e.g. switching chats took ~5s"
};

}
