import { init_int32 } from "./int32.js";
import { init_line_scan } from "./line-scan.js";
var __wakaru_init_grep_output_parse_initialized = false;
export function init_grep_output_parse() {
if (__wakaru_init_grep_output_parse_initialized) return;
__wakaru_init_grep_output_parse_initialized = true;
"use strict";
init_int32();
init_line_scan();

}
