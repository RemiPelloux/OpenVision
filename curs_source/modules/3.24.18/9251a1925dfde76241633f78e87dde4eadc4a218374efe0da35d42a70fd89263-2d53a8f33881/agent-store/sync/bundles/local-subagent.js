var ACTIVE_LOCAL_SUBAGENT_STORE_MOUNTERS;
export { ACTIVE_LOCAL_SUBAGENT_STORE_MOUNTERS };
var __wakaru_init_local_subagent_initialized = false;
export function init_local_subagent() {
if (__wakaru_init_local_subagent_initialized) return;
__wakaru_init_local_subagent_initialized = true;
"use strict";
ACTIVE_LOCAL_SUBAGENT_STORE_MOUNTERS = Symbol.for("anysphere.agent-store-sync.local-subagent-store-mounters.v1");

}
