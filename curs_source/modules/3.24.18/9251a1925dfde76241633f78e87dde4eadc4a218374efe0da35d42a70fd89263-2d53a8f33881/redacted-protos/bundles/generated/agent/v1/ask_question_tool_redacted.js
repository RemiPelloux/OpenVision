import { init_ask_question_tool_pb } from "../../../../../proto/dist/generated/agent/v1/ask_question_tool_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_ask_question_tool_redacted_initialized = false;
export function init_ask_question_tool_redacted() {
if (__wakaru_init_ask_question_tool_redacted_initialized) return;
__wakaru_init_ask_question_tool_redacted_initialized = true;
"use strict";
init_dist27();
init_ask_question_tool_pb();

}
