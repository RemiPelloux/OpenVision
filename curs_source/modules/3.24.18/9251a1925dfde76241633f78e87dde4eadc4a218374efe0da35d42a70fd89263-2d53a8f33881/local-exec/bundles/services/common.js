import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_path18, DEFAULT_GLOB_IGNORE_DIRS;
export { DEFAULT_GLOB_IGNORE_DIRS, import_node_path18 };
var __wakaru_init_common4_initialized = false;
export function init_common4() {
if (__wakaru_init_common4_initialized) return;
__wakaru_init_common4_initialized = true;
"use strict";
import_node_path18 = require("node:path");
init_dist3();
init_dist3();
DEFAULT_GLOB_IGNORE_DIRS = [
    "**/node_modules/**",
    "**/.git/**",
    "**/.turbo/**",
    "**/.next/**",
    "**/.cache/**",
    "**/.pnpm/**",
    "**/.yarn/**",
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/target/**",
    "**/.vscode/**",
    "**/.idea/**",
    "**/venv/**",
    "**/__pycache__/**",
    "**/logs/**",
    "**/tmp/**",
    "**/temp/**"
];

}
