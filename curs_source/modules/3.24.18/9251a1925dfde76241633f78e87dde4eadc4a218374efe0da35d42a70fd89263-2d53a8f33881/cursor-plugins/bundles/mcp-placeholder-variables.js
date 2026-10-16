import { init_secret_variable_names } from "./secret-variable-names.js";
var PLACEHOLDER, LOADER_PROVIDED, ACRONYMS;
export { ACRONYMS, LOADER_PROVIDED, PLACEHOLDER };
var __wakaru_init_mcp_placeholder_variables_initialized = false;
export function init_mcp_placeholder_variables() {
if (__wakaru_init_mcp_placeholder_variables_initialized) return;
__wakaru_init_mcp_placeholder_variables_initialized = true;
"use strict";
init_secret_variable_names();
PLACEHOLDER = /\$\{(?:env:([A-Z][A-Z0-9_]*)|([A-Z][A-Z0-9_]*)(?::-([^}]*))?)\}/g;
LOADER_PROVIDED = new Set([
    "CURSOR_PLUGIN_ROOT",
    "CLAUDE_PLUGIN_ROOT"
]);
ACRONYMS = new Set([
    "api",
    "aws",
    "db",
    "dd",
    "gcp",
    "http",
    "https",
    "id",
    "mcp",
    "ssl",
    "tls",
    "uri",
    "url"
]);

}
