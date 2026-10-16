import { createValidationResult, init_base, isString } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateSubagentStartResponse;
export { validateSubagentStartResponse };
var __wakaru_init_subagentStartResponse_initialized = false;
export function init_subagentStartResponse() {
if (__wakaru_init_subagentStartResponse_initialized) return;
__wakaru_init_subagentStartResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateSubagentStartResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    const response = value;
    if (response.permission !== void 0) {
        const validPermissions = [
            "allow",
            "deny",
            "ask"
        ];
        if (!validPermissions.includes(response.permission)) {
            errors.push(`Invalid permission value. Expected one of: ${validPermissions.join(", ")}, or undefined`);
        }
    }
    if (response.user_message !== void 0 && !isString(response.user_message)) {
        errors.push("user_message must be a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
