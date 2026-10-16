import { SLACK_SET_STATUS_MCP_TOOL_NAME, init_constants6 } from "../constants.js";
var STATUS_TOOL_NAME;
export { STATUS_TOOL_NAME };
var __wakaru_init_slack_semantic_status_reminder_initialized = false;
export function init_slack_semantic_status_reminder() {
if (__wakaru_init_slack_semantic_status_reminder_initialized) return;
__wakaru_init_slack_semantic_status_reminder_initialized = true;
"use strict";
init_constants6();
STATUS_TOOL_NAME = SLACK_SET_STATUS_MCP_TOOL_NAME.toLowerCase();

}
