import { createValidationResult, init_base } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateSessionEndResponse;
export { validateSessionEndResponse };
var __wakaru_init_sessionEndResponse_initialized = false;
export function init_sessionEndResponse() {
if (__wakaru_init_sessionEndResponse_initialized) return;
__wakaru_init_sessionEndResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateSessionEndResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    return createValidationResult(true, []);
};

}
