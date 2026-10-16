import { init_mjs } from "../../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/index.js";
import { init_jsonparser } from "../../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/jsonparser.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_create_plan_tool_pb } from "../../../../../proto/dist/generated/agent/v1/create_plan_tool_pb.js";
var DEBOUNCE_INTERVAL_MS;
export { DEBOUNCE_INTERVAL_MS };
var __wakaru_init_common16_initialized = false;
export function init_common16() {
if (__wakaru_init_common16_initialized) return;
__wakaru_init_common16_initialized = true;
"use strict";
init_agent_pb();
init_create_plan_tool_pb();
init_mjs();
init_jsonparser();
DEBOUNCE_INTERVAL_MS = 500;

}
