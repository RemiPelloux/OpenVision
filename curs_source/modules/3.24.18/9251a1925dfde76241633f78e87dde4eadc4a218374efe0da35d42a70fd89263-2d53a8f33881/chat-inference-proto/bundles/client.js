import { getSpanContextData } from "../../agent-exec/dist/remote.js";
import { automationIdKey, conversationGroupIdKey2, conversationIdKey2, init_context_keys, originatingFlowKey, parentAgentToolCallIdKey2, parentRequestIdKey2, requestIdKey2, requestedModelKey, rootParentRequestIdKey2, subagentTypeKey2 } from "./context-keys.js";
import { init_converters } from "./converters.js";
import { callerRoutingReasonKey, init_routing_reason } from "./routing-reason.js";
import { init_turn_unit_keys, turnUnitIdKey, turnUnitTypeKey } from "./turn-unit-keys.js";
import { BaseMiddleware, BasePromptBuilder, BasePromptExecutor } from "../../chat-inference/dist/base.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { compactionEpochKey, currentUserMessageSimulatedFieldsKey, summarizedMessageCountKey } from "../../chat-inference/dist/prompt-executor.js";
import { init_dist } from "../../context/dist/index.js";
import { classifyTokenLimitErrorFromMessage } from "../../mcp_sandbox_policy_exports.js";
import { InferenceMessageRole, init_inference_pb } from "../../proto/dist/generated/aiserver/v1/inference_pb.js";
import { assistantContentFromProto, assistantProviderOptionsFromProto, buildStreamRequest, preventUnhandledRejection, protoStreamErrorToError, stampImageDescriptionsOnMessage, withLineageTag, withReasoningLineageTags } from "../../tree_chunk_napi_exports.js";
var ProtoPromptBuilder, ProtoPromptExecutor, PreventUnhandledRejectionsMiddleware, ProtoPromptSession, ProtoSessionProvider;
export { PreventUnhandledRejectionsMiddleware, ProtoPromptBuilder, ProtoPromptExecutor, ProtoPromptSession, ProtoSessionProvider };
var __wakaru_init_client5_initialized = false;
export function init_client5() {
if (__wakaru_init_client5_initialized) return;
__wakaru_init_client5_initialized = true;
"use strict";
init_dist26();
init_dist();
init_inference_pb();
init_context_keys();
init_routing_reason();
init_turn_unit_keys();
init_converters();
ProtoPromptBuilder = class extends BasePromptBuilder {
    replaceMessage(previous, next) {
        const index = this.messages.indexOf(previous);
        if (index === -1) {
            return false;
        }
        this.messages[index] = next;
        return true;
    }
};
ProtoPromptExecutor = class extends BasePromptExecutor {
    constructor(builder, client, requestedModel, modelConfig, inferenceReason){
        super(builder);
        this.client = client;
        this.requestedModel = requestedModel;
        this.modelConfig = modelConfig;
        this.inferenceReason = inferenceReason;
        this.protoBuilder = builder;
    }
    applyImageDescriptions(requestMessages, info2) {
        const entriesByMessageIndex = new Map();
        for (const entry of info2.descriptions){
            if (entry.description.length === 0) {
                continue;
            }
            const entries = entriesByMessageIndex.get(entry.messageIndex) ?? [];
            entries.push(entry);
            entriesByMessageIndex.set(entry.messageIndex, entries);
        }
        for (const [messageIndex, entries] of entriesByMessageIndex){
            const original = requestMessages[messageIndex];
            if (original === void 0) {
                continue;
            }
            const updated = stampImageDescriptionsOnMessage(original, entries);
            if (updated === void 0) {
                continue;
            }
            this.replaceRequestMessage(requestMessages, messageIndex, updated);
        }
    }
    applyLineageTags(requestMessages, info2) {
        for (const { messageIndex, tag, reasoningTags } of info2.tags){
            const original = requestMessages[messageIndex];
            if (original === void 0 || original.role === "system" || tag.length === 0) {
                continue;
            }
            const providerOptions = withLineageTag(original.providerOptions, tag);
            this.replaceRequestMessage(requestMessages, messageIndex, {
                ...original,
                ...original.role === "assistant" && reasoningTags.length > 0 ? {
                    content: withReasoningLineageTags(original.content, reasoningTags)
                } : {},
                providerOptions
            });
        }
    }
    replaceRequestMessage(requestMessages, messageIndex, updated) {
        const original = requestMessages[messageIndex];
        if (original !== void 0 && this.protoBuilder.replaceMessage(original, updated)) {
            requestMessages[messageIndex] = updated;
        }
    }
    stream(ctx, invocationId, tools, options2) {
        const agentTools = [];
        const providerDefinedTools = [];
        for (const tool of tools ?? []){
            if ("type" in tool && tool.type === "provider-defined") {
                providerDefinedTools.push(tool);
            } else {
                agentTools.push(tool);
            }
        }
        const effectiveModelConfig = options2?.maxTokens !== void 0 ? {
            ...this.modelConfig,
            maxTokens: options2.maxTokens
        } : this.modelConfig;
        const requestedModel = ctx.get(requestedModelKey) ?? this.requestedModel;
        const requestMessages = this.builder.getMessages();
        const simulatedFields = ctx.get(currentUserMessageSimulatedFieldsKey)?.();
        const request3 = buildStreamRequest({
            messages: requestMessages,
            requestedModel,
            tools: agentTools,
            providerDefinedTools,
            modelConfig: effectiveModelConfig,
            invocationId,
            conversationId: ctx.get(conversationIdKey2),
            conversationGroupId: ctx.get(conversationGroupIdKey2),
            automationId: ctx.get(automationIdKey),
            originatingFlow: ctx.get(originatingFlowKey),
            routingReason: ctx.get(callerRoutingReasonKey),
            parentRequestId: ctx.get(parentRequestIdKey2),
            rootParentRequestId: ctx.get(rootParentRequestIdKey2),
            parentAgentToolCallId: ctx.get(parentAgentToolCallIdKey2),
            subagentType: ctx.get(subagentTypeKey2),
            turnUnitId: ctx.get(turnUnitIdKey),
            turnUnitType: ctx.get(turnUnitTypeKey),
            compactionEpoch: ctx.get(compactionEpochKey)?.(),
            summarizedMessageCount: ctx.get(summarizedMessageCountKey)?.(),
            isSimulatedMsg: simulatedFields?.isSimulatedMsg,
            simulatedMsgReason: simulatedFields?.simulatedMsgReason,
            inferenceReason: this.inferenceReason,
            acceptedUnadvertisedToolNames: options2.acceptedUnadvertisedToolNames
        });
        const requestId = ctx.get(requestIdKey2);
        const headers = {};
        if (requestId) {
            headers["x-request-id"] = requestId;
        }
        try {
            const spanContext = getSpanContextData(ctx);
            if (spanContext !== void 0) {
                const traceparent = `00-${spanContext.traceId}-${spanContext.spanId}-${spanContext.traceFlags.toString(16).padStart(2, "0")}`;
                headers["traceparent"] = traceparent;
                headers["backend-traceparent"] = traceparent;
            }
        } catch  {}
        const streamPromise = this.client.stream(request3, {
            signal: ctx.signal,
            headers
        });
        let resolveUsage;
        let rejectUsage;
        const usagePromise = new Promise((resolve36, reject2)=>{
            resolveUsage = resolve36;
            rejectUsage = reject2;
        });
        preventUnhandledRejection(usagePromise);
        let resolveExtendedUsage;
        let rejectExtendedUsage;
        const extendedUsagePromise = new Promise((resolve36, reject2)=>{
            resolveExtendedUsage = resolve36;
            rejectExtendedUsage = reject2;
        });
        preventUnhandledRejection(extendedUsagePromise);
        let resolveProviderMetadata;
        let rejectProviderMetadata;
        const providerMetadataPromise = new Promise((resolve36, reject2)=>{
            resolveProviderMetadata = resolve36;
            rejectProviderMetadata = reject2;
        });
        preventUnhandledRejection(providerMetadataPromise);
        let resolveInvocationId;
        let rejectInvocationId;
        const invocationIdPromise = new Promise((resolve36, reject2)=>{
            resolveInvocationId = resolve36;
            rejectInvocationId = reject2;
        });
        preventUnhandledRejection(invocationIdPromise);
        let resolveResponse;
        let rejectResponse;
        const responsePromise = new Promise((resolve36, reject2)=>{
            resolveResponse = resolve36;
            rejectResponse = reject2;
        });
        preventUnhandledRejection(responsePromise);
        const fullStream = this.createFullStream(streamPromise, {
            resolveUsage,
            rejectUsage,
            resolveExtendedUsage,
            rejectExtendedUsage,
            resolveProviderMetadata,
            rejectProviderMetadata,
            resolveInvocationId,
            rejectInvocationId,
            resolveResponse,
            rejectResponse
        }, ctx, requestMessages);
        return {
            fullStream,
            usage: usagePromise,
            extendedUsage: extendedUsagePromise,
            providerMetadata: providerMetadataPromise,
            invocationId: invocationIdPromise,
            response: responsePromise
        };
    }
    async *createFullStream(streamPromise, resolvers, _ctx, requestMessages) {
        let usageResolved = false;
        let extendedUsageResolved = false;
        let providerMetadataResolved = false;
        let invocationIdResolved = false;
        let responseResolved = false;
        let streamError;
        let finished2 = false;
        try {
            try {
                for await (const response of streamPromise){
                    const parts = this.protoResponseToStreamParts(response);
                    if (response.response.case === "usage") {
                        const usage = response.response.value;
                        resolvers.resolveUsage({
                            promptTokens: usage.promptTokens,
                            completionTokens: usage.completionTokens,
                            totalTokens: usage.totalTokens ?? 0
                        });
                        usageResolved = true;
                    } else if (response.response.case === "extendedUsage") {
                        const extUsage = response.response.value;
                        resolvers.resolveExtendedUsage({
                            inputTokens: extUsage.inputTokens,
                            outputTokens: extUsage.outputTokens,
                            cacheReadTokens: extUsage.cacheReadTokens,
                            cacheWriteTokens: extUsage.cacheWriteTokens,
                            reasoningTokens: extUsage.reasoningTokens,
                            maxTokens: extUsage.maxTokens
                        });
                        extendedUsageResolved = true;
                    } else if (response.response.case === "providerMetadata") {
                        const metadata = response.response.value.metadata?.toJson();
                        resolvers.resolveProviderMetadata(metadata);
                        providerMetadataResolved = true;
                    } else if (response.response.case === "invocationId") {
                        resolvers.resolveInvocationId(response.response.value.invocationId);
                        invocationIdResolved = true;
                    } else if (response.response.case === "responseInfo") {
                        const info2 = response.response.value;
                        resolvers.resolveResponse({
                            id: info2.id,
                            modelId: info2.model,
                            timestamp: new Date(Number(info2.createdAt)),
                            messages: this.protoMessagesToResponseMessages(info2),
                            error: info2.errorMessage ? classifyTokenLimitErrorFromMessage(info2.errorMessage) ?? new Error(info2.errorMessage) : void 0,
                            inferenceExtraData: info2.inferenceExtraData ? this.protoExtraDataToInferenceExtraData(info2.inferenceExtraData) : void 0,
                            supportsSelfSummary: info2.supportsSelfSummary,
                            earlyCompactionContextTokenThreshold: info2.earlyCompactionContextTokenThreshold
                        });
                        responseResolved = true;
                    } else if (response.response.case === "error") {
                        streamError = protoStreamErrorToError(response.response.value);
                    } else if (response.response.case === "imageDescriptions") {
                        this.applyImageDescriptions(requestMessages, response.response.value);
                    } else if (response.response.case === "lineageTags") {
                        this.applyLineageTags(requestMessages, response.response.value);
                    }
                    for (const part of parts){
                        yield part;
                    }
                }
            } catch (error3) {
                streamError = error3 instanceof Error ? error3 : new Error(String(error3));
            }
            finished2 = true;
        } finally{
            if (finished2 || streamError !== void 0) {
                if (!usageResolved) {
                    if (streamError) {
                        resolvers.rejectUsage(streamError);
                    } else {
                        resolvers.resolveUsage({
                            promptTokens: 0,
                            completionTokens: 0,
                            totalTokens: 0
                        });
                    }
                }
                if (!extendedUsageResolved) {
                    if (streamError) {
                        resolvers.rejectExtendedUsage(streamError);
                    } else {
                        resolvers.resolveExtendedUsage({
                            inputTokens: 0,
                            outputTokens: 0,
                            cacheReadTokens: 0,
                            cacheWriteTokens: 0,
                            maxTokens: 0
                        });
                    }
                }
                if (!providerMetadataResolved) {
                    if (streamError) {
                        resolvers.rejectProviderMetadata(streamError);
                    } else {
                        resolvers.resolveProviderMetadata(void 0);
                    }
                }
                if (!invocationIdResolved) {
                    if (streamError) {
                        resolvers.rejectInvocationId(streamError);
                    } else {
                        resolvers.resolveInvocationId(crypto.randomUUID());
                    }
                }
                if (!responseResolved) {
                    if (streamError) {
                        resolvers.rejectResponse(streamError);
                    } else {
                        resolvers.resolveResponse({
                            id: "",
                            modelId: "",
                            timestamp: new Date(),
                            messages: []
                        });
                    }
                }
            }
        }
        if (streamError) {
            throw streamError;
        }
    }
    protoResponseToStreamParts(response) {
        const parts = [];
        switch(response.response.case){
            case "textPart":
                {
                    const textPart = response.response.value;
                    if (textPart.isFinal) {
                        parts.push({
                            type: "finish",
                            finishReason: "stop",
                            usage: {
                                promptTokens: 0,
                                completionTokens: 0,
                                totalTokens: 0
                            }
                        });
                    } else {
                        parts.push({
                            type: "text-delta",
                            textDelta: textPart.text
                        });
                    }
                    break;
                }
            case "thinkingPart":
                {
                    const thinkingPart = response.response.value;
                    const cursor = {
                        ...thinkingPart.isAlreadySummarized === true ? {
                            isAlreadySummarizedThinking: true
                        } : {},
                        ...thinkingPart.modelName !== void 0 && thinkingPart.modelName.length > 0 ? {
                            modelName: thinkingPart.modelName
                        } : {}
                    };
                    const providerOptions = Object.keys(cursor).length > 0 ? {
                        providerOptions: {
                            cursor
                        }
                    } : {};
                    if (thinkingPart.redactedData !== void 0) {
                        parts.push({
                            type: "redacted-reasoning",
                            data: thinkingPart.redactedData,
                            ...providerOptions
                        });
                    } else if (thinkingPart.text.length > 0 || thinkingPart.signature === void 0) {
                        parts.push({
                            type: "reasoning",
                            textDelta: thinkingPart.text,
                            ...providerOptions
                        });
                    }
                    if (thinkingPart.signature !== void 0) {
                        parts.push({
                            type: "reasoning-signature",
                            signature: thinkingPart.signature
                        });
                    }
                    break;
                }
            case "toolCallPart":
                {
                    const toolCallPart = response.response.value;
                    if (toolCallPart.isComplete) {
                        let args;
                        try {
                            args = JSON.parse(toolCallPart.args);
                        } catch  {
                            args = {};
                        }
                        parts.push({
                            type: "tool-call",
                            toolCallId: toolCallPart.toolCallId,
                            toolName: toolCallPart.toolName,
                            args
                        });
                    } else if (toolCallPart.toolName) {
                        parts.push({
                            type: "tool-call-streaming-start",
                            toolCallId: toolCallPart.toolCallId,
                            toolName: toolCallPart.toolName
                        });
                    } else {
                        parts.push({
                            type: "tool-call-delta",
                            toolCallId: toolCallPart.toolCallId,
                            toolName: "",
                            argsTextDelta: toolCallPart.args
                        });
                    }
                    break;
                }
            case "error":
                {
                    parts.push({
                        type: "error",
                        error: protoStreamErrorToError(response.response.value)
                    });
                    break;
                }
            default:
                break;
        }
        return parts;
    }
    protoMessagesToResponseMessages(info2) {
        return info2.messages.map((msg)=>{
            const role = msg.role === InferenceMessageRole.ASSISTANT ? "assistant" : msg.role === InferenceMessageRole.TOOL ? "tool" : "assistant";
            if (role === "assistant") {
                const content = assistantContentFromProto(msg, msg.content, {
                    keepRawToolCallArgs: false
                });
                const providerOptions = withLineageTag(assistantProviderOptionsFromProto(msg), msg.lineageTag);
                return {
                    id: msg.id,
                    role: "assistant",
                    content,
                    ...providerOptions !== void 0 ? {
                        providerOptions
                    } : {}
                };
            } else {
                const providerOptions = withLineageTag(void 0, msg.lineageTag);
                return {
                    id: msg.id,
                    role: "tool",
                    ...providerOptions !== void 0 ? {
                        providerOptions
                    } : {},
                    content: msg.toolResult ? msg.toolResult.parts.map((part)=>({
                            type: "tool-result",
                            toolCallId: part.toolCallId,
                            toolName: part.toolName,
                            result: part.result?.toJson(),
                            isError: part.isError || void 0
                        })) : []
                };
            }
        });
    }
    protoExtraDataToInferenceExtraData(data) {
        return {
            tokenLogprobs: data.tokenLogprobs.length ? data.tokenLogprobs.map((lp)=>lp.values) : void 0,
            tokenIds: data.tokenIds.length ? data.tokenIds.map((ids)=>ids.values.map(Number)) : void 0,
            promptTokenIds: data.promptTokenIds.length ? data.promptTokenIds.map((ids)=>ids.values.map(Number)) : void 0,
            extraTokens: data.extraTokens.length ? data.extraTokens.map((ids)=>ids.values.map(Number)) : void 0,
            extraLogprobs: data.extraLogprobs.length ? data.extraLogprobs.map((lp)=>lp.values) : void 0,
            routingMatrix: data.routingMatrix.length ? data.routingMatrix.map((row)=>row.values.map((v2)=>v2 === "" ? null : v2)) : void 0
        };
    }
};
PreventUnhandledRejectionsMiddleware = class extends BaseMiddleware {
    stream(...args) {
        const result = super.stream(...args);
        for (const promise of [
            result.response,
            result.usage,
            result.extendedUsage,
            result.providerMetadata,
            result.invocationId
        ]){
            preventUnhandledRejection(promise);
        }
        return result;
    }
};
ProtoPromptSession = class {
    constructor(client, requestedModel, middleware, modelConfig, inferenceReason){
        this.client = client;
        this.requestedModel = requestedModel;
        this.middleware = middleware;
        this.modelConfig = modelConfig;
        this.inferenceReason = inferenceReason;
    }
    getExecutor(state) {
        const builder = new ProtoPromptBuilder(state);
        const executor = new ProtoPromptExecutor(builder, this.client, this.requestedModel, this.modelConfig, this.inferenceReason);
        return new PreventUnhandledRejectionsMiddleware(this.middleware ? this.middleware(executor) : executor);
    }
    getModelId() {
        return this.requestedModel.modelId;
    }
};
ProtoSessionProvider = class {
    constructor(client, requestedModel, modelConfig, inferenceReason){
        this.client = client;
        this.requestedModel = requestedModel;
        this.modelConfig = modelConfig;
        this.inferenceReason = inferenceReason;
    }
    getSession(middleware) {
        return new ProtoPromptSession(this.client, this.requestedModel, middleware, this.modelConfig, this.inferenceReason);
    }
    getProviderName() {
        return "proto";
    }
    getModelId() {
        return this.requestedModel.modelId;
    }
    getThinkingDetails() {
        return void 0;
    }
};

}
