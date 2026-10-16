import { init_NonRecordingSpan } from "./NonRecordingSpan.js";
import { init_invalid_span_constants } from "./invalid-span-constants.js";
var VALID_TRACEID_REGEX, VALID_SPANID_REGEX;
export { VALID_SPANID_REGEX, VALID_TRACEID_REGEX };
var __wakaru_init_spancontext_utils_initialized = false;
export function init_spancontext_utils() {
if (__wakaru_init_spancontext_utils_initialized) return;
__wakaru_init_spancontext_utils_initialized = true;
init_invalid_span_constants();
init_NonRecordingSpan();
VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;

}
