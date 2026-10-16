import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterAgentThoughtResponse;
export { validateAfterAgentThoughtResponse };
var __wakaru_init_afterAgentThoughtResponse_initialized = false;
export function init_afterAgentThoughtResponse() {
if (__wakaru_init_afterAgentThoughtResponse_initialized) return;
__wakaru_init_afterAgentThoughtResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterAgentThoughtResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    return baseValidation;
};

}
