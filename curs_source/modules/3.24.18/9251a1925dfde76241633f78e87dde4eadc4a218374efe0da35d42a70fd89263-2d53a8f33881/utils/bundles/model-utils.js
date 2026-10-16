var DSV3_TOOL_TOKENS_TO_STRIP;
export { DSV3_TOOL_TOKENS_TO_STRIP };
var __wakaru_init_model_utils_initialized = false;
export function init_model_utils() {
if (__wakaru_init_model_utils_initialized) return;
__wakaru_init_model_utils_initialized = true;
"use strict";
DSV3_TOOL_TOKENS_TO_STRIP = [
    "<\uFF5Ctool\u2581calls\u2581begin\uFF5C>",
    "<\uFF5Ctool\u2581calls\u2581end\uFF5C>",
    "<\uFF5Ctool\u2581call\u2581begin\uFF5C>",
    "<\uFF5Ctool\u2581call\u2581end\uFF5C>",
    "<\uFF5Ctool\u2581outputs\u2581begin\uFF5C>",
    "<\uFF5Ctool\u2581outputs\u2581end\uFF5C>",
    "<\uFF5Ctool\u2581output\u2581begin\uFF5C>",
    "<\uFF5Ctool\u2581output\u2581end\uFF5C>",
    "<\uFF5Ctool\u2581sep\uFF5C>",
    "<|redacted_tool_calls_begin|>",
    "<|redacted_tool_calls_end|>",
    "<|redacted_tool_call_begin|>",
    "<|redacted_tool_call_end|>",
    "<|redacted_tool_outputs_begin|>",
    "<|redacted_tool_outputs_end|>",
    "<|redacted_tool_output_begin|>",
    "<|redacted_tool_output_end|>",
    "<|redacted_tool_sep|>"
];

}
