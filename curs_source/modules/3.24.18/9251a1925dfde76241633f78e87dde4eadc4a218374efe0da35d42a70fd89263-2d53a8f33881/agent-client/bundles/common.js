import { init_dist8 } from "../../agent-exec/dist/index.js";
var sanitizeHeaderValue, INFERENCE_AUTHENTICATION_JWT_HEADER_NAME;
export { INFERENCE_AUTHENTICATION_JWT_HEADER_NAME, sanitizeHeaderValue };
var __wakaru_init_common2_initialized = false;
export function init_common2() {
if (__wakaru_init_common2_initialized) return;
__wakaru_init_common2_initialized = true;
"use strict";
init_dist8();
sanitizeHeaderValue = (value)=>String(value).replace(/[\r\n]/g, "");
INFERENCE_AUTHENTICATION_JWT_HEADER_NAME = "x-inference-authentication-jwt";

}
