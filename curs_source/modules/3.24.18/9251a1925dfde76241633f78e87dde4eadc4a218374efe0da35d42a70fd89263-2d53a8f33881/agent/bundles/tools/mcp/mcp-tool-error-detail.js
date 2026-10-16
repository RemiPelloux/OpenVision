import { init_common9 } from "../common.js";
import { init_core5 } from "../core.js";
var MCP_TOOL_ERROR_REASONS, MCP_TOOL_ERROR_MESSAGE_MAX_CHARS, EMAIL_OR_LOCAL_PART_RUN, TEXT_STATUS_PATTERN, TEXT_REASONS, MAX_PROVIDER_ERROR_CODE_CHARS;
export { EMAIL_OR_LOCAL_PART_RUN, MAX_PROVIDER_ERROR_CODE_CHARS, MCP_TOOL_ERROR_MESSAGE_MAX_CHARS, MCP_TOOL_ERROR_REASONS, TEXT_REASONS, TEXT_STATUS_PATTERN };
var __wakaru_init_mcp_tool_error_detail_initialized = false;
export function init_mcp_tool_error_detail() {
if (__wakaru_init_mcp_tool_error_detail_initialized) return;
__wakaru_init_mcp_tool_error_detail_initialized = true;
"use strict";
init_common9();
init_core5();
MCP_TOOL_ERROR_REASONS = [
    "unauthorized",
    "forbidden",
    "not_found",
    "invalid_argument",
    "conflict",
    "rate_limited",
    "timeout",
    "server_error",
    "network",
    "client_error",
    "rejected",
    "other"
];
MCP_TOOL_ERROR_MESSAGE_MAX_CHARS = 512;
EMAIL_OR_LOCAL_PART_RUN = /[\w.+-]+(@[\w-]+(?:\.[\w-]+)+)?/g;
TEXT_STATUS_PATTERN = /\(HTTP (\d{3})\)|\bHTTP\s+(\d{3})\b|\bstatus(?:_?code|\s+code)?"?\s*[:=\s]\s*"?(\d{3})\b|"code"\s*:\s*(\d{3})\b/i;
TEXT_REASONS = [
    [
        /timed out|timeout|deadline exceeded|DEADLINE_EXCEEDED/i,
        "timeout"
    ],
    [
        /rate.?limit|too many requests|\bquotas?\b|RESOURCE_EXHAUSTED/i,
        "rate_limited"
    ],
    [
        /requires authentication|unauthenticated|unauthorized|invalid_grant|invalid (?:credentials|token)|token (?:has )?expired/i,
        "unauthorized"
    ],
    [
        /permission denied|PERMISSION_DENIED|forbidden|insufficient (?:permission|scope)|access denied/i,
        "forbidden"
    ],
    [
        /not found|NOT_FOUND|does not exist|no such/i,
        "not_found"
    ],
    [
        /invalid argument|INVALID_ARGUMENT|invalid param|invalid value|bad request|failed precondition|FAILED_PRECONDITION|validation|MCP error -32602/i,
        "invalid_argument"
    ],
    [
        /already exists|ALREADY_EXISTS|conflict/i,
        "conflict"
    ],
    [
        /ECONNRESET|ECONNREFUSED|ENOTFOUND|EAI_AGAIN|socket hang up|fetch failed|network error/i,
        "network"
    ],
    [
        /internal (?:server )?error|service unavailable|bad gateway|backend error|MCP error -32603/i,
        "server_error"
    ],
    [
        /\bINTERNAL\b|\bUNAVAILABLE\b/,
        "server_error"
    ]
];
MAX_PROVIDER_ERROR_CODE_CHARS = 64;

}
