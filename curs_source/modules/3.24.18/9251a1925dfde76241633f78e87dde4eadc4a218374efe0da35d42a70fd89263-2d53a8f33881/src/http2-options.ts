var HTTP2_MAX_SESSION_MEMORY_MB, unixHttp2MaxSessionMemoryOption;
export { HTTP2_MAX_SESSION_MEMORY_MB, unixHttp2MaxSessionMemoryOption };
var __wakaru_init_http2_options_initialized = false;
export function init_http2_options() {
if (__wakaru_init_http2_options_initialized) return;
__wakaru_init_http2_options_initialized = true;
"use strict";
HTTP2_MAX_SESSION_MEMORY_MB = 128;
unixHttp2MaxSessionMemoryOption = {
    maxSessionMemory: HTTP2_MAX_SESSION_MEMORY_MB
};

}
