import { init_managed_local_launched_defaults } from "./managed-local-launched-defaults.js";
import { init_managed_local_mode_config } from "./managed-local-mode-config.js";
import { init_managed_local_model } from "./managed-local-model.js";
import { init_managed_local_serving_model } from "./managed-local-serving-model.js";
import { init_managed_local_task_tool_props } from "./managed-local-task-tool-props.js";
import { init_managed_local_tool_services } from "./managed-local-tool-services.js";
import { init_unsupported_resolved_model_error } from "../shared/unsupported-resolved-model-error.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
var MANAGED_LOCAL_DSV3_MAX_PARALLEL_IMAGE_GENERATIONS;
export { MANAGED_LOCAL_DSV3_MAX_PARALLEL_IMAGE_GENERATIONS };
var __wakaru_init_managed_local_dsv3_config_initialized = false;
export function init_managed_local_dsv3_config() {
if (__wakaru_init_managed_local_dsv3_config_initialized) return;
__wakaru_init_managed_local_dsv3_config_initialized = true;
"use strict";
init_dist35();
init_agent_pb();
init_unsupported_resolved_model_error();
init_managed_local_launched_defaults();
init_managed_local_mode_config();
init_managed_local_model();
init_managed_local_serving_model();
init_managed_local_task_tool_props();
init_managed_local_tool_services();
MANAGED_LOCAL_DSV3_MAX_PARALLEL_IMAGE_GENERATIONS = 3;

}
