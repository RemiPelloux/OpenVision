import { init_serde2 } from "../serde.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var DEFAULT_ROUTING_MAX_TOTAL_BYTES;
export { DEFAULT_ROUTING_MAX_TOTAL_BYTES };
var __wakaru_init_routing_conversation_initialized = false;
export function init_routing_conversation() {
if (__wakaru_init_routing_conversation_initialized) return;
__wakaru_init_routing_conversation_initialized = true;
"use strict";
init_dist27();
init_serde2();
DEFAULT_ROUTING_MAX_TOTAL_BYTES = 1024 * 1024;

}
