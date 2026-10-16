import { init_pr_code_tour_markdown } from "./pr-code-tour-markdown.js";
var OVERVIEW_HEADING, MAX_LISTED_HEADINGS, FENCE_PATTERN3, SENTINEL_PATTERN, NON_PROSE_LINE_PATTERN;
export { FENCE_PATTERN3, MAX_LISTED_HEADINGS, NON_PROSE_LINE_PATTERN, OVERVIEW_HEADING, SENTINEL_PATTERN };
var __wakaru_init_pr_code_tour_overview_opener_initialized = false;
export function init_pr_code_tour_overview_opener() {
if (__wakaru_init_pr_code_tour_overview_opener_initialized) return;
__wakaru_init_pr_code_tour_overview_opener_initialized = true;
"use strict";
init_pr_code_tour_markdown();
OVERVIEW_HEADING = "## Overview";
MAX_LISTED_HEADINGS = 6;
FENCE_PATTERN3 = /^\s*(`{3,}|~{3,})/;
SENTINEL_PATTERN = /^\s*<!--\s*CODE TOUR (?:START|END)\s*-->\s*$/;
NON_PROSE_LINE_PATTERN = /^\s*(?:#|>|\||[-*+]\s|\d+[.)]\s|!\[|<(?!term\b))/i;

}
