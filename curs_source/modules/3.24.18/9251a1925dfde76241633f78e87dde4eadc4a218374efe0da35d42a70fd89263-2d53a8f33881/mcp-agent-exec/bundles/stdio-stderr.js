import { init_dist15 } from "../../mcp-core/dist/index.js";
var STDERR_FLUSH_TIMEOUT_MS, STDERR_TAIL_PROPERTY;
export { STDERR_FLUSH_TIMEOUT_MS, STDERR_TAIL_PROPERTY };
var __wakaru_init_stdio_stderr_initialized = false;
export function init_stdio_stderr() {
if (__wakaru_init_stdio_stderr_initialized) return;
__wakaru_init_stdio_stderr_initialized = true;
"use strict";
init_dist15();
STDERR_FLUSH_TIMEOUT_MS = 250;
STDERR_TAIL_PROPERTY = "mcpStdioStderrTail";

}
