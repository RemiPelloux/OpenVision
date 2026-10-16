import { init_conflict_notices } from "../../agent-store/sync/dist/conflict-notices.js";
var __wakaru_init_agent_store_conflict_notice_host_initialized = false;
export function init_agent_store_conflict_notice_host() {
if (__wakaru_init_agent_store_conflict_notice_host_initialized) return;
__wakaru_init_agent_store_conflict_notice_host_initialized = true;
"use strict";
init_conflict_notices();

}
