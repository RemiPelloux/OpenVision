import { init_composer2_cloud_testing_sections } from "../prompts/composer2-cloud-testing-sections.js";
import { init_cursor_rules_pb } from "../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var TRIGGER_INFO_OPEN, TRIGGER_INFO_CLOSE;
export { TRIGGER_INFO_CLOSE, TRIGGER_INFO_OPEN };
var __wakaru_init_common12_initialized = false;
export function init_common12() {
if (__wakaru_init_common12_initialized) return;
__wakaru_init_common12_initialized = true;
"use strict";
init_cursor_rules_pb();
init_dist27();
init_composer2_cloud_testing_sections();
TRIGGER_INFO_OPEN = "<automation_trigger_info>";
TRIGGER_INFO_CLOSE = "</automation_trigger_info>";

}
