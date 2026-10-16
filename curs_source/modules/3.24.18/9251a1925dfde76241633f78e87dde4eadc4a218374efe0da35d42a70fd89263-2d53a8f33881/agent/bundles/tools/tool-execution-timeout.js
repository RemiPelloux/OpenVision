var EXTRA_SHORT_TOOL_TIMEOUT_MS, SHORT_TOOL_TIMEOUT_MS, MEDIUM_TOOL_TIMEOUT_MS, LONG_TOOL_TIMEOUT_MS, EXTRA_LONG_TOOL_TIMEOUT_MS, BACKGROUND_SHELL_DEFAULT_BLOCK_UNTIL_MS, FusedStepGuardTimeoutError, TIMEOUT_BUFFER_MS, TOOL_CALL_GUARD_HEADROOM_MS, TOOL_CALL_GUARD_BLOCK_GRACE_MS, MAX_AWAIT_BLOCK_UNTIL_MS;
export { BACKGROUND_SHELL_DEFAULT_BLOCK_UNTIL_MS, EXTRA_LONG_TOOL_TIMEOUT_MS, EXTRA_SHORT_TOOL_TIMEOUT_MS, FusedStepGuardTimeoutError, LONG_TOOL_TIMEOUT_MS, MAX_AWAIT_BLOCK_UNTIL_MS, MEDIUM_TOOL_TIMEOUT_MS, SHORT_TOOL_TIMEOUT_MS, TIMEOUT_BUFFER_MS, TOOL_CALL_GUARD_BLOCK_GRACE_MS, TOOL_CALL_GUARD_HEADROOM_MS };
var __wakaru_init_tool_execution_timeout_initialized = false;
export function init_tool_execution_timeout() {
if (__wakaru_init_tool_execution_timeout_initialized) return;
__wakaru_init_tool_execution_timeout_initialized = true;
"use strict";
EXTRA_SHORT_TOOL_TIMEOUT_MS = 5 * 60 * 1e3;
SHORT_TOOL_TIMEOUT_MS = 15 * 60 * 1e3;
MEDIUM_TOOL_TIMEOUT_MS = 30 * 60 * 1e3;
LONG_TOOL_TIMEOUT_MS = 60 * 60 * 1e3;
EXTRA_LONG_TOOL_TIMEOUT_MS = 2 * 60 * 60 * 1e3;
BACKGROUND_SHELL_DEFAULT_BLOCK_UNTIL_MS = 10 * 60 * 1e3;
FusedStepGuardTimeoutError = class extends Error {
    constructor(fuseGuardMs){
        super(`Fused model/tool step exceeded guard timeout after ${Math.round(fuseGuardMs / 1e3)} seconds`);
        this.name = "FusedStepGuardTimeoutError";
        this.fuseGuardMs = fuseGuardMs;
    }
};
TIMEOUT_BUFFER_MS = 60 * 1e3;
TOOL_CALL_GUARD_HEADROOM_MS = 60 * 1e3;
TOOL_CALL_GUARD_BLOCK_GRACE_MS = 30 * 1e3;
MAX_AWAIT_BLOCK_UNTIL_MS = EXTRA_LONG_TOOL_TIMEOUT_MS - TIMEOUT_BUFFER_MS;

}
