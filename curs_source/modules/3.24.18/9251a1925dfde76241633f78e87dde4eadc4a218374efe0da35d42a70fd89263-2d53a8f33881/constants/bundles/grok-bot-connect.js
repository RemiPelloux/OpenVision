import { MCP_OAUTH_GROK_WEB_CALLBACK_URL, MCP_OAUTH_X_APP_CALLBACK_URL, init_mcp } from "./mcp.js";
var GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL, GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL, GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES, GROK_BOT_SLACK_CONNECT_RETURN_URLS;
export { GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL, GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES, GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL, GROK_BOT_SLACK_CONNECT_RETURN_URLS };
var __wakaru_init_grok_bot_connect_initialized = false;
export function init_grok_bot_connect() {
if (__wakaru_init_grok_bot_connect_initialized) return;
__wakaru_init_grok_bot_connect_initialized = true;
"use strict";
init_mcp();
GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL = "sand://app/v1/github-connect-callback";
GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL = new Map([
    [
        GROK_BOT_DESKTOP_GITHUB_CONNECT_CALLBACK_URL,
        "cursor_grok_bot_github_v1"
    ],
    [
        MCP_OAUTH_GROK_WEB_CALLBACK_URL,
        "cursor_grok_web_github_v1"
    ],
    [
        MCP_OAUTH_X_APP_CALLBACK_URL,
        "cursor_x_app_github_v1"
    ]
]);
GROK_BOT_GITHUB_CONNECT_STATE_PREFIXES = new Set(GROK_BOT_GITHUB_CONNECT_STATE_PREFIX_BY_CALLBACK_URL.values());
GROK_BOT_SLACK_CONNECT_RETURN_URLS = new Set([
    MCP_OAUTH_GROK_WEB_CALLBACK_URL,
    MCP_OAUTH_X_APP_CALLBACK_URL
]);

}
