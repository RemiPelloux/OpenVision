var MAX_ANNOUNCED_EVENT_IDS, ANNOUNCED_EVICTION_BATCH;
export { ANNOUNCED_EVICTION_BATCH, MAX_ANNOUNCED_EVENT_IDS };
var __wakaru_init_conflict_notice_claim_state_initialized = false;
export function init_conflict_notice_claim_state() {
if (__wakaru_init_conflict_notice_claim_state_initialized) return;
__wakaru_init_conflict_notice_claim_state_initialized = true;
"use strict";
MAX_ANNOUNCED_EVENT_IDS = 65536;
ANNOUNCED_EVICTION_BATCH = Math.max(1, Math.floor(MAX_ANNOUNCED_EVENT_IDS / 8));

}
