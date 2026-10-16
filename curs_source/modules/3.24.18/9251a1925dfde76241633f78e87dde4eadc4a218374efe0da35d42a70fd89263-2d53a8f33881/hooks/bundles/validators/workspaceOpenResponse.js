import { createValidationResult, init_base, isString } from "./base.js";
import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateWorkspaceOpenResponse;
export { validateWorkspaceOpenResponse };
var __wakaru_init_workspaceOpenResponse_initialized = false;
export function init_workspaceOpenResponse() {
if (__wakaru_init_workspaceOpenResponse_initialized) return;
__wakaru_init_workspaceOpenResponse_initialized = true;
"use strict";
init_base();
init_baseHookResponse();
validateWorkspaceOpenResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    const errors = [];
    if (value.pluginPaths !== void 0) {
        if (!Array.isArray(value.pluginPaths)) {
            errors.push("pluginPaths must be an array of strings if provided");
        } else {
            value.pluginPaths.forEach((entry, index)=>{
                if (!isString(entry)) {
                    errors.push(`pluginPaths[${index}] must be a string`);
                    return;
                }
                if (entry.trim().length === 0) {
                    errors.push(`pluginPaths[${index}] must be a non-empty string`);
                }
            });
        }
    }
    return createValidationResult(errors.length === 0, errors);
};

}
