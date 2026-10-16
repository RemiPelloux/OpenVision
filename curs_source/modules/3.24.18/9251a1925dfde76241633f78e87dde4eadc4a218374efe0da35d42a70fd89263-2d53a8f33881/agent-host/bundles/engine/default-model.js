import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var DEFAULT_MODEL_ID;
export { DEFAULT_MODEL_ID };
var __wakaru_init_default_model_initialized = false;
export function init_default_model() {
if (__wakaru_init_default_model_initialized) return;
__wakaru_init_default_model_initialized = true;
"use strict";
init_agent_pb();
DEFAULT_MODEL_ID = "composer-2.5-fast";

}
