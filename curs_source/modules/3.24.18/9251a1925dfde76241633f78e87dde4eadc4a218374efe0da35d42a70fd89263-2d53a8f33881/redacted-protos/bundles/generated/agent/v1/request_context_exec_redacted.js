import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_request_context_exec_pb } from "../../../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_agent_skills_redacted } from "./agent_skills_redacted.js";
import { init_cursor_rules_redacted } from "./cursor_rules_redacted.js";
import { init_ls_exec_redacted } from "./ls_exec_redacted.js";
import { init_mcp_redacted } from "./mcp_redacted.js";
import { init_repo_redacted } from "./repo_redacted.js";
import { init_subagents_redacted } from "./subagents_redacted.js";
import { init_system_prompt_redacted } from "./system_prompt_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_request_context_exec_redacted_initialized = false;
export function init_request_context_exec_redacted() {
if (__wakaru_init_request_context_exec_redacted_initialized) return;
__wakaru_init_request_context_exec_redacted_initialized = true;
"use strict";
init_dist27();
init_esm2();
init_request_context_exec_pb();
init_cursor_rules_redacted();
init_repo_redacted();
init_mcp_redacted();
init_ls_exec_redacted();
init_subagents_redacted();
init_agent_skills_redacted();
init_system_prompt_redacted();

}
