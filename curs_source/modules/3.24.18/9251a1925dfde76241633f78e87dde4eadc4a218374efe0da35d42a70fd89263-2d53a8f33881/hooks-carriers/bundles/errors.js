import { init_limits } from "./limits.js";
var HookAdditionalContextTooLargeError;
export { HookAdditionalContextTooLargeError };
var __wakaru_init_errors7_initialized = false;
export function init_errors7() {
if (__wakaru_init_errors7_initialized) return;
__wakaru_init_errors7_initialized = true;
"use strict";
init_limits();
HookAdditionalContextTooLargeError = class extends Error {
    constructor(params){
        super(`Hook additional_context for ${params.hookEventName} is ${params.actualLength} chars (max ${params.maxLength}).`);
        this.name = "HookAdditionalContextTooLargeError";
        this.hookEventName = params.hookEventName;
        this.actualLength = params.actualLength;
        this.maxLength = params.maxLength;
    }
};

}
