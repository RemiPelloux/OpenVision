import { init_dist8 } from "../../agent-exec/dist/index.js";
import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { toolAnnotationsJsonField } from "../../bidi_connect_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { buildMcpToolFileContent, createCounter, createGauge, isFullMcpLeaseInvalidation, mergeMcpLeaseEvents, supportsInteractiveMcpAuth } from "../../dist_exports.js";
import { loggerKey } from "../../entry_exports.js";
import { init_mcp5 } from "./mcp.js";
import { init_mcp_tool_annotations } from "../../mcp-core/dist/mcp-tool-annotations.js";
import { clientStateToServerStatus, configuredServersBucket, createVirtualMcpAuthToolDefinition, ensureCursorDirGitignore, getValidCopyOverride, interpolateMcpAuthTemplate, sanitizeFileName, sanitizeServerName, serverFingerprint, withStructuredLogOptIn, withTimeout2 } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { McpDescriptor, McpFileSystemOptions, McpToolDescriptor, init_mcp_pb } from "../../proto/dist/generated/agent/v1/mcp_pb.js";
var import_node_crypto18, import_promises26, import_node_os14, import_node_path47, __addDisposableResource25, __disposeResources25, mcpFilesystemDivergence, mcpFilesystemSyncCheck, mcpFilesystemSyncExpectedServers, mcpFilesystemSyncActualServers, mcpFilesystemSyncServersMissing, mcpFilesystemSyncToolMismatches, baseLogger, MCP_FS_STRUCTURED_LOG_OPT_IN_METADATA_KEY, logger21, MCPS_SUBDIR, MCP_TOOLS_SUBDIR, SERVER_METADATA_FILENAME, MCP_RESOURCES_SUBDIR, MCP_PROMPTS_SUBDIR, STAGING_SUFFIX, PREV_SUFFIX, INSTRUCTIONS_FILENAME, STATUS_FILENAME, MCP_AUTH_TOOL_NAME, DEFAULT_MCP_AUTH_TOOL_DESCRIPTION, DEFAULT_MCP_ERROR_STATUS_MESSAGE, DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE, DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE_NO_VIRTUAL_TOOL, CURSOR_DIR_GITIGNORE_MANAGED_START, CURSOR_DIR_GITIGNORE_MANAGED_END, CURSOR_DIR_GITIGNORE_CONTENT, DEFAULT_DEBOUNCE_MS, CLIENT_FETCH_TIMEOUT_MS, McpFileSystemWriter;
export { CLIENT_FETCH_TIMEOUT_MS, CURSOR_DIR_GITIGNORE_CONTENT, CURSOR_DIR_GITIGNORE_MANAGED_END, CURSOR_DIR_GITIGNORE_MANAGED_START, DEFAULT_DEBOUNCE_MS, DEFAULT_MCP_AUTH_TOOL_DESCRIPTION, DEFAULT_MCP_ERROR_STATUS_MESSAGE, DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE, DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE_NO_VIRTUAL_TOOL, INSTRUCTIONS_FILENAME, MCPS_SUBDIR, MCP_AUTH_TOOL_NAME, MCP_FS_STRUCTURED_LOG_OPT_IN_METADATA_KEY, MCP_PROMPTS_SUBDIR, MCP_RESOURCES_SUBDIR, MCP_TOOLS_SUBDIR, McpFileSystemWriter, PREV_SUFFIX, SERVER_METADATA_FILENAME, STAGING_SUFFIX, STATUS_FILENAME, __addDisposableResource25, __disposeResources25, baseLogger, import_node_crypto18, import_node_os14, import_node_path47, import_promises26, logger21, mcpFilesystemDivergence, mcpFilesystemSyncActualServers, mcpFilesystemSyncCheck, mcpFilesystemSyncExpectedServers, mcpFilesystemSyncServersMissing, mcpFilesystemSyncToolMismatches };
var __wakaru_init_mcp_file_system_writer_initialized = false;
export function init_mcp_file_system_writer() {
if (__wakaru_init_mcp_file_system_writer_initialized) return;
__wakaru_init_mcp_file_system_writer_initialized = true;
"use strict";
import_node_crypto18 = require("node:crypto");
import_promises26 = require("node:fs/promises");
import_node_os14 = require("node:os");
import_node_path47 = require("node:path");
init_dist8();
init_dist();
init_mcp_tool_annotations();
init_dist4();
init_mcp_pb();
init_mcp5();
__addDisposableResource25 = function(env, value, async) {
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
__disposeResources25 = (function(SuppressedError2) {
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
mcpFilesystemDivergence = createCounter("mcp.filesystem.divergence", {
    description: "Divergence detected between MCP lease state and filesystem state",
    labelNames: [
        "divergence_type",
        "mcp_source",
        "configured_servers",
        "mcp_version"
    ]
});
mcpFilesystemSyncCheck = createCounter("mcp.filesystem.sync_check", {
    description: "MCP filesystem sync check executed",
    labelNames: [
        "synced",
        "mcp_source",
        "configured_servers",
        "mcp_version"
    ]
});
mcpFilesystemSyncExpectedServers = createGauge("mcp.filesystem.sync_check.expected_servers", {
    description: "Number of expected MCP servers at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
});
mcpFilesystemSyncActualServers = createGauge("mcp.filesystem.sync_check.actual_servers", {
    description: "Number of actual MCP servers on disk at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
});
mcpFilesystemSyncServersMissing = createGauge("mcp.filesystem.sync_check.servers_missing", {
    description: "Number of expected MCP servers missing from disk at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
});
mcpFilesystemSyncToolMismatches = createGauge("mcp.filesystem.sync_check.tool_mismatches", {
    description: "Number of MCP servers with tool count mismatches at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
});
baseLogger = createLogger("McpFileSystemWriter");
MCP_FS_STRUCTURED_LOG_OPT_IN_METADATA_KEY = "mcpFsStructuredLogOptIn";
logger21 = {
    debug (ctx, message, metadata, options2) {
        baseLogger.debug(ctx, message, withStructuredLogOptIn(metadata, options2));
    },
    info (ctx, message, metadata, options2) {
        baseLogger.info(ctx, message, withStructuredLogOptIn(metadata, options2));
    },
    warn (ctx, message, metadata, options2) {
        baseLogger.warn(ctx, message, withStructuredLogOptIn(metadata, options2));
    },
    error (ctx, message, error3, metadata, options2) {
        baseLogger.error(ctx, message, error3, withStructuredLogOptIn(metadata, options2));
    }
};
MCPS_SUBDIR = "mcps";
MCP_TOOLS_SUBDIR = "tools";
SERVER_METADATA_FILENAME = "SERVER_METADATA.json";
MCP_RESOURCES_SUBDIR = "resources";
MCP_PROMPTS_SUBDIR = "prompts";
STAGING_SUFFIX = "~staging";
PREV_SUFFIX = "~prev";
INSTRUCTIONS_FILENAME = "INSTRUCTIONS.md";
STATUS_FILENAME = "STATUS.md";
MCP_AUTH_TOOL_NAME = "mcp_auth";
DEFAULT_MCP_AUTH_TOOL_DESCRIPTION = "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.";
DEFAULT_MCP_ERROR_STATUS_MESSAGE = "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.";
DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE = 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.';
DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE_NO_VIRTUAL_TOOL = "This MCP server requires authentication before its tools can be used. Open Cursor's Customize page > MCPs, select this server, and use Authenticate/Reopen, or refresh credentials in your MCP configuration (for example mcp.json), then restart this environment. If this server is not required for the task, continue without it.";
CURSOR_DIR_GITIGNORE_MANAGED_START = "# >>> CURSOR MANAGED BLOCK >>>";
CURSOR_DIR_GITIGNORE_MANAGED_END = "# <<< CURSOR MANAGED BLOCK <<<";
CURSOR_DIR_GITIGNORE_CONTENT = [
    "# Ignore everything in .cursor",
    "*",
    "# Un-ignore projects so we can descend to allowlisted subdirs",
    "!projects/",
    "projects/*",
    "!projects/*/",
    "projects/*/*",
    "# MCP tool descriptors, resources, prompts",
    "!projects/*/mcps/",
    "!projects/*/mcps/**",
    "# Agent transcripts for citation",
    "!projects/*/agent-transcripts/",
    "!projects/*/agent-transcripts/**",
    "# Terminal output files",
    "!projects/*/terminals/",
    "!projects/*/terminals/**",
    "# Conversation notes (shared scratchpad)",
    "!projects/*/agent-notes/",
    "!projects/*/agent-notes/**",
    "# Large tool output files",
    "!projects/*/agent-tools/",
    "!projects/*/agent-tools/**",
    "# Plugin cache (rules, skills, agents)",
    "!plugins/",
    "!plugins/**",
    "# Built-in Cursor skills",
    "!skills-cursor/",
    "!skills-cursor/**",
    "# User's personal skills",
    "!skills/",
    "!skills/**",
    "# User's personal slash commands",
    "!commands/",
    "!commands/**",
    "# User's plan files",
    "!plans/",
    "!plans/**",
    "# Subagent state/transcripts",
    "!subagents/",
    "!subagents/**",
    "# User-level cursor rules",
    "!rules/",
    "!rules/**"
].join("\n");
DEFAULT_DEBOUNCE_MS = 100;
CLIENT_FETCH_TIMEOUT_MS = 15e3;
McpFileSystemWriter = class _McpFileSystemWriter {
    constructor(mcpLease, projectDir, options2){
        this.cachedFingerprints = new Map();
        this.disposed = false;
        this.hasPendingLeaseChangeEvent = false;
        this.lastDivergenceCheckMs = 0;
        this.mcpLease = mcpLease;
        this.projectDir = projectDir;
        this.debounceMs = options2?.debounceMs ?? DEFAULT_DEBOUNCE_MS;
        this.mcpAuthCopyOverrides = options2?.mcpAuthCopyOverrides;
        this.exposeVirtualMcpAuthTool = options2?.exposeVirtualMcpAuthTool ?? true;
        this.alwaysExposeVirtualMcpAuthTool = options2?.alwaysExposeVirtualMcpAuthTool ?? false;
        this.snapshotProvider = options2?.snapshotProvider;
        this.mcpVersion = options2?.mcpVersion ?? (this.snapshotProvider ? "snapshots" : "v1");
        this.onDidWrite = options2?.onDidWrite;
        this.ctx = this.getContext(options2?.loggerBackend);
        this.startupCleanupPromise = this.cleanupStaleStagingDirs(this.ctx);
        this.leaseChangeDisposable = this.mcpLease.onDidChange((event)=>{
            logger21.info(this.ctx, "Lease change event received", {
                serverIdentifiers: event?.serverIdentifiers,
                reason: event?.reason
            });
            this.onLeaseChanged(this.ctx, event);
        });
        logger21.info(this.ctx, "Constructor: scheduling initial write");
        this.scheduleWrite(this.ctx);
        this.ensureCursorDirGitignore();
    }
    ensureCursorDirGitignore() {
        void ensureCursorDirGitignore((0, import_node_path47.join)((0, import_node_os14.homedir)(), ".cursor")).catch((err)=>{
            logger21.warn(this.ctx, "Failed to ensure ~/.cursor/.gitignore", err);
        });
    }
    async cleanupStaleStagingDirs(ctx) {
        const logCtx = this.getLogContext(ctx);
        const mcpsPath = (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR);
        try {
            const entries = await (0, import_promises26.readdir)(mcpsPath);
            await Promise.allSettled(entries.filter((entry)=>entry.endsWith(STAGING_SUFFIX)).map((entry)=>(0, import_promises26.rm)((0, import_node_path47.join)(mcpsPath, entry), {
                    recursive: true,
                    force: true
                })));
        } catch (err) {
            if (err?.code !== "ENOENT") {
                logger21.error(logCtx, "Error clearing stale mcps staging dirs", err);
            }
        }
    }
    onLeaseChanged(ctx, event) {
        if (this.disposed) {
            return;
        }
        const normalizedEvent = event ?? {
            serverIdentifiers: void 0
        };
        if (this.hasPendingLeaseChangeEvent) {
            this.pendingLeaseChangeEvent = mergeMcpLeaseEvents(this.pendingLeaseChangeEvent ?? {
                serverIdentifiers: void 0
            }, normalizedEvent);
        } else {
            this.pendingLeaseChangeEvent = normalizedEvent;
            this.hasPendingLeaseChangeEvent = true;
        }
        if (this.debounceTimer !== void 0) {
            clearTimeout(this.debounceTimer);
        }
        this.debounceTimer = setTimeout(()=>{
            this.debounceTimer = void 0;
            const pendingEvent = this.takePendingLeaseChangeEvent();
            this.scheduleWrite(ctx, pendingEvent);
        }, this.debounceMs);
    }
    takePendingLeaseChangeEvent() {
        if (!this.hasPendingLeaseChangeEvent) {
            return void 0;
        }
        const pendingEvent = this.pendingLeaseChangeEvent ?? {
            serverIdentifiers: void 0
        };
        this.pendingLeaseChangeEvent = void 0;
        this.hasPendingLeaseChangeEvent = false;
        return pendingEvent;
    }
    scheduleWrite(ctx, leaseChangeEvent) {
        const logCtx = this.getLogContext(ctx);
        if (this.disposed) {
            return;
        }
        const previousPromise = this.writePromise;
        this.writePromise = (async ()=>{
            if (previousPromise) {
                try {
                    await previousPromise;
                } catch (error3) {
                    logger21.error(logCtx, "Error waiting for previous write", error3);
                }
            }
            if (this.disposed) {
                return;
            }
            await this.startupCleanupPromise;
            if (this.disposed) {
                return;
            }
            await this.fetchAndWrite(ctx, leaseChangeEvent);
        })();
    }
    getContext(loggerBackend) {
        let ctx = createContext();
        if (loggerBackend) {
            ctx = ctx.with(loggerKey, loggerBackend);
        }
        return ctx;
    }
    getLogContext(ctx) {
        return ctx.with(loggerKey, this.ctx.get(loggerKey));
    }
    getMetricTags(labels) {
        return {
            ...labels,
            mcp_version: this.mcpVersion
        };
    }
    getMcpAuthToolDescription() {
        return getValidCopyOverride(this.mcpAuthCopyOverrides?.authToolDescription) ?? DEFAULT_MCP_AUTH_TOOL_DESCRIPTION;
    }
    shouldExposeVirtualMcpAuthToolForStatus(serverIdentifier, status) {
        return this.exposeVirtualMcpAuthTool && supportsInteractiveMcpAuth(serverIdentifier) && (this.alwaysExposeVirtualMcpAuthTool || status === "needsAuth");
    }
    getErrorStatusMessage() {
        return getValidCopyOverride(this.mcpAuthCopyOverrides?.errorStatusMessage) ?? DEFAULT_MCP_ERROR_STATUS_MESSAGE;
    }
    getNeedsAuthStatusMessage(serverIdentifier) {
        const template = getValidCopyOverride(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithAuthTool) ?? DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE;
        return interpolateMcpAuthTemplate(template, {
            serverIdentifier,
            authToolName: MCP_AUTH_TOOL_NAME
        });
    }
    getNeedsAuthStatusMessageForWrite(serverIdentifier) {
        if (!this.exposeVirtualMcpAuthTool || !supportsInteractiveMcpAuth(serverIdentifier)) {
            return getValidCopyOverride(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithoutVirtualTool) ?? DEFAULT_MCP_NEEDS_AUTH_STATUS_MESSAGE_NO_VIRTUAL_TOOL;
        }
        return this.getNeedsAuthStatusMessage(serverIdentifier);
    }
    async getToolsForServers(ctx, serverIdentifiers) {
        if (serverIdentifiers.length === 0) {
            return [];
        }
        const logCtx = this.getLogContext(ctx);
        try {
            return await this.mcpLease.getToolsForServers(ctx, serverIdentifiers);
        } catch (err) {
            logger21.warn(logCtx, `getToolsForServers() threw, falling back to filtered getTools(): ${err}`);
            const allTools = await this.mcpLease.getTools(ctx).catch((e)=>{
                logger21.warn(logCtx, `getTools() threw during scoped-tool fallback, defaulting to []: ${e}`);
                return [];
            });
            const requestedServerIds = new Set(serverIdentifiers);
            return allTools.filter((tool)=>requestedServerIds.has(tool.clientKey));
        }
    }
    async fetchClientDataForServer(ctx, clientKey, client, options2) {
        const state = await withTimeout2(client.getState(ctx), {
            kind: "error"
        }).then((s3)=>{
            if (s3.kind === "error" && !("message" in s3)) {
                logger21.warn(ctx, `getState() timed out for "${clientKey}", defaulting to error`);
            }
            return s3;
        });
        const isReachable = state.kind === "ready" || state.kind === "requires_authentication";
        const [resources, prompts, instructions] = await Promise.all([
            isReachable ? withTimeout2(client.listResources(ctx), {
                resources: []
            }) : Promise.resolve({
                resources: []
            }),
            isReachable ? withTimeout2(client.listPrompts(ctx), []) : Promise.resolve([]),
            isReachable && options2?.fetchInstructions ? withTimeout2(client.getInstructions(ctx), void 0) : Promise.resolve(void 0)
        ]);
        return {
            clientKey,
            serverName: client.serverName,
            plugin: client.plugin,
            marketplace: client.marketplace,
            pluginId: client.pluginId,
            marketplaceId: client.marketplaceId,
            resources: resources.resources.map((r)=>({
                    ...r,
                    serverIdentifier: clientKey,
                    serverName: client.serverName
                })),
            prompts: prompts.map((p2)=>({
                    ...p2,
                    serverIdentifier: clientKey,
                    serverName: client.serverName
                })),
            instructions,
            status: clientStateToServerStatus(state)
        };
    }
    buildServerDataMap(tools, clientData, instructions) {
        const serverDataMap = new Map();
        for (const data of clientData){
            const sanitizedId = sanitizeServerName(data.clientKey);
            serverDataMap.set(data.clientKey, {
                serverIdentifier: data.clientKey,
                serverName: data.serverName,
                plugin: data.plugin,
                marketplace: data.marketplace,
                pluginId: data.pluginId,
                marketplaceId: data.marketplaceId,
                sanitizedId,
                folderPath: (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR, sanitizedId),
                tools: [],
                resources: data.resources,
                prompts: data.prompts,
                instructions: data.instructions,
                status: data.status
            });
        }
        for (const tool of tools){
            let serverData = serverDataMap.get(tool.clientKey);
            if (!serverData) {
                const sanitizedId = sanitizeServerName(tool.clientKey);
                serverData = {
                    serverIdentifier: tool.clientKey,
                    serverName: tool.providerIdentifier,
                    plugin: tool.plugin,
                    marketplace: tool.marketplace,
                    pluginId: tool.pluginId,
                    marketplaceId: tool.marketplaceId,
                    sanitizedId,
                    folderPath: (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR, sanitizedId),
                    tools: [],
                    resources: [],
                    prompts: [],
                    instructions: void 0,
                    status: void 0
                };
                serverDataMap.set(tool.clientKey, serverData);
            }
            serverData.tools.push(tool);
        }
        if (instructions !== void 0) {
            for (const instruction of instructions){
                const instructionIdentifier = instruction.serverIdentifier?.trim();
                let serverData = instructionIdentifier ? Array.from(serverDataMap.values()).find((s3)=>s3.serverIdentifier === instructionIdentifier) : void 0;
                if (!serverData) {
                    const instructionServerName = instruction.serverName?.trim();
                    serverData = instructionServerName ? Array.from(serverDataMap.values()).find((s3)=>s3.serverName === instructionServerName) : void 0;
                }
                if (!serverData) {
                    continue;
                }
                if (instruction.instructions) {
                    serverData.instructions = instruction.instructions;
                }
            }
        }
        if (this.exposeVirtualMcpAuthTool) {
            for (const server of serverDataMap.values()){
                if (!this.shouldExposeVirtualMcpAuthToolForStatus(server.serverIdentifier, server.status)) {
                    continue;
                }
                const hasAuthTool = server.tools.some((tool)=>tool.toolName === MCP_AUTH_TOOL_NAME);
                if (!hasAuthTool) {
                    server.tools.push(createVirtualMcpAuthToolDefinition({
                        serverIdentifier: server.serverIdentifier,
                        serverName: server.serverName,
                        plugin: server.plugin,
                        marketplace: server.marketplace,
                        pluginId: server.pluginId,
                        marketplaceId: server.marketplaceId,
                        authToolDescription: this.getMcpAuthToolDescription()
                    }));
                }
            }
        }
        return serverDataMap;
    }
    buildServersToWrite(ctx, serverDataMap) {
        const serversToWrite = [];
        const seenSanitizedIds = new Set();
        for (const server of serverDataMap.values()){
            const hasContent = server.tools.length > 0 || server.resources.length > 0 || server.prompts.length > 0 || server.instructions;
            const shouldWriteEmptyState = server.status === "error" || server.status === "needsAuth" || server.status === "initializing";
            if (!hasContent && !shouldWriteEmptyState) {
                logger21.info(ctx, `Server "${server.serverIdentifier}" excluded from write: tools=${server.tools.length}, resources=${server.resources.length}, prompts=${server.prompts.length}, hasInstructions=${!!server.instructions}, status=${server.status}`);
                continue;
            }
            if (seenSanitizedIds.has(server.sanitizedId)) {
                logger21.warn(ctx, `Skipping server "${server.serverIdentifier}" \u2014 sanitizedId "${server.sanitizedId}" collides with another server`);
                continue;
            }
            seenSanitizedIds.add(server.sanitizedId);
            serversToWrite.push(server);
        }
        return serversToWrite;
    }
    mergeScopedRefreshWithCachedServerData(cachedServerData, refreshedServerData) {
        const tools = [
            ...refreshedServerData.tools
        ];
        if (this.shouldExposeVirtualMcpAuthToolForStatus(cachedServerData.serverIdentifier, cachedServerData.status) && !tools.some((tool)=>tool.toolName === MCP_AUTH_TOOL_NAME)) {
            const cachedAuthTool = cachedServerData.tools.find((tool)=>tool.toolName === MCP_AUTH_TOOL_NAME);
            if (cachedAuthTool !== void 0) {
                tools.push(cachedAuthTool);
            }
        }
        return {
            ...cachedServerData,
            ...refreshedServerData,
            tools,
            resources: cachedServerData.resources,
            prompts: cachedServerData.prompts,
            instructions: cachedServerData.instructions,
            status: cachedServerData.status,
            plugin: refreshedServerData.plugin ?? cachedServerData.plugin,
            marketplace: refreshedServerData.marketplace ?? cachedServerData.marketplace,
            pluginId: refreshedServerData.pluginId ?? cachedServerData.pluginId,
            marketplaceId: refreshedServerData.marketplaceId ?? cachedServerData.marketplaceId
        };
    }
    async refreshServersFromLease(ctx, leaseChangeEvent) {
        const logCtx = this.getLogContext(ctx);
        const uniqueServerIdentifiers = [
            ...new Set(leaseChangeEvent.serverIdentifiers ?? [])
        ];
        logger21.info(logCtx, `fetchAndWrite: refreshing ${uniqueServerIdentifiers.length} targeted servers`, {
            serverIdentifiers: uniqueServerIdentifiers
        });
        const tools = await this.getToolsForServers(ctx, uniqueServerIdentifiers);
        const instructions = await this.mcpLease.getInstructions(ctx).catch((err)=>{
            logger21.warn(logCtx, `getInstructions() threw during scoped refresh, defaulting to []: ${err}`);
            return [];
        });
        const clientLookups = await Promise.all(uniqueServerIdentifiers.map(async (serverIdentifier)=>{
            try {
                const client = await this.mcpLease.getClient(ctx, serverIdentifier);
                if (client === void 0) {
                    return {
                        serverIdentifier,
                        kind: "missing"
                    };
                }
                return {
                    serverIdentifier,
                    kind: "client",
                    client
                };
            } catch (error3) {
                logger21.warn(logCtx, `getClient("${serverIdentifier}") threw during scoped refresh, preserving cached data: ${error3}`);
                return {
                    serverIdentifier,
                    kind: "error",
                    error: error3
                };
            }
        }));
        const missingServerIdentifiers = clientLookups.filter((lookup3)=>lookup3.kind === "missing").map((lookup3)=>lookup3.serverIdentifier);
        let confirmedMissingServerIdentifiers = new Set();
        if (missingServerIdentifiers.length > 0) {
            const allClients = await this.mcpLease.getClients(ctx).catch((err)=>{
                logger21.warn(logCtx, `getClients() threw while confirming targeted server removal, preserving cached data: ${err}`);
                return void 0;
            });
            if (allClients !== void 0) {
                confirmedMissingServerIdentifiers = new Set(missingServerIdentifiers.filter((serverIdentifier)=>allClients[serverIdentifier] === void 0));
            }
        }
        const clientData = await Promise.all(clientLookups.filter((lookup3)=>lookup3.kind === "client").map(({ serverIdentifier, client })=>this.fetchClientDataForServer(ctx, serverIdentifier, client, {
                fetchInstructions: true
            })));
        const nextServerDataMap = new Map((this.cachedServerData ?? []).map((server)=>[
                server.serverIdentifier,
                server
            ]));
        const refreshedServerDataMap = this.buildServerDataMap(tools, clientData, instructions);
        const targetedSet = new Set(uniqueServerIdentifiers);
        const transientlyUnavailableServerIdentifiers = new Set(clientLookups.filter((lookup3)=>{
            if (lookup3.kind === "error") {
                return true;
            }
            return lookup3.kind === "missing" && !confirmedMissingServerIdentifiers.has(lookup3.serverIdentifier);
        }).map((lookup3)=>lookup3.serverIdentifier));
        for (const serverIdentifier of uniqueServerIdentifiers){
            const cachedServerData = nextServerDataMap.get(serverIdentifier);
            const refreshedServerData = refreshedServerDataMap.get(serverIdentifier);
            if (refreshedServerData !== void 0) {
                if (transientlyUnavailableServerIdentifiers.has(serverIdentifier) && cachedServerData !== void 0) {
                    nextServerDataMap.set(serverIdentifier, this.mergeScopedRefreshWithCachedServerData(cachedServerData, refreshedServerData));
                    logger21.warn(logCtx, `refreshServersFromLease: preserving cached metadata for "${serverIdentifier}" because the client was unavailable during targeted refresh`);
                    continue;
                }
                nextServerDataMap.set(serverIdentifier, refreshedServerData);
                continue;
            }
            if (confirmedMissingServerIdentifiers.has(serverIdentifier)) {
                nextServerDataMap.delete(serverIdentifier);
                continue;
            }
            logger21.warn(logCtx, `refreshServersFromLease: preserving cached data for "${serverIdentifier}" because targeted refresh returned no replacement`);
        }
        const leaseSanitizedIdMap = new Map(Array.from(nextServerDataMap.values()).map((server)=>[
                server.sanitizedId,
                server.serverIdentifier
            ]));
        for (const [id, fp] of this.cachedFingerprints){
            if (!targetedSet.has(id) && !nextServerDataMap.has(id)) {
                const sanitizedId = sanitizeServerName(id);
                leaseSanitizedIdMap.set(sanitizedId, id);
            }
        }
        const serversToWrite = this.buildServersToWrite(ctx, nextServerDataMap);
        await this.writeServerData(ctx, serversToWrite, leaseSanitizedIdMap);
        this.cachedServerData = serversToWrite;
        this.fireOnDidWrite(serversToWrite);
    }
    async fetchAndWrite(ctx, leaseChangeEvent) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource25(env_1, createSpan(ctx.withName("McpFileSystemWriter.fetchAndWrite")), false);
            const logCtx = this.getLogContext(ctx);
            try {
                if (this.cachedServerData !== void 0 && leaseChangeEvent !== void 0 && !isFullMcpLeaseInvalidation(leaseChangeEvent)) {
                    const targetedServerIdentifiers = [
                        ...new Set(leaseChangeEvent.serverIdentifiers ?? [])
                    ];
                    if (targetedServerIdentifiers.length > 0) {
                        await this.refreshServersFromLease(ctx, leaseChangeEvent);
                        return;
                    }
                }
                const [tools, instructions, clients] = await Promise.all([
                    this.mcpLease.getTools(ctx).catch((err)=>{
                        logger21.warn(logCtx, `getTools() threw, defaulting to []: ${err}`);
                        return [];
                    }),
                    this.mcpLease.getInstructions(ctx).catch(()=>[]),
                    this.mcpLease.getClients(ctx).catch((err)=>{
                        logger21.warn(logCtx, `getClients() threw, defaulting to {}: ${err}`);
                        return {};
                    })
                ]);
                const clientKeys = Object.keys(clients);
                logger21.info(logCtx, `fetchAndWrite: lease returned ${tools.length} tools across ${clientKeys.length} clients`);
                const clientEntries = Object.entries(clients);
                const clientDataPromises = clientEntries.map(([clientKey, client])=>this.fetchClientDataForServer(ctx, clientKey, client));
                const clientData = await Promise.all(clientDataPromises);
                const serverDataMap = this.buildServerDataMap(tools, clientData, instructions);
                const serversToWrite = this.buildServersToWrite(ctx, serverDataMap);
                const leaseSanitizedIdMap = new Map(Array.from(serverDataMap.values()).map((s3)=>[
                        s3.sanitizedId,
                        s3.serverIdentifier
                    ]));
                await this.writeServerData(ctx, serversToWrite, leaseSanitizedIdMap);
                this.cachedServerData = serversToWrite;
                this.fireOnDidWrite(serversToWrite);
            } catch (error3) {
                logger21.error(logCtx, "Error fetching/writing MCP state", error3);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources25(env_1);
        }
    }
    fireOnDidWrite(servers) {
        if (!this.onDidWrite) {
            return;
        }
        try {
            const descriptors = servers.map((server)=>({
                    serverIdentifier: server.serverIdentifier,
                    folderPath: server.folderPath,
                    tools: server.tools.map((tool)=>({
                            toolName: tool.toolName,
                            definitionPath: (0, import_node_path47.join)(server.folderPath, MCP_TOOLS_SUBDIR, `${sanitizeFileName(tool.toolName)}.json`)
                        }))
                }));
            this.onDidWrite(descriptors);
        } catch  {}
    }
    async writeServerData(ctx, servers, leaseSanitizedIdMap) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource25(env_2, createSpan(ctx.withName("McpFileSystemWriter.writeServerData")), false);
            const logCtx = this.getLogContext(ctx);
            const mcpsPath = (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR);
            await (0, import_promises26.mkdir)(mcpsPath, {
                recursive: true
            });
            const newFingerprints = new Map();
            for (const server of servers){
                try {
                    newFingerprints.set(server.serverIdentifier, serverFingerprint(server));
                } catch (error3) {
                    logger21.error(logCtx, "Error computing server fingerprint, will force write", error3, {
                        serverIdentifier: server.serverIdentifier
                    });
                    newFingerprints.set(server.serverIdentifier, `__error_${Date.now()}_${Math.random()}`);
                }
            }
            const toWrite = [];
            for (const server of servers){
                const oldFp = this.cachedFingerprints.get(server.serverIdentifier);
                const newFp = newFingerprints.get(server.serverIdentifier);
                if (oldFp !== newFp) {
                    toWrite.push(server);
                    if (oldFp !== void 0) {
                        logger21.info(logCtx, `Server "${server.serverIdentifier}" fingerprint changed: tools=${server.tools.length}, status=${server.status}`);
                    }
                }
            }
            for (const server of servers){
                if (toWrite.includes(server)) {
                    continue;
                }
                try {
                    await (0, import_promises26.stat)((0, import_node_path47.join)(mcpsPath, server.sanitizedId));
                } catch  {
                    logger21.info(logCtx, `Server "${server.serverIdentifier}" directory missing on disk, forcing write`);
                    toWrite.push(server);
                }
            }
            const toRemove = new Set();
            for (const [id] of this.cachedFingerprints){
                if (!newFingerprints.has(id)) {
                    const old = this.cachedServerData?.find((s3)=>s3.serverIdentifier === id);
                    const sanitizedId = old?.sanitizedId ?? sanitizeServerName(id);
                    if (!leaseSanitizedIdMap.has(sanitizedId)) {
                        logger21.info(logCtx, `Server "${id}" (sanitized="${sanitizedId}") left the lease, scheduling directory removal`);
                        toRemove.add(sanitizedId);
                    } else {
                        logger21.info(logCtx, `Server "${id}" (sanitized="${sanitizedId}") still in lease but excluded from write, preserving directory`);
                        newFingerprints.set(id, this.cachedFingerprints.get(id));
                    }
                }
            }
            const coldStartReconcile = this.cachedServerData === void 0;
            if (coldStartReconcile) {
                try {
                    const existingEntries = await (0, import_promises26.readdir)(mcpsPath);
                    const liveEntries = new Set(existingEntries.filter((e)=>!e.endsWith(STAGING_SUFFIX) && !e.endsWith(PREV_SUFFIX)));
                    for (const entry of existingEntries){
                        if (entry.endsWith(STAGING_SUFFIX)) {
                            await (0, import_promises26.rm)((0, import_node_path47.join)(mcpsPath, entry), {
                                recursive: true,
                                force: true
                            });
                        } else if (entry.endsWith(PREV_SUFFIX)) {
                            const liveName = entry.slice(0, -PREV_SUFFIX.length);
                            if (!liveEntries.has(liveName)) {
                                try {
                                    await (0, import_promises26.rename)((0, import_node_path47.join)(mcpsPath, entry), (0, import_node_path47.join)(mcpsPath, liveName));
                                    liveEntries.add(liveName);
                                } catch  {
                                    await (0, import_promises26.rm)((0, import_node_path47.join)(mcpsPath, entry), {
                                        recursive: true,
                                        force: true
                                    }).catch(()=>{});
                                }
                            } else {
                                await (0, import_promises26.rm)((0, import_node_path47.join)(mcpsPath, entry), {
                                    recursive: true,
                                    force: true
                                });
                            }
                        }
                    }
                    for (const liveEntry of liveEntries){
                        if (!leaseSanitizedIdMap.has(liveEntry)) {
                            toRemove.add(liveEntry);
                        } else {
                            const serverIdentifier = leaseSanitizedIdMap.get(liveEntry);
                            if (!newFingerprints.has(serverIdentifier)) {
                                newFingerprints.set(serverIdentifier, `__preserved_${liveEntry}`);
                            }
                        }
                    }
                } catch (error3) {
                    logger21.error(logCtx, "Error clearing mcps directory", error3);
                }
            }
            const toRemoveIds = Array.from(toRemove);
            if (toWrite.length > 0 || toRemove.size > 0) {
                const changedServers = toWrite.map((server)=>({
                        serverIdentifier: server.serverIdentifier,
                        sanitizedId: server.sanitizedId,
                        toolCount: server.tools.length
                    }));
                logger21.info(logCtx, `Incremental write: ${toWrite.length} changed, ${toRemove.size} removed, ${servers.length - toWrite.length} unchanged`, {
                    changedServerCount: toWrite.length,
                    changedServers,
                    removedServerCount: toRemove.size,
                    removedServerSanitizedIds: toRemoveIds,
                    unchangedServerCount: servers.length - toWrite.length,
                    totalServerCount: servers.length,
                    leaseServerCount: leaseSanitizedIdMap.size,
                    coldStartReconcile,
                    projectDirHash: (0, import_node_crypto18.createHash)("sha256").update(this.projectDir).digest("hex")
                }, {
                    includeStructuredLogs: true
                });
            }
            const writeResults = await Promise.allSettled(toWrite.map((server)=>this.writeServerAtomic(ctx, server, mcpsPath)));
            for(let i = 0; i < toWrite.length; i++){
                const result = writeResults[i];
                if (result.status === "rejected") {
                    const server = toWrite[i];
                    const oldFp = this.cachedFingerprints.get(server.serverIdentifier);
                    if (oldFp !== void 0) {
                        newFingerprints.set(server.serverIdentifier, oldFp);
                    } else {
                        newFingerprints.delete(server.serverIdentifier);
                    }
                    logger21.error(ctx, "Error writing server directory", result.reason, {
                        serverIdentifier: server.serverIdentifier,
                        sanitizedId: server.sanitizedId
                    }, {
                        includeStructuredLogs: true
                    });
                }
            }
            const removalResults = await Promise.allSettled(toRemoveIds.map((sanitizedId)=>(0, import_promises26.rm)((0, import_node_path47.join)(mcpsPath, sanitizedId), {
                    recursive: true,
                    force: true
                })));
            for(let i = 0; i < removalResults.length; i++){
                const removalResult = removalResults[i];
                if (removalResult.status === "rejected") {
                    const sanitizedId = toRemoveIds[i];
                    logger21.error(ctx, "Error removing server directory", removalResult.reason, {
                        sanitizedId,
                        removalIndex: i,
                        removalAttemptCount: removalResults.length,
                        removedServerCount: toRemoveIds.length,
                        removedServerSanitizedIds: toRemoveIds,
                        changedServerCount: toWrite.length,
                        unchangedServerCount: servers.length - toWrite.length,
                        totalServerCount: servers.length
                    }, {
                        includeStructuredLogs: true
                    });
                }
            }
            this.cachedFingerprints = newFingerprints;
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources25(env_2);
        }
    }
    async writeServerAtomic(ctx, server, mcpsPath) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource25(env_3, createSpan(ctx.withName("McpFileSystemWriter.writeServerAtomic")), false);
            const stagingName = `${server.sanitizedId}${STAGING_SUFFIX}`;
            const prevName = `${server.sanitizedId}${PREV_SUFFIX}`;
            const stagingDir = (0, import_node_path47.join)(mcpsPath, stagingName);
            const prevDir = (0, import_node_path47.join)(mcpsPath, prevName);
            const liveDir = (0, import_node_path47.join)(mcpsPath, server.sanitizedId);
            await (0, import_promises26.rm)(stagingDir, {
                recursive: true,
                force: true
            });
            try {
                await (0, import_promises26.rename)(prevDir, liveDir);
            } catch  {
                await (0, import_promises26.rm)(prevDir, {
                    recursive: true,
                    force: true
                });
            }
            await this.writeServerDirectory(ctx, server, {
                basePath: mcpsPath,
                dirName: stagingName
            });
            try {
                try {
                    await (0, import_promises26.rename)(liveDir, prevDir);
                } catch  {}
                await (0, import_promises26.rename)(stagingDir, liveDir);
            } catch (error3) {
                logger21.error(ctx, "Per-server swap failed", error3, {
                    serverIdentifier: server.serverIdentifier,
                    sanitizedId: server.sanitizedId
                }, {
                    includeStructuredLogs: true
                });
                try {
                    await (0, import_promises26.rename)(prevDir, liveDir);
                } catch  {}
                await (0, import_promises26.rm)(stagingDir, {
                    recursive: true,
                    force: true
                });
                throw error3;
            }
            await (0, import_promises26.rm)(prevDir, {
                recursive: true,
                force: true
            }).catch(()=>{});
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources25(env_3);
        }
    }
    async writeServerDirectory(ctx, server, opts) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource25(env_4, createSpan(ctx.withName("McpFileSystemWriter.writeServerDirectory")), false);
            const serverDir = (0, import_node_path47.join)(opts.basePath, opts.dirName ?? server.sanitizedId);
            await (0, import_promises26.mkdir)(serverDir, {
                recursive: true
            });
            if (server.tools.length > 0) {
                const toolsDir = (0, import_node_path47.join)(serverDir, MCP_TOOLS_SUBDIR);
                await (0, import_promises26.mkdir)(toolsDir, {
                    recursive: true
                });
                for (const tool of server.tools){
                    const safeToolName = sanitizeFileName(tool.toolName);
                    const toolPath = (0, import_node_path47.join)(toolsDir, `${safeToolName}.json`);
                    const content = buildMcpToolFileContent(tool);
                    await (0, import_promises26.writeFile)(toolPath, JSON.stringify(content, null, 2));
                }
            }
            if (server.resources.length > 0) {
                const resourcesDir = (0, import_node_path47.join)(serverDir, MCP_RESOURCES_SUBDIR);
                await (0, import_promises26.mkdir)(resourcesDir, {
                    recursive: true
                });
                for (const resource of server.resources){
                    const resourceName = resource.name || resource.uri.replace(/[^a-zA-Z0-9_-]/g, "_");
                    const safeResourceName = sanitizeFileName(resourceName);
                    const resourcePath = (0, import_node_path47.join)(resourcesDir, `${safeResourceName}.json`);
                    const content = {
                        uri: resource.uri,
                        name: resource.name,
                        description: resource.description,
                        mimeType: resource.mimeType
                    };
                    await (0, import_promises26.writeFile)(resourcePath, JSON.stringify(content, null, 2));
                }
            }
            if (server.prompts.length > 0) {
                const promptsDir = (0, import_node_path47.join)(serverDir, MCP_PROMPTS_SUBDIR);
                await (0, import_promises26.mkdir)(promptsDir, {
                    recursive: true
                });
                for (const prompt of server.prompts){
                    const safePromptName = sanitizeFileName(prompt.name);
                    const promptPath = (0, import_node_path47.join)(promptsDir, `${safePromptName}.json`);
                    const content = {
                        name: prompt.name,
                        description: prompt.description,
                        arguments: prompt.arguments
                    };
                    await (0, import_promises26.writeFile)(promptPath, JSON.stringify(content, null, 2));
                }
            }
            if (server.instructions && server.instructions.trim().length > 0) {
                const instructionsPath = (0, import_node_path47.join)(serverDir, INSTRUCTIONS_FILENAME);
                await (0, import_promises26.writeFile)(instructionsPath, server.instructions.trim());
            }
            if (server.status === "error" || server.status === "needsAuth") {
                const statusPath = (0, import_node_path47.join)(serverDir, STATUS_FILENAME);
                const statusMessage = server.status === "error" ? this.getErrorStatusMessage() : this.getNeedsAuthStatusMessageForWrite(server.serverIdentifier);
                await (0, import_promises26.writeFile)(statusPath, statusMessage);
            }
            const metadataPath = (0, import_node_path47.join)(serverDir, SERVER_METADATA_FILENAME);
            const metadataContent = {
                serverIdentifier: server.serverIdentifier,
                serverName: server.serverName
            };
            await (0, import_promises26.writeFile)(metadataPath, JSON.stringify(metadataContent, null, 2));
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources25(env_4);
        }
    }
    async getMcpFileSystemOptions(ctx, options2) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            if (this.disposed) {
                return void 0;
            }
            const _span = __addDisposableResource25(env_5, createSpan(ctx.withName("McpFileSystemWriter.getMcpFileSystemOptions")), false);
            const logCtx = this.getLogContext(ctx);
            const writeTimedOut = await this.ensureWritesSettled(ctx, options2?.timeoutMs);
            if (this.snapshotProvider && !writeTimedOut) {
                return this.buildOptionsFromSnapshots(ctx);
            }
            if (this.snapshotProvider && writeTimedOut) {
                logger21.warn(logCtx, "Snapshot mode write barrier timed out; falling back to cached descriptors", {
                    timeoutMs: options2?.timeoutMs
                }, {
                    includeStructuredLogs: true
                });
            }
            const servers = this.cachedServerData ?? [];
            const mcpDescriptors = servers.map((server)=>{
                const tools = server.tools.map((tool)=>{
                    const safeToolName = sanitizeFileName(tool.toolName);
                    const toolFilePath = (0, import_node_path47.join)(server.folderPath, MCP_TOOLS_SUBDIR, `${safeToolName}.json`);
                    return new McpToolDescriptor({
                        toolName: tool.toolName,
                        definitionPath: toolFilePath,
                        ...toolAnnotationsJsonField(tool.annotations)
                    });
                });
                return new McpDescriptor({
                    serverIdentifier: server.serverIdentifier,
                    serverName: server.serverName,
                    plugin: server.plugin,
                    marketplace: server.marketplace,
                    pluginDbId: server.pluginId,
                    marketplaceId: server.marketplaceId,
                    folderPath: server.folderPath,
                    serverUseInstructions: server.instructions,
                    tools
                });
            });
            this.checkDescriptorsVsFilesystem(ctx, mcpDescriptors, "workbench_lease");
            return new McpFileSystemOptions({
                enabled: true,
                workspaceProjectDir: this.projectDir,
                mcpDescriptors
            });
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources25(env_5);
        }
    }
    async ensureWritesSettled(ctx, timeoutMs) {
        const logCtx = this.getLogContext(ctx);
        const hadPendingDebounce = this.debounceTimer !== void 0;
        if (this.debounceTimer !== void 0) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = void 0;
            this.scheduleWrite(ctx, this.takePendingLeaseChangeEvent());
        }
        if (hadPendingDebounce) {
            logger21.info(logCtx, "getMcpFileSystemOptions force-fired pending debounce");
        }
        if (!this.writePromise) {
            return false;
        }
        if (timeoutMs !== void 0) {
            let timedOut = false;
            let timer2;
            try {
                await Promise.race([
                    this.writePromise,
                    new Promise((resolve36)=>{
                        timer2 = setTimeout(()=>{
                            timedOut = true;
                            resolve36();
                        }, timeoutMs);
                    })
                ]);
            } catch (error3) {
                logger21.error(logCtx, "Error waiting for pending write to complete", error3);
            } finally{
                clearTimeout(timer2);
            }
            if (timedOut) {
                logger21.warn(logCtx, `getMcpFileSystemOptions timed out after ${timeoutMs}ms waiting for write; returning stale cache`);
            }
            return timedOut;
        }
        try {
            await this.writePromise;
        } catch (error3) {
            logger21.error(logCtx, "Error waiting for pending write to complete", error3);
        }
        return false;
    }
    async buildOptionsFromSnapshots(ctx) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource25(env_6, createSpan(ctx.withName("McpFileSystemWriter.buildOptionsFromSnapshots")), false);
            const logCtx = this.getLogContext(ctx);
            const startMs = Date.now();
            const snapshots = await this.snapshotProvider.getAllSnapshots(ctx);
            const mcpDir = (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR);
            const mcpDescriptors = snapshots.filter((s3)=>s3.tools.length > 0 || s3.resources.length > 0 || s3.prompts.length > 0 || s3.instructions !== void 0 || this.shouldExposeVirtualMcpAuthToolForStatus(s3.serverIdentifier, s3.status) || s3.status === "needsAuth" || s3.status === "error").map((snapshot)=>{
                const sanitizedId = sanitizeServerName(snapshot.serverIdentifier);
                const folderPath = (0, import_node_path47.join)(mcpDir, sanitizedId);
                const tools = snapshot.tools.map((tool)=>{
                    const safeToolName = sanitizeFileName(tool.name);
                    return new McpToolDescriptor({
                        toolName: tool.name,
                        definitionPath: (0, import_node_path47.join)(folderPath, MCP_TOOLS_SUBDIR, `${safeToolName}.json`),
                        ...toolAnnotationsJsonField(tool.annotations)
                    });
                });
                if (this.shouldExposeVirtualMcpAuthToolForStatus(snapshot.serverIdentifier, snapshot.status) && !snapshot.tools.some((t)=>t.name === MCP_AUTH_TOOL_NAME)) {
                    const safeToolName = sanitizeFileName(MCP_AUTH_TOOL_NAME);
                    tools.push(new McpToolDescriptor({
                        toolName: MCP_AUTH_TOOL_NAME,
                        definitionPath: (0, import_node_path47.join)(folderPath, MCP_TOOLS_SUBDIR, `${safeToolName}.json`)
                    }));
                }
                return new McpDescriptor({
                    serverIdentifier: snapshot.serverIdentifier,
                    serverName: snapshot.serverName,
                    plugin: snapshot.plugin,
                    marketplace: snapshot.marketplace,
                    pluginDbId: snapshot.pluginId,
                    marketplaceId: snapshot.marketplaceId,
                    folderPath,
                    serverUseInstructions: snapshot.instructions,
                    tools
                });
            });
            const totalToolCount = mcpDescriptors.reduce((sum, d)=>sum + d.tools.length, 0);
            logger21.info(logCtx, `buildOptionsFromSnapshots completed in ${Date.now() - startMs}ms: ${snapshots.length} snapshots, ${mcpDescriptors.length} descriptors, ${totalToolCount} tools`);
            this.checkDescriptorsVsFilesystem(ctx, mcpDescriptors, "snapshot");
            return new McpFileSystemOptions({
                enabled: true,
                workspaceProjectDir: this.projectDir,
                mcpDescriptors
            });
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources25(env_6);
        }
    }
    async waitForPendingWrites() {
        if (this.debounceTimer !== void 0) {
            await new Promise((resolve36)=>{
                const checkTimer = ()=>{
                    if (this.debounceTimer === void 0) {
                        resolve36();
                    } else {
                        setTimeout(checkTimer, 10);
                    }
                };
                checkTimer();
            });
        }
        if (this.writePromise) {
            try {
                await this.writePromise;
            } catch  {}
        }
    }
    getCachedServerData() {
        return this.cachedServerData;
    }
    checkDescriptorsVsFilesystem(ctx, descriptors, source) {
        const logCtx = this.getLogContext(ctx);
        const now2 = Date.now();
        if (now2 - this.lastDivergenceCheckMs < _McpFileSystemWriter.DIVERGENCE_CHECK_COOLDOWN_MS) {
            return;
        }
        this.lastDivergenceCheckMs = now2;
        void this._checkDescriptorsVsFilesystemAsync(ctx, descriptors, source).catch((err)=>{
            logger21.warn(logCtx, "Divergence check failed", err);
        });
    }
    async _checkDescriptorsVsFilesystemAsync(ctx, descriptors, source) {
        const logCtx = this.getLogContext(ctx);
        const mcpsPath = (0, import_node_path47.join)(this.projectDir, MCPS_SUBDIR);
        const expectedServerIds = new Set();
        const expectedToolCounts = new Map();
        for (const descriptor of descriptors){
            const sanitizedId = sanitizeServerName(descriptor.serverIdentifier);
            expectedServerIds.add(sanitizedId);
            expectedToolCounts.set(sanitizedId, descriptor.tools.length);
        }
        let actualDirs = [];
        try {
            actualDirs = await (0, import_promises26.readdir)(mcpsPath);
            actualDirs = actualDirs.filter((d)=>!d.endsWith(STAGING_SUFFIX) && !d.endsWith(PREV_SUFFIX));
        } catch (err) {
            if (err?.code !== "ENOENT") {
                throw err;
            }
        }
        const actualServerIds = new Set(actualDirs);
        let synced = true;
        let serversMissing = 0;
        let serversStale = 0;
        let toolMismatches = 0;
        const serversBucket = configuredServersBucket(expectedServerIds.size);
        for (const expected of expectedServerIds){
            if (!actualServerIds.has(expected)) {
                synced = false;
                serversMissing++;
                mcpFilesystemDivergence.increment(ctx, 1, this.getMetricTags({
                    divergence_type: "server_missing",
                    mcp_source: source,
                    configured_servers: serversBucket
                }));
                logger21.warn(logCtx, "Divergence detected: server missing from filesystem", {
                    mcpFileSystemMeta: {
                        divergenceType: "server_missing",
                        serverId: expected,
                        source,
                        configuredServers: expectedServerIds.size,
                        configuredServersBucket: serversBucket
                    }
                }, {
                    includeStructuredLogs: true
                });
            }
        }
        for (const actual of actualServerIds){
            if (!expectedServerIds.has(actual)) {
                synced = false;
                serversStale++;
                mcpFilesystemDivergence.increment(ctx, 1, this.getMetricTags({
                    divergence_type: "server_stale",
                    mcp_source: source,
                    configured_servers: serversBucket
                }));
            }
        }
        for (const serverId of expectedServerIds){
            if (!actualServerIds.has(serverId)) {
                continue;
            }
            const expectedCount = expectedToolCounts.get(serverId) ?? 0;
            const toolsPath = (0, import_node_path47.join)(mcpsPath, serverId, MCP_TOOLS_SUBDIR);
            let actualCount = 0;
            try {
                const files = await (0, import_promises26.readdir)(toolsPath);
                actualCount = files.filter((f2)=>f2.endsWith(".json")).length;
            } catch  {}
            if (actualCount !== expectedCount) {
                synced = false;
                toolMismatches++;
                mcpFilesystemDivergence.increment(ctx, 1, this.getMetricTags({
                    divergence_type: "tool_count_mismatch",
                    mcp_source: source,
                    configured_servers: serversBucket
                }));
                logger21.warn(logCtx, "Divergence detected: tool count mismatch", {
                    mcpFileSystemMeta: {
                        divergenceType: "tool_count_mismatch",
                        serverId,
                        expected: expectedCount,
                        actual: actualCount,
                        source,
                        configuredServers: expectedServerIds.size,
                        configuredServersBucket: serversBucket
                    }
                }, {
                    includeStructuredLogs: true
                });
            }
        }
        mcpFilesystemSyncCheck.increment(ctx, 1, this.getMetricTags({
            synced: String(synced),
            mcp_source: source,
            configured_servers: serversBucket
        }));
        mcpFilesystemSyncExpectedServers.gauge(ctx, expectedServerIds.size, this.getMetricTags({
            mcp_source: source
        }));
        mcpFilesystemSyncActualServers.gauge(ctx, actualServerIds.size, this.getMetricTags({
            mcp_source: source
        }));
        mcpFilesystemSyncServersMissing.gauge(ctx, serversMissing, this.getMetricTags({
            mcp_source: source
        }));
        mcpFilesystemSyncToolMismatches.gauge(ctx, toolMismatches, this.getMetricTags({
            mcp_source: source
        }));
        logger21.info(logCtx, "MCP filesystem sync check", {
            mcpFileSystemMeta: {
                synced,
                expectedServers: expectedServerIds.size,
                actualServers: actualServerIds.size,
                serversMissing,
                serversStale,
                toolMismatches,
                source,
                configuredServers: expectedServerIds.size,
                configuredServersBucket: serversBucket
            }
        }, {
            includeStructuredLogs: true
        });
        if (!synced) {
            logger21.warn(logCtx, "MCP filesystem divergence summary", {
                mcpFileSystemMeta: {
                    synced,
                    expectedServers: expectedServerIds.size,
                    actualServers: actualServerIds.size,
                    serversMissing,
                    serversStale,
                    toolMismatches,
                    source,
                    configuredServers: expectedServerIds.size,
                    configuredServersBucket: serversBucket
                }
            }, {
                includeStructuredLogs: true
            });
        }
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        if (this.debounceTimer !== void 0) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = void 0;
        }
        if (this.leaseChangeDisposable) {
            this.leaseChangeDisposable.dispose();
            this.leaseChangeDisposable = void 0;
        }
        this.cachedServerData = void 0;
        this.cachedFingerprints.clear();
    }
};
McpFileSystemWriter.DIVERGENCE_CHECK_COOLDOWN_MS = 1e4;

}
