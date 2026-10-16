import { isFullMcpLeaseInvalidation, mcpInputSchemaToJson, parseMcpOutputSchemaJson, resourceEntry } from "./dist_exports.js";
import { connectNodeAdapter, createStandaloneDaemonAuthHandle, formatListenAddress } from "./dashboard_connect_exports.js";
import { cleanupOldAgentData, configureRipgrepPath, createDashboardClient, createNaiveTerminalExecutor, isRipgrepConfigured, resolveRipgrepFromPath } from "./bidi_connect_exports.js";
import { createBackgroundShellFactoryWithEventStreaming, loadClaudePluginFromPath, loadPluginContentFromDir, resolvePathForIgnoreService, unsafeMintResolvedIgnorePath } from "./dist_exports2.js";
import { isTimeoutErrorMessage, mcpClientMetricProviderHostTag, normalizeMcpServerUrl } from "./esm_exports8.js";
import { getProjectDir, pathContainsSymlinkSync } from "./mcp_sandbox_policy_exports.js";
import { getAgentHostTurnRuntime } from "./tree_chunk_napi_exports.js";
import { createInteractionApprovalHandler, createInteractionElicitationHandler, ensurePrivateSocketParent, prepareUnixSocketPath, readUnixSocketIdentity, restrictUnixSocketMode, unlinkOwnedUnixSocket } from "./private_inference_loop_exports.js";
import { backgroundShellExecutorResource } from "./agent-exec/dist/background-shell.js";
import { fetchExecutorResource } from "./agent-exec/dist/fetch.js";
import { lsExecutorResource } from "./agent-exec/dist/ls.js";
import { ListableCombinedResourceAccessor } from "./agent-exec/dist/resource-provider.js";
import { forceBackgroundShellExecutorResource } from "./agent-exec/dist/shell-control.js";
import { shellStreamExecutorResource } from "./agent-exec/dist/shell-stream.js";
import { AGENT_DATA_CLEANUP_INITIAL_DELAY_MS, import_node_path102, import_promises56 } from "./agent-host-exec/dist/agent-data-cleanup.js";
import { MIXED_PERMISSION_POLICY_ERROR, UNPAIRED_PERMISSION_OVERRIDE_ERROR, logger142 } from "./agent-host-exec/dist/create-agent-host-exec.js";
import { AutoApprovePendingDecisionProvider } from "./agent-host-exec/dist/create-headless-decision-provider.js";
import { UNTRUSTED_WORKSPACE_HOOK_EXECUTOR, WORKSPACE_TRUST_MARKER, import_node_fs47, import_node_path106 } from "./agent-host-exec/dist/create-headless-disk-hook-executor.js";
import { DisposableManagerMcpLease, DisposableNoopMcpLease, FileBasedMcpDisabledStore, FilteringMcpDefinitionSource, InlineMcpDefinitionSource, NamespacedMcpDefinitionSource, import_node_os28, import_node_path107 } from "./agent-host-exec/dist/create-headless-mcp-lease.js";
import { NOOP_AGENT_SKILLS_SERVICE, import_node_os29 } from "./agent-host-exec/dist/create-headless-setting-sources-loader.js";
import { import_node_path104 } from "./agent-host-exec/dist/headless-cursorignore-ls.js";
import { GatedHostedMcpRoutingProvider } from "./agent-host-exec/dist/hosted-mcp-routing.js";
import { HeadlessRipgrepIgnoreAdapter } from "./agent-host-exec/dist/permissions-policy.js";
import { import_node_fs46, import_node_path105 } from "./agent-host-exec/dist/ripgrep.js";
import { ALL_RUNTIME_SETTING_SOURCES, VALID_RUNTIME_SETTING_SOURCES } from "./agent-host-exec/dist/setting-sources.js";
import { AGENT_HOST_SESSION_LIST_MAX_LIMIT } from "./agent-host/dist/kernel/catalog-session-view.js";
import { assertPathSafeSessionId } from "./agent-host/dist/storage/agent-host-storage.js";
import { createContext } from "./agent-host/dist/storage/instruments.js";
import { McpServerNotFoundError, McpToolNotFoundError } from "./coerce_exports.js";
import { MergedMcpLoader } from "./cursor-config/dist/mcp/loader.js";
import { CliHooksExecutor } from "./hooks-exec/dist/cli-hooks-executor.js";
import { ListableHooksResourceAccessor } from "./hooks-exec/dist/resource-accessor.js";
import { DEFAULT_AGENT_DATA_CLEANUP_INTERVAL_MS } from "./local-exec/dist/agent-data-cleanup.js";
import { FileChangeTracker } from "./local-exec/dist/file-change-tracker.js";
import { LocalResourceProvider } from "./local-exec/dist/provider.js";
import { MergedAgentSkillsService } from "./local-exec/dist/services/extensibility/agent-skills-service.js";
import { AgentSkillsCursorRulesService, CursorPluginsAgentSkillsService, LocalCursorRulesService, MergedCursorRulesService } from "./local-exec/dist/services/extensibility/cursor-rules-service.js";
import { NO_AGENT_STORE_SKILLS } from "./local-exec/dist/services/extensibility/skill-dedupe.js";
import { CursorPluginsSubagentsService, LocalSubagentsService, MergedSubagentsService, NoopSubagentsService } from "./local-exec/dist/services/extensibility/subagents-service.js";
import { LazyIgnoreService } from "./local-exec/dist/services/ignore-service.js";
import { InteractivePermissionsService } from "./local-exec/dist/services/permissions-service.js";
import { CachedTeamSettingsService, ConnectTeamAdminSettingsProvider } from "./local-exec/dist/services/team-settings-service.js";
import { FileBasedMcpApprovalStore, ServerApprovalMiddleware, ServerDisabledMiddleware } from "./mcp-agent-exec/dist/approval-store.js";
import { CachingMiddleware } from "./mcp-agent-exec/dist/cache.js";
import { DefinitionMcpLoader, FileConfigMcpDefinitionSource, ServerBlockingMiddleware } from "./mcp-agent-exec/dist/loader.js";
import { FileBasedTokenStore } from "./mcp-agent-exec/dist/token-store.js";
import { Struct } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { Code } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { EMPTY_OBJECT_SCHEMA, logger139 } from "./placement-routing-mcp/dist/call-mcp-tool.js";
import { MCP_PLACEMENT_LISTING_WAIT_STAT, MCP_TOOL_CLIENT_CALL_DURATION_STAT, ROUTED_MCP_TOOL_CALL_MESSAGE, callingConversationKey, defaultCallerResolver, import_node_crypto55, logger138 } from "./placement-routing-mcp/dist/call-observability.js";
import { PlacementRoutingNeedsAuthError, PlacementRoutingNotDialedError, PlacementRoutingNotReachableError } from "./placement-routing-mcp/dist/errors.js";
import { logger140 } from "./placement-routing-mcp/dist/grant-migration.js";
import { MCP_AUTH_TOOL_DESCRIPTION, MCP_AUTH_TOOL_NAME3 } from "./placement-routing-mcp/dist/mcp-auth-tool.js";
import { import_node_crypto56 } from "./placement-routing-mcp/dist/placement-routing-mcp-provider.js";
import { DEFAULT_MCP_ACCOUNT_KEY } from "./placement-routing-mcp/dist/placement-snapshot.js";
import { AgentHostAgentStoreConflictNoticeAckArgs, AgentHostAgentStoreConflictNoticeNoteDeferredArgs, AgentHostAgentStoreConflictNoticePeekArgs, AgentHostAgentStoreConflictNoticeReleaseArgs, AgentHostAgentStoreConflictNoticeSyncAndPeekArgs, AgentHostAgentStoreExtraEnvArgs, AgentHostAgentStoreSkillRootsArgs, AgentHostAgentStoreSkillRootsResult } from "./proto/dist/generated/agent/v1/agent_host_agent_store_pb.js";
import { AgentHostService } from "./proto/dist/generated/agent/v1/agent_host_connect.js";
import { AbortAgentHostBackgroundWorkResponse, AbortAllAgentHostBackgroundWorkResponse, AgentHostBackgroundTaskCompleted, AgentHostBackgroundWork, AgentHostBackgroundWorkKind, AgentHostBackgroundWorkState, AgentHostFileChunk, AgentHostFileNotModified, AgentHostFileTooLarge, AgentHostInteractionCancelled, AgentHostInteractionFailed, AgentHostInteractionResolved, AgentHostPendingInteraction, AgentHostSession, AgentHostSessionAdded, AgentHostSessionBackgroundWorkSnapshot, AgentHostSessionBackgroundWorkState, AgentHostSessionDeleted, AgentHostSessionEvent, AgentHostSessionInteractionsSnapshot, AgentHostSessionInteractionsState, AgentHostSessionUpdated, AgentHostSessionsSnapshot, AgentHostShellLifecycle, AgentHostShellLifecycleState, AgentHostShellOutputChunk, AgentHostShellOutputSnapshot, AgentHostSubagentStarted, AgentHostTurnAwaitingInput, AgentHostTurnError, AgentHostTurnInteractionsSuperseded, AgentHostTurnSettled, AgentHostTurnStarted, AgentHostWorkspace, CancelQueuedAgentHostTurnResponse, CreateAgentHostSessionResponse, DeleteAgentHostSessionResponse, ForkAgentHostSessionResponse, GetAgentHostDaemonInfoResponse, GetAgentHostSessionBlobsResponse, HasAgentHostSessionResponse, InterruptAgentHostTurnResponse, ListAgentHostSessionsResponse, ListAgentHostWorkspacesResponse, ReadAgentHostFileResponse, RespondToAgentHostInteractionResponse, SendAgentHostActionResponse, SendAgentHostMessageResponse, SessionParent, SetAgentHostSessionTitleResponse, ShutdownAgentHostDaemonResponse, UpdateAgentHostDaemonAuthResponse, WatchAgentHostSessionBackgroundWorkEvent, WatchAgentHostSessionInteractionsEvent, WatchAgentHostSessionShellOutputEvent, WatchAgentHostSessionTurnLifecycleEvent, WatchAgentHostSessionsEvent, WriteAgentHostSessionShellInputResponse } from "./proto/dist/generated/agent/v1/agent_host_pb.js";
import { AgentHostCCPluginSourceType, AgentHostPluginLoadFailureErrorType, AgentHostPluginSource, AgentHostPluginsSnapshotArgs } from "./proto/dist/generated/agent/v1/agent_host_plugins_pb.js";
import { AgentExecApprovalMode, AgentExecPermissions, AgentHostDurableSubagentInvocationKind, AgentHostDurableSubagentInvocationRecord, AgentHostSurfaceAgentStoreRequest, AgentHostSurfaceAuthRefreshRequest, AgentHostSurfaceCallbackInvocation, AgentHostSurfaceCanvasRequest, AgentHostSurfaceChannelEvent, AgentHostSurfaceChannelHeartbeat, AgentHostSurfaceCloudSubagentBackground, AgentHostSurfaceCloudSubagentCompleted, AgentHostSurfaceCloudSubagentCreateOrResume, AgentHostSurfaceCloudSubagentRequest, AgentHostSurfaceCloudSubagentRun, AgentHostSurfaceCloudSubagentRunResult, AgentHostSurfaceConversationSearchRequest, AgentHostSurfaceFileChangeNotify, AgentHostSurfaceFindSubagentRequest, AgentHostSurfaceGitRequest, AgentHostSurfaceHookRequest, AgentHostSurfaceMcpWriterRequest, AgentHostSurfacePermissionsPullRequest, AgentHostSurfacePluginsRequest, AgentHostSurfaceRequestContextRequest, AgentHostSurfaceRequiredGlobalCommandsRequest, AgentHostSurfaceSavedModelParametersRequest, AgentReadBoundary, PushAgentHostSessionPermissionsResponse, RespondAgentHostSurfaceCallbackResponse } from "./proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { ConversationStateStructure } from "./proto/dist/generated/agent/v1/agent_pb.js";
import { BackgroundShellSpawnArgs } from "./proto/dist/generated/agent/v1/background_shell_exec_pb.js";
import { CanvasDiagnosticsArgs } from "./proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { ConversationSearchArgs } from "./proto/dist/generated/agent/v1/conversation_search_exec_pb.js";
import { ExecuteHookRequest } from "./proto/dist/generated/agent/v1/exec_pb.js";
import { FetchError, FetchResult } from "./proto/dist/generated/agent/v1/fetch_exec_pb.js";
import { PreToolUseRequestQuery } from "./proto/dist/generated/agent/v1/hooks_pb.js";
import { McpAllowlistPrecheckArgs } from "./proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
import { HooksConfigInfo, RequestContextArgs } from "./proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { NetworkPolicy, NetworkPolicy_DefaultAction, SandboxPolicy, SandboxPolicy_ReadBoundaryMode, SandboxPolicy_Type } from "./proto/dist/generated/agent/v1/sandbox_pb.js";
import { ForceBackgroundShellStatus } from "./proto/dist/generated/agent/v1/shell_exec_pb.js";
import { SubagentArgs } from "./proto/dist/generated/agent/v1/subagent_exec_pb.js";
import { McpServedBy } from "./proto/dist/generated/aiserver/v1/dashboard_pb.js";
import { McpOAuthStoredClientInfo } from "./proto/dist/generated/aiserver/v1/mcp_pb.js";
import { McpElicitationResponse2, McpElicitationResponse_Action2, McpPlacement, McpToolCaller, MigrateMcpOAuthGrantRequest, NotReachableFromBackend_Reason, RespondToMcpElicitationRequest } from "./proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
import { GetDiffRequest } from "./proto/dist/generated/aiserver/v1/utils_pb.js";
import { defaultStitchedAgentStoreDeps } from "./src/agent-store/stitch-agent-store.ts";
import { AGENT_HOST_API_SCHEMA_REVISION, AGENT_HOST_DAEMON_VERSION } from "./src/api-schema-revision.ts";
import { implemented } from "./src/capabilities.ts";
import { AGENT_HOST_DAEMON_CLIENT_TYPE, AGENT_HOST_DAEMON_CLIENT_VERSION } from "./src/client-identity.ts";
import { INTEGER_REVISION_RE, SEMVER_REVISION_RE } from "./src/daemon-info.ts";
import { ALREADY_EXISTS_RE, FAILED_PRECONDITION_RE, FILE_READ_ERROR_CODES, INVALID_ARGUMENT_RE, NOT_FOUND_RE, OUT_OF_RANGE_RE, UNAVAILABLE_RE } from "./src/errors.ts";
import { unixHttp2MaxSessionMemoryOption } from "./src/http2-options.ts";
import { BLOB_ID_BYTE_LENGTH } from "./src/hydrate-attach-conversation-state.ts";
import { import_node_path99 } from "./src/map-request.ts";
import { DAEMON_AGENT_HOST_SURFACE, DaemonMetrics } from "./src/metrics/daemon-metrics.ts";
import { CONNECT_UNAUTHENTICATED, PRODUCT_AUTH_REFRESH_REASON } from "./src/product-auth-refresh.ts";
import { EMPTY_SLUG_HASH_LENGTH, PROJECTS_SUBDIR, import_node_crypto57, import_node_path100 } from "./src/project-dir.ts";
import { http22, import_node_fs44 } from "./src/server.ts";
import { import_node_path101 } from "./src/session-exec-config.ts";
import { SESSION_ALREADY_EXISTS_SNIPPET, SESSION_NOT_FOUND_SNIPPET } from "./src/session-persistence.ts";
import { UTF8 } from "./src/session-shell-output-resources.ts";
import { IMPORT_THIRD_PARTY } from "./src/stitch-plugins.ts";
import { DEBUG_CANVAS_PATH } from "./src/surface-canvas-mcp-writer-fixtures.ts";
import { FAIL_CLOSED_DELIVERED_HOP_KINDS, FALLBACK_SURFACE_CALLBACK_KINDS, RESERVED_SURFACE_CALLBACK_KINDS, SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND, SURFACE_CALLBACK_PROBE_TIMEOUT_MS, SURFACE_CALLBACK_RESULT_CASE, SURFACE_CALLBACK_TIMEOUT_MS, SURFACE_CLOUD_SUBAGENT_DEADLINE_MS, SurfaceChannelHub } from "./src/surface-channel-hub.ts";
import { CLOUD_SUBAGENT_UNBOUND } from "./src/surface-cloud-subagent.ts";
import { PRE_PUSH_DENY } from "./src/surface-permissions-map.ts";
import { HopPluginsService } from "./src/surface-plugins.ts";
import { AgentHostDebugShellHooksService, AgentHostSurfaceTestHooksService, DebugClaimDurableSubagentInvocationResponse, DebugEmitAgentHostSurfaceAuthRefreshResponse, DebugInvokeAgentHostSurfaceKindResponse, DebugReadDurableSubagentInvocationResponse, DebugSpawnDemoShellResponse } from "./src/surface-test-hooks.ts";
export function isCursorNetworkHost(runtime) {
    return "getCursorAuthToken" in runtime && "applyRequestHeaders" in runtime;
}
export function registerImplementedDaemonCapability(token) {
    const trimmed = token.trim();
    if (trimmed.length > 0) {
        implemented.add(trimmed);
    }
}
function implementedDaemonCapabilities() {
    return [
        ...implemented
    ].sort();
}
function resolveDaemonBuildIdentity(env = process.env) {
    const override = env.AGENT_HOST_DAEMON_BUILD_IDENTITY;
    if (override !== void 0 && override.trim().length > 0) {
        return override.trim();
    }
    const commit = env.CURSOR_COMMIT_SHA ?? env.GIT_COMMIT;
    if (commit !== void 0 && commit.trim().length > 0) {
        return commit.trim();
    }
    return `1.0.0+start:${String(process.pid)}`;
}
function compareApiSchemaRevision(left, right) {
    if (left === right) {
        return 0;
    }
    if (INTEGER_REVISION_RE.test(left) && INTEGER_REVISION_RE.test(right)) {
        return Number(left) - Number(right);
    }
    if (SEMVER_REVISION_RE.test(left) && SEMVER_REVISION_RE.test(right)) {
        const leftParts = left.split(".").map(Number);
        const rightParts = right.split(".").map(Number);
        for(let i = 0; i < 3; i += 1){
            const delta = (leftParts[i] ?? 0) - (rightParts[i] ?? 0);
            if (delta !== 0) {
                return delta;
            }
        }
        return 0;
    }
    return void 0;
}
function assertDaemonHandshake(input) {
    if (input.expectedApiSchemaRevision.length === 0) {
        throw new ConnectError("expected_api_schema_revision is required", Code.FailedPrecondition);
    }
    if (input.expectedApiSchemaRevision !== input.daemonApiSchemaRevision) {
        const cmp = compareApiSchemaRevision(input.daemonApiSchemaRevision, input.expectedApiSchemaRevision);
        const daemonNewer = cmp !== void 0 && cmp > 0;
        if (!(input.allowNewerSchema === true && daemonNewer)) {
            throw new ConnectError(`api schema revision mismatch: expected ${input.expectedApiSchemaRevision} daemon ${input.daemonApiSchemaRevision}`, Code.FailedPrecondition);
        }
    }
    if (input.desiredLocalLoopEnabled !== input.localLoopEnabled) {
        throw new ConnectError(`local_loop_enabled mismatch: desired ${String(input.desiredLocalLoopEnabled)} daemon ${String(input.localLoopEnabled)}. Restart the daemon with matching --local-loop; the extension does not silently flip flags.`, Code.FailedPrecondition);
    }
}
function assertShutdownDaemonIdle(onlyIfIdle, runningSessionCount) {
    if (onlyIfIdle && runningSessionCount > 0) {
        throw new ConnectError(`ShutdownDaemon(only_if_idle=true) refused: running_session_count=${String(runningSessionCount)}`, Code.FailedPrecondition);
    }
}
async function resolveRunningSessionCount(host, ctx) {
    const fromRuntime = host.countHostedSessions?.();
    if (fromRuntime !== void 0) {
        return fromRuntime;
    }
    const listed = await host.listSessions(ctx, {
        includeChildren: true
    });
    return listed.sessions.length;
}
function defaultDaemonInfoFields() {
    return {
        daemonVersion: AGENT_HOST_DAEMON_VERSION,
        apiSchemaRevision: AGENT_HOST_API_SCHEMA_REVISION,
        buildIdentity: resolveDaemonBuildIdentity(),
        capabilities: implementedDaemonCapabilities()
    };
}
async function hydrateConversationStateForAttach(ctx, blobStore, state) {
    const entries = state.rootPromptMessagesJson;
    const n = entries.length;
    if (n === 0) {
        return state;
    }
    let changed = false;
    const nextKeys = new Array(n);
    for(let i = 0; i < n; i++){
        const entry = entries[i];
        if (entry === void 0) {
            throw new Error("rootPromptMessagesJson is sparse");
        }
        if (entry.byteLength !== BLOB_ID_BYTE_LENGTH) {
            nextKeys[i] = entry;
            continue;
        }
        const data = await blobStore.getBlob(ctx, entry);
        if (data === void 0) {
            nextKeys[i] = entry;
            continue;
        }
        nextKeys[i] = data;
        changed = true;
    }
    if (!changed) {
        return state;
    }
    const next = new ConversationStateStructure(state);
    next.rootPromptMessagesJson = nextKeys;
    return next;
}
async function* attachSessionWithHydratedConversationState(ctx, host, request3, blobStoreFor) {
    for await (const event of host.attachSession(ctx, request3)){
        if (event.event.case !== "conversationState") {
            yield event;
            continue;
        }
        const blobStore = blobStoreFor?.(request3.sessionId);
        if (blobStore === void 0) {
            yield event;
            continue;
        }
        try {
            yield {
                eventId: event.eventId,
                event: {
                    case: "conversationState",
                    value: await hydrateConversationStateForAttach(ctx, blobStore, event.event.value)
                }
            };
        } catch  {
            yield event;
        }
    }
}
function toCreateSessionRequest(req) {
    const sessionOptions = req.sessionOptions;
    const workspacePaths = sessionOptions?.workspacePaths ?? [];
    const isGlassRoot = sessionOptions?.isGlassRoot === true;
    if (sessionOptions === void 0 || workspacePaths.length === 0 && !isGlassRoot) {
        throw new ConnectError("CreateSession requires session_options.workspace_paths with at least one absolute path", Code.InvalidArgument);
    }
    for (const workspacePath of workspacePaths){
        const trimmed = workspacePath.trim();
        if (trimmed.length === 0 || !(0, import_node_path99.isAbsolute)(trimmed)) {
            throw new ConnectError("CreateSession requires session_options.workspace_paths with at least one absolute path", Code.InvalidArgument);
        }
    }
    const clientInstanceId = req.clientInstanceId?.trim() ?? "";
    if (isGlassRoot && workspacePaths.length === 0 && clientInstanceId.length === 0) {
        throw new ConnectError("Glass CreateSession requires client_instance_id", Code.InvalidArgument);
    }
    return {
        sessionId: req.sessionId,
        initialHistory: req.initialHistory,
        sessionOptions,
        clientInstanceId: req.clientInstanceId,
        ...clientInstanceId.length > 0 ? {
            owningClientInstanceId: clientInstanceId
        } : {}
    };
}
function toForkSessionRequest(req) {
    return {
        sessionId: req.sessionId,
        throughTurnId: req.throughTurnId
    };
}
function toListSessionsRequest(req) {
    const workspacePathsFilter = requireWorkspacePathsFilter(req.workspacePathsFilter);
    const ownerClientInstanceId = req.ownerClientInstanceId?.trim() || void 0;
    return {
        includeChildren: req.includeChildren,
        parentSessionId: req.parentSessionId,
        limit: req.limit,
        workspacePathsFilter,
        matchAnyWorkspaceRoot: req.matchAnyWorkspaceRoot,
        ...ownerClientInstanceId === void 0 ? {} : {
            ownerClientInstanceId
        },
        includeOwnerUnrootedSessions: req.includeOwnerUnrootedSessions
    };
}
function toListWorkspacesRequest(_req) {
    return {};
}
function toWatchSessionsRequest(req) {
    const workspacePathsFilter = requireWorkspacePathsFilter(req.workspacePathsFilter);
    const ownerClientInstanceId = req.ownerClientInstanceId?.trim() || void 0;
    return {
        workspacePathsFilter,
        matchAnyWorkspaceRoot: req.matchAnyWorkspaceRoot,
        ...ownerClientInstanceId === void 0 ? {} : {
            ownerClientInstanceId
        },
        includeOwnerUnrootedSessions: req.includeOwnerUnrootedSessions
    };
}
function toHasSessionRequest(req) {
    return {
        sessionId: req.sessionId
    };
}
function requireWorkspacePathsFilter(filter3) {
    const normalized = [];
    for (const path64 of filter3 ?? []){
        if (path64.length === 0) {
            continue;
        }
        if (!normalized.includes(path64)) {
            normalized.push(path64);
        }
    }
    if (normalized.length === 0) {
        throw new ConnectError("workspace_paths_filter must be non-empty", Code.InvalidArgument);
    }
    return normalized;
}
function toSendMessageRequest(req) {
    return {
        sessionId: req.sessionId,
        text: req.text,
        messageId: req.messageId,
        modelId: req.modelId,
        modelDetails: req.modelDetails,
        requestedModel: req.requestedModel,
        turnOptions: req.turnOptions
    };
}
function toSendActionRequest(req) {
    if (req.action === void 0) {
        throw new ConnectError("action is required", Code.InvalidArgument);
    }
    return {
        sessionId: req.sessionId,
        action: req.action,
        modelId: req.modelId,
        modelDetails: req.modelDetails,
        requestedModel: req.requestedModel,
        turnOptions: req.turnOptions,
        baseHistory: req.baseHistory,
        delivery: req.delivery,
        replaceQueuedTurnId: req.replaceQueuedTurnId,
        requestContextDecoration: req.requestContextDecoration
    };
}
function toDeleteSessionRequest(req) {
    return {
        sessionId: req.sessionId
    };
}
function toInterruptTurnRequest(req) {
    return {
        sessionId: req.sessionId,
        turnId: req.turnId,
        reason: req.reason,
        sessionTree: req.sessionTree,
        initiatedBy: req.initiatedBy
    };
}
function toCancelQueuedTurnRequest(req) {
    return {
        sessionId: req.sessionId,
        turnId: req.turnId,
        reason: req.reason,
        initiatedBy: req.initiatedBy
    };
}
function toRespondToInteractionRequest(req) {
    const { sessionId, interactionId, answer } = req;
    if (answer.case === void 0) {
        throw new ConnectError("answer is required", Code.InvalidArgument);
    }
    return {
        sessionId,
        interactionId,
        answer
    };
}
function toWatchInteractionsRequest(req) {
    return {
        sessionId: req.sessionId
    };
}
function toWatchBackgroundWorkRequest(req) {
    return {
        sessionId: req.sessionId,
        kind: req.kind,
        state: req.state,
        ownerId: req.ownerId
    };
}
function toWatchTurnLifecycleRequest(req) {
    return {
        sessionId: req.sessionId
    };
}
function toAbortBackgroundWorkRequest(req) {
    return {
        sessionId: req.sessionId,
        workId: req.workId
    };
}
function toAbortAllBackgroundWorkRequest(req) {
    return {
        sessionId: req.sessionId,
        kind: req.kind,
        state: req.state,
        ownerId: req.ownerId
    };
}
function toAttachSessionRequest(req) {
    return {
        sessionId: req.sessionId,
        lastEventId: req.lastEventId,
        backgroundTaskCompletionsOnly: req.backgroundTaskCompletionsOnly,
        clientInstanceId: req.clientInstanceId
    };
}
function toGetSessionBlobsRequest(req) {
    return {
        sessionId: req.sessionId,
        blobIds: req.blobIds,
        maxResponseBytes: req.maxResponseBytes
    };
}
function toReadFileRequest(req) {
    return {
        path: req.path,
        readOffset: req.readOffset,
        readLimit: req.readLimit,
        ...req.cachedMtimeMs === void 0 ? {} : {
            cachedMtimeMs: req.cachedMtimeMs
        }
    };
}
function toWatchShellOutputRequest(req) {
    return {
        sessionId: req.sessionId,
        shellId: req.shellId,
        ...req.includeSnapshot === void 0 ? {} : {
            includeSnapshot: req.includeSnapshot
        },
        ...req.fromOutputOffset === void 0 ? {} : {
            fromOutputOffset: req.fromOutputOffset
        }
    };
}
function toWriteShellInputRequest(req) {
    return {
        sessionId: req.sessionId,
        shellId: req.shellId,
        data: req.data
    };
}
function toCreateSessionResponse() {
    return new CreateAgentHostSessionResponse();
}
function toForkSessionResponse(res) {
    return new ForkAgentHostSessionResponse({
        sessionId: res.sessionId
    });
}
function toListSessionsResponse(res) {
    return new ListAgentHostSessionsResponse({
        sessions: res.sessions.map(toProtoSession)
    });
}
function toListWorkspacesResponse(res) {
    return new ListAgentHostWorkspacesResponse({
        workspaces: res.workspaces.map(toProtoWorkspace)
    });
}
function toProtoWorkspace(workspace) {
    return new AgentHostWorkspace({
        workspacePaths: [
            ...workspace.workspacePaths
        ],
        ...workspace.worktreeMainPath === void 0 ? {} : {
            worktreeMainPath: workspace.worktreeMainPath
        },
        ...workspace.displayPath === void 0 ? {} : {
            displayPath: workspace.displayPath
        }
    });
}
function toSendMessageResponse(res) {
    return new SendAgentHostMessageResponse({
        turnId: res.turnId,
        deliveredAs: res.deliveredAs
    });
}
function toSendActionResponse(res) {
    return new SendAgentHostActionResponse({
        turnId: res.turnId,
        deliveredAs: res.deliveredAs
    });
}
function toDeleteSessionResponse() {
    return new DeleteAgentHostSessionResponse();
}
function toInterruptTurnResponse(res) {
    return new InterruptAgentHostTurnResponse({
        interrupted: res.interrupted
    });
}
function toCancelQueuedTurnResponse(res) {
    return new CancelQueuedAgentHostTurnResponse({
        cancelled: res.cancelled
    });
}
function toRespondToInteractionResponse(res) {
    return new RespondToAgentHostInteractionResponse({
        status: res.status
    });
}
function toAbortBackgroundWorkResponse(res) {
    return new AbortAgentHostBackgroundWorkResponse({
        aborted: res.aborted
    });
}
function toAbortAllBackgroundWorkResponse(res) {
    return new AbortAllAgentHostBackgroundWorkResponse({
        abortedCount: res.abortedCount
    });
}
function toWatchSessionsEvent(event) {
    switch(event.event.case){
        case "snapshot":
            return new WatchAgentHostSessionsEvent({
                event: {
                    case: "snapshot",
                    value: new AgentHostSessionsSnapshot({
                        sessions: event.event.value.sessions.map(toProtoSession)
                    })
                }
            });
        case "added":
            return new WatchAgentHostSessionsEvent({
                event: {
                    case: "added",
                    value: new AgentHostSessionAdded({
                        session: toProtoSession(event.event.value.session)
                    })
                }
            });
        case "updated":
            return new WatchAgentHostSessionsEvent({
                event: {
                    case: "updated",
                    value: new AgentHostSessionUpdated({
                        session: toProtoSession(event.event.value.session)
                    })
                }
            });
        case "deleted":
            return new WatchAgentHostSessionsEvent({
                event: {
                    case: "deleted",
                    value: new AgentHostSessionDeleted({
                        sessionId: event.event.value.sessionId
                    })
                }
            });
    }
}
function toWatchInteractionsEvent(event) {
    const interactions = event.event.value.interactions.map((interaction)=>new AgentHostPendingInteraction(interaction));
    if (event.event.case === "snapshot") {
        return new WatchAgentHostSessionInteractionsEvent({
            event: {
                case: "snapshot",
                value: new AgentHostSessionInteractionsSnapshot({
                    interactions
                })
            }
        });
    }
    return new WatchAgentHostSessionInteractionsEvent({
        event: {
            case: "state",
            value: new AgentHostSessionInteractionsState({
                interactions
            })
        }
    });
}
function toWatchBackgroundWorkEvent(event) {
    const work = event.event.value.work.map(toProtoBackgroundWork);
    if (event.event.case === "snapshot") {
        return new WatchAgentHostSessionBackgroundWorkEvent({
            event: {
                case: "snapshot",
                value: new AgentHostSessionBackgroundWorkSnapshot({
                    work
                })
            }
        });
    }
    return new WatchAgentHostSessionBackgroundWorkEvent({
        event: {
            case: "state",
            value: new AgentHostSessionBackgroundWorkState({
                work
            })
        }
    });
}
function toWatchTurnLifecycleEvent(event) {
    return new WatchAgentHostSessionTurnLifecycleEvent({
        event: event.event
    });
}
function toSessionEvent(event) {
    return new AgentHostSessionEvent({
        eventId: event.eventId,
        event: toSessionEventPayload(event)
    });
}
function toSessionEventPayload(event) {
    switch(event.event.case){
        case "interactionUpdate":
            return {
                case: "interactionUpdate",
                value: event.event.value
            };
        case "conversationState":
            return {
                case: "conversationState",
                value: event.event.value
            };
        case "turnStarted":
            return {
                case: "turnStarted",
                value: new AgentHostTurnStarted(event.event.value)
            };
        case "turnAwaitingInput":
            return {
                case: "turnAwaitingInput",
                value: new AgentHostTurnAwaitingInput(event.event.value)
            };
        case "turnSettled":
            return {
                case: "turnSettled",
                value: toTurnSettled(event.event.value)
            };
        case "interactionResolved":
            return {
                case: "interactionResolved",
                value: toInteractionResolved(event.event.value)
            };
        case "subagentStarted":
            return {
                case: "subagentStarted",
                value: new AgentHostSubagentStarted(event.event.value)
            };
        case "backgroundTaskCompleted":
            return {
                case: "backgroundTaskCompleted",
                value: new AgentHostBackgroundTaskCompleted({
                    completion: event.event.value.completion
                })
            };
        case "turnInteractionsSuperseded":
            return {
                case: "turnInteractionsSuperseded",
                value: new AgentHostTurnInteractionsSuperseded(event.event.value)
            };
    }
}
function toTurnSettled(value) {
    return new AgentHostTurnSettled({
        turnId: value.turnId,
        outcome: value.outcome,
        detail: value.detail,
        interruptedBy: value.interruptedBy,
        stopReason: value.stopReason,
        error: value.error === void 0 ? void 0 : new AgentHostTurnError(value.error)
    });
}
function toInteractionResolved(value) {
    switch(value.resolution.case){
        case "responded":
            return new AgentHostInteractionResolved({
                turnId: value.turnId,
                interactionId: value.interactionId,
                resolution: {
                    case: "responded",
                    value: value.resolution.value
                }
            });
        case "cancelled":
            return new AgentHostInteractionResolved({
                turnId: value.turnId,
                interactionId: value.interactionId,
                resolution: {
                    case: "cancelled",
                    value: new AgentHostInteractionCancelled(value.resolution.value)
                }
            });
        case "failed":
            return new AgentHostInteractionResolved({
                turnId: value.turnId,
                interactionId: value.interactionId,
                resolution: {
                    case: "failed",
                    value: new AgentHostInteractionFailed(value.resolution.value)
                }
            });
        case "execApproval":
        case "mcpElicitation":
            return new AgentHostInteractionResolved({
                turnId: value.turnId,
                interactionId: value.interactionId,
                resolution: value.resolution
            });
        case void 0:
            return new AgentHostInteractionResolved({
                turnId: value.turnId,
                interactionId: value.interactionId,
                resolution: {
                    case: void 0
                }
            });
    }
}
function toProtoSession(session) {
    return new AgentHostSession({
        sessionId: session.sessionId,
        status: session.status,
        lastEventId: session.lastEventId,
        forkedFromSessionId: session.forkedFromSessionId,
        title: session.title,
        parent: session.parent === void 0 ? void 0 : new SessionParent(session.parent),
        updatedAt: session.updatedAt,
        modelId: session.modelId,
        runningTurnId: session.runningTurnId,
        queuedTurnIds: session.queuedTurnIds,
        workspace: session.workspace === void 0 ? void 0 : toProtoWorkspace(session.workspace)
    });
}
function toSurfaceChannelEvent(event) {
    if (event.case === "heartbeat") {
        return new AgentHostSurfaceChannelEvent({
            event: {
                case: "heartbeat",
                value: new AgentHostSurfaceChannelHeartbeat({
                    epochMs: event.heartbeat.epochMs
                })
            }
        });
    }
    if (event.case === "auth_refresh") {
        return new AgentHostSurfaceChannelEvent({
            event: {
                case: "authRefresh",
                value: new AgentHostSurfaceAuthRefreshRequest({
                    reason: event.authRefresh.reason
                })
            }
        });
    }
    return new AgentHostSurfaceChannelEvent({
        event: {
            case: "invocation",
            value: new AgentHostSurfaceCallbackInvocation({
                callbackId: event.invocation.callbackId,
                sessionId: event.invocation.sessionId,
                ...event.invocation.rootSessionId === void 0 || event.invocation.rootSessionId.length === 0 ? {} : {
                    rootSessionId: event.invocation.rootSessionId
                },
                targetClientInstanceId: event.invocation.targetClientInstanceId,
                kind: toSurfaceInvocationKind(event.invocation)
            })
        }
    });
}
function toSurfaceInvocationKind(invocation) {
    switch(invocation.kind){
        case "permissions_pull":
            return {
                case: "permissionsPull",
                value: new AgentHostSurfacePermissionsPullRequest()
            };
        case "conversation_search":
            return {
                case: "conversationSearch",
                value: invocation.conversationSearch ?? new AgentHostSurfaceConversationSearchRequest()
            };
        case "file_change_notify":
            return {
                case: "fileChangeNotify",
                value: invocation.fileChangeNotify ?? new AgentHostSurfaceFileChangeNotify()
            };
        case "hook":
            return {
                case: "hook",
                value: invocation.hook ?? new AgentHostSurfaceHookRequest()
            };
        case "git":
            return {
                case: "git",
                value: invocation.git ?? new AgentHostSurfaceGitRequest()
            };
        case "canvas":
            return {
                case: "canvas",
                value: invocation.canvas ?? new AgentHostSurfaceCanvasRequest()
            };
        case "agent_host_plugins":
            return {
                case: "agentHostPlugins",
                value: invocation.agentHostPlugins ?? new AgentHostSurfacePluginsRequest()
            };
        case "agent_host_agent_store":
            return {
                case: "agentHostAgentStore",
                value: invocation.agentHostAgentStore ?? new AgentHostSurfaceAgentStoreRequest()
            };
        case "mcp_writer":
            return {
                case: "mcpWriter",
                value: invocation.mcpWriter ?? new AgentHostSurfaceMcpWriterRequest()
            };
        case "cloud_subagent":
            return {
                case: "cloudSubagent",
                value: invocation.cloudSubagent ?? new AgentHostSurfaceCloudSubagentRequest()
            };
        case "saved_model_parameters":
            return {
                case: "savedModelParameters",
                value: invocation.savedModelParameters ?? new AgentHostSurfaceSavedModelParametersRequest()
            };
        case "required_global_commands":
            return {
                case: "requiredGlobalCommands",
                value: invocation.requiredGlobalCommands ?? new AgentHostSurfaceRequiredGlobalCommandsRequest()
            };
        case "find_subagent":
            return {
                case: "findSubagent",
                value: new AgentHostSurfaceFindSubagentRequest()
            };
        case "request_context":
            return {
                case: "requestContext",
                value: invocation.requestContext ?? new AgentHostSurfaceRequestContextRequest()
            };
        default:
            {
                const exhaustive = invocation.kind;
                return exhaustive;
            }
    }
}
function toReadFileResponse(response) {
    const fields = {
        totalBytes: response.totalBytes,
        mtimeMs: response.mtimeMs
    };
    switch(response.result.case){
        case "chunk":
            {
                const chunk = response.result.value;
                return new ReadAgentHostFileResponse({
                    ...fields,
                    result: {
                        case: "chunk",
                        value: new AgentHostFileChunk({
                            offset: chunk.offset,
                            data: chunk.data
                        })
                    }
                });
            }
        case "notModified":
            return new ReadAgentHostFileResponse({
                ...fields,
                result: {
                    case: "notModified",
                    value: new AgentHostFileNotModified()
                }
            });
        case "tooLarge":
            return new ReadAgentHostFileResponse({
                ...fields,
                result: {
                    case: "tooLarge",
                    value: new AgentHostFileTooLarge({
                        maxBytes: response.result.value.maxBytes
                    })
                }
            });
    }
}
function toWatchShellOutputEvent(event) {
    if (event.type === "snapshot") {
        return new WatchAgentHostSessionShellOutputEvent({
            event: {
                case: "snapshot",
                value: new AgentHostShellOutputSnapshot({
                    shellId: event.snapshot.shellId,
                    command: event.snapshot.command,
                    cwd: event.snapshot.cwd,
                    state: toProtoShellLifecycleState(event.snapshot.state),
                    bufferedOutput: new Uint8Array(event.snapshot.bufferedOutput),
                    nextOutputOffset: event.snapshot.nextOutputOffset,
                    adopted: event.snapshot.adopted,
                    ...event.snapshot.toolCallId === void 0 ? {} : {
                        toolCallId: event.snapshot.toolCallId
                    },
                    ...event.snapshot.title === void 0 ? {} : {
                        title: event.snapshot.title
                    }
                })
            }
        });
    }
    if (event.type === "chunk") {
        return new WatchAgentHostSessionShellOutputEvent({
            event: {
                case: "output",
                value: new AgentHostShellOutputChunk({
                    shellId: event.chunk.shellId,
                    outputOffset: event.chunk.outputOffset,
                    isBackpressured: event.chunk.isBackpressured,
                    stream: event.chunk.stream === "stdout" ? {
                        case: "stdout",
                        value: new Uint8Array(event.chunk.data)
                    } : {
                        case: "stderr",
                        value: new Uint8Array(event.chunk.data)
                    }
                })
            }
        });
    }
    return new WatchAgentHostSessionShellOutputEvent({
        event: {
            case: "lifecycle",
            value: new AgentHostShellLifecycle({
                shellId: event.lifecycle.shellId,
                state: toProtoShellLifecycleState(event.lifecycle.state),
                ...event.lifecycle.exitCode === void 0 ? {} : {
                    exitCode: event.lifecycle.exitCode
                },
                ...event.lifecycle.abortReason === void 0 ? {} : {
                    abortReason: event.lifecycle.abortReason
                }
            })
        }
    });
}
function toWriteShellInputResponse(result) {
    return new WriteAgentHostSessionShellInputResponse({
        bytesAccepted: result.bytesAccepted
    });
}
function toProtoShellLifecycleState(state) {
    switch(state){
        case "starting":
            return AgentHostShellLifecycleState.STARTING;
        case "running":
            return AgentHostShellLifecycleState.RUNNING;
        case "exited":
            return AgentHostShellLifecycleState.EXITED;
        case "aborted":
            return AgentHostShellLifecycleState.ABORTED;
        default:
            return AgentHostShellLifecycleState.UNSPECIFIED;
    }
}
function toProtoBackgroundWork(work) {
    return new AgentHostBackgroundWork({
        id: work.id,
        kind: work.kind,
        state: work.state,
        ownerId: work.ownerId,
        hasAbort: work.hasAbort,
        metadata: work.metadata
    });
}
function isProductInferenceUnauthorized(error3) {
    if (error3.kind === "ActionRequiredError" && error3.action === "login") {
        return true;
    }
    if (error3.connectCode === "Unauthenticated") {
        return true;
    }
    return error3.connectCode === CONNECT_UNAUTHENTICATED;
}
function emitAuthRefreshForOwningClient(args) {
    const target = args.hub.resolveCallbackTarget({
        sessionId: args.sessionId.trim(),
        persistedOwner: args.persistedOwner
    });
    if (target === void 0) {
        return {
            delivered: false
        };
    }
    return {
        delivered: args.hub.emitAuthRefresh({
            targetClientInstanceId: target,
            reason: args.reason ?? PRODUCT_AUTH_REFRESH_REASON
        })
    };
}
function emitAuthRefreshFromSessionEvent(args) {
    if (args.event.event.case !== "turnSettled") {
        return {
            delivered: false
        };
    }
    const error3 = args.event.event.value.error;
    if (error3 === void 0 || !isProductInferenceUnauthorized(error3)) {
        return {
            delivered: false
        };
    }
    return emitAuthRefreshForOwningClient({
        hub: args.hub,
        sessionId: args.sessionId,
        persistedOwner: args.persistedOwner
    });
}
function toConnectError2(error3) {
    if (error3 instanceof ConnectError) {
        return error3;
    }
    if (isAbortError3(error3)) {
        return new ConnectError("canceled", Code.Canceled, void 0, void 0, error3);
    }
    if (isWorkspaceListUnsupportedError(error3)) {
        return new ConnectError(publicErrorMessage(error3), Code.Unimplemented, void 0, void 0, error3);
    }
    if (isCursorTooOldError(error3)) {
        return new ConnectError(publicErrorMessage(error3), Code.OutOfRange, void 0, void 0, error3);
    }
    if (isSessionForkHistoryUnavailableError(error3)) {
        return new ConnectError(publicErrorMessage(error3), Code.FailedPrecondition, void 0, void 0, error3);
    }
    if (isSendNowRequiresUserMessageError(error3)) {
        return new ConnectError(publicErrorMessage(error3), Code.InvalidArgument, void 0, void 0, error3);
    }
    if (isInvalidInteractionResponseError(error3)) {
        return new ConnectError(publicErrorMessage(error3), Code.InvalidArgument, void 0, void 0, error3);
    }
    const fileReadCode = fileReadConnectCode(error3);
    if (fileReadCode !== void 0) {
        return new ConnectError(publicErrorMessage(error3), fileReadCode, void 0, void 0, error3);
    }
    const message = publicErrorMessage(error3);
    const code = connectCodeForMessage(message);
    return new ConnectError(code === Code.Internal ? "agent host request failed" : message, code, void 0, void 0, error3);
}
function isAbortError3(error3) {
    return error3 instanceof Error && error3.name === "AbortError" || error3 instanceof DOMException && error3.name === "AbortError";
}
function publicErrorMessage(error3) {
    if (error3 instanceof Error && error3.message.length > 0) {
        return sanitizeErrorMessage(error3.message);
    }
    return "agent host request failed";
}
function sanitizeErrorMessage(message) {
    return message.replace(/\s+/g, " ").trim().slice(0, 300);
}
function connectCodeForMessage(message) {
    if (UNAVAILABLE_RE.test(message)) {
        return Code.Unavailable;
    }
    if (ALREADY_EXISTS_RE.test(message)) {
        return Code.AlreadyExists;
    }
    if (NOT_FOUND_RE.test(message)) {
        return Code.NotFound;
    }
    if (FAILED_PRECONDITION_RE.test(message)) {
        return Code.FailedPrecondition;
    }
    if (INVALID_ARGUMENT_RE.test(message)) {
        return Code.InvalidArgument;
    }
    if (OUT_OF_RANGE_RE.test(message)) {
        return Code.OutOfRange;
    }
    return Code.Internal;
}
function isCursorTooOldError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    if (error3.name === "AgentHostSessionEventCursorTooOldError") {
        return true;
    }
    return "code" in error3 && error3.code === "SESSION_EVENT_CURSOR_TOO_OLD";
}
function isInvalidInteractionResponseError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    if (error3.name === "AgentHostInvalidInteractionResponseError") {
        return true;
    }
    return "code" in error3 && error3.code === "INTERACTION_RESPONSE_INVALID";
}
function fileReadConnectCode(error3) {
    if (!(error3 instanceof Error)) {
        return void 0;
    }
    const code = "code" in error3 ? error3.code : void 0;
    return FILE_READ_ERROR_CODES.find((entry)=>entry.name === error3.name || entry.code === code)?.connectCode;
}
function isSessionForkHistoryUnavailableError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    if (error3.name === "AgentHostSessionForkHistoryUnavailableError") {
        return true;
    }
    return "code" in error3 && error3.code === "SESSION_FORK_HISTORY_UNAVAILABLE";
}
function isWorkspaceListUnsupportedError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    if (error3.name === "AgentHostWorkspaceListUnsupportedError") {
        return true;
    }
    return "code" in error3 && error3.code === "WORKSPACE_LIST_UNSUPPORTED";
}
function isSendNowRequiresUserMessageError(error3) {
    if (!(error3 instanceof Error)) {
        return false;
    }
    if (error3.name === "AgentHostSendNowRequiresUserMessageError") {
        return true;
    }
    return "code" in error3 && error3.code === "SEND_NOW_REQUIRES_USER_MESSAGE";
}
function rpcCanceledError() {
    const error3 = new Error("rpc canceled");
    error3.name = "AbortError";
    return error3;
}
function attachHandlerContext(handlerCtx) {
    const [ctx, cancel] = createContext().withCancel();
    if (handlerCtx.signal.aborted) {
        cancel(rpcCanceledError());
        return {
            ctx,
            detach: ()=>void 0
        };
    }
    const onAbort = ()=>{
        cancel(rpcCanceledError());
    };
    handlerCtx.signal.addEventListener("abort", onAbort);
    return {
        ctx,
        detach: ()=>{
            handlerCtx.signal.removeEventListener("abort", onAbort);
        }
    };
}
async function unaryRpc(handlerCtx, run) {
    throwIfHandlerCanceled(handlerCtx);
    const attached = attachHandlerContext(handlerCtx);
    try {
        throwIfHandlerCanceled(handlerCtx);
        return await run(attached.ctx);
    } catch (error3) {
        throw toConnectError2(error3);
    } finally{
        attached.detach();
    }
}
async function* streamRpc(handlerCtx, run, map4) {
    throwIfHandlerCanceled(handlerCtx);
    const attached = attachHandlerContext(handlerCtx);
    try {
        throwIfHandlerCanceled(handlerCtx);
        for await (const item of run(attached.ctx)){
            yield map4(item);
        }
    } catch (error3) {
        throw toConnectError2(error3);
    } finally{
        attached.detach();
    }
}
function throwIfHandlerCanceled(handlerCtx) {
    if (!handlerCtx.signal.aborted) {
        return;
    }
    const reason = handlerCtx.signal.reason;
    throw toConnectError2(reason instanceof Error ? reason : rpcCanceledError());
}
export function withPrePushDeny(current) {
    const deny = [
        ...current.deny
    ];
    for (const entry of PRE_PUSH_DENY){
        if (!deny.includes(entry)) {
            deny.push(entry);
        }
    }
    return {
        ...current,
        deny
    };
}
export function withoutPrePushDeny(deny) {
    return deny.filter((entry)=>!PRE_PUSH_DENY.includes(entry));
}
export function denyAllPermissions() {
    return {
        allow: [],
        deny: [
            ...PRE_PUSH_DENY
        ],
        approvalMode: "ask-every-time",
        readBoundary: "workspace",
        userConfiguredPolicy: {
            type: "workspace_readonly"
        }
    };
}
function toApprovalMode(mode) {
    switch(mode){
        case AgentExecApprovalMode.UNRESTRICTED:
            return "unrestricted";
        case AgentExecApprovalMode.ALLOWLIST:
            return "allowlist";
        case AgentExecApprovalMode.ASK_EVERY_TIME:
            return "ask-every-time";
        case AgentExecApprovalMode.UNSPECIFIED:
            return void 0;
        default:
            return void 0;
    }
}
function toReadBoundary(boundary) {
    if (boundary === AgentReadBoundary.SYSTEM) {
        return "system";
    }
    if (boundary === AgentReadBoundary.WORKSPACE) {
        return "workspace";
    }
    return void 0;
}
function toNestedReadBoundary(mode) {
    if (mode === SandboxPolicy_ReadBoundaryMode.WORKSPACE) {
        return "workspace";
    }
    if (mode === SandboxPolicy_ReadBoundaryMode.SYSTEM) {
        return "system";
    }
    return void 0;
}
function previousNestedReadBoundary(fallback3) {
    if (fallback3.type === "workspace_readonly" || fallback3.type === "workspace_readwrite") {
        return fallback3.readBoundary;
    }
    return void 0;
}
function toNetworkPolicy(proto, fallback3) {
    if (proto.networkPolicy !== void 0) {
        const mapped = {};
        if (proto.networkPolicy.defaultAction === NetworkPolicy_DefaultAction.ALLOW) {
            mapped.default = "allow";
        } else if (proto.networkPolicy.defaultAction === NetworkPolicy_DefaultAction.DENY) {
            mapped.default = "deny";
        }
        if (proto.networkPolicy.allow.length > 0) {
            mapped.allow = [
                ...proto.networkPolicy.allow
            ];
        }
        if (proto.networkPolicy.deny.length > 0) {
            mapped.deny = [
                ...proto.networkPolicy.deny
            ];
        }
        return mapped;
    }
    if (proto.networkAccess === true) {
        return {
            default: "allow"
        };
    }
    if (proto.networkAccess === false) {
        return {
            default: "deny"
        };
    }
    if ((fallback3.type === "workspace_readonly" || fallback3.type === "workspace_readwrite") && fallback3.networkPolicy !== void 0) {
        return fallback3.networkPolicy;
    }
    return {
        default: "deny"
    };
}
function previousSandboxedBoolean(protoValue, fallback3, key) {
    if (protoValue !== void 0) {
        return protoValue;
    }
    if (fallback3.type === "workspace_readonly" || fallback3.type === "workspace_readwrite") {
        return fallback3[key];
    }
    return void 0;
}
function previousCaptureDenies(proto, fallback3) {
    return keepBoolean(proto.captureDenies, fallback3.captureDenies);
}
function withSandboxExtras(proto, fallback3, type2) {
    const nestedRead = toNestedReadBoundary(proto.readBoundary) ?? previousNestedReadBoundary(fallback3) ?? "workspace";
    const additionalReadonlyPaths = [
        ...proto.additionalReadonlyPaths
    ];
    const additionalReadPaths = [
        ...proto.additionalReadPaths
    ];
    const networkPolicy = toNetworkPolicy(proto, fallback3);
    const disableTmpWrite = previousSandboxedBoolean(proto.disableTmpWrite, fallback3, "disableTmpWrite");
    const networkPolicyStrict = previousSandboxedBoolean(proto.networkPolicyStrict, fallback3, "networkPolicyStrict");
    const skipStatsigDefaults = previousSandboxedBoolean(proto.skipStatsigDefaults, fallback3, "skipStatsigDefaults");
    const captureDenies = previousCaptureDenies(proto, fallback3);
    const extras = {
        readBoundary: nestedRead,
        additionalReadonlyPaths,
        ...nestedRead === "workspace" && additionalReadPaths.length > 0 ? {
            additionalReadPaths
        } : {},
        ...disableTmpWrite === void 0 ? {} : {
            disableTmpWrite
        },
        ...networkPolicy === void 0 ? {} : {
            networkPolicy
        },
        ...networkPolicyStrict === void 0 ? {} : {
            networkPolicyStrict
        },
        ...skipStatsigDefaults === void 0 ? {} : {
            skipStatsigDefaults
        },
        ...captureDenies === void 0 ? {} : {
            captureDenies
        }
    };
    if (type2 === "workspace_readwrite") {
        return {
            type: type2,
            ...extras,
            additionalReadwritePaths: [
                ...proto.additionalReadwritePaths
            ]
        };
    }
    return {
        type: type2,
        ...extras
    };
}
function toUserConfiguredPolicy(proto, fallback3) {
    if (proto === void 0 || proto.type === SandboxPolicy_Type.UNSPECIFIED) {
        return fallback3;
    }
    if (proto.type === SandboxPolicy_Type.INSECURE_NONE) {
        const allowlistEscalated = keepBoolean(proto.allowlistEscalated, fallback3.type === "insecure_none" ? fallback3.allowlistEscalated : void 0);
        const captureDenies = previousCaptureDenies(proto, fallback3);
        return {
            type: "insecure_none",
            ...allowlistEscalated === void 0 ? {} : {
                allowlistEscalated
            },
            ...captureDenies === void 0 ? {} : {
                captureDenies
            }
        };
    }
    if (proto.type === SandboxPolicy_Type.WORKSPACE_READWRITE) {
        return withSandboxExtras(proto, fallback3, "workspace_readwrite");
    }
    return withSandboxExtras(proto, fallback3, "workspace_readonly");
}
function keepString(next, previous) {
    return next ?? previous;
}
function keepBoolean(next, previous) {
    if (next !== void 0) {
        return next;
    }
    return previous;
}
function keptReadBoundary(proto, previous) {
    const fromProto = toReadBoundary(proto.readBoundary);
    if (fromProto !== void 0) {
        return fromProto;
    }
    if (previous.readBoundary !== void 0) {
        return previous.readBoundary;
    }
    return "workspace";
}
export function permissionsFromProto(proto, previous = denyAllPermissions()) {
    if (proto === void 0) {
        return previous;
    }
    const userSandboxDataFolderName = keepString(proto.userSandboxDataFolderName, previous.userSandboxDataFolderName);
    const dashboardTerminalAllowlistOverriddenByPermissionsFile = keepBoolean(proto.dashboardTerminalAllowlistOverriddenByPermissionsFile, previous.dashboardTerminalAllowlistOverriddenByPermissionsFile);
    const smartAllowlistEnabled = keepBoolean(proto.smartAllowlistEnabled, previous.smartAllowlistEnabled);
    const promptWorkspaceWrites = keepBoolean(proto.promptWorkspaceWrites, previous.promptWorkspaceWrites);
    return {
        allow: proto.allow.length > 0 ? [
            ...proto.allow
        ] : [
            ...previous.allow
        ],
        deny: proto.deny.length > 0 ? [
            ...proto.deny
        ] : [
            ...previous.deny
        ],
        approvalMode: toApprovalMode(proto.approvalMode) ?? previous.approvalMode,
        readBoundary: keptReadBoundary(proto, previous),
        ...userSandboxDataFolderName === void 0 ? {} : {
            userSandboxDataFolderName
        },
        userConfiguredPolicy: toUserConfiguredPolicy(proto.userConfiguredPolicy, previous.userConfiguredPolicy),
        ...dashboardTerminalAllowlistOverriddenByPermissionsFile === void 0 ? {} : {
            dashboardTerminalAllowlistOverriddenByPermissionsFile
        },
        ...smartAllowlistEnabled === void 0 ? {} : {
            smartAllowlistEnabled
        },
        ...promptWorkspaceWrites === void 0 ? {} : {
            promptWorkspaceWrites
        },
        smartAllowlistDenylist: proto.smartAllowlistDenylist.length > 0 ? [
            ...proto.smartAllowlistDenylist
        ] : previous.smartAllowlistDenylist ?? []
    };
}
function fromApprovalMode(mode) {
    switch(mode){
        case "unrestricted":
            return AgentExecApprovalMode.UNRESTRICTED;
        case "allowlist":
            return AgentExecApprovalMode.ALLOWLIST;
        default:
            return AgentExecApprovalMode.ASK_EVERY_TIME;
    }
}
function fromReadBoundary(boundary) {
    return boundary === "system" ? AgentReadBoundary.SYSTEM : AgentReadBoundary.WORKSPACE;
}
function fromNestedReadBoundary(boundary) {
    if (boundary === "system") {
        return SandboxPolicy_ReadBoundaryMode.SYSTEM;
    }
    if (boundary === "workspace") {
        return SandboxPolicy_ReadBoundaryMode.WORKSPACE;
    }
    return SandboxPolicy_ReadBoundaryMode.UNSPECIFIED;
}
function fromNetworkPolicy(policy) {
    if (policy === void 0) {
        return void 0;
    }
    let defaultAction;
    if (policy.default === "allow") {
        defaultAction = NetworkPolicy_DefaultAction.ALLOW;
    } else if (policy.default === "deny") {
        defaultAction = NetworkPolicy_DefaultAction.DENY;
    }
    return new NetworkPolicy({
        ...defaultAction === void 0 ? {} : {
            defaultAction
        },
        allow: policy.allow ?? [],
        deny: policy.deny ?? []
    });
}
function fromUserConfiguredPolicy(policy) {
    if (policy.type === "insecure_none") {
        return new SandboxPolicy({
            type: SandboxPolicy_Type.INSECURE_NONE,
            ...policy.allowlistEscalated === void 0 ? {} : {
                allowlistEscalated: policy.allowlistEscalated
            },
            ...policy.captureDenies === void 0 ? {} : {
                captureDenies: policy.captureDenies
            }
        });
    }
    const networkPolicy = fromNetworkPolicy(policy.networkPolicy);
    return new SandboxPolicy({
        type: policy.type === "workspace_readwrite" ? SandboxPolicy_Type.WORKSPACE_READWRITE : SandboxPolicy_Type.WORKSPACE_READONLY,
        readBoundary: fromNestedReadBoundary(policy.readBoundary),
        additionalReadonlyPaths: policy.additionalReadonlyPaths ?? [],
        additionalReadPaths: policy.additionalReadPaths ?? [],
        additionalReadwritePaths: policy.type === "workspace_readwrite" ? policy.additionalReadwritePaths ?? [] : [],
        ...policy.disableTmpWrite === void 0 ? {} : {
            disableTmpWrite: policy.disableTmpWrite
        },
        ...policy.networkPolicy?.default === "allow" ? {
            networkAccess: true
        } : {
            networkAccess: false
        },
        ...networkPolicy === void 0 ? {} : {
            networkPolicy
        },
        ...policy.networkPolicyStrict === void 0 ? {} : {
            networkPolicyStrict: policy.networkPolicyStrict
        },
        ...policy.captureDenies === void 0 ? {} : {
            captureDenies: policy.captureDenies
        },
        ...policy.skipStatsigDefaults === void 0 ? {} : {
            skipStatsigDefaults: policy.skipStatsigDefaults
        }
    });
}
export function permissionsToProto(perms) {
    return new AgentExecPermissions({
        allow: [
            ...perms.allow
        ],
        deny: [
            ...perms.deny
        ],
        approvalMode: fromApprovalMode(perms.approvalMode),
        readBoundary: fromReadBoundary(perms.readBoundary),
        ...perms.userSandboxDataFolderName === void 0 ? {} : {
            userSandboxDataFolderName: perms.userSandboxDataFolderName
        },
        userConfiguredPolicy: fromUserConfiguredPolicy(perms.userConfiguredPolicy),
        ...perms.dashboardTerminalAllowlistOverriddenByPermissionsFile === void 0 ? {} : {
            dashboardTerminalAllowlistOverriddenByPermissionsFile: perms.dashboardTerminalAllowlistOverriddenByPermissionsFile
        },
        ...perms.smartAllowlistEnabled === void 0 ? {} : {
            smartAllowlistEnabled: perms.smartAllowlistEnabled
        },
        ...perms.promptWorkspaceWrites === void 0 ? {} : {
            promptWorkspaceWrites: perms.promptWorkspaceWrites
        },
        smartAllowlistDenylist: [
            ...perms.smartAllowlistDenylist ?? []
        ]
    });
}
function policyTypeIsSpecified(proto) {
    const type2 = proto?.userConfiguredPolicy?.type;
    return type2 !== void 0 && type2 !== SandboxPolicy_Type.UNSPECIFIED;
}
export function canApplyPermissionsPush(proto, previous) {
    if (proto === void 0) {
        return true;
    }
    const elevatesWriteCeiling = proto.approvalMode === AgentExecApprovalMode.UNRESTRICTED || proto.approvalMode === AgentExecApprovalMode.ALLOWLIST;
    if (!elevatesWriteCeiling) {
        return true;
    }
    if (policyTypeIsSpecified(proto)) {
        return true;
    }
    return previous.userConfiguredPolicy.type !== "workspace_readonly";
}
function isCloudSubagentRun(args) {
    return args.kind === "cloud_subagent" && args.cloudSubagent?.operation?.case === "run";
}
export function orphanSettleStatus(status, kind) {
    if (status === "denied" && FAIL_CLOSED_DELIVERED_HOP_KINDS.has(kind)) {
        return "aborted";
    }
    return status;
}
export function isFallbackSurfaceKind(kind) {
    return FALLBACK_SURFACE_CALLBACK_KINDS.includes(kind);
}
export function invocationDeadlineMs(kind, phase, bound) {
    if (kind === "cloud_subagent") {
        return SURFACE_CLOUD_SUBAGENT_DEADLINE_MS;
    }
    if (phase === "settle" && isFallbackSurfaceKind(kind) && !bound) {
        return SURFACE_CALLBACK_PROBE_TIMEOUT_MS;
    }
    return SURFACE_CALLBACK_TIMEOUT_MS;
}
export function settleDeadlineMs(args, startedBound) {
    if (isCloudSubagentRun(args)) {
        return void 0;
    }
    return invocationDeadlineMs(args.kind, "settle", startedBound);
}
export function pickBoundKindResult(hub, clientInstanceId, kind, result, pick2, startedBound) {
    if (result.status !== "accepted") {
        return void 0;
    }
    if (result.result === void 0) {
        hub.latchUnboundEmptyArmIfUnproven(clientInstanceId, kind, startedBound);
        return void 0;
    }
    if (result.result.case === "error") {
        hub.markKindProven(clientInstanceId, kind);
        return void 0;
    }
    const value = pick2(result.result);
    if (value === void 0) {
        hub.latchUnboundEmptyArmIfUnproven(clientInstanceId, kind, startedBound);
        return void 0;
    }
    hub.markKindProven(clientInstanceId, kind);
    return value;
}
export function systemSurfaceChannelClock() {
    return {
        now: ()=>Date.now(),
        setTimeout: (callback, delayMs)=>{
            const timer2 = setTimeout(callback, delayMs);
            return {
                dispose: ()=>{
                    clearTimeout(timer2);
                }
            };
        }
    };
}
export function firstNonEmptyId(...values) {
    for (const value of values){
        const trimmed = value?.trim() ?? "";
        if (trimmed.length > 0) {
            return trimmed;
        }
    }
    return "";
}
export function isValidResultForKind(kind, result) {
    if (result === void 0 || result.case === void 0) {
        return false;
    }
    if (result.case === "error") {
        return true;
    }
    const expected = SURFACE_CALLBACK_RESULT_CASE[kind];
    return expected !== void 0 && result.case === expected;
}
function createDaemonDurableSubagentInvocationStore(records2) {
    return {
        async claim (args) {
            const proposed = new AgentHostDurableSubagentInvocationRecord({
                parentSessionId: args.parentSessionId,
                rootSessionId: args.rootSessionId,
                parentToolCallId: args.parentToolCallId,
                childSessionId: args.proposedChildSessionId,
                kind: AgentHostDurableSubagentInvocationKind.STARTED
            });
            return records2.withDurableSubagentInvocationTransaction(()=>{
                const existing = findReusableInvocation(records2, args);
                if (existing !== void 0) {
                    if (shouldReclaimInvocation(records2, existing)) {
                        replaceInvocationRecord({
                            records: records2,
                            previous: existing,
                            next: proposed
                        });
                        return {
                            kind: "claimed",
                            invocation: {
                                kind: "started",
                                childSessionId: proposed.childSessionId
                            }
                        };
                    }
                    if (existing.rootSessionId !== args.rootSessionId) {
                        const migrated = existing.clone();
                        migrated.rootSessionId = args.rootSessionId;
                        replaceInvocationRecord({
                            records: records2,
                            previous: existing,
                            next: migrated
                        });
                        return {
                            kind: "existing",
                            invocation: toHostInvocation(migrated)
                        };
                    }
                    return {
                        kind: "existing",
                        invocation: toHostInvocation(existing)
                    };
                }
                const persisted = records2.insertDurableSubagentInvocation({
                    parentSessionId: args.parentSessionId,
                    rootSessionId: args.rootSessionId,
                    parentToolCallId: args.parentToolCallId,
                    record: proposed.toBinary()
                });
                const record3 = decodeInvocationRecord(persisted.record);
                if (persisted.inserted) {
                    return {
                        kind: "claimed",
                        invocation: {
                            kind: "started",
                            childSessionId: record3.childSessionId
                        }
                    };
                }
                return {
                    kind: "existing",
                    invocation: toHostInvocation(record3)
                };
            });
        },
        async markCheckpointed (args) {
            const current = findReusableInvocation(records2, args);
            if (current === void 0 || current.childSessionId !== args.childSessionId || current.kind !== AgentHostDurableSubagentInvocationKind.STARTED) {
                return;
            }
            current.kind = AgentHostDurableSubagentInvocationKind.CHECKPOINTED;
            writeRecord(records2, current);
        },
        async markCompleted (args) {
            const current = findReusableInvocation(records2, args);
            if (current === void 0 || current.childSessionId !== args.childSessionId || current.kind === AgentHostDurableSubagentInvocationKind.COMPLETED) {
                return;
            }
            current.kind = AgentHostDurableSubagentInvocationKind.COMPLETED;
            current.outcome = toProtoRunResult(args.outcome);
            writeRecord(records2, current);
        }
    };
}
function readDaemonDurableSubagentInvocation(records2, key) {
    return readRecord(records2, key);
}
function readRecord(records2, key) {
    const bytes = records2.readDurableSubagentInvocation(key);
    if (bytes === void 0) {
        return void 0;
    }
    return decodeInvocationRecord(bytes);
}
function writeRecord(records2, record3) {
    records2.writeDurableSubagentInvocation({
        parentSessionId: record3.parentSessionId,
        rootSessionId: record3.rootSessionId,
        parentToolCallId: record3.parentToolCallId,
        record: record3.toBinary()
    });
}
function findReusableInvocation(records2, key) {
    const exact = readRecord(records2, key);
    if (exact !== void 0) {
        return exact;
    }
    const rows = records2.listDurableSubagentInvocationsByParentTool({
        parentSessionId: key.parentSessionId,
        parentToolCallId: key.parentToolCallId
    });
    let fallback3;
    for (const row of rows){
        const record3 = decodeInvocationRecord(row.record);
        if (records2.hasSession(record3.childSessionId)) {
            return record3;
        }
        fallback3 ??= record3;
    }
    return fallback3;
}
function shouldReclaimInvocation(records2, record3) {
    if (record3.childSessionId.length === 0) {
        return true;
    }
    if (records2.hasSession(record3.childSessionId)) {
        return false;
    }
    return record3.kind === AgentHostDurableSubagentInvocationKind.CHECKPOINTED || record3.kind === AgentHostDurableSubagentInvocationKind.COMPLETED;
}
function replaceInvocationRecord(args) {
    args.records.deleteDurableSubagentInvocation({
        parentSessionId: args.previous.parentSessionId,
        rootSessionId: args.previous.rootSessionId,
        parentToolCallId: args.previous.parentToolCallId
    });
    args.records.insertDurableSubagentInvocation({
        parentSessionId: args.next.parentSessionId,
        rootSessionId: args.next.rootSessionId,
        parentToolCallId: args.next.parentToolCallId,
        record: args.next.toBinary()
    });
}
function decodeInvocationRecord(bytes) {
    return AgentHostDurableSubagentInvocationRecord.fromBinary(bytes);
}
function toHostInvocation(record3) {
    if (record3.kind === AgentHostDurableSubagentInvocationKind.COMPLETED) {
        return {
            kind: "completed",
            childSessionId: record3.childSessionId,
            outcome: toHostCompletedOutcome(record3.outcome)
        };
    }
    if (record3.kind === AgentHostDurableSubagentInvocationKind.CHECKPOINTED) {
        return {
            kind: "checkpointed",
            childSessionId: record3.childSessionId
        };
    }
    return {
        kind: "started",
        childSessionId: record3.childSessionId
    };
}
function toProtoRunResult(outcome) {
    if (outcome.status === "completed") {
        return new AgentHostSurfaceCloudSubagentRunResult({
            outcome: {
                case: "completed",
                value: new AgentHostSurfaceCloudSubagentCompleted({
                    ...outcome.finalMessage === void 0 ? {} : {
                        finalMessage: outcome.finalMessage
                    },
                    ...outcome.toolCallCount === void 0 ? {} : {
                        toolCallCount: outcome.toolCallCount
                    }
                })
            }
        });
    }
    return new AgentHostSurfaceCloudSubagentRunResult({
        outcome: {
            case: "background",
            value: new AgentHostSurfaceCloudSubagentBackground({
                backgroundReason: outcome.backgroundReason,
                ...outcome.transcriptPath === void 0 ? {} : {
                    transcriptPath: outcome.transcriptPath
                },
                ...outcome.finalMessage === void 0 ? {} : {
                    finalMessage: outcome.finalMessage
                },
                ...outcome.toolCallCount === void 0 ? {} : {
                    toolCallCount: outcome.toolCallCount
                }
            })
        }
    });
}
function toHostRunOutcome(result) {
    switch(result.outcome.case){
        case "completed":
            return {
                status: "completed",
                ...result.outcome.value.finalMessage === void 0 ? {} : {
                    finalMessage: result.outcome.value.finalMessage
                },
                ...result.outcome.value.toolCallCount === void 0 ? {} : {
                    toolCallCount: result.outcome.value.toolCallCount
                }
            };
        case "background":
            return {
                status: "background",
                backgroundReason: result.outcome.value.backgroundReason,
                ...result.outcome.value.transcriptPath === void 0 ? {} : {
                    transcriptPath: result.outcome.value.transcriptPath
                },
                ...result.outcome.value.finalMessage === void 0 ? {} : {
                    finalMessage: result.outcome.value.finalMessage
                },
                ...result.outcome.value.toolCallCount === void 0 ? {} : {
                    toolCallCount: result.outcome.value.toolCallCount
                }
            };
        case "aborted":
            return {
                status: "aborted",
                ...result.outcome.value.error === void 0 ? {} : {
                    error: result.outcome.value.error
                }
            };
        case "failed":
            return {
                status: "error",
                error: result.outcome.value.error
            };
        default:
            return {
                status: "error",
                error: "cloud_subagent run result missing outcome"
            };
    }
}
function toHostCompletedOutcome(result) {
    if (result === void 0) {
        return {
            status: "completed"
        };
    }
    const mapped = toHostRunOutcome(result);
    if (mapped.status === "completed" || mapped.status === "background") {
        return mapped;
    }
    return {
        status: "completed"
    };
}
function fixtureCanvasRequest() {
    return new AgentHostSurfaceCanvasRequest({
        args: new CanvasDiagnosticsArgs({
            path: DEBUG_CANVAS_PATH,
            toolCallId: "debug-canvas-fixture"
        })
    });
}
function fixtureMcpWriterRequest() {
    return new AgentHostSurfaceMcpWriterRequest({
        operation: {
            case: "mcpAllowlistPrecheck",
            value: new McpAllowlistPrecheckArgs({
                providerIdentifier: "debug-mcp",
                toolName: "list",
                toolCallId: "debug-mcp-writer-fixture"
            })
        }
    });
}
function fixtureCloudSubagentRequest() {
    return new AgentHostSurfaceCloudSubagentRequest({
        operation: {
            case: "createOrResume",
            value: new AgentHostSurfaceCloudSubagentCreateOrResume({
                args: new SubagentArgs({
                    toolCallId: "debug-cloud-subagent",
                    subagentType: "generalPurpose",
                    modelId: "headless",
                    prompt: "cloud_subagent fixture"
                })
            })
        }
    });
}
function fixtureSavedModelParametersRequest() {
    return new AgentHostSurfaceSavedModelParametersRequest({
        modelId: "headless",
        maxMode: false
    });
}
function fixtureRequiredGlobalCommandsRequest() {
    return new AgentHostSurfaceRequiredGlobalCommandsRequest({
        subagentType: "generalPurpose"
    });
}
function fixtureFileChangeNotify() {
    return new AgentHostSurfaceFileChangeNotify({
        path: "/tmp/debug-file-notify.ts",
        after: "export const fileNotify = true;\n",
        toolCallId: "debug-file-notify-fixture"
    });
}
function fixtureHookRequest() {
    return new AgentHostSurfaceHookRequest({
        step: "preToolUse",
        request: new ExecuteHookRequest({
            request: {
                case: "preToolUse",
                value: new PreToolUseRequestQuery({
                    toolName: "Read",
                    conversationId: "debug-session",
                    generationId: "debug-root",
                    model: "headless",
                    modelId: "headless"
                })
            }
        })
    });
}
function fixtureGitRequest() {
    return new AgentHostSurfaceGitRequest({
        request: {
            case: "gitDiff",
            value: new GetDiffRequest({
                cwd: "/tmp",
                ref: "HEAD"
            })
        }
    });
}
function fixtureConversationSearchRequest() {
    return new AgentHostSurfaceConversationSearchRequest({
        args: new ConversationSearchArgs({
            query: "conversation search",
            toolCallId: "debug-search-fixture"
        })
    });
}
function fixtureRequestContextRequest() {
    return new AgentHostSurfaceRequestContextRequest({
        args: new RequestContextArgs({})
    });
}
export function createSurfaceTestHooks(args) {
    return {
        emitAuthRefreshForSession (refreshArgs) {
            return emitAuthRefreshForOwningClient({
                hub: args.hub,
                sessionId: refreshArgs.sessionId,
                persistedOwner: args.resolveOwningClientInstanceId(refreshArgs.sessionId.trim()),
                reason: refreshArgs.reason
            });
        },
        async invokeKind (invokeArgs) {
            const parsed = parseSurfaceCallbackKind(invokeArgs.kind);
            if (parsed === void 0) {
                return {
                    denied: true,
                    errorCode: SURFACE_CALLBACK_ERROR_UNIMPLEMENTED_KIND,
                    errorMessage: `unimplemented surface kind: ${invokeArgs.kind}`
                };
            }
            const owner = args.resolveOwningClientInstanceId(invokeArgs.sessionId.trim());
            const target = args.hub.resolveCallbackTarget({
                sessionId: invokeArgs.sessionId.trim(),
                persistedOwner: owner
            });
            const result = await args.hub.invokeKind({
                kind: parsed,
                sessionId: invokeArgs.sessionId.trim(),
                ...target === void 0 || target.length === 0 ? {} : {
                    targetClientInstanceId: target
                },
                ...parsed === "file_change_notify" ? {
                    fileChangeNotify: fixtureFileChangeNotify()
                } : {},
                ...parsed === "hook" ? {
                    hook: fixtureHookRequest()
                } : {},
                ...parsed === "git" ? {
                    git: fixtureGitRequest()
                } : {},
                ...parsed === "conversation_search" ? {
                    conversationSearch: fixtureConversationSearchRequest()
                } : {},
                ...parsed === "request_context" ? {
                    requestContext: fixtureRequestContextRequest()
                } : {},
                ...parsed === "cloud_subagent" ? {
                    cloudSubagent: fixtureCloudSubagentRequest()
                } : {},
                ...parsed === "saved_model_parameters" ? {
                    savedModelParameters: fixtureSavedModelParametersRequest()
                } : {},
                ...parsed === "required_global_commands" ? {
                    requiredGlobalCommands: fixtureRequiredGlobalCommandsRequest()
                } : {},
                ...parsed === "canvas" ? {
                    canvas: fixtureCanvasRequest()
                } : {},
                ...parsed === "mcp_writer" ? {
                    mcpWriter: fixtureMcpWriterRequest()
                } : {},
                ...parsed === "agent_host_plugins" ? {
                    agentHostPlugins: new AgentHostSurfacePluginsRequest({
                        operation: {
                            case: "snapshot",
                            value: new AgentHostPluginsSnapshotArgs()
                        }
                    })
                } : {}
            });
            if (result.status === "unimplemented") {
                return {
                    denied: true,
                    errorCode: result.code,
                    errorMessage: `unimplemented surface kind: ${parsed}`
                };
            }
            if (result.status === "denied") {
                return {
                    denied: true
                };
            }
            if (result.status === "timeout") {
                return {
                    denied: true,
                    errorCode: result.code,
                    errorMessage: "surface callback timed out"
                };
            }
            if (result.status === "aborted") {
                return {
                    denied: true,
                    errorMessage: "surface callback aborted"
                };
            }
            if (result.result?.case === "error") {
                const code = result.result.value.code;
                const message = result.result.value.message;
                return {
                    denied: true,
                    ...code.length === 0 ? {} : {
                        errorCode: code
                    },
                    ...message.length === 0 ? {} : {
                        errorMessage: message
                    }
                };
            }
            return {
                denied: false
            };
        },
        async spawnDemoShell (spawnArgs) {
            if (args.spawnDemoShell === void 0) {
                return {
                    accepted: false,
                    shellId: "",
                    error: "session exec is not bound"
                };
            }
            return await args.spawnDemoShell(spawnArgs);
        },
        async claimDurableSubagentInvocation (claimArgs) {
            if (args.sessionStorage === void 0) {
                return {
                    claimKind: "",
                    childSessionId: "",
                    invocationKind: "",
                    error: "invocation store is not bound"
                };
            }
            const claim = await createDaemonDurableSubagentInvocationStore(args.sessionStorage.records).claim({
                parentSessionId: claimArgs.parentSessionId.trim(),
                rootSessionId: claimArgs.rootSessionId.trim(),
                parentToolCallId: claimArgs.parentToolCallId.trim(),
                proposedChildSessionId: claimArgs.proposedChildSessionId.trim()
            });
            return {
                claimKind: claim.kind,
                childSessionId: claim.invocation.childSessionId,
                invocationKind: claim.invocation.kind
            };
        },
        async readDurableSubagentInvocation (readArgs) {
            if (args.sessionStorage === void 0) {
                return {
                    found: false,
                    childSessionId: "",
                    invocationKind: ""
                };
            }
            const record3 = readDaemonDurableSubagentInvocation(args.sessionStorage.records, {
                parentSessionId: readArgs.parentSessionId.trim(),
                rootSessionId: readArgs.rootSessionId.trim(),
                parentToolCallId: readArgs.parentToolCallId.trim()
            });
            if (record3 === void 0) {
                return {
                    found: false,
                    childSessionId: "",
                    invocationKind: ""
                };
            }
            return {
                found: true,
                childSessionId: record3.childSessionId,
                invocationKind: invocationKindName(record3.kind)
            };
        }
    };
}
function invocationKindName(kind) {
    switch(kind){
        case AgentHostDurableSubagentInvocationKind.CHECKPOINTED:
            return "checkpointed";
        case AgentHostDurableSubagentInvocationKind.COMPLETED:
            return "completed";
        case AgentHostDurableSubagentInvocationKind.STARTED:
            return "started";
        default:
            return "unspecified";
    }
}
function createSurfaceTestHooksService(args) {
    const hooks = createSurfaceTestHooks(args);
    return {
        emitAuthRefresh (req) {
            const result = hooks.emitAuthRefreshForSession({
                sessionId: req.sessionId,
                reason: req.reason.length > 0 ? req.reason : void 0
            });
            return new DebugEmitAgentHostSurfaceAuthRefreshResponse({
                delivered: result.delivered
            });
        },
        async invokeKind (req) {
            const result = await hooks.invokeKind({
                sessionId: req.sessionId,
                kind: req.kind
            });
            return new DebugInvokeAgentHostSurfaceKindResponse({
                denied: result.denied,
                ...result.errorCode === void 0 ? {} : {
                    errorCode: result.errorCode
                },
                ...result.errorMessage === void 0 ? {} : {
                    errorMessage: result.errorMessage
                }
            });
        },
        async claimDurableSubagentInvocation (req) {
            const result = await hooks.claimDurableSubagentInvocation({
                parentSessionId: req.parentSessionId,
                rootSessionId: req.rootSessionId,
                parentToolCallId: req.parentToolCallId,
                proposedChildSessionId: req.proposedChildSessionId
            });
            return new DebugClaimDurableSubagentInvocationResponse({
                claimKind: result.claimKind,
                childSessionId: result.childSessionId,
                invocationKind: result.invocationKind,
                ...result.error === void 0 ? {} : {
                    error: result.error
                }
            });
        },
        async readDurableSubagentInvocation (req) {
            const result = await hooks.readDurableSubagentInvocation({
                parentSessionId: req.parentSessionId,
                rootSessionId: req.rootSessionId,
                parentToolCallId: req.parentToolCallId
            });
            return new DebugReadDurableSubagentInvocationResponse({
                found: result.found,
                childSessionId: result.childSessionId,
                invocationKind: result.invocationKind
            });
        }
    };
}
function createDebugShellHooksService(args) {
    return {
        async spawnDemoShell (req) {
            const result = await args.spawnDemoShell({
                sessionId: req.sessionId,
                ...req.command.trim().length === 0 ? {} : {
                    command: req.command
                }
            });
            return new DebugSpawnDemoShellResponse({
                accepted: result.accepted,
                shellId: result.shellId,
                ...result.error === void 0 ? {} : {
                    error: result.error
                }
            });
        }
    };
}
function parseSurfaceCallbackKind(value) {
    const normalized = value.trim();
    for (const kind of RESERVED_SURFACE_CALLBACK_KINDS){
        if (kind === normalized) {
            return kind;
        }
    }
    return void 0;
}
export function owningClientInstanceIdFromHost(host, sessionId) {
    if (!("owningClientInstanceId" in host) || typeof host.owningClientInstanceId !== "function") {
        return void 0;
    }
    const owner = host.owningClientInstanceId(sessionId);
    return typeof owner === "string" && owner.length > 0 ? owner : void 0;
}
function createAgentHostService(host, sessionStorage, daemon, auth2) {
    const defaults2 = defaultDaemonInfoFields();
    const listenAddress = daemon?.listenAddress ?? "";
    const localLoopEnabled = daemon?.localLoopEnabled === true;
    const processPid = daemon?.processPid ?? process.pid;
    const daemonVersion = daemon?.daemonVersion ?? defaults2.daemonVersion;
    const apiSchemaRevision = daemon?.apiSchemaRevision ?? defaults2.apiSchemaRevision;
    const buildIdentity = daemon?.buildIdentity ?? defaults2.buildIdentity;
    const capabilities = daemon?.capabilities ?? defaults2.capabilities;
    const daemonAuth = auth2 ?? createStandaloneDaemonAuthHandle();
    const surfaceHub = daemon?.surfaceHub ?? new SurfaceChannelHub();
    const resolveOwningClientInstanceId = daemon?.resolveOwningClientInstanceId ?? ((sessionId)=>owningClientInstanceIdFromHost(host, sessionId));
    return {
        createSession: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                await host.createSession(ctx, toCreateSessionRequest(req));
                return toCreateSessionResponse();
            }),
        forkSession: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toForkSessionResponse(await host.forkSession(ctx, toForkSessionRequest(req)))),
        listSessions: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toListSessionsResponse(await host.listSessions(ctx, toListSessionsRequest(req)))),
        watchSessions: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>host.watchSessions(ctx, toWatchSessionsRequest(req)), toWatchSessionsEvent),
        listWorkspaces: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toListWorkspacesResponse(await host.listWorkspaces(ctx, toListWorkspacesRequest(req)))),
        listSkills: (_req, handlerCtx)=>unaryRpc(handlerCtx, async ()=>{
                throw new ConnectError("ListSkills is not supported on this host", Code.Unimplemented);
            }),
        hasSession: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                const request3 = toHasSessionRequest(req);
                const hosted = host.hasHostedSession?.(request3.sessionId) === true || (typeof host.hasSession === "function" ? (await host.hasSession(ctx, request3)).exists : false);
                return new HasAgentHostSessionResponse({
                    exists: hosted || sessionStorage?.hasDurableSession(request3.sessionId) === true
                });
            }),
        sendMessage: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toSendMessageResponse(await host.sendMessage(ctx, toSendMessageRequest(req)))),
        sendAction: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toSendActionResponse(await host.sendAction(ctx, toSendActionRequest(req)))),
        deleteSession: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                const request3 = toDeleteSessionRequest(req);
                await host.deleteSession(ctx, request3);
                daemon?.shellOutput?.abortAll({
                    sessionId: request3.sessionId,
                    reason: "session_deleted"
                });
                daemon?.shellOutput?.clearSession(request3.sessionId);
                return toDeleteSessionResponse();
            }),
        interruptTurn: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toInterruptTurnResponse(await host.interruptTurn(ctx, toInterruptTurnRequest(req)))),
        cancelQueuedTurn: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toCancelQueuedTurnResponse(await host.cancelQueuedTurn(ctx, toCancelQueuedTurnRequest(req)))),
        reorderQueuedTurns: async ()=>{
            throw new ConnectError("reorderQueuedTurns is not supported on this host", Code.Unimplemented);
        },
        editQueuedTurn: async ()=>{
            throw new ConnectError("editQueuedTurn is not supported on this host", Code.Unimplemented);
        },
        respondToInteraction: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>toRespondToInteractionResponse(await host.respondToInteraction(ctx, toRespondToInteractionRequest(req)))),
        watchSessionInteractions: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>host.watchSessionInteractions(ctx, toWatchInteractionsRequest(req)), toWatchInteractionsEvent),
        watchSessionBackgroundWork: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>host.watchSessionBackgroundWork(ctx, toWatchBackgroundWorkRequest(req)), toWatchBackgroundWorkEvent),
        watchSessionTurnLifecycle: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>host.watchSessionTurnLifecycle(ctx, toWatchTurnLifecycleRequest(req)), toWatchTurnLifecycleEvent),
        abortBackgroundWork: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                const request3 = toAbortBackgroundWorkRequest(req);
                const canonicalWorkId = daemon?.shellOutput?.resolve({
                    sessionId: request3.sessionId,
                    shellId: request3.workId
                })?.shellId ?? request3.workId;
                const ref = {
                    sessionId: request3.sessionId,
                    shellId: canonicalWorkId
                };
                daemon?.shellOutput?.markAborting(ref);
                try {
                    const response = await host.abortBackgroundWork(ctx, {
                        ...request3,
                        workId: canonicalWorkId
                    });
                    if (response.aborted) {
                        daemon?.shellOutput?.abort({
                            ...ref,
                            reason: "abort_background_work"
                        });
                    }
                    return toAbortBackgroundWorkResponse(response);
                } finally{
                    daemon?.shellOutput?.clearAborting(ref);
                }
            }),
        abortAllBackgroundWork: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                const request3 = toAbortAllBackgroundWorkRequest(req);
                const filter3 = toShellAbortFilter(request3.kind, request3.state, request3.ownerId);
                const marked = daemon?.shellOutput?.markAbortingMatching(request3.sessionId, filter3) ?? 0;
                try {
                    const response = await host.abortAllBackgroundWork(ctx, request3);
                    if (marked > 0 && response.abortedCount > 0) {
                        daemon?.shellOutput?.abortMarkedMatching({
                            sessionId: request3.sessionId,
                            reason: "abort_all_background_work",
                            filter: filter3
                        });
                    }
                    return toAbortAllBackgroundWorkResponse(response);
                } finally{
                    daemon?.shellOutput?.clearAbortingMatching(request3.sessionId, filter3);
                }
            }),
        watchAgentHostSessionShellOutput: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>{
                const registry2 = daemon?.shellOutput;
                if (registry2 === void 0) {
                    throw new ConnectError("shell output is not available", Code.FailedPrecondition);
                }
                return registry2.watch(ctx, toWatchShellOutputRequest(req));
            }, toWatchShellOutputEvent),
        writeAgentHostSessionShellInput: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                const registry2 = daemon?.shellOutput;
                if (registry2 === void 0) {
                    throw new ConnectError("shell output is not available", Code.FailedPrecondition);
                }
                return toWriteShellInputResponse(await registry2.write(ctx, toWriteShellInputRequest(req)));
            }),
        attachSession: (req, handlerCtx)=>{
            const sessionId = req.sessionId.trim();
            const attachClientInstanceId = req.clientInstanceId.trim();
            return streamRpc(handlerCtx, async function* attachWithEphemeralRoute(ctx) {
                const attachGeneration = sessionId.length > 0 && attachClientInstanceId.length > 0 ? surfaceHub.setAttachRoute({
                    sessionId,
                    clientInstanceId: attachClientInstanceId
                }) : 0;
                try {
                    for await (const event of attachSessionWithHydratedConversationState(ctx, host, toAttachSessionRequest(req), sessionStorage === void 0 ? void 0 : (attachSessionId)=>sessionStorage.blobStoreFor({
                            sessionId: attachSessionId,
                            rootSessionId: attachSessionId
                        }))){
                        emitAuthRefreshFromSessionEvent({
                            hub: surfaceHub,
                            sessionId,
                            persistedOwner: resolveOwningClientInstanceId(sessionId),
                            event
                        });
                        yield event;
                    }
                } finally{
                    if (attachGeneration !== 0) {
                        surfaceHub.clearAttachRoute(sessionId, attachGeneration);
                    }
                }
            }, toSessionEvent);
        },
        getSessionBlobs: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>new GetAgentHostSessionBlobsResponse(await host.getSessionBlobs(ctx, toGetSessionBlobsRequest(req)))),
        readFile: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>host.readFile(ctx, toReadFileRequest(req)), toReadFileResponse),
        getDaemonInfo: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                assertDaemonHandshake({
                    expectedApiSchemaRevision: req.expectedApiSchemaRevision,
                    desiredLocalLoopEnabled: req.desiredLocalLoopEnabled,
                    allowNewerSchema: req.allowNewerSchema,
                    daemonApiSchemaRevision: apiSchemaRevision,
                    localLoopEnabled
                });
                return new GetAgentHostDaemonInfoResponse({
                    daemonVersion,
                    apiSchemaRevision,
                    localLoopEnabled,
                    listenAddress,
                    processPid,
                    runningSessionCount: await resolveRunningSessionCount(host, ctx),
                    buildIdentity,
                    capabilities: [
                        ...capabilities
                    ]
                });
            }),
        shutdownDaemon: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                assertShutdownDaemonIdle(req.onlyIfIdle, await resolveRunningSessionCount(host, ctx));
                daemon?.scheduleShutdown?.(req.reason);
                return new ShutdownAgentHostDaemonResponse({
                    shutdownScheduled: true
                });
            }),
        updateDaemonAuth: (req, handlerCtx)=>unaryRpc(handlerCtx, async ()=>{
                const result = daemonAuth.store.apply({
                    accessToken: req.accessToken,
                    issuedAtMs: req.issuedAtMs,
                    expiresAtMs: req.expiresAtMs,
                    clientInstanceId: req.clientInstanceId,
                    signedOut: req.signedOut
                });
                const installed = result.accepted ? await daemonAuth.applyToCredentials() : void 0;
                return new UpdateAgentHostDaemonAuthResponse({
                    accepted: result.accepted,
                    ...result.accepted ? {} : {
                        rejectionReason: result.rejectionReason
                    },
                    privacyMode: installed?.accessToken === req.accessToken ? installed.privacyMode : void 0
                });
            }),
        setSessionTitle: (req, handlerCtx)=>unaryRpc(handlerCtx, async (ctx)=>{
                if (host.setSessionTitle === void 0) {
                    throw new ConnectError("setSessionTitle is not supported on this host", Code.Unimplemented);
                }
                await host.setSessionTitle(ctx, {
                    sessionId: req.sessionId,
                    ...req.title !== void 0 ? {
                        title: req.title
                    } : {}
                });
                return new SetAgentHostSessionTitleResponse();
            }),
        openAgentHostSurfaceChannel: (req, handlerCtx)=>streamRpc(handlerCtx, (ctx)=>surfaceHub.openChannel({
                    clientInstanceId: req.clientInstanceId,
                    workspacePaths: req.workspacePaths
                }, ctx.signal), toSurfaceChannelEvent),
        respondAgentHostSurfaceCallback: (req, handlerCtx)=>unaryRpc(handlerCtx, async ()=>{
                const accepted = surfaceHub.respond({
                    callbackId: req.callbackId,
                    result: req.result,
                    clientInstanceId: req.clientInstanceId ?? ""
                }).accepted;
                return new RespondAgentHostSurfaceCallbackResponse({
                    accepted
                });
            }),
        pushAgentHostSessionPermissions: (req, handlerCtx)=>unaryRpc(handlerCtx, async ()=>{
                const sessionId = req.sessionId.trim();
                const clientInstanceId = req.clientInstanceId.trim();
                if (sessionId.length === 0 || clientInstanceId.length === 0) {
                    return new PushAgentHostSessionPermissionsResponse({
                        accepted: false
                    });
                }
                const owner = resolveOwningClientInstanceId(sessionId);
                const ownerMatched = owner !== void 0 && owner === clientInstanceId;
                if (!ownerMatched) {
                    return new PushAgentHostSessionPermissionsResponse({
                        accepted: false
                    });
                }
                const applier = daemon?.applySessionPermissions;
                if (applier === void 0) {
                    return new PushAgentHostSessionPermissionsResponse({
                        accepted: false
                    });
                }
                return new PushAgentHostSessionPermissionsResponse({
                    accepted: applier(sessionId, req.permissions) !== false
                });
            })
    };
}
function toAbortFilterKind(kind) {
    if (kind === AgentHostBackgroundWorkKind.SHELL) {
        return "shell";
    }
    if (kind === AgentHostBackgroundWorkKind.SUBAGENT) {
        return "subagent";
    }
    return void 0;
}
function toAbortFilterState(state) {
    if (state === AgentHostBackgroundWorkState.RUNNING) {
        return "running";
    }
    if (state === AgentHostBackgroundWorkState.QUEUED) {
        return "queued";
    }
    return void 0;
}
function toShellAbortFilter(kind, state, ownerId) {
    const mappedKind = toAbortFilterKind(kind);
    const mappedState = toAbortFilterState(state);
    const mappedOwner = ownerId !== void 0 && ownerId.length > 0 ? ownerId : void 0;
    return {
        kind: mappedKind,
        state: mappedState,
        ownerId: mappedOwner,
        backgroundOnly: true
    };
}
export async function startAgentHostRpcServer(options2) {
    const surfaceHub = options2.surfaceHub ?? new SurfaceChannelHub();
    const resolveOwningClientInstanceId = options2.resolveOwningClientInstanceId ?? ((sessionId)=>owningClientInstanceIdFromHost(options2.host, sessionId));
    const handler = connectNodeAdapter({
        interceptors: [
            ...options2.interceptors ?? []
        ],
        routes: (router)=>{
            router.service(AgentHostService, createAgentHostService(options2.host, options2.sessionStorage, {
                listenAddress: formatListenAddress(options2.listen),
                localLoopEnabled: options2.localLoopEnabled === true,
                processPid: process.pid,
                scheduleShutdown: options2.scheduleShutdown,
                surfaceHub,
                resolveOwningClientInstanceId,
                applySessionPermissions: options2.applySessionPermissions,
                shellOutput: options2.shellOutput
            }, options2.auth));
            if (options2.enableSurfaceTestHooks === true) {
                router.service(AgentHostSurfaceTestHooksService, createSurfaceTestHooksService({
                    hub: surfaceHub,
                    resolveOwningClientInstanceId,
                    sessionStorage: options2.sessionStorage
                }));
            }
            if (options2.spawnDemoShell !== void 0) {
                router.service(AgentHostDebugShellHooksService, createDebugShellHooksService({
                    spawnDemoShell: options2.spawnDemoShell
                }));
            }
        },
        requireConnectProtocolHeader: false
    });
    const server = http22.createServer({
        ...unixHttp2MaxSessionMemoryOption
    }, handler);
    const sessions = new Set();
    const sockets = new Set();
    server.on("session", (session)=>{
        sessions.add(session);
        session.on("close", ()=>{
            sessions.delete(session);
        });
    });
    server.on("connection", (socket)=>{
        sockets.add(socket);
        socket.on("close", ()=>{
            sockets.delete(socket);
        });
    });
    const bound = await bindUnixServer(server, options2);
    let closing;
    return {
        listen: bound.listen,
        close: ()=>{
            closing ??= (async ()=>{
                await closeHttp2Server(server, sessions, sockets);
                if (bound.unixSocket !== void 0) {
                    await unlinkOwnedUnixSocket(bound.unixSocket);
                }
            })();
            return closing;
        }
    };
}
async function bindUnixServer(server, options2) {
    const createdParentDir = ensurePrivateSocketParent(options2.listen.path);
    if (options2.unlinkExistingSocket !== false) {
        await prepareUnixSocketPath(options2.listen.path);
    }
    await listenUnix(server, options2.listen.path);
    if (!(0, import_node_fs44.existsSync)(options2.listen.path)) {
        throw new Error(`unix socket missing after listen: ${options2.listen.path} (path may exceed the OS limit)`);
    }
    restrictUnixSocketMode(options2.listen.path);
    const identity = readUnixSocketIdentity(options2.listen.path);
    return {
        listen: options2.listen,
        unixSocket: identity === void 0 ? void 0 : createdParentDir === void 0 ? identity : {
            ...identity,
            createdParentDir
        }
    };
}
function listenUnix(server, path64) {
    return new Promise((resolve36, reject2)=>{
        const onError = (error3)=>{
            reject2(error3);
        };
        server.once("error", onError);
        server.listen(path64, ()=>{
            server.off("error", onError);
            resolve36();
        });
    });
}
function closeHttp2Server(server, sessions, sockets) {
    return new Promise((resolve36, reject2)=>{
        server.close((error3)=>{
            if (error3 !== void 0 && error3.code !== "ERR_SERVER_NOT_RUNNING") {
                reject2(error3);
                return;
            }
            resolve36();
        });
        for (const session of sessions){
            session.destroy();
        }
        for (const socket of sockets){
            socket.destroy();
        }
    });
}
export function isMcpToolServiceRefusal(error3) {
    if (error3 instanceof ConnectError) {
        return error3.code === Code.PermissionDenied;
    }
    if (!(error3 instanceof Error) || error3.name !== "ConnectError") {
        return false;
    }
    const code = error3.code;
    return code === Code.PermissionDenied || code === "PermissionDenied";
}
export function isPlacementRoutingNeedsAuthError(error3) {
    return error3 instanceof Error && error3.name === "PlacementRoutingNeedsAuthError";
}
export function describeNotReachableReason(reason) {
    switch(reason){
        case NotReachableFromBackend_Reason.DNS:
            return "dns";
        case NotReachableFromBackend_Reason.CONNECTION_REFUSED:
            return "connection refused";
        case NotReachableFromBackend_Reason.TLS:
            return "tls";
        case NotReachableFromBackend_Reason.TIMEOUT:
            return "timeout";
        case NotReachableFromBackend_Reason.HTTP_5XX:
            return "http 5xx";
        case NotReachableFromBackend_Reason.OTHER:
        case NotReachableFromBackend_Reason.UNSPECIFIED:
            return "other";
        default:
            return "unknown";
    }
}
function isPlacementRoutingNotReachableError(error3) {
    return error3 instanceof Error && error3.name === "PlacementRoutingNotReachableError";
}
export function isPlacementRoutingNotDialedError(error3) {
    return error3 instanceof Error && error3.name === "PlacementRoutingNotDialedError";
}
export function serverIdentifierHashForLog(serverIdentifier) {
    return (0, import_node_crypto55.createHash)("sha256").update(serverIdentifier).digest("hex").slice(0, 16);
}
export function conversationIdFromContext(ctx) {
    const conversationId = ctx.get(callingConversationKey)?.conversationId;
    return typeof conversationId === "string" ? conversationId : "";
}
export function createTurnRuntimeCallerResolver(surfaceCaller = McpToolCaller.UNSPECIFIED) {
    return (ctx)=>getAgentHostTurnRuntime(ctx) === "managed-local" ? McpToolCaller.AGENT_HOST_LOCAL_LOOP : surfaceCaller;
}
export function resolveMcpToolCaller(caller, ctx) {
    if (caller === void 0) {
        return defaultCallerResolver(ctx);
    }
    return typeof caller === "function" ? caller(ctx) : caller;
}
function callerKindTag(caller) {
    switch(caller){
        case McpToolCaller.IDE:
            return "ide";
        case McpToolCaller.GLASS:
            return "glass";
        case McpToolCaller.AGENT_HOST_LOCAL_LOOP:
            return "agent_host_local_loop";
        case McpToolCaller.UNSPECIFIED:
            return "unspecified";
        default:
            return "unknown";
    }
}
function connectErrorOutcome(error3) {
    switch(error3.code){
        case Code.Unavailable:
            return "unavailable";
        case Code.ResourceExhausted:
            return "rate_limited";
        case Code.Unauthenticated:
            return "unauthenticated";
        case Code.PermissionDenied:
            return "forbidden";
        case Code.InvalidArgument:
            return "bad_request";
        case Code.Canceled:
        case Code.Aborted:
        case Code.DeadlineExceeded:
            return "aborted";
        default:
            return "error";
    }
}
export function clientCallOutcomeForError(error3) {
    if (isPlacementRoutingNeedsAuthError(error3)) {
        return "needs_auth";
    }
    if (isPlacementRoutingNotReachableError(error3)) {
        return "not_reachable";
    }
    if (error3 instanceof McpToolNotFoundError) {
        return "tool_not_found";
    }
    if (error3 instanceof McpServerNotFoundError) {
        return "server_not_found";
    }
    if (error3 instanceof ConnectError) {
        return connectErrorOutcome(error3);
    }
    return "error";
}
export function clientCallOutcomeForResult(result) {
    return result.isError === true ? "tool_error" : "success";
}
export function providerHostTagForRow(row) {
    return mcpClientMetricProviderHostTag(row.url);
}
export function providerHostTagForClient(client) {
    const config2 = client?.config;
    if (config2 === void 0) {
        return "unknown";
    }
    return "url" in config2 ? mcpClientMetricProviderHostTag(config2.url) : "stdio";
}
function connectCodeReason(code) {
    switch(code){
        case Code.Canceled:
            return "connect_canceled";
        case Code.Unknown:
            return "connect_unknown";
        case Code.InvalidArgument:
            return "connect_invalid_argument";
        case Code.DeadlineExceeded:
            return "connect_deadline_exceeded";
        case Code.NotFound:
            return "connect_not_found";
        case Code.AlreadyExists:
            return "connect_already_exists";
        case Code.PermissionDenied:
            return "connect_permission_denied";
        case Code.ResourceExhausted:
            return "connect_resource_exhausted";
        case Code.FailedPrecondition:
            return "connect_failed_precondition";
        case Code.Aborted:
            return "connect_aborted";
        case Code.OutOfRange:
            return "connect_out_of_range";
        case Code.Unimplemented:
            return "connect_unimplemented";
        case Code.Internal:
            return "connect_internal";
        case Code.Unavailable:
            return "connect_unavailable";
        case Code.DataLoss:
            return "connect_data_loss";
        case Code.Unauthenticated:
            return "connect_unauthenticated";
        default:
            return "connect_other";
    }
}
function routedCallReasonForResult(result) {
    switch(result.result.case){
        case "success":
        case "approved":
            return "none";
        case "error":
            if (result.result.value.needsAuth === true) {
                return "server_needs_auth";
            }
            return isTimeoutErrorMessage(result.result.value.error) ? "server_timeout" : "server_error";
        case "rejected":
            return "server_rejected";
        case "permissionDenied":
            return "server_permission_denied";
        case "toolNotFound":
            return "server_tool_not_found";
        case "serverNotFound":
            return "server_row_not_found";
        case void 0:
            return "server_empty_outcome";
        default:
            return "server_unknown_outcome";
    }
}
function routedCallReasonForOutcome(outcome) {
    switch(outcome.outcome.case){
        case "result":
            return routedCallReasonForResult(outcome.outcome.value);
        case "needsAuth":
            return "server_needs_auth";
        case "notReachable":
            return "server_not_reachable";
        case "notRoutable":
            return "server_not_routable";
        case "notDialed":
            return "server_not_dialed";
        case void 0:
            return "server_empty_outcome";
        default:
            return "server_unknown_outcome";
    }
}
export function clientCallReasonForError(error3) {
    if (error3 instanceof ConnectError) {
        return connectCodeReason(error3.code);
    }
    if (isPlacementRoutingNeedsAuthError(error3)) {
        return "needs_auth";
    }
    if (isPlacementRoutingNotReachableError(error3)) {
        return "not_reachable";
    }
    if (error3 instanceof McpToolNotFoundError) {
        return "tool_not_found";
    }
    if (error3 instanceof McpServerNotFoundError) {
        return "server_not_found";
    }
    if (!(error3 instanceof Error)) {
        return "exception";
    }
    if (error3.name === "AbortError") {
        return "abort";
    }
    return isTimeoutErrorMessage(error3.message) ? "timeout" : "exception";
}
export function recordMcpToolClientCall(args) {
    const callerKind = callerKindTag(args.caller);
    const durationMs2 = Math.round(args.durationMs);
    if (args.placement === "server") {
        logger138.info(args.ctx, ROUTED_MCP_TOOL_CALL_MESSAGE, {
            toolCallId: args.toolCallId,
            conversationId: args.conversationId,
            ...args.requestId === void 0 ? {} : {
                requestId: args.requestId
            },
            serverIdentifierHash: serverIdentifierHashForLog(args.serverIdentifier),
            providerHost: args.providerHost,
            callerKind,
            outcome: args.outcome,
            reason: args.reason,
            durationMs: durationMs2,
            elicitationCount: args.elicitationCount
        });
    }
    if (args.metrics === void 0) {
        return;
    }
    try {
        args.metrics.distribution({
            stat: MCP_TOOL_CLIENT_CALL_DURATION_STAT,
            value: durationMs2,
            tags: {
                placement: args.placement,
                outcome: args.outcome,
                reason: args.reason,
                caller_kind: callerKind,
                provider_host: args.providerHost
            }
        });
    } catch (error3) {
        logger138.warn(args.ctx, "MCP client call metrics sink threw", {
            error: error3
        });
    }
}
export function recordPlacementListingWait(args) {
    if (args.metrics === void 0) {
        return;
    }
    try {
        args.metrics.distribution({
            stat: MCP_PLACEMENT_LISTING_WAIT_STAT,
            value: args.waitedMs,
            tags: {
                trigger: args.trigger,
                outcome: args.outcome
            }
        });
    } catch (error3) {
        logger138.warn(args.ctx, "MCP placement listing wait metrics sink threw", {
            error: error3
        });
    }
}
function parseRequestedSchema(requestedSchemaJson) {
    if (requestedSchemaJson.length === 0) {
        return EMPTY_OBJECT_SCHEMA;
    }
    try {
        const parsed = JSON.parse(requestedSchemaJson);
        if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
            return EMPTY_OBJECT_SCHEMA;
        }
        const record3 = parsed;
        const properties = record3.properties;
        return {
            type: "object",
            properties: properties !== null && typeof properties === "object" && !Array.isArray(properties) ? properties : {},
            ...Array.isArray(record3.required) && record3.required.every((value)=>typeof value === "string") ? {
                required: record3.required
            } : {}
        };
    } catch  {
        return EMPTY_OBJECT_SCHEMA;
    }
}
function toProtoElicitationAction(action) {
    switch(action){
        case "accept":
            return McpElicitationResponse_Action2.ACCEPT;
        case "decline":
            return McpElicitationResponse_Action2.DECLINE;
        case "cancel":
            return McpElicitationResponse_Action2.CANCEL;
    }
}
async function answerElicitation(args) {
    let response;
    if (args.elicitationProvider === void 0) {
        response = new McpElicitationResponse2({
            action: McpElicitationResponse_Action2.CANCEL
        });
    } else {
        try {
            const answer = await args.elicitationProvider.elicit({
                message: args.request.message,
                requestedSchema: parseRequestedSchema(args.request.requestedSchemaJson)
            }, {
                signal: args.signal
            });
            response = new McpElicitationResponse2({
                action: toProtoElicitationAction(answer.action),
                content: answer.action === "accept" && answer.content !== void 0 ? Struct.fromJson(answer.content) : void 0
            });
        } catch (error3) {
            logger139.warn(args.ctx, "MCP elicitation provider failed; cancelling", {
                toolCallId: args.toolCallId,
                requestId: args.request.requestId,
                error: error3
            });
            response = new McpElicitationResponse2({
                action: McpElicitationResponse_Action2.CANCEL
            });
        }
    }
    if (args.signal.aborted) {
        logger139.debug(args.ctx, "Dropping elicitation answer for a closed form", {
            toolCallId: args.toolCallId,
            requestId: args.request.requestId
        });
        return;
    }
    try {
        await args.client.respondToMcpElicitation(new RespondToMcpElicitationRequest({
            toolCallId: args.toolCallId,
            requestId: args.request.requestId,
            response
        }));
    } catch (error3) {
        logger139.warn(args.ctx, "RespondToMcpElicitation failed", {
            toolCallId: args.toolCallId,
            requestId: args.request.requestId,
            error: error3
        });
    }
}
function contentFromMcpResultSuccess(success) {
    const content = [];
    for (const item of success.content){
        switch(item.content.case){
            case "text":
                {
                    const { text: text4, outputLocation } = item.content.value;
                    content.push({
                        type: "text",
                        text: outputLocation !== void 0 && text4.length === 0 ? `[output of ${outputLocation.sizeBytes} bytes exceeded the inline limit and was not returned]` : text4
                    });
                    break;
                }
            case "image":
                content.push({
                    type: "image",
                    data: Buffer.from(item.content.value.data).toString("base64"),
                    mimeType: item.content.value.mimeType || void 0
                });
                break;
            case void 0:
                break;
        }
    }
    return content;
}
function mcpResultToToolResult(serverIdentifier, result) {
    switch(result.result.case){
        case "success":
            return {
                content: contentFromMcpResultSuccess(result.result.value),
                isError: result.result.value.isError,
                structuredContent: result.result.value.structuredContent !== void 0 ? result.result.value.structuredContent.toJson() : void 0
            };
        case "approved":
            return {
                content: [],
                isError: false
            };
        case "error":
            if (result.result.value.needsAuth === true) {
                throw new PlacementRoutingNeedsAuthError({
                    serverIdentifier,
                    servedBy: McpServedBy.CURSOR,
                    detail: result.result.value.error
                });
            }
            throw new Error(result.result.value.error);
        case "rejected":
            throw new Error(result.result.value.reason ? `Tool rejected: ${result.result.value.reason}` : "Tool rejected");
        case "permissionDenied":
            throw new Error(`Permission denied: ${result.result.value.error}`);
        case "toolNotFound":
            throw new McpToolNotFoundError(result.result.value.name, [
                ...result.result.value.availableTools
            ]);
        case "serverNotFound":
            throw new McpServerNotFoundError(result.result.value.name, [
                ...result.result.value.availableServers
            ]);
        case void 0:
            throw new Error(`CallMcpTool returned an empty result for MCP server "${serverIdentifier}"`);
    }
}
function callMcpToolOutcomeToToolResult(serverIdentifier, outcome) {
    switch(outcome.outcome.case){
        case "result":
            return mcpResultToToolResult(serverIdentifier, outcome.outcome.value);
        case "needsAuth":
            throw new PlacementRoutingNeedsAuthError({
                serverIdentifier,
                servedBy: outcome.outcome.value.servedBy,
                detail: outcome.outcome.value.detail
            });
        case "notReachable":
            throw new PlacementRoutingNotReachableError({
                serverIdentifier,
                notReachable: outcome.outcome.value
            });
        case "notRoutable":
            throw new Error(`MCP server "${serverIdentifier}" is served by a backend this service cannot execute against` + (outcome.outcome.value.detail ? `: ${outcome.outcome.value.detail}` : ""));
        case "notDialed":
            throw new PlacementRoutingNotDialedError({
                serverIdentifier,
                notDialed: outcome.outcome.value
            });
        case void 0:
            throw new Error(`CallMcpTool returned an empty outcome for MCP server "${serverIdentifier}"`);
    }
}
export async function callServerPlacedTool(args) {
    const serverIdentifier = args.request.serverIdentifier;
    const streamDone = new AbortController();
    const openForms = new Map();
    let outcome;
    const stream3 = args.requestId === void 0 ? args.client.callMcpTool(args.request) : args.client.callMcpTool(args.request, {
        headers: {
            "x-request-id": args.requestId
        }
    });
    try {
        for await (const event of stream3){
            const response = event;
            switch(response.event.case){
                case "progress":
                    {
                        const value = response.event.value;
                        args.onProgress?.({
                            progress: value.progress,
                            total: value.total,
                            message: value.message
                        });
                        break;
                    }
                case "elicitationRequest":
                    {
                        args.onElicitationRequest?.();
                        const requestId = response.event.value.requestId;
                        const form = new AbortController();
                        openForms.set(requestId, form);
                        answerElicitation({
                            ctx: args.ctx,
                            client: args.client,
                            toolCallId: args.request.toolCallId,
                            request: response.event.value,
                            elicitationProvider: args.elicitationProvider,
                            signal: AbortSignal.any([
                                streamDone.signal,
                                form.signal
                            ])
                        }).finally(()=>{
                            if (openForms.get(requestId) === form) {
                                openForms.delete(requestId);
                            }
                        }).catch(()=>{});
                        break;
                    }
                case "elicitationClosed":
                    openForms.get(response.event.value.requestId)?.abort();
                    openForms.delete(response.event.value.requestId);
                    break;
                case "outcome":
                    outcome = response.event.value;
                    break;
                case void 0:
                    break;
            }
        }
    } catch (error3) {
        streamDone.abort();
        logger139.warn(args.ctx, "CallMcpTool stream failed", {
            serverIdentifier,
            toolCallId: args.request.toolCallId,
            ...args.requestId === void 0 ? {} : {
                requestId: args.requestId
            },
            openElicitations: openForms.size,
            error: error3
        });
        throw error3;
    }
    streamDone.abort();
    if (outcome === void 0) {
        args.onFailureReason?.("stream_no_outcome");
        throw new Error(`CallMcpTool stream for MCP server "${serverIdentifier}" ended without an outcome`);
    }
    const reason = routedCallReasonForOutcome(outcome);
    if (reason !== "none") {
        args.onFailureReason?.(reason);
    }
    return callMcpToolOutcomeToToolResult(serverIdentifier, outcome);
}
function canonicalUrl(url2) {
    return url2.trim().length === 0 ? void 0 : normalizeMcpServerUrl(url2);
}
function bindServerPlacedRows(rows, locals) {
    const bindingByRow = new Map();
    const unboundByRow = new Map();
    const localReasons = new Map();
    const claimed = new Set();
    const urlRows = [];
    const targetSlots = new Map();
    for (const row of rows){
        const key = row.rowServerIdentifier || row.serverIdentifier;
        const current = targetSlots.get(key);
        if (current === void 0 || current.serverIdentifier !== key && row.serverIdentifier === key) {
            targetSlots.set(key, row);
        }
    }
    const targets = [];
    for (const row of rows){
        if (targetSlots.get(row.rowServerIdentifier || row.serverIdentifier) === row) {
            targets.push(row);
        } else {
            unboundByRow.set(row, {
                row,
                reason: "duplicate_slot"
            });
        }
    }
    for (const row of targets){
        const byIdentifier = locals.filter((local2)=>!claimed.has(local2) && !localReasons.has(local2) && (local2.identifier === row.rowServerIdentifier || local2.identifier === row.serverIdentifier));
        if (byIdentifier.length === 0) {
            urlRows.push(row);
            continue;
        }
        const rowUrl = canonicalUrl(row.url);
        const agreeing = rowUrl === void 0 ? [] : byIdentifier.filter((local2)=>canonicalUrl(local2.serverUrl) === rowUrl);
        if (agreeing.length === 0) {
            unboundByRow.set(row, {
                row,
                reason: "url_mismatch"
            });
            for (const local2 of byIdentifier){
                localReasons.set(local2, "url_mismatch");
            }
            continue;
        }
        const local = agreeing[0];
        claimed.add(local);
        bindingByRow.set(row, {
            row,
            local,
            matchedBy: "identifier",
            rpcServerUrl: row.url
        });
    }
    for (const row of urlRows){
        const rowUrl = canonicalUrl(row.url);
        if (rowUrl === void 0) {
            unboundByRow.set(row, {
                row,
                reason: "row_has_no_url"
            });
            continue;
        }
        const candidates = locals.filter((local)=>!claimed.has(local) && localReasons.get(local) !== "url_mismatch" && canonicalUrl(local.serverUrl) === rowUrl);
        if (candidates.length === 0) {
            unboundByRow.set(row, {
                row,
                reason: "no_local_match"
            });
            continue;
        }
        if (candidates.length > 1) {
            unboundByRow.set(row, {
                row,
                reason: "ambiguous_url",
                candidates: candidates.map((local)=>local.identifier)
            });
            for (const local of candidates){
                localReasons.set(local, "ambiguous_url");
            }
            continue;
        }
        claimed.add(candidates[0]);
        bindingByRow.set(row, {
            row,
            local: candidates[0],
            matchedBy: "url",
            rpcServerUrl: row.url
        });
    }
    const bindings = [];
    const unboundRows = [];
    for (const row of rows){
        const binding = bindingByRow.get(row);
        if (binding) {
            bindings.push(binding);
            continue;
        }
        const unbound = unboundByRow.get(row);
        if (unbound) {
            unboundRows.push(unbound);
        }
    }
    const unboundLocals = [];
    for (const local of locals){
        if (claimed.has(local)) {
            continue;
        }
        unboundLocals.push({
            local,
            reason: localReasons.get(local) ?? "no_row"
        });
    }
    return {
        bindings,
        unboundRows,
        unboundLocals
    };
}
function keptOutcome(response) {
    const outcome = response.outcome;
    switch(outcome.case){
        case "invalidGrant":
            return {
                kind: "kept",
                reason: "invalid_grant",
                detail: outcome.value.detail,
                retryable: false
            };
        case "reuseDetected":
            return {
                kind: "kept",
                reason: "reuse_detected",
                detail: outcome.value.detail,
                retryable: false
            };
        case "providerError":
            return {
                kind: "kept",
                reason: "provider_error",
                detail: outcome.value.detail,
                retryable: true
            };
        case "rejectedGrokRow":
            return {
                kind: "kept",
                reason: "rejected_grok_row",
                detail: "",
                retryable: false
            };
        case "notImplemented":
            return {
                kind: "kept",
                reason: "not_implemented",
                detail: outcome.value.method,
                retryable: true
            };
        case "persistFailed":
            return {
                kind: "kept",
                reason: "persist_failed",
                detail: outcome.value.detail,
                retryable: false
            };
        case "rejectedClientPlaced":
            return {
                kind: "kept",
                reason: "rejected_client_placed",
                detail: "",
                retryable: true
            };
        default:
            return {
                kind: "kept",
                reason: "unknown_outcome",
                detail: outcome.case ?? "",
                retryable: true
            };
    }
}
function bindGrants(rows, grants) {
    const locals = grants.map((ref)=>({
            identifier: ref.serverIdentifier,
            serverUrl: ref.serverUrl,
            ref
        }));
    const bindingRows = rows.map((row)=>({
            serverIdentifier: row.serverIdentifier,
            rowServerIdentifier: row.rowServerIdentifier,
            url: row.url ?? "",
            row
        }));
    const result = bindServerPlacedRows(bindingRows, locals);
    const bindings = new Map();
    for (const binding of result.bindings){
        bindings.set(binding.local.ref, {
            row: binding.row.row
        });
    }
    for (const unbound of result.unboundLocals){
        bindings.set(unbound.local.ref, {
            skipped: unbound.reason === "no_row" ? "not_server_placed" : unbound.reason
        });
    }
    return bindings;
}
async function migrateOne(options2, ref, row) {
    if (options2.exhausted?.has(ref.authStorageKey)) {
        return {
            kind: "skipped",
            reason: "already_attempted"
        };
    }
    try {
        await options2.disconnect(ref);
    } catch (error3) {
        return {
            kind: "disconnect_failed",
            error: error3
        };
    }
    if (options2.stillServerPlaced?.(row) === false) {
        return {
            kind: "skipped",
            reason: "not_server_placed"
        };
    }
    const tokens = await options2.store.loadTokens(ref.authStorageKey);
    const refreshToken = tokens?.refresh_token;
    if (refreshToken === void 0 || refreshToken.length === 0) {
        return {
            kind: "skipped",
            reason: "no_refresh_token"
        };
    }
    const clientInformation = await options2.store.loadClientInformation(ref.authStorageKey);
    if (clientInformation === void 0) {
        return {
            kind: "skipped",
            reason: "no_client_information"
        };
    }
    let response;
    try {
        response = await options2.client.migrateMcpOAuthGrant(new MigrateMcpOAuthGrantRequest({
            serverUrl: row.url,
            refreshToken,
            clientInformation: new McpOAuthStoredClientInfo({
                clientId: clientInformation.client_id,
                clientSecret: clientInformation.client_secret,
                redirectUris: [
                    ...clientInformation.redirect_uris ?? []
                ]
            })
        }));
    } catch (error3) {
        return {
            kind: "rpc_failed",
            error: error3
        };
    }
    switch(response.outcome.case){
        case "migrated":
            await options2.store.deleteCredentials(ref.authStorageKey);
            return {
                kind: "migrated"
            };
        case "serverCopyKept":
            await options2.store.deleteCredentials(ref.authStorageKey);
            return {
                kind: "server_copy_kept"
            };
        default:
            {
                const kept = keptOutcome(response);
                if (!kept.retryable) {
                    options2.exhausted?.add(ref.authStorageKey);
                }
                return kept;
            }
    }
}
export async function migrateGrantsForServerPlaced(ctx, options2) {
    const results = [];
    const bindings = options2.migrationEnabled ? bindGrants(options2.serverPlacedRows, options2.grants) : void 0;
    for (const ref of options2.grants){
        if (bindings === void 0) {
            results.push({
                ref,
                outcome: {
                    kind: "skipped",
                    reason: "migration_disabled"
                }
            });
            continue;
        }
        const binding = bindings.get(ref) ?? {
            skipped: "not_server_placed"
        };
        if ("skipped" in binding) {
            if (binding.skipped === "url_mismatch") {
                logger140.warn(ctx, "MCP grant not migrated: local definition names a server-placed row but dials a different URL", {
                    serverIdentifierHash: serverIdentifierHashForLog(ref.serverIdentifier)
                });
            }
            results.push({
                ref,
                outcome: {
                    kind: "skipped",
                    reason: binding.skipped
                }
            });
            continue;
        }
        const outcome = await migrateOne(options2, ref, binding.row);
        if (outcome.kind === "rpc_failed" || outcome.kind === "disconnect_failed") {
            logger140.warn(ctx, "MCP grant migration step failed; keeping the local record", {
                serverIdentifierHash: serverIdentifierHashForLog(ref.serverIdentifier),
                step: outcome.kind,
                error: outcome.error
            });
        } else {
            logger140.info(ctx, "MCP grant migration outcome", {
                serverIdentifierHash: serverIdentifierHashForLog(ref.serverIdentifier),
                outcome: outcome.kind,
                ..."reason" in outcome ? {
                    reason: outcome.reason
                } : {}
            });
        }
        results.push({
            ref,
            outcome
        });
    }
    return results;
}
function mcpAuthToolNameFor(serverIdentifier) {
    return `${serverIdentifier}-${MCP_AUTH_TOOL_NAME3}`;
}
export function createMcpAuthToolDefinition(args) {
    return {
        clientKey: args.serverIdentifier,
        providerIdentifier: args.serverName,
        ...args.plugin === void 0 ? {} : {
            plugin: args.plugin
        },
        ...args.marketplace === void 0 ? {} : {
            marketplace: args.marketplace
        },
        ...args.pluginId === void 0 ? {} : {
            pluginId: args.pluginId
        },
        ...args.marketplaceId === void 0 ? {} : {
            marketplaceId: args.marketplaceId
        },
        toolName: MCP_AUTH_TOOL_NAME3,
        name: mcpAuthToolNameFor(args.serverIdentifier),
        description: MCP_AUTH_TOOL_DESCRIPTION,
        inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false
        }
    };
}
export function isMcpAuthToolDefinition(tool) {
    return tool.toolName === MCP_AUTH_TOOL_NAME3;
}
export function canonicalMcpServerUrl(url2) {
    if (url2 === void 0 || url2.trim().length === 0) {
        return void 0;
    }
    return normalizeMcpServerUrl(url2);
}
function normalizeStatus(status) {
    switch(status){
        case "connected":
        case "needsAuth":
        case "error":
        case "loading":
            return status;
        default:
            return "loading";
    }
}
function parseAnnotationsJson(annotationsJson) {
    if (annotationsJson === void 0 || annotationsJson.length === 0) {
        return void 0;
    }
    try {
        const parsed = JSON.parse(annotationsJson);
        return parsed !== null && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : void 0;
    } catch  {
        return void 0;
    }
}
function nonEmpty4(value) {
    return value === void 0 || value.length === 0 ? void 0 : value;
}
function rowPluginFromProto(server) {
    const plugin = nonEmpty4(server.plugin);
    const marketplace = nonEmpty4(server.marketplace);
    const pluginId = nonEmpty4(server.pluginDbId);
    const marketplaceId = nonEmpty4(server.marketplaceId);
    return {
        ...plugin === void 0 ? {} : {
            plugin
        },
        ...marketplace === void 0 ? {} : {
            marketplace
        },
        ...pluginId === void 0 ? {} : {
            pluginId
        },
        ...marketplaceId === void 0 ? {} : {
            marketplaceId
        }
    };
}
function serverPlacedRowName(server) {
    return nonEmpty4(server.displayName) ?? server.tools.find((tool)=>tool.providerIdentifier.length > 0)?.providerIdentifier ?? server.serverIdentifier;
}
function toNamedToolDefinition(server, serverName, tool, plugin) {
    const toolName = tool.toolName || tool.name;
    return {
        clientKey: server.serverIdentifier,
        providerIdentifier: serverName,
        ...plugin,
        toolName,
        name: tool.name || `${server.serverIdentifier}-${toolName}`,
        description: tool.description || void 0,
        inputSchema: mcpInputSchemaToJson(tool),
        outputSchema: parseMcpOutputSchemaJson(tool.outputSchemaJson),
        annotations: parseAnnotationsJson(tool.annotationsJson)
    };
}
function serverPlacedRowFromProto(server) {
    const plugin = rowPluginFromProto(server);
    const serverName = serverPlacedRowName(server);
    const tools = server.tools.map((tool)=>toNamedToolDefinition(server, serverName, tool, plugin));
    return {
        serverIdentifier: server.serverIdentifier,
        rowServerIdentifier: server.rowServerIdentifier || server.serverIdentifier,
        serverName,
        accountLabel: server.accountLabel || DEFAULT_MCP_ACCOUNT_KEY,
        url: server.url,
        normalizedUrl: canonicalMcpServerUrl(server.url),
        servedBy: server.servedBy,
        status: normalizeStatus(server.status),
        tools,
        instructions: nonEmpty4(server.instructions),
        plugin
    };
}
export function serverPlacedRowInstructions(row) {
    return row.status === "needsAuth" ? void 0 : row.instructions;
}
export function placementSnapshotFromResponse(response) {
    const rows = new Map();
    const serverPlacedIdentifiers = new Set();
    const serverPlacedUrls = new Set();
    for (const server of response.servers){
        if (server.placement !== McpPlacement.SERVER) {
            continue;
        }
        if (server.serverIdentifier.length === 0) {
            continue;
        }
        const row = serverPlacedRowFromProto(server);
        rows.set(row.serverIdentifier, row);
        serverPlacedIdentifiers.add(row.serverIdentifier);
        serverPlacedIdentifiers.add(row.rowServerIdentifier);
        if (row.normalizedUrl !== void 0) {
            serverPlacedUrls.add(row.normalizedUrl);
        }
    }
    return {
        rows,
        serverPlacedIdentifiers,
        serverPlacedUrls
    };
}
export function isServerPlacedDefinition(snapshot, definition) {
    if (snapshot.serverPlacedIdentifiers.has(definition.identifier) || definition.authStorageKey !== void 0 && snapshot.serverPlacedIdentifiers.has(definition.authStorageKey)) {
        return true;
    }
    const url2 = canonicalMcpServerUrl(definition.url);
    return url2 !== void 0 && snapshot.serverPlacedUrls.has(url2);
}
export function withRowStatus(snapshot, serverIdentifier, status) {
    const row = snapshot.rows.get(serverIdentifier);
    if (row === void 0 || row.status === status) {
        return snapshot;
    }
    const rows = new Map(snapshot.rows);
    rows.set(serverIdentifier, {
        ...row,
        status,
        tools: status === "needsAuth" ? [] : row.tools
    });
    return {
        rows,
        serverPlacedIdentifiers: snapshot.serverPlacedIdentifiers,
        serverPlacedUrls: snapshot.serverPlacedUrls
    };
}
export function withoutRow(snapshot, serverIdentifier) {
    const row = snapshot.rows.get(serverIdentifier);
    if (row === void 0) {
        return snapshot;
    }
    const rows = new Map(snapshot.rows);
    rows.delete(serverIdentifier);
    const serverPlacedIdentifiers = new Set();
    const serverPlacedUrls = new Set();
    for (const remaining of rows.values()){
        serverPlacedIdentifiers.add(remaining.serverIdentifier);
        serverPlacedIdentifiers.add(remaining.rowServerIdentifier);
        if (remaining.normalizedUrl !== void 0) {
            serverPlacedUrls.add(remaining.normalizedUrl);
        }
    }
    return {
        rows,
        serverPlacedIdentifiers,
        serverPlacedUrls
    };
}
export function serverPlacedRowToSnapshot(row, snapshotGeneration) {
    return {
        serverIdentifier: row.serverIdentifier,
        serverName: row.serverName,
        ...row.plugin,
        status: snapshotStatusForRow(row.status),
        tools: (row.status === "needsAuth" ? [] : row.tools).map((tool)=>({
                name: tool.toolName,
                description: tool.description,
                inputSchema: tool.inputSchema,
                outputSchema: tool.outputSchema,
                title: tool.title,
                annotations: tool.annotations,
                _meta: tool._meta
            })),
        resources: [],
        prompts: [],
        instructions: serverPlacedRowInstructions(row),
        snapshotGeneration
    };
}
function snapshotStatusForRow(status) {
    switch(status){
        case "connected":
            return "connected";
        case "needsAuth":
            return "needsAuth";
        case "error":
            return "error";
        case "loading":
            return "initializing";
    }
}
export function serverPlacedSetKey(snapshot) {
    const identifiers = [
        ...snapshot.serverPlacedIdentifiers
    ].sort();
    const urls = [
        ...snapshot.serverPlacedUrls
    ].sort();
    return `${identifiers.join("\0")}|${urls.join("\0")}`;
}
export function coalesceLeaseEvents(events) {
    let full = false;
    let reason;
    const serverIdentifiers = new Set();
    for (const event of events){
        reason ??= event?.reason;
        if (isFullMcpLeaseInvalidation(event)) {
            full = true;
            continue;
        }
        for (const identifier2 of event?.serverIdentifiers ?? []){
            serverIdentifiers.add(identifier2);
        }
    }
    if (full) {
        return reason === void 0 ? void 0 : {
            reason
        };
    }
    return {
        serverIdentifiers: [
            ...serverIdentifiers
        ],
        reason
    };
}
function rowFingerprint(row) {
    return JSON.stringify([
        row.status,
        row.instructions ?? null,
        [
            row.plugin.plugin ?? null,
            row.plugin.marketplace ?? null,
            row.plugin.pluginId ?? null,
            row.plugin.marketplaceId ?? null
        ],
        row.tools.map((tool)=>[
                tool.name,
                tool.toolName,
                tool.providerIdentifier,
                tool.title ?? null,
                tool.description ?? null,
                tool.inputSchema ?? null,
                tool.outputSchema ?? null,
                tool.annotations ?? null
            ])
    ]);
}
export function changedServerIdentifiers(previous, next) {
    const changed = new Set();
    for (const [identifier2, row] of next.rows){
        const before = previous.rows.get(identifier2);
        if (before === void 0 || rowFingerprint(before) !== rowFingerprint(row)) {
            changed.add(identifier2);
        }
    }
    for (const identifier2 of previous.rows.keys()){
        if (!next.rows.has(identifier2)) {
            changed.add(identifier2);
        }
    }
    return [
        ...changed
    ];
}
function httpServerUrl(config2) {
    const url2 = config2 !== void 0 && "url" in config2 ? config2.url.trim() : void 0;
    return url2 !== void 0 && /^https?:\/\//i.test(url2) ? url2 : void 0;
}
function sortedKeysJson(value) {
    return JSON.stringify(value, (_key, nested)=>nested !== null && typeof nested === "object" && !Array.isArray(nested) ? Object.fromEntries(Object.entries(nested).sort(([a], [b2])=>a < b2 ? -1 : a > b2 ? 1 : 0)) : nested);
}
async function placementStateOf(ctx, client) {
    try {
        const state = await client.getState(ctx);
        return state.kind === "requires_authentication" || state.kind === "error" ? state.kind : "";
    } catch  {
        return "unreadable";
    }
}
export async function readWrappedInputRows(ctx, lease) {
    const clients = await lease.getClients(ctx);
    const rows = new Map();
    await Promise.all(Object.entries(clients).map(async ([identifier2, client])=>{
        const url2 = httpServerUrl(client.config);
        if (url2 === void 0) {
            return;
        }
        const state = await placementStateOf(ctx, client);
        const inputs = (0, import_node_crypto56.createHash)("sha256").update(JSON.stringify([
            sortedKeysJson(client.config),
            state
        ])).digest("hex");
        rows.set(identifier2, {
            url: url2,
            inputs
        });
    }));
    return rows;
}
export function wrappedInputsMoved(previous, current) {
    const snapshots = [
        ...previous.snapshots,
        ...current.snapshots
    ];
    const identifiers = new Set([
        ...previous.rows.keys(),
        ...current.rows.keys()
    ]);
    for (const identifier2 of identifiers){
        const before = previous.rows.get(identifier2);
        const after = current.rows.get(identifier2);
        if (before?.inputs === after?.inputs) {
            continue;
        }
        const url2 = after?.url ?? before?.url;
        const placed = snapshots.map((snapshot)=>isServerPlacedDefinition(snapshot, {
                identifier: identifier2,
                url: url2
            }));
        if (placed.every((value)=>value === placed[0])) {
            return true;
        }
    }
    return false;
}
export function createNoopHeadlessMcpLease() {
    return {
        async getTools () {
            return [];
        },
        async getToolSet () {
            return {
                async execute () {
                    throw new Error("MCP lease has not started");
                }
            };
        },
        async getClients () {
            return {};
        },
        async getClient () {
            return void 0;
        },
        async getInstructions () {
            return [];
        },
        async getToolsForServers () {
            return [];
        },
        onDidChange () {
            return {
                dispose () {}
            };
        },
        async dispose () {}
    };
}
export function uniqueNonEmpty(paths) {
    const seen = new Set();
    const result = [];
    for (const path64 of paths){
        if (path64.length === 0 || seen.has(path64)) {
            continue;
        }
        seen.add(path64);
        result.push(path64);
    }
    return result;
}
export function sameRoots(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    return left.every((path64, index)=>path64 === right[index]);
}
export function clientIdentityFromEnv(env = process.env) {
    const clientType = env[AGENT_HOST_DAEMON_CLIENT_TYPE]?.trim();
    if (clientType === void 0 || clientType === "") {
        return void 0;
    }
    const clientVersionHeader = env[AGENT_HOST_DAEMON_CLIENT_VERSION]?.trim();
    return clientVersionHeader === void 0 || clientVersionHeader === "" ? {
        clientType
    } : {
        clientType,
        clientVersionHeader
    };
}
export function createHostQuestionDecisionProvider(options2) {
    const approve = createInteractionApprovalHandler(options2.askHostQuestion);
    const ask = async (operation)=>options2.hasPushedPermissions() ? approve(operation) : {
            approved: false,
            reason: "session has no pushed permissions"
        };
    return {
        requestApproval: async (operation)=>ask(operation),
        get requestReadApproval () {
            return options2.hasPushedPermissions() ? ask : void 0;
        }
    };
}
export function createHostQuestionElicitationFactory(askHostQuestion) {
    const elicit = createInteractionElicitationHandler(askHostQuestion);
    return {
        createProvider (serverName, toolName, toolCallId) {
            return {
                async elicit (request3, options2) {
                    const answered = await elicit(serverName, toolName, toolCallId, request3, options2?.signal);
                    if (answered.action === "accept" && !hasRequiredFields(request3.requestedSchema.required, answered.content ?? null)) {
                        return {
                            action: "cancel"
                        };
                    }
                    return answered;
                }
            };
        }
    };
}
function hasRequiredFields(required2, json2) {
    if (required2 === void 0 || required2.length === 0) {
        return true;
    }
    if (typeof json2 !== "object" || json2 === null || Array.isArray(json2)) {
        return false;
    }
    return required2.every((key)=>key in json2);
}
function slugifyWorkspacePath(path64) {
    return path64.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function projectDirSlugForResolvedPath(resolvedPath) {
    const slug = slugifyWorkspacePath(resolvedPath);
    if (slug.length > 0) {
        return slug;
    }
    return (0, import_node_crypto57.createHash)("sha256").update(resolvedPath).digest("hex").substring(0, EMPTY_SLUG_HASH_LENGTH);
}
function projectDirSlug(workspacePath) {
    return projectDirSlugForResolvedPath((0, import_node_path100.resolve)(workspacePath));
}
function defaultDaemonProjectDir(options2) {
    return (0, import_node_path100.join)(options2.agentsDir, PROJECTS_SUBDIR, projectDirSlug(options2.workspacePath));
}
function unrootedDaemonProjectDir(options2) {
    return (0, import_node_path100.join)(options2.agentsDir, PROJECTS_SUBDIR, `unrooted-${options2.sessionId}`);
}
function rejectProjectDirInWorkspace(workspacePaths, projectDir) {
    const resolvedProject = (0, import_node_path100.resolve)(projectDir);
    for (const workspacePath of workspacePaths){
        if ((0, import_node_path100.resolve)(workspacePath) === resolvedProject) {
            throw new Error("projectDir must not be a workspace root; pass a scratch directory");
        }
    }
}
export function execRootFromParent(parent) {
    const root = parent?.rootSessionId?.trim() || parent?.parentSessionId?.trim() || "";
    return root.length > 0 ? root : void 0;
}
export function resolveSessionExecConfig(options2) {
    const workspacePaths = resolveSessionWorkspacePaths(options2.sessionOptions);
    const isGlassRoot = workspacePaths.length === 0 && options2.sessionOptions?.isGlassRoot === true;
    const projectDir = (0, import_node_path101.resolve)(isGlassRoot ? unrootedDaemonProjectDir({
        agentsDir: options2.agentsDir,
        sessionId: options2.sessionId
    }) : options2.projectDirOverride ?? defaultDaemonProjectDir({
        agentsDir: options2.agentsDir,
        workspacePath: workspacePaths[0]
    }));
    rejectProjectDirInWorkspace(workspacePaths, projectDir);
    const maxRunning = options2.sessionOptions?.localSubagentLimits?.maxRunning;
    const hostedMcpLocalGrantIdentifiers = normalizeHostedMcpLocalGrantIdentifiers(options2.sessionOptions?.hostedMcpLocalGrantIdentifiers);
    return {
        workspacePaths,
        projectDir,
        ...isGlassRoot ? {
            isGlassRoot: true
        } : {},
        ...options2.sessionOptions?.interactionPolicy === void 0 ? {} : {
            interactionPolicy: options2.sessionOptions.interactionPolicy
        },
        ...maxRunning === void 0 ? {} : {
            localSubagentLimitsMaxRunning: maxRunning
        },
        ...options2.sessionOptions?.hostedMcpRoutingEnabled === true ? {
            hostedMcpRoutingEnabled: true
        } : {},
        ...hostedMcpLocalGrantIdentifiers.length === 0 ? {} : {
            hostedMcpLocalGrantIdentifiers
        }
    };
}
function normalizeHostedMcpLocalGrantIdentifiers(identifiers) {
    return uniqueNonEmpty((identifiers ?? []).map((value)=>value.trim()));
}
function hostedMcpSessionOptionsFromExecConfig(config2) {
    return {
        ...config2.hostedMcpRoutingEnabled === true ? {
            hostedMcpRoutingEnabled: true
        } : {},
        ...config2.hostedMcpLocalGrantIdentifiers === void 0 || config2.hostedMcpLocalGrantIdentifiers.length === 0 ? {} : {
            hostedMcpLocalGrantIdentifiers: [
                ...config2.hostedMcpLocalGrantIdentifiers
            ]
        }
    };
}
function resolveSessionWorkspacePaths(sessionOptions) {
    const raw = sessionOptions?.workspacePaths ?? [];
    if (raw.length === 0) {
        if (sessionOptions?.isGlassRoot === true) {
            return [];
        }
        throw new Error("CreateSession requires session_options.workspace_paths with at least one absolute path");
    }
    const workspacePaths = [];
    for (const rawPath of raw){
        const trimmed = rawPath.trim();
        if (trimmed.length === 0 || !(0, import_node_path101.isAbsolute)(trimmed)) {
            throw new Error(`session_options.workspace_paths entries must be absolute: ${rawPath}`);
        }
        workspacePaths.push((0, import_node_path101.resolve)(trimmed));
    }
    return workspacePaths;
}
export function replayPersistedCreateRequest(request3, config2) {
    const owner = config2.owningClientInstanceId?.trim() || request3.owningClientInstanceId?.trim() || void 0;
    let glassRoot;
    if (config2.isGlassRoot === true) {
        glassRoot = true;
    } else if (config2.workspacePaths.length > 0) {
        glassRoot = false;
    }
    return {
        ...request3,
        ...owner === void 0 ? {} : {
            owningClientInstanceId: owner
        },
        sessionOptions: {
            ...request3.sessionOptions,
            workspacePaths: [
                ...config2.workspacePaths
            ],
            ...glassRoot === void 0 ? {} : {
                isGlassRoot: glassRoot
            },
            ...config2.interactionPolicy === void 0 ? {} : {
                interactionPolicy: config2.interactionPolicy
            },
            ...config2.localSubagentLimitsMaxRunning === void 0 ? {} : {
                localSubagentLimits: {
                    maxRunning: config2.localSubagentLimitsMaxRunning
                }
            },
            ...hostedMcpSessionOptionsFromExecConfig(config2)
        }
    };
}
export function cloneInheritedExecConfig(args) {
    const isGlassRoot = args.source.isGlassRoot === true;
    const parent = args.parent;
    return {
        workspacePaths: [
            ...args.source.workspacePaths
        ],
        projectDir: isGlassRoot ? unrootedDaemonProjectDir({
            agentsDir: args.agentsDir,
            sessionId: args.destinationSessionId
        }) : args.source.projectDir,
        ...args.source.owningClientInstanceId === void 0 ? {} : {
            owningClientInstanceId: args.source.owningClientInstanceId
        },
        ...isGlassRoot ? {
            isGlassRoot: true
        } : {},
        ...args.source.interactionPolicy === void 0 ? {} : {
            interactionPolicy: args.source.interactionPolicy
        },
        ...args.source.localSubagentLimitsMaxRunning === void 0 ? {} : {
            localSubagentLimitsMaxRunning: args.source.localSubagentLimitsMaxRunning
        },
        ...hostedMcpSessionOptionsFromExecConfig(args.source),
        ...parent === void 0 ? {} : {
            parent
        }
    };
}
export function createDaemonSessionPersistence(sessionStorage, sessionExecRegistry) {
    const { registry: registry2, records: records2 } = sessionStorage;
    const createSessionStore = (args)=>{
        const store = registry2.consumePreparedSessionStore(args.sessionId);
        return store === void 0 ? void 0 : withRegistryHeldForks(store, args.sessionId);
    };
    const explicitForkSources = new Map();
    const pendingForks = new Map();
    let hasLiveSession = (_sessionId)=>false;
    const withRegistryHeldForks = (store, sessionId)=>({
            getConversationState: ()=>store.getConversationState(),
            handleCheckpoint: (ctx, checkpoint)=>store.handleCheckpoint(ctx, checkpoint),
            getBlobStore: ()=>store.getBlobStore(),
            markLive: ()=>{
                pendingForks.delete(sessionId);
                store.markLive?.();
            },
            dispose: ()=>{
                if (pendingForks.delete(sessionId)) {
                    try {
                        const parent = sessionExecRegistry.peekOrPersistedExecConfig(sessionId)?.parent;
                        if (parent !== void 0) {
                            records2.deleteSubagentChildSessionId({
                                parentSessionId: parent.parentSessionId,
                                parentToolCallId: parent.parentToolCallId,
                                childSessionId: sessionId
                            });
                        }
                        records2.deleteSessionExecConfig(sessionId);
                        sessionExecRegistry.forget(sessionId);
                    } finally{
                        registry2.cleanupFailedSessionCreate(sessionId);
                    }
                    return;
                }
                return store.dispose?.();
            },
            createFork: async (ctx, args)=>{
                assertPathSafeSessionId(args.sessionId);
                const explicit = explicitForkSources.get(ctx) === sessionId;
                const parentBlobs = store.getBlobStore();
                const ownership = sessionStorage.acquireSessionCreate(args.sessionId);
                if (ownership === void 0) {
                    throw new Error(`session ${args.sessionId} has a pending delete; retry after startup reconciliation`);
                }
                let prepared;
                let forkExec;
                try {
                    if (explicit) {
                        sessionExecRegistry.inheritFromSession({
                            destinationSessionId: args.sessionId,
                            sourceSessionId: sessionId
                        });
                        forkExec = sessionExecRegistry.peekExecConfig(args.sessionId);
                    }
                    prepared = await registry2.prepareSession({
                        sessionId: args.sessionId,
                        allowCreate: true,
                        initialHistory: (args.initialHistory ?? store.getConversationState()).toBinary(),
                        legacyGetBlob: (blobId)=>parentBlobs.getBlob(ctx, blobId),
                        ...forkExec === void 0 ? {} : {
                            workspacePaths: forkExec.workspacePaths
                        },
                        ctx
                    });
                } finally{
                    ownership.dispose();
                }
                const forkStore = prepared === void 0 ? void 0 : registry2.consumePreparedSessionStore(args.sessionId);
                if (forkStore === void 0) {
                    if (explicit) {
                        records2.deleteSessionExecConfig(args.sessionId);
                        sessionExecRegistry.forget(args.sessionId);
                    }
                    throw new Error(`host-owned storage could not be seeded for fork ${args.sessionId}`);
                }
                pendingForks.set(args.sessionId, ctx);
                return withRegistryHeldForks(forkStore, args.sessionId);
            }
        });
    const sessionTurns = new Map();
    const inSessionTurn = async (sessionId, run)=>{
        const prior = sessionTurns.get(sessionId) ?? Promise.resolve();
        const turn = prior.then(run, run);
        sessionTurns.set(sessionId, turn);
        try {
            return await turn;
        } finally{
            if (sessionTurns.get(sessionId) === turn) {
                sessionTurns.delete(sessionId);
            }
        }
    };
    const prepareSession = async (args)=>{
        assertPathSafeSessionId(args.sessionId);
        const ownership = args.allowCreate === true ? sessionStorage.acquireSessionCreate(args.sessionId) : void 0;
        if (args.allowCreate && ownership === void 0) {
            throw new Error(`session ${args.sessionId} has a pending delete; retry after startup reconciliation`);
        }
        let prepared;
        try {
            prepared = await registry2.prepareSession({
                sessionId: args.sessionId,
                allowCreate: args.allowCreate,
                ...args.workspacePaths === void 0 ? {} : {
                    workspacePaths: args.workspacePaths
                },
                ...args.ctx === void 0 ? {} : {
                    ctx: args.ctx
                }
            });
        } finally{
            ownership?.dispose();
        }
        if (prepared === void 0 && args.allowCreate) {
            throw new Error(`host-owned storage could not be seeded for session ${args.sessionId}`);
        }
        return prepared;
    };
    let hydrateSession;
    const withExecMetadata = (entry)=>{
        const exec2 = sessionExecRegistry.peekOrPersistedExecConfig(entry.sessionId);
        if (exec2 === void 0) {
            return entry;
        }
        return {
            ...entry,
            workspace: {
                workspacePaths: exec2.workspacePaths
            },
            ...exec2.owningClientInstanceId === void 0 ? {} : {
                owningClientInstanceId: exec2.owningClientInstanceId
            },
            ...exec2.parent === void 0 ? {} : {
                parent: exec2.parent
            }
        };
    };
    const sessionCatalog = {
        async listSessions (ctx, request3, matches) {
            return registry2.listNativeCatalogEntries(request3?.limit ?? AGENT_HOST_SESSION_LIST_MAX_LIMIT, ctx, matches === void 0 ? void 0 : (entry)=>{
                const catalogEntry = withExecMetadata(entry);
                return matches(catalogEntry) ? catalogEntry : void 0;
            }).map(withExecMetadata);
        },
        async ensureLoaded (ctx, sessionId) {
            if (hydrateSession === void 0) {
                throw new Error("agent host is not ready");
            }
            return hydrateSession(ctx, sessionId);
        },
        async setTitle (_ctx, sessionId, title) {
            registry2.noteTitleChanged(sessionId, title);
        }
    };
    return {
        createSessionStore,
        sessionCatalog,
        async findExistingSubagentSessionId ({ parentSessionId, parentToolCallId }) {
            const childSessionId = records2.readSubagentChildSessionId({
                parentSessionId,
                parentToolCallId
            });
            if (childSessionId === void 0) {
                return void 0;
            }
            return inSessionTurn(childSessionId, async ()=>{
                if (!sessionStorage.hasDurableSession(childSessionId)) {
                    return void 0;
                }
                return childSessionId;
            });
        },
        wrapHost (host, hooks) {
            hasLiveSession = (sessionId)=>host.hasLiveSession?.(sessionId) ?? false;
            hydrateSession = wrapHostCreateSession(host, prepareSession, inSessionTurn, sessionStorage, sessionExecRegistry, hasLiveSession);
            wrapHostForkSession(host, pendingForks, explicitForkSources);
            wrapHostDeleteSession(host, inSessionTurn, sessionStorage, sessionExecRegistry, hooks?.onSessionForgotten);
        }
    };
}
function wrapHostCreateSession(host, prepareSession, inSessionTurn, sessionStorage, sessionExecRegistry, hasLiveSession) {
    const { registry: registry2, records: records2 } = sessionStorage;
    const originalCreateSession = host.createSession.bind(host);
    const createPrepared = async (ctx, request3, options2, prepared, cleanupOnFailure)=>{
        const { initialHistory, ...withoutHistory } = request3;
        const forwarded = initialHistory !== void 0 && prepared.store.getConversationState().toBinary().byteLength > 0 ? withoutHistory : request3;
        let response;
        try {
            response = await originalCreateSession(ctx, forwarded, options2);
        } catch (error3) {
            if (isErrorWithMessage(error3, SESSION_ALREADY_EXISTS_SNIPPET)) {
                registry2.rollbackDanglingPreparedSession(request3.sessionId);
            } else if (cleanupOnFailure) {
                const live = hasLiveSession(request3.sessionId);
                if (live) {
                    records2.reportPostKernelMetadataPersistenceFailure();
                } else {
                    registry2.cleanupFailedSessionCreate(request3.sessionId);
                }
            }
            throw error3;
        }
        const parent = options2?.parent;
        if (parent !== void 0 && parent.parentSessionId.length > 0 && parent.parentToolCallId.length > 0) {
            records2.writeSubagentChildSessionId({
                parentSessionId: parent.parentSessionId,
                parentToolCallId: parent.parentToolCallId,
                childSessionId: request3.sessionId
            });
            sessionExecRegistry.stampParent(request3.sessionId, parent);
        }
        return response;
    };
    host.createSession = (ctx, request3, options2)=>inSessionTurn(request3.sessionId, async ()=>{
            const cleanupOnFailure = !registry2.hasPreparedSession(request3.sessionId);
            const prepared = await prepareSession({
                sessionId: request3.sessionId,
                allowCreate: true,
                ...request3.sessionOptions?.workspacePaths === void 0 ? {} : {
                    workspacePaths: request3.sessionOptions.workspacePaths
                },
                ctx
            });
            if (prepared === void 0) {
                throw new Error(`host-owned storage could not be seeded for session ${request3.sessionId}`);
            }
            return createPrepared(ctx, request3, options2, prepared, cleanupOnFailure);
        });
    return (ctx, sessionId)=>inSessionTurn(sessionId, async ()=>{
            if (hasLiveSession(sessionId)) {
                return true;
            }
            const persistedExec = records2.readSessionExecConfig(sessionId);
            const cleanupOnFailure = !registry2.hasPreparedSession(sessionId);
            const prepared = await prepareSession({
                sessionId,
                allowCreate: false,
                ctx
            });
            if (prepared === void 0) {
                return false;
            }
            const nativeEntry = registry2.getNativeCatalogEntry(sessionId);
            let request3 = {
                sessionId
            };
            if (persistedExec === void 0) {
                const workspacePaths = nativeEntry?.workspace?.workspacePaths;
                if (workspacePaths === void 0) {
                    registry2.rollbackDanglingPreparedSession(sessionId);
                    return false;
                }
                request3 = {
                    sessionId,
                    sessionOptions: {
                        workspacePaths: [
                            ...workspacePaths
                        ]
                    }
                };
            }
            try {
                await createPrepared(ctx, request3, persistedExec?.parent === void 0 ? void 0 : {
                    parent: persistedExec.parent
                }, prepared, cleanupOnFailure);
            } catch (error3) {
                if (!isErrorWithMessage(error3, SESSION_ALREADY_EXISTS_SNIPPET)) {
                    throw error3;
                }
                if (!hasLiveSession(sessionId)) {
                    return false;
                }
            }
            const title = nativeEntry?.title;
            if (title !== void 0 && typeof host.setSessionTitle === "function") {
                await host.setSessionTitle(ctx, {
                    sessionId,
                    title
                });
            }
            return true;
        });
}
function wrapHostForkSession(host, pendingForks, explicitForkSources) {
    const originalForkSession = host.forkSession?.bind(host);
    if (originalForkSession === void 0) {
        return;
    }
    host.forkSession = async (ctx, request3)=>{
        explicitForkSources.set(ctx, request3.sessionId);
        try {
            return await originalForkSession(ctx, request3);
        } finally{
            if (explicitForkSources.get(ctx) === request3.sessionId) {
                explicitForkSources.delete(ctx);
            }
            for (const [forkSessionId, forkCtx] of pendingForks){
                if (forkCtx === ctx) {
                    pendingForks.delete(forkSessionId);
                }
            }
        }
    };
}
function wrapHostDeleteSession(host, inSessionTurn, sessionStorage, sessionExecRegistry, onSessionForgotten) {
    const { registry: registry2, records: records2 } = sessionStorage;
    const originalDeleteSession = host.deleteSession.bind(host);
    const forgetDurableSession = (sessionId)=>{
        records2.markSessionDeletePending(sessionId);
        if (!registry2.deleteSessionStorage(sessionId)) {
            records2.reportDeletePending("storage_delete_failed");
            throw new Error(`failed to delete host-owned storage for session ${sessionId}`);
        }
        try {
            records2.finishSessionDeleteRecords(sessionId);
        } catch (error3) {
            records2.reportDeletePending("metadata_cleanup_failed");
            throw error3;
        }
        sessionExecRegistry.forget(sessionId);
        onSessionForgotten?.(sessionId);
    };
    const forgetTree = async (ctx, sessionId, forgotten)=>{
        const descendants = sessionExecRegistry.listDescendantSessionIds(sessionId);
        forgotten.add(sessionId);
        for (const childId of descendants){
            if (forgotten.has(childId)) {
                continue;
            }
            await inSessionTurn(childId, async ()=>{
                try {
                    await originalDeleteSession(ctx, {
                        sessionId: childId
                    });
                } catch (error3) {
                    if (!isErrorWithMessage(error3, SESSION_NOT_FOUND_SNIPPET)) {
                        throw error3;
                    }
                }
                await forgetTree(ctx, childId, forgotten);
            });
        }
        forgetDurableSession(sessionId);
    };
    const deleteWithDescendants = async (ctx, request3)=>{
        let response;
        try {
            response = await originalDeleteSession(ctx, request3);
        } catch (error3) {
            if (!(isErrorWithMessage(error3, SESSION_NOT_FOUND_SNIPPET) && (sessionStorage.hasDurableSession(request3.sessionId) || records2.hasSessionDeletePending(request3.sessionId)))) {
                throw error3;
            }
            response = {};
        }
        await forgetTree(ctx, request3.sessionId, new Set());
        return response;
    };
    host.deleteSession = (ctx, request3)=>inSessionTurn(request3.sessionId, ()=>deleteWithDescendants(ctx, request3));
}
function isErrorWithMessage(error3, snippet2) {
    return error3 instanceof Error && error3.message.includes(snippet2);
}
export function copyBytes(data) {
    return new Uint8Array(data);
}
export function isTerminal2(state) {
    return state === "exited" || state === "aborted";
}
export function sliceWatchChunkFrom(chunk, fromOffset) {
    const chunkEnd = chunk.outputOffset + BigInt(chunk.data.byteLength);
    if (chunkEnd <= fromOffset) {
        return void 0;
    }
    if (chunk.outputOffset >= fromOffset) {
        return chunk;
    }
    const skip = Number(fromOffset - chunk.outputOffset);
    return {
        ...chunk,
        outputOffset: fromOffset,
        data: chunk.data.subarray(skip)
    };
}
export function sessionKey(sessionId) {
    return sessionId;
}
export function aliasKey(sessionId, shellId) {
    return `${sessionId}\0${shellId}`;
}
export function pickRekeyKeeper(from2, to3) {
    if (isTerminal2(to3.state) !== isTerminal2(from2.state)) {
        return isTerminal2(to3.state) ? to3 : from2;
    }
    if (to3.ring.nextOutputOffset !== from2.ring.nextOutputOffset) {
        return to3.ring.nextOutputOffset > from2.ring.nextOutputOffset ? to3 : from2;
    }
    return to3;
}
export function matchesAbortFilter(entry, filter3) {
    if (filter3 === void 0) {
        return true;
    }
    if (filter3.backgroundOnly === true && entry.background !== true) {
        return false;
    }
    if (filter3.kind !== void 0 && filter3.kind !== "shell") {
        return false;
    }
    if (filter3.ownerId !== void 0 && entry.ownerId !== filter3.ownerId) {
        return false;
    }
    if (filter3.state === "queued") {
        return false;
    }
    if (filter3.state === "running") {
        return entry.state === "running" || entry.state === "starting";
    }
    return true;
}
export function parseNumericShellId(shellId) {
    if (!/^\d+$/.test(shellId)) {
        return void 0;
    }
    const value = Number(shellId);
    if (!Number.isInteger(value) || value < 0 || value > 4294967295) {
        return void 0;
    }
    return value;
}
export function watchEventQueuedBytes(event) {
    return event.type === "chunk" ? event.chunk.data.byteLength : 0;
}
export function isDroppableWatchEvent(event) {
    return event.type === "chunk";
}
export function createSessionShellBackgroundFactory(options2) {
    const sessionId = options2.sessionId;
    const registry2 = options2.registry;
    return createBackgroundShellFactoryWithEventStreaming(options2.projectDir, {
        onShellCreated (args) {
            const shellId = String(args.shellId);
            registry2.upsert({
                sessionId,
                shellId,
                command: args.command,
                cwd: args.cwd,
                toolCallId: args.toolCallId,
                title: args.description,
                abort: args.abortShell,
                writeStdin: args.writeStdin,
                ownerId: args.conversationId,
                state: "running",
                background: true
            });
            const toolCallId = args.toolCallId;
            if (toolCallId !== void 0 && toolCallId.length > 0) {
                registry2.rekey({
                    sessionId,
                    fromId: toolCallId,
                    toId: shellId
                });
            }
            args.registerEventHandler({
                onStart () {
                    registry2.setState({
                        sessionId,
                        shellId,
                        state: "running"
                    });
                },
                onStdout (data) {
                    registry2.append({
                        sessionId,
                        shellId,
                        data: UTF8.encode(data),
                        stream: "stdout"
                    });
                },
                onStderr (data) {
                    registry2.append({
                        sessionId,
                        shellId,
                        data: UTF8.encode(data),
                        stream: "stderr"
                    });
                },
                onExit (code) {
                    registry2.exit({
                        sessionId,
                        shellId,
                        exitCode: code
                    });
                }
            });
        }
    });
}
export function wrapSessionShellOutput(options2) {
    const sessionId = options2.context.args.sessionId;
    const registry2 = options2.registry;
    const provider = options2.context.provider;
    const base = options2.inner?.accessor ?? provider;
    const spawnExec = wrapBackgroundShell(base.get(backgroundShellExecutorResource), sessionId, registry2);
    registry2.bindSession(sessionId, {
        workspacePath: options2.workspacePath,
        writeStdin: async (_ctx, shellId, data)=>{
            const bound = registry2.resolve({
                sessionId,
                shellId: String(shellId)
            });
            if (bound?.writeStdin === void 0) {
                throw new ConnectError("shell stdin is not bound", Code.FailedPrecondition);
            }
            return BigInt(await bound.writeStdin(data));
        },
        spawn: async (args)=>{
            const result = await spawnExec.execute(createContext(), new BackgroundShellSpawnArgs({
                command: args.command,
                workingDirectory: args.workingDirectory,
                toolCallId: `demo-shell-${crypto.randomUUID()}`,
                enableWriteShellStdinTool: true
            }));
            if (result.result.case !== "success") {
                throw new Error(spawnFailureDetail(result.result));
            }
            return {
                shellId: String(result.result.value.shellId)
            };
        }
    });
    return {
        accessor: new ListableCombinedResourceAccessor(base, [
            resourceEntry(shellStreamExecutorResource, wrapShellStream(base.get(shellStreamExecutorResource), sessionId, registry2)),
            resourceEntry(backgroundShellExecutorResource, spawnExec),
            resourceEntry(forceBackgroundShellExecutorResource, wrapForceBackgroundShell(base.get(forceBackgroundShellExecutorResource), sessionId, registry2))
        ]),
        dispose: async ()=>{
            registry2.unbindSession(sessionId);
            await options2.inner?.dispose?.();
        }
    };
}
function wrapShellStream(inner, sessionId, registry2) {
    return {
        async *execute (ctx, args, options2) {
            const provisionalId = args.toolCallId.length > 0 ? args.toolCallId : `shell-stream-${crypto.randomUUID()}`;
            let currentId = provisionalId;
            let handedOffToBackground = false;
            registry2.upsert({
                sessionId,
                shellId: currentId,
                command: args.command,
                cwd: args.workingDirectory,
                toolCallId: args.toolCallId.length > 0 ? args.toolCallId : void 0,
                state: "starting",
                background: false
            });
            try {
                for await (const event of inner.execute(ctx, args, options2)){
                    if (!handedOffToBackground && isFactoryOwnedShell(registry2, {
                        sessionId,
                        shellId: currentId
                    })) {
                        handedOffToBackground = true;
                    }
                    if (!handedOffToBackground) {
                        switch(event.event.case){
                            case "start":
                                registry2.setState({
                                    sessionId,
                                    shellId: currentId,
                                    state: "running"
                                });
                                break;
                            case "stdout":
                                registry2.append({
                                    sessionId,
                                    shellId: currentId,
                                    data: UTF8.encode(event.event.value.data),
                                    stream: "stdout"
                                });
                                break;
                            case "stderr":
                                registry2.append({
                                    sessionId,
                                    shellId: currentId,
                                    data: UTF8.encode(event.event.value.data),
                                    stream: "stderr"
                                });
                                break;
                            case "backgrounded":
                                {
                                    const nextId = String(event.event.value.shellId);
                                    handedOffToBackground = true;
                                    registry2.rekey({
                                        sessionId,
                                        fromId: currentId,
                                        toId: nextId
                                    });
                                    currentId = nextId;
                                    registry2.upsert({
                                        sessionId,
                                        shellId: nextId,
                                        command: event.event.value.command,
                                        cwd: event.event.value.workingDirectory,
                                        state: "running",
                                        background: true
                                    });
                                    break;
                                }
                            case "exit":
                                if (event.event.value.aborted) {
                                    registry2.abort({
                                        sessionId,
                                        shellId: currentId,
                                        reason: "stream_aborted"
                                    });
                                } else {
                                    registry2.exit({
                                        sessionId,
                                        shellId: currentId,
                                        exitCode: event.event.value.code
                                    });
                                }
                                break;
                            case "rejected":
                                registry2.abort({
                                    sessionId,
                                    shellId: currentId,
                                    reason: event.event.value.reason.length > 0 ? event.event.value.reason : "rejected"
                                });
                                break;
                            case "permissionDenied":
                                registry2.abort({
                                    sessionId,
                                    shellId: currentId,
                                    reason: "permission_denied"
                                });
                                break;
                            case "sandboxUnsupported":
                                registry2.abort({
                                    sessionId,
                                    shellId: currentId,
                                    reason: event.event.value.reason.length > 0 ? event.event.value.reason : "sandbox_unsupported"
                                });
                                break;
                            default:
                                break;
                        }
                    }
                    yield event;
                }
            } finally{
                if (!handedOffToBackground && !isFactoryOwnedShell(registry2, {
                    sessionId,
                    shellId: currentId
                })) {
                    abortLeftoverShell({
                        registry: registry2,
                        sessionId,
                        shellId: currentId,
                        handedOffToBackground: false,
                        reason: "stream_ended",
                        toolCallId: args.toolCallId.length > 0 ? args.toolCallId : void 0
                    });
                }
            }
        }
    };
}
function wrapBackgroundShell(inner, sessionId, registry2) {
    return {
        async execute (ctx, args, options2) {
            const provisional = args.toolCallId.length > 0 ? args.toolCallId : void 0;
            if (provisional !== void 0) {
                registry2.upsert({
                    sessionId,
                    shellId: provisional,
                    command: args.command,
                    cwd: args.workingDirectory,
                    toolCallId: provisional,
                    state: "starting",
                    background: true
                });
            }
            try {
                const result = await inner.execute(ctx, args, options2);
                if (result.result.case === "success") {
                    const shellId = String(result.result.value.shellId);
                    if (provisional !== void 0) {
                        registry2.rekey({
                            sessionId,
                            fromId: provisional,
                            toId: shellId
                        });
                    }
                    registry2.upsert({
                        sessionId,
                        shellId,
                        command: result.result.value.command,
                        cwd: result.result.value.workingDirectory,
                        toolCallId: provisional,
                        state: "running",
                        background: true
                    });
                } else if (provisional !== void 0) {
                    abortLeftoverShell({
                        registry: registry2,
                        sessionId,
                        shellId: provisional,
                        handedOffToBackground: false,
                        reason: spawnFailureDetail(result.result),
                        toolCallId: provisional
                    });
                }
                return result;
            } catch (error3) {
                if (provisional !== void 0) {
                    abortLeftoverShell({
                        registry: registry2,
                        sessionId,
                        shellId: provisional,
                        handedOffToBackground: false,
                        reason: "spawn_failed",
                        toolCallId: provisional
                    });
                }
                throw error3;
            }
        }
    };
}
function isFactoryOwnedShell(registry2, ref) {
    const live = registry2.resolve(ref);
    if (live === void 0) {
        return false;
    }
    if (live.adopted) {
        return true;
    }
    return live.background && live.shellId !== ref.shellId;
}
function abortLeftoverShell(args) {
    if (args.handedOffToBackground) {
        return;
    }
    if (isAdoptedLeftover(args)) {
        return;
    }
    if (args.toolCallId !== void 0 && args.toolCallId.length > 0) {
        args.registry.abortMatchingToolCall({
            sessionId: args.sessionId,
            toolCallId: args.toolCallId,
            reason: args.reason
        });
        return;
    }
    const leftover = args.registry.snapshot({
        sessionId: args.sessionId,
        shellId: args.shellId
    });
    if (leftover === void 0 || leftover.state === "exited" || leftover.state === "aborted") {
        return;
    }
    args.registry.abort({
        sessionId: args.sessionId,
        shellId: args.shellId,
        reason: args.reason
    });
}
function spawnFailureDetail(result) {
    if (result.case === "error") {
        return result.value?.error ?? "spawn failed";
    }
    if (result.case === "sandboxUnsupported") {
        return result.value?.reason ?? "sandbox unsupported";
    }
    if (result.case === "permissionDenied") {
        return "permission denied";
    }
    if (result.case === "rejected") {
        return "rejected";
    }
    return "spawn failed";
}
function wrapForceBackgroundShell(inner, sessionId, registry2) {
    return {
        async execute (ctx, args, options2) {
            const result = await inner.execute(ctx, args, options2);
            if (result.status === ForceBackgroundShellStatus.ACCEPTED) {
                adoptForceBackgroundedShell({
                    registry: registry2,
                    sessionId,
                    toolCallId: args.toolCallId,
                    result
                });
            }
            return result;
        }
    };
}
function adoptForceBackgroundedShell(args) {
    const adoptedId = adoptedShellIdFromForceResult(args.result) ?? (args.toolCallId.length > 0 ? args.registry.findFactoryShellId({
        sessionId: args.sessionId,
        toolCallId: args.toolCallId
    }) : void 0);
    if (adoptedId === void 0) {
        args.registry.markAdopted({
            sessionId: args.sessionId,
            shellId: args.toolCallId
        });
        args.registry.setState({
            sessionId: args.sessionId,
            shellId: args.toolCallId,
            state: "running"
        });
        return;
    }
    args.registry.rekey({
        sessionId: args.sessionId,
        fromId: args.toolCallId,
        toId: adoptedId
    });
    const success = args.result.shellResult?.result.case === "success" ? args.result.shellResult.result.value : void 0;
    args.registry.upsert({
        sessionId: args.sessionId,
        shellId: adoptedId,
        command: success?.command,
        cwd: success?.workingDirectory,
        toolCallId: args.toolCallId.length > 0 ? args.toolCallId : void 0,
        state: "running",
        background: true,
        adopted: true
    });
}
function adoptedShellIdFromForceResult(result) {
    const payload = result.shellResult?.result;
    if (payload?.case !== "success") {
        return void 0;
    }
    const shellId = payload.value.shellId;
    if (shellId === void 0 || shellId === 0) {
        return void 0;
    }
    return String(shellId);
}
function isAdoptedLeftover(args) {
    if (args.registry.resolve({
        sessionId: args.sessionId,
        shellId: args.shellId
    })?.adopted === true) {
        return true;
    }
    if (args.toolCallId === void 0 || args.toolCallId.length === 0 || args.toolCallId === args.shellId) {
        return false;
    }
    return args.registry.resolve({
        sessionId: args.sessionId,
        shellId: args.toolCallId
    })?.adopted === true;
}
export function createSurfaceAgentStoreConflictNoticeExecutor(options2) {
    return {
        async execute (ctx, args) {
            const request3 = conflictNoticeRequestToProto(args);
            const hopped = await hopAgentStore(options2, request3, ctx.signal);
            if (hopped === void 0 || hopped.status === "denied") {
                return deniedConflictNotice(args);
            }
            if (hopped.status !== "accepted" || hopped.result?.case !== "agentHostAgentStore") {
                return {
                    kind: "failed",
                    error: `agent_store hop ${hopped.status}`
                };
            }
            const payload = hopped.result.value.result;
            if (payload.case !== "conflictNotice") {
                return {
                    kind: "failed",
                    error: "agent_store hop returned a wrong arm"
                };
            }
            return protoConflictNoticeToTs(payload.value, args);
        }
    };
}
export async function hopAgentStoreExtraEnv(options2, args, signal) {
    const hopped = await hopAgentStore(options2, {
        operation: {
            case: "extraEnv",
            value: new AgentHostAgentStoreExtraEnvArgs({
                sessionId: options2.sessionId,
                ...args.conversationId === void 0 ? {} : {
                    conversationId: args.conversationId
                }
            })
        }
    }, signal);
    if (hopped?.status === "accepted" && hopped.result?.case === "agentHostAgentStore" && hopped.result.value.result.case === "extraEnv") {
        return {
            ...hopped.result.value.result.value.env
        };
    }
    return void 0;
}
export async function hopAgentStoreSkillRoots(options2, signal) {
    const hopped = await hopAgentStore(options2, {
        operation: {
            case: "skillRoots",
            value: new AgentHostAgentStoreSkillRootsArgs()
        }
    }, signal);
    if (hopped?.status === "accepted" && hopped.result?.case === "agentHostAgentStore" && hopped.result.value.result.case === "skillRoots") {
        return hopped.result.value.result.value;
    }
    return new AgentHostAgentStoreSkillRootsResult({
        skillDirs: [],
        userHomeDirectory: ""
    });
}
async function hopAgentStore(options2, request3, signal) {
    const target = options2.hub.resolveHopTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId),
        kind: "agent_host_agent_store"
    });
    if (target === void 0) {
        return void 0;
    }
    return options2.hub.invokeKind({
        kind: "agent_host_agent_store",
        sessionId: options2.sessionId,
        targetClientInstanceId: target,
        ...signal === void 0 ? {} : {
            signal
        },
        agentHostAgentStore: new AgentHostSurfaceAgentStoreRequest(request3)
    });
}
function deniedConflictNotice(args) {
    if (args.op === "ack") {
        return {
            kind: "acked",
            count: 0
        };
    }
    if (args.op === "release") {
        return {
            kind: "released",
            count: 0
        };
    }
    if (args.op === "noteDeferredEagerWrittenPaths") {
        return {
            kind: "noted",
            count: 0
        };
    }
    return {
        kind: "not-applicable"
    };
}
function conflictNoticeRequestToProto(args) {
    switch(args.op){
        case "syncAndPeek":
            return {
                operation: {
                    case: "conflictNoticeSyncAndPeek",
                    value: new AgentHostAgentStoreConflictNoticeSyncAndPeekArgs({
                        ...args.conversationId === void 0 ? {} : {
                            conversationId: args.conversationId
                        },
                        writtenPaths: [
                            ...args.writtenPaths ?? []
                        ],
                        ...args.timeoutMs === void 0 ? {} : {
                            timeoutMs: args.timeoutMs
                        },
                        ...args.eager === void 0 ? {} : {
                            eager: args.eager
                        }
                    })
                }
            };
        case "peek":
            return {
                operation: {
                    case: "conflictNoticePeek",
                    value: new AgentHostAgentStoreConflictNoticePeekArgs({
                        ...args.conversationId === void 0 ? {} : {
                            conversationId: args.conversationId
                        }
                    })
                }
            };
        case "ack":
            return {
                operation: {
                    case: "conflictNoticeAck",
                    value: new AgentHostAgentStoreConflictNoticeAckArgs({
                        eventIds: [
                            ...args.eventIds
                        ],
                        ...args.conversationId === void 0 ? {} : {
                            conversationId: args.conversationId
                        }
                    })
                }
            };
        case "release":
            return {
                operation: {
                    case: "conflictNoticeRelease",
                    value: new AgentHostAgentStoreConflictNoticeReleaseArgs({
                        eventIds: [
                            ...args.eventIds
                        ],
                        ...args.conversationId === void 0 ? {} : {
                            conversationId: args.conversationId
                        }
                    })
                }
            };
        default:
            return {
                operation: {
                    case: "conflictNoticeNoteDeferred",
                    value: new AgentHostAgentStoreConflictNoticeNoteDeferredArgs({
                        ...args.conversationId === void 0 ? {} : {
                            conversationId: args.conversationId
                        },
                        writtenPaths: [
                            ...args.writtenPaths
                        ]
                    })
                }
            };
    }
}
function protoConflictNoticeToTs(result, args) {
    switch(result.result.case){
        case "completed":
            return {
                kind: "completed",
                events: result.result.value.events.map(protoEventToTs),
                ...result.result.value.reminder === void 0 ? {} : {
                    reminder: result.result.value.reminder
                },
                ...result.result.value.gap === void 0 ? {} : {
                    gap: result.result.value.gap
                }
            };
        case "notApplicable":
            return {
                kind: "not-applicable"
            };
        case "mountPassive":
            return {
                kind: "mount-passive"
            };
        case "timedOut":
            return {
                kind: "timed-out",
                events: result.result.value.events.map(protoEventToTs),
                ...result.result.value.reminder === void 0 ? {} : {
                    reminder: result.result.value.reminder
                }
            };
        case "failed":
            return {
                kind: "failed",
                error: result.result.value.error
            };
        case "acked":
            return {
                kind: "acked",
                count: result.result.value.count
            };
        case "released":
            return {
                kind: "released",
                count: result.result.value.count
            };
        case "noted":
            return {
                kind: "noted",
                count: result.result.value.count
            };
        default:
            return deniedConflictNotice(args);
    }
}
function protoEventToTs(event) {
    return {
        v: event.v,
        eventId: event.eventId,
        journalEpoch: event.journalEpoch,
        seq: Number(event.seq),
        tsMs: Number(event.tsMs),
        kind: event.kind,
        ...event.storeId === void 0 ? {} : {
            storeId: event.storeId
        },
        ...event.originalRelPath === void 0 ? {} : {
            originalRelPath: event.originalRelPath
        },
        ...event.conflictRelPath === void 0 ? {} : {
            conflictRelPath: event.conflictRelPath
        },
        ...event.originalAbsPath === void 0 ? {} : {
            originalAbsPath: event.originalAbsPath
        },
        ...event.conflictAbsPath === void 0 ? {} : {
            conflictAbsPath: event.conflictAbsPath
        },
        ...event.preservedBytes === void 0 ? {} : {
            preservedBytes: Number(event.preservedBytes)
        },
        ...event.scopeKind === void 0 ? {} : {
            scopeKind: event.scopeKind
        },
        ...event.limitBytes === void 0 ? {} : {
            limitBytes: Number(event.limitBytes)
        },
        ...event.usageBytes === void 0 ? {} : {
            usageBytes: Number(event.usageBytes)
        },
        ...event.source === "local_sync" ? {
            source: "local_sync"
        } : {},
        ...event.remoteOnly === void 0 ? {} : {
            remoteOnly: event.remoteOnly
        }
    };
}
function mergeExtraEnv(sessionEnv, conversationEnv) {
    const merged = {
        ...sessionEnv ?? {},
        ...conversationEnv ?? {}
    };
    return Object.keys(merged).length > 0 ? merged : void 0;
}
export function createStitchedAgentStoreSession(options2, deps = defaultStitchedAgentStoreDeps()) {
    let sessionExtraEnv;
    let sessionHopGeneration = 0;
    let skillsContext = NO_AGENT_STORE_SKILLS;
    let skillsHopGeneration = 0;
    const conversationExtraEnv = new Map();
    const conversationHopGeneration = new Map();
    const startSessionExtraEnvHop = ()=>{
        const generation = ++sessionHopGeneration;
        void deps.hopExtraEnv(options2, {}).then((env)=>{
            if (generation !== sessionHopGeneration) {
                return;
            }
            if (env === void 0) {
                return;
            }
            sessionExtraEnv = env;
        });
    };
    const startConversationExtraEnvHop = (conversationId)=>{
        const generation = (conversationHopGeneration.get(conversationId) ?? 0) + 1;
        conversationHopGeneration.set(conversationId, generation);
        void deps.hopExtraEnv(options2, {
            conversationId
        }).then((env)=>{
            if (generation !== conversationHopGeneration.get(conversationId)) {
                return;
            }
            if (env === void 0) {
                return;
            }
            conversationExtraEnv.set(conversationId, env);
        });
    };
    const refreshSkills = ()=>{
        const generation = ++skillsHopGeneration;
        void deps.hopSkillRoots(options2).then((result)=>{
            if (generation !== skillsHopGeneration) {
                return;
            }
            skillsContext = {
                agentStoreSkillsDirs: [
                    ...result.skillDirs
                ],
                userHomeDirectory: result.userHomeDirectory
            };
        });
    };
    const refresh = ()=>{
        startSessionExtraEnvHop();
        refreshSkills();
    };
    refresh();
    return {
        extraEnvProvider: (_ctx, args)=>{
            const conversationId = args.conversationId?.trim();
            if (conversationId !== void 0 && conversationId.length > 0) {
                startConversationExtraEnvHop(conversationId);
                return mergeExtraEnv(sessionExtraEnv, conversationExtraEnv.get(conversationId));
            }
            return sessionExtraEnv;
        },
        getAgentStoreSkillsContext: ()=>skillsContext,
        refresh
    };
}
function resolveSurfaceOwner(args) {
    for (const sessionId of args.sessionIds){
        const trimmed = sessionId.trim();
        if (trimmed.length === 0) {
            continue;
        }
        const owner = args.resolveOwner(trimmed);
        if (owner !== void 0 && owner.length > 0) {
            return owner;
        }
    }
    return void 0;
}
function createSurfaceCloudSubagentRunner(options2) {
    return {
        async createOrResumeCloudSubagent (ctx, args) {
            const result = await invokeCloudSubagent(options2, args, {
                operation: {
                    case: "createOrResume",
                    value: new AgentHostSurfaceCloudSubagentCreateOrResume({
                        args
                    })
                }
            }, ctx.signal);
            if (result.status === "aborted") {
                throw new Error("cloud_subagent create_or_resume aborted");
            }
            if (result.status === "accepted" && result.result?.case === "cloudSubagent" && result.result.value.result.case === "createOrResume") {
                const agentId = result.result.value.result.value.agentId.trim();
                if (agentId.length > 0) {
                    return agentId;
                }
            }
            throw new Error(cloudSubagentHopError(result, "create_or_resume"));
        },
        async runCloudSubagent (ctx, agentId, args) {
            const result = await invokeCloudSubagent(options2, args, {
                operation: {
                    case: "run",
                    value: new AgentHostSurfaceCloudSubagentRun({
                        agentId,
                        args
                    })
                }
            }, ctx.signal);
            if (result.status === "aborted") {
                return {
                    status: "aborted"
                };
            }
            if (result.status === "accepted" && result.result?.case === "cloudSubagent" && result.result.value.result.case === "run") {
                return toHostRunOutcome(result.result.value.result.value);
            }
            return {
                status: "error",
                error: cloudSubagentHopError(result, "run")
            };
        }
    };
}
async function invokeCloudSubagent(options2, args, request3, signal) {
    const sessionId = args.parentConversationId?.trim() || args.rootParentConversationId?.trim() || "";
    const owner = resolveSurfaceOwner({
        resolveOwner: options2.resolveOwner,
        sessionIds: [
            args.parentConversationId ?? "",
            args.rootParentConversationId ?? ""
        ]
    });
    if (owner === void 0) {
        return {
            status: "denied"
        };
    }
    const rootSessionId = args.rootParentConversationId?.trim() ?? "";
    return options2.hub.invokeKind({
        kind: "cloud_subagent",
        sessionId,
        ...rootSessionId.length === 0 ? {} : {
            rootSessionId
        },
        targetClientInstanceId: owner,
        ...signal === void 0 ? {} : {
            signal
        },
        cloudSubagent: new AgentHostSurfaceCloudSubagentRequest(request3)
    });
}
function cloudSubagentHopError(result, operation) {
    if (result.status === "denied") {
        return CLOUD_SUBAGENT_UNBOUND;
    }
    if (result.status === "timeout") {
        return `cloud_subagent ${operation} timed out`;
    }
    if (result.status === "unimplemented") {
        return `cloud_subagent ${operation} is unimplemented`;
    }
    if (result.status === "aborted") {
        return `cloud_subagent ${operation} aborted`;
    }
    return `cloud_subagent ${operation} returned no result`;
}
function createSurfaceRequiredGlobalCommandsResolver(options2) {
    return async (query)=>{
        const owner = resolveSurfaceOwner({
            resolveOwner: options2.resolveOwner,
            sessionIds: [
                query.parentSessionId,
                query.rootSessionId
            ]
        });
        if (owner === void 0) {
            return void 0;
        }
        const rootSessionId = query.rootSessionId.trim();
        const result = await options2.hub.invokeKind({
            kind: "required_global_commands",
            sessionId: query.parentSessionId.trim() || rootSessionId,
            ...rootSessionId.length === 0 ? {} : {
                rootSessionId
            },
            targetClientInstanceId: owner,
            ...query.ctx.signal === void 0 ? {} : {
                signal: query.ctx.signal
            },
            requiredGlobalCommands: new AgentHostSurfaceRequiredGlobalCommandsRequest({
                subagentType: query.subagentType,
                ...rootSessionId.length === 0 ? {} : {
                    rootSessionId
                }
            })
        });
        if (result.status !== "accepted" || result.result?.case !== "requiredGlobalCommands") {
            return void 0;
        }
        return result.result.value.commands.map((command)=>({
                name: command.name,
                content: command.content
            }));
    };
}
function createSurfaceSavedModelParametersResolver(options2) {
    return async (query)=>{
        const owner = resolveSurfaceOwner({
            resolveOwner: options2.resolveOwner,
            sessionIds: [
                query.parentSessionId,
                query.rootSessionId
            ]
        });
        if (owner === void 0) {
            return void 0;
        }
        const rootSessionId = query.rootSessionId.trim();
        const result = await options2.hub.invokeKind({
            kind: "saved_model_parameters",
            sessionId: query.parentSessionId.trim() || rootSessionId,
            ...rootSessionId.length === 0 ? {} : {
                rootSessionId
            },
            targetClientInstanceId: owner,
            ...query.ctx.signal === void 0 ? {} : {
                signal: query.ctx.signal
            },
            savedModelParameters: new AgentHostSurfaceSavedModelParametersRequest({
                modelId: query.modelId,
                ...query.maxMode === void 0 ? {} : {
                    maxMode: query.maxMode
                },
                ...rootSessionId.length === 0 ? {} : {
                    rootSessionId
                }
            })
        });
        if (result.status !== "accepted" || result.result?.case !== "savedModelParameters") {
            return void 0;
        }
        return result.result.value.parameters.map((parameter)=>({
                id: parameter.id,
                value: parameter.value
            }));
    };
}
export function bindCloudSubagentHostOptions(args) {
    const resolveOwner = args.resolveOwner;
    const placement = args.nativeCloudSubagents ? {
        nativeCloudSubagents: {}
    } : {
        cloudSubagentRunner: createSurfaceCloudSubagentRunner({
            hub: args.hub,
            resolveOwner
        })
    };
    return {
        ...placement,
        resolveSavedModelParameters: createSurfaceSavedModelParametersResolver({
            hub: args.hub,
            resolveOwner
        }),
        resolveRequiredGlobalCommands: createSurfaceRequiredGlobalCommandsResolver({
            hub: args.hub,
            resolveOwner
        }),
        ...args.sessionStorage === void 0 ? {} : {
            durableSubagentInvocations: createDaemonDurableSubagentInvocationStore(args.sessionStorage.records)
        }
    };
}
export function drainHopChainRejection(_error) {}
export async function rebuildPluginContentFromDescriptor(descriptor) {
    const identifier2 = protoToPluginIdentifier(descriptor.identifier);
    const configuredVariables = {
        ...descriptor.configuredVariables
    };
    if (descriptor.loadError !== void 0 && descriptor.loadError.length > 0) {
        return emptyPluginContent(identifier2, descriptor);
    }
    try {
        if (identifier2.source === "claude-plugin") {
            const loaded2 = await loadClaudePluginFromPath(descriptor.installPath, identifier2.sourceInfo);
            return {
                ...loaded2,
                identifier: identifier2,
                installPath: descriptor.installPath
            };
        }
        const marketplaceInfo = identifier2.source === "cursor-first-party" || identifier2.source === "cursor-third-party" ? {
            ...identifier2.sourceInfo,
            configuredVariables
        } : void 0;
        const loaded = await loadPluginContentFromDir(descriptor.installPath, descriptor.displayName || pluginDisplayName(identifier2), marketplaceInfo, {
            configuredVariables
        });
        return {
            identifier: identifier2,
            installPath: descriptor.installPath,
            ...descriptor.loadError === void 0 ? {} : {
                loadError: descriptor.loadError
            },
            displayName: descriptor.displayName || loaded.displayName,
            description: descriptor.description || loaded.description,
            authorName: descriptor.authorName || loaded.authorName,
            version: descriptor.version || loaded.version,
            skills: loaded.skills,
            rules: loaded.rules,
            agents: loaded.agents,
            commands: loaded.commands,
            mcpConfig: loaded.mcpConfig ?? void 0,
            capabilities: loaded.capabilities,
            variablesSchema: loaded.variablesSchema,
            hooks: loaded.hooks
        };
    } catch (error3) {
        return {
            ...emptyPluginContent(identifier2, descriptor),
            loadError: error3 instanceof Error ? error3.message : String(error3)
        };
    }
}
function emptyPluginContent(identifier2, descriptor) {
    return {
        identifier: identifier2,
        installPath: descriptor.installPath,
        ...descriptor.loadError === void 0 ? {} : {
            loadError: descriptor.loadError
        },
        ...descriptor.displayName === void 0 ? {} : {
            displayName: descriptor.displayName
        },
        ...descriptor.version === void 0 ? {} : {
            version: descriptor.version
        },
        ...descriptor.description === void 0 ? {} : {
            description: descriptor.description
        },
        ...descriptor.authorName === void 0 ? {} : {
            authorName: descriptor.authorName
        },
        skills: [],
        rules: [],
        agents: [],
        commands: [],
        capabilities: []
    };
}
function pluginDisplayName(identifier2) {
    return identifier2.sourceInfo.name;
}
function protoToPluginIdentifier(proto) {
    if (proto === void 0) {
        return {
            source: "user-local",
            sourceInfo: {
                name: "unknown",
                localPath: ""
            }
        };
    }
    switch(proto.source){
        case AgentHostPluginSource.CLAUDE_PLUGIN:
            {
                const info2 = proto.sourceInfo.case === "claudePlugin" ? proto.sourceInfo.value : void 0;
                const sourceInfo = {
                    name: info2?.name ?? "",
                    sourceType: protoCcSourceTypeToTs(info2?.sourceType),
                    raw: info2?.raw ?? "",
                    ...info2?.marketplace === void 0 ? {} : {
                        marketplace: info2.marketplace
                    },
                    ...info2?.githubRepo === void 0 ? {} : {
                        githubRepo: info2.githubRepo
                    },
                    ...info2?.gitUrl === void 0 ? {} : {
                        gitUrl: info2.gitUrl
                    },
                    ...info2?.localPath === void 0 ? {} : {
                        localPath: info2.localPath
                    },
                    ...info2?.version === void 0 ? {} : {
                        version: info2.version
                    }
                };
                return {
                    source: "claude-plugin",
                    sourceInfo
                };
            }
        case AgentHostPluginSource.CURSOR_FIRST_PARTY:
        case AgentHostPluginSource.CURSOR_THIRD_PARTY:
            {
                const info2 = proto.sourceInfo.case === "cursorMarketplace" ? proto.sourceInfo.value : void 0;
                const sourceInfo = {
                    name: info2?.name ?? "",
                    version: info2?.version ?? "",
                    ...info2?.pluginDbId === void 0 ? {} : {
                        pluginDbId: info2.pluginDbId
                    },
                    configuredVariables: {
                        ...info2?.configuredVariables ?? {}
                    },
                    ...info2?.marketplace === void 0 ? {} : {
                        marketplace: info2.marketplace
                    },
                    ...info2?.marketplaceDbId === void 0 ? {} : {
                        marketplaceDbId: info2.marketplaceDbId
                    },
                    ...info2?.isTeamRequired === void 0 ? {} : {
                        isTeamRequired: info2.isTeamRequired
                    }
                };
                return {
                    source: proto.source === AgentHostPluginSource.CURSOR_FIRST_PARTY ? "cursor-first-party" : "cursor-third-party",
                    sourceInfo
                };
            }
        case AgentHostPluginSource.EXTENSION:
            {
                const info2 = proto.sourceInfo.case === "extension" ? proto.sourceInfo.value : void 0;
                const sourceInfo = {
                    name: info2?.name ?? "",
                    localPath: info2?.localPath ?? "",
                    extensionId: info2?.extensionId ?? ""
                };
                return {
                    source: "extension",
                    sourceInfo
                };
            }
        default:
            {
                const info2 = proto.sourceInfo.case === "userLocal" ? proto.sourceInfo.value : void 0;
                const sourceInfo = {
                    name: info2?.name ?? "",
                    localPath: info2?.localPath ?? ""
                };
                return {
                    source: "user-local",
                    sourceInfo
                };
            }
    }
}
function protoCcSourceTypeToTs(value) {
    switch(value){
        case AgentHostCCPluginSourceType.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_GITHUB:
            return "github";
        case AgentHostCCPluginSourceType.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_URL:
            return "url";
        case AgentHostCCPluginSourceType.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_LOCAL:
            return "local";
        default:
            return "marketplace";
    }
}
export function protoToLoadFailure(failure2) {
    return {
        pluginName: failure2.pluginName,
        errorMessage: failure2.errorMessage,
        errorType: protoFailureTypeToTs(failure2.errorType),
        ...failure2.pluginId === void 0 ? {} : {
            pluginId: failure2.pluginId
        },
        ...failure2.pluginDbId === void 0 ? {} : {
            pluginDbId: failure2.pluginDbId
        },
        ...failure2.marketplaceName === void 0 ? {} : {
            marketplaceName: failure2.marketplaceName
        }
    };
}
function protoFailureTypeToTs(value) {
    switch(value){
        case AgentHostPluginLoadFailureErrorType.CLONE:
            return "clone";
        case AgentHostPluginLoadFailureErrorType.INSTALL:
            return "install";
        case AgentHostPluginLoadFailureErrorType.PARSE:
            return "parse";
        case AgentHostPluginLoadFailureErrorType.MANIFEST:
            return "manifest";
        case AgentHostPluginLoadFailureErrorType.TIMEOUT:
            return "timeout";
        default:
            return "unknown";
    }
}
export function createStitchedPluginSources(options2) {
    const pluginsService = new HopPluginsService({
        hub: options2.hub,
        sessionId: options2.sessionId,
        resolveOwner: options2.resolveOwner
    });
    const pluginSkills = new CursorPluginsAgentSkillsService(createContext(), ()=>IMPORT_THIRD_PARTY, void 0, pluginsService);
    const pluginSubagents = new CursorPluginsSubagentsService(()=>IMPORT_THIRD_PARTY, pluginsService);
    const getAgentStoreSkillsContext = options2.getAgentStoreSkillsContext ?? (()=>NO_AGENT_STORE_SKILLS);
    const cursorRulesService = new MergedCursorRulesService([
        options2.diskRules,
        pluginSkills
    ], getAgentStoreSkillsContext);
    const subagentsService = new MergedSubagentsService([
        options2.diskSubagents,
        pluginSubagents
    ]);
    const agentSkillsService = new MergedAgentSkillsService([
        options2.diskSkills,
        pluginSkills
    ], ()=>[], ()=>({
            ...getAgentStoreSkillsContext(),
            workspacePaths: options2.workspacePaths ?? []
        }));
    return {
        pluginsService,
        cursorRulesService,
        subagentsService,
        agentSkillsService,
        getAgentSkills: (ctx)=>agentSkillsService.getAllAgentSkills(ctx),
        reloadFromSurface (_ctx) {
            pluginsService.enableSurfaceHops();
        }
    };
}
export function createSurfaceFileChangeTracker(options2) {
    const tracker = new FileChangeTracker(options2.workspacePath);
    let disposed = false;
    const unsubscribe = tracker.subscribe((change)=>{
        if (change === void 0) {
            return;
        }
        const target = options2.hub.resolveCallbackTarget({
            sessionId: options2.sessionId,
            persistedOwner: options2.resolveOwner(options2.sessionId)
        });
        if (target === void 0 || target.length === 0) {
            return;
        }
        void options2.hub.invokeKind({
            kind: "file_change_notify",
            sessionId: options2.sessionId,
            rootSessionId: options2.rootSessionId,
            targetClientInstanceId: target,
            fileChangeNotify: new AgentHostSurfaceFileChangeNotify({
                path: change.path,
                ...change.before === void 0 ? {} : {
                    before: change.before
                },
                ...change.after === void 0 ? {} : {
                    after: change.after
                },
                toolCallId: change.metadata?.toolCallId ?? ""
            })
        });
    });
    return {
        tracker,
        dispose () {
            if (disposed) {
                return;
            }
            disposed = true;
            unsubscribe();
            tracker.dispose();
        }
    };
}
export async function runAgentDataCleanupIfDue(options2) {
    await (0, import_promises56.mkdir)(options2.projectsDir, {
        recursive: true
    });
    const projectsDir = await (0, import_promises56.realpath)(options2.projectsDir);
    const nowMs2 = Date.now();
    const day = new Date(nowMs2).toISOString().slice(0, 10);
    const claimPath = (0, import_node_path102.join)(projectsDir, `.agent-data-cleanup-${day}`);
    try {
        const claim = await (0, import_promises56.open)(claimPath, "wx", 384);
        await claim.close();
    } catch (error3) {
        if (error3 instanceof Error && "code" in error3 && error3.code === "EEXIST") {
            return void 0;
        }
        throw error3;
    }
    return await cleanupOldAgentData({
        projectsDir,
        nowMs: nowMs2
    });
}
export function scheduleAgentDataCleanup(options2) {
    const run = options2.run ?? runAgentDataCleanupIfDue;
    const initialDelayMs = options2.initialDelayMs ?? AGENT_DATA_CLEANUP_INITIAL_DELAY_MS;
    const intervalMs = options2.intervalMs ?? DEFAULT_AGENT_DATA_CLEANUP_INTERVAL_MS;
    const setTimeoutFn = options2.setTimeoutFn ?? setTimeout;
    const setIntervalFn = options2.setIntervalFn ?? setInterval;
    const clearTimeoutFn = options2.clearTimeoutFn ?? clearTimeout;
    const clearIntervalFn = options2.clearIntervalFn ?? clearInterval;
    let disposed = false;
    const runCleanup = async ()=>{
        try {
            const startedAt = Date.now();
            const result = await run({
                projectsDir: options2.projectsDir
            });
            if (disposed || result === void 0) {
                return;
            }
            try {
                options2.onCompleted?.(result, {
                    projectsDir: options2.projectsDir,
                    durationMs: Date.now() - startedAt
                });
            } catch  {}
        } catch (error3) {
            if (disposed) {
                return;
            }
            try {
                options2.onFailed?.(error3, {
                    projectsDir: options2.projectsDir
                });
            } catch  {}
        }
    };
    const initialTimeout = setTimeoutFn(()=>{
        if (disposed) {
            return;
        }
        void runCleanup();
    }, initialDelayMs);
    const interval = setIntervalFn(()=>{
        if (disposed) {
            return;
        }
        void runCleanup();
    }, intervalMs);
    return ()=>{
        if (disposed) {
            return;
        }
        disposed = true;
        clearTimeoutFn(initialTimeout);
        clearIntervalFn(interval);
    };
}
export function isMissingPathError2(error3) {
    return error3 instanceof Error && "code" in error3 && (error3.code === "ENOENT" || error3.code === "ENOTDIR");
}
export function canonicalizeWorkspaceRoot(path64) {
    try {
        return (0, import_node_fs45.existsSync)(path64) ? (0, import_node_fs45.realpathSync)(path64) : (0, import_node_path103.resolve)(path64);
    } catch  {
        return (0, import_node_path103.resolve)(path64);
    }
}
export function createDenyAllPermissionsProvider() {
    return {
        getPermissions: async ()=>({
                allow: [],
                deny: [],
                approvalMode: "ask-every-time",
                readBoundary: "workspace",
                userConfiguredPolicy: {
                    type: "workspace_readonly"
                }
            }),
        updatePermissions: async ()=>{}
    };
}
export function clampDenyAllReadPermissions(permissions) {
    return {
        async getPermissions () {
            const perms = await permissions.getPermissions();
            return {
                ...perms,
                readBoundary: "workspace",
                approvalMode: perms.approvalMode === "unrestricted" ? "ask-every-time" : perms.approvalMode
            };
        },
        updatePermissions: (transformer)=>permissions.updatePermissions(transformer)
    };
}
export function createEmptyTeamSettingsService() {
    return new CachedTeamSettingsService({
        getTeamAdminSettings: async ()=>void 0,
        getTeamRepos: async ()=>void 0
    });
}
export function denyInsteadOfPrompt(reason) {
    if (reason.type === "needsApproval") {
        return {
            type: "permissionsConfig",
            isReadonly: true
        };
    }
    return reason;
}
function validateWorkspacePaths(workspacePaths) {
    for (const workspacePath of workspacePaths){
        if (typeof workspacePath !== "string" || workspacePath.trim().length === 0) {
            throw new Error("agent-host-exec workspacePaths entries must be non-empty absolute paths");
        }
        if (!(0, import_node_path103.isAbsolute)(workspacePath)) {
            throw new Error(`agent-host-exec workspace path must be absolute: ${workspacePath}`);
        }
    }
    return workspacePaths;
}
function validateProjectDir(projectDir) {
    if (typeof projectDir !== "string" || projectDir.trim().length === 0) {
        throw new Error("agent-host-exec requires a non-empty projectDir");
    }
    if (!(0, import_node_path103.isAbsolute)(projectDir)) {
        throw new Error(`agent-host-exec projectDir must be absolute: ${projectDir}`);
    }
    return projectDir;
}
function cacheKeyForWorkspaceRoots(workspacePaths, gitExecutor, teamSettings) {
    const roots = [
        ...workspacePaths
    ].map(canonicalizeWorkspaceRoot).sort();
    const teamPart = teamSettings === void 0 ? "no-team" : `team:${getObjectId(teamSettings)}`;
    return `${roots.join("\0")}::${Object.prototype.toString.call(gitExecutor)}::${getObjectId(gitExecutor)}::${teamPart}`;
}
function getObjectId(value) {
    const existing = objectIds.get(value);
    if (existing !== void 0) {
        return existing;
    }
    const id = nextObjectId++;
    objectIds.set(value, id);
    return id;
}
function definedValuesOnly(value) {
    if (value === void 0) {
        return {};
    }
    const result = {};
    for (const key of Object.keys(value)){
        const entry = value[key];
        if (entry !== void 0) {
            result[key] = entry;
        }
    }
    return result;
}
export function createHeadlessDecisionProvider(policy) {
    switch(policy){
        case "deny":
        case "fail-closed":
            return new DenyPendingDecisionProvider();
        case "auto-approve":
            return new AutoApprovePendingDecisionProvider();
        default:
            {
                const _exhaustive = policy;
                return _exhaustive;
            }
    }
}
function createDenyNetworkFetchExecutor() {
    return createDeniedFetchExecutor("Network fetch is disabled by agent-host-exec headless defaults");
}
function createPermissionsGatedNetworkFetchExecutor(fetchExecutor, permissionsService) {
    return {
        async execute (ctx, args, options2) {
            try {
                const allowed = await permissionsService.isWebFetchFullyAllowlisted(ctx, {
                    url: args.url
                });
                if (allowed) {
                    return fetchExecutor.execute(ctx, args, options2);
                }
            } catch  {}
            return createDeniedFetchResult(args, "Network fetch is not allowed by headless permissions");
        }
    };
}
function createDeniedFetchExecutor(error3) {
    return {
        async execute (_ctx, args) {
            return createDeniedFetchResult(args, error3);
        }
    };
}
function createDeniedFetchResult(args, error3) {
    return new FetchResult({
        result: {
            case: "error",
            value: new FetchError({
                url: args.url,
                error: error3
            })
        }
    });
}
function createHeadlessCursorIgnoreLsExecutor(inner, ignoreService) {
    return {
        async execute (ctx, args, options2) {
            const result = await inner.execute(ctx, args, options2);
            const root = directoryTreeRootFromLsResult(result);
            if (root !== void 0) {
                await omitCursorIgnoredSubtree(root, ignoreService, true);
            }
            return result;
        }
    };
}
function directoryTreeRootFromLsResult(result) {
    switch(result.result.case){
        case "success":
        case "timeout":
            return result.result.value.directoryTreeRoot;
        default:
            return void 0;
    }
}
async function omitCursorIgnoredSubtree(node, ignoreService, isRoot) {
    if (!isRoot) {
        const resolvedDir = await resolvePathForIgnoreService(node.absPath);
        if (resolvedDir === null || await ignoreService.isCursorIgnored(resolvedDir)) {
            return false;
        }
    }
    const keptFiles = [];
    for (const file of node.childrenFiles){
        const filePath = (0, import_node_path104.join)(node.absPath, file.name);
        const resolved = await resolvePathForIgnoreService(filePath);
        if (resolved === null) {
            continue;
        }
        if (await ignoreService.isCursorIgnored(resolved)) {
            continue;
        }
        keptFiles.push(file);
    }
    node.childrenFiles = keptFiles;
    const dirKeep = await Promise.all(node.childrenDirs.map(async (dir)=>({
            dir,
            keep: await omitCursorIgnoredSubtree(dir, ignoreService, false)
        })));
    node.childrenDirs = dirKeep.filter((entry)=>entry.keep).map((entry)=>entry.dir);
    if (!node.childrenWereProcessed) {
        node.fullSubtreeExtensionCounts = {};
        node.numFiles = 0;
    }
    if (!isRoot && node.childrenWereProcessed && node.childrenFiles.length === 0 && node.childrenDirs.length === 0) {
        return false;
    }
    return true;
}
function createEmptyPermissionsProvider() {
    return {
        getPermissions: async ()=>({
                allow: [],
                deny: [],
                approvalMode: "ask-every-time",
                userConfiguredPolicy: {
                    type: "workspace_readonly"
                }
            }),
        updatePermissions: async ()=>{}
    };
}
export function createEmptyTeamSettingsService2() {
    return new CachedTeamSettingsService({
        getTeamAdminSettings: async ()=>void 0,
        getTeamRepos: async ()=>void 0
    });
}
function resolveHeadlessPermissionsService(options2) {
    if (options2.policy.mode === "deny-all") {
        return new DenyPermissionsService(options2.workspacePaths, options2.ignoreService, {
            permissions: options2.policy.permissions,
            teamSettings: options2.policy.teamSettings,
            perUserSandboxConfigPath: options2.policy.perUserSandboxConfigPath
        });
    }
    return new InteractivePermissionsService(options2.ignoreService, options2.policy.provider, options2.policy.permissions ?? createEmptyPermissionsProvider(), options2.policy.teamSettings ?? createEmptyTeamSettingsService2(), [
        ...options2.workspacePaths
    ], false, {
        perUserSandboxConfigPath: options2.policy.perUserSandboxConfigPath
    });
}
function runfilesRoots() {
    const roots = [];
    for (const candidate of [
        process.env.RUNFILES_DIR,
        process.env.TEST_SRCDIR
    ]){
        if (candidate !== void 0 && candidate !== "" && !roots.includes(candidate)) {
            roots.push(candidate);
        }
    }
    return roots;
}
function isSpawnableFile(candidate) {
    try {
        if (!(0, import_node_fs46.statSync)(candidate).isFile()) {
            return false;
        }
        (0, import_node_fs46.accessSync)(candidate, import_node_fs46.constants.X_OK);
        return true;
    } catch  {
        return false;
    }
}
function resolveSpawnableRipgrep(candidate) {
    try {
        const st2 = (0, import_node_fs46.statSync)(candidate);
        if (st2.isFile()) {
            (0, import_node_fs46.accessSync)(candidate, import_node_fs46.constants.X_OK);
            return candidate;
        }
        if (!st2.isDirectory()) {
            return void 0;
        }
    } catch  {
        return void 0;
    }
    const nestedNames = process.platform === "win32" ? [
        "rg.exe",
        "ripgrep.exe",
        "rg",
        "ripgrep"
    ] : [
        "rg",
        "ripgrep"
    ];
    for (const name17 of nestedNames){
        const nested = (0, import_node_path105.join)(candidate, name17);
        if (isSpawnableFile(nested)) {
            return nested;
        }
    }
    return void 0;
}
function resolveRipgrepFromBazelRunfiles() {
    const rgRlocation = process.env.CURSOR_RIPGREP_RLOCATION;
    if (rgRlocation === void 0 || rgRlocation === "") {
        return void 0;
    }
    for (const runfilesDir of runfilesRoots()){
        const resolved = resolveSpawnableRipgrep((0, import_node_path105.join)(runfilesDir, rgRlocation));
        if (resolved !== void 0) {
            return resolved;
        }
    }
    return void 0;
}
function ensureRipgrepConfigured(preferredPath) {
    if (preferredPath) {
        try {
            if ((0, import_node_fs46.statSync)(preferredPath).isDirectory()) {
                const nested = resolveSpawnableRipgrep(preferredPath);
                if (nested !== void 0) {
                    configureRipgrepPath(nested);
                }
                return;
            }
        } catch  {}
        configureRipgrepPath(preferredPath);
        return;
    }
    const fromBazelRunfiles = resolveRipgrepFromBazelRunfiles();
    if (fromBazelRunfiles !== void 0) {
        configureRipgrepPath(fromBazelRunfiles);
        return;
    }
    if (isRipgrepConfigured()) {
        return;
    }
    const rgName = process.platform === "win32" ? "rg.exe" : "rg";
    const scriptPath = process.argv[1];
    if (scriptPath !== void 0) {
        const colocated = (0, import_node_path105.join)((0, import_node_path105.dirname)(scriptPath), rgName);
        if (isSpawnableFile(colocated)) {
            configureRipgrepPath(colocated);
            return;
        }
    }
    if (process.platform !== "win32") {
        const systemPaths = [
            "/usr/bin/rg",
            "/usr/local/bin/rg",
            "/home/linuxbrew/.linuxbrew/bin/rg",
            "/opt/homebrew/bin/rg"
        ];
        const homeDir = process.env.HOME;
        if (homeDir) {
            systemPaths.push((0, import_node_path105.join)(homeDir, ".cargo", "bin", "rg"));
        }
        for (const candidate of systemPaths){
            if (isSpawnableFile(candidate)) {
                configureRipgrepPath(candidate);
                return;
            }
        }
    }
    const fromPath = resolveRipgrepFromPath();
    if (fromPath) {
        configureRipgrepPath(fromPath);
    }
}
function requirePairedPermissionOverrides(layer) {
    const hasPermissions = layer.permissionsService !== void 0;
    const hasDecisions = layer.pendingDecisionStore !== void 0;
    if (hasPermissions !== hasDecisions) {
        throw new Error(UNPAIRED_PERMISSION_OVERRIDE_ERROR);
    }
    if (layer.permissionsService === void 0 || layer.pendingDecisionStore === void 0) {
        return void 0;
    }
    return {
        permissionsService: layer.permissionsService,
        pendingDecisionStore: layer.pendingDecisionStore
    };
}
function createFactoryIgnoreService(gitExecutor, workspacePaths, teamSettings) {
    const ignoreService = new LazyIgnoreService(gitExecutor, teamSettings, [
        ...workspacePaths
    ]);
    const probeRoot = workspacePaths[0];
    if (probeRoot !== void 0) {
        const probePath = unsafeMintResolvedIgnorePath(probeRoot);
        void ignoreService.isGitIgnored(probePath).catch((error3)=>{
            logger142.error(createContext(), "ignore service initialization failed", error3 instanceof Error ? error3 : new Error(String(error3)));
        });
    }
    return ignoreService;
}
export function createAgentHostExec(options2) {
    if (options2.configureSession === void 0) {
        validateWorkspacePaths(options2.workspacePaths ?? []);
        validateProjectDir(options2.projectDir ?? "");
    } else if ((options2.workspacePaths === void 0 || options2.workspacePaths.length === 0) && (options2.projectDir === void 0 || options2.projectDir.trim().length === 0)) {} else {
        if (options2.workspacePaths !== void 0 && options2.workspacePaths.length > 0) {
            validateWorkspacePaths(options2.workspacePaths);
        }
        if (options2.projectDir !== void 0 && options2.projectDir.trim().length > 0) {
            validateProjectDir(options2.projectDir);
        }
    }
    const factoryWorkspacePaths = options2.workspacePaths === void 0 || options2.workspacePaths.length === 0 ? void 0 : validateWorkspacePaths(options2.workspacePaths);
    const factoryProjectDir = options2.projectDir === void 0 || options2.projectDir.trim().length === 0 ? void 0 : validateProjectDir(options2.projectDir);
    ensureRipgrepConfigured(options2.ripgrepPath);
    const ignoreServiceCache = new Map();
    let disposed = false;
    const createResources2 = (args)=>{
        if (disposed) {
            throw new Error("createAgentHostExec has been disposed");
        }
        const session = options2.configureSession?.(args);
        const workspacePaths = validateWorkspacePaths(session?.workspacePaths ?? factoryWorkspacePaths ?? []);
        const permissionWorkspacePaths = validateWorkspacePaths(session?.permissionWorkspacePaths ?? workspacePaths);
        const projectDir = validateProjectDir(session?.projectDir ?? factoryProjectDir ?? "");
        const overrides = definedValuesOnly(session?.overrides);
        const resourceDefaults = definedValuesOnly(options2.resourceDefaults);
        const teamSettings = session?.permissions?.teamSettings ?? options2.permissions?.teamSettings;
        let ignoreService = overrides.ignoreService ?? resourceDefaults.ignoreService;
        if (ignoreService === void 0) {
            const cacheKey2 = cacheKeyForWorkspaceRoots(workspacePaths, args.gitExecutor, teamSettings);
            ignoreService = ignoreServiceCache.get(cacheKey2);
            if (ignoreService === void 0) {
                ignoreService = createFactoryIgnoreService(args.gitExecutor, workspacePaths, teamSettings);
                ignoreServiceCache.set(cacheKey2, ignoreService);
            }
        }
        if (session?.permissions !== void 0 && (overrides.permissionsService !== void 0 || overrides.pendingDecisionStore !== void 0)) {
            throw new Error(MIXED_PERMISSION_POLICY_ERROR);
        }
        const pairedPermissionOverrides = session?.permissions === void 0 ? requirePairedPermissionOverrides(overrides) ?? requirePairedPermissionOverrides(resourceDefaults) : void 0;
        const permissionsPolicy = session?.permissions ?? (pairedPermissionOverrides === void 0 ? options2.permissions ?? {
            mode: "deny-all"
        } : void 0);
        const pendingDecisionStore = pairedPermissionOverrides?.pendingDecisionStore ?? (permissionsPolicy?.mode === "interactive" ? permissionsPolicy.provider : createHeadlessDecisionProvider("deny"));
        const useStockRipgrepIgnoreAdapter = pairedPermissionOverrides === void 0 && permissionsPolicy?.mode !== "interactive";
        const resourceIgnoreService = useStockRipgrepIgnoreAdapter ? new HeadlessRipgrepIgnoreAdapter(ignoreService) : ignoreService;
        const resolvedPermissionsService = pairedPermissionOverrides?.permissionsService ?? resolveHeadlessPermissionsService({
            policy: permissionsPolicy ?? {
                mode: "deny-all"
            },
            ignoreService,
            workspacePaths: permissionWorkspacePaths
        });
        const permissionsService = session?.wrapPermissionsService?.(resolvedPermissionsService) ?? resolvedPermissionsService;
        const primaryWorkspacePath = workspacePaths[0] ?? projectDir;
        const headlessDefaults = {
            pendingDecisionStore,
            fileChangeTracker: new FileChangeTracker(primaryWorkspacePath),
            gitExecutor: args.gitExecutor,
            ignoreService: resourceIgnoreService,
            grepProvider: emptyGrepProvider,
            permissionsService,
            workspacePaths: [
                ...workspacePaths
            ],
            diagnosticsProvider: new NoopDiagnosticsProvider(),
            mcpLease: args.mcpLease,
            cursorRulesService: new NoopCursorRulesService(),
            subagentsService: new NoopSubagentsService(),
            repositoryProvider: new NoopCodebaseReferenceProvider(),
            projectDir,
            backgroundWorkRegistry: args.backgroundWorkRegistry,
            mcpMetaToolEnabled: true,
            _defaultSandboxPolicy: {
                type: "workspace_readonly"
            },
            useStreamingRead: ()=>false
        };
        const provider = new LocalResourceProvider({
            ...headlessDefaults,
            ...resourceDefaults,
            ...overrides,
            workspacePaths: [
                ...workspacePaths
            ],
            projectDir,
            gitExecutor: args.gitExecutor,
            mcpLease: args.mcpLease,
            backgroundWorkRegistry: args.backgroundWorkRegistry,
            wakeupOwnerConversationId: args.rootSessionId,
            pendingDecisionStore,
            permissionsService,
            ignoreService: resourceIgnoreService,
            rebuildRequestContextOnRulesChange: true
        });
        const networkPolicy = options2.network ?? "deny";
        if (networkPolicy !== "inherit") {
            const fetchExecutor = networkPolicy === "deny" ? createDenyNetworkFetchExecutor() : createPermissionsGatedNetworkFetchExecutor(provider.get(fetchExecutorResource), permissionsService);
            provider.register(fetchExecutorResource, fetchExecutor);
        }
        if (useStockRipgrepIgnoreAdapter) {
            provider.register(lsExecutorResource, createHeadlessCursorIgnoreLsExecutor(provider.get(lsExecutorResource), resourceIgnoreService));
        }
        let overlay2;
        try {
            overlay2 = options2.wrapResources?.({
                args,
                provider
            });
        } catch (error3) {
            void provider.dispose().catch((cleanupError)=>{
                logger142.error(createContext(), "provider cleanup after wrapResources failure", cleanupError);
            });
            throw error3;
        }
        const accessor = overlay2?.accessor ?? provider;
        return {
            register: (resource, value)=>provider.register(resource, value),
            get: (resource)=>accessor.get(resource),
            entries: ()=>accessor.entries(),
            dispose: async ()=>{
                let firstError;
                try {
                    await overlay2?.dispose?.();
                } catch (error3) {
                    firstError = error3;
                }
                try {
                    await provider.dispose();
                } catch (error3) {
                    firstError ??= error3;
                }
                if (firstError !== void 0) {
                    throw firstError;
                }
            }
        };
    };
    return {
        createResources: createResources2,
        async dispose () {
            disposed = true;
            ignoreServiceCache.clear();
        }
    };
}
export function createHeadlessDiskHookExecutor(options2) {
    if (!isHeadlessWorkspaceTrusted(options2)) {
        return {
            hookExecutor: UNTRUSTED_WORKSPACE_HOOK_EXECUTOR,
            hooksConfig: void 0
        };
    }
    const loaded = readProjectHooksConfig(options2.workspacePath);
    if (loaded === void 0) {
        return {
            hookExecutor: UNTRUSTED_WORKSPACE_HOOK_EXECUTOR,
            hooksConfig: void 0
        };
    }
    const hookExecutor = new CliHooksExecutor(loaded, options2.workspacePath, {
        cursor_version: "headless",
        user_email: null
    }, createNaiveTerminalExecutor());
    const configuredSteps = Object.keys(loaded.projectHooks?.hooks ?? {});
    return {
        hookExecutor,
        hooksConfig: configuredSteps.length === 0 ? void 0 : new HooksConfigInfo({
            configuredSteps
        })
    };
}
export function isHeadlessWorkspaceTrusted(options2) {
    if (options2.workspaceTrusted !== void 0) {
        return options2.workspaceTrusted;
    }
    try {
        return (0, import_node_fs47.existsSync)((0, import_node_path106.join)(getProjectDir(options2.workspacePath), WORKSPACE_TRUST_MARKER));
    } catch  {
        return false;
    }
}
function readProjectHooksConfig(workspacePath) {
    const projectConfigPath = (0, import_node_path106.join)(workspacePath, ".cursor", "hooks.json");
    try {
        if (!(0, import_node_fs47.existsSync)(projectConfigPath)) {
            return {
                errors: []
            };
        }
        if (pathContainsSymlinkSync(projectConfigPath, workspacePath)) {
            return void 0;
        }
        const parsed = JSON.parse((0, import_node_fs47.readFileSync)(projectConfigPath, "utf8"));
        if (typeof parsed === "object" && parsed !== null && "hooks" in parsed && typeof parsed.hooks === "object" && parsed.hooks !== null) {
            return {
                projectHooks: parsed,
                errors: [],
                configDirs: {
                    project: (0, import_node_path106.join)(workspacePath, ".cursor")
                }
            };
        }
    } catch  {}
    return {
        errors: []
    };
}
export function createHeadlessHooksOverlay(options2) {
    const extractFields = createHookContextExtractor(options2.context);
    return {
        accessor: new ListableHooksResourceAccessor(options2.provider, options2.hookExecutor, extractFields, options2.mcpLease)
    };
}
function createHookContextExtractor(context2) {
    if (typeof context2 === "function") {
        return context2;
    }
    return ()=>context2;
}
export function normalizeSettingSources(input) {
    if (input === void 0 || input.length === 0) {
        return createResolvedSettingSources([]);
    }
    for (const source of input){
        if (!VALID_RUNTIME_SETTING_SOURCES.has(source)) {
            throw new Error(`Unsupported setting source "${String(source)}"`);
        }
    }
    if (input.includes("all")) {
        if (input.length > 1) {
            throw new Error('settingSources cannot mix "all" with individual setting sources');
        }
        return {
            ...createResolvedSettingSources(ALL_RUNTIME_SETTING_SOURCES),
            all: true
        };
    }
    return createResolvedSettingSources(input);
}
export function normalizeHeadlessDiskSettingSources(input) {
    const sources = normalizeSettingSources(input);
    const unsupported = [
        "team",
        "mdm",
        "plugins"
    ].filter((source)=>sources[source]);
    if (unsupported.length > 0) {
        throw new Error(`Headless disk setting sources do not support: ${unsupported.join(", ")}`);
    }
    return sources;
}
export function hasSettingSource(sources, source) {
    return sources[source];
}
export function isNoAmbientSettings(sources) {
    return ALL_RUNTIME_SETTING_SOURCES.every((source)=>!sources[source]);
}
function createResolvedSettingSources(sources) {
    const sourceSet = new Set(sources);
    return {
        project: sourceSet.has("project"),
        user: sourceSet.has("user"),
        team: sourceSet.has("team"),
        mdm: sourceSet.has("mdm"),
        plugins: sourceSet.has("plugins"),
        all: false
    };
}
export function createHeadlessMcpGrantStore(options2) {
    return new FileBasedTokenStore(headlessMcpTokenStorePath(options2));
}
function headlessMcpTokenStorePath(options2) {
    const projectDir = validateProjectDir(options2.projectDir);
    const tokenStoreDir = validateProjectDir(options2.tokenStoreDir ?? projectDir);
    return (0, import_node_path107.join)(tokenStoreDir, "mcp-auth.json");
}
export function headlessMcpDefinitionRef(definition) {
    const config2 = definition.serverConfig;
    const authStorageKey = definition.authStorageKey ?? definition.identifier;
    if ("url" in config2) {
        return {
            identifier: definition.identifier,
            authStorageKey,
            kind: "http",
            url: config2.url
        };
    }
    return {
        identifier: definition.identifier,
        authStorageKey,
        kind: "stdio"
    };
}
function headlessMcpDefinitionSources(options2) {
    const workspacePaths = validateWorkspacePaths(options2.workspacePaths);
    const sources = normalizeHeadlessDiskSettingSources(options2.settingSources);
    const entries = [];
    const inlineServers = options2.inlineServers ?? {};
    if (Object.keys(inlineServers).length > 0) {
        entries.push({
            source: new InlineMcpDefinitionSource(inlineServers)
        });
    }
    if (sources.project) {
        for (const [index, workspacePath] of workspacePaths.entries()){
            entries.push({
                source: new NamespacedMcpDefinitionSource(new FileConfigMcpDefinitionSource((0, import_node_path107.join)(workspacePath, ".cursor", "mcp.json")), `project-${index}-${(0, import_node_path107.basename)(workspacePath)}-`),
                approvalRoot: workspacePath
            });
        }
    }
    if (sources.user) {
        entries.push({
            source: new NamespacedMcpDefinitionSource(new FileConfigMcpDefinitionSource((0, import_node_path107.join)((0, import_node_os28.homedir)(), ".cursor", "mcp.json")), "user-"),
            approvalRoot: (0, import_node_os28.homedir)()
        });
    }
    return entries;
}
export async function listHeadlessMcpDefinitions(options2) {
    const ctx = createContext();
    const refs = [];
    for (const entry of headlessMcpDefinitionSources(options2)){
        for (const definition of await entry.source.getDefinitions(ctx, false)){
            refs.push(headlessMcpDefinitionRef(definition));
        }
    }
    return refs;
}
export async function createHeadlessMcpLease(options2) {
    const sourceEntries = headlessMcpDefinitionSources(options2);
    const projectDir = validateProjectDir(options2.projectDir);
    const tokenStore = new FileBasedTokenStore(headlessMcpTokenStorePath(options2));
    const teamSettingsService = options2.teamSettingsService ?? createEmptyTeamSettingsService2();
    const disabledStore = new FileBasedMcpDisabledStore((0, import_node_path107.join)(projectDir, "mcp-disabled.json"));
    const createPolicyMiddlewares = (approvalRoot)=>[
            new CachingMiddleware(),
            ...approvalRoot === void 0 ? [] : [
                new ServerApprovalMiddleware(new FileBasedMcpApprovalStore((0, import_node_path107.join)(projectDir, "mcp-approvals.json"), approvalRoot))
            ],
            new ServerBlockingMiddleware(teamSettingsService),
            new ServerDisabledMiddleware(disabledStore)
        ];
    const includeDefinition = options2.includeDefinition;
    const loaders = sourceEntries.map((entry)=>({
            prefix: "",
            loader: new DefinitionMcpLoader(includeDefinition === void 0 ? entry.source : new FilteringMcpDefinitionSource(entry.source, includeDefinition), tokenStore, createPolicyMiddlewares(entry.approvalRoot))
        }));
    if (loaders.length === 0) {
        return new DisposableNoopMcpLease();
    }
    const loader2 = loaders.length === 1 ? loaders[0].loader : new MergedMcpLoader(loaders);
    const manager = await loader2.load(createContext(), true);
    return new DisposableManagerMcpLease(manager);
}
function noopLoader() {
    return {
        cursorRulesService: new NoopCursorRulesService(),
        subagentsService: new NoopSubagentsService(),
        agentSkillsService: NOOP_AGENT_SKILLS_SERVICE,
        async getAgentSkills () {
            return [];
        },
        reloadSkillRoots () {},
        dispose () {}
    };
}
export function createHeadlessSettingSourcesLoader(options2) {
    const sources = normalizeHeadlessDiskSettingSources(options2.sources);
    if (isNoAmbientSettings(sources)) {
        return noopLoader();
    }
    const projectRoots = sources.project ? [
        ...options2.workspacePaths
    ] : [];
    const loadUser = sources.user === true;
    if (projectRoots.length === 0 && !loadUser) {
        return noopLoader();
    }
    ensureRipgrepConfigured(options2.ripgrepPath);
    const ctx = createContext();
    const getThirdPartyExtensibilityEnabled = options2.getThirdPartyExtensibilityEnabled ?? (()=>true);
    const userHome = options2.userHome ?? (0, import_node_os29.homedir)();
    const allowExternalSubagentSymlinks = options2.allowExternalSubagentSymlinks === true;
    const ruleServices = [];
    for (const workspaceRoot of projectRoots){
        ruleServices.push(new LocalCursorRulesService(ctx, options2.gitExecutor, workspaceRoot, true, getThirdPartyExtensibilityEnabled, options2.fileWatcher, options2.ignoreService));
    }
    let agentSkillsService;
    if (projectRoots.length > 0 || loadUser) {
        agentSkillsService = new AgentSkillsCursorRulesService(ctx, projectRoots, loadUser ? userHome : `${projectRoots[0]}/.agent-host-exec-no-user-home`, options2.gitExecutor, true, options2.fileWatcher, getThirdPartyExtensibilityEnabled, options2.initialBuiltinSkillsSyncPromise ?? Promise.resolve(), options2.surface ?? "headless", void 0, ()=>options2.getAgentStoreSkillsContext?.().agentStoreSkillsDirs ?? [], options2.agentSkillsCatalogCache);
        ruleServices.push(agentSkillsService);
    }
    const cursorRulesService = ruleServices.length === 0 ? new NoopCursorRulesService() : ruleServices.length === 1 ? ruleServices[0] : new MergedCursorRulesService(ruleServices, options2.getAgentStoreSkillsContext ?? (()=>NO_AGENT_STORE_SKILLS));
    const subagentServices = [];
    if (sources.project) {
        for (const workspaceRoot of projectRoots){
            subagentServices.push(new LocalSubagentsService(workspaceRoot, getThirdPartyExtensibilityEnabled, "workspace", allowExternalSubagentSymlinks));
        }
    }
    if (loadUser) {
        subagentServices.push(new LocalSubagentsService(userHome, getThirdPartyExtensibilityEnabled, "user", allowExternalSubagentSymlinks));
    }
    const subagentsService = subagentServices.length === 0 ? new NoopSubagentsService() : subagentServices.length === 1 ? subagentServices[0] : new MergedSubagentsService(subagentServices);
    const diskAgentSkillsService = agentSkillsService ?? NOOP_AGENT_SKILLS_SERVICE;
    return {
        cursorRulesService,
        subagentsService,
        agentSkillsService: diskAgentSkillsService,
        getAgentSkills (skillCtx) {
            return diskAgentSkillsService.getAllAgentSkills(skillCtx);
        },
        reloadSkillRoots () {
            agentSkillsService?.reloadSkillRoots();
        },
        dispose () {
            cursorRulesService.dispose();
        }
    };
}
export function createCredentialBoundTeamSettingsService(options2) {
    const credentialManager = {
        async setBedrockCredentials () {},
        async getBedrockCredentials () {
            return void 0;
        },
        async clearBedrockCredentials () {},
        setAuthentication: (accessToken, refreshToken, apiKey)=>options2.credentialManager.setAuthentication(accessToken, refreshToken, apiKey),
        getAccessToken: ()=>options2.credentialManager.getAccessToken(),
        async getRefreshToken () {
            return void 0;
        },
        clearAuthentication: async ()=>{
            if (options2.credentialManager.clearAuthentication !== void 0) {
                await options2.credentialManager.clearAuthentication();
            }
        },
        getApiKey: ()=>options2.credentialManager.getApiKey(),
        async getAllCredentials () {
            return {
                accessToken: await options2.credentialManager.getAccessToken(),
                refreshToken: void 0,
                apiKey: await options2.credentialManager.getApiKey()
            };
        }
    };
    const service = new CachedTeamSettingsService(new ConnectTeamAdminSettingsProvider(createDashboardClient({
        credentialManager,
        endpoint: options2.endpoint
    })));
    if (options2.credentialManager.onDidChangeAccessToken !== void 0) {
        options2.credentialManager.onDidChangeAccessToken(()=>{
            service.invalidateCache();
        });
    }
    return service;
}
export function uniqueNonEmpty2(values) {
    const seen = new Set();
    for (const value of values){
        if (value.length > 0) {
            seen.add(value);
        }
    }
    return [
        ...seen
    ];
}
export function createHostedMcpRoutingProvider(options2) {
    return new GatedHostedMcpRoutingProvider(options2);
}
export function wrappedLeaseView(lease) {
    return {
        getTools: (ctx)=>lease.getTools(ctx),
        getToolSet: (ctx)=>lease.getToolSet(ctx),
        getClients: (ctx)=>lease.getClients(ctx),
        getClient: (ctx, name17)=>lease.getClient(ctx, name17),
        getInstructions: (ctx)=>lease.getInstructions(ctx),
        getToolsForServers: (ctx, serverIdentifiers)=>lease.getToolsForServers(ctx, serverIdentifiers),
        onDidChange: (listener)=>lease.onDidChange(listener),
        dispose: ()=>void 0
    };
}
export function createDeferredConnectTransport() {
    let resolve36;
    let reject2;
    const ready2 = new Promise((res, rej)=>{
        resolve36 = res;
        reject2 = rej;
    });
    ready2.catch(()=>void 0);
    return {
        transport: {
            unary: async (service, method, signal, timeoutMs, header, input, contextValues)=>(await ready2).unary(service, method, signal, timeoutMs, header, input, contextValues),
            stream: async (service, method, signal, timeoutMs, header, input, contextValues)=>(await ready2).stream(service, method, signal, timeoutMs, header, input, contextValues)
        },
        resolve: (transport)=>{
            resolve36?.(transport);
            resolve36 = void 0;
            reject2 = void 0;
        },
        dispose: ()=>{
            reject2?.(new Error("Connect transport was disposed before it was ready"));
            resolve36 = void 0;
            reject2 = void 0;
        }
    };
}
export { DAEMON_AGENT_HOST_SURFACE, DaemonMetrics };

