import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var requestIdKey2, conversationIdKey2, conversationGroupIdKey2, automationIdKey, originatingFlowKey, requestModelNameKey2, parentRequestIdKey2, rootParentRequestIdKey2, parentAgentToolCallIdKey2, subagentTypeKey2, requestedModelKey;
export { automationIdKey, conversationGroupIdKey2, conversationIdKey2, originatingFlowKey, parentAgentToolCallIdKey2, parentRequestIdKey2, requestIdKey2, requestModelNameKey2, requestedModelKey, rootParentRequestIdKey2, subagentTypeKey2 };
var __wakaru_init_context_keys_initialized = false;
export function init_context_keys() {
if (__wakaru_init_context_keys_initialized) return;
__wakaru_init_context_keys_initialized = true;
"use strict";
init_dist();
requestIdKey2 = createKey(Symbol("requestId"), void 0);
conversationIdKey2 = createKey(Symbol("conversationId"), void 0);
conversationGroupIdKey2 = createKey(Symbol("conversationGroupId"), void 0);
automationIdKey = createKey(Symbol("automationId"), void 0);
originatingFlowKey = createKey(Symbol("originatingFlow"), void 0);
requestModelNameKey2 = createKey(Symbol("requestModelName"), void 0);
parentRequestIdKey2 = createKey(Symbol("parentRequestId"), void 0);
rootParentRequestIdKey2 = createKey(Symbol("rootParentRequestId"), void 0);
parentAgentToolCallIdKey2 = createKey(Symbol("parentAgentToolCallId"), void 0);
subagentTypeKey2 = createKey(Symbol("subagentType"), void 0);
requestedModelKey = createKey(Symbol("requestedModel"), void 0);

}
