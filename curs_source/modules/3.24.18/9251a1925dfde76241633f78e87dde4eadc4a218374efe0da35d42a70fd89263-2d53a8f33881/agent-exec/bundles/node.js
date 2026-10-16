import { init_agent_tools_file } from "./agent-tools-file.js";
import { init_hook_abort_signal } from "./hook-abort-signal.js";
var __wakaru_init_node2_initialized = false;
export function init_node2() {
if (__wakaru_init_node2_initialized) return;
__wakaru_init_node2_initialized = true;
"use strict";
init_agent_tools_file();
init_hook_abort_signal();

}
