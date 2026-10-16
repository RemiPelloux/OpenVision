import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_dist14 } from "../../../../cursor-plugins/dist/index.js";
import { init_skill_discovery } from "./skill-discovery.js";
import { init_skill_sync_manifest } from "./skill-sync-manifest.js";
var logger36, INVENTORY_EMIT_INTERVAL_MS, SKILL_SYNC_GRACE_MS;
export { INVENTORY_EMIT_INTERVAL_MS, SKILL_SYNC_GRACE_MS, logger36 };
var __wakaru_init_builtin_skills_sync_service_initialized = false;
export function init_builtin_skills_sync_service() {
if (__wakaru_init_builtin_skills_sync_service_initialized) return;
__wakaru_init_builtin_skills_sync_service_initialized = true;
"use strict";
init_dist();
init_dist14();
init_skill_discovery();
init_skill_sync_manifest();
logger36 = createLogger("builtin-skills-sync");
INVENTORY_EMIT_INTERVAL_MS = 24 * 60 * 60 * 1e3;
SKILL_SYNC_GRACE_MS = 3 * 24 * 60 * 60 * 1e3;

}
