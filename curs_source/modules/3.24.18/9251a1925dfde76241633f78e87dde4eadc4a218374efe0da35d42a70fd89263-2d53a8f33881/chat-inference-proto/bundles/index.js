import { init_client5 } from "./client.js";
import { init_converters } from "./converters.js";
import { init_cursorModelProviderOptions } from "./cursorModelProviderOptions.js";
import { init_originating_flow } from "./originating-flow.js";
import { init_routing_reason } from "./routing-reason.js";
import { init_server2 } from "./server.js";
var __wakaru_init_dist37_initialized = false;
export function init_dist37() {
if (__wakaru_init_dist37_initialized) return;
__wakaru_init_dist37_initialized = true;
"use strict";
init_client5();
init_converters();
init_cursorModelProviderOptions();
init_originating_flow();
init_routing_reason();
init_server2();

}
