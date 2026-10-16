import { init_network_start_transport } from "./network-start-transport.js";
import { init_dist12 } from "../../../context-rpc/dist/index.js";
var __wakaru_init_external_agent_transport_initialized = false;
export function init_external_agent_transport() {
if (__wakaru_init_external_agent_transport_initialized) return;
__wakaru_init_external_agent_transport_initialized = true;
"use strict";
init_dist12();
init_network_start_transport();

}
