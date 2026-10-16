import { init_cloud_manifest } from "./cloud-manifest.js";
import { init_git_remote_ref_resolve } from "./git-remote-ref-resolve.js";
import { init_git_sparse_clone } from "./git-sparse-clone.js";
import { init_git_subprocess_env } from "./git-subprocess-env.js";
import { init_git_url_parsing } from "./git-url-parsing.js";
import { init_inline_plugin_synthesizer } from "./inline-plugin-synthesizer.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_marketplace_cache } from "./marketplace-cache.js";
import { init_types5 } from "./types.js";
import { init_validate_subpath } from "./validate-subpath.js";
import { init_index_min } from "../../node_modules/.pnpm/tar@7.5.21/node_modules/tar/dist/esm/index.min.js";
var import_node_util4, log, MAX_UNCOMPRESSED_EXTRACT_BYTES, MAX_RELEASE_ASSET_BYTES;
export { MAX_RELEASE_ASSET_BYTES, MAX_UNCOMPRESSED_EXTRACT_BYTES, import_node_util4, log };
var __wakaru_init_backend_marketplace_client_initialized = false;
export function init_backend_marketplace_client() {
if (__wakaru_init_backend_marketplace_client_initialized) return;
__wakaru_init_backend_marketplace_client_initialized = true;
"use strict";
import_node_util4 = require("node:util");
init_index_min();
init_cloud_manifest();
init_git_remote_ref_resolve();
init_git_sparse_clone();
init_git_subprocess_env();
init_git_url_parsing();
init_inline_plugin_synthesizer();
init_manifest_parser();
init_marketplace_cache();
init_types5();
init_validate_subpath();
log = (0, import_node_util4.debuglog)("cursor-plugins");
MAX_UNCOMPRESSED_EXTRACT_BYTES = 500 * 1024 * 1024;
MAX_RELEASE_ASSET_BYTES = 100 * 1024 * 1024;

}
