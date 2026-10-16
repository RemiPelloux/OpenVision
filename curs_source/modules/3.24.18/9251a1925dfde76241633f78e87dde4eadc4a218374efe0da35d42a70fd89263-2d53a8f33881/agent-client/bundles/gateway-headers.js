import { init_common2 } from "./common.js";
var GATEWAY_REQUEST_ID_HEADER, GATEWAY_AGENT_ID_HEADER;
export { GATEWAY_AGENT_ID_HEADER, GATEWAY_REQUEST_ID_HEADER };
var __wakaru_init_gateway_headers_initialized = false;
export function init_gateway_headers() {
if (__wakaru_init_gateway_headers_initialized) return;
__wakaru_init_gateway_headers_initialized = true;
"use strict";
init_common2();
GATEWAY_REQUEST_ID_HEADER = "X-Request-Id";
GATEWAY_AGENT_ID_HEADER = "X-Agent-Id";

}
