import { init_dist2 } from "../../../constants/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var DEV_SMART_MODE_CLASSIFIER_BLOCK_REASON;
export { DEV_SMART_MODE_CLASSIFIER_BLOCK_REASON };
var __wakaru_init_dev_smart_mode_classifier_block_initialized = false;
export function init_dev_smart_mode_classifier_block() {
if (__wakaru_init_dev_smart_mode_classifier_block_initialized) return;
__wakaru_init_dev_smart_mode_classifier_block_initialized = true;
"use strict";
init_dist2();
init_dist3();
DEV_SMART_MODE_CLASSIFIER_BLOCK_REASON = "This is a dev block whatever just retry it";

}
