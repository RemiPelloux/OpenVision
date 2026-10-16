import { init_sandbox_pb } from "../../proto/dist/generated/agent/v1/sandbox_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
var __wakaru_init_sandbox_conversion_initialized = false;
export function init_sandbox_conversion() {
if (__wakaru_init_sandbox_conversion_initialized) return;
__wakaru_init_sandbox_conversion_initialized = true;
"use strict";
init_sandbox_pb();
init_dist13();

}
