import { init_agent_store_conflict_accessor } from "./agent-store-conflict-accessor.js";
import { init_agent_store_conflict_notice_host } from "./agent-store-conflict-notice-host.js";
import { init_cli_hooks_executor } from "./cli-hooks-executor.js";
import { init_config_loader } from "./config-loader.js";
import { init_config_tracker } from "./config-tracker.js";
import { init_generic_hooks } from "./generic-hooks.js";
import { init_hook_additional_context_spill_node } from "./hook-additional-context-spill-node.js";
import { init_hook_error_handling } from "./hook-error-handling.js";
import { init_node_file_reader } from "./node-file-reader.js";
import { init_request_context3 } from "./request-context.js";
import { init_resource_accessor } from "./resource-accessor.js";
import { init_safe_config_path } from "./safe-config-path.js";
import { init_tool_hook_executors } from "./tool-hook-executors/index.js";
import { init_tool_names } from "./tool-names.js";
var __wakaru_init_dist31_initialized = false;
export function init_dist31() {
if (__wakaru_init_dist31_initialized) return;
__wakaru_init_dist31_initialized = true;
"use strict";
init_agent_store_conflict_accessor();
init_agent_store_conflict_notice_host();
init_cli_hooks_executor();
init_config_loader();
init_config_tracker();
init_generic_hooks();
init_hook_additional_context_spill_node();
init_hook_error_handling();
init_node_file_reader();
init_request_context3();
init_resource_accessor();
init_safe_config_path();
init_tool_hook_executors();
init_tool_names();

}
