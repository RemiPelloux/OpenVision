var AGENT_TRANSPORT_MODE_RESPONSE_HEADER, AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER;
export { AGENT_TRANSPORT_MODE_RESPONSE_HEADER, AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER };
var __wakaru_init_agent_transport_initialized = false;
export function init_agent_transport() {
if (__wakaru_init_agent_transport_initialized) return;
__wakaru_init_agent_transport_initialized = true;
"use strict";
AGENT_TRANSPORT_MODE_RESPONSE_HEADER = "x-cursor-agent-transport-mode";
AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER = "x-cursor-agent-ws-socket-reuse";

}
