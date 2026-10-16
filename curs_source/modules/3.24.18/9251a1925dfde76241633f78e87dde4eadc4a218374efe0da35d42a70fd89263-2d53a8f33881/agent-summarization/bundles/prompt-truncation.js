import { createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var MAX_SUMMARIZATION_PROMPT_CHARS, computeMaxMinFairAllocationsDurationMs, DEFAULT_MIN_USEFUL_CHARS;
export { DEFAULT_MIN_USEFUL_CHARS, MAX_SUMMARIZATION_PROMPT_CHARS, computeMaxMinFairAllocationsDurationMs };
var __wakaru_init_prompt_truncation_initialized = false;
export function init_prompt_truncation() {
if (__wakaru_init_prompt_truncation_initialized) return;
__wakaru_init_prompt_truncation_initialized = true;
"use strict";
init_dist4();
MAX_SUMMARIZATION_PROMPT_CHARS = 32e5;
computeMaxMinFairAllocationsDurationMs = createHistogram("agent.summarization.compute_maxmin_fair_allocations_duration_ms", {
    description: "Wall time to compute max-min fair character allocations during prompt truncation"
});
DEFAULT_MIN_USEFUL_CHARS = 200;

}
