var import_promises3, import_node_path11, DEFAULT_AGENT_DATA_TTL_MS, DEFAULT_AGENT_DATA_CLEANUP_INTERVAL_MS, DEFAULT_AGENT_DATA_ALLOWED_EXTENSIONS, DEFAULT_AGENT_DATA_SUBDIRS, AGENT_DATA_CLEANUP_ENTRIES_PER_YIELD;
export { AGENT_DATA_CLEANUP_ENTRIES_PER_YIELD, DEFAULT_AGENT_DATA_ALLOWED_EXTENSIONS, DEFAULT_AGENT_DATA_CLEANUP_INTERVAL_MS, DEFAULT_AGENT_DATA_SUBDIRS, DEFAULT_AGENT_DATA_TTL_MS, import_node_path11, import_promises3 };
var __wakaru_init_agent_data_cleanup_initialized = false;
export function init_agent_data_cleanup() {
if (__wakaru_init_agent_data_cleanup_initialized) return;
__wakaru_init_agent_data_cleanup_initialized = true;
"use strict";
import_promises3 = require("node:fs/promises");
import_node_path11 = require("node:path");
DEFAULT_AGENT_DATA_TTL_MS = 30 * 24 * 60 * 60 * 1e3;
DEFAULT_AGENT_DATA_CLEANUP_INTERVAL_MS = 24 * 60 * 60 * 1e3;
DEFAULT_AGENT_DATA_ALLOWED_EXTENSIONS = [
    ".txt",
    ".json",
    ".jsonl"
];
DEFAULT_AGENT_DATA_SUBDIRS = [
    "agent-transcripts",
    "agent-tools"
];
AGENT_DATA_CLEANUP_ENTRIES_PER_YIELD = 100;

}
