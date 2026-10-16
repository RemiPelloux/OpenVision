import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT, SubagentFinalMessageAccumulator } from "../../../agent-exec/dist/subagent-final-message.js";
import { SubagentLifecycleManager } from "../../../agent-exec/dist/subagent-lifecycle-store.js";
import { RUNNING_SUBAGENT_FOLLOWUP_ERROR } from "../../../agent-exec/dist/subagent.js";
import { DurableSubagentInvocationCoordinator, init_durable_subagent_invocation } from "./durable-subagent-invocation.js";
import { init_hosted_child_last_turn_model } from "./hosted-child-last-turn-model.js";
import { init_hosted_child_lineage } from "./hosted-child-lineage.js";
import { init_hosted_child_request_context } from "./hosted-child-request-context.js";
import { init_request_context_decoration } from "./request-context-decoration.js";
import { init_store } from "./store.js";
import { init_subagent_background_await } from "./subagent-background-await.js";
import { SubagentChildCompletionLedger, init_subagent_child_completions } from "./subagent-child-completions.js";
import { init_subagent_continuation } from "./subagent-continuation.js";
import { HostedSubagentTurnControl, init_subagent_hosted_turn_control } from "./subagent-hosted-turn-control.js";
import { SUBAGENT_INTERACTION_NOT_AVAILABLE_REASON, init_subagent_interaction_policy } from "./subagent-interaction-policy.js";
import { init_subagent_learned_root } from "./subagent-learned-root.js";
import { UUID_REGEX, init_subagent_run_contract } from "./subagent-run-contract.js";
import { DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING, LocalSubagentRunSlots, init_subagent_run_settings } from "./subagent-run-settings.js";
import { HostLocalSubagentSpawnMetrics, init_subagent_spawn_metrics } from "./subagent-spawn-metrics.js";
import { LocalSubagentStoreMountTracker, init_subagent_store_mounts } from "./subagent-store-mounts.js";
import { init_subagent_transcript_writer } from "./subagent-transcript-writer.js";
import { init_turn_runner2 } from "./turn-runner.js";
import { init_action_adapters } from "../kernel/action-adapters.js";
import { init_interaction_registry } from "../kernel/interaction-registry.js";
import { init_proto_clone } from "../kernel/proto-clone.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_local_subagent } from "../../../agent-store/sync/dist/local-subagent.js";
import { init_dist } from "../../../context/dist/index.js";
import { buildLocalSubagentLimitError, createListableReadonlyResourceAccessor, encodeBackgroundWorkMetadata, hasSubagentPrompt } from "../../../dist_exports.js";
import { ForceBackgroundSubagentResult, ForceBackgroundSubagentStatus, SubagentArgs, init_subagent_exec_pb } from "../../../proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { SubagentBackgroundReason } from "../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { applyParentFieldFallbacks, argsWithLearnedRoot, assertValidResumeAgentId, awaitBackgroundRun, backgroundRunKey, buildChildSessionOptions, buildHeadlessSubagentInteractionResponse, cloneConversationState, createAgentSessionStore, createSubagentTranscriptWriter, embedHostedChildRequestContext, enforceSubagentInteractionPolicy, executeSubagentWithContinuation, getActiveLocalSubagentStoreMounter, getBackgroundTitle, getCompletionDetail, hostedChildIdentity, hostedChildLineageFromArgs, isAwaitBackgroundMode, isFollowupToExistingChild, isInterruptFollowup, mergeRequestContextOverlay, mergeRunRequestHeaders, rejectHostQuestion, resolveDispatchArgs, resolveHostedChildTurnModel, resolveLiveRootSessionId, resolveMaxRunningLocalChildren, resolveSubagentAgentMode, resolveSubagentExecutionTarget, resolveSubagentInteractionPolicy, routeSubagentHostQuestion, runTurn, sanitizeParentRequestContextForChild, toBlobEncryptionKeyHeaders, toCompletionStatus, validateWatchVideoAttachments, withHostedChildRequestContextDecoration, withParentRequestContext, withRequestContextDecoration, withTurnRequestIdLineage } from "../../../tree_chunk_napi_exports.js";
var import_node_crypto53, MAX_PENDING_FOREGROUND_BACKGROUND_TOOL_CALL_IDS, logger125, HeadlessSubagentHostAdapter;
export { HeadlessSubagentHostAdapter, MAX_PENDING_FOREGROUND_BACKGROUND_TOOL_CALL_IDS, import_node_crypto53, logger125 };
var __wakaru_init_subagent_host_adapter_initialized = false;
export function init_subagent_host_adapter() {
if (__wakaru_init_subagent_host_adapter_initialized) return;
__wakaru_init_subagent_host_adapter_initialized = true;
"use strict";
import_node_crypto53 = require("node:crypto");
init_dist8();
init_local_subagent();
init_dist();
init_subagent_exec_pb();
init_action_adapters();
init_interaction_registry();
init_proto_clone();
init_durable_subagent_invocation();
init_hosted_child_last_turn_model();
init_hosted_child_lineage();
init_hosted_child_request_context();
init_request_context_decoration();
init_store();
init_subagent_background_await();
init_subagent_child_completions();
init_subagent_continuation();
init_subagent_hosted_turn_control();
init_subagent_interaction_policy();
init_subagent_learned_root();
init_subagent_run_contract();
init_subagent_run_settings();
init_subagent_spawn_metrics();
init_subagent_store_mounts();
init_subagent_transcript_writer();
init_turn_runner2();
MAX_PENDING_FOREGROUND_BACKGROUND_TOOL_CALL_IDS = 100;
logger125 = createLogger("agent-host:subagent-host-adapter");
HeadlessSubagentHostAdapter = class {
    constructor(options2){
        this.options = options2;
        this.sessions = new Map();
        this.hostedChildByIdentity = new Map();
        this.mintInFlightByIdentity = new Map();
        this.backgroundRuns = new Map();
        this.backgroundPromises = new Set();
        this.interruptedBackgroundRunKeys = new Set();
        this.activeForegroundExecutions = new Map();
        this.pendingForegroundBackgroundToolCallIds = new Set();
        this.lifecycleStore = new SubagentLifecycleManager();
        this.storeMounts = new LocalSubagentStoreMountTracker({
            resolveMounter: ()=>(this.options.resolveLocalSubagentStoreMounter ?? getActiveLocalSubagentStoreMounter)(),
            resolveParentStoreId: (args)=>args.parentConversationId?.trim() || this.options.parentConversationId
        });
        this.childCompletions = new SubagentChildCompletionLedger({
            isTrackedSpawner: (parentId)=>this.sessions.has(parentId) || this.ownSessionCollectEnabled && parentId === this.options.parentConversationId
        });
        this.ownSessionCollectEnabled = false;
        this.fallbackLocalRunSlots = new LocalSubagentRunSlots();
        this.turnAbortRequestedAgentIds = new Set();
        this.localSpawnMetrics = new HostLocalSubagentSpawnMetrics(options2.metrics, ()=>options2.getLocalSubagentSpawnSurfaceKind?.() ?? "agent");
        this.durableInvocations = new DurableSubagentInvocationCoordinator({
            enabled: options2.subagentsAsSessions === true,
            parentSessionId: options2.parentConversationId,
            rootSessionId: options2.rootSessionId ?? options2.parentConversationId,
            ...options2.getRootSessionId === void 0 ? {} : {
                getRootSessionId: options2.getRootSessionId
            },
            store: options2.durableSubagentInvocations,
            ...options2.findExistingChildSessionId === void 0 ? {} : {
                findExistingChildSessionId: options2.findExistingChildSessionId
            },
            isValidChildSessionId: (value)=>UUID_REGEX.test(value)
        });
    }
    getOwnSessionChildCollectControl() {
        return {
            enableCollect: ()=>{
                this.ownSessionCollectEnabled = true;
            },
            collectAvailableChildCompletions: (signal)=>this.childCompletions.collectAvailableChildCompletions(this.options.parentConversationId, signal),
            cleanup: ()=>{
                this.ownSessionCollectEnabled = false;
                this.childCompletions.cleanupChildCompletionState(this.options.parentConversationId);
            }
        };
    }
    tryAcquireLocalRunSlot() {
        const slots = this.options.getLocalRunSlots?.() ?? this.fallbackLocalRunSlots;
        return slots.tryAcquire(resolveMaxRunningLocalChildren(this.options.localSubagentLimits?.maxRunning, DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING));
    }
    async createOrResumeSession(ctx, args) {
        const executionTarget = resolveSubagentExecutionTarget(args.environment);
        validateWatchVideoAttachments(args);
        return this.localSpawnMetrics.createOrResume(ctx, args, executionTarget === "local" && !isAwaitBackgroundMode(args), async ()=>{
            const forkAgentId = args.forkAgentId?.trim() ?? "";
            this.durableInvocations.clearReplayForExplicitContinuation(args);
            if (args.resumeAgentId && forkAgentId) {
                throw new Error("Cannot set both resumeAgentId and forkAgentId for the same subagent request.");
            }
            if (executionTarget === "cloud") {
                const cloudSubagentRunner = this.requireCloudSubagentRunner();
                const isInterrupt = isInterruptFollowup(args);
                if (!isInterrupt) {
                    this.throwIfFollowupTargetsBusyRun(args);
                }
                const hopArgs = argsWithLearnedRoot(args, this.options);
                const cloudAgentId = await cloudSubagentRunner.createOrResumeCloudSubagent(ctx, hopArgs);
                if (isInterrupt) {
                    this.detachBusyCloudRunForInterrupt(args);
                }
                if (cloudSubagentRunner.ownsCloudChildLifecycle === true) {
                    this.options.emitSubagentStarted?.({
                        turnId: this.options.getParentActiveTurnId?.()?.trim() || "",
                        parentToolCallId: args.toolCallId.trim(),
                        childSessionId: cloudAgentId,
                        rootSessionId: hopArgs.rootParentConversationId?.trim() || resolveLiveRootSessionId(this.options)
                    });
                }
                return cloudAgentId;
            }
            if (forkAgentId && (forkAgentId !== (args.parentConversationId?.trim() ?? "") || forkAgentId !== this.options.parentConversationId)) {
                throw new Error("Forking an existing child is not supported in headless subagents; only self-forking the running parent is supported.");
            }
            if (forkAgentId && this.options.subagentsAsSessions !== true) {
                throw new Error("Self-forking requires subagentsAsSessions in headless subagents.");
            }
            const identity = hostedChildIdentity(args);
            const mintInFlight = identity === void 0 ? void 0 : this.mintInFlightByIdentity.get(identity);
            if (mintInFlight !== void 0) {
                return await mintInFlight;
            }
            const inMemoryChildSessionId = identity === void 0 ? void 0 : this.hostedChildByIdentity.get(identity);
            const indexedReplayResumeAgentId = await this.durableInvocations.findIndexedReplayChild(args, inMemoryChildSessionId !== void 0 && this.sessions.has(inMemoryChildSessionId));
            const proposedChildSessionId = inMemoryChildSessionId ?? (0, import_node_crypto53.randomUUID)();
            const durableDisposition = await this.durableInvocations.claim({
                args,
                proposedChildSessionId,
                ...indexedReplayResumeAgentId === void 0 ? {} : {
                    indexedChildSessionId: indexedReplayResumeAgentId
                }
            });
            const claimedChildSessionId = durableDisposition?.claimedChildSessionId;
            let replayResumeAgentId = durableDisposition?.replayResumeAgentId;
            if (durableDisposition === void 0) {
                replayResumeAgentId = indexedReplayResumeAgentId;
            }
            if (replayResumeAgentId !== void 0) {
                args = new SubagentArgs({
                    ...args,
                    resumeAgentId: replayResumeAgentId
                });
                this.durableInvocations.rememberVerifiedReplayChild(replayResumeAgentId);
            }
            const resumeAgentId = args.resumeAgentId;
            if (resumeAgentId) {
                assertValidResumeAgentId(resumeAgentId);
            }
            if (resumeAgentId && !args.prompt) {
                return resumeAgentId;
            }
            if (replayResumeAgentId === void 0) {
                if (isInterruptFollowup(args)) {
                    await this.interruptBusyLocalBackgroundRun(args);
                } else {
                    this.throwIfFollowupTargetsBusyRun(args);
                }
            }
            if (resumeAgentId && this.sessions.has(resumeAgentId)) {
                return resumeAgentId;
            }
            if (this.options.subagentsAsSessions === true) {
                const requireExistingChild = resumeAgentId !== void 0 && replayResumeAgentId === void 0 && claimedChildSessionId === void 0;
                return this.createOrResumeHostedChildSession(ctx, args, resumeAgentId, claimedChildSessionId, requireExistingChild);
            }
            const agentId = resumeAgentId ?? (0, import_node_crypto53.randomUUID)();
            const store = createAgentSessionStore(agentId);
            const transcriptWriter = this.createTranscriptWriter(agentId, store, args);
            this.sessions.set(agentId, {
                store,
                toolCallId: args.toolCallId,
                ...transcriptWriter === void 0 ? {} : {
                    transcriptWriter
                }
            });
            this.childCompletions.registerParentChildLink(agentId, args.parentConversationId);
            return agentId;
        });
    }
    createTranscriptWriter(agentId, store, args) {
        return createSubagentTranscriptWriter({
            spec: this.options.subagentTranscripts,
            conversationId: agentId,
            parentConversationId: args.parentConversationId?.trim() || this.options.parentConversationId,
            blobStore: store.getBlobStore()
        });
    }
    async createOrResumeHostedChildSession(ctx, args, resumeAgentId, claimedChildSessionId, requireExistingChild) {
        const identity = hostedChildIdentity(args);
        if (identity !== void 0) {
            const existingId = this.hostedChildByIdentity.get(identity);
            if (existingId !== void 0 && this.sessions.has(existingId)) {
                return existingId;
            }
            const inFlight = this.mintInFlightByIdentity.get(identity);
            if (inFlight !== void 0) {
                return inFlight;
            }
            const mintPromise = (async ()=>{
                const agentId2 = claimedChildSessionId ?? resumeAgentId ?? this.hostedChildByIdentity.get(identity) ?? (0, import_node_crypto53.randomUUID)();
                if (!this.sessions.has(agentId2)) {
                    await this.mintHostedChildSession(ctx, agentId2, args, requireExistingChild);
                } else {
                    this.hostedChildByIdentity.set(identity, agentId2);
                }
                return agentId2;
            })();
            this.mintInFlightByIdentity.set(identity, mintPromise);
            try {
                return await mintPromise;
            } finally{
                if (this.mintInFlightByIdentity.get(identity) === mintPromise) {
                    this.mintInFlightByIdentity.delete(identity);
                }
            }
        }
        const agentId = claimedChildSessionId ?? resumeAgentId ?? (0, import_node_crypto53.randomUUID)();
        if (!this.sessions.has(agentId)) {
            await this.mintHostedChildSession(ctx, agentId, args, requireExistingChild);
        }
        return agentId;
    }
    async mintHostedChildSession(ctx, agentId, args, requireExistingChild) {
        const createChildSession = this.options.createChildSession;
        if (createChildSession === void 0) {
            throw new Error("subagentsAsSessions requires createChildSession to be configured");
        }
        const rootSessionId = resolveLiveRootSessionId(this.options);
        const parentToolCallId = args.toolCallId.trim();
        const sessionOptions = buildChildSessionOptions(this.options.childInteractionPolicy);
        const isSelfFork = (args.forkAgentId?.trim() ?? "").length > 0;
        const latestParentCheckpoint = this.options.getLatestParentCheckpoint;
        const getParentBlobStore = this.options.getParentBlobStore;
        let initialHistory;
        if (isSelfFork && latestParentCheckpoint === void 0) {
            throw new Error("Self-forking requires getLatestParentCheckpoint to be configured.");
        }
        if (isSelfFork && latestParentCheckpoint !== void 0) {
            initialHistory = latestParentCheckpoint().clone();
        }
        if (isSelfFork && getParentBlobStore === void 0) {
            throw new Error("Self-forking requires getParentBlobStore to be configured.");
        }
        const adoptVerifiedDurableChild = this.durableInvocations.takeVerifiedReplayChild(agentId);
        const child = await createChildSession(ctx, {
            sessionId: agentId,
            ...initialHistory === void 0 ? {} : {
                initialHistory
            },
            ...sessionOptions === void 0 ? {} : {
                sessionOptions
            }
        }, {
            parent: {
                parentSessionId: this.options.parentConversationId,
                parentToolCallId,
                rootSessionId
            },
            ...adoptVerifiedDurableChild ? {
                adoptVerifiedDurableChild: true
            } : {},
            ...requireExistingChild ? {
                requireExistingChild: true
            } : {}
        }, isSelfFork ? getParentBlobStore?.() : void 0);
        const interactionPolicy = resolveSubagentInteractionPolicy(child.interactionPolicy ?? this.options.childInteractionPolicy);
        const transcriptWriter = this.createTranscriptWriter(agentId, child.store, args);
        this.sessions.set(agentId, {
            store: child.store,
            toolCallId: args.toolCallId,
            hosted: {
                interactionListener: child.interactionListener,
                appendConversationState: child.appendConversationState,
                beginBlobReadSummary: child.beginBlobReadSummary,
                appendTurnStarted: child.appendTurnStarted,
                appendTurnCompleted: child.appendTurnCompleted,
                appendTurnSettledByError: child.appendTurnSettledByError,
                appendTurnCancelled: child.appendTurnCancelled,
                appendTurnInteractionsSuperseded: child.appendTurnInteractionsSuperseded,
                setActiveTurnId: child.setActiveTurnId,
                interactionPolicy,
                subagentExecutor: child.subagentExecutor,
                subagentAwaitExecutor: child.subagentAwaitExecutor,
                forceBackgroundSubagentExecutor: child.forceBackgroundSubagentExecutor,
                subagentCollectControl: child.subagentCollectControl,
                ...child.surfaceInteraction === void 0 ? {} : {
                    surfaceInteraction: child.surfaceInteraction
                },
                ...child.surfaceHostQuestion === void 0 ? {} : {
                    surfaceHostQuestion: child.surfaceHostQuestion
                }
            },
            ...transcriptWriter === void 0 ? {} : {
                transcriptWriter
            }
        });
        this.childCompletions.registerParentChildLink(agentId, args.parentConversationId);
        const identity = hostedChildIdentity(args);
        if (identity !== void 0) {
            this.hostedChildByIdentity.set(identity, agentId);
        }
        this.options.emitSubagentStarted?.({
            turnId: this.options.getParentActiveTurnId?.()?.trim() || "",
            parentToolCallId,
            childSessionId: agentId,
            rootSessionId
        });
    }
    async runSession(ctx, agentId, args, options2) {
        return this.localSpawnMetrics.run(ctx, args, ()=>this.durableInvocations.runOnce(args, ()=>this.runSessionOnce(ctx, agentId, args, options2)));
    }
    async runSessionOnce(ctx, agentId, args, _options) {
        validateWatchVideoAttachments(args);
        const executionTarget = resolveSubagentExecutionTarget(args.environment);
        if (executionTarget === "local" && isAwaitBackgroundMode(args)) {
            return awaitBackgroundRun(this, args.resumeAgentId, ctx);
        }
        if (executionTarget === "local") {
            const durableOutcome = this.durableInvocations.completedOutcome({
                parentToolCallId: args.toolCallId,
                childSessionId: agentId
            });
            if (durableOutcome !== void 0) {
                return durableOutcome;
            }
        }
        let executeRun;
        if (executionTarget === "cloud") {
            const cloudSubagentRunner = this.requireCloudSubagentRunner();
            executeRun = (runCtx2)=>cloudSubagentRunner.runCloudSubagent(runCtx2, agentId, argsWithLearnedRoot(args, this.options));
        } else {
            const session = this.sessions.get(agentId);
            if (!session) {
                return {
                    status: "error",
                    error: `Subagent session not found: ${agentId}`
                };
            }
            let releaseLocalRunSlot;
            if (hasSubagentPrompt(args.prompt)) {
                releaseLocalRunSlot = this.tryAcquireLocalRunSlot();
                if (releaseLocalRunSlot === void 0) {
                    return {
                        status: "error",
                        error: buildLocalSubagentLimitError({
                            maxRunning: resolveMaxRunningLocalChildren(this.options.localSubagentLimits?.maxRunning, DEFAULT_LOCAL_SUBAGENT_MAX_RUNNING)
                        })
                    };
                }
            }
            const releaseSlot = releaseLocalRunSlot;
            executeRun = async (runCtx2)=>{
                try {
                    const parentMaxMode = this.options.getParentEffectiveMaxMode?.(args.parentConversationId?.trim() || this.options.parentConversationId);
                    return await this.executeSubagent(runCtx2, agentId, args, {
                        ...session,
                        parentMaxMode
                    });
                } catch (error3) {
                    if (runCtx2.signal.aborted) {
                        return {
                            status: "aborted",
                            error: "Subagent was aborted"
                        };
                    }
                    return {
                        status: "error",
                        error: error3 instanceof Error ? error3.message : String(error3)
                    };
                } finally{
                    releaseSlot?.();
                }
            };
        }
        if (args.runInBackground) {
            const [backgroundCtx, abortBackground] = ctx.withDetached().withCancel();
            const backgroundRun = this.registerBackgroundRun(agentId, executeRun(backgroundCtx), args, abortBackground);
            const transcriptPath = await this.ensureBackgroundTranscriptPath(ctx, agentId);
            backgroundRun.transcriptPath = transcriptPath;
            const outcome = {
                status: "background",
                backgroundReason: SubagentBackgroundReason.AGENT_REQUEST,
                ...transcriptPath === void 0 ? {} : {
                    transcriptPath
                },
                toolCallCount: 0
            };
            await this.durableInvocations.markCompleted(args, agentId, outcome);
            return outcome;
        }
        const [runCtx, cancelRun] = ctx.withDetached().withCancel();
        let backgroundRequested = false;
        const forwardAbort = ()=>{
            if (!backgroundRequested) {
                cancelRun();
            }
        };
        ctx.signal.addEventListener("abort", forwardAbort, {
            once: true
        });
        if (ctx.signal.aborted) {
            forwardAbort();
        }
        const runPromise = executeRun(runCtx);
        const backgroundRequest = Promise.withResolvers();
        const toolCallId = args.toolCallId.trim();
        const cancelBubbledOnBackground = ()=>{
            this.options.cancelBubbledInteractionToParent?.({
                childSessionId: agentId,
                parentToolCallId: toolCallId
            }, "Subagent force-backgrounded; cancelling pending bubbled interaction");
        };
        const foregroundExecution = {
            requestBackground: ()=>{
                if (backgroundRequested) {
                    return true;
                }
                backgroundRequested = true;
                cancelBubbledOnBackground();
                ctx.signal.removeEventListener("abort", forwardAbort);
                backgroundRequest.resolve();
                return true;
            }
        };
        if (toolCallId) {
            this.activeForegroundExecutions.set(toolCallId, foregroundExecution);
        }
        this.activeForegroundExecutions.set(agentId, foregroundExecution);
        const hadPendingToolCallId = toolCallId ? this.pendingForegroundBackgroundToolCallIds.delete(toolCallId) : false;
        const hadPendingAgentId = this.pendingForegroundBackgroundToolCallIds.delete(agentId);
        if (hadPendingToolCallId || hadPendingAgentId) {
            foregroundExecution.requestBackground();
        }
        try {
            const result = await Promise.race([
                runPromise.then((outcome)=>({
                        case: "completed",
                        outcome
                    })),
                backgroundRequest.promise.then(()=>({
                        case: "backgrounded"
                    }))
            ]);
            if (result.case === "backgrounded") {
                cancelBubbledOnBackground();
                const backgroundRun = !runCtx.signal.aborted && !this.turnAbortRequestedAgentIds.has(agentId) ? this.registerBackgroundRun(agentId, runPromise, args, cancelRun) : void 0;
                if (backgroundRun === void 0) {
                    this.childCompletions.removeParentChildLink(agentId);
                }
                const transcriptPath = await this.ensureBackgroundTranscriptPath(ctx, agentId);
                if (backgroundRun !== void 0) {
                    backgroundRun.transcriptPath = transcriptPath;
                }
                const outcome = {
                    status: "background",
                    backgroundReason: SubagentBackgroundReason.USER_REQUEST,
                    ...transcriptPath === void 0 ? {} : {
                        transcriptPath
                    },
                    toolCallCount: 0
                };
                await this.durableInvocations.markCompleted(args, agentId, outcome);
                return outcome;
            }
            this.childCompletions.removeParentChildLink(agentId);
            await this.durableInvocations.markCompleted(args, agentId, result.outcome);
            return result.outcome;
        } finally{
            if (toolCallId && this.activeForegroundExecutions.get(toolCallId) === foregroundExecution) {
                this.activeForegroundExecutions.delete(toolCallId);
            }
            if (this.activeForegroundExecutions.get(agentId) === foregroundExecution) {
                this.activeForegroundExecutions.delete(agentId);
            }
            if (!backgroundRequested) {
                ctx.signal.removeEventListener("abort", forwardAbort);
            }
        }
    }
    async ensureBackgroundTranscriptPath(ctx, agentId) {
        return this.sessions.get(agentId)?.transcriptWriter?.ensureTranscriptFile(ctx);
    }
    releaseSession(agentId) {
        this.lifecycleStore.release(agentId);
        if (this.isBackgroundRunBusy(agentId)) {
            this.childCompletions.deferCleanup(agentId);
            return;
        }
        this.childCompletions.cleanupChildCompletionState(agentId);
        this.sessions.get(agentId)?.hosted?.subagentCollectControl?.cleanup();
        const session = this.sessions.get(agentId);
        if (session?.hosted !== void 0) {
            return;
        }
        this.sessions.delete(agentId);
    }
    async forceBackgroundByToolCallId(toolCallId) {
        const id = toolCallId.trim();
        if (!id) {
            return new ForceBackgroundSubagentResult({
                status: ForceBackgroundSubagentStatus.NOT_FOUND
            });
        }
        const execution = this.activeForegroundExecutions.get(id);
        let status;
        if (execution) {
            status = execution.requestBackground() ? ForceBackgroundSubagentStatus.ACCEPTED : ForceBackgroundSubagentStatus.NOT_FOUND;
        } else {
            if (this.pendingForegroundBackgroundToolCallIds.size >= MAX_PENDING_FOREGROUND_BACKGROUND_TOOL_CALL_IDS) {
                const oldest = this.pendingForegroundBackgroundToolCallIds.values().next().value;
                if (oldest !== void 0) {
                    this.pendingForegroundBackgroundToolCallIds.delete(oldest);
                }
            }
            this.pendingForegroundBackgroundToolCallIds.add(id);
            status = ForceBackgroundSubagentStatus.ACCEPTED;
        }
        return new ForceBackgroundSubagentResult({
            status
        });
    }
    isBackgroundRunBusy(agentId) {
        return this.lifecycleStore.isBusy(agentId) || this.backgroundRuns.has(agentId);
    }
    getTrackedBackgroundRun(agentId) {
        return this.backgroundRuns.get(agentId);
    }
    throwIfFollowupTargetsBusyRun(args) {
        if (isFollowupToExistingChild(args) && this.isBackgroundRunBusy(args.resumeAgentId)) {
            throw new Error(RUNNING_SUBAGENT_FOLLOWUP_ERROR);
        }
    }
    async interruptBusyLocalBackgroundRun(args) {
        const agentId = args.resumeAgentId;
        const entry = agentId ? this.backgroundRuns.get(agentId) : void 0;
        if (!agentId || entry === void 0) {
            this.throwIfFollowupTargetsBusyRun(args);
            return;
        }
        this.interruptedBackgroundRunKeys.add(backgroundRunKey(agentId, entry.runId));
        this.lifecycleStore.abort(agentId);
        await entry.promise;
    }
    detachBusyCloudRunForInterrupt(args) {
        const agentId = args.resumeAgentId;
        const entry = agentId ? this.backgroundRuns.get(agentId) : void 0;
        if (!agentId || entry === void 0) {
            return;
        }
        this.backgroundRuns.delete(agentId);
        this.lifecycleStore.finishRun(agentId, entry.runId);
    }
    requireCloudSubagentRunner() {
        if (this.options.getParentToolRestriction?.() !== void 0) {
            throw new Error("A turn that restricts its tools cannot start a cloud subagent.");
        }
        const unavailableReason = this.options.cloudSubagentsUnavailableReason?.();
        if (unavailableReason !== void 0) {
            throw new Error(unavailableReason);
        }
        if (this.options.cloudSubagentRunner === void 0) {
            throw new Error("Cloud subagent runner is not available.");
        }
        return this.options.cloudSubagentRunner;
    }
    registerBackgroundRun(agentId, promise, args, abort) {
        const title = getBackgroundTitle(args, agentId);
        const hostOwnsWakeup = resolveSubagentExecutionTarget(args.environment) !== "cloud";
        const runId = this.lifecycleStore.startRun(agentId, {
            abort
        });
        const trackedPromise = promise.catch((error3)=>({
                status: "error",
                error: error3 instanceof Error ? error3.message : String(error3)
            }));
        const entry = {
            runId,
            promise: trackedPromise
        };
        this.backgroundRuns.set(agentId, entry);
        this.backgroundPromises.add(trackedPromise);
        if (hostOwnsWakeup) {
            this.childCompletions.registerParentChildLink(agentId, args.parentConversationId);
            this.options.backgroundWorkRegistry.upsertWork({
                id: agentId,
                kind: "subagent",
                state: "running",
                ownerId: this.options.parentConversationId,
                abort,
                metadata: encodeBackgroundWorkMetadata({
                    title,
                    startTimeMs: Date.now()
                })
            });
        }
        void trackedPromise.then((outcome)=>{
            this.lifecycleStore.finishRun(agentId, runId);
            const wasInterrupted = this.interruptedBackgroundRunKeys.delete(backgroundRunKey(agentId, runId));
            const current = this.backgroundRuns.get(agentId);
            if (current?.runId === runId) {
                this.backgroundRuns.delete(agentId);
                if (hostOwnsWakeup) {
                    if (!wasInterrupted) {
                        const deliveredToSpawningSubagent = this.childCompletions.enqueueChildCompletion(agentId, outcome);
                        if (!deliveredToSpawningSubagent) {
                            this.options.backgroundWorkRegistry.enqueue({
                                conversationId: this.options.parentConversationId,
                                id: agentId,
                                source: "subagent",
                                payload: {
                                    taskId: agentId,
                                    toolCallId: args.toolCallId || void 0,
                                    kind: "subagent",
                                    status: toCompletionStatus(outcome),
                                    title,
                                    detail: getCompletionDetail(outcome),
                                    reason: "task_finished"
                                }
                            });
                        }
                    }
                    this.options.backgroundWorkRegistry.clearWork(agentId);
                }
                this.maybeCleanupReleasedChildCompletionState(agentId);
            }
            return outcome;
        }).finally(()=>this.backgroundPromises.delete(trackedPromise));
        return entry;
    }
    async executeSubagent(ctx, agentId, args, session) {
        if (!hasSubagentPrompt(args.prompt)) {
            return {
                status: "completed",
                toolCallCount: 0
            };
        }
        await this.localSpawnMetrics.recordStoreInheritance(ctx, args, ()=>this.storeMounts.applyForRun(ctx, agentId, args));
        try {
            const dispatchArgs = await resolveDispatchArgs(ctx, args, {
                ...this.options,
                rootSessionId: resolveLiveRootSessionId(this.options)
            });
            if (dispatchArgs.continuationConfig) {
                return await executeSubagentWithContinuation(ctx, agentId, dispatchArgs, dispatchArgs.continuationConfig, {
                    runTurn: (turnCtx, turnArgs)=>this.executeSubagentTurn(turnCtx, agentId, turnArgs, session),
                    collectAvailableChildCompletions: (signal)=>this.childCompletions.collectAvailableChildCompletions(agentId, signal),
                    ...session.hosted?.subagentCollectControl === void 0 ? {} : {
                        hostedCollectControl: session.hosted.subagentCollectControl
                    }
                });
            }
            return await this.executeSubagentTurn(ctx, agentId, dispatchArgs, session);
        } finally{
            await this.storeMounts.clearAfterRun(ctx, agentId);
        }
    }
    async executeSubagentTurn(ctx, agentId, args, session) {
        const finalMessage = new SubagentFinalMessageAccumulator();
        let toolCallCount3 = 0;
        let checkpointedFinalMessage = EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT;
        let checkpointedToolCallCount = 0;
        const hosted = session.hosted;
        const interactionListener = {
            sendUpdate: async (updateCtx, update)=>{
                finalMessage.onUpdate(update);
                if (update.message.case === "toolCallStarted") {
                    toolCallCount3 += 1;
                }
                if (hosted !== void 0) {
                    await hosted.interactionListener.sendUpdate(updateCtx, update);
                }
                if (this.options.onInteractionUpdate !== void 0) {
                    await this.options.onInteractionUpdate(agentId, update, args.toolCallId || void 0);
                }
            },
            query: async (queryCtx, query)=>{
                if (hosted === void 0) {
                    return buildHeadlessSubagentInteractionResponse(query);
                }
                return enforceSubagentInteractionPolicy(queryCtx, {
                    policy: hosted.interactionPolicy,
                    query,
                    correlation: {
                        childSessionId: agentId,
                        parentToolCallId: args.toolCallId.trim()
                    },
                    bubbleToParent: (bubbleCtx, bubbleQuery, correlation)=>{
                        const bubble = this.options.bubbleInteractionToParent;
                        if (bubble === void 0) {
                            throw new Error("BUBBLE_TO_PARENT requires bubbleInteractionToParent to be configured");
                        }
                        return bubble(bubbleCtx, bubbleQuery, correlation);
                    },
                    ...this.options.getParentActiveTurnId === void 0 ? {} : {
                        parentHasActiveTurn: ()=>(this.options.getParentActiveTurnId?.()?.trim() ?? "") !== ""
                    },
                    ...hosted.surfaceInteraction === void 0 ? {} : {
                        surfaceToUser: hosted.surfaceInteraction
                    }
                });
            }
        };
        const askHostQuestion = (askCtx, question)=>{
            if (hosted === void 0) {
                return Promise.resolve(rejectHostQuestion(question, SUBAGENT_INTERACTION_NOT_AVAILABLE_REASON));
            }
            return routeSubagentHostQuestion(askCtx, {
                question,
                correlation: {
                    childSessionId: agentId,
                    parentToolCallId: args.toolCallId.trim()
                },
                bubbleToParent: (bubbleCtx, bubbleQuestion, correlation)=>{
                    const bubble = this.options.bubbleHostQuestionToParent;
                    if (bubble === void 0) {
                        throw new Error("Bubbling a Host question requires bubbleHostQuestionToParent");
                    }
                    return bubble(bubbleCtx, bubbleQuestion, correlation);
                },
                ...this.options.getParentActiveTurnId === void 0 ? {} : {
                    parentHasActiveTurn: ()=>(this.options.getParentActiveTurnId?.()?.trim() ?? "") !== ""
                },
                ...hosted.surfaceHostQuestion === void 0 ? {} : {
                    surfaceToUser: hosted.surfaceHostQuestion
                }
            });
        };
        const baseResources = this.options.getResources({
            agentId,
            parentAgentId: args.parentConversationId,
            askHostQuestion,
            ...hosted?.subagentExecutor === void 0 ? {} : {
                childSubagentExecutor: hosted.subagentExecutor
            },
            ...hosted?.subagentAwaitExecutor === void 0 ? {} : {
                childSubagentAwaitExecutor: hosted.subagentAwaitExecutor
            },
            ...hosted?.forceBackgroundSubagentExecutor === void 0 ? {} : {
                childForceBackgroundSubagentExecutor: hosted.forceBackgroundSubagentExecutor
            }
        });
        const parentRequestContext = this.options.getParentRequestContext?.();
        const inheritedRequestContext = parentRequestContext === void 0 ? void 0 : sanitizeParentRequestContextForChild(parentRequestContext);
        const parentRequestContextDecoration = this.options.getParentRequestContextDecoration?.();
        if (inheritedRequestContext !== void 0) {
            mergeRequestContextOverlay(inheritedRequestContext, parentRequestContextDecoration);
        }
        const decoratedResources = withRequestContextDecoration(withParentRequestContext(baseResources, inheritedRequestContext), parentRequestContextDecoration);
        const resources = args.readonly ? createListableReadonlyResourceAccessor(decoratedResources) : decoratedResources;
        const action = await this.durableInvocations.createConversationAction(args, agentId, session.store.getConversationState(), resolveSubagentAgentMode(args));
        const retrySettings = this.options.getParentRetryStallSettings?.();
        const subagentModelSettings = this.options.getParentSubagentModelSettings?.();
        const blobEncryptionKey = this.options.getParentBlobEncryptionKey?.();
        const clientTurnSettings = this.options.getParentClientTurnSettings?.();
        const parentTurnLineage = this.options.getParentTurnLineage?.();
        const lineage = hostedChildLineageFromArgs(ctx, args, parentTurnLineage);
        const toolRestriction = this.options.getParentToolRestriction?.();
        const customSubagents = this.options.getParentCustomSubagents?.();
        const projectFolder = this.options.getParentProjectFolder?.();
        if (inheritedRequestContext !== void 0) {
            applyParentFieldFallbacks(inheritedRequestContext, customSubagents, projectFolder);
        }
        await embedHostedChildRequestContext({
            ctx,
            action,
            resources,
            notesSessionId: agentId,
            ...inheritedRequestContext === void 0 ? {} : {
                parentRequestContext: inheritedRequestContext
            },
            ...customSubagents === void 0 ? {} : {
                parentCustomSubagents: customSubagents
            },
            ...projectFolder === void 0 ? {} : {
                parentProjectFolder: projectFolder
            }
        });
        const requestContextBlobTransport = this.options.getParentRequestContextBlobTransportSettings?.();
        const { requestedModel, modelDetails, lastTurnModel: resolvedLastTurnModel } = await resolveHostedChildTurnModel({
            ctx,
            subagentArgs: args,
            parentMaxMode: session.parentMaxMode,
            retrySettings,
            requestContextBlobTransport,
            ...subagentModelSettings === void 0 ? {} : {
                subagentModelSettings
            },
            ...blobEncryptionKey === void 0 ? {} : {
                blobEncryptionKey
            },
            ...clientTurnSettings === void 0 ? {} : {
                clientTurnSettings
            },
            ...toolRestriction === void 0 ? {} : {
                toolRestriction
            },
            ...customSubagents === void 0 ? {} : {
                customSubagents
            },
            ...projectFolder === void 0 ? {} : {
                projectFolder
            },
            ...inheritedRequestContext === void 0 ? {} : {
                requestContext: inheritedRequestContext
            },
            ...parentRequestContextDecoration?.smartModeClassifierAutoModeEnabled === void 0 ? {} : {
                subagentSmartModeAutoRun: parentRequestContextDecoration.smartModeClassifierAutoModeEnabled
            },
            resolveSavedModelParameters: this.options.resolveSavedModelParameters,
            parentConversationId: this.options.parentConversationId,
            rootSessionId: resolveLiveRootSessionId(this.options)
        });
        const hostedTurnId = hosted === void 0 ? void 0 : (0, import_node_crypto53.randomUUID)();
        const childGenerationUuid = hostedTurnId ?? (0, import_node_crypto53.randomUUID)();
        const lastTurnModel = {
            ...resolvedLastTurnModel,
            requestId: childGenerationUuid,
            ...lineage.parentRequestId === void 0 ? {} : {
                parentRequestId: lineage.parentRequestId
            },
            ...lineage.rootParentRequestId === void 0 ? {} : {
                rootParentRequestId: lineage.rootParentRequestId
            }
        };
        const turnControl = new HostedSubagentTurnControl({
            ctx,
            onAbortRequested: ()=>this.turnAbortRequestedAgentIds.add(agentId)
        });
        const settleHostedTurn = (settle)=>{
            if (hosted === void 0 || hostedTurnId === void 0 || !turnControl.claimSettle()) {
                return;
            }
            try {
                settle(hosted, hostedTurnId);
            } catch (settleError) {
                logger125.warn(ctx, "Hosted child turn settle append failed", {
                    turnId: hostedTurnId,
                    error: String(settleError)
                });
            }
        };
        const cancelBubbledOnAbort = ()=>{
            const parentToolCallId = args.toolCallId.trim();
            if (!parentToolCallId) {
                return;
            }
            this.options.cancelBubbledInteractionToParent?.({
                childSessionId: agentId,
                parentToolCallId
            }, "Subagent was aborted; cancelling pending bubbled interaction");
        };
        let sawTerminalCheckpoint = false;
        const writeTranscriptTurnEnded = (turnEnded)=>session.transcriptWriter?.writeTurnEnded(ctx, session.store.getConversationState(), turnEnded);
        try {
            if (hosted !== void 0 && hostedTurnId !== void 0) {
                hosted.appendTurnStarted(hostedTurnId, withHostedChildRequestContextDecoration(lastTurnModel, parentRequestContextDecoration), turnControl.abortTurn);
                hosted.setActiveTurnId(hostedTurnId);
            }
            const blobReads = hosted?.beginBlobReadSummary(turnControl.turnCtx) ?? {
                ctx: turnControl.turnCtx,
                finish: ()=>{}
            };
            try {
                const childTurnCtx = withTurnRequestIdLineage(blobReads.ctx, {
                    requestId: childGenerationUuid,
                    parentRequestId: lineage.parentRequestId,
                    rootParentRequestId: lineage.rootParentRequestId
                });
                await runTurn({
                    ctx: childTurnCtx,
                    adapter: this.options.adapter,
                    conversationState: session.store.getConversationState(),
                    action,
                    interactionListener,
                    resources,
                    blobStore: session.store.getBlobStore(),
                    checkpointHandler: {
                        handleCheckpoint: async (checkpointCtx, checkpoint, metadata)=>{
                            checkpointedFinalMessage = finalMessage.snapshot();
                            checkpointedToolCallCount = toolCallCount3;
                            if (metadata?.resumeEligibility === "ineligible_terminal_turn") {
                                sawTerminalCheckpoint = true;
                            }
                            await session.store.handleCheckpoint(checkpointCtx, checkpoint);
                            await this.durableInvocations.markCheckpointed(args, agentId);
                            hosted?.appendConversationState(cloneConversationState(checkpoint));
                            session.transcriptWriter?.writeFromState(checkpointCtx, checkpoint);
                        },
                        getLatestCheckpoint: ()=>session.store.getConversationState()
                    },
                    runOptions: {
                        conversationId: agentId,
                        conversationGroupId: resolveLiveRootSessionId(this.options),
                        generationUUID: childGenerationUuid,
                        ...lineage,
                        selectedSubagentModels: [
                            ...subagentModelSettings?.selectedSubagentModels ?? []
                        ],
                        subagentModelOverrides: [
                            ...subagentModelSettings?.subagentModelOverrides ?? []
                        ],
                        enableAgentRetries: retrySettings?.enableAgentRetries ?? false,
                        fixedRetryDelayMs: retrySettings?.fixedRetryDelayMs,
                        endlessRetries: retrySettings?.endlessRetries,
                        stallDetectorConfig: retrySettings?.stallDetectorConfig,
                        isRunningInTest: retrySettings?.isRunningInTest,
                        ...requestContextBlobTransport,
                        headers: mergeRunRequestHeaders(clientTurnSettings?.headers, toBlobEncryptionKeyHeaders(blobEncryptionKey)),
                        maxSteps: clientTurnSettings?.maxSteps,
                        canCreateCloudSubagents: clientTurnSettings?.canCreateCloudSubagents,
                        localLoopGateEnabled: clientTurnSettings?.localLoopGateEnabled,
                        startedAsNewProject: clientTurnSettings?.startedAsNewProject,
                        firstProjectOnboarding: clientTurnSettings?.firstProjectOnboarding,
                        harness: clientTurnSettings?.harness,
                        suggestNextPrompt: clientTurnSettings?.suggestNextPrompt,
                        clientSupportsInlineImages: clientTurnSettings?.clientSupportsInlineImages,
                        clientSupportsPreviewCard: clientTurnSettings?.clientSupportsPreviewCard,
                        clientSupportsSendToUser: clientTurnSettings?.clientSupportsSendToUser,
                        clientSupportsRoutedModelUpdate: clientTurnSettings?.clientSupportsRoutedModelUpdate,
                        toolRestriction,
                        ...customSubagents === void 0 ? {} : {
                            customSubagents: [
                                ...customSubagents
                            ]
                        },
                        ...projectFolder === void 0 ? {} : {
                            projectFolder
                        },
                        onRetryStarting: async (_attempt, info2)=>{
                            if (info2.isResume) {
                                finalMessage.restore(checkpointedFinalMessage);
                                toolCallCount3 = checkpointedToolCallCount;
                            } else {
                                finalMessage.restore(EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT);
                                toolCallCount3 = 0;
                                checkpointedFinalMessage = EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT;
                                checkpointedToolCallCount = 0;
                            }
                            if (hosted !== void 0 && hostedTurnId !== void 0) {
                                hosted.appendTurnInteractionsSuperseded(hostedTurnId, info2.isResume ? {
                                    case: "resumeFromCheckpoint",
                                    value: info2.conversationState
                                } : {
                                    case: "replayActionFromState",
                                    value: info2.conversationState
                                });
                            }
                        },
                        ...requestedModel === void 0 ? {} : {
                            requestedModel
                        }
                    },
                    modelDetails,
                    conversationActionManager: turnControl.conversationActionManager
                });
            } finally{
                blobReads.finish();
            }
            if (turnControl.isAborted()) {
                settleHostedTurn((hostedHandles, settledTurnId)=>hostedHandles.appendTurnCancelled(settledTurnId, turnControl.abortReason ?? "Subagent was aborted", turnControl.abortInitiatedBy));
                cancelBubbledOnAbort();
                await writeTranscriptTurnEnded({
                    status: "aborted"
                });
                return {
                    status: "aborted",
                    error: "Subagent was aborted"
                };
            }
            settleHostedTurn((hostedHandles, settledTurnId)=>hostedHandles.appendTurnCompleted(settledTurnId));
            await writeTranscriptTurnEnded({
                status: "success"
            });
            return {
                status: "completed",
                finalMessage: finalMessage.finalize(),
                toolCallCount: toolCallCount3
            };
        } catch (error3) {
            if (turnControl.isAborted()) {
                settleHostedTurn((hostedHandles, settledTurnId)=>hostedHandles.appendTurnCancelled(settledTurnId, turnControl.abortReason ?? (error3 instanceof Error ? error3.message : "Subagent was aborted"), turnControl.abortInitiatedBy));
                cancelBubbledOnAbort();
                await writeTranscriptTurnEnded({
                    status: "aborted"
                });
                return {
                    status: "aborted",
                    error: "Subagent was aborted"
                };
            }
            if (sawTerminalCheckpoint) {
                finalMessage.restore(checkpointedFinalMessage);
                toolCallCount3 = checkpointedToolCallCount;
                settleHostedTurn((hostedHandles, settledTurnId)=>hostedHandles.appendTurnCompleted(settledTurnId));
                await writeTranscriptTurnEnded({
                    status: "success"
                });
                return {
                    status: "completed",
                    finalMessage: finalMessage.finalize(),
                    toolCallCount: toolCallCount3
                };
            }
            settleHostedTurn((hostedHandles, settledTurnId)=>hostedHandles.appendTurnSettledByError(settledTurnId, error3));
            await writeTranscriptTurnEnded({
                status: "error",
                error: error3 instanceof Error ? error3.message : String(error3)
            });
            return {
                status: "error",
                error: error3 instanceof Error ? error3.message : String(error3)
            };
        } finally{
            turnControl.dispose();
            this.turnAbortRequestedAgentIds.delete(agentId);
            if (hosted !== void 0 && hostedTurnId !== void 0) {
                try {
                    hosted.setActiveTurnId(void 0);
                } catch (clearError) {
                    logger125.warn(ctx, "Clearing hosted child active turn failed", {
                        turnId: hostedTurnId,
                        error: String(clearError)
                    });
                }
            }
        }
    }
    maybeCleanupReleasedChildCompletionState(agentId) {
        if (this.childCompletions.hasDeferredCleanup(agentId) && !this.isBackgroundRunBusy(agentId)) {
            this.childCompletions.cleanupChildCompletionState(agentId);
            this.sessions.get(agentId)?.hosted?.subagentCollectControl?.cleanup();
        }
    }
};

}
