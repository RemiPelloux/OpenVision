import { init_dist20 } from "../../local-exec/dist/index.js";
var import_promises56, import_node_path102, AGENT_DATA_CLEANUP_INITIAL_DELAY_MS;
export { AGENT_DATA_CLEANUP_INITIAL_DELAY_MS, import_node_path102, import_promises56 };
var __wakaru_init_agent_data_cleanup2_initialized = false;
export function init_agent_data_cleanup2() {
if (__wakaru_init_agent_data_cleanup2_initialized) return;
__wakaru_init_agent_data_cleanup2_initialized = true;
"use strict";
import_promises56 = require("node:fs/promises");
import_node_path102 = require("node:path");
init_dist20();
AGENT_DATA_CLEANUP_INITIAL_DELAY_MS = 3e4;

}
