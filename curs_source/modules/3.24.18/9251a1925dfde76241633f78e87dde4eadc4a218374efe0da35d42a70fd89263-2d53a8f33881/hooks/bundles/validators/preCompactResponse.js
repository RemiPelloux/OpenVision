import { createValidationResult, init_base, isObject } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var isString2, validatePreCompactResponse;
export { isString2, validatePreCompactResponse };
var __wakaru_init_preCompactResponse_initialized = false;
export function init_preCompactResponse() {
if (__wakaru_init_preCompactResponse_initialized) return;
__wakaru_init_preCompactResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
isString2 = (value)=>typeof value === "string";
validatePreCompactResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    if (value === void 0 || value === null || Object.keys(value).length === 0) {
        return createValidationResult(true, []);
    }
    const errors = [];
    if (!isObject(value)) {
        errors.push("PreCompact response must be an object");
        return createValidationResult(false, errors);
    }
    const response = value;
    if (response.user_message !== void 0 && !isString2(response.user_message)) {
        errors.push("user_message must be a string");
    }
    return createValidationResult(errors.length === 0, errors);
};

}
