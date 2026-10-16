import { MCP_TEXT_FILE_THRESHOLD_BYTES } from "../../agent-exec/dist/agent-tools-file.js";
import { execHookWorkspaceRootsKey } from "../../agent-exec/dist/hook-metadata.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { init_node2 } from "../../agent-exec/dist/node.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { McpServerNotFoundError, extractTextFromNonTextContent, isMcpToolNotFoundError } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
import { encodeMcpMetaJson, mcpClientStateToServerStatus, mcpServerUnavailableReason } from "../../dist_exports.js";
import { materializeMcpTextOutput } from "../../esm_exports8.js";
import { init_mcp_file_system_writer } from "./mcp-file-system-writer.js";
import { OperationType, init_pending_decision_provider } from "./pending-decision-provider.js";
import { init_edit_block_handler } from "./utils/edit-block-handler.js";
import { init_dist19 } from "../../mcp-agent-exec/dist/index.js";
import { createInlineTextContentItem, resolveContainedDownloadPath, runMcpPermissionGate, writeMcpTextOutputToFile } from "../../mcp_sandbox_policy_exports.js";
import { Struct, Value } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { ListMcpResourcesError, ListMcpResourcesExecResult, ListMcpResourcesExecResult_McpResource, ListMcpResourcesSuccess, McpError, McpImageContent, McpResult, McpServerNotFound, McpSuccess, McpToolNotFound, McpToolResultContentItem, ReadMcpResourceError, ReadMcpResourceExecResult, ReadMcpResourceNotFound, ReadMcpResourceRejected, ReadMcpResourceSuccess, init_mcp_exec_pb } from "../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_utils_pb } from "../../proto/dist/generated/agent/v1/utils_pb.js";
import { init_image_resize, resizeImageBufferIfNeeded } from "../../utils/dist/image-resize.js";
var import_node_crypto19, import_promises27, import_node_path48, __addDisposableResource26, __disposeResources26, logger22, LocalMcpToolExecutor, LocalListMcpResourcesExecutor, LocalReadMcpResourceExecutor;
export { LocalListMcpResourcesExecutor, LocalMcpToolExecutor, LocalReadMcpResourceExecutor, __addDisposableResource26, __disposeResources26, import_node_crypto19, import_node_path48, import_promises27, logger22 };
var __wakaru_init_mcp5_initialized = false;
export function init_mcp5() {
if (__wakaru_init_mcp5_initialized) return;
__wakaru_init_mcp5_initialized = true;
"use strict";
import_node_crypto19 = require("node:crypto");
import_promises27 = require("node:fs/promises");
import_node_path48 = __toESM(require("node:path"), 1);
init_dist8();
init_node2();
init_dist();
init_dist19();
init_mcp_exec_pb();
init_utils_pb();
init_image_resize();
init_esm2();
init_mcp_file_system_writer();
init_pending_decision_provider();
init_edit_block_handler();
__addDisposableResource26 = function(env, value, async) {
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
__disposeResources26 = (function(SuppressedError2) {
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
logger22 = createLogger("local-exec:mcp");
LocalMcpToolExecutor = class {
    constructor(toolSet, permissionsService, pendingDecisionProvider, projectDir, fileOutputThresholdBytes = MCP_TEXT_FILE_THRESHOLD_BYTES, elicitationFactory, ensureMcpServersLoaded){
        this.toolSet = toolSet;
        this.permissionsService = permissionsService;
        this.pendingDecisionProvider = pendingDecisionProvider;
        this.projectDir = projectDir;
        this.fileOutputThresholdBytes = fileOutputThresholdBytes;
        this.elicitationFactory = elicitationFactory;
        this.ensureMcpServersLoaded = ensureMcpServersLoaded;
    }
    async describeDisconnectedServer(ctx, identifiers) {
        const wanted = new Set(identifiers.filter((identifier2)=>identifier2 !== ""));
        if (wanted.size === 0) {
            return void 0;
        }
        let clients;
        try {
            clients = await this.toolSet.getClients(ctx);
        } catch  {
            return void 0;
        }
        const match2 = Object.entries(clients).find(([clientKey2, client2])=>wanted.has(clientKey2) || wanted.has(client2.serverName));
        if (match2 === void 0) {
            return void 0;
        }
        const [clientKey, client] = match2;
        let state;
        try {
            state = await client.getState(ctx);
        } catch  {
            return void 0;
        }
        if (state.kind === "ready") {
            return void 0;
        }
        const reason = mcpServerUnavailableReason(mcpClientStateToServerStatus(state));
        if (reason === void 0) {
            return void 0;
        }
        const detail = state.kind === "error" && state.message ? ` (${state.message})` : "";
        return `MCP server "${clientKey}" has no callable tools right now. ${reason}${detail}`;
    }
    async execute(parentCtx, args) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource26(env_1, createSpan(parentCtx.withName("LocalMcpToolExecutor.execute")), false);
            const ctx = span.ctx;
            const serverIdentifier = args.serverIdentifier || args.providerIdentifier;
            await this.ensureMcpServersLoaded?.(ctx, [
                serverIdentifier
            ]);
            const tools = await this.toolSet.getTools(ctx);
            const availableServers = Array.from(new Set(tools.map((tool)=>tool.clientKey))).sort();
            const toolDef = tools.find((t)=>t.clientKey === serverIdentifier && t.toolName === args.toolName);
            const gateResult = await runMcpPermissionGate(ctx, args, {
                permissionsService: this.permissionsService,
                pendingDecisionProvider: this.pendingDecisionProvider,
                toolDef
            });
            if (gateResult !== void 0) {
                return gateResult;
            }
            const toolSet = await this.toolSet.getToolSet(ctx);
            let result;
            try {
                result = await toolSet.execute(args.name, Object.fromEntries(Object.entries(args.args).map(([key, value])=>[
                        key,
                        value.toJson()
                    ])), args.toolCallId, this.elicitationFactory);
            } catch (error3) {
                let mappedError = error3;
                if (isMcpToolNotFoundError(mappedError) && args.providerIdentifier.length > 0 && !tools.some((tool)=>tool.clientKey === args.providerIdentifier || tool.providerIdentifier === args.providerIdentifier)) {
                    mappedError = new McpServerNotFoundError(args.providerIdentifier, availableServers);
                }
                if (mappedError instanceof McpServerNotFoundError) {
                    const disconnected = await this.describeDisconnectedServer(ctx, [
                        serverIdentifier,
                        args.providerIdentifier
                    ]);
                    if (disconnected !== void 0) {
                        return new McpResult({
                            result: {
                                case: "error",
                                value: new McpError({
                                    error: disconnected
                                })
                            }
                        });
                    }
                    return new McpResult({
                        result: {
                            case: "serverNotFound",
                            value: new McpServerNotFound({
                                name: mappedError.serverName,
                                availableServers: mappedError.availableServers
                            })
                        }
                    });
                }
                if (isMcpToolNotFoundError(mappedError)) {
                    return new McpResult({
                        result: {
                            case: "toolNotFound",
                            value: new McpToolNotFound({
                                name: mappedError.toolName,
                                availableTools: mappedError.availableTools
                            })
                        }
                    });
                }
                throw mappedError;
            }
            const contentItems = [];
            for (const item of result.content){
                const itemType = item.type;
                if (itemType === "text") {
                    const textItem = item;
                    contentItems.push(createInlineTextContentItem(textItem.text));
                } else if (itemType === "resource") {
                    const resourceItem = item;
                    if (resourceItem.resource?.text) {
                        contentItems.push(createInlineTextContentItem(resourceItem.resource.text));
                    }
                } else if (itemType === "image") {
                    const imageItem = item;
                    const dataBytes = Buffer.from(imageItem.data, "base64");
                    const resizedImage = await resizeImageBufferIfNeeded(dataBytes);
                    contentItems.push(new McpToolResultContentItem({
                        content: {
                            case: "image",
                            value: new McpImageContent({
                                data: resizedImage.data,
                                mimeType: resizedImage.mimeType
                            })
                        }
                    }));
                } else if (itemType !== "image") {
                    const textContent = extractTextFromNonTextContent(item);
                    contentItems.push(createInlineTextContentItem(textContent));
                }
            }
            const materializedContentItems = await materializeMcpTextOutput({
                contentItems,
                thresholdBytes: this.fileOutputThresholdBytes,
                write: (text4)=>writeMcpTextOutputToFile(text4, this.projectDir)
            });
            if (materializedContentItems === void 0) {
                throw new Error("Failed to materialize MCP text output");
            }
            const structuredContentForProto = result.structuredContent && typeof result.structuredContent === "object" && !Array.isArray(result.structuredContent) ? Struct.fromJson(result.structuredContent) : void 0;
            const successValue = new McpSuccess({
                content: materializedContentItems,
                isError: result.isError,
                structuredContent: structuredContentForProto
            });
            return new McpResult({
                result: {
                    case: "success",
                    value: successValue
                }
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources26(env_1);
        }
    }
};
LocalListMcpResourcesExecutor = class {
    constructor(mcpLease, ensureMcpServersLoaded){
        this.mcpLease = mcpLease;
        this.ensureMcpServersLoaded = ensureMcpServersLoaded;
    }
    async execute(parentCtx, args) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource26(env_2, createSpan(parentCtx.withName("LocalListMcpResourcesExecutor.execute")), false);
            const ctx = span.ctx;
            try {
                if (args.server) {
                    await this.ensureMcpServersLoaded?.(ctx, [
                        args.server
                    ]);
                    const clients2 = await this.mcpLease.getClients(ctx);
                    const client = clients2[args.server] ?? Object.values(clients2).find((candidate)=>candidate.serverName === args.server);
                    if (!client) {
                        return new ListMcpResourcesExecResult({
                            result: {
                                case: "error",
                                value: new ListMcpResourcesError({
                                    error: `Server "${args.server}" not found`
                                })
                            }
                        });
                    }
                    const resources = await this.listResourcesFromClient(ctx, client, args.server, true);
                    return new ListMcpResourcesExecResult({
                        result: {
                            case: "success",
                            value: new ListMcpResourcesSuccess({
                                resources
                            })
                        }
                    });
                }
                const clients = await this.mcpLease.getClients(ctx);
                const enabledServerNames = new Set();
                const tools = await this.mcpLease.getTools(ctx);
                for (const tool of tools){
                    enabledServerNames.add(tool.providerIdentifier);
                    enabledServerNames.add(`user-${tool.providerIdentifier}`);
                }
                const allResources = [];
                for (const [serverName, client] of Object.entries(clients)){
                    if (enabledServerNames.size > 0 && !enabledServerNames.has(serverName)) {
                        continue;
                    }
                    const resources = await this.listResourcesFromClient(ctx, client, serverName);
                    allResources.push(...resources);
                }
                return new ListMcpResourcesExecResult({
                    result: {
                        case: "success",
                        value: new ListMcpResourcesSuccess({
                            resources: allResources
                        })
                    }
                });
            } catch (error3) {
                const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
                return new ListMcpResourcesExecResult({
                    result: {
                        case: "error",
                        value: new ListMcpResourcesError({
                            error: `Failed to list MCP resources: ${errorMessage4}`
                        })
                    }
                });
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources26(env_2);
        }
    }
    async listResourcesFromClient(ctx, client, serverName, initialize = false) {
        const state = await client.getState(ctx);
        if (state.kind !== "ready" && !(initialize && state.kind === "loading")) {
            return [];
        }
        const result = await client.listResources(ctx);
        if (!result || !result.resources) {
            return [];
        }
        return result.resources.map((resource)=>new ListMcpResourcesExecResult_McpResource({
                uri: resource.uri,
                name: resource.name,
                description: resource.description,
                mimeType: resource.mimeType,
                server: serverName,
                annotations: resource.annotations
            }));
    }
};
LocalReadMcpResourceExecutor = class {
    constructor(mcpLease, projectDir = ".", permissionsService, workspacePaths = [], pendingDecisionProvider, ensureMcpServersLoaded){
        this.mcpLease = mcpLease;
        this.projectDir = projectDir;
        this.permissionsService = permissionsService;
        this.pendingDecisionProvider = pendingDecisionProvider;
        this.ensureMcpServersLoaded = ensureMcpServersLoaded;
        this.workspacePaths = workspacePaths.filter((p2)=>p2.length > 0);
    }
    resolveProjectDir(ctx) {
        const ctxRoots = ctx.get(execHookWorkspaceRootsKey);
        const ctxRoot = ctxRoots?.find((p2)=>typeof p2 === "string" && p2.length > 0);
        if (ctxRoot) {
            return ctxRoot;
        }
        if (this.workspacePaths.length > 0) {
            return this.workspacePaths[0];
        }
        return this.projectDir;
    }
    async execute(parentCtx, args) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource26(env_3, createSpan(parentCtx.withName("LocalReadMcpResourceExecutor.execute")), false);
            const ctx = span.ctx;
            const smartModeApprovalReason = args.smartModeApproval?.reason;
            if (smartModeApprovalReason !== void 0) {
                if (this.pendingDecisionProvider === void 0) {
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "error",
                            value: new ReadMcpResourceError({
                                uri: args.uri,
                                error: "Auto-review approval provider is not configured"
                            })
                        }
                    });
                }
                const approval = await this.pendingDecisionProvider.requestApproval({
                    type: OperationType.Mcp,
                    details: {
                        name: "FetchMcpResource",
                        toolName: "FetchMcpResource",
                        providerIdentifier: args.server,
                        args: {
                            server: Value.fromJson(args.server),
                            uri: Value.fromJson(args.uri),
                            ...args.downloadPath !== void 0 ? {
                                downloadPath: Value.fromJson(args.downloadPath)
                            } : {}
                        },
                        reason: "smartMode",
                        canAllowlist: false,
                        smartModeApprovalReason,
                        smartModeApprovalRequestId: args.smartModeApproval?.requestId
                    },
                    toolCallId: args.toolCallId
                });
                if (!approval.approved) {
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "rejected",
                            value: new ReadMcpResourceRejected({
                                reason: `User rejected MCP resource fetch${approval.reason ? ` - ${approval.reason}` : ""}`
                            })
                        }
                    });
                }
            }
            await this.ensureMcpServersLoaded?.(ctx, [
                args.server
            ]);
            const clients = await this.mcpLease.getClients(ctx);
            const client = clients[args.server] ?? Object.values(clients).find((candidate)=>candidate.serverName === args.server);
            if (!client) {
                return new ReadMcpResourceExecResult({
                    result: {
                        case: "error",
                        value: new ReadMcpResourceError({
                            uri: args.uri,
                            error: `Server "${args.server}" not found`
                        })
                    }
                });
            }
            try {
                const state = await client.getState(ctx);
                if (state.kind !== "ready") {
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "error",
                            value: new ReadMcpResourceError({
                                uri: args.uri,
                                error: `Server "${args.server}" is not ready`
                            })
                        }
                    });
                }
                const result = await client.readResource(ctx, {
                    uri: args.uri
                });
                if (!result || !result.contents || result.contents.length === 0) {
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "notFound",
                            value: new ReadMcpResourceNotFound({
                                uri: args.uri
                            })
                        }
                    });
                }
                const content = result.contents[0];
                if (args.downloadPath) {
                    const downloadFullPath = await resolveContainedDownloadPath(this.resolveProjectDir(ctx), args.downloadPath);
                    if (content.text) {
                        await (0, import_promises27.writeFile)(downloadFullPath, content.text, "utf8");
                    } else if (content.blob) {
                        const blobData = Buffer.from(content.blob, "base64");
                        await (0, import_promises27.writeFile)(downloadFullPath, blobData);
                    }
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "success",
                            value: new ReadMcpResourceSuccess({
                                uri: args.uri,
                                name: content.name,
                                description: content.description,
                                mimeType: content.mimeType
                            })
                        }
                    });
                }
                if (content.text) {
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "success",
                            value: new ReadMcpResourceSuccess({
                                uri: args.uri,
                                name: content.name,
                                description: content.description,
                                mimeType: content.mimeType,
                                annotations: content.annotations,
                                metaJson: encodeMcpMetaJson(content._meta),
                                content: {
                                    case: "text",
                                    value: content.text
                                }
                            })
                        }
                    });
                }
                if (content.blob) {
                    const blobData = Buffer.from(content.blob, "base64");
                    return new ReadMcpResourceExecResult({
                        result: {
                            case: "success",
                            value: new ReadMcpResourceSuccess({
                                uri: args.uri,
                                name: content.name,
                                description: content.description,
                                mimeType: content.mimeType,
                                annotations: content.annotations,
                                metaJson: encodeMcpMetaJson(content._meta),
                                content: {
                                    case: "blob",
                                    value: blobData
                                }
                            })
                        }
                    });
                }
                return new ReadMcpResourceExecResult({
                    result: {
                        case: "error",
                        value: new ReadMcpResourceError({
                            uri: args.uri,
                            error: "Failed to read resource"
                        })
                    }
                });
            } catch (error3) {
                const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
                logger22.warn(ctx, "LocalReadMcpResourceExecutor.execute failed", {
                    server: args.server,
                    hasDownloadPath: Boolean(args.downloadPath),
                    errorName: error3 instanceof Error ? error3.name : typeof error3,
                    errorMessage: errorMessage4
                });
                return new ReadMcpResourceExecResult({
                    result: {
                        case: "error",
                        value: new ReadMcpResourceError({
                            uri: args.uri,
                            error: `Failed to read MCP resource: ${errorMessage4}`
                        })
                    }
                });
            }
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources26(env_3);
        }
    }
};

}
