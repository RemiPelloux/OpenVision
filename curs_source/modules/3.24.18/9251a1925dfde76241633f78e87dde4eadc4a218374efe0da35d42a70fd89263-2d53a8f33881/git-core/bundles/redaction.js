var HTTP_URL_PATTERN, TRAILING_URL_WRAPPER;
export { HTTP_URL_PATTERN, TRAILING_URL_WRAPPER };
var __wakaru_init_redaction_initialized = false;
export function init_redaction() {
if (__wakaru_init_redaction_initialized) return;
__wakaru_init_redaction_initialized = true;
"use strict";
HTTP_URL_PATTERN = /https?:\/\/\S+/gi;
TRAILING_URL_WRAPPER = /[)"'<>,.;:\]}]$/;

}
