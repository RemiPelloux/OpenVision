import { init_ignore_service } from "./services/ignore-service.js";
var __wakaru_init_indexed_grep_ignore_initialized = false;
export function init_indexed_grep_ignore() {
if (__wakaru_init_indexed_grep_ignore_initialized) return;
__wakaru_init_indexed_grep_ignore_initialized = true;
"use strict";
init_ignore_service();

}
