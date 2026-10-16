import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateStopResponse;
export { validateStopResponse };
var __wakaru_init_stopResponse_initialized = false;
export function init_stopResponse() {
if (__wakaru_init_stopResponse_initialized) return;
__wakaru_init_stopResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateStopResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    if (value.followup_message !== void 0 && typeof value.followup_message !== "string") {
        errors.push("followup_message must be a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
