import { kl } from "./browser.ts";
import { E } from "./tslib.es6.js";
var d81;
export { d81 };
var __wakaru_h81_initialized = false;
export function h81() {
if (__wakaru_h81_initialized) return;
__wakaru_h81_initialized = true;
"use strict";
E(), kl(), d81 = new RegExp([
    String.raw`"type"\s*:\s*"response\.(?:output_text|reasoning_summary_text|reasoning_text|function_call_arguments|refusal)\.(?:delta|done)"`,
    String.raw`"(?:content|reasoning_content|reasoning|refusal)"\s*:\s*"(?!")`,
    String.raw`"tool_calls"\s*:\s*\[\s*\{`,
    String.raw`"type"\s*:\s*"content_block_delta"`
].join("|"));

}
