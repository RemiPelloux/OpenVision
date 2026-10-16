var MARKDOWN_SUFFIXES, MANAGED_CANVAS_REGEX2;
export { MANAGED_CANVAS_REGEX2, MARKDOWN_SUFFIXES };
var __wakaru_init_plan_mode_file_policy_initialized = false;
export function init_plan_mode_file_policy() {
if (__wakaru_init_plan_mode_file_policy_initialized) return;
__wakaru_init_plan_mode_file_policy_initialized = true;
"use strict";
MARKDOWN_SUFFIXES = [
    ".md",
    ".markdown",
    ".mdown",
    ".mkd",
    ".mkdn",
    ".mdx"
];
MANAGED_CANVAS_REGEX2 = /(?:^|\/)\.cursor\/projects\/[^/]+\/canvases\/[^/]+\.canvas\.tsx$/i;

}
