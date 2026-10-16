import { validateOptionalString } from "../../../dist_exports.js";
import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validatePostToolUseResponse;
export { validatePostToolUseResponse };
var __wakaru_init_postToolUseResponse_initialized = false;
export function init_postToolUseResponse() {
if (__wakaru_init_postToolUseResponse_initialized) return;
__wakaru_init_postToolUseResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validatePostToolUseResponse = (value)=>{
    const errors = [];
    const base = validateBaseHookResponse(value);
    if (!base.isValid) {
        return base;
    }
    validateOptionalString(value.additional_context, "additional_context", errors);
    return createValidationResult(errors.length === 0, errors);
};

}
