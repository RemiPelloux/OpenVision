import { init_agent_websocket_wire } from "./agent-websocket-wire.js";
var __wakaru_init_agent_websocket_initialized = false;
export function init_agent_websocket() {
if (__wakaru_init_agent_websocket_initialized) return;
__wakaru_init_agent_websocket_initialized = true;
"use strict";
init_agent_websocket_wire();

}
