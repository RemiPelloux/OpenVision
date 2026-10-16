import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { CURSOR_DYNAMIC_TOOLS_NAMESPACE } from "../../../../agent-exec/dist/mcp.js";
import { init_node2 } from "../../../../agent-exec/dist/node.js";
import { writeExecutorResource } from "../../../../agent-exec/dist/write.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_project_workspace_mcp_tools } from "../../configs/project-workspace-mcp-tools.js";
import { CustomToolCallError, init_common9, withSafeParsedArgs } from "../common.js";
import { ToolErrorClassification, init_core5 } from "../core.js";
import { init_builtin_tools } from "./builtin-tools.js";
import { TRUNCATED_DESCRIPTION_SUFFIX, init_meta_tool_names } from "./meta-tool-names.js";
import { GET_MCP_TOOLS_FAILURE_REASONS, init_mcp_metrics } from "../../utils/mcp-metrics.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { compileSearchRegex, createCallArgs, createErrorResult, createSuccessResult, createToolCallProto2, createZodAgentTool, descriptorToServerMetadata, descriptorToServerPayload, emitGetMcpToolsMetrics, getGetMcpToolsMode, getRequiredToolName, isProjectWorkspaceConversation, isProjectWorkspaceMutationMcpTool, isReservedDynamicToolsNamespace, maybeWriteToFile, mergeBuiltinToolsServer, quotedOrList, renderResult, reportMcpMetaToolFailure, resolveMcpServersForExecution, sanitizeAndTruncateDescription, serverNotFoundError, toModelFacingSearchResult, toModelFacingServerPayload, toModelFacingSingleToolPayload, validateArgs } from "../../../../mcp_sandbox_policy_exports.js";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_index_esm } from "../../../../node_modules/.pnpm/re2js@1.2.2/node_modules/re2js/build/index.esm.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_get_mcp_tools_tool_pb } from "../../../../proto/dist/generated/agent/v1/get_mcp_tools_tool_pb.js";
import { McpRefreshPolicy, init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { McpDescriptor, init_mcp_pb } from "../../../../proto/dist/generated/agent/v1/mcp_pb.js";
var __addDisposableResource54, __disposeResources54, DEFAULT_GET_MCP_TOOLS_NAME, MCP_AUTH_TOOL_NAME2, MAX_DESCRIPTION_LENGTH2, CONTROL_CHARACTERS_REGEX, FILE_OUTPUT_THRESHOLD_BYTES, MAX_REGEX_PATTERN_LENGTH, MCP_AUTH_INPUT_SCHEMA2, createGetMcpToolsTool;
export { CONTROL_CHARACTERS_REGEX, DEFAULT_GET_MCP_TOOLS_NAME, FILE_OUTPUT_THRESHOLD_BYTES, MAX_DESCRIPTION_LENGTH2, MAX_REGEX_PATTERN_LENGTH, MCP_AUTH_INPUT_SCHEMA2, MCP_AUTH_TOOL_NAME2, __addDisposableResource54, __disposeResources54, createGetMcpToolsTool };
var __wakaru_init_get_mcp_tools_initialized = false;
export function init_get_mcp_tools() {
if (__wakaru_init_get_mcp_tools_initialized) return;
__wakaru_init_get_mcp_tools_initialized = true;
"use strict";
init_dist8();
init_node2();
init_dist26();
init_dist();
init_agent_pb();
init_get_mcp_tools_tool_pb();
init_mcp_exec_pb();
init_mcp_pb();
init_esm2();
init_index_esm();
init_zod();
init_project_workspace_mcp_tools();
init_mcp_metrics();
init_common9();
init_core5();
init_builtin_tools();
init_meta_tool_names();
__addDisposableResource54 = function(env, value, async) {
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
__disposeResources54 = (function(SuppressedError2) {
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
DEFAULT_GET_MCP_TOOLS_NAME = "GetMcpTools";
MCP_AUTH_TOOL_NAME2 = "mcp_auth";
MAX_DESCRIPTION_LENGTH2 = 200;
CONTROL_CHARACTERS_REGEX = /[\u0000-\u001F\u007F]/g;
FILE_OUTPUT_THRESHOLD_BYTES = 12e3;
MAX_REGEX_PATTERN_LENGTH = 256;
MCP_AUTH_INPUT_SCHEMA2 = {
    type: "object",
    properties: {},
    additionalProperties: false
};
createGetMcpToolsTool = (mcpMetaToolOptions, options2)=>{
    const writeExecutor = options2?.resourceAccessor?.get(writeExecutorResource);
    const projectDir = options2?.projectDir;
    const useDynamicToolNamespaces = options2?.dynamicToolRegistry !== void 0;
    const getMcpToolsToolName = options2?.toolName ?? DEFAULT_GET_MCP_TOOLS_NAME;
    const snapshotDescriptors = mcpMetaToolOptions.mcpDescriptors;
    const allowInteractiveMcpAuth = options2?.allowInteractiveMcpAuth === true;
    const dynamicToolRegistry = options2?.dynamicToolRegistry;
    const omitBuiltinToolNamesFromDescription = options2?.omitBuiltinToolNamesFromDescription === true;
    const isMcpToolBlocked = options2?.isMcpToolBlocked;
    const dropBlockedTools = (servers, isBlocked)=>{
        return servers.map((server)=>{
            const filteredTools = server.descriptor.tools.filter((tool)=>!isBlocked({
                    serverIdentifier: server.descriptor.serverIdentifier,
                    toolName: tool.toolName
                }));
            if (filteredTools.length === server.descriptor.tools.length) {
                return server;
            }
            return {
                ...server,
                descriptor: new McpDescriptor({
                    ...server.descriptor,
                    tools: filteredTools
                })
            };
        });
    };
    const serverField = external_exports.string().optional().describe("MCP server identifier to inspect.");
    const namespaceField = external_exports.string().optional().describe("Dynamic namespace to inspect, e.g. an MCP server.");
    const serverToolNameField = external_exports.string().optional().describe("Tool name within the server. Requires server to be set.");
    const namespaceToolNameField = external_exports.string().optional().describe("Tool name within the namespace. Requires namespace to be set.");
    const serverPatternField = external_exports.string().optional().describe(`RE2 regex pattern to search server and tool names (max ${MAX_REGEX_PATTERN_LENGTH} chars). Optionally combine with server to scope the search.`);
    const namespacePatternField = external_exports.string().optional().describe(`RE2 regex pattern to search namespace and tool names (max ${MAX_REGEX_PATTERN_LENGTH} chars). Optionally combine with namespace to scope the search.`);
    const serverParametersSchema = external_exports.object({
        server: serverField,
        toolName: serverToolNameField,
        pattern: serverPatternField
    });
    const namespaceParametersSchema = external_exports.object({
        namespace: namespaceField,
        toolName: namespaceToolNameField,
        pattern: namespacePatternField
    });
    const execute = async (parentCtx, interactionHandler, args, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource54(env_1, createSpan(parentCtx.withName("getMcpToolsExecute")), false);
            const startTime = Date.now();
            const mode = getGetMcpToolsMode(args);
            const emitSuccessMetrics = (ctx, result, dims)=>{
                const durationMs2 = Date.now() - startTime;
                const responseBytes = result.result.case === "success" ? Buffer.byteLength(result.result.value.content, "utf8") : 0;
                emitGetMcpToolsMetrics(ctx, {
                    mode,
                    durationMs: durationMs2,
                    success: true,
                    resultCount: dims.resultCount,
                    responseBytes,
                    payloadBytes: dims.payloadBytes,
                    wroteToFile: dims.wroteToFile
                });
            };
            const emitErrorMetrics = (ctx, failureReason, error3)=>{
                const durationMs2 = Date.now() - startTime;
                emitGetMcpToolsMetrics(ctx, {
                    mode,
                    durationMs: durationMs2,
                    success: false,
                    failureReason
                });
                if (error3 !== void 0) {
                    reportMcpMetaToolFailure(ctx, error3, {
                        tool: getMcpToolsToolName,
                        failureReason,
                        retryable: false,
                        mode,
                        durationMs: durationMs2
                    });
                }
            };
            try {
                validateArgs(args, useDynamicToolNamespaces);
            } catch (error3) {
                emitErrorMetrics(spanCtxt.ctx, GET_MCP_TOOLS_FAILURE_REASONS.INVALID_ARGS, error3);
                throw error3;
            }
            const baseArgs = createCallArgs(meta.toolCallId, args);
            const baseToolCall = createToolCallProto2(baseArgs);
            return await interactionHandler.executeToolCall(spanCtxt.ctx, baseToolCall, meta.toolCallId, async (ctx)=>{
                const restrictProjectWorkspace = await isProjectWorkspaceConversation(ctx, meta.stateHandler);
                const isBlocked = (tool2)=>isMcpToolBlocked?.(tool2) === true || restrictProjectWorkspace && isProjectWorkspaceMutationMcpTool(tool2);
                const requestsBuiltinNamespace = args.server !== void 0 && dynamicToolRegistry !== void 0 && !dynamicToolRegistry.isEmpty() && isReservedDynamicToolsNamespace(args.server);
                const resolvedServers = requestsBuiltinNamespace ? [] : dropBlockedTools((await resolveMcpServersForExecution(ctx, options2?.resourceAccessor, snapshotDescriptors, allowInteractiveMcpAuth, args.server !== void 0 ? [
                    args.server
                ] : [])).servers, isBlocked);
                let servers = mergeBuiltinToolsServer(resolvedServers, dynamicToolRegistry);
                let discoveryMissRefreshed = false;
                const refreshScopedDiscoveryOnce = async ()=>{
                    if (discoveryMissRefreshed || args.server === void 0 || options2?.resourceAccessor === void 0 || requestsBuiltinNamespace) {
                        return false;
                    }
                    discoveryMissRefreshed = true;
                    const refreshed = await resolveMcpServersForExecution(ctx, options2.resourceAccessor, snapshotDescriptors, allowInteractiveMcpAuth, [
                        args.server
                    ], McpRefreshPolicy.FORCE_IF_MISSING);
                    if (!refreshed.live) {
                        return false;
                    }
                    servers = mergeBuiltinToolsServer(dropBlockedTools(refreshed.servers, isBlocked), dynamicToolRegistry);
                    return true;
                };
                if (args.server !== void 0 && servers.some((server)=>server.descriptor.serverIdentifier === args.server)) {
                    spanCtxt.span.setAttribute("serverName", args.server);
                }
                if (args.pattern !== void 0 && args.toolName === void 0) {
                    let regex;
                    try {
                        regex = compileSearchRegex(args.pattern);
                    } catch (error3) {
                        emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.INVALID_REGEX, error3);
                        throw error3;
                    }
                    const collectSearchMatches = ()=>{
                        let serversToSearch = servers;
                        if (args.server !== void 0) {
                            const resolvedServer2 = servers.find((server)=>server.descriptor.serverIdentifier === args.server);
                            if (resolvedServer2 === void 0) {
                                return [];
                            }
                            serversToSearch = [
                                resolvedServer2
                            ];
                        }
                        const matches2 = [];
                        for (const server of serversToSearch){
                            const descriptor = server.descriptor;
                            const serverMetadata = descriptorToServerMetadata(server);
                            const serverMatches = regex.test(descriptor.serverIdentifier);
                            const matchingTools = descriptor.tools.filter((tool2)=>serverMatches || regex.test(tool2.toolName));
                            if (serverMatches) {
                                matches2.push({
                                    server: serverMetadata.server,
                                    description: serverMetadata.serverDescription,
                                    serverStatus: serverMetadata.serverStatus,
                                    serverError: serverMetadata.serverError
                                });
                            }
                            for (const tool2 of matchingTools){
                                const row = {
                                    server: descriptor.serverIdentifier,
                                    tool: tool2.toolName,
                                    description: sanitizeAndTruncateDescription(tool2.description)
                                };
                                if (serverMetadata.serverStatus !== void 0 && serverMetadata.serverStatus !== "ready" && !serverMatches) {
                                    row.serverStatus = serverMetadata.serverStatus;
                                    row.serverError = serverMetadata.serverError;
                                }
                                matches2.push(row);
                            }
                        }
                        matches2.sort((a, b2)=>a.server === b2.server ? (a.tool ?? "").localeCompare(b2.tool ?? "") : a.server.localeCompare(b2.server));
                        return matches2;
                    };
                    let matches = collectSearchMatches();
                    if (args.server !== void 0 && matches.length === 0 && await refreshScopedDiscoveryOnce()) {
                        matches = collectSearchMatches();
                    }
                    if (args.server !== void 0 && !servers.some((server)=>server.descriptor.serverIdentifier === args.server)) {
                        const availableServers = servers.map((server)=>server.descriptor.serverIdentifier).sort();
                        const error3 = serverNotFoundError(args.server, availableServers, useDynamicToolNamespaces);
                        emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.SERVER_NOT_FOUND, error3);
                        throw error3;
                    }
                    const preparedResult = await maybeWriteToFile(ctx, writeExecutor, projectDir, meta.toolCallId, {
                        mode: "search",
                        pattern: args.pattern,
                        matches: matches.map((match2)=>toModelFacingSearchResult(match2, useDynamicToolNamespaces))
                    });
                    emitSuccessMetrics(ctx, preparedResult.result, {
                        resultCount: matches.length,
                        payloadBytes: preparedResult.payloadBytes,
                        wroteToFile: preparedResult.wroteToFile
                    });
                    return preparedResult.result;
                }
                if (args.server === void 0) {
                    const serverPayloads = [
                        ...servers
                    ].sort((a, b2)=>a.descriptor.serverIdentifier.localeCompare(b2.descriptor.serverIdentifier)).map((server)=>descriptorToServerPayload(server));
                    const totalTools = serverPayloads.reduce((sum, s3)=>sum + s3.tools.length, 0);
                    const preparedResult = await maybeWriteToFile(ctx, writeExecutor, projectDir, meta.toolCallId, useDynamicToolNamespaces ? {
                        mode: "catalog",
                        namespaces: serverPayloads.map((payload)=>toModelFacingServerPayload(payload, true))
                    } : {
                        mode: "catalog",
                        servers: serverPayloads
                    });
                    emitSuccessMetrics(ctx, preparedResult.result, {
                        resultCount: totalTools,
                        payloadBytes: preparedResult.payloadBytes,
                        wroteToFile: preparedResult.wroteToFile
                    });
                    return preparedResult.result;
                }
                let resolvedServer = servers.find((server)=>server.descriptor.serverIdentifier === args.server);
                if (resolvedServer === void 0 && await refreshScopedDiscoveryOnce()) {
                    resolvedServer = servers.find((server)=>server.descriptor.serverIdentifier === args.server);
                }
                if (resolvedServer === void 0) {
                    const availableServers = servers.map((server)=>server.descriptor.serverIdentifier).sort();
                    const error3 = serverNotFoundError(args.server, availableServers, useDynamicToolNamespaces);
                    emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.SERVER_NOT_FOUND, error3);
                    throw error3;
                }
                const serverDetailOptions = {
                    includeSchema: true,
                    trustedFirstParty: dynamicToolRegistry !== void 0 && !dynamicToolRegistry.isEmpty() && isReservedDynamicToolsNamespace(args.server),
                    toolName: args.toolName
                };
                let serverPayload = descriptorToServerPayload(resolvedServer, serverDetailOptions);
                const serverIsUsable = serverPayload.serverStatus === void 0 || serverPayload.serverStatus === "ready";
                const replaceFromRefreshedCatalog = ()=>{
                    const refreshedServer = servers.find((server)=>server.descriptor.serverIdentifier === args.server);
                    if (refreshedServer === void 0) {
                        return false;
                    }
                    resolvedServer = refreshedServer;
                    serverPayload = descriptorToServerPayload(refreshedServer, serverDetailOptions);
                    return true;
                };
                if (args.toolName === void 0) {
                    if (serverPayload.tools.length === 0 && serverIsUsable && await refreshScopedDiscoveryOnce()) {
                        replaceFromRefreshedCatalog();
                    }
                    const preparedResult = await maybeWriteToFile(ctx, writeExecutor, projectDir, meta.toolCallId, useDynamicToolNamespaces ? {
                        mode: "namespace",
                        ...toModelFacingServerPayload(serverPayload, true)
                    } : {
                        mode: "server",
                        ...serverPayload
                    });
                    emitSuccessMetrics(ctx, preparedResult.result, {
                        resultCount: serverPayload.tools.length,
                        payloadBytes: preparedResult.payloadBytes,
                        wroteToFile: preparedResult.wroteToFile
                    });
                    return preparedResult.result;
                }
                let tool = serverPayload.tools.find((t)=>t.tool === args.toolName);
                if (tool === void 0 && serverIsUsable && await refreshScopedDiscoveryOnce() && replaceFromRefreshedCatalog()) {
                    tool = serverPayload.tools.find((t)=>t.tool === args.toolName);
                }
                if (tool === void 0) {
                    if (serverPayload.serverStatus !== void 0 && serverPayload.serverStatus !== "ready") {
                        const serverError = serverPayload.serverError ?? `${useDynamicToolNamespaces ? "Namespace" : "MCP server"} "${args.server}" is ${serverPayload.serverStatus}.`;
                        const error4 = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                            error: serverError,
                            clientVisibleErrorMessage: serverError,
                            modelVisibleErrorMessage: `${serverError} Available tools: ${resolvedServer.descriptor.tools.map((t)=>t.toolName).join(", ")}`
                        });
                        emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.TOOL_NOT_FOUND, error4);
                        throw error4;
                    }
                    if (useDynamicToolNamespaces && dynamicToolRegistry?.isEmpty() === false && isReservedDynamicToolsNamespace(args.server) && dynamicToolRegistry.usesDirectToolRecovery() && dynamicToolRegistry.isStaticTool(args.toolName)) {
                        const directToolMessage = `Tool "${args.toolName}" is already available directly and is not part of dynamic namespace "${args.server}". Invoke "${args.toolName}" directly instead of using dynamic tool discovery or invocation.`;
                        const error4 = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                            error: directToolMessage,
                            clientVisibleErrorMessage: directToolMessage,
                            modelVisibleErrorMessage: directToolMessage
                        });
                        emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.TOOL_NOT_FOUND, error4);
                        throw error4;
                    }
                    const notFoundMessage = useDynamicToolNamespaces ? `Tool "${args.toolName}" not found in namespace "${args.server}".` : `MCP tool "${args.toolName}" not found on server "${args.server}".`;
                    const error3 = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                        error: notFoundMessage,
                        clientVisibleErrorMessage: notFoundMessage,
                        modelVisibleErrorMessage: `${notFoundMessage} Available tools: ${resolvedServer.descriptor.tools.map((t)=>t.toolName).join(", ")}`
                    });
                    emitErrorMetrics(ctx, GET_MCP_TOOLS_FAILURE_REASONS.TOOL_NOT_FOUND, error3);
                    throw error3;
                }
                const content = JSON.stringify(toModelFacingSingleToolPayload(serverPayload, tool, useDynamicToolNamespaces), null, 2);
                const result = createSuccessResult(content);
                emitSuccessMetrics(ctx, result, {
                    resultCount: 1,
                    payloadBytes: Buffer.byteLength(content, "utf8"),
                    wroteToFile: false
                });
                return result;
            }, (result)=>createToolCallProto2(baseArgs, result));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources54(env_1);
        }
    };
    const modelParametersSchema = useDynamicToolNamespaces ? namespaceParametersSchema : serverParametersSchema;
    const parsingParametersSchema = external_exports.preprocess((raw)=>{
        if (!useDynamicToolNamespaces || raw === null || typeof raw !== "object" || Array.isArray(raw)) {
            return raw;
        }
        const input = raw;
        return {
            ...input,
            server: input.namespace
        };
    }, external_exports.object({
        server: external_exports.string().optional(),
        toolName: external_exports.string().optional(),
        pattern: external_exports.string().optional()
    }));
    return createZodAgentTool("GET_MCP_TOOLS", {
        name: getMcpToolsToolName,
        dynamicToolMetaRole: "discovery",
        mcpSnapshotDescriptors: mcpMetaToolOptions.mcpDescriptors,
        descriptionGenerator: (props)=>{
            const callMcpToolName = options2?.callMcpToolName ?? getRequiredToolName(props.allTools, "MCP");
            const unusableStatusList = quotedOrList(options2?.unusableStatuses ?? [
                "needsAuth",
                "error",
                "loading"
            ]);
            const authLines = allowInteractiveMcpAuth ? [
                "",
                useDynamicToolNamespaces ? `MCP authentication: If an MCP-backed namespace has namespaceStatus "needsAuth", or its tool call fails with an authentication/authorization error, authenticate it by calling ${MCP_AUTH_TOOL_NAME2} through ${callMcpToolName} with empty arguments. Then inspect that namespace again and retry if appropriate.` : `MCP authentication: If a relevant server has serverStatus "needsAuth", or if an MCP tool call fails with an authentication/authorization error, authenticate it by calling ${MCP_AUTH_TOOL_NAME2} (via ${callMcpToolName}, with empty arguments), then inspect that server again and retry the original request if appropriate. Do not call ${MCP_AUTH_TOOL_NAME2} just because it is listed, and do not repeatedly call it if authentication did not fix the failure.`
            ] : [
                "",
                options2?.nonInteractiveAuthGuidance ?? (useDynamicToolNamespaces ? 'MCP authentication: If an MCP-backed namespace has namespaceStatus "needsAuth", its tools are unavailable until that MCP integration is authenticated in the Cursor desktop IDE.' : 'MCP authentication: If a server has serverStatus "needsAuth", its tools are not usable in this environment. Ask the user to authenticate that MCP server in the Cursor desktop IDE, then retry.')
            ];
            const builtinToolsListing = omitBuiltinToolNamesFromDescription ? "their names are listed with that namespace in <user_info>, or in the most recent <user_info_catalog_update> block on a later user turn" : dynamicToolRegistry?.getToolNames().join(", ");
            const builtinLines = dynamicToolRegistry !== void 0 && !dynamicToolRegistry.isEmpty() ? [
                "",
                `First-party Cursor tools: the reserved namespace "${CURSOR_DYNAMIC_TOOLS_NAMESPACE}" lists built-in Cursor tools available on demand (${builtinToolsListing}). Discover their schemas here, then invoke them via ${callMcpToolName}; they run natively with their own approvals and rendering.`
            ] : [];
            if (useDynamicToolNamespaces) {
                return [
                    "Discover and inspect tools available through dynamic namespaces, e.g. MCP servers.",
                    "",
                    '1. {"namespace":"<id>"}: returns full input schemas and full descriptions for every tool in that namespace.',
                    '2. {"namespace":"<id>","toolName":"<name>"}: returns the full schema and full description for one tool.',
                    '3. {"pattern":"<regex>"}: searches namespace and tool names across all namespaces using RE2 syntax.',
                    '4. {"namespace":"<id>","pattern":"<regex>"}: searches tool names within that namespace.',
                    "5. No arguments: returns the full catalog. Prefer a namespace or pattern when possible.",
                    "",
                    `Pattern-search and catalog results shorten long descriptions to 200 characters, ending with "${TRUNCATED_DESCRIPTION_SUFFIX}". Namespace and single-tool lookups always return the complete description, so fetch the tool directly when you need the full text.`,
                    `The response includes namespaceStatus for MCP-backed namespaces; do not treat namespaces in ${unusableStatusList} states as usable.`,
                    `Always call this tool to discover a tool's schema before calling it with ${callMcpToolName}.`,
                    ...builtinLines,
                    ...authLines
                ].join("\n");
            }
            return [
                "Discover and inspect MCP tools. There are 5 ways to call this tool. Prefer fetching by server or pattern over listing the full catalog.",
                "",
                '1. {"server":"<id>"}: returns full input schemas and full descriptions for every tool on that server. Preferred when you know the server.',
                '2. {"server":"<id>","toolName":"<name>"}: returns the full schema and full description for one tool.',
                '3. {"pattern":"<regex>"}: searches tool and server names across all servers using RE2 syntax.',
                '4. {"server":"<id>","pattern":"<regex>"}: searches tool names on that server using RE2 syntax.',
                "5. No arguments: returns a catalog of all servers with tool names and short descriptions. Use only as a last resort.",
                "",
                `Pattern-search and catalog results shorten long descriptions to 200 characters, ending with "${TRUNCATED_DESCRIPTION_SUFFIX}". Server and single-tool lookups always return the complete description, so fetch the tool directly when you need the full text.`,
                `The response includes each server's serverStatus; do not treat servers in ${unusableStatusList} states as usable.`,
                `Always call this tool to discover a tool's schema before calling it with ${callMcpToolName}.`,
                ...builtinLines,
                ...authLines
            ].join("\n");
        },
        parameters: modelParametersSchema,
        render: renderResult,
        execute: withSafeParsedArgs(parsingParametersSchema, execute, createToolCallProto2(createCallArgs("unknown-tool-call-id", {}), createErrorResult("Invalid arguments"))),
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createToolCallProto2(createCallArgs("unknown-tool-call-id", {}), createErrorResult(errorMessage4));
        }
    });
};

}
