var TERMINAL_SHELL_INTERPRETER_NAMES;
export { TERMINAL_SHELL_INTERPRETER_NAMES };
var __wakaru_init_terminal_allowlist_initialized = false;
export function init_terminal_allowlist() {
if (__wakaru_init_terminal_allowlist_initialized) return;
__wakaru_init_terminal_allowlist_initialized = true;
"use strict";
TERMINAL_SHELL_INTERPRETER_NAMES = new Set([
    "ash",
    "bash",
    "csh",
    "dash",
    "fish",
    "ksh",
    "powershell",
    "pwsh",
    "sh",
    "tcsh",
    "zsh",
    "cmd"
]);

}
