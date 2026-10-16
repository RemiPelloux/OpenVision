import { init_jsx_runtime } from "../../../../prompt-jsx/dist/jsx-runtime.js";
var CURSOR_DOCS_INDEX_URL;
export { CURSOR_DOCS_INDEX_URL };
var __wakaru_init_cursor_guide_initialized = false;
export function init_cursor_guide() {
if (__wakaru_init_cursor_guide_initialized) return;
__wakaru_init_cursor_guide_initialized = true;
"use strict";
init_jsx_runtime();
CURSOR_DOCS_INDEX_URL = "https://cursor.com/llms.txt";

}
