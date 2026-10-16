import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger131;
export { logger131 };
var __wakaru_init_managed_local_custom_subagent_models_initialized = false;
export function init_managed_local_custom_subagent_models() {
if (__wakaru_init_managed_local_custom_subagent_models_initialized) return;
__wakaru_init_managed_local_custom_subagent_models_initialized = true;
"use strict";
init_dist();
logger131 = createLogger("@anysphere/agent-host:managed-local-custom-subagent-models");

}
