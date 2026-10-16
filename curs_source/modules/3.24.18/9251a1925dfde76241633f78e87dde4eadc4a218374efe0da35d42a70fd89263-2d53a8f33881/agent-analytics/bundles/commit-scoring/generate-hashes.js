import { init_git_repo_utils } from "./git-repo-utils.js";
import { init_line_normalizer } from "./line-normalizer.js";
import { init_murmurhash } from "./murmurhash.js";
import { init_types15 } from "./types.js";
var __wakaru_init_generate_hashes_initialized = false;
export function init_generate_hashes() {
if (__wakaru_init_generate_hashes_initialized) return;
__wakaru_init_generate_hashes_initialized = true;
"use strict";
init_git_repo_utils();
init_line_normalizer();
init_murmurhash();
init_types15();

}
