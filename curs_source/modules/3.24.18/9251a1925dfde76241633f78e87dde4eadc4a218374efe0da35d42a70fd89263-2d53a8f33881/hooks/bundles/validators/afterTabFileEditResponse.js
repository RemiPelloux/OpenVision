import { init_baseHookResponse, validateBaseHookResponse } from "./baseHookResponse.js";
var validateAfterTabFileEditResponse;
export { validateAfterTabFileEditResponse };
var __wakaru_init_afterTabFileEditResponse_initialized = false;
export function init_afterTabFileEditResponse() {
if (__wakaru_init_afterTabFileEditResponse_initialized) return;
__wakaru_init_afterTabFileEditResponse_initialized = true;
"use strict";
init_baseHookResponse();
validateAfterTabFileEditResponse = (value)=>{
    return validateBaseHookResponse(value);
};

}
