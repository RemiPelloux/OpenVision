var MAX_SHELL_SNAPSHOT_CHARS, MAX_SHELL_SNAPSHOT_COUNT, shellOutputSnapshots;
export { MAX_SHELL_SNAPSHOT_CHARS, MAX_SHELL_SNAPSHOT_COUNT, shellOutputSnapshots };
var __wakaru_init_interrupted_shell_output_initialized = false;
export function init_interrupted_shell_output() {
if (__wakaru_init_interrupted_shell_output_initialized) return;
__wakaru_init_interrupted_shell_output_initialized = true;
"use strict";
MAX_SHELL_SNAPSHOT_CHARS = 2e4;
MAX_SHELL_SNAPSHOT_COUNT = 100;
shellOutputSnapshots = new Map();

}
