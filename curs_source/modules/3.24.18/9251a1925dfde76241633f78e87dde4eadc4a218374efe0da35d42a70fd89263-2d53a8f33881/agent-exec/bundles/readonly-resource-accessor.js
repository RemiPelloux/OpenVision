import { init_background_shell } from "./background-shell.js";
import { init_delete } from "./delete.js";
import { init_mcp2 } from "./mcp.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_shell_stream } from "./shell-stream.js";
import { init_shell } from "./shell.js";
import { init_write } from "./write.js";
import { init_background_shell_exec_pb } from "../../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { init_delete_exec_pb } from "../../proto/dist/generated/agent/v1/delete_exec_pb.js";
import { init_mcp_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_write_exec_pb } from "../../proto/dist/generated/agent/v1/write_exec_pb.js";
var READONLY_WRITE_ERROR_MESSAGE, READONLY_SDK_ERROR_MESSAGE;
export { READONLY_SDK_ERROR_MESSAGE, READONLY_WRITE_ERROR_MESSAGE };
var __wakaru_init_readonly_resource_accessor_initialized = false;
export function init_readonly_resource_accessor() {
if (__wakaru_init_readonly_resource_accessor_initialized) return;
__wakaru_init_readonly_resource_accessor_initialized = true;
"use strict";
init_background_shell_exec_pb();
init_delete_exec_pb();
init_mcp_exec_pb();
init_shell_exec_pb();
init_write_exec_pb();
init_background_shell();
init_delete();
init_mcp2();
init_resource_provider();
init_shell();
init_shell_stream();
init_write();
READONLY_WRITE_ERROR_MESSAGE = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.";
READONLY_SDK_ERROR_MESSAGE = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";

}
