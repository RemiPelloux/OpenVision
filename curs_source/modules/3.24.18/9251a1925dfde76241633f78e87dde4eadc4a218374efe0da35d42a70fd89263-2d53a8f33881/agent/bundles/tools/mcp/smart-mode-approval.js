import { init_request_id } from "../../utils/request-id.js";
var import_node_crypto27, SMART_MODE_MCP_APPROVAL_MISSING_CONVERSATION_REASON;
export { SMART_MODE_MCP_APPROVAL_MISSING_CONVERSATION_REASON, import_node_crypto27 };
var __wakaru_init_smart_mode_approval_initialized = false;
export function init_smart_mode_approval() {
if (__wakaru_init_smart_mode_approval_initialized) return;
__wakaru_init_smart_mode_approval_initialized = true;
"use strict";
import_node_crypto27 = require("node:crypto");
init_request_id();
SMART_MODE_MCP_APPROVAL_MISSING_CONVERSATION_REASON = "Auto-review MCP approvals require a conversation id";

}
