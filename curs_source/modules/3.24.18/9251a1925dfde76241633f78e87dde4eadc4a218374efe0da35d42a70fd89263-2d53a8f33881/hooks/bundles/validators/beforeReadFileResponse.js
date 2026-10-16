import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateBeforeReadFileResponse;
export { validateBeforeReadFileResponse };
var __wakaru_init_beforeReadFileResponse_initialized = false;
export function init_beforeReadFileResponse() {
if (__wakaru_init_beforeReadFileResponse_initialized) return;
__wakaru_init_beforeReadFileResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateBeforeReadFileResponse = (value)=>{
    const errors = [];
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    if (value.permission !== void 0) {
        const validPermissions = [
            "allow",
            "deny"
        ];
        if (!validPermissions.includes(value.permission)) {
            errors.push(`Invalid permission value. Expected one of: ${validPermissions.join(", ")}, or undefined`);
        }
    }
    if (value.user_message !== void 0 && typeof value.user_message !== "string") {
        errors.push("user_message must be a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
