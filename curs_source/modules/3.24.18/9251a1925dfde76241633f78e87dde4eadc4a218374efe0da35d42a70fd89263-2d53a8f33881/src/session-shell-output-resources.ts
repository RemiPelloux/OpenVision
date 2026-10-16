import { init_dist8 } from "../agent-exec/dist/index.js";
import { init_dist } from "../context/dist/index.js";
import { init_dist20 } from "../local-exec/dist/index.js";
import { init_esm3 } from "../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_background_shell_exec_pb } from "../proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { init_shell_exec_pb } from "../proto/dist/generated/agent/v1/shell_exec_pb.js";
var UTF8;
export { UTF8 };
var __wakaru_init_session_shell_output_resources_initialized = false;
export function init_session_shell_output_resources() {
if (__wakaru_init_session_shell_output_resources_initialized) return;
__wakaru_init_session_shell_output_resources_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist20();
init_background_shell_exec_pb();
init_shell_exec_pb();
init_esm3();
UTF8 = new TextEncoder();

}
