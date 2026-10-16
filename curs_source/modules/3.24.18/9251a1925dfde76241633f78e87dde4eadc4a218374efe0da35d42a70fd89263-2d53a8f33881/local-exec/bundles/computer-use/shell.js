import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_child_process10, DEFAULT_TIMEOUT_MS, execFileUtf82;
export { DEFAULT_TIMEOUT_MS, execFileUtf82, import_node_child_process10 };
var __wakaru_init_shell2_initialized = false;
export function init_shell2() {
if (__wakaru_init_shell2_initialized) return;
__wakaru_init_shell2_initialized = true;
"use strict";
import_node_child_process10 = require("node:child_process");
init_dist3();
DEFAULT_TIMEOUT_MS = 3e4;
execFileUtf82 = import_node_child_process10.execFile;

}
