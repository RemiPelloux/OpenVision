import { CheckpointController, init_checkpoint_controller } from "./checkpoint-controller.js";
import { init_common2 } from "./common.js";
import { AgentError, CancelledError, MaxStepsUnsupportedError, NonRetriableError, init_errors2 } from "./errors.js";
import { ClientExecController, getSpan2, init_exec_controller } from "./exec-controller.js";
import { ClientInteractionController, init_interaction_controller } from "./interaction-controller.js";
import { init_llm_gateway_credential } from "./llm-gateway-credential.js";
import { init_mcp_tools_proto } from "./mcp-tools-proto.js";
import { TransientRequestContextBlobStore, init_request_context_blob } from "./request-context-blob.js";
import { init_request_context_outcome } from "./request-context-outcome.js";
import { init_retry_policy } from "./retry-policy.js";
import { init_soft_cancel_linger } from "./soft-cancel-linger.js";
import { HandlerTracker, StallDetector, init_stall_detector } from "./stall-detector.js";
import { init_transport_failure_kind } from "./transport-failure-kind.js";
import { init_turn_runner } from "./turn-runner.js";
import { init_dist7 } from "../../agent-core/dist/index.js";
import { InteractionQueryIdAllocator } from "../../agent-core/dist/interaction-query-ids.js";
import { SimpleControlledExecManager } from "../../agent-exec/dist/controlled.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { shellStreamExecutorResource } from "../../agent-exec/dist/shell-stream.js";
import { ControlledKvManager, createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { ACTIVE_OTEL_SPAN_ALS, INHERITABLE_SPAN_ATTRIBUTES_KEY } from "../../context/dist/otel.js";
import { abortOriginFromSources, buildInferenceProxyJwtHeaders, buildLineageRequestHeaders, classifyError, classifyForRetry, createGuardedListener, createWritableIterable2, freshUuid, getConnectErrorDiagnostics, handleShellStream, isStreamLoopKind, isTransportFailureKind, lingerForServerDrainOnSoftCancel, mcpToolDefinitionsToProto, mintClientLlmGatewayCredential, prepareRequestContextForSend, relayedAttemptFailure, resolveAgentRetryPolicy, resolveStallDetectorTimeouts, runTurnWithRetries, splitStream, transportLineFailureFields, withObservedQueryIds } from "../../dist_exports.js";
import { createKey } from "../../entry_exports.js";
import { isMessage } from "../../external_exports.js";
import { context } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/context-api.js";
import { trace } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace-api.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_protocol } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/protocol/index.js";
import { AgentRunRequest, ConversationAction, UserMessageAction, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { AgentClientMessage, ClientHeartbeat, init_agent_service_pb } from "../../proto/dist/generated/agent/v1/agent_service_pb.js";
import { ExecClientControlMessage, ExecClientMessage, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { ShellArgs, ShellCommandParsingResult, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { MapWritable } from "../../utils/dist/writable-iterable.js";
function getAbortReasonInfo(reason) {
    if (reason instanceof Error) {
        return {
            abortReasonType: "error",
            abortReasonName: reason.name,
            abortReasonMessage: reason.message
        };
    }
    if (typeof reason === "string") {
        return {
            abortReasonType: "string",
            abortReasonMessage: reason
        };
    }
    if (reason === void 0) {
        return {
            abortReasonType: "undefined"
        };
    }
    return {
        abortReasonType: typeof reason
    };
}
function withInheritableAttribute(ctx, key, value) {
    const existing = ctx.get(INHERITABLE_SPAN_ATTRIBUTES_KEY);
    const span = getSpan2(ctx);
    if (span) {
        span.setAttribute(key, value);
    }
    return ctx.with(INHERITABLE_SPAN_ATTRIBUTES_KEY, {
        ...existing,
        [key]: value
    });
}
function activeOtelSpanAls() {
    return globalThis[ACTIVE_OTEL_SPAN_ALS];
}
function runWithActiveOtelSpan(span, fn) {
    const bound = ()=>context.with(trace.setSpan(context.active(), span), fn);
    const als = activeOtelSpanAls();
    return als === void 0 ? bound() : als.run(span, bound);
}
var __addDisposableResource7, __disposeResources7, agentStreamMetadata, abortLogger, retryLogger, requestContextBlobLogger, parseAbortReasonInfo, getMessageTypeLabelForStallDetector, AgentConnectClient;
export { AgentConnectClient, __addDisposableResource7, __disposeResources7, abortLogger, activeOtelSpanAls, agentStreamMetadata, getAbortReasonInfo, getMessageTypeLabelForStallDetector, parseAbortReasonInfo, requestContextBlobLogger, retryLogger, runWithActiveOtelSpan, withInheritableAttribute };
var __wakaru_init_connect_initialized = false;
export function init_connect() {
if (__wakaru_init_connect_initialized) return;
__wakaru_init_connect_initialized = true;
"use strict";
init_dist7();
init_dist8();
init_dist5();
init_dist();
init_agent_pb();
init_agent_service_pb();
init_exec_pb();
init_shell_exec_pb();
init_dist3();
init_esm2();
init_esm3();
init_protocol();
init_checkpoint_controller();
init_common2();
init_errors2();
init_exec_controller();
init_interaction_controller();
init_llm_gateway_credential();
init_request_context_blob();
init_request_context_outcome();
init_retry_policy();
init_mcp_tools_proto();
init_soft_cancel_linger();
init_stall_detector();
init_transport_failure_kind();
init_turn_runner();
init_turn_runner();
__addDisposableResource7 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources7 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
agentStreamMetadata = createKey(Symbol("agentStreamMetadata"), void 0);
abortLogger = createLogger("@anysphere/agent-client:abort");
retryLogger = createLogger("@anysphere/agent-client:retry");
requestContextBlobLogger = createLogger("@anysphere/agent-client:request-context-blob");
parseAbortReasonInfo = (metadata)=>{
    const abortReasonName = typeof metadata?.abortReasonName === "string" ? metadata.abortReasonName : void 0;
    const abortReasonMessage = typeof metadata?.abortReasonMessage === "string" ? metadata.abortReasonMessage : void 0;
    if (abortReasonName === void 0 && abortReasonMessage === void 0) {
        return void 0;
    }
    return {
        abortReasonName,
        abortReasonMessage
    };
};
getMessageTypeLabelForStallDetector = (message)=>{
    const parts = [];
    parts.push(message.message.case);
    switch(message.message.case){
        case "conversationAction":
            parts.push(message.message.value.action.case);
            break;
        case "execClientMessage":
            parts.push(message.message.value.message.case);
            break;
        case "execClientControlMessage":
            parts.push(message.message.value.message.case);
            break;
        case "kvClientMessage":
            parts.push(message.message.value.message.case);
            break;
        case "interactionResponse":
            parts.push(message.message.value.result.case);
            break;
        case "interactionUpdate":
            parts.push(message.message.value.message.case);
            switch(message.message.value.message.case){
                case "partialToolCall":
                case "toolCallCompleted":
                case "toolCallStarted":
                    parts.push(message.message.value.message.value.toolCall?.tool.case);
                    break;
                case "toolCallDelta":
                    parts.push(message.message.value.message.value.toolCallDelta?.delta.case);
                    break;
            }
            break;
        case "interactionQuery":
            parts.push(message.message.value.query.case);
            break;
        case "execServerMessage":
            parts.push(message.message.value.message.case);
            break;
        case "execServerControlMessage":
            parts.push(message.message.value.message.case);
            break;
    }
    return parts.filter((p2)=>p2 !== void 0).join(":");
};
AgentConnectClient = class {
    constructor(client, endpointUrl, options2 = {}){
        this.client = client;
        this.endpointUrl = endpointUrl;
        this.options = options2;
        this.hasStartedStream = false;
    }
    async run(ctx, conversationState, action, modelDetails, interactionListener, resources, blobStore, conversationActionManager, checkpointHandler, mcpTools, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            if (options2.maxSteps !== void 0) {
                throw new MaxStepsUnsupportedError(options2.maxSteps);
            }
            const requestContextBlobStore = new TransientRequestContextBlobStore(blobStore);
            const originalRequestId = options2.generationUUID ?? freshUuid();
            const interactionQueryIds = new InteractionQueryIdAllocator();
            const observedInteractionListener = withObservedQueryIds(interactionListener, interactionQueryIds);
            const abortAttribution = {
                sources: [],
                abortReasonName: void 0,
                abortReasonMessage: void 0
            };
            const attemptFailure = (error3)=>{
                const relayed = relayedAttemptFailure(error3);
                const stallAborted = abortAttribution.sources.includes("stall_detector") || relayed?.stallAborted === true;
                const origin = abortOriginFromSources(abortAttribution.sources);
                const own = getConnectErrorDiagnostics(error3);
                const underlying = own.underlyingConnectError;
                return {
                    relayed,
                    stallAborted,
                    abortOrigin: origin === "none" && stallAborted ? "stall_detector" : origin,
                    reading: relayed === void 0 ? {
                        errorName: own.errorName,
                        connectCode: underlying?.code,
                        connectCodeName: underlying?.codeName,
                        connectCause: underlying?.cause,
                        abortSources: [
                            ...abortAttribution.sources
                        ],
                        abortReasonName: abortAttribution.abortReasonName,
                        ...underlying === void 0 ? {} : {
                            underlyingConnectError: underlying
                        }
                    } : {
                        errorName: relayed.errorName,
                        connectCode: relayed.connectCode,
                        connectCodeName: relayed.connectCodeName,
                        connectCause: relayed.connectCause,
                        ...isStreamLoopKind(relayed.loop) ? {
                            loop: relayed.loop
                        } : {},
                        ...relayed.transportMode === void 0 ? {} : {
                            transportMode: relayed.transportMode
                        }
                    }
                };
            };
            let listenerGeneration = 0;
            let attemptGen = 0;
            try {
                options2.onNetworkPhaseStart?.();
            } catch (e) {
                retryLogger.warn(ctx, `onNetworkPhaseStart callback failed`, {
                    error: String(e)
                });
            }
            const networkPhaseSpan = __addDisposableResource7(env_1, createSpan(ctx.withName("networkPhase")), false);
            ctx = networkPhaseSpan.ctx;
            await runWithActiveOtelSpan(networkPhaseSpan.span, ()=>runTurnWithRetries({
                    ctx,
                    state: conversationState,
                    action,
                    checkpointHandler,
                    runOptions: options2,
                    requestId: originalRequestId,
                    loop: this.options.loop ?? "nal",
                    notifyInitialResume: true,
                    logging: {
                        ...this.options.retryLogging ?? {
                            tag: "nal_agent_retries",
                            includeErrorObjects: true
                        },
                        diagnostics: (error3)=>{
                            const { stallAborted, abortOrigin, reading } = attemptFailure(error3);
                            return {
                                stallAborted,
                                abortOrigin,
                                ...transportLineFailureFields(reading)
                            };
                        }
                    },
                    cancellation: {
                        toCancelledError: ()=>new CancelledError("Request cancelled")
                    },
                    hooks: {
                        beginAttempt: ()=>{
                            abortAttribution.sources = [];
                            abortAttribution.abortReasonName = void 0;
                            abortAttribution.abortReasonMessage = void 0;
                            attemptGen = ++listenerGeneration;
                        },
                        runAttempt: async ({ state, action: attemptAction, checkpointHandler: trackingCheckpointHandler, attempt, attemptRequestId, notifyConnected, notifyApplicationProgress })=>{
                            const guardedListener = createGuardedListener(observedInteractionListener, attemptGen, ()=>listenerGeneration);
                            await this.runInternal(ctx, state, attemptAction, modelDetails, guardedListener, resources, requestContextBlobStore, conversationActionManager, trackingCheckpointHandler, mcpTools, options2, attemptRequestId, originalRequestId, interactionQueryIds, abortAttribution, notifyConnected, notifyApplicationProgress, attempt);
                        },
                        classify: (error3, attemptState)=>{
                            const { abortOrigin, relayed } = attemptFailure(error3);
                            const decision = classifyForRetry(error3, resolveAgentRetryPolicy(options2, attemptState), {
                                ...attemptState,
                                retriesEnabled: options2.enableAgentRetries ?? false,
                                abortOrigin
                            });
                            const relayedKind = relayed?.transportFailureKind;
                            return isTransportFailureKind(relayedKind) ? {
                                ...decision,
                                transportFailureKind: relayedKind
                            } : decision;
                        },
                        buildNonRetriedErrorInfo: (base)=>({
                                ...base,
                                enableAgentRetries: options2.enableAgentRetries ?? false,
                                stallAborted: attemptFailure(base.error).stallAborted,
                                abortSources: [
                                    ...abortAttribution.sources
                                ],
                                abortReasonName: abortAttribution.abortReasonName,
                                abortReasonMessage: abortAttribution.abortReasonMessage
                            }),
                        reconnectTrigger: (error3, decision, info2)=>{
                            const { relayed, stallAborted, reading } = attemptFailure(error3);
                            const classifiedTrigger = error3 instanceof AgentError ? error3 : classifyError(error3, {
                                requestId: info2.failedAttemptRequestId
                            });
                            return {
                                errorClass: relayed?.errorName ?? classifiedTrigger.name,
                                connectCode: reading.connectCode,
                                connectCodeName: reading.connectCodeName,
                                errorCode: classifiedTrigger.displayInfo?.errorCode,
                                countAsServerError: decision.countAsServerError,
                                countAsTransportError: decision.countAsTransportError,
                                stallAborted,
                                originatingRequestId: info2.originalRequestId,
                                attemptRequestId: info2.failedAttemptRequestId,
                                ...reading.transportMode === void 0 ? {} : {
                                    transportMode: reading.transportMode
                                },
                                endpointUrl: this.endpointUrl
                            };
                        },
                        onRetryCommitted: ()=>conversationActionManager.reopen()
                    }
                }));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources7(env_1);
        }
    }
    async runInternal(ctx, conversationState, action, modelDetails, interactionListener, resources, blobStore, conversationActionManager, checkpointHandler, mcpTools, options2, requestId, originalRequestId, interactionQueryIds, abortAttribution, notifyConnected, notifyApplicationProgress, attempt, spanName = "agent.request.attempt") {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const networkPhaseCtx = ctx;
            ctx = this.options.prepareAttemptContext?.(ctx, {
                attempt,
                attemptRequestId: requestId,
                originalRequestId,
                runOptions: options2
            }) ?? ctx;
            const runSpan = __addDisposableResource7(env_2, createSpan(ctx.withName(spanName)), false);
            runSpan.span.setAttribute("agent.attempt", attempt);
            runSpan.span.setAttribute("agent.request_id", requestId);
            runSpan.span.setAttribute("agent.original_request_id", originalRequestId);
            ctx = runSpan.ctx;
            ctx = withInheritableAttribute(ctx, "agent.request_id", requestId);
            ctx = withInheritableAttribute(ctx, "agent.original_request_id", originalRequestId);
            ctx = ctx.with(agentStreamMetadata, {
                requestId,
                rootParentRequestId: options2.rootParentRequestId,
                modelDetails
            });
            const loggedAbortSources = new Set(abortAttribution.sources);
            let firstAbortReasonCaptured = abortAttribution.abortReasonName !== void 0 || abortAttribution.abortReasonMessage !== void 0;
            const logClientAbort = (source, metadata)=>{
                if (loggedAbortSources.has(source)) {
                    return;
                }
                loggedAbortSources.add(source);
                abortAttribution.sources = [
                    ...loggedAbortSources
                ];
                const parsedAbortReasonInfo = parseAbortReasonInfo(metadata);
                if (!firstAbortReasonCaptured && parsedAbortReasonInfo !== void 0) {
                    firstAbortReasonCaptured = true;
                    abortAttribution.abortReasonName = parsedAbortReasonInfo.abortReasonName;
                    abortAttribution.abortReasonMessage = parsedAbortReasonInfo.abortReasonMessage;
                }
                abortLogger.error(ctx, "Agent client stream abort", new Error(source), {
                    abortSource: source,
                    requestId,
                    conversationId: options2.conversationId,
                    ...metadata ?? {}
                });
            };
            if (!ctx.signal.aborted) {
                ctx.signal.addEventListener("abort", ()=>{
                    const ctxAbortReason = ctx.signal.reason;
                    logClientAbort("ctx_signal_abort", getAbortReasonInfo(ctxAbortReason));
                }, {
                    once: true
                });
            } else {
                const ctxAbortReason = ctx.signal.reason;
                logClientAbort("ctx_signal_abort", getAbortReasonInfo(ctxAbortReason));
            }
            const [softCancelCtx, softCancelCurrentRun] = ctx.withCancel();
            if (!conversationActionManager.signal?.aborted) {
                conversationActionManager.signal?.addEventListener("abort", ()=>{
                    const actionAbortReason = conversationActionManager.signal?.reason;
                    logClientAbort("conversation_action_abort", getAbortReasonInfo(actionAbortReason));
                    softCancelCurrentRun();
                }, {
                    once: true
                });
            } else {
                const actionAbortReason = conversationActionManager.signal?.reason;
                logClientAbort("conversation_action_abort", getAbortReasonInfo(actionAbortReason));
                softCancelCurrentRun();
            }
            if (ctx.canceled || softCancelCtx.canceled) {
                const cancelMetadata = {
                    ctxCanceled: ctx.canceled,
                    softCancel: softCancelCtx.canceled
                };
                logClientAbort("pre_run_cancel", cancelMetadata);
                throw new CancelledError("User aborted request");
            }
            const execManagerSpan = createSpan(ctx.withName("createControlledExecManager"));
            const controlledExecManager = SimpleControlledExecManager.fromResources(resources);
            execManagerSpan[Symbol.dispose]();
            const [stallCancelCtx, stallCancelCurrentRun] = ctx.withCancel();
            const handlerTracker = new HandlerTracker();
            const { failThresholdMs, advisoryThresholdMs } = resolveStallDetectorTimeouts(options2.stallDetectorConfig, {
                isRunningInTest: options2.isRunningInTest
            });
            const stallDetector = __addDisposableResource7(env_2, new StallDetector(stallCancelCtx, {
                thresholdMs: failThresholdMs,
                advisoryThresholdMs,
                loop: this.options.loop,
                onStall: ()=>{
                    logClientAbort("stall_detector", {
                        thresholdMs: failThresholdMs,
                        advisoryThresholdMs
                    });
                    stallCancelCurrentRun();
                },
                onStallCallback: options2.onStall,
                handlerTracker
            }), false);
            let handshakeSpan;
            let networkStartedAt;
            const baseRequestStream = createWritableIterable2();
            const monitoredRequestStream = new MapWritable(baseRequestStream, (msg)=>{
                stallDetector.reset("outbound_write", getMessageTypeLabelForStallDetector(msg));
                return msg;
            });
            const writeRequestSpan = __addDisposableResource7(env_2, createSpan(ctx.withName("writeInitialRequest")), false);
            let promise;
            const protoMcpTools = mcpToolDefinitionsToProto(mcpTools);
            const configuredRequestContextMode = options2.requestContextBlobTransportMode ?? "legacy";
            const isFirstConversationTurn = attempt === 0 && action.action.case === "userMessageAction" && conversationState.turns.length === 0;
            const requestContextMode = configuredRequestContextMode === "ref_only" && isFirstConversationTurn ? "dual" : configuredRequestContextMode;
            const [, clientLlmGatewayCredential] = await Promise.all([
                prepareRequestContextForSend({
                    ctx,
                    action,
                    resources,
                    blobStore,
                    options: options2,
                    source: "run_request",
                    transportMode: requestContextMode,
                    notifyBytes: attempt === 0
                }),
                options2.mintLlmGatewayCredential === void 0 ? Promise.resolve(void 0) : mintClientLlmGatewayCredential(options2.mintLlmGatewayCredential, {
                    signal: softCancelCtx.signal,
                    isCanceled: ()=>softCancelCtx.canceled,
                    requestId
                })
            ]);
            const undecorated = {
                action,
                headers: options2.headers ?? {}
            };
            const decorated = this.options.decorateAttempt?.(undecorated, options2) ?? undecorated;
            const runRequest = new AgentRunRequest({
                conversationState,
                action: decorated.action,
                modelDetails,
                requestedModel: options2.requestedModel,
                clientLlmGatewayCredential,
                mcpTools: protoMcpTools,
                conversationGroupId: options2.conversationGroupId,
                conversationId: options2.conversationId,
                agentSessionId: options2.agentSessionId,
                mcpFileSystemOptions: options2.mcpFileSystemOptions,
                customSystemPrompt: options2.customSystemPrompt,
                systemPromptSpec: options2.systemPromptSpec,
                harness: options2.harness,
                computerUseCoordinateMode: options2.computerUseCoordinateMode,
                suggestNextPrompt: options2.suggestNextPrompt,
                subagentTypeName: options2.subagentTypeName,
                excludeWorkspaceContext: options2.excludeWorkspaceContext,
                devRawModelSlug: options2.devRawModelSlug,
                selectedSubagentModels: options2.selectedSubagentModels,
                subagentModelOverrides: options2.subagentModelOverrides ?? [],
                selectedSubagentModelDetails: options2.selectedSubagentModelsLegacy,
                clientSupportsInlineImages: options2.clientSupportsInlineImages,
                clientSupportsPreviewCard: options2.clientSupportsPreviewCard,
                startedAsNewProject: options2.startedAsNewProject,
                firstProjectOnboarding: options2.firstProjectOnboarding,
                clientSupportsSendToUser: options2.clientSupportsSendToUser,
                clientSupportsRoutedModelUpdate: options2.clientSupportsRoutedModelUpdate,
                canCreateCloudSubagents: options2.canCreateCloudSubagents,
                suppressSubagentProgressUpdateTool: options2.suppressSubagentProgressUpdateTool,
                runId: originalRequestId,
                nextInteractionQueryId: interactionQueryIds.peekNext()
            });
            promise = monitoredRequestStream.write(new AgentClientMessage({
                message: {
                    case: "runRequest",
                    value: runRequest
                }
            }));
            if (softCancelCtx.canceled) {
                const cancelMetadata = {
                    ctxCanceled: ctx.canceled,
                    softCancel: softCancelCtx.canceled
                };
                logClientAbort("post_write_cancel", cancelMetadata);
                writeRequestSpan[Symbol.dispose]();
                throw new CancelledError("User aborted request");
            }
            const headers = {
                ...decorated.headers,
                "x-request-id": requestId,
                "x-original-request-id": originalRequestId,
                ...buildLineageRequestHeaders(options2),
                ...buildInferenceProxyJwtHeaders()
            };
            handshakeSpan = createSpan(ctx.withName("handshakeEstablishment"));
            handshakeSpan.span.setAttribute("handshake.firstStreamOnClient", !this.hasStartedStream);
            this.hasStartedStream = true;
            const response = this.client.run(handshakeSpan.ctx, baseRequestStream, {
                signal: stallCancelCtx.signal,
                headers,
                onHeader: options2.onHeader,
                onNetworkStarted: ()=>{
                    if (networkStartedAt === void 0) {
                        networkStartedAt = performance.now();
                    }
                }
            });
            const attemptStartedAt = performance.now();
            const onFirstMessage = (firstMessageIsHeartbeat)=>{
                if (handshakeSpan) {
                    handshakeSpan.span.setAttribute("handshake.firstMessageHeartbeat", firstMessageIsHeartbeat);
                    if (networkStartedAt !== void 0) {
                        handshakeSpan.span.setAttribute("handshake.preNetworkMs", networkStartedAt - attemptStartedAt);
                    }
                    handshakeSpan[Symbol.dispose]();
                    handshakeSpan = void 0;
                }
                notifyConnected();
                const now2 = performance.now();
                options2.onFirstMessage?.(now2 - attemptStartedAt);
                if (networkStartedAt !== void 0) {
                    options2.onFirstMessageNetwork?.(now2 - networkStartedAt);
                }
            };
            const wrappedOnFirstNonHeartbeat = ()=>{
                notifyApplicationProgress();
                options2.onFirstNonHeartbeatResponse?.(performance.now() - attemptStartedAt, attempt);
            };
            const wrappedOnTtftBreakdown = options2.onTtftBreakdown ? (breakdown)=>{
                options2.onTtftBreakdown(breakdown, attempt);
            } : void 0;
            const { interactionStream, execStream, checkpointStream, kvStream, done } = splitStream(ctx, response, stallDetector, onFirstMessage, softCancelCtx.signal, ctx.signal, wrappedOnFirstNonHeartbeat, wrappedOnTtftBreakdown);
            let latestCheckpointResumeEligibility;
            const checkpointHandlerWithMetadata = {
                handleCheckpoint: async (checkpointCtx, checkpoint, metadata)=>{
                    await checkpointHandler.handleCheckpoint(checkpointCtx, checkpoint, metadata);
                    latestCheckpointResumeEligibility = metadata?.resumeEligibility ?? "eligible";
                },
                getLatestCheckpoint: ()=>checkpointHandler.getLatestCheckpoint()
            };
            writeRequestSpan[Symbol.dispose]();
            const HEARTBEAT_INTERVAL_MS2 = 5e3;
            let heartbeatTimeout;
            const scheduleHeartbeat = ()=>{
                heartbeatTimeout = setTimeout(()=>{
                    monitoredRequestStream.write(new AgentClientMessage({
                        message: {
                            case: "clientHeartbeat",
                            value: new ClientHeartbeat()
                        }
                    })).then(()=>stallDetector.onClientSentHeartbeat(), ()=>{});
                    scheduleHeartbeat();
                }, HEARTBEAT_INTERVAL_MS2);
            };
            const clearHeartbeat = ()=>{
                if (heartbeatTimeout !== void 0) {
                    clearTimeout(heartbeatTimeout);
                    heartbeatTimeout = void 0;
                }
            };
            scheduleHeartbeat();
            try {
                let interactionHandler;
                if (action.action.case === "shellCommandAction" && action.action.value.execId) {
                    const shellAction = action.action.value;
                    const shellArgs2 = new ShellArgs({
                        command: shellAction.shellCommand?.command || "",
                        parsingResult: new ShellCommandParsingResult(),
                        skipApproval: true
                    });
                    const shellStreamExec = resources.get(shellStreamExecutorResource);
                    const shellStream = shellStreamExec.execute(ctx, shellArgs2, {
                        execId: shellAction.execId
                    });
                    const interactionController = new ClientInteractionController(interactionStream, interactionListener, new MapWritable(monitoredRequestStream, (message)=>new AgentClientMessage({
                            message: {
                                case: "interactionResponse",
                                value: message
                            }
                        })), stallDetector);
                    interactionHandler = {
                        run: async (ctx2)=>{
                            await Promise.all([
                                handlerTracker.track("handleShellStream", handleShellStream(ctx2, shellStream, interactionListener)),
                                handlerTracker.track("interactionController", interactionController.run(ctx2))
                            ]);
                        }
                    };
                } else {
                    const controller = new ClientInteractionController(interactionStream, interactionListener, new MapWritable(monitoredRequestStream, (message)=>new AgentClientMessage({
                            message: {
                                case: "interactionResponse",
                                value: message
                            }
                        })), stallDetector);
                    interactionHandler = {
                        run: async (ctx2)=>{
                            await handlerTracker.track("interactionController", controller.run(ctx2));
                        }
                    };
                }
                if (promise !== void 0) {
                    await Promise.race([
                        promise,
                        done.catch(()=>void 0)
                    ]);
                }
                const execOutputStream = new MapWritable(monitoredRequestStream, (message)=>{
                    if (isMessage(message, ExecClientMessage)) {
                        return new AgentClientMessage({
                            message: {
                                case: "execClientMessage",
                                value: message
                            }
                        });
                    } else if (isMessage(message, ExecClientControlMessage)) {
                        return new AgentClientMessage({
                            message: {
                                case: "execClientControlMessage",
                                value: message
                            }
                        });
                    }
                    throw new Error(`Unknown exec message (type: ${isMessage(message) ? message.getType().typeName : typeof message})`);
                });
                const execHandler = new ClientExecController(execStream, execOutputStream, controlledExecManager);
                const kvHandler = new ControlledKvManager(kvStream, new MapWritable(monitoredRequestStream, (message)=>new AgentClientMessage({
                        message: {
                            case: "kvClientMessage",
                            value: message
                        }
                    })), blobStore, {
                    beforeGetBlob: async (persistCtx, blobId)=>blobStore.persistForRemoteRead(persistCtx, blobId)
                });
                const checkpointController = new CheckpointController(checkpointStream, checkpointHandlerWithMetadata, ctx);
                let execResolve;
                let execReject;
                const execPromise = new Promise((resolve36, reject2)=>{
                    execResolve = resolve36;
                    execReject = reject2;
                });
                const execResolvers = {
                    promise: execPromise,
                    resolve: execResolve,
                    reject: execReject
                };
                if (softCancelCtx.canceled) {
                    execResolvers.resolve();
                    interactionStream.close();
                } else {
                    softCancelCtx.signal.addEventListener("abort", ()=>{
                        execResolvers.resolve();
                        interactionStream.close();
                    }, {
                        once: true
                    });
                }
                execHandler.run(softCancelCtx).then(execResolvers.resolve).catch(execResolvers.reject);
                const allSettledPromise = Promise.allSettled([
                    handlerTracker.track("streamSplitter", done.finally(()=>{
                        clearHeartbeat();
                        conversationActionManager.close();
                        execOutputStream.close();
                    })),
                    handlerTracker.track("execHandler", execResolvers.promise),
                    interactionHandler.run(ctx),
                    handlerTracker.track("checkpointController", checkpointController.run()),
                    handlerTracker.track("kvHandler", kvHandler.run(ctx)),
                    handlerTracker.track("conversationActionManager", conversationActionManager.run(ctx, {
                        write: async (conversationAction)=>{
                            await prepareRequestContextForSend({
                                ctx,
                                action: conversationAction,
                                resources,
                                blobStore,
                                options: options2,
                                source: "queued_action"
                            });
                            await monitoredRequestStream.write(new AgentClientMessage({
                                message: {
                                    case: "conversationAction",
                                    value: conversationAction
                                }
                            }));
                        }
                    }))
                ]);
                let overallResolve;
                let overallReject;
                const overallPromise = new Promise((resolve36, reject2)=>{
                    overallResolve = resolve36;
                    overallReject = reject2;
                });
                const overallResolver = {
                    promise: overallPromise,
                    resolve: overallResolve,
                    reject: overallReject
                };
                allSettledPromise.then(overallResolver.resolve).catch(overallResolver.reject);
                if (ctx.canceled) {
                    overallResolver.reject(new CancelledError("User aborted request"));
                } else {
                    ctx.signal.addEventListener("abort", ()=>overallResolver.reject(new CancelledError("User aborted request")), {
                        once: true
                    });
                }
                const abortTransportAfterServerDrain = ()=>{
                    if (ctx.signal.aborted) {
                        stallCancelCurrentRun();
                        return;
                    }
                    void lingerForServerDrainOnSoftCancel({
                        done,
                        lingerMs: options2.softCancelLingerMs
                    }).then((outcome)=>{
                        retryLogger.info(ctx, "Soft-cancel transport linger finished", {
                            outcome,
                            requestId
                        });
                        stallCancelCurrentRun();
                    });
                };
                if (softCancelCtx.canceled) {
                    abortTransportAfterServerDrain();
                    overallResolver.reject(new CancelledError("User aborted request"));
                } else {
                    softCancelCtx.signal.addEventListener("abort", ()=>{
                        abortTransportAfterServerDrain();
                        overallResolver.reject(new CancelledError("User aborted request"));
                    }, {
                        once: true
                    });
                }
                const results = await overallResolver.promise;
                const doneResult = results[0];
                const execResult = results[1];
                const checkpointResult = results[3];
                const formatSettledError = (result)=>{
                    if (result.reason instanceof Error) {
                        return `${result.reason.name}: ${result.reason.message}`;
                    }
                    return String(result.reason);
                };
                if (checkpointResult.status === "rejected") {
                    throw new NonRetriableError("Checkpoint persistence failed", {
                        cause: checkpointResult.reason instanceof Error ? checkpointResult.reason : void 0,
                        requestId,
                        displayInfo: {
                            title: "Checkpoint persistence failed",
                            detail: formatSettledError(checkpointResult),
                            isRetryable: false
                        }
                    });
                }
                const ignoreErrorsAfterTerminalCheckpoint = latestCheckpointResumeEligibility === "ineligible_terminal_turn";
                if (ignoreErrorsAfterTerminalCheckpoint) {
                    const ignoredErrors = {
                        ...doneResult.status === "rejected" ? {
                            streamSplitter: formatSettledError(doneResult)
                        } : {},
                        ...execResult.status === "rejected" ? {
                            execHandler: formatSettledError(execResult)
                        } : {}
                    };
                    if (Object.keys(ignoredErrors).length > 0) {
                        retryLogger.debug(ctx, "Ignoring handler errors after terminal checkpoint", ignoredErrors);
                    }
                }
                if (doneResult.status === "rejected" && !ignoreErrorsAfterTerminalCheckpoint) {
                    throw doneResult.reason;
                }
                if (execResult.status === "rejected" && !ignoreErrorsAfterTerminalCheckpoint) {
                    throw execResult.reason;
                }
                if (!softCancelCtx.canceled) {
                    await this.processUnprocessedMessages(networkPhaseCtx, conversationActionManager, checkpointHandlerWithMetadata, modelDetails, interactionListener, resources, blobStore, mcpTools, options2, requestId, originalRequestId, interactionQueryIds, abortAttribution, stallDetector, notifyConnected, notifyApplicationProgress);
                }
            } finally{
                clearHeartbeat();
                if (handshakeSpan) {
                    handshakeSpan[Symbol.dispose]();
                    handshakeSpan = void 0;
                }
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources7(env_2);
        }
    }
    async processUnprocessedMessages(ctx, conversationActionManager, checkpointHandler, modelDetails, interactionListener, resources, blobStore, mcpTools, options2, requestId, originalRequestId, interactionQueryIds, abortAttribution, stallDetector, notifyConnected, notifyApplicationProgress) {
        if (!conversationActionManager.hasUnprocessedMessages()) {
            return;
        }
        const unprocessedMessages = conversationActionManager.getUnprocessedUserMessages();
        const latestCheckpoint = checkpointHandler.getLatestCheckpoint();
        if (!latestCheckpoint || unprocessedMessages.length === 0) {
            return;
        }
        const unprocessedMessage = unprocessedMessages[0];
        conversationActionManager.markMessageAsProcessed(unprocessedMessage);
        conversationActionManager.resetStream();
        stallDetector[Symbol.dispose]();
        const checkpointBefore = checkpointHandler.getLatestCheckpoint();
        try {
            await this.runInternal(ctx, latestCheckpoint, new ConversationAction({
                action: {
                    case: "userMessageAction",
                    value: new UserMessageAction({
                        userMessage: unprocessedMessage
                    })
                }
            }), modelDetails, interactionListener, resources, blobStore, conversationActionManager, checkpointHandler, mcpTools, options2, requestId, originalRequestId, interactionQueryIds, abortAttribution, notifyConnected, notifyApplicationProgress, 0, "agent.request.queuedMessage");
        } catch (error3) {
            const checkpointAfter = checkpointHandler.getLatestCheckpoint();
            if (checkpointBefore === checkpointAfter) {
                conversationActionManager.requeueMessage(unprocessedMessage);
            }
            throw error3;
        }
    }
};

}
