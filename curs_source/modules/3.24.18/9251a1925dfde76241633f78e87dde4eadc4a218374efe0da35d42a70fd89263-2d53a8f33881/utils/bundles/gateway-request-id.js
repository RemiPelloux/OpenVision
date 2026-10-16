var GATEWAY_REQUEST_ID_PATTERN;
export { GATEWAY_REQUEST_ID_PATTERN };
var __wakaru_init_gateway_request_id_initialized = false;
export function init_gateway_request_id() {
if (__wakaru_init_gateway_request_id_initialized) return;
__wakaru_init_gateway_request_id_initialized = true;
"use strict";
GATEWAY_REQUEST_ID_PATTERN = /^[0-9A-Za-z_-]{1,128}$/;

}
