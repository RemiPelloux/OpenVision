import { init_dist3 } from "../../../../utils/dist/index.js";
var import_node_child_process5, execFileUtf8, sandboxMetadataMap;
export { execFileUtf8, import_node_child_process5, sandboxMetadataMap };
var __wakaru_init_seatbelt_initialized = false;
export function init_seatbelt() {
if (__wakaru_init_seatbelt_initialized) return;
__wakaru_init_seatbelt_initialized = true;
"use strict";
import_node_child_process5 = require("node:child_process");
init_dist3();
execFileUtf8 = import_node_child_process5.execFile;
sandboxMetadataMap = new WeakMap();

}
