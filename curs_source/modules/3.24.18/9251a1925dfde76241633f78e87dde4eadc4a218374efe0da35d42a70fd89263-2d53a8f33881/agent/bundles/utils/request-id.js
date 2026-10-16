import { init_invocation_id, invocationIdGeneratorKey } from "./invocation-id.js";
import { init_dist } from "../../../context/dist/index.js";
import { createKey } from "../../../entry_exports.js";
import { getInvocationIdFromRequestId } from "../../../mcp_sandbox_policy_exports.js";
var requestIdKey, parentRequestIdKey, rootParentRequestIdKey, parentAgentToolCallIdKey, subagentTypeKey, directMetaParentChildSubagentKey, requestModelNameKey, conversationGroupIdKey, conversationIdKey, secretScopeIdKey, bubbleRetryableTaskErrorsKey, getRequestId, getParentRequestId, getRootParentRequestId, getParentAgentToolCallId, getIsDirectMetaParentChildSubagentFromContext, createSubagentContext, getConversationGroupId, getConversationId, getSecretScopeId, getShouldBubbleRetryableTaskErrorsFromContext, clientVersionKey, CLIENT_VERSION_SEMVER_REGEX, CLIENT_VERSION_PRODUCT_PREFIXES, clientTypeKey, clientRemoteTypeKey, clientOsKey, CLIENT_OS_METRIC_VALUES, membershipTypeKey, MEMBERSHIP_TYPE_TAG_KEYS, isAutoKey, isPremiumKey, teamIdKey, isUserApiKeyKey, IS_DEV_SPAN_ATTRIBUTE, maxModeKey, autoRoutingReasonKey, conversationInitMsRecorderKey, firstStepSetupMsRecorderKey, cloudAgentPreAgentTurnPrepMsRecorderKey, cloudAgentTurnPrepGlueMsRecorderKey, cloudAgentTurnPrepPrewarmRecorderKey, cloudAgentTurnPrepRootPromptRestoreRecorderKey, ANYSPHERE_TEAM_ID;
export { ANYSPHERE_TEAM_ID, CLIENT_OS_METRIC_VALUES, CLIENT_VERSION_PRODUCT_PREFIXES, CLIENT_VERSION_SEMVER_REGEX, IS_DEV_SPAN_ATTRIBUTE, MEMBERSHIP_TYPE_TAG_KEYS, autoRoutingReasonKey, bubbleRetryableTaskErrorsKey, clientOsKey, clientRemoteTypeKey, clientTypeKey, clientVersionKey, cloudAgentPreAgentTurnPrepMsRecorderKey, cloudAgentTurnPrepGlueMsRecorderKey, cloudAgentTurnPrepPrewarmRecorderKey, cloudAgentTurnPrepRootPromptRestoreRecorderKey, conversationGroupIdKey, conversationIdKey, conversationInitMsRecorderKey, createSubagentContext, directMetaParentChildSubagentKey, firstStepSetupMsRecorderKey, getConversationGroupId, getConversationId, getIsDirectMetaParentChildSubagentFromContext, getParentAgentToolCallId, getParentRequestId, getRequestId, getRootParentRequestId, getSecretScopeId, getShouldBubbleRetryableTaskErrorsFromContext, isAutoKey, isPremiumKey, isUserApiKeyKey, maxModeKey, membershipTypeKey, parentAgentToolCallIdKey, parentRequestIdKey, requestIdKey, requestModelNameKey, rootParentRequestIdKey, secretScopeIdKey, subagentTypeKey, teamIdKey };
var __wakaru_init_request_id_initialized = false;
export function init_request_id() {
if (__wakaru_init_request_id_initialized) return;
__wakaru_init_request_id_initialized = true;
"use strict";
init_dist();
init_invocation_id();
requestIdKey = createKey(Symbol.for("@anysphere/agent/requestId"), void 0);
parentRequestIdKey = createKey(Symbol.for("@anysphere/agent/parentRequestId"), void 0);
rootParentRequestIdKey = createKey(Symbol.for("@anysphere/agent/rootParentRequestId"), void 0);
parentAgentToolCallIdKey = createKey(Symbol("parentAgentToolCallId"), void 0);
subagentTypeKey = createKey(Symbol("subagentType"), void 0);
directMetaParentChildSubagentKey = createKey(Symbol("directMetaParentChildSubagent"), void 0);
requestModelNameKey = createKey(Symbol("requestModelName"), void 0);
conversationGroupIdKey = createKey(Symbol("conversationGroupId"), void 0);
conversationIdKey = createKey(Symbol("conversationId"), void 0);
secretScopeIdKey = createKey(Symbol("secretScopeId"), void 0);
bubbleRetryableTaskErrorsKey = createKey(Symbol("bubbleRetryableTaskErrors"), void 0);
getRequestId = (ctx)=>{
    return ctx.get(requestIdKey);
};
getParentRequestId = (ctx)=>{
    return ctx.get(parentRequestIdKey);
};
getRootParentRequestId = (ctx)=>{
    return ctx.get(rootParentRequestIdKey);
};
getParentAgentToolCallId = (ctx)=>{
    return ctx.get(parentAgentToolCallIdKey);
};
getIsDirectMetaParentChildSubagentFromContext = (ctx)=>{
    return ctx.get(directMetaParentChildSubagentKey) === true;
};
createSubagentContext = (ctx, subagentRequestId, parentAgentToolCallId)=>{
    const parentRequestId = getRequestId(ctx);
    const rootParentRequestId = getRootParentRequestId(ctx) ?? parentRequestId;
    return ctx.with(requestIdKey, subagentRequestId).with(invocationIdGeneratorKey, ()=>getInvocationIdFromRequestId(subagentRequestId)).with(parentRequestIdKey, parentRequestId).with(rootParentRequestIdKey, rootParentRequestId).with(directMetaParentChildSubagentKey, void 0).with(parentAgentToolCallIdKey, parentAgentToolCallId).with(firstStepSetupMsRecorderKey, void 0);
};
getConversationGroupId = (ctx)=>{
    return ctx.get(conversationGroupIdKey) ?? ctx.get(conversationIdKey);
};
getConversationId = (ctx)=>{
    return ctx.get(conversationIdKey);
};
getSecretScopeId = (ctx)=>{
    return ctx.get(secretScopeIdKey);
};
getShouldBubbleRetryableTaskErrorsFromContext = (ctx)=>{
    return ctx.get(bubbleRetryableTaskErrorsKey) === true;
};
clientVersionKey = createKey(Symbol("clientVersion"), void 0);
CLIENT_VERSION_SEMVER_REGEX = /^v?\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
CLIENT_VERSION_PRODUCT_PREFIXES = [
    "sdk-python-",
    "sdk-",
    "agentkit-"
];
clientTypeKey = createKey(Symbol("clientType"), void 0);
clientRemoteTypeKey = createKey(Symbol("clientRemoteType"), void 0);
clientOsKey = createKey(Symbol("clientOs"), void 0);
CLIENT_OS_METRIC_VALUES = new Set([
    "darwin",
    "win32",
    "linux",
    "ios",
    "android"
]);
membershipTypeKey = createKey(Symbol("membershipType"), void 0);
MEMBERSHIP_TYPE_TAG_KEYS = {
    MEMBERSHIPTYPE: "membershiptype"
};
isAutoKey = createKey(Symbol("isAuto"), void 0);
isPremiumKey = createKey(Symbol("isPremium"), void 0);
teamIdKey = createKey(Symbol("teamId"), void 0);
isUserApiKeyKey = createKey(Symbol("isUserApiKey"), void 0);
IS_DEV_SPAN_ATTRIBUTE = "user.is_dev";
maxModeKey = createKey(Symbol("maxMode"), void 0);
autoRoutingReasonKey = createKey(Symbol("autoRoutingReason"), void 0);
conversationInitMsRecorderKey = createKey(Symbol("conversationInitMsRecorder"), void 0);
firstStepSetupMsRecorderKey = createKey(Symbol("firstStepSetupMsRecorder"), void 0);
cloudAgentPreAgentTurnPrepMsRecorderKey = createKey(Symbol("cloudAgentPreAgentTurnPrepMsRecorder"), void 0);
cloudAgentTurnPrepGlueMsRecorderKey = createKey(Symbol("cloudAgentTurnPrepGlueMsRecorder"), void 0);
cloudAgentTurnPrepPrewarmRecorderKey = createKey(Symbol("cloudAgentTurnPrepPrewarmRecorder"), void 0);
cloudAgentTurnPrepRootPromptRestoreRecorderKey = createKey(Symbol("cloudAgentTurnPrepRootPromptRestoreRecorder"), void 0);
ANYSPHERE_TEAM_ID = 1;

}
