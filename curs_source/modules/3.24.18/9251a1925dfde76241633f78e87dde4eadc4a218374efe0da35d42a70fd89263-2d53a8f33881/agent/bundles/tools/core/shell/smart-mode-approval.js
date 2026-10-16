import { init_request_id } from "../../../utils/request-id.js";
var import_node_crypto41, SMART_MODE_APPROVAL_MISSING_CONVERSATION_REASON;
export { SMART_MODE_APPROVAL_MISSING_CONVERSATION_REASON, import_node_crypto41 };
var __wakaru_init_smart_mode_approval2_initialized = false;
export function init_smart_mode_approval2() {
if (__wakaru_init_smart_mode_approval2_initialized) return;
__wakaru_init_smart_mode_approval2_initialized = true;
"use strict";
import_node_crypto41 = require("node:crypto");
init_request_id();
SMART_MODE_APPROVAL_MISSING_CONVERSATION_REASON = "Auto-review shell approvals require a conversation id";

}
