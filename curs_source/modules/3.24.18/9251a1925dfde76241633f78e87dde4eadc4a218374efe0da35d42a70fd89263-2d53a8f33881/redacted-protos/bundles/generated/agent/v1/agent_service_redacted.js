import { init_agent_redacted } from "./agent_redacted.js";
import { init_exec_redacted } from "./exec_redacted.js";
import { init_kv_redacted } from "./kv_redacted.js";
import { init_mcp_redacted } from "./mcp_redacted.js";
import { init_requested_model_redacted } from "./requested_model_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_agent_service_redacted_initialized = false;
export function init_agent_service_redacted() {
if (__wakaru_init_agent_service_redacted_initialized) return;
__wakaru_init_agent_service_redacted_initialized = true;
"use strict";
init_dist27();
init_agent_redacted();
init_requested_model_redacted();
init_mcp_redacted();
init_exec_redacted();
init_kv_redacted();

}
