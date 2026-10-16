import { init_local_loop_ineligible_turn_error } from "./local-loop-ineligible-turn-error.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { AgentMode, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
var AGENT_HOST_LOCAL_LOOP_GATE, LOCAL_LOOP_CONNECT_DISPOSITIONS, LOCAL_LOOP_SUPPORTED_MODES, logger109;
export { AGENT_HOST_LOCAL_LOOP_GATE, LOCAL_LOOP_CONNECT_DISPOSITIONS, LOCAL_LOOP_SUPPORTED_MODES, logger109 };
var __wakaru_init_local_loop_turn_router_initialized = false;
export function init_local_loop_turn_router() {
if (__wakaru_init_local_loop_turn_router_initialized) return;
__wakaru_init_local_loop_turn_router_initialized = true;
"use strict";
init_dist35();
init_dist();
init_agent_pb();
init_local_loop_ineligible_turn_error();
AGENT_HOST_LOCAL_LOOP_GATE = "agent_host_local_loop";
LOCAL_LOOP_CONNECT_DISPOSITIONS = {
    "managed-local-unavailable": "expected",
    "managed-local-client-absent": "fallback",
    "gate-reader-unavailable": "fallback",
    "gate-check-failed": "fallback",
    "gate-off": "expected",
    "enrollment-denied": "expected",
    "subscription-notification-connect-routed": "fallback",
    "byok-connect-routed": "fallback",
    "private-inference-not-enrolled": "fallback"
};
LOCAL_LOOP_SUPPORTED_MODES = new Set([
    AgentMode.AGENT,
    AgentMode.PLAN,
    AgentMode.ASK,
    AgentMode.DEBUG,
    AgentMode.MULTITASK
]);
logger109 = createLogger("@anysphere/agent-host:local-loop-turn-router");

}
