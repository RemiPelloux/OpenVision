import { init_agent_host_agent_store_redacted } from "./agent_host_agent_store_redacted.js";
import { init_agent_host_plugins_redacted } from "./agent_host_plugins_redacted.js";
import { init_canvas_diagnostics_exec_redacted } from "./canvas_diagnostics_exec_redacted.js";
import { init_conversation_search_exec_redacted } from "./conversation_search_exec_redacted.js";
import { init_exec_redacted } from "./exec_redacted.js";
import { init_mcp_allowlist_precheck_exec_redacted } from "./mcp_allowlist_precheck_exec_redacted.js";
import { init_mcp_exec_redacted } from "./mcp_exec_redacted.js";
import { init_request_context_exec_redacted } from "./request_context_exec_redacted.js";
import { init_requested_model_redacted } from "./requested_model_redacted.js";
import { init_sandbox_redacted } from "./sandbox_redacted.js";
import { init_subagent_exec_redacted } from "./subagent_exec_redacted.js";
import { init_utils_redacted2 } from "../../aiserver/v1/utils_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_agent_host_surface_redacted_initialized = false;
export function init_agent_host_surface_redacted() {
if (__wakaru_init_agent_host_surface_redacted_initialized) return;
__wakaru_init_agent_host_surface_redacted_initialized = true;
"use strict";
init_dist27();
init_sandbox_redacted();
init_conversation_search_exec_redacted();
init_exec_redacted();
init_utils_redacted2();
init_canvas_diagnostics_exec_redacted();
init_agent_host_plugins_redacted();
init_agent_host_agent_store_redacted();
init_mcp_exec_redacted();
init_mcp_allowlist_precheck_exec_redacted();
init_subagent_exec_redacted();
init_requested_model_redacted();
init_request_context_exec_redacted();

}
