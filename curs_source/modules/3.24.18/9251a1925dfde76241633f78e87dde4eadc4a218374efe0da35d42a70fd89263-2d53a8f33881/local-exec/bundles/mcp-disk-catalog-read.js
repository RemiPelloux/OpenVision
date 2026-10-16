import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_mcp5 } from "./mcp.js";
var import_promises28, import_node_path49;
export { import_node_path49, import_promises28 };
var __wakaru_init_mcp_disk_catalog_read_initialized = false;
export function init_mcp_disk_catalog_read() {
if (__wakaru_init_mcp_disk_catalog_read_initialized) return;
__wakaru_init_mcp_disk_catalog_read_initialized = true;
"use strict";
import_promises28 = require("node:fs/promises");
import_node_path49 = require("node:path");
init_dist8();
init_mcp5();

}
