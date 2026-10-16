import { init_clock } from "../clock.js";
import { init_host_services } from "./host-services.js";
import { init_routing_adapter } from "./routing-adapter.js";
import { init_loader4 } from "../../../../tree_chunk_napi_exports.js";
var import_node_v82, VALIDATE_ONLY_POLL_INTERVAL_MS, VALIDATE_ONLY_POLL_INTERVAL_BOUNDS_MS, VALIDATE_ONLY_FIRST_POLL_DELAY_MS, noTransport;
export { VALIDATE_ONLY_FIRST_POLL_DELAY_MS, VALIDATE_ONLY_POLL_INTERVAL_BOUNDS_MS, VALIDATE_ONLY_POLL_INTERVAL_MS, import_node_v82, noTransport };
var __wakaru_init_validate_only_initialized = false;
export function init_validate_only() {
if (__wakaru_init_validate_only_initialized) return;
__wakaru_init_validate_only_initialized = true;
"use strict";
import_node_v82 = require("node:v8");
init_clock();
init_host_services();
init_loader4();
init_routing_adapter();
VALIDATE_ONLY_POLL_INTERVAL_MS = 5 * 6e4;
VALIDATE_ONLY_POLL_INTERVAL_BOUNDS_MS = {
    min: 6e4,
    max: 24 * 60 * 6e4
};
VALIDATE_ONLY_FIRST_POLL_DELAY_MS = 3e4;
noTransport = {
    unary: ()=>Promise.reject(new Error("validate-only agent harness: no turn runs here")),
    stream: ()=>Promise.reject(new Error("validate-only agent harness: no turn runs here"))
};

}
