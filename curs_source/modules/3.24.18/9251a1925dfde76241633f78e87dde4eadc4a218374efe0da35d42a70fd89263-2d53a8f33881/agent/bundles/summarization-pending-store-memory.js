var DEFAULT_IN_MEMORY_PENDING_SUMMARY_TTL_MS;
export { DEFAULT_IN_MEMORY_PENDING_SUMMARY_TTL_MS };
var __wakaru_init_summarization_pending_store_memory_initialized = false;
export function init_summarization_pending_store_memory() {
if (__wakaru_init_summarization_pending_store_memory_initialized) return;
__wakaru_init_summarization_pending_store_memory_initialized = true;
"use strict";
DEFAULT_IN_MEMORY_PENDING_SUMMARY_TTL_MS = 60 * 60 * 1e3;

}
