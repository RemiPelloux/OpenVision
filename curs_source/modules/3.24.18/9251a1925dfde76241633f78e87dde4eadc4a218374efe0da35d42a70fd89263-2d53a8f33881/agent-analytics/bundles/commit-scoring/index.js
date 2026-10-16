import { init_agent_commit_hashes } from "./agent-commit-hashes.js";
import { init_change_id } from "./change-id.js";
import { init_command_filter } from "./command-filter.js";
import { init_diff_utils } from "./diff-utils.js";
import { init_format_detection } from "./format-detection.js";
import { init_generate_hashes } from "./generate-hashes.js";
import { init_git_repo_utils } from "./git-repo-utils.js";
import { init_hash_line } from "./hash-line.js";
import { init_line_normalizer } from "./line-normalizer.js";
import { init_murmurhash } from "./murmurhash.js";
import { init_normalize_ai_line_ranges } from "./normalize-ai-line-ranges.js";
import { init_score_all_ai_commit } from "./score-all-ai-commit.js";
import { init_score_commit } from "./score-commit.js";
import { init_types15 } from "./types.js";
var __wakaru_init_commit_scoring_initialized = false;
export function init_commit_scoring() {
if (__wakaru_init_commit_scoring_initialized) return;
__wakaru_init_commit_scoring_initialized = true;
"use strict";
init_agent_commit_hashes();
init_change_id();
init_command_filter();
init_diff_utils();
init_format_detection();
init_generate_hashes();
init_git_repo_utils();
init_hash_line();
init_line_normalizer();
init_murmurhash();
init_normalize_ai_line_ranges();
init_score_all_ai_commit();
init_score_commit();
init_types15();

}
