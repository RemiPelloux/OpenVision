import { init_subagent_run_contract } from "./subagent-run-contract.js";
import { init_subagent_exec_pb } from "../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
var import_node_crypto52;
export { import_node_crypto52 };
var __wakaru_init_subagent_continuation_initialized = false;
export function init_subagent_continuation() {
if (__wakaru_init_subagent_continuation_initialized) return;
__wakaru_init_subagent_continuation_initialized = true;
"use strict";
import_node_crypto52 = require("node:crypto");
init_subagent_exec_pb();
init_subagent_run_contract();

}
