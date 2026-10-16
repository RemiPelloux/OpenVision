import { AgentWebSocketProtocolVersion, init_agent_websocket_pb } from "../../proto/dist/generated/agent/v1/agent_websocket_pb.js";
var AGENT_WEBSOCKET_SUBPROTOCOL, AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, AGENT_WEBSOCKET_PROTOCOL_VERSION, AGENT_WEBSOCKET_REUSE_HEADER, AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE;
export { AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, AGENT_WEBSOCKET_PROTOCOL_VERSION, AGENT_WEBSOCKET_REUSE_HEADER, AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE, AGENT_WEBSOCKET_SUBPROTOCOL };
var __wakaru_init_agent_websocket_wire_initialized = false;
export function init_agent_websocket_wire() {
if (__wakaru_init_agent_websocket_wire_initialized) return;
__wakaru_init_agent_websocket_wire_initialized = true;
"use strict";
init_agent_websocket_pb();
AGENT_WEBSOCKET_SUBPROTOCOL = "cursor-agent-v1";
AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL = "cursor-agent-preconnect-v1";
AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER = "x-cursor-agent-websocket-reservation-id";
AGENT_WEBSOCKET_PROTOCOL_VERSION = AgentWebSocketProtocolVersion.V1;
AGENT_WEBSOCKET_REUSE_HEADER = "x-cursor-agent-websocket-reuse";
AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE = "sequential-v1";

}
