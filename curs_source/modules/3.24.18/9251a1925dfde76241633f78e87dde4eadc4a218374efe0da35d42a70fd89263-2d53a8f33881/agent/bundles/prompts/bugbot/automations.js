import { __toESM } from "../../../../agent-host/dist/storage/sqlite-store.js";
import { init_dist2 } from "../../../../constants/dist/index.js";
import { init_request_context_exec_pb } from "../../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
var import_node_path75, AUTOMATION_MEMORY_DIRECTORY_NAME, AUTOMATION_MEMORY_DEFAULT_FILE, AUTOMATION_MEMORY_INSTRUCTION_MARKER, AUTOMATION_MEMORY_UNAVAILABLE_INSTRUCTION;
export { AUTOMATION_MEMORY_DEFAULT_FILE, AUTOMATION_MEMORY_DIRECTORY_NAME, AUTOMATION_MEMORY_INSTRUCTION_MARKER, AUTOMATION_MEMORY_UNAVAILABLE_INSTRUCTION, import_node_path75 };
var __wakaru_init_automations2_initialized = false;
export function init_automations2() {
if (__wakaru_init_automations2_initialized) return;
__wakaru_init_automations2_initialized = true;
"use strict";
import_node_path75 = __toESM(require("node:path"), 1);
init_dist2();
init_request_context_exec_pb();
AUTOMATION_MEMORY_DIRECTORY_NAME = "memories";
AUTOMATION_MEMORY_DEFAULT_FILE = "MEMORIES.md";
AUTOMATION_MEMORY_INSTRUCTION_MARKER = "__CURSOR_AUTOMATION_MEMORY_INSTRUCTIONS__";
AUTOMATION_MEMORY_UNAVAILABLE_INSTRUCTION = "Automation memory is unavailable for this run. Do not attempt to read or write memory; continue with the available context and tools.";

}
