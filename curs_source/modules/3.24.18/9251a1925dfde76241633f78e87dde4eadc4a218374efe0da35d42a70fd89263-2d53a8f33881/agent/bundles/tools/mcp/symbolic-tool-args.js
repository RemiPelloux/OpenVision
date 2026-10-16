import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_common9 } from "../common.js";
import { init_core5 } from "../core.js";
var __wakaru_init_symbolic_tool_args_initialized = false;
export function init_symbolic_tool_args() {
if (__wakaru_init_symbolic_tool_args_initialized) return;
__wakaru_init_symbolic_tool_args_initialized = true;
"use strict";
init_dist8();
init_common9();
init_core5();

}
