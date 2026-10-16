var import_promises2, import_node_os, import_node_path4, import_node_url, SEP, WORKTREE_GUARD_ERROR;
export { SEP, WORKTREE_GUARD_ERROR, import_node_os, import_node_path4, import_node_url, import_promises2 };
var __wakaru_init_path_utils_initialized = false;
export function init_path_utils() {
if (__wakaru_init_path_utils_initialized) return;
__wakaru_init_path_utils_initialized = true;
"use strict";
import_promises2 = require("node:fs/promises");
import_node_os = require("node:os");
import_node_path4 = require("node:path");
import_node_url = require("node:url");
SEP = "/";
WORKTREE_GUARD_ERROR = "You cannot search other worktrees for this repository, stay within your workspace paths.";

}
