import { init_durable_subagent_invocation_store } from "./durable-subagent-invocation-store.ts";
import { init_surface_cloud_subagent } from "./surface-cloud-subagent.ts";
import { init_surface_required_global_commands } from "./surface-required-global-commands.ts";
import { init_surface_saved_model_parameters } from "./surface-saved-model-parameters.ts";
var __wakaru_init_stitch_cloud_subagent_initialized = false;
export function init_stitch_cloud_subagent() {
if (__wakaru_init_stitch_cloud_subagent_initialized) return;
__wakaru_init_stitch_cloud_subagent_initialized = true;
"use strict";
init_durable_subagent_invocation_store();
init_surface_cloud_subagent();
init_surface_required_global_commands();
init_surface_saved_model_parameters();

}
