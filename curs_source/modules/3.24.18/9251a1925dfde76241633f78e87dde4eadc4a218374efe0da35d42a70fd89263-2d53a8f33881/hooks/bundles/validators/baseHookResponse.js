import { createValidationResult, init_base, isObject } from "./base.js";
var validateBaseHookResponse;
export { validateBaseHookResponse };
var __wakaru_init_baseHookResponse_initialized = false;
export function init_baseHookResponse() {
if (__wakaru_init_baseHookResponse_initialized) return;
__wakaru_init_baseHookResponse_initialized = true;
"use strict";
init_base();
validateBaseHookResponse = (value)=>{
    const errors = [];
    if (!isObject(value)) {
        errors.push("Expected an object");
        return createValidationResult(false, errors);
    }
    return createValidationResult(true);
};

}
