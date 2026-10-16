import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { SubagentModelForcePolicy } from "../../../../agent/dist/tools/subagent-model-force-policy.js";
import { init_dist } from "../../../../context/dist/index.js";
var logger133, KNOWN_FORCE_POLICIES, KNOWN_OVERRIDE_KINDS;
export { KNOWN_FORCE_POLICIES, KNOWN_OVERRIDE_KINDS, logger133 };
var __wakaru_init_managed_local_subagent_model_config_initialized = false;
export function init_managed_local_subagent_model_config() {
if (__wakaru_init_managed_local_subagent_model_config_initialized) return;
__wakaru_init_managed_local_subagent_model_config_initialized = true;
"use strict";
init_dist35();
init_dist();
logger133 = createLogger("@anysphere/agent-host:managed-local-subagent-model-config");
KNOWN_FORCE_POLICIES = Object.values(SubagentModelForcePolicy);
KNOWN_OVERRIDE_KINDS = [
    "disabled",
    "inherit",
    "model"
];

}
