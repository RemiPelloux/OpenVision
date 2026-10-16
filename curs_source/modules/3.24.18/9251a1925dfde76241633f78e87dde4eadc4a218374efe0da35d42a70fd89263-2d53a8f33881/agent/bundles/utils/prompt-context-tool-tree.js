import { init_core5 } from "../tools/core.js";
import { init_prompt_context_usage_nodes } from "./prompt-context-usage-nodes.js";
import { init_prompt_token_breakdown } from "./prompt-token-breakdown.js";
var SUBAGENT_BULLET_LINE_PATTERN;
export { SUBAGENT_BULLET_LINE_PATTERN };
var __wakaru_init_prompt_context_tool_tree_initialized = false;
export function init_prompt_context_tool_tree() {
if (__wakaru_init_prompt_context_tool_tree_initialized) return;
__wakaru_init_prompt_context_tool_tree_initialized = true;
"use strict";
init_core5();
init_prompt_context_usage_nodes();
init_prompt_token_breakdown();
SUBAGENT_BULLET_LINE_PATTERN = /^-\s+([^:]+?)(?:\s*:\s*(.*))?$/;

}
