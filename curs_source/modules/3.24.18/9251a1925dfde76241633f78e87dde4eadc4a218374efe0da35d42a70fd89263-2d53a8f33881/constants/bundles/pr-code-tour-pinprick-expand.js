var FENCE_PATTERN4, FILE_DIFF_TAG_PATTERN2, FILE_DIFF_ATTR_PATTERN;
export { FENCE_PATTERN4, FILE_DIFF_ATTR_PATTERN, FILE_DIFF_TAG_PATTERN2 };
var __wakaru_init_pr_code_tour_pinprick_expand_initialized = false;
export function init_pr_code_tour_pinprick_expand() {
if (__wakaru_init_pr_code_tour_pinprick_expand_initialized) return;
__wakaru_init_pr_code_tour_pinprick_expand_initialized = true;
"use strict";
FENCE_PATTERN4 = /^(`{3,}|~{3,})/;
FILE_DIFF_TAG_PATTERN2 = /<([A-Za-z][A-Za-z0-9_-]*)((?:\s+[A-Za-z][A-Za-z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(?:\/\s*>|>\s*<\/\1\s*>|>)/g;
FILE_DIFF_ATTR_PATTERN = /\s+([A-Za-z][A-Za-z0-9_-]*)\s*=\s*("[^"]*"|'[^']*')/g;

}
