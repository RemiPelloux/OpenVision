import { init_approval_request_map } from "./approval-request-map.js";
import { init_interaction_registry } from "../kernel/interaction-registry.js";
import { init_turn_error } from "../kernel/turn-error.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_dist20 } from "../../../local-exec/dist/index.js";
import { init_agent_host_pb } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var __wakaru_init_approval_interactions_initialized = false;
export function init_approval_interactions() {
if (__wakaru_init_approval_interactions_initialized) return;
__wakaru_init_approval_interactions_initialized = true;
"use strict";
init_dist();
init_dist20();
init_agent_host_pb();
init_dist3();
init_interaction_registry();
init_turn_error();
init_approval_request_map();

}
