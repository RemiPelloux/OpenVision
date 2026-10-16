var import_node_crypto57, import_node_path100, PROJECTS_SUBDIR, EMPTY_SLUG_HASH_LENGTH;
export { EMPTY_SLUG_HASH_LENGTH, PROJECTS_SUBDIR, import_node_crypto57, import_node_path100 };
var __wakaru_init_project_dir_initialized = false;
export function init_project_dir() {
if (__wakaru_init_project_dir_initialized) return;
__wakaru_init_project_dir_initialized = true;
"use strict";
import_node_crypto57 = require("node:crypto");
import_node_path100 = require("node:path");
PROJECTS_SUBDIR = "projects";
EMPTY_SLUG_HASH_LENGTH = 7;

}
