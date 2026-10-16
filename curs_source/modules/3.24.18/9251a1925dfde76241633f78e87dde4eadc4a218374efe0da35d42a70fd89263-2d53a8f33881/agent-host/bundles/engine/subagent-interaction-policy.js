import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_interaction_errors } from "../kernel/interaction-errors.js";
import { init_interaction_registry } from "../kernel/interaction-registry.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
var logger121, SUBAGENT_INTERACTION_NOT_AVAILABLE_REASON, SUBAGENT_PARENT_TURN_NOT_RUNNING_REASON, SUBAGENT_INTERACTION_ROUTE_BY_QUERY_CASE, LOOP_EXECUTABLE_MODE_IDS;
export { LOOP_EXECUTABLE_MODE_IDS, SUBAGENT_INTERACTION_NOT_AVAILABLE_REASON, SUBAGENT_INTERACTION_ROUTE_BY_QUERY_CASE, SUBAGENT_PARENT_TURN_NOT_RUNNING_REASON, logger121 };
var __wakaru_init_subagent_interaction_policy_initialized = false;
export function init_subagent_interaction_policy() {
if (__wakaru_init_subagent_interaction_policy_initialized) return;
__wakaru_init_subagent_interaction_policy_initialized = true;
"use strict";
init_dist7();
init_dist();
init_agent_host_pb();
init_interaction_errors();
init_interaction_registry();
logger121 = createLogger("agent-host:subagent-interaction-policy");
SUBAGENT_INTERACTION_NOT_AVAILABLE_REASON = "Interaction not available to subagent";
SUBAGENT_PARENT_TURN_NOT_RUNNING_REASON = "Parent turn is not running, so the subagent's approval could not be shown";
SUBAGENT_INTERACTION_ROUTE_BY_QUERY_CASE = {
    webSearchRequestQuery: "bubble-to-parent",
    webFetchRequestQuery: "bubble-to-parent",
    askQuestionInteractionQuery: "surface-to-user",
    createPlanRequestQuery: "surface-to-user",
    mcpAuthRequestQuery: "surface-to-user",
    connectScmRequestQuery: "surface-to-user",
    switchModeRequestQuery: "host-execute",
    setupVmEnvironmentArgs: "auto-reject",
    prManagementRequestQuery: "auto-reject",
    generateImageRequestQuery: "auto-reject",
    replaceEnvArgs: "auto-reject"
};
LOOP_EXECUTABLE_MODE_IDS = new Set([
    "agent",
    "chat",
    "plan",
    "debug",
    "triage",
    "multitask"
]);

}
