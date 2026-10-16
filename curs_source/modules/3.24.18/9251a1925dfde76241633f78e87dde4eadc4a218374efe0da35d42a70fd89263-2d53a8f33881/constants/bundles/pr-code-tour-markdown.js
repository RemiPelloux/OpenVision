import { init_pr_code_tour_edit } from "./pr-code-tour-edit.js";
var FILE_DIFF_TAG_PATTERN, DIFF_REF_LINE_PATTERN, FENCE_PATTERN2, CODE_TOUR_STEP_HEADING_PATTERN, CODE_TOUR_BREAKDOWN_HEADING_PATTERN, LINKED_THUMBNAIL_PATTERN, MARKDOWN_IMAGE_PATTERN, MAX_SECTION_DESCRIPTION_CHARS, MAX_SECTION_SUMMARY_ANCHORS, MAX_SECTION_SUMMARY_MEDIA;
export { CODE_TOUR_BREAKDOWN_HEADING_PATTERN, CODE_TOUR_STEP_HEADING_PATTERN, DIFF_REF_LINE_PATTERN, FENCE_PATTERN2, FILE_DIFF_TAG_PATTERN, LINKED_THUMBNAIL_PATTERN, MARKDOWN_IMAGE_PATTERN, MAX_SECTION_DESCRIPTION_CHARS, MAX_SECTION_SUMMARY_ANCHORS, MAX_SECTION_SUMMARY_MEDIA };
var __wakaru_init_pr_code_tour_markdown_initialized = false;
export function init_pr_code_tour_markdown() {
if (__wakaru_init_pr_code_tour_markdown_initialized) return;
__wakaru_init_pr_code_tour_markdown_initialized = true;
"use strict";
init_pr_code_tour_edit();
FILE_DIFF_TAG_PATTERN = /<([A-Za-z][A-Za-z0-9_-]*)\s+([^>]*?)\s*\/?\s*>(?:\s*<\/\1\s*>)?/gi;
DIFF_REF_LINE_PATTERN = /^\s*([^\s:]+?)(?::(\d+)\s*(?:-|\u2013|\u2014|\.\.)\s*(\d+))?(?:\s+(.+))?\s*$/;
FENCE_PATTERN2 = /^(`{3,}|~{3,})/;
CODE_TOUR_STEP_HEADING_PATTERN = /^(#{2,6})\s+(\S.*)$/;
CODE_TOUR_BREAKDOWN_HEADING_PATTERN = /^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/;
LINKED_THUMBNAIL_PATTERN = /\[!\[([^\]]*)\]\(([^)\s]+)[^)]*\)\]\(([^)\s]+)[^)]*\)/g;
MARKDOWN_IMAGE_PATTERN = /!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g;
MAX_SECTION_DESCRIPTION_CHARS = 160;
MAX_SECTION_SUMMARY_ANCHORS = 6;
MAX_SECTION_SUMMARY_MEDIA = 4;

}
