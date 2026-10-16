import { init_change_id } from "./change-id.js";
import { init_git_repo_utils } from "./git-repo-utils.js";
import { init_line_normalizer } from "./line-normalizer.js";
import { init_murmurhash } from "./murmurhash.js";
import { init_types15 } from "./types.js";
var __wakaru_init_score_commit_initialized = false;
export function init_score_commit() {
if (__wakaru_init_score_commit_initialized) return;
__wakaru_init_score_commit_initialized = true;
"use strict";
init_change_id();
init_git_repo_utils();
init_line_normalizer();
init_murmurhash();
init_types15();

}
