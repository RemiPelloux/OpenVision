import { init_notebook_utils } from "../notebook-utils.js";
import { isJupyterNotebook } from "../../../../../mcp_sandbox_policy_exports.js";
var MAX_OUTPUT_CHARS_PER_CELL, isJupyterNotebook2;
export { MAX_OUTPUT_CHARS_PER_CELL, isJupyterNotebook2 };
var __wakaru_init_notebook_format_initialized = false;
export function init_notebook_format() {
if (__wakaru_init_notebook_format_initialized) return;
__wakaru_init_notebook_format_initialized = true;
"use strict";
init_notebook_utils();
MAX_OUTPUT_CHARS_PER_CELL = 2e3;
isJupyterNotebook2 = isJupyterNotebook;

}
