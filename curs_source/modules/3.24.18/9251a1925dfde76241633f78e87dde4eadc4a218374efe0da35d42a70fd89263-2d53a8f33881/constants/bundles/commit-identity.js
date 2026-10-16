var CURSOR_AGENT_EMAIL, CURSOR_GIT_AUTHOR_NAME, CURSOR_COAUTHOR_NAME, CURSOR_COAUTHORED_BY_TRAILER, LEGACY_MADE_WITH_TRAILER, CURSOR_COAUTHOR_EMAILS;
export { CURSOR_AGENT_EMAIL, CURSOR_COAUTHORED_BY_TRAILER, CURSOR_COAUTHOR_EMAILS, CURSOR_COAUTHOR_NAME, CURSOR_GIT_AUTHOR_NAME, LEGACY_MADE_WITH_TRAILER };
var __wakaru_init_commit_identity_initialized = false;
export function init_commit_identity() {
if (__wakaru_init_commit_identity_initialized) return;
__wakaru_init_commit_identity_initialized = true;
"use strict";
CURSOR_AGENT_EMAIL = "cursoragent@cursor.com";
CURSOR_GIT_AUTHOR_NAME = "Cursor Agent";
CURSOR_COAUTHOR_NAME = "Cursor";
CURSOR_COAUTHORED_BY_TRAILER = `Co-authored-by: ${CURSOR_COAUTHOR_NAME} <${CURSOR_AGENT_EMAIL}>`;
LEGACY_MADE_WITH_TRAILER = "Made-with: Cursor";
CURSOR_COAUTHOR_EMAILS = [
    CURSOR_AGENT_EMAIL,
    "noreply@cursor.com"
];

}
