import { init_redaction } from "./redaction.js";
var GIT_DIAGNOSTICS_PREFIX, GIT_DIAGNOSTICS_RE, GIT_STDERR_LOG_CAP;
export { GIT_DIAGNOSTICS_PREFIX, GIT_DIAGNOSTICS_RE, GIT_STDERR_LOG_CAP };
var __wakaru_init_diagnostics_initialized = false;
export function init_diagnostics() {
if (__wakaru_init_diagnostics_initialized) return;
__wakaru_init_diagnostics_initialized = true;
"use strict";
init_redaction();
GIT_DIAGNOSTICS_PREFIX = " [git: ";
GIT_DIAGNOSTICS_RE = / \[git: ([^\]]*)\]/;
GIT_STDERR_LOG_CAP = 2048;

}
