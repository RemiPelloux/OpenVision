import { init_agent_pb } from "../proto/dist/generated/agent/v1/agent_pb.js";
var BLOB_ID_BYTE_LENGTH;
export { BLOB_ID_BYTE_LENGTH };
var __wakaru_init_hydrate_attach_conversation_state_initialized = false;
export function init_hydrate_attach_conversation_state() {
if (__wakaru_init_hydrate_attach_conversation_state_initialized) return;
__wakaru_init_hydrate_attach_conversation_state_initialized = true;
"use strict";
init_agent_pb();
BLOB_ID_BYTE_LENGTH = 32;

}
