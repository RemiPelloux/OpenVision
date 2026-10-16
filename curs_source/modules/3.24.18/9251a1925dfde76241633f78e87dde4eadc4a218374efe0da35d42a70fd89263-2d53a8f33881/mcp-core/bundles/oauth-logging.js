import { init_log_metadata } from "./log-metadata.js";
import { init_oauth_log_events } from "./oauth-log-events.js";
var import_crypto, REDACTED_LOG_VALUE, SENSITIVE_ERROR_SUMMARY_KEY_PATTERN, EVENT_MESSAGES;
export { EVENT_MESSAGES, REDACTED_LOG_VALUE, SENSITIVE_ERROR_SUMMARY_KEY_PATTERN, import_crypto };
var __wakaru_init_oauth_logging_initialized = false;
export function init_oauth_logging() {
if (__wakaru_init_oauth_logging_initialized) return;
__wakaru_init_oauth_logging_initialized = true;
"use strict";
import_crypto = require("crypto");
init_log_metadata();
init_log_metadata();
init_oauth_log_events();
REDACTED_LOG_VALUE = "[REDACTED]";
SENSITIVE_ERROR_SUMMARY_KEY_PATTERN = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
EVENT_MESSAGES = {
    mcp_oauth_provider_initialized: "MCP OAuth provider initialized",
    mcp_oauth_tokens_loaded: "MCP OAuth tokens loaded",
    mcp_oauth_tokens_saved: "MCP OAuth tokens saved",
    mcp_oauth_callback_completion: "MCP OAuth callback exchange completed",
    mcp_oauth_client_info_loaded: "MCP OAuth client information loaded",
    mcp_oauth_client_info_saved: "MCP OAuth client information saved",
    mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared",
    mcp_oauth_refresh_error_release: "MCP OAuth refresh error released",
    mcp_oauth_state_transition: "MCP OAuth state transition",
    mcp_oauth_credentials_invalidated: "MCP OAuth credentials invalidated"
};

}
