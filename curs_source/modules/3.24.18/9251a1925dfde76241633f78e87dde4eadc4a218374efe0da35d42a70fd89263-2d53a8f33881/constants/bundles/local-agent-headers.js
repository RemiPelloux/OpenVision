var CURSOR_LOCAL_AGENT_HEADERS_ENV, HEADER_NAME_PATTERN, HEADER_VALUE_PATTERN;
export { CURSOR_LOCAL_AGENT_HEADERS_ENV, HEADER_NAME_PATTERN, HEADER_VALUE_PATTERN };
var __wakaru_init_local_agent_headers_initialized = false;
export function init_local_agent_headers() {
if (__wakaru_init_local_agent_headers_initialized) return;
__wakaru_init_local_agent_headers_initialized = true;
"use strict";
CURSOR_LOCAL_AGENT_HEADERS_ENV = "CURSOR_LOCAL_AGENT_HEADERS";
HEADER_NAME_PATTERN = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
HEADER_VALUE_PATTERN = /^[\t\x20-\x7e\x80-\xff]*$/;

}
