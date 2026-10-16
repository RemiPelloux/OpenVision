import { init_core5 } from "../core.js";
var MCP_JSON_RPC_ERROR_CODE_REGEX, MCP_SERVER_NOT_FOUND_REGEX, MCP_AUTH_ERROR_FRAGMENTS, MCP_ENVIRONMENT_ERROR_FRAGMENTS, MCP_TIMEOUT_ERROR_FRAGMENTS, MCP_UNKNOWN_TOOL_NAME, MCP_UNKNOWN_TOOL_ERROR_PATTERNS;
export { MCP_AUTH_ERROR_FRAGMENTS, MCP_ENVIRONMENT_ERROR_FRAGMENTS, MCP_JSON_RPC_ERROR_CODE_REGEX, MCP_SERVER_NOT_FOUND_REGEX, MCP_TIMEOUT_ERROR_FRAGMENTS, MCP_UNKNOWN_TOOL_ERROR_PATTERNS, MCP_UNKNOWN_TOOL_NAME };
var __wakaru_init_mcp_error_classification_initialized = false;
export function init_mcp_error_classification() {
if (__wakaru_init_mcp_error_classification_initialized) return;
__wakaru_init_mcp_error_classification_initialized = true;
"use strict";
init_core5();
MCP_JSON_RPC_ERROR_CODE_REGEX = /MCP error\s*(-\d+):/i;
MCP_SERVER_NOT_FOUND_REGEX = /Server ".*" not found/i;
MCP_AUTH_ERROR_FRAGMENTS = [
    "requires authentication",
    "invalid refresh token",
    "invalid_grant",
    "unauthorized",
    "authentication failed",
    "oauth token exchange failed",
    "oauth token refresh failed",
    "authentication timed out",
    "authentication required",
    "not authenticated",
    "bad credentials",
    "credential error",
    "invalid_token",
    "invalid token",
    "token is expired",
    "token was revoked"
];
MCP_ENVIRONMENT_ERROR_FRAGMENTS = [
    "connection closed",
    "econnrefused",
    "econnreset",
    "enotfound",
    "ehostunreach",
    "enetunreach",
    "epipe",
    "enoent",
    "no local mcp resource executor is configured",
    "unsupported operation:",
    "unsupported exec:",
    "unsupported cursor exec request",
    "did not advertise",
    "failed to reinitialize mcp session",
    "not available through this gateway"
];
MCP_TIMEOUT_ERROR_FRAGMENTS = [
    "connection timed out after",
    "etimedout"
];
MCP_UNKNOWN_TOOL_NAME = "(?:\"[^\"]+\"|'[^']+'|`[^`]+`|(?!(?:arguments?|parameters?|params?|fields?|inputs?|schema|propert(?:y|ies)|names?|values?|options?)(?![a-z0-9_.:/-]))[a-z0-9_.:/-]+)";
MCP_UNKNOWN_TOOL_ERROR_PATTERNS = [
    new RegExp(`(?:^|:\\s*)tool\\s+${MCP_UNKNOWN_TOOL_NAME}\\s+(?:was\\s+)?not found\\b`, "i"),
    new RegExp(`(?:^|:\\s*)unknown tool(?:\\s*:\\s*|\\s+)${MCP_UNKNOWN_TOOL_NAME}`, "i"),
    new RegExp(`(?:^|:\\s*)tool\\s+${MCP_UNKNOWN_TOOL_NAME}\\s+(?:does not|doesn't) exist\\b`, "i"),
    /(?:^|:\s*)no such tool\b/i,
    /method not found:\s*tools\/call/i
];

}
