import { init_line } from "../diff/line.js";
var INCLUDE_HEADERS;
export { INCLUDE_HEADERS };
var __wakaru_init_create_initialized = false;
export function init_create() {
if (__wakaru_init_create_initialized) return;
__wakaru_init_create_initialized = true;
init_line();
INCLUDE_HEADERS = {
    includeIndex: true,
    includeUnderline: true,
    includeFileHeaders: true
};

}
