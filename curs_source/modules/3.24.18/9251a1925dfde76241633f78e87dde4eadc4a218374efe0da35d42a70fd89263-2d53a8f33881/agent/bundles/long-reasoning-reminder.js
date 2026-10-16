import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var lifecycle, observedReasoningTokens;
export { lifecycle, observedReasoningTokens };
var __wakaru_init_long_reasoning_reminder_initialized = false;
export function init_long_reasoning_reminder() {
if (__wakaru_init_long_reasoning_reminder_initialized) return;
__wakaru_init_long_reasoning_reminder_initialized = true;
"use strict";
init_dist4();
lifecycle = createCounter("agent.long_reasoning_reminder.lifecycle", {
    description: "Lifecycle transitions for the delayed long-reasoning reminder experiment",
    labelNames: [
        "event",
        "arm",
        "threshold_tokens",
        "delay_calls"
    ]
});
observedReasoningTokens = createHistogram("agent.long_reasoning_reminder.reasoning_tokens", {
    description: "Per-call hidden reasoning tokens at eligible experiment opportunities",
    labelNames: [
        "arm"
    ]
});

}
