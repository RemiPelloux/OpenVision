import { init_prompt_token_tracking } from "./prompt-token-tracking.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var PROMPT_CONTEXT_USAGE_TREE_SCHEMA_VERSION, PROMPT_CONTEXT_INLINE_CONTENT_CHARS, PROMPT_CONTEXT_MAX_NODES;
export { PROMPT_CONTEXT_INLINE_CONTENT_CHARS, PROMPT_CONTEXT_MAX_NODES, PROMPT_CONTEXT_USAGE_TREE_SCHEMA_VERSION };
var __wakaru_init_prompt_context_usage_nodes_initialized = false;
export function init_prompt_context_usage_nodes() {
if (__wakaru_init_prompt_context_usage_nodes_initialized) return;
__wakaru_init_prompt_context_usage_nodes_initialized = true;
"use strict";
init_agent_pb();
init_prompt_token_tracking();
PROMPT_CONTEXT_USAGE_TREE_SCHEMA_VERSION = 2;
PROMPT_CONTEXT_INLINE_CONTENT_CHARS = 4e4;
PROMPT_CONTEXT_MAX_NODES = 4e3;

}
