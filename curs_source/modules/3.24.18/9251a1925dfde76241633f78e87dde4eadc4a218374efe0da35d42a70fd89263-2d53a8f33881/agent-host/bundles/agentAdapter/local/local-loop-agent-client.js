import { CancelledError, MaxStepsReachedError, NonRetriableError } from "../../../../agent-client/dist/errors.js";
import { init_dist9 } from "../../../../agent-client/dist/index.js";
import { BoundedConversationActionMailbox, RemoteConversationActionManager } from "../../../../agent-core/dist/conversation-actions/remote.js";
import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { InteractionQueryIdAllocator } from "../../../../agent-core/dist/interaction-query-ids.js";
import { RedactedUpdates } from "../../../../agent-core/dist/redacted-interaction-updates.js";
import { init_server } from "../../../../agent-core/dist/server.js";
import { init_local_loop_agent_event_tracker } from "./local-loop-agent-event-tracker.js";
import { init_local_loop_attempt_context } from "./local-loop-attempt-context.js";
import { LOCAL_LOOP_TURN_NOT_COMPLETED, init_local_loop_attempt_release } from "./local-loop-attempt-release.js";
import { init_local_loop_attempt_stall_error } from "./local-loop-attempt-stall-error.js";
import { init_local_loop_injection_lifecycle } from "./local-loop-injection-lifecycle.js";
import { init_local_loop_request_context_preparation } from "./local-loop-request-context-preparation.js";
import { init_local_loop_smart_mode_classifier } from "./local-loop-smart-mode-classifier.js";
import { LOCAL_LOOP_ORPHANED_SUMMARY_HOLD_MS, LOCAL_LOOP_SELF_SUMMARY_RETRY_OPTIONS, init_local_loop_summarization } from "./local-loop-summarization.js";
import { LocalLoopTelemetryBlobStore, init_local_loop_telemetry_blob_store } from "./local-loop-telemetry-blob-store.js";
import { init_local_loop_turn_telemetry } from "./local-loop-turn-telemetry.js";
import { AGENT_TRANSPORT_MODE_RESPONSE_HEADER3, init_run_inference_session } from "./run-inference-session.js";
import { init_request_context_from_action } from "../shared/request-context-from-action.js";
import { init_dist5 } from "../../../../agent-kv/dist/index.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { WritethroughBlobStore } from "../../../../agent-kv/dist/writethrough-middleware.js";
import { init_dist28 } from "../../../../agent-transcript/dist/index.js";
import { MaxStepsReachedError2 } from "../../../../agent/dist/actions/user-message-action/abstract-user-message-action-handler.js";
import { AnysphereAgent, init_dist35 } from "../../../../agent/dist/index.js";
import { SimplePromptToolExecutor } from "../../../../agent/dist/tool-stream-executor.js";
import { agentEventTrackerKey } from "../../../../agent/dist/utils/event-tracking.js";
import { turnFailureTelemetrySinkKey } from "../../../../agent/dist/utils/turn-failure-telemetry.js";
import { init_dist } from "../../../../context/dist/index.js";
import { classifyForRetry, createCounter, isModelOutputInteractionUpdate, mcpToolDefinitionsToProto, resolveAgentRetryPolicy, runTurnWithRetries, withAllocatedQueryIds } from "../../../../dist_exports.js";
import { applyResolvedSubagentSystemReminder, extractPreviousRequestId, toRedactedConversationAction, toRedactedConversationStateStructure, toRedactedInteractionListener, toRedactedInteractionUpdate } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../metrics/dist/index.js";
import { AgentRunRequest, InteractionUpdate, RoutedModelUpdate, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_requested_model_pb } from "../../../../proto/dist/generated/agent/v1/requested_model_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../../../redacted-protos/dist/agent-v1.js";
import { createForwardingAgentEventTracker, createInMemoryPendingSummaryStore, createLocalLoopAttemptContext, createLocalLoopAttemptRelease, createLocalLoopInjectionLifecycleRelay, createLocalLoopSummarizationHandler, createLocalLoopTtftBreakdownEmitter, createLocalLoopTurnFailureHold, createPathRestrictedResourceAccessor, hasDefaultAgentEventTracker, isLocalLoopAttemptStall, isUserInitiatedAgentRequest, localLoopAbortOrigin, localLoopAttemptFailure, localLoopRetryDiagnostics, requestContextFromAction, resolveRequestedModel, toCancelledError, withLocalLoopModelLabels, withLocalLoopRequestContextPreparation, withLocalLoopSmartModeClassifier } from "../../../../tree_chunk_napi_exports.js";
var MAX_BUFFERED_CONVERSATION_ACTIONS, logger130, agentEventTrackerUnboundCount, LocalLoopAgentClient, relayedFailures;
export { LocalLoopAgentClient, MAX_BUFFERED_CONVERSATION_ACTIONS, agentEventTrackerUnboundCount, logger130, relayedFailures };
var __wakaru_init_local_loop_agent_client_initialized = false;
export function init_local_loop_agent_client() {
if (__wakaru_init_local_loop_agent_client_initialized) return;
__wakaru_init_local_loop_agent_client_initialized = true;
"use strict";
init_dist35();
init_dist9();
init_dist7();
init_server();
init_dist5();
init_dist28();
init_dist();
init_dist4();
init_agent_pb();
init_requested_model_pb();
init_privacy_mode_pb();
init_agent_v1();
init_request_context_from_action();
init_local_loop_agent_event_tracker();
init_local_loop_attempt_context();
init_local_loop_attempt_release();
init_local_loop_attempt_stall_error();
init_local_loop_injection_lifecycle();
init_local_loop_request_context_preparation();
init_local_loop_turn_telemetry();
init_local_loop_smart_mode_classifier();
init_local_loop_summarization();
init_local_loop_telemetry_blob_store();
init_run_inference_session();
MAX_BUFFERED_CONVERSATION_ACTIONS = 32;
logger130 = createLogger("@anysphere/agent-host:local-loop-agent-client");
agentEventTrackerUnboundCount = createCounter("agent_host.local_loop.agent_event_tracker_unbound", {
    description: "Local loop attempts whose AgentEventTracker had no destination and were not allowlisted; every product event of the attempt was dropped",
    labelNames: [
        "reason"
    ]
});
LocalLoopAgentClient = class {
    constructor(options2){
        this.options = options2;
        this.pendingGenerationOwners = new WeakMap();
        this.orphanedSummaryHoldTimeoutMs = options2.orphanedSummaryHoldTimeoutMs ?? LOCAL_LOOP_ORPHANED_SUMMARY_HOLD_MS;
        this.pendingSummaries = createInMemoryPendingSummaryStore({
            detachedGenerationTimeoutMs: this.orphanedSummaryHoldTimeoutMs
        });
    }
    pendingSummaryStoreFor(attemptOwner) {
        const base = this.pendingSummaries;
        return {
            ...base,
            trackPendingGeneration: (generation)=>{
                this.pendingGenerationOwners.set(generation.promiseInfo, attemptOwner);
                base.trackPendingGeneration?.(generation);
            }
        };
    }
    orphanedGenerationOf(conversationId, attemptOwner) {
        const generation = this.pendingSummaries.peekPendingGeneration(conversationId);
        if (generation === void 0 || this.pendingGenerationOwners.get(generation.promiseInfo) !== attemptOwner) {
            return void 0;
        }
        return generation;
    }
    bindAgentEvents(attemptCtx, session, bind, info2) {
        const policy = this.options.agentEvents;
        const sink = session.attempt?.agentEvents;
        let violation;
        if (hasDefaultAgentEventTracker(attemptCtx)) {
            violation = "tracker_replaced";
        } else if ("source" in policy && sink === void 0) {
            violation = "sink_missing";
        }
        bind(sink);
        if ("unbound" in policy) {
            logger130.debug(attemptCtx, "Local loop agent events unbound by policy", {
                requestId: info2.requestId,
                attemptRequestId: info2.attemptRequestId,
                reason: policy.unbound.reason
            });
        }
        if (violation === void 0) {
            return;
        }
        const message = violation === "tracker_replaced" ? "Local loop attempt context lost its AgentEventTracker binding; product analytics for this attempt are dropped" : "Local loop attempt handle carries no agent event sink and the client is not allowlisted; product analytics for this attempt are dropped";
        if (info2.isRunningInTest) {
            throw new Error(`${message} (${violation})`);
        }
        agentEventTrackerUnboundCount.increment(attemptCtx, 1, {
            reason: violation
        });
        logger130.error(attemptCtx, message, {
            requestId: info2.requestId,
            attemptRequestId: info2.attemptRequestId,
            violation
        });
    }
    async run(ctx, conversationState, action, modelDetails, interactionListener, resources, blobStore, conversationActionManager, checkpointHandler, mcpTools, runOptions) {
        const requestId = runOptions.generationUUID ?? crypto.randomUUID();
        const requestedModel = resolveRequestedModel(modelDetails, runOptions);
        const modelId = requestedModel.modelId;
        const privacyMode = this.resolvePrivacyMode(ctx, requestId);
        const turnLabeling = this.createTurnLabeling({
            ctx,
            requestId,
            conversationId: runOptions.conversationId,
            conversationState,
            blobStore
        });
        const previousRequestId = extractPreviousRequestId(ctx, blobStore, conversationState.turns);
        const ttftBreakdownEmitter = createLocalLoopTtftBreakdownEmitter({
            ctx,
            requestId,
            onTtftBreakdown: runOptions.onTtftBreakdown
        });
        const redactedInteractionListener = toRedactedInteractionListener(withAllocatedQueryIds(ttftBreakdownEmitter.wrapListener(interactionListener), new InteractionQueryIdAllocator(runOptions.nextInteractionQueryId)), privacyMode);
        const [runCtx, cancelRun] = ctx.withCancel();
        const injectionLifecycle = createLocalLoopInjectionLifecycleRelay(requestId);
        const conversationActionReceiver = new RemoteConversationActionManager(runCtx, new BoundedConversationActionMailbox(MAX_BUFFERED_CONVERSATION_ACTIONS), ()=>cancelRun("cancel_action"), {
            contextInjection: {
                activeRunId: requestId,
                onInjectionStateChange: (injectionId, state)=>{
                    injectionLifecycle.record(injectionId, state);
                    void redactedInteractionListener.sendUpdate(ctx, RedactedUpdates.contextInjectionState(privacyMode, injectionId, state)).catch((error3)=>{
                        logger130.warn(ctx, "Failed to send context injection state update", {
                            requestId,
                            injectionId,
                            error: error3
                        });
                    });
                }
            }
        });
        void conversationActionManager.run(runCtx, {
            write: async (action2)=>{
                conversationActionReceiver.push(toRedactedConversationAction(action2, privacyMode));
            }
        }).catch((error3)=>{
            logger130.warn(ctx, "Conversation action pump ended with an error", {
                requestId,
                error: error3
            });
        });
        const onManagerAbort = ()=>{
            conversationActionReceiver.endRun();
            cancelRun(conversationActionManager.signal.reason);
        };
        if (conversationActionManager.signal.aborted) {
            onManagerAbort();
        } else {
            conversationActionManager.signal.addEventListener("abort", onManagerAbort, {
                once: true
            });
        }
        let runStatus = "success";
        let finalState;
        const telemetryBlobStore = this.options.conversationBlobUploader !== void 0 && privacyMode === PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED && runOptions.conversationId !== "" ? new LocalLoopTelemetryBlobStore({
            conversationId: runOptions.conversationId,
            uploader: this.options.conversationBlobUploader
        }) : void 0;
        const turnBlobStore = telemetryBlobStore === void 0 ? blobStore : new WritethroughBlobStore(blobStore, telemetryBlobStore);
        let attemptTransport = {};
        const turnFailureHold = createLocalLoopTurnFailureHold();
        const attemptRelease = createLocalLoopAttemptRelease(runCtx);
        try {
            await runTurnWithRetries({
                ctx: runCtx,
                state: conversationState,
                action,
                checkpointHandler,
                runOptions,
                requestId: runOptions.firstAttemptRequestId ?? requestId,
                originalRequestId: requestId,
                loop: "local_loop",
                ...this.options.retryLogging === "delegated" ? {} : {
                    logging: {
                        tag: this.options.retryLogging?.tag ?? "local_loop_agent_retries",
                        diagnostics: (error3)=>({
                                ...localLoopRetryDiagnostics(error3),
                                ...attemptTransport
                            })
                    }
                },
                cancellation: {
                    shortCircuit: ()=>runCtx.canceled,
                    toCancelledError: (error3, currentRequestId)=>toCancelledError(error3, currentRequestId)
                },
                hooks: {
                    beginAttempt: ()=>{
                        attemptTransport = {};
                    },
                    runAttempt: async (attemptInput)=>{
                        turnFailureHold.dropHeld();
                        await attemptRelease.release(LOCAL_LOOP_TURN_NOT_COMPLETED);
                        ttftBreakdownEmitter.beginAttempt(attemptInput.attempt);
                        try {
                            runOptions.onNetworkPhaseStart?.();
                        } catch (error3) {
                            logger130.warn(runCtx, "onNetworkPhaseStart callback failed", {
                                requestId,
                                error: error3 instanceof Error ? error3.stack ?? error3.message : String(error3)
                            });
                        }
                        const agentEventForwarder = createForwardingAgentEventTracker();
                        const baseAttemptCtx = createLocalLoopAttemptContext(runCtx, runOptions, requestedModel, attemptInput.attemptRequestId).with(agentEventTrackerKey, agentEventForwarder.tracker).with(turnFailureTelemetrySinkKey, turnFailureHold.sink);
                        const attemptRunOptions = {
                            ...runOptions,
                            onHeader: (headers)=>{
                                const transportMode = headers.get(AGENT_TRANSPORT_MODE_RESPONSE_HEADER3);
                                if (transportMode !== null) {
                                    attemptTransport = {
                                        transportMode
                                    };
                                }
                                runOptions.onHeader?.(headers);
                            }
                        };
                        const attemptAbort = new AbortController();
                        const forwardRunAbort = ()=>attemptAbort.abort(runCtx.signal.reason);
                        if (runCtx.signal.aborted) {
                            forwardRunAbort();
                        } else {
                            runCtx.signal.addEventListener("abort", forwardRunAbort, {
                                once: true
                            });
                        }
                        const promptSessionInput = {
                            requestedModel,
                            runOptions: attemptRunOptions,
                            attempt: attemptInput.attempt,
                            attemptRequestId: attemptInput.attemptRequestId,
                            originalRequestId: requestId,
                            conversationState: attemptInput.state,
                            action: attemptInput.action,
                            previousRequestId: await previousRequestId,
                            signal: attemptAbort.signal,
                            ctx: baseAttemptCtx,
                            onFirstInvocationStart: ()=>ttftBreakdownEmitter.markFirstInvocationStart()
                        };
                        const attemptCtx = this.options.prepareAttemptContext?.(baseAttemptCtx, promptSessionInput) ?? baseAttemptCtx;
                        const session = await this.options.createPromptSession({
                            ...promptSessionInput,
                            ctx: attemptCtx
                        });
                        attemptRelease.hold(session.attempt);
                        this.bindAgentEvents(attemptCtx, session, (sink)=>{
                            agentEventForwarder.bind(sink);
                            injectionLifecycle.attach(agentEventForwarder);
                        }, {
                            requestId,
                            attemptRequestId: attemptInput.attemptRequestId,
                            isRunningInTest: runOptions.isRunningInTest === true
                        });
                        attemptInput.notifyConnected();
                        if (telemetryBlobStore !== void 0) {
                            telemetryBlobStore.setAttemptRequestId(attemptInput.attemptRequestId);
                            telemetryBlobStore.decide(attemptCtx, session.attempt?.kvBlobTelemetryEnabled === true);
                        }
                        const attemptListener = {
                            ...redactedInteractionListener,
                            sendUpdate: (updateCtx, update)=>{
                                if (isModelOutputInteractionUpdate(update)) {
                                    attemptInput.notifyApplicationProgress();
                                }
                                return redactedInteractionListener.sendUpdate(updateCtx, update);
                            }
                        };
                        const admittedCtx = withLocalLoopModelLabels(attemptCtx, session.attempt?.metricLabels);
                        const built = await this.options.createAgentConfig({
                            modelId,
                            originalRequestId: requestId,
                            modelDetails,
                            requestedModel,
                            resolvedModel: session.attempt?.resolvedModel,
                            resolvedModelMetadata: session.attempt?.resolvedModelMetadata,
                            nonFileRules: session.attempt?.nonFileRules,
                            conversationState: attemptInput.state,
                            action: attemptInput.action,
                            runOptions,
                            projectFolder: runOptions.projectFolder,
                            resolveCustomSubagentModels: session.attempt?.resolveCustomSubagentModels,
                            agentEventsRecorded: session.attempt?.agentEvents !== void 0 && session.attempt.agentEventsAccepted === true,
                            ctx: admittedCtx
                        });
                        const builtConfig = built.config;
                        const backgroundSummarizationProps = session.attempt?.backgroundSummarizationProps;
                        const unmarkedSelfSummarySession = session.selfSummaryPromptSession;
                        const selfSummaryToolSession = unmarkedSelfSummarySession === void 0 ? session.promptToolSession : {
                            getExecutor: (state)=>new SimplePromptToolExecutor(unmarkedSelfSummarySession.getExecutor(state))
                        };
                        const attemptOwner = {};
                        const conversationId = runOptions.conversationId;
                        const pendingSummary = conversationId !== void 0 && privacyMode !== PrivacyMode.NO_STORAGE ? {
                            conversationId: builtConfig.conversationId ?? conversationId,
                            pendingSummaryStore: this.pendingSummaryStoreFor(attemptOwner)
                        } : void 0;
                        const config2 = {
                            ...builtConfig,
                            ...session.attempt?.supportsSelfSummary === true ? {
                                selfSummaryConfig: {
                                    promptSession: selfSummaryToolSession,
                                    canUseSelfSummary: ()=>true,
                                    ...LOCAL_LOOP_SELF_SUMMARY_RETRY_OPTIONS
                                }
                            } : {},
                            ...backgroundSummarizationProps === void 0 ? {} : {
                                backgroundSummarizationProps
                            },
                            ...pendingSummary
                        };
                        const routedModelDisplayName = session.attempt?.routedModelDisplayName;
                        if (routedModelDisplayName !== void 0 && routedModelDisplayName.length > 0 && isUserInitiatedAgentRequest(attemptInput.action)) {
                            await redactedInteractionListener.sendUpdate(admittedCtx, toRedactedInteractionUpdate(new InteractionUpdate({
                                message: {
                                    case: "routedModel",
                                    value: new RoutedModelUpdate({
                                        displayName: routedModelDisplayName
                                    })
                                }
                            }), privacyMode));
                        }
                        const redactedAction = toRedactedConversationAction(attemptInput.action, privacyMode);
                        applyResolvedSubagentSystemReminder(redactedAction, built.resolvedSubagentSystemReminder);
                        const embeddedRequestContext = requestContextFromAction(attemptInput.action);
                        if (built.prepareRequestContext !== void 0 && embeddedRequestContext !== void 0) {
                            await built.prepareRequestContext(admittedCtx, embeddedRequestContext);
                        }
                        const turnResources = withLocalLoopRequestContextPreparation(withLocalLoopSmartModeClassifier(built.allowedWritePrefixes !== void 0 && built.allowedWritePrefixes.length > 0 ? createPathRestrictedResourceAccessor(resources, built.allowedWritePrefixes) : resources, built.smartModeClassifier), admittedCtx, built.prepareRequestContext);
                        const agentPromptToolSession = turnLabeling?.wrapPromptToolSession(session.promptToolSession, {
                            resolvedModelId: session.attempt?.resolvedModel.modelId
                        }) ?? session.promptToolSession;
                        session.attempt?.reportAgentRunRequest?.(()=>new AgentRunRequest({
                                conversationState: attemptInput.state,
                                action: attemptInput.action,
                                modelDetails,
                                mcpTools: mcpToolDefinitionsToProto(mcpTools),
                                conversationId: runOptions.conversationId
                            }));
                        const agent = new AnysphereAgent(config2, agentPromptToolSession, attemptListener, turnResources, turnBlobStore, createLocalLoopSummarizationHandler({
                            promptSession: session.summarizationPromptSession ?? session.promptSession,
                            summarization: session.attempt?.summarization,
                            contextWindowTokens: session.attempt?.resolvedModelMetadata?.agentTokenLimit
                        }), conversationActionReceiver);
                        ttftBreakdownEmitter.markRunStreamStart();
                        finalState = await agent.runStream(admittedCtx, toRedactedConversationStateStructure(attemptInput.state, privacyMode), redactedAction, mcpTools, (checkpointCtx, checkpointState)=>attemptInput.checkpointHandler.handleCheckpoint(checkpointCtx, checkpointState));
                        conversationActionReceiver.endRun();
                        const orphaned = pendingSummary === void 0 ? void 0 : this.orphanedGenerationOf(pendingSummary.conversationId, attemptOwner);
                        if (orphaned === void 0) {
                            await attemptRelease.release({
                                turnCompleted: true
                            });
                            runCtx.signal.removeEventListener("abort", forwardRunAbort);
                            return;
                        }
                        runCtx.signal.removeEventListener("abort", forwardRunAbort);
                        logger130.info(admittedCtx, "[summarization-hold] Keeping the attempt open for the background summarization still running at turn end", {
                            requestId,
                            attemptRequestId: attemptInput.attemptRequestId,
                            summarizerModel: orphaned.promiseInfo.modelId,
                            holdTimeoutMs: this.orphanedSummaryHoldTimeoutMs
                        });
                        void attemptRelease.park(orphaned.promiseInfo.promise, this.orphanedSummaryHoldTimeoutMs, {
                            turnCompleted: true
                        });
                    },
                    classify: (error3, attemptState)=>{
                        if (error3 instanceof MaxStepsReachedError2) {
                            const errorOptions = {
                                cause: error3,
                                requestId: attemptState.attemptRequestId
                            };
                            return {
                                action: "throw",
                                error: error3.maxSteps === runOptions.maxSteps ? new MaxStepsReachedError(error3.maxSteps, errorOptions) : new NonRetriableError(error3.message, errorOptions)
                            };
                        }
                        const decision = classifyForRetry(error3, resolveAgentRetryPolicy(runOptions, attemptState, this.options.retryCaps), {
                            ...attemptState,
                            retriesEnabled: runOptions.enableAgentRetries === true,
                            abortOrigin: localLoopAbortOrigin(error3),
                            ...attemptTransport.transportMode === void 0 ? {} : {
                                attemptTransportMode: attemptTransport.transportMode
                            }
                        });
                        if (decision.action === "throw") {
                            relayedFailures.set(decision.error, {
                                transport: decision.countAsTransportError === true,
                                ...localLoopAttemptFailure(error3),
                                ...decision.transportFailureKind === void 0 ? {} : {
                                    transportFailureKind: decision.transportFailureKind
                                },
                                loop: "local_loop",
                                ...attemptTransport
                            });
                        }
                        return decision;
                    },
                    buildNonRetriedErrorInfo: (base)=>({
                            ...base,
                            stallAborted: isLocalLoopAttemptStall(base.error),
                            abortSources: isLocalLoopAttemptStall(base.error) ? [
                                "stall_detector"
                            ] : []
                        }),
                    reconnectTrigger: (error3, decision, info2)=>{
                        const failure2 = localLoopAttemptFailure(error3);
                        return {
                            errorClass: failure2.errorName,
                            connectCode: failure2.connectCode,
                            connectCodeName: failure2.connectCodeName,
                            countAsServerError: decision.countAsServerError,
                            countAsTransportError: decision.countAsTransportError,
                            stallAborted: failure2.stallAborted,
                            originatingRequestId: info2.originalRequestId,
                            attemptRequestId: info2.failedAttemptRequestId,
                            ...attemptTransport,
                            ...this.options.reconnectEndpoint === void 0 ? {} : {
                                endpointUrl: this.options.reconnectEndpoint
                            }
                        };
                    }
                }
            });
        } catch (error3) {
            runStatus = runCtx.canceled || error3 instanceof CancelledError ? "aborted" : "errored";
            throw error3;
        } finally{
            turnFailureHold.flushHeld(runCtx);
            conversationActionReceiver.endRun();
            await attemptRelease.release(LOCAL_LOOP_TURN_NOT_COMPLETED);
            conversationActionManager.signal.removeEventListener("abort", onManagerAbort);
            telemetryBlobStore?.flushAllPending(ctx);
            try {
                turnLabeling?.onRunFinished(runStatus, finalState);
            } catch (error3) {
                logger130.warn(ctx, "Local loop turn labeling failed", {
                    requestId,
                    error: error3
                });
            }
            try {
                await this.options.onRunFinished?.(ctx, {
                    requestId,
                    status: runStatus
                });
            } catch (error3) {
                logger130.error(ctx, "Local loop onRunFinished hook failed", {
                    requestId,
                    error: error3
                });
            }
        }
    }
    createTurnLabeling(input) {
        try {
            return this.options.createTurnLabeling?.(input);
        } catch (error3) {
            logger130.warn(input.ctx, "Local loop turn labeling setup failed", {
                requestId: input.requestId,
                error: error3
            });
            return void 0;
        }
    }
    resolvePrivacyMode(ctx, requestId) {
        let privacyMode;
        try {
            privacyMode = this.options.getPrivacyMode();
        } catch  {
            privacyMode = void 0;
        }
        if (privacyMode === void 0) {
            logger130.warn(ctx, "Privacy mode unresolved; assuming NO_STORAGE", {
                requestId
            });
            return PrivacyMode.NO_STORAGE;
        }
        return privacyMode;
    }
};
relayedFailures = new WeakMap();

}
