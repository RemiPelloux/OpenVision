import { init_admin_command_denylist2 } from "../services/admin-command-denylist.js";
import { init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
var __wakaru_init_edit_block_handler_initialized = false;
export function init_edit_block_handler() {
if (__wakaru_init_edit_block_handler_initialized) return;
__wakaru_init_edit_block_handler_initialized = true;
"use strict";
init_shell_exec_pb();
init_admin_command_denylist2();

}
