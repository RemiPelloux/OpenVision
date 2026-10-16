import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger35;
export { logger35 };
var __wakaru_init_skill_sync_manifest_initialized = false;
export function init_skill_sync_manifest() {
if (__wakaru_init_skill_sync_manifest_initialized) return;
__wakaru_init_skill_sync_manifest_initialized = true;
"use strict";
init_dist();
logger35 = createLogger("skill-sync-manifest");

}
