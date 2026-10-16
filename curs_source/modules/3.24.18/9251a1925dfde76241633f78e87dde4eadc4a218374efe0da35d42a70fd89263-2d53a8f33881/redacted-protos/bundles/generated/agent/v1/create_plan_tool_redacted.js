import { init_create_plan_tool_pb } from "../../../../../proto/dist/generated/agent/v1/create_plan_tool_pb.js";
import { init_todo_tool_redacted } from "./todo_tool_redacted.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_create_plan_tool_redacted_initialized = false;
export function init_create_plan_tool_redacted() {
if (__wakaru_init_create_plan_tool_redacted_initialized) return;
__wakaru_init_create_plan_tool_redacted_initialized = true;
"use strict";
init_dist27();
init_create_plan_tool_pb();
init_todo_tool_redacted();

}
