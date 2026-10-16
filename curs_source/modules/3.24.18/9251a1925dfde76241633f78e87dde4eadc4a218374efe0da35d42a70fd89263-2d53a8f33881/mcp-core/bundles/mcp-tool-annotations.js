import { init_dist2 } from "../../constants/dist/index.js";
var MAX_TOOL_ANNOTATION_TITLE_LENGTH;
export { MAX_TOOL_ANNOTATION_TITLE_LENGTH };
var __wakaru_init_mcp_tool_annotations_initialized = false;
export function init_mcp_tool_annotations() {
if (__wakaru_init_mcp_tool_annotations_initialized) return;
__wakaru_init_mcp_tool_annotations_initialized = true;
"use strict";
init_dist2();
MAX_TOOL_ANNOTATION_TITLE_LENGTH = 256;

}
