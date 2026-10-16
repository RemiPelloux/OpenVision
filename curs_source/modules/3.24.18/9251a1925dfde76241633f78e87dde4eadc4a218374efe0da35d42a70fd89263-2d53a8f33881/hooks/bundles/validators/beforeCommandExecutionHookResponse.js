import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateBeforeCommandExecutionHookResponse;
export { validateBeforeCommandExecutionHookResponse };
var __wakaru_init_beforeCommandExecutionHookResponse_initialized = false;
export function init_beforeCommandExecutionHookResponse() {
if (__wakaru_init_beforeCommandExecutionHookResponse_initialized) return;
__wakaru_init_beforeCommandExecutionHookResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateBeforeCommandExecutionHookResponse = (value)=>{
    const errors = [];
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    if (value.permission !== void 0) {
        const validPermissions = [
            "allow",
            "deny",
            "ask"
        ];
        if (!validPermissions.includes(value.permission)) {
            errors.push(`Invalid permission value. Expected one of: ${validPermissions.join(", ")}, or undefined`);
        }
    }
    if (value.user_message !== void 0 && typeof value.user_message !== "string") {
        errors.push("Invalid user_message value. Expected a string if provided");
    }
    if (value.agent_message !== void 0 && typeof value.agent_message !== "string") {
        errors.push("Invalid agent_message value. Expected a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
