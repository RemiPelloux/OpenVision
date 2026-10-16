import { init_loader } from "./loader.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_marketplace_cache } from "./marketplace-cache.js";
var import_node_os11, import_node_path35, DEFAULT_CLAUDE_MARKETPLACES_DIR;
export { DEFAULT_CLAUDE_MARKETPLACES_DIR, import_node_os11, import_node_path35 };
var __wakaru_init_claude_marketplace_import_initialized = false;
export function init_claude_marketplace_import() {
if (__wakaru_init_claude_marketplace_import_initialized) return;
__wakaru_init_claude_marketplace_import_initialized = true;
"use strict";
import_node_os11 = require("node:os");
import_node_path35 = require("node:path");
init_loader();
init_manifest_parser();
init_marketplace_cache();
DEFAULT_CLAUDE_MARKETPLACES_DIR = (0, import_node_path35.join)((0, import_node_os11.homedir)(), ".claude", "plugins", "marketplaces");

}
