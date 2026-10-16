import { init_dist11 } from "../../git-core/dist/index.js";
var import_node_os18, import_node_path58, CURSOR_PROJECTS_ROOT, CURSOR_WORKTREES_ROOT;
export { CURSOR_PROJECTS_ROOT, CURSOR_WORKTREES_ROOT, import_node_os18, import_node_path58 };
var __wakaru_init_internal_paths_initialized = false;
export function init_internal_paths() {
if (__wakaru_init_internal_paths_initialized) return;
__wakaru_init_internal_paths_initialized = true;
"use strict";
import_node_os18 = require("node:os");
import_node_path58 = require("node:path");
init_dist11();
CURSOR_PROJECTS_ROOT = (0, import_node_path58.join)((0, import_node_os18.homedir)(), ".cursor", "projects");
CURSOR_WORKTREES_ROOT = (0, import_node_path58.join)((0, import_node_os18.homedir)(), ".cursor", "worktrees");

}
