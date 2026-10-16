import { init_claude_discovery } from "./claude-discovery.js";
import { init_cloud_manifest } from "./cloud-manifest.js";
import { init_component_discovery } from "./component-discovery.js";
import { init_cursor_marketplace } from "./cursor-marketplace.js";
import { init_identifiers } from "./identifiers.js";
import { init_importer } from "./importer.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_mcp_parser } from "./mcp-parser.js";
import { init_plugin_variables } from "./plugin-variables.js";
import { init_types5 } from "./types.js";
import { init_validate_subpath } from "./validate-subpath.js";
import { init_dist6 } from "../../hooks/dist/index.js";
import { init_gray_matter } from "../../utils/dist/gray-matter.js";
var import_promises15, import_node_path34, import_node_url2, MAX_FILE_SIZE;
export { MAX_FILE_SIZE, import_node_path34, import_node_url2, import_promises15 };
var __wakaru_init_loader_initialized = false;
export function init_loader() {
if (__wakaru_init_loader_initialized) return;
__wakaru_init_loader_initialized = true;
"use strict";
import_promises15 = require("node:fs/promises");
import_node_path34 = require("node:path");
import_node_url2 = require("node:url");
init_dist6();
init_gray_matter();
init_claude_discovery();
init_cloud_manifest();
init_component_discovery();
init_cursor_marketplace();
init_identifiers();
init_importer();
init_manifest_parser();
init_mcp_parser();
init_plugin_variables();
init_types5();
init_validate_subpath();
MAX_FILE_SIZE = 10 * 1024 * 1024;

}
