import { init_process_env } from "./process-env.js";
var import_node_child_process3, import_node_util2, execFileAsync;
export { execFileAsync, import_node_child_process3, import_node_util2 };
var __wakaru_init_git_exec_initialized = false;
export function init_git_exec() {
if (__wakaru_init_git_exec_initialized) return;
__wakaru_init_git_exec_initialized = true;
"use strict";
import_node_child_process3 = require("node:child_process");
import_node_util2 = require("node:util");
init_process_env();
execFileAsync = (0, import_node_util2.promisify)(import_node_child_process3.execFile);

}
