import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { listMcpResourcesExecutorResource } from "../../../../agent-exec/dist/mcp.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { CustomToolCallError, ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../common.js";
import { ToolErrorClassification, init_core5 } from "../core.js";
import { init_mcp_error_classification } from "./mcp-error-classification.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { classifyMcpErrorMessage, createStringResult, generateSeededUuid, isMcpServerNotFoundError, jsonSchema } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist25 } from "../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ListMcpResourcesError, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ListMcpResourcesRejected, init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_mcp_resource_tool_pb } from "../../../../proto/dist/generated/agent/v1/mcp_resource_tool_pb.js";
import { createListMcpResourcesToolCall } from "../../../../tree_chunk_napi_exports.js";
var __addDisposableResource105, __disposeResources105, createListMcpResourcesTool;
export { __addDisposableResource105, __disposeResources105, createListMcpResourcesTool };
var __wakaru_init_list_mcp_resources_initialized = false;
export function init_list_mcp_resources() {
if (__wakaru_init_list_mcp_resources_initialized) return;
__wakaru_init_list_mcp_resources_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_mcp_exec_pb();
init_mcp_resource_tool_pb();
init_dist25();
init_zod();
init_common9();
init_core5();
init_mcp_error_classification();
__addDisposableResource105 = function(env, value, async) {
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
__disposeResources105 = (function(SuppressedError2) {
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
createListMcpResourcesTool = (resourceAccessor, name17 = "ListMcpResources")=>{
    const executor = resourceAccessor.get(listMcpResourcesExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource105(env_1, createSpan(parentCtx.withName("listMcpResourcesExecute")), false);
            const args = rawArgs;
            const baseArgs = new ListMcpResourcesExecArgs({
                server: args.server
            });
            const toolCall = createListMcpResourcesToolCall(baseArgs);
            const execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, toolCall, meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                const result = await executor.execute(ctx, baseArgs, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                const resultCase = result.result.case;
                switch(resultCase){
                    case "success":
                        return result;
                    case "error":
                        {
                            const errorMsg = result.result.value.error;
                            const classification = classifyMcpErrorMessage(errorMsg);
                            if (classification !== void 0 && classification !== ToolErrorClassification.OTHER_ERROR) {
                                throw new CustomToolCallError(classification, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                            }
                            if (isMcpServerNotFoundError(errorMsg)) {
                                throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                            }
                            throw new Error(errorMsg);
                        }
                    case "rejected":
                        throw new ToolCallRejectedError(result.result.value.reason || "List MCP resources rejected");
                    case void 0:
                        {
                            const errorMsg = "List MCP resources executor returned result without case";
                            throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                error: errorMsg,
                                clientVisibleErrorMessage: errorMsg,
                                modelVisibleErrorMessage: "The MCP resources executor returned an empty result. This usually means the client is outdated or incompatible; update the client and retry."
                            });
                        }
                    default:
                        {
                            const _exhaustive = resultCase;
                            const errorMsg = `Unexpected result case: ${_exhaustive}`;
                            throw new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                error: errorMsg,
                                clientVisibleErrorMessage: errorMsg,
                                modelVisibleErrorMessage: errorMsg
                            });
                        }
                }
            }, (result)=>createListMcpResourcesToolCall(baseArgs, result), meta.hookContextCollector);
            return execResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources105(env_1);
        }
    };
    const render2 = async (_ctx, execResult, _props)=>{
        if (!execResult) {
            return createStringResult("Unknown error");
        }
        if (execResult.result.case === "error") {
            return createStringResult(`Error listing MCP resources: ${execResult.result.value.error}`);
        }
        if (execResult.result.case === "rejected") {
            return createStringResult(`List MCP resources rejected: ${execResult.result.value.reason}`);
        }
        if (execResult.result.case !== "success") {
            return createStringResult("Unknown error");
        }
        const resources = execResult.result.value.resources;
        if (resources.length === 0) {
            return createStringResult("No MCP resources found.");
        }
        const resourceList = resources.map((resource)=>{
            const parts = [
                `\u2022 ${resource.name || resource.uri}`,
                resource.description ? ` - ${resource.description}` : "",
                ` (${resource.server})`,
                resource.mimeType ? ` [${resource.mimeType}]` : "",
                `
  URI: ${resource.uri}`
            ];
            return parts.join("");
        }).join("\n");
        return createStringResult(`Found ${resources.length} MCP resource(s):
${resourceList}`);
    };
    return {
        toolIdentifier: "LIST_MCP_RESOURCES",
        name: name17,
        descriptionGenerator: (_props)=>"List available resources from configured MCP servers. Each returned resource will include all standard MCP resource fields plus a 'server' field indicating which server the resource belongs to. MCP resources are _not_ the same as tools, so don't call this function to discover MCP tools.",
        parameters: jsonSchema({
            type: "object",
            properties: {
                server: {
                    type: "string",
                    description: "Optional server identifier to filter resources by. If not provided, resources from all servers will be returned."
                }
            },
            required: []
        }),
        render: render2,
        execute: withSafeParsedArgs(external_exports.object({
            server: external_exports.string().optional()
        }), execute, createListMcpResourcesToolCall(new ListMcpResourcesExecArgs())),
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createListMcpResourcesToolCall(new ListMcpResourcesExecArgs(), new ListMcpResourcesExecResult({
                    result: {
                        case: "rejected",
                        value: new ListMcpResourcesRejected({
                            reason: error3.message
                        })
                    }
                }));
            }
            const errorMessage4 = error3 instanceof CustomToolCallError ? error3.modelVisibleErrorMessage : error3 instanceof Error ? error3.message : String(error3);
            return createListMcpResourcesToolCall(new ListMcpResourcesExecArgs(), new ListMcpResourcesExecResult({
                result: {
                    case: "error",
                    value: new ListMcpResourcesError({
                        error: errorMessage4
                    })
                }
            }));
        }
    };
};

}
