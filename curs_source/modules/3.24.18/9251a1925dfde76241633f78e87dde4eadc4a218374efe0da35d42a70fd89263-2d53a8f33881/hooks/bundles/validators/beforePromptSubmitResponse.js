import { createValidationResult, init_base, isString } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateBeforePromptSubmitResponse;
export { validateBeforePromptSubmitResponse };
var __wakaru_init_beforePromptSubmitResponse_initialized = false;
export function init_beforePromptSubmitResponse() {
if (__wakaru_init_beforePromptSubmitResponse_initialized) return;
__wakaru_init_beforePromptSubmitResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateBeforePromptSubmitResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    if (value.continue !== void 0 && typeof value.continue !== "boolean") {
        errors.push("continue must be a boolean if provided");
    }
    if (value.user_message !== void 0 && typeof value.user_message !== "string") {
        errors.push("user_message must be a string if provided");
    }
    if (value.additional_context !== void 0 && !isString(value.additional_context)) {
        errors.push("additional_context must be a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
