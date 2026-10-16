import { init_git_subprocess_env } from "./git-subprocess-env.js";
import { MARKETPLACE_MANIFEST_PATHS, init_manifest_parser } from "./manifest-parser.js";
var import_promises13, import_node_path30, DISABLE_SPARSE_PLUGIN_CLONES_ENV, ALWAYS_SPARSE_DIRS, MIN_SPARSE_GIT;
export { ALWAYS_SPARSE_DIRS, DISABLE_SPARSE_PLUGIN_CLONES_ENV, MIN_SPARSE_GIT, import_node_path30, import_promises13 };
var __wakaru_init_git_sparse_clone_initialized = false;
export function init_git_sparse_clone() {
if (__wakaru_init_git_sparse_clone_initialized) return;
__wakaru_init_git_sparse_clone_initialized = true;
"use strict";
import_promises13 = require("node:fs/promises");
import_node_path30 = require("node:path");
init_git_subprocess_env();
init_manifest_parser();
DISABLE_SPARSE_PLUGIN_CLONES_ENV = "CURSOR_DISABLE_SPARSE_PLUGIN_CLONES";
ALWAYS_SPARSE_DIRS = MARKETPLACE_MANIFEST_PATHS.map((p2)=>p2.split("/")[0]);
MIN_SPARSE_GIT = {
    major: 2,
    minor: 28
};

}
