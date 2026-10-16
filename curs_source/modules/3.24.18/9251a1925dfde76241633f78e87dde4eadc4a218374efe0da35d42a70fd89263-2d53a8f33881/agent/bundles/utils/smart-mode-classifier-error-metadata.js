var SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON, METADATA_MARKER;
export { METADATA_MARKER, SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON };
var __wakaru_init_smart_mode_classifier_error_metadata_initialized = false;
export function init_smart_mode_classifier_error_metadata() {
if (__wakaru_init_smart_mode_classifier_error_metadata_initialized) return;
__wakaru_init_smart_mode_classifier_error_metadata_initialized = true;
"use strict";
SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON = "An error occured while classifying this action. Please review manually.";
METADATA_MARKER = "\n\nSmartModeClassifierFailureMetadata:";

}
