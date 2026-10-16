import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var callerRoutingReasonKey;
export { callerRoutingReasonKey };
var __wakaru_init_routing_reason_initialized = false;
export function init_routing_reason() {
if (__wakaru_init_routing_reason_initialized) return;
__wakaru_init_routing_reason_initialized = true;
"use strict";
init_dist();
callerRoutingReasonKey = createKey(Symbol("callerRoutingReason"), void 0);

}
