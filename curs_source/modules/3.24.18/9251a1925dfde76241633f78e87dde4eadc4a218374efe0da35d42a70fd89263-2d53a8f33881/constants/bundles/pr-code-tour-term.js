var CODE_TOUR_TERM_GLOSS_MAX_CHARS, TERM_OPEN_TAG_PATTERN, TERM_ATTR_PATTERN, TERM_CLOSE_TAG_PATTERN, SAFE_PATH_PATTERN, TERM_TAG_OR_CODE_SPAN_PATTERN, FENCE_MARKER_PATTERN, DEFINITION_KEYWORD_PATTERN, NEAR_USE_LINES;
export { CODE_TOUR_TERM_GLOSS_MAX_CHARS, DEFINITION_KEYWORD_PATTERN, FENCE_MARKER_PATTERN, NEAR_USE_LINES, SAFE_PATH_PATTERN, TERM_ATTR_PATTERN, TERM_CLOSE_TAG_PATTERN, TERM_OPEN_TAG_PATTERN, TERM_TAG_OR_CODE_SPAN_PATTERN };
var __wakaru_init_pr_code_tour_term_initialized = false;
export function init_pr_code_tour_term() {
if (__wakaru_init_pr_code_tour_term_initialized) return;
__wakaru_init_pr_code_tour_term_initialized = true;
"use strict";
CODE_TOUR_TERM_GLOSS_MAX_CHARS = 200;
TERM_OPEN_TAG_PATTERN = /^<term((?:\s+[A-Za-z][A-Za-z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*>$/;
TERM_ATTR_PATTERN = /\s+([A-Za-z][A-Za-z0-9_-]*)\s*=\s*("[^"]*"|'[^']*')/g;
TERM_CLOSE_TAG_PATTERN = /^<\/term\s*>$/;
SAFE_PATH_PATTERN = /^[A-Za-z0-9_@+.\-/[\]()]+$/;
TERM_TAG_OR_CODE_SPAN_PATTERN = /(<term(?:\s+[A-Za-z][A-Za-z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'))*\s*>|<\/term\s*>)|`+[^`]*`+/g;
FENCE_MARKER_PATTERN = /^\s{0,3}(`{3,}|~{3,})/;
DEFINITION_KEYWORD_PATTERN = /\b(?:function|class|interface|type|enum|const|let|var|def|fn|func|struct|trait|impl|module|namespace|message|service)\s+[*&]?$/;
NEAR_USE_LINES = 10;

}
