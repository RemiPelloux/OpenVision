import { init_search_conversations_tool_pb } from "../../../../../proto/dist/generated/agent/v1/search_conversations_tool_pb.js";
import { init_conversation_search_exec_redacted } from "./conversation_search_exec_redacted.js";
var __wakaru_init_search_conversations_tool_redacted_initialized = false;
export function init_search_conversations_tool_redacted() {
if (__wakaru_init_search_conversations_tool_redacted_initialized) return;
__wakaru_init_search_conversations_tool_redacted_initialized = true;
"use strict";
init_search_conversations_tool_pb();
init_conversation_search_exec_redacted();

}
