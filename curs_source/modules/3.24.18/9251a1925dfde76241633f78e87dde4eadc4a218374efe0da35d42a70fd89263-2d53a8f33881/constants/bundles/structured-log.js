var STRUCTURED_LOG_REPLAY_MAX_AGE_MS, STRUCTURED_LOG_FUTURE_TIMESTAMP_MAX_SKEW_MS, STRUCTURED_LOG_KEYS;
export { STRUCTURED_LOG_FUTURE_TIMESTAMP_MAX_SKEW_MS, STRUCTURED_LOG_KEYS, STRUCTURED_LOG_REPLAY_MAX_AGE_MS };
var __wakaru_init_structured_log_initialized = false;
export function init_structured_log() {
if (__wakaru_init_structured_log_initialized) return;
__wakaru_init_structured_log_initialized = true;
"use strict";
STRUCTURED_LOG_REPLAY_MAX_AGE_MS = 17 * 60 * 60 * 1e3;
STRUCTURED_LOG_FUTURE_TIMESTAMP_MAX_SKEW_MS = 2 * 60 * 60 * 1e3;
STRUCTURED_LOG_KEYS = [
    "composer",
    "canvas",
    "background_composer",
    "cloud_agents",
    "cloud_environment_template",
    "git",
    "auth",
    "github_auth",
    "transport",
    "ext_host_cursor",
    "layout",
    "code_review",
    "agent_exec",
    "agent_cli",
    "agent_acp",
    "sand",
    "sand_mobile",
    "extension_security",
    "mcp",
    "local_request_trace",
    "experiment_refresh_service",
    "slack",
    "update",
    "debugging_data",
    "agent_host_updater"
];

}
