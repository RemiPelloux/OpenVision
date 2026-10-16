import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_hook_error_handling } from "../hook-error-handling.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
var __wakaru_init_shell_permission_initialized = false;
export function init_shell_permission() {
if (__wakaru_init_shell_permission_initialized) return;
__wakaru_init_shell_permission_initialized = true;
"use strict";
init_dist8();
init_dist6();
init_hook_error_handling();

}
