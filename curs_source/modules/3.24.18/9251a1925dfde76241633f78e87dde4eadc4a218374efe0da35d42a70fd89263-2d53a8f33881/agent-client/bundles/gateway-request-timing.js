import { init_dist3 } from "../../utils/dist/index.js";
var GATEWAY_REQUEST_ID_RESPONSE_HEADERS, CONTENT_EVENT_PATTERN, MODEL_PATTERN, OUTPUT_TOKENS_PATTERN;
export { CONTENT_EVENT_PATTERN, GATEWAY_REQUEST_ID_RESPONSE_HEADERS, MODEL_PATTERN, OUTPUT_TOKENS_PATTERN };
var __wakaru_init_gateway_request_timing_initialized = false;
export function init_gateway_request_timing() {
if (__wakaru_init_gateway_request_timing_initialized) return;
__wakaru_init_gateway_request_timing_initialized = true;
"use strict";
init_dist3();
GATEWAY_REQUEST_ID_RESPONSE_HEADERS = [
    "x-request-id",
    "request-id",
    "apim-request-id"
];
CONTENT_EVENT_PATTERN = new RegExp([
    String.raw`"type"\s*:\s*"response\.(?:output_text|reasoning_summary_text|reasoning_text|function_call_arguments|refusal)\.(?:delta|done)"`,
    String.raw`"(?:content|reasoning_content|reasoning|refusal)"\s*:\s*"(?!")`,
    String.raw`"tool_calls"\s*:\s*\[\s*\{`,
    String.raw`"type"\s*:\s*"content_block_delta"`
].join("|"));
MODEL_PATTERN = /"model"\s*:\s*"([^"\\\s]{1,256})"/;
OUTPUT_TOKENS_PATTERN = /"(?:output_tokens|completion_tokens)"\s*:\s*(\d+)/;

}
