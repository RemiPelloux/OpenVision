import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterShellExecutionResponse;
export { validateAfterShellExecutionResponse };
var __wakaru_init_afterShellExecutionResponse_initialized = false;
export function init_afterShellExecutionResponse() {
if (__wakaru_init_afterShellExecutionResponse_initialized) return;
__wakaru_init_afterShellExecutionResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterShellExecutionResponse = (value)=>{
    const base = validateBaseHookResponse(value);
    if (!base.isValid) {
        return base;
    }
    return base;
};

}
