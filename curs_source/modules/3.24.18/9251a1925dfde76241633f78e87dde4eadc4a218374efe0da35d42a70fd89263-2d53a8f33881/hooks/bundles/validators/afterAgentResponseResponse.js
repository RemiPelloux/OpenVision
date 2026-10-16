import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterAgentResponseResponse;
export { validateAfterAgentResponseResponse };
var __wakaru_init_afterAgentResponseResponse_initialized = false;
export function init_afterAgentResponseResponse() {
if (__wakaru_init_afterAgentResponseResponse_initialized) return;
__wakaru_init_afterAgentResponseResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterAgentResponseResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    return baseValidation;
};

}
