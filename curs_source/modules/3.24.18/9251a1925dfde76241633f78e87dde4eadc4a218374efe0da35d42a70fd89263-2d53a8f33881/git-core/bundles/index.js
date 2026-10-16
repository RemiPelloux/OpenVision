import { init_generated_file_detection } from "./generated-file-detection.js";
import { init_git_exec } from "./git-exec.js";
import { init_util3 } from "./util.js";
var __wakaru_init_dist11_initialized = false;
export function init_dist11() {
if (__wakaru_init_dist11_initialized) return;
__wakaru_init_dist11_initialized = true;
"use strict";
init_generated_file_detection();
init_git_exec();
init_util3();

}
