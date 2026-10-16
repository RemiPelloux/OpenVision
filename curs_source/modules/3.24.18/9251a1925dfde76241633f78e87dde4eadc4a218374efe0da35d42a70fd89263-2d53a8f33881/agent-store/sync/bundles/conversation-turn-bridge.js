var TURN_LISTENERS;
export { TURN_LISTENERS };
var __wakaru_init_conversation_turn_bridge_initialized = false;
export function init_conversation_turn_bridge() {
if (__wakaru_init_conversation_turn_bridge_initialized) return;
__wakaru_init_conversation_turn_bridge_initialized = true;
"use strict";
TURN_LISTENERS = Symbol.for("cursor.agentStoreConversationTurnListeners");

}
