import { init_component_discovery } from "./component-discovery.js";
import { init_git_remote_ref_resolve } from "./git-remote-ref-resolve.js";
import { init_git_sparse_clone } from "./git-sparse-clone.js";
import { init_git_subprocess_env } from "./git-subprocess-env.js";
import { init_git_url_parsing } from "./git-url-parsing.js";
import { init_loader } from "./loader.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_marketplace_cache } from "./marketplace-cache.js";
import { init_types5 } from "./types.js";
import { init_validate_subpath } from "./validate-subpath.js";
var __wakaru_init_parse_github_repo_for_plugins_locally_initialized = false;
export function init_parse_github_repo_for_plugins_locally() {
if (__wakaru_init_parse_github_repo_for_plugins_locally_initialized) return;
__wakaru_init_parse_github_repo_for_plugins_locally_initialized = true;
"use strict";
init_component_discovery();
init_git_remote_ref_resolve();
init_git_sparse_clone();
init_git_subprocess_env();
init_git_url_parsing();
init_loader();
init_manifest_parser();
init_marketplace_cache();
init_types5();
init_validate_subpath();

}
