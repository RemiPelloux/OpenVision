import { init_background_shell3 } from "./background-shell.js";
import { init_computer_use4 } from "./computer-use.js";
import { init_delete3 } from "./delete.js";
import { init_diagnostics4 } from "./diagnostics.js";
import { init_fetch3 } from "./fetch.js";
import { init_grep4 } from "./grep.js";
import { init_ls4 } from "./ls.js";
import { init_mcp_resources } from "./mcp-resources.js";
import { init_mcp7 } from "./mcp.js";
import { init_read4 } from "./read.js";
import { init_record_screen3 } from "./record-screen.js";
import { init_shell_stream3 } from "./shell-stream.js";
import { init_shell4 } from "./shell.js";
import { init_write4 } from "./write.js";
var __wakaru_init_tool_hook_executors_initialized = false;
export function init_tool_hook_executors() {
if (__wakaru_init_tool_hook_executors_initialized) return;
__wakaru_init_tool_hook_executors_initialized = true;
"use strict";
init_background_shell3();
init_computer_use4();
init_delete3();
init_diagnostics4();
init_fetch3();
init_grep4();
init_ls4();
init_mcp7();
init_mcp_resources();
init_read4();
init_record_screen3();
init_shell4();
init_shell_stream3();
init_write4();

}
