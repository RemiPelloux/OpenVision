import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { __toESM } from "../../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { getHardcodedAllowedReadPaths, getSandboxProjectDir, isAllowAllNetworkByPolicy, isHardcodedWriteProtected, isNetworkEnabledByPolicy, loadSandboxPolicyFromFileOrUndefined, mergeNetworkPolicies, mergePathsUnion, networkAllowAllPolicy, networkDisabledPolicy, parseMcpToolAnnotations, resolveSandboxPolicyForWorkspace } from "../../../bidi_connect_exports.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, isForcePromptHookApprovalRequirement, isPathInsideWorkspaceRoot, isTerminalShellInterpreterAllowlistCandidate, matchesDomainPattern, readText, resolveDefaultAllowlistOptionIds, resolvePath, slugifyPath, untildify } from "../../../dist_exports.js";
import { deriveAdminCommandDenylistMatchForms, findMatchingAdminCommandDenylistPattern, resolvePathForIgnoreService, unsafeMintResolvedIgnorePath } from "../../../dist_exports2.js";
import { isMcpToolAllowedByAdminToolPolicy } from "../../../esm_exports8.js";
import { init_common3 } from "../common.js";
import { init_internal_paths } from "../internal-paths.js";
import { OperationType, init_pending_decision_provider } from "../pending-decision-provider.js";
import { init_permissions_path } from "../permissions-path.js";
import { init_admin_command_denylist2 } from "./admin-command-denylist.js";
import { init_ignore_service } from "./ignore-service.js";
import { init_read_control } from "./read-control.js";
import { init_admin_mcp_tool_allowlist } from "../../../mcp-core/dist/admin-mcp-tool-allowlist.js";
import { init_mcp_tool_annotations } from "../../../mcp-core/dist/mcp-tool-annotations.js";
import { applyUserReadBoundaryFloor, areShellRedirectsAllowlistSafeForWorkspace, canonicalReadRoots, classifierCommandMatchForms, classifierCommandToExecutableCommand, commandMatchesBlocklistEntry, deduplicateStrings2, generateAllowlistCandidatesFromCommandText, getCursorWorktreeRoot, hasUnsafeWriteRedirect, ignoreResolutionBlockMessage, isAllowedTmpPath, isCursorProjectsInternalPath, isCursorProjectsPath2, isCursorWorktreesPath, isDebugLogPath, isPolicyStricterOrEqual, isReadOutsideBoundary, isResolutionSafe, makeSandboxedPolicy, normalizeAllowlistCandidates, parseShellEntry, readAllowEntryPatterns, readAllowFolderEntries, resolutionBlockMessage, resolveMcpCallAnnotations, resolvePermissionsPath, resolveReadControlSetting, sandboxPolicyTypeForLogging, structuredPatch } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { init_libesm } from "../../../node_modules/.pnpm/diff@8.0.3/node_modules/diff/libesm/index.js";
import { init_shell_exec_pb } from "../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_dist13 } from "../../../shell-exec/dist/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
import { matchesCommandGlob } from "../../../utils_pb_exports.js";
var import_node_os19, path26, import_node_path61, __addDisposableResource38, __disposeResources38, logger27, mcpAllowlistCheckResult, READ_BOUNDARY_STRICTNESS, ApprovableCommand, ADMIN_READ_BOUNDARY_REASON, USER_READ_BOUNDARY_REASON, CURSOR_SHARED_READ_SUBDIRS, InteractivePermissionsService;
export { ADMIN_READ_BOUNDARY_REASON, ApprovableCommand, CURSOR_SHARED_READ_SUBDIRS, InteractivePermissionsService, READ_BOUNDARY_STRICTNESS, USER_READ_BOUNDARY_REASON, __addDisposableResource38, __disposeResources38, import_node_os19, import_node_path61, logger27, mcpAllowlistCheckResult, path26 };
var __wakaru_init_permissions_service_initialized = false;
export function init_permissions_service() {
if (__wakaru_init_permissions_service_initialized) return;
__wakaru_init_permissions_service_initialized = true;
"use strict";
import_node_os19 = require("node:os");
path26 = __toESM(require("node:path"), 1);
import_node_path61 = require("node:path");
init_dist7();
init_dist8();
init_dist();
init_admin_mcp_tool_allowlist();
init_mcp_tool_annotations();
init_dist4();
init_shell_exec_pb();
init_dist13();
init_dist3();
init_libesm();
init_common3();
init_internal_paths();
init_pending_decision_provider();
init_permissions_path();
init_read_control();
init_admin_command_denylist2();
init_ignore_service();
__addDisposableResource38 = function(env, value, async) {
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
__disposeResources38 = (function(SuppressedError2) {
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
logger27 = createLogger("permissions-service");
mcpAllowlistCheckResult = createCounter("local_exec.permissions.mcp_allowlist_check.result", {
    description: "Result of MCP allowlist checks at user and team levels per tool call.",
    labelNames: [
        "allowlist_scope",
        "outcome"
    ]
});
READ_BOUNDARY_STRICTNESS = {
    workspace: 0,
    system: 1
};
ApprovableCommand = class {
    constructor(command, requestedPolicy, preapprovedPolicy, matchForms){
        this.command = command;
        this.requestedPolicy = requestedPolicy;
        const preapproved = preapprovedPolicy !== void 0 && isPolicyStricterOrEqual(requestedPolicy, preapprovedPolicy);
        this.state = preapproved ? "preapproved" : "approvable";
        const fallback3 = [
            command.fullText.trim()
        ].filter(Boolean);
        this.matchForms = matchForms && matchForms.length > 0 ? [
            ...matchForms
        ] : fallback3;
    }
    approveWithPolicy(policy) {
        if ((this.state === "approvable" || this.state === "preapproved") && isPolicyStricterOrEqual(this.requestedPolicy, policy)) {
            this.state = "allowlisted";
        }
    }
    deny() {
        this.state = "denied";
    }
    isRunnable() {
        return this.state === "preapproved" || this.state === "allowlisted";
    }
};
ADMIN_READ_BOUNDARY_REASON = "This reads a file outside your workspace and requires approval under your team's read policy.";
USER_READ_BOUNDARY_REASON = "This reads a file outside your workspace.";
CURSOR_SHARED_READ_SUBDIRS = [
    "skills",
    "skills-cursor",
    "rules",
    "plugins"
];
InteractivePermissionsService = class {
    constructor(ignoreService, pendingDecisionStore, permissionsProvider, teamSettingsService, rootDirectory, adminNetworkControlsEnabled = false, options2){
        this.ignoreService = ignoreService;
        this.pendingDecisionStore = pendingDecisionStore;
        this.permissionsProvider = permissionsProvider;
        this.teamSettingsService = teamSettingsService;
        this.adminNetworkControlsEnabled = adminNetworkControlsEnabled;
        this.rootDirectories = Array.isArray(rootDirectory) ? rootDirectory : [
            rootDirectory ?? process.cwd()
        ];
        this.perUserSandboxConfigPath = options2?.perUserSandboxConfigPath ?? (0, import_node_path61.join)((0, import_node_os19.homedir)(), ".cursor", "sandbox.json");
        this.mcpAllowlistLog = options2?.mcpAllowlistLog;
    }
    async shouldBlockRead(filePath, facts = {}) {
        return this.shouldBlockReadInternal(filePath, facts, false);
    }
    async shouldBlockFileRead(filePath, facts = {}) {
        return this.shouldBlockReadInternal(filePath, facts, true);
    }
    async getFileReadBoundaryBlocker() {
        const { perms, setting } = await this.readControlSetting();
        if (setting.boundary !== "workspace" || perms.approvalMode === "unrestricted") {
            return void 0;
        }
        const [resolvedWorkspaceRoots, resolvedAllowFolders] = await Promise.all([
            this.resolveWorkspaceReadRoots(perms.userSandboxDataFolderName),
            this.resolvedReadAllowFolders(setting.allowPaths)
        ]);
        return async (requestedAbsolutePath, realAbsolutePath)=>isReadOutsideBoundary({
                requestedAbsolutePath,
                realAbsolutePath,
                setting,
                resolvedWorkspaceRoots,
                resolvedAllowFolders
            });
    }
    async readControlSetting() {
        const [enabled, sandboxing, perms] = await Promise.all([
            this.teamSettingsService.isReadControlEnabled?.() ?? true,
            this.teamSettingsService.getSandboxingControls(),
            this.getPermissions()
        ]);
        const setting = resolveReadControlSetting({
            enabled,
            admin: {
                boundary: sandboxing.readBoundary,
                allowPaths: sandboxing.readAllowlistPaths ?? [],
                allowUserOverride: sandboxing.allowUserOverrideReadAllowlist
            },
            local: {
                boundary: perms.readBoundary,
                allowPaths: readAllowEntryPatterns(perms.allow)
            }
        });
        return {
            perms,
            setting
        };
    }
    resolvedReadAllowFolders(allowPaths) {
        return canonicalReadRoots([
            ...readAllowFolderEntries(allowPaths),
            ...getHardcodedAllowedReadPaths()
        ]);
    }
    async resolveWorkspaceReadRoots(userSandboxDataFolderName) {
        const cursorDir = (0, import_node_path61.join)((0, import_node_os19.homedir)(), userSandboxDataFolderName !== void 0 && userSandboxDataFolderName.length > 0 ? userSandboxDataFolderName : ".cursor");
        const cursorReadRoots = [
            ...this.rootDirectories.map((root)=>(0, import_node_path61.join)(cursorDir, "projects", slugifyPath(root))),
            ...CURSOR_SHARED_READ_SUBDIRS.map((subdir)=>(0, import_node_path61.join)(cursorDir, subdir))
        ];
        const sandboxScratchRoots = this.rootDirectories.flatMap((root)=>getSandboxProjectDir(root) ?? []);
        return canonicalReadRoots([
            ...this.rootDirectories,
            ...cursorReadRoots,
            ...sandboxScratchRoots
        ]);
    }
    async shouldBlockReadInternal(filePath, { cursorIgnoreChecked = false }, isFileContentRead) {
        const absolutePath = resolvePath(filePath);
        const resolvedForIgnore = await resolvePathForIgnoreService(absolutePath);
        if (resolvedForIgnore === null) {
            return {
                type: "unsafeResolution",
                message: ignoreResolutionBlockMessage("Read", "path", absolutePath)
            };
        }
        if (await this.ignoreService.isRepoBlocked(resolvedForIgnore)) {
            return {
                type: "adminBlock",
                source: "Team repo blocklist"
            };
        }
        if (await this.isPathExplicitlyDenied("Read", absolutePath)) {
            return {
                type: "permissionsConfig"
            };
        }
        const isCursorInternalPath = isCursorProjectsPath2(resolvedForIgnore) || isCursorWorktreesPath(resolvedForIgnore);
        if (!isCursorInternalPath && !cursorIgnoreChecked && await this.ignoreService.isCursorIgnored(resolvedForIgnore)) {
            return {
                type: "cursorIgnore"
            };
        }
        if (isFileContentRead) {
            const boundaryBlock = await this.shouldBlockReadForBoundary({
                realAbsolutePath: resolvedForIgnore,
                requestedAbsolutePath: absolutePath
            });
            if (boundaryBlock) {
                return boundaryBlock;
            }
        }
        return false;
    }
    async shouldBlockReadForBoundary({ realAbsolutePath, requestedAbsolutePath }) {
        const { perms, setting } = await this.readControlSetting();
        if (setting.boundary !== "workspace" || perms.approvalMode === "unrestricted") {
            return false;
        }
        const [resolvedWorkspaceRoots, resolvedAllowFolders] = await Promise.all([
            this.resolveWorkspaceReadRoots(perms.userSandboxDataFolderName),
            this.resolvedReadAllowFolders(setting.allowPaths)
        ]);
        if (!isReadOutsideBoundary({
            requestedAbsolutePath,
            realAbsolutePath,
            setting,
            resolvedWorkspaceRoots,
            resolvedAllowFolders
        })) {
            return false;
        }
        return {
            type: "needsApproval",
            approvalReason: setting.enforcedByAdmin ? ADMIN_READ_BOUNDARY_REASON : USER_READ_BOUNDARY_REASON,
            approvalDetails: {
                type: "fileRead",
                path: realAbsolutePath
            }
        };
    }
    async shouldBlockWrite(parentCtx, filePath, newContents) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource38(env_1, createSpan(parentCtx.withName("InteractivePermissionsService.shouldBlockWrite")), false);
            const ctx = span.ctx;
            const permPath = await resolvePermissionsPath(filePath);
            if (!isResolutionSafe(permPath.resolution)) {
                return {
                    type: "unsafeResolution",
                    message: resolutionBlockMessage(permPath.originalPath, permPath.resolution)
                };
            }
            const realAbsolutePath = permPath.resolvedPath;
            const resolvedForIgnore = unsafeMintResolvedIgnorePath(realAbsolutePath);
            if (await this.ignoreService.isRepoBlocked(resolvedForIgnore)) {
                return {
                    type: "adminBlock",
                    source: "Team repo blocklist"
                };
            }
            if (await this.isPathExplicitlyDenied("Write", realAbsolutePath)) {
                return {
                    type: "permissionsConfig"
                };
            }
            const originalFileName = permPath.originalPath.split(import_node_path61.sep).pop()?.toLowerCase() ?? "";
            const resolvedFileName = realAbsolutePath.split(import_node_path61.sep).pop()?.toLowerCase() ?? "";
            if (originalFileName === ".cursorignore" || resolvedFileName === ".cursorignore") {
                return {
                    type: "permissionsConfig"
                };
            }
            const isCursorProjects = isCursorProjectsPath2(resolvedForIgnore);
            const isCursorWorktrees = isCursorWorktreesPath(resolvedForIgnore);
            const isCursorIgnored = !isCursorProjects && !isCursorWorktrees && await this.ignoreService.isCursorIgnored(resolvedForIgnore);
            if (isCursorProjects || isCursorWorktrees) {} else if (isCursorIgnored) {
                return {
                    type: "cursorIgnore"
                };
            }
            if (await this.isPathExplicitlyAllowed("Write", realAbsolutePath)) {
                return false;
            }
            if (isDebugLogPath(realAbsolutePath)) {
                return false;
            }
            const perms = await this.getPermissions();
            if (perms.userConfiguredPolicy.type === "workspace_readonly") {
                return {
                    type: "permissionsConfig",
                    isReadonly: true
                };
            }
            const isAutoRun = perms.approvalMode === "unrestricted";
            if (isAutoRun) {
                return false;
            }
            for (const rootDir of this.rootDirectories){
                const rootPermPath = await resolvePermissionsPath(rootDir);
                if (!isResolutionSafe(rootPermPath.resolution)) continue;
                const realRootDir = rootPermPath.resolvedPath;
                if (isPathInsideWorkspaceRoot(realAbsolutePath, realRootDir)) {
                    const relativePathForCheck = (0, import_node_path61.relative)(realRootDir, realAbsolutePath);
                    const pathComponentsForEarlyCheck = relativePathForCheck.split(import_node_path61.sep).map((c)=>process.platform === "win32" && c.includes(":") ? c.split(":")[0] : c);
                    const earlyCursorFileBlockReason = await this.checkCursorFileProtection(pathComponentsForEarlyCheck);
                    if (earlyCursorFileBlockReason) {
                        return earlyCursorFileBlockReason;
                    }
                    break;
                }
            }
            const getIsNewFileAndDiffString = async ()=>{
                let isNewFile = false;
                let originalContents = "";
                try {
                    originalContents = await readText(realAbsolutePath);
                    isNewFile = false;
                } catch  {
                    isNewFile = true;
                }
                let diffString = "";
                if (isNewFile) {
                    diffString = newContents;
                } else {
                    const ensureNL = (s3)=>s3.endsWith("\n") ? s3 : `${s3}
`;
                    const { hunks } = structuredPatch("a", "b", ensureNL(originalContents), ensureNL(newContents), "", "", {
                        context: 2
                    });
                    diffString = hunks.map((h)=>h.lines.map((line)=>line.length > 0 ? `${line[0]} ${line.slice(1)}` : line).join("\n")).join("\n...\n");
                }
                return {
                    isNewFile,
                    diffString
                };
            };
            let isInWorkspace = false;
            let matchedRootDirectory;
            for (const rootDir of this.rootDirectories){
                const rootPermPath = await resolvePermissionsPath(rootDir);
                if (!isResolutionSafe(rootPermPath.resolution)) continue;
                const realRootDirectory = rootPermPath.resolvedPath;
                if (isPathInsideWorkspaceRoot(realAbsolutePath, realRootDirectory)) {
                    isInWorkspace = true;
                    matchedRootDirectory = realRootDirectory;
                    break;
                }
            }
            const cursorWorktreeRoot = !isInWorkspace ? getCursorWorktreeRoot(realAbsolutePath) : void 0;
            if (!isInWorkspace && cursorWorktreeRoot === void 0) {
                if (isAllowedTmpPath(realAbsolutePath)) {
                    return false;
                }
                if (isCursorProjectsInternalPath(realAbsolutePath, [
                    "assets",
                    "agent-notes",
                    "agent-tools",
                    "swarm-agents"
                ])) {
                    return false;
                }
                const userCursorDir = `${(0, import_node_os19.homedir)()}${import_node_path61.sep}.cursor${import_node_path61.sep}`;
                if (realAbsolutePath.startsWith(userCursorDir)) {
                    const cursorFileName = realAbsolutePath.split(import_node_path61.sep).pop()?.toLowerCase() ?? "";
                    const hasAllowedExtension = cursorFileName.endsWith(".md") || cursorFileName.endsWith(".mdc") || cursorFileName === ".cursorrules";
                    if (hasAllowedExtension) {
                        return false;
                    }
                }
                const { isNewFile, diffString } = await getIsNewFileAndDiffString();
                return {
                    type: "needsApproval",
                    approvalReason: "Out of workspace",
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile,
                        diffString,
                        blockReason: "outOfWorkspace"
                    }
                };
            }
            const pathRootForProtection = matchedRootDirectory ?? cursorWorktreeRoot;
            const pathForProtection = realAbsolutePath;
            const relativePath2 = (0, import_node_path61.relative)(pathRootForProtection, pathForProtection);
            let pathComponents = relativePath2.split(import_node_path61.sep);
            pathComponents = pathComponents.map((c)=>process.platform === "win32" && c.includes(":") ? c.split(":")[0] : c);
            if (process.platform === "win32" && pathComponents.some((segment)=>segment.includes("~"))) {
                const { isNewFile, diffString } = await getIsNewFileAndDiffString();
                return {
                    type: "needsApproval",
                    approvalReason: `Protected config file: ${pathComponents[pathComponents.length - 1] ?? ""}`,
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile,
                        diffString,
                        blockReason: "protectedConfig"
                    }
                };
            }
            if (await isHardcodedWriteProtected(realAbsolutePath, pathRootForProtection)) {
                const lastPathSegment = pathComponents[pathComponents.length - 1]?.toLowerCase() ?? "";
                const { isNewFile, diffString } = await getIsNewFileAndDiffString();
                return {
                    type: "needsApproval",
                    approvalReason: `Protected config file: ${lastPathSegment}`,
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile,
                        diffString,
                        blockReason: "protectedConfig"
                    }
                };
            }
            const cursorFileBlockReason = await this.checkCursorFileProtection(pathComponents);
            if (cursorFileBlockReason) {
                return cursorFileBlockReason;
            }
            if (perms.promptWorkspaceWrites === true) {
                const { isNewFile, diffString } = await getIsNewFileAndDiffString();
                return {
                    type: "needsApproval",
                    approvalReason: "Workspace write",
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile,
                        diffString,
                        blockReason: "workspaceWrite"
                    }
                };
            }
            return false;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources38(env_1);
        }
    }
    async shouldEnforceShellInvariantBlocks(ctx, options2, requestedPolicy) {
        const denylistBlock = await this.getAdminCommandDenylistBlock(ctx, {
            command: options2.command,
            parsingResult: options2.parsingResult,
            toolCallId: options2.toolCallId
        });
        if (denylistBlock !== void 0) {
            return {
                kind: "block",
                reason: denylistBlock
            };
        }
        const resolvedWorkDir = await resolvePathForIgnoreService(options2.workingDirectory);
        if (resolvedWorkDir === null) {
            if (options2.skipUnsafeWorkingDirectoryBlock !== true) {
                return {
                    kind: "block",
                    reason: {
                        type: "unsafeResolution",
                        message: ignoreResolutionBlockMessage("Command", "working directory", options2.workingDirectory)
                    }
                };
            }
        } else if (await this.ignoreService.isRepoBlocked(resolvedWorkDir)) {
            return {
                kind: "block",
                reason: {
                    type: "adminBlock",
                    source: "Team repo blocklist"
                }
            };
        }
        const perms = await this.getPermissions();
        const userConfiguredPolicy = perms.userConfiguredPolicy;
        const effectiveRequestedPolicy = requestedPolicy ?? userConfiguredPolicy;
        if (userConfiguredPolicy.type === "workspace_readonly" && effectiveRequestedPolicy.type !== "workspace_readonly") {
            return {
                kind: "block",
                reason: {
                    type: "permissionsConfig",
                    isReadonly: true
                }
            };
        }
        return {
            kind: "allow"
        };
    }
    async shouldBlockShellCommand(ctx, command, options2, requestedPolicy) {
        const explicitlyRequestedInsecureNone = requestedPolicy?.type === "insecure_none";
        const invariantBlock = await this.shouldEnforceShellInvariantBlocks(ctx, {
            workingDirectory: options2.workingDirectory,
            command,
            parsingResult: options2.parsingResult,
            toolCallId: options2.toolCallId
        }, requestedPolicy);
        if (invariantBlock.kind === "block") {
            return invariantBlock;
        }
        const perms = await this.getPermissions();
        const approvalMode = perms.approvalMode;
        const isUnrestricted = approvalMode === "unrestricted";
        const userConfiguredPolicy = perms.userConfiguredPolicy;
        const shouldApplyTeamShellAllowlist = !perms.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        logger27.info(ctx, "Shell permissions: evaluating shell command", {
            toolCallId: options2.toolCallId,
            approvalMode,
            userConfiguredPolicyType: sandboxPolicyTypeForLogging(userConfiguredPolicy),
            requestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy),
            effectiveRequestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy ?? userConfiguredPolicy),
            smartAllowlistEnabled: perms.smartAllowlistEnabled === true,
            hasSmartModeApprovalReason: options2.smartModeApprovalReason !== void 0,
            hasSmartModeApprovalRequestId: options2.smartModeApprovalRequestId !== void 0,
            hookForcesPrompt: isForcePromptHookApprovalRequirement(options2.hookApprovalRequirement),
            classifierClassificationFailed: options2.classifierResult?.classificationFailed === true,
            classifierCommandCount: options2.classifierResult?.commands.length ?? 0,
            parserCommandCount: options2.parsingResult.executableCommands.length,
            parsingFailed: options2.parsingResult.parsingFailed,
            hasRedirects: options2.parsingResult.hasRedirects,
            commandLength: command.length
        });
        if (await this.shouldPromptForEmptyPlainShellAllowlist(command, perms)) {
            logger27.info(ctx, "Shell permissions: prompting for empty allowlist", {
                toolCallId: options2.toolCallId,
                approvalMode,
                userConfiguredPolicyType: sandboxPolicyTypeForLogging(userConfiguredPolicy),
                requestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy),
                hasSmartModeApprovalReason: options2.smartModeApprovalReason !== void 0,
                hasSmartModeApprovalRequestId: options2.smartModeApprovalRequestId !== void 0
            });
            return await this.requestApprovalForEmptyShellAllowlist(command, options2, requestedPolicy ?? userConfiguredPolicy);
        }
        const executableCommands = options2.parsingResult.executableCommands;
        const hasRedirects = options2.parsingResult.hasRedirects;
        const allRedirectsAreAllowlistSafe = options2.parsingResult.allRedirectsAreDevNull === true;
        const parsingFailed = options2.parsingResult.parsingFailed;
        const classifierResult = options2.classifierResult;
        const smartModeApprovalReason = options2.smartModeApprovalReason;
        const smartModeApprovalRequestId = options2.smartModeApprovalRequestId;
        const usableClassifierResult = classifierResult !== void 0 && !classifierResult.classificationFailed && classifierResult.commands.length > 0 ? classifierResult : void 0;
        const smartAllowlistClassifierCommands = approvalMode === "allowlist" && (perms.smartAllowlistEnabled ?? false) ? usableClassifierResult?.commands : void 0;
        const isSmartAllowlistActive = smartAllowlistClassifierCommands !== void 0;
        const commandsForPermissionChecks = smartAllowlistClassifierCommands ? smartAllowlistClassifierCommands.map(classifierCommandToExecutableCommand) : executableCommands;
        const commandMatchFormsPerCommand = smartAllowlistClassifierCommands !== void 0 ? smartAllowlistClassifierCommands.map(classifierCommandMatchForms) : commandsForPermissionChecks.map((cmd)=>[
                cmd.fullText.trim()
            ].filter(Boolean));
        const commandBlocklistMatchFormsPerCommand = usableClassifierResult !== void 0 ? usableClassifierResult.commands.map(classifierCommandMatchForms) : commandMatchFormsPerCommand;
        if (!requestedPolicy) {
            requestedPolicy = perms.userConfiguredPolicy;
        }
        if (requestedPolicy.type !== "insecure_none" && requestedPolicy.skipStatsigDefaults === void 0 && userConfiguredPolicy.type !== "insecure_none") {
            requestedPolicy = {
                ...requestedPolicy,
                skipStatsigDefaults: userConfiguredPolicy.skipStatsigDefaults ?? true
            };
        }
        if (userConfiguredPolicy.type !== "insecure_none" && isNetworkEnabledByPolicy(userConfiguredPolicy.networkPolicy) && requestedPolicy.type !== "insecure_none" && !isAllowAllNetworkByPolicy(requestedPolicy.networkPolicy)) {
            const userPolicy = userConfiguredPolicy.networkPolicy;
            const modelAllow = requestedPolicy.networkPolicy?.allow;
            if (modelAllow !== void 0 && modelAllow.length > 0 && userPolicy) {
                const mergedAllow = [
                    ...new Set([
                        ...userPolicy.allow ?? [],
                        ...modelAllow
                    ])
                ];
                requestedPolicy = {
                    ...requestedPolicy,
                    networkPolicy: {
                        ...userPolicy,
                        allow: mergedAllow
                    }
                };
            } else {
                requestedPolicy = {
                    ...requestedPolicy,
                    networkPolicy: userPolicy
                };
            }
        }
        requestedPolicy = applyUserReadBoundaryFloor({
            requestedPolicy,
            userConfiguredPolicy
        });
        if (classifierResult) {
            logger27.info(ctx, "Smart allowlist: classifier result received", {
                classificationFailed: classifierResult.classificationFailed,
                suggestedSandboxMode: classifierResult.suggestedSandboxMode,
                commandCount: classifierResult.commands.length,
                suggestedAllowlistEntryCount: classifierResult.commands.filter((c)=>c.suggestedAllowlistEntry).length
            });
        }
        let smartAllowlistWantsAutoApprove = false;
        const commandBlocklistPromptReasons = [];
        const smartAllowlistPromptReasons = [];
        let smartAllowlistNotInAllowlist = [];
        let commandBlocklistedCommands = [];
        let smartAllowlistSuggestedEntries = [];
        const userCommandBlocklist = normalizeAllowlistCandidates(perms.smartAllowlistDenylist ?? []);
        if (userCommandBlocklist.length > 0) {
            commandBlocklistedCommands = [];
            const commandNames = commandBlocklistMatchFormsPerCommand.map((forms)=>forms[0] ?? "");
            for(let i = 0; i < commandBlocklistMatchFormsPerCommand.length; i++){
                const forms = commandBlocklistMatchFormsPerCommand[i];
                if (!forms || forms.length === 0) continue;
                const isBlocklisted = userCommandBlocklist.some((entry)=>commandMatchesBlocklistEntry(forms, entry));
                if (isBlocklisted) {
                    const commandName = commandNames[i];
                    if (commandName) commandBlocklistedCommands.push(commandName);
                }
            }
            if (commandBlocklistedCommands.length > 0) {
                logger27.info(ctx, "Command blocklist: commands require approval", {
                    count: commandBlocklistedCommands.length
                });
                commandBlocklistPromptReasons.push(`In blocklist: ${commandBlocklistedCommands.join(", ")}`);
            }
        }
        if (isSmartAllowlistActive && classifierResult) {
            const classifiedCommandNames = commandMatchFormsPerCommand.map((forms)=>forms[0] ?? "");
            const userAllowlistEntries = perms.allow.filter((entry)=>this.isShellEntry(entry));
            logger27.info(ctx, "Smart allowlist: checking commands against lists", {
                commandCount: classifiedCommandNames.length,
                allowlistCount: userAllowlistEntries.length,
                commandBlocklistCount: userCommandBlocklist.length
            });
            const commandIsAllowlisted = commandMatchFormsPerCommand.map((forms)=>userAllowlistEntries.some((entry)=>forms.some((form)=>this.matchesShell(entry, form))));
            const allInAllowlist = commandIsAllowlisted.every(Boolean);
            const notAllowlistedClassifierCommands = [];
            for(let i = 0; i < classifierResult.commands.length; i++){
                if (commandIsAllowlisted[i]) continue;
                const command2 = classifierResult.commands[i];
                if (!command2) continue;
                notAllowlistedClassifierCommands.push(command2);
            }
            smartAllowlistNotInAllowlist = normalizeAllowlistCandidates(notAllowlistedClassifierCommands.flatMap((command2)=>generateAllowlistCandidatesFromCommandText(command2)));
            smartAllowlistSuggestedEntries = notAllowlistedClassifierCommands.map((command2)=>command2.suggestedAllowlistEntry).filter((entry)=>typeof entry === "string").filter((entry)=>(smartAllowlistNotInAllowlist.includes(entry)));
            if (smartAllowlistNotInAllowlist.length > 0) {
                const displayCommands = resolveDefaultAllowlistOptionIds(smartAllowlistNotInAllowlist, smartAllowlistSuggestedEntries);
                const notInAllowlistReasonText = displayCommands.length > 0 ? displayCommands.join(", ") : smartAllowlistNotInAllowlist.join(", ");
                smartAllowlistPromptReasons.push(`Not in allowlist: ${notInAllowlistReasonText}`);
            }
            smartAllowlistWantsAutoApprove = allInAllowlist && commandBlocklistedCommands.length === 0;
            if (smartAllowlistWantsAutoApprove) {
                logger27.info(ctx, "Smart allowlist: all commands in allowlist, will check security", {
                    commandCount: classifiedCommandNames.length
                });
            }
        }
        const isAskEveryTimeMode = approvalMode === "ask-every-time";
        const preapprovedPolicy = isAskEveryTimeMode || requestedPolicy.type === "insecure_none" && approvalMode === "allowlist" ? void 0 : userConfiguredPolicy;
        const commands = commandsForPermissionChecks.map((cmd, i)=>new ApprovableCommand(cmd, requestedPolicy, preapprovedPolicy, commandMatchFormsPerCommand[i]));
        if ((commandsForPermissionChecks.length === 0 || parsingFailed && !isSmartAllowlistActive) && !isUnrestricted) {
            logger27.info(ctx, "Shell permissions: prompting after parser miss", {
                toolCallId: options2.toolCallId,
                approvalMode,
                requestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy),
                userConfiguredPolicyType: sandboxPolicyTypeForLogging(userConfiguredPolicy),
                isSmartAllowlistActive,
                parsingFailed,
                parserCommandCount: commandsForPermissionChecks.length,
                hasSmartModeApprovalReason: smartModeApprovalReason !== void 0,
                hasSmartModeApprovalRequestId: smartModeApprovalRequestId !== void 0
            });
            const approval2 = {
                type: OperationType.Shell,
                toolCallId: options2.toolCallId,
                details: {
                    command,
                    workingDirectory: options2.workingDirectory,
                    timeout: options2.timeout,
                    reason: smartModeApprovalReason ?? (parsingFailed ? "Parser failed to parse command (possible bypass)" : "Parser found no commands (possible bypass)"),
                    isSandboxAvailable: false,
                    isSandboxEnabled: false,
                    canAllowlist: false,
                    notAllowedCommands: [],
                    smartModeApprovalReason,
                    smartModeApprovalRequestId
                }
            };
            const sandboxResult2 = await this.pendingDecisionStore.requestApproval(approval2);
            if (!sandboxResult2.approved) {
                return {
                    kind: "block",
                    reason: {
                        type: "userRejected",
                        reason: sandboxResult2.reason
                    }
                };
            } else {
                const mergedPolicy = await this.applyServerAndAdminPolicies(requestedPolicy);
                return {
                    kind: "allow",
                    policy: mergedPolicy
                };
            }
        }
        const hasHardDeny = await this.hasHardDeny(ctx, commands);
        if (hasHardDeny) {
            return {
                kind: "block",
                reason: {
                    type: "permissionsConfig",
                    ...userConfiguredPolicy.type === "workspace_readonly" ? {
                        isReadonly: true
                    } : {}
                }
            };
        }
        const { allRedirectsAreWorkspaceFileSafe, redirectsAllowlistSafe } = await this.computeRedirectAllowlistSafety(options2.parsingResult, options2.workingDirectory, userConfiguredPolicy.type === "insecure_none" || userConfiguredPolicy.readBoundary !== "workspace");
        const autoRunControls = await this.teamSettingsService.getAutoRunControls();
        const unsandboxedPolicy = {
            type: "insecure_none"
        };
        for (const cmd of commands){
            const allowed = await this.cmdIsAllowedByAllowlist(cmd, {
                redirectsAllowlistSafe,
                autoRunControls,
                applyTeamAllowlist: shouldApplyTeamShellAllowlist
            });
            if (allowed) {
                cmd.approveWithPolicy(unsandboxedPolicy);
            }
        }
        for (const cmd of commands){
            if (autoRunControls && this.isInTeamBlocklist(autoRunControls, cmd)) {
                cmd.deny();
            }
        }
        const deleteProtectionEnabled = await this.teamSettingsService.getDeleteFileProtection();
        if (deleteProtectionEnabled) {
            for (const cmd of commands){
                if (cmd.command.name === "rm") {
                    cmd.deny();
                }
            }
        }
        const approvalDecisionFacts = this.buildShellApprovalDecisionFacts({
            commands,
            autoRunControls,
            shouldApplyTeamShellAllowlist,
            deleteProtectionEnabled,
            softDenylistedCommands: commandBlocklistedCommands
        });
        if (userConfiguredPolicy.type === "workspace_readonly" && requestedPolicy.type !== "workspace_readonly") {
            logger27.info(ctx, "Shell permissions: blocked by readonly mode");
            return {
                kind: "block",
                reason: {
                    type: "permissionsConfig",
                    isReadonly: true
                }
            };
        }
        const hookForcesPrompt = isForcePromptHookApprovalRequirement(options2.hookApprovalRequirement);
        const hookPromptReason = options2.hookApprovalRequirement?.reason;
        let autoApprovalPolicy = hookForcesPrompt ? void 0 : this.getShellAutoApprovalPolicy({
            approvalMode,
            isUnrestricted,
            requestedPolicy,
            facts: approvalDecisionFacts,
            preserveRequestedPolicyForAllowlistedCommands: isSmartAllowlistActive
        });
        const allowlistEscalatedToInsecureNone = autoApprovalPolicy !== void 0 && approvalDecisionFacts.allCommandsAllowlisted && autoApprovalPolicy.type === "insecure_none" && "allowlistEscalated" in autoApprovalPolicy && autoApprovalPolicy.allowlistEscalated === true;
        if (autoApprovalPolicy?.type === "insecure_none") {
            const { readBoundary: adminReadBoundary } = await this.getAdminReadSandboxing();
            if (adminReadBoundary === "workspace") {
                if (explicitlyRequestedInsecureNone) {
                    autoApprovalPolicy = void 0;
                } else if (requestedPolicy.type !== "insecure_none") {
                    autoApprovalPolicy = requestedPolicy;
                }
            }
        }
        const smartModeApprovalBypassedByAllowlist = autoApprovalPolicy !== void 0 && allowlistEscalatedToInsecureNone;
        if (autoApprovalPolicy && (isUnrestricted || smartModeApprovalReason === void 0 || smartModeApprovalBypassedByAllowlist)) {
            if (isSmartAllowlistActive && approvalDecisionFacts.allCommandsPreapproved && !approvalDecisionFacts.allCommandsAllowlisted) {
                logger27.info(ctx, "Shell permissions: all commands allowed by sandbox policy");
            }
            const mergedPolicy = await this.applyServerAndAdminPolicies(autoApprovalPolicy);
            logger27.info(ctx, "Shell permissions: auto-approved shell command", {
                toolCallId: options2.toolCallId,
                approvalMode,
                requestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy),
                userConfiguredPolicyType: sandboxPolicyTypeForLogging(userConfiguredPolicy),
                autoApprovalPolicyType: sandboxPolicyTypeForLogging(autoApprovalPolicy),
                mergedPolicyType: sandboxPolicyTypeForLogging(mergedPolicy),
                isSmartAllowlistActive,
                smartModeApprovalBypassedByAllowlist,
                allCommandsRunnable: approvalDecisionFacts.allCommandsRunnable,
                allCommandsAllowlisted: approvalDecisionFacts.allCommandsAllowlisted,
                allCommandsPreapproved: approvalDecisionFacts.allCommandsPreapproved,
                hasSmartModeApprovalReason: smartModeApprovalReason !== void 0,
                commandCount: commands.length
            });
            return {
                kind: "allow",
                policy: mergedPolicy
            };
        }
        let canAllowlist = (isSmartAllowlistActive || (!hasRedirects || allRedirectsAreAllowlistSafe || allRedirectsAreWorkspaceFileSafe) && !parsingFailed) && (approvalMode === "allowlist" || approvalMode === "ask-every-time") && approvalDecisionFacts.canAllowlistInPrompt;
        const approvalReasons = [];
        const suppressSecondaryApprovalReasons = smartModeApprovalReason !== void 0;
        const shouldAddTeamAllowlistPromptReason = approvalDecisionFacts.notInTeamAllowlist.length > 0 && (approvalDecisionFacts.hasSecurityDenies || approvalDecisionFacts.hasSoftDenies || !approvalDecisionFacts.allCommandsRunnable);
        if (smartModeApprovalReason !== void 0) {
            approvalReasons.push(smartModeApprovalReason);
        }
        if (hookForcesPrompt) {
            if (!suppressSecondaryApprovalReasons) {
                approvalReasons.push(hookPromptReason ? `Hook requested approval: ${hookPromptReason}` : "Hook requested approval");
            }
            canAllowlist = false;
        }
        if (commandBlocklistPromptReasons.length > 0) {
            if (!suppressSecondaryApprovalReasons) {
                approvalReasons.push(...commandBlocklistPromptReasons);
            }
            canAllowlist = false;
        }
        if (!suppressSecondaryApprovalReasons) {
            if (isSmartAllowlistActive && smartAllowlistPromptReasons.length > 0) {
                approvalReasons.push(...smartAllowlistPromptReasons);
            } else {
                if (approvalDecisionFacts.unapprovedCommands.length > 0) {
                    const allowlistCandidatePatterns = this.generateAllowlistPatterns(approvalDecisionFacts.unapprovedCommands.map((cmd)=>cmd.command));
                    const notInAllowlistReasonCommands = resolveDefaultAllowlistOptionIds(allowlistCandidatePatterns);
                    const notInAllowlistReasonText = notInAllowlistReasonCommands.length > 0 ? notInAllowlistReasonCommands.join(", ") : approvalDecisionFacts.unapprovedCommands.map((cmd)=>cmd.command.fullText).join(", ");
                    approvalReasons.push(`Not in allowlist: ${notInAllowlistReasonText}`);
                }
            }
        }
        if (approvalDecisionFacts.hasSecurityDenies) {
            if (!suppressSecondaryApprovalReasons) {
                if (approvalDecisionFacts.rmDeniedByDeleteProtection.length > 0) {
                    approvalReasons.push("Delete protection is enabled");
                }
                if (approvalDecisionFacts.teamBlocklistedCommands.length > 0) {
                    approvalReasons.push(`In team blocklist: ${approvalDecisionFacts.teamBlocklistedCommands.map((cmd)=>cmd.command.name).join(", ")}`);
                }
            }
            canAllowlist = false;
        }
        if (shouldAddTeamAllowlistPromptReason) {
            const notInTeamAllowlistText = approvalDecisionFacts.notInTeamAllowlist.map((cmd)=>cmd.command.fullText).join(", ");
            logger27.info(ctx, "Shell permissions: commands not in team allowlist", {
                commandCount: approvalDecisionFacts.notInTeamAllowlist.length
            });
            if (!suppressSecondaryApprovalReasons) {
                approvalReasons.push(`Not in team allowlist: ${notInTeamAllowlistText}`);
            }
            canAllowlist = false;
        }
        const reason = approvalReasons.join(" \u2022 ");
        const allowlistCandidates = [];
        if (canAllowlist) {
            const allowlistCandidateCommands = smartModeApprovalReason !== void 0 ? commands.filter((cmd)=>cmd.state !== "allowlisted") : approvalDecisionFacts.unapprovedCommands;
            allowlistCandidates.push(...this.generateAllowlistPatterns(allowlistCandidateCommands.map((cmd)=>cmd.command)));
        }
        const useSmartAllowlistPromptContext = isSmartAllowlistActive && smartAllowlistPromptReasons.length > 0;
        const notAllowedCommands = useSmartAllowlistPromptContext ? smartAllowlistNotInAllowlist : allowlistCandidates;
        const suggestedAllowlistEntries = useSmartAllowlistPromptContext && smartAllowlistSuggestedEntries.length > 0 ? smartAllowlistSuggestedEntries : void 0;
        const isSandboxAvailable = requestedPolicy.type !== "insecure_none" && userConfiguredPolicy.type !== "insecure_none";
        const isSandboxEnabled = requestedPolicy.type !== "insecure_none";
        const approvalReasonTypes = [
            smartModeApprovalReason !== void 0 ? "smart_mode_approval" : void 0,
            hookForcesPrompt ? "hook_forces_prompt" : void 0,
            commandBlocklistPromptReasons.length > 0 ? "command_blocklist" : void 0,
            isSmartAllowlistActive && smartAllowlistPromptReasons.length > 0 ? "smart_allowlist_miss" : void 0,
            approvalDecisionFacts.unapprovedCommands.length > 0 ? "unapproved_commands" : void 0,
            approvalDecisionFacts.hasSecurityDenies ? "security_denies" : void 0,
            shouldAddTeamAllowlistPromptReason ? "team_allowlist_miss" : void 0
        ].filter((reasonType)=>reasonType !== void 0);
        logger27.info(ctx, "Shell permissions: requesting shell approval", {
            toolCallId: options2.toolCallId,
            approvalMode,
            requestedPolicyType: sandboxPolicyTypeForLogging(requestedPolicy),
            userConfiguredPolicyType: sandboxPolicyTypeForLogging(userConfiguredPolicy),
            isSandboxAvailable,
            isSandboxEnabled,
            canAllowlist,
            isSmartAllowlistActive,
            hasSmartModeApprovalReason: smartModeApprovalReason !== void 0,
            hasSmartModeApprovalRequestId: smartModeApprovalRequestId !== void 0,
            hookForcesPrompt,
            approvalReasonTypes,
            commandCount: commands.length,
            unapprovedCommandCount: approvalDecisionFacts.unapprovedCommands.length,
            deniedCommandCount: approvalDecisionFacts.deniedCommands.length,
            notInTeamAllowlistCount: approvalDecisionFacts.notInTeamAllowlist.length,
            notAllowedCommandCount: notAllowedCommands.length,
            suggestedAllowlistEntryCount: suggestedAllowlistEntries?.length ?? 0,
            allCommandsRunnable: approvalDecisionFacts.allCommandsRunnable,
            allCommandsAllowlisted: approvalDecisionFacts.allCommandsAllowlisted,
            allCommandsPreapproved: approvalDecisionFacts.allCommandsPreapproved,
            hasSecurityDenies: approvalDecisionFacts.hasSecurityDenies,
            hasSoftDenies: approvalDecisionFacts.hasSoftDenies
        });
        const approval = {
            type: OperationType.Shell,
            toolCallId: options2.toolCallId,
            details: {
                command,
                workingDirectory: options2.workingDirectory,
                timeout: options2.timeout,
                reason,
                isSandboxAvailable: approvalMode === "allowlist" ? isSandboxAvailable : false,
                isSandboxEnabled: approvalMode === "allowlist" ? isSandboxEnabled : false,
                canAllowlist,
                notAllowedCommands,
                suggestedAllowlistEntries,
                smartModeApprovalReason,
                smartModeApprovalRequestId
            }
        };
        const sandboxResult = await this.pendingDecisionStore.requestApproval(approval);
        if (!sandboxResult.approved) {
            return {
                kind: "block",
                reason: {
                    type: "userRejected",
                    reason: sandboxResult.reason
                }
            };
        } else {
            const policyToUse = approvalMode === "unrestricted" ? {
                type: "insecure_none"
            } : requestedPolicy;
            const mergedPolicy = await this.applyServerAndAdminPolicies(policyToUse);
            return {
                kind: "allow",
                policy: mergedPolicy
            };
        }
    }
    async isShellCommandFullyAllowlisted(parentCtx, _command, options2) {
        const ctx = parentCtx.withName("InteractivePermissionsService.isShellCommandFullyAllowlisted");
        const perms = await this.getPermissions();
        const shouldApplyTeamShellAllowlist = !perms.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        if (perms.approvalMode !== "allowlist") {
            return false;
        }
        if (perms.userConfiguredPolicy.type === "workspace_readonly") {
            return false;
        }
        const { redirectsAllowlistSafe } = await this.computeRedirectAllowlistSafety(options2.parsingResult, options2.workingDirectory, perms.userConfiguredPolicy.type === "insecure_none" || perms.userConfiguredPolicy.readBoundary !== "workspace");
        if (!redirectsAllowlistSafe) {
            return false;
        }
        const classifierResult = options2.classifierResult;
        const usableClassifierResult = classifierResult !== void 0 && !classifierResult.classificationFailed && classifierResult.commands.length > 0 ? classifierResult : void 0;
        const isSmartAllowlistActive = (perms.smartAllowlistEnabled ?? false) && usableClassifierResult !== void 0;
        if (options2.parsingResult.parsingFailed && !isSmartAllowlistActive) {
            return false;
        }
        const executableCommands = options2.parsingResult.executableCommands;
        const commandsForPermissionChecks = isSmartAllowlistActive ? usableClassifierResult.commands.map(classifierCommandToExecutableCommand) : executableCommands;
        if (commandsForPermissionChecks.length === 0) {
            return false;
        }
        const commandMatchFormsPerCommand = isSmartAllowlistActive ? usableClassifierResult.commands.map(classifierCommandMatchForms) : commandsForPermissionChecks.map((cmd)=>[
                cmd.fullText.trim()
            ].filter(Boolean));
        const commandBlocklistMatchFormsPerCommand = usableClassifierResult !== void 0 ? usableClassifierResult.commands.map(classifierCommandMatchForms) : commandMatchFormsPerCommand;
        const placeholderPolicy = {
            type: "insecure_none"
        };
        const commands = commandsForPermissionChecks.map((cmd, i)=>new ApprovableCommand(cmd, placeholderPolicy, void 0, commandMatchFormsPerCommand[i]));
        if (await this.hasHardDeny(ctx, commands)) {
            return false;
        }
        const userCommandBlocklist = normalizeAllowlistCandidates(perms.smartAllowlistDenylist ?? []);
        if (userCommandBlocklist.length > 0) {
            for (const forms of commandBlocklistMatchFormsPerCommand){
                if (!forms || forms.length === 0) continue;
                if (userCommandBlocklist.some((entry)=>commandMatchesBlocklistEntry(forms, entry))) {
                    return false;
                }
            }
        }
        const deleteProtectionEnabled = await this.teamSettingsService.getDeleteFileProtection();
        if (deleteProtectionEnabled && commands.some((cmd)=>cmd.command.name === "rm")) {
            return false;
        }
        const autoRunControls = await this.teamSettingsService.getAutoRunControls();
        if (autoRunControls !== void 0 && commands.some((cmd)=>this.isInTeamBlocklist(autoRunControls, cmd))) {
            return false;
        }
        for (const cmd of commands){
            const allowed = await this.cmdIsAllowedByAllowlist(cmd, {
                redirectsAllowlistSafe,
                autoRunControls,
                applyTeamAllowlist: shouldApplyTeamShellAllowlist
            });
            if (!allowed) {
                return false;
            }
        }
        return true;
    }
    async applyServerAndAdminPolicies(policy) {
        if (policy.type === "insecure_none") return policy;
        const { userSandboxDataFolderName } = await this.getPermissions();
        const userSandboxConfigPath = userSandboxDataFolderName !== void 0 && userSandboxDataFolderName.length > 0 ? (0, import_node_path61.join)((0, import_node_os19.homedir)(), userSandboxDataFolderName, "sandbox.json") : this.perUserSandboxConfigPath;
        const withFileOverlay = await this.foldPerUserFilePolicy(policy, userSandboxConfigPath);
        const perUser = withFileOverlay.skipStatsigDefaults ? withFileOverlay : await this.applyStatsigDefaults(withFileOverlay);
        const perRepo = await this.loadPerRepoFilePolicy(perUser.type);
        const teamAdmin = await this.buildTeamAdminPolicy(perUser.type);
        const shouldPreserveAllowAllNetwork = isAllowAllNetworkByPolicy(policy.networkPolicy);
        const { policy: merged } = await resolveSandboxPolicyForWorkspace(this.rootDirectories[0], {
            perUser,
            perRepo,
            teamAdmin
        });
        if (shouldPreserveAllowAllNetwork) {
            return {
                ...merged,
                networkPolicy: networkAllowAllPolicy()
            };
        }
        return merged;
    }
    async foldPerUserFilePolicy(uiPolicy, configPath = this.perUserSandboxConfigPath) {
        const filePolicy = await loadSandboxPolicyFromFileOrUndefined(configPath, (0, import_node_os19.homedir)());
        if (!filePolicy || filePolicy.type === "insecure_none") return uiPolicy;
        let mergedNetworkPolicy = mergeNetworkPolicies(filePolicy.networkPolicy, uiPolicy.networkPolicy);
        if (mergedNetworkPolicy && uiPolicy.networkPolicy?.default !== void 0) {
            mergedNetworkPolicy = {
                ...mergedNetworkPolicy,
                default: uiPolicy.networkPolicy.default
            };
        }
        const mergedReadonlyPaths = mergePathsUnion(filePolicy.additionalReadonlyPaths, uiPolicy.additionalReadonlyPaths);
        const base = {
            ...uiPolicy,
            networkPolicy: mergedNetworkPolicy,
            additionalReadonlyPaths: mergedReadonlyPaths.length > 0 ? mergedReadonlyPaths : void 0,
            readBoundary: filePolicy.readBoundary ?? uiPolicy.readBoundary,
            additionalReadPaths: filePolicy.additionalReadPaths !== void 0 ? filePolicy.additionalReadPaths : uiPolicy.additionalReadPaths
        };
        if (uiPolicy.type === "workspace_readwrite" && filePolicy.type === "workspace_readwrite") {
            const mergedReadwritePaths = mergePathsUnion(filePolicy.additionalReadwritePaths, uiPolicy.additionalReadwritePaths);
            return {
                ...base,
                additionalReadwritePaths: mergedReadwritePaths.length > 0 ? mergedReadwritePaths : void 0
            };
        }
        return base;
    }
    async applyStatsigDefaults(policy) {
        const defaults2 = await this.teamSettingsService.getDefaultNetworkAllowlist();
        if (!defaults2.available || defaults2.allowlist.length === 0) return policy;
        if (isAllowAllNetworkByPolicy(policy.networkPolicy)) {
            return policy;
        }
        const statsigNetworkPolicy = {
            default: "deny",
            allow: deduplicateStrings2(defaults2.allowlist)
        };
        return {
            ...policy,
            networkPolicy: mergeNetworkPolicies(policy.networkPolicy, statsigNetworkPolicy)
        };
    }
    async loadPerRepoFilePolicy(baseType) {
        const rootDir = this.rootDirectories[0];
        if (!rootDir) return void 0;
        const filePolicy = await loadSandboxPolicyFromFileOrUndefined((0, import_node_path61.join)(rootDir, ".cursor", "sandbox.json"), rootDir);
        if (!filePolicy || filePolicy.type === "insecure_none") return void 0;
        if (filePolicy.type !== baseType) {
            return makeSandboxedPolicy(baseType, {
                networkPolicy: filePolicy.networkPolicy,
                additionalReadonlyPaths: filePolicy.additionalReadonlyPaths,
                ..."additionalReadwritePaths" in filePolicy ? {
                    additionalReadwritePaths: filePolicy.additionalReadwritePaths
                } : {},
                disableTmpWrite: filePolicy.disableTmpWrite,
                networkPolicyStrict: filePolicy.networkPolicyStrict,
                readBoundary: filePolicy.readBoundary,
                additionalReadPaths: filePolicy.additionalReadPaths
            });
        }
        return filePolicy;
    }
    async buildTeamAdminPolicy(baseType) {
        const networkPolicy = await this.buildTeamAdminNetworkPolicy(baseType);
        const { readBoundary, readAllowlistPaths, allowUserOverrideReadAllowlist } = await this.getAdminReadSandboxing();
        if (readBoundary === void 0) {
            return networkPolicy;
        }
        return {
            ...networkPolicy ?? makeSandboxedPolicy(baseType),
            readBoundary,
            additionalReadPaths: readAllowlistPaths,
            allowUserOverrideReadPaths: allowUserOverrideReadAllowlist
        };
    }
    async getAdminReadSandboxing() {
        const [enabled, sandboxing] = await Promise.all([
            this.teamSettingsService.isReadControlEnabled?.() ?? true,
            this.teamSettingsService.getSandboxingControls()
        ]);
        if (!enabled) {
            return {
                readBoundary: void 0,
                readAllowlistPaths: []
            };
        }
        return {
            readBoundary: sandboxing.readBoundary === "workspace" ? "workspace" : void 0,
            readAllowlistPaths: sandboxing.readAllowlistPaths ?? [],
            allowUserOverrideReadAllowlist: sandboxing.allowUserOverrideReadAllowlist
        };
    }
    async buildTeamAdminNetworkPolicy(baseType) {
        if (!this.adminNetworkControlsEnabled) return void 0;
        const controls = await this.teamSettingsService.getNetworkAccessControls();
        if (!controls.available) {
            return makeSandboxedPolicy(baseType, {
                networkPolicy: networkDisabledPolicy()
            });
        }
        if (controls.allowlist.length === 0 && controls.denylist.length === 0) {
            return void 0;
        }
        const adminNetworkPolicy = {};
        if (controls.allowlist.length > 0) {
            adminNetworkPolicy.default = "deny";
            adminNetworkPolicy.allow = deduplicateStrings2(controls.allowlist);
        }
        if (controls.denylist.length > 0) {
            adminNetworkPolicy.deny = deduplicateStrings2(controls.denylist);
        }
        return makeSandboxedPolicy(baseType, {
            networkPolicy: adminNetworkPolicy
        });
    }
    async isInShellAllowlist(command) {
        const perms = await this.getPermissions();
        return perms.allow.some((entry)=>this.isShellEntry(entry) && command.matchForms.some((form)=>this.matchesShell(entry, form)));
    }
    isInTeamBlocklist(autoRunControls, command) {
        return autoRunControls.blocked.some((blockedCmd)=>this.matchesAutoRunCommand(command.command.fullText, blockedCmd));
    }
    isInTeamAllowlist(autoRunControls, command) {
        return autoRunControls.allowed.some((allowedCmd)=>this.matchesAutoRunCommand(command.command.fullText, allowedCmd));
    }
    async computeRedirectAllowlistSafety(parsingResult, workingDirectory, allowTmpRedirects) {
        const hasRedirects = parsingResult.hasRedirects;
        const parsingFailed = parsingResult.parsingFailed;
        const allRedirectsAreAllowlistSafe = parsingResult.allRedirectsAreDevNull === true;
        const allRedirectsAreWorkspaceFileSafe = hasRedirects && !allRedirectsAreAllowlistSafe && !parsingFailed ? await areShellRedirectsAllowlistSafeForWorkspace({
            parsingResult,
            workingDirectory,
            rootDirectories: this.rootDirectories,
            allowTmpRedirects
        }) : false;
        const redirectsAllowlistSafe = !hasUnsafeWriteRedirect({
            parsingResult,
            hasRedirects,
            parsingFailed,
            allRedirectsAreAllowlistSafe,
            allRedirectsAreWorkspaceFileSafe
        });
        return {
            allRedirectsAreAllowlistSafe,
            allRedirectsAreWorkspaceFileSafe,
            redirectsAllowlistSafe
        };
    }
    async cmdIsAllowedByAllowlist(command, allowlist) {
        if (!allowlist.redirectsAllowlistSafe) {
            return false;
        }
        if (await this.isInShellAllowlist(command)) {
            return true;
        }
        return allowlist.applyTeamAllowlist && allowlist.autoRunControls !== void 0 && this.isInTeamAllowlist(allowlist.autoRunControls, command);
    }
    buildShellApprovalDecisionFacts({ commands, softDenylistedCommands, autoRunControls, shouldApplyTeamShellAllowlist, deleteProtectionEnabled }) {
        const deniedCommands = commands.filter((cmd)=>cmd.state === "denied");
        const unapprovedCommands = commands.filter((cmd)=>cmd.state === "approvable");
        const notInTeamAllowlist = shouldApplyTeamShellAllowlist && autoRunControls?.enabled ? commands.filter((cmd)=>!this.isInTeamAllowlist(autoRunControls, cmd)) : [];
        const teamBlocklistedCommands = deniedCommands.filter((cmd)=>autoRunControls !== void 0 && this.isInTeamBlocklist(autoRunControls, cmd));
        const rmDeniedByDeleteProtection = deleteProtectionEnabled ? deniedCommands.filter((cmd)=>cmd.command.name === "rm") : [];
        return {
            hasSecurityDenies: deniedCommands.length > 0,
            hasSoftDenies: softDenylistedCommands.length > 0,
            hasTeamAllowlistMisses: notInTeamAllowlist.length > 0,
            allCommandsRunnable: commands.every((cmd)=>cmd.isRunnable()),
            allCommandsAllowlisted: commands.every((cmd)=>cmd.state === "allowlisted"),
            allCommandsPreapproved: commands.every((cmd)=>cmd.state === "preapproved"),
            canAllowlistInPrompt: deniedCommands.length === 0 && notInTeamAllowlist.length === 0,
            unapprovedCommands,
            deniedCommands,
            notInTeamAllowlist,
            teamBlocklistedCommands,
            rmDeniedByDeleteProtection
        };
    }
    getShellAutoApprovalPolicy({ approvalMode, isUnrestricted, requestedPolicy, facts, preserveRequestedPolicyForAllowlistedCommands }) {
        if (facts.hasSecurityDenies || facts.hasSoftDenies || !facts.allCommandsRunnable) {
            return void 0;
        }
        if (isUnrestricted) {
            return requestedPolicy.type === "workspace_readonly" ? requestedPolicy : {
                type: "insecure_none"
            };
        }
        if (approvalMode !== "allowlist") {
            return void 0;
        }
        if (facts.allCommandsAllowlisted && !preserveRequestedPolicyForAllowlistedCommands) {
            return {
                type: "insecure_none",
                allowlistEscalated: true
            };
        }
        return requestedPolicy;
    }
    async getPermissions() {
        return await this.permissionsProvider.getPermissions();
    }
    hasLocalShellControls(perms) {
        return perms.allow.some((entry)=>this.isShellEntry(entry)) || perms.deny.some((entry)=>this.isShellEntry(entry)) || (perms.smartAllowlistDenylist?.length ?? 0) > 0;
    }
    hasTeamShellControls(autoRunControls, shouldApplyTeamShellAllowlist = true) {
        return autoRunControls !== void 0 && (shouldApplyTeamShellAllowlist && (autoRunControls.enabled || autoRunControls.allowed.length > 0) || autoRunControls.blocked.length > 0);
    }
    async shouldPromptForEmptyPlainShellAllowlist(command, perms) {
        if (perms.approvalMode !== "allowlist" || perms.userConfiguredPolicy.type !== "insecure_none" || command.trim().length === 0 || this.hasLocalShellControls(perms)) {
            return false;
        }
        const [autoRunControls, deleteProtectionEnabled] = await Promise.all([
            this.teamSettingsService.getAutoRunControls(),
            this.teamSettingsService.getDeleteFileProtection()
        ]);
        return !this.hasTeamShellControls(autoRunControls, !perms.dashboardTerminalAllowlistOverriddenByPermissionsFile) && !deleteProtectionEnabled;
    }
    async requestApprovalForEmptyShellAllowlist(command, options2, policyToRequest) {
        const allowlistCandidates = this.getEmptyShellAllowlistCandidates(options2);
        const approvalResult = await this.pendingDecisionStore.requestApproval({
            type: OperationType.Shell,
            toolCallId: options2.toolCallId,
            details: {
                command,
                workingDirectory: options2.workingDirectory,
                timeout: options2.timeout,
                reason: options2.smartModeApprovalReason ?? "Shell allowlist is empty",
                isSandboxAvailable: false,
                isSandboxEnabled: false,
                canAllowlist: allowlistCandidates.length > 0,
                notAllowedCommands: allowlistCandidates,
                smartModeApprovalReason: options2.smartModeApprovalReason,
                smartModeApprovalRequestId: options2.smartModeApprovalRequestId
            }
        });
        if (!approvalResult.approved) {
            return {
                kind: "block",
                reason: {
                    type: "userRejected",
                    reason: approvalResult.reason
                }
            };
        }
        const mergedPolicy = await this.applyServerAndAdminPolicies(policyToRequest);
        return {
            kind: "allow",
            policy: mergedPolicy
        };
    }
    getEmptyShellAllowlistCandidates(options2) {
        const parsingResult = options2.parsingResult;
        if (parsingResult.parsingFailed || parsingResult.executableCommands.length === 0 || parsingResult.hasRedirects && parsingResult.allRedirectsAreDevNull !== true) {
            return [];
        }
        return this.generateAllowlistPatterns(parsingResult.executableCommands);
    }
    async getAdminCommandDenylistBlock(ctx, args) {
        const blockedCommands = (await this.teamSettingsService.getAdminCommandDenylist()).rules;
        if (blockedCommands.length === 0) {
            return void 0;
        }
        const matchForms = args.parsingResult ? deriveAdminCommandDenylistMatchForms({
            command: args.command,
            parsingResult: args.parsingResult
        }) : [
            args.command
        ];
        const matchedPattern = findMatchingAdminCommandDenylistPattern({
            matchForms,
            blockedCommands
        });
        if (matchedPattern === void 0) {
            return void 0;
        }
        logger27.info(ctx, "Admin command denylist hard-blocked shell at execution time", {
            toolCallId: args.toolCallId,
            parsingFailed: args.parsingResult?.parsingFailed ?? true,
            parserCommandCount: args.parsingResult?.executableCommands.length ?? 0
        });
        return {
            type: "adminCommandDenylist",
            pattern: matchedPattern
        };
    }
    async hasHardDeny(_ctx, commands) {
        const perms = await this.getPermissions();
        return commands.some((cmd)=>perms.deny.some((entry)=>this.isShellEntry(entry) && cmd.matchForms.some((form)=>this.matchesShell(entry, form))));
    }
    isShellEntry(entry) {
        return parseShellEntry(entry) !== null;
    }
    isPathEntry(kind, entry) {
        const re3 = new RegExp(`^\\s*${kind}\\s*\\(`);
        return re3.test(entry);
    }
    matchesShell(entry, cmd) {
        const parsed = parseShellEntry(entry);
        if (!parsed) return false;
        const command = cmd.trim();
        const base = this.extractBaseCommand(command);
        if (parsed.argsPattern !== null) {
            const argsText = command.includes(" ") ? command.slice(command.indexOf(" ") + 1).trim() : "";
            const baseOk = this.matchGlob(parsed.commandPattern, base) || this.matchGlob(parsed.commandPattern, command);
            const argsOk = this.matchGlob(parsed.argsPattern, argsText);
            if (baseOk && argsOk) return true;
        }
        if (this.matchGlob(parsed.fullPattern, command)) return true;
        if (command.startsWith(`${parsed.fullPattern} `)) return true;
        if (this.matchGlob(parsed.fullPattern, base)) return true;
        if (base === parsed.fullPattern) return true;
        return false;
    }
    async checkCursorFileProtection(pathComponents) {
        const dotCursorProtection = await this.teamSettingsService.getDotCursorProtection();
        const isCursorFile = pathComponents.some((component)=>component.toLowerCase() === ".cursor" || component.toLowerCase() === ".vscode");
        if (isCursorFile && dotCursorProtection) {
            const lastPathSegment = pathComponents[pathComponents.length - 1]?.toLowerCase() ?? "";
            const hasAllowedExtension = lastPathSegment.endsWith(".md") || lastPathSegment.endsWith(".mdc") || lastPathSegment === ".cursorrules";
            if (hasAllowedExtension) {
                return null;
            }
            return {
                type: "permissionsConfig"
            };
        }
        return null;
    }
    extractBaseCommand(command) {
        const trimmed = command.trim();
        const spaceIndex = trimmed.indexOf(" ");
        return spaceIndex === -1 ? trimmed : trimmed.substring(0, spaceIndex);
    }
    generateAllowlistPatterns(commands) {
        const result = [];
        const compositeShellCommands = [
            "git",
            "npm",
            "yarn",
            "pnpm",
            "docker",
            "pip",
            "systemctl",
            "uv",
            "cargo",
            "bun",
            "npx"
        ];
        for (const cmd of commands){
            if (isTerminalShellInterpreterAllowlistCandidate(cmd.name)) {
                continue;
            }
            if (compositeShellCommands.includes(cmd.name) && cmd.args.length > 0 && cmd.args[0].type === "word") {
                result.push(`${cmd.name} ${cmd.args[0].value}`);
            } else {
                result.push(cmd.name);
            }
        }
        return [
            ...new Set(result)
        ];
    }
    matchesPathEntry(kind, entry, absPath) {
        const re3 = new RegExp(`^\\s*${kind}\\s*\\((.*)\\)\\s*$`);
        const m2 = entry.match(re3);
        if (!m2) return false;
        const rawPattern = (m2[1] ?? "").trim();
        return this.matchGlob(untildify(rawPattern), absPath);
    }
    async isPathExplicitlyDenied(kind, absPath) {
        const perms = await this.getPermissions();
        return perms.deny.some((e)=>this.isPathEntry(kind, e) && this.matchesPathEntry(kind, e, absPath));
    }
    async isPathExplicitlyAllowed(kind, absPath) {
        const perms = await this.getPermissions();
        return perms.allow.some((e)=>this.isPathEntry(kind, e) && this.matchesPathEntry(kind, e, absPath));
    }
    matchGlob(pattern, value) {
        return matchesCommandGlob(pattern, value);
    }
    async addToAllowList(_ctx, kind, value) {
        const entry = `${kind}(${value})`;
        await this.permissionsProvider.updatePermissions((perms)=>{
            const allow = perms.allow.includes(entry) ? perms.allow : [
                ...perms.allow,
                entry
            ];
            return {
                ...perms,
                allow
            };
        });
    }
    async addToDenyList(_ctx, kind, value) {
        const entry = `${kind}(${value})`;
        await this.permissionsProvider.updatePermissions((perms)=>{
            const deny = perms.deny.includes(entry) ? perms.deny : [
                ...perms.deny,
                entry
            ];
            return {
                ...perms,
                deny
            };
        });
    }
    async shouldBlockMcp(ctx, args, annotations) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource38(env_2, createSpan(ctx.withName("InteractivePermissionsService.shouldBlockMcp")), false);
            const { name: name17, toolName, providerIdentifier, args: argsMap } = args;
            const toolAnnotations = resolveMcpCallAnnotations(args, annotations);
            const log5 = (msg)=>{
                this.mcpAllowlistLog?.(msg);
            };
            log5(`[permissions-service] shouldBlockMcp: toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
            const perms = await this.getPermissions();
            const mcpToolControls = await this.teamSettingsService.getMcpToolControls();
            const adminMcpAllowlistEnabled = mcpToolControls?.enabled === true;
            const explicitlyDenied = await this.isMcpExplicitlyDenied(ctx, providerIdentifier, toolName);
            if (explicitlyDenied) {
                log5(`[permissions-service] shouldBlockMcp: BLOCKED (explicitly denied) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                return {
                    type: "permissionsConfig"
                };
            }
            const smartModeApprovalReason = args.smartModeApproval?.reason;
            if (smartModeApprovalReason !== void 0) {
                if (perms.userConfiguredPolicy.type === "workspace_readonly" && perms.approvalMode !== "unrestricted") {
                    log5(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode, Smart Mode forced approval) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                    return {
                        type: "permissionsConfig",
                        isReadonly: true
                    };
                }
                log5(`[permissions-service] shouldBlockMcp: needsApproval (Smart Mode) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                const smartModeMcpAllowlisted = adminMcpAllowlistEnabled ? this.isMcpInTeamAllowlist(mcpToolControls, {
                    providerIdentifier,
                    toolName,
                    annotations: toolAnnotations
                }) : await this.isMcpExplicitlyAllowed(ctx, providerIdentifier, toolName);
                if (smartModeMcpAllowlisted) {
                    return false;
                }
                if (perms.approvalMode === "unrestricted" && !await this.teamSettingsService.getShouldBlockMcp()) {
                    return false;
                }
                return {
                    type: "needsApproval",
                    approvalReason: smartModeApprovalReason,
                    approvalDetails: {
                        type: "mcp",
                        name: name17,
                        toolName,
                        providerIdentifier,
                        args: argsMap,
                        reason: "smartMode",
                        canAllowlist: false,
                        smartModeApprovalReason,
                        smartModeApprovalRequestId: args.smartModeApproval?.requestId
                    }
                };
            }
            if (adminMcpAllowlistEnabled) {
                const inTeamAllowlist = this.isMcpInTeamAllowlist(mcpToolControls, {
                    providerIdentifier,
                    toolName,
                    annotations: toolAnnotations
                });
                this.recordMcpAllowlistCheckResult(ctx, {
                    allowlistScope: "team",
                    outcome: inTeamAllowlist ? "pass" : "fail"
                });
                if (inTeamAllowlist) {
                    log5(`[permissions-service] shouldBlockMcp: ALLOWED (in admin MCP allowlist) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                    return false;
                }
            } else {
                const explicitlyAllowed = await this.isMcpExplicitlyAllowed(ctx, providerIdentifier, toolName);
                this.recordMcpAllowlistCheckResult(ctx, {
                    allowlistScope: "user",
                    outcome: explicitlyAllowed ? "pass" : "fail"
                });
                if (explicitlyAllowed) {
                    log5(`[permissions-service] shouldBlockMcp: ALLOWED (explicitly in allowlist) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                    return false;
                }
            }
            if (perms.userConfiguredPolicy.type === "workspace_readonly" && perms.approvalMode !== "unrestricted") {
                log5(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                return {
                    type: "permissionsConfig",
                    isReadonly: true
                };
            }
            const isAutoRun = perms.approvalMode === "unrestricted";
            if (isAutoRun) {
                const teamBlocksMcp = await this.teamSettingsService.getShouldBlockMcp();
                if (teamBlocksMcp) {
                    log5(`[permissions-service] shouldBlockMcp: needsApproval (auto-run but team blocks MCP) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                } else {
                    log5(`[permissions-service] shouldBlockMcp: ALLOWED (auto-run, no team block) toolName="${toolName}", providerIdentifier="${providerIdentifier}"`);
                    return false;
                }
            }
            log5(`[permissions-service] shouldBlockMcp: needsApproval (not in allowlist) toolName="${toolName}", providerIdentifier="${providerIdentifier}", approvalMode="${perms.approvalMode}"`);
            return {
                type: "needsApproval",
                approvalReason: `MCP tool: ${toolName}`,
                approvalDetails: {
                    type: "mcp",
                    name: name17,
                    toolName,
                    providerIdentifier,
                    args: argsMap,
                    canAllowlist: true
                }
            };
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources38(env_2);
        }
    }
    async isMcpFullyAllowlisted(parentCtx, options2) {
        const ctx = parentCtx.withName("InteractivePermissionsService.isMcpFullyAllowlisted");
        const { providerIdentifier, toolName } = options2;
        const toolAnnotations = options2.annotations ?? parseMcpToolAnnotations(options2.annotationsJson);
        if (await this.isMcpExplicitlyDenied(ctx, providerIdentifier, toolName)) {
            return false;
        }
        const mcpToolControls = await this.teamSettingsService.getMcpToolControls();
        if (mcpToolControls?.enabled === true) {
            if (this.isMcpInTeamAllowlist(mcpToolControls, {
                providerIdentifier,
                toolName,
                annotations: toolAnnotations
            })) {
                return true;
            }
            return false;
        }
        return await this.isMcpExplicitlyAllowed(ctx, providerIdentifier, toolName);
    }
    async isWebFetchFullyAllowlisted(_parentCtx, options2) {
        const perms = await this.getPermissions();
        if (perms.approvalMode !== "allowlist") {
            return false;
        }
        let parsed;
        try {
            parsed = new URL(options2.url);
        } catch  {
            return false;
        }
        const hostname3 = parsed.hostname;
        if (perms.deny.some((entry)=>this.matchesWebFetchEntry(entry, hostname3))) {
            return false;
        }
        return perms.allow.some((entry)=>this.matchesWebFetchEntry(entry, hostname3));
    }
    matchesAutoRunCommand(command, patternToMatch) {
        const escapedPattern = patternToMatch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`^${escapedPattern}(\\s|$)`).test(command.trim());
    }
    matchesMcpPattern({ pattern, providerIdentifier, toolName, logLabel }) {
        const colonIdx = pattern.indexOf(":");
        if (colonIdx === -1) return false;
        const serverPattern = pattern.slice(0, colonIdx).trim().toLowerCase();
        const toolPattern = pattern.slice(colonIdx + 1).trim().toLowerCase();
        const scopeMarker = "::mcpScope:";
        const scopeMarkerIndex = providerIdentifier.lastIndexOf(scopeMarker);
        const unscopedProviderIdentifier = scopeMarkerIndex === -1 ? providerIdentifier : providerIdentifier.slice(0, scopeMarkerIndex);
        const normalizedProviderIdentifier = unscopedProviderIdentifier.toLowerCase().trim();
        const normalizedToolName = toolName.toLowerCase().trim();
        const serverMatches = serverPattern === "*" || this.matchGlob(serverPattern, normalizedProviderIdentifier);
        const toolMatches = toolPattern === "*" || this.matchGlob(toolPattern, normalizedToolName);
        const result = serverMatches && toolMatches;
        const msg = `[permissions-service] ${logLabel}: serverPattern="${serverPattern}", toolPattern="${toolPattern}", normalizedProviderIdentifier="${normalizedProviderIdentifier}", normalizedToolName="${normalizedToolName}", serverMatches=${serverMatches}, toolMatches=${toolMatches}, result=${result}`;
        this.mcpAllowlistLog?.(msg);
        return result;
    }
    recordMcpAllowlistCheckResult(ctx, { allowlistScope, outcome }) {
        mcpAllowlistCheckResult.increment(ctx, 1, {
            allowlist_scope: allowlistScope,
            outcome
        });
    }
    matchesMcpEntry(entry, providerIdentifier, toolName) {
        const m2 = entry.match(/^\s*Mcp\s*\((.*)\)\s*$/);
        if (!m2) return false;
        const pattern = m2[1]?.trim() ?? "";
        return this.matchesMcpPattern({
            pattern,
            providerIdentifier,
            toolName,
            logLabel: "matchesMcpEntry"
        });
    }
    matchesWebFetchEntry(entry, hostname3) {
        const match2 = entry.match(/^\s*WebFetch\s*\((.*)\)\s*$/);
        if (!match2) {
            return false;
        }
        const pattern = match2[1]?.trim() ?? "";
        return matchesDomainPattern(hostname3, pattern);
    }
    matchesMcpEntryBare({ pattern, providerIdentifier, toolName }) {
        return this.matchesMcpPattern({
            pattern,
            providerIdentifier,
            toolName,
            logLabel: "matchesMcpEntryBare"
        });
    }
    isMcpInTeamAllowlist(mcpToolControls, { providerIdentifier, toolName, annotations }) {
        if (mcpToolControls.mcpToolAllowlist.some((entry)=>this.matchesMcpEntryBare({
                pattern: entry,
                providerIdentifier,
                toolName
            }))) {
            return true;
        }
        const serverPolicy = this.findTeamMcpServerPolicy(mcpToolControls, providerIdentifier);
        if (serverPolicy === void 0 || serverPolicy.mode !== "reads") {
            return false;
        }
        return isMcpToolAllowedByAdminToolPolicy(serverPolicy, {
            name: toolName,
            annotations
        });
    }
    findTeamMcpServerPolicy(mcpToolControls, providerIdentifier) {
        for (const entry of mcpToolControls.serverPolicies ?? []){
            if (this.matchesMcpEntryBare({
                pattern: `${entry.name}:*`,
                providerIdentifier,
                toolName: ""
            })) {
                return entry.policy;
            }
        }
        return void 0;
    }
    async isMcpExplicitlyDenied(_ctx, providerIdentifier, toolName) {
        const perms = await this.getPermissions();
        return perms.deny.some((e)=>this.matchesMcpEntry(e, providerIdentifier, toolName));
    }
    async isMcpExplicitlyAllowed(_ctx, providerIdentifier, toolName) {
        const perms = await this.getPermissions();
        return perms.allow.some((e)=>this.matchesMcpEntry(e, providerIdentifier, toolName));
    }
};

}
