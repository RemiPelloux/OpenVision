import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterEditFileResponse;
export { validateAfterEditFileResponse };
var __wakaru_init_afterEditFileResponse_initialized = false;
export function init_afterEditFileResponse() {
if (__wakaru_init_afterEditFileResponse_initialized) return;
__wakaru_init_afterEditFileResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterEditFileResponse = (value)=>{
    const baseValidation = validateBaseHookResponse(value);
    if (!baseValidation.isValid) {
        return baseValidation;
    }
    return baseValidation;
};

}
