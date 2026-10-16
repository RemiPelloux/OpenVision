var isString, isObject, createValidationResult;
export { createValidationResult, isObject, isString };
var __wakaru_init_base_initialized = false;
export function init_base() {
if (__wakaru_init_base_initialized) return;
__wakaru_init_base_initialized = true;
"use strict";
isString = (value)=>typeof value === "string";
isObject = (value)=>value !== null && typeof value === "object" && !Array.isArray(value);
createValidationResult = (isValid3, errors = [])=>({
        isValid: isValid3,
        errors
    });

}
