import { createValidationResult, init_base, isObject, isString } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateSessionStartResponse;
export { validateSessionStartResponse };
var __wakaru_init_sessionStartResponse_initialized = false;
export function init_sessionStartResponse() {
if (__wakaru_init_sessionStartResponse_initialized) return;
__wakaru_init_sessionStartResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateSessionStartResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    if (value.env !== void 0) {
        if (!isObject(value.env)) {
            errors.push("env must be an object if provided");
        } else {
            for (const [key, val] of Object.entries(value.env)){
                if (!isString(key)) {
                    errors.push(`env key "${key}" must be a string`);
                }
                if (!isString(val)) {
                    errors.push(`env value for "${key}" must be a string`);
                }
            }
        }
    }
    if (value.additional_context !== void 0 && !isString(value.additional_context)) {
        errors.push("additional_context must be a string if provided");
    }
    if (value.continue !== void 0 && typeof value.continue !== "boolean") {
        errors.push("continue must be a boolean if provided");
    }
    if (value.user_message !== void 0 && !isString(value.user_message)) {
        errors.push("user_message must be a string if provided");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