export var daemon_metrics_exports = {};
Object.defineProperty(daemon_metrics_exports, "DAEMON_AGENT_HOST_SURFACE", {
    enumerable: true,
    get: ()=>DAEMON_AGENT_HOST_SURFACE
});
Object.defineProperty(daemon_metrics_exports, "DaemonMetrics", {
    enumerable: true,
    get: ()=>DaemonMetrics
});

import { init_dist20 } from "./local-exec/dist/index.js";
var import_node_fs45, import_promises57, import_node_path103, DenyPendingDecisionProvider, MISSING_SANDBOX_CONFIG_PATH, DenyPermissionsService, NoopDiagnosticsProvider, NoopCodebaseReferenceProvider, NoopCursorRulesService, emptyGrepProvider, objectIds, nextObjectId;
export { DenyPendingDecisionProvider, DenyPermissionsService, MISSING_SANDBOX_CONFIG_PATH, NoopCodebaseReferenceProvider, NoopCursorRulesService, NoopDiagnosticsProvider, emptyGrepProvider, import_node_fs45, import_node_path103, import_promises57, nextObjectId, objectIds };
var __wakaru_init_headless_defaults_initialized = false;
export function init_headless_defaults() {
if (__wakaru_init_headless_defaults_initialized) return;
__wakaru_init_headless_defaults_initialized = true;
"use strict";
import_node_fs45 = require("node:fs");
import_promises57 = require("node:fs/promises");
import_node_path103 = require("node:path");
init_dist20();
DenyPendingDecisionProvider = class {
    async requestApproval(_operation) {
        return {
            approved: false,
            reason: "agent-host-exec denies local side effects by default. Interactive embedders must supply a pendingDecisionStore override."
        };
    }
};
MISSING_SANDBOX_CONFIG_PATH = "/nonexistent/agent-host-exec-sandbox.json";
DenyPermissionsService = class {
    constructor(workspacePaths, ignoreService, options2){
        this.workspaceRoots = workspacePaths.map(canonicalizeWorkspaceRoot);
        this.readRules = new InteractivePermissionsService(ignoreService, new DenyPendingDecisionProvider(), clampDenyAllReadPermissions(options2?.permissions ?? createDenyAllPermissionsProvider()), options2?.teamSettings ?? createEmptyTeamSettingsService(), [
            ...this.workspaceRoots
        ], false, {
            perUserSandboxConfigPath: options2?.perUserSandboxConfigPath ?? MISSING_SANDBOX_CONFIG_PATH
        });
    }
    async shouldBlockRead(filePath, facts) {
        return this.applyHeadlessReadRules(filePath, facts, false);
    }
    async shouldBlockFileRead(filePath, facts) {
        return this.applyHeadlessReadRules(filePath, facts, true);
    }
    async getFileReadBoundaryBlocker() {
        return async (requestedAbsolutePath, realAbsolutePath)=>{
            if (await this.shouldBlockRead(requestedAbsolutePath) !== false) {
                return true;
            }
            return realAbsolutePath !== requestedAbsolutePath && await this.shouldBlockRead(realAbsolutePath) !== false;
        };
    }
    async shouldBlockWrite(_ctx, _filePath, _newContents) {
        return {
            type: "permissionsConfig",
            isReadonly: true
        };
    }
    async shouldBlockShellCommand(_ctx, _command, _options, _requestedPolicy) {
        return {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: true
            }
        };
    }
    async shouldEnforceShellInvariantBlocks() {
        return {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: true
            }
        };
    }
    async isShellCommandFullyAllowlisted() {
        return false;
    }
    async shouldBlockMcp(_ctx, _args) {
        return {
            type: "permissionsConfig",
            isReadonly: true
        };
    }
    async isMcpFullyAllowlisted() {
        return false;
    }
    async isWebFetchFullyAllowlisted() {
        return false;
    }
    async addToAllowList() {}
    async addToDenyList() {}
    async applyHeadlessReadRules(filePath, facts, isFileContentRead) {
        const check2 = (path64)=>isFileContentRead ? this.readRules.shouldBlockFileRead(path64, facts) : this.readRules.shouldBlockRead(path64, facts);
        const reason = await check2(filePath);
        if (reason !== false) {
            return denyInsteadOfPrompt(reason);
        }
        const resolvedPath = await this.resolvedPathIfDifferent(filePath);
        if (resolvedPath !== void 0) {
            const resolvedReason = await check2(resolvedPath);
            if (resolvedReason !== false) {
                return denyInsteadOfPrompt(resolvedReason);
            }
        }
        return await this.isInAnyWorkspace(filePath) ? false : {
            type: "permissionsConfig",
            isReadonly: true
        };
    }
    async resolvedPathIfDifferent(filePath) {
        const requestedPath = (0, import_node_path103.resolve)(filePath);
        const resolvedPath = await resolvePathForIgnoreService(requestedPath);
        if (resolvedPath === null || resolvedPath === requestedPath) {
            return void 0;
        }
        return resolvedPath;
    }
    async isInAnyWorkspace(filePath) {
        for (const root of this.workspaceRoots){
            if (await this.isInWorkspace(root, filePath)) {
                return true;
            }
        }
        return false;
    }
    async isInWorkspace(workspacePath, filePath) {
        let candidatePath = (0, import_node_path103.resolve)(workspacePath, filePath);
        while(true){
            try {
                const canonicalPath = await (0, import_promises57.realpath)(candidatePath);
                const pathFromWorkspace = (0, import_node_path103.relative)(workspacePath, canonicalPath);
                return pathFromWorkspace === "" || pathFromWorkspace !== ".." && !pathFromWorkspace.startsWith(`..${import_node_path103.sep}`) && !(0, import_node_path103.isAbsolute)(pathFromWorkspace);
            } catch (error3) {
                if (!isMissingPathError2(error3)) {
                    return false;
                }
                const parentPath = (0, import_node_path103.dirname)(candidatePath);
                if (parentPath === candidatePath) {
                    return false;
                }
                candidatePath = parentPath;
            }
        }
    }
};
NoopDiagnosticsProvider = class {
    async open(_ctx, _uri) {}
    async getDiagnostics(_ctx, _uri) {
        return [];
    }
};
NoopCodebaseReferenceProvider = class {
    async getCodebaseReference(_ctx, _signal) {
        return void 0;
    }
};
NoopCursorRulesService = class {
    async getAllCursorRules(_ctx) {
        return [];
    }
    reload(_ctx) {}
    dispose() {}
    onDidChangeRules(_callback) {
        return ()=>{};
    }
};
emptyGrepProvider = {};
objectIds = new WeakMap();
nextObjectId = 1;

}
