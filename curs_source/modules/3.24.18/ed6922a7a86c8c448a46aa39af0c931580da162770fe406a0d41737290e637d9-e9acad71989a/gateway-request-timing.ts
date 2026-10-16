import { Yu } from "./browser.ts";
import { x } from "./tslib.es6.js";
var p1v;
export { p1v };
var __wakaru_m1v_initialized = false;
export function m1v() {
if (__wakaru_m1v_initialized) return;
__wakaru_m1v_initialized = true;
"use strict";
x(), Yu(), p1v = new RegExp([
    String.raw`"type"\s*:\s*"response\.(?:output_text|reasoning_summary_text|reasoning_text|function_call_arguments|refusal)\.(?:delta|done)"`,
    String.raw`"(?:content|reasoning_content|reasoning|refusal)"\s*:\s*"(?!")`,
    String.raw`"tool_calls"\s*:\s*\[\s*\{`,
    String.raw`"type"\s*:\s*"content_block_delta"`
].join("|"));

}
