import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_event_tracking } from "./event-tracking.js";
import { init_smart_mode_classifier_error_metadata } from "./smart-mode-classifier-error-metadata.js";
import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var logger60, SMART_MODE_CLASSIFIER_TIMEOUT_MS, SMART_MODE_CLASSIFIER_LOCAL_DEV_TIMEOUT_MULTIPLIER, SMART_MODE_CLASSIFIER_MAX_TOTAL_ATTEMPTS, SMART_MODE_CLASSIFIER_MAX_FAILURE_RETRIES, smartModeClassifierAttemptIndexKey, smartModeClassifierModeKey, smartModeClassifierWorkspacePathsKey;
export { SMART_MODE_CLASSIFIER_LOCAL_DEV_TIMEOUT_MULTIPLIER, SMART_MODE_CLASSIFIER_MAX_FAILURE_RETRIES, SMART_MODE_CLASSIFIER_MAX_TOTAL_ATTEMPTS, SMART_MODE_CLASSIFIER_TIMEOUT_MS, logger60, smartModeClassifierAttemptIndexKey, smartModeClassifierModeKey, smartModeClassifierWorkspacePathsKey };
var __wakaru_init_smart_mode_classifier_measurement_initialized = false;
export function init_smart_mode_classifier_measurement() {
if (__wakaru_init_smart_mode_classifier_measurement_initialized) return;
__wakaru_init_smart_mode_classifier_measurement_initialized = true;
"use strict";
init_dist8();
init_dist();
init_dist3();
init_event_tracking();
init_smart_mode_classifier_error_metadata();
logger60 = createLogger("@anysphere/agent:smart-mode-classifier");
SMART_MODE_CLASSIFIER_TIMEOUT_MS = 1e4;
SMART_MODE_CLASSIFIER_LOCAL_DEV_TIMEOUT_MULTIPLIER = 3;
SMART_MODE_CLASSIFIER_MAX_TOTAL_ATTEMPTS = 2;
SMART_MODE_CLASSIFIER_MAX_FAILURE_RETRIES = SMART_MODE_CLASSIFIER_MAX_TOTAL_ATTEMPTS - 1;
smartModeClassifierAttemptIndexKey = createKey(Symbol("smartModeClassifierAttemptIndex"), void 0);
smartModeClassifierModeKey = createKey(Symbol("smartModeClassifierMode"), void 0);
smartModeClassifierWorkspacePathsKey = createKey(Symbol("smartModeClassifierWorkspacePaths"), void 0);

}
