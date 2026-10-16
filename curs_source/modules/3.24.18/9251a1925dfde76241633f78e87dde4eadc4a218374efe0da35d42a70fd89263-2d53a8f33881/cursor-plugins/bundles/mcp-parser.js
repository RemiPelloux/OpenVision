import { init_env_expansion } from "./env-expansion.js";
import { init_manifest_parser } from "./manifest-parser.js";
import { init_plugin_variables } from "./plugin-variables.js";
import { init_schema_version } from "./schema-version.js";
import { init_types5 } from "./types.js";
import { init_main } from "../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js";
var PLUGIN_MCP_CONFIG_FILE_NAMES, MCP_NON_SERVER_METADATA_KEYS, NON_SERVER_METADATA_KEY_SET;
export { MCP_NON_SERVER_METADATA_KEYS, NON_SERVER_METADATA_KEY_SET, PLUGIN_MCP_CONFIG_FILE_NAMES };
var __wakaru_init_mcp_parser_initialized = false;
export function init_mcp_parser() {
if (__wakaru_init_mcp_parser_initialized) return;
__wakaru_init_mcp_parser_initialized = true;
"use strict";
init_main();
init_env_expansion();
init_manifest_parser();
init_plugin_variables();
init_schema_version();
init_types5();
PLUGIN_MCP_CONFIG_FILE_NAMES = [
    ".mcp.json",
    "mcp.json"
];
MCP_NON_SERVER_METADATA_KEYS = [
    "author",
    "owner",
    "source",
    "metadata"
];
NON_SERVER_METADATA_KEY_SET = new Set(MCP_NON_SERVER_METADATA_KEYS.map((key)=>key.toLowerCase()));

}
