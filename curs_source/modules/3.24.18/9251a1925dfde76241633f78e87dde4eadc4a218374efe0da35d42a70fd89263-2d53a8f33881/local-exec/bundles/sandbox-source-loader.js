import { init_dist13 } from "../../shell-exec/dist/index.js";
var import_node_fs28, import_node_path63, PER_REPO_SANDBOX_CONFIG_PATH;
export { PER_REPO_SANDBOX_CONFIG_PATH, import_node_fs28, import_node_path63 };
var __wakaru_init_sandbox_source_loader_initialized = false;
export function init_sandbox_source_loader() {
if (__wakaru_init_sandbox_source_loader_initialized) return;
__wakaru_init_sandbox_source_loader_initialized = true;
"use strict";
import_node_fs28 = require("node:fs");
import_node_path63 = require("node:path");
init_dist13();
PER_REPO_SANDBOX_CONFIG_PATH = ".cursor/sandbox.json";

}
