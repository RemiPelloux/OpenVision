import { init_artifacts } from "./artifacts.js";
var TOUR_ARTIFACT_BLOCK_PREFIX, FENCE_PATTERN, ATX_HEADING_PATTERN;
export { ATX_HEADING_PATTERN, FENCE_PATTERN, TOUR_ARTIFACT_BLOCK_PREFIX };
var __wakaru_init_pr_code_tour_edit_initialized = false;
export function init_pr_code_tour_edit() {
if (__wakaru_init_pr_code_tour_edit_initialized) return;
__wakaru_init_pr_code_tour_edit_initialized = true;
"use strict";
init_artifacts();
TOUR_ARTIFACT_BLOCK_PREFIX = "<!-- cursor:tour-artifact";
FENCE_PATTERN = /^\s{0,3}(`{3,}|~{3,})/;
ATX_HEADING_PATTERN = /^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/;

}
