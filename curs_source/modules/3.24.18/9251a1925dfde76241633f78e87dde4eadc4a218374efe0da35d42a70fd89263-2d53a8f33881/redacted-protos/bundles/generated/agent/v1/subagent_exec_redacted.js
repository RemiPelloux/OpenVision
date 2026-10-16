import { init_subagent_exec_pb } from "../../../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { init_requested_model_redacted } from "./requested_model_redacted.js";
import { init_selected_context_redacted } from "./selected_context_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_subagent_exec_redacted_initialized = false;
export function init_subagent_exec_redacted() {
if (__wakaru_init_subagent_exec_redacted_initialized) return;
__wakaru_init_subagent_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_subagent_exec_pb();
init_requested_model_redacted();
init_selected_context_redacted();

}
