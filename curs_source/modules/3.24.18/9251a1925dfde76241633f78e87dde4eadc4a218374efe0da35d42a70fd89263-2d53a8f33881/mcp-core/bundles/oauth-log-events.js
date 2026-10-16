import { init_log_metadata } from "./log-metadata.js";
import { init_mcp_oauth_keys } from "./oauth/mcp-oauth-keys.js";
var __wakaru_init_oauth_log_events_initialized = false;
export function init_oauth_log_events() {
if (__wakaru_init_oauth_log_events_initialized) return;
__wakaru_init_oauth_log_events_initialized = true;
"use strict";
init_log_metadata();
init_mcp_oauth_keys();

}
