import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var __wakaru_init_fork_child_ids_initialized = false;
export function init_fork_child_ids() {
if (__wakaru_init_fork_child_ids_initialized) return;
__wakaru_init_fork_child_ids_initialized = true;
"use strict";
init_dist5();
init_agent_pb();

}
