import { init_dist } from "../../../../context/dist/index.js";
import { createKey } from "../../../../entry_exports.js";
var callingConversationStreamMetadataKey;
export { callingConversationStreamMetadataKey };
var __wakaru_init_calling_conversation_stream_metadata_initialized = false;
export function init_calling_conversation_stream_metadata() {
if (__wakaru_init_calling_conversation_stream_metadata_initialized) return;
__wakaru_init_calling_conversation_stream_metadata_initialized = true;
"use strict";
init_dist();
callingConversationStreamMetadataKey = createKey(Symbol.for("cursor.agentStreamMetadata"), void 0);

}
