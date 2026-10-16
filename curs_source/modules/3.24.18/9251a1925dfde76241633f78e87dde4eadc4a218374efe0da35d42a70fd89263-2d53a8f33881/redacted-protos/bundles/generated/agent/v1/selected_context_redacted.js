import { init_selected_context_pb } from "../../../../../proto/dist/generated/agent/v1/selected_context_pb.js";
import { init_agent_skills_redacted } from "./agent_skills_redacted.js";
import { init_cursor_rules_redacted } from "./cursor_rules_redacted.js";
import { init_ls_exec_redacted } from "./ls_exec_redacted.js";
import { init_utils_redacted } from "./utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_selected_context_redacted_initialized = false;
export function init_selected_context_redacted() {
if (__wakaru_init_selected_context_redacted_initialized) return;
__wakaru_init_selected_context_redacted_initialized = true;
"use strict";
init_dist27();
init_selected_context_pb();
init_utils_redacted();
init_ls_exec_redacted();
init_cursor_rules_redacted();
init_agent_skills_redacted();

}
