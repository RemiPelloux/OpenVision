import { init_client_version } from "./client-version.js";
var __wakaru_init_request_headers_initialized = false;
export function init_request_headers() {
if (__wakaru_init_request_headers_initialized) return;
__wakaru_init_request_headers_initialized = true;
"use strict";
init_client_version();

}
