import { init_format } from "./format.js";
import { init_parser } from "./parser.js";
var __wakaru_init_edit_initialized = false;
export function init_edit() {
if (__wakaru_init_edit_initialized) return;
__wakaru_init_edit_initialized = true;
"use strict";
init_format();
init_parser();

}
