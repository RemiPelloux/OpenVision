import { init_coordinator_tools_pb } from "../../../../../proto/dist/generated/agent/v1/coordinator_tools_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __wakaru_init_coordinator_tools_redacted_initialized = false;
export function init_coordinator_tools_redacted() {
if (__wakaru_init_coordinator_tools_redacted_initialized) return;
__wakaru_init_coordinator_tools_redacted_initialized = true;
"use strict";
init_dist27();
init_coordinator_tools_pb();

}
