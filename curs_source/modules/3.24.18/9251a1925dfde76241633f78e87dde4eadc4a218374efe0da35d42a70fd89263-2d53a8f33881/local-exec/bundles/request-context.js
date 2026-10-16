import { init_dist8 } from "../../agent-exec/dist/index.js";
import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { isOriginBackedRemoteUrl } from "../../dist_exports.js";
import { getGitRemoteUrl, sanitizeGitRemoteUrl } from "../../dist_exports2.js";
import { init_mcp_file_system_writer } from "./mcp-file-system-writer.js";
import { init_notes } from "./notes.js";
import { init_common4 } from "./services/common.js";
import { init_mcp_tool_annotations } from "../../mcp-core/dist/mcp-tool-annotations.js";
import { buildLegacyMcpRequestContextFields, buildMcpMetaToolOptions, buildMcpState, buildMcpStateExecResult, computeEnv, computeMcpClientStatuses, generateConversationNotesTreeListing, generateSharedNotesTreeListing, getGitInfoForRepoPathWithinBudget, getGitRepoPathForWorkspacePath } from "../../mcp_sandbox_policy_exports.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { McpRefreshPolicy, init_mcp_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_mcp_pb } from "../../proto/dist/generated/agent/v1/mcp_pb.js";
import { GitRepoInfo, RequestContext, RequestContextError, RequestContextResult, RequestContextSuccess, init_request_context_exec_pb } from "../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
var import_node_os20, __addDisposableResource41, __disposeResources41, GIT_INFO_BUDGET_TIMEOUT_MS, GLOBAL_CACHE_REBUILD_DEBOUNCE_MS, logger29, MCP_AUTH_INPUT_SCHEMA, SimpleMcpStateAccessor, LocalMcpStateExecutor, LocalRequestContextExecutor;
export { GIT_INFO_BUDGET_TIMEOUT_MS, GLOBAL_CACHE_REBUILD_DEBOUNCE_MS, LocalMcpStateExecutor, LocalRequestContextExecutor, MCP_AUTH_INPUT_SCHEMA, SimpleMcpStateAccessor, __addDisposableResource41, __disposeResources41, import_node_os20, logger29 };
var __wakaru_init_request_context2_initialized = false;
export function init_request_context2() {
if (__wakaru_init_request_context2_initialized) return;
__wakaru_init_request_context2_initialized = true;
"use strict";
import_node_os20 = __toESM(require("node:os"), 1);
init_dist8();
init_dist();
init_mcp_tool_annotations();
init_mcp_exec_pb();
init_mcp_pb();
init_request_context_exec_pb();
init_dist13();
init_esm2();
init_mcp_file_system_writer();
init_notes();
init_common4();
__addDisposableResource41 = function(env, value, async) {
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
__disposeResources41 = (function(SuppressedError2) {
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
GIT_INFO_BUDGET_TIMEOUT_MS = 3e3;
GLOBAL_CACHE_REBUILD_DEBOUNCE_MS = 5e3;
logger29 = createLogger("local-exec:request-context");
MCP_AUTH_INPUT_SCHEMA = {
    type: "object",
    properties: {},
    additionalProperties: false
};
SimpleMcpStateAccessor = class {
    constructor(mcpLease){
        this.mcpLease = mcpLease;
    }
    async getState(ctx) {
        const [tools, instructions] = await Promise.all([
            this.mcpLease.getTools(ctx).catch((error3)=>{
                logger29.warn(ctx, "Error fetching MCP tools", {
                    error: error3
                });
                return [];
            }),
            this.mcpLease.getInstructions(ctx).catch((error3)=>{
                logger29.warn(ctx, "Error fetching MCP instructions", {
                    error: error3
                });
                return [];
            })
        ]);
        const clientStatuses = await computeMcpClientStatuses(ctx, this.mcpLease);
        return buildMcpState(tools, instructions, clientStatuses);
    }
};
LocalMcpStateExecutor = class {
    constructor(mcpStateAccessor, ensureMcpServersLoaded, options2){
        this.mcpStateAccessor = mcpStateAccessor;
        this.ensureMcpServersLoaded = ensureMcpServersLoaded;
        this.options = options2;
    }
    async execute(ctx, args) {
        try {
            await this.ensureMcpServersLoaded?.(ctx, args.serverIdentifiers, {
                wait: !args.kickOnly
            });
        } catch  {}
        if (args.refreshPolicy === McpRefreshPolicy.FORCE_IF_MISSING || args.refreshPolicy === McpRefreshPolicy.FORCE) {
            await this.mcpStateAccessor.refreshNow?.(ctx);
        }
        const mcpState = await this.mcpStateAccessor.getState(ctx);
        if (this.options?.filterToRequestedServers === true && args.serverIdentifiers.length > 0) {
            const requested = new Set(args.serverIdentifiers);
            const servers = mcpState.servers.filter((server)=>requested.has(server.serverIdentifier));
            if (servers.length > 0) {
                return buildMcpStateExecResult({
                    ...mcpState,
                    servers
                });
            }
        }
        return buildMcpStateExecResult(mcpState);
    }
};
LocalRequestContextExecutor = class {
    constructor(cursorRulesService, cloudRulesService, subagentsService, repositoryProvider, grepProvider, mcpStateAccessor, gitExecutor, workspacePaths, options2 = {}){
        this.cursorRulesService = cursorRulesService;
        this.cloudRulesService = cloudRulesService;
        this.subagentsService = subagentsService;
        this.repositoryProvider = repositoryProvider;
        this.grepProvider = grepProvider;
        this.mcpStateAccessor = mcpStateAccessor;
        this.gitExecutor = gitExecutor;
        this.workspacePaths = workspacePaths;
        this.cachedWorkspaces = new Map();
        this.inFlightWorkspaceWarms = new Map();
        const { projectDir, getSmartModeClassifierAutoModeEnabled, getAdminCommandDenylist, devForceNextSmartModeClassifierBlockToken, isWorkingDirHomeDir, createFileWatcher, getSandboxEnabled, getSandboxSupported, getNetworkAllowlistInfo, userTerminalHint, getMcpFileSystemOptions, mcpMetaToolEnabled, mcpMetaToolSlimDescriptors, mcpInputSchemaJson, alwaysExposeVirtualMcpAuthTool, getArtifactsFolder, secretRedactionEnabled, attributionConfigProvider, isAttributionDisabledByAdmin, getAgentSkills, additionalRules, getComputerUseSupported, getMockPromptTime } = options2;
        this.projectDir = projectDir;
        this.isWorkingDirHomeDir = isWorkingDirHomeDir;
        this.getSandboxEnabled = getSandboxEnabled;
        this.getSandboxSupported = getSandboxSupported;
        this.getNetworkAllowlistInfo = getNetworkAllowlistInfo;
        this.getSmartModeClassifierAutoModeEnabled = getSmartModeClassifierAutoModeEnabled;
        this.getAdminCommandDenylist = getAdminCommandDenylist;
        this.devForceNextSmartModeClassifierBlockToken = devForceNextSmartModeClassifierBlockToken;
        this.getMockPromptTime = getMockPromptTime;
        this.userTerminalHint = userTerminalHint;
        this.getMcpFileSystemOptions = getMcpFileSystemOptions;
        this.mcpMetaToolEnabled = mcpMetaToolEnabled ?? false;
        this.mcpMetaToolSlimDescriptors = mcpMetaToolSlimDescriptors ?? false;
        this.mcpInputSchemaJson = mcpInputSchemaJson ?? false;
        this.alwaysExposeVirtualMcpAuthTool = alwaysExposeVirtualMcpAuthTool ?? false;
        this.getArtifactsFolder = getArtifactsFolder;
        this.secretRedactionEnabled = secretRedactionEnabled;
        this.attributionConfigProvider = attributionConfigProvider;
        this.isAttributionDisabledByAdmin = isAttributionDisabledByAdmin;
        this.getAgentSkills = getAgentSkills;
        this.additionalRules = additionalRules ?? [];
        this.getComputerUseSupported = getComputerUseSupported;
        this.reduceContextHotPath = options2.reduceContextHotPath ?? false;
        this.warmWorkspaceCaches();
        void this.rebuildGlobalCache();
        if (createFileWatcher !== void 0) {
            this.fileWatcher = createFileWatcher();
            this.fileWatcher.onDidChange((fsPath)=>{
                this.onWorkspacePathChanged(fsPath);
            });
            this.fileWatcher.onDidCreate((fsPath)=>{
                this.onWorkspacePathChanged(fsPath);
            });
            this.fileWatcher.onDidDelete((fsPath)=>{
                this.onWorkspacePathChanged(fsPath);
            });
        }
    }
    onWorkspacePathChanged(_fsPath) {
        this.rebuildAllCaches();
    }
    getWorkspaceCache(workspacePath) {
        return this.cachedWorkspaces.get(workspacePath);
    }
    warmWorkspaceCaches() {
        const ctx = createContext();
        void Promise.all(this.workspacePaths.map((workspacePath)=>this.ensureWorkspaceCacheWarm(ctx, workspacePath)));
    }
    ensureWorkspaceCacheWarm(ctx, workspacePath) {
        if (this.cachedWorkspaces.has(workspacePath)) {
            return Promise.resolve();
        }
        const inFlight = this.inFlightWorkspaceWarms.get(workspacePath);
        if (inFlight !== void 0) {
            return inFlight;
        }
        const warming = this.warmWorkspaceCache(ctx, workspacePath).finally(()=>{
            this.inFlightWorkspaceWarms.delete(workspacePath);
        });
        this.inFlightWorkspaceWarms.set(workspacePath, warming);
        return warming;
    }
    async warmWorkspaceCache(ctx, workspacePath) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource41(env_2, createSpan(ctx.withName("LocalRequestContextExecutor.warmWorkspaceCache")), false);
            const repoPath = await getGitRepoPathForWorkspacePath(span.ctx, this.gitExecutor, workspacePath);
            const remoteUrl = repoPath ? await getGitRemoteUrl(span.ctx, this.gitExecutor, repoPath) : void 0;
            const workspaceCache = {
                repoPath: repoPath ?? void 0,
                remoteUrl: remoteUrl !== void 0 ? sanitizeGitRemoteUrl(remoteUrl) : void 0
            };
            this.cachedWorkspaces.set(workspacePath, workspaceCache);
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources41(env_2);
        }
    }
    rebuildAllCaches() {
        if (this.cacheDebounceTimeout) {
            clearTimeout(this.cacheDebounceTimeout);
        }
        this.cacheDebounceTimeout = setTimeout(()=>{
            this.cacheDebounceTimeout = void 0;
            void this.rebuildGlobalCache();
        }, GLOBAL_CACHE_REBUILD_DEBOUNCE_MS);
    }
    invalidateGlobalCache() {
        this.globalCache = void 0;
        this.lastGoodGlobalCache = void 0;
        this.globalCacheTraceId = void 0;
    }
    rebuildGlobalCache() {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const ctx = createContext();
            const span = __addDisposableResource41(env_3, createSpan(ctx.withName("LocalRequestContextExecutor.rebuildGlobalCache")), false);
            this.globalCacheTraceId = span.span.spanContext().traceId;
            const pending = this.computeGlobalCache(span.ctx);
            this.globalCache = pending;
            if (this.reduceContextHotPath) {
                pending.then((data)=>{
                    if (this.globalCache === pending) {
                        this.lastGoodGlobalCache = data;
                    }
                }, ()=>{
                    if (this.globalCache === pending) {
                        this.globalCache = void 0;
                    }
                });
            }
            return pending;
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources41(env_3);
        }
    }
    async computeGlobalCache(ctx) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource41(env_4, createSpan(ctx.withName("LocalRequestContextExecutor.computeGlobalCache")), false);
            const signal = AbortSignal.timeout(1e3);
            const startMs = performance.now();
            const timings = {};
            const timed = (label, p2)=>{
                const t0 = performance.now();
                return p2.finally(()=>{
                    timings[label] = Math.round(performance.now() - t0);
                });
            };
            const [rules, cloudRule, codebaseReference, customSubagents] = await Promise.all([
                timed("cursorRules", this.cursorRulesService.getAllCursorRules(span.ctx)),
                timed("cloudRule", this.cloudRulesService ? this.cloudRulesService.getCloudRule(span.ctx) : Promise.resolve(null)),
                timed("codebaseRef", this.repositoryProvider.getCodebaseReference(span.ctx, signal).catch(()=>void 0)),
                timed("subagents", this.subagentsService ? this.subagentsService.getAllSubagents().catch(()=>[]) : Promise.resolve([]))
            ]);
            const totalMs = Math.round(performance.now() - startMs);
            if (totalMs > 1e3) {
                logger29.warn(span.ctx, "computeGlobalCache: slow", {
                    totalMs,
                    ...timings,
                    ruleCount: rules.length
                });
            }
            const allRules = [
                ...this.additionalRules,
                ...rules
            ];
            return {
                rules: allRules,
                cloudRule,
                codebaseReference,
                customSubagents
            };
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources41(env_4);
        }
    }
    dispose() {
        if (this.cacheDebounceTimeout) {
            clearTimeout(this.cacheDebounceTimeout);
            this.cacheDebounceTimeout = void 0;
        }
        if (this.fileWatcher) {
            this.fileWatcher.dispose();
            this.fileWatcher = void 0;
        }
        this.globalCache = void 0;
        this.lastGoodGlobalCache = void 0;
    }
    async collectWorkspaceCaches(ctx, options2) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource41(env_5, createSpan(ctx.withName("LocalRequestContextExecutor.collectWorkspaceCaches")), false);
            let trackedState;
            if (this.grepProvider.getTrackedState) {
                try {
                    trackedState = await this.grepProvider.getTrackedState(this.workspacePaths);
                } catch  {
                    trackedState = void 0;
                }
            }
            let gitRepoInfoComplete = true;
            const gitRepos = (await Promise.all(this.workspacePaths.map(async (workspacePath)=>{
                let workspaceCache = this.getWorkspaceCache(workspacePath);
                if (workspaceCache === void 0) {
                    if (!options2.waitForWorkspaceCache) {
                        gitRepoInfoComplete = false;
                        void this.ensureWorkspaceCacheWarm(span.ctx, workspacePath);
                        return void 0;
                    }
                    await this.ensureWorkspaceCacheWarm(span.ctx, workspacePath);
                    workspaceCache = this.getWorkspaceCache(workspacePath);
                    if (workspaceCache === void 0) {
                        gitRepoInfoComplete = false;
                        return void 0;
                    }
                }
                const tracked = trackedState?.[workspacePath];
                if (tracked !== void 0) {
                    return new GitRepoInfo({
                        path: workspaceCache.repoPath,
                        status: tracked.gitStatus,
                        branchName: tracked.gitBranchName,
                        remoteUrl: workspaceCache.remoteUrl,
                        isOriginBacked: isOriginBackedRemoteUrl(workspaceCache.remoteUrl)
                    });
                }
                if (workspaceCache.repoPath === void 0) {
                    return void 0;
                }
                const { status, branchName } = await getGitInfoForRepoPathWithinBudget(span.ctx, this.gitExecutor, workspaceCache.repoPath, GIT_INFO_BUDGET_TIMEOUT_MS);
                return new GitRepoInfo({
                    path: workspaceCache.repoPath,
                    status,
                    branchName,
                    remoteUrl: workspaceCache.remoteUrl,
                    isOriginBacked: isOriginBackedRemoteUrl(workspaceCache.remoteUrl)
                });
            }))).filter((repo)=>repo !== void 0);
            return {
                gitRepos,
                gitRepoInfoComplete
            };
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources41(env_5);
        }
    }
    async computeCachedRequestContext(ctxt, args) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource41(env_6, createSpan(ctxt.withName("LocalRequestContextExecutor.computeCachedRequestContext")), false);
            const projectDir = this.projectDir;
            const getGlobalData = async ()=>{
                const env_7 = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const cacheSpan = __addDisposableResource41(env_7, createSpan(span.ctx.withName("LocalRequestContextExecutor.computeCachedRequestContext.getGlobalData")), false);
                    if (this.globalCacheTraceId) {
                        cacheSpan.span.setAttribute("cacheTraceId", this.globalCacheTraceId);
                    }
                    if (!this.reduceContextHotPath) {
                        if (this.globalCache === void 0) {
                            const pending = this.computeGlobalCache(span.ctx);
                            this.globalCache = pending;
                            pending.catch(()=>{
                                if (this.globalCache === pending) {
                                    this.globalCache = void 0;
                                }
                            });
                        }
                        return this.globalCache;
                    }
                    if (this.lastGoodGlobalCache !== void 0) {
                        return this.lastGoodGlobalCache;
                    }
                    return this.globalCache ?? this.rebuildGlobalCache();
                } catch (e_7) {
                    env_7.error = e_7;
                    env_7.hasError = true;
                } finally{
                    __disposeResources41(env_7);
                }
            };
            const startMs = performance.now();
            const timings = {};
            const timed = (label, p2)=>{
                const t0 = performance.now();
                return p2.finally(()=>{
                    timings[label] = Math.round(performance.now() - t0);
                });
            };
            const [globalData, mcp, env, { gitRepos, gitRepoInfoComplete }, conversationNotesListing, sharedNotesListing, mcpFileSystemOptions, attributionDisabledByAdmin, agentSkills, adminCommandDenylist] = await Promise.all([
                timed("globalCache", getGlobalData()),
                timed("mcpState", this.mcpStateAccessor.getState(span.ctx)),
                timed("env", computeEnv(span.ctx, this.workspacePaths, {
                    projectDir,
                    notesSessionId: args.notesSessionId,
                    metaAgentNotesEnabled: false,
                    getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled,
                    devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken,
                    getMockPromptTime: this.getMockPromptTime,
                    isWorkingDirHomeDir: this.isWorkingDirHomeDir,
                    getSandboxEnabled: this.getSandboxEnabled,
                    getSandboxSupported: this.getSandboxSupported,
                    getNetworkAllowlistInfo: this.getNetworkAllowlistInfo,
                    userTerminalHint: this.userTerminalHint,
                    artifactsFolder: this.getArtifactsFolder?.(span.ctx),
                    secretRedactionEnabled: this.secretRedactionEnabled,
                    getComputerUseSupported: this.getComputerUseSupported
                })),
                timed("git", this.collectWorkspaceCaches(span.ctx, {
                    waitForWorkspaceCache: args.waitForWorkspaceCache === true
                })),
                timed("conversationNotes", projectDir && args.notesSessionId ? generateConversationNotesTreeListing(projectDir, args.notesSessionId) : Promise.resolve(void 0)),
                timed("sharedNotes", projectDir ? generateSharedNotesTreeListing(projectDir) : Promise.resolve(void 0)),
                timed("mcpFileSystemOptions", this.getMcpFileSystemOptions ? this.getMcpFileSystemOptions(span.ctx, {
                    timeoutMs: 3e3
                }) : Promise.resolve(void 0)),
                timed("attribution", this.isAttributionDisabledByAdmin ? this.isAttributionDisabledByAdmin().catch(()=>true) : Promise.resolve(false)),
                timed("agentSkills", this.getAgentSkills ? this.getAgentSkills(span.ctx) : Promise.resolve([])),
                timed("adminCommandDenylist", this.getAdminCommandDenylist ? this.getAdminCommandDenylist() : Promise.resolve(void 0))
            ]);
            const parallelMs = performance.now() - startMs;
            for (const [label, value] of Object.entries(timings)){
                span.span.setAttribute(`requestContext.timing.${label}Ms`, value);
            }
            span.span.setAttribute("requestContext.timing.totalMs", Math.round(parallelMs));
            if (parallelMs > 1e3) {
                logger29.warn(span.ctx, "computeCachedRequestContext: slow parallel data collection", {
                    durationMs: Math.round(parallelMs),
                    ...timings
                });
            }
            const mcpMetaToolOptions = this.mcpMetaToolEnabled ? buildMcpMetaToolOptions(mcp, {
                alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
                slimDescriptors: this.mcpMetaToolSlimDescriptors,
                inputSchemaJson: this.mcpInputSchemaJson
            }) : void 0;
            const config2 = this.attributionConfigProvider?.get();
            const attributeCommitsToAgent = attributionDisabledByAdmin ? false : config2?.attribution?.attributeCommitsToAgent ?? true;
            const attributePRsToAgent = attributionDisabledByAdmin ? false : config2?.attribution?.attributePRsToAgent ?? true;
            const requestContext = new RequestContext({
                rules: globalData.rules,
                env,
                gitRepos,
                gitRepoInfoComplete,
                repositoryInfo: globalData.codebaseReference ? [
                    {
                        relativeWorkspacePath: globalData.codebaseReference.relativeWorkspacePath,
                        repoName: globalData.codebaseReference.repoName,
                        repoOwner: globalData.codebaseReference.repoOwner,
                        isTracked: globalData.codebaseReference.isTracked,
                        isLocal: globalData.codebaseReference.isLocal,
                        orthogonalTransformSeed: globalData.codebaseReference.orthogonalTransformSeed,
                        pathEncryptionKey: globalData.codebaseReference.pathEncryptionKey
                    }
                ] : [],
                ...buildLegacyMcpRequestContextFields(mcp, {
                    internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                }),
                conversationNotesListing,
                sharedNotesListing,
                customSubagents: globalData.customSubagents,
                mcpFileSystemOptions,
                mcpMetaToolOptions,
                supportsMcpAuth: true,
                commitAttributionMessage: attributeCommitsToAgent ? "enabled" : void 0,
                prAttributionMessage: attributePRsToAgent ? "enabled" : void 0,
                agentSkills,
                adminCommandDenylist: adminCommandDenylist?.rules ?? []
            });
            if (globalData.cloudRule !== null && globalData.cloudRule !== void 0) {
                requestContext.cloudRule = globalData.cloudRule;
            }
            return requestContext;
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources41(env_6);
        }
    }
    async execute(ctx, args) {
        const env_8 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource41(env_8, createSpan(ctx.withName("LocalRequestContextExecutor.execute")), false);
            span.span.setAttribute("enableCaching", this.fileWatcher !== void 0);
            span.span.setAttribute("hasGlobalCache", !!this.globalCache);
            try {
                const requestContext = await this.computeCachedRequestContext(span.ctx, args);
                return new RequestContextResult({
                    result: {
                        case: "success",
                        value: new RequestContextSuccess({
                            requestContext
                        })
                    }
                });
            } catch (error3) {
                span.span.recordException(error3);
                return new RequestContextResult({
                    result: {
                        case: "error",
                        value: new RequestContextError({
                            error: error3 instanceof Error ? error3.message : String(error3)
                        })
                    }
                });
            }
        } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        } finally{
            __disposeResources41(env_8);
        }
    }
};

}
