import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_crypto5, import_node_fs12, import_node_os6, import_node_path13, SANDBOX_CACHE_DIR, SANDBOX_TEMP_RESTORE_EVAL;
export { SANDBOX_CACHE_DIR, SANDBOX_TEMP_RESTORE_EVAL, import_node_crypto5, import_node_fs12, import_node_os6, import_node_path13 };
var __wakaru_init_cache_env_initialized = false;
export function init_cache_env() {
if (__wakaru_init_cache_env_initialized) return;
__wakaru_init_cache_env_initialized = true;
"use strict";
import_node_crypto5 = require("node:crypto");
import_node_fs12 = require("node:fs");
import_node_os6 = require("node:os");
import_node_path13 = require("node:path");
init_dist3();
SANDBOX_CACHE_DIR = "cursor-sandbox-cache";
SANDBOX_TEMP_RESTORE_EVAL = `builtin eval "\${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; `;

}
