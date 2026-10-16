import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { init_builtin_skills_sync_service } from "./builtin-skills-sync-service.js";
var logger37;
export { logger37 };
var __wakaru_init_managed_skills_sync_service_initialized = false;
export function init_managed_skills_sync_service() {
if (__wakaru_init_managed_skills_sync_service_initialized) return;
__wakaru_init_managed_skills_sync_service_initialized = true;
"use strict";
init_dist();
init_builtin_skills_sync_service();
logger37 = createLogger("managed-skills-sync");

}
