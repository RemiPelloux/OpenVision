import { init_prompt_context_usage_nodes } from "./prompt-context-usage-nodes.js";
import { init_prompt_tag_parsing } from "./prompt-tag-parsing.js";
import { init_prompt_token_breakdown } from "./prompt-token-breakdown.js";
var __wakaru_init_prompt_context_message_tree_initialized = false;
export function init_prompt_context_message_tree() {
if (__wakaru_init_prompt_context_message_tree_initialized) return;
__wakaru_init_prompt_context_message_tree_initialized = true;
"use strict";
init_prompt_context_usage_nodes();
init_prompt_tag_parsing();
init_prompt_token_breakdown();

}
