import { init_errors7 } from "./errors.js";
import { init_limits } from "./limits.js";
import { init_spec } from "./spec.js";
import { init_hook_additional_context_pb } from "../../proto/dist/generated/agent/v1/hook_additional_context_pb.js";
var __wakaru_init_factories_initialized = false;
export function init_factories() {
if (__wakaru_init_factories_initialized) return;
__wakaru_init_factories_initialized = true;
"use strict";
init_hook_additional_context_pb();
init_errors7();
init_limits();
init_spec();

}
