var OAUTH_CREDENTIAL_ERROR_NAMES, OAUTH_CREDENTIAL_ERROR_CODES, OAUTH_EXPIRED_TOKEN_MESSAGE_PATTERN, OAUTH_REJECTED_TOKEN_MESSAGE_PATTERNS;
export { OAUTH_CREDENTIAL_ERROR_CODES, OAUTH_CREDENTIAL_ERROR_NAMES, OAUTH_EXPIRED_TOKEN_MESSAGE_PATTERN, OAUTH_REJECTED_TOKEN_MESSAGE_PATTERNS };
var __wakaru_init_oauth_errors_initialized = false;
export function init_oauth_errors() {
if (__wakaru_init_oauth_errors_initialized) return;
__wakaru_init_oauth_errors_initialized = true;
"use strict";
OAUTH_CREDENTIAL_ERROR_NAMES = new Set([
    "UnauthorizedError",
    "InvalidGrantError",
    "InvalidTokenError",
    "InvalidClientError",
    "UnauthorizedClientError"
]);
OAUTH_CREDENTIAL_ERROR_CODES = new Set([
    "invalid_grant",
    "invalid_token",
    "invalid_client",
    "unauthorized_client"
]);
OAUTH_EXPIRED_TOKEN_MESSAGE_PATTERN = /\btoken (?:has |is )?expired\b/i;
OAUTH_REJECTED_TOKEN_MESSAGE_PATTERNS = [
    OAUTH_EXPIRED_TOKEN_MESSAGE_PATTERN,
    /\btoken (?:was|is) invalid\b/i,
    /\binvalid (?:refresh[ _]?)?token\b/i,
    /\btoken (?:has been |was )?revoked\b/i
];

}
