import { init_dist29 } from "../../../../agent-summarization/dist/index.js";
var SUMMARIZATION_MAX_PROMPT_CHARS, SUMMARIZATION_REFERENCE_CONTEXT_WINDOW, LOCAL_LOOP_SUMMARIZATION_HANDLER_OPTIONS, LOCAL_LOOP_SELF_SUMMARY_RETRY_OPTIONS, LOCAL_LOOP_ORPHANED_SUMMARY_HOLD_MS;
export { LOCAL_LOOP_ORPHANED_SUMMARY_HOLD_MS, LOCAL_LOOP_SELF_SUMMARY_RETRY_OPTIONS, LOCAL_LOOP_SUMMARIZATION_HANDLER_OPTIONS, SUMMARIZATION_MAX_PROMPT_CHARS, SUMMARIZATION_REFERENCE_CONTEXT_WINDOW };
var __wakaru_init_local_loop_summarization_initialized = false;
export function init_local_loop_summarization() {
if (__wakaru_init_local_loop_summarization_initialized) return;
__wakaru_init_local_loop_summarization_initialized = true;
"use strict";
init_dist29();
SUMMARIZATION_MAX_PROMPT_CHARS = 28e5;
SUMMARIZATION_REFERENCE_CONTEXT_WINDOW = 1e6;
LOCAL_LOOP_SUMMARIZATION_HANDLER_OPTIONS = {
    enableRetryUncategorizedErrors: true,
    enableReduceInputsRetry: true,
    useRelaxedSplitIndexGuard: false,
    preserveLastUserMessage: true,
    maxOutputTokens: 32e3,
    throwOnRetryExhaustion: false,
    alwaysRetryOutputTokenLimit: true,
    enableDeterministicFallback: true,
    deterministicFallbackWindowRatio: 0.02
};
LOCAL_LOOP_SELF_SUMMARY_RETRY_OPTIONS = {
    enableReduceInputsRetry: false,
    enableRetryUncategorizedErrors: true,
    enableRetryNoSummaryResponse: true,
    openAiCompactionEnableRetryNoSummaryResponse: false,
    anthropicCompactionEnableRetryNoSummaryResponse: false
};
LOCAL_LOOP_ORPHANED_SUMMARY_HOLD_MS = 5 * 6e4;

}
