var SUPPORTED_SCHEMA_IDS, VERSION_SEGMENT_PATTERN;
export { SUPPORTED_SCHEMA_IDS, VERSION_SEGMENT_PATTERN };
var __wakaru_init_schema_version_initialized = false;
export function init_schema_version() {
if (__wakaru_init_schema_version_initialized) return;
__wakaru_init_schema_version_initialized = true;
"use strict";
SUPPORTED_SCHEMA_IDS = new Set([
    "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
    "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json"
]);
VERSION_SEGMENT_PATTERN = /^v?(\d+\.\d+(?:\.\d+)?)$/;

}
