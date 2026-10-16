import { LOCAL_LOOP_SUPPORTED_MODES, init_local_loop_turn_router } from "./local-loop-turn-router.js";
import { init_unsupported_resolved_model_error } from "../shared/unsupported-resolved-model-error.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { agentModeToModeId } from "../../../../mcp_sandbox_policy_exports.js";
import { AgentMode, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
var logger132, PRE_MODE_CONFIG_AGENT_ONLY, PRE_FIELD_ASK_QUESTION_CONFIG, LOCAL_LOOP_SWITCH_MODE_TARGET_IDS;
export { LOCAL_LOOP_SWITCH_MODE_TARGET_IDS, PRE_FIELD_ASK_QUESTION_CONFIG, PRE_MODE_CONFIG_AGENT_ONLY, logger132 };
var __wakaru_init_managed_local_mode_config_initialized = false;
export function init_managed_local_mode_config() {
if (__wakaru_init_managed_local_mode_config_initialized) return;
__wakaru_init_managed_local_mode_config_initialized = true;
"use strict";
init_dist35();
init_dist();
init_agent_pb();
init_unsupported_resolved_model_error();
init_local_loop_turn_router();
logger132 = createLogger("@anysphere/agent-host:managed-local-mode-config");
PRE_MODE_CONFIG_AGENT_ONLY = {
    modes: new Map([
        [
            AgentMode.AGENT,
            {
                enableAskQuestionTool: true,
                switchModeToolConfig: void 0
            }
        ]
    ]),
    useNewPlanModePrompts: false
};
PRE_FIELD_ASK_QUESTION_CONFIG = {
    toolName: "AskQuestion",
    autoRejectFirst: false,
    shippedOnRunReady: false
};
LOCAL_LOOP_SWITCH_MODE_TARGET_IDS = new Set([
    ...LOCAL_LOOP_SUPPORTED_MODES
].map(agentModeToModeId));

}
