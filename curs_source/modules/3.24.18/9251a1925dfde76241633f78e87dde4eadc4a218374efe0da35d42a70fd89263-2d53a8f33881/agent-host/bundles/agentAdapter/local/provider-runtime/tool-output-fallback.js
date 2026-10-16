import { init_request_body } from "./request-body.js";
var OMITTED_TOOL_IMAGE_NOTE, NON_VISION_TOOL_IMAGE_NOTE, REJECTION_STATUSES;
export { NON_VISION_TOOL_IMAGE_NOTE, OMITTED_TOOL_IMAGE_NOTE, REJECTION_STATUSES };
var __wakaru_init_tool_output_fallback_initialized = false;
export function init_tool_output_fallback() {
if (__wakaru_init_tool_output_fallback_initialized) return;
__wakaru_init_tool_output_fallback_initialized = true;
"use strict";
init_request_body();
OMITTED_TOOL_IMAGE_NOTE = "[image omitted: this gateway accepts text tool results only]";
NON_VISION_TOOL_IMAGE_NOTE = "[image omitted: this model is not configured for image input; set vision = true on its private-inference.toml entry if it accepts images]";
REJECTION_STATUSES = new Set([
    400,
    422
]);

}
