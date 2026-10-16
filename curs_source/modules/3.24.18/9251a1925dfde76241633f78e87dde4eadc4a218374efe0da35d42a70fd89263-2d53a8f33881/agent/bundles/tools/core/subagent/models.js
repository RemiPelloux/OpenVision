import { SubagentComposerModelId, init_subagent_composer_model_ids } from "../../subagent-composer-model-ids.js";
var DEFAULT_SUBAGENT_SLUG;
export { DEFAULT_SUBAGENT_SLUG };
var __wakaru_init_models_initialized = false;
export function init_models() {
if (__wakaru_init_models_initialized) return;
__wakaru_init_models_initialized = true;
"use strict";
init_subagent_composer_model_ids();
DEFAULT_SUBAGENT_SLUG = SubagentComposerModelId.standard;

}
