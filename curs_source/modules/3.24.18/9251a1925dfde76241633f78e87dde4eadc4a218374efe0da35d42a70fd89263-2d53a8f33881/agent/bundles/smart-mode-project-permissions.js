import { init_dist21 } from "../../cursor-config/dist/index.js";
var import_node_fs35, import_promises49, import_node_path76, MAX_PROJECT_PERMISSION_INSTRUCTIONS_PER_WORKSPACE, MAX_USER_AUTO_RUN_INSTRUCTIONS, MAX_PROJECT_PERMISSION_INSTRUCTION_CHARS, PROJECT_PERMISSIONS_FILE_NAME;
export { MAX_PROJECT_PERMISSION_INSTRUCTIONS_PER_WORKSPACE, MAX_PROJECT_PERMISSION_INSTRUCTION_CHARS, MAX_USER_AUTO_RUN_INSTRUCTIONS, PROJECT_PERMISSIONS_FILE_NAME, import_node_fs35, import_node_path76, import_promises49 };
var __wakaru_init_smart_mode_project_permissions_initialized = false;
export function init_smart_mode_project_permissions() {
if (__wakaru_init_smart_mode_project_permissions_initialized) return;
__wakaru_init_smart_mode_project_permissions_initialized = true;
"use strict";
import_node_fs35 = require("node:fs");
import_promises49 = require("node:fs/promises");
import_node_path76 = require("node:path");
init_dist21();
MAX_PROJECT_PERMISSION_INSTRUCTIONS_PER_WORKSPACE = 20;
MAX_USER_AUTO_RUN_INSTRUCTIONS = 20;
MAX_PROJECT_PERMISSION_INSTRUCTION_CHARS = 1e3;
PROJECT_PERMISSIONS_FILE_NAME = ".cursor/permissions.json";

}
