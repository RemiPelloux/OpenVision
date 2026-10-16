var DEV_SMART_MODE_CLASSIFIER_DELAY_MS, DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS;
export { DEV_SMART_MODE_CLASSIFIER_DELAY_MS, DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS };
var __wakaru_init_smart_mode_classifier_initialized = false;
export function init_smart_mode_classifier() {
if (__wakaru_init_smart_mode_classifier_initialized) return;
__wakaru_init_smart_mode_classifier_initialized = true;
"use strict";
DEV_SMART_MODE_CLASSIFIER_DELAY_MS = 1e4;
DEV_SMART_MODE_CLASSIFIER_DELAY_SECONDS = DEV_SMART_MODE_CLASSIFIER_DELAY_MS / 1e3;

}
