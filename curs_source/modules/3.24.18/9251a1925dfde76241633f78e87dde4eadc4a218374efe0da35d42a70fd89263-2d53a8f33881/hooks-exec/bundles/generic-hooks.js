import { init_node2 } from "../../agent-exec/dist/node.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { init_dist30 } from "../../hooks-carriers/dist/index.js";
import { init_hook_error_handling } from "./hook-error-handling.js";
import { init_dist6 } from "../../hooks/dist/index.js";
var import_node_crypto24, import_node_perf_hooks2, logger48, roundDurationMs;
export { import_node_crypto24, import_node_perf_hooks2, logger48, roundDurationMs };
var __wakaru_init_generic_hooks_initialized = false;
export function init_generic_hooks() {
if (__wakaru_init_generic_hooks_initialized) return;
__wakaru_init_generic_hooks_initialized = true;
"use strict";
import_node_crypto24 = require("node:crypto");
import_node_perf_hooks2 = require("node:perf_hooks");
init_node2();
init_dist();
init_dist6();
init_dist30();
init_hook_error_handling();
logger48 = createLogger("generic-hooks");
roundDurationMs = (value)=>Math.round(value * 1e3) / 1e3;

}
