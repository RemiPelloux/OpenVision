import { init_agent_skills_pb } from "../../../../proto/dist/generated/agent/v1/agent_skills_pb.js";
import { init_cursor_rules_pb } from "../../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
var import_node_crypto10, import_promises16, import_node_util5, log2, SNAPSHOT_VERSION, MAX_CATALOG_SNAPSHOT_BYTES;
export { MAX_CATALOG_SNAPSHOT_BYTES, SNAPSHOT_VERSION, import_node_crypto10, import_node_util5, import_promises16, log2 };
var __wakaru_init_agent_skills_catalog_cache_initialized = false;
export function init_agent_skills_catalog_cache() {
if (__wakaru_init_agent_skills_catalog_cache_initialized) return;
__wakaru_init_agent_skills_catalog_cache_initialized = true;
"use strict";
import_node_crypto10 = require("node:crypto");
import_promises16 = require("node:fs/promises");
import_node_util5 = require("node:util");
init_agent_skills_pb();
init_cursor_rules_pb();
log2 = (0, import_node_util5.debuglog)("agent-skills-catalog-cache");
SNAPSHOT_VERSION = 1;
MAX_CATALOG_SNAPSHOT_BYTES = 5 * 1024 * 1024;

}
