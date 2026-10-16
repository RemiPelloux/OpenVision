import { init_default_model } from "./default-model.js";
import { init_subagent_run_contract } from "./subagent-run-contract.js";
import { init_action_adapters } from "../kernel/action-adapters.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_requested_model_pb } from "../../../proto/dist/generated/agent/v1/requested_model_pb.js";
var __wakaru_init_hosted_child_last_turn_model_initialized = false;
export function init_hosted_child_last_turn_model() {
if (__wakaru_init_hosted_child_last_turn_model_initialized) return;
__wakaru_init_hosted_child_last_turn_model_initialized = true;
"use strict";
init_agent_pb();
init_requested_model_pb();
init_action_adapters();
init_default_model();
init_subagent_run_contract();

}
