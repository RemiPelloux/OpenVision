import { init_read_tool_pb } from "../../../../../proto/dist/generated/agent/v1/read_tool_pb.js";
import { init_cursor_rules_redacted } from "./cursor_rules_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_read_tool_redacted_initialized = false;
export function init_read_tool_redacted() {
if (__wakaru_init_read_tool_redacted_initialized) return;
__wakaru_init_read_tool_redacted_initialized = true;
"use strict";
init_dist27();
init_read_tool_pb();
init_cursor_rules_redacted();

}
