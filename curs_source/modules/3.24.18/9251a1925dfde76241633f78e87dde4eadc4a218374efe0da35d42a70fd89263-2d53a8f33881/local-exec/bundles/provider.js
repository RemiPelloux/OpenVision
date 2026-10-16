import { agentStoreConflictExecutorResource } from "../../agent-exec/dist/agent-store-conflict.js";
import { backgroundShellExecutorResource, writeBackgroundShellInputExecutorResource } from "../../agent-exec/dist/background-shell.js";
import { canvasDiagnosticsExecutorResource } from "../../agent-exec/dist/canvas-diagnostics.js";
import { computerUseExecutorResource } from "../../agent-exec/dist/computer-use.js";
import { deleteExecutorResource } from "../../agent-exec/dist/delete.js";
import { diagnosticsExecutorResource } from "../../agent-exec/dist/diagnostics.js";
import { fetchExecutorResource } from "../../agent-exec/dist/fetch.js";
import { gitDiffExecutorResource } from "../../agent-exec/dist/git-diff.js";
import { grepExecutorResource } from "../../agent-exec/dist/grep.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { lsExecutorResource } from "../../agent-exec/dist/ls.js";
import { mcpAllowlistPrecheckExecutorResource } from "../../agent-exec/dist/mcp-allowlist-precheck.js";
import { listMcpResourcesExecutorResource, mcpExecutorResource, mcpStateExecutorResource, readMcpResourceExecutorResource } from "../../agent-exec/dist/mcp.js";
import { miniSweAgentBashExecutorResource } from "../../agent-exec/dist/mini-swe-agent-bash.js";
import { piBashExecutorResource } from "../../agent-exec/dist/pi-bash.js";
import { piEditExecutorResource } from "../../agent-exec/dist/pi-edit.js";
import { piFindExecutorResource } from "../../agent-exec/dist/pi-find.js";
import { piGrepExecutorResource } from "../../agent-exec/dist/pi-grep.js";
import { piLsExecutorResource } from "../../agent-exec/dist/pi-ls.js";
import { piReadExecutorResource } from "../../agent-exec/dist/pi-read.js";
import { piWriteExecutorResource } from "../../agent-exec/dist/pi-write.js";
import { DigestOnlyReadExecutor, readExecutorResource, redactedReadExecutorResource } from "../../agent-exec/dist/read.js";
import { recordScreenExecutorResource } from "../../agent-exec/dist/record-screen.js";
import { requestContextExecutorResource } from "../../agent-exec/dist/request-context.js";
import { RegistryResourceAccessor } from "../../agent-exec/dist/resource-provider.js";
import { shellAllowlistPrecheckExecutorResource } from "../../agent-exec/dist/shell-allowlist-precheck.js";
import { forceBackgroundShellExecutorResource } from "../../agent-exec/dist/shell-control.js";
import { shellStreamExecutorResource } from "../../agent-exec/dist/shell-stream.js";
import { shellExecutorResource } from "../../agent-exec/dist/shell.js";
import { SymbolicPathExpandingMcpExecutor } from "../../agent-exec/dist/symbolic-path-args.js";
import { webFetchAllowlistPrecheckExecutorResource } from "../../agent-exec/dist/web-fetch-allowlist-precheck.js";
import { writeExecutorResource } from "../../agent-exec/dist/write.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { isSameDirectoryPathAsHome } from "../../dist_exports.js";
import { createDefaultTerminalExecutor } from "../../dist_exports2.js";
import { LocalAgentStoreConflictExecutor, init_agent_store_conflict2 } from "./agent-store-conflict.js";
import { LocalShellWriteStdinExecutor, init_background_shell_write_stdin } from "./background-shell-write-stdin.js";
import { LocalBackgroundShellExecutor, init_background_shell2 } from "./background-shell.js";
import { init_caching_wrapper } from "./caching-wrapper.js";
import { LocalCanvasDiagnosticsExecutor, init_canvas_diagnostics2 } from "./canvas-diagnostics.js";
import { LocalDeleteExecutor, init_delete2 } from "./delete.js";
import { LocalDiagnosticsExecutor, init_diagnostics3 } from "./diagnostics.js";
import { LocalFetchExecutor, init_fetch2 } from "./fetch.js";
import { LocalGitDiffExecutor, init_git_diff3 } from "./git-diff.js";
import { LocalGrepExecutor, init_grep2 } from "./grep.js";
import { LocalLsExecutor, init_ls2 } from "./ls.js";
import { LocalMcpAllowlistPrecheckExecutor, init_mcp_allowlist_precheck2 } from "./mcp-allowlist-precheck.js";
import { LocalListMcpResourcesExecutor, LocalMcpToolExecutor, LocalReadMcpResourceExecutor, init_mcp5 } from "./mcp.js";
import { LocalMiniSweAgentBashExecutor, init_mini_swe_agent_bash2 } from "./miniswe/mini-swe-agent-bash.js";
import { LocalPiBashExecutor } from "./pi/bash.js";
import { LocalPiEditExecutor } from "./pi/edit.js";
import { LocalPiFindExecutor } from "./pi/find.js";
import { LocalPiGrepExecutor } from "./pi/grep.js";
import { init_pi } from "./pi/index.js";
import { LocalPiLsExecutor } from "./pi/ls.js";
import { LocalPiReadExecutor } from "./pi/read.js";
import { LocalPiWriteExecutor } from "./pi/write.js";
import { LocalReadExecutor, init_read3 } from "./read.js";
import { LocalRecordScreenExecutor, init_record_screen2 } from "./record-screen.js";
import { LocalMcpStateExecutor, LocalRequestContextExecutor, SimpleMcpStateAccessor, init_request_context2 } from "./request-context.js";
import { init_sandbox_source_loader } from "./sandbox-source-loader.js";
import { LocalShellAllowlistPrecheckExecutor, init_shell_allowlist_precheck2 } from "./shell-allowlist-precheck.js";
import { LocalForceBackgroundShellExecutor, init_shell_control2 } from "./shell-control.js";
import { AskpassShellCoreExecutor, BaseShellCoreExecutor, ManagedShellCoreExecutor, init_shell_core } from "./shell-core.js";
import { LocalShellStreamExecutor, init_shell_stream2 } from "./shell-stream.js";
import { LocalShellExecutor, init_shell3 } from "./shell.js";
import { LocalWebFetchAllowlistPrecheckExecutor, init_web_fetch_allowlist_precheck2 } from "./web-fetch-allowlist-precheck.js";
import { LocalWriteExecutor, init_write3 } from "./write.js";
import { buildLegacyMcpRequestContextFields, buildMcpMetaToolOptions, createCachedExecutor, createCachedStreamExecutor, loadPerRepoSandboxPolicySync } from "../../mcp_sandbox_policy_exports.js";
import { init_dist13 } from "../../shell-exec/dist/index.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_os21, import_node_path66, logger33, LocalResourceProvider;
export { LocalResourceProvider, import_node_os21, import_node_path66, logger33 };
var __wakaru_init_provider2_initialized = false;
export function init_provider2() {
if (__wakaru_init_provider2_initialized) return;
__wakaru_init_provider2_initialized = true;
"use strict";
import_node_os21 = require("node:os");
import_node_path66 = require("node:path");
init_dist8();
init_dist();
init_dist13();
init_dist3();
init_agent_store_conflict2();
init_background_shell2();
init_background_shell_write_stdin();
init_caching_wrapper();
init_canvas_diagnostics2();
init_delete2();
init_diagnostics3();
init_fetch2();
init_git_diff3();
init_grep2();
init_ls2();
init_mcp5();
init_mcp_allowlist_precheck2();
init_mini_swe_agent_bash2();
init_pi();
init_read3();
init_record_screen2();
init_request_context2();
init_sandbox_source_loader();
init_shell3();
init_shell_allowlist_precheck2();
init_shell_control2();
init_shell_core();
init_shell_stream2();
init_web_fetch_allowlist_precheck2();
init_write3();
logger33 = createLogger("local-exec:provider");
LocalResourceProvider = class extends RegistryResourceAccessor {
    getMcpExecutionPolicyDeps() {
        return {
            permissionsService: this.permissionsService,
            pendingDecisionProvider: this.pendingDecisionStore
        };
    }
    constructor(options2){
        super();
        this.pendingDecisionStore = options2.pendingDecisionStore;
        this.fileChangeTracker = options2.fileChangeTracker;
        this.gitExecutor = options2.gitExecutor;
        this.ignoreService = options2.ignoreService;
        this.grepProvider = options2.grepProvider;
        this.permissionsService = options2.permissionsService;
        this.workspacePaths = options2.workspacePaths;
        this.worktreeMainPath = options2.worktreeMainPath;
        this.diagnosticsProvider = options2.diagnosticsProvider;
        this.mcpLease = options2.mcpLease;
        this.mcpStateAccessor = options2.mcpStateAccessor;
        this.cursorRulesService = options2.cursorRulesService;
        this.cloudRulesService = options2.cloudRulesService;
        this.subagentsService = options2.subagentsService;
        this.repositoryProvider = options2.repositoryProvider;
        this.projectDir = options2.projectDir;
        this.shellManager = options2.shellManager;
        this._sandboxPolicyResolver = options2._sandboxPolicyResolver;
        this._defaultSandboxPolicy = options2._defaultSandboxPolicy ?? {
            type: "insecure_none"
        };
        const firstWorkspacePath = options2.workspacePaths[0];
        const perRepoPolicy = firstWorkspacePath ? loadPerRepoSandboxPolicySync(firstWorkspacePath) : void 0;
        const inputSources = options2._defaultSandboxPolicySources;
        if (perRepoPolicy || inputSources) {
            this._defaultSandboxPolicySources = {
                perUser: inputSources?.perUser,
                perRepo: perRepoPolicy ?? inputSources?.perRepo,
                teamAdmin: inputSources?.teamAdmin
            };
        } else {
            this._defaultSandboxPolicySources = void 0;
        }
        this.mcpFileOutputThresholdBytes = options2.mcpFileOutputThresholdBytes;
        this.backgroundShellFactory = options2.backgroundShellFactory;
        this.backgroundWorkRegistry = options2.backgroundWorkRegistry;
        this.wakeupOwnerConversationId = options2.wakeupOwnerConversationId;
        this.mcpElicitationFactory = options2.mcpElicitationFactory;
        this.createFileWatcher = options2.createFileWatcher;
        this.sharedRequestContextExecutor = options2.sharedRequestContextExecutor;
        this.terminalExecutor = options2.terminalExecutor;
        this.mcpMetaToolEnabled = options2.mcpMetaToolEnabled ?? false;
        this.mcpMetaToolSlimDescriptors = options2.mcpMetaToolSlimDescriptors ?? false;
        this.mcpInputSchemaJson = options2.mcpInputSchemaJson ?? false;
        this.alwaysExposeVirtualMcpAuthTool = options2.alwaysExposeVirtualMcpAuthTool ?? false;
        this.enableRecordScreen = options2.enableRecordScreen ?? false;
        this.recordScreenArtifactsDir = options2.recordScreenArtifactsDir;
        this.recordScreenDisplay = options2.recordScreenDisplay;
        this.disableRecordScreenRendering = options2.disableRecordScreenRendering ?? false;
        this.userTerminalHint = options2.userTerminalHint;
        this.attributionConfigProvider = options2.attributionConfigProvider;
        this.isAttributionDisabledByAdmin = options2.isAttributionDisabledByAdmin;
        this.getAgentSkills = options2.getAgentSkills;
        this.getSmartModeClassifierAutoModeEnabled = options2.getSmartModeClassifierAutoModeEnabled;
        this.getAdminCommandDenylist = options2.getAdminCommandDenylist;
        this.devForceNextSmartModeClassifierBlockToken = options2.devForceNextSmartModeClassifierBlockToken;
        this.getMockPromptTime = options2.getMockPromptTime;
        this.additionalRules = options2.additionalRules ?? [];
        this.askpassConfig = options2.askpassConfig;
        this.rebuildRequestContextOnRulesChange = options2.rebuildRequestContextOnRulesChange === true;
        const ex = this.terminalExecutor ?? createDefaultTerminalExecutor({
            env: {
                CURSOR_AGENT: "1"
            },
            userTerminalHint: this.userTerminalHint
        });
        let singleWorkspacePath;
        if (this.workspacePaths.length > 1) {
            const parents = this.workspacePaths.map((p2)=>(0, import_node_path66.dirname)(p2));
            const allSameParent = parents.every((p2)=>p2 === parents[0]);
            singleWorkspacePath = allSameParent ? parents[0] : void 0;
        } else {
            singleWorkspacePath = firstWorkspacePath;
        }
        const baseShellCoreExecutor = new BaseShellCoreExecutor(ex, firstWorkspacePath ?? (0, import_node_os21.homedir)(), this.projectDir, options2.shellOutputBackpressureOptions, options2.shellExtraEnvProvider, options2.powershellUtf8Console);
        let shellCoreExecutor = baseShellCoreExecutor;
        if (options2.shellCoreWrapper) {
            shellCoreExecutor = options2.shellCoreWrapper(shellCoreExecutor);
        }
        if (this.askpassConfig) {
            shellCoreExecutor = new AskpassShellCoreExecutor(shellCoreExecutor, this.askpassConfig);
        }
        if (this.shellManager) {
            shellCoreExecutor = new ManagedShellCoreExecutor(shellCoreExecutor, this.shellManager);
        }
        const shellExecutor = options2.overrideShellExecutor ?? (options2.suppressDefaultShellExecutor === true ? void 0 : new LocalShellExecutor(this.permissionsService, shellCoreExecutor, this.ignoreService, this.pendingDecisionStore));
        if (shellExecutor !== void 0) {
            this.register(shellExecutorResource, createCachedExecutor(shellExecutor));
        }
        this.register(miniSweAgentBashExecutorResource, createCachedExecutor(new LocalMiniSweAgentBashExecutor(this.permissionsService, this.ignoreService, singleWorkspacePath ?? firstWorkspacePath ?? this.projectDir)));
        const writeExecutor = options2.overrideWriteExecutor ?? new LocalWriteExecutor(this.fileChangeTracker, this.permissionsService, this.pendingDecisionStore, {
            workspacePaths: this.workspacePaths,
            workspacePath: singleWorkspacePath,
            worktreeMainPath: this.worktreeMainPath,
            onWriteForAiTracking: options2.onWriteForAiTracking,
            writeFileMutationGuard: options2.writeFileMutationGuard
        });
        this.register(writeExecutorResource, createCachedExecutor(writeExecutor));
        this.register(deleteExecutorResource, createCachedExecutor(new LocalDeleteExecutor(this.pendingDecisionStore, this.fileChangeTracker, this.permissionsService, singleWorkspacePath, options2.onDeleteForAiTracking)));
        this.register(fetchExecutorResource, createCachedExecutor(new LocalFetchExecutor()));
        this.register(gitDiffExecutorResource, new LocalGitDiffExecutor());
        const mcpStateAccessor = this.mcpStateAccessor ?? new SimpleMcpStateAccessor(this.mcpLease);
        const grepExecutor = options2.overrideGrepExecutor ?? new LocalGrepExecutor(this.ignoreService, this.grepProvider, this.workspacePaths, {
            mcpStateAccessor,
            permissionsService: this.permissionsService
        });
        this.register(grepExecutorResource, createCachedExecutor(grepExecutor));
        const readExecutor = options2.overrideReadExecutor ?? new LocalReadExecutor(this.permissionsService, singleWorkspacePath, {
            mcpStateAccessor,
            useStreamingRead: options2.useStreamingRead,
            pendingDecisionProvider: this.pendingDecisionStore
        });
        const sharedReadExecutor = new DigestOnlyReadExecutor(createCachedExecutor(readExecutor));
        this.register(readExecutorResource, sharedReadExecutor);
        if (options2.registerRedactedReadExecutor) {
            this.register(redactedReadExecutorResource, sharedReadExecutor);
        }
        const lsExecutor = options2.overrideLsExecutor ?? new LocalLsExecutor(this.permissionsService, this.ignoreService, singleWorkspacePath);
        this.register(lsExecutorResource, createCachedExecutor(lsExecutor));
        this.register(piReadExecutorResource, createCachedExecutor(new LocalPiReadExecutor(this.permissionsService, singleWorkspacePath)));
        if (shellExecutor !== void 0) {
            this.register(piBashExecutorResource, createCachedExecutor(new LocalPiBashExecutor(shellExecutor)));
        }
        this.register(piEditExecutorResource, createCachedExecutor(new LocalPiEditExecutor(this.permissionsService, writeExecutor, singleWorkspacePath)));
        this.register(piWriteExecutorResource, createCachedExecutor(new LocalPiWriteExecutor(writeExecutor, singleWorkspacePath)));
        this.register(piGrepExecutorResource, createCachedExecutor(new LocalPiGrepExecutor(this.permissionsService, singleWorkspacePath)));
        this.register(piFindExecutorResource, createCachedExecutor(new LocalPiFindExecutor(this.permissionsService, singleWorkspacePath)));
        this.register(piLsExecutorResource, createCachedExecutor(new LocalPiLsExecutor(this.permissionsService, singleWorkspacePath)));
        this.register(diagnosticsExecutorResource, createCachedExecutor(new LocalDiagnosticsExecutor(singleWorkspacePath, this.diagnosticsProvider)));
        if (options2.getCanvasDiagnostics) {
            this.register(canvasDiagnosticsExecutorResource, createCachedExecutor(new LocalCanvasDiagnosticsExecutor(options2.getCanvasDiagnostics, options2.beginCanvasSave)));
        }
        this.register(mcpExecutorResource, createCachedExecutor(new SymbolicPathExpandingMcpExecutor(new LocalMcpToolExecutor(this.mcpLease, this.permissionsService, this.pendingDecisionStore, this.projectDir, this.mcpFileOutputThresholdBytes, this.mcpElicitationFactory, options2.ensureMcpServersLoaded), ()=>this.get(readExecutorResource))));
        this.register(listMcpResourcesExecutorResource, createCachedExecutor(new LocalListMcpResourcesExecutor(this.mcpLease, options2.ensureMcpServersLoaded)));
        this.register(readMcpResourceExecutorResource, createCachedExecutor(new LocalReadMcpResourceExecutor(this.mcpLease, singleWorkspacePath || this.projectDir, this.permissionsService, this.workspacePaths, this.pendingDecisionStore, options2.ensureMcpServersLoaded)));
        this.register(mcpStateExecutorResource, createCachedExecutor(new LocalMcpStateExecutor(mcpStateAccessor, options2.ensureMcpServersLoaded, {
            filterToRequestedServers: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors
        })));
        const requestContextExecutor = this.sharedRequestContextExecutor ?? this.createOwnedRequestContextExecutor(mcpStateAccessor, firstWorkspacePath, options2);
        const cachedRequestContextExecutor = createCachedExecutor(requestContextExecutor);
        this.register(requestContextExecutorResource, {
            execute: async (ctx, args, execOptions)=>{
                const result = await cachedRequestContextExecutor.execute(ctx, args, execOptions);
                if (result.result.case !== "success" || result.result.value.requestContext === void 0) {
                    return result;
                }
                const nextResult = result.clone();
                if (nextResult.result.case !== "success") {
                    return result;
                }
                const requestContext = nextResult.result.value.requestContext;
                if (requestContext === void 0) {
                    return nextResult;
                }
                const mcpState = await mcpStateAccessor.getState(ctx);
                const legacyMcp = buildLegacyMcpRequestContextFields(mcpState, {
                    internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                });
                requestContext.tools = legacyMcp.tools;
                requestContext.mcpInstructions = legacyMcp.mcpInstructions;
                requestContext.mcpMetaToolOptions = this.mcpMetaToolEnabled ? buildMcpMetaToolOptions(mcpState, {
                    alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
                    slimDescriptors: this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                }) : void 0;
                requestContext.mcpFileSystemOptions = await options2.getMcpFileSystemOptions?.(ctx);
                if (requestContext.env !== void 0) {
                    requestContext.env.artifactsFolder = options2.getArtifactsFolder?.(ctx);
                    if (options2.getSandboxEnabled !== void 0) {
                        requestContext.env.sandboxEnabled = options2.getSandboxEnabled();
                    }
                }
                if (options2.getMountedAgentStores !== void 0 && requestContext.env !== void 0) {
                    try {
                        const stores = await options2.getMountedAgentStores(ctx);
                        requestContext.env.mountedAgentStores = stores.map((store)=>store.clone());
                    } catch  {
                        requestContext.env.mountedAgentStores = [];
                        logger33.warn(ctx, "Failed to get mounted agent stores; continuing without prompt inventory");
                    }
                }
                return nextResult;
            }
        });
        this.backgroundShellExecutor = new LocalBackgroundShellExecutor(this.permissionsService, shellCoreExecutor, this.ignoreService, this.projectDir, this.backgroundShellFactory, this.backgroundWorkRegistry, this.wakeupOwnerConversationId);
        this.register(backgroundShellExecutorResource, createCachedExecutor(this.backgroundShellExecutor));
        const shellStreamExecutor = new LocalShellStreamExecutor(this.permissionsService, shellCoreExecutor, this.ignoreService, this.backgroundShellExecutor.getManager());
        this.register(shellStreamExecutorResource, createCachedStreamExecutor(shellStreamExecutor));
        if (options2.agentStoreConflictDrainer !== void 0) {
            this.register(agentStoreConflictExecutorResource, new LocalAgentStoreConflictExecutor(options2.agentStoreConflictDrainer));
        }
        this.register(shellAllowlistPrecheckExecutorResource, new LocalShellAllowlistPrecheckExecutor(this.permissionsService));
        this.register(mcpAllowlistPrecheckExecutorResource, new LocalMcpAllowlistPrecheckExecutor(this.permissionsService));
        this.register(webFetchAllowlistPrecheckExecutorResource, new LocalWebFetchAllowlistPrecheckExecutor(this.permissionsService));
        const forceBackgroundShellExecutor = new LocalForceBackgroundShellExecutor(shellStreamExecutor);
        this.register(forceBackgroundShellExecutorResource, createCachedExecutor(forceBackgroundShellExecutor));
        const shellWriteStdinExecutor = options2.enableWriteBackgroundShellStdin === false ? new LocalShellWriteStdinExecutor(async ()=>{
            throw new Error(options2.writeBackgroundShellStdinDisabledReason ?? "write_shell_stdin is disabled for this session");
        }) : new LocalShellWriteStdinExecutor((shellId, data)=>this.backgroundShellExecutor.writeStdin(shellId, data));
        this.register(writeBackgroundShellInputExecutorResource, createCachedExecutor(shellWriteStdinExecutor));
        if (options2.computerUseExecutor) {
            this.computerUseExecutor = options2.computerUseExecutor;
            this.register(computerUseExecutorResource, createCachedExecutor(this.computerUseExecutor));
        }
        if (this.enableRecordScreen) {
            if (!this.recordScreenArtifactsDir || !this.recordScreenDisplay) {
                throw new Error("recordScreenArtifactsDir and recordScreenDisplay are required when enableRecordScreen is true");
            }
            this.recordScreenExecutor = new LocalRecordScreenExecutor({
                artifactsDir: this.recordScreenArtifactsDir,
                display: this.recordScreenDisplay,
                disablePolishedRendering: this.disableRecordScreenRendering,
                polishedRenderer: options2.polishedRecordingRenderer
            });
            this.register(recordScreenExecutorResource, createCachedExecutor(this.recordScreenExecutor));
        }
    }
    createOwnedRequestContextExecutor(mcpStateAccessor, firstWorkspacePath, options2) {
        const localExecutor = new LocalRequestContextExecutor(this.cursorRulesService, this.cloudRulesService, this.subagentsService, this.repositoryProvider, this.grepProvider, mcpStateAccessor, this.gitExecutor, this.workspacePaths, {
            projectDir: this.projectDir,
            isWorkingDirHomeDir: isSameDirectoryPathAsHome(firstWorkspacePath, (0, import_node_os21.homedir)()),
            createFileWatcher: this.createFileWatcher,
            getSandboxEnabled: options2.getSandboxEnabled,
            getSandboxSupported: options2.getSandboxSupported,
            getNetworkAllowlistInfo: options2.getNetworkAllowlistInfo,
            getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled,
            getAdminCommandDenylist: this.getAdminCommandDenylist,
            devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken,
            getMockPromptTime: this.getMockPromptTime,
            userTerminalHint: this.userTerminalHint,
            getMcpFileSystemOptions: options2.getMcpFileSystemOptions,
            mcpMetaToolEnabled: this.mcpMetaToolEnabled,
            mcpMetaToolSlimDescriptors: this.mcpMetaToolSlimDescriptors,
            mcpInputSchemaJson: this.mcpInputSchemaJson,
            alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
            getArtifactsFolder: options2.getArtifactsFolder,
            secretRedactionEnabled: options2.secretRedactionEnabled,
            attributionConfigProvider: this.attributionConfigProvider,
            isAttributionDisabledByAdmin: this.isAttributionDisabledByAdmin,
            getAgentSkills: this.getAgentSkills,
            additionalRules: this.additionalRules,
            getComputerUseSupported: ()=>this.computerUseExecutor !== void 0
        });
        if (this.rebuildRequestContextOnRulesChange) {
            this.ownedRequestContextExecutor = localExecutor;
            this.disposeRulesChangeListener = this.cursorRulesService.onDidChangeRules?.(()=>{
                localExecutor.rebuildAllCaches();
            });
        }
        return localExecutor;
    }
    getRecordScreenExecutor() {
        return this.recordScreenExecutor;
    }
    async dispose() {
        if (this.rebuildRequestContextOnRulesChange) {
            this.disposeRulesChangeListener?.();
            this.disposeRulesChangeListener = void 0;
            this.ownedRequestContextExecutor?.dispose();
            this.ownedRequestContextExecutor = void 0;
        }
        this.backgroundShellExecutor.dispose();
        if (this.recordScreenExecutor) {
            await this.recordScreenExecutor.dispose();
        }
    }
};

}
