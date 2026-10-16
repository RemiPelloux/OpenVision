import { createWritableIterable, isTransportError, mcpInputSchemaToJson, parseMcpOutputSchemaJson, resourceEntry, toUint8Array, withRelayedAttemptFailure } from "./dist_exports.js";
import { withInProcessCallerSpan } from "./dashboard_connect_exports.js";
import { currentHookAbortSignal, runWithHookAbortSignal } from "./esm_exports8.js";
import { classifyTurnError, extractPreviousRequestId, fromRedactedExecServerControlMessage, fromRedactedExecServerMessage, fromRedactedKvServerMessage, isRedactedExecServerMessage, toRedactedExecClientControlMessage, toRedactedExecClientMessage, toRedactedKvClientMessage } from "./mcp_sandbox_policy_exports.js";
import { composeManagedLocalPrepareAttemptContext, coreMessageToProto, createManagedLocalAgentConfig, createRunInferencePromptSessionFactory, labelingAgentMode, localLoopRelayedFailure, parseAgentHostPrivacyMode, parseJsonObject2, repeatAfterSettle, takeSeamRunOptions, withoutCodePrefix } from "./tree_chunk_napi_exports.js";
import { createAgentHostExec, createCredentialBoundTeamSettingsService, createDeferredConnectTransport, createEmptyTeamSettingsService2, createHeadlessDecisionProvider, createHeadlessDiskHookExecutor, createHeadlessHooksOverlay, createHeadlessMcpGrantStore, createHeadlessMcpLease, createHeadlessSettingSourcesLoader, createHostedMcpRoutingProvider, createSurfaceAgentStoreConflictNoticeExecutor, createTurnRuntimeCallerResolver, hasSettingSource, headlessMcpDefinitionRef, isHeadlessWorkspaceTrusted, isNoAmbientSettings, listHeadlessMcpDefinitions, normalizeHeadlessDiskSettingSources, normalizeSettingSources, pickBoundKindResult, runAgentDataCleanupIfDue, scheduleAgentDataCleanup } from "./daemon_metrics_exports.js";
import { AgentError, CancelledError } from "./agent-client/dist/errors.js";
import { ControlledConversationActionManager } from "./agent-core/dist/conversation-actions/controlled.js";
import { InteractionListenerStreamClosedError } from "./agent-core/dist/interaction-listener.js";
import { agentStoreConflictNoticeExecutorResource } from "./agent-exec/dist/agent-store-conflict-notice.js";
import { canvasDiagnosticsExecutorResource } from "./agent-exec/dist/canvas-diagnostics.js";
import { conversationSearchExecutorResource } from "./agent-exec/dist/conversation-search.js";
import { gitDiffExecutorResource } from "./agent-exec/dist/git-diff.js";
import { LocalHookExecutorImpl, hookExecutorResource } from "./agent-exec/dist/hook-executor.js";
import { mcpAllowlistPrecheckExecutorResource } from "./agent-exec/dist/mcp-allowlist-precheck.js";
import { listMcpResourcesExecutorResource, mcpExecutorResource, mcpStateExecutorResource, readMcpResourceExecutorResource } from "./agent-exec/dist/mcp.js";
import { requestContextExecutorResource } from "./agent-exec/dist/request-context.js";
import { ListableCombinedResourceAccessor, RemoteResourceAccessor } from "./agent-exec/dist/resource-provider.js";
import { RedactedToPlainExecManagerAdapter } from "./agent-exec/dist/server.js";
import { SimpleExecManager } from "./agent-exec/dist/simple-exec-manager.js";
import { AGENT_DATA_CLEANUP_INITIAL_DELAY_MS } from "./agent-host-exec/dist/agent-data-cleanup.js";
import { AutoApprovePendingDecisionProvider } from "./agent-host-exec/dist/create-headless-decision-provider.js";
import { HostedMcpLeaseFilter, HostedMcpRoutingState } from "./agent-host-exec/dist/hosted-mcp-routing.js";
import { ALL_RUNTIME_SETTING_SOURCES } from "./agent-host-exec/dist/setting-sources.js";
import { LocalLoopAgentClient } from "./agent-host/dist/agentAdapter/local/local-loop-agent-client.js";
import { MANAGED_LOCAL_AGENT_MODE, logger143 } from "./agent-host/dist/agentAdapter/local/managed-local-labeling.js";
import { KNOWN_PROMPT_VERSIONS } from "./agent-host/dist/agentAdapter/local/managed-local-model.js";
import { MANAGED_LOCAL_RETRY_IDENTITY } from "./agent-host/dist/agentAdapter/local/managed-local-retry-identity.js";
import { WIRE_CHANNELS, WIRE_SOURCE } from "./agent-host/dist/agentAdapter/local/run-inference-agent-module.js";
import { HARNESS_FAILURE_METADATA, HARNESS_INTERFACE_REVISION, HARNESS_LOOP_FAILURE } from "./agent-host/dist/harness/api-constants.js";
import { realHarnessClock } from "./agent-host/dist/harness/clock.js";
import { RUN_INFERENCE } from "./agent-host/dist/harness/generation/backend-transport.js";
import { FAILED_ATTEMPT_DRAIN_MS, HEARTBEAT_INTERVAL_MS, HOST_CANCEL_DRAIN_MS } from "./agent-host/dist/harness/generation/serve-run.js";
import { StreamInteractionListener } from "./agent-host/dist/harness/generation/stream-interaction-listener.js";
import { createContext } from "./agent-host/dist/storage/instruments.js";
import { RemoteKvManager } from "./agent-kv/dist/remote.js";
import { DenyPendingDecisionProvider, DenyPermissionsService, NoopCodebaseReferenceProvider, NoopCursorRulesService, NoopDiagnosticsProvider } from "./daemon_metrics_exports.js";
import { validateAndParseHookResponse } from "./hooks/dist/types.js";
import { CachedTeamSettingsService } from "./local-exec/dist/services/team-settings-service.js";
import { Struct } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { Code } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { MCP_TOOL_CLIENT_CALL_DURATION_STAT } from "./placement-routing-mcp/dist/call-observability.js";
import { AgentHostSurfaceCanvasRequest, AgentHostSurfaceConversationSearchRequest, AgentHostSurfaceGitRequest, AgentHostSurfaceHookRequest, AgentHostSurfaceMcpWriterRequest, AgentHostSurfaceRequestContextRequest } from "./proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { HeartbeatUpdate, InteractionQuery } from "./proto/dist/generated/agent/v1/agent_pb.js";
import { AgentServerMessage, BlobEntry, TtftBreakdown, UploadConversationBlobsRequest } from "./proto/dist/generated/agent/v1/agent_service_pb.js";
import { CanvasDiagnosticsError, CanvasDiagnosticsResult } from "./proto/dist/generated/agent/v1/canvas_diagnostics_exec_pb.js";
import { ConversationSearchError, ConversationSearchResult, ConversationSearchSuccess } from "./proto/dist/generated/agent/v1/conversation_search_exec_pb.js";
import { ExecuteHookArgs, ExecuteHookRequest, ExecuteHookResult } from "./proto/dist/generated/agent/v1/exec_pb.js";
import { PostToolUseFailureRequestQuery, PostToolUseRequestQuery, PreToolUseRequestQuery } from "./proto/dist/generated/agent/v1/hooks_pb.js";
import { McpAllowlistPrecheckResult } from "./proto/dist/generated/agent/v1/mcp_allowlist_precheck_exec_pb.js";
import { ListMcpResourcesError, ListMcpResourcesExecResult, McpError, McpResult, McpStateError, McpStateExecResult, ReadMcpResourceError, ReadMcpResourceExecResult } from "./proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { RequestContextEnv, RequestContextResult, RequestContextSuccess } from "./proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { AgentFollowupCategorizationRequest, AgentPostTurnLabelingRequest, RunInferenceAgentModule, RunInferenceClientMessage } from "./proto/dist/generated/aiserver/v1/inference_pb.js";
import { CustomErrorDetails, ErrorDetails, ErrorDetails_Error } from "./proto/dist/generated/aiserver/v1/utils_pb.js";
import { PrivacyCapability } from "./redaction/dist/classification.js";
import { SurfaceGitHopError } from "./src/surface-git.ts";
import { NOOP_HEADLESS_HOOK_EXECUTOR, SurfaceHookHopError } from "./src/surface-hook.ts";
import { SURFACE_HOP_UNBOUND } from "./src/surface-hop-result.ts";
import { MCP_WRITER_DELIVERED_HOP_ABORTED, MCP_WRITER_DELIVERED_HOP_TIMEOUT, MCP_WRITER_WRONG_ARM_RESPONSE, import_node_crypto58 } from "./src/surface-mcp-writer.ts";
import { MapWritable, WriteIterableClosedError } from "./utils/dist/writable-iterable.js";
function surfaceHopFailureMessage(kind, result) {
    switch(result.status){
        case "unimplemented":
        case "denied":
            return SURFACE_HOP_UNBOUND;
        case "timeout":
            return `${kind} hop timed out after the hop was delivered`;
        case "aborted":
            return `${kind} hop aborted after the hop was delivered`;
        case "accepted":
            return `${kind} hop returned a malformed or wrong-arm response`;
        default:
            {
                const exhaustive = result;
                return exhaustive;
            }
    }
}
function createSurfaceCanvasExecutor(options2) {
    return {
        async execute (ctx, args) {
            const target = options2.hub.resolveHopTarget({
                sessionId: options2.sessionId,
                persistedOwner: options2.resolveOwner(options2.sessionId),
                kind: "canvas"
            });
            if (target === void 0) {
                return unboundCanvasResult(args.path);
            }
            const result = await options2.hub.invokeKind({
                kind: "canvas",
                sessionId: options2.sessionId,
                targetClientInstanceId: target,
                signal: ctx.signal,
                canvas: new AgentHostSurfaceCanvasRequest({
                    args
                })
            });
            if (result.status === "accepted" && result.result?.case === "canvas" && result.result.value.result !== void 0) {
                return result.result.value.result;
            }
            return canvasErrorResult({
                path: args.path,
                message: surfaceHopFailureMessage("canvas", result)
            });
        }
    };
}
function unboundCanvasResult(path64) {
    return canvasErrorResult({
        path: path64,
        message: SURFACE_HOP_UNBOUND
    });
}
function canvasErrorResult(args) {
    return new CanvasDiagnosticsResult({
        result: {
            case: "error",
            value: new CanvasDiagnosticsError({
                path: args.path,
                error: args.message
            })
        }
    });
}
function emptySearchResult() {
    return new ConversationSearchResult({
        result: {
            case: "success",
            value: new ConversationSearchSuccess({
                hits: []
            })
        }
    });
}
function searchErrorResult(error3) {
    return new ConversationSearchResult({
        result: {
            case: "error",
            value: new ConversationSearchError({
                error: error3
            })
        }
    });
}
function hoppedConversationSearchResult(value) {
    if (value.case !== "conversationSearch") {
        return void 0;
    }
    const hopped = value.value.result;
    if (hopped === void 0) {
        return void 0;
    }
    if (hopped.result.case !== "success" && hopped.result.case !== "error") {
        return void 0;
    }
    return hopped;
}
function resolveSurfaceSearchClient(options2) {
    const target = options2.hub.resolveCallbackTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId)
    });
    if (target === void 0 || target.length === 0) {
        return void 0;
    }
    return target;
}
function shouldHopSurfaceSearch(hub, clientInstanceId) {
    return hub.canHopKind(clientInstanceId, "conversation_search") || hub.isKindBound(clientInstanceId, "conversation_search");
}
function createSurfaceConversationSearchExecutor(options2) {
    return {
        async execute (ctx, args) {
            const target = resolveSurfaceSearchClient(options2);
            if (target === void 0 || !shouldHopSurfaceSearch(options2.hub, target)) {
                return emptySearchResult();
            }
            const startedBound = options2.hub.isKindBound(target, "conversation_search");
            const result = await options2.hub.invokeKind({
                kind: "conversation_search",
                sessionId: options2.sessionId,
                targetClientInstanceId: target,
                signal: ctx.signal,
                conversationSearch: new AgentHostSurfaceConversationSearchRequest({
                    args
                })
            });
            const hopped = pickBoundKindResult(options2.hub, target, "conversation_search", result, hoppedConversationSearchResult, startedBound);
            if (hopped !== void 0) {
                return hopped;
            }
            if (result.status === "accepted" && result.result?.case === "error") {
                const message = result.result.value.message;
                const code = result.result.value.code;
                if (message.length > 0) {
                    return searchErrorResult(message);
                }
                if (code.length > 0) {
                    return searchErrorResult(code);
                }
                return searchErrorResult("error");
            }
            if (result.status === "unimplemented" || result.status === "accepted" && !options2.hub.isKindProven(target, "conversation_search") || result.status === "timeout" && result.probe === true || (result.status === "denied" || result.status === "aborted") && !startedBound && ctx.signal.aborted !== true) {
                return emptySearchResult();
            }
            return searchErrorResult(result.status);
        }
    };
}
function resolveSurfaceGitClient(options2) {
    const target = options2.hub.resolveCallbackTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId)
    });
    if (target === void 0 || target.length === 0) {
        return void 0;
    }
    return target;
}
function shouldHopSurfaceGit(hub, clientInstanceId) {
    return hub.canHopKind(clientInstanceId, "git") || hub.isKindBound(clientInstanceId, "git");
}
function createSurfaceGitDiffExecutor(options2) {
    return {
        async execute (ctx, args) {
            const target = resolveSurfaceGitClient(options2);
            if (target === void 0 || !shouldHopSurfaceGit(options2.hub, target)) {
                return options2.inner.execute(ctx, args);
            }
            const startedBound = options2.hub.isKindBound(target, "git");
            const result = await options2.hub.invokeKind({
                kind: "git",
                sessionId: options2.sessionId,
                targetClientInstanceId: target,
                signal: ctx.signal,
                git: new AgentHostSurfaceGitRequest({
                    request: {
                        case: "gitDiff",
                        value: args
                    }
                })
            });
            const hopped = pickBoundKindResult(options2.hub, target, "git", result, (value)=>value.case === "git" && value.value.result.case === "gitDiff" ? value.value.result.value : void 0, startedBound);
            if (hopped !== void 0) {
                return hopped;
            }
            if (result.status === "accepted" && result.result?.case === "error") {
                throw new SurfaceGitHopError("error");
            }
            if (result.status === "unimplemented" || result.status === "accepted" && !options2.hub.isKindProven(target, "git") || result.status === "timeout" && result.probe === true || (result.status === "denied" || result.status === "aborted") && !startedBound && ctx.signal.aborted !== true) {
                return options2.inner.execute(ctx, args);
            }
            throw new SurfaceGitHopError(result.status);
        }
    };
}
function isRemotedToolHookStep(step) {
    return step === "preToolUse" || step === "postToolUse" || step === "postToolUseFailure";
}
function stringProperty(request3, key) {
    for (const [entryKey, value] of Object.entries(request3)){
        if (entryKey === key && typeof value === "string") {
            return value;
        }
    }
    return "";
}
function optionalStringProperty(request3, key) {
    const value = stringProperty(request3, key);
    return value.length === 0 ? void 0 : value;
}
function numberProperty(request3, key) {
    for (const [entryKey, value] of Object.entries(request3)){
        if (entryKey === key && typeof value === "number" && Number.isFinite(value)) {
            return value;
        }
    }
    return 0;
}
function booleanProperty(request3, key) {
    for (const [entryKey, value] of Object.entries(request3)){
        if (entryKey === key && typeof value === "boolean") {
            return value;
        }
    }
    return false;
}
function isJsonValue(value) {
    if (value === null || typeof value === "string" || typeof value === "boolean") {
        return true;
    }
    if (typeof value === "number") {
        return Number.isFinite(value);
    }
    if (Array.isArray(value)) {
        return value.every(isJsonValue);
    }
    if (typeof value === "object") {
        return Object.values(value).every(isJsonValue);
    }
    return false;
}
function jsonObjectProperty(request3, key) {
    for (const [entryKey, value] of Object.entries(request3)){
        if (entryKey !== key) {
            continue;
        }
        if (isJsonValue(value) && value !== null && typeof value === "object" && !Array.isArray(value)) {
            return value;
        }
    }
    return void 0;
}
function toolInputStruct(request3) {
    const input = jsonObjectProperty(request3, "tool_input");
    if (input === void 0) {
        return void 0;
    }
    return Struct.fromJson(input);
}
function durationMs(request3) {
    return BigInt(Math.round(numberProperty(request3, "duration")));
}
function attachHopAbortContext(signal) {
    const root = createContext();
    if (signal === void 0) {
        return {
            ctx: root,
            detach: ()=>void 0
        };
    }
    const [child, cancel] = root.withCancel();
    if (signal.aborted) {
        cancel(signal.reason);
        return {
            ctx: child,
            detach: ()=>void 0
        };
    }
    const onAbort = ()=>{
        signal.removeEventListener("abort", onAbort);
        cancel(signal.reason);
    };
    signal.addEventListener("abort", onAbort, {
        once: true
    });
    return {
        ctx: child,
        detach: ()=>{
            signal.removeEventListener("abort", onAbort);
        }
    };
}
function emptyToUndefined(value) {
    if (value === void 0 || value.length === 0) {
        return void 0;
    }
    return value;
}
function hookPermission(permission) {
    if (permission === "allow" || permission === "deny" || permission === "ask") {
        return permission;
    }
    return void 0;
}
function updatedInputFromJson(raw) {
    const text4 = emptyToUndefined(raw);
    if (text4 === void 0) {
        return void 0;
    }
    let parsed;
    try {
        parsed = JSON.parse(text4);
    } catch  {
        return void 0;
    }
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed) || !isJsonValue(parsed)) {
        return void 0;
    }
    const updated = {};
    for (const [key, value] of Object.entries(parsed)){
        if (isJsonValue(value)) {
            updated[key] = value;
        }
    }
    return Object.keys(updated).length === 0 ? void 0 : updated;
}
function hoppedHookResponse(value) {
    if (value.case !== "hook") {
        return void 0;
    }
    const response = value.value.response;
    if (response?.response.case === void 0) {
        return void 0;
    }
    return response;
}
function remotedStepRawResponse(hopped) {
    const response = hopped.response?.response;
    if (response === void 0) {
        return void 0;
    }
    if (response.case === "preToolUse") {
        const permission = hookPermission(response.value.permission);
        const userMessage = emptyToUndefined(response.value.userMessage);
        const agentMessage = emptyToUndefined(response.value.agentMessage);
        const additionalContext = emptyToUndefined(response.value.additionalContext);
        const updatedInput = updatedInputFromJson(response.value.updatedInput);
        const raw = {};
        if (permission !== void 0) {
            raw.permission = permission;
        }
        if (userMessage !== void 0) {
            raw.user_message = userMessage;
        }
        if (agentMessage !== void 0) {
            raw.agent_message = agentMessage;
        }
        if (additionalContext !== void 0) {
            raw.additional_context = additionalContext;
        }
        if (updatedInput !== void 0) {
            raw.updated_input = updatedInput;
        }
        return Object.keys(raw).length === 0 ? void 0 : raw;
    }
    if (response.case === "postToolUse" || response.case === "postToolUseFailure") {
        const additionalContext = emptyToUndefined(response.value.additionalContext);
        return additionalContext === void 0 ? void 0 : {
            additional_context: additionalContext
        };
    }
    return void 0;
}
function resolveSurfaceHookClient(options2) {
    const target = options2.hub.resolveCallbackTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId)
    });
    if (target === void 0 || target.length === 0) {
        return void 0;
    }
    return target;
}
function shouldHopSurfaceHook(hub, clientInstanceId) {
    return hub.canHopKind(clientInstanceId, "hook") || hub.isKindBound(clientInstanceId, "hook");
}
function remotedToolStepArgs(step, request3) {
    const conversationId = stringProperty(request3, "conversation_id");
    const generationId = stringProperty(request3, "generation_id");
    const model = stringProperty(request3, "model");
    const modelId = optionalStringProperty(request3, "model_id");
    const toolName = stringProperty(request3, "tool_name");
    const toolUseId = stringProperty(request3, "tool_use_id");
    const cwd = optionalStringProperty(request3, "cwd");
    const toolInput = toolInputStruct(request3);
    const toolInputFields = toolInput === void 0 ? {} : {
        toolInput
    };
    if (step === "preToolUse") {
        return new ExecuteHookArgs({
            request: new ExecuteHookRequest({
                request: {
                    case: "preToolUse",
                    value: new PreToolUseRequestQuery({
                        conversationId,
                        generationId,
                        model,
                        ...modelId === void 0 ? {} : {
                            modelId
                        },
                        toolName,
                        toolUseId,
                        ...cwd === void 0 ? {} : {
                            cwd
                        },
                        ...toolInputFields
                    })
                }
            })
        });
    }
    if (step === "postToolUse") {
        return new ExecuteHookArgs({
            request: new ExecuteHookRequest({
                request: {
                    case: "postToolUse",
                    value: new PostToolUseRequestQuery({
                        conversationId,
                        generationId,
                        model,
                        ...modelId === void 0 ? {} : {
                            modelId
                        },
                        toolName,
                        toolUseId,
                        ...cwd === void 0 ? {} : {
                            cwd
                        },
                        ...toolInputFields,
                        toolOutput: stringProperty(request3, "tool_output"),
                        durationMs: durationMs(request3)
                    })
                }
            })
        });
    }
    return new ExecuteHookArgs({
        request: new ExecuteHookRequest({
            request: {
                case: "postToolUseFailure",
                value: new PostToolUseFailureRequestQuery({
                    conversationId,
                    generationId,
                    model,
                    ...modelId === void 0 ? {} : {
                        modelId
                    },
                    toolName,
                    toolUseId,
                    ...toolInputFields,
                    errorMessage: stringProperty(request3, "error_message"),
                    failureType: stringProperty(request3, "failure_type") || "error",
                    durationMs: durationMs(request3),
                    isInterrupt: booleanProperty(request3, "is_interrupt")
                })
            }
        })
    });
}
function createSurfaceHookExecutor(options2) {
    const executor = {
        async execute (ctx, args) {
            const fallThrough = ()=>runWithHookAbortSignal(ctx.signal, ()=>options2.inner.execute(ctx, args));
            const target = resolveSurfaceHookClient(options2);
            if (target === void 0 || !shouldHopSurfaceHook(options2.hub, target)) {
                return fallThrough();
            }
            const startedBound = options2.hub.isKindBound(target, "hook");
            const request3 = args.request;
            const result = await options2.hub.invokeKind({
                kind: "hook",
                sessionId: options2.sessionId,
                targetClientInstanceId: target,
                signal: ctx.signal,
                hook: new AgentHostSurfaceHookRequest({
                    step: request3?.request.case ?? "",
                    ...request3 === void 0 ? {} : {
                        request: request3
                    }
                })
            });
            const hopped = pickBoundKindResult(options2.hub, target, "hook", result, hoppedHookResponse, startedBound);
            if (hopped !== void 0) {
                return new ExecuteHookResult({
                    response: hopped
                });
            }
            if (result.status === "accepted" && result.result?.case === "error") {
                throw new SurfaceHookHopError("error");
            }
            if (result.status === "unimplemented" || result.status === "accepted" && !options2.hub.isKindProven(target, "hook") || result.status === "timeout" && result.probe === true || (result.status === "denied" || result.status === "aborted") && !startedBound && ctx.signal.aborted !== true) {
                return fallThrough();
            }
            throw new SurfaceHookHopError(result.status);
        },
        async executeHookForStep (step, request3, signal) {
            const hookStep = step;
            if (!isRemotedToolHookStep(step)) {
                return options2.stepInner?.executeHookForStep(hookStep, request3);
            }
            const hop = attachHopAbortContext(signal ?? currentHookAbortSignal());
            let hopped;
            try {
                hopped = await executor.execute(hop.ctx, remotedToolStepArgs(step, request3));
            } finally{
                hop.detach();
            }
            const raw = remotedStepRawResponse(hopped);
            if (raw === void 0) {
                return void 0;
            }
            const parsed = validateAndParseHookResponse(hookStep, raw);
            return parsed.success ? parsed.data : void 0;
        }
    };
    executor.hasFailClosedHooksForStep = (step, toolName)=>{
        if (options2.inner.hasFailClosedHooksForStep?.(step, toolName) === true) {
            return true;
        }
        if (step === "preToolUse" && options2.stepInner?.hasFailClosedHooksForStep?.("preToolUse", toolName) === true) {
            return true;
        }
        if (step !== "preToolUse") {
            return false;
        }
        const target = resolveSurfaceHookClient(options2);
        return target !== void 0 && options2.hub.isKindProven(target, "hook");
    };
    if (options2.stepInner?.hasHooksForStep !== void 0) {
        executor.hasHooksForStep = (step)=>options2.stepInner?.hasHooksForStep?.(step) === true;
    }
    return executor;
}
function createSurfaceMcpExecutor(options2) {
    return {
        execute: withExecIdCache(async (ctx, args, execOptions)=>settleMcpWriterHop({
                options: options2,
                ctx,
                request: {
                    operation: {
                        case: "mcp",
                        value: args
                    }
                },
                extract: (writer)=>writer.result.case === "mcp" ? writer.result.value : void 0,
                fallback: ()=>options2.inner.execute(ctx, args, execOptions),
                reject: (message)=>new McpResult({
                        result: {
                            case: "error",
                            value: new McpError({
                                error: message
                            })
                        }
                    })
            })),
        ...typeof options2.inner.isBackendRouted === "function" ? {
            isBackendRouted: (providerIdentifier)=>options2.inner.isBackendRouted?.(providerIdentifier) === true
        } : {}
    };
}
function createSurfaceListMcpResourcesExecutor(options2) {
    return {
        execute: withExecIdCache(async (ctx, args, execOptions)=>settleMcpWriterHop({
                options: options2,
                ctx,
                request: {
                    operation: {
                        case: "listMcpResources",
                        value: args
                    }
                },
                extract: (writer)=>writer.result.case === "listMcpResources" ? writer.result.value : void 0,
                fallback: ()=>options2.inner.execute(ctx, args, execOptions),
                reject: (message)=>new ListMcpResourcesExecResult({
                        result: {
                            case: "error",
                            value: new ListMcpResourcesError({
                                error: message
                            })
                        }
                    })
            }))
    };
}
function createSurfaceReadMcpResourceExecutor(options2) {
    return {
        execute: withExecIdCache(async (ctx, args, execOptions)=>settleMcpWriterHop({
                options: options2,
                ctx,
                request: {
                    operation: {
                        case: "readMcpResource",
                        value: args
                    }
                },
                extract: (writer)=>writer.result.case === "readMcpResource" ? writer.result.value : void 0,
                fallback: ()=>options2.inner.execute(ctx, args, execOptions),
                reject: (message)=>new ReadMcpResourceExecResult({
                        result: {
                            case: "error",
                            value: new ReadMcpResourceError({
                                uri: args.uri,
                                error: message
                            })
                        }
                    })
            }))
    };
}
function createSurfaceMcpAllowlistPrecheckExecutor(options2) {
    return {
        execute: withExecIdCache(async (ctx, args, execOptions)=>settleMcpWriterHop({
                options: options2,
                ctx,
                request: {
                    operation: {
                        case: "mcpAllowlistPrecheck",
                        value: args
                    }
                },
                extract: (writer)=>writer.result.case === "mcpAllowlistPrecheck" ? writer.result.value : void 0,
                fallback: ()=>options2.inner.execute(ctx, args, execOptions),
                reject: (_message)=>new McpAllowlistPrecheckResult({
                        allowlisted: false
                    })
            }))
    };
}
function createSurfaceMcpStateExecutor(options2) {
    return {
        execute: withExecIdCache(async (ctx, args, execOptions)=>settleMcpWriterHop({
                options: options2,
                ctx,
                request: {
                    operation: {
                        case: "mcpState",
                        value: args
                    }
                },
                extract: (writer)=>writer.result.case === "mcpState" ? writer.result.value : void 0,
                fallback: ()=>options2.inner.execute(ctx, args, execOptions),
                reject: (message)=>new McpStateExecResult({
                        result: {
                            case: "error",
                            value: new McpStateError({
                                error: message
                            })
                        }
                    })
            }))
    };
}
function withExecIdCache(execute) {
    const cache2 = new Map();
    return async (ctx, args, execOptions)=>{
        const cacheKey2 = execIdCacheKey(args, execOptions);
        if (cacheKey2 !== void 0) {
            const cached2 = cache2.get(cacheKey2);
            if (cached2 !== void 0) {
                return cached2;
            }
        }
        const result = await execute(ctx, args, execOptions);
        if (cacheKey2 !== void 0) {
            cache2.set(cacheKey2, result);
        }
        return result;
    };
}
function execIdCacheKey(args, execOptions) {
    if (execOptions?.execId === void 0 || execOptions.execId.length === 0) {
        return void 0;
    }
    const argsHash = (0, import_node_crypto58.createHash)("sha256").update(args.toBinary()).digest("hex");
    return `${execOptions.execId}:${argsHash}`;
}
async function settleMcpWriterHop(args) {
    const hopped = await hopMcpWriter(args.options, args.request, args.ctx.signal);
    const decision = decideMcpWriterHop(hopped, args.extract);
    if (decision.action === "fallback") {
        return await args.fallback();
    }
    if (decision.action === "use") {
        return decision.value;
    }
    return args.reject(decision.message);
}
function decideMcpWriterHop(hopped, extract) {
    if (hopped === void 0) {
        return {
            action: "fallback"
        };
    }
    switch(hopped.status){
        case "unimplemented":
        case "denied":
            return {
                action: "fallback"
            };
        case "timeout":
            return {
                action: "reject",
                message: MCP_WRITER_DELIVERED_HOP_TIMEOUT
            };
        case "aborted":
            return {
                action: "reject",
                message: MCP_WRITER_DELIVERED_HOP_ABORTED
            };
        case "accepted":
            {
                if (hopped.result?.case === "mcpWriter") {
                    const value = extract(hopped.result.value);
                    if (value !== void 0) {
                        return {
                            action: "use",
                            value
                        };
                    }
                }
                return {
                    action: "reject",
                    message: MCP_WRITER_WRONG_ARM_RESPONSE
                };
            }
        default:
            {
                const exhaustive = hopped;
                return exhaustive;
            }
    }
}
async function hopMcpWriter(options2, request3, signal) {
    const target = options2.hub.resolveHopTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId),
        kind: "mcp_writer"
    });
    if (target === void 0) {
        return void 0;
    }
    return options2.hub.invokeKind({
        kind: "mcp_writer",
        sessionId: options2.sessionId,
        targetClientInstanceId: target,
        signal,
        mcpWriter: new AgentHostSurfaceMcpWriterRequest(request3)
    });
}
function successResult2(requestContext) {
    return new RequestContextResult({
        result: {
            case: "success",
            value: new RequestContextSuccess({
                requestContext
            })
        }
    });
}
function requestContextFromInner(result) {
    if (result.result.case !== "success" || result.result.value.requestContext === void 0) {
        return void 0;
    }
    return result.result.value.requestContext;
}
function fillHeadlessRequestContext(requestContext, options2) {
    if (requestContext.env === void 0) {
        requestContext.env = new RequestContextEnv();
    }
    const env = requestContext.env;
    if (env.osVersion.length === 0) {
        env.osVersion = `${process.platform} ${process.arch}`;
    }
    if (env.workspacePaths.length === 0) {
        env.workspacePaths = [
            ...options2.workspacePaths
        ];
    }
    const shell = options2.env.SHELL;
    if (env.shell.length === 0 && shell !== void 0 && shell.length > 0) {
        env.shell = shell;
    }
    if (requestContext.hooksConfig === void 0 && options2.hooksConfig !== void 0) {
        requestContext.hooksConfig = options2.hooksConfig;
    }
    return requestContext;
}
function overlayRequestContextEnv(args) {
    const native = args.native;
    const surface = args.surface;
    if (surface === void 0) {
        return native;
    }
    if (native === void 0) {
        const cloned = surface.clone();
        cloned.workspacePaths = [];
        cloned.sandboxEnabled = false;
        cloned.sandboxSupported = false;
        return cloned;
    }
    const merged = native.clone();
    if (surface.osVersion.length > 0) {
        merged.osVersion = surface.osVersion;
    }
    if (surface.shell.length > 0) {
        merged.shell = surface.shell;
    }
    if (surface.sandboxNetworkHasDefaults !== void 0) {
        merged.sandboxNetworkHasDefaults = surface.sandboxNetworkHasDefaults;
    }
    if (surface.sandboxNetworkExplicitAllowlist.length > 0) {
        merged.sandboxNetworkExplicitAllowlist = [
            ...surface.sandboxNetworkExplicitAllowlist
        ];
    }
    merged.smartModeClassifierAutoModeEnabled = surface.smartModeClassifierAutoModeEnabled;
    merged.mountedAgentStores = surface.mountedAgentStores.map((store)=>store.clone());
    return merged;
}
function overlayRequestContext(args) {
    const native = args.native;
    const surface = args.surface;
    const merged = native.clone();
    merged.env = overlayRequestContextEnv({
        native: native.env,
        surface: surface.env
    });
    merged.adminCommandDenylist = [
        ...surface.adminCommandDenylist
    ];
    merged.hooksConfig = surface.hooksConfig?.clone();
    merged.hooksAdditionalContext = surface.hooksAdditionalContext;
    merged.commitAttributionMessage = surface.commitAttributionMessage;
    merged.prAttributionMessage = surface.prAttributionMessage;
    merged.fileContents = {
        ...surface.fileContents
    };
    merged.precomputedHumanChanges = surface.precomputedHumanChanges.map((change)=>change.clone());
    merged.repositoryInfo = surface.repositoryInfo.map((info2)=>info2.clone());
    merged.repositoryInfoComplete = surface.repositoryInfoComplete;
    merged.repositoryInfoShouldQueryProd = surface.repositoryInfoShouldQueryProd;
    merged.webSearchEnabled = surface.webSearchEnabled;
    merged.webFetchEnabled = surface.webFetchEnabled;
    merged.searchConversationsEnabled = surface.searchConversationsEnabled;
    merged.userPermissionsAutoRun = surface.userPermissionsAutoRun?.clone();
    merged.projectPermissionsAutoRun = surface.projectPermissionsAutoRun?.clone();
    merged.adminPermissionsAutoRun = surface.adminPermissionsAutoRun?.clone();
    return merged;
}
function resolveSurfaceRequestContextClient(options2) {
    const target = options2.hub.resolveCallbackTarget({
        sessionId: options2.sessionId,
        persistedOwner: options2.resolveOwner(options2.sessionId)
    });
    if (target === void 0 || target.length === 0) {
        return void 0;
    }
    return target;
}
function shouldHopSurfaceRequestContext(hub, clientInstanceId) {
    return hub.canHopKind(clientInstanceId, "request_context") || hub.isKindBound(clientInstanceId, "request_context");
}
function createSurfaceRequestContextExecutor(options2) {
    const fill = (requestContext)=>fillHeadlessRequestContext(requestContext, {
            workspacePaths: options2.workspacePaths,
            env: process.env,
            ...options2.hooksConfig === void 0 ? {} : {
                hooksConfig: options2.hooksConfig
            }
        });
    return {
        async execute (ctx, args, execOptions) {
            const target = resolveSurfaceRequestContextClient(options2);
            const innerPromise = options2.inner.execute(ctx, args, execOptions);
            if (target === void 0 || !shouldHopSurfaceRequestContext(options2.hub, target)) {
                const innerResult2 = await innerPromise;
                const native2 = requestContextFromInner(innerResult2);
                if (native2 === void 0) {
                    return innerResult2;
                }
                return successResult2(fill(native2));
            }
            const startedBound = options2.hub.isKindBound(target, "request_context");
            const [innerResult, hopped] = await Promise.all([
                innerPromise,
                options2.hub.invokeKind({
                    kind: "request_context",
                    sessionId: options2.sessionId,
                    targetClientInstanceId: target,
                    requestContext: new AgentHostSurfaceRequestContextRequest({
                        args
                    }),
                    signal: ctx.signal
                })
            ]);
            const native = requestContextFromInner(innerResult);
            if (native === void 0) {
                return innerResult;
            }
            const filled = fill(native);
            const surface = pickBoundKindResult(options2.hub, target, "request_context", hopped, (result)=>result.case === "requestContext" ? result.value.requestContext : void 0, startedBound);
            if (surface !== void 0) {
                return successResult2(overlayRequestContext({
                    native: filled,
                    surface
                }));
            }
            return successResult2(filled);
        }
    };
}
export function wrapSurfaceResources(options2) {
    const sessionId = options2.context.args.sessionId;
    const provider = options2.context.provider;
    provider.register(conversationSearchExecutorResource, createSurfaceConversationSearchExecutor({
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(gitDiffExecutorResource, createSurfaceGitDiffExecutor({
        inner: provider.get(gitDiffExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    const workspacePath = options2.workspacePaths[0];
    const createHookExecutor = options2.createHookExecutor ?? createHeadlessDiskHookExecutor;
    const hooks = workspacePath === void 0 ? void 0 : createHookExecutor({
        sessionId,
        workspacePath,
        workspaceTrusted: isHeadlessWorkspaceTrusted({
            workspacePath,
            ...options2.workspaceTrusted === void 0 ? {} : {
                workspaceTrusted: options2.workspaceTrusted
            }
        })
    });
    const hookExecutor = hooks?.hookExecutor ?? NOOP_HEADLESS_HOOK_EXECUTOR;
    const hooksConfig = hooks?.hooksConfig;
    provider.register(requestContextExecutorResource, createSurfaceRequestContextExecutor({
        inner: provider.get(requestContextExecutorResource),
        hub: options2.hub,
        sessionId,
        workspacePaths: options2.workspacePaths,
        resolveOwner: options2.resolveOwner,
        ...hooksConfig === void 0 ? {} : {
            hooksConfig
        }
    }));
    const surfaceHook = createSurfaceHookExecutor({
        inner: new LocalHookExecutorImpl(hookExecutor),
        stepInner: hookExecutor,
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    });
    provider.register(agentStoreConflictNoticeExecutorResource, createSurfaceAgentStoreConflictNoticeExecutor({
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(canvasDiagnosticsExecutorResource, createSurfaceCanvasExecutor({
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(mcpExecutorResource, createSurfaceMcpExecutor({
        inner: provider.get(mcpExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(listMcpResourcesExecutorResource, createSurfaceListMcpResourcesExecutor({
        inner: provider.get(listMcpResourcesExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(readMcpResourceExecutorResource, createSurfaceReadMcpResourceExecutor({
        inner: provider.get(readMcpResourceExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(mcpAllowlistPrecheckExecutorResource, createSurfaceMcpAllowlistPrecheckExecutor({
        inner: provider.get(mcpAllowlistPrecheckExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    provider.register(mcpStateExecutorResource, createSurfaceMcpStateExecutor({
        inner: provider.get(mcpStateExecutorResource),
        hub: options2.hub,
        sessionId,
        resolveOwner: options2.resolveOwner
    }));
    const hooksOverlay = createHeadlessHooksOverlay({
        provider,
        hookExecutor: surfaceHook,
        mcpLease: options2.context.args.mcpLease,
        context: {
            conversation_id: sessionId,
            generation_id: options2.context.args.rootSessionId,
            model: "headless",
            model_id: "headless",
            model_params: []
        }
    });
    return {
        accessor: new ListableCombinedResourceAccessor(hooksOverlay.accessor, [
            resourceEntry(hookExecutorResource, surfaceHook)
        ]),
        dispose: async ()=>{
            try {
                await hooks?.dispose?.();
            } finally{
                await options2.onDispose?.();
            }
        }
    };
}
function cursorRequestIdOf(message) {
    const requestId = message.providerOptions?.cursor?.requestId;
    return message.role === "user" && typeof requestId === "string" ? requestId : "";
}
function createManagedLocalTurnLabeling(client) {
    return (input)=>{
        const { ctx, requestId, conversationId } = input;
        let executorRef;
        let modelName;
        let followupScheduled = false;
        const recordFollowup = async (executor, attemptModelName)=>{
            if (conversationId === "") {
                return;
            }
            const messages = executor.getMessages();
            if (messages.length === 0) {
                return;
            }
            const replyingToRequestId = await extractPreviousRequestId(ctx, input.blobStore, input.conversationState.turns);
            await client.recordAgentFollowupClassification(new AgentFollowupCategorizationRequest({
                requestId,
                replyingToRequestId: replyingToRequestId ?? "",
                messages: messages.map((message)=>coreMessageToProto(message)),
                messageRequestIds: messages.map(cursorRequestIdOf),
                conversationId,
                agentMode: MANAGED_LOCAL_AGENT_MODE,
                turnAgentMode: labelingAgentMode(input.conversationState),
                modelName: attemptModelName
            }));
        };
        const recordPostTurn = async (executor, finalState)=>{
            const messages = executor.getMessages();
            if (messages.length === 0) {
                return;
            }
            await client.recordAgentPostTurnLabeling(new AgentPostTurnLabelingRequest({
                requestId,
                messages: messages.map((message)=>coreMessageToProto(message)),
                conversationId,
                agentMode: MANAGED_LOCAL_AGENT_MODE,
                turnAgentMode: labelingAgentMode(finalState),
                modelName
            }));
        };
        const scheduleFollowupOnce = (executor)=>{
            if (followupScheduled) {
                return;
            }
            followupScheduled = true;
            void recordFollowup(executor, modelName).catch((error3)=>{
                logger143.warn(ctx, "Managed local follow-up classification failed", {
                    requestId,
                    error: error3
                });
            });
        };
        const wrapExecutor = (executor)=>{
            executorRef = executor;
            const runWithToolCallEventRecorder = executor.runWithToolCallEventRecorder;
            return {
                appendMessages (messages) {
                    executor.appendMessages(messages);
                    return this;
                },
                getState: ()=>executor.getState(),
                getMessages: ()=>executor.getMessages(),
                clearMessages: ()=>executor.clearMessages(),
                executeToolStream: (...args)=>{
                    scheduleFollowupOnce(executor);
                    return executor.executeToolStream(...args);
                },
                executeModelStreamOnly: (...args)=>{
                    scheduleFollowupOnce(executor);
                    return executor.executeModelStreamOnly(...args);
                },
                stream: (...args)=>{
                    scheduleFollowupOnce(executor);
                    return executor.stream(...args);
                },
                ...runWithToolCallEventRecorder === void 0 ? {} : {
                    runWithToolCallEventRecorder: runWithToolCallEventRecorder.bind(executor)
                }
            };
        };
        return {
            wrapPromptToolSession: (session, attempt)=>{
                modelName = attempt.resolvedModelId;
                return {
                    getExecutor: (state)=>wrapExecutor(session.getExecutor(state))
                };
            },
            onRunFinished: (status, finalState)=>{
                if (status !== "success" || executorRef === void 0 || conversationId === "") {
                    return;
                }
                void recordPostTurn(executorRef, finalState ?? input.conversationState).catch((error3)=>{
                    logger143.warn(ctx, "Managed local post-turn labeling failed", {
                        requestId,
                        error: error3
                    });
                });
            }
        };
    };
}
function createManagedLocalConversationBlobUploader(client) {
    return {
        upload: async (_ctx, batch)=>{
            await client.uploadConversationBlobs(new UploadConversationBlobsRequest({
                conversationId: batch.conversationId,
                blobs: batch.blobs.map((blob)=>new BlobEntry({
                        id: toUint8Array(blob.id),
                        value: toUint8Array(blob.value)
                    })),
                chunkIndex: batch.sequenceNumber
            }), {
                headers: {
                    "x-request-id": batch.attemptRequestId
                }
            });
        }
    };
}
export function createManagedLocalAgentClient(options2) {
    return new LocalLoopAgentClient({
        createAgentConfig: (input)=>{
            const built = createManagedLocalAgentConfig(input, options2.agentToolsClient);
            return {
                ...built,
                config: {
                    ...built.config,
                    bindConversationMessageInputs: true
                }
            };
        },
        createPromptSession: createRunInferencePromptSessionFactory(options2.inferenceClient, options2.agentModule),
        getPrivacyMode: ()=>parseAgentHostPrivacyMode(options2.getPrivacyModeEnum()),
        agentEvents: {
            source: "attempt"
        },
        retryLogging: options2.retryLogging ?? {
            tag: MANAGED_LOCAL_RETRY_IDENTITY.logTag
        },
        reconnectEndpoint: MANAGED_LOCAL_RETRY_IDENTITY.reconnectEndpoint,
        prepareAttemptContext: composeManagedLocalPrepareAttemptContext(options2.attachAttemptContext, options2.metricTags),
        createTurnLabeling: createManagedLocalTurnLabeling(options2.inferenceClient),
        ...options2.conversationBlobClient === void 0 ? {} : {
            conversationBlobUploader: createManagedLocalConversationBlobUploader(options2.conversationBlobClient)
        }
    });
}
function wireChannel(channel) {
    if (channel === void 0) {
        return "unknown";
    }
    return WIRE_CHANNELS.includes(channel) ? channel : "other";
}
export function runInferenceAgentModule(build2, channel) {
    return new RunInferenceAgentModule({
        generation: build2.generation,
        source: WIRE_SOURCE[build2.source],
        channel: wireChannel(channel),
        ...build2.commit !== void 0 && /^[0-9a-f]{40}$/.test(build2.commit) ? {
            commit: build2.commit
        } : {},
        interfaceRevision: HARNESS_INTERFACE_REVISION,
        promptVersions: [
            ...KNOWN_PROMPT_VERSIONS
        ]
    });
}
export function hostModuleChannel(hostServices) {
    return hostServices.spanAttributes?.module_channel;
}
function logRunInferenceInvocations(input, log5) {
    return {
        async *[Symbol.asyncIterator] () {
            for await (const message of input){
                if (message instanceof RunInferenceClientMessage && message.message.case === "invokeModel") {
                    log5(`RunInference invocation=${message.message.value.invocationId}`);
                }
                yield message;
            }
        }
    };
}
export function wrapBackendTransport(transport, log5, ConnectErrorClass) {
    const remint = (error3)=>{
        const foreign = readForeignConnectError(error3, ConnectErrorClass);
        if (foreign === void 0) {
            return error3;
        }
        const reminted = new ConnectErrorClass(foreign.rawMessage ?? foreign.message, foreign.code, foreign.metadata, void 0, foreign.cause ?? error3);
        reminted.details = foreign.details;
        return reminted;
    };
    const remintIterable = (source)=>({
            async *[Symbol.asyncIterator] () {
                try {
                    yield* source;
                } catch (error3) {
                    throw remint(error3);
                }
            }
        });
    const wrapped = {
        async unary (...args) {
            try {
                return await transport.unary(...args);
            } catch (error3) {
                throw remint(error3);
            }
        },
        async stream (...args) {
            const [service, method] = args;
            if (service.typeName === RUN_INFERENCE.service && method.name === RUN_INFERENCE.method) {
                args[5] = logRunInferenceInvocations(args[5], log5);
            }
            try {
                const response = await transport.stream(...args);
                return {
                    ...response,
                    message: remintIterable(response.message)
                };
            } catch (error3) {
                throw remint(error3);
            }
        }
    };
    return wrapped;
}
function isRawErrorDetail(detail) {
    return typeof detail === "object" && detail !== null && "type" in detail && typeof detail.type === "string" && "value" in detail && detail.value instanceof Uint8Array;
}
function readForeignConnectError(error3, ConnectErrorClass) {
    if (error3 instanceof ConnectErrorClass || !(error3 instanceof Error) || error3.name !== "ConnectError") {
        return void 0;
    }
    const code = "code" in error3 ? error3.code : void 0;
    if (typeof code !== "number") {
        return void 0;
    }
    const rawMessage = "rawMessage" in error3 ? error3.rawMessage : void 0;
    const metadata = "metadata" in error3 ? error3.metadata : void 0;
    const details = "details" in error3 ? error3.details : void 0;
    return {
        message: error3.message,
        rawMessage: typeof rawMessage === "string" ? rawMessage : void 0,
        code,
        metadata: metadata instanceof Headers ? metadata : void 0,
        details: Array.isArray(details) ? details.filter(isRawErrorDetail) : [],
        cause: error3.cause
    };
}
function createDrainingWritable() {
    const out = createWritableIterable();
    const unread = new Set();
    let closed2 = false;
    return {
        write: (value)=>{
            if (closed2) {
                return Promise.resolve();
            }
            const written = out.write(value).catch((error3)=>{
                if (!closed2) {
                    throw error3;
                }
            });
            unread.add(written);
            const read = ()=>{
                unread.delete(written);
            };
            written.then(read, read);
            return written;
        },
        closeWhenRead: ()=>{
            closed2 = true;
            void Promise.allSettled(unread).then(()=>out.close());
        },
        close: ()=>{
            closed2 = true;
            out.close();
        },
        [Symbol.asyncIterator]: ()=>out[Symbol.asyncIterator]()
    };
}
export function closedBeforeAnswer() {
    return new InteractionListenerStreamClosedError("agent harness: client stream closed before the query was answered");
}
function heartbeatFrame() {
    return new AgentServerMessage({
        message: {
            case: "interactionUpdate",
            value: {
                message: {
                    case: "heartbeat",
                    value: new HeartbeatUpdate()
                }
            }
        }
    });
}
function wireTtftBreakdown(breakdown) {
    return new TtftBreakdown({
        serverFirstTokenMs: breakdown.serverFirstTokenMs,
        preStreamSetupMs: breakdown.preStreamSetupMs,
        waitForFirstEventMs: breakdown.waitForFirstEventMs,
        ...breakdown.providerTtftMs === void 0 ? {} : {
            providerTtftMs: breakdown.providerTtftMs
        },
        slowPoolWaitMs: breakdown.slowPoolWaitMs,
        ...breakdown.clientPrepMs === void 0 ? {} : {
            clientPrepMs: breakdown.clientPrepMs
        },
        clientClock: breakdown.clock === "client"
    });
}
function asListable(accessor) {
    return {
        get: (resource)=>accessor.get(resource),
        entries: ()=>[]
    };
}
function headerValue(headers, name17) {
    const value = headers.get(name17);
    return value === null || value === "" ? void 0 : value;
}
function runOptionsFromRequest(request3, requestHeader2, seam) {
    const conversationId = request3.conversationId ?? headerValue(requestHeader2, "x-conversation-id") ?? "";
    const options2 = {
        conversationId,
        ...request3.conversationGroupId === void 0 ? {} : {
            conversationGroupId: request3.conversationGroupId
        },
        ...request3.agentSessionId === void 0 ? {} : {
            agentSessionId: request3.agentSessionId
        },
        ...request3.nextInteractionQueryId === void 0 ? {} : {
            nextInteractionQueryId: request3.nextInteractionQueryId
        },
        generationUUID: request3.runId ?? headerValue(requestHeader2, "x-original-request-id") ?? headerValue(requestHeader2, "x-request-id"),
        ...headerValue(requestHeader2, "x-request-id") === void 0 ? {} : {
            firstAttemptRequestId: headerValue(requestHeader2, "x-request-id")
        },
        ...headerValue(requestHeader2, "x-parent-request-id") === void 0 ? {} : {
            parentRequestId: headerValue(requestHeader2, "x-parent-request-id")
        },
        ...headerValue(requestHeader2, "x-root-parent-request-id") === void 0 ? {} : {
            rootParentRequestId: headerValue(requestHeader2, "x-root-parent-request-id")
        },
        ...headerValue(requestHeader2, "x-parent-agent-tool-call-id") === void 0 ? {} : {
            parentAgentToolCallId: headerValue(requestHeader2, "x-parent-agent-tool-call-id")
        },
        ...headerValue(requestHeader2, "x-direct-meta-parent-child-subagent") === "true" ? {
            directMetaParentChildSubagent: true
        } : {},
        ...request3.suppressSubagentProgressUpdateTool === void 0 ? {} : {
            suppressSubagentProgressUpdateTool: request3.suppressSubagentProgressUpdateTool
        },
        ...request3.mcpFileSystemOptions === void 0 ? {} : {
            mcpFileSystemOptions: request3.mcpFileSystemOptions
        },
        ...request3.customSystemPrompt === void 0 ? {} : {
            customSystemPrompt: request3.customSystemPrompt
        },
        ...request3.harness === void 0 ? {} : {
            harness: request3.harness
        },
        ...request3.computerUseCoordinateMode === "pixels" || request3.computerUseCoordinateMode === "percent" ? {
            computerUseCoordinateMode: request3.computerUseCoordinateMode
        } : {},
        ...request3.excludeWorkspaceContext === void 0 ? {} : {
            excludeWorkspaceContext: request3.excludeWorkspaceContext
        },
        ...request3.requestedModel === void 0 ? {} : {
            requestedModel: request3.requestedModel
        },
        ...request3.devRawModelSlug === void 0 ? {} : {
            devRawModelSlug: request3.devRawModelSlug
        },
        ...request3.selectedSubagentModels.length === 0 ? {} : {
            selectedSubagentModels: request3.selectedSubagentModels
        },
        ...request3.subagentModelOverrides.length === 0 ? {} : {
            subagentModelOverrides: request3.subagentModelOverrides
        },
        ...request3.selectedSubagentModelDetails.length === 0 ? {} : {
            selectedSubagentModelsLegacy: request3.selectedSubagentModelDetails
        },
        ...request3.suggestNextPrompt === void 0 ? {} : {
            suggestNextPrompt: request3.suggestNextPrompt
        },
        ...request3.subagentTypeName === void 0 ? {} : {
            subagentTypeName: request3.subagentTypeName
        },
        ...request3.clientSupportsInlineImages === void 0 ? {} : {
            clientSupportsInlineImages: request3.clientSupportsInlineImages
        },
        ...request3.clientSupportsPreviewCard === void 0 ? {} : {
            clientSupportsPreviewCard: request3.clientSupportsPreviewCard
        },
        ...request3.startedAsNewProject === void 0 ? {} : {
            startedAsNewProject: request3.startedAsNewProject
        },
        ...request3.firstProjectOnboarding === void 0 ? {} : {
            firstProjectOnboarding: request3.firstProjectOnboarding
        },
        ...request3.clientSupportsSendToUser === void 0 ? {} : {
            clientSupportsSendToUser: request3.clientSupportsSendToUser
        },
        ...request3.clientSupportsRoutedModelUpdate === void 0 ? {} : {
            clientSupportsRoutedModelUpdate: request3.clientSupportsRoutedModelUpdate
        },
        ...request3.canCreateCloudSubagents === void 0 ? {} : {
            canCreateCloudSubagents: request3.canCreateCloudSubagents
        },
        ...seam,
        enableAgentRetries: false
    };
    return options2;
}
function parseAnnotationsJson2(json2) {
    return json2 === void 0 || json2 === "" ? void 0 : parseJsonObject2(json2);
}
function mcpToolsFromRequest(request3) {
    return (request3.mcpTools?.mcpTools ?? []).map((tool)=>{
        const outputSchema = parseMcpOutputSchemaJson(tool.outputSchemaJson);
        const annotations = parseAnnotationsJson2(tool.annotationsJson);
        return {
            clientKey: tool.providerIdentifier,
            name: tool.name,
            providerIdentifier: tool.providerIdentifier,
            toolName: tool.toolName,
            description: tool.description,
            inputSchema: mcpInputSchemaToJson(tool) ?? {},
            ...outputSchema === void 0 ? {} : {
                outputSchema
            },
            ...annotations === void 0 ? {} : {
                annotations
            }
        };
    });
}
function toConnectError3(error3) {
    if (error3 instanceof ConnectError) {
        return error3;
    }
    const message = error3 instanceof Error ? error3.message : String(error3);
    if (error3 instanceof CancelledError) {
        const details = error3.displayInfo?.errorDetails;
        const code = error3.displayInfo?.connectCode ?? Code.Canceled;
        return new ConnectError(withoutCodePrefix(message, code), code, void 0, details === void 0 ? void 0 : [
            withRelayedAttemptFailure(details, localLoopRelayedFailure(error3))
        ]);
    }
    if (error3 instanceof AgentError) {
        const agentError = error3;
        const display = agentError.displayInfo;
        const isRetryable = isHostRetryable(agentError);
        const code = display?.connectCode ?? (isRetryable ? Code.Unavailable : Code.FailedPrecondition);
        const hasCopy = Boolean(display?.title) || Boolean(display?.detail);
        const details = display?.errorDetails ?? (hasCopy ? new ErrorDetails({
            error: display?.errorCode ?? ErrorDetails_Error.CUSTOM_MESSAGE,
            details: new CustomErrorDetails({
                title: display?.title,
                detail: display?.detail,
                isRetryable
            })
        }) : (new ErrorDetails({
            error: isRetryable ? ErrorDetails_Error.UNSPECIFIED : ErrorDetails_Error.CUSTOM_MESSAGE
        })));
        return new ConnectError(withoutCodePrefix(message, code), code, void 0, [
            withRelayedAttemptFailure(details, localLoopRelayedFailure(agentError))
        ], agentError);
    }
    if (error3 instanceof Error && error3.name === "AbortError") {
        return new ConnectError(message, Code.Canceled, void 0, void 0, error3);
    }
    return new ConnectError(message, Code.Internal, void 0, void 0, error3);
}
function isHostRetryable(error3) {
    return error3.displayInfo?.isRetryable ?? error3.kind === "RetriableError";
}
function isLoopFailure(error3) {
    const chain = [];
    for(let current = error3; current instanceof Error; current = current.cause){
        if (chain.includes(current)) {
            break;
        }
        chain.push(current);
    }
    const ruledOut = chain.some((link)=>link instanceof CancelledError || link instanceof ConnectError || link.name === "AbortError" || link instanceof AgentError && (link.kind !== "RetriableError" || link.displayInfo !== void 0 || isTransportError(link)));
    const thrown = chain.find((link)=>!(link instanceof AgentError));
    return !ruledOut && thrown !== void 0 && classifyTurnError(thrown) === "loop";
}
function toRelayedError(error3) {
    const relayed = toConnectError3(error3);
    if (!(error3 instanceof ConnectError) && isLoopFailure(error3)) {
        relayed.metadata.set(HARNESS_FAILURE_METADATA, HARNESS_LOOP_FAILURE);
    }
    return relayed;
}
export async function* serveRun(services, requests, context2) {
    const iterator = requests[Symbol.asyncIterator]();
    const first = await iterator.next();
    if (first.done || first.value.message.case !== "runRequest") {
        throw new ConnectError("agent harness: the first message must be a runRequest", Code.InvalidArgument);
    }
    const runRequest = first.value.message.value;
    if (runRequest.conversationState === void 0) {
        throw new ConnectError("agent harness: runRequest carries no conversation state", Code.InvalidArgument);
    }
    if (runRequest.action === void 0) {
        throw new ConnectError("agent harness: runRequest carries no action", Code.InvalidArgument);
    }
    const conversationState = runRequest.conversationState;
    const seam = takeSeamRunOptions(runRequest, context2.requestHeader);
    const action = runRequest.action;
    const privacyMode = services.getPrivacyMode();
    const log5 = services.log;
    const runOptionsFromSeam = runOptionsFromRequest(runRequest, context2.requestHeader, seam);
    let pendingTtftBreakdown;
    const runOptions = {
        ...runOptionsFromSeam,
        onTtftBreakdown: (breakdown, attempt)=>{
            pendingTtftBreakdown ??= breakdown;
            runOptionsFromSeam.onTtftBreakdown?.(breakdown, attempt);
        }
    };
    const runId = runOptions.generationUUID ?? "?";
    const out = createDrainingWritable();
    const execStream = createWritableIterable();
    const kvStream = createWritableIterable();
    const [ctx, cancelCtx] = withInProcessCallerSpan(services.context, context2.requestHeader).withCancel();
    const listener = new StreamInteractionListener(new MapWritable(out, (message)=>{
        const ttftBreakdown = message instanceof InteractionQuery || pendingTtftBreakdown === void 0 ? void 0 : wireTtftBreakdown(pendingTtftBreakdown);
        if (ttftBreakdown !== void 0) {
            pendingTtftBreakdown = void 0;
        }
        return new AgentServerMessage({
            message: message instanceof InteractionQuery ? {
                case: "interactionQuery",
                value: message
            } : {
                case: "interactionUpdate",
                value: message
            },
            ...ttftBreakdown === void 0 ? {} : {
                ttftBreakdown
            }
        });
    }), log5);
    const redactedExecManager = new SimpleExecManager(ctx, new MapWritable(out, (message)=>new AgentServerMessage({
            message: isRedactedExecServerMessage(message) ? {
                case: "execServerMessage",
                value: fromRedactedExecServerMessage(message, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)
            } : {
                case: "execServerControlMessage",
                value: fromRedactedExecServerControlMessage(message, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)
            }
        })), execStream);
    const resources = asListable(new RemoteResourceAccessor(new RedactedToPlainExecManagerAdapter(redactedExecManager, privacyMode)));
    const blobStore = new RemoteKvManager(ctx, new MapWritable(out, (message)=>new AgentServerMessage({
            message: {
                case: "kvServerMessage",
                value: fromRedactedKvServerMessage(message, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED)
            }
        })), kvStream);
    const conversationActionManager = new ControlledConversationActionManager();
    let latestCheckpoint;
    let failedAttemptDrain;
    const checkpointHandler = {
        handleCheckpoint: async (_ctx, checkpoint)=>{
            if (failedAttemptDrain !== void 0) {
                return;
            }
            latestCheckpoint = checkpoint;
            await out.write(new AgentServerMessage({
                message: {
                    case: "conversationCheckpointUpdate",
                    value: checkpoint
                }
            }));
        },
        getLatestCheckpoint: ()=>latestCheckpoint
    };
    const dropped = Promise.withResolvers();
    let loopSettled = false;
    const cancelDrainMs = services.cancelDrainMs ?? HOST_CANCEL_DRAIN_MS;
    const clock = services.clock ?? realHarnessClock;
    let cancelDrainArmed;
    const onAbort = ()=>{
        failedAttemptDrain?.resolve();
        conversationActionManager.abort("agent harness: host aborted the call");
        cancelCtx();
        out.close();
        if (loopSettled) {
            return;
        }
        cancelDrainArmed = clock.schedule(cancelDrainMs, ()=>{
            if (loopSettled) {
                return;
            }
            log5(`run ${runId}: host cancelled the call and the loop is still running after ${cancelDrainMs}ms; dropping the invocation (the loop's own state stays resident until it settles)`);
            listener.close();
            dropped.resolve({
                ok: false,
                error: new ConnectError(`agent harness: host cancelled the call; the loop did not stop within ${cancelDrainMs}ms and the invocation was dropped`, Code.Canceled)
            });
        });
    };
    if (context2.signal.aborted) {
        onAbort();
    } else {
        context2.signal.addEventListener("abort", onAbort, {
            once: true
        });
    }
    const pump = (async ()=>{
        try {
            for(;;){
                const next = await iterator.next();
                if (next.done) {
                    break;
                }
                const message = next.value.message;
                switch(message.case){
                    case "execClientMessage":
                        await execStream.write(toRedactedExecClientMessage(message.value, privacyMode));
                        break;
                    case "execClientControlMessage":
                        await execStream.write(toRedactedExecClientControlMessage(message.value, privacyMode));
                        break;
                    case "kvClientMessage":
                        await kvStream.write(toRedactedKvClientMessage(message.value, privacyMode));
                        break;
                    case "interactionResponse":
                        listener.handleResponse(message.value);
                        break;
                    case "conversationAction":
                        await conversationActionManager.submitConversationAction(message.value);
                        break;
                    case "runRequest":
                        log5("second runRequest on one stream ignored");
                        break;
                    case "clientHeartbeat":
                    case "prewarmRequest":
                    case void 0:
                        break;
                }
            }
        } catch (error3) {
            if (!(error3 instanceof WriteIterableClosedError)) {
                log5(`request stream failed: ${errorMessage3(error3)}`);
            }
        } finally{
            execStream.close();
            kvStream.close();
            listener.close();
        }
    })();
    const heartbeat = repeatAfterSettle(clock, HEARTBEAT_INTERVAL_MS, ()=>out.write(heartbeatFrame()));
    const run = services.agentClient.run(ctx, conversationState, action, runRequest.modelDetails, listener, resources, blobStore, conversationActionManager, checkpointHandler, mcpToolsFromRequest(runRequest), runOptions).then(async ()=>{
        await listener.flushPostTurnEndedWork(ctx);
    }).then(()=>({
            ok: true
        }), async (error3)=>{
        if (error3 instanceof AgentError && isHostRetryable(error3) && !context2.signal.aborted) {
            const drain = Promise.withResolvers();
            failedAttemptDrain = drain;
            const deadline = clock.schedule(FAILED_ATTEMPT_DRAIN_MS, drain.resolve);
            await drain.promise;
            deadline.dispose();
        }
        return {
            ok: false,
            error: error3
        };
    }).finally(()=>{
        loopSettled = true;
        cancelDrainArmed?.dispose();
        heartbeat.dispose();
        out.closeWhenRead();
    });
    try {
        yield heartbeatFrame();
        for await (const frame of out){
            yield frame;
        }
        const outcome = await Promise.race([
            dropped.promise,
            run
        ]);
        if (!outcome.ok) {
            throw outcome.error;
        }
    } catch (error3) {
        throw context2.signal.aborted ? toConnectError3(error3) : toRelayedError(error3);
    } finally{
        out.close();
        heartbeat.dispose();
        cancelDrainArmed?.dispose();
        context2.signal.removeEventListener("abort", onAbort);
        cancelCtx();
        conversationActionManager.dispose();
        void iterator.return?.().catch((error3)=>{
            log5(`request stream release failed: ${errorMessage3(error3)}`);
        });
        execStream.close();
        kvStream.close();
        void pump;
    }
}
function errorMessage3(error3) {
    return error3 instanceof Error ? error3.message : String(error3);
}
export { AGENT_DATA_CLEANUP_INITIAL_DELAY_MS, ALL_RUNTIME_SETTING_SOURCES, AutoApprovePendingDecisionProvider, CachedTeamSettingsService, DenyPendingDecisionProvider, DenyPermissionsService, HostedMcpLeaseFilter, HostedMcpRoutingState, MCP_TOOL_CLIENT_CALL_DURATION_STAT, NoopCodebaseReferenceProvider, NoopCursorRulesService, NoopDiagnosticsProvider, createAgentHostExec, createCredentialBoundTeamSettingsService, createDeferredConnectTransport, createEmptyTeamSettingsService2, createHeadlessDecisionProvider, createHeadlessDiskHookExecutor, createHeadlessHooksOverlay, createHeadlessMcpGrantStore, createHeadlessMcpLease, createHeadlessSettingSourcesLoader, createHostedMcpRoutingProvider, createTurnRuntimeCallerResolver, hasSettingSource, headlessMcpDefinitionRef, isHeadlessWorkspaceTrusted, isNoAmbientSettings, listHeadlessMcpDefinitions, normalizeHeadlessDiskSettingSources, normalizeSettingSources, runAgentDataCleanupIfDue, scheduleAgentDataCleanup };

export var dist_exports4 = {};
Object.defineProperty(dist_exports4, "AGENT_DATA_CLEANUP_INITIAL_DELAY_MS", {
    enumerable: true,
    get: ()=>AGENT_DATA_CLEANUP_INITIAL_DELAY_MS
});
Object.defineProperty(dist_exports4, "ALL_RUNTIME_SETTING_SOURCES", {
    enumerable: true,
    get: ()=>ALL_RUNTIME_SETTING_SOURCES
});
Object.defineProperty(dist_exports4, "AutoApprovePendingDecisionProvider", {
    enumerable: true,
    get: ()=>AutoApprovePendingDecisionProvider
});
Object.defineProperty(dist_exports4, "CachedTeamSettingsService", {
    enumerable: true,
    get: ()=>CachedTeamSettingsService
});
Object.defineProperty(dist_exports4, "DenyPendingDecisionProvider", {
    enumerable: true,
    get: ()=>DenyPendingDecisionProvider
});
Object.defineProperty(dist_exports4, "DenyPermissionsService", {
    enumerable: true,
    get: ()=>DenyPermissionsService
});
Object.defineProperty(dist_exports4, "HostedMcpLeaseFilter", {
    enumerable: true,
    get: ()=>HostedMcpLeaseFilter
});
Object.defineProperty(dist_exports4, "HostedMcpRoutingState", {
    enumerable: true,
    get: ()=>HostedMcpRoutingState
});
Object.defineProperty(dist_exports4, "MCP_TOOL_CLIENT_CALL_DURATION_STAT", {
    enumerable: true,
    get: ()=>MCP_TOOL_CLIENT_CALL_DURATION_STAT
});
Object.defineProperty(dist_exports4, "NoopCodebaseReferenceProvider", {
    enumerable: true,
    get: ()=>NoopCodebaseReferenceProvider
});
Object.defineProperty(dist_exports4, "NoopCursorRulesService", {
    enumerable: true,
    get: ()=>NoopCursorRulesService
});
Object.defineProperty(dist_exports4, "NoopDiagnosticsProvider", {
    enumerable: true,
    get: ()=>NoopDiagnosticsProvider
});
Object.defineProperty(dist_exports4, "createAgentHostExec", {
    enumerable: true,
    get: ()=>createAgentHostExec
});
Object.defineProperty(dist_exports4, "createCredentialBoundTeamSettingsService", {
    enumerable: true,
    get: ()=>createCredentialBoundTeamSettingsService
});
Object.defineProperty(dist_exports4, "createDeferredConnectTransport", {
    enumerable: true,
    get: ()=>createDeferredConnectTransport
});
Object.defineProperty(dist_exports4, "createEmptyTeamSettingsService", {
    enumerable: true,
    get: ()=>createEmptyTeamSettingsService2
});
Object.defineProperty(dist_exports4, "createHeadlessDecisionProvider", {
    enumerable: true,
    get: ()=>createHeadlessDecisionProvider
});
Object.defineProperty(dist_exports4, "createHeadlessDiskHookExecutor", {
    enumerable: true,
    get: ()=>createHeadlessDiskHookExecutor
});
Object.defineProperty(dist_exports4, "createHeadlessHooksOverlay", {
    enumerable: true,
    get: ()=>createHeadlessHooksOverlay
});
Object.defineProperty(dist_exports4, "createHeadlessMcpGrantStore", {
    enumerable: true,
    get: ()=>createHeadlessMcpGrantStore
});
Object.defineProperty(dist_exports4, "createHeadlessMcpLease", {
    enumerable: true,
    get: ()=>createHeadlessMcpLease
});
Object.defineProperty(dist_exports4, "createHeadlessSettingSourcesLoader", {
    enumerable: true,
    get: ()=>createHeadlessSettingSourcesLoader
});
Object.defineProperty(dist_exports4, "createHostedMcpRoutingProvider", {
    enumerable: true,
    get: ()=>createHostedMcpRoutingProvider
});
Object.defineProperty(dist_exports4, "createTurnRuntimeCallerResolver", {
    enumerable: true,
    get: ()=>createTurnRuntimeCallerResolver
});
Object.defineProperty(dist_exports4, "hasSettingSource", {
    enumerable: true,
    get: ()=>hasSettingSource
});
Object.defineProperty(dist_exports4, "headlessMcpDefinitionRef", {
    enumerable: true,
    get: ()=>headlessMcpDefinitionRef
});
Object.defineProperty(dist_exports4, "isHeadlessWorkspaceTrusted", {
    enumerable: true,
    get: ()=>isHeadlessWorkspaceTrusted
});
Object.defineProperty(dist_exports4, "isNoAmbientSettings", {
    enumerable: true,
    get: ()=>isNoAmbientSettings
});
Object.defineProperty(dist_exports4, "listHeadlessMcpDefinitions", {
    enumerable: true,
    get: ()=>listHeadlessMcpDefinitions
});
Object.defineProperty(dist_exports4, "normalizeHeadlessDiskSettingSources", {
    enumerable: true,
    get: ()=>normalizeHeadlessDiskSettingSources
});
Object.defineProperty(dist_exports4, "normalizeSettingSources", {
    enumerable: true,
    get: ()=>normalizeSettingSources
});
Object.defineProperty(dist_exports4, "runAgentDataCleanupIfDue", {
    enumerable: true,
    get: ()=>runAgentDataCleanupIfDue
});
Object.defineProperty(dist_exports4, "scheduleAgentDataCleanup", {
    enumerable: true,
    get: ()=>scheduleAgentDataCleanup
});
