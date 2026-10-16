var SNAPSHOT_TTL_MS;
export { SNAPSHOT_TTL_MS };
var __wakaru_init_snapshot_state_initialized = false;
export function init_snapshot_state() {
if (__wakaru_init_snapshot_state_initialized) return;
__wakaru_init_snapshot_state_initialized = true;
"use strict";
SNAPSHOT_TTL_MS = 5 * 60 * 1e3;

}
