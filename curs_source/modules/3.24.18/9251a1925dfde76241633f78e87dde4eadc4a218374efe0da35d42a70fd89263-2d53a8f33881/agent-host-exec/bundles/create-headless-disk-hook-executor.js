import { init_dist21 } from "../../cursor-config/dist/index.js";
import { init_dist31 } from "../../hooks-exec/dist/index.js";
import { init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
var import_node_fs47, import_node_path106, WORKSPACE_TRUST_MARKER, UNTRUSTED_WORKSPACE_HOOK_EXECUTOR;
export { UNTRUSTED_WORKSPACE_HOOK_EXECUTOR, WORKSPACE_TRUST_MARKER, import_node_fs47, import_node_path106 };
var __wakaru_init_create_headless_disk_hook_executor_initialized = false;
export function init_create_headless_disk_hook_executor() {
if (__wakaru_init_create_headless_disk_hook_executor_initialized) return;
__wakaru_init_create_headless_disk_hook_executor_initialized = true;
"use strict";
import_node_fs47 = require("node:fs");
import_node_path106 = require("node:path");
init_dist21();
init_dist31();
init_request_context_exec_pb();
init_dist13();
WORKSPACE_TRUST_MARKER = ".workspace-trusted";
UNTRUSTED_WORKSPACE_HOOK_EXECUTOR = {
    executeHookForStep: async ()=>void 0
};

}
