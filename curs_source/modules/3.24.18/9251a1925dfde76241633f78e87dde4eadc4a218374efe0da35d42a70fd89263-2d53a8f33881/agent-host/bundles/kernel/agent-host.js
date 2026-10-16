import { init_default_model } from "../engine/default-model.js";
import { init_hosted_child_last_turn_model } from "../engine/hosted-child-last-turn-model.js";
import { init_action_adapters } from "./action-adapters.js";
import { AppendSessionUpdateCoalescer, init_append_session_update_coalescer } from "./append-session-update-coalescer.js";
import { init_background_wakeup } from "./background-wakeup.js";
import { init_background_work_proto } from "./background-work-proto.js";
import { init_catalog_session_summary } from "./catalog-session-summary.js";
import { init_catalog_session_view } from "./catalog-session-view.js";
import { init_file_read } from "./file-read.js";
import { init_fork_children } from "./fork-children.js";
import { init_proto_clone } from "./proto-clone.js";
import { AgentHostSendNowRequiresUserMessageError, init_send_now } from "./send-now.js";
import { MAX_SESSION_BLOBS_PER_REQUEST, MAX_SESSION_BLOB_ID_BYTES, init_session_blobs } from "./session-blobs.js";
import { init_session_filter_identity } from "./session-filter-identity.js";
import { init_session_list_helpers } from "./session-list-helpers.js";
import { init_session_tree } from "./session-tree.js";
import { AgentHostSessionWatchers, init_session_watchers } from "./session-watchers.js";
import { init_turn_queue } from "./turn-queue.js";
import { init_turn_steering } from "./turn-steering.js";
import { AgentHostWorkspaceListUnsupportedError, init_workspace_list } from "./workspace-list.js";
import { init_client4 } from "../public-api/client.js";
import { init_session_list_filter } from "../session-list-filter.js";
import { assertPathSafeSessionId } from "../storage/agent-host-storage.js";
import { createContext } from "../storage/instruments.js";
import { init_session_id } from "../storage/session-id.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { Timestamp } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js";
import { init_esm2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { AgentHostSendDelivery, AgentHostSessionStatus, AgentHostTurnInterruptInitiator } from "../../../proto/dist/generated/agent/v1/agent_host_pb.js";
import { backgroundCompletionTaskIds, buildBackgroundTaskCompletionAction, buildUserMessageAction, cancelAllQueuedSessionTurns, cancelQueuedSessionTurn, catalogSessionFilterIdentity, cloneConversationState, collectRootAndDescendantSessionIds, compareSessionRecency, createDefaultModelDetails, createPlannedChildForks, ensureChildSessionForReattach, findModelNamedChild, hasListableHistory, hasSendNowRequestFields, interruptSessionTree, interruptSessionTurn, isInjectContextAction, liveSessionFilterIdentity, matchesParentListFilter, matchesWorkspaceAndOwnerFilter, mergeSessionOptions, nextLastTurnModel, planChildForks, queueSessionTurn, readFileChunks, readSessionBlobs, releaseHostedTaskTurns, requestHasWorkspaceOrOwnerFilter, resolveCatalogSessionTitle, resolveCatalogSessionUpdatedAt, resolveFileReadPath, resolveSendBehavior, resolveSessionListLimit, restoreCatalogModelsAdoptedDuringList, rollbackForkCreates, sendInterruptingThenEnqueue, sendReplacingQueuedTurn, stopAllSessionTurns, summarizeTurnQueue, toAgentHostBackgroundWork, toCatalogSessionSummary, toRegistryKindFilter, toRegistryStateFilter, toRunOptions, toWorkspaceDisplayPath, toWorkspaceListRows, toWorkspaceRow, toWorkspaceRowFields, touchSessionActivity, tryPreferredSendNowSteer, turnOptionsForHostOwnedWakeup, turnToolRestriction, wantsSendNow } from "../../../tree_chunk_napi_exports.js";
var logger116, DefaultAgentHost;
export { DefaultAgentHost, logger116 };
var __wakaru_init_agent_host_initialized = false;
export function init_agent_host() {
if (__wakaru_init_agent_host_initialized) return;
__wakaru_init_agent_host_initialized = true;
"use strict";
init_dist();
init_esm2();
init_default_model();
init_hosted_child_last_turn_model();
init_client4();
init_session_list_filter();
init_session_id();
init_action_adapters();
init_append_session_update_coalescer();
init_background_wakeup();
init_background_work_proto();
init_catalog_session_summary();
init_catalog_session_view();
init_file_read();
init_fork_children();
init_proto_clone();
init_send_now();
init_session_blobs();
init_session_filter_identity();
init_session_list_helpers();
init_session_watchers();
init_turn_queue();
init_session_tree();
init_turn_steering();
init_workspace_list();
logger116 = createLogger("agent-host");
DefaultAgentHost = class {
    constructor(options2){
        this.options = options2;
        this.sessions = new Map();
        this.creatingSessionIds = new Set();
        this.deletingSessionIds = new Set();
        this.announcedSessions = new WeakSet();
        this.sessionTitles = new Map();
        this.archivedSessionIds = new Set();
        this.catalogUpdatedAt = new Map();
        this.catalogModelIds = new Map();
        this.catalogWorkspacePaths = new Map();
        this.catalogWorkspaceDisplayPaths = new Map();
        this.catalogOwningClientInstanceIds = new Map();
        this.catalogHostOwnedStorage = new Map();
        this.sessionWatchers = new AgentHostSessionWatchers();
        this.appendSessionUpdates = new AppendSessionUpdateCoalescer({
            isLive: (session)=>this.isLiveSessionInstance(session),
            emitUpdated: (session)=>this.emitSessionUpdatedNow(session)
        });
        const onTitleChanged = options2.sessionCatalog?.onTitleChanged;
        if (onTitleChanged !== void 0) {
            this.unsubscribeCatalogTitleChanged = onTitleChanged((sessionId, title)=>{
                this.applyExternalSessionTitle(sessionId, title);
            });
        }
        const onArchivedChanged = options2.sessionCatalog?.onArchivedChanged;
        if (onArchivedChanged !== void 0) {
            this.unsubscribeCatalogArchivedChanged = onArchivedChanged((sessionId, isArchived)=>{
                this.applyExternalSessionArchived(sessionId, isArchived);
            });
        }
        const onModelChanged = options2.sessionCatalog?.onModelChanged;
        if (onModelChanged !== void 0) {
            this.unsubscribeCatalogModelChanged = onModelChanged((sessionId, modelId)=>{
                this.applyExternalSessionModel(sessionId, modelId);
            });
        }
        const onHostOwnedStorageChanged = options2.sessionCatalog?.onHostOwnedStorageChanged;
        if (onHostOwnedStorageChanged !== void 0) {
            this.unsubscribeCatalogHostOwnedStorageChanged = onHostOwnedStorageChanged((sessionId, hostOwnedStorage)=>{
                this.applyExternalSessionHostOwnedStorage(sessionId, hostOwnedStorage);
            });
        }
    }
    dispose() {
        this.appendSessionUpdates.cancelAll();
        this.disposePromise ??= this.disposeInternal();
        return this.disposePromise;
    }
    async deleteSession(ctx, request3) {
        this.ensureNotDisposing();
        this.validateSessionId(request3.sessionId);
        const session = this.sessions.get(request3.sessionId);
        if (session === void 0) {
            const existedInCatalog = await this.hasLiveOrCatalogSession(ctx, request3.sessionId);
            this.sessionWatchers.emitDeleted(request3.sessionId);
            this.catalogWorkspacePaths.delete(request3.sessionId);
            this.catalogWorkspaceDisplayPaths.delete(request3.sessionId);
            this.catalogOwningClientInstanceIds.delete(request3.sessionId);
            this.catalogUpdatedAt.delete(request3.sessionId);
            this.catalogModelIds.delete(request3.sessionId);
            this.sessionTitles.delete(request3.sessionId);
            if (!existedInCatalog) {
                throw new Error(`Agent host session not found: ${request3.sessionId}`);
            }
            this.options.onSessionDeleted?.(request3.sessionId);
            return {};
        }
        const sessionIdsToDelete = this.options.subagentsAsSessions === true && session.parent === void 0 ? collectRootAndDescendantSessionIds(this.sessions, request3.sessionId) : [
            request3.sessionId
        ];
        for (const sessionId of sessionIdsToDelete){
            await this.deleteHostedSession(sessionId);
        }
        return {};
    }
    async interruptTurn(_ctx, request3) {
        this.ensureNotDisposing();
        if (request3.sessionTree === true) {
            this.validateSessionId(request3.sessionId);
            return {
                interrupted: interruptSessionTree(this.sessions, request3.sessionId, request3.reason, {
                    initiatedBy: request3.initiatedBy
                })
            };
        }
        const session = this.getSession(request3.sessionId);
        return {
            interrupted: interruptSessionTurn(session, request3.turnId, request3.reason, {
                initiatedBy: request3.initiatedBy
            })
        };
    }
    async cancelQueuedTurn(_ctx, request3) {
        this.ensureNotDisposing();
        const session = this.getSession(request3.sessionId);
        const cancelled = cancelQueuedSessionTurn(session, request3.turnId, request3.reason, {
            initiatedBy: request3.initiatedBy
        });
        if (cancelled) {
            this.emitSessionUpdated(session);
        }
        return {
            cancelled
        };
    }
    async respondToInteraction(_ctx, request3) {
        this.ensureNotDisposing();
        const registry2 = this.getSession(request3.sessionId).interactionRegistry;
        const { answer } = request3;
        return {
            status: answer.case === "interactionResponse" ? registry2.respond(request3.interactionId, answer.value) : registry2.respondToHostQuestion(request3.interactionId, answer)
        };
    }
    watchSessionInteractions(ctx, request3) {
        this.ensureNotDisposing();
        return this.getSession(request3.sessionId).interactionRegistry.watch(ctx);
    }
    async createSession(ctx, request3, options2) {
        this.ensureNotDisposing();
        this.reserveSessionId(request3.sessionId);
        try {
            return await this.createReservedSession(ctx, request3, {
                ...options2?.parent === void 0 ? {} : {
                    parent: options2.parent
                },
                initialHistoryMode: options2?.initialHistoryMode
            });
        } finally{
            this.creatingSessionIds.delete(request3.sessionId);
        }
    }
    async forkSession(ctx, request3) {
        this.ensureNotDisposing();
        await this.ensureSessionLoaded(ctx, request3.sessionId);
        const source = this.getSession(request3.sessionId);
        const destinationSessionId = crypto.randomUUID();
        this.reserveSessionId(destinationSessionId);
        const reservedChildIds = [];
        const createdSessionIds = [];
        let plannedChildren = [];
        try {
            const history = this.getSessionHistoryForFork(source, request3.throughTurnId);
            plannedChildren = await planChildForks(ctx, {
                listLiveSessions: ()=>this.sessions.values(),
                getSession: (sessionId)=>this.sessions.get(sessionId),
                sessionCatalog: this.options.sessionCatalog,
                reserveSessionId: (sessionId)=>this.reserveSessionId(sessionId)
            }, {
                source,
                copiedHistory: history,
                destinationParentSessionId: destinationSessionId,
                destinationRootSessionId: destinationSessionId,
                includeCurrentChildren: request3.throughTurnId === void 0,
                idRemap: new Map(),
                visiting: new Set(),
                reservedChildIds
            });
            let forkStore;
            try {
                forkStore = await source.store.createFork(ctx, {
                    sessionId: destinationSessionId,
                    initialHistory: history
                });
                await this.createReservedSession(ctx, {
                    sessionId: destinationSessionId,
                    initialHistory: history,
                    ...source.sessionOptions === void 0 ? {} : {
                        sessionOptions: source.sessionOptions
                    },
                    ...source.owningClientInstanceId === void 0 ? {} : {
                        owningClientInstanceId: source.owningClientInstanceId
                    }
                }, {
                    forkedFromSessionId: source.sessionId
                }, forkStore);
                createdSessionIds.push(destinationSessionId);
                await createPlannedChildForks(ctx, plannedChildren, createdSessionIds, async (childCtx, child)=>{
                    await this.createReservedSession(childCtx, {
                        sessionId: child.destinationSessionId,
                        initialHistory: child.history,
                        ...child.sessionOptions === void 0 ? {} : {
                            sessionOptions: child.sessionOptions
                        },
                        ...child.owningClientInstanceId === void 0 ? {} : {
                            owningClientInstanceId: child.owningClientInstanceId
                        }
                    }, {
                        forkedFromSessionId: child.sourceSessionId,
                        parent: {
                            parentSessionId: child.destinationParentSessionId,
                            parentToolCallId: child.parentToolCallId,
                            rootSessionId: child.destinationRootSessionId
                        }
                    }, child.store);
                });
            } catch (error3) {
                await rollbackForkCreates(ctx, createdSessionIds, plannedChildren, async (deleteCtx, sessionId)=>{
                    await this.deleteSession(deleteCtx, {
                        sessionId
                    });
                }, (sessionId)=>this.sessions.has(sessionId));
                if (forkStore !== void 0 && !createdSessionIds.includes(destinationSessionId)) {
                    await forkStore.dispose?.();
                }
                throw error3;
            }
            return {
                sessionId: destinationSessionId
            };
        } finally{
            this.creatingSessionIds.delete(destinationSessionId);
            for (const childId of reservedChildIds){
                this.creatingSessionIds.delete(childId);
            }
        }
    }
    async createReservedSession(ctx, request3, lineage, sessionStore, sharedBlobStore) {
        const { session, events } = await this.options.createHostedSession(ctx, request3, sessionStore, {
            ...lineage?.parent === void 0 ? {} : {
                parent: lineage.parent
            },
            ...lineage?.forkedFromSessionId === void 0 ? {} : {
                forkedFromSessionId: lineage.forkedFromSessionId
            },
            initialHistoryMode: lineage?.initialHistoryMode,
            hostHooks: {
                queueBackgroundWakeup: (completions)=>{
                    this.queueHostOwnedBackgroundWakeup(request3.sessionId, completions);
                },
                createChildSession: async (childCtx, childRequest, childOptions, _childSharedBlobStore)=>{
                    const existing = await ensureChildSessionForReattach(this.sessionTreeHost(), childCtx, childRequest.sessionId, childOptions?.parent, childOptions?.adoptVerifiedDurableChild === true);
                    if (existing !== void 0) {
                        return existing;
                    }
                    if (childOptions?.requireExistingChild === true) {
                        const named = await findModelNamedChild(this.sessionTreeHost(), childCtx, childRequest.sessionId, childOptions.parent);
                        if (named === void 0) {
                            throw new Error(`Subagent ${childRequest.sessionId} not found.`);
                        }
                        return named;
                    }
                    const sessionOptions = mergeSessionOptions(request3.sessionOptions, childRequest.sessionOptions);
                    const owningClientInstanceId = childRequest.owningClientInstanceId ?? childRequest.clientInstanceId ?? request3.owningClientInstanceId ?? request3.clientInstanceId;
                    const mergedChildRequest = {
                        ...childRequest,
                        ...sessionOptions === void 0 ? {} : {
                            sessionOptions
                        },
                        ...owningClientInstanceId === void 0 ? {} : {
                            owningClientInstanceId
                        }
                    };
                    if (childRequest.initialHistory === void 0) {
                        await this.createSession(childCtx, mergedChildRequest, childOptions);
                    } else {
                        this.reserveSessionId(childRequest.sessionId);
                        let childStore;
                        try {
                            childStore = await this.getSession(request3.sessionId).store.createFork(childCtx, {
                                sessionId: childRequest.sessionId,
                                initialHistory: childRequest.initialHistory
                            });
                            await this.createReservedSession(childCtx, mergedChildRequest, childOptions?.parent === void 0 ? void 0 : {
                                parent: childOptions.parent
                            }, childStore);
                            childStore = void 0;
                        } finally{
                            await childStore?.dispose?.();
                            this.creatingSessionIds.delete(childRequest.sessionId);
                        }
                    }
                    return this.getSession(childRequest.sessionId);
                }
            }
        }, sharedBlobStore);
        session.forkedFromSessionId = lineage?.forkedFromSessionId;
        events.setOnAppend(()=>{
            touchSessionActivity(session);
            this.appendSessionUpdates.schedule(session);
        });
        session.onAwaitingInputChanged = ()=>this.emitSessionUpdated(session);
        session.onBackgroundWorkChanged = ()=>this.emitSessionUpdated(session);
        this.sessions.set(request3.sessionId, session);
        session.store.markLive?.();
        const owner = session.owningClientInstanceId?.trim();
        if (owner !== void 0 && owner.length > 0) {
            this.catalogOwningClientInstanceIds.set(request3.sessionId, owner);
        }
        if (session.sessionOptions?.workspacePaths !== void 0) {
            this.catalogWorkspacePaths.set(request3.sessionId, session.sessionOptions.workspacePaths);
        }
        this.emitSessionUpdatedNow(session);
        return {};
    }
    hasHostedSession(sessionId) {
        if (this.creatingSessionIds.has(sessionId)) {
            return true;
        }
        return this.hasLiveSession(sessionId);
    }
    hasLiveSession(sessionId) {
        const session = this.sessions.get(sessionId);
        return session !== void 0 && session.deleted !== true;
    }
    servingModule() {
        return this.options.servingModule?.current();
    }
    onDidChangeServingModule(listener) {
        return this.options.servingModule?.onDidChange(listener) ?? (()=>{});
    }
    async hasSession(_ctx, request3) {
        return {
            exists: this.hasHostedSession(request3.sessionId)
        };
    }
    countHostedSessions() {
        let count2 = 0;
        for (const session of this.sessions.values()){
            if (session.deleted !== true) {
                count2 += 1;
            }
        }
        for (const sessionId of this.creatingSessionIds){
            const existing = this.sessions.get(sessionId);
            if (existing === void 0 || existing.deleted === true) {
                count2 += 1;
            }
        }
        count2 += this.deletingSessionIds.size;
        return count2;
    }
    async listSessions(ctx, request3) {
        return {
            sessions: await this.listSessionSummaries(ctx, request3)
        };
    }
    watchSessions(ctx, request3) {
        const listRequest = request3 === void 0 ? void 0 : {
            workspacePathsFilter: request3.workspacePathsFilter,
            matchAnyWorkspaceRoot: request3.matchAnyWorkspaceRoot,
            ownerClientInstanceId: request3.ownerClientInstanceId,
            includeOwnerUnrootedSessions: request3.includeOwnerUnrootedSessions
        };
        const filtered = requestHasWorkspaceOrOwnerFilter(listRequest);
        return this.sessionWatchers.subscribe(ctx, ()=>this.listSessionSummaries(ctx, listRequest), filtered ? (identity)=>matchesWorkspaceAndOwnerFilter(identity, listRequest) : void 0);
    }
    async listWorkspaces(ctx, _request) {
        const entries = await this.options.workspaceCatalog?.listWorkspaces(ctx);
        if (entries === void 0) {
            throw new AgentHostWorkspaceListUnsupportedError();
        }
        return {
            workspaces: toWorkspaceListRows(entries)
        };
    }
    async setSessionTitle(ctx, request3) {
        this.ensureNotDisposing();
        this.validateSessionId(request3.sessionId);
        if (!await this.hasLiveOrCatalogSession(ctx, request3.sessionId)) {
            throw new Error(`Agent host session not found: ${request3.sessionId}`);
        }
        const title = request3.title;
        if (title === void 0) {
            await this.options.sessionCatalog?.setTitle?.(ctx, request3.sessionId, void 0);
            this.emitSessionCatalogFieldsUpdated(request3.sessionId);
            return;
        }
        this.sessionTitles.set(request3.sessionId, title);
        const live = this.sessions.get(request3.sessionId);
        if (live !== void 0 && live.deleted !== true) {
            live.title = title;
        }
        await this.options.sessionCatalog?.setTitle?.(ctx, request3.sessionId, title);
        this.emitSessionCatalogFieldsUpdated(request3.sessionId);
    }
    async sendMessage(ctx, request3) {
        return this.sendAction(ctx, {
            sessionId: request3.sessionId,
            action: buildUserMessageAction(request3.text, request3.messageId),
            modelId: request3.modelId,
            modelDetails: request3.modelDetails,
            requestedModel: request3.requestedModel,
            turnOptions: request3.turnOptions
        });
    }
    async sendAction(ctx, request3) {
        this.ensureNotDisposing();
        if (hasSendNowRequestFields(request3) && request3.action.action.case !== "userMessageAction") {
            throw new AgentHostSendNowRequiresUserMessageError();
        }
        turnToolRestriction(request3.turnOptions);
        const session = this.getSession(request3.sessionId);
        const replacedTurnId = request3.replaceQueuedTurnId;
        const host = {
            getSendNowBehavior: this.options.getSendNowBehavior,
            emitSessionUpdated: (hosted)=>this.emitSessionUpdated(hosted),
            enqueueOrStartAction: (enqueueCtx, enqueueRequest, enqueueOptions)=>this.enqueueOrStartAction(enqueueCtx, enqueueRequest, enqueueOptions)
        };
        if (replacedTurnId !== void 0 && replacedTurnId !== "") {
            return sendReplacingQueuedTurn({
                session,
                request: request3,
                turnId: replacedTurnId,
                host
            });
        }
        if (wantsSendNow(request3)) {
            return tryPreferredSendNowSteer(session, request3, host.getSendNowBehavior) ?? sendInterruptingThenEnqueue({
                ctx,
                session,
                request: request3,
                host
            });
        }
        return this.enqueueOrStartAction(ctx, request3);
    }
    async enqueueOrStartAction(ctx, request3, options2) {
        const session = this.getSession(request3.sessionId);
        const send = request3.action === void 0 ? void 0 : resolveSendBehavior(session, request3.action);
        if (send?.kind === "steer") {
            return {
                turnId: send.turnId,
                deliveredAs: AgentHostSendDelivery.STEERED
            };
        }
        if (send?.kind === "reject") {
            throw new Error(`Agent host rejected context injection: ${send.reason}`);
        }
        const existingWakeupTurnId = this.findExistingBackgroundWakeupTurn(session, request3.action);
        if (existingWakeupTurnId !== void 0) {
            return {
                turnId: existingWakeupTurnId,
                deliveredAs: AgentHostSendDelivery.QUEUE
            };
        }
        const turnId = crypto.randomUUID();
        const hostRunOptions = toRunOptions(request3.turnOptions);
        const requestedRunOptions = request3.requestedModel === void 0 ? hostRunOptions : {
            ...hostRunOptions,
            requestedModel: request3.requestedModel
        };
        const modelDetails = request3.modelDetails ?? (request3.requestedModel === void 0 ? this.options.createModelDetails?.(request3.modelId) ?? createDefaultModelDetails(request3.modelId) : void 0);
        const runOptions = this.options.getRunOptions?.({
            sessionId: request3.sessionId,
            turnId,
            runOptions: requestedRunOptions
        }) ?? requestedRunOptions;
        const queuedRunOptions = send?.kind === "enqueue" && request3.action !== void 0 && isInjectContextAction(request3.action) ? {
            ...runOptions,
            generationUUID: turnId
        } : runOptions;
        touchSessionActivity(session);
        session.lastTurnModel = nextLastTurnModel({
            previous: session.lastTurnModel,
            request: {
                ...request3.modelId === void 0 ? {} : {
                    modelId: request3.modelId
                },
                ...modelDetails === void 0 ? {} : {
                    modelDetails
                },
                ...request3.requestedModel === void 0 ? {} : {
                    requestedModel: request3.requestedModel
                },
                ...request3.turnOptions === void 0 ? {} : {
                    turnOptions: request3.turnOptions
                },
                ...request3.requestContextDecoration === void 0 ? {} : {
                    requestContextDecoration: request3.requestContextDecoration
                }
            }
        });
        this.rememberBackgroundWakeupTurn(session, request3.action, turnId);
        queueSessionTurn({
            ctx,
            request: send?.kind === "enqueue" ? {
                ...request3,
                action: send.action
            } : request3,
            session,
            turnId,
            modelDetails,
            runOptions: queuedRunOptions,
            onSessionUpdated: (hostedSession)=>this.emitSessionUpdated(hostedSession),
            ...options2?.insertAtHead === true ? {
                insertAtHead: true
            } : {}
        });
        return {
            turnId,
            deliveredAs: AgentHostSendDelivery.QUEUE
        };
    }
    watchSessionBackgroundWork(ctx, request3) {
        const session = this.getSession(request3.sessionId);
        const filter3 = {
            kind: toRegistryKindFilter(request3.kind),
            state: toRegistryStateFilter(request3.state),
            ownerId: request3.ownerId ?? void 0
        };
        return session.backgroundWorkWatchers.subscribe(ctx, ()=>session.backgroundWorkRegistry.listWork(filter3).map(toAgentHostBackgroundWork));
    }
    watchSessionTurnLifecycle(ctx, request3) {
        return this.getSession(request3.sessionId).turnLifecycleWatchers.subscribe(ctx);
    }
    async abortBackgroundWork(_ctx, request3) {
        const session = this.getSession(request3.sessionId);
        return {
            aborted: session.backgroundWorkRegistry.abortWork(request3.workId)
        };
    }
    async abortAllBackgroundWork(_ctx, request3) {
        const session = this.getSession(request3.sessionId);
        return {
            abortedCount: session.backgroundWorkRegistry.abortAllWork({
                kind: toRegistryKindFilter(request3.kind),
                state: toRegistryStateFilter(request3.state),
                ownerId: request3.ownerId ?? void 0
            })
        };
    }
    attachSession(ctx, request3) {
        this.ensureNotDisposing();
        return this.attachSessionInternal(ctx, request3);
    }
    async *attachSessionInternal(ctx, request3) {
        await this.ensureSessionLoaded(ctx, request3.sessionId);
        yield* this.getSession(request3.sessionId).events.subscribe(ctx, request3.lastEventId, request3.backgroundTaskCompletionsOnly === true ? {
            backgroundTaskCompletionsOnly: true
        } : void 0);
    }
    async getSessionBlobs(ctx, request3) {
        this.ensureNotDisposing();
        if (request3.blobIds.length > MAX_SESSION_BLOBS_PER_REQUEST) {
            throw new Error(`blobIds must be at most ${MAX_SESSION_BLOBS_PER_REQUEST} per request, got ${request3.blobIds.length}`);
        }
        if (request3.blobIds.some((id)=>id.byteLength > MAX_SESSION_BLOB_ID_BYTES)) {
            throw new Error(`blobIds must be at most ${MAX_SESSION_BLOB_ID_BYTES} bytes each`);
        }
        await this.ensureSessionLoaded(ctx, request3.sessionId);
        const session = this.getSession(request3.sessionId);
        return readSessionBlobs(ctx, session.store.getBlobStore(), request3.blobIds, request3.maxResponseBytes);
    }
    readFile(ctx, request3) {
        this.ensureNotDisposing();
        return this.readFileInternal(ctx, request3);
    }
    async *readFileInternal(ctx, request3) {
        const filePath = resolveFileReadPath(request3.path);
        yield* readFileChunks(ctx, filePath, {
            readOffset: request3.readOffset ?? BigInt(0),
            readLimit: request3.readLimit ?? BigInt(0),
            cachedMtimeMs: request3.cachedMtimeMs
        });
    }
    sessionTreeHost() {
        return {
            sessions: this.sessions,
            sessionCatalog: this.options.sessionCatalog,
            ensureSessionLoaded: (ctx, sessionId)=>this.ensureSessionLoaded(ctx, sessionId),
            emitSessionUpdated: (session)=>this.emitSessionUpdated(session)
        };
    }
    async ensureSessionLoaded(ctx, sessionId) {
        this.validateSessionId(sessionId);
        const existing = this.sessions.get(sessionId);
        if (existing !== void 0 && existing.deleted !== true) {
            return;
        }
        if (existing?.deleted === true) {
            return;
        }
        const ensureLoaded = this.options.sessionCatalog?.ensureLoaded;
        if (ensureLoaded === void 0) {
            return;
        }
        const loaded = await ensureLoaded(ctx, sessionId);
        if (!loaded) {
            return;
        }
        const session = this.sessions.get(sessionId);
        if (session === void 0 || session.deleted === true) {
            throw new Error(`Agent host session catalog ensureLoaded returned true but session is not hosted: ${sessionId}`);
        }
    }
    async disposeInternal() {
        let firstError;
        this.unsubscribeCatalogTitleChanged?.();
        this.unsubscribeCatalogArchivedChanged?.();
        this.unsubscribeCatalogModelChanged?.();
        this.unsubscribeCatalogHostOwnedStorageChanged?.();
        const sessions = [
            ...this.sessions.values()
        ];
        this.appendSessionUpdates.cancelAll();
        for (const session of sessions){
            session.disposing = true;
            const waitingTurnIds = session.interactionRegistry.close("Agent host is disposing");
            for (const turnId of waitingTurnIds){
                interruptSessionTurn(session, turnId, "Agent host is disposing", {
                    immediate: true,
                    initiatedBy: AgentHostTurnInterruptInitiator.HOST
                });
            }
            cancelAllQueuedSessionTurns(session, "Agent host is disposing");
            for (const abortHostedTaskTurn of [
                ...session.hostedTaskTurnAborts.values()
            ]){
                abortHostedTaskTurn("Agent host is disposing", {
                    immediate: true,
                    initiatedBy: AgentHostTurnInterruptInitiator.HOST
                });
            }
            releaseHostedTaskTurns(session);
        }
        for (const session of sessions){
            try {
                await session.turnChain;
            } catch (error3) {
                firstError ??= error3;
            }
        }
        for (const session of sessions){
            session.events.close();
            session.backgroundWorkWatchers.close();
            session.turnLifecycleWatchers.close();
        }
        for (const session of sessions){
            try {
                await session.disposeResources();
            } catch (error3) {
                firstError ??= error3;
            }
            try {
                await session.store.dispose?.();
            } catch (error3) {
                firstError ??= error3;
            }
        }
        try {
            await this.options.dispose?.();
        } catch (error3) {
            firstError ??= error3;
        }
        if (firstError !== void 0) {
            throw firstError;
        }
    }
    getSession(sessionId) {
        this.validateSessionId(sessionId);
        const session = this.sessions.get(sessionId);
        if (session === void 0 || session.deleted) {
            throw new Error(`Agent host session not found: ${sessionId}`);
        }
        return session;
    }
    async listSessionSummaries(ctx, request3) {
        const limit = resolveSessionListLimit(request3?.limit);
        const limitedRequest = {
            ...request3,
            limit
        };
        const catalog = this.options.sessionCatalog;
        const catalogModelIdsWhenListStarted = new Map(this.catalogModelIds);
        const matchesCatalogEntry = (entry)=>matchesParentListFilter(entry.parent, request3) && matchesWorkspaceAndOwnerFilter(this.catalogEntryFilterIdentity(entry), request3);
        const catalogEntries = catalog === void 0 ? [] : await catalog.listSessions(ctx, limitedRequest, matchesCatalogEntry);
        const catalogModelIdsWhenListReturned = new Map(this.catalogModelIds);
        this.seedCatalogSessionMetadata(catalogEntries, request3);
        restoreCatalogModelsAdoptedDuringList({
            catalogModelIds: this.catalogModelIds,
            beforeList: catalogModelIdsWhenListStarted,
            afterList: catalogModelIdsWhenListReturned
        });
        const liveById = new Map();
        for (const session of this.sessions.values()){
            if (session.deleted === true) {
                continue;
            }
            if (!matchesParentListFilter(session.parent, request3)) {
                continue;
            }
            if (!matchesWorkspaceAndOwnerFilter(this.sessionFilterIdentity(session), request3)) {
                continue;
            }
            if (!hasListableHistory(session)) {
                continue;
            }
            if (this.archivedSessionIds.has(session.sessionId)) {
                continue;
            }
            liveById.set(session.sessionId, this.toSessionSummary(session));
        }
        if (catalog === void 0) {
            return [
                ...liveById.values()
            ].sort(compareSessionRecency).slice(0, limit);
        }
        const merged = new Map();
        for (const entry of catalogEntries){
            if (!matchesCatalogEntry(entry)) {
                continue;
            }
            if (liveById.has(entry.sessionId)) {
                continue;
            }
            merged.set(entry.sessionId, toCatalogSessionSummary(entry, this.catalogMirrors()));
        }
        for (const [sessionId, summary] of liveById){
            merged.set(sessionId, summary);
        }
        return [
            ...merged.values()
        ].sort(compareSessionRecency).slice(0, limit);
    }
    seedCatalogSessionMetadata(catalogEntries, request3) {
        for (const entry of catalogEntries){
            if (!matchesParentListFilter(entry.parent, request3)) {
                continue;
            }
            if (entry.updatedAt !== void 0) {
                this.catalogUpdatedAt.set(entry.sessionId, entry.updatedAt);
            }
            const catalogModelId = entry.modelId?.trim();
            if (catalogModelId !== void 0 && catalogModelId.length > 0) {
                this.catalogModelIds.set(entry.sessionId, catalogModelId);
            } else {
                this.catalogModelIds.delete(entry.sessionId);
            }
            const catalogWorkspace = entry.workspace === void 0 ? void 0 : toWorkspaceRow(entry.workspace);
            if (catalogWorkspace !== void 0) {
                const previousRoots = this.catalogWorkspacePaths.get(entry.sessionId);
                const sameRoots2 = previousRoots !== void 0 && previousRoots.length === catalogWorkspace.workspacePaths.length && previousRoots.every((path64, index)=>path64 === catalogWorkspace.workspacePaths[index]);
                this.catalogWorkspacePaths.set(entry.sessionId, catalogWorkspace.workspacePaths);
                if (catalogWorkspace.displayPath !== void 0) {
                    this.catalogWorkspaceDisplayPaths.set(entry.sessionId, catalogWorkspace.displayPath);
                } else if (!sameRoots2) {
                    this.catalogWorkspaceDisplayPaths.delete(entry.sessionId);
                }
            }
            const catalogOwner = entry.owningClientInstanceId?.trim();
            if (catalogOwner !== void 0 && catalogOwner.length > 0) {
                this.catalogOwningClientInstanceIds.set(entry.sessionId, catalogOwner);
            }
            if (entry.hostOwnedStorage === true && !this.catalogHostOwnedStorage.has(entry.sessionId)) {
                this.catalogHostOwnedStorage.set(entry.sessionId, true);
            }
            const catalogTitle = entry.title?.trim();
            if (catalogTitle !== void 0 && catalogTitle.length > 0) {
                if (!this.sessionTitles.has(entry.sessionId)) {
                    this.sessionTitles.set(entry.sessionId, catalogTitle);
                }
            }
            const liveSession = this.sessions.get(entry.sessionId);
            if (liveSession !== void 0 && liveSession.deleted !== true && liveSession.title === void 0 && catalogTitle !== void 0) {
                liveSession.title = catalogTitle;
            }
        }
    }
    catalogMirrors() {
        return {
            titles: this.sessionTitles,
            updatedAt: this.catalogUpdatedAt,
            modelIds: this.catalogModelIds,
            workspacePaths: this.catalogWorkspacePaths,
            workspaceDisplayPaths: this.catalogWorkspaceDisplayPaths
        };
    }
    sessionFilterIdentity(session) {
        return liveSessionFilterIdentity(session, {
            sessions: this.sessions,
            catalogWorkspacePaths: this.catalogWorkspacePaths,
            catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds
        });
    }
    catalogEntryFilterIdentity(entry) {
        const workspace = entry.workspace === void 0 ? void 0 : toWorkspaceRow(entry.workspace);
        const owner = entry.owningClientInstanceId?.trim();
        return catalogSessionFilterIdentity({
            sessionId: entry.sessionId,
            ...entry.parent === void 0 ? {} : {
                parent: entry.parent
            },
            ...workspace === void 0 ? {} : {
                workspacePaths: workspace.workspacePaths
            },
            ...owner === void 0 || owner.length === 0 ? {} : {
                owningClientInstanceId: owner
            }
        }, {
            catalogWorkspacePaths: this.catalogWorkspacePaths,
            catalogOwningClientInstanceIds: this.catalogOwningClientInstanceIds
        });
    }
    resolveLiveSessionWorkspace(session) {
        const optionRoots = session.sessionOptions?.workspacePaths;
        if (optionRoots === void 0) {
            const catalogRoots = this.catalogWorkspacePaths.get(session.sessionId);
            return catalogRoots === void 0 ? void 0 : {
                workspacePaths: catalogRoots,
                displayPath: this.catalogWorkspaceDisplayPaths.get(session.sessionId)
            };
        }
        const roots = optionRoots.filter((path64)=>path64.length > 0);
        return {
            workspacePaths: roots,
            worktreeMainPath: session.sessionOptions?.worktreeMainPath,
            displayPath: toWorkspaceDisplayPath(roots, this.options.userHomeDirectory)
        };
    }
    toSessionSummary(session) {
        const title = resolveCatalogSessionTitle(session.sessionId, this.sessionTitles, session.title);
        const updatedAt = resolveCatalogSessionUpdatedAt(session.sessionId, this.catalogUpdatedAt, session.updatedAt);
        const modelId = this.catalogModelIds.get(session.sessionId);
        const { runningTurnId, queuedTurnIds } = summarizeTurnQueue(session);
        return {
            sessionId: session.sessionId,
            status: this.computeSessionStatus(session),
            lastEventId: session.events.getLastEventId(),
            queuedTurnIds,
            ...runningTurnId === void 0 ? {} : {
                runningTurnId
            },
            ...title === void 0 ? {} : {
                title
            },
            ...modelId === void 0 ? {} : {
                modelId
            },
            ...toWorkspaceRowFields(this.resolveLiveSessionWorkspace(session)),
            ...session.forkedFromSessionId === void 0 ? {} : {
                forkedFromSessionId: session.forkedFromSessionId
            },
            ...session.parent === void 0 ? {} : {
                parent: {
                    parentSessionId: session.parent.parentSessionId,
                    parentToolCallId: session.parent.parentToolCallId,
                    rootSessionId: session.parent.rootSessionId
                }
            },
            ...updatedAt === void 0 ? {} : {
                updatedAt: Timestamp.fromDate(new Date(updatedAt))
            }
        };
    }
    applyExternalSessionTitle(sessionId, title) {
        if (this.disposePromise !== void 0) {
            return;
        }
        const previous = this.sessionTitles.get(sessionId);
        if (previous === title) {
            return;
        }
        this.sessionTitles.set(sessionId, title);
        const live = this.sessions.get(sessionId);
        if (live !== void 0 && live.deleted !== true) {
            live.title = title;
        }
        this.emitSessionCatalogFieldsUpdated(sessionId);
    }
    applyExternalSessionModel(sessionId, modelId) {
        if (this.disposePromise !== void 0) {
            return;
        }
        const trimmed = modelId?.trim();
        const next = trimmed ? trimmed : void 0;
        if (this.catalogModelIds.get(sessionId) === next) {
            return;
        }
        if (next === void 0) {
            this.catalogModelIds.delete(sessionId);
        } else {
            this.catalogModelIds.set(sessionId, next);
        }
        this.emitSessionCatalogFieldsUpdated(sessionId);
    }
    applyExternalSessionArchived(sessionId, isArchived) {
        if (this.disposePromise !== void 0) {
            return;
        }
        if (this.archivedSessionIds.has(sessionId) === isArchived) {
            return;
        }
        const live = this.sessions.get(sessionId);
        if (isArchived) {
            this.archivedSessionIds.add(sessionId);
            if (live !== void 0) {
                this.announcedSessions.delete(live);
            }
            this.sessionWatchers.emitDeleted(sessionId);
            return;
        }
        this.archivedSessionIds.delete(sessionId);
        if (live !== void 0 && this.isLiveSessionInstance(live)) {
            this.emitSessionUpdatedNow(live);
            return;
        }
        const catalogSummary = toCatalogSessionSummary({
            sessionId
        }, this.catalogMirrors());
        this.sessionWatchers.emitAdded(catalogSummary, this.catalogEntryFilterIdentity({
            sessionId
        }));
    }
    applyExternalSessionHostOwnedStorage(sessionId, hostOwnedStorage) {
        if (this.disposePromise !== void 0) {
            return;
        }
        const known = this.catalogHostOwnedStorage.get(sessionId) ?? false;
        this.catalogHostOwnedStorage.set(sessionId, hostOwnedStorage);
        if (known === hostOwnedStorage) {
            return;
        }
        const live = this.sessions.get(sessionId);
        if (live !== void 0 && this.isLiveSessionInstance(live)) {
            this.emitSessionUpdated(live);
            return;
        }
        if (!hostOwnedStorage) {
            this.sessionWatchers.emitDeleted(sessionId);
            return;
        }
        if (!this.archivedSessionIds.has(sessionId)) {
            this.sessionWatchers.emitAdded(toCatalogSessionSummary({
                sessionId
            }, this.catalogMirrors()), this.catalogEntryFilterIdentity({
                sessionId
            }));
        }
    }
    emitSessionCatalogFieldsUpdated(sessionId) {
        if (this.disposePromise !== void 0) {
            return;
        }
        if (this.archivedSessionIds.has(sessionId)) {
            return;
        }
        const live = this.sessions.get(sessionId);
        if (live !== void 0 && this.isLiveSessionInstance(live) && this.announcedSessions.has(live)) {
            this.emitSessionUpdated(live);
            return;
        }
        const catalogSummary = toCatalogSessionSummary({
            sessionId
        }, this.catalogMirrors());
        this.sessionWatchers.emitUpdated(catalogSummary, this.catalogEntryFilterIdentity({
            sessionId
        }));
    }
    computeSessionStatus(session) {
        if (session.awaitingInputCount > 0) {
            return AgentHostSessionStatus.AWAITING_INPUT;
        }
        if (session.pendingTurns > 0) {
            return AgentHostSessionStatus.RUNNING;
        }
        if (session.backgroundWorkRegistry.hasRunningWork({
            kind: "subagent"
        })) {
            return AgentHostSessionStatus.RUNNING;
        }
        return AgentHostSessionStatus.IDLE;
    }
    queueHostOwnedBackgroundWakeup(sessionId, completions) {
        if (completions.length === 0 || this.options.surfaceOwnsBackgroundWakeups === true) {
            return;
        }
        const session = this.sessions.get(sessionId);
        if (session === void 0 || session.deleted) {
            return;
        }
        const existingTurnId = this.findExistingBackgroundWakeupTurn(session, buildBackgroundTaskCompletionAction(completions));
        if (existingTurnId !== void 0) {
            return;
        }
        const wakeupTurnOptions = turnOptionsForHostOwnedWakeup(session.lastTurnModel?.turnOptions);
        void this.sendAction(createContext(), {
            sessionId,
            action: buildBackgroundTaskCompletionAction(completions),
            ...session.lastTurnModel?.modelId === void 0 ? {} : {
                modelId: session.lastTurnModel.modelId
            },
            ...session.lastTurnModel?.modelDetails === void 0 ? {} : {
                modelDetails: session.lastTurnModel.modelDetails
            },
            ...session.lastTurnModel?.requestedModel === void 0 ? {} : {
                requestedModel: session.lastTurnModel.requestedModel
            },
            ...wakeupTurnOptions === void 0 ? {} : {
                turnOptions: wakeupTurnOptions
            },
            ...session.lastTurnModel?.requestContextDecoration === void 0 ? {} : {
                requestContextDecoration: session.lastTurnModel.requestContextDecoration
            }
        }).catch((error3)=>{
            logger116.warn(createContext(), "Host-owned background wakeup failed", {
                sessionId,
                error: error3
            });
        });
    }
    findExistingBackgroundWakeupTurn(session, action) {
        if (action === void 0) {
            return void 0;
        }
        const taskIds = backgroundCompletionTaskIds(action);
        if (taskIds === void 0 || taskIds.length === 0) {
            return void 0;
        }
        const turnId = session.backgroundWorkRegistry.findExactWakeupTurn(taskIds);
        if (turnId === void 0) {
            return void 0;
        }
        const entry = session.turns.get(turnId);
        if (entry === void 0 || entry.state === "finished" || entry.cancelled) {
            session.backgroundWorkRegistry.forgetWakeupTurnsForTurn(turnId);
            return void 0;
        }
        return turnId;
    }
    rememberBackgroundWakeupTurn(session, action, turnId) {
        if (action === void 0) {
            return;
        }
        const taskIds = backgroundCompletionTaskIds(action);
        if (taskIds === void 0) {
            return;
        }
        for (const taskId of taskIds){
            session.backgroundWorkRegistry.rememberWakeupTurn({
                taskId,
                turnId
            });
        }
    }
    emitSessionUpdated(session) {
        this.appendSessionUpdates.cancel(session);
        this.emitSessionUpdatedNow(session);
    }
    emitSessionUpdatedNow(session) {
        if (!this.isLiveSessionInstance(session)) {
            return;
        }
        if (this.archivedSessionIds.has(session.sessionId)) {
            return;
        }
        if (this.announcedSessions.has(session)) {
            this.sessionWatchers.emitUpdated(this.toSessionSummary(session), this.sessionFilterIdentity(session));
            return;
        }
        if (!hasListableHistory(session)) {
            return;
        }
        this.announcedSessions.add(session);
        this.sessionWatchers.emitAdded(this.toSessionSummary(session), this.sessionFilterIdentity(session));
    }
    isLiveSessionInstance(session) {
        return this.disposePromise === void 0 && !session.deleted && this.sessions.get(session.sessionId) === session;
    }
    async deleteHostedSession(sessionId) {
        this.validateSessionId(sessionId);
        const session = this.sessions.get(sessionId);
        if (session === void 0) {
            return;
        }
        if (session.deleted) {
            return;
        }
        session.deleted = true;
        this.deletingSessionIds.add(sessionId);
        try {
            this.appendSessionUpdates.cancel(session);
            session.backgroundWorkWatchers.close();
            session.turnLifecycleWatchers.close();
            stopAllSessionTurns(session, "session deleted");
            releaseHostedTaskTurns(session);
            session.backgroundWorkRegistry.abortAllWork();
            let firstError;
            try {
                await session.turnChain;
            } catch (error3) {
                firstError ??= error3;
            }
            this.sessions.delete(sessionId);
            try {
                this.options.onSessionDeleted?.(sessionId);
            } catch (error3) {
                firstError ??= error3;
            }
            session.interactionRegistry.close("session deleted");
            session.events.close();
            try {
                await session.disposeResources();
            } catch (error3) {
                firstError ??= error3;
            }
            try {
                await session.store.dispose?.();
            } catch (error3) {
                firstError ??= error3;
            }
            this.sessionWatchers.emitDeleted(sessionId);
            if (firstError !== void 0) {
                throw firstError;
            }
        } finally{
            this.deletingSessionIds.delete(sessionId);
        }
    }
    validateSessionId(sessionId) {
        if (sessionId.trim().length === 0) {
            throw new Error("sessionId is required");
        }
        assertPathSafeSessionId(sessionId);
    }
    async hasLiveOrCatalogSession(ctx, sessionId) {
        const live = this.sessions.get(sessionId);
        if (live !== void 0 && live.deleted !== true) {
            return true;
        }
        const catalog = this.options.sessionCatalog;
        if (catalog === void 0) {
            return false;
        }
        const entries = await catalog.listSessions(ctx);
        return entries.some((entry)=>entry.sessionId === sessionId);
    }
    reserveSessionId(sessionId) {
        this.validateSessionId(sessionId);
        if (this.sessions.has(sessionId) || this.creatingSessionIds.has(sessionId)) {
            throw new Error(`Agent host session already exists: ${sessionId}`);
        }
        this.creatingSessionIds.add(sessionId);
    }
    getSessionHistoryForFork(source, throughTurnId) {
        if (throughTurnId === void 0) {
            return cloneConversationState(source.store.getConversationState());
        }
        if (throughTurnId.trim().length === 0) {
            throw new Error("throughTurnId cannot be empty");
        }
        return source.events.getSessionHistoryThroughTurn(throughTurnId);
    }
    ensureNotDisposing() {
        if (this.disposePromise !== void 0) {
            throw new Error("Agent host is disposing");
        }
    }
};

}
