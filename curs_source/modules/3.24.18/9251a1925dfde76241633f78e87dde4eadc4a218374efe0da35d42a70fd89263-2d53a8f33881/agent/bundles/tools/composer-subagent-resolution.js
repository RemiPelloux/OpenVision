import { init_subagent_composer_model_ids } from "./subagent-composer-model-ids.js";
var LEGACY_SUBAGENT_COMPOSER_SLUG, BUILT_IN_COMPOSER_MODEL_ID_PATTERN;
export { BUILT_IN_COMPOSER_MODEL_ID_PATTERN, LEGACY_SUBAGENT_COMPOSER_SLUG };
var __wakaru_init_composer_subagent_resolution_initialized = false;
export function init_composer_subagent_resolution() {
if (__wakaru_init_composer_subagent_resolution_initialized) return;
__wakaru_init_composer_subagent_resolution_initialized = true;
"use strict";
init_subagent_composer_model_ids();
LEGACY_SUBAGENT_COMPOSER_SLUG = "composer-1.5";
BUILT_IN_COMPOSER_MODEL_ID_PATTERN = /^composer-\d+(?:\.\d+)?(?:-fast)?$/;

}
