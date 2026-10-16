import { applyDaemonAuthToCredentials, createMemoryCredentialManager, cursorAgentsDir, fetchPrivacyModeFromDashboard, homeDirFromEnv, resolveDaemonDashboardEndpoint } from "./dashboard_connect_exports.js";
import { isSandboxSupported } from "./bidi_connect_exports.js";
import { buildNetworkAllowlistInfo } from "./mcp_sandbox_policy_exports.js";
import { createDaemonSessionStorage, refuseDefaultHomeStorageDirInTests, resolveDaemonStorageDir } from "./private_inference_loop_exports.js";
import { bindCloudSubagentHostOptions, clientIdentityFromEnv, createDaemonSessionPersistence, createHostQuestionDecisionProvider, createHostQuestionElicitationFactory, createNoopHeadlessMcpLease, createSessionShellBackgroundFactory, createStitchedAgentStoreSession, createStitchedPluginSources, createSurfaceFileChangeTracker, createTurnRuntimeCallerResolver, execRootFromParent, replayPersistedCreateRequest, wrapSessionShellOutput } from "./daemon_metrics_exports.js";
import { dist_exports4, wrapSurfaceResources } from "./dist_exports4.js";
import { local_loop_exports } from "./local_loop_exports.js";
import { init_dist40 } from "./agent-host-exec/dist/index.js";
import { AGENT_HOST_LOCAL_LOOP_GATE } from "./agent-host/dist/agentAdapter/local/local-loop-turn-router.js";
import { init_local_loop } from "./agent-host/dist/local-loop.js";
import { createAgentHost3 } from "./agent-host/dist/runtime.js";
import { createContext } from "./agent-host/dist/storage/instruments.js";
import { AgentHostBackgroundWorkKind, AgentHostBackgroundWorkState } from "./proto/dist/generated/agent/v1/agent_host_pb.js";
import { McpToolCaller } from "./proto/dist/generated/aiserver/v1/mcp_tool_pb.js";
import { CatalogRootMcpLease } from "./src/catalog-root-mcp-lease.ts";
import { DaemonAuthStore, DaemonPrivacyModeLookup } from "./src/daemon-auth.ts";
import { SessionExecRegistry } from "./src/session-exec-config.ts";
import { SessionShellOutputRegistry } from "./src/session-shell-output.ts";
import { DAEMON_HOSTED_MCP_LISTING_WAIT_CAP_MS, MISSING_SANDBOX_CONFIG_PATH2, import_node_crypto59, import_node_path108 } from "./src/stitch.ts";
import { SurfaceChannelHub } from "./src/surface-channel-hub.ts";
import { SessionPermissionsStore } from "./src/surface-permissions-map.ts";
export function execWorkspacePathsFromCatalog(catalogRoots, userHome) {
    return catalogRoots.length === 0 ? [
        userHome
    ] : catalogRoots;
}
function sessionNetworkAllowlistInfo(args) {
    return buildNetworkAllowlistInfo(args.teamSettings, args.homeDir, args.repoPath);
}
export async function createStitchedAgentHost(options2) {
    const env = options2.env ?? process.env;
    const homeDir = options2.homeDir ?? homeDirFromEnv(env);
    const agentsDir = options2.agentsDir ?? cursorAgentsDir({
        dev: options2.dev === true,
        homeDir
    });
    const storageDir = resolveDaemonStorageDir({
        storageDir: options2.blobsDir,
        env,
        agentsDir
    });
    refuseDefaultHomeStorageDirInTests(storageDir, homeDir);
    const { createAgentHostExec: loadCreateAgentHostExec, createDeferredConnectTransport: createDeferredConnectTransport2, createEmptyTeamSettingsService: createEmptyTeamSettingsService3, createHeadlessMcpGrantStore: createHeadlessMcpGrantStore2, createHeadlessMcpLease: createHeadlessMcpLease2, createHeadlessSettingSourcesLoader: createHeadlessSettingSourcesLoader2, createHostedMcpRoutingProvider: createHostedMcpRoutingProvider2, HostedMcpLeaseFilter: HostedMcpLeaseFilter2, HostedMcpRoutingState: HostedMcpRoutingState2, listHeadlessMcpDefinitions: listHeadlessMcpDefinitions2 } = await Promise.resolve().then(()=>(init_dist40(), dist_exports4));
    const sessionStorage = createDaemonSessionStorage({
        storageDir
    });
    const sessionExecRegistry = new SessionExecRegistry({
        agentsDir,
        projectDirOverride: options2.projectDirOverride,
        records: sessionStorage.records
    });
    const createAgentHostExec2 = options2.createAgentHostExec ?? loadCreateAgentHostExec;
    const userHome = homeDir;
    const log5 = options2.log ?? ((line)=>{
        process.stderr.write(`${line}
`);
    });
    const credentialManager = resolveStitchCredentialManager(options2.network);
    const clientIdentity = clientIdentityFromEnv();
    const baseNetwork = withForwardedLocalLoopGate(options2.network ?? {
        kind: "builtin",
        credentialManager: credentialManager ?? createMemoryCredentialManager(),
        ...clientIdentity === void 0 ? {} : {
            clientIdentity
        },
        ...options2.metrics === void 0 ? {} : {
            createNetworkHost: options2.metrics.createNetworkHost
        }
    }, options2.localLoop === true);
    const mcpToolTransport = baseNetwork.kind === "builtin" ? createDeferredConnectTransport2() : void 0;
    const network = baseNetwork.kind === "builtin" && mcpToolTransport !== void 0 ? {
        ...baseNetwork,
        onConnectTransportReady: (transport)=>{
            baseNetwork.onConnectTransportReady?.(transport);
            mcpToolTransport.resolve(transport);
        }
    } : baseNetwork;
    const hostedMcpRoutingState = new HostedMcpRoutingState2(options2.hostedMcpRouting === true);
    const hostedMcpLeaseFilter = new HostedMcpLeaseFilter2(()=>mcpToolTransport !== void 0 && hostedMcpRoutingState.isRoutingEnabled());
    const seedHostedMcpRoutingState = ()=>{
        for (const { sessionId, config: config2 } of sessionExecRegistry.listKnownExecConfigs()){
            hostedMcpRoutingState.noteSession(sessionId, config2);
        }
    };
    const mcpProjectDir = (0, import_node_path108.join)(agentsDir, "mcp");
    const teamSettings = createEmptyTeamSettingsService3();
    const settingSourceLoaders = new Map();
    const loaderKeysBySession = new Map();
    const sessionPermissions = new SessionPermissionsStore();
    const ownerOf = (sessionId)=>{
        try {
            return sessionExecRegistry.resolveForExec({
                sessionId
            }).owningClientInstanceId;
        } catch  {
            return void 0;
        }
    };
    const surfaceHub = new SurfaceChannelHub({
        permissionsSnapshotFor: (sessionId)=>sessionPermissions.get(sessionExecRegistry.resolveExecRoot(sessionId))
    });
    const shellOutput = new SessionShellOutputRegistry();
    const fileChangeTrackers = [];
    const lastFileChangeHandle = new Map();
    const lastAgentStore = new Map();
    const lastPluginSources = new Map();
    const loaderForRoots = (catalogRoots, gitExecutor)=>{
        const key = catalogRoots.join("\0");
        const existing = settingSourceLoaders.get(key);
        if (existing !== void 0) {
            return existing;
        }
        const loader2 = createHeadlessSettingSourcesLoader2({
            workspacePaths: catalogRoots,
            gitExecutor,
            sources: [
                "project",
                "user"
            ],
            userHome,
            ...options2.ripgrepPath === void 0 ? {} : {
                ripgrepPath: options2.ripgrepPath
            }
        });
        settingSourceLoaders.set(key, loader2);
        return loader2;
    };
    const createLease = (roots)=>createHeadlessMcpLease2({
            workspacePaths: roots,
            projectDir: mcpProjectDir,
            settingSources: [
                "project",
                "user"
            ],
            teamSettingsService: teamSettings,
            includeDefinition: hostedMcpLeaseFilter.includeDefinition
        });
    let mcpLease;
    let mcpRootsSync = Promise.resolve();
    const queueMcpRoots = (roots)=>{
        mcpRootsSync = mcpRootsSync.then(()=>mcpLease?.ensureRoots(roots) ?? Promise.resolve()).catch((error3)=>{
            void (error3 instanceof Error ? error3.message : error3);
        });
    };
    let exec2;
    try {
        mcpLease = new CatalogRootMcpLease(createLease, createNoopHeadlessMcpLease(), [], {
            deferCreate: true
        });
        exec2 = createAgentHostExec2({
            configureSession: (args)=>{
                const config2 = sessionExecRegistry.resolveForExec({
                    sessionId: args.sessionId,
                    parentSessionId: args.parentSessionId ?? args.rootSessionId
                });
                const rootSessionId = execRootFromParent(config2.parent) ?? args.rootSessionId;
                sessionExecRegistry.rememberExecRoot({
                    sessionId: args.sessionId,
                    execRootSessionId: rootSessionId
                });
                const catalogRoots = config2.workspacePaths;
                const execWorkspacePaths = execWorkspacePathsFromCatalog(catalogRoots, userHome);
                const execWorkspaceRoot = execWorkspacePaths[0] ?? userHome;
                queueMcpRoots(catalogRoots);
                hostedMcpRoutingState.noteSession(args.sessionId, config2);
                const loader2 = loaderForRoots(catalogRoots, args.gitExecutor);
                loaderKeysBySession.set(args.sessionId, catalogRoots.join("\0"));
                const fileChange = createSurfaceFileChangeTracker({
                    hub: surfaceHub,
                    sessionId: args.sessionId,
                    rootSessionId,
                    workspacePath: execWorkspaceRoot,
                    resolveOwner: ownerOf
                });
                fileChangeTrackers.push(fileChange);
                lastFileChangeHandle.set(args.sessionId, fileChange);
                const sandboxSupported = isSandboxSupported();
                const agentStore = createStitchedAgentStoreSession({
                    hub: surfaceHub,
                    sessionId: args.sessionId,
                    resolveOwner: ownerOf
                });
                lastAgentStore.set(args.sessionId, agentStore);
                const plugins = createStitchedPluginSources({
                    hub: surfaceHub,
                    sessionId: args.sessionId,
                    resolveOwner: ownerOf,
                    diskRules: loader2.cursorRulesService,
                    diskSubagents: loader2.subagentsService,
                    diskSkills: loader2.agentSkillsService,
                    workspacePaths: catalogRoots
                });
                lastPluginSources.set(args.sessionId, plugins);
                return {
                    workspacePaths: [
                        ...execWorkspacePaths
                    ],
                    projectDir: config2.projectDir,
                    permissionWorkspacePaths: [
                        ...catalogRoots
                    ],
                    permissions: {
                        mode: "interactive",
                        provider: createHostQuestionDecisionProvider({
                            askHostQuestion: args.askHostQuestion,
                            hasPushedPermissions: ()=>sessionPermissions.has(rootSessionId)
                        }),
                        teamSettings,
                        permissions: sessionPermissions.providerFor(rootSessionId),
                        perUserSandboxConfigPath: MISSING_SANDBOX_CONFIG_PATH2
                    },
                    overrides: {
                        cursorRulesService: plugins.cursorRulesService,
                        subagentsService: plugins.subagentsService,
                        getAgentSkills: plugins.getAgentSkills,
                        shellExtraEnvProvider: agentStore.extraEnvProvider,
                        mcpElicitationFactory: createHostQuestionElicitationFactory(args.askHostQuestion),
                        fileChangeTracker: fileChange.tracker,
                        backgroundShellFactory: createSessionShellBackgroundFactory({
                            projectDir: config2.projectDir,
                            sessionId: args.sessionId,
                            registry: shellOutput
                        }),
                        ...sandboxSupported ? {
                            getSandboxEnabled: ()=>{
                                const policyType = sessionPermissions.get(rootSessionId).userConfiguredPolicy?.type;
                                return policyType !== void 0 && policyType !== "insecure_none";
                            },
                            getSandboxSupported: ()=>isSandboxSupported(),
                            getNetworkAllowlistInfo: ()=>sessionNetworkAllowlistInfo({
                                    teamSettings,
                                    homeDir: userHome,
                                    repoPath: execWorkspaceRoot
                                })
                        } : {}
                    }
                };
            },
            wrapResources: (context2)=>{
                let catalogRoots = [];
                let projectDir = "";
                try {
                    const config2 = sessionExecRegistry.resolveForExec({
                        sessionId: context2.args.sessionId
                    });
                    catalogRoots = config2.workspacePaths;
                    projectDir = config2.projectDir;
                } catch  {
                    catalogRoots = [];
                }
                const workspacePaths = execWorkspacePathsFromCatalog(catalogRoots, userHome);
                const workspacePath = workspacePaths[0] ?? projectDir;
                const fileChange = lastFileChangeHandle.get(context2.args.sessionId);
                lastFileChangeHandle.delete(context2.args.sessionId);
                const agentStore = lastAgentStore.get(context2.args.sessionId);
                lastAgentStore.delete(context2.args.sessionId);
                agentStore?.refresh();
                const plugins = lastPluginSources.get(context2.args.sessionId);
                lastPluginSources.delete(context2.args.sessionId);
                plugins?.reloadFromSurface(createContext());
                return wrapSessionShellOutput({
                    registry: shellOutput,
                    context: context2,
                    workspacePath,
                    inner: wrapSurfaceResources({
                        hub: surfaceHub,
                        context: context2,
                        workspacePaths,
                        resolveOwner: ownerOf,
                        ...options2.workspaceTrusted === void 0 ? {} : {
                            workspaceTrusted: options2.workspaceTrusted
                        },
                        ...options2.createHookExecutor === void 0 ? {} : {
                            createHookExecutor: options2.createHookExecutor
                        },
                        onDispose: ()=>{
                            if (fileChange === void 0) {
                                return;
                            }
                            fileChange.dispose();
                            const index = fileChangeTrackers.indexOf(fileChange);
                            if (index >= 0) {
                                fileChangeTrackers.splice(index, 1);
                            }
                        }
                    })
                });
            },
            permissions: {
                mode: "deny-all",
                teamSettings
            },
            ripgrepPath: options2.ripgrepPath
        });
    } catch (error3) {
        try {
            if (mcpLease !== void 0) {
                await mcpLease.dispose();
            }
        } finally{
            sessionStorage.close();
        }
        throw error3;
    }
    if (mcpLease === void 0) {
        sessionStorage.close();
        throw new Error("MCP lease failed to construct");
    }
    const processMcpLease = mcpLease;
    const hostedMcp = createHostedMcpRoutingProvider2({
        lease: processMcpLease,
        filter: hostedMcpLeaseFilter,
        state: hostedMcpRoutingState,
        transport: mcpToolTransport?.transport,
        caller: options2.mcpToolCaller ?? createTurnRuntimeCallerResolver(McpToolCaller.IDE),
        deviceTag: `agent-host-daemon:${(0, import_node_crypto59.randomUUID)()}`,
        listingWaitCapMs: DAEMON_HOSTED_MCP_LISTING_WAIT_CAP_MS,
        serveLastListingOnTtl: true,
        serveLastListingOnChange: true,
        grantMigration: {
            migrationEnabled: options2.hostedMcpGrantMigrationEnabled === true,
            store: createHeadlessMcpGrantStore2({
                projectDir: mcpProjectDir
            }),
            listLocalGrants: async ()=>{
                const definitions = await listHeadlessMcpDefinitions2({
                    workspacePaths: sessionExecRegistry.collectWorkspacePaths(),
                    settingSources: [
                        "project",
                        "user"
                    ]
                });
                return definitions.flatMap((definition)=>definition.kind === "http" && definition.url !== void 0 ? [
                        {
                            serverIdentifier: definition.identifier,
                            authStorageKey: definition.authStorageKey,
                            serverUrl: definition.url
                        }
                    ] : []);
            }
        },
        log: log5
    });
    let host;
    const persistence = createDaemonSessionPersistence(sessionStorage, sessionExecRegistry);
    const createBlobStore = (args)=>{
        const prepared = sessionStorage.blobStoreFor(args);
        if (prepared === void 0) {
            throw new Error(`no host-owned storage is prepared for session ${args.sessionId}`);
        }
        return prepared;
    };
    try {
        const createAgentHostImpl = await resolveCreateAgentHost(options2);
        const authStore = new DaemonAuthStore();
        const privacyModeLookup = credentialManager === void 0 ? void 0 : new DaemonPrivacyModeLookup({
            store: authStore,
            credentialManager,
            log: log5,
            fetch: (accessToken, timeoutMs)=>fetchPrivacyModeFromDashboard({
                    accessToken,
                    timeoutMs,
                    endpoint: resolveDaemonDashboardEndpoint({
                        dashboardEndpoint: baseNetwork.kind === "builtin" ? baseNetwork.backendUrl : void 0,
                        env: process.env
                    })
                })
        });
        const created = await createAgentHostImpl({
            ...options2.piOptions === void 0 ? {} : {
                piOptions: options2.piOptions
            },
            ...options2.metrics === void 0 ? {} : {
                metrics: options2.metrics.agentHost,
                attachLocalLoopAttemptContext: options2.metrics.attachLocalLoopAttemptContext
            },
            network,
            ...options2.surfaceOwnsBackgroundWakeups === true ? {
                surfaceOwnsBackgroundWakeups: true
            } : {},
            storageDir,
            storage: sessionStorage.storage,
            createResources: (args)=>{
                if (args.parent !== void 0) {
                    sessionExecRegistry.inheritFromSession({
                        destinationSessionId: args.sessionId,
                        sourceSessionId: args.parent.parentSessionId,
                        parent: args.parent
                    });
                } else if (args.parentSessionId !== void 0 && args.parentSessionId.length > 0) {
                    sessionExecRegistry.inheritFromSession({
                        destinationSessionId: args.sessionId,
                        sourceSessionId: args.parentSessionId
                    });
                }
                return exec2.createResources(args);
            },
            mcpProvider: hostedMcp,
            modelId: options2.modelId,
            modelDetails: options2.modelDetails,
            createBlobStore,
            createSessionStore: persistence.createSessionStore,
            sessionCatalog: persistence.sessionCatalog,
            ...options2.workspaceCatalog === void 0 ? {} : {
                workspaceCatalog: options2.workspaceCatalog
            },
            userHomeDirectory: homeDir,
            subagentsAsSessions: true,
            findExistingSubagentSessionId: persistence.findExistingSubagentSessionId,
            subagentTranscripts: {
                projectDir: ({ sessionId })=>sessionExecRegistry.resolveForExec({
                        sessionId
                    }).projectDir
            },
            ...bindCloudSubagentHostOptions({
                nativeCloudSubagents: options2.nativeCloudSubagents === true,
                hub: surfaceHub,
                resolveOwner: ownerOf,
                sessionStorage
            })
        });
        host = wrapHostWithSessionExecRegistry(created, sessionExecRegistry);
        persistence.wrapHost(host, {
            onSessionForgotten: (sessionId)=>{
                lastAgentStore.delete(sessionId);
                lastPluginSources.delete(sessionId);
                surfaceHub.abortPendingForSession([
                    sessionId
                ]);
                if (sessionExecRegistry.resolveExecRoot(sessionId) === sessionId) {
                    sessionPermissions.delete(sessionId);
                }
                disposeSettingSourceLoadersForSession(sessionId, loaderKeysBySession, settingSourceLoaders);
                hostedMcpRoutingState.forgetSession(sessionId);
            }
        });
        wrapHostAfterTurnInterrupt(host, sessionExecRegistry, surfaceHub);
        wrapHostAfterBackgroundWorkAbort(host, sessionExecRegistry, surfaceHub);
        wrapHostAfterSessionDelete(host, processMcpLease, sessionExecRegistry, ()=>mcpRootsSync);
        return {
            host,
            exec: exec2,
            sessionStorage,
            surfaceHub,
            shellOutput,
            hostedMcp,
            owningClientInstanceId: (sessionId)=>{
                return ownerOf(sessionId);
            },
            applySessionPermissions (sessionId, permissions) {
                return sessionPermissions.apply(sessionExecRegistry.resolveExecRoot(sessionId), permissions);
            },
            auth: {
                store: authStore,
                applyToCredentials: async ()=>{
                    if (credentialManager === void 0) {
                        seedHostedMcpRoutingState();
                        await processMcpLease.start(sessionExecRegistry.collectWorkspacePaths());
                        return void 0;
                    }
                    const installed = await applyDaemonAuthToCredentials(authStore, credentialManager, privacyModeLookup?.lookUp);
                    teamSettings.invalidateCache();
                    if (authStore.getActiveAccessToken() === void 0) {
                        return installed;
                    }
                    seedHostedMcpRoutingState();
                    await processMcpLease.start(sessionExecRegistry.collectWorkspacePaths(), {
                        force: true
                    });
                    return installed;
                }
            },
            dispose: async ()=>{
                privacyModeLookup?.dispose();
                surfaceHub.dispose();
                try {
                    await host.dispose();
                } finally{
                    for (const handle of fileChangeTrackers.splice(0)){
                        handle.dispose();
                    }
                    try {
                        sessionStorage.close();
                    } finally{
                        try {
                            await exec2.dispose();
                        } finally{
                            try {
                                const settled = await Promise.allSettled([
                                    mcpRootsSync
                                ]);
                                const outcome = settled[0];
                                if (outcome?.status === "rejected") {
                                    void outcome.reason;
                                }
                                hostedMcp.dispose();
                                await processMcpLease.dispose();
                            } finally{
                                mcpToolTransport?.dispose();
                                disposeSettingSourceLoaders(settingSourceLoaders);
                            }
                        }
                    }
                }
            }
        };
    } catch (error3) {
        for (const handle of fileChangeTrackers.splice(0)){
            handle.dispose();
        }
        sessionStorage.close();
        try {
            await exec2.dispose();
        } finally{
            try {
                hostedMcp.dispose();
                await processMcpLease.dispose();
            } finally{
                mcpToolTransport?.dispose();
                disposeSettingSourceLoaders(settingSourceLoaders);
            }
        }
        throw error3;
    }
}
function disposeSettingSourceLoaders(loaders) {
    for (const loader2 of loaders.values()){
        loader2.dispose();
    }
    loaders.clear();
}
function disposeSettingSourceLoadersForSession(sessionId, loaderKeysBySession, loaders) {
    const key = loaderKeysBySession.get(sessionId);
    loaderKeysBySession.delete(sessionId);
    if (key === void 0) {
        return;
    }
    for (const used of loaderKeysBySession.values()){
        if (used === key) {
            return;
        }
    }
    const loader2 = loaders.get(key);
    if (loader2 === void 0) {
        return;
    }
    loader2.dispose();
    loaders.delete(key);
}
function liveDescendantSessionIds(sessionExecRegistry, sessionId) {
    return sessionExecRegistry.listDescendantSessionIds(sessionId, {
        inMemoryOnly: true
    });
}
function wrapHostAfterTurnInterrupt(host, sessionExecRegistry, surfaceHub) {
    const originalInterruptTurn = host.interruptTurn.bind(host);
    host.interruptTurn = async (ctx, request3)=>{
        const response = await originalInterruptTurn(ctx, request3);
        if (response.interrupted) {
            surfaceHub.abortPendingForSession([
                request3.sessionId,
                ...liveDescendantSessionIds(sessionExecRegistry, request3.sessionId)
            ]);
        }
        return response;
    };
}
function wrapHostAfterBackgroundWorkAbort(host, sessionExecRegistry, surfaceHub) {
    const originalAbortBackgroundWork = host.abortBackgroundWork.bind(host);
    host.abortBackgroundWork = async (ctx, request3)=>{
        const response = await originalAbortBackgroundWork(ctx, request3);
        if (response.aborted) {
            surfaceHub.abortPendingForSession([
                request3.workId,
                ...liveDescendantSessionIds(sessionExecRegistry, request3.workId)
            ]);
        }
        return response;
    };
    const originalAbortAllBackgroundWork = host.abortAllBackgroundWork.bind(host);
    host.abortAllBackgroundWork = async (ctx, request3)=>{
        const response = await originalAbortAllBackgroundWork(ctx, request3);
        if (response.abortedCount > 0 && request3.kind !== AgentHostBackgroundWorkKind.SHELL && request3.state !== AgentHostBackgroundWorkState.QUEUED) {
            surfaceHub.abortPendingForSession(liveDescendantSessionIds(sessionExecRegistry, request3.sessionId));
        }
        return response;
    };
}
function wrapHostAfterSessionDelete(host, mcpLease, sessionExecRegistry, mcpRootsSync) {
    const originalDeleteSession = host.deleteSession.bind(host);
    host.deleteSession = async (ctx, request3)=>{
        const response = await originalDeleteSession(ctx, request3);
        try {
            await mcpRootsSync();
            await mcpLease.setRoots(sessionExecRegistry.collectWorkspacePaths());
        } catch (error3) {
            void (error3 instanceof Error ? error3.message : error3);
        }
        return response;
    };
}
export function withForwardedLocalLoopGate(network, localLoop) {
    if (!localLoop || network.kind !== "builtin" || network.enabledFeatureGates !== void 0) {
        return network;
    }
    return {
        ...network,
        enabledFeatureGates: new Set([
            AGENT_HOST_LOCAL_LOOP_GATE
        ])
    };
}
function resolveStitchCredentialManager(network) {
    if (network === void 0) {
        return createMemoryCredentialManager();
    }
    if (network.kind === "builtin") {
        return network.credentialManager;
    }
    return void 0;
}
async function resolveCreateAgentHost(options2) {
    if (options2.createAgentHost !== void 0) {
        return options2.createAgentHost;
    }
    if (options2.localLoop === true) {
        const localLoopModule = await Promise.resolve().then(()=>(init_local_loop(), local_loop_exports));
        return localLoopModule.createAgentHost;
    }
    return createAgentHost3;
}
export function wrapHostWithSessionExecRegistry(host, sessionExecRegistry) {
    const originalCreateSession = host.createSession.bind(host);
    host.createSession = async (ctx, request3, options2)=>{
        const persistedBefore = sessionExecRegistry.readPersistedExecConfigLenient(request3.sessionId);
        const stageGeneration = sessionExecRegistry.claimStagedCreate(request3.sessionId);
        let forwarded = request3;
        try {
            forwarded = rememberExecConfigBeforeCreate(sessionExecRegistry, request3, options2);
            inheritOwnerAfterCreate(sessionExecRegistry, request3, options2);
            sessionExecRegistry.persistIfOwned(request3.sessionId, stageGeneration);
        } catch (error3) {
            sessionExecRegistry.abandonStagedCreate(request3.sessionId, persistedBefore, stageGeneration);
            throw error3;
        }
        let response;
        try {
            response = await originalCreateSession(ctx, forwarded, options2);
        } catch (error3) {
            if (host.hasLiveSession?.(request3.sessionId) !== true) {
                sessionExecRegistry.rollbackPersistedCreate(request3.sessionId, persistedBefore, stageGeneration);
            }
            throw error3;
        }
        return response;
    };
    return host;
}
function rememberExecConfigBeforeCreate(sessionExecRegistry, request3, options2) {
    const parentSessionId = options2?.parent?.parentSessionId.trim();
    if (parentSessionId !== void 0 && parentSessionId.length > 0 && sessionExecRegistry.hasExecConfig(parentSessionId) && (request3.sessionOptions?.workspacePaths ?? []).length === 0 && request3.sessionOptions?.isGlassRoot !== true) {
        sessionExecRegistry.inheritFromSession({
            destinationSessionId: request3.sessionId,
            sourceSessionId: parentSessionId,
            persist: false,
            parent: options2?.parent
        });
        return request3;
    }
    const workspacePaths = request3.sessionOptions?.workspacePaths ?? [];
    const isGlassEmpty = request3.sessionOptions?.isGlassRoot === true && workspacePaths.length === 0;
    if (workspacePaths.length > 0 || isGlassEmpty) {
        sessionExecRegistry.registerForCreateSession(request3, {
            persist: false,
            parent: options2?.parent
        });
        return request3;
    }
    const persisted = sessionExecRegistry.ensureRegisteredFromPersistence(request3.sessionId);
    return replayPersistedCreateRequest(request3, persisted);
}
function inheritOwnerAfterCreate(sessionExecRegistry, request3, options2) {
    const parentSessionId = options2?.parent?.parentSessionId.trim();
    if (parentSessionId === void 0 || parentSessionId.length === 0) {
        return;
    }
    sessionExecRegistry.inheritOwnerFromSession({
        destinationSessionId: request3.sessionId,
        sourceSessionId: parentSessionId
    });
}

export var stitch_exports = {};
Object.defineProperty(stitch_exports, "createStitchedAgentHost", {
    enumerable: true,
    get: ()=>createStitchedAgentHost
});
Object.defineProperty(stitch_exports, "execWorkspacePathsFromCatalog", {
    enumerable: true,
    get: ()=>execWorkspacePathsFromCatalog
});
Object.defineProperty(stitch_exports, "withForwardedLocalLoopGate", {
    enumerable: true,
    get: ()=>withForwardedLocalLoopGate
});
Object.defineProperty(stitch_exports, "wrapHostWithSessionExecRegistry", {
    enumerable: true,
    get: ()=>wrapHostWithSessionExecRegistry
});
