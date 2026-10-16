import { init_cursor_rules_pb } from "../../../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_cursor_rules_redacted_initialized = false;
export function init_cursor_rules_redacted() {
if (__wakaru_init_cursor_rules_redacted_initialized) return;
__wakaru_init_cursor_rules_redacted_initialized = true;
"use strict";
init_dist27();
init_cursor_rules_pb();

}
