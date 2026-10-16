var KnownShellExecutor, SHELL_ENV_OVERRIDES;
export { KnownShellExecutor, SHELL_ENV_OVERRIDES };
var __wakaru_init_types4_initialized = false;
export function init_types4() {
if (__wakaru_init_types4_initialized) return;
__wakaru_init_types4_initialized = true;
"use strict";
(function(KnownShellExecutor2) {
    KnownShellExecutor2["Zsh"] = "zsh";
    KnownShellExecutor2["ZshLight"] = "zsh-light";
    KnownShellExecutor2["Bash"] = "bash";
    KnownShellExecutor2["PowerShell"] = "powershell";
    KnownShellExecutor2["Naive"] = "naive";
})(KnownShellExecutor || (KnownShellExecutor = {}));
SHELL_ENV_OVERRIDES = {
    TERM: "dumb",
    NO_COLOR: "1",
    FORCE_COLOR: "0",
    _ZO_DOCTOR: "0"
};

}
