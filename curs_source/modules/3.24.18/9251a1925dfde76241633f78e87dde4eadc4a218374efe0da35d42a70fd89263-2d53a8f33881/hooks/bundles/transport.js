var HOOK_EXECUTION_TRANSPORT_MODES, WINDOWS_HOOK_EXECUTABLE_EXTENSIONS;
export { HOOK_EXECUTION_TRANSPORT_MODES, WINDOWS_HOOK_EXECUTABLE_EXTENSIONS };
var __wakaru_init_transport_initialized = false;
export function init_transport() {
if (__wakaru_init_transport_initialized) return;
__wakaru_init_transport_initialized = true;
"use strict";
HOOK_EXECUTION_TRANSPORT_MODES = [
    "stdin",
    "argv_base64",
    "argv_heredoc",
    "windows_temp_file",
    "prompt"
];
WINDOWS_HOOK_EXECUTABLE_EXTENSIONS = [
    ".ps1",
    ".exe",
    ".bat",
    ".cmd"
];

}
