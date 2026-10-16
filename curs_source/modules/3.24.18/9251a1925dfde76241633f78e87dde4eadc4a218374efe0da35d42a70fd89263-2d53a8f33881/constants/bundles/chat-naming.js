var CHAT_NAME_MAX_CHARS, CHAT_NAME_USER_REQUEST_OPEN_TAG, CHAT_NAME_USER_REQUEST_CLOSE_TAG, NAME_OPEN_TAG, NAME_CLOSE_TAG, MAX_ACCEPTED_NAME_LENGTH, MAX_USER_REQUEST_CHARS, USER_REQUEST_EDGE_CHARS, TRAILING_PUNCTUATION, SENTENCE_CASE_GUIDANCE, SIDE_CHAT_NAME_REMINDER;
export { CHAT_NAME_MAX_CHARS, CHAT_NAME_USER_REQUEST_CLOSE_TAG, CHAT_NAME_USER_REQUEST_OPEN_TAG, MAX_ACCEPTED_NAME_LENGTH, MAX_USER_REQUEST_CHARS, NAME_CLOSE_TAG, NAME_OPEN_TAG, SENTENCE_CASE_GUIDANCE, SIDE_CHAT_NAME_REMINDER, TRAILING_PUNCTUATION, USER_REQUEST_EDGE_CHARS };
var __wakaru_init_chat_naming_initialized = false;
export function init_chat_naming() {
if (__wakaru_init_chat_naming_initialized) return;
__wakaru_init_chat_naming_initialized = true;
"use strict";
CHAT_NAME_MAX_CHARS = 30;
CHAT_NAME_USER_REQUEST_OPEN_TAG = "<user_request>";
CHAT_NAME_USER_REQUEST_CLOSE_TAG = "</user_request>";
NAME_OPEN_TAG = "<name>";
NAME_CLOSE_TAG = "</name>";
MAX_ACCEPTED_NAME_LENGTH = 80;
MAX_USER_REQUEST_CHARS = 2e3;
USER_REQUEST_EDGE_CHARS = 1e3;
TRAILING_PUNCTUATION = /[.!?]+$/;
SENTENCE_CASE_GUIDANCE = [
    'The name MUST be sentence case: capitalize only the first character and lowercase the rest, except for acronyms and proper nouns (e.g., "Upload preview bug", "PR review padding").',
    "",
    "Examples:",
    '- Query: "fix this bug" \u2192 Good: "Array mapping bug", Bad: "fix array mapping bug", Bad: "Fix array mapping bug"',
    '- Query: "debug authentication issue" \u2192 Good: "Authentication issue", Bad: "authentication issue", Bad: "Debug authentication"',
    '- Query: "adjust padding on PR review" \u2192 Good: "PR review padding", Bad: "pr review padding", Bad: "Adjust padding on PR review"'
].join("\n");
SIDE_CHAT_NAME_REMINDER = `Name this side chat now. First classify the ask as Question or Action. Use interrogative wording only for a Question; use a concise high-level topic or goal for an Action. Wrap only the name in ${NAME_OPEN_TAG} and ${NAME_CLOSE_TAG} tags.`;

}
