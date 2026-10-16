var HookDeniedError, FailClosedError, HOOK_SETTINGS_HINT, HOOK_DENIAL_AGENT_NOTE;
export { FailClosedError, HOOK_DENIAL_AGENT_NOTE, HOOK_SETTINGS_HINT, HookDeniedError };
var __wakaru_init_hook_error_handling_initialized = false;
export function init_hook_error_handling() {
if (__wakaru_init_hook_error_handling_initialized) return;
__wakaru_init_hook_error_handling_initialized = true;
"use strict";
HookDeniedError = class extends Error {
    constructor(reason){
        super(`Hook denied: ${reason}`);
        this.failureType = "permission_denied";
        this.name = "HookDeniedError";
        this.reason = reason;
    }
};
FailClosedError = class extends Error {
    constructor(reason, cause){
        super(`Hook failed (fail-closed): ${reason}`);
        this.failureType = "error";
        this.name = "FailClosedError";
        this.reason = reason;
        this.cause = cause;
    }
};
HOOK_SETTINGS_HINT = "To view or modify configured hooks, go to Cursor Settings > Hooks.";
HOOK_DENIAL_AGENT_NOTE = "Agent note: Do not suggest workarounds to the blocked tool.";

}
