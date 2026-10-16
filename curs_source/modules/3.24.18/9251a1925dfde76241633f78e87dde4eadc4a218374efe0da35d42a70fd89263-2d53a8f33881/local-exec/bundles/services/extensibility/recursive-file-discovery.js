var import_promises17, import_node_path39, MAX_EXTENSIBILITY_SEARCH_DEPTH, NON_HIDDEN_SKIP_DIRECTORIES;
export { MAX_EXTENSIBILITY_SEARCH_DEPTH, NON_HIDDEN_SKIP_DIRECTORIES, import_node_path39, import_promises17 };
var __wakaru_init_recursive_file_discovery_initialized = false;
export function init_recursive_file_discovery() {
if (__wakaru_init_recursive_file_discovery_initialized) return;
__wakaru_init_recursive_file_discovery_initialized = true;
"use strict";
import_promises17 = require("node:fs/promises");
import_node_path39 = require("node:path");
MAX_EXTENSIBILITY_SEARCH_DEPTH = 10;
NON_HIDDEN_SKIP_DIRECTORIES = new Set([
    "node_modules",
    "__pycache__",
    "dist",
    "build"
]);

}
