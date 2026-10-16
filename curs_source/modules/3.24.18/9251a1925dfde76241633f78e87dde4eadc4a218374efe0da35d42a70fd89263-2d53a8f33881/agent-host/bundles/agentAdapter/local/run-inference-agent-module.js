import { init_managed_local_model } from "./managed-local-model.js";
import { init_api_constants } from "../../harness/api-constants.js";
import { RunInferenceAgentModuleSource, init_inference_pb } from "../../../../proto/dist/generated/aiserver/v1/inference_pb.js";
var WIRE_SOURCE, WIRE_CHANNELS, STATICALLY_LINKED_AGENT_MODULE_BUILD;
export { STATICALLY_LINKED_AGENT_MODULE_BUILD, WIRE_CHANNELS, WIRE_SOURCE };
var __wakaru_init_run_inference_agent_module_initialized = false;
export function init_run_inference_agent_module() {
if (__wakaru_init_run_inference_agent_module_initialized) return;
__wakaru_init_run_inference_agent_module_initialized = true;
"use strict";
init_inference_pb();
init_api_constants();
init_managed_local_model();
WIRE_SOURCE = {
    installed: RunInferenceAgentModuleSource.INSTALLED,
    floor: RunInferenceAgentModuleSource.FLOOR,
    static: RunInferenceAgentModuleSource.STATIC
};
WIRE_CHANNELS = [
    "dogfood",
    "candidate",
    "stable",
    "local",
    "unknown"
];
STATICALLY_LINKED_AGENT_MODULE_BUILD = {
    generation: "static",
    commit: void 0,
    source: "static"
};

}
