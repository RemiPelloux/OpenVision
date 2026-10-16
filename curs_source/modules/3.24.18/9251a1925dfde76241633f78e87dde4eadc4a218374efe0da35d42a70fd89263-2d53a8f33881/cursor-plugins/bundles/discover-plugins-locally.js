import { init_git_subprocess_env } from "./git-subprocess-env.js";
import { init_marketplace_cache } from "./marketplace-cache.js";
import { init_parse_github_repo_for_plugins_locally } from "./parse-github-repo-for-plugins-locally.js";
import { init_types5 } from "./types.js";
var __wakaru_init_discover_plugins_locally_initialized = false;
export function init_discover_plugins_locally() {
if (__wakaru_init_discover_plugins_locally_initialized) return;
__wakaru_init_discover_plugins_locally_initialized = true;
"use strict";
init_git_subprocess_env();
init_marketplace_cache();
init_parse_github_repo_for_plugins_locally();
init_types5();

}
