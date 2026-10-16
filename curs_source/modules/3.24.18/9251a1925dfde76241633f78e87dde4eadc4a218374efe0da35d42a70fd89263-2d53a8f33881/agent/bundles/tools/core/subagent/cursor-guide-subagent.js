import { init_cursor_guide } from "../../../prompts/subagent/cursor-guide.js";
import { init_system } from "../../../prompts/system.js";
import { init_dist32 } from "../../../../../prompt-jsx/dist/index.js";
import { init_subagents_pb } from "../../../../../proto/dist/generated/agent/v1/subagents_pb.js";
var CURSOR_GUIDE_TOOL_IDENTIFIERS;
export { CURSOR_GUIDE_TOOL_IDENTIFIERS };
var __wakaru_init_cursor_guide_subagent_initialized = false;
export function init_cursor_guide_subagent() {
if (__wakaru_init_cursor_guide_subagent_initialized) return;
__wakaru_init_cursor_guide_subagent_initialized = true;
"use strict";
init_dist32();
init_subagents_pb();
init_cursor_guide();
init_system();
CURSOR_GUIDE_TOOL_IDENTIFIERS = new Set([
    "READ",
    "GREP",
    "WEB_FETCH",
    "WEB_SEARCH"
]);

}
