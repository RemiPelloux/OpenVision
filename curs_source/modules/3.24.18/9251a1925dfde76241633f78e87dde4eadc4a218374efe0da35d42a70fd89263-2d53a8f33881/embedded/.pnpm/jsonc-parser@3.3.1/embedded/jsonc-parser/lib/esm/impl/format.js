import { init_scanner } from "./scanner.js";
import { init_string_intern } from "./string-intern.js";
var __wakaru_init_format_initialized = false;
export function init_format() {
if (__wakaru_init_format_initialized) return;
__wakaru_init_format_initialized = true;
"use strict";
init_scanner();
init_string_intern();

}
