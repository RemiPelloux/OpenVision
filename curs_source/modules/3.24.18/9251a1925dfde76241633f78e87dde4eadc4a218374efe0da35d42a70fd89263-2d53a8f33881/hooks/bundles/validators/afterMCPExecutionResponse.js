import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterMCPExecutionResponse;
export { validateAfterMCPExecutionResponse };
var __wakaru_init_afterMCPExecutionResponse_initialized = false;
export function init_afterMCPExecutionResponse() {
if (__wakaru_init_afterMCPExecutionResponse_initialized) return;
__wakaru_init_afterMCPExecutionResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterMCPExecutionResponse = (value)=>{
    const base = validateBaseHookResponse(value);
    if (!base.isValid) {
        return base;
    }
    return base;
};

}
