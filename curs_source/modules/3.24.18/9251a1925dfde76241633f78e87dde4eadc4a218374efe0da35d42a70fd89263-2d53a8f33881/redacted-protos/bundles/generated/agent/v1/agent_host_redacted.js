import { init_agent_redacted } from "./agent_redacted.js";
import { init_agent_skills_redacted } from "./agent_skills_redacted.js";
import { init_cursor_rules_redacted } from "./cursor_rules_redacted.js";
import { init_request_context_exec_redacted } from "./request_context_exec_redacted.js";
import { init_requested_model_redacted } from "./requested_model_redacted.js";
import { init_selected_context_redacted } from "./selected_context_redacted.js";
import { init_system_prompt_redacted } from "./system_prompt_redacted.js";
import { init_utils_redacted2 } from "../../aiserver/v1/utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_agent_host_redacted_initialized = false;
export function init_agent_host_redacted() {
if (__wakaru_init_agent_host_redacted_initialized) return;
__wakaru_init_agent_host_redacted_initialized = true;
"use strict";
init_dist27();
init_agent_redacted();
init_agent_skills_redacted();
init_requested_model_redacted();
init_cursor_rules_redacted();
init_request_context_exec_redacted();
init_selected_context_redacted();
init_utils_redacted2();
init_system_prompt_redacted();

}
