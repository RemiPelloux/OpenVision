import { validateOptionalString } from "../../../dist_exports.js";
import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validatePostToolUseFailureResponse;
export { validatePostToolUseFailureResponse };
var __wakaru_init_postToolUseFailureResponse_initialized = false;
export function init_postToolUseFailureResponse() {
if (__wakaru_init_postToolUseFailureResponse_initialized) return;
__wakaru_init_postToolUseFailureResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validatePostToolUseFailureResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    validateOptionalString(value.additional_context, "additional_context", errors);
    return createValidationResult(errors.length === 0, errors);
};

}
