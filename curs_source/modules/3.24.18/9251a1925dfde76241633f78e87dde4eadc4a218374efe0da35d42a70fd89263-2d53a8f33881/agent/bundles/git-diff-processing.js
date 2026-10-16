import { init_diff_processing } from "./diff-processing.js";
import { init_dist2 } from "../../constants/dist/index.js";
var __wakaru_init_git_diff_processing_initialized = false;
export function init_git_diff_processing() {
if (__wakaru_init_git_diff_processing_initialized) return;
__wakaru_init_git_diff_processing_initialized = true;
"use strict";
init_dist2();
init_diff_processing();

}
