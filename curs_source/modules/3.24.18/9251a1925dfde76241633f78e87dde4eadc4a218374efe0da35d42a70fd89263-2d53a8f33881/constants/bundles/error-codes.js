var ERROR_CODES, error_codes_default;
export { ERROR_CODES, error_codes_default };
var __wakaru_init_error_codes_initialized = false;
export function init_error_codes() {
if (__wakaru_init_error_codes_initialized) return;
__wakaru_init_error_codes_initialized = true;
"use strict";
ERROR_CODES = {
    FILE_BINARY_ERROR: "File seems to be binary and cannot be opened as text"
};
error_codes_default = ERROR_CODES;

}
