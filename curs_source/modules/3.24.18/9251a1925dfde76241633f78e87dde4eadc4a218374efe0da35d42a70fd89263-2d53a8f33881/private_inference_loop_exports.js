import { isTerminalShellInterpreterAllowlistCandidate, readManifest } from "./dist_exports.js";
import { cursorAgentsDir, resolveHostGitExecutor, resolveHostMcpProvider } from "./dashboard_connect_exports.js";
import { createAgentHostBackendClients } from "./mcp_sandbox_policy_exports.js";
import { createAgentHost, createDefaultModelDetails, createHarnessAgentClient, createHostedSession, createLocalLoopTurnRouter, createNativeCloudSubagentRunnerForHost, createPrivateInferenceAgentClient, createPrivateInferenceSessionProvider, createPrivateInferenceUsageAdmission, lendBackendTransport, lendHostServices, loadPrivateInferenceCatalog, moduleTags, rejectHostQuestion, toTurnErrorMessage, withLocalLoopTurnMetrics } from "./tree_chunk_napi_exports.js";
import { subagentAwaitExecutorResource } from "./agent-exec/dist/subagent-await.js";
import { forceBackgroundSubagentExecutorResource } from "./agent-exec/dist/subagent-control.js";
import { subagentExecutorResource } from "./agent-exec/dist/subagent.js";
import { AGENT_HOST_SURFACE_SPAN_ATTRIBUTE, AGENT_HOST_SURFACE_TAG } from "./agent-host/dist/agentAdapter/local/headless-local-loop-telemetry.js";
import { PrivateInferencePromptQualityCaptures } from "./agent-host/dist/agentAdapter/local/private-inference-prompt-quality.js";
import { PrivateInferenceUsageOutbox } from "./agent-host/dist/agentAdapter/local/private-inference-usage-outbox.js";
import { AgentClientHostAdapter } from "./agent-host/dist/agentAdapter/shared/agent-client-host-adapter.js";
import { LocalLoopEnrollmentLatch } from "./agent-host/dist/agentAdapter/shared/local-loop-enrollment-denial.js";
import { RoutingHostAgentAdapter } from "./agent-host/dist/agentAdapter/shared/routing-host-agent-adapter.js";
import { RequestContextOverlayMailbox } from "./agent-host/dist/engine/request-context-overlay-mailbox.js";
import { LocalSubagentRunSlots } from "./agent-host/dist/engine/subagent-run-settings.js";
import { AgentHostResourceProviderAdapter, routingLogger, usageLogger } from "./agent-host/dist/factory/agent-host-factory.js";
import { init_private_inference_loop, logger137 } from "./agent-host/dist/factory/private-inference-loop.js";
import { HarnessModuleFaultError } from "./agent-host/dist/harness/host/connect-transport.js";
import { HarnessRoutingAdapter, STATICALLY_LINKED_MODULE_TAGS } from "./agent-host/dist/harness/host/routing-adapter.js";
import { STATICALLY_LINKED_MODULE, ServingModuleTracker } from "./agent-host/dist/harness/host/serving-module.js";
import { createHostStorage2 } from "./agent-host/dist/runtime.js";
import { AGENT_HOST_SESSION_DB_FILE_NAME, AgentHostStorage, isPathSafeSessionId } from "./agent-host/dist/storage/agent-host-storage.js";
import { LazyAgentHostGlobalStore } from "./agent-host/dist/storage/global-store.js";
import { HostSessionRegistry } from "./agent-host/dist/storage/host-session-registry.js";
import { AgentHostStorageInstruments, createContext } from "./agent-host/dist/storage/instruments.js";
import { AgentHostStoreEmptyError, errorCode } from "./agent-host/dist/storage/sqlite-store.js";
import { INHERITABLE_SPAN_ATTRIBUTES_KEY } from "./context/dist/otel.js";
import { OperationType } from "./local-exec/dist/pending-decision-provider.js";
import { metricsKey } from "./metrics/dist/index.js";
import { AgentHostApprovalBlockReason, AgentHostApprovalDeleteDetails, AgentHostApprovalHookSource, AgentHostApprovalMcpDetails, AgentHostApprovalOperation, AgentHostApprovalOperationType, AgentHostApprovalReadDetails, AgentHostApprovalRequest, AgentHostApprovalShellDetails, AgentHostApprovalWriteDetails, AgentHostMcpElicitationRequest, McpElicitationRequest, McpElicitationResponse_Action } from "./proto/dist/generated/agent/v1/agent_host_pb.js";
import { CURSOR_AGENTS_DEV_DIR_NAME, CURSOR_AGENTS_DIR_NAME } from "./src/listen.ts";
import { ORPHAN_SESSION_GRACE_MS, import_node_fs41, import_node_path95 } from "./src/session-storage-reconciliation.ts";
import { AGENT_HOST_DAEMON_BLOBS_DIR_ENV, DaemonSessionRecords, SESSION_CREATE_OWNER_KEY_PREFIX, SESSION_DELETE_PENDING_KEY_PREFIX, SUBAGENT_CHILD_KEY_PREFIX, SUBAGENT_INVOCATION_KEY_PREFIX, import_node_fs42, import_node_path96, realClock, stderrHostStorageLogger } from "./src/session-storage.ts";
import { UNIX_SOCKET_MODE, UNIX_SOCKET_PARENT_MODE, import_node_fs43, import_node_net3, import_node_path98, import_promises54 } from "./src/unix-socket.ts";
export async function createPrivateInferenceLoopClient(input) {
    const decision = input.piOptions.decision;
    if (decision.kind === "fail-closed" || decision.kind === "enrollment-pending") {
        return unusablePrivateInferenceClient(input, decision.configErrorDetail);
    }
    try {
        const catalog = await loadPrivateInferenceCatalog({
            configFile: decision.configFile,
            env: input.piOptions.env,
            ...input.piOptions.onCatalogParsed !== void 0 ? {
                onCatalogParsed: input.piOptions.onCatalogParsed
            } : {}
        });
        const promptQualityCaptures = new PrivateInferencePromptQualityCaptures();
        logger137.info(createContext(), "Private inference construction active");
        return createPrivateInferenceAgentClient({
            sessionProvider: createPrivateInferenceSessionProvider(catalog),
            catalog,
            promptQualityCaptures,
            getPrivacyModeEnum: ()=>input.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
            attachAttemptContext: input.attachAttemptContext,
            ...input.backendClients.privateInferenceBackend === void 0 || input.host.privateInferenceUsage === void 0 ? {} : {
                usageAdmission: createPrivateInferenceUsageAdmission(input.backendClients.privateInferenceBackend, input.host.privateInferenceUsage)
            }
        });
    } catch (error3) {
        const detail = error3 instanceof Error ? error3.message : String(error3);
        return unusablePrivateInferenceClient(input, detail);
    }
}
function unusablePrivateInferenceClient(input, configErrorDetail) {
    logger137.info(createContext(), `Private inference unusable. Turns will fail: ${configErrorDetail}`);
    return createPrivateInferenceAgentClient({
        sessionProvider: void 0,
        catalog: void 0,
        configErrorDetail,
        getPrivacyModeEnum: ()=>input.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
        attachAttemptContext: input.attachAttemptContext
    });
}
function ownRequestContextSessionWiring(mailbox, prefetchFileAccess) {
    if (prefetchFileAccess === void 0) {
        return {
            ownRequestContext: true,
            requestContextOverlayMailbox: mailbox
        };
    }
    return {
        ownRequestContext: true,
        requestContextOverlayMailbox: mailbox,
        prefetchFileAccess
    };
}
export async function createAgentHost2(options2, deps) {
    return createAgentHostWithManagedLocalFactory(options2, void 0, deps);
}
export async function createAgentHostWithManagedLocalFactory(options2, managedLocalFactory, deps, managedLocalOptions) {
    if (options2.cloudSubagentRunner !== void 0 && options2.nativeCloudSubagents !== void 0) {
        throw new Error("Configure either cloudSubagentRunner or nativeCloudSubagents, not both.");
    }
    if (options2.nativeCloudSubagents !== void 0 && options2.network.kind !== "builtin") {
        throw new Error("Native cloud subagent support requires builtin networking.");
    }
    if (options2.storage !== void 0 && (options2.storageDir === void 0 || options2.storage.storageDir !== options2.storageDir)) {
        throw new Error("A prebuilt AgentHostStorage requires its matching CreateAgentHostOptions.storageDir.");
    }
    const storageInstruments = new AgentHostStorageInstruments({
        ...options2.hostContext === void 0 ? {} : {
            ctx: options2.hostContext
        },
        ...options2.metrics === void 0 ? {} : {
            metrics: options2.metrics
        },
        ...options2.onStorageFault === void 0 ? {} : {
            onStorageFault: options2.onStorageFault
        }
    });
    const storage = options2.storage ?? createHostStorage({
        ...options2,
        storageObserver: storageInstruments.storageObserver
    });
    const globalStore = storage === void 0 ? void 0 : new LazyAgentHostGlobalStore(()=>storage.openGlobalStore());
    let adapterComposition;
    try {
        adapterComposition = await createHostAgentAdapter(options2, managedLocalFactory, deps, managedLocalOptions, {
            globalStore
        });
    } catch (error3) {
        globalStore?.close();
        throw error3;
    }
    const adapter = adapterComposition.adapter;
    const activeTurnMaxModeBySession = new Map();
    const hostedSessionOptionsById = new Map();
    const requestContextOverlayMailbox = new RequestContextOverlayMailbox();
    const localSubagentRunSlotsByRootSession = new Map();
    const gitExecutor = resolveHostGitExecutor({
        gitExecutor: options2.gitExecutor
    });
    let cloudSubagentRunner = options2.cloudSubagentRunner;
    try {
        if (options2.nativeCloudSubagents !== void 0) {
            const backgroundComposerClientProvider = adapterComposition.backendClients.backgroundComposerClientProvider;
            if (backgroundComposerClientProvider === void 0) {
                throw new Error("Native cloud subagent support requires builtin networking.");
            }
            cloudSubagentRunner = createNativeCloudSubagentRunnerForHost({
                nativeCloudSubagents: options2.nativeCloudSubagents,
                gitExecutor,
                backend: {
                    backgroundComposerClientProvider,
                    getTeamId: ()=>adapterComposition.backendClients.runtimeCapabilities?.getTeamId?.(),
                    getParentEffectiveMaxMode: (sessionId)=>activeTurnMaxModeBySession.get(sessionId),
                    resolveSavedModelParameters: options2.resolveSavedModelParameters
                },
                resolveSessionOptions: (sessionId)=>hostedSessionOptionsById.get(sessionId)
            });
        }
    } catch (error3) {
        adapter.dispose();
        adapterComposition.privateInferenceUsage?.dispose();
        adapterComposition.backendClients.dispose();
        globalStore?.close();
        throw error3;
    }
    const mcpProvider = resolveHostMcpProvider({
        mcpProvider: options2.mcpProvider
    });
    const hostOwnsMcpProvider = options2.mcpProvider === void 0;
    const resourceProviders = new Set();
    const host = createAgentHost({
        servingModule: adapterComposition.servingModule,
        subagentsAsSessions: options2.subagentsAsSessions,
        ...options2.surfaceOwnsBackgroundWakeups === true ? {
            surfaceOwnsBackgroundWakeups: true
        } : {},
        getSendNowBehavior: options2.getSendNowBehavior,
        onSessionDeleted: (sessionId)=>{
            hostedSessionOptionsById.delete(sessionId);
            activeTurnMaxModeBySession.delete(sessionId);
            localSubagentRunSlotsByRootSession.delete(sessionId);
        },
        ...options2.sessionCatalog === void 0 ? {} : {
            sessionCatalog: options2.sessionCatalog
        },
        ...options2.workspaceCatalog === void 0 ? {} : {
            workspaceCatalog: options2.workspaceCatalog
        },
        ...options2.userHomeDirectory === void 0 ? {} : {
            userHomeDirectory: options2.userHomeDirectory
        },
        createModelDetails: (modelId)=>options2.modelDetails ?? createDefaultModelDetails(modelId ?? options2.modelId),
        createHostedSession: async (ctx, request3, sessionStore, callOptions, sharedBlobStore)=>{
            const result = await createHostedSession({
                ctx,
                request: request3,
                sessionStore,
                sharedBlobStore,
                parent: callOptions?.parent,
                forkedFromSessionId: callOptions?.forkedFromSessionId,
                initialHistoryMode: callOptions?.initialHistoryMode,
                hostHooks: callOptions?.hostHooks,
                options: {
                    adapter,
                    cloudSubagentRunner,
                    cloudSubagentsUnavailableReason: options2.cloudSubagentsUnavailableReason,
                    getParentEffectiveMaxMode: (sessionId)=>activeTurnMaxModeBySession.get(sessionId),
                    onMcpAuthApproved: (serverIdentifier)=>mcpProvider.noteGrantChanged?.(ctx, serverIdentifier),
                    resolveSavedModelParameters: options2.resolveSavedModelParameters,
                    resolveRequiredGlobalCommands: options2.resolveRequiredGlobalCommands,
                    findExistingSubagentSessionId: options2.findExistingSubagentSessionId,
                    durableSubagentInvocations: options2.durableSubagentInvocations,
                    ...options2.metrics === void 0 ? {} : {
                        metrics: options2.metrics
                    },
                    storageInstruments,
                    getLocalSubagentSpawnSurfaceKind: (rootSessionId)=>hostedSessionOptionsById.get(rootSessionId)?.owningProject === void 0 ? "agent" : "project",
                    localSubagentLimits: options2.localSubagentLimits,
                    getLocalSubagentRunSlots: (rootSessionId)=>{
                        let slots = localSubagentRunSlotsByRootSession.get(rootSessionId);
                        if (slots === void 0) {
                            slots = new LocalSubagentRunSlots();
                            localSubagentRunSlotsByRootSession.set(rootSessionId, slots);
                        }
                        return slots;
                    },
                    ...options2.nativeCloudSubagents === void 0 && options2.resolveSavedModelParameters === void 0 ? {} : {
                        noteActiveTurnMaxMode: (sessionId, maxMode)=>{
                            if (maxMode === void 0) {
                                activeTurnMaxModeBySession.delete(sessionId);
                            } else {
                                activeTurnMaxModeBySession.set(sessionId, maxMode);
                            }
                        }
                    },
                    createBlobStore: options2.createBlobStore,
                    createSessionStore: options2.createSessionStore,
                    subagentsAsSessions: options2.subagentsAsSessions,
                    subagentInteractionPolicy: options2.subagentInteractionPolicy,
                    ...options2.sessionEventLogMaxInMemoryEvents === void 0 ? {} : {
                        sessionEventLogMaxInMemoryEvents: options2.sessionEventLogMaxInMemoryEvents
                    },
                    ...options2.sessionEventLogOverflowSink === void 0 ? {} : {
                        sessionEventLogOverflowSink: options2.sessionEventLogOverflowSink
                    },
                    ...options2.subagentTranscripts === void 0 ? {} : {
                        subagentTranscripts: options2.subagentTranscripts
                    },
                    ...options2.ownRequestContext === true ? ownRequestContextSessionWiring(requestContextOverlayMailbox, options2.prefetchFileAccess) : {},
                    createResources: (args)=>{
                        const resources = createResources(options2, args, gitExecutor, mcpProvider);
                        resourceProviders.add(resources);
                        return resources;
                    },
                    disposeResources: async (resources)=>{
                        if (resources instanceof AgentHostResourceProviderAdapter) {
                            resourceProviders.delete(resources);
                            await resources.dispose();
                        }
                    }
                }
            });
            if (result.session.sessionOptions === void 0) {
                hostedSessionOptionsById.delete(request3.sessionId);
            } else {
                hostedSessionOptionsById.set(request3.sessionId, result.session.sessionOptions);
            }
            return result;
        },
        dispose: async ()=>{
            let firstError;
            for (const resources of resourceProviders){
                try {
                    await resources.dispose();
                } catch (error3) {
                    firstError ??= error3;
                }
            }
            resourceProviders.clear();
            hostedSessionOptionsById.clear();
            localSubagentRunSlotsByRootSession.clear();
            try {
                adapter.dispose();
            } catch (error3) {
                firstError ??= error3;
            }
            adapterComposition.servingModule.clear();
            try {
                adapterComposition.privateInferenceUsage?.dispose();
            } catch (error3) {
                firstError ??= error3;
            }
            try {
                globalStore?.close();
            } catch (error3) {
                firstError ??= error3;
            }
            try {
                adapterComposition.backendClients.dispose();
            } catch (error3) {
                firstError ??= error3;
            }
            if (hostOwnsMcpProvider) {
                try {
                    mcpProvider.dispose();
                } catch (error3) {
                    firstError ??= error3;
                }
            }
            if (firstError !== void 0) {
                throw firstError;
            }
        }
    });
    try {
        adapterComposition.privateInferenceUsage?.start();
        if (options2.ownRequestContext === true) {
            const mailbox = requestContextOverlayMailbox;
            return Object.assign(host, {
                expectRequestContextOverlay (requestId) {
                    mailbox.expect(requestId);
                },
                offerRequestContextOverlay (requestId, overlay2) {
                    mailbox.offer(requestId, overlay2);
                }
            });
        }
        return host;
    } catch (error3) {
        try {
            await host.dispose();
        } catch (disposeError) {
            throw new AggregateError([
                error3,
                disposeError
            ], "Agent host initialization failed");
        }
        throw error3;
    }
}
export function createHostStorage(options2) {
    if (options2.storageDir === void 0) {
        return void 0;
    }
    return new AgentHostStorage(options2.storageDir, options2.storageObserver ?? new AgentHostStorageInstruments({
        ...options2.hostContext === void 0 ? {} : {
            ctx: options2.hostContext
        },
        ...options2.metrics === void 0 ? {} : {
            metrics: options2.metrics
        },
        ...options2.onStorageFault === void 0 ? {} : {
            onStorageFault: options2.onStorageFault
        }
    }).storageObserver);
}
async function createHostAgentAdapter(options2, managedLocalFactory, deps, managedLocalOptions, host) {
    const backendClients = await createAgentHostBackendClients(options2.network, deps);
    const connect3 = new AgentClientHostAdapter(backendClients.agentClient, {
        llmGatewayCredential: "from-local-env"
    });
    const privateInferenceUsage = host.globalStore !== void 0 && backendClients.privateInferenceBackend !== void 0 ? new PrivateInferenceUsageOutbox({
        store: host.globalStore,
        backend: backendClients.privateInferenceBackend,
        metrics: options2.metrics,
        onError: (error3)=>{
            const errorName = error3 instanceof Error ? error3.name : typeof error3;
            try {
                usageLogger.warn(options2.hostContext?.() ?? createContext(), "Private inference usage reporting failed", {
                    errorName
                });
            } catch  {
                console.warn("Private inference usage reporting failed", errorName);
            }
        }
    }) : void 0;
    const privateInferenceRouting = options2.piOptions?.routing ?? (managedLocalOptions?.kind === "private-inference" ? managedLocalOptions.privateInference : void 0);
    const hostServices = {
        ...host,
        ...privateInferenceUsage === void 0 ? {} : {
            privateInferenceUsage
        }
    };
    const localLoopRequested = managedLocalFactory !== void 0;
    const enrollmentLatch = privateInferenceRouting === void 0 ? new LocalLoopEnrollmentLatch() : void 0;
    const composeRouting = (connectTarget, managedLocalClient, servingTags)=>{
        const managedLocal = managedLocalClient === void 0 ? void 0 : withLocalLoopTurnMetrics(new AgentClientHostAdapter(managedLocalClient), options2.metrics, servingTags);
        if (localLoopRequested && managedLocal === void 0) {
            routingLogger.warn(options2.hostContext?.() ?? createContext(), "Local loop requested but no managed client could be built; turns will run on the backend loop", {
                networkKind: options2.network.kind
            });
        }
        const route = createLocalLoopTurnRouter({
            managedLocalAvailable: managedLocal !== void 0,
            localLoopRequested,
            ...backendClients.runtimeCapabilities === void 0 ? {} : {
                runtimeCapabilities: backendClients.runtimeCapabilities
            },
            ...privateInferenceRouting === void 0 ? {} : {
                privateInference: privateInferenceRouting
            },
            ...options2.readPrivateInferenceEnrollment === void 0 ? {} : {
                readEnrollmentAfterActivation: options2.readPrivateInferenceEnrollment
            },
            ...enrollmentLatch === void 0 ? {} : {
                enrollmentLatch
            }
        });
        return new RoutingHostAgentAdapter(connectTarget, route, managedLocal, options2.metrics, enrollmentLatch);
    };
    const harnessLog = managedLocalOptions?.kind === "local-loop" ? managedLocalOptions.agentHarness?.log : void 0;
    const servingModule = new ServingModuleTracker(harnessLog ?? ((line)=>routingLogger.warn(options2.hostContext?.() ?? createContext(), line)));
    let adapter;
    try {
        const harnessRouting = resolveHarnessRouting(options2, managedLocalOptions, backendClients);
        if (harnessRouting !== void 0) {
            adapter = composeHarnessRouting(harnessRouting.agentHarness, harnessRouting.inferenceTransport, connect3, composeRouting, ()=>backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(), options2.metrics, servingModule);
        } else if (options2.piOptions !== void 0) {
            const createPrivateInferenceLoopClient2 = deps?.createPrivateInferenceLoopClient ?? (await Promise.resolve().then(()=>(init_private_inference_loop(), private_inference_loop_exports))).createPrivateInferenceLoopClient;
            const privateInferenceClient = await createPrivateInferenceLoopClient2({
                piOptions: options2.piOptions,
                backendClients,
                host: hostServices,
                attachAttemptContext: options2.attachLocalLoopAttemptContext
            });
            adapter = composeRouting(connect3, privateInferenceClient, {});
        } else {
            const staticallyLinked = managedLocalOptions?.kind === "local-loop";
            const servingTags = staticallyLinked ? STATICALLY_LINKED_MODULE_TAGS : {};
            const managedLocalClient = managedLocalFactory?.(backendClients, hostServices, servingTags);
            if (staticallyLinked && managedLocalClient !== void 0) {
                servingModule.serve(STATICALLY_LINKED_MODULE, void 0, "no_harness");
            }
            adapter = composeRouting(connect3, managedLocalClient, servingTags);
        }
    } catch (error3) {
        privateInferenceUsage?.dispose();
        backendClients.dispose();
        throw error3;
    }
    return {
        adapter,
        backendClients,
        privateInferenceUsage,
        servingModule
    };
}
function resolveHarnessRouting(options2, managedLocalOptions, backendClients) {
    if (managedLocalOptions?.kind !== "local-loop" || managedLocalOptions.agentHarness === void 0) {
        return void 0;
    }
    const { agentHarness } = managedLocalOptions;
    if (options2.piOptions !== void 0) {
        agentHarness.log("private inference configured; managed-local turns stay on the statically linked client");
        return void 0;
    }
    if (backendClients.inferenceTransport === void 0) {
        agentHarness.log("no backend transport to lend a generation; managed-local turns stay on the statically linked client");
        return void 0;
    }
    return {
        agentHarness,
        inferenceTransport: backendClients.inferenceTransport
    };
}
function composeHarnessRouting(agentHarness, inferenceTransport, connect3, composeRouting, getPrivacyModeEnum, metrics, servingModule) {
    const loader2 = agentHarness.loader();
    const stopFollowing = servingModule.follow(loader2);
    const sharedConnect = {
        run: (runOptions)=>connect3.run(runOptions),
        dispose: ()=>{}
    };
    const adapter = new HarnessRoutingAdapter({
        loader: loader2,
        compose: (active, onTurnEnded, onQuietStop)=>{
            const turnHeaders = new Map();
            let transport;
            try {
                transport = active.harness.createTransport(lendHostServices(active, {
                    backendTransport: lendBackendTransport(inferenceTransport, turnHeaders),
                    getPrivacyModeEnum,
                    log: agentHarness.log,
                    metrics,
                    loopLogContext: agentHarness.loopLogContext
                }));
            } catch (error3) {
                throw new HarnessModuleFaultError(active.info, {
                    reason: error3 instanceof Error ? error3.message : String(error3),
                    errorClass: "compose",
                    early: true,
                    cause: error3
                });
            }
            const tags = moduleTags(active.info, active.channel, active.sequence);
            let routing;
            try {
                routing = composeRouting(sharedConnect, createHarnessAgentClient(transport, active.info, onTurnEnded, turnHeaders, tags, {
                    onQuietStop
                }), tags);
            } catch (error3) {
                try {
                    transport.dispose();
                } catch (disposeError) {
                    agentHarness.log(`transport dispose failed after composition failed: ${disposeError instanceof Error ? disposeError.message : String(disposeError)}`);
                }
                throw error3;
            }
            return {
                run: (runOptions)=>routing.run(runOptions),
                dispose: ()=>{
                    try {
                        routing.dispose();
                    } finally{
                        transport.dispose();
                    }
                }
            };
        },
        log: agentHarness.log,
        ...metrics === void 0 ? {} : {
            metrics
        },
        logContext: agentHarness.loopLogContext,
        ...agentHarness.onModuleReverted === void 0 ? {} : {
            onRevert: agentHarness.onModuleReverted
        },
        disposeShared: ()=>{
            stopFollowing();
            try {
                connect3.dispose();
            } finally{
                loader2.retire("this host is going away");
            }
        }
    });
    loader2.announce();
    return adapter;
}
function createResources(options2, args, gitExecutor, mcpProvider) {
    const provider = options2.createResources({
        sessionId: args.sessionId,
        rootSessionId: args.rootSessionId,
        parentSessionId: args.parentSessionId,
        ...args.parent === void 0 ? {} : {
            parent: args.parent
        },
        backgroundWorkRegistry: args.backgroundWorkRegistry,
        gitExecutor,
        mcpLease: mcpProvider,
        askHostQuestion: args.askHostQuestion
    });
    const adapter = new AgentHostResourceProviderAdapter(provider);
    adapter.register(subagentExecutorResource, args.subagentExecutor);
    adapter.register(subagentAwaitExecutorResource, args.subagentAwaitExecutor);
    adapter.register(forceBackgroundSubagentExecutorResource, args.forceBackgroundSubagentExecutor);
    return adapter;
}
function toHookSource(source) {
    switch(source){
        case "user":
            return AgentHostApprovalHookSource.USER;
        case "project":
            return AgentHostApprovalHookSource.PROJECT;
        case "enterprise":
            return AgentHostApprovalHookSource.ENTERPRISE;
        case "team":
            return AgentHostApprovalHookSource.TEAM;
        default:
            return void 0;
    }
}
function toBlockReason(reason) {
    if (reason === "outOfWorkspace") {
        return AgentHostApprovalBlockReason.OUT_OF_WORKSPACE;
    }
    if (reason === "protectedConfig") {
        return AgentHostApprovalBlockReason.PROTECTED_CONFIG;
    }
    if (reason === "workspaceWrite") {
        return AgentHostApprovalBlockReason.WORKSPACE_WRITE;
    }
    return void 0;
}
function toWriteDetails(operation) {
    const blockReason = toBlockReason(operation.details.blockReason);
    return new AgentHostApprovalWriteDetails({
        path: operation.details.path,
        reason: operation.details.reason,
        isNewFile: operation.details.isNewFile,
        diffString: operation.details.diffString,
        ...operation.details.before === void 0 ? {} : {
            before: operation.details.before
        },
        ...operation.details.after === void 0 ? {} : {
            after: operation.details.after
        },
        ...blockReason === void 0 ? {} : {
            blockReason
        }
    });
}
function toShellDetails(operation) {
    const hookSource = toHookSource(operation.details.hookSource);
    return new AgentHostApprovalShellDetails({
        command: operation.details.command,
        workingDirectory: operation.details.workingDirectory,
        timeout: operation.details.timeout,
        ...operation.details.reason === void 0 ? {} : {
            reason: operation.details.reason
        },
        ...operation.details.isSandboxAvailable === void 0 ? {} : {
            isSandboxAvailable: operation.details.isSandboxAvailable
        },
        ...operation.details.isSandboxEnabled === void 0 ? {} : {
            isSandboxEnabled: operation.details.isSandboxEnabled
        },
        ...operation.details.canAllowlist === void 0 ? {} : {
            canAllowlist: operation.details.canAllowlist
        },
        notAllowedCommands: operation.details.notAllowedCommands ?? [],
        suggestedAllowlistEntries: operation.details.suggestedAllowlistEntries ?? [],
        ...operation.details.smartModeApprovalReason === void 0 ? {} : {
            smartModeApprovalReason: operation.details.smartModeApprovalReason
        },
        ...operation.details.smartModeApprovalRequestId === void 0 ? {} : {
            smartModeApprovalRequestId: operation.details.smartModeApprovalRequestId
        },
        ...hookSource === void 0 ? {} : {
            hookSource
        }
    });
}
function toMcpDetails(operation) {
    const hookSource = toHookSource(operation.details.hookSource);
    return new AgentHostApprovalMcpDetails({
        name: operation.details.name,
        toolName: operation.details.toolName,
        providerIdentifier: operation.details.providerIdentifier,
        args: operation.details.args,
        ...operation.details.source === void 0 ? {} : {
            source: operation.details.source
        },
        ...operation.details.reason === void 0 ? {} : {
            reason: operation.details.reason
        },
        ...operation.details.canAllowlist === void 0 ? {} : {
            canAllowlist: operation.details.canAllowlist
        },
        ...operation.details.smartModeApprovalReason === void 0 ? {} : {
            smartModeApprovalReason: operation.details.smartModeApprovalReason
        },
        ...operation.details.smartModeApprovalRequestId === void 0 ? {} : {
            smartModeApprovalRequestId: operation.details.smartModeApprovalRequestId
        },
        ...hookSource === void 0 ? {} : {
            hookSource
        }
    });
}
function toOperationMessage(operation) {
    switch(operation.type){
        case OperationType.Write:
            return new AgentHostApprovalOperation({
                type: AgentHostApprovalOperationType.WRITE,
                details: {
                    case: "write",
                    value: toWriteDetails(operation)
                }
            });
        case OperationType.Shell:
            return new AgentHostApprovalOperation({
                type: AgentHostApprovalOperationType.SHELL,
                details: {
                    case: "shell",
                    value: toShellDetails(operation)
                }
            });
        case OperationType.Delete:
            return new AgentHostApprovalOperation({
                type: AgentHostApprovalOperationType.DELETE,
                details: {
                    case: "delete",
                    value: new AgentHostApprovalDeleteDetails({
                        path: operation.details.path
                    })
                }
            });
        case OperationType.Mcp:
            return new AgentHostApprovalOperation({
                type: AgentHostApprovalOperationType.MCP,
                details: {
                    case: "mcp",
                    value: toMcpDetails(operation)
                }
            });
        default:
            {
                const exhaustive = operation;
                return exhaustive;
            }
    }
}
function toApprovalRequest(operation) {
    return new AgentHostApprovalRequest({
        toolCallId: operation.toolCallId ?? "",
        operation: toOperationMessage(operation)
    });
}
function toReadApprovalRequest(operation) {
    return new AgentHostApprovalRequest({
        toolCallId: operation.toolCallId ?? "",
        operation: new AgentHostApprovalOperation({
            type: AgentHostApprovalOperationType.READ,
            details: {
                case: "read",
                value: new AgentHostApprovalReadDetails({
                    path: operation.details.path,
                    ...operation.details.reason === void 0 ? {} : {
                        reason: operation.details.reason
                    }
                })
            }
        })
    });
}
export function createInteractionApprovalHandler(askHostQuestion) {
    return async (operation)=>{
        const request3 = operation.type === OperationType.Read ? toReadApprovalRequest(operation) : toApprovalRequest(operation);
        request3.offeredAllowlistEntries = offeredAllowlistEntries(request3.operation);
        const question = {
            case: "execApproval",
            value: request3
        };
        const answer = await askHostQuestion(createContext(), question).catch((error3)=>rejectHostQuestion(question, `The approval ended without an answer: ${toTurnErrorMessage(error3)}`));
        if (answer.case !== "execApproval") {
            return {
                approved: false,
                reason: "The approval was answered with a different kind of answer"
            };
        }
        if (answer.value.approved) {
            return {
                approved: true
            };
        }
        return answer.value.reason === void 0 ? {
            approved: false
        } : {
            approved: false,
            reason: answer.value.reason
        };
    };
}
export function createInteractionElicitationHandler(askHostQuestion) {
    return async (serverName, toolName, toolCallId, request3, signal)=>{
        const question = {
            case: "mcpElicitation",
            value: new AgentHostMcpElicitationRequest({
                serverName,
                toolName,
                ...toolCallId === void 0 ? {} : {
                    toolCallId
                },
                elicitation: new McpElicitationRequest({
                    message: request3.message,
                    requestedSchemaJson: JSON.stringify(request3.requestedSchema)
                })
            })
        };
        const answer = await askHostQuestion(signal === void 0 ? createContext() : contextAbortedBy(signal), question).catch((error3)=>rejectHostQuestion(question, `The form ended without an answer: ${toTurnErrorMessage(error3)}`));
        if (answer.case !== "mcpElicitation") {
            return {
                action: "cancel"
            };
        }
        switch(answer.value.action){
            case McpElicitationResponse_Action.ACCEPT:
                {
                    const content = answer.value.content?.toJson();
                    return typeof content === "object" && content !== null && !Array.isArray(content) ? {
                        action: "accept",
                        content
                    } : {
                        action: "accept"
                    };
                }
            case McpElicitationResponse_Action.DECLINE:
                return {
                    action: "decline"
                };
            default:
                return {
                    action: "cancel"
                };
        }
    };
}
function contextAbortedBy(signal) {
    const [ctx, cancel] = createContext().withCancel();
    if (signal.aborted) {
        cancel(signal.reason);
    } else {
        signal.addEventListener("abort", ()=>cancel(signal.reason), {
            once: true
        });
    }
    return ctx;
}
function offeredAllowlistEntries(operation) {
    const details = operation?.details;
    switch(details?.case){
        case "shell":
            return details.value.canAllowlist === true ? details.value.notAllowedCommands.filter((command)=>!isTerminalShellInterpreterAllowlistCandidate(command)) : [];
        case "mcp":
            {
                if (details.value.canAllowlist !== true) {
                    return [];
                }
                const server = details.value.providerIdentifier.trim().toLowerCase();
                const tool = details.value.toolName.trim().toLowerCase();
                const usable = (name17)=>name17.length > 0 && name17.length <= 256 && !/[:*]/.test(name17);
                return usable(server) && usable(tool) ? [
                    `${server}:${tool}`
                ] : [];
            }
        default:
            return [];
    }
}
function agentHostMetricsBackend(metrics, tags) {
    const sample = (metric, value, labels)=>({
            stat: metric.name,
            value,
            tags: {
                ...tags,
                ...labels
            }
        });
    return {
        increment: (_ctx, metric, value, labels)=>{
            metrics.increment?.(sample(metric, value ?? 1, labels));
        },
        histogram: (_ctx, metric, value, labels)=>{
            metrics.distribution(sample(metric, value, labels));
        },
        gauge: (_ctx, metric, value, labels)=>{
            metrics.gauge?.(sample(metric, value, labels));
        },
        record: (_ctx, metric, value, labels)=>{
            metrics.gauge?.(sample(metric, value, labels));
        }
    };
}
export function createHeadlessLocalLoopAttemptContextHook(options2) {
    const backend = agentHostMetricsBackend(options2.metrics, {
        [AGENT_HOST_SURFACE_TAG]: options2.surface
    });
    return (ctx)=>ctx.with(metricsKey, backend).with(INHERITABLE_SPAN_ATTRIBUTES_KEY, {
            ...ctx.get(INHERITABLE_SPAN_ATTRIBUTES_KEY),
            [AGENT_HOST_SURFACE_SPAN_ATTRIBUTE]: options2.surface
        });
}
function reconcileDaemonSessionStorage(storage, records2, log5, nowMs2) {
    let pendingIds;
    try {
        pendingIds = records2.listSessionDeletePendingSessionIds();
    } catch (error3) {
        log5.error("[hostStorage] startup reconciliation could not list pending session deletes", error3);
        return;
    }
    for (const sessionId of pendingIds){
        if (isPathSafeSessionId(sessionId) && records2.claimStartupReconciliation(sessionId, false)?.kind === "delete-pending") {
            finishStartupDelete(storage, records2, log5, sessionId);
        }
    }
    let sessionIds;
    try {
        sessionIds = storage.listSessionIds();
    } catch (error3) {
        log5.error("[hostStorage] startup reconciliation could not list session stores", error3);
        return;
    }
    for (const sessionId of sessionIds){
        if (pendingIds.includes(sessionId)) {
            continue;
        }
        const before = inspectOrphan(storage, sessionId);
        if (before.kind !== "candidate" || nowMs2 - before.latestMtimeMs <= ORPHAN_SESSION_GRACE_MS) {
            continue;
        }
        const claim = records2.claimStartupReconciliation(sessionId, true);
        if (claim?.kind !== "orphan-reclaim") {
            continue;
        }
        if (inspectOrphan(storage, sessionId).kind === "keep") {
            records2.cancelOrphanReclaim(sessionId, claim.token);
            continue;
        }
        finishStartupDelete(storage, records2, log5, sessionId);
    }
}
export function sessionCreateOwnerBlocksReconciliation(value) {
    return typeof value !== "number" || !Number.isInteger(value) || value <= 0 || processExists(value);
}
function inspectOrphan(storage, sessionId) {
    const sessionDir = storage.sessionDir(sessionId);
    let entries;
    let latestMtimeMs;
    try {
        latestMtimeMs = (0, import_node_fs41.lstatSync)(sessionDir).mtimeMs;
        entries = (0, import_node_fs41.readdirSync)(sessionDir, {
            withFileTypes: true
        });
    } catch (error3) {
        return {
            kind: errorCode(error3).code === "ENOENT" ? "gone" : "keep"
        };
    }
    const knownFiles = new Set([
        AGENT_HOST_SESSION_DB_FILE_NAME,
        `${AGENT_HOST_SESSION_DB_FILE_NAME}-journal`,
        `${AGENT_HOST_SESSION_DB_FILE_NAME}-shm`,
        `${AGENT_HOST_SESSION_DB_FILE_NAME}-wal`
    ]);
    for (const entry of entries){
        let stat24;
        try {
            stat24 = (0, import_node_fs41.lstatSync)((0, import_node_path95.join)(sessionDir, entry.name));
        } catch (error3) {
            if (errorCode(error3).code === "ENOENT" && !(0, import_node_fs41.existsSync)(sessionDir)) {
                return {
                    kind: "gone"
                };
            }
            return {
                kind: "keep"
            };
        }
        latestMtimeMs = Math.max(latestMtimeMs, stat24.mtimeMs);
        if (!knownFiles.has(entry.name) || !entry.isFile()) {
            return {
                kind: "keep"
            };
        }
    }
    let store;
    try {
        store = storage.readSessionStore(sessionId);
    } catch (error3) {
        if (!(0, import_node_fs41.existsSync)(sessionDir)) {
            return {
                kind: "gone"
            };
        }
        return error3 instanceof AgentHostStoreEmptyError ? {
            kind: "candidate",
            latestMtimeMs
        } : {
            kind: "keep"
        };
    }
    try {
        return readManifest(store) === void 0 ? {
            kind: "candidate",
            latestMtimeMs
        } : {
            kind: "keep"
        };
    } catch (error3) {
        void (error3 instanceof Error ? error3.name : typeof error3);
        return {
            kind: "keep"
        };
    } finally{
        store.close();
    }
}
function finishStartupDelete(storage, records2, log5, sessionId) {
    try {
        storage.deleteSessionDir(sessionId);
    } catch (error3) {
        log5.error(`[hostStorage] startup reconciliation could not delete storage for session ${sessionId}`, error3);
        return;
    }
    try {
        records2.finishSessionDeleteRecords(sessionId);
        log5.info(`[hostStorage] startup reconciliation finished deletion for session ${sessionId}`);
    } catch (error3) {
        log5.error(`[hostStorage] startup reconciliation could not finish metadata deletion for session ${sessionId}; its marker remains`, error3);
    }
}
function processExists(pid) {
    try {
        process.kill(pid, 0);
        return true;
    } catch (error3) {
        return errorCode(error3).code === "EPERM";
    }
}
export function resolveDaemonStorageDir(options2) {
    if (options2.storageDir !== void 0 && options2.storageDir.length > 0) {
        return options2.storageDir;
    }
    const fromEnv = (options2.env ?? process.env)[AGENT_HOST_DAEMON_BLOBS_DIR_ENV];
    return fromEnv !== void 0 && fromEnv.length > 0 ? fromEnv : options2.agentsDir;
}
export function createDaemonSessionStorage(options2) {
    const storage = createHostStorage2({
        storageDir: options2.storageDir
    });
    if (storage === void 0) {
        throw new Error("agent-host-daemon storage requires a storage dir");
    }
    const globalStore = storage.openGlobalStore();
    const log5 = options2.log ?? stderrHostStorageLogger;
    const clock = options2.clock ?? realClock;
    let registry2;
    const records2 = new DaemonSessionRecords(globalStore, {
        hasNativeSession: (sessionId)=>registry2?.hasNativeSession(sessionId) ?? false
    }, log5);
    records2.reportDeletePending("backlog");
    reconcileDaemonSessionStorage(storage, records2, log5, clock.now());
    try {
        registry2 = new HostSessionRegistry({
            storage,
            log: log5,
            clock
        });
    } catch (error3) {
        globalStore.close();
        throw error3;
    }
    if ((0, import_node_fs42.existsSync)((0, import_node_path96.join)(options2.storageDir, "blobs.sqlite"))) {
        log5.warn(`[hostStorage] ${(0, import_node_path96.join)(options2.storageDir, "blobs.sqlite")} is from an earlier daemon and is not read; the sessions it holds do not list`);
    }
    return {
        storageDir: options2.storageDir,
        storage,
        registry: registry2,
        records: records2,
        acquireSessionCreate: (sessionId)=>{
            if (!records2.tryAcquireSessionCreate(sessionId, process.pid)) {
                return void 0;
            }
            let disposed = false;
            return {
                dispose: ()=>{
                    if (!disposed) {
                        disposed = true;
                        records2.releaseSessionCreate(sessionId, process.pid);
                    }
                }
            };
        },
        blobStoreFor: (args)=>{
            const parent = args.parentSessionId === void 0 ? records2.readSessionExecConfigLenient(args.sessionId)?.parent : void 0;
            return registry2.getPreparedBlobStore(parent === void 0 ? args : {
                sessionId: args.sessionId,
                rootSessionId: parent.rootSessionId,
                parentSessionId: parent.parentSessionId
            });
        },
        hasDurableSession: (sessionId)=>records2.hasSession(sessionId),
        close: ()=>{
            try {
                registry2.dispose();
            } finally{
                globalStore.close();
            }
        }
    };
}
export function isOrphanReclaimMarker(value) {
    return typeof value === "object" && value !== null && "kind" in value && value.kind === "orphan-reclaim" && "token" in value && typeof value.token === "string";
}
export function sessionDeletePendingKey(sessionId) {
    return `${SESSION_DELETE_PENDING_KEY_PREFIX}${sessionId}`;
}
export function sessionCreateOwnerKeyPrefix(sessionId) {
    return `${SESSION_CREATE_OWNER_KEY_PREFIX}${sessionId}:`;
}
export function sessionCreateOwnerKey(sessionId, pid) {
    return `${sessionCreateOwnerKeyPrefix(sessionId)}${pid}`;
}
export function subagentChildKey(args) {
    return `${SUBAGENT_CHILD_KEY_PREFIX}${args.parentSessionId}:${args.parentToolCallId}`;
}
export function subagentInvocationKey(args) {
    return `${SUBAGENT_INVOCATION_KEY_PREFIX}${args.parentSessionId}:${args.rootSessionId}:${args.parentToolCallId}`;
}
export function parseSubagentInvocationKey(key, record3) {
    const rest = key.slice(SUBAGENT_INVOCATION_KEY_PREFIX.length);
    const parentEnd = rest.indexOf(":");
    const rootEnd = rest.indexOf(":", parentEnd + 1);
    if (parentEnd <= 0 || rootEnd <= parentEnd + 1) {
        return void 0;
    }
    return {
        parentSessionId: rest.slice(0, parentEnd),
        rootSessionId: rest.slice(parentEnd + 1, rootEnd),
        parentToolCallId: rest.slice(rootEnd + 1),
        record: record3
    };
}
export function encodeSessionExecConfig(config2) {
    return {
        workspacePaths: [
            ...config2.workspacePaths
        ],
        projectDir: config2.projectDir,
        ...config2.owningClientInstanceId !== void 0 && config2.owningClientInstanceId.length > 0 ? {
            owningClientInstanceId: config2.owningClientInstanceId
        } : {},
        ...config2.isGlassRoot === true ? {
            isGlassRoot: true
        } : {},
        ...config2.interactionPolicy === void 0 ? {} : {
            interactionPolicy: config2.interactionPolicy
        },
        ...config2.localSubagentLimitsMaxRunning === void 0 ? {} : {
            localSubagentLimitsMaxRunning: config2.localSubagentLimitsMaxRunning
        },
        ...config2.hostedMcpRoutingEnabled === true ? {
            hostedMcpRoutingEnabled: true
        } : {},
        ...config2.hostedMcpLocalGrantIdentifiers === void 0 || config2.hostedMcpLocalGrantIdentifiers.length === 0 ? {} : {
            hostedMcpLocalGrantIdentifiers: [
                ...config2.hostedMcpLocalGrantIdentifiers
            ]
        },
        ...config2.parent === void 0 ? {} : {
            parent: {
                parentSessionId: config2.parent.parentSessionId,
                parentToolCallId: config2.parent.parentToolCallId,
                rootSessionId: config2.parent.rootSessionId
            }
        }
    };
}
export function decodeSessionExecConfig(parsed) {
    if (typeof parsed !== "object" || parsed === null) {
        throw new Error("invalid persisted session exec config");
    }
    const record3 = parsed;
    const workspacePaths = record3.workspacePaths;
    const projectDir = record3.projectDir;
    if (!Array.isArray(workspacePaths) || workspacePaths.some((path64)=>typeof path64 !== "string") || typeof projectDir !== "string") {
        throw new Error("invalid persisted session exec config");
    }
    const owningClientInstanceId = record3.owningClientInstanceId;
    const isGlassRoot = record3.isGlassRoot === true;
    if (workspacePaths.length === 0 && !isGlassRoot) {
        throw new Error("invalid persisted session exec config");
    }
    const interactionPolicy = record3.interactionPolicy;
    const localSubagentLimitsMaxRunning = record3.localSubagentLimitsMaxRunning;
    const hostedMcpLocalGrantIdentifiers = record3.hostedMcpLocalGrantIdentifiers;
    const grantIdentifiers = Array.isArray(hostedMcpLocalGrantIdentifiers) ? hostedMcpLocalGrantIdentifiers.filter((value)=>typeof value === "string" && value.length > 0) : [];
    const parent = persistedSessionParent(record3.parent);
    return {
        workspacePaths: workspacePaths.map((path64)=>(0, import_node_path96.resolve)(path64)),
        projectDir: (0, import_node_path96.resolve)(projectDir),
        ...typeof owningClientInstanceId === "string" && owningClientInstanceId.length > 0 ? {
            owningClientInstanceId
        } : {},
        ...isGlassRoot ? {
            isGlassRoot: true
        } : {},
        ...typeof interactionPolicy === "number" ? {
            interactionPolicy
        } : {},
        ...typeof localSubagentLimitsMaxRunning === "number" ? {
            localSubagentLimitsMaxRunning
        } : {},
        ...record3.hostedMcpRoutingEnabled === true ? {
            hostedMcpRoutingEnabled: true
        } : {},
        ...grantIdentifiers.length === 0 ? {} : {
            hostedMcpLocalGrantIdentifiers: grantIdentifiers
        },
        ...parent === void 0 ? {} : {
            parent
        }
    };
}
export function sessionExecConfigsEqual(left, right) {
    return JSON.stringify(encodeSessionExecConfig(left)) === JSON.stringify(encodeSessionExecConfig(right));
}
function persistedSessionParent(value) {
    if (typeof value !== "object" || value === null) {
        return void 0;
    }
    if (!("parentSessionId" in value) || !("parentToolCallId" in value) || !("rootSessionId" in value)) {
        return void 0;
    }
    const parentSessionId = value.parentSessionId;
    const parentToolCallId = value.parentToolCallId;
    const rootSessionId = value.rootSessionId;
    if (typeof parentSessionId !== "string" || parentSessionId.length === 0 || typeof parentToolCallId !== "string" || parentToolCallId.length === 0 || typeof rootSessionId !== "string" || rootSessionId.length === 0) {
        return void 0;
    }
    return {
        parentSessionId,
        parentToolCallId,
        rootSessionId
    };
}
export function refuseDefaultHomeStorageDirInTests(storageDir, homeDir) {
    if (process.env.VITEST === void 0 && process.env.VITEST_WORKER_ID === void 0) {
        return;
    }
    const resolved = (0, import_node_path96.resolve)(storageDir);
    for (const dev of [
        false,
        true
    ]){
        const agentsDir = (0, import_node_path96.resolve)(cursorAgentsDir({
            homeDir,
            dev
        }));
        if (resolved === agentsDir || resolved.startsWith(agentsDir + import_node_path96.sep)) {
            throw new Error(`agent-host-daemon tests must inject storageDir; refusing ~/${dev ? CURSOR_AGENTS_DEV_DIR_NAME : CURSOR_AGENTS_DIR_NAME}`);
        }
    }
}
export async function prepareUnixSocketPath(path64) {
    if (!(0, import_node_fs43.existsSync)(path64)) {
        return;
    }
    if (!(0, import_node_fs43.lstatSync)(path64).isSocket()) {
        return;
    }
    if (await isUnixSocketLive(path64)) {
        throw new Error(`unix socket already in use: ${path64}`);
    }
    (0, import_node_fs43.unlinkSync)(path64);
}
export function ensurePrivateSocketParent(path64) {
    const dir = (0, import_node_path98.dirname)(path64);
    if ((0, import_node_fs43.existsSync)(dir)) {
        return void 0;
    }
    (0, import_node_fs43.mkdirSync)(dir, {
        recursive: true,
        mode: UNIX_SOCKET_PARENT_MODE
    });
    (0, import_node_fs43.chmodSync)(dir, UNIX_SOCKET_PARENT_MODE);
    return dir;
}
export function restrictUnixSocketMode(path64) {
    (0, import_node_fs43.chmodSync)(path64, UNIX_SOCKET_MODE);
}
export function readUnixSocketIdentity(path64) {
    try {
        const stat24 = (0, import_node_fs43.lstatSync)(path64);
        if (!stat24.isSocket()) {
            return void 0;
        }
        return {
            path: path64,
            dev: stat24.dev,
            ino: stat24.ino
        };
    } catch  {
        return void 0;
    }
}
export async function unlinkOwnedUnixSocket(owned) {
    const current = readUnixSocketIdentity(owned.path);
    if (current === void 0) {
        await removeCreatedParentDir(owned.createdParentDir);
        return;
    }
    if (current.dev !== owned.dev || current.ino !== owned.ino) {
        return;
    }
    if (await isUnixSocketLive(owned.path)) {
        return;
    }
    try {
        (0, import_node_fs43.unlinkSync)(owned.path);
    } catch  {}
    await removeCreatedParentDir(owned.createdParentDir);
}
async function removeCreatedParentDir(createdParentDir) {
    if (createdParentDir === void 0) {
        return;
    }
    try {
        await (0, import_promises54.rmdir)(createdParentDir);
    } catch  {}
}
function isUnixSocketLive(path64) {
    return new Promise((resolve36)=>{
        const socket = (0, import_node_net3.createConnection)({
            path: path64
        });
        const finish = (live)=>{
            socket.removeAllListeners();
            socket.destroy();
            resolve36(live);
        };
        socket.once("connect", ()=>{
            finish(true);
        });
        socket.once("error", ()=>{
            finish(false);
        });
    });
}

export var private_inference_loop_exports = {};
Object.defineProperty(private_inference_loop_exports, "createPrivateInferenceLoopClient", {
    enumerable: true,
    get: ()=>createPrivateInferenceLoopClient
});
